import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import { Link } from "@/components/I18nLink";
import ToolIcon from "@/components/ToolIcon";
import HubToolGrid from "@/components/HubToolGrid";
import ToolPageGuide from "@/components/ToolPageGuide";

const META_PATH = "/tools/language";

const LANGUAGE_PATHS = [
  "/tools/language/alphabet-study",
  "/tools/language/hiragana-study",
  "/tools/language/katakana-study",
  "/tools/language/hangul-study",
  "/tools/language/hiragana-katakana-converter",
  "/tools/language/hangul-to-hiragana",
  "/tools/language/hangul-to-katakana",
  "/tools/language/hiragana-to-hangul",
  "/tools/language/katakana-to-hangul",
] as const;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

export default async function LanguageToolsIndexPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);

  const content = getToolContentEntry(await loadToolContent(locale), META_PATH);
  if (!content) {
    throw new Error(`Missing toolContent for ${META_PATH}`);
  }

  const faqJsonLd = buildFaqJsonLd(content.faq);

  const guideIntroNode =
    content.guideIntroBefore && content.guideIntroLink1 ? (
      <p className="mb-6 text-sm leading-relaxed text-slate-400">
        {content.guideIntroBefore}{" "}
        <Link href="/tools/language/hiragana-study" className="underline hover:text-slate-200">
          {content.guideIntroLink1}
        </Link>{" "}
        {content.guideIntroBetween}{" "}
        <Link
          href="/tools/language/hiragana-katakana-converter"
          className="underline hover:text-slate-200"
        >
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
          <ToolIcon name="language" className="mb-4" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">{content.h1}</h1>
            <p className="mt-1 text-sm text-slate-500">{content.subtitle}</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">{content.intro}</p>

      <HubToolGrid paths={LANGUAGE_PATHS} />

      <ToolPageGuide
        title={content.guideTitle}
        introNode={guideIntroNode}
        sections={content.sections}
        className="mb-8"
      />

      <Link
        href="/"
        className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        {content.backToHome}
      </Link>
    </div>
  );
}
