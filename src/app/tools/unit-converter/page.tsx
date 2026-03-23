import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = createMetadata({
  title: "Unit Converter Tools",
  description:
    "Free online unit converters: length, weight, temperature, area, volume, speed, time, digital storage, pressure, energy, and angle. Convert between metric and imperial units instantly.",
  path: "/tools/unit-converter",
  keywords: [
    "unit converter",
    "length converter",
    "weight converter",
    "temperature converter",
    "area converter",
    "volume converter",
    "angle converter",
    "digital storage converter",
    "metric converter",
    "imperial converter",
    "measurement conversion",
    "withustools",
  ],
});

const UNIT_CONVERTER_TOOLS = [
  {
    slug: "length",
    name: "Length Converter",
    description: "Convert kilometers, meters, feet, inches, miles, yards, and more. Supports metric and imperial units.",
    path: "/tools/unit-converter/length",
  },
  {
    slug: "weight",
    name: "Weight Converter",
    description: "Convert kilograms, pounds, ounces, grams, milligrams. Essential for cooking, shipping, and health monitoring.",
    path: "/tools/unit-converter/weight",
  },
  {
    slug: "temperature",
    name: "Temperature Converter",
    description: "Convert Celsius, Fahrenheit, and Kelvin. Perfect for weather, cooking, and scientific applications.",
    path: "/tools/unit-converter/temperature",
  },
  {
    slug: "area",
    name: "Area Converter",
    description: "Convert square meters, square feet, acres, hectares, and more. For real estate and construction.",
    path: "/tools/unit-converter/area",
  },
  {
    slug: "volume",
    name: "Volume Converter",
    description: "Convert liters, gallons, milliliters, cubic meters, quarts, pints, and more.",
    path: "/tools/unit-converter/volume",
  },
  {
    slug: "speed",
    name: "Speed Converter",
    description: "Convert km/h, mph, m/s, feet per second. For transportation, sports, and physics calculations.",
    path: "/tools/unit-converter/speed",
  },
  {
    slug: "time",
    name: "Time Converter",
    description: "Convert seconds, minutes, hours, days, weeks, months, and years.",
    path: "/tools/unit-converter/time",
  },
  {
    slug: "digital",
    name: "Digital Storage Converter",
    description: "Convert bits, bytes, KB, MB, GB, TB, KiB, MiB, GiB, TiB. Supports decimal (1000) and binary (1024) units.",
    path: "/tools/unit-converter/digital",
  },
  {
    slug: "pressure",
    name: "Pressure Converter",
    description: "Convert Pascal, bar, atmosphere, PSI, torr. For engineering and meteorology.",
    path: "/tools/unit-converter/pressure",
  },
  {
    slug: "energy",
    name: "Energy Converter",
    description: "Convert joules, calories, kWh, BTU, electronvolts, therm, foot-pounds. For physics and energy management.",
    path: "/tools/unit-converter/energy",
  },
  {
    slug: "angle",
    name: "Angle Converter",
    description: "Convert degrees, radians, gradians, arcminutes, arcseconds. For geometry, trigonometry, and surveying.",
    path: "/tools/unit-converter/angle",
  },
] as const;

const UNIT_INDEX_GUIDE = {
  usage: [
    "Choose a converter from the grid above: Length, Weight, Temperature, Area, Volume, Speed, Time, Digital Storage, Pressure, Energy, or Angle.",
    "Enter a value and select source and target units. The result updates in real time as you type.",
    "Use the swap button to quickly switch source and target units. Copy the result to clipboard with one click.",
  ],
  howItWorks: [
    "Each converter uses internationally recognized conversion factors. Metric (SI) and imperial units are fully supported.",
    "Temperature uses special formulas: Celsius ↔ Fahrenheit: (°F - 32) × 5/9 = °C; Celsius ↔ Kelvin: K = °C + 273.15.",
    "All conversions run in your browser. No data is sent to any server. Your input and results stay on your device.",
  ],
  about: [
    "Free online unit converters for everyday measurement needs. No signup required. Works on desktop and mobile.",
    "Designed for students, professionals, travelers, and anyone who needs quick, accurate unit conversions.",
  ],
  advantages: [
    "Real-time conversion: Results update instantly as you type.",
    "Metric & imperial: Support for both measurement systems.",
    "Accurate: Uses standard conversion factors and precise formulas.",
    "Private: All calculations run locally. No server communication.",
  ],
  useCases: [
    "Construction: Length (m, ft), area (m², ft²), volume for materials.",
    "Cooking: Weight (g, oz), volume (ml, cups) for recipes.",
    "Travel: Distance (km, miles), temperature (°C, °F) for weather.",
    "Science: Temperature (K), pressure (Pa), energy (J) for experiments.",
    "Engineering: Angle (degrees, radians) for surveying and CAD.",
    "Computing: Digital storage (bytes, MB, GB) for file sizes.",
  ],
};

export default function UnitConverterIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Unit Converter Tools</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert length, weight, temperature, area, volume, speed, time, digital storage, pressure, energy, and angle.
        Metric and imperial units supported. All tools run in your browser—no signup required.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {UNIT_CONVERTER_TOOLS.map((tool) => (
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
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {UNIT_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {UNIT_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Unit Converter Tools</h3>
            <div className="space-y-2">
              {UNIT_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {UNIT_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {UNIT_INDEX_GUIDE.useCases.map((item, i) => (
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
