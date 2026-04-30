import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { AngleConversionTablesPair } from "@/components/AngleConversionTable";
import AnglePairCalculator from "../AnglePairCalculator";
import HowToConvertAngle from "../HowToConvertAngle";
import UnitConverterNonHubPairLinks from "@/components/UnitConverterNonHubPairLinks";
import {
  getCanonicalAngleSlug,
  ANGLE_HUB_KEYS,
  ANGLE_UNITS,
  parseAnglePairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../anglePairContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parseAnglePairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Angle Conversion", noIndex: true });
  }

  const { from, to } = pair;
  const fromSg = ANGLE_UNITS[from]?.nameSg ?? ANGLE_UNITS[from]?.name ?? from;
  const toSg = ANGLE_UNITS[to]?.nameSg ?? ANGLE_UNITS[to]?.name ?? to;

  const title = `${fromSg} to ${toSg} Converter | Accurate Angle Conversion`;
  const description = `Easily convert ${fromSg} to ${toSg}. Fast, free, and accurate angle converter with formulas, examples, and conversion tables for ${fromSg} and ${toSg}.`;

  return createMetadata({
    title,
    description,
    path: `/tools/unit-converter/angle/${params.slug}`,
    keywords: [
      `${fromSg} to ${toSg}`,
      `${from} to ${to}`,
      "angle converter",
      "angle conversion",
      "withustools",
    ],
  });
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const from of ANGLE_HUB_KEYS) {
    for (const to of ANGLE_HUB_KEYS) {
      if (from === to) continue;
      slugs.push({ slug: getCanonicalAngleSlug(from, to) });
    }
  }
  return slugs;
}

export default function AnglePairPage({ params }: { params: { slug: string } }) {
  const pair = parseAnglePairSlug(params.slug);
  if (!pair) notFound();

  const { from: fromKey, to: toKey } = pair;
  const fromSg = ANGLE_UNITS[fromKey]?.nameSg ?? ANGLE_UNITS[fromKey]?.name ?? fromKey;
  const toSg = ANGLE_UNITS[toKey]?.nameSg ?? ANGLE_UNITS[toKey]?.name ?? toKey;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How do I convert ${fromSg} to ${toSg} on this page?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Enter a ${fromSg} value and this converter returns ${toSg} using fixed pair rules.`,
        },
      },
      {
        "@type": "Question",
        name: "Are formula steps and tables included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. This page includes formula guidance, summary notes, and angle conversion tables.",
        },
      },
      {
        "@type": "Question",
        name: "Can I navigate to other angle pairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Related pair links are shown below for quick switching.",
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
            <p className="mt-1 text-sm text-slate-500">Angle · unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromSg} to {toSg} with a fixed input and output unit, step-by-step formula line, and
        reference tables. All calculations bridge through radians with fixed definitions (360° per turn, 400
        grad per turn, 60′ per degree, 60″ per minute, NATO 6400 mils per turn).
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
        <AnglePairCalculator fromKey={fromKey} toKey={toKey} />
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
        <HowToConvertAngle fromKey={fromKey} toKey={toKey} />
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
        <AngleConversionTablesPair fromKey={fromKey} toKey={toKey} />
      </section>

      <UnitConverterNonHubPairLinks category="angle" fromKey={fromKey} toKey={toKey} />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/angle"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Angle Converter (all units)
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
