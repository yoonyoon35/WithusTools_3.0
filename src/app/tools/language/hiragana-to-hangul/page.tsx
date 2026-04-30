import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { KanaToHangulDisclaimer } from "../PronunciationToolsDisclaimer";
import HiraganaToHangulConverter from "./HiraganaToHangulConverter";

export const metadata: Metadata = createMetadata({
  title: "Hiragana to Hangul (Pronunciation) | Kana to Korean",
  description:
    "Convert Hiragana to Hangul with inverse pronunciation mapping. This online browser tool helps recover Korean-style output from kana notes.",
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

const FAQ_ITEMS = [
  {
    question: "Is this a full Japanese to Korean translator?",
    answer:
      "No. It is an inverse pronunciation mapper, mainly for text created with the paired Hangul-to-Hiragana workflow.",
  },
  {
    question: "Can I paste Katakana too?",
    answer:
      "Yes. Basic Katakana is normalized and processed with the same inverse mapping logic.",
  },
  {
    question: "Will every input decode perfectly?",
    answer:
      "Not always. Accuracy is best when input matches the pronunciation style produced by the paired forward converter.",
  },
];

export default function HiraganaToHangulPage() {
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
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Hiragana to Hangul Guide
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          This works best with text generated from{" "}
          <Link href="/tools/language/hangul-to-hiragana" className="underline hover:text-slate-200">
            Hangul to Hiragana
          </Link>
          . If your notes are in katakana, use{" "}
          <Link href="/tools/language/katakana-to-hangul" className="underline hover:text-slate-200">
            Katakana to Hangul
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I convert Japanese Hiragana to Hangul pronunciation on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does Hiragana-to-Hangul mapping run locally in my browser?
            </h3>
            <div className="space-y-2">
              {GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is this Hiragana to Hangul converter for, and how accurate is it?
            </h3>
            <div className="space-y-2">
              {GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser Hiragana to Hangul tool for study or quick reference?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do learners use Hiragana-to-Hangul output with notes or pronunciation drills?
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
