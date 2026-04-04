import type { ColorFormatKey } from "@/utils/colorFormatConversions";

/** Shown on dedicated converter pages where input or output is CMYK. */
export default function CmykAccuracyNote({
  fromKey,
  toKey,
}: {
  fromKey: ColorFormatKey;
  toKey: ColorFormatKey;
}) {
  if (fromKey !== "cmyk" && toKey !== "cmyk") return null;

  return (
    <section
      className="mt-6 rounded-xl border border-amber-500/25 bg-amber-500/[0.06] p-5 sm:p-6"
      aria-label="Note about CMYK accuracy"
    >
      <h2 className="mb-2 text-base font-semibold text-amber-100/90">CMYK and “exact” values</h2>
      <div className="space-y-2 text-sm leading-relaxed text-slate-400">
        <p>
          CMYK describes ink on paper; on screen we still use sRGB. This tool uses a simple 0–100% model for
          preview—not a specific printer ICC profile—so it will not match Photoshop or print shops exactly.
        </p>
        <p>
          When CMYK is shown as whole percentages, several different RGB colors can round to the same CMYK string.
          That is normal: CMYK→RGB is not unique. Here, CMYK copied from the Color Picker is converted so it matches
          the same HEX/RGB shown beside that color on the picker.
        </p>
        <p>
          For web and UI work, treat <span className="text-slate-300">HEX / RGB</span> as the stable reference; use
          CMYK as an approximate print-oriented hint.
        </p>
      </div>
    </section>
  );
}
