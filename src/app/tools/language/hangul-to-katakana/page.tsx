import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { HangulToKanaDisclaimer } from "../PronunciationToolsDisclaimer";
import HangulToKatakanaConverter from "./HangulToKatakanaConverter";

export const metadata: Metadata = createMetadata({
  title: "Hangul to Katakana (Pronunciation) | Korean to Kana",
  description:
    "Convert Korean Hangul to Japanese katakana by approximate pronunciation. Syllable-based mapping in your browser. Free online tool for learners and reference.",
  path: "/tools/language/hangul-to-katakana",
  keywords: [
    "hangul to katakana",
    "korean katakana",
    "hangul pronunciation katakana",
    "korean to katakana",
    "hangul converter",
    "withustools",
  ],
});

const GUIDE = {
  usage: [
    "Type or paste text that includes Korean Hangul in the input area.",
    "Read the Katakana output, which approximates how each Hangul syllable would be pronounced using Japanese kana.",
    "Use Copy to paste the result into notes, flashcards, or chat.",
  ],
  howItWorks: [
    "Each Hangul syllable is split into an initial consonant, a vowel (or diphthong), and an optional final consonant (batchim).",
    "Those pieces are mapped to katakana that roughly match Korean sounds—the same rules as the Hangul to Hiragana tool, displayed in the katakana script.",
    "Letters that are not Hangul syllables (Latin, punctuation, spaces, numbers) are copied through unchanged.",
    "Everything runs locally in your browser; your text is not sent to a server.",
  ],
  about: [
    "This tool is for language learners who want a quick, katakana-only rendering of spoken Korean. It is not a substitute for standard romanization (Revised Romanization, McCune–Reischauer) or for official Japanese orthography.",
    "Approximations differ by speaker and context; use dictionaries or classroom materials when precision matters.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "Private: no signup, no cloud processing.",
    "Matches the pronunciation logic of Hangul to Hiragana; choose the script that fits your study materials.",
  ],
  useCases: [
    "Japanese learners comparing Korean sounds to familiar katakana (loanwords, names).",
    "Rough labels or study notes when katakana is preferred over hiragana.",
    "Quick checks before consulting a teacher or a pronunciation guide.",
  ],
};

export default function HangulToKatakanaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="language" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Hangul to Katakana (Pronunciation)
            </h1>
            <p className="mt-1 text-sm text-slate-500">language</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Turn Korean Hangul into katakana that follows approximate pronunciation. Non-Hangul
        characters pass through unchanged. The same mapping as{" "}
        <Link
          href="/tools/language/hangul-to-hiragana"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Hangul to Hiragana
        </Link>
        . For romaji-based kana, use the{" "}
        <Link
          href="/tools/language/hiragana-katakana-converter"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Hiragana Katakana Converter
        </Link>
        . To decode katakana back into Hangul, use{" "}
        <Link
          href="/tools/language/katakana-to-hangul"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Katakana to Hangul
        </Link>
        .
      </p>

      <HangulToKanaDisclaimer />

      <HangulToKatakanaConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I convert Korean Hangul to Katakana pronunciation on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does Hangul-to-Katakana mapping run locally in my browser?
            </h3>
            <div className="space-y-2">
              {GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is Hangul to Katakana conversion for, and what are its limits?
            </h3>
            <div className="space-y-2">
              {GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser Hangul to Katakana converter instead of manual kana tables?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is Hangul-to-Katakana output useful for Japanese-Korean learners?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

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
