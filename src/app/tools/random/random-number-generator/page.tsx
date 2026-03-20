import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import RandomNumberGenerator from "./RandomNumberGenerator";

export const metadata: Metadata = createMetadata({
  title: "Random Number Generator | Generate Random Numbers Instantly",
  description:
    "Generate random numbers with customizable range, quantity, and formatting. Perfect for lotteries, games, and statistical sampling. Free online tool.",
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
    "Set the minimum and maximum values to define your number range (e.g., 1 to 100).",
    "Choose the quantity of numbers to generate (1–1000). Enable or disable duplicates and sorting.",
    "Click Generate Numbers. Use Copy or Download to save results.",
  ],
  howItWorks: [
    "The tool uses cryptographically secure random number generation (crypto.getRandomValues) for true randomness.",
    "When duplicates are disabled, numbers are generated using Fisher-Yates shuffle for uniform distribution.",
    "All processing runs in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online random number generator for lotteries, games, statistical sampling, and simulations. Customizable range, quantity, separator, and duplicate/sort options.",
  ],
  advantages: [
    "Cryptographic security: Uses crypto.getRandomValues for true randomness.",
    "Flexible options: Range, quantity, separator, duplicates, and sorting.",
    "No signup: Use immediately in any browser.",
    "Privacy: All processing happens locally.",
  ],
  useCases: [
    "Lottery simulations: Generate lottery numbers (e.g., 1–49, 6 numbers, no duplicates, sorted).",
    "Statistical sampling: Random sample selection for research.",
    "Games: Dice rolls, random picks, contests.",
    "Development: Test data, simulations, algorithm testing.",
  ],
};

export default function RandomNumberGeneratorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="random" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Random Number Generator
            </h1>
            <p className="mt-1 text-sm text-slate-500">random</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Generate random numbers with customizable range, quantity, and formatting.
        Perfect for lotteries, games, and statistical sampling. Ctrl+Enter to generate.
      </p>

      <RandomNumberGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {RANDOM_NUMBER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {RANDOM_NUMBER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. About Random Number Generator
            </h3>
            <div className="space-y-2">
              {RANDOM_NUMBER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {RANDOM_NUMBER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. Real-World Use Cases
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
