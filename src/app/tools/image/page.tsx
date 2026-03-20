import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { IMAGE_INDEX_GUIDE } from "./image-content";

export const metadata: Metadata = createMetadata({
  title: "Image Tools",
  description:
    "Image Compressor, Image Format Converter, Image Editor, and Paint Board. Compress, convert formats, edit photos, and create digital art. All processing runs in your browser—your data never leaves your device.",
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
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Image Tools</h1>
            <p className="mt-1 text-sm text-slate-500">image</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Compress, edit, and create images. All processing runs locally in your
        browser—your data never leaves your device.
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
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {IMAGE_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
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
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. Real-World Use Cases
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
