import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import {
  getCanonicalVolumeSlug,
  VOLUME_KEY_TO_SLUG,
  VOLUME_UNITS,
  VOLUME_HUB_KEYS,
} from "@/utils/conversions";

export const metadata: Metadata = createMetadata({
  title: "Volume Converter | Liters, Gallons, Milliliters, Cubic Meters",
  description:
    "Convert volume units: liters, gallons, milliliters, cubic meters, quarts, pints. Free online volume converter for cooking and chemistry.",
  path: "/tools/unit-converter/volume",
  keywords: [
    "volume converter",
    "liters to gallons",
    "gallons to liters",
    "ml to cups",
    "cubic meters",
    "fluid ounces",
    "withustools",
  ],
});

const VOLUME_GUIDE = {
  quickStart: [
    "Enter a value and pick source and target units. The result updates as you type.",
    "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported volume unit.",
  ],
  deeper: [
    "Need formulas, worked examples, and tables for one pair (e.g. liters to US gallons)? Use a dedicated converter from the list below.",
    "Short answers to common questions are in the FAQ section above. All calculations run in your browser; US, UK, and metric volume units are supported.",
  ],
  exampleUses: [
    "Cooking: recipe volumes in liters, gallons, tablespoons, or teaspoons.",
    "Chemistry and lab work: liters and cubic meters.",
    "Shipping and HVAC: cubic feet and cubic meters.",
  ],
};

const VOLUME_PAIR_LINKS: { from: string; to: string }[] = (() => {
  const pairs: { from: string; to: string }[] = [];
  for (const from of VOLUME_HUB_KEYS) {
    for (const to of VOLUME_HUB_KEYS) {
      if (from === to) continue;
      pairs.push({ from, to });
    }
  }
  return pairs;
})();

const VOLUME_FAQ_LINKS = getFaqEntriesByCategory("volume");

export default function VolumeConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Volume Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between liters, gallons, cups, fluid ounces, cubic meters, cubic feet, and more.
        US and UK fluid measures. All Unit Conversions panel included.
      </p>

      <UnitConverter category="volume" title="Convert Volume" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">
          Dedicated converters (Liters, Cubic Meters, Gallons US, Fluid Ounces US, Cubic Feet,
          Tablespoons US, Teaspoons US, Cubic Inches)
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          {VOLUME_PAIR_LINKS.length} pages — every pair of units below, with fixed input/output, formulas,
          examples, and conversion tables.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VOLUME_PAIR_LINKS.map(({ from, to }) => {
            const href = `/tools/unit-converter/volume/${getCanonicalVolumeSlug(from, to)}`;
            const fromName = VOLUME_UNITS[from].nameSg ?? VOLUME_UNITS[from].name;
            const toName = VOLUME_UNITS[to].nameSg ?? VOLUME_UNITS[to].name;
            const fromSlug = VOLUME_KEY_TO_SLUG[from] ?? from;
            const toSlug = VOLUME_KEY_TO_SLUG[to] ?? to;
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
            {VOLUME_FAQ_LINKS.length} quick answers with guides and links to the matching converter.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {VOLUME_FAQ_LINKS.map((faq) => (
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
              {VOLUME_GUIDE.quickStart.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Formulas &amp; deeper content</h3>
            <div className="space-y-2">
              {VOLUME_GUIDE.deeper.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Example uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {VOLUME_GUIDE.exampleUses.map((item, i) => (
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
