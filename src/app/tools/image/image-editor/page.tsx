import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import ImageEditor from "./ImageEditor";

export const metadata: Metadata = createMetadata({
  title: "Free Online Image Editor",
  description:
    "Free online image editor for crop, resize, rotate, filters, watermark, and annotations with browser-side processing.",
  path: "/tools/image/image-editor",
  keywords: [
    "image editor",
    "photo editor",
    "online editor",
    "resize image",
    "rotate image",
    "brightness contrast",
    "free online photo editor",
    "adjust brightness contrast saturation online",
    "rotate image 90 degrees",
    "crop image online",
    "add watermark to image",
    "compare original and edited image",
    "withustools",
  ],
});

const IMAGE_EDITOR_GUIDE = {
  usage: [
    "Upload an image, then start with crop or rotate if framing is off.",
    "Adjust brightness/contrast/saturation and apply quick effects as needed.",
    "Add text, arrows, or shapes when you need annotations.",
    "Use watermark and compare view before export.",
    "Save with your preferred quality level.",
  ],
  howItWorks: [
    "The editor applies transforms and effects in browser rendering layers.",
    "Annotations and watermark overlays are merged on export.",
    "All edits are processed locally in your browser.",
  ],
  about: [
    "Use this editor for quick fixes before sharing images.",
    "It is built for practical tasks, not full-scale layered design work.",
  ],
  advantages: [
    "Browser-local image editing.",
    "Fast tools for crop, adjust, and annotate.",
    "Watermark and before/after comparison.",
    "No signup or install required.",
  ],
  useCases: [
    "Fix photo orientation and exposure quickly.",
    "Annotate screenshots for docs or support tickets.",
    "Add branding watermarks before publishing.",
    "Resize/crop visuals for social posts.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I crop, resize, or adjust images with this editor?",
    answer:
      "Upload an image, use crop/resize and adjustment controls, then export when the preview looks right.",
  },
  {
    question: "How does this image editor apply edits locally in my browser?",
    answer:
      "Edits are rendered and exported client-side using browser image-processing APIs.",
  },
  {
    question: "What can this editor do, and what are its practical limits?",
    answer:
      "It handles quick practical edits, but it is not a full replacement for advanced layered desktop editors.",
  },
  {
    question: "When are quick browser edits enough for product photos or thumbnails?",
    answer:
      "They are enough for routine cleanup, annotations, resizing, and social/web-ready exports.",
  },
];

export default function ImageEditorPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Image Editor</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online image editor for quick fixes
            </p>
          </div>
        </div>
      </div>

      <ImageEditor />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Image Editor Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I crop, resize, or adjust images with this editor?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {IMAGE_EDITOR_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this image editor apply edits locally in my browser?
            </h3>
            <div className="space-y-2">
              {IMAGE_EDITOR_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Image Editor</h3>
            <div className="space-y-2">
              {IMAGE_EDITOR_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a lightweight web image editor instead of desktop apps for quick fixes?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_EDITOR_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When are quick browser edits enough for product photos or thumbnails?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_EDITOR_GUIDE.useCases.map((item, i) => (
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
