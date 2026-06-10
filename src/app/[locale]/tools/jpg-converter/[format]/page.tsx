import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import ConverterLoadingFallback from "../ConverterLoadingFallback";
import { Link } from "@/components/I18nLink";
import ToolIcon from "@/components/ToolIcon";
import ToolPageGuide from "@/components/ToolPageGuide";
import { JPG_CONVERTER_FORMATS } from "@/data/prerender-segments";
import type { ImageFormat } from "../JPGConverter";

const PdfToJpgConverter = dynamic(() => import("../PdfToJpgConverter"), {
  ssr: false,
  loading: () => <ConverterLoadingFallback />,
});
const JPGConverter = dynamic(() => import("../JPGConverter"), {
  ssr: false,
  loading: () => <ConverterLoadingFallback />,
});

const VALID_FORMATS = JPG_CONVERTER_FORMATS;

const FORMAT_CONFIG: Record<
  string,
  {
    acceptTypes: string;
    hasBackgroundColor?: boolean;
    hasDimensions?: boolean;
  }
> = {
  heic: { acceptTypes: ".heic,.heif,image/heic,image/heif" },
  heif: { acceptTypes: ".heif,.heic,image/heif,image/heic" },
  avif: { acceptTypes: ".avif,image/avif" },
  bmp: { acceptTypes: ".bmp,image/bmp" },
  png: { acceptTypes: ".png,image/png", hasBackgroundColor: true },
  svg: { acceptTypes: ".svg,image/svg+xml", hasDimensions: true },
  tiff: { acceptTypes: ".tiff,.tif,image/tiff" },
  webp: { acceptTypes: ".webp,image/webp" },
  psd: { acceptTypes: ".psd,image/vnd.adobe.photoshop" },
  jfif: { acceptTypes: ".jfif,.jfi,image/jpeg" },
  ico: { acceptTypes: ".ico,image/x-icon", hasBackgroundColor: true },
  ai: { acceptTypes: ".ai" },
  dng: { acceptTypes: ".dng,image/x-adobe-dng" },
  cr2: { acceptTypes: ".cr2,image/x-canon-cr2" },
  cr3: { acceptTypes: ".cr3,image/x-canon-cr3" },
  tga: { acceptTypes: ".tga,image/x-tga", hasBackgroundColor: true },
  pdf: { acceptTypes: ".pdf,application/pdf" },
};

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

  const metaPath = `/tools/jpg-converter/${format}`;
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

export default async function JPGConverterFormatPage({
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

  const metaPath = `/tools/jpg-converter/${format}`;
  const toolContent = await loadToolContent(loc);
  const content = getToolContentEntry(toolContent, metaPath);
  if (!content) {
    throw new Error(`Missing toolContent for ${metaPath}`);
  }

  const hubContent = getToolContentEntry(toolContent, "/tools/jpg-converter");
  const config = FORMAT_CONFIG[format];
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

      {format === "pdf" ? (
        <PdfToJpgConverter />
      ) : (
        <JPGConverter
          format={format as ImageFormat}
          displayName={displayName}
          acceptTypes={config.acceptTypes}
          hasBackgroundColor={config.hasBackgroundColor}
          hasDimensions={config.hasDimensions}
        />
      )}

      <ToolPageGuide
        title={content.guideTitle}
        intro={content.guideIntro}
        sections={content.sections}
        className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8"
      />

      <div className="mt-8 flex gap-4">
        <Link
          href="/tools/jpg-converter"
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
