import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import ImageEditor from "./ImageEditor";

export const metadata: Metadata = createMetadata({
  title: "Free Online Image Editor",
  description:
    "Edit images online. Rotate, flip, adjust brightness, contrast, saturation. Crop, resize, add watermark, draw annotations. Free online photo editor. All processing runs in your browser.",
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
    "Drag and drop an image or click Choose File to upload. Supports JPG, PNG, WebP, GIF.",
    "Filters: Adjust brightness, contrast, saturation, warmth, sharpness, exposure. Instant effects: Grayscale, Sepia, Invert, Noir, Vintage, Blur, Saturated, Fade.",
    "Transform: Rotate 90° left/right, flip horizontal/vertical. Crop (Free, 1:1, 4:3, 16:9). Resize with width/height in px or %, with Maintain Aspect Ratio.",
    "Draw & Annotate: Add text, arrows, rectangles, or freehand brush. Adjust color and size.",
    "Utilities: Add watermark (text, position, opacity). Compare with Original to toggle before/after view.",
    "Save Image: Export with quality (High/Medium/Low). All processing runs in your browser.",
  ],
  howItWorks: [
    "Uses CSS filters for brightness, contrast, saturation, and effects. Canvas API handles rotate, flip, crop, resize, and drawing.",
    "Drawings and watermarks are applied on an overlay. Compare with Original shows the unedited image when toggled.",
    "All processing runs locally. Your images never leave your device—no upload, no server.",
  ],
  about: [
    "Free online image editor for quick photo adjustments. Rotate, flip, crop, resize, and apply filters. Add watermarks and annotations for branding or notes.",
    "Ideal for fixing orientation, adjusting exposure, adding text or arrows to screenshots, and creating simple graphics.",
  ],
  advantages: [
    "Privacy-first: All processing runs in your browser. Images never leave your device.",
    "No installation: Works in any modern browser. No plugins or downloads.",
    "Rich features: Filters, crop, resize, watermark, draw, compare with original.",
    "No signup: Use immediately. Free with no limits.",
  ],
  useCases: [
    "Quick edits: Fix orientation, adjust brightness before sharing photos.",
    "Screenshots: Add arrows, text, rectangles to highlight areas.",
    "Watermarking: Add copyright or branding text to images.",
    "Social media: Crop and resize for Instagram, Facebook, or Twitter.",
  ],
};

export default function ImageEditorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Image Editor</h1>
            <p className="mt-1 text-sm text-slate-500">image</p>
          </div>
        </div>
      </div>

      <ImageEditor />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
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
