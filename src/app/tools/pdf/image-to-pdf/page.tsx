import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { IMAGE_TO_PDF_PAGE_GUIDE } from "../pdf-content";

const ImageToPdfConverter = dynamic(
  () => import("../../pdf-converter/ImageToPdfConverter"),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
        Loading converter...
      </div>
    ),
  }
);

export const metadata: Metadata = createMetadata({
  title: "Image to PDF",
  description:
    "Free online Image to PDF: combine JPG, PNG, HEIC, HEIF, WEBP, AVIF, BMP, TIFF, GIF, and other images into one PDF. Mixed formats in one batch. Fit-to-image pages or A4. No upload—processing runs in your browser.",
  path: "/tools/pdf/image-to-pdf",
  keywords: [
    "image to PDF",
    "combine images PDF",
    "mixed format PDF",
    "HEIC PNG JPG PDF",
    "browser PDF",
    "free image to PDF",
    "withustools",
  ],
});

const PDF_CONVERTER_LINKS = [
  { label: "JPG to PDF", href: "/tools/pdf-converter/jpg" },
  { label: "HEIC to PDF", href: "/tools/pdf-converter/heic" },
  { label: "HEIF to PDF", href: "/tools/pdf-converter/heif" },
  { label: "PNG to PDF", href: "/tools/pdf-converter/png" },
  { label: "WEBP to PDF", href: "/tools/pdf-converter/webp" },
  { label: "AVIF to PDF", href: "/tools/pdf-converter/avif" },
  { label: "BMP to PDF", href: "/tools/pdf-converter/bmp" },
  { label: "TIFF to PDF", href: "/tools/pdf-converter/tiff" },
] as const;

export default function ImageToPdfPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="pdf" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Image to PDF</h1>
            <p className="mt-1 text-sm text-slate-500">PDF Tools</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-6 max-w-2xl text-center text-slate-400">
        Add any supported images in one go—formats can differ file by file.
        Processing stays in your browser.
      </p>

      <ImageToPdfConverter
        backHref="/tools/pdf"
        backLabel="Back to PDF Tools"
      />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-2 text-sm font-semibold text-slate-200">
          PDF Converter format pages
        </h2>
        <p className="mb-4 text-sm text-slate-400">
          Need a format-specific flow? Open any converter below:
        </p>
        <div className="flex flex-wrap gap-2">
          {PDF_CONVERTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-slate-900/50 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I turn images into a single or multi-page PDF here?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {IMAGE_TO_PDF_PAGE_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does image-to-PDF conversion run locally in my browser?
            </h3>
            <div className="space-y-2">
              {IMAGE_TO_PDF_PAGE_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What image formats and page options does this Image to PDF tool support?
            </h3>
            <div className="space-y-2">
              {IMAGE_TO_PDF_PAGE_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why build a PDF from images online for privacy and quick batches?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_TO_PDF_PAGE_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is converting photos or scans to PDF most useful?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_TO_PDF_PAGE_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/pdf"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to PDF Tools
      </Link>
    </div>
  );
}
