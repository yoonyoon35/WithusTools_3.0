import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import StringComparison from "./StringComparison";

export const metadata: Metadata = createMetadata({
  title: "String Comparison Tool | Compare Text Differences",
  description:
    "Compare two texts and highlight differences. Side-by-side string comparison with added and removed parts highlighted. Free online tool.",
  path: "/tools/text/string-comparison",
  keywords: [
    "string comparison",
    "text comparison",
    "diff checker",
    "text difference",
    "string diff",
    "withustools",
  ],
});

const STRING_COMPARISON_GUIDE = {
  usage: [
    "Enter the first text in the left input field and the second text in the right input field.",
    "Click Compare Texts to analyze and highlight differences. Additions appear in green, removals in red.",
    "Use Copy buttons to copy either text to your clipboard. Click Reset to clear all inputs.",
  ],
  howItWorks: [
    "The tool uses a diff algorithm that splits text by sentences (using ., !, ?, and newlines) and then compares word by word.",
    "Additions (text in the second input but not the first) are highlighted in green. Removals (text in the first but not the second) are highlighted in red.",
    "All processing runs in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online string comparison tool for comparing two texts and visualizing differences. Ideal for code review, document revision, and content verification.",
  ],
  advantages: [
    "Side-by-side comparison: View both texts and differences at a glance.",
    "Word-level highlighting: See exactly which words changed.",
    "No signup: Use immediately in any browser.",
    "Privacy: All processing happens locally. Your text never leaves your device.",
  ],
  useCases: [
    "Code review: Compare two code versions and spot changes quickly.",
    "Document revision: Track edits between document versions.",
    "Translation verification: Compare original and translated texts.",
    "Data validation: Verify accuracy between datasets.",
  ],
};

export default function StringComparisonPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="text" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              String Comparison Tool
            </h1>
            <p className="mt-1 text-sm text-slate-500">text</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Compare two texts and highlight differences. Side-by-side diff with added
        and removed parts for easy review. All processing runs in your browser.
      </p>

      <StringComparison />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I compare two texts and highlight differences side by side?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {STRING_COMPARISON_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does string comparison run locally in my browser?
            </h3>
            <div className="space-y-2">
              {STRING_COMPARISON_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What does this string comparison tool show, and how should I read the diff?
            </h3>
            <div className="space-y-2">
              {STRING_COMPARISON_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why compare text in the browser instead of pasting into desktop diff apps?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {STRING_COMPARISON_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is side-by-side text comparison useful for code or content review?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {STRING_COMPARISON_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/text"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Text Tools
      </Link>
    </div>
  );
}
