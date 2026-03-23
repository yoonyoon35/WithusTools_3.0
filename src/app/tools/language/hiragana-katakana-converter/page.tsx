import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import KanaConverter from "./KanaConverter";

export const metadata: Metadata = createMetadata({
  title: "Hiragana Katakana Converter | Convert Text to Kana",
  description:
    "Convert any text to Hiragana and Katakana. One input, two outputs. Supports romaji and multiple languages. Free online kana converter.",
  path: "/tools/language/hiragana-katakana-converter",
  keywords: [
    "hiragana converter",
    "katakana converter",
    "kana converter",
    "romaji to hiragana",
    "romaji to katakana",
    "Japanese kana",
    "withustools",
  ],
});

const KANA_CONVERTER_GUIDE = {
  usage: [
    "Enter text in the input area (romaji, Hiragana, Katakana, or mixed).",
    "Review the Hiragana output in the first box and the Katakana output in the second.",
    "Click Copy next to the result you need and paste it into your document or app.",
  ],
  howItWorks: [
    "The converter processes your input in real time and produces two outputs: one in Hiragana and one in Katakana. Romaji (e.g. konnichiwa, sushi) is converted to kana using standard Japanese romanization.",
    "Existing Hiragana or Katakana in the input can be echoed or normalized. Hiragana (ひらがな) has 46 basic characters and is used for native Japanese words. Katakana (カタカナ) also has 46 basic characters and is typically used for loanwords and foreign names.",
    "Pronunciation uses your browser's built-in conversion. No data is sent to external servers.",
  ],
  about: [
    "Free online Hiragana Katakana converter that transforms text into Japanese kana from input such as romaji (Latin script), English, or existing kana. This tool outputs kana only and does not use or produce kanji (Chinese characters).",
  ],
  advantages: [
    "Dual output: Get both Hiragana and Katakana from one input without switching modes.",
    "Free and private: No signup required; conversion runs in your browser.",
    "Instant: Real-time conversion as you type.",
    "Supports Korean: Hangul input is converted to romanization first, then to kana.",
  ],
  useCases: [
    "Language learning: Convert words or sentences from romaji to kana for reading and typing practice.",
    "Vocabulary: Generate Hiragana or Katakana versions for teaching or self-study.",
    "Content creation: Produce kana-only text for exercises, worksheets, and flashcards.",
    "Quick lookup: Check the kana spelling of a word when you know only the romaji.",
  ],
};

export default function HiraganaKatakanaConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="language" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Hiragana and Katakana Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">language</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Type or paste any text and get both Hiragana (ひらがな) and Katakana (カタカナ)
        at once. No kanji—kana only. Supports romaji, English, and Korean input.
      </p>

      <KanaConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {KANA_CONVERTER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {KANA_CONVERTER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. About Hiragana Katakana Converter
            </h3>
            <div className="space-y-2">
              {KANA_CONVERTER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {KANA_CONVERTER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Common Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {KANA_CONVERTER_GUIDE.useCases.map((item, i) => (
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
