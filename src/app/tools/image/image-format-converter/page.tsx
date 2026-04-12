import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import ImageFormatConverter from "./ImageFormatConverter";

export const metadata: Metadata = createMetadata({
  title: "Image Format Converter",
  description:
    "Convert images between PNG, JPG, WebP, GIF, BMP, TIFF, AVIF. Supports HEIC and HEIF. Adjust quality for lossy formats. All processing runs in your browser.",
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
    "Drag and drop an image or click Choose File to upload. Supports PNG, JPG, WebP, GIF, BMP, TIFF, AVIF, HEIC, HEIF.",
    "Select the target format from the dropdown: PNG, JPG, WebP, GIF, BMP, TIFF, or AVIF.",
    "For JPG, WebP, and AVIF: adjust the Quality slider (0-100%). Higher values preserve more detail.",
    "Click Convert to process. The preview updates to show the converted image.",
    "Click Download to save the converted file. Click Reset to start over.",
  ],
  howItWorks: [
    "Uses the browser Canvas API to decode the source image and re-encode it in the target format.",
    "HEIC and HEIF files are converted to JPEG first via heic2any, then can be converted to any supported format.",
    "All processing runs locally in your browser. Your images never leave your device.",
  ],
  about: [
    "Free online image format converter for transforming images between different file formats.",
    "Supports PNG, JPEG, WebP, GIF, BMP, TIFF, AVIF, and input from HEIC/HEIF. Quality control for lossy formats.",
  ],
  advantages: [
    "Privacy-first: All processing runs in your browser. Images never leave your device.",
    "Multiple formats: Convert between 7+ formats including next-gen AVIF.",
    "Quality control: Adjust compression quality for JPG, WebP, and AVIF.",
    "HEIC/HEIF support: Convert Apple device photos to common formats.",
    "No signup: Use immediately. No file limits beyond your device.",
  ],
  useCases: [
    "Web optimization: Convert to WebP or AVIF for faster page loads.",
    "Compatibility: Convert HEIC from iPhone to JPG for sharing.",
    "Design workflows: Convert between formats for different tools.",
    "Storage: Convert to space-efficient formats like WebP or JPEG.",
  ],
};

export default function ImageFormatConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Image Format Converter</h1>
            <p className="mt-1 text-sm text-slate-500">image</p>
          </div>
        </div>
      </div>

      <ImageFormatConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
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
