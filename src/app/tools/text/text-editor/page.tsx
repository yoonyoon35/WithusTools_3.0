import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import TextEditor from "./TextEditor";

export const metadata: Metadata = createMetadata({
  title: "Text Editor | Simple Note Taking",
  description:
    "Free browser text editor for quick notes with local save and Word/PDF export support.",
  path: "/tools/text/text-editor",
  keywords: [
    "text editor",
    "note taking",
    "online notes",
    "simple editor",
    "text to pdf",
    "text to word",
    "withustools",
  ],
});

const TEXT_EDITOR_GUIDE = {
  usage: [
    "Write a title and content, then save the note.",
    "Open saved notes to continue editing or delete unused ones.",
    "Export current content to Word or PDF when ready.",
  ],
  howItWorks: [
    "Notes are stored in local browser storage on the same device.",
    "Export actions generate downloadable document files from current content.",
    "No server-side note processing is required.",
  ],
  about: [
    "This editor is for quick drafting and note organization in browser.",
    "Use it when you need a lightweight writing space with export options.",
  ],
  advantages: [
    "Local note persistence.",
    "Word and PDF export.",
    "Multiple note management.",
    "No signup required.",
  ],
  useCases: [
    "Capture quick meeting or class notes.",
    "Draft copy before publishing elsewhere.",
    "Export simple docs without opening heavy editors.",
    "Keep local reminders and task snippets.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I write, save, and export text from this editor on the page?",
    answer:
      "Write your note, save it locally, then export current content to Word or PDF when needed.",
  },
  {
    question: "How does this text editor keep content local in my browser?",
    answer:
      "Notes are stored in browser local storage on your device and processed client-side.",
  },
  {
    question: "What features does this online text editor include, and what is it not for?",
    answer:
      "It supports simple note writing, local storage, and export, but is not a full collaborative document suite.",
  },
  {
    question: "When is a simple web editor enough instead of Word or a full IDE?",
    answer:
      "It is enough for quick drafts, checklists, and lightweight document prep.",
  },
];

export default function TextEditorPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Text Editor</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online text editor for quick notes
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Write and organize simple notes in browser with local save and export.
      </p>

      <TextEditor />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Text Editor Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I write, save, and export text from this editor on the page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {TEXT_EDITOR_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this text editor keep content local in my browser?
            </h3>
            <div className="space-y-2">
              {TEXT_EDITOR_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What features does this online text editor include, and what is it not for?
            </h3>
            <div className="space-y-2">
              {TEXT_EDITOR_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a lightweight browser text editor for notes or quick edits?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEXT_EDITOR_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is a simple web editor enough instead of Word or a full IDE?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEXT_EDITOR_GUIDE.useCases.map((item, i) => (
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
