import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import ImageFormatConverter from "./ImageFormatConverter";

export const metadata: Metadata = createMetadata({
  title: "Image Format Converter",
  description:
    "Free image format converter for PNG, JPG, WebP, GIF, BMP, TIFF, and AVIF with browser-side processing.",
  path: "/tools/image/image-format-converter",
  keywords: [
    "image format converter",
    "convert image format",
    "png to jpg",
    "jpg to png",
    "webp converter",
    "heic to jpg",
    "image conversion online",
    "convert pictures",
    "format conversion tool",
    "withustools",
  ],
});

const IMAGE_FORMAT_CONVERTER_GUIDE = {
  usage: [
    "Upload an image and choose the target format.",
    "Set quality when converting to lossy formats.",
    "Convert, preview the result, then download.",
    "Reset and repeat for the next file.",
  ],
  howItWorks: [
    "The converter decodes the source and re-encodes it in your selected format.",
    "HEIC/HEIF inputs are normalized first, then exported to the target type.",
    "Processing happens locally in browser memory.",
  ],
  about: [
    "Use this tool when apps require a different image format.",
    "It is useful for web uploads, cross-device sharing, and workflow compatibility.",
  ],
  advantages: [
    "Browser-local conversion.",
    "Support for common modern formats.",
    "Quality control for lossy outputs.",
    "HEIC/HEIF input compatibility.",
    "No signup needed.",
  ],
  useCases: [
    "Convert HEIC photos to JPG for easier sharing.",
    "Export to WebP or AVIF for web performance.",
    "Match required format for design or CMS tools.",
    "Reduce storage with more efficient image types.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I convert PNG, JPG, WebP, or other formats with this tool?",
    answer:
      "Upload a file, select target format, set optional quality, then convert and download.",
  },
  {
    question: "How does this format converter decode and encode images in my browser?",
    answer:
      "It processes source image data and exports the target format directly in browser runtime.",
  },
  {
    question: "What image formats are supported, and when should I pick each one?",
    answer:
      "Use JPG/WebP/AVIF for smaller files, PNG for lossless graphics, and format-specific choices for workflow compatibility.",
  },
  {
    question: "When do teams batch-convert image assets for the web or apps?",
    answer:
      "Teams convert assets during uploads, migration between systems, and performance optimization passes.",
  },
];

export default function ImageFormatConverterPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
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
            <h1 className="text-3xl font-bold text-slate-100">Image Format Converter</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online image format converter in browser
            </p>
          </div>
        </div>
      </div>

      <ImageFormatConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Image Format Converter Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I convert PNG, JPG, WebP, or other formats with this tool?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {IMAGE_FORMAT_CONVERTER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this format converter decode and encode images in my browser?
            </h3>
            <div className="space-y-2">
              {IMAGE_FORMAT_CONVERTER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What image formats are supported, and when should I pick each one?
            </h3>
            <div className="space-y-2">
              {IMAGE_FORMAT_CONVERTER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why convert image formats in the browser for privacy and batch speed?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_FORMAT_CONVERTER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do teams batch-convert image assets for the web or apps?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_FORMAT_CONVERTER_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/image"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Image Tools
      </Link>
    </div>
  );
}
