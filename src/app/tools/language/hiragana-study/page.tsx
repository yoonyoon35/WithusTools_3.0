import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import HiraganaStudy from "./HiraganaStudy";

export const metadata: Metadata = createMetadata({
  title: "Hiragana Chart | Japanese Syllabary & Writing Reference",
  description:
    "Free Hiragana chart in gojuon order. Practice pronunciation, stroke guidance, and printable writing sheets in your browser.",
  path: "/tools/language/hiragana-study",
  keywords: [
    "hiragana chart",
    "Japanese hiragana",
    "learn hiragana",
    "hiragana pronunciation",
    "stroke order",
    "gojūon",
    "withustools",
  ],
});

const HIRAGANA_GUIDE = {
  usage: [
    "View all 46 basic hiragana in gojūon order grouped by row. Click or tap a character to load its details in the right panel.",
    "Use the Play button to hear pronunciation. Use Replay to watch the stroke animation again. For は-row characters, try Dakuon and Handakuon variant buttons.",
    "Generate and print the handwriting practice sheet with options for basic, basic+dakuon, or full (including handakuon).",
  ],
  howItWorks: [
    "The chart lists all 46 basic hiragana in standard order. Pronunciation uses your browser's speech synthesis (ja-JP). No data is sent to external servers.",
    "Each character shows stroke order animation (using simple path templates) and a writing tip. Dakuon (゛) and Handakuon (゜) variants are available when a は-row character is selected.",
  ],
  about: [
    "Free reference tool for Japanese hiragana: characters, romaji, and writing tips in one place. For beginners learning the Japanese syllabary.",
  ],
  advantages: [
    "All-in-one: characters, romaji, stroke order, and writing tips.",
    "No account required.",
    "Offline-ready after first load.",
  ],
  useCases: [
    "Learning Japanese: Learn character formation and correct pronunciation.",
    "Quick reference: Find a character by row, confirm romaji.",
    "Handwriting practice: Generate and print practice sheets (basic, dakuon, or all).",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Can I learn Hiragana in gojuon order here?",
    answer:
      "Yes. The chart is organized for step-by-step study with pronunciation and stroke guidance.",
  },
  {
    question: "Does this page support writing practice?",
    answer:
      "Yes. You can generate printable Hiragana practice sheets for offline drills.",
  },
  {
    question: "Do I need an account to use this Hiragana chart?",
    answer: "No. You can use it immediately without signup.",
  },
];

export default function HiraganaStudyPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="language" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Japanese Syllabary Reference – Hiragana Chart &amp; Pronunciation
            </h1>
            <p className="mt-1 text-sm text-slate-500">language</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Learn Hiragana with pronunciation and stroke guidance, then print practice sheets to review faster.
      </p>

      <HiraganaStudy />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Hiragana Chart Guide</h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          Continue with the{" "}
          <Link href="/tools/language/katakana-study" className="underline hover:text-slate-200">
            Katakana Chart
          </Link>{" "}
          and use the{" "}
          <Link
            href="/tools/language/hiragana-katakana-converter"
            className="underline hover:text-slate-200"
          >
            Hiragana Katakana Converter
          </Link>{" "}
          for text conversion practice.
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I browse hiragana in gojūon order and open writing tips here?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {HIRAGANA_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this hiragana study view load reference content in the browser?
            </h3>
            <div className="space-y-2">
              {HIRAGANA_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is hiragana, and how does this chart help absolute beginners?
            </h3>
            <div className="space-y-2">
              {HIRAGANA_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why keep an online hiragana chart open while practicing Japanese?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {HIRAGANA_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When should new learners master hiragana before kanji or grammar?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {HIRAGANA_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-8 flex gap-4">
        <Link
          href="/tools/language"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to Language
        </Link>
        <Link
          href="/"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
