import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import ToolIcon from "@/components/ToolIcon";
import { Link } from "@/components/I18nLink";
import ToolPageGuide from "@/components/ToolPageGuide";
import ProgrammerCalculator from "./ProgrammerCalculator";
import ProgrammerCalculatorTechnicalReference from "./ProgrammerCalculatorTechnicalReference";

const META_PATH = "/tools/calculator/programmer-calculator";

const PROGRAMMER_DOC_SECTION =
  "w-full rounded-xl border border-border bg-surface p-6 sm:p-8";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

export default async function ProgrammerCalculatorPage({
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
  const hubContent = getToolContentEntry(
    await loadToolContent(locale),
    "/tools/calculator"
  );

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

      <section aria-label="Programmer calculator" className="mx-auto w-full max-w-xl">
        <ProgrammerCalculator />
      </section>

      <section aria-label="Technical reference" className={`mx-auto mt-10 ${PROGRAMMER_DOC_SECTION}`}>
        <ProgrammerCalculatorTechnicalReference />
      </section>

      <ToolPageGuide
        title={content.guideTitle}
        intro={content.guideIntro}
        sections={content.sections}
        className={`mx-auto mt-12 ${PROGRAMMER_DOC_SECTION}`}
      />

      <div className="mt-8 flex gap-4">
        <Link
          href="/tools/calculator"
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
