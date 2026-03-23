import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import ImageCompressor from "./ImageCompressor";

export const metadata: Metadata = createMetadata({
  title: "Free Online Image Compressor",
  description:
    "Compress and optimize images. Reduce file size with quality control. Support for JPG, PNG, WebP, GIF. Batch compress, remove EXIF metadata, compare before/after. Download as ZIP. All processing runs in your browser.",
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
    "Drag and drop images or click Choose Files to upload. Supports JPG, PNG, WebP, GIF. Multiple files can be added at once.",
    "Set Compression Quality (0–100%). Higher values keep more detail; lower values reduce file size.",
    "Optional: Set Max Width to resize large images. Maintain Aspect Ratio keeps proportions when you enter width or height.",
    "Toggle Remove Exif Metadata to strip camera/location data from compressed output.",
    "Click Compress All to process. Use the before/after slider to compare quality.",
    "Download individually or Download All (ZIP) to get all compressed images in one folder.",
  ],
  howItWorks: [
    "Uses the browser Canvas API to decode, resize, and re-encode images. Quality and max width control file size and dimensions.",
    "PNG and GIF keep original format; JPEG and WebP use lossy compression. Output filenames include quality (e.g. photo_80%_optimized.jpg).",
    "All processing runs locally in your browser. Your images never leave your device—no upload, no server.", 
  ],
  about: [
    "Free online image compressor for reducing file size, optimizing for web, email, or storage. Batch compress multiple images and download as ZIP.",
    "Includes quality comparison slider to compare original vs compressed side by side. Remove EXIF metadata for privacy when sharing.",
  ],
  advantages: [
    "Privacy-first: All processing runs in your browser. Images never leave your device.",
    "Batch support: Compress multiple images at once. Download as ZIP.",
    "Quality control: Adjustable quality slider and before/after comparison.",
    "No signup: Use immediately. No file limits beyond your device.",
  ],
  useCases: [
    "Web optimization: Compress images for faster website loading, smaller email attachments.",
    "Social media: Reduce image size for Instagram, Facebook, Twitter, LinkedIn.",
    "Email: Shrink photos before sending to avoid attachment limits.",
    "Storage: Free up space by compressing old photos and screenshots.",
  ],
};

export default function ImageCompressorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Image Compressor</h1>
            <p className="mt-1 text-sm text-slate-500">image</p>
          </div>
        </div>
      </div>

      <ImageCompressor />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {IMAGE_COMPRESSOR_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {IMAGE_COMPRESSOR_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Image Compressor</h3>
            <div className="space-y-2">
              {IMAGE_COMPRESSOR_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {IMAGE_COMPRESSOR_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
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
