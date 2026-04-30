import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import ImageCompressor from "./ImageCompressor";

export const metadata: Metadata = createMetadata({
  title: "Free Online Image Compressor",
  description:
    "Free online image compressor for JPG, PNG, WebP, and GIF. Reduce file size with quality control and browser-side processing.",
  path: "/tools/image/image-compressor",
  keywords: [
    "image compressor",
    "compress image",
    "reduce image size",
    "image optimizer",
    "batch compress",
    "free online image compressor",
    "compress images for web",
    "reduce image file size without losing quality",
    "remove EXIF metadata from images",
    "compress JPG PNG WebP for email",
    "withustools",
  ],
});

const IMAGE_COMPRESSOR_GUIDE = {
  usage: [
    "Drop one or more images, then choose a quality level.",
    "Set max width only when you want smaller dimensions too.",
    "Turn on EXIF removal if you want to strip camera/location metadata.",
    "Run compression and compare before/after quickly.",
    "Download files one by one or as a ZIP batch.",
  ],
  howItWorks: [
    "The browser decodes and re-encodes image data with your selected settings.",
    "Quality and optional resize values control final size and visual detail.",
    "Processing stays local to your device.",
  ],
  about: [
    "Use this tool when images are too large for upload, email, or web pages.",
    "It is built for fast size reduction without opening desktop software.",
  ],
  advantages: [
    "Browser-local compression.",
    "Batch workflow with ZIP output.",
    "Quick quality tuning and visual comparison.",
    "No signup required.",
  ],
  useCases: [
    "Prepare product images before website upload.",
    "Shrink photos to fit email attachment limits.",
    "Reduce file size for social media posting.",
    "Archive screenshots with less storage usage.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I compress images and reduce file size with this tool?",
    answer:
      "Upload images, tune quality and size options, then export compressed files individually or as ZIP.",
  },
  {
    question: "How does this image compressor process files locally in my browser?",
    answer:
      "It decodes and re-encodes images in browser memory with no server-side image upload.",
  },
  {
    question: "What is this image compressor for, and what quality trade-offs exist?",
    answer:
      "It is for reducing file size quickly. Lower quality gives smaller files but may reduce detail.",
  },
  {
    question: "When do smaller images matter for websites, email, or social posts?",
    answer:
      "Smaller images improve load speed, pass upload limits, and reduce storage and transfer costs.",
  },
];

export default function ImageCompressorPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Image Compressor</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online image compressor for smaller file sizes
            </p>
          </div>
        </div>
      </div>

      <ImageCompressor />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Image Compressor Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I compress images and reduce file size with this tool?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {IMAGE_COMPRESSOR_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this image compressor process files locally in my browser?
            </h3>
            <div className="space-y-2">
              {IMAGE_COMPRESSOR_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is this image compressor for, and what quality trade-offs exist?
            </h3>
            <div className="space-y-2">
              {IMAGE_COMPRESSOR_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why compress images online instead of heavy desktop software?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_COMPRESSOR_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do smaller images matter for websites, email, or social posts?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_COMPRESSOR_GUIDE.useCases.map((item, i) => (
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
