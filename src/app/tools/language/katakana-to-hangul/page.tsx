import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { KanaToHangulDisclaimer } from "../PronunciationToolsDisclaimer";
import KatakanaToHangulConverter from "./KatakanaToHangulConverter";

export const metadata: Metadata = createMetadata({
  title: "Katakana to Hangul (Pronunciation) | Kana to Korean",
  description:
    "Convert Japanese katakana into Korean Hangul using the same inverse mapping as Hiragana to Hangul (katakana is normalized first). Free in-browser tool.",
  path: "/tools/language/katakana-to-hangul",
  keywords: [
    "katakana to hangul",
    "katakana hangul converter",
    "kana to korean",
    "japanese katakana korean",
    "withustools",
  ],
});

const GUIDE = {
  usage: [
    "Type or paste katakana that matches the output style of our Hangul to Katakana tool.",
    "Read the Hangul output. Existing Hangul, Latin letters, numbers, and punctuation are copied unchanged.",
    "Use Copy to take the result elsewhere.",
  ],
  howItWorks: [
    "The engine is the same as Hiragana to Hangul: katakana in the ア–ン syllable range is converted to hiragana (Unicode offset), then longest-prefix matching against keys built from every modern Hangul syllable.",
    "Hiragana-only input works too, so you can use either page interchangeably for mixed or single-script notes.",
    "If several Hangul syllables share the same kana key, the table keeps one representative syllable (lowest code point)—same limitation as the hiragana version.",
  ],
  about: [
    "This is the approximate inverse of Hangul to Katakana (Pronunciation), using the same rules as Hangul to Hiragana under the hood.",
    "It is not a general Japanese→Korean translator. Round-trip text may not match the original Korean exactly.",
  ],
  advantages: [
    "Optimized for learners who took notes in katakana from our Hangul→Katakana converter.",
    "Private, in-browser processing.",
  ],
  useCases: [
    "Turning katakana practice lines back into Hangul for comparison.",
    "Working next to the Hiragana to Hangul page when your materials use katakana.",
  ],
};

export default function KatakanaToHangulPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="language" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Katakana to Hangul (Pronunciation)
            </h1>
            <p className="mt-1 text-sm text-slate-500">language</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Decode katakana into Hangul with the same inverse rules as{" "}
        <Link
          href="/tools/language/hiragana-to-hangul"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Hiragana to Hangul
        </Link>
        (katakana is normalized to hiragana first). For Korean→kana, use{" "}
        <Link
          href="/tools/language/hangul-to-katakana"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Hangul to Katakana
        </Link>{" "}
        or{" "}
        <Link
          href="/tools/language/hangul-to-hiragana"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Hangul to Hiragana
        </Link>
        .
      </p>

      <KanaToHangulDisclaimer />

      <KatakanaToHangulConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I convert Japanese Katakana to Hangul pronunciation on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does Katakana-to-Hangul mapping run locally in my browser?
            </h3>
            <div className="space-y-2">
              {GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is this Katakana to Hangul converter for, and how accurate is it?
            </h3>
            <div className="space-y-2">
              {GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser Katakana to Hangul tool for study or quick reference?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do learners use Katakana-to-Hangul output with textbooks or flashcards?
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
