import Link from "next/link";
import {
  COLOR_FORMAT_LABELS,
  getAllColorFormatPairs,
  getCanonicalColorPairSlug,
  type ColorFormatKey,
} from "@/utils/colorFormatConversions";

export default function ColorPairCrossLinks({
  fromKey,
  toKey,
}: {
  fromKey: ColorFormatKey;
  toKey: ColorFormatKey;
}) {
  const others = getAllColorFormatPairs().filter((p) => !(p.from === fromKey && p.to === toKey));

  const scored = others.map((p) => {
    let score = 0;
    if (p.from === fromKey || p.to === toKey) score += 2;
    if (p.from === toKey || p.to === fromKey) score += 1;
    return { p, score };
  });
  scored.sort((a, b) => b.score - a.score || `${a.p.from}-${a.p.to}`.localeCompare(`${b.p.from}-${b.p.to}`));

  const pick = scored.slice(0, 12).map((x) => x.p);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-2 text-lg font-semibold text-slate-200">More color format converters</h2>
      <p className="mb-4 text-sm leading-relaxed text-slate-500">
        Other dedicated pages (fixed input and output types). Open the Color Picker for the full list.
      </p>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {pick.map(({ from, to }) => {
          const href = `/tools/developer/color-picker/converter/${getCanonicalColorPairSlug(from, to)}`;
          const a = COLOR_FORMAT_LABELS[from].short;
          const b = COLOR_FORMAT_LABELS[to].short;
          return (
            <li key={`${from}-${to}`}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800/60"
              >
                <span className="font-medium text-slate-200">
                  {a} to {b} Converter
                </span>
                <span className="mt-0.5 text-xs text-slate-500">
                  {a} to {b}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
