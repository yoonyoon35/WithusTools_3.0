import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { PressureConversionTablesPair } from "@/components/PressureConversionTable";
import PressurePairCalculator from "../PressurePairCalculator";
import HowToConvertPressure from "../HowToConvertPressure";
import UnitConverterNonHubPairLinks from "@/components/UnitConverterNonHubPairLinks";
import {
  getCanonicalPressureSlug,
  PRESSURE_HUB_KEYS,
  PRESSURE_UNITS,
  parsePressurePairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../pressurePairContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parsePressurePairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Pressure Conversion", noIndex: true });
  }

  const { from, to } = pair;
  const fromSg = PRESSURE_UNITS[from]?.nameSg ?? PRESSURE_UNITS[from]?.name ?? from;
  const toSg = PRESSURE_UNITS[to]?.nameSg ?? PRESSURE_UNITS[to]?.name ?? to;

  const title = `${fromSg} to ${toSg} Converter | Accurate Pressure Conversion`;
  const description = `Easily convert ${fromSg} to ${toSg}. Fast, free, and accurate pressure converter with formulas, examples, and conversion tables for ${fromSg} and ${toSg}.`;

  return createMetadata({
    title,
    description,
    path: `/tools/unit-converter/pressure/${params.slug}`,
    keywords: [
      `${fromSg} to ${toSg}`,
      `${from} to ${to}`,
      "pressure converter",
      "pressure conversion",
      "withustools",
    ],
  });
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const from of PRESSURE_HUB_KEYS) {
    for (const to of PRESSURE_HUB_KEYS) {
      if (from === to) continue;
      slugs.push({ slug: getCanonicalPressureSlug(from, to) });
    }
  }
  return slugs;
}

export default function PressurePairPage({ params }: { params: { slug: string } }) {
  const pair = parsePressurePairSlug(params.slug);
  if (!pair) notFound();

  const { from: fromKey, to: toKey } = pair;
  const fromSg = PRESSURE_UNITS[fromKey]?.nameSg ?? PRESSURE_UNITS[fromKey]?.name ?? fromKey;
  const toSg = PRESSURE_UNITS[toKey]?.nameSg ?? PRESSURE_UNITS[toKey]?.name ?? toKey;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How can I convert ${fromSg} to ${toSg}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Enter a ${fromSg} value and this page calculates the ${toSg} output immediately.`,
        },
      },
      {
        "@type": "Question",
        name: "Are formulas and conversion tables available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Formula guidance, summary sections, and pressure conversion tables are included.",
        },
      },
      {
        "@type": "Question",
        name: "Can I open other pressure pair converters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Related pressure pair links are available below.",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {fromSg} to {toSg} Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">Pressure · unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromSg} to {toSg} with a fixed input and output unit, step-by-step formula line, and
        reference tables. All calculations bridge through pascal with fixed definitions (standard atmosphere =
        101,325 Pa; torr and mmHg = atm/760; international PSI factor).
      </p>

      <Suspense
        fallback={
          <div
            className="min-h-[220px] rounded-xl border border-border bg-surface p-6"
            aria-busy="true"
            aria-label="Loading calculator"
          />
        }
      >
        <PressurePairCalculator fromKey={fromKey} toKey={toKey} />
      </Suspense>

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
        <HowToConvertPressure fromKey={fromKey} toKey={toKey} />
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
        <PressureConversionTablesPair fromKey={fromKey} toKey={toKey} />
      </section>

      <UnitConverterNonHubPairLinks category="pressure" fromKey={fromKey} toKey={toKey} />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/pressure"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Pressure Converter (all units)
        </Link>
        <Link
          href="/tools/unit-converter"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          Unit Converter home
        </Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
