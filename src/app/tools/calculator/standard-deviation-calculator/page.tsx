import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import StandardDeviationCalculator from "./StandardDeviationCalculator";
import StandardDeviationFigures from "./StandardDeviationFigures";

export const metadata: Metadata = createMetadata({
  title: "Standard Deviation Calculator | Population vs Sample",
  description:
    "Free standard deviation calculator: count, sum, mean, range, min, max, MAD, degrees of freedom (n−1), population & sample variance and standard deviation, coefficient of variation (CV), sum of squares (SS), and SEM (s/√n). Paste comma-, space-, or line-separated numbers; sort, reset, copy. Step-by-step guide and FAQ.",
  path: "/tools/calculator/standard-deviation-calculator",
  keywords: [
    "standard deviation calculator",
    "standard deviation formula",
    "population vs sample standard deviation",
    "sum of squares calculator",
    "coefficient of variation",
    "mean absolute deviation",
    "standard error of the mean",
    "sample standard deviation",
    "population standard deviation",
    "variance calculator",
    "how to calculate standard deviation step by step",
    "statistics calculator",
    "withustools",
  ],
});

const FAQ_ITEMS = [
  {
    q: "What is Population vs Sample Standard Deviation?",
    a: "Population standard deviation uses every member of the group you care about. Its variance divides squared deviations by n (the count). Sample standard deviation is for data drawn from a larger population; its variance divides by (n − 1) (Bessel’s correction) so the estimate is unbiased. This tool shows population and sample variance, standard deviation, and CV side by side so you can match your textbook, Excel VAR.P / VAR.S, or course notes.",
  },
  {
    q: "What is the standard deviation formula?",
    a: "Start with the mean μ (or x̄). For each value xᵢ, compute the deviation (xᵢ − mean), square it, and sum those squares (SS). For population variance σ², divide SS by n; for sample variance s², divide SS by (n − 1). Standard deviation is the square root of variance: σ or s. The standard deviation formula is therefore √(variance), with the divisor n or (n − 1) chosen to match population vs sample.",
  },
  {
    q: "How to calculate standard deviation step by step?",
    a: "Use the numbered guide below: (1) compute the mean, (2) subtract the mean from each value, (3) square each deviation, (4) sum the squares (SS), (5) divide SS by n (population) or (n − 1) (sample) to get variance, (6) take the square root for standard deviation. The on-page Step-by-Step section walks through the same logic with symbols.",
  },
  {
    q: "What is Sum of Squares (SS), and why does it appear after CV on the screen?",
    a: "SS = Σ(xᵢ − x̄)² is the sum of squared deviations from the mean. It is exactly what you divide by n or (n − 1) to obtain variance. The calculator computes SS first internally; the SS card is placed after the CV cards in the layout for readability, but the numeric SS is the same quantity used in the variance formulas above.",
  },
  {
    q: "What are Range, MAD, CV, and degrees of freedom (n − 1) on this page?",
    a: "Range is max − min (spread of the extremes). MAD (mean absolute deviation) is (1/n) Σ|xᵢ − x̄|, a scale in the same units as your data and often less sensitive to outliers than squaring. Coefficient of variation (CV) is standard deviation divided by |mean|: σ/|x̄| for population and s/|x̄| for sample—useful for comparing relative variability when means differ. If the mean is 0, CV is undefined (N/A). Degrees of freedom for the usual sample variance is n − 1 (shown as N/A when n < 2).",
  },
  {
    q: "What does “Standard error of the mean (s / √n)” mean?",
    a: "The standard error of the mean measures how much the sample mean would vary if you repeated sampling. We report SEM = s / √n, where s is the sample standard deviation (SS divided by n − 1, then square root). If n < 2, s is undefined, so SEM is not shown. When your list is the full population, some authors use σ / √n with population σ; our primary SEM line follows the usual sample-based definition.",
  },
];

export default function StandardDeviationCalculatorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Standard Deviation Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">calculator</p>
          </div>
        </div>
      </div>

      <StandardDeviationCalculator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-xl font-semibold text-slate-100">
          Standard deviation formula &amp; step-by-step guide
        </h2>
        <StandardDeviationFigures />
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">How to use this calculator</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Enter numbers separated by <span className="text-slate-300">commas, spaces, or line breaks</span>.
                Results update automatically after a short delay while you type; you can also press{" "}
                <span className="text-slate-300">Calculate</span> for an immediate run.
              </li>
              <li>
                Use <span className="text-slate-300">Sort ascending</span> to rewrite your list in order,{" "}
                <span className="text-slate-300">Reset</span> to clear, and <span className="text-slate-300">Copy results</span>{" "}
                to copy every statistic (same order as the on-page cards, plus sorted values).
              </li>
              <li>
                Adjust <span className="text-slate-300">decimal places</span> and optional{" "}
                <span className="text-slate-300">thousands separators</span>. On large screens the result cards use a{" "}
                <span className="text-slate-300">four-column</span> grid; on smaller screens they stack for easier reading.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-slate-200">What the results cards show</h3>
            <p className="mb-3">
              Each metric below matches a card in the tool (order may differ slightly from the theoretical derivation—SS
              is listed after CV for layout, but SS is the same value used in variance).
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="text-slate-300">Count (n), Sum, Mean</span> — basic size and average of your list.
              </li>
              <li>
                <span className="text-slate-300">Range, Minimum, Maximum</span> — range = max − min; min and max come from
                the sorted data.
              </li>
              <li>
                <span className="text-slate-300">MAD</span> — mean absolute deviation:{" "}
                <span className="font-mono text-slate-200">(1/n) Σ|xᵢ − x̄|</span>.
              </li>
              <li>
                <span className="text-slate-300">Degrees of freedom (n − 1)</span> — the divisor used for{" "}
                <em>sample</em> variance (integer; N/A if n &lt; 2).
              </li>
              <li>
                <span className="text-slate-300">Variance &amp; standard deviation</span> — population (÷ n) and sample
                (÷ (n − 1)); SD is the square root of the matching variance.
              </li>
              <li>
                <span className="text-slate-300">CV — population / sample</span> —{" "}
                <span className="font-mono text-slate-200">σ / |x̄|</span> and{" "}
                <span className="font-mono text-slate-200">s / |x̄|</span>; N/A if the mean is 0.
              </li>
              <li>
                <span className="text-slate-300">Sum of squares (SS)</span> —{" "}
                <span className="font-mono text-slate-200">Σ(xᵢ − x̄)²</span>; ties directly to both variance formulas.
              </li>
              <li>
                <span className="text-slate-300">Standard error of the mean</span> —{" "}
                <span className="font-mono text-slate-200">s / √n</span> (N/A if n &lt; 2).
              </li>
              <li>
                <span className="text-slate-300">Sorted data</span> — full list in ascending order for checking inputs.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              How to calculate standard deviation step by step
            </h3>
            <ol className="list-decimal space-y-4 pl-5">
              <li>
                <strong className="font-medium text-slate-300">Find the mean.</strong> Add all values and divide by
                the count n:
                <p className="mt-2 rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-2 font-mono text-slate-200">
                  x̄ = (x₁ + x₂ + … + xₙ) / n
                </p>
              </li>
              <li>
                <strong className="font-medium text-slate-300">Compute deviations.</strong> Subtract the mean from
                each observation: (xᵢ − x̄).
              </li>
              <li>
                <strong className="font-medium text-slate-300">Square each deviation.</strong> Use (xᵢ − x̄)² so
                positive and negative differences both contribute.
              </li>
              <li>
                <strong className="font-medium text-slate-300">Sum the squared deviations.</strong>
                <p className="mt-2 rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-2 font-mono text-slate-200">
                  SS = Σ (xᵢ − x̄)²
                </p>
              </li>
              <li>
                <strong className="font-medium text-slate-300">Divide to get variance.</strong>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>
                    <span className="text-slate-300">Population variance</span> (entire group): divide by{" "}
                    <span className="font-mono text-slate-200">n</span> —{" "}
                    <span className="font-mono text-slate-200">σ² = SS / n</span>.
                  </li>
                  <li>
                    <span className="text-slate-300">Sample variance</span> (data from a larger population): divide
                    by <span className="font-mono text-slate-200">n − 1</span> —{" "}
                    <span className="font-mono text-slate-200">s² = SS / (n − 1)</span> (requires n ≥ 2).
                  </li>
                </ul>
                <p className="mt-2 text-slate-500">
                  The denominator is the clearest difference between population (n) and sample (n − 1) variance; the
                  standard deviation formula is the square root of whichever variance you chose.
                </p>
              </li>
              <li>
                <strong className="font-medium text-slate-300">Take the square root.</strong>
                <p className="mt-2 rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-2 font-mono text-slate-200">
                  σ = √(SS / n) &nbsp;&nbsp;|&nbsp;&nbsp; s = √(SS / (n − 1))
                </p>
              </li>
            </ol>
            <p className="mt-4 text-slate-500">
              After σ and s are known, you can read the same SS from the calculator and verify{" "}
              <span className="font-mono text-slate-300">σ² = SS/n</span> and{" "}
              <span className="font-mono text-slate-300">s² = SS/(n−1)</span>. CV and SEM build on σ, s, and x̄ as
              described in the results list above.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-slate-200">Population vs Sample Standard Deviation</h3>
            <p>
              Use <span className="text-slate-300">population</span> formulas when your list is the complete set you
              want to describe (every team member’s score, every item in this batch). Use{" "}
              <span className="text-slate-300">sample</span> formulas when the list is only part of a larger group and
              you want to generalize; dividing by (n − 1) corrects bias in the variance estimate. Academic assignments
              and software (e.g. VAR.P vs VAR.S) label these differently—compare both outputs above with your rubric.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-slate-200">Common questions (FAQ)</h3>
            <ul className="space-y-5">
              {FAQ_ITEMS.map((item) => (
                <li key={item.q}>
                  <p className="font-medium text-slate-300">{item.q}</p>
                  <p className="mt-1">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-slate-200">Privacy</h3>
            <p>
              All math runs in your browser; numbers are not sent to a server. Safe for homework, lab data, and quick
              checks at work.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/calculator/average-calculator"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          Average Calculator (mean, median, mode)
        </Link>
        <Link href="/tools/calculator" className="text-slate-400 underline transition-colors hover:text-slate-200">
          ← Back to Calculator
        </Link>
      </div>
    </div>
  );
}
