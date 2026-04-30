import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { TemperatureConversionTablesPair } from "@/components/TemperatureConversionTable";
import TemperaturePairCalculator from "../TemperaturePairCalculator";
import HowToConvertTemperature from "../HowToConvertTemperature";
import UnitConverterNonHubPairLinks from "@/components/UnitConverterNonHubPairLinks";
import {
  getCanonicalTemperatureSlug,
  TEMPERATURE_HUB_KEYS,
  TEMPERATURE_UNITS,
  parseTemperaturePairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../temperaturePairContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parseTemperaturePairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Temperature Conversion", noIndex: true });
  }

  const { from, to } = pair;
  const fromSg = TEMPERATURE_UNITS[from].nameSg ?? TEMPERATURE_UNITS[from].name;
  const toSg = TEMPERATURE_UNITS[to].nameSg ?? TEMPERATURE_UNITS[to].name;

  const title = `${fromSg} to ${toSg} Converter | Temperature Conversion`;
  const description = `Convert ${fromSg} to ${toSg} with correct offset formulas, examples, and reference tables. Free temperature converter for weather, cooking, and science.`;

  return createMetadata({
    title,
    description,
    path: `/tools/unit-converter/temperature/${params.slug}`,
    keywords: [
      `${fromSg} to ${toSg}`,
      `${from} to ${to}`,
      "temperature converter",
      "celsius fahrenheit kelvin",
      "withustools",
    ],
  });
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const from of TEMPERATURE_HUB_KEYS) {
    for (const to of TEMPERATURE_HUB_KEYS) {
      if (from === to) continue;
      slugs.push({ slug: getCanonicalTemperatureSlug(from, to) });
    }
  }
  return slugs;
}

export default function TemperaturePairPage({ params }: { params: { slug: string } }) {
  const pair = parseTemperaturePairSlug(params.slug);
  if (!pair) notFound();

  const { from: fromKey, to: toKey } = pair;
  const fromSg = TEMPERATURE_UNITS[fromKey].nameSg ?? TEMPERATURE_UNITS[fromKey].name;
  const toSg = TEMPERATURE_UNITS[toKey].nameSg ?? TEMPERATURE_UNITS[toKey].name;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How do I convert ${fromSg} to ${toSg} here?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Enter a ${fromSg} value and the ${toSg} result is calculated with offset-aware formulas.`,
        },
      },
      {
        "@type": "Question",
        name: "Does this page include temperature formula details?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. This page includes formula lines, explanatory notes, and conversion tables.",
        },
      },
      {
        "@type": "Question",
        name: "Can I switch to other temperature scale pairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Related pair links are listed near the bottom.",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {fromSg} to {toSg} Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">Temperature · unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromSg} to {toSg} with offset-aware formulas (not simple ratio scaling), step-by-step lines,
        and reference tables. Uses 273.15 for Celsius–Kelvin offsets, R = (9/5) × K for kelvin–rankine, and
        °F–R offset 459.67.
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
        <TemperaturePairCalculator fromKey={fromKey} toKey={toKey} />
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
        <HowToConvertTemperature fromKey={fromKey} toKey={toKey} />
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
        <TemperatureConversionTablesPair fromKey={fromKey} toKey={toKey} />
      </section>

      <UnitConverterNonHubPairLinks category="temperature" fromKey={fromKey} toKey={toKey} />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/temperature"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Temperature Converter (all scales)
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
