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

const META_PATH = "/tools/unit-converter";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

const UNIT_CONVERTER_PATHS = [
  "/tools/unit-converter/length",
  "/tools/unit-converter/weight",
  "/tools/unit-converter/temperature",
  "/tools/unit-converter/area",
  "/tools/unit-converter/volume",
  "/tools/unit-converter/speed",
  "/tools/unit-converter/time",
  "/tools/unit-converter/digital",
  "/tools/unit-converter/pressure",
  "/tools/unit-converter/energy",
  "/tools/unit-converter/power",
  "/tools/unit-converter/angle",
] as const;

export default async function UnitConverterIndexPage({
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

  const popularIntroNode =
    content.guideIntroBefore && content.guideIntroLink1 ? (
      <p className="text-sm leading-relaxed text-slate-400">
        {content.guideIntroBefore}{" "}
        <Link href="/tools/unit-converter/length" className="underline hover:text-slate-200">
          {content.guideIntroLink1}
        </Link>{" "}
        {content.guideIntroBetween}{" "}
        <Link href="/tools/unit-converter/temperature" className="underline hover:text-slate-200">
          {content.guideIntroLink2}
        </Link>{" "}
        {content.guideIntroBetween}{" "}
        <Link href="/tools/unit-converter/weight" className="underline hover:text-slate-200">
          {content.guideIntroLink3}
        </Link>
        {content.guideIntroAfter}
      </p>
    ) : null;

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

      <HubToolGrid paths={UNIT_CONVERTER_PATHS} />

      <ToolPageGuide
        title={content.guideTitle}
        sections={content.sections}
        className="mb-8"
      />

      {content.popularSectionTitle && popularIntroNode ? (
        <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-semibold text-slate-200">
            {content.popularSectionTitle}
          </h2>
          {popularIntroNode}
        </section>
      ) : null}

      <Link
        href="/"
        className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        {content.backToHome}
      </Link>
    </div>
  );
}
