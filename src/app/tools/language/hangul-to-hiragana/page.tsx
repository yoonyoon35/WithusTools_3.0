import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { HangulToKanaDisclaimer } from "../PronunciationToolsDisclaimer";
import HangulToHiraganaConverter from "./HangulToHiraganaConverter";

export const metadata: Metadata = createMetadata({
  title: "Hangul to Hiragana (Pronunciation) | Korean to Kana",
  description:
    "Convert Hangul to Hiragana by pronunciation with an online browser-based tool. Useful for quick Korean-to-kana study notes.",
  path: "/tools/language/hangul-to-hiragana",
  keywords: [
    "hangul to hiragana",
    "korean hiragana",
    "hangul pronunciation hiragana",
    "korean to kana",
    "hangul converter",
    "withustools",
  ],
});

const GUIDE = {
  usage: [
    "Type or paste text that includes Korean Hangul in the input area.",
    "Read the Hiragana output, which approximates how each Hangul syllable would be pronounced using Japanese kana.",
    "Use Copy to paste the result into notes, flashcards, or chat.",
  ],
  howItWorks: [
    "Each Hangul syllable is split into an initial consonant, a vowel (or diphthong), and an optional final consonant (batchim).",
    "Those pieces are mapped to hiragana that roughly match Korean sounds—not official Korean or Japanese spelling rules.",
    "Letters that are not Hangul syllables (Latin, punctuation, spaces, numbers) are copied through unchanged.",
    "Everything runs locally in your browser; your text is not sent to a server.",
  ],
  about: [
    "This tool is for language learners who want a quick, kana-only rendering of spoken Korean. It is not a substitute for standard romanization (Revised Romanization, McCune–Reischauer) or for official Japanese orthography.",
    "Approximations differ by speaker and context; use dictionaries or classroom materials when precision matters.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "Private: no signup, no cloud processing.",
    "Clear separation from the general Hiragana–Katakana converter, which uses a different pipeline.",
  ],
  useCases: [
    "Japanese learners comparing Korean sounds to familiar hiragana.",
    "Rough subtitles or study notes when only kana is desired.",
    "Quick checks before consulting a teacher or a pronunciation guide.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Is this a direct translation tool?",
    answer:
      "No. It converts Hangul to Hiragana by approximate pronunciation, not full language translation.",
  },
  {
    question: "What happens to non-Hangul characters?",
    answer:
      "Latin letters, numbers, spaces, and punctuation pass through unchanged.",
  },
  {
    question: "Can I convert the result back to Hangul?",
    answer:
      "Yes. Use the Hiragana to Hangul page for inverse pronunciation-style decoding.",
  },
];

export default function HangulToHiraganaPage() {
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
              Hangul to Hiragana (Pronunciation)
            </h1>
            <p className="mt-1 text-sm text-slate-500">language</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Turn Korean Hangul into hiragana that follows approximate pronunciation. Non-Hangul
        characters pass through unchanged. For the same rules in katakana, use{" "}
        <Link
          href="/tools/language/hangul-to-katakana"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Hangul to Katakana
        </Link>
        . For romaji-based kana, use the{" "}
        <Link
          href="/tools/language/hiragana-katakana-converter"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Hiragana Katakana Converter
        </Link>
        . To decode this style of kana back into Hangul, use{" "}
        <Link
          href="/tools/language/hiragana-to-hangul"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Hiragana to Hangul
        </Link>
        .
      </p>

      <HangulToKanaDisclaimer />

      <HangulToHiraganaConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Hangul to Hiragana Guide
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          Prefer katakana output? Open{" "}
          <Link href="/tools/language/hangul-to-katakana" className="underline hover:text-slate-200">
            Hangul to Katakana
          </Link>
          . Need reverse conversion? Use{" "}
          <Link href="/tools/language/hiragana-to-hangul" className="underline hover:text-slate-200">
            Hiragana to Hangul
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I convert Korean Hangul to Hiragana pronunciation on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does Hangul-to-Hiragana mapping run locally in my browser?
            </h3>
            <div className="space-y-2">
              {GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is Hangul to Hiragana conversion for, and what are its limits?
            </h3>
            <div className="space-y-2">
              {GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser Hangul to Hiragana converter instead of manual kana tables?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is Hangul-to-Hiragana output useful for Japanese-Korean learners?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {GUIDE.useCases.map((item, i) => (
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

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/tools/language"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to Language Tools
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
