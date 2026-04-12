import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { JPG_CONVERTER_FORMATS } from "@/data/prerender-segments";
import type { ImageFormat } from "../JPGConverter";
import { FORMAT_GUIDE } from "../converter-content";

// Heavy libs (pdf.js, ag-psd) — load only on their format pages
const PdfToJpgConverter = dynamic(() => import("../PdfToJpgConverter"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
      Loading converter...
    </div>
  ),
});
const JPGConverter = dynamic(() => import("../JPGConverter"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
      Loading converter...
    </div>
  ),
});

const VALID_FORMATS = JPG_CONVERTER_FORMATS;

const FORMAT_META: Record<
  string,
  {
    title: string;
    description: string;
    displayName: string;
    acceptTypes: string;
    keywords?: string[];
    hasBackgroundColor?: boolean;
    hasDimensions?: boolean;
  }
> = {
  heic: {
    title: "HEIC to JPG",
    description:
      "Free HEIC to JPG converter. Convert iPhone HEIC photos to JPG for sharing on Windows, Android, social media. No upload—processing runs in your browser.",
    displayName: "HEIC",
    acceptTypes: ".heic,.heif,image/heic,image/heif",
    keywords: ["HEIC to JPG", "convert HEIC to JPG", "iPhone HEIC to JPG", "HEIC to JPG online free", "HEIC converter"],
  },
  heif: {
    title: "HEIF to JPG",
    description:
      "Free HEIF to JPG converter. Convert HEIF/HEIC images to JPG for Windows, web, and print. Batch convert, no upload.",
    displayName: "HEIF",
    acceptTypes: ".heif,.heic,image/heif,image/heic",
    keywords: ["HEIF to JPG", "convert HEIF to JPG", "HEIF to JPG Windows", "HEIF converter"],
  },
  avif: {
    title: "AVIF to JPG",
    description:
      "Free AVIF to JPG converter. Convert next-gen AVIF images to JPG for legacy browser compatibility. No upload, client-side conversion.",
    displayName: "AVIF",
    acceptTypes: ".avif,image/avif",
    keywords: ["AVIF to JPG", "convert AVIF to JPG", "AVIF to JPG online", "AVIF converter"],
  },
  bmp: {
    title: "BMP to JPG",
    description:
      "Free BMP to JPG converter. Reduce BMP file size by converting to JPG. Batch convert screenshots and scans. No upload.",
    displayName: "BMP",
    acceptTypes: ".bmp,image/bmp",
    keywords: ["BMP to JPG", "convert BMP to JPG", "BMP to JPG reduce file size", "BMP converter"],
  },
  png: {
    title: "PNG to JPG",
    description:
      "Free PNG to JPG converter with background color for transparent images. Convert PNG to JPG with white background. No upload.",
    displayName: "PNG",
    acceptTypes: ".png,image/png",
    hasBackgroundColor: true,
    keywords: ["PNG to JPG", "convert PNG to JPG", "PNG to JPG with white background", "transparent PNG to JPG"],
  },
  svg: {
    title: "SVG to JPG",
    description:
      "Free SVG to JPG converter. Rasterize SVG vector graphics to JPG with custom dimensions. No upload.",
    displayName: "SVG",
    acceptTypes: ".svg,image/svg+xml",
    hasDimensions: true,
    keywords: ["SVG to JPG", "convert SVG to JPG", "rasterize SVG to JPG", "SVG logo to JPG"],
  },
  tiff: {
    title: "TIFF to JPG",
    description:
      "Free TIFF to JPG converter. Convert high-quality TIFF scans and photos to JPG. Batch convert, no upload.",
    displayName: "TIFF",
    acceptTypes: ".tiff,.tif,image/tiff",
    keywords: ["TIFF to JPG", "convert TIFF to JPG", "TIFF to JPG online", "high quality TIFF to JPG"],
  },
  webp: {
    title: "WEBP to JPG",
    description:
      "Free WEBP to JPG converter. Convert Google WEBP images to JPG for universal compatibility. No upload.",
    displayName: "WEBP",
    acceptTypes: ".webp,image/webp",
    keywords: ["WEBP to JPG", "convert WEBP to JPG", "WEBP to JPG online free", "WEBP converter"],
  },
  psd: {
    title: "PSD to JPG",
    description:
      "Free PSD to JPG converter. Convert Adobe Photoshop PSD files to JPG. Flattened composite image export. No upload.",
    displayName: "PSD",
    acceptTypes: ".psd,image/vnd.adobe.photoshop",
    keywords: ["PSD to JPG", "convert PSD to JPG", "Photoshop PSD to JPG", "PSD converter"],
  },
  jfif: {
    title: "JFIF to JPG",
    description:
      "Free JFIF to JPG converter. Convert JFIF (JPEG File Interchange Format) to standard JPG. No upload.",
    displayName: "JFIF",
    acceptTypes: ".jfif,.jfi,image/jpeg",
    keywords: ["JFIF to JPG", "convert JFIF to JPG", "JFIF to JPG online", "JFIF converter"],
  },
  ico: {
    title: "ICO to JPG",
    description:
      "Free ICO to JPG converter. Convert ICO icon files to JPG with background color for transparency. No upload.",
    displayName: "ICO",
    acceptTypes: ".ico,image/x-icon",
    hasBackgroundColor: true,
    keywords: ["ICO to JPG", "convert ICO to JPG", "ICO to JPG online", "icon to JPG"],
  },
  ai: {
    title: "AI to JPG",
    description:
      "Free AI to JPG converter. Convert Adobe Illustrator .ai files to JPG using pdf.js. Client-side, no server. PDF-compatible .ai required.",
    displayName: "AI",
    acceptTypes: ".ai",
    keywords: ["AI to JPG", "convert AI to JPG", "Illustrator AI to JPG", "ai file to JPG"],
  },
  dng: {
    title: "DNG to JPG",
    description:
      "Free DNG to JPG converter. Convert Digital Negative RAW files to JPG. Uses UTIF or embedded JPEG preview. No upload—client-side conversion.",
    displayName: "DNG",
    acceptTypes: ".dng,image/x-adobe-dng",
    keywords: ["DNG to JPG", "convert DNG to JPG", "Digital Negative to JPG", "RAW DNG to JPG", "DNG converter"],
  },
  cr2: {
    title: "CR2 to JPG",
    description:
      "Free CR2 to JPG converter. Convert Canon RAW CR2 files to JPG. Uses UTIF or embedded JPEG preview. No upload—client-side conversion.",
    displayName: "CR2",
    acceptTypes: ".cr2,image/x-canon-cr2",
    keywords: ["CR2 to JPG", "convert CR2 to JPG", "Canon CR2 to JPG", "Canon RAW to JPG", "CR2 converter"],
  },
  cr3: {
    title: "CR3 to JPG",
    description:
      "Free CR3 to JPG converter. Convert Canon RAW CR3 files to JPG. Extracts embedded JPEG preview. No upload—client-side conversion.",
    displayName: "CR3",
    acceptTypes: ".cr3,image/x-canon-cr3",
    keywords: ["CR3 to JPG", "convert CR3 to JPG", "Canon CR3 to JPG", "Canon RAW to JPG", "CR3 converter"],
  },
  tga: {
    title: "TGA to JPG",
    description:
      "Free TGA to JPG converter. Convert Targa/TGA images to JPG with optional background color for transparency. No upload—client-side conversion.",
    displayName: "TGA",
    acceptTypes: ".tga,image/x-tga",
    hasBackgroundColor: true,
    keywords: ["TGA to JPG", "convert TGA to JPG", "Targa to JPG", "TGA converter"],
  },
  pdf: {
    title: "PDF to JPG",
    description:
      "Free PDF to JPG converter. Convert PDF pages to JPG images. Multi-page support, ZIP download. No upload.",
    displayName: "PDF",
    acceptTypes: ".pdf,application/pdf",
    keywords: ["PDF to JPG", "convert PDF to JPG", "PDF to JPG online free", "PDF pages to images"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ format: string }>;
}): Promise<Metadata> {
  const { format } = await params;
  const meta = FORMAT_META[format];

  if (!meta) return createMetadata({ title: "Not Found", noIndex: true });

  return createMetadata({
    title: meta.title,
    description: meta.description,
    path: `/tools/jpg-converter/${format}`,
    keywords: [
      ...(meta.keywords ?? [`${meta.displayName} to JPG`]),
      "JPG converter",
      "withustools",
    ],
  });
}

export async function generateStaticParams() {
  return VALID_FORMATS.map((format) => ({ format }));
}

export default async function JPGConverterFormatPage({
  params,
}: {
  params: Promise<{ format: string }>;
}) {
  const { format } = await params;

  if (
    !VALID_FORMATS.includes(format as (typeof VALID_FORMATS)[number])
  ) {
    notFound();
  }

  const meta = FORMAT_META[format];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {meta.displayName} to JPG
            </h1>
            <p className="mt-1 text-sm text-slate-500">JPG Converter</p>
          </div>
        </div>
      </div>

      {format === "pdf" ? (
        <PdfToJpgConverter />
      ) : (
        <JPGConverter
          format={format as ImageFormat}
          displayName={meta.displayName}
          acceptTypes={meta.acceptTypes}
          hasBackgroundColor={meta.hasBackgroundColor}
          hasDimensions={meta.hasDimensions}
        />
      )}

      {FORMAT_GUIDE[format] && (
        <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <div className="space-y-8 text-sm leading-relaxed text-slate-400">
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                1. How can I use this {meta.displayName} to JPG converter on this page?
              </h3>
              <ol className="list-decimal space-y-2 pl-5">
                {FORMAT_GUIDE[format].usage.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                2. How does this tool convert {meta.displayName} to JPEG in my browser?
              </h3>
              <div className="space-y-2">
                {FORMAT_GUIDE[format].howItWorks.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                3. What should I know about {meta.displayName} to JPG, and when is it the right choice?
              </h3>
              <div className="space-y-2">
                {FORMAT_GUIDE[format].about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                4. Why convert {meta.displayName} to JPG in the browser for privacy and speed?
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {FORMAT_GUIDE[format].advantages.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                5. When do people batch-convert {meta.displayName} files to JPEG for the web?
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {FORMAT_GUIDE[format].useCases.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
