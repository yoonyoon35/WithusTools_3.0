import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { PDF_CONVERTER_INDEX_GUIDE } from "./converter-content";

export const metadata: Metadata = createMetadata({
  title: "PDF Converter",
  description:
    "Free online PDF converter. Convert JPG, HEIC, HEIF, PNG, WEBP, AVIF, BMP, TIFF, and other images to PDF. Combine multiple images into a single PDF with zero white margins and preserved aspect ratio. No upload—all processing runs in your browser.",
  path: "/tools/pdf-converter",
  keywords: [
    "PDF converter",
    "JPG to PDF",
    "HEIC to PDF",
    "HEIF to PDF",
    "WEBP to PDF",
    "AVIF to PDF",
    "BMP to PDF",
    "TIFF to PDF",
    "image to PDF",
    "combine images to PDF",
    "free PDF converter",
    "no white margin PDF",
    "preserve aspect ratio",
    "withustools",
  ],
});

const PDF_CONVERTER_FORMATS = [
  {
    slug: "jpg",
    name: "JPG to PDF",
    description:
      "Convert JPG images to PDF. Each image becomes a page with its exact dimensions—no white margins, no aspect ratio distortion. Combine multiple images into one PDF.",
    path: "/tools/pdf-converter/jpg",
  },
  {
    slug: "heic",
    name: "HEIC to PDF",
    description:
      "Convert iPhone HEIC/HEIF photos to PDF. Each image becomes a page with its exact dimensions—no white margins, no aspect ratio distortion. Combine multiple HEIC files into one PDF.",
    path: "/tools/pdf-converter/heic",
  },
  {
    slug: "heif",
    name: "HEIF to PDF",
    description:
      "Convert HEIF/HEIC images to PDF. Each image becomes a page with its exact dimensions—no white margins, no aspect ratio distortion. Same decode pipeline as HEIC to PDF; .heif and .heic are supported.",
    path: "/tools/pdf-converter/heif",
  },
  {
    slug: "png",
    name: "PNG to PDF",
    description:
      "Convert PNG images to PDF. Each image becomes a page with its exact dimensions—transparency preserved. Combine multiple PNGs into one PDF.",
    path: "/tools/pdf-converter/png",
  },
  {
    slug: "webp",
    name: "WEBP to PDF",
    description:
      "Convert WEBP images to PDF. Each image becomes a page with its exact dimensions—no white margins, no aspect ratio distortion. Combine multiple WEBP files into one PDF.",
    path: "/tools/pdf-converter/webp",
  },
  {
    slug: "avif",
    name: "AVIF to PDF",
    description:
      "Convert AVIF images to PDF. Each image becomes a page with its exact dimensions—no white margins, no aspect ratio distortion. Uses browser decode (createImageBitmap). Combine multiple AVIF files into one PDF.",
    path: "/tools/pdf-converter/avif",
  },
  {
    slug: "bmp",
    name: "BMP to PDF",
    description:
      "Convert BMP images to PDF. Each image becomes a page with its exact dimensions—no white margins, no aspect ratio distortion. Combine multiple BMP files into one PDF.",
    path: "/tools/pdf-converter/bmp",
  },
  {
    slug: "tiff",
    name: "TIFF to PDF",
    description:
      "Convert TIFF/TIF images to PDF. Each file becomes a page sized to the decoded image—ideal for scans and archival photos. Multi-page TIFFs use the primary (largest) frame. Combine multiple TIFFs into one PDF.",
    path: "/tools/pdf-converter/tiff",
  },
] as const;

export default function PDFConverterIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="pdf" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">PDF Converter</h1>
            <p className="mt-1 text-sm text-slate-500">pdf</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-4 max-w-2xl text-center text-slate-400">
        Convert images to PDF with zero white margins and preserved aspect ratio. Each image becomes a page sized exactly to its dimensions—no stretching, no distortion.
      </p>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-slate-500">
        All processing runs locally in your browser. No sign-up, no server upload. Your data never leaves your device.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PDF_CONVERTER_FORMATS.map((format) => (
          <Link
            key={format.slug}
            href={format.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{format.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{format.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Convert to PDF →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-2 text-sm font-semibold text-slate-200">
          Prefer mixed formats?
        </h2>
        <p className="text-sm text-slate-400">
          If you want <strong className="font-semibold text-slate-200">any image formats</strong> in one upload (mixed batch), use{" "}
          <Link
            href="/tools/pdf/image-to-pdf"
            className="font-medium text-blue-400 underline hover:text-blue-300"
          >
            Image to PDF
          </Link>
          .
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {PDF_CONVERTER_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How It Works
            </h3>
            <div className="space-y-2">
              {PDF_CONVERTER_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. About PDF Converter
            </h3>
            <div className="space-y-2">
              {PDF_CONVERTER_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PDF_CONVERTER_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. Real-World Use Cases
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {PDF_CONVERTER_INDEX_GUIDE.useCases.map((item, i) => (
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
