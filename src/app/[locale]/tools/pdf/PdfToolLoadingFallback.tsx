"use client";

import { usePathname } from "next/navigation";
import useToolPageContent from "@/hooks/useToolPageContent";
import { asMap, asText } from "@/lib/tool-ui-helpers";

export default function PdfToolLoadingFallback() {
  const pathname = usePathname() ?? "";
  const metaPath = pathname.includes("merge-pdf")
    ? "/tools/pdf/merge-pdf"
    : "/tools/pdf/image-to-pdf";
  const page = useToolPageContent(metaPath);
  const ui = asMap(page?.ui);
  const text =
    asText(ui.loadingTool) ||
    asText(ui.loadingConverter) ||
    "Loading...";

  return (
    <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
      {text}
    </div>
  );
}
