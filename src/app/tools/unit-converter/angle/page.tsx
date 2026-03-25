import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import {
  getCanonicalAngleSlug,
  ANGLE_HUB_KEYS,
  ANGLE_KEY_TO_SLUG,
  ANGLE_UNITS,
} from "@/utils/conversions";

export const metadata: Metadata = createMetadata({
  title: "Angle Converter | Degrees, Radians, Mils, Arc Minutes",
  description:
    "Convert angle: degrees, radians, gradians, revolutions, arc minutes, arcseconds, milliradians, NATO mils. Dedicated pair pages, formulas, and tables.",
  path: "/tools/unit-converter/angle",
  keywords: [
    "angle converter",
    "degrees to radians",
    "radians to degrees",
    "NATO mil",
    "gradians",
    "arc minutes",
    "milliradians",
    "plane angle",
    "withustools",
  ],
});

/** Hub-only guide: avoid duplicating formulas and long unit copy on dedicated pair pages. */
const ANGLE_GUIDE = {
  quickStart: [
    "Enter a value and pick source and target units. The result updates as you type.",
    "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported angle unit.",
  ],
  deeper: [
    "Need formulas, worked examples, and tables for one pair (e.g. degrees to radians)? Use a dedicated converter from the list above.",
    "Short answers to common questions are in the FAQ section above. All calculations run in your browser; turns, degrees, arc minutes, arcseconds, gradians, radians, milliradians, and NATO mils are supported.",
  ],
  exampleUses: [
    "Math and CAD: degrees vs radians in trig and graphics APIs.",
    "Astronomy and surveying: arc minutes, arcseconds, and gradians.",
    "Ballistics and tactical optics: milliradians and NATO mils vs degrees.",
  ],
};

const ANGLE_PAIR_LINKS: { from: string; to: string }[] = (() => {
  const pairs: { from: string; to: string }[] = [];
  for (const from of ANGLE_HUB_KEYS) {
    for (const to of ANGLE_HUB_KEYS) {
      if (from === to) continue;
      pairs.push({ from, to });
    }
  }
  return pairs;
})();

const ANGLE_FAQ_LINKS = getFaqEntriesByCategory("angle");

export default function AngleConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Angle Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between revolutions, degrees, arc minutes, arcseconds, gradians, radians, milliradians, and NATO
        mils (6400). For geometry, astronomy, surveying, and optics. All Unit Conversions panel included.
      </p>

      <UnitConverter category="angle" title="Convert Angle" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">
          Dedicated converters (turn, deg, arcmin, arcsec, grad, rad, mrad, mil)
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          {ANGLE_PAIR_LINKS.length} pages — every pair of units below, with fixed input/output, formulas,
          examples, and conversion tables.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ANGLE_PAIR_LINKS.map(({ from, to }) => {
            const href = `/tools/unit-converter/angle/${getCanonicalAngleSlug(from, to)}`;
            const fromName = ANGLE_UNITS[from]?.nameSg ?? ANGLE_UNITS[from]?.name ?? from;
            const toName = ANGLE_UNITS[to]?.nameSg ?? ANGLE_UNITS[to]?.name ?? to;
            const fromSlug = ANGLE_KEY_TO_SLUG[from] ?? from;
            const toSlug = ANGLE_KEY_TO_SLUG[to] ?? to;
            return (
              <li key={`${from}-${to}`}>
                <Link
                  href={href}
                  className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
                >
                  <span className="font-medium text-slate-200">
                    {fromSlug} to {toSlug} ({fromName} to {toName})
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 border-t border-slate-700 pt-8">
          <h3 className="mb-4 text-base font-semibold text-slate-200">Common questions (FAQ)</h3>
          <p className="mb-4 text-sm text-slate-500">
            {ANGLE_FAQ_LINKS.length} quick answers with guides and links to the matching converter.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {ANGLE_FAQ_LINKS.map((faq) => (
              <li key={faq.slug}>
                <Link
                  href={`/faq/${faq.category}/${faq.slug}`}
                  className="block rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-800/60 hover:text-slate-100"
                >
                  {faq.question}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">Guide</h2>
        <div className="space-y-6 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Quick start</h3>
            <ul className="list-disc space-y-2 pl-5">
              {ANGLE_GUIDE.quickStart.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Formulas &amp; deeper content</h3>
            <div className="space-y-2">
              {ANGLE_GUIDE.deeper.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Example uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {ANGLE_GUIDE.exampleUses.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/unit-converter"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Unit Converter
      </Link>
    </div>
  );
}
