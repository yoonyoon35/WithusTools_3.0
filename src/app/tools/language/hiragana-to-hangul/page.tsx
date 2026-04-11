import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { KanaToHangulDisclaimer } from "../PronunciationToolsDisclaimer";
import HiraganaToHangulConverter from "./HiraganaToHangulConverter";

export const metadata: Metadata = createMetadata({
  title: "Hiragana to Hangul (Pronunciation) | Kana to Korean",
  description:
    "Convert Japanese hiragana into Korean Hangul using the inverse of our pronunciation-based Hangul→Hiragana mapping. Runs in your browser. Free online tool.",
  path: "/tools/language/hiragana-to-hangul",
  keywords: [
    "hiragana to hangul",
    "kana to korean",
    "hiragana hangul converter",
    "japanese kana korean",
    "withustools",
  ],
});

const GUIDE = {
  usage: [
    "Type or paste hiragana that matches the output style of our Hangul to Hiragana tool.",
    "Read the Hangul output. Existing Hangul, Latin letters, numbers, and punctuation are copied unchanged.",
    "Use Copy to take the result elsewhere.",
  ],
  howItWorks: [
    "A lookup table is built once from every modern Hangul syllable: each syllable’s forward mapping (Hangul→hiragana) becomes a key for the reverse direction.",
    "The parser walks the text, and on each hiragana run it takes the longest matching key so multi-character syllables (e.g. batchim) decode correctly.",
    "Basic katakana syllables (ア–ン range mapped to hiragana) are normalized before matching, so you can paste either script.",
    "If several Hangul syllables share the same hiragana key, the table keeps one representative syllable (lowest code point).",
  ],
  about: [
    "This is the approximate inverse of Hangul to Hiragana (Pronunciation). It is not a general Japanese→Korean translator and does not handle kanji, grammar, or vocabulary.",
    "Strings that were not produced by our forward tool, or that use readings we do not map, may decode incorrectly or leave some kana untouched.",
  ],
  advantages: [
    "Round-trip friendly for text produced by Hangul to Hiragana under the same rules.",
    "Private, in-browser processing.",
  ],
  useCases: [
    "Checking whether kana notes line up with intended Korean syllables.",
    "Recovering Hangul from kana that you generated with our Hangul→Hiragana converter.",
  ],
};

export default function HiraganaToHangulPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="language" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Hiragana to Hangul (Pronunciation)
            </h1>
            <p className="mt-1 text-sm text-slate-500">language</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Decode hiragana (and basic katakana) into Hangul using the inverse of our Hangul→Hiragana
        pronunciation rules. For a katakana-first entry point, use{" "}
        <Link
          href="/tools/language/katakana-to-hangul"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Katakana to Hangul
        </Link>
        . For Korean→kana, use{" "}
        <Link
          href="/tools/language/hangul-to-hiragana"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Hangul to Hiragana
        </Link>{" "}
        or{" "}
        <Link
          href="/tools/language/hangul-to-katakana"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Hangul to Katakana
        </Link>
        .
      </p>

      <KanaToHangulDisclaimer />

      <HiraganaToHangulConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About This Tool</h3>
            <div className="space-y-2">
              {GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Common Use Cases</h3>
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
