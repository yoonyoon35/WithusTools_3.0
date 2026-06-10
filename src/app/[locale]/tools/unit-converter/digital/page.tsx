import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, formatToolUiString, getToolContentEntry } from "@/lib/tool-content";
import { Link } from "@/components/I18nLink";
import ToolIcon from "@/components/ToolIcon";
import ToolPageGuide from "@/components/ToolPageGuide";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import { asMap, asText } from "@/lib/tool-ui-helpers";
import UnitConverter from "../UnitConverter";
import { getCanonicalDigitalSlug, DIGITAL_HUB_KEYS } from "@/utils/conversions";
import { digitalUnitLabel, digitalUnitSlug } from "./digitalPairUi";

const META_PATH = "/tools/unit-converter/digital";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

const DIGITAL_PAIR_LINKS: { from: string; to: string }[] = (() => {
  const pairs: { from: string; to: string }[] = [];
  for (const from of DIGITAL_HUB_KEYS) {
    for (const to of DIGITAL_HUB_KEYS) {
      if (from === to) continue;
      pairs.push({ from, to });
    }
  }
  return pairs;
})();

export default async function DigitalStorageConverterPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);

  const toolContent = await loadToolContent(locale);
  const content = getToolContentEntry(toolContent, META_PATH);
  if (!content) throw new Error(`Missing toolContent for ${META_PATH}`);

  const toolUi = asMap(content.ui);
  const faqJsonLd = buildFaqJsonLd(content.faq);
  const digitalFaqLinks = getFaqEntriesByCategory("digital", locale);
  const converterTitle = asText(toolUi.converterTitle) || "Convert Digital Storage";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">{content.h1}</h1>
            <p className="mt-1 text-sm text-slate-500">{content.subtitle}</p>
          </div>
        </div>
      </div>

      {content.intro ? (
        <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">{content.intro}</p>
      ) : null}

      <UnitConverter category="digital" title={converterTitle} ui={content.ui} />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">{asText(toolUi.pairGridTitle)}</h2>
        <p className="mb-6 text-sm text-slate-500">
          {formatToolUiString(asText(toolUi.pairGridDesc), { count: DIGITAL_PAIR_LINKS.length })}
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DIGITAL_PAIR_LINKS.map(({ from, to }) => {
            const href = `/tools/unit-converter/digital/${getCanonicalDigitalSlug(from, to)}`;
            const fromName = digitalUnitLabel(content.ui, from, "nameSg");
            const toName = digitalUnitLabel(content.ui, to, "nameSg");
            const fromSlug = digitalUnitSlug(from);
            const toSlug = digitalUnitSlug(to);
            return (
              <li key={`${from}-${to}`}>
                <Link
                  href={href}
                  className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
                >
                  <span className="font-medium text-slate-200">
                    {formatToolUiString(asText(toolUi.pairLinkTemplate), {
                      fromSlug,
                      toSlug,
                      fromName,
                      toName,
                    })}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 border-t border-slate-700 pt-8">
          <h3 className="mb-4 text-base font-semibold text-slate-200">{asText(toolUi.faqSectionTitle)}</h3>
          <p className="mb-4 text-sm text-slate-500">
            {formatToolUiString(asText(toolUi.faqSectionDesc), { count: digitalFaqLinks.length })}
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {digitalFaqLinks.map((faq) => (
              <li key={faq.slug}>
                <Link
                  href={`/faq/${faq.category}/${faq.slug}`}
                  className="block rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-800/60 hover:text-slate-100"
                >
                  {faq.question}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ToolPageGuide
        title={content.guideTitle}
        sections={content.sections}
        className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8"
      />

      <Link
        href="/tools/unit-converter"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        {content.backToHub}
      </Link>
    </div>
  );
}
