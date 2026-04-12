import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { PDF_INDEX_GUIDE } from "./pdf-content";

export const metadata: Metadata = createMetadata({
  title: "PDF Tools",
  description:
    "Free PDF tools: combine JPG, PNG, HEIC, HEIF, WEBP, AVIF, BMP, TIFF, and other images into one PDF. Mixed formats supported. Format-specific converters available. All processing runs in your browser.",
  path: "/tools/pdf",
  keywords: [
    "PDF tools",
    "image to PDF",
    "combine images PDF",
    "HEIC to PDF",
    "PNG to PDF",
    "JPG to PDF",
    "mixed images PDF",
    "browser PDF",
    "withustools",
  ],
});

const PDF_TOOLS = [
  {
    slug: "image-to-pdf",
    name: "Image to PDF",
    description:
      "Combine any supported images into one PDF—JPG, PNG, HEIC, WEBP, TIFF, and more in a single batch. Fit-to-image or A4 pages.",
    path: "/tools/pdf/image-to-pdf",
  },
  {
    slug: "merge-pdf",
    name: "Merge PDF",
    description:
      "Combine multiple PDF files into one. Your PDFs stay on your device—merging runs entirely in your browser.",
    path: "/tools/pdf/merge-pdf",
  },
  {
    slug: "pdf-converter",
    name: "PDF Converter (by format)",
    description:
      "Dedicated flows for JPG, HEIC, PNG, WEBP, AVIF, BMP, or TIFF to PDF—same engine with a single-format upload filter.",
    path: "/tools/pdf-converter",
  },
] as const;

export default function PDFToolsIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="pdf" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">PDF Tools</h1>
            <p className="mt-1 text-sm text-slate-500">pdf</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Build PDFs from images in your browser. Mixed formats in one upload are
        supported—no server upload, no sign-up.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PDF_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{tool.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{tool.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Open →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How do I merge PDFs or turn images into PDFs from this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {PDF_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How do PDF tools handle files entirely in the browser?
            </h3>
            <div className="space-y-2">
              {PDF_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What PDF utilities are included, and what are their practical limits?
            </h3>
            <div className="space-y-2">
              {PDF_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why choose in-browser PDF tools for quick one-off document tasks?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {PDF_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is merging or converting PDFs online faster than desktop software?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {PDF_INDEX_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/"
        className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to home
      </Link>
    </div>
  );
}
