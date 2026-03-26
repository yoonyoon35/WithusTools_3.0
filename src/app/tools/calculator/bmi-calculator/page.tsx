import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import BMICalculator from "./BMICalculator";

export const metadata: Metadata = createMetadata({
  title: "Calculate Body Mass Index",
  description:
    "BMI Calculator - Calculate BMI (Body Mass Index) easily. Support for metric or US units. Get instant results with health category. Free online tool.",
  path: "/tools/calculator/bmi-calculator",
  keywords: [
    "bmi calculator",
    "body mass index",
    "calculate bmi",
    "weight calculator",
    "health calculator",
    "bmi chart",
    "ideal weight calculator",
    "bmi metric",
    "bmi us units",
    "bmi health categories",
    "withustools",
  ],
});

const BMI_GUIDE = {
  usage: [
    "Select Metric (kg/cm) or US Units (lbs/ft, in).",
    "Enter your height and weight in the appropriate fields.",
    "Click Calculate BMI to see your result and health category.",
  ],
  howItWorks: [
    "BMI = Weight ÷ Height². Metric: kg/(m²). US: (Weight lbs × 703) ÷ Height in².",
    "Categories: Underweight (<18.5), Normal (18.5–24.9), Overweight (25–29.9), Obese (30–34.9), Severely obese (≥35). See the reference table below the calculator for details.",
  ],
  about: [
    "Free online BMI calculator for health assessment. Calculate your Body Mass Index with metric or imperial units. Results include health category classification.",
    "Note: BMI does not reflect body composition, skeletal structure, age, or other individual factors.",
  ],
  advantages: [
    "Dual unit support: Metric and US units.",
    "Visual scale showing your position.",
    "Health category with recommendations.",
    "All calculations run locally in your browser.",
  ],
  useCases: [
    "Health screening and body composition assessment.",
    "Fitness goals and weight management.",
    "Research, studies, and population health.",
    "Personal health monitoring.",
  ],
};

export default function BMICalculatorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">BMI Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">calculator</p>
          </div>
        </div>
      </div>

      <BMICalculator />

      <section
        className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8"
        aria-labelledby="bmi-reference-heading"
      >
        <h2
          id="bmi-reference-heading"
          className="text-lg font-semibold text-slate-200 sm:text-xl"
        >
          How BMI is calculated
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
          <p>
            BMI (Body Mass Index) compares weight to height squared. It is a screening
            tool, not a diagnosis of body fat or health.
          </p>
          <p>
            <span className="font-medium text-slate-300">Metric:</span> height in meters{" "}
            <span className="font-mono text-slate-300">h</span>, weight in kilograms{" "}
            <span className="font-mono text-slate-300">w</span>.
          </p>
          <p className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 font-mono text-slate-300">
            BMI = w ÷ h² &nbsp;&nbsp;(units: kg/m²)
          </p>
          <p>
            Example: 70 kg and 1.70 m → BMI = 70 ÷ (1.70 × 1.70) ≈ 24.2.
          </p>
          <p>
            <span className="font-medium text-slate-300">US customary:</span> total height
            in inches <span className="font-mono text-slate-300">H</span>, weight in pounds{" "}
            <span className="font-mono text-slate-300">W</span>. The factor 703 converts
            lb/in² to the same kg/m² scale.
          </p>
          <p className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 font-mono text-slate-300">
            BMI = (W × 703) ÷ H²
          </p>
          <p>
            This matches what this calculator uses when you choose US Units (feet and
            inches are combined into total inches before squaring).
          </p>
        </div>

        <h3 className="mt-8 text-base font-semibold text-slate-200">
          Adult categories (this calculator)
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Cutoffs follow common WHO / CDC-style ranges for adults.{" "}
          <span className="font-medium text-slate-300">Weight limits for each category
          depend on your height</span>—same BMI always means the same ratio of weight to
          height², not the same weight for everyone.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          If height is <span className="font-mono text-slate-300">h</span> meters:{" "}
          <span className="font-mono text-slate-300">weight (kg) = BMI × h²</span>. In US
          units:{" "}
          <span className="font-mono text-slate-300">weight (lbs) = (BMI × H²) ÷ 703</span>.
          At 170 cm (1.70 m), the &quot;normal&quot; band is roughly 53.5–72.0 kg; at 5 ft 10 in
          (70 in), roughly 129–174 lbs for BMI 18.5–24.9.
        </p>

        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm text-slate-300">
            <caption className="sr-only">
              BMI categories, BMI ranges, and brief descriptions
            </caption>
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/80">
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  Category
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  BMI range
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  Weight vs height (summary)
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 text-slate-400">
              <tr className="bg-slate-900/20">
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-200">
                  Underweight
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">
                  &lt; 18.5
                </td>
                <td className="px-3 py-3">
                  Below 18.5 × h² (kg) or (18.5 × H²) ÷ 703 (lbs)
                </td>
                <td className="px-3 py-3">
                  May indicate low body weight for height. Discuss with a clinician if
                  unintended or concerning.
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-200">
                  Normal weight
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">
                  18.5 – 24.9
                </td>
                <td className="px-3 py-3">
                  Between lower and upper bound using 18.5 and 24.9 with your h or H
                </td>
                <td className="px-3 py-3">
                  Associated with the broad &quot;healthy weight&quot; range for many adults; still
                  only one screening measure.
                </td>
              </tr>
              <tr className="bg-slate-900/20">
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-200">
                  Overweight
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">
                  25.0 – 29.9
                </td>
                <td className="px-3 py-3">
                  From 25 × h² up to just under 30 × h² (same idea in lbs with H)
                </td>
                <td className="px-3 py-3">
                  Higher weight for height; may warrant lifestyle discussion or further
                  assessment—not a judgment of health by itself.
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-200">
                  Obese
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">
                  30.0 – 34.9
                </td>
                <td className="px-3 py-3">
                  Often called class I obesity in clinical charts
                </td>
                <td className="px-3 py-3">
                  Substantially elevated BMI; risk factors vary by person; professional
                  guidance is often recommended.
                </td>
              </tr>
              <tr className="bg-slate-900/20">
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-200">
                  Severely obese
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">
                  ≥ 35
                </td>
                <td className="px-3 py-3">
                  Class II/III obesity in many systems (e.g. 35–39.9, ≥ 40)
                </td>
                <td className="px-3 py-3">
                  This tool groups all BMI ≥ 35 here; finer classes exist in medical
                  references.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-base font-semibold text-slate-200">
          Good to know
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-400">
          <li>
            BMI does not distinguish muscle from fat; very muscular people can have a high
            BMI without high body fat.
          </li>
          <li>
            It may be less informative for some older adults, children (use age-specific
            percentiles), and during pregnancy.
          </li>
          <li>
            Ethnicity and other factors sometimes lead guidelines to use different
            cutoffs (e.g. for diabetes risk)—this page uses the standard adult ranges
            above.
          </li>
          <li>
            Waist circumference, diet, activity, blood pressure, and lab values add
            context that BMI alone cannot provide.
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {BMI_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {BMI_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About BMI Calculator</h3>
            <div className="space-y-2">
              {BMI_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {BMI_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {BMI_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
