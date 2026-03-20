import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Temperature Converter | Celsius, Fahrenheit, Kelvin",
  description:
    "Convert temperature: Celsius, Fahrenheit, Kelvin. Free online temperature converter. Perfect for weather, cooking, and scientific applications.",
  path: "/tools/unit-converter/temperature",
  keywords: [
    "temperature converter",
    "celsius to fahrenheit",
    "fahrenheit to celsius",
    "kelvin converter",
    "temperature conversion",
    "withustools",
  ],
});

const TEMPERATURE_GUIDE = {
  usage: [
    "Enter a value and select source unit (°C, °F, or K). Select target unit.",
    "Result updates in real time. Temperature uses special conversion formulas (not linear scaling).",
  ],
  howItWorks: [
    "Celsius to Fahrenheit: °F = (°C × 9/5) + 32.",
    "Fahrenheit to Celsius: °C = (°F - 32) × 5/9.",
    "Celsius to Kelvin: K = °C + 273.15. Kelvin is the SI base unit for temperature.",
  ],
  about: [
    "Free online temperature converter for Celsius, Fahrenheit, and Kelvin. Perfect for weather, cooking, and scientific applications. All calculations run in your browser.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "Celsius, Fahrenheit, and Kelvin supported.",
    "Special formulas for temperature (not linear scaling).",
    "All Unit Conversions panel shows value in every unit.",
    "Copy result to clipboard.",
  ],
  useCases: [
    "Weather: Convert between °C and °F for forecasts.",
    "Cooking: Oven and recipe temperatures.",
    "Science: Kelvin for physics and chemistry calculations.",
  ],
};

export default function TemperatureConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Temperature Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between Celsius, Fahrenheit, and Kelvin. Perfect for weather,
        cooking, and scientific applications. All Unit Conversions panel included.
      </p>

      <UnitConverter category="temperature" title="Convert Temperature" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {TEMPERATURE_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {TEMPERATURE_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Temperature Converter</h3>
            <div className="space-y-2">
              {TEMPERATURE_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEMPERATURE_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEMPERATURE_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/unit-converter"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Unit Converter
      </Link>
    </div>
  );
}
