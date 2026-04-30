import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { RANDOM_INDEX_GUIDE } from "./random-content";

export const metadata: Metadata = createMetadata({
  title: "Random Generator Tools",
  description:
    "Password Generator and Random Number Generator. Create strong passwords and random numbers with customizable options. All processing runs in your browser.",
  path: "/tools/random",
  keywords: [
    "random generator",
    "password generator",
    "random number generator",
    "strong password",
    "random numbers",
    "lottery numbers",
    "withustools",
  ],
});

const RANDOM_TOOLS = [
  {
    slug: "password-generator",
    name: "Password Generator",
    description: "Create strong, secure passwords with customizable length and character types. Real-time strength assessment.",
    path: "/tools/random/password-generator",
  },
  {
    slug: "random-number-generator",
    name: "Random Number Generator",
    description: "Generate random numbers with customizable range, quantity, and formatting. Perfect for lotteries, games, and sampling.",
    path: "/tools/random/random-number-generator",
  },
] as const;

export default function RandomToolsIndexPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I generate passwords or random numbers from this page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose the tool, set your options, generate output, then copy or download the result.",
        },
      },
      {
        "@type": "Question",
        name: "How does randomness work in these browser-based generators?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generators use browser-side random APIs and apply your selected range, length, and formatting settings.",
        },
      },
      {
        "@type": "Question",
        name: "What random generator tools are available, and how do they differ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One tool is for password creation and the other is for customizable random number output.",
        },
      },
      {
        "@type": "Question",
        name: "When should I use random values for games, testing, or account security?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use them for secure credential creation, random picks, test data, and simulation workflows.",
        },
      },
    ],
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
            <h1 className="text-3xl font-bold text-slate-100">Random Generator</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online random generator tools in browser
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Generate strong passwords and random numbers quickly for daily security
        and testing tasks.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RANDOM_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{tool.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{tool.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Open {tool.name} →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Random Generator Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How do I generate passwords or random numbers from this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {RANDOM_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does randomness work in these browser-based generators?
            </h3>
            <div className="space-y-2">
              {RANDOM_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What random generator tools are available, and how do they differ?
            </h3>
            <div className="space-y-2">
              {RANDOM_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use an online random or password tool when data stays on-device?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {RANDOM_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When should I use random values for games, testing, or account security?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {RANDOM_INDEX_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/"
        className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to home
      </Link>
    </div>
  );
}
