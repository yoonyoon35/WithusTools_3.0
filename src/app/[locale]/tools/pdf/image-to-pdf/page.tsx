import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import { Link } from "@/components/I18nLink";
import ToolIcon from "@/components/ToolIcon";
import ToolPageGuide from "@/components/ToolPageGuide";
import dynamic from "next/dynamic";
import PdfToolLoadingFallback from "../PdfToolLoadingFallback";

const META_PATH = "/tools/pdf/image-to-pdf";

const ImageToPdfConverter = dynamic(
  () => import("../../pdf-converter/ImageToPdfConverter"),
  {
    ssr: false,
    loading: () => <PdfToolLoadingFallback />,
  }
);

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

export default async function ImageToPdfPage({
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

  const hubContent = getToolContentEntry(toolContent, "/tools/pdf");
  const faqJsonLd = buildFaqJsonLd(content.faq);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="pdf" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">{content.h1}</h1>
            <p className="mt-1 text-sm text-slate-500">{content.subtitle}</p>
          </div>
        </div>
      </div>

      {content.intro ? (
        <p className="mx-auto mb-6 max-w-2xl text-center text-slate-400">{content.intro}</p>
      ) : null}

      <ImageToPdfConverter />

      {content.converterLinksTitle && content.relatedLinks?.length ? (
        <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-2 text-sm font-semibold text-slate-200">
            {content.converterLinksTitle}
          </h2>
          {content.converterLinksIntro ? (
            <p className="mb-4 text-sm text-slate-400">{content.converterLinksIntro}</p>
          ) : null}
          <div className="flex flex-wrap gap-2">
            {content.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border bg-slate-900/50 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100"
              >
                {link.question}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <ToolPageGuide
        title={content.guideTitle}
        sections={content.sections}
        className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8"
      />

      <div className="mt-8 flex gap-4">
        <Link
          href="/tools/pdf"
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
