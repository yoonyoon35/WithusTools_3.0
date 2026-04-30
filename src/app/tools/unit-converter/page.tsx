import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverterHubGuide from "./UnitConverterHubGuide";

export const metadata: Metadata = createMetadata({
  title: "Unit Converter Tools",
  description:
    "Free online unit converter tools for length, weight, temperature, area, volume, speed, time, digital storage, pressure, energy, power, and angle.",
  path: "/tools/unit-converter",
  keywords: [
    "unit converter",
    "length converter",
    "weight converter",
    "temperature converter",
    "area converter",
    "volume converter",
    "angle converter",
    "power converter",
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
    description:
      "Convert Pascal, hPa, mmHg, bar, atmosphere, PSI, torr. Dedicated pair pages with formulas and tables. For engineering and meteorology.",
    path: "/tools/unit-converter/pressure",
  },
  {
    slug: "energy",
    name: "Energy Converter",
    description: "Convert joules, calories, kWh, BTU, electronvolts, therm, feet-pounds. For physics and energy management.",
    path: "/tools/unit-converter/energy",
  },
  {
    slug: "power",
    name: "Power Converter",
    description:
      "Convert watts, kW, MW, mW, mechanical horsepower, BTU/h, kcal/h, VA, dBm, ft·lb/s. Dedicated pair pages with formulas and tables.",
    path: "/tools/unit-converter/power",
  },
  {
    slug: "angle",
    name: "Angle Converter",
    description:
      "Convert degrees, radians, NATO mils, arc minutes, gradians, arcseconds. Dedicated pair pages with formulas and tables.",
    path: "/tools/unit-converter/angle",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "What can I convert on the Unit Converter Tools page?",
    answer:
      "You can convert common measurement categories including length, weight, temperature, area, volume, speed, time, digital storage, pressure, energy, power, and angle.",
  },
  {
    question: "Do these unit converters support both metric and imperial units?",
    answer:
      "Yes. Most converters include both metric and imperial units where relevant.",
  },
  {
    question: "Can I open detailed pair conversion pages from here?",
    answer:
      "Yes. Category tools link to dedicated pair pages with formulas, examples, and reference tables.",
  },
];

export default function UnitConverterIndexPage() {
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
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Unit Converter Tools</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert everyday units quickly across major categories, with metric and imperial support where applicable.
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

      <UnitConverterHubGuide />

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Unit Converter Tools Guide</h2>
        <p className="text-sm leading-relaxed text-slate-400">
          Popular starting points are{" "}
          <Link href="/tools/unit-converter/length" className="underline hover:text-slate-200">
            Length Converter
          </Link>
          ,{" "}
          <Link href="/tools/unit-converter/temperature" className="underline hover:text-slate-200">
            Temperature Converter
          </Link>
          , and{" "}
          <Link href="/tools/unit-converter/weight" className="underline hover:text-slate-200">
            Weight Converter
          </Link>
          . For advanced cases, open category-specific pair pages and FAQs.
        </p>
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
