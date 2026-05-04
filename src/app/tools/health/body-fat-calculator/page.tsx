import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import BodyFatCalculator from "./BodyFatCalculator";

export const metadata: Metadata = createMetadata({
  title: "Body Fat Calculator (Tape Estimate)",
  description:
    "Estimate body fat percentage with the U.S. Navy circumference method (neck, waist, height; hip for women). Metric or US units. Not a substitute for DXA or BIA—runs locally in your browser.",
  path: "/tools/health/body-fat-calculator",
  keywords: [
    "body fat calculator",
    "navy body fat formula",
    "tape measure body fat",
    "body fat percentage estimate",
    "circumference body composition",
    "neck waist body fat",
    "withustools",
  ],
});

const BF_GUIDE = {
  usage: [
    "Select male or female, then enter standing height, neck at the narrowest point, and waist at the navel (Navy-style horizontal tape).",
    "Women also enter hip girth at the widest part of the buttocks—the female Navy equation uses waist plus hip minus neck inside a logarithm.",
    "Pick metric or US units and wait a moment after typing; the estimate updates on a short delay like the other calculators here.",
  ],
  howItWorks: [
    "The tool converts everything to inches, applies the published Navy logarithmic coefficients, then shows percent body fat to one decimal.",
    "The coloured chip under the percentage maps loosely to ACE-style population bands; those bands are only a visual aid, not part of the Navy math.",
  ],
  about: [
    "DXA splits fat, lean, and bone by X-ray attenuation. BIA predicts water compartments with electricity. A tape cannot see visceral fat directly, so disagreement of several percentage points is normal.",
    "Age is not an input here because the classic Navy tape equations do not include an age term. Older adults and very muscular people are exactly where tape methods drift most.",
  ],
  advantages: [
    "No scale beyond a tape and no server upload.",
    "Same worksheet layout as the rest of the calculator hub so you are not learning a new UI pattern.",
    "Copy button pastes the headline percentage and the informal category label for quick notes.",
  ],
  useCases: [
    "Checking whether your hand math matches what a recruiter or trainer wrote on a form.",
    "Seeing how sensitive the percentage is when you move the waist tape up or down an inch.",
    "Teaching students why circumference models and scanner models rarely match line for line.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Why might this number disagree with my gym scale or DEXA report?",
    answer:
      "The Navy method only sees circumferences. BIA scales infer water; DEXa partitions tissue by X-ray. Each system has its own bias. Expect several points of spread, sometimes more, rather than perfect agreement.",
  },
  {
    question: "Does this page use age anywhere?",
    answer:
      "No. The standard Navy tape equations published for screening do not include age. Some newer research models add age, but we stuck to the widely reproduced Navy form so the result is easy to audit.",
  },
  {
    question: "Where exactly should I put the waist tape?",
    answer:
      "Navy instructions call for a horizontal measurement at the navel with relaxed abdominals. Natural waist or narrowest point is a different site and will change the percentage.",
  },
  {
    question: "Can bodybuilders use this?",
    answer:
      "They can type numbers in, but very large necks and lean waists can push the logarithmic formula into odd territory. Dense muscle breaks the assumptions the regression was trained on.",
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. It is arithmetic on circumferences plus informal chart wording. Use professional guidance for training, disease risk, or prescriptions.",
  },
];

export default function BodyFatCalculatorPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Body fat (tape estimate)</h1>
            <p className="mt-1 text-sm text-slate-500">
              U.S. Navy circumference method—not DXA or BIA
            </p>
          </div>
        </div>
      </div>

      <BodyFatCalculator />

      <section
        className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8"
        aria-labelledby="bf-reference-heading"
      >
        <h2
          id="bf-reference-heading"
          className="text-lg font-semibold text-slate-200 sm:text-xl"
        >
          Equations (log base 10, inches inside the log)
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
          <p>
            Published Navy screening forms list coefficients for men and women. This page converts
            your centimetres or feet and inches into total height in inches, converts metric
            circumferences to inches, then evaluates the same expressions you would find in a PDF of
            the instructions.
          </p>
          <p className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 font-mono text-slate-300">
            Men: BF% = 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76
          </p>
          <p className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 font-mono text-slate-300">
            Women: BF% = 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387
          </p>
          <p className="text-xs text-slate-500">log10 means base-10 logarithm, same as in the code.</p>
          <p>
            Waist is abdomen at the navel; hip is the maximal buttock breadth; neck is minimal
            circumference; height is barefoot. If waist minus neck (men) or waist plus hip minus
            neck (women) is not clearly positive, the logarithm is undefined— the calculator stops
            with an error instead of inventing a number.
          </p>
        </div>

        <h3 className="mt-8 text-base font-semibold text-slate-200">Informal chart bands (chip only)</h3>
        <p className="mt-2 text-sm text-slate-400">
          The label colours borrow loose buckets similar to ACE reference material (for example
          athlete, fitness, average ranges). They are here so you have language to talk about a
          percentage band—they are{" "}
          <span className="font-medium text-slate-300">not</span> returned by the Navy formula and
          they are not clinical classes.
        </p>

        <h3 className="mt-8 text-base font-semibold text-slate-200">Why we lead with the limitations</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-400">
          <li>
            BIA can swing with hydration; DEXA costs money and still has slice thickness assumptions;
            underwater weighing is rare. Tape is cheap but blunt—honesty about that trade-off matters
            more than pretending three circumferences equal a scan.
          </li>
          <li>
            If you already have a reliable BIA or DEXA number you trust, treat this page as a second
            opinion for curiosity, not a tie-breaker.
          </li>
          <li>
            For waist-to-hip patterning without percent fat, see the{" "}
            <Link href="/tools/health/waist-hip-ratio-calculator" className="text-slate-200 underline">
              waist-to-hip ratio calculator
            </Link>
            . For weight versus height only, use{" "}
            <Link href="/tools/health/bmi-calculator" className="text-slate-200 underline">
              BMI
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Quick guide</h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. What do I measure first?</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {BF_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. What math runs here?</h3>
            <div className="space-y-2">
              {BF_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. Why might this disagree with a scan?</h3>
            <div className="space-y-2">
              {BF_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Why use a browser-only tool?</h3>
            <ul className="list-disc space-y-2 pl-5">
              {BF_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Typical uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {BF_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
