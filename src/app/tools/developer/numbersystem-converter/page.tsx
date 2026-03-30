import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import NumberSystemConverter from "./NumberSystemConverter";
import ConversionGuide from "./ConversionGuide";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import {
  getCanonicalNumberSystemSlug,
  NUMBER_SYSTEM_PAIR_KEYS,
  NUMBER_SYSTEM_PAIR_KEY_LABELS,
  type NumberSystemPairKey,
} from "@/utils/numberSystemConversion";

export const metadata: Metadata = createMetadata({
  title: "Number System Converter | Binary, Octal, Decimal, Hex",
  description:
    "Number System Converter - Convert numbers between different number systems. Support for binary, octal, decimal, hexadecimal, and ASCII. Free online tool.",
  path: "/tools/developer/numbersystem-converter",
  keywords: [
    "number system converter",
    "binary converter",
    "decimal converter",
    "hexadecimal converter",
    "octal converter",
    "withustools",
  ],
});

/** Hub-only guide: pair pages carry fixed-format conversion; avoid duplicating long copy there. */
const NS_GUIDE = {
  quickStart: [
    "Select input format (Input as): Binary, Octal, Decimal, Hexadecimal, or Character.",
    "Enter a number or single character. Binary: 0b1010, Hex: 0xFF, Octal: 0777, Decimal: 255, Character: A.",
    "All conversions are shown at once. Copy All to copy. Clear to reset.",
  ],
  deeper: [
    "Need a fixed input/output pair (e.g. binary to hex only)? Use a dedicated converter from the list below.",
    "Common questions are linked in the FAQ section below; each opens a short article with tables and links to the matching pair page.",
  ],
  exampleUses: [
    "Programming: convert between number bases.",
    "Debugging: inspect character codes.",
    "Learning: understand number systems.",
  ],
};

/** Binary, Octal, Decimal, Hexadecimal, Character — all directed pairs (5×4 = 20). */
const NS_PAIR_LINKS: { from: NumberSystemPairKey; to: NumberSystemPairKey }[] = (() => {
  const pairs: { from: NumberSystemPairKey; to: NumberSystemPairKey }[] = [];
  for (const from of NUMBER_SYSTEM_PAIR_KEYS) {
    for (const to of NUMBER_SYSTEM_PAIR_KEYS) {
      if (from === to) continue;
      pairs.push({ from, to });
    }
  }
  return pairs;
})();

const NS_FAQ_LINKS = getFaqEntriesByCategory("number-system");

export default function NumberSystemConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Number System Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between binary, octal, decimal, hexadecimal, and ASCII
        characters.
      </p>

      <NumberSystemConverter />

      <div className="mt-12">
        <ConversionGuide
          fromBase="2"
          toBase="16"
          title="Universal guide (example: binary → hexadecimal)"
        />
        <p className="mt-4 text-center text-xs text-slate-500">
          Every dedicated pair below uses this same three-step layout with bases filled in for that page.
        </p>
      </div>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">
          Dedicated converters (binary, octal, decimal, hexadecimal, character)
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          {NS_PAIR_LINKS.length} pages — every directed pair of formats below, with fixed input/output and the same
          parsing rules as the main converter.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {NS_PAIR_LINKS.map(({ from, to }) => {
            const href = `/tools/developer/numbersystem-converter/${getCanonicalNumberSystemSlug(from, to)}`;
            const fromName = NUMBER_SYSTEM_PAIR_KEY_LABELS[from];
            const toName = NUMBER_SYSTEM_PAIR_KEY_LABELS[to];
            return (
              <li key={`${from}-${to}`}>
                <Link
                  href={href}
                  className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
                >
                  <span className="font-medium text-slate-200">
                    {from} to {to} ({fromName} to {toName})
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 border-t border-slate-700 pt-8">
          <h3 className="mb-4 text-base font-semibold text-slate-200">Common questions (FAQ)</h3>
          <p className="mb-4 text-sm text-slate-500">
            {NS_FAQ_LINKS.length} quick answers with guides and links to the matching converter.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {NS_FAQ_LINKS.map((faq) => (
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
              {NS_GUIDE.quickStart.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Dedicated pair pages &amp; FAQ</h3>
            <div className="space-y-2">
              {NS_GUIDE.deeper.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Example uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {NS_GUIDE.exampleUses.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/developer"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Developer Tools
      </Link>
    </div>
  );
}
