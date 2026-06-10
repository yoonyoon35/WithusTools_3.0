"use client";

import useToolPageContent from "@/hooks/useToolPageContent";
import { asMap, asText } from "@/lib/tool-ui-helpers";

const boxClass =
  "mx-auto mb-6 max-w-2xl rounded-lg border border-amber-500/25 bg-amber-950/15 px-4 py-3 text-sm leading-relaxed text-slate-400";

type DisclaimerProps = {
  metaPath: string;
};

export function HangulToKanaDisclaimer({ metaPath }: DisclaimerProps) {
  const page = useToolPageContent(metaPath);
  const ui = page?.ui;
  const toolUi = asMap(ui);

  if (!ui) return null;

  return (
    <aside className={boxClass} role="note" aria-label={asText(toolUi.ariaLabel)}>
      <p>
        <span className="font-medium text-amber-100/90">{asText(toolUi.limitationLabel)}</span>
        {asText(toolUi.body)}
      </p>
    </aside>
  );
}

export function KanaToHangulDisclaimer({ metaPath }: DisclaimerProps) {
  const page = useToolPageContent(metaPath);
  const ui = page?.ui;
  const toolUi = asMap(ui);

  if (!ui) return null;

  return (
    <aside className={boxClass} role="note" aria-label={asText(toolUi.ariaLabel)}>
      <p>
        <span className="font-medium text-amber-100/90">{asText(toolUi.limitationLabel)}</span>
        {asText(toolUi.body)}
      </p>
    </aside>
  );
}
