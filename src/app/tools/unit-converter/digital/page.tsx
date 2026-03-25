import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import {
  getCanonicalDigitalSlug,
  DIGITAL_KEY_TO_SLUG,
  DIGITAL_UNITS,
  DIGITAL_HUB_KEYS,
} from "@/utils/conversions";

export const metadata: Metadata = createMetadata({
  title: "Digital Storage Converter | Bytes, KB, MB, GB, TB, Bits",
  description:
    "Convert digital storage: bytes, kilobytes, megabytes, gigabytes, terabytes, petabytes, bits, megabits. Decimal SI and binary IEC units. Free online converter.",
  path: "/tools/unit-converter/digital",
  keywords: [
    "digital storage converter",
    "bytes to MB",
    "GB to TB",
    "megabit to megabyte",
    "data units",
    "binary units",
    "withustools",
  ],
});

const DIGITAL_GUIDE = {
  quickStart: [
    "Enter a value and pick source and target units. The result updates as you type.",
    "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported unit (decimal and binary).",
  ],
  deeper: [
    "Need formulas, worked examples, and tables for one pair (e.g. gigabytes to terabytes)? Use a dedicated converter from the list below.",
    "Short answers to common questions are in the FAQ section above. Dedicated hub pages use decimal kB/MB/GB/TB/PB, bytes, bits, and megabits; KiB/MiB/GiB remain in the main tool.",
  ],
  exampleUses: [
    "Downloads: compare file size in MB or GB with line speed in Mbps.",
    "Storage: plan capacity in TB or PB.",
    "Memory and files: bytes, KB, and MB for smaller objects.",
  ],
};

const DIGITAL_PAIR_LINKS: { from: string; to: string }[] = (() => {
  const pairs: { from: string; to: string }[] = [];
  for (const from of DIGITAL_HUB_KEYS) {
    for (const to of DIGITAL_HUB_KEYS) {
      if (from === to) continue;
      pairs.push({ from, to });
    }
  }
  return pairs;
})();

const DIGITAL_FAQ_LINKS = getFaqEntriesByCategory("digital");

export default function DigitalStorageConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Digital Storage Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between bits, bytes, decimal and binary prefixes. All Unit Conversions panel included.
      </p>

      <UnitConverter category="digital" title="Convert Digital Storage" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">
          Dedicated converters (gigabyte, terabyte, megabyte, byte, kilobyte, petabyte, bit, megabit)
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          {DIGITAL_PAIR_LINKS.length} pages — every pair of units below, with fixed input/output, formulas,
          examples, and conversion tables.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DIGITAL_PAIR_LINKS.map(({ from, to }) => {
            const href = `/tools/unit-converter/digital/${getCanonicalDigitalSlug(from, to)}`;
            const fromName = DIGITAL_UNITS[from].nameSg ?? DIGITAL_UNITS[from].name;
            const toName = DIGITAL_UNITS[to].nameSg ?? DIGITAL_UNITS[to].name;
            const fromSlug = DIGITAL_KEY_TO_SLUG[from] ?? from;
            const toSlug = DIGITAL_KEY_TO_SLUG[to] ?? to;
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
            {DIGITAL_FAQ_LINKS.length} quick answers with guides and links to the matching converter.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {DIGITAL_FAQ_LINKS.map((faq) => (
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
              {DIGITAL_GUIDE.quickStart.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Formulas &amp; deeper content</h3>
            <div className="space-y-2">
              {DIGITAL_GUIDE.deeper.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Example uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {DIGITAL_GUIDE.exampleUses.map((item, i) => (
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
