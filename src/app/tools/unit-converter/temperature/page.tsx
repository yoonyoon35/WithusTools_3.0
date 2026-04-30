import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import CommonConversionsTable from "@/components/CommonConversionsTable";
import UnitConverter from "../UnitConverter";
import { getCommonTemperatureConversionsFaqJsonLd } from "@/data/common-temperature-conversions";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import {
  getCanonicalTemperatureSlug,
  TEMPERATURE_KEY_TO_SLUG,
  TEMPERATURE_UNITS,
  TEMPERATURE_HUB_KEYS,
} from "@/utils/conversions";

export const metadata: Metadata = createMetadata({
  title: "Temperature Converter | Celsius, Fahrenheit, Kelvin, Rankine",
  description:
    "Convert temperature: Celsius, Fahrenheit, Kelvin. Offset-correct formulas. Free online converter for weather, cooking, and science.",
  path: "/tools/unit-converter/temperature",
  keywords: [
    "temperature converter",
    "celsius to fahrenheit",
    "fahrenheit to celsius",
    "kelvin converter",
    "rankine converter",
    "withustools",
  ],
});

const TEMPERATURE_GUIDE = {
  quickStart: [
    "Enter a value and pick source and target scales. The result updates as you type.",
    "Use swap to reverse scales and copy to copy the result. Temperature uses offsets—not just multiplying by a ratio.",
    "The All Unit Conversions panel lists your value in Celsius, Fahrenheit, and Kelvin at once.",
  ],
  deeper: [
    "Need worked examples and tables for one direction (e.g. Celsius to Fahrenheit)? Open a dedicated converter from the list below.",
    "Short answers to common questions are in the FAQ section. Celsius–Kelvin uses a 273.15 offset here.",
  ],
  exampleUses: [
    "Weather: °C and °F forecasts.",
    "Cooking: oven and recipe temperatures.",
    "Science: kelvin for physics and chemistry.",
  ],
};

const TEMPERATURE_PAIR_LINKS: { from: string; to: string }[] = (() => {
  const pairs: { from: string; to: string }[] = [];
  for (const from of TEMPERATURE_HUB_KEYS) {
    for (const to of TEMPERATURE_HUB_KEYS) {
      if (from === to) continue;
      pairs.push({ from, to });
    }
  }
  return pairs;
})();

const TEMPERATURE_FAQ_LINKS = getFaqEntriesByCategory("temperature");

const TEMPERATURE_COMMON_CONVERSIONS_FAQ_JSON_LD = getCommonTemperatureConversionsFaqJsonLd();
const FAQ_ITEMS = [
  {
    question: "Which temperature scales can I convert?",
    answer:
      "You can convert Celsius, Fahrenheit, Kelvin, and Rankine on this page.",
  },
  {
    question: "Does this converter handle offsets correctly?",
    answer:
      "Yes. Temperature conversions use offset-aware formulas, not only ratio scaling.",
  },
  {
    question: "Are dedicated pair pages available?",
    answer:
      "Yes. This page links to dedicated pair converters with formulas, examples, and tables.",
  },
];

export default function TemperatureConverterPage() {
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
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(TEMPERATURE_COMMON_CONVERSIONS_FAQ_JSON_LD),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Temperature Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between Celsius, Fahrenheit, Kelvin, and Rankine. Offset-aware formulas. All Unit Conversions
        panel included.
      </p>

      <UnitConverter category="temperature" title="Convert Temperature" />

      <CommonConversionsTable />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">
          Dedicated converters (Celsius, Fahrenheit, Kelvin, Rankine — all 12 directed pairs)
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          {TEMPERATURE_PAIR_LINKS.length} pages — each pair with fixed input/output, formulas, examples, and
          conversion tables.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPERATURE_PAIR_LINKS.map(({ from, to }) => {
            const href = `/tools/unit-converter/temperature/${getCanonicalTemperatureSlug(from, to)}`;
            const fromName = TEMPERATURE_UNITS[from].nameSg ?? TEMPERATURE_UNITS[from].name;
            const toName = TEMPERATURE_UNITS[to].nameSg ?? TEMPERATURE_UNITS[to].name;
            const fromSlug = TEMPERATURE_KEY_TO_SLUG[from] ?? from;
            const toSlug = TEMPERATURE_KEY_TO_SLUG[to] ?? to;
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
            {TEMPERATURE_FAQ_LINKS.length} quick answers with guides and links to the matching converter.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {TEMPERATURE_FAQ_LINKS.map((faq) => (
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
        <h2 className="mb-6 text-lg font-semibold text-slate-200">Temperature Converter Guide</h2>
        <div className="space-y-6 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Quick start</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEMPERATURE_GUIDE.quickStart.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Formulas &amp; deeper content</h3>
            <div className="space-y-2">
              {TEMPERATURE_GUIDE.deeper.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Example uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEMPERATURE_GUIDE.exampleUses.map((item, i) => (
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
