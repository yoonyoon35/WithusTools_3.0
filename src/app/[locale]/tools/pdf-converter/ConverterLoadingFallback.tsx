"use client";

import { useParams } from "next/navigation";
import useToolPageContent from "@/hooks/useToolPageContent";
import { asMap, asText } from "@/lib/tool-ui-helpers";

export default function ConverterLoadingFallback() {
  const params = useParams();
  const format = typeof params?.format === "string" ? params.format : "jpg";
  const page = useToolPageContent(`/tools/pdf-converter/${format}`);
  const ui = asMap(page?.ui);
  const text = asText(ui.loadingConverter) || "Loading converter...";

  return (
    <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
      {text}
    </div>
  );
}
