import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { JPG_CONVERTER_INDEX_GUIDE } from "./converter-content";

export const metadata: Metadata = createMetadata({
  title: "JPG Converter",
  description:
    "Free online JPG converter. Convert HEIC, HEIF, AVIF, BMP, PNG, SVG, TIFF, WEBP, PSD, JFIF, ICO, AI, DNG, CR2, CR3, TGA, and PDF to JPG. Batch convert multiple images at once. No upload—all processing runs in your browser.",
  path: "/tools/jpg-converter",
  keywords: [
    "JPG converter",
    "free online jpg converter",
    "HEIC to JPG",
    "HEIF to JPG",
    "WEBP to JPG",
    "PNG to JPG",
    "PDF to JPG",
    "PSD to JPG",
    "JFIF to JPG",
    "ICO to JPG",
    "AI to JPG",
    "DNG to JPG",
    "CR2 to JPG",
    "CR3 to JPG",
    "TGA to JPG",
    "AVIF to JPG",
    "TIFF to JPG",
    "SVG to JPG",
    "BMP to JPG",
    "batch convert to JPG",
    "convert images to JPG no upload",
    "withustools",
  ],
});

const JPG_CONVERTER_FORMATS = [
  {
    slug: "heic",
    name: "HEIC to JPG",
    description: "Convert iPhone HEIC photos to JPG online free. Share Apple photos on Windows, Android, social media. No upload required.",
    path: "/tools/jpg-converter/heic",
  },
  {
    slug: "heif",
    name: "HEIF to JPG",
    description: "Convert HEIF/HEIC images to JPG for Windows, web, and print. Batch convert HEIF to JPG with no server upload.",
    path: "/tools/jpg-converter/heif",
  },
  {
    slug: "avif",
    name: "AVIF to JPG",
    description: "Convert next-gen AVIF images to JPG for legacy browser compatibility. Free AVIF to JPG converter, no upload.",
    path: "/tools/jpg-converter/avif",
  },
  {
    slug: "bmp",
    name: "BMP to JPG",
    description: "Convert BMP to JPG to reduce file size. Batch convert screenshots and scans. Free, no upload.",
    path: "/tools/jpg-converter/bmp",
  },
  {
    slug: "png",
    name: "PNG to JPG",
    description: "Convert PNG to JPG with white background or custom color for transparent images. Batch convert, no upload.",
    path: "/tools/jpg-converter/png",
  },
  {
    slug: "svg",
    name: "SVG to JPG",
    description: "Rasterize SVG to JPG with custom dimensions. Convert SVG logos for social media. Free, no upload.",
    path: "/tools/jpg-converter/svg",
  },
  {
    slug: "tiff",
    name: "TIFF to JPG",
    description: "Convert high-quality TIFF scans and photos to JPG. Reduce file size, batch convert. Free TIFF to JPG, no upload.",
    path: "/tools/jpg-converter/tiff",
  },
  {
    slug: "webp",
    name: "WEBP to JPG",
    description: "Convert Google WEBP images to JPG for universal compatibility. Free WEBP to JPG converter, no upload.",
    path: "/tools/jpg-converter/webp",
  },
  {
    slug: "psd",
    name: "PSD to JPG",
    description: "Convert Adobe Photoshop PSD files to JPG. Flattened composite export. Free PSD to JPG, no upload.",
    path: "/tools/jpg-converter/psd",
  },
  {
    slug: "jfif",
    name: "JFIF to JPG",
    description: "Convert JFIF (JPEG File Interchange Format) to standard JPG. Free JFIF to JPG, no upload.",
    path: "/tools/jpg-converter/jfif",
  },
  {
    slug: "ico",
    name: "ICO to JPG",
    description: "Convert ICO icon files to JPG with background color for transparency. Free ICO to JPG, no upload.",
    path: "/tools/jpg-converter/ico",
  },
  {
    slug: "ai",
    name: "AI to JPG",
    description: "Convert Adobe Illustrator .ai files to JPG. Uses pdf.js (AI contains PDF data). No server, no Ghostscript.",
    path: "/tools/jpg-converter/ai",
  },
  {
    slug: "dng",
    name: "DNG to JPG",
    description: "Convert Digital Negative DNG RAW files to JPG. Uses UTIF or embedded preview. Free, no upload.",
    path: "/tools/jpg-converter/dng",
  },
  {
    slug: "cr2",
    name: "CR2 to JPG",
    description: "Convert Canon RAW CR2 files to JPG. Uses UTIF or embedded preview. Free, no upload.",
    path: "/tools/jpg-converter/cr2",
  },
  {
    slug: "cr3",
    name: "CR3 to JPG",
    description: "Convert Canon RAW CR3 files to JPG. Extracts embedded JPEG preview. Free, no upload.",
    path: "/tools/jpg-converter/cr3",
  },
  {
    slug: "tga",
    name: "TGA to JPG",
    description: "Convert Targa TGA images to JPG with background color for transparency. Free, no upload.",
    path: "/tools/jpg-converter/tga",
  },
  {
    slug: "pdf",
    name: "PDF to JPG",
    description: "Convert PDF pages to JPG images. Multi-page support, download all as ZIP. Free PDF to JPG, no upload.",
    path: "/tools/jpg-converter/pdf",
  },
] as const;

export default function JPGConverterIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">JPG Converter</h1>
            <p className="mt-1 text-sm text-slate-500">image</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-4 max-w-2xl text-center text-slate-400">
        Free online JPG converter for HEIC, HEIF, AVIF, BMP, PNG, SVG, TIFF, WEBP, PSD, JFIF, ICO, AI, DNG, CR2, CR3, TGA, and PDF.
        Batch convert multiple images at once. All processing runs locally in your browser—your data never leaves your device.
      </p>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-slate-500">
        No sign-up, no file limits, no server upload. Convert iPhone HEIC to JPG, PNG with transparency to JPG with background, PDF pages to images—all with one tool.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {JPG_CONVERTER_FORMATS.map((format) => (
          <Link
            key={format.slug}
            href={format.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{format.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{format.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Convert to JPG →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How do I convert PNG, WebP, or other formats to JPG from this hub?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {JPG_CONVERTER_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does client-side conversion to JPEG work on this site?
            </h3>
            <div className="space-y-2">
              {JPG_CONVERTER_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What JPG conversion pages are linked, and when should I pick each?
            </h3>
            <div className="space-y-2">
              {JPG_CONVERTER_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why convert images to JPG in the browser for privacy and batch speed?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {JPG_CONVERTER_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is a dedicated format-to-JPG page better than a generic converter?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {JPG_CONVERTER_INDEX_GUIDE.useCases.map((item, i) => (
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
