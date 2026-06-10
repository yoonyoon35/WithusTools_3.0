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
import { TemperatureConversionTablesPair } from "@/components/TemperatureConversionTable";
import TemperaturePairCalculator from "../TemperaturePairCalculator";
import HowToConvertTemperature from "../HowToConvertTemperature";
import UnitConverterNonHubPairLinks from "@/components/UnitConverterNonHubPairLinks";
import {
  getCanonicalTemperatureSlug,
  TEMPERATURE_HUB_KEYS,
  parseTemperaturePairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../temperaturePairContent";
import { temperatureUnitLabel } from "../temperaturePairUi";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  const pair = parseTemperaturePairSlug(params.slug);
  if (!pair) {
    return createMetadata({
      title: "Temperature Conversion",
      noIndex: true,
      locale: locale as Locale,
    });
  }

  const toolContent = await loadToolContent(locale);
  const metaPath = `/tools/unit-converter/temperature/${params.slug}`;
  const content = getToolContentEntry(toolContent, metaPath);
  const { from, to } = pair;

  const title =
    content?.h1 ??
    `${temperatureUnitLabel(content?.ui, from, "nameSg")} to ${temperatureUnitLabel(content?.ui, to, "nameSg")} Converter`;
  const description =
    content?.intro ??
    `Convert ${from} to ${to} with offset-aware formulas, examples, and conversion tables.`;

  return createMetadata({
    title: `${title} | WithUsTools`,
    description,
    path: metaPath,
    keywords: [from, to, "temperature converter", "celsius fahrenheit kelvin", "withustools"],
    locale: locale as Locale,
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

export default async function TemperaturePairPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);

  const pair = parseTemperaturePairSlug(params.slug);
  if (!pair) notFound();

  const metaPath = `/tools/unit-converter/temperature/${params.slug}`;
  const toolContent = await loadToolContent(locale);
  const content = getToolContentEntry(toolContent, metaPath);
  if (!content) throw new Error(`Missing toolContent for ${metaPath}`);

  const { from: fromKey, to: toKey } = pair;
  const pageUi = asMap(content.ui);
  const fromSg = temperatureUnitLabel(content.ui, fromKey, "nameSg");
  const toSg = temperatureUnitLabel(content.ui, toKey, "nameSg");
  const faqJsonLd = buildFaqJsonLd(content.faq);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
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
        <TemperaturePairCalculator fromKey={fromKey} toKey={toKey} metaPath={metaPath} />
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
        <HowToConvertTemperature fromKey={fromKey} toKey={toKey} ui={content.ui} />
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
        <TemperatureConversionTablesPair fromKey={fromKey} toKey={toKey} ui={content.ui} />
      </section>

      <UnitConverterNonHubPairLinks
        category="temperature"
        fromKey={fromKey}
        toKey={toKey}
        ui={content.ui}
      />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/temperature"
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
