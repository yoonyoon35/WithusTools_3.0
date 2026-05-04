import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { IMAGE_INDEX_GUIDE } from "./image-content";

export const metadata: Metadata = createMetadata({
  title: "Image Tools",
  description:
    "Image Compressor, Image Format Converter, Images to Animated GIF, Image Editor, and Paint Board. Compress, convert formats, merge frames into GIF, edit photos, and create digital art. All processing runs in your browser—your data never leaves your device.",
  path: "/tools/image",
  keywords: [
    "image compressor",
    "image editor",
    "paint board",
    "online drawing tool",
    "compress image",
    "image format converter",
    "convert image format",
    "edit image",
    "free online image tools",
    "compress edit create images in browser",
    "images to animated gif",
    "withustools",
  ],
});

const IMAGE_TOOLS = [
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description: "Reduce image file size with quality control. Batch compress JPG, PNG, WebP. Download as ZIP.",
    path: "/tools/image/image-compressor",
  },
  {
    slug: "image-format-converter",
    name: "Image Format Converter",
    description: "Convert images between PNG, JPG, WebP, GIF, BMP, TIFF, AVIF. HEIC/HEIF input supported.",
    path: "/tools/image/image-format-converter",
  },
  {
    slug: "images-to-animated-gif",
    name: "Images to Animated GIF",
    description:
      "Combine multiple images into one animated GIF. Reorder frames, set delay and canvas size. All processing in your browser.",
    path: "/tools/image/images-to-animated-gif",
  },
  {
    slug: "image-editor",
    name: "Image Editor",
    description: "Rotate, resize, adjust brightness, contrast, saturation. Quick photo editing in your browser.",
    path: "/tools/image/image-editor",
  },
  {
    slug: "paint-board",
    name: "Paint Board",
    description: "Draw with brush, shapes, colors. Eraser, undo/redo, insert images. Create digital art online.",
    path: "/tools/image/paint-board",
  },
] as const;

export default function ImageToolsIndexPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I compress, convert, or edit an image from this tool list?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose the matching tool, add your image, adjust settings, and export the output file.",
        },
      },
      {
        "@type": "Question",
        name: "How do image tools process pixels and files inside the browser?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The tools decode, transform, and encode image data in browser memory without server-side processing.",
        },
      },
      {
        "@type": "Question",
        name: "Why use lightweight online image tools instead of Photoshop for simple jobs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They are faster to open and enough for common tasks like compression, format conversion, and quick edits.",
        },
      },
      {
        "@type": "Question",
        name: "When is compressing or converting images online the fastest option?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is fastest when you need immediate web-ready files, social uploads, or format-compatible images.",
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
            <h1 className="text-3xl font-bold text-slate-100">Image Tools</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online image tools for quick edits and conversion
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Compress, convert, build animated GIFs from stills, edit, and draw in
        browser. Good for fast image prep without installing desktop software.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {IMAGE_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{tool.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{tool.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Try {tool.name} →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Image Tools Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Use compressor for file size, converter for compatibility, animated
          GIF tool to merge frames, editor for quick fixes, and paint board for
          simple drawing tasks.
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How do I compress, convert, or edit an image from this tool list?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {IMAGE_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How do image tools process pixels and files inside the browser?
            </h3>
            <div className="space-y-2">
              {IMAGE_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. About Image Tools
            </h3>
            <div className="space-y-2">
              {IMAGE_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use lightweight online image tools instead of Photoshop for simple jobs?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is compressing or converting images online the fastest option?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_INDEX_GUIDE.useCases.map((item, i) => (
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
