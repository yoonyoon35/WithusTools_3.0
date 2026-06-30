"use client";

import * as React from "react";
import { Clipboard, Copy, Download, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  copyElementAsImage,
  copyTextToClipboard,
  downloadElementAsPng,
  downloadTextFile,
  showExportToast,
} from "@/lib/calculator-result-export";
import { cn } from "@/lib/utils";

export interface CalculatorResultExportButtonsProps {
  disabled?: boolean;
  getText: () => string;
  captureRef: React.RefObject<HTMLElement | null>;
  filenameBase: string;
  className?: string;
}

export function CalculatorResultExportButtons({
  disabled,
  getText,
  captureRef,
  filenameBase,
  className,
}: CalculatorResultExportButtonsProps) {
  const [busy, setBusy] = React.useState<string | null>(null);

  const run = async (key: string, task: () => Promise<void>, successMessage: string) => {
    if (disabled || busy) return;
    setBusy(key);
    try {
      await task();
      showExportToast(successMessage);
    } catch (error) {
      if (error instanceof Error && error.message === "CLIPBOARD_FALLBACK_DOWNLOAD") {
        showExportToast("클립보드 미지원 — PNG 파일로 저장했습니다.");
        return;
      }
      const detail = error instanceof Error ? error.message : "";
      window.alert(
        detail
          ? `내보내기에 실패했습니다.\n\n${detail}`
          : "내보내기에 실패했습니다. 브라우저 권한 또는 네트워크를 확인해 주세요.",
      );
    } finally {
      setBusy(null);
    }
  };

  const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");

  return (
    <div className={cn("flex flex-wrap justify-end gap-2", className)} role="group" aria-label="계산 결과 내보내기">
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 gap-1.5 px-2.5 text-xs"
        disabled={disabled || busy != null}
        onClick={() =>
          void run("copy-text", async () => copyTextToClipboard(getText()), "결과 텍스트가 복사되었습니다.")
        }
      >
        <Copy className="size-3.5" aria-hidden />
        텍스트 복사
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 gap-1.5 px-2.5 text-xs"
        disabled={disabled || busy != null}
        onClick={() =>
          void run(
            "download-text",
            async () => downloadTextFile(getText(), `${filenameBase}_${stamp}.txt`),
            "텍스트 파일을 저장했습니다.",
          )
        }
      >
        <Download className="size-3.5" aria-hidden />
        텍스트 저장
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 gap-1.5 px-2.5 text-xs"
        disabled={disabled || busy != null}
        onClick={() => {
          const el = captureRef.current;
          if (!el) return;
          void run("copy-image", async () => copyElementAsImage(el), "결과 이미지가 클립보드에 복사되었습니다.");
        }}
      >
        <Clipboard className="size-3.5" aria-hidden />
        이미지 복사
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 gap-1.5 px-2.5 text-xs"
        disabled={disabled || busy != null}
        onClick={() => {
          const el = captureRef.current;
          if (!el) return;
          void run(
            "download-image",
            async () => downloadElementAsPng(el, filenameBase),
            "PNG 이미지를 저장했습니다.",
          );
        }}
      >
        <ImageIcon className="size-3.5" aria-hidden />
        이미지 저장
      </Button>
    </div>
  );
}
