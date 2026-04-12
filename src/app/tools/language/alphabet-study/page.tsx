import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import AlphabetStudy from "./AlphabetStudy";

export const metadata: Metadata = createMetadata({
  title: "English Alphabet | Letters, Sounds & Writing Reference",
  description:
    "Free English alphabet chart with letter names and pronunciation. Learn A–Z letters and sounds. Click each letter for writing tips and audio.",
  path: "/tools/language/alphabet-study",
  keywords: [
    "English alphabet",
    "learn alphabet",
    "letter names",
    "ABC",
    "pronunciation",
    "writing tips",
    "withustools",
  ],
});

const ALPHABET_GUIDE = {
  usage: [
    "View all 26 letters A–Z grouped by range. Click or tap a letter to load its details in the right panel.",
    "Use the Play button to hear the letter name. Use Replay to watch the stroke animation again and hear pronunciation.",
    "Generate and print the handwriting practice sheet for offline practice.",
  ],
  howItWorks: [
    "The chart lists all 26 letters in order. Pronunciation uses your browser's speech synthesis (en-US). No data is sent to external servers.",
    "Each letter shows stroke order animation and a writing tip. Study one range at a time (e.g. A–E, then F–J).",
  ],
  about: [
    "Free reference tool for the English alphabet: letters, names, and writing tips in one place. For beginners and quick lookup.",
  ],
  advantages: [
    "All-in-one: letters, names, and writing tips.",
    "No account required.",
    "Offline-ready after first load.",
  ],
  useCases: [
    "Learning English: Learn letter formation and correct pronunciation.",
    "Quick reference: Find a letter by range, confirm letter names.",
    "Handwriting practice: Generate and print practice sheets.",
  ],
};

export default function AlphabetStudyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="language" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Letters, Sounds &amp; Writing – English Alphabet Reference
            </h1>
            <p className="mt-1 text-sm text-slate-500">language</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        View all letters A–Z; click for writing tips and pronunciation.
      </p>

      <AlphabetStudy />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I explore English letters and sounds with this alphabet study view?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {ALPHABET_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this alphabet reference load in the browser for quick lookup?
            </h3>
            <div className="space-y-2">
              {ALPHABET_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What does this English alphabet tool cover for ESL learners and kids?
            </h3>
            <div className="space-y-2">
              {ALPHABET_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why keep a simple web alphabet chart open during reading or spelling lessons?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {ALPHABET_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is letter-sound practice the foundation before words and sentences?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {ALPHABET_GUIDE.useCases.map((item, i) => (
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
