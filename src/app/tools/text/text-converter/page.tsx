import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import TextConverter from "./TextConverter";

export const metadata: Metadata = createMetadata({
  title: "Text Case Converter | Uppercase, Lowercase, Capitalize",
  description:
    "Free text case converter for uppercase, lowercase, and sentence formatting with browser-side processing.",
  path: "/tools/text/text-converter",
  keywords: [
    "text converter",
    "case converter",
    "uppercase converter",
    "lowercase converter",
    "capitalize text",
    "withustools",
  ],
});

const TEXT_CONVERTER_GUIDE = {
  usage: [
    "Paste or type text into the input field.",
    "Choose the case action you need and review output instantly.",
    "Copy results or clear both fields to restart.",
  ],
  howItWorks: [
    "Case conversion rules are applied directly in browser runtime.",
    "Stats like character and word count update from current text input.",
    "No text content is sent to a server for conversion.",
  ],
  about: [
    "Use this tool when capitalization style needs quick cleanup.",
    "It is practical for content formatting and naming-style normalization.",
  ],
  advantages: [
    "Fast case conversion actions.",
    "Real-time text stats.",
    "Copy/clear workflow.",
    "No signup required.",
  ],
  useCases: [
    "Fix inconsistent capitalization in docs.",
    "Normalize labels for datasets and CSV fields.",
    "Clean up headings before publishing content.",
    "Prepare consistent naming text for code notes.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I change text case (upper, lower, title, and more) on this page?",
    answer:
      "Paste text, click a case action, and copy the converted result.",
  },
  {
    question: "How does this case converter transform text locally in my browser?",
    answer:
      "The converter applies case transformations directly in browser runtime without server-side processing.",
  },
  {
    question: "What is this text case converter for, and which styles does it support?",
    answer:
      "It supports common case transformations for quick writing, formatting, and data-cleanup tasks.",
  },
  {
    question: "When do writers and developers fix capitalization with a case tool?",
    answer:
      "They use it during editing, data prep, UI copy cleanup, and naming consistency checks.",
  },
];

export default function TextConverterPage() {
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
              Text Case Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Online text case converter in browser
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert text case quickly and clean up capitalization in one step.
      </p>

      <TextConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Text Converter Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I change text case (upper, lower, title, and more) on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {TEXT_CONVERTER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this case converter transform text locally in my browser?
            </h3>
            <div className="space-y-2">
              {TEXT_CONVERTER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is this text case converter for, and which styles does it support?
            </h3>
            <div className="space-y-2">
              {TEXT_CONVERTER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use an online case converter for drafts and data cleanup?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEXT_CONVERTER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do writers and developers fix capitalization with a case tool?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEXT_CONVERTER_GUIDE.useCases.map((item, i) => (
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
