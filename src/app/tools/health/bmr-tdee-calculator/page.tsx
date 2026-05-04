import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import BmrTdeeCalculator from "./BmrTdeeCalculator";

export const metadata: Metadata = createMetadata({
  title: "BMR and TDEE Calculator",
  description:
    "Estimate basal metabolic rate with the Mifflin–St Jeor equation, then multiply by an activity factor for total daily energy expenditure. Metric or US units, runs locally.",
  path: "/tools/health/bmr-tdee-calculator",
  keywords: [
    "BMR calculator",
    "TDEE calculator",
    "Mifflin St Jeor",
    "basal metabolic rate",
    "total daily energy expenditure",
    "maintenance calories",
    "calorie calculator",
    "activity factor",
    "withustools",
  ],
});

const BMR_GUIDE = {
  usage: [
    "Choose male or female, enter age, height, and weight in either metric or US units.",
    "Select the activity row that matches an ordinary week—not a vacation or a competition taper.",
    "Hit Calculate or pause typing; the page recalculates after a short delay whenever inputs change.",
  ],
  howItWorks: [
    "BMR uses the Mifflin–St Jeor formula with weight in kilograms, height in centimetres, and age in years.",
    "TDEE multiplies that BMR by one of five activity factors (1.2 through 1.9) borrowed from common sports-nutrition tables.",
  ],
  about: [
    "Every predictive equation spreads error. Two people with identical stats can differ in thyroid meds, genetics, sleep debt, and non-exercise movement.",
    "Calorimetry in a lab beats any website; treat the output as a starting number you adjust with two to four weeks of real-world weight trend.",
  ],
  advantages: [
    "Mifflin–St Jeor tends to track indirect calorimetry a bit better than the older Harris–Benedict rewrite for many modern adults.",
    "Activity multipliers are spelled out next to each radio option so you are not guessing what “moderate” means in isolation.",
    "Nothing leaves the tab: no account wall, no PDF export chain.",
  ],
  useCases: [
    "Setting a rough calorie target before you talk it through with a dietitian or coach.",
    "Teaching students where the 10 × weight + 6.25 × height − 5 × age pattern comes from.",
    "Sanity-checking numbers from a spreadsheet or app that does not show its work.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Why Mifflin–St Jeor instead of Harris–Benedict?",
    answer:
      "Mifflin–St Jeor is the equation many dietetics handouts switched to in the 1990s onward because pooled studies often showed slightly better agreement with measured resting energy in non-elderly adults. Harris–Benedict still appears in older software.",
  },
  {
    question: "Is TDEE the same as maintenance calories?",
    answer:
      "Roughly, yes—here TDEE means “about what you would eat to stay near the same weight at this activity level.” Weight would still drift from water, sodium, and cycle timing even if calories matched perfectly.",
  },
  {
    question: "What if I work out hard but sit the rest of the day?",
    answer:
      "Pick the row that reflects the whole day, not only the gym hour. Some people split the difference between Light and Moderate; this tool forces one multiplier so you stay consistent week to week.",
  },
  {
    question: "Can I use this while pregnant or breastfeeding?",
    answer:
      "Not without medical guidance. Energy needs shift with trimester, fetal growth, milk output, and individual labs—none of which this form captures.",
  },
  {
    question: "Is this personalised medical nutrition?",
    answer:
      "No. It is arithmetic plus generic activity bands. Use it for education or ballpark planning, not as a prescription.",
  },
];

export default function BmrTdeeCalculatorPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">BMR and TDEE</h1>
            <p className="mt-1 text-sm text-slate-500">
              Mifflin–St Jeor BMR, then activity-based total daily burn
            </p>
          </div>
        </div>
      </div>

      <BmrTdeeCalculator />

      <section
        className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8"
        aria-labelledby="bmr-reference-heading"
      >
        <h2
          id="bmr-reference-heading"
          className="text-lg font-semibold text-slate-200 sm:text-xl"
        >
          Equations on this page
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
          <p>
            Mifflin–St Jeor estimates resting metabolism—the calories you would burn lying quietly in a
            warm room after an overnight fast. It does not include digestion, fidgeting, or exercise.
          </p>
          <p className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 font-mono text-slate-300">
            Men: BMR = 10w + 6.25h − 5a + 5
          </p>
          <p className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 font-mono text-slate-300">
            Women: BMR = 10w + 6.25h − 5a − 161
          </p>
          <p>
            Symbols: <span className="font-mono text-slate-300">w</span> weight in kilograms,{" "}
            <span className="font-mono text-slate-300">h</span> height in centimetres,{" "}
            <span className="font-mono text-slate-300">a</span> age in years (this calculator floors
            decimals to a whole year before plugging in).
          </p>
          <p>
            TDEE is <span className="font-mono text-slate-300">BMR × activity factor</span>. Factors
            match the five-row list in the tool (1.2, 1.375, 1.55, 1.725, 1.9)—the same ladder many
            macro spreadsheets use, though labels vary slightly between authors.
          </p>
        </div>

        <h3 className="mt-8 text-base font-semibold text-slate-200">Activity factors (reference)</h3>
        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm text-slate-300">
            <caption className="sr-only">Activity level labels and multipliers</caption>
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/80">
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  Label in the tool
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  Multiplier
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  Typical pattern
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 text-slate-400">
              <tr className="bg-slate-900/20">
                <td className="px-3 py-3 font-medium text-slate-200">Sedentary</td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">1.2</td>
                <td className="px-3 py-3">Mostly sitting; little structured exercise.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-medium text-slate-200">Light</td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">1.375</td>
                <td className="px-3 py-3">Light sessions or walking a few days each week.</td>
              </tr>
              <tr className="bg-slate-900/20">
                <td className="px-3 py-3 font-medium text-slate-200">Moderate</td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">1.55</td>
                <td className="px-3 py-3">Planned training mid-week several times.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-medium text-slate-200">Active</td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">1.725</td>
                <td className="px-3 py-3">Hard training or a physical job most days.</td>
              </tr>
              <tr className="bg-slate-900/20">
                <td className="px-3 py-3 font-medium text-slate-200">Very active</td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">1.9</td>
                <td className="px-3 py-3">Near-daily intense work plus sport, or similar load.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-base font-semibold text-slate-200">Worth keeping in mind</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-400">
          <li>
            Older adults and people with major lean-mass loss sometimes need clinician-guided adjustments;
            predictive equations miss muscle mass unless you add body-composition data elsewhere.
          </li>
          <li>
            Medications, caffeine, stress, and room temperature can swing a measured resting metabolic
            rate by a few percent day to day.
          </li>
          <li>
            For weight-to-height screening without calories, the{" "}
            <Link href="/tools/health/bmi-calculator" className="text-slate-200 underline">
              BMI calculator
            </Link>{" "}
            stays the lighter-weight option.
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Quick guide</h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. What do I fill in first?</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {BMR_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. What math runs here?</h3>
            <div className="space-y-2">
              {BMR_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. Why might my wearable disagree?</h3>
            <div className="space-y-2">
              {BMR_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Why use an in-browser calculator?</h3>
            <ul className="list-disc space-y-2 pl-5">
              {BMR_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Typical uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {BMR_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
