import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import HangulStudy from "./HangulStudy";

export const metadata: Metadata = createMetadata({
  title: "Korean Hangul | Jamo Chart, Pronunciation & Writing Reference",
  description:
    "Free Korean hangul chart with jamo (consonants and vowels). Learn stroke order and pronunciation. Click each letter for writing tips and audio.",
  path: "/tools/language/hangul-study",
  keywords: [
    "hangul chart",
    "Korean hangul",
    "learn hangul",
    "jamo",
    "Korean alphabet",
    "stroke order",
    "withustools",
  ],
});

const HANGUL_GUIDE = {
  usage: [
    "View all 40 jamo (consonants, vowels, double consonants, compound vowels). Click or tap a character to load its details in the right panel.",
    "Use the Play button to hear the character pronounced. Use Replay to watch the stroke animation again.",
    "Choose a practice set (all, consonants, vowels, double, compound) and generate/print the handwriting practice sheet.",
  ],
  howItWorks: [
    "The chart lists all jamo in standard order. Pronunciation uses your browser's speech synthesis (ko-KR). No data is sent to external servers.",
    "Each character shows stroke order animation (template fallback) and a writing tip. Study one group at a time.",
  ],
  about: [
    "Free reference tool for Korean hangul jamo: letters, romanization, and writing tips in one place. For beginners and quick lookup.",
  ],
  advantages: [
    "All-in-one: jamo, romanization, and writing tips.",
    "No account required.",
    "Offline-ready after first load.",
  ],
  useCases: [
    "Learning Korean: Learn letter formation and correct pronunciation.",
    "Quick reference: Find a letter by group, confirm romanization.",
    "Handwriting practice: Generate and print practice sheets.",
  ],
};

export default function HangulStudyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="language" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Korean Jamo Reference – Chart &amp; Pronunciation
            </h1>
            <p className="mt-1 text-sm text-slate-500">language</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        View basic consonants and vowels in order; click for stroke tips and pronunciation.
      </p>

      <HangulStudy />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I explore Korean Hangul letters and jamo order on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {HANGUL_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this Hangul study view present syllables and tips in the browser?
            </h3>
            <div className="space-y-2">
              {HANGUL_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is Hangul, and how does this reference help first-time Korean learners?
            </h3>
            <div className="space-y-2">
              {HANGUL_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a web Hangul chart for pronunciation and syllable-building practice?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {HANGUL_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is Hangul literacy the first step before vocabulary and conversation?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {HANGUL_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 flex gap-4">
        <Link
          href="/tools/language"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to Language
        </Link>
        <Link href="/" className="text-slate-400 underline transition-colors hover:text-slate-200">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
