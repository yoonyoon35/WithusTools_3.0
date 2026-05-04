import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import type { GifConverterFormat } from "@/data/prerender-segments";
import { GIF_CONVERTER_FORMATS } from "@/data/prerender-segments";
import { GIF_FORMAT_PAGE_META } from "../gif-format-page-meta";
import { buildGifFormatGuide, GIF_PDF_GUIDE } from "../converter-content";

const ImagesToAnimatedGif = dynamic(
  () => import("@/app/tools/image/images-to-animated-gif/ImagesToAnimatedGif"),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
        Loading converter...
      </div>
    ),
  }
);

const PdfToAnimatedGif = dynamic(() => import("../PdfToAnimatedGif"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
      Loading converter...
    </div>
  ),
});

const VALID_FORMATS = GIF_CONVERTER_FORMATS;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ format: string }>;
}): Promise<Metadata> {
  const { format } = await params;
  const meta = GIF_FORMAT_PAGE_META[format as GifConverterFormat];

  if (!meta) return createMetadata({ title: "Not Found", noIndex: true });

  return createMetadata({
    title: meta.title,
    description: meta.description,
    path: `/tools/gif-converter/${format}`,
    keywords: [...meta.keywords, "GIF converter", "withustools"],
  });
}

export async function generateStaticParams() {
  return VALID_FORMATS.map((format) => ({ format }));
}

export default async function GifConverterFormatPage({
  params,
}: {
  params: Promise<{ format: string }>;
}) {
  const { format } = await params;

  if (!VALID_FORMATS.includes(format as (typeof VALID_FORMATS)[number])) {
    notFound();
  }

  const fmt = format as GifConverterFormat;
  const meta = GIF_FORMAT_PAGE_META[fmt];
  const guide = fmt === "pdf" ? GIF_PDF_GUIDE : buildGifFormatGuide(meta.displayName);

  const faqMulti = [
    {
      question: `How can I use this ${meta.displayName} to GIF tool on this page?`,
      answer:
        fmt === "pdf"
          ? "Upload one PDF, wait for pages to render as frames, adjust delay and canvas options, then create and download a single GIF file."
          : `Add two or more ${meta.displayName} files as frames, set delay and canvas options, create the GIF, and download it—all in your browser.`,
    },
    {
      question: `How does this page build an animated GIF from ${meta.displayName} without uploading?`,
      answer:
        fmt === "pdf"
          ? "pdf.js renders each page to a canvas locally; gif.js encodes frames in Web Workers on your device."
          : "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local.",
    },
    {
      question: "What if I need mixed image types in one GIF?",
      answer:
        "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls.",
    },
    {
      question: `When is ${meta.displayName} to GIF a good fit?`,
      answer:
        fmt === "pdf"
          ? "When you already have a multi-page PDF and want one lightweight GIF preview or shareable animation."
          : `When every frame is already ${meta.displayName}, so decoding and color behavior stay consistent across the sequence.`,
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqMulti.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

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
            <h1 className="text-3xl font-bold text-slate-100">
              {meta.displayName} to GIF
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Online {meta.displayName} to animated GIF in your browser
            </p>
          </div>
        </div>
      </div>

      {fmt === "pdf" ? <PdfToAnimatedGif /> : <ImagesToAnimatedGif sourceFormat={fmt} />}

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          {meta.displayName} to GIF Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          {fmt === "pdf"
            ? "Use this page when you have one multi-page PDF and want each page as a frame in a single animated GIF."
            : `Use this page when every animation frame is a ${meta.displayName} file and you want the same client-side GIF controls as other format routes.`}
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I use this {meta.displayName} to GIF tool on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {guide.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this page turn {meta.displayName} into an animated GIF without uploading?
            </h3>
            <div className="space-y-2">
              {guide.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. How does this route fit the GIF Converter hub pattern?
            </h3>
            <div className="space-y-2">
              {guide.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why run {meta.displayName}-to-GIF encoding in the browser?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {guide.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is {meta.displayName} to GIF a practical choice?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {guide.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
