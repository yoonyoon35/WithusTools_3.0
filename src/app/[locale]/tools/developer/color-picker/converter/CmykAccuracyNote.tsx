import type { ColorFormatKey } from "@/utils/colorFormatConversions";
import { asMap, asText } from "@/lib/tool-ui-helpers";

/** Shown on dedicated converter pages where input or output is CMYK. */
export default function CmykAccuracyNote({
  fromKey,
  toKey,
  ui,
}: {
  fromKey: ColorFormatKey;
  toKey: ColorFormatKey;
  ui?: unknown;
}) {
  const pageUi = asMap(ui);
  if (fromKey !== "cmyk" && toKey !== "cmyk") return null;

  return (
    <section
      className="mt-6 rounded-xl border border-amber-500/25 bg-amber-500/[0.06] p-5 sm:p-6"
      aria-label={asText(pageUi.cmykNoteAria)}
    >
      <h2 className="mb-2 text-base font-semibold text-amber-100/90">{asText(pageUi.cmykNoteTitle)}</h2>
      <div className="space-y-2 text-sm leading-relaxed text-slate-400">
        <p>{asText(pageUi.cmykNoteP1)}</p>
        <p>{asText(pageUi.cmykNoteP2)}</p>
        <p>{asText(pageUi.cmykNoteP3)}</p>
      </div>
    </section>
  );
}
