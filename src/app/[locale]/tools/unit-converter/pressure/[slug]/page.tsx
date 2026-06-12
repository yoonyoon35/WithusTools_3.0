import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/components/I18nLink";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { createMetadata } from "@/lib/metadata";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import ToolIcon from "@/components/ToolIcon";
import { PressureConversionTablesPair } from "@/components/PressureConversionTable";
import PressurePairCalculator from "../PressurePairCalculator";
import HowToConvertPressure from "../HowToConvertPressure";
import UnitConverterNonHubPairLinks from "@/components/UnitConverterNonHubPairLinks";
import {
  getCanonicalPressureSlug,
  PRESSURE_HUB_KEYS,
  parsePressurePairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../pressurePairContent";
import { pressureUnitLabel } from "../pressurePairUi";

const PRESSURE_HUB_KEY_SET = new Set<string>(PRESSURE_HUB_KEYS);

function isPressureHubPair(from: string, to: string): boolean {
  return PRESSURE_HUB_KEY_SET.has(from) && PRESSURE_HUB_KEY_SET.has(to);
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  const pair = parsePressurePairSlug(params.slug);
  if (!pair || !isPressureHubPair(pair.from, pair.to)) {
    return createMetadata({
      title: "Pressure Conversion",
      noIndex: true,
      locale: locale as Locale,
    });
  }

  const toolContent = await loadToolContent(locale);
  const metaPath = `/tools/unit-converter/pressure/${params.slug}`;
  const content = getToolContentEntry(toolContent, metaPath);
  const { from, to } = pair;

  const title =
    content?.h1 ??
    `${pressureUnitLabel(content?.ui, from, "nameSg")} to ${pressureUnitLabel(content?.ui, to, "nameSg")} Converter`;
  const description =
    content?.intro ??
    `Convert ${from} to ${to} with formulas, examples, and conversion tables.`;

  return createMetadata({
    title: `${title} | WithUsTools`,
    description,
    path: metaPath,
    keywords: [from, to, "pressure converter", "pressure conversion", "withustools"],
    locale: locale as Locale,
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

export default async function PressurePairPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);

  const pair = parsePressurePairSlug(params.slug);
  if (!pair || !isPressureHubPair(pair.from, pair.to)) notFound();

  const metaPath = `/tools/unit-converter/pressure/${params.slug}`;
  const toolContent = await loadToolContent(locale);
  const content = getToolContentEntry(toolContent, metaPath);
  if (!content) throw new Error(`Missing toolContent for ${metaPath}`);

  const { from: fromKey, to: toKey } = pair;
  const pageUi = asMap(content.ui);
  const fromSg = pressureUnitLabel(content.ui, fromKey, "nameSg");
  const toSg = pressureUnitLabel(content.ui, toKey, "nameSg");
  const faqJsonLd = buildFaqJsonLd(content.faq);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">{content.h1}</h1>
            <p className="mt-1 text-sm text-slate-500">{content.subtitle}</p>
          </div>
        </div>
      </div>

      {content.intro ? (
        <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">{content.intro}</p>
      ) : null}

      <Suspense
        fallback={
          <div
            className="min-h-[220px] rounded-xl border border-border bg-surface p-6"
            aria-busy="true"
            aria-label="Loading calculator"
          />
        }
      >
        <PressurePairCalculator fromKey={fromKey} toKey={toKey} metaPath={metaPath} />
      </Suspense>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-200">
            {formatUi(asText(pageUi.aboutTitle), { unit: fromSg })}
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            {getUnitDescription(fromKey, content.ui)}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-200">
            {formatUi(asText(pageUi.aboutTitle), { unit: toSg })}
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            {getUnitDescription(toKey, content.ui)}
          </p>
        </div>
      </section>

      <div className="mt-10">
        <HowToConvertPressure fromKey={fromKey} toKey={toKey} ui={content.ui} />
      </div>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">{asText(pageUi.summaryTitle)}</h2>
        <p className="text-sm leading-relaxed text-slate-400">
          {getDetailedFormulaExplanation(fromKey, toKey, content.ui)}
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">{asText(pageUi.relationshipTitle)}</h2>
        <p className="text-sm leading-relaxed text-slate-400">
          {getRelationshipContext(fromKey, toKey, content.ui)}
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">
          {asText(pageUi.conversionTablesTitle)}
        </h2>
        <PressureConversionTablesPair fromKey={fromKey} toKey={toKey} ui={content.ui} />
      </section>

      <UnitConverterNonHubPairLinks
        category="pressure"
        fromKey={fromKey}
        toKey={toKey}
        ui={content.ui}
      />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/pressure"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          {content.backToHub}
        </Link>
        <Link
          href="/tools/unit-converter"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          {content.backToDeveloper}
        </Link>
      </div>
    </div>
  );
}
