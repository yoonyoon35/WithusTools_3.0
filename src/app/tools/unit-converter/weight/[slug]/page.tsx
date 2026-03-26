import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { WeightConversionTablesPair } from "@/components/WeightConversionTable";
import WeightPairCalculator from "../WeightPairCalculator";
import HowToConvertWeight from "../HowToConvertWeight";
import UnitConverterNonHubPairLinks from "@/components/UnitConverterNonHubPairLinks";
import {
  getCanonicalWeightSlug,
  getWeightKeys,
  WEIGHT_UNITS,
  parseWeightPairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../weightPairContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parseWeightPairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Weight Conversion", noIndex: true });
  }

  const { from, to } = pair;
  const fromSg = WEIGHT_UNITS[from].nameSg ?? WEIGHT_UNITS[from].name;
  const toSg = WEIGHT_UNITS[to].nameSg ?? WEIGHT_UNITS[to].name;

  const title = `${fromSg} to ${toSg} Converter | Accurate Weight Conversion`;
  const description = `Easily convert ${fromSg} to ${toSg}. Fast, free, and accurate weight converter with formulas, examples, and conversion tables for ${fromSg} and ${toSg}.`;

  return createMetadata({
    title,
    description,
    path: `/tools/unit-converter/weight/${params.slug}`,
    keywords: [
      `${fromSg} to ${toSg}`,
      `${from} to ${to}`,
      "weight converter",
      "mass converter",
      "unit conversion",
      "metric",
      "imperial",
      "withustools",
    ],
  });
}

export function generateStaticParams() {
  const keys = getWeightKeys();
  const slugs: { slug: string }[] = [];
  for (const from of keys) {
    for (const to of keys) {
      if (from === to) continue;
      slugs.push({ slug: getCanonicalWeightSlug(from, to) });
    }
  }
  return slugs;
}

export default function WeightPairPage({ params }: { params: { slug: string } }) {
  const pair = parseWeightPairSlug(params.slug);
  if (!pair) notFound();

  const { from: fromKey, to: toKey } = pair;
  const fromSg = WEIGHT_UNITS[fromKey].nameSg ?? WEIGHT_UNITS[fromKey].name;
  const toSg = WEIGHT_UNITS[toKey].nameSg ?? WEIGHT_UNITS[toKey].name;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {fromSg} to {toSg} Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">Weight · unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromSg} to {toSg} with a fixed input and output unit, step-by-step formula line, and
        reference tables. All calculations use gram-based factors (international avoirdupois pound and
        metric definitions).
      </p>

      <WeightPairCalculator fromKey={fromKey} toKey={toKey} />

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
        <HowToConvertWeight fromKey={fromKey} toKey={toKey} />
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
        <WeightConversionTablesPair fromKey={fromKey} toKey={toKey} />
      </section>

      <UnitConverterNonHubPairLinks category="weight" fromKey={fromKey} toKey={toKey} />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/weight"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Weight Converter (all units)
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
