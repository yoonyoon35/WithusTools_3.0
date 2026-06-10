import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import { Link } from "@/components/I18nLink";
import ToolIcon from "@/components/ToolIcon";
import ToolPageGuide from "@/components/ToolPageGuide";
import Calculator from "./Calculator";

const META_PATH = "/tools/calculator/calculator";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

export default async function CalculatorPage({
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

      <Calculator />

      <ToolPageGuide
        title={content.guideTitle}
        intro={content.guideIntro}
        sections={content.sections}
        className="mt-12"
      />

      <Link
        href="/tools/calculator"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        {content.backToHub}
      </Link>
    </div>
  );
}
