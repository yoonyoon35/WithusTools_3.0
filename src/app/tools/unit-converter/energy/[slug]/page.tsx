import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { EnergyConversionTablesPair } from "@/components/EnergyConversionTable";
import EnergyPairCalculator from "../EnergyPairCalculator";
import HowToConvertEnergy from "../HowToConvertEnergy";
import {
  getCanonicalEnergySlug,
  ENERGY_HUB_KEYS,
  ENERGY_UNITS,
  parseEnergyPairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../energyPairContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parseEnergyPairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Energy Conversion", noIndex: true });
  }

  const { from, to } = pair;
  const fromSg = ENERGY_UNITS[from].nameSg ?? ENERGY_UNITS[from].name;
  const toSg = ENERGY_UNITS[to].nameSg ?? ENERGY_UNITS[to].name;

  const title = `${fromSg} to ${toSg} Converter | Energy Conversion`;
  const description = `Easily convert ${fromSg} to ${toSg}. Free energy converter with formulas, examples, and tables. Joule-based factors; thermochemical calories and IT BTU.`;

  return createMetadata({
    title,
    description,
    path: `/tools/unit-converter/energy/${params.slug}`,
    keywords: [
      `${fromSg} to ${toSg}`,
      `${from} to ${to}`,
      "energy converter",
      "joules",
      "withustools",
    ],
  });
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const from of ENERGY_HUB_KEYS) {
    for (const to of ENERGY_HUB_KEYS) {
      if (from === to) continue;
      slugs.push({ slug: getCanonicalEnergySlug(from, to) });
    }
  }
  return slugs;
}

export default function EnergyPairPage({ params }: { params: { slug: string } }) {
  const pair = parseEnergyPairSlug(params.slug);
  if (!pair) notFound();

  const { from: fromKey, to: toKey } = pair;
  const fromSg = ENERGY_UNITS[fromKey].nameSg ?? ENERGY_UNITS[fromKey].name;
  const toSg = ENERGY_UNITS[toKey].nameSg ?? ENERGY_UNITS[toKey].name;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {fromSg} to {toSg} Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">Energy · unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromSg} to {toSg} with fixed input and output units, a step-by-step formula line, and
        reference tables. Factors are joule-based; food energy uses thermochemical calories. The full Energy
        Converter also includes therm and foot-pounds.
      </p>

      <EnergyPairCalculator fromKey={fromKey} toKey={toKey} />

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
        <HowToConvertEnergy fromKey={fromKey} toKey={toKey} />
      </div>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">Summary</h2>
        <p className="text-sm leading-relaxed text-slate-400">
          {getDetailedFormulaExplanation(fromKey, toKey)}
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">Relationship context</h2>
        <p className="text-sm leading-relaxed text-slate-400">{getRelationshipContext(fromKey, toKey)}</p>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">Conversion tables</h2>
        <EnergyConversionTablesPair fromKey={fromKey} toKey={toKey} />
      </section>

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/energy"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Energy Converter (all units)
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
