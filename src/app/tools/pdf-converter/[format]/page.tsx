import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import { PDF_FORMAT_GUIDE } from "../converter-content";

const ImageToPdfConverter = dynamic(() => import("../ImageToPdfConverter"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
      Loading converter...
    </div>
  ),
});

const VALID_FORMATS = ["jpg", "png"] as const;

const FORMAT_META: Record<
  string,
  {
    title: string;
    description: string;
    displayName: string;
    keywords?: string[];
  }
> = {
  jpg: {
    title: "JPG to PDF",
    description:
      "Free JPG to PDF converter. Convert JPG images to PDF with zero white margins and preserved aspect ratio. Combine multiple images into one PDF. No upload—processing runs in your browser.",
    displayName: "JPG",
    keywords: [
      "JPG to PDF",
      "convert JPG to PDF",
      "image to PDF",
      "combine images to PDF",
      "free JPG to PDF online",
    ],
  },
  png: {
    title: "PNG to PDF",
    description:
      "Free PNG to PDF converter. Convert PNG images to PDF with zero white margins and preserved aspect ratio. Combine multiple PNGs into one PDF. Supports transparency. No upload—processing runs in your browser.",
    displayName: "PNG",
    keywords: [
      "PNG to PDF",
      "convert PNG to PDF",
      "PNG to PDF online",
      "combine PNG to PDF",
      "free PNG to PDF",
    ],
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
    path: `/tools/pdf-converter/${format}`,
    keywords: [...(meta.keywords ?? []), "PDF converter", "withustools"],
  });
}

export async function generateStaticParams() {
  return VALID_FORMATS.map((format) => ({ format }));
}

export default async function PDFConverterFormatPage({
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
  const guide = PDF_FORMAT_GUIDE[format];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {meta.displayName} to PDF
            </h1>
            <p className="mt-1 text-sm text-slate-500">PDF Converter</p>
          </div>
        </div>
      </div>

      <ImageToPdfConverter format={format as "jpg" | "png"} />

      {guide && (
        <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <div className="space-y-8 text-sm leading-relaxed text-slate-400">
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                1. How to Use
              </h3>
              <ol className="list-decimal space-y-2 pl-5">
                {guide.usage.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                2. How It Works
              </h3>
              <div className="space-y-2">
                {guide.howItWorks.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                3. About {meta.displayName} to PDF
              </h3>
              <div className="space-y-2">
                {guide.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                4. Advantages
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {guide.advantages.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                5. Real-World Use Cases
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {guide.useCases.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <Link
        href="/tools/pdf-converter"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to PDF Converter
      </Link>
    </div>
  );
}
