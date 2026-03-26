import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import AverageCalculator from "./AverageCalculator";

export const metadata: Metadata = createMetadata({
  title: "Calculate Mean, Median, Mode",
  description:
    "Average Calculator - Calculate mean, median, mode, range, variance, standard deviation, quartiles, geometric and harmonic mean. Free online statistical analysis tool.",
  path: "/tools/calculator/average-calculator",
  keywords: [
    "average calculator",
    "mean calculator",
    "median calculator",
    "mode calculator",
    "standard deviation",
    "variance",
    "quartile",
    "geometric mean",
    "harmonic mean",
    "statistical calculator",
    "data analysis",
    "withustools",
  ],
});

const AVERAGE_GUIDE = {
  usage: [
    "Enter numbers separated by commas or spaces. Example: 1, 2, 3, 4, 5. Supports CSV paste from Excel.",
    "Results update automatically as you type (real-time). Use Calculate, Reset, or Use sample data as needed.",
    "Set decimal places (0–6), thousands separator, and variance type (Sample / Population). Copy results to clipboard with one click.",
  ],
  howItWorks: [
    "Mean: Sum ÷ Count. Median: Middle value when sorted. Mode: Most frequent value(s). Range: Max − Min.",
    "Variance: Average of squared deviations from mean. Standard deviation: square root of variance. You can choose Sample (n−1) or Population (n) for variance calculation.",
    "Quartiles (Q1, Q3): We use the median-of-halves method: split data at the median, then take the median of the lower half for Q1 and the median of the upper half for Q3. IQR = Q3 − Q1.",
    "Geometric mean: (∏ x_i)^(1/n), requires all positive numbers. Harmonic mean: n / Σ(1/x_i), requires all positive non-zero numbers.",
  ],
  about: [
    "Free online average calculator with comprehensive statistics. Uses a single, consistent set of calculation methods (see below) so you get predictable, comparable results.",
  ],
  advantages: [
    "15+ statistics: Mean, Median, Mode, Min, Max, Range, Variance, Std Dev, Q1, Q3, IQR, Geometric Mean, Harmonic Mean.",
    "Variance toggle: Choose Sample (n−1, default) or Population (n) to match your use case.",
    "Clear calculation methods: All formulas are documented. Same input → same result, every time.",
  ],
  useCases: [
    "Academic: Grade analysis, test scores, research data.",
    "Financial: Sales analysis, investment returns, market research.",
    "Scientific: Experimental data, survey analysis, quality control.",
    "Personal: Budget planning, fitness tracking, expense averages.",
  ],
  calculationMethods: [
    {
      title: "Basic statistics",
      items: [
        "Mean (arithmetic average): Sum of all values ÷ number of values.",
        "Median: The middle value when data is sorted. If even number of values, average of the two middle values.",
        "Mode: The value(s) that appear most frequently. N/A when all values are unique.",
        "Min / Max / Range: Smallest value, largest value, and Max − Min.",
      ],
    },
    {
      title: "Variance & standard deviation",
      items: [
        "Sample variance (default): Σ(x − mean)² ÷ (n − 1). Use when your data is a sample drawn from a larger population. Matches Excel VAR.S, Google Sheets VAR.S.",
        "Population variance: Σ(x − mean)² ÷ n. Use when your data includes the entire population.",
        "Standard deviation: Square root of variance. Same formula, whether sample or population.",
      ],
    },
    {
      title: "Quartiles (Q1, Q2, Q3) & IQR",
      items: [
        "Method: Median of lower/upper half (exclusive median). Commonly used in textbooks and box plots.",
        "Step 1: Sort data. Find median (Q2).",
        "Step 2: Q1 = median of the lower half (values below median, excluding median when n is odd).",
        "Step 3: Q3 = median of the upper half (values above median, excluding median when n is odd).",
        "IQR (interquartile range) = Q3 − Q1.",
      ],
    },
    {
      title: "Geometric mean",
      items: [
        "Formula: (x₁ × x₂ × … × xₙ)^(1/n), or equivalently exp(Σ ln(xᵢ) / n).",
        "Requires all values to be positive. Shows N/A if any value is zero or negative.",
        "Useful when averaging ratios or multiplicative growth rates.",
      ],
    },
    {
      title: "Harmonic mean",
      items: [
        "Formula: n / (1/x₁ + 1/x₂ + … + 1/xₙ).",
        "Requires all values to be positive and non-zero. Shows N/A otherwise.",
        "Useful for rates (e.g., average speed over equal distances).",
      ],
    },
  ],
};

export default function AverageCalculatorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Average Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">calculator</p>
          </div>
        </div>
      </div>

      <AverageCalculator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {AVERAGE_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {AVERAGE_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Average Calculator</h3>
            <div className="space-y-2">
              {AVERAGE_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {AVERAGE_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {AVERAGE_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              6. Calculation Methods (How We Compute Each Statistic)
            </h3>
            <p className="mb-4 text-slate-400">
              We use one fixed method per statistic so that the same input always gives the same result. This reduces confusion when comparing with other tools or your own calculations.
            </p>
            <div className="space-y-6">
              {AVERAGE_GUIDE.calculationMethods.map((section, i) => (
                <div key={i}>
                  <h4 className="mb-2 font-medium text-slate-300">{section.title}</h4>
                  <ul className="list-disc space-y-1 pl-5">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
