import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import StringComparison from "./StringComparison";

export const metadata: Metadata = createMetadata({
  title: "String Comparison Tool | Compare Text Differences",
  description:
    "Free string comparison tool for side-by-side text diff checks in browser with local processing.",
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
    "Paste the original text on the left and the updated text on the right.",
    "Run comparison to highlight changed parts.",
    "Copy either side or reset both inputs as needed.",
  ],
  howItWorks: [
    "A diff routine compares text blocks and marks additions/removals.",
    "Changed segments are highlighted to help quick review.",
    "All comparison logic runs locally in browser runtime.",
  ],
  about: [
    "Use this tool to quickly spot what changed between two versions of text.",
    "It works well for copy edits, docs, snippets, and review notes.",
  ],
  advantages: [
    "Side-by-side diff view.",
    "Highlight-based change detection.",
    "Fast copy/reset workflow.",
    "No signup required.",
  ],
  useCases: [
    "Check revisions before publishing a document.",
    "Compare two policy or contract drafts.",
    "Validate generated text against a source version.",
    "Review code snippets in plain text form.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I compare two texts and highlight differences side by side?",
    answer:
      "Paste the two versions, run comparison, and review highlighted additions and removals.",
  },
  {
    question: "How does string comparison run locally in my browser?",
    answer:
      "The diff logic executes in browser runtime, so content is processed locally on your device.",
  },
  {
    question: "What does this string comparison tool show, and how should I read the diff?",
    answer:
      "It shows changed segments between two texts; use highlights to focus only on edits.",
  },
  {
    question: "When is side-by-side text comparison useful for code or content review?",
    answer:
      "It is useful for revision checks, QA comparisons, and final review before publishing.",
  },
];

export default function StringComparisonPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="text" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              String Comparison Tool
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Online string comparison for quick diffs
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Compare two text versions side by side and spot edits fast in browser.
      </p>

      <StringComparison />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          String Comparison Guide
        </h2>
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
