import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PDF_CONVERTER_FORMATS } from "@/data/prerender-segments";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { PDF_FORMAT_GUIDE } from "../converter-content";

const ImageToPdfConverter = dynamic(() => import("../ImageToPdfConverter"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
      Loading converter...
    </div>
  ),
});

const VALID_FORMATS = PDF_CONVERTER_FORMATS;

const FORMAT_META: Record<
  string,
  {
    title: string;
    description: string;
    displayName: string;
    keywords?: string[];
  }
> = {
  jpg: {
    title: "JPG to PDF",
    description:
      "Free JPG to PDF converter. Convert JPG images to PDF with zero white margins and preserved aspect ratio. Combine multiple images into one PDF. No upload—processing runs in your browser.",
    displayName: "JPG",
    keywords: [
      "JPG to PDF",
      "convert JPG to PDF",
      "image to PDF",
      "combine images to PDF",
      "free JPG to PDF online",
    ],
  },
  heic: {
    title: "HEIC to PDF",
    description:
      "Free HEIC to PDF converter. Convert iPhone HEIC/HEIF photos to PDF with zero white margins and preserved aspect ratio. Combine multiple HEIC files into one PDF. Uses heic2any in your browser—no upload.",
    displayName: "HEIC",
    keywords: [
      "HEIC to PDF",
      "convert HEIC to PDF",
      "iPhone HEIC to PDF",
      "HEIC to PDF online",
      "HEIF to PDF",
      "free HEIC to PDF",
    ],
  },
  heif: {
    title: "HEIF to PDF",
    description:
      "Free HEIF to PDF converter. Convert HEIF/HEIC images to PDF with zero white margins and preserved aspect ratio. Combine multiple files into one PDF. Uses heic2any in your browser—no upload.",
    displayName: "HEIF",
    keywords: [
      "HEIF to PDF",
      "convert HEIF to PDF",
      "HEIC to PDF",
      "HEIF to PDF online",
      "free HEIF to PDF",
    ],
  },
  png: {
    title: "PNG to PDF",
    description:
      "Free PNG to PDF converter. Convert PNG images to PDF with zero white margins and preserved aspect ratio. Combine multiple PNGs into one PDF. Supports transparency. No upload—processing runs in your browser.",
    displayName: "PNG",
    keywords: [
      "PNG to PDF",
      "convert PNG to PDF",
      "PNG to PDF online",
      "combine PNG to PDF",
      "free PNG to PDF",
    ],
  },
  webp: {
    title: "WEBP to PDF",
    description:
      "Free WEBP to PDF converter. Convert WEBP images to PDF with zero white margins and preserved aspect ratio. Combine multiple WEBP files into one PDF. No upload—processing runs in your browser.",
    displayName: "WEBP",
    keywords: [
      "WEBP to PDF",
      "convert WEBP to PDF",
      "WEBP to PDF online",
      "combine WEBP to PDF",
      "free WEBP to PDF",
    ],
  },
  avif: {
    title: "AVIF to PDF",
    description:
      "Free AVIF to PDF converter. Convert AVIF images to PDF with zero white margins and preserved aspect ratio. Combine multiple AVIF files into one PDF. Browser-native decode—no upload.",
    displayName: "AVIF",
    keywords: [
      "AVIF to PDF",
      "convert AVIF to PDF",
      "AVIF to PDF online",
      "combine AVIF to PDF",
      "free AVIF to PDF",
    ],
  },
  bmp: {
    title: "BMP to PDF",
    description:
      "Free BMP to PDF converter. Convert BMP bitmap images to PDF with zero white margins and preserved aspect ratio. Combine multiple BMP files into one PDF. No upload—processing runs in your browser.",
    displayName: "BMP",
    keywords: [
      "BMP to PDF",
      "convert BMP to PDF",
      "BMP to PDF online",
      "combine BMP to PDF",
      "free BMP to PDF",
    ],
  },
  tiff: {
    title: "TIFF to PDF",
    description:
      "Free TIFF to PDF converter. Convert TIFF/TIF scans and photos to PDF with zero white margins and preserved aspect ratio. Combine multiple TIFF files into one PDF. Uses UTIF in your browser—no upload.",
    displayName: "TIFF",
    keywords: [
      "TIFF to PDF",
      "convert TIFF to PDF",
      "TIF to PDF",
      "TIFF to PDF online",
      "combine TIFF to PDF",
      "free TIFF to PDF",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ format: string }>;
}): Promise<Metadata> {
  const { format } = await params;
  const meta = FORMAT_META[format];

  if (!meta) return createMetadata({ title: "Not Found", noIndex: true });

  return createMetadata({
    title: meta.title,
    description: meta.description,
    path: `/tools/pdf-converter/${format}`,
    keywords: [...(meta.keywords ?? []), "PDF converter", "withustools"],
  });
}

export async function generateStaticParams() {
  return VALID_FORMATS.map((format) => ({ format }));
}

export default async function PDFConverterFormatPage({
  params,
}: {
  params: Promise<{ format: string }>;
}) {
  const { format } = await params;

  if (
    !VALID_FORMATS.includes(format as (typeof VALID_FORMATS)[number])
  ) {
    notFound();
  }

  const meta = FORMAT_META[format];
  const guide = PDF_FORMAT_GUIDE[format];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How can I use this ${meta.displayName} to PDF converter on this page?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upload source files, review order, convert, and download the generated PDF.",
        },
      },
      {
        "@type": "Question",
        name: `How does this tool convert ${meta.displayName} to PDF in my browser?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "The file is decoded and assembled into PDF pages in browser runtime without server-side conversion.",
        },
      },
      {
        "@type": "Question",
        name: `What should I know about ${meta.displayName} to PDF, and when is it the right choice?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use it when your input format is fixed and you want predictable format-specific conversion behavior.",
        },
      },
      {
        "@type": "Question",
        name: `When do people convert ${meta.displayName} files to PDF for sharing or archiving?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is common for submissions, documentation bundles, and long-term file packaging workflows.",
        },
      },
    ],
  };

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
            <h1 className="text-3xl font-bold text-slate-100">
              {meta.displayName} to PDF
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Online {meta.displayName} to PDF converter in browser
            </p>
          </div>
        </div>
      </div>

      <ImageToPdfConverter
        format={
          format as
            | "jpg"
            | "heic"
            | "heif"
            | "png"
            | "webp"
            | "avif"
            | "bmp"
            | "tiff"
        }
      />

      {guide && (
        <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-semibold text-slate-200">
            {meta.displayName} to PDF Guide
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-400">
            Use this page when your files are already in {meta.displayName} and
            you want a quick PDF output with local processing.
          </p>
          <div className="space-y-8 text-sm leading-relaxed text-slate-400">
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                1. How can I use this {meta.displayName} to PDF converter on this page?
              </h3>
              <ol className="list-decimal space-y-2 pl-5">
                {guide.usage.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                2. How does this tool convert {meta.displayName} to PDF in my browser?
              </h3>
              <div className="space-y-2">
                {guide.howItWorks.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                3. What should I know about {meta.displayName} to PDF, and when is it the right choice?
              </h3>
              <div className="space-y-2">
                {guide.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                4. Why convert {meta.displayName} to PDF in the browser for privacy and speed?
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {guide.advantages.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                5. When do people convert {meta.displayName} files to PDF for sharing or archiving?
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {guide.useCases.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <Link
        href="/tools/pdf-converter"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to PDF Converter
      </Link>
    </div>
  );
}
