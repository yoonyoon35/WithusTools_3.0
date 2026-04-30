import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import {
  getCanonicalPressureSlug,
  PRESSURE_HUB_KEYS,
  PRESSURE_KEY_TO_SLUG,
  PRESSURE_UNITS,
} from "@/utils/conversions";

export const metadata: Metadata = createMetadata({
  title: "Pressure Converter | Pascal, hPa, mmHg, Bar, PSI, Atmosphere",
  description:
    "Convert pressure: Pa, kPa, hPa, bar, atm, PSI, torr, mmHg. Dedicated pair pages, formulas, and tables. For engineering and meteorology.",
  path: "/tools/unit-converter/pressure",
  keywords: [
    "pressure converter",
    "psi to bar",
    "bar to pascal",
    "hPa to mmHg",
    "mmHg to kPa",
    "atmosphere pressure",
    "pressure conversion",
    "withustools",
  ],
});

/** Hub-only guide: avoid duplicating formulas and long unit copy on dedicated pair pages. */
const PRESSURE_GUIDE = {
  quickStart: [
    "Enter a value and pick source and target units. The result updates as you type.",
    "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported pressure unit.",
  ],
  deeper: [
    "Need formulas, worked examples, and tables for one pair (e.g. bar to PSI)? Use a dedicated converter from the list above.",
    "Short answers to common questions are in the FAQ section above. All calculations run in your browser; Pa, kPa, hPa, bar, atm, PSI, torr, and mmHg are supported.",
  ],
  exampleUses: [
    "Engineering: tire pressure, hydraulics, and vessel ratings in bar or PSI.",
    "Meteorology: surface pressure in hPa or millibar.",
    "Medicine and vacuum: mmHg, torr, and pascal equivalents.",
  ],
};

const PRESSURE_PAIR_LINKS: { from: string; to: string }[] = (() => {
  const pairs: { from: string; to: string }[] = [];
  for (const from of PRESSURE_HUB_KEYS) {
    for (const to of PRESSURE_HUB_KEYS) {
      if (from === to) continue;
      pairs.push({ from, to });
    }
  }
  return pairs;
})();

const PRESSURE_FAQ_LINKS = getFaqEntriesByCategory("pressure");
const FAQ_ITEMS = [
  {
    question: "Which pressure units are supported?",
    answer:
      "You can convert Pa, kPa, hPa, bar, atm, PSI, torr, and mmHg.",
  },
  {
    question: "Can I open dedicated pressure pair pages?",
    answer:
      "Yes. Pair pages include formulas, examples, and conversion tables.",
  },
  {
    question: "Is this pressure converter useful for engineering checks?",
    answer:
      "Yes. It is useful for quick pressure conversion checks in engineering and weather workflows.",
  },
];

export default function PressureConverterPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Pressure Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between pascal, kilopascal, hectopascal (hPa), bar, atmosphere, PSI, torr, and millimeter of
        mercury (mmHg). For engineering and meteorology. All Unit Conversions panel included.
      </p>

      <UnitConverter category="pressure" title="Convert Pressure" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">
          Dedicated converters (bar, atm, PSI, kPa, hPa, torr, mmHg, Pa)
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          {PRESSURE_PAIR_LINKS.length} pages — every pair of units below, with fixed input/output, formulas,
          examples, and conversion tables.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRESSURE_PAIR_LINKS.map(({ from, to }) => {
            const href = `/tools/unit-converter/pressure/${getCanonicalPressureSlug(from, to)}`;
            const fromName = PRESSURE_UNITS[from]?.nameSg ?? PRESSURE_UNITS[from]?.name ?? from;
            const toName = PRESSURE_UNITS[to]?.nameSg ?? PRESSURE_UNITS[to]?.name ?? to;
            const fromSlug = PRESSURE_KEY_TO_SLUG[from] ?? from;
            const toSlug = PRESSURE_KEY_TO_SLUG[to] ?? to;
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
            {PRESSURE_FAQ_LINKS.length} quick answers with guides and links to the matching converter.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {PRESSURE_FAQ_LINKS.map((faq) => (
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
        <h2 className="mb-6 text-lg font-semibold text-slate-200">Pressure Converter Guide</h2>
        <div className="space-y-6 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Quick start</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PRESSURE_GUIDE.quickStart.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Formulas &amp; deeper content</h3>
            <div className="space-y-2">
              {PRESSURE_GUIDE.deeper.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Example uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PRESSURE_GUIDE.exampleUses.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Link
        href="/tools/unit-converter"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Unit Converter
      </Link>
    </div>
  );
}
