import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import { Link } from "@/components/I18nLink";
import ToolIcon from "@/components/ToolIcon";
import ToolPageGuide from "@/components/ToolPageGuide";
import { GIF_CONVERTER_FORMATS } from "@/data/prerender-segments";
import type { GifConverterFormat } from "@/data/prerender-segments";
import ConverterLoadingFallback from "../ConverterLoadingFallback";

const ImagesToAnimatedGif = dynamic(
  () => import("@/app/[locale]/tools/image/images-to-animated-gif/ImagesToAnimatedGif"),
  {
    ssr: false,
    loading: () => <ConverterLoadingFallback />,
  }
);

const PdfToAnimatedGif = dynamic(() => import("../PdfToAnimatedGif"), {
  ssr: false,
  loading: () => <ConverterLoadingFallback />,
});

const VALID_FORMATS = GIF_CONVERTER_FORMATS;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; format: string }>;
}): Promise<Metadata> {
  const { locale, format } = await params;
  const loc = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  if (!VALID_FORMATS.includes(format as (typeof VALID_FORMATS)[number])) {
    return createMetadata({ title: "Not Found", noIndex: true, locale: loc });
  }

  const metaPath = `/tools/gif-converter/${format}`;
  const content = getToolContentEntry(await loadToolContent(loc), metaPath);
  if (!content) {
    return createMetadata({ path: metaPath, locale: loc });
  }

  return createMetadata({
    title: content.h1,
    description: content.metaDescription ?? content.subtitle,
    path: metaPath,
    locale: loc,
  });
}

export async function generateStaticParams() {
  return VALID_FORMATS.map((format) => ({ format }));
}

export default async function GifConverterFormatPage({
  params,
}: {
  params: Promise<{ locale: string; format: string }>;
}) {
  const { locale, format } = await params;

  if (!VALID_FORMATS.includes(format as (typeof VALID_FORMATS)[number])) {
    notFound();
  }

  const loc = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(loc);

  const fmt = format as GifConverterFormat;
  const metaPath = `/tools/gif-converter/${format}`;
  const toolContent = await loadToolContent(loc);
  const content = getToolContentEntry(toolContent, metaPath);
  if (!content) {
    throw new Error(`Missing toolContent for ${metaPath}`);
  }

  const hubContent = getToolContentEntry(toolContent, "/tools/gif-converter");
  const displayName = content.displayName ?? format.toUpperCase();
  const faqJsonLd = buildFaqJsonLd(content.faq);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">{content.h1}</h1>
            <p className="mt-1 text-sm text-slate-500">{content.subtitle}</p>
          </div>
        </div>
      </div>

      {fmt === "pdf" ? (
        <PdfToAnimatedGif />
      ) : (
        <ImagesToAnimatedGif sourceFormat={fmt} displayName={displayName} />
      )}

      <ToolPageGuide
        title={content.guideTitle}
        intro={content.guideIntro}
        sections={content.sections}
        className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8"
      />

      <div className="mt-8 flex gap-4">
        <Link
          href="/tools/gif-converter"
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
