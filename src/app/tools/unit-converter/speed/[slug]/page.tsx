import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { SpeedConversionTablesPair } from "@/components/SpeedConversionTable";
import SpeedPairCalculator from "../SpeedPairCalculator";
import HowToConvertSpeed from "../HowToConvertSpeed";
import UnitConverterNonHubPairLinks from "@/components/UnitConverterNonHubPairLinks";
import {
  getCanonicalSpeedSlug,
  SPEED_HUB_KEYS,
  SPEED_UNITS,
  parseSpeedPairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../speedPairContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parseSpeedPairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Speed Conversion", noIndex: true });
  }

  const { from, to } = pair;
  const fromSg = SPEED_UNITS[from]?.nameSg ?? SPEED_UNITS[from]?.name ?? from;
  const toSg = SPEED_UNITS[to]?.nameSg ?? SPEED_UNITS[to]?.name ?? to;

  const title = `${fromSg} to ${toSg} Converter | Accurate Speed Conversion`;
  const description = `Easily convert ${fromSg} to ${toSg}. Fast, free, and accurate speed converter with formulas, examples, and conversion tables for ${fromSg} and ${toSg}.`;

  return createMetadata({
    title,
    description,
    path: `/tools/unit-converter/speed/${params.slug}`,
    keywords: [
      `${fromSg} to ${toSg}`,
      `${from} to ${to}`,
      "speed converter",
      "velocity conversion",
      "withustools",
    ],
  });
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const from of SPEED_HUB_KEYS) {
    for (const to of SPEED_HUB_KEYS) {
      if (from === to) continue;
      slugs.push({ slug: getCanonicalSpeedSlug(from, to) });
    }
  }
  return slugs;
}

export default function SpeedPairPage({ params }: { params: { slug: string } }) {
  const pair = parseSpeedPairSlug(params.slug);
  if (!pair) notFound();

  const { from: fromKey, to: toKey } = pair;
  const fromSg = SPEED_UNITS[fromKey]?.nameSg ?? SPEED_UNITS[fromKey]?.name ?? fromKey;
  const toSg = SPEED_UNITS[toKey]?.nameSg ?? SPEED_UNITS[toKey]?.name ?? toKey;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How can I convert ${fromSg} to ${toSg}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Type a ${fromSg} value and this page calculates the ${toSg} result immediately.`,
        },
      },
      {
        "@type": "Question",
        name: "Does this speed pair page show formulas and examples?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Formula lines, explanatory sections, and conversion tables are included below.",
        },
      },
      {
        "@type": "Question",
        name: "Can I move to other speed conversion pairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Related speed pair links are provided at the bottom.",
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
            <p className="mt-1 text-sm text-slate-500">Speed · unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromSg} to {toSg} with a fixed input and output unit, step-by-step formula line, and
        reference tables. All calculations bridge through meters per second with fixed definitions (knot,
        international mile, Mach 1 = ISA sea level, Beaufort WMO bands at 10 m, vacuum c).
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
        <SpeedPairCalculator fromKey={fromKey} toKey={toKey} />
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
        <HowToConvertSpeed fromKey={fromKey} toKey={toKey} />
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
        <SpeedConversionTablesPair fromKey={fromKey} toKey={toKey} />
      </section>

      <UnitConverterNonHubPairLinks category="speed" fromKey={fromKey} toKey={toKey} />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/speed"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Speed Converter (all units)
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
