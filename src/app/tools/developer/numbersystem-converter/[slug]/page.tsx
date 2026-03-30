import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { NumberSystemConversionTablesPair } from "@/components/NumberSystemConversionTable";
import NumberSystemPairCalculator from "../NumberSystemPairCalculator";
import ConversionGuide from "../ConversionGuide";
import NumberSystemOtherPairLinks from "../NumberSystemOtherPairLinks";
import {
  getNumberSystemFormatDescription,
  getNumberSystemRelationshipContext,
  getNumberSystemSummary,
} from "../numberSystemPairContent";
import {
  getCanonicalNumberSystemSlug,
  NUMBER_SYSTEM_PAIR_KEYS,
  NUMBER_SYSTEM_PAIR_KEY_LABELS,
  pairKeyToBase,
  parseNumberSystemPairSlug,
} from "@/utils/numberSystemConversion";

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const from of NUMBER_SYSTEM_PAIR_KEYS) {
    for (const to of NUMBER_SYSTEM_PAIR_KEYS) {
      if (from === to) continue;
      params.push({ slug: getCanonicalNumberSystemSlug(from, to) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parseNumberSystemPairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Number System Conversion", noIndex: true });
  }
  const fromName = NUMBER_SYSTEM_PAIR_KEY_LABELS[pair.from];
  const toName = NUMBER_SYSTEM_PAIR_KEY_LABELS[pair.to];
  const title = `${fromName} to ${toName} Converter | Number System`;
  const description = `Easily convert ${fromName} to ${toName}. Fast, free converter with step-by-step notes, examples, and conversion tables.`;

  return createMetadata({
    title,
    description,
    path: `/tools/developer/numbersystem-converter/${params.slug}`,
    keywords: [
      `${fromName} to ${toName}`,
      "number system converter",
      "radix converter",
      "binary octal decimal hex",
      "withustools",
    ],
  });
}

export default function NumberSystemPairPage({ params }: { params: { slug: string } }) {
  const pair = parseNumberSystemPairSlug(params.slug);
  if (!pair) notFound();

  const fromBase = pairKeyToBase(pair.from);
  const toBase = pairKeyToBase(pair.to);
  const fromName = NUMBER_SYSTEM_PAIR_KEY_LABELS[pair.from];
  const toName = NUMBER_SYSTEM_PAIR_KEY_LABELS[pair.to];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {fromName} to {toName} Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">developer · number system</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromName} to {toName} with a fixed input and output format, a step-by-step formula line under the
        result, and reference tables. Parsing uses the same rules as the main Number System Converter (0b, 0x,
        leading 0 for octal; single character for character mode).
      </p>

      <NumberSystemPairCalculator fromBase={fromBase} toBase={toBase} />

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-200">About {fromName}</h2>
          <p className="text-sm leading-relaxed text-slate-400">{getNumberSystemFormatDescription(pair.from)}</p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-200">About {toName}</h2>
          <p className="text-sm leading-relaxed text-slate-400">{getNumberSystemFormatDescription(pair.to)}</p>
        </div>
      </section>

      <div className="mt-10">
        <ConversionGuide
          fromBase={fromBase}
          toBase={toBase}
          title={`How to convert ${fromName.toLowerCase()} to ${toName.toLowerCase()}`}
        />
      </div>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">Summary</h2>
        <p className="text-sm leading-relaxed text-slate-400">{getNumberSystemSummary(pair.from, pair.to)}</p>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">Relationship context</h2>
        <p className="text-sm leading-relaxed text-slate-400">
          {getNumberSystemRelationshipContext(pair.from, pair.to)}
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">Conversion tables</h2>
        <NumberSystemConversionTablesPair fromBase={fromBase} toBase={toBase} />
      </section>

      <NumberSystemOtherPairLinks fromPairKey={pair.from} toPairKey={pair.to} />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/developer/numbersystem-converter"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Number System Converter (all formats)
        </Link>
        <Link href="/tools/developer" className="text-slate-400 underline transition-colors hover:text-slate-200">
          Developer Tools home
        </Link>
      </div>
    </div>
  );
}
