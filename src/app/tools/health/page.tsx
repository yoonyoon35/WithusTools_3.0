import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = createMetadata({
  title: "Health Tools",
  description:
    "Body metrics and energy estimates in one place: BMI, skeletal muscle index, waist-to-hip ratio, BMR and TDEE, and Navy tape body fat—all in your browser.",
  path: "/tools/health",
  keywords: [
    "BMI calculator",
    "skeletal muscle index",
    "waist to hip ratio",
    "BMR calculator",
    "TDEE calculator",
    "body fat calculator",
    "health tools",
    "withustools",
  ],
});

const HEALTH_TOOLS = [
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    description:
      "Body mass index with metric or US units and category bands—height and weight only.",
    path: "/tools/health/bmi-calculator",
  },
  {
    slug: "skeletal-muscle-index-calculator",
    name: "Skeletal Muscle Index Calculator",
    description:
      "Appendicular muscle mass divided by height squared (kg/m²) with optional EWGSOP2-style cut-offs.",
    path: "/tools/health/skeletal-muscle-index-calculator",
  },
  {
    slug: "waist-hip-ratio-calculator",
    name: "Waist-to-Hip Ratio Calculator",
    description:
      "Waist and hip tapes, instant WHR, optional WHO-style ratio lines and Europid waist bands.",
    path: "/tools/health/waist-hip-ratio-calculator",
  },
  {
    slug: "bmr-tdee-calculator",
    name: "BMR and TDEE Calculator",
    description:
      "Mifflin–St Jeor resting burn plus activity-based maintenance calories. Metric or US units.",
    path: "/tools/health/bmr-tdee-calculator",
  },
  {
    slug: "body-fat-calculator",
    name: "Body Fat Calculator (Tape Estimate)",
    description:
      "U.S. Navy circumference method; explicit note that DXA and BIA often disagree by several points.",
    path: "/tools/health/body-fat-calculator",
  },
] as const;

const HEALTH_INDEX_GUIDE = {
  usage: [
    "Choose the tool that matches what you measured today: BMI from height and weight, WHR from two tape lines, Navy body fat from neck and waist (and hip for women), and so on.",
    "Read the short disclaimer on each page—tape and formula estimates are not lab results.",
    "Switch tools from this hub when you want a different angle on the same numbers (for example BMI plus waist context).",
  ],
  howItWorks: [
    "Every tool runs locally in your browser; nothing is sent to a server for processing.",
    "Each page documents its own equations so you can line results up with a print-out from a clinic or device.",
  ],
  about: [
    "These calculators sit next to but separate from general math calculators so people browsing for grades or percentages are not mixed in with body metrics.",
    "If something looks off, re-measure with the same posture and tape tension before chasing a new programme.",
  ],
  advantages: [
    "No account wall.",
    "Mobile-friendly layouts shared with the rest of WithusTools.",
    "Copy buttons where you need to paste numbers into notes or email.",
  ],
  useCases: [
    "Double-checking paperwork before a consult.",
    "Classroom demos on how indices are normalised.",
    "Rough tracking when you already own a tape measure and nothing else.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Why is Health split from Calculator Tools?",
    answer:
      "Calculator Tools stays focused on grades, stats, percentages, and programmer math. Health pages collect body-composition and energy estimates in one category so filters and related links stay on-topic.",
  },
  {
    question: "Which tool should I open first?",
    answer:
      "If you only have height and weight, start with BMI. If you have a body-composition print-out with appendicular muscle mass, use skeletal muscle index. For maintenance calories after you know your activity level, use BMR and TDEE.",
  },
  {
    question: "Do these replace a doctor or dietitian?",
    answer:
      "No. They are educational calculators. Use professional guidance for diagnosis, prescriptions, or training plans.",
  },
  {
    question: "Where did the old calculator URLs go?",
    answer:
      "Bookmarks under /tools/calculator/... for these five tools should redirect to the new /tools/health/... paths.",
  },
];

export default function HealthToolsIndexPage() {
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
          <ToolIcon name="heart" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Health Tools</h1>
            <p className="mt-1 text-sm text-slate-500">
              BMI, body shape, muscle index, calories, and tape body fat
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Tape-based and formula-based estimates only—not medical devices. For pure math (averages,
        GPA, percentages), use{" "}
        <Link href="/tools/calculator" className="text-slate-200 underline">
          Calculator Tools
        </Link>
        .
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {HEALTH_TOOLS.map((tool) => (
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
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Health Tools guide</h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Need unit conversion first? Try{" "}
          <Link href="/tools/unit-converter" className="text-slate-200 underline">
            Unit Converter
          </Link>
          . For scheduling, see{" "}
          <Link href="/tools/time" className="text-slate-200 underline">
            Time Tools
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How do I pick a tool?</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {HEALTH_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. Where do the numbers run?</h3>
            <div className="space-y-2">
              {HEALTH_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. What belongs in this category?</h3>
            <div className="space-y-2">
              {HEALTH_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Practical perks</h3>
            <ul className="list-disc space-y-2 pl-5">
              {HEALTH_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Typical uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {HEALTH_INDEX_GUIDE.useCases.map((item, i) => (
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
