import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { DigitalConversionTablesPair } from "@/components/DigitalConversionTable";
import DigitalPairCalculator from "../DigitalPairCalculator";
import HowToConvertDigital from "../HowToConvertDigital";
import {
  getCanonicalDigitalSlug,
  DIGITAL_HUB_KEYS,
  DIGITAL_UNITS,
  parseDigitalPairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../digitalPairContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parseDigitalPairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Digital Storage Conversion", noIndex: true });
  }

  const { from, to } = pair;
  const fromSg = DIGITAL_UNITS[from].nameSg ?? DIGITAL_UNITS[from].name;
  const toSg = DIGITAL_UNITS[to].nameSg ?? DIGITAL_UNITS[to].name;

  const title = `${fromSg} to ${toSg} Converter | Digital Storage Conversion`;
  const description = `Easily convert ${fromSg} to ${toSg}. Fast, free digital storage converter with formulas, examples, and conversion tables. Decimal (SI) byte units; bits use 8 bits per byte.`;

  return createMetadata({
    title,
    description,
    path: `/tools/unit-converter/digital/${params.slug}`,
    keywords: [
      `${fromSg} to ${toSg}`,
      `${from} to ${to}`,
      "digital storage converter",
      "data units",
      "withustools",
    ],
  });
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const from of DIGITAL_HUB_KEYS) {
    for (const to of DIGITAL_HUB_KEYS) {
      if (from === to) continue;
      slugs.push({ slug: getCanonicalDigitalSlug(from, to) });
    }
  }
  return slugs;
}

export default function DigitalPairPage({ params }: { params: { slug: string } }) {
  const pair = parseDigitalPairSlug(params.slug);
  if (!pair) notFound();

  const { from: fromKey, to: toKey } = pair;
  const fromSg = DIGITAL_UNITS[fromKey].nameSg ?? DIGITAL_UNITS[fromKey].name;
  const toSg = DIGITAL_UNITS[toKey].nameSg ?? DIGITAL_UNITS[toKey].name;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {fromSg} to {toSg} Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">Digital storage · unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromSg} to {toSg} with fixed input and output units, a step-by-step formula line, and
        reference tables. This hub uses decimal byte units (kB, MB, GB, …) and decimal megabits; the main
        converter also includes binary (KiB, MiB, …) units.
      </p>

      <DigitalPairCalculator fromKey={fromKey} toKey={toKey} />

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
        <HowToConvertDigital fromKey={fromKey} toKey={toKey} />
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
        <DigitalConversionTablesPair fromKey={fromKey} toKey={toKey} />
      </section>

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/digital"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Digital Storage Converter (all units)
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
