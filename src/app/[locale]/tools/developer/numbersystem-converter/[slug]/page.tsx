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
import ToolPageGuide from "@/components/ToolPageGuide";
import { NumberSystemConversionTablesPair } from "@/components/NumberSystemConversionTable";
import NumberSystemPairCalculator from "../NumberSystemPairCalculator";
import ConversionGuide from "../ConversionGuide";
import NumberSystemOtherPairLinks from "../NumberSystemOtherPairLinks";
import { pairKeyLabel } from "../numberSystemPairUi";
import {
  getCanonicalNumberSystemSlug,
  NUMBER_SYSTEM_PAIR_KEYS,
  NUMBER_SYSTEM_PAIR_KEY_LABELS,
  pairKeyToBase,
  parseNumberSystemPairSlug,
} from "@/utils/numberSystemConversion";

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const from of NUMBER_SYSTEM_PAIR_KEYS) {
    for (const to of NUMBER_SYSTEM_PAIR_KEYS) {
      if (from === to) continue;
      params.push({ slug: getCanonicalNumberSystemSlug(from, to) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const pair = parseNumberSystemPairSlug(params.slug);
  if (!pair) {
    return createMetadata({title: "Number System Conversion", noIndex: true,
    locale: params.locale as Locale,
  });
  }
  const fromName = NUMBER_SYSTEM_PAIR_KEY_LABELS[pair.from];
  const toName = NUMBER_SYSTEM_PAIR_KEY_LABELS[pair.to];
  const title = `${fromName} to ${toName} Converter | Number System`;
  const description = `Convert ${fromName} to ${toName} — step-by-step formulas, examples (including fractional radix on numeric bases), and tables. Same parsing as the main Number System Converter.`;

  return createMetadata({title,
    description,
    path: `/tools/developer/numbersystem-converter/${params.slug}`,
    keywords: [
      `${fromName} to ${toName}`,
      "number system converter",
      "radix converter",
      "binary octal decimal hex",
      "withustools",
    ],
    locale: params.locale as Locale,
  });
}

export default async function NumberSystemPairPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);
  const pair = parseNumberSystemPairSlug(params.slug);
  if (!pair) notFound();
  const toolContent = await loadToolContent(locale);
  const metaPath = `/tools/developer/numbersystem-converter/${params.slug}`;
  const content = getToolContentEntry(toolContent, metaPath);
  if (!content) throw new Error(`Missing toolContent for ${metaPath}`);
  const pageUi = content.ui ?? {};
  const pairUi = asMap(pageUi);

  const fromBase = pairKeyToBase(pair.from);
  const toBase = pairKeyToBase(pair.to);
  const fromName = pairKeyLabel(pageUi, pair.from);
  const toName = pairKeyLabel(pageUi, pair.to);
  const faqJsonLd = buildFaqJsonLd(content.faq);

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

      <NumberSystemPairCalculator
        fromBase={fromBase}
        toBase={toBase}
        metaPath={`/tools/developer/numbersystem-converter/${params.slug}`}
      />

      <div className="mt-10">
        <ConversionGuide
          fromBase={fromBase}
          toBase={toBase}
          title={formatUi(asText(pairUi.howToConvertTitle), {
            from: fromName,
            to: toName,
          })}
          ui={pageUi}
        />
      </div>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">{asText(pairUi.conversionTablesTitle)}</h2>
        <NumberSystemConversionTablesPair
          fromBase={fromBase}
          toBase={toBase}
          fromLabel={fromName}
          toLabel={toName}
          inputSuffix={asText(pairUi.tableInputSuffix)}
          outputSuffix={asText(pairUi.tableOutputSuffix)}
        />
      </section>

      <NumberSystemOtherPairLinks fromPairKey={pair.from} toPairKey={pair.to} ui={pageUi} />

      <ToolPageGuide
        title={content.guideTitle}
        sections={content.sections}
        className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8"
      />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/developer/numbersystem-converter"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          {content.backToHub}
        </Link>
        <Link href="/tools/developer" className="text-slate-400 underline transition-colors hover:text-slate-200">
          {content.backToDeveloper}
        </Link>
      </div>
    </div>
  );
}
