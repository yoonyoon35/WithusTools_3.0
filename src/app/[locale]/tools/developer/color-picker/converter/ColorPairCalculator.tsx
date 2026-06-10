"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import useToolPageContent from "@/hooks/useToolPageContent";
import { asMap, asText } from "@/lib/tool-ui-helpers";
import {
  convertColorString,
  getDefaultColorInput,
  type ColorFormatKey,
} from "@/utils/colorFormatConversions";
import { colorFormatLabel, localizeColorError } from "./colorPairUi";

interface ColorPairCalculatorProps {
  fromKey: ColorFormatKey;
  toKey: ColorFormatKey;
  metaPath?: string;
}

function normalizeMetaPath(pathname: string): string {
  const noLocale = pathname.replace(/^\/[^/]+(?=\/tools\/)/, "");
  return noLocale.startsWith("/tools/") ? noLocale : "/tools/developer/color-picker/converter/hex-to-rgb";
}

export default function ColorPairCalculator({ fromKey, toKey, metaPath }: ColorPairCalculatorProps) {
  const pathname = usePathname();
  const page = useToolPageContent(metaPath ?? normalizeMetaPath(pathname));
  const ui = page?.ui;
  const toolUi = asMap(ui);
  const labels = asMap(toolUi.labels);
  const messages = asMap(toolUi.messages);

  const [fromValue, setFromValue] = useState(() => getDefaultColorInput(fromKey));
  const [toValue, setToValue] = useState("");
  const [calculationLines, setCalculationLines] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fromLabel = colorFormatLabel(ui, fromKey, "long");
  const toLabel = colorFormatLabel(ui, toKey, "long");
  const fromShort = colorFormatLabel(ui, fromKey, "short");
  const toShort = colorFormatLabel(ui, toKey, "short");

  useEffect(() => {
    setFromValue(getDefaultColorInput(fromKey));
  }, [fromKey]);

  const showToast = (message: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
      toastTimeoutRef.current = null;
    }, 2500);
  };

  const convert = useCallback(() => {
    const out = convertColorString(fromKey, toKey, fromValue);
    if (!out.ok) {
      setToValue("");
      setCalculationLines([out.error]);
      return;
    }
    setToValue(out.result);
    setCalculationLines(out.calculationSteps);
  }, [fromValue, fromKey, toKey]);

  useEffect(() => {
    convert();
  }, [convert]);

  const copyResult = async () => {
    if (!toValue) {
      showToast(asText(messages.noResultToCopy));
      return;
    }
    try {
      await navigator.clipboard.writeText(toValue);
      showToast(asText(messages.copied));
    } catch {
      showToast(asText(messages.copyFailed));
    }
  };

  const inputCls =
    "rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  if (!ui) return null;

  return (
    <div className="relative">
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-slate-100 shadow-lg ring-1 ring-slate-700"
        >
          {toast}
        </div>
      )}
      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">{asText(labels.calculator)}</h2>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {asText(labels.input)} ({fromShort})
            </label>
            <input
              type="text"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              placeholder={getDefaultColorInput(fromKey)}
              className={`${inputCls} font-mono text-sm`}
              aria-label={`Color value in ${fromLabel}`}
              autoComplete="off"
              spellCheck={false}
            />
            <p className="text-sm text-slate-400">
              {asText(labels.fromPrefix)}{" "}
              <span className="font-medium text-slate-200">{fromLabel}</span>
            </p>
          </div>

          <div className="hidden shrink-0 pb-8 text-slate-500 sm:block" aria-hidden>
            →
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {asText(labels.result)} ({toShort})
            </label>
            <input
              type="text"
              value={toValue}
              readOnly
              className={`${inputCls} cursor-default bg-slate-800/70 font-mono text-sm`}
              aria-label={`Result in ${toLabel}`}
            />
            <p className="text-sm text-slate-400">
              {asText(labels.toPrefix)}{" "}
              <span className="font-medium text-slate-200">{toLabel}</span>
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
          <div
            className="min-w-0 flex-1 space-y-2 font-mono text-xs leading-relaxed text-slate-400 sm:text-sm"
            aria-label="Conversion breakdown"
          >
            {calculationLines.map((line, i) => (
              <p key={i} className="break-words">
                {i === 0 ? (
                  <span className="text-slate-300">{localizeColorError(line, toolUi)}</span>
                ) : (
                  line
                )}
              </p>
            ))}
          </div>
          <button
            type="button"
            onClick={copyResult}
            className="shrink-0 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700"
          >
            {asText(labels.copyResult)}
          </button>
        </div>
      </div>
    </div>
  );
}
