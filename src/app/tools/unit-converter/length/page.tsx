import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import { getCanonicalLengthSlug, LENGTH_KEY_TO_SLUG, LENGTH_UNITS } from "@/utils/conversions";

export const metadata: Metadata = createMetadata({
  title: "Length Converter | Meters, Feet, Inches, Kilometers, Miles",
  description:
    "Convert length units: kilometers, meters, feet, inches, miles, yards, centimeters, millimeters. Free online length converter. Metric and imperial support.",
  path: "/tools/unit-converter/length",
  keywords: [
    "length converter",
    "meters to feet",
    "feet to meters",
    "km to miles",
    "inches to cm",
    "metric length",
    "imperial length",
    "distance converter",
    "withustools",
  ],
});

/** Hub-only guide: avoid duplicating formulas and long unit copy on dedicated pair pages. */
const LENGTH_GUIDE = {
  quickStart: [
    "Enter a value and pick source and target units. The result updates as you type.",
    "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported length unit.",
  ],
  deeper: [
    "Need formulas, worked examples, and tables for one pair (e.g. meters to feet)? Use a dedicated converter from the list above.",
    "Short answers to common questions are in the FAQ section above. All calculations run in your browser; metric, imperial, and nautical length units are supported.",
  ],
  exampleUses: [
    "Construction: room sizes, material lengths.",
    "Real estate: listings in metric or imperial.",
    "Travel: distances in km or miles.",
  ],
};

/** Meter, kilometer, centimeter, millimeter, inch, feet, mile, yard — all directed pairs (8×7 = 56). */
const PAIR_LENGTH_KEYS = ["m", "km", "cm", "mm", "in", "ft", "mi", "yd"] as const;

const LENGTH_PAIR_LINKS: { from: string; to: string }[] = (() => {
  const pairs: { from: string; to: string }[] = [];
  for (const from of PAIR_LENGTH_KEYS) {
    for (const to of PAIR_LENGTH_KEYS) {
      if (from === to) continue;
      pairs.push({ from, to });
    }
  }
  return pairs;
})();

const LENGTH_FAQ_LINKS = getFaqEntriesByCategory("length");
const FAQ_ITEMS = [
  {
    question: "Which length units can I convert here?",
    answer:
      "You can convert major metric and imperial length units including meter, kilometer, centimeter, millimeter, inch, foot, yard, and mile.",
  },
  {
    question: "Can I open a dedicated meter-to-feet style page?",
    answer:
      "Yes. This page lists dedicated pair converters with formulas, examples, and reference tables.",
  },
  {
    question: "Does this length converter run in the browser?",
    answer: "Yes. Calculations run locally in your browser.",
  },
];

export default function LengthConverterPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Length Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between kilometers, meters, feet, inches, miles, yards, and more.
        Metric and imperial support. All Unit Conversions panel included.
      </p>

      <UnitConverter category="length" title="Convert Length" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">
          Dedicated converters (meter, kilometer, centimeter, millimeter, inch, feet, mile, yard)
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          {LENGTH_PAIR_LINKS.length} pages — every pair of units below, with fixed input/output, formulas,
          examples, and conversion tables.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {LENGTH_PAIR_LINKS.map(({ from, to }) => {
            const href = `/tools/unit-converter/length/${getCanonicalLengthSlug(from, to)}`;
            const fromName = LENGTH_UNITS[from].nameSg ?? LENGTH_UNITS[from].name;
            const toName = LENGTH_UNITS[to].nameSg ?? LENGTH_UNITS[to].name;
            const fromSlug = LENGTH_KEY_TO_SLUG[from] ?? from;
            const toSlug = LENGTH_KEY_TO_SLUG[to] ?? to;
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
            {LENGTH_FAQ_LINKS.length} quick answers with guides and links to the matching converter.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {LENGTH_FAQ_LINKS.map((faq) => (
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
        <h2 className="mb-6 text-lg font-semibold text-slate-200">Length Converter Guide</h2>
        <div className="space-y-6 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Quick start</h3>
            <ul className="list-disc space-y-2 pl-5">
              {LENGTH_GUIDE.quickStart.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Formulas &amp; deeper content</h3>
            <div className="space-y-2">
              {LENGTH_GUIDE.deeper.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Example uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {LENGTH_GUIDE.exampleUses.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Link
        href="/tools/unit-converter"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Unit Converter
      </Link>
    </div>
  );
}
