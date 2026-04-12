import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { createMetadata } from "@/lib/metadata";
import { MERGE_PDF_PAGE_GUIDE } from "../pdf-content";

const MergePdfTool = dynamic(() => import("./MergePdfTool"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
      Loading tool...
    </div>
  ),
});

export const metadata: Metadata = createMetadata({
  title: "Merge PDF",
  description:
    "Free online PDF merger: combine multiple PDF files into one in seconds. No upload—everything runs locally in your browser for maximum privacy.",
  path: "/tools/pdf/merge-pdf",
  keywords: [
    "merge PDF",
    "PDF merger",
    "combine PDF",
    "join PDF",
    "browser PDF merge",
    "free PDF merge",
    "withustools",
  ],
});

export default function MergePdfPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="pdf" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Merge PDF</h1>
            <p className="mt-1 text-sm text-slate-500">PDF Tools</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-6 max-w-2xl text-center text-slate-400">
        Combine multiple PDFs into a single file. The merge runs entirely in your
        browser.
      </p>

      <MergePdfTool backHref="/tools/pdf" backLabel="Back to PDF Tools" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I merge multiple PDFs into one file on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {MERGE_PDF_PAGE_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this tool combine PDFs locally in my browser?
            </h3>
            <div className="space-y-2">
              {MERGE_PDF_PAGE_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is this merge PDF tool for, and what are its practical limits?
            </h3>
            <div className="space-y-2">
              {MERGE_PDF_PAGE_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why merge PDFs in the browser instead of installing desktop software?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {MERGE_PDF_PAGE_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do people combine PDFs for work, school, or official filings?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {MERGE_PDF_PAGE_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/pdf"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to PDF Tools
      </Link>
    </div>
  );
}

