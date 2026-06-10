import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/components/I18nLink";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import ToolIcon from "@/components/ToolIcon";
import { EnergyConversionTablesPair } from "@/components/EnergyConversionTable";
import EnergyPairCalculator from "../EnergyPairCalculator";
import HowToConvertEnergy from "../HowToConvertEnergy";
import UnitConverterNonHubPairLinks from "@/components/UnitConverterNonHubPairLinks";
import {
  getCanonicalEnergySlug,
  getEnergyKeys,
  parseEnergyPairSlug,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getRelationshipContext,
  getUnitDescription,
} from "../energyPairContent";
import { energyUnitLabel } from "../energyPairUi";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  const pair = parseEnergyPairSlug(params.slug);
  if (!pair) {
    return createMetadata({
      title: "Energy Conversion",
      noIndex: true,
      locale: locale as Locale,
    });
  }

  const toolContent = await loadToolContent(locale);
  const metaPath = `/tools/unit-converter/energy/${params.slug}`;
  const content = getToolContentEntry(toolContent, metaPath);
  const { from, to } = pair;

  const title =
    content?.h1 ??
    `${energyUnitLabel(content?.ui, from, "nameSg")} to ${energyUnitLabel(content?.ui, to, "nameSg")} Converter`;
  const description =
    content?.intro ??
    `Convert ${from} to ${to} with formulas, examples, and conversion tables.`;

  return createMetadata({
    title: `${title} | WithUsTools`,
    description,
    path: metaPath,
    keywords: [from, to, "energy converter", "joules", "withustools"],
    locale: locale as Locale,
  });
}

export function generateStaticParams() {
  const keys = getEnergyKeys();
  const slugs: { slug: string }[] = [];
  for (const from of keys) {
    for (const to of keys) {
      if (from === to) continue;
      slugs.push({ slug: getCanonicalEnergySlug(from, to) });
    }
  }
  return slugs;
}

export default async function EnergyPairPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);

  const pair = parseEnergyPairSlug(params.slug);
  if (!pair) notFound();

  const metaPath = `/tools/unit-converter/energy/${params.slug}`;
  const toolContent = await loadToolContent(locale);
  const content = getToolContentEntry(toolContent, metaPath);
  if (!content) throw new Error(`Missing toolContent for ${metaPath}`);

  const { from: fromKey, to: toKey } = pair;
  const pageUi = asMap(content.ui);
  const fromSg = energyUnitLabel(content.ui, fromKey, "nameSg");
  const toSg = energyUnitLabel(content.ui, toKey, "nameSg");
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

      <EnergyPairCalculator fromKey={fromKey} toKey={toKey} metaPath={metaPath} />

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
        <HowToConvertEnergy fromKey={fromKey} toKey={toKey} ui={content.ui} />
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
        <EnergyConversionTablesPair fromKey={fromKey} toKey={toKey} ui={content.ui} />
      </section>

      <UnitConverterNonHubPairLinks
        category="energy"
        fromKey={fromKey}
        toKey={toKey}
        ui={content.ui}
      />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/unit-converter/energy"
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
