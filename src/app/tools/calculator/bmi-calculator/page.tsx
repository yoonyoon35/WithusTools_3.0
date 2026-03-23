import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import BMICalculator from "./BMICalculator";

export const metadata: Metadata = createMetadata({
  title: "BMI Calculator | Calculate Body Mass Index",
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
    "Categories: Underweight (<18.5), Normal (18.5–24.9), Overweight (25–29.9), Obese (≥30).",
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
