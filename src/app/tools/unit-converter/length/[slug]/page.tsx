import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { LengthConversionTablesPair } from "@/components/LengthConversionTable";
import LengthPairCalculator from "../LengthPairCalculator";
import HowToConvertLength from "../HowToConvertLength";
import UnitConverterNonHubPairLinks from "@/components/UnitConverterNonHubPairLinks";
import {
  getCanonicalLengthSlug,
  getLengthKeys,
  LENGTH_UNITS,
  parseLengthPairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../lengthPairContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parseLengthPairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Length Conversion", noIndex: true });
  }

  const { from, to } = pair;
  const fromSg = LENGTH_UNITS[from].nameSg ?? LENGTH_UNITS[from].name;
  const toSg = LENGTH_UNITS[to].nameSg ?? LENGTH_UNITS[to].name;

  const title = `${fromSg} to ${toSg} Converter | Accurate Length Conversion`;
  const description = `Easily convert ${fromSg} to ${toSg}. Fast, free, and accurate length converter with formulas, examples, and conversion tables for ${fromSg} and ${toSg}.`;

  return createMetadata({
    title,
    description,
    path: `/tools/unit-converter/length/${params.slug}`,
    keywords: [
      `${fromSg} to ${toSg}`,
      `${from} to ${to}`,
      "length converter",
      "unit conversion",
      "metric",
      "imperial",
      "withustools",
    ],
  });
}

export function generateStaticParams() {
  const keys = getLengthKeys();
  const slugs: { slug: string }[] = [];
  for (const from of keys) {
    for (const to of keys) {
      if (from === to) continue;
      slugs.push({ slug: getCanonicalLengthSlug(from, to) });
    }
  }
  return slugs;
}

export default function LengthPairPage({ params }: { params: { slug: string } }) {
  const pair = parseLengthPairSlug(params.slug);
  if (!pair) notFound();

  const { from: fromKey, to: toKey } = pair;
  const fromSg = LENGTH_UNITS[fromKey].nameSg ?? LENGTH_UNITS[fromKey].name;
  const toSg = LENGTH_UNITS[toKey].nameSg ?? LENGTH_UNITS[toKey].name;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {fromSg} to {toSg} Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">Length · unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromSg} to {toSg} with a fixed input and output unit, step-by-step formula line, and
        reference tables. All calculations use SI-based definitions (international yard, nautical mile,
        etc.).
      </p>

      <LengthPairCalculator fromKey={fromKey} toKey={toKey} />

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-200">About {fromSg}</h2>
          <p className="text-sm leading-relaxed text-slate-400">{getUnitDescription(fromKey)}</p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-200">About {toSg}</h2>
          <p className="text-sm leading-relaxed text-slate-400">{getUnitDescription(toKey)}</p>
        </div>
      </section>

      <div className="mt-10">
        <HowToConvertLength fromKey={fromKey} toKey={toKey} />
      </div>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">Summary</h2>
        <p className="text-sm leading-relaxed text-slate-400">{getDetailedFormulaExplanation(fromKey, toKey)}</p>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">Relationship context</h2>
        <p className="text-sm leading-relaxed text-slate-400">{getRelationshipContext(fromKey, toKey)}</p>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">Conversion tables</h2>
        <LengthConversionTablesPair fromKey={fromKey} toKey={toKey} />
      </section>

      <UnitConverterNonHubPairLinks category="length" fromKey={fromKey} toKey={toKey} />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/length"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Length Converter (all units)
        </Link>
        <Link
          href="/tools/unit-converter"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          Unit Converter home
        </Link>
      </div>
    </div>
  );
}
