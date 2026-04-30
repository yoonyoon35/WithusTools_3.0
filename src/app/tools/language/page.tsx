import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { LANGUAGE_INDEX_GUIDE } from "./language-content";

export const metadata: Metadata = createMetadata({
  title: "Language Tools",
  description:
    "Free online language tools for alphabet and script study. Practice English, Hiragana, Katakana, Hangul, and use Hangul-kana pronunciation converters in your browser.",
  path: "/tools/language",
  keywords: [
    "language tools",
    "English alphabet",
    "hiragana chart",
    "katakana chart",
    "hangul chart",
    "kana converter",
    "hangul to hiragana",
    "hangul to katakana",
    "hiragana to hangul",
    "katakana to hangul",
    "language learning",
    "withustools",
  ],
});

const LANGUAGE_TOOLS = [
  {
    slug: "alphabet-study",
    name: "English Alphabet",
    description:
      "Learn A–Z letters with stroke order, writing tips, and pronunciation. Generate and print handwriting practice sheets.",
    path: "/tools/language/alphabet-study",
  },
  {
    slug: "hiragana-study",
    name: "Hiragana Chart",
    description:
      "Learn Japanese hiragana in gojūon order. Stroke-order animation, pronunciation, and practice sheet for basic, dakuon, and handakuon.",
    path: "/tools/language/hiragana-study",
  },
  {
    slug: "katakana-study",
    name: "Katakana Chart",
    description:
      "Learn Japanese katakana in gojūon order. Stroke-order animation, pronunciation, and practice sheet for basic, dakuon, and handakuon.",
    path: "/tools/language/katakana-study",
  },
  {
    slug: "hangul-study",
    name: "Hangul Chart",
    description:
      "Learn Korean jamo (consonants and vowels) with stroke order and pronunciation. Practice sheet for consonants, vowels, double consonants, and compound vowels.",
    path: "/tools/language/hangul-study",
  },
  {
    slug: "hiragana-katakana-converter",
    name: "Hiragana Katakana Converter",
    description:
      "Convert text to Hiragana and Katakana from one input. Supports romaji, existing kana, and mixed input. Real-time conversion.",
    path: "/tools/language/hiragana-katakana-converter",
  },
  {
    slug: "hangul-to-hiragana",
    name: "Hangul to Hiragana (Pronunciation)",
    description:
      "Map Korean Hangul syllables to hiragana by approximate pronunciation. Other characters pass through unchanged.",
    path: "/tools/language/hangul-to-hiragana",
  },
  {
    slug: "hangul-to-katakana",
    name: "Hangul to Katakana (Pronunciation)",
    description:
      "Map Korean Hangul syllables to katakana by approximate pronunciation—the same rules as Hangul to Hiragana.",
    path: "/tools/language/hangul-to-katakana",
  },
  {
    slug: "hiragana-to-hangul",
    name: "Hiragana to Hangul (Pronunciation)",
    description:
      "Inverse of Hangul to Hiragana: decode pronunciation-style hiragana (and basic katakana) back into Hangul.",
    path: "/tools/language/hiragana-to-hangul",
  },
  {
    slug: "katakana-to-hangul",
    name: "Katakana to Hangul (Pronunciation)",
    description:
      "Same inverse as Hiragana to Hangul, tuned for katakana from Hangul to Katakana (normalize then decode).",
    path: "/tools/language/katakana-to-hangul",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "What can I do on the Language Tools page?",
    answer:
      "You can study English, Hiragana, Katakana, and Hangul charts, then use pronunciation-based converters between Hangul and kana.",
  },
  {
    question: "Do these language tools work without signup?",
    answer:
      "Yes. All tools are available right away without creating an account.",
  },
  {
    question: "Is my text processed on a server?",
    answer:
      "No. Processing runs in your browser, so your input stays on your device.",
  },
];

export default function LanguageToolsIndexPage() {
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
          <ToolIcon name="language" className="mb-4" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Language Tools</h1>
            <p className="mt-1 text-sm text-slate-500">language</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Study alphabet and scripts in one place, then convert text between Hangul and
        kana by pronunciation. Everything runs in your browser.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LANGUAGE_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">
              {tool.name}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{tool.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Open {tool.name} →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Language Tools Guide</h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          Start with script study pages, then move to converters for practical text work.
          Popular choices are{" "}
          <Link href="/tools/language/hiragana-study" className="underline hover:text-slate-200">
            Hiragana Chart
          </Link>{" "}
          and{" "}
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
              1. How do I pick the right language or study tool from this list?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {LANGUAGE_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How do these language tools handle my text without uploading it?
            </h3>
            <div className="space-y-2">
              {LANGUAGE_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What language and study tools are included, and who are they for?
            </h3>
            <div className="space-y-2">
              {LANGUAGE_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why practice Japanese and Korean reading with lightweight web tools?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {LANGUAGE_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. Where do language tools help for travel, class, or self-study?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {LANGUAGE_INDEX_GUIDE.useCases.map((item, i) => (
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

      <Link
        href="/"
        className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to home
      </Link>
    </div>
  );
}
