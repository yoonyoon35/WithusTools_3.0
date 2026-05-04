import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import ImagesToAnimatedGif from "./ImagesToAnimatedGif";

export const metadata: Metadata = createMetadata({
  title: "Images to Animated GIF",
  description:
    "Combine multiple images into one animated GIF in your browser. Set frame order, delay, canvas size, and quality. No upload—gif.js runs locally on your device.",
  path: "/tools/image/images-to-animated-gif",
  keywords: [
    "images to gif",
    "animated gif from images",
    "merge images to gif",
    "create gif from photos",
    "multi image gif maker",
    "online animated gif",
    "browser gif maker",
    "gif frame delay",
    "withustools",
  ],
});

const GUIDE = {
  usage: [
    "Add two or more images in the order you want them to appear as animation frames.",
    "Use ↑ / ↓ to change frame order; remove frames you do not need.",
    "Set frame delay (how long each image shows), output width and height, and letterbox color.",
    "Adjust GIF quality and choose whether the animation loops forever.",
    "Click Create animated GIF, then preview and download a single .gif file.",
  ],
  howItWorks: [
    "Each image is drawn onto a fixed-size canvas (letterboxed to fit) in sequence.",
    "gif.js encodes frames in Web Workers and builds one animated GIF file on your device.",
    "HEIC/HEIF files are decoded with heic2any first, then rasterized like other images.",
  ],
  about: [
    "This tool is for turning a series of stills into a simple animation—slideshow GIFs, memes, or UI mockups.",
    "It is not a full video editor; frame count is limited for performance and browser memory.",
  ],
  advantages: [
    "Client-side only: no server upload.",
    "Reorder frames before export.",
    "Control delay, dimensions, background, loop, and palette quality.",
  ],
  useCases: [
    "Turn burst or sequential photos into a shareable GIF.",
    "Quick storyboard or before/after animation for chat or email.",
    "Prototype motion from static UI screenshots.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How do I combine several images into one animated GIF with this tool?",
    answer:
      "Upload images in order, adjust delay and canvas size, then create and download a single GIF file.",
  },
  {
    question: "How does this tool build an animated GIF without uploading my files?",
    answer:
      "Images are decoded in the browser, drawn to canvas frames, and encoded with gif.js locally using Web Workers.",
  },
  {
    question: "What limits apply to frame count and output size?",
    answer:
      "Up to 60 frames are supported; very large dimensions may be slow or memory-heavy depending on your device.",
  },
  {
    question: "When is an image-sequence GIF better than a video file?",
    answer:
      "GIFs are widely supported in chat, forums, and simple embeds where video codecs or autoplay are not ideal.",
  },
];

export default function ImagesToAnimatedGifPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Images to Animated GIF</h1>
            <p className="mt-1 text-sm text-slate-500">Merge multiple images into one looping GIF in your browser</p>
          </div>
        </div>
      </div>

      <ImagesToAnimatedGif />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Images to Animated GIF Guide</h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How do I combine several images into one animated GIF with this tool?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this tool build an animated GIF without uploading my files?
            </h3>
            <div className="space-y-2">
              {GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What limits apply to frame count and output size?
            </h3>
            <div className="space-y-2">
              {GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser-based GIF builder for quick animations?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is an image-sequence GIF better than a video file?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link href="/tools/image" className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200">
        ← Back to Image Tools
      </Link>
    </div>
  );
}
