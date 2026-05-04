import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { GIF_CONVERTER_INDEX_GUIDE } from "./converter-content";
import { GIF_CONVERTER_HUB_LINKS } from "./gif-hub-links";

export const metadata: Metadata = createMetadata({
  title: "GIF Converter",
  description:
    "GIF Converter hub on WithusTools—HEIC, PNG, WEBP, TIFF, PDF, JPG, and more to animated GIF. Browser-only gif.js encoding; no upload.",
  path: "/tools/gif-converter",
  keywords: [
    "GIF converter",
    "HEIC to GIF",
    "PNG to GIF",
    "PDF to GIF",
    "JPG to GIF",
    "free online gif converter",
    "GIF no upload",
    "animated GIF tools",
    "withustools",
  ],
});

export default function GIFConverterIndexPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the GIF Converter hub on WithusTools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is the landing page for GIF-related tools that run in your browser. Use the format cards to open a dedicated route such as HEIC to GIF, PNG to GIF, PDF to GIF, or JPG to GIF.",
        },
      },
      {
        "@type": "Question",
        name: "How does JPG to GIF work without uploading my photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPEG frames are decoded in memory, composited on a canvas, and encoded with gif.js in Web Workers on your device.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I merge PNG, WebP, or HEIC images into one GIF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use Images to Animated GIF under Image Tools for mixed image types with the same frame and delay controls.",
        },
      },
      {
        "@type": "Question",
        name: "Why use GIF instead of video for simple motion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GIF is widely supported where autoplay video or codecs may be limited, and it is easy to embed in chat, email, and lightweight web contexts.",
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
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">GIF Converter</h1>
            <p className="mt-1 text-sm text-slate-500">Online GIF converter hub—format-specific pages</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-4 max-w-2xl text-center text-slate-400">
        Client-side GIF workflows on WithusTools: no upload, privacy-first processing. Open a format card below—the same
        hub pattern as JPG Converter—one card per source format.
      </p>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-slate-500">
        Need PNG, WebP, HEIC, or other formats in one animation?{" "}
        <Link href="/tools/image/images-to-animated-gif" className="text-blue-400 underline hover:text-blue-300">
          Images to Animated GIF
        </Link>{" "}
        under Image Tools.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GIF_CONVERTER_HUB_LINKS.map((item) => (
          <Link
            key={item.slug}
            href={item.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{item.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">Open tool →</span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">GIF Converter Guide</h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Use the format-specific page when your source type matches (for example only JPEG frames for JPG to GIF). More
          cards will appear here as new routes ship.
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. What can I use this GIF Converter hub for today?</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {GIF_CONVERTER_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How will client-side GIF encoding work on this site?</h3>
            <div className="space-y-2">
              {GIF_CONVERTER_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. How does this hub relate to the JPG Converter pattern?</h3>
            <div className="space-y-2">
              {GIF_CONVERTER_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Why run GIF conversion in the browser?</h3>
            <ul className="list-disc space-y-2 pl-5">
              {GIF_CONVERTER_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. When is GIF a practical output format?</h3>
            <ul className="list-disc space-y-2 pl-5">
              {GIF_CONVERTER_INDEX_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link href="/" className="inline-block text-slate-400 underline transition-colors hover:text-slate-200">
        ← Back to home
      </Link>
    </div>
  );
}
