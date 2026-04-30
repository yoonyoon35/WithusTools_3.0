import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import RandomNumberGenerator from "./RandomNumberGenerator";

export const metadata: Metadata = createMetadata({
  title: "Generate Random Numbers Instantly",
  description:
    "Free random number generator with customizable range, quantity, and output options in browser.",
  path: "/tools/random/random-number-generator",
  keywords: [
    "random number generator",
    "random numbers",
    "random integer generator",
    "lottery number generator",
    "random sampling",
    "withustools",
  ],
});

const RANDOM_NUMBER_GUIDE = {
  usage: [
    "Set min and max values for your number range.",
    "Choose how many values to generate and adjust duplicate/sort options.",
    "Generate output, then copy or download results.",
  ],
  howItWorks: [
    "The generator uses browser-side randomness APIs for value creation.",
    "Duplicate and ordering settings are applied after generation.",
    "All processing runs locally in browser runtime.",
  ],
  about: [
    "Use this tool for quick random picks and number lists.",
    "It is useful for games, sampling, and test-data style workflows.",
  ],
  advantages: [
    "Local random generation.",
    "Range and quantity controls.",
    "Duplicate/sort formatting options.",
    "No signup required.",
  ],
  useCases: [
    "Generate random picks for lottery-style draws.",
    "Create sampling lists for classroom or research tasks.",
    "Produce random values for tests and simulations.",
    "Run quick contest or game number selections.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I generate random numbers in a range or a whole list on this page?",
    answer:
      "Set min/max, choose quantity and options, generate the list, then copy or download output.",
  },
  {
    question: "How does this random number generator produce values in my browser?",
    answer:
      "It uses browser random APIs and applies your range and formatting settings locally.",
  },
  {
    question: "What is this random number tool for, and when is it not secure enough for crypto?",
    answer:
      "It is intended for general random tasks like picks and sampling, not full cryptographic key-management workflows.",
  },
  {
    question: "When do teachers, developers, or analysts need random draws or samples?",
    answer:
      "They use random draws for exercises, simulations, testing, and fair selection tasks.",
  },
];

export default function RandomNumberGeneratorPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="random" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Random Number Generator
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Online random number generator in browser
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Generate random numbers quickly with range, quantity, and output controls.
      </p>

      <RandomNumberGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Random Number Generator Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I generate random numbers in a range or a whole list on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {RANDOM_NUMBER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this random number generator produce values in my browser?
            </h3>
            <div className="space-y-2">
              {RANDOM_NUMBER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is this random number tool for, and when is it not secure enough for crypto?
            </h3>
            <div className="space-y-2">
              {RANDOM_NUMBER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a web random number generator for contests, games, or quick picks?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {RANDOM_NUMBER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do teachers, developers, or analysts need random draws or samples?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {RANDOM_NUMBER_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/random"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Random Tools
      </Link>
    </div>
  );
}
