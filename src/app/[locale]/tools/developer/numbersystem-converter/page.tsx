import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";
import { loadToolContent } from "@/lib/load-tool-content";
import {
  buildFaqJsonLd,
  formatToolUiString,
  getToolContentEntry,
} from "@/lib/tool-content";
import { Link } from "@/components/I18nLink";
import ToolIcon from "@/components/ToolIcon";
import ToolPageGuide from "@/components/ToolPageGuide";
import NumberSystemConverter from "./NumberSystemConverter";
import ConversionGuide from "./ConversionGuide";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import { asMap, asText } from "@/lib/tool-ui-helpers";
import {
  getCanonicalNumberSystemSlug,
  NUMBER_SYSTEM_PAIR_KEYS,
  NUMBER_SYSTEM_PAIR_KEY_LABELS,
  type NumberSystemPairKey,
} from "@/utils/numberSystemConversion";

/** Hub-only guide: pair pages carry fixed-format conversion; avoid duplicating long copy there. */
const META_PATH = "/tools/developer/numbersystem-converter";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

/** Binary, Octal, Decimal, Hexadecimal, Character — all directed pairs (5×4 = 20). */
const NS_PAIR_LINKS: { from: NumberSystemPairKey; to: NumberSystemPairKey }[] = (() => {
  const pairs: { from: NumberSystemPairKey; to: NumberSystemPairKey }[] = [];
  for (const from of NUMBER_SYSTEM_PAIR_KEYS) {
    for (const to of NUMBER_SYSTEM_PAIR_KEYS) {
      if (from === to) continue;
      pairs.push({ from, to });
    }
  }
  return pairs;
})();

const NS_FAQ_LINKS = getFaqEntriesByCategory("number-system");
export default async function NumberSystemConverterPage({
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

  const hubContent = getToolContentEntry(toolContent, "/tools/developer");
  const faqJsonLd = buildFaqJsonLd(content.faq);
  const toolUi = asMap(content.ui);
  const pairBaseLabels = asMap(toolUi.bases);

  function pairDisplayName(key: NumberSystemPairKey): string {
    const map: Record<NumberSystemPairKey, string> = {
      bin: asText(pairBaseLabels.bin) || NUMBER_SYSTEM_PAIR_KEY_LABELS.bin,
      oct: asText(pairBaseLabels.oct) || NUMBER_SYSTEM_PAIR_KEY_LABELS.oct,
      dec: asText(pairBaseLabels.dec) || NUMBER_SYSTEM_PAIR_KEY_LABELS.dec,
      hex: asText(pairBaseLabels.hex) || NUMBER_SYSTEM_PAIR_KEY_LABELS.hex,
      char: asText(pairBaseLabels.char) || NUMBER_SYSTEM_PAIR_KEY_LABELS.char,
    };
    return map[key];
  }

  const guideIntroNode =
    content.guideIntroBefore && content.guideIntroLink1 ? (
      <p className="mb-6 text-sm leading-relaxed text-slate-400">
        {content.guideIntroBefore}{" "}
        <Link href="/tools/developer/ascii-code-converter" className="underline hover:text-slate-200">
          {content.guideIntroLink1}
        </Link>{" "}
        {content.guideIntroBetween}{" "}
        <Link href="/tools/developer/base64-encoder-decoder" className="underline hover:text-slate-200">
          {content.guideIntroLink2}
        </Link>
        {content.guideIntroAfter}
      </p>
    ) : undefined;

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

      <NumberSystemConverter />

      <div className="mt-12">
        <ConversionGuide
          fromBase="2"
          toBase="16"
          title={asText(toolUi.universalGuideTitle)}
          ui={content.ui}
        />
        <p className="mt-4 text-center text-xs text-slate-500">
          {asText(toolUi.universalGuideNote)}
        </p>
      </div>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">
          {asText(toolUi.pairGridTitle)}
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          {formatToolUiString(asText(toolUi.pairGridDesc), { count: NS_PAIR_LINKS.length })}
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {NS_PAIR_LINKS.map(({ from, to }) => {
            const href = `/tools/developer/numbersystem-converter/${getCanonicalNumberSystemSlug(from, to)}`;
            const fromName = pairDisplayName(from);
            const toName = pairDisplayName(to);
            return (
              <li key={`${from}-${to}`}>
                <Link
                  href={href}
                  className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
                >
                  <span className="font-medium text-slate-200">
                    {formatToolUiString(asText(toolUi.pairLinkTemplate), {
                      from,
                      to,
                      fromName,
                      toName,
                    })}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {locale === "en" ? (
          <div className="mt-10 border-t border-slate-700 pt-8">
            <h3 className="mb-4 text-base font-semibold text-slate-200">{asText(toolUi.faqSectionTitle)}</h3>
            <p className="mb-4 text-sm text-slate-500">
              {formatToolUiString(asText(toolUi.faqSectionDesc), { count: NS_FAQ_LINKS.length })}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {NS_FAQ_LINKS.map((faq) => (
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
        ) : null}
      </section>

      <ToolPageGuide
        title={content.guideTitle}
        introNode={guideIntroNode}
        sections={content.sections}
        className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8"
      />

      <div className="mt-8 flex gap-4">
        <Link
          href="/tools/developer"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          {content.backToHub}
        </Link>
        <Link href="/" className="text-slate-400 underline transition-colors hover:text-slate-200">
          {hubContent?.backToHome}
        </Link>
      </div>
    </div>
  );
}
