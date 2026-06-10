import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/components/I18nLink";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import ToolIcon from "@/components/ToolIcon";
import ToolPageGuide from "@/components/ToolPageGuide";
import {
  COLOR_FORMAT_LABELS,
  getAllColorFormatPairs,
  getCanonicalColorPairSlug,
  parseColorPairSlug,
} from "@/utils/colorFormatConversions";
import ColorPairCalculator from "../ColorPairCalculator";
import HowToConvertColor from "../HowToConvertColor";
import ColorConversionExamples from "../ColorConversionExamples";
import ColorPairCrossLinks from "../ColorPairCrossLinks";
import CmykAccuracyNote from "../CmykAccuracyNote";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const pair = parseColorPairSlug(params.slug);
  if (!pair) {
    return createMetadata({title: "Color Format Conversion", noIndex: true,
    locale: params.locale as Locale,
  });
  }

  const { from, to } = pair;
  const fromS = COLOR_FORMAT_LABELS[from].short;
  const toS = COLOR_FORMAT_LABELS[to].short;

  const title = `${fromS} to ${toS} Converter | Color Code Conversion`;
  const description = `Convert ${fromS} to ${toS} online. Free ${fromS} to ${toS} converter with examples and copy-ready output. Works in your browser.`;

  return createMetadata({title,
    description,
    path: `/tools/developer/color-picker/converter/${params.slug}`,
    keywords: [
      `${fromS} to ${toS}`,
      `${fromS.toLowerCase()} to ${toS.toLowerCase()}`,
      "color converter",
      "hex rgb hsl",
      "withustools",
    ],
    locale: params.locale as Locale,
  });
}

export function generateStaticParams() {
  return getAllColorFormatPairs().map(({ from, to }) => ({
    slug: getCanonicalColorPairSlug(from, to),
  }));
}

export default async function ColorFormatPairPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);
  const pair = parseColorPairSlug(params.slug);
  if (!pair) notFound();
  const toolContent = await loadToolContent(locale);
  const metaPath = `/tools/developer/color-picker/converter/${params.slug}`;
  const content = getToolContentEntry(toolContent, metaPath);
  if (!content) throw new Error(`Missing toolContent for ${metaPath}`);
  const pageUi = content.ui ?? {};

  const { from: fromKey, to: toKey } = pair;
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

      <ColorPairCalculator
        fromKey={fromKey}
        toKey={toKey}
        metaPath={`/tools/developer/color-picker/converter/${params.slug}`}
      />

      <CmykAccuracyNote fromKey={fromKey} toKey={toKey} ui={pageUi} />

      <div className="mt-10">
        <HowToConvertColor fromKey={fromKey} toKey={toKey} ui={pageUi} />
      </div>

      <ColorConversionExamples fromKey={fromKey} toKey={toKey} ui={pageUi} />

      <ColorPairCrossLinks fromKey={fromKey} toKey={toKey} ui={pageUi} />

      <ToolPageGuide
        title={content.guideTitle}
        sections={content.sections}
        className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8"
      />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/developer/color-picker"
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
