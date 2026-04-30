import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import KatakanaStudy from "./KatakanaStudy";

export const metadata: Metadata = createMetadata({
  title: "Katakana Chart | Characters, Romaji & Writing Reference",
  description:
    "Free Katakana chart in gojuon order. Practice pronunciation, stroke guidance, and printable writing sheets in your browser.",
  path: "/tools/language/katakana-study",
  keywords: [
    "katakana chart",
    "Japanese katakana",
    "learn katakana",
    "katakana pronunciation",
    "stroke order",
    "withustools",
  ],
});

const KATAKANA_GUIDE = {
  usage: [
    "View all 46 basic katakana in gojūon order grouped by row (ア行 through ワ行). Click or tap a character to load its details in the right panel.",
    "Use the Play button to hear the character pronounced in Japanese. Use Replay to watch the stroke animation again and hear pronunciation.",
    "When a ハ-row character is selected, use Dakuon and Handakuon buttons to switch to voiced variants (バ, パ, etc.).",
    "Generate and print the handwriting practice sheet for offline practice. Choose basic, basic+dakuon, or full (basic+dakuon+handakuon).",
  ],
  howItWorks: [
    "The chart lists all 46 basic katakana in standard order. Pronunciation uses your browser's speech synthesis (ja-JP). No data is sent to external servers.",
    "Each character shows stroke order animation (template fallback) and a writing tip. Study one row at a time (e.g. ア行, then カ行).",
  ],
  about: [
    "Free reference tool for Japanese katakana: characters, romaji, and writing tips in one place. For beginners and quick lookup.",
  ],
  advantages: [
    "All-in-one: characters, romaji, and writing tips.",
    "Dakuon and Handakuon variant switching for ハ row.",
    "No account required.",
    "Offline-ready after first load.",
  ],
  useCases: [
    "Learning Japanese: Learn katakana formation and correct pronunciation.",
    "Quick reference: Find a character by row, confirm romaji.",
    "Handwriting practice: Generate and print practice sheets with various character sets.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Can I study Katakana row by row?",
    answer:
      "Yes. The chart is grouped for step-by-step study, with pronunciation and stroke guidance.",
  },
  {
    question: "Can I print Katakana writing worksheets?",
    answer:
      "Yes. You can generate printable practice sheets for daily writing review.",
  },
  {
    question: "Is this Katakana chart free to use?",
    answer: "Yes. It works in your browser without signup.",
  },
];

export default function KatakanaStudyPage() {
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
              Characters, Romaji &amp; Writing – Katakana Reference
            </h1>
            <p className="mt-1 text-sm text-slate-500">language</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Learn Katakana with pronunciation and writing guidance, then print sheets for quick daily drills.
      </p>

      <KatakanaStudy />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Katakana Chart Guide</h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          Pair this with the{" "}
          <Link href="/tools/language/hiragana-study" className="underline hover:text-slate-200">
            Hiragana Chart
          </Link>{" "}
          and test input with the{" "}
          <Link
            href="/tools/language/hiragana-katakana-converter"
            className="underline hover:text-slate-200"
          >
            Hiragana Katakana Converter
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I browse katakana in gojūon order and open writing tips here?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {KATAKANA_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this katakana study view load reference content in the browser?
            </h3>
            <div className="space-y-2">
              {KATAKANA_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is katakana, and how does this chart help beginners read loanwords?
            </h3>
            <div className="space-y-2">
              {KATAKANA_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why keep an online katakana chart open while studying menus or names?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {KATAKANA_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When should learners pair katakana drills with hiragana and real reading?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {KATAKANA_GUIDE.useCases.map((item, i) => (
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
