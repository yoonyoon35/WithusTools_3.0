import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { AreaConversionTablesPair } from "@/components/AreaConversionTable";
import AreaPairCalculator from "../AreaPairCalculator";
import HowToConvertArea from "../HowToConvertArea";
import UnitConverterNonHubPairLinks from "@/components/UnitConverterNonHubPairLinks";
import {
  getCanonicalAreaSlug,
  getAreaKeys,
  AREA_UNITS,
  parseAreaPairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../areaPairContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parseAreaPairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Area Conversion", noIndex: true });
  }

  const { from, to } = pair;
  const fromSg = AREA_UNITS[from].nameSg ?? AREA_UNITS[from].name;
  const toSg = AREA_UNITS[to].nameSg ?? AREA_UNITS[to].name;

  const title = `${fromSg} to ${toSg} Converter | Accurate Area Conversion`;
  const description = `Easily convert ${fromSg} to ${toSg}. Fast, free, and accurate area converter with formulas, examples, and conversion tables for ${fromSg} and ${toSg}.`;

  return createMetadata({
    title,
    description,
    path: `/tools/unit-converter/area/${params.slug}`,
    keywords: [
      `${fromSg} to ${toSg}`,
      `${from} to ${to}`,
      "area converter",
      "unit conversion",
      "metric",
      "imperial",
      "withustools",
    ],
  });
}

export function generateStaticParams() {
  const keys = getAreaKeys();
  const slugs: { slug: string }[] = [];
  for (const from of keys) {
    for (const to of keys) {
      if (from === to) continue;
      slugs.push({ slug: getCanonicalAreaSlug(from, to) });
    }
  }
  return slugs;
}

export default function AreaPairPage({ params }: { params: { slug: string } }) {
  const pair = parseAreaPairSlug(params.slug);
  if (!pair) notFound();

  const { from: fromKey, to: toKey } = pair;
  const fromSg = AREA_UNITS[fromKey].nameSg ?? AREA_UNITS[fromKey].name;
  const toSg = AREA_UNITS[toKey].nameSg ?? AREA_UNITS[toKey].name;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How do I convert ${fromSg} to ${toSg}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Type a ${fromSg} value and this page returns the ${toSg} result with fixed pair settings.`,
        },
      },
      {
        "@type": "Question",
        name: "Are formulas and conversion tables included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. This page includes formula lines, explanation sections, and area conversion tables.",
        },
      },
      {
        "@type": "Question",
        name: "Can I move to other area pair pages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cross-links to related area unit pairs are provided below.",
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
            <p className="mt-1 text-sm text-slate-500">Area · unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromSg} to {toSg} with a fixed input and output unit, step-by-step formula line, and
        reference tables. All calculations use square-meter-based definitions (international feet / yard
        standards, acre, hectare, etc.).
      </p>

      <AreaPairCalculator fromKey={fromKey} toKey={toKey} />

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
        <HowToConvertArea fromKey={fromKey} toKey={toKey} />
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
        <AreaConversionTablesPair fromKey={fromKey} toKey={toKey} />
      </section>

      <UnitConverterNonHubPairLinks category="area" fromKey={fromKey} toKey={toKey} />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/area"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Area Converter (all units)
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
