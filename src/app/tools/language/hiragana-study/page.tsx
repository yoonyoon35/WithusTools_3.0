import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import HiraganaStudy from "./HiraganaStudy";

export const metadata: Metadata = createMetadata({
  title: "Hiragana Chart | Japanese Syllabary & Writing Reference",
  description:
    "Free hiragana chart with pronunciation and stroke order. Learn Japanese syllabary in gojūon order. Click each character for writing tips and audio.",
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

export default function HiraganaStudyPage() {
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
        View all hiragana in gojūon order; click for writing tips and pronunciation.
      </p>

      <HiraganaStudy />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {HIRAGANA_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {HIRAGANA_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Hiragana</h3>
            <div className="space-y-2">
              {HIRAGANA_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {HIRAGANA_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {HIRAGANA_GUIDE.useCases.map((item, i) => (
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
