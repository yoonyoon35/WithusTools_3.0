import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import WaistHipRatioCalculator from "./WaistHipRatioCalculator";

export const metadata: Metadata = createMetadata({
  title: "Waist-to-Hip Ratio Calculator",
  description:
    "Measure waist and hip, get waist-to-hip ratio (WHR) in your browser. Optional WHO-style WHR lines plus Europid waist bands for men and women.",
  path: "/tools/health/waist-hip-ratio-calculator",
  keywords: [
    "waist to hip ratio",
    "WHR calculator",
    "waist hip ratio",
    "waist circumference",
    "hip circumference",
    "central obesity",
    "body shape calculator",
    "WHO waist hip",
    "withustools",
  ],
});

const WHR_GUIDE = {
  usage: [
    "Stand relaxed, feet together, clothing light. Run the tape horizontally around the waist at the narrowest point and around the hips at the widest point.",
    "Type both numbers in centimetres or both in inches—mixing units on purpose is not supported, but the ratio would be the same if you did the conversion yourself.",
    "Pick male or female if you want the WHR colour band and the extra waist-only sentence that lines up with common chart values.",
  ],
  howItWorks: [
    "WHR is simply waist circumference divided by hip circumference. The value has no units because inches cancel inches (or cm cancel cm).",
    "Waist-only sentences on this page use the 94 / 102 cm (men) and 80 / 88 cm (women) bands that show up a lot in Europid-oriented metabolic risk summaries—not the tighter Asian thresholds some countries publish separately.",
  ],
  about: [
    "WHR tells you something about fat pattern—more around the trunk versus more around the hips. It does not read liver fat, blood sugar, or fitness.",
    "A single home measurement can be off by a centimetre or two depending on posture; trend your own numbers the same way each week if you are tracking.",
  ],
  advantages: [
    "No upload, no account: the arithmetic stays in your browser.",
    "You get WHR plus a plain-language waist note when sex is set, so you are not flipping between two different tabs.",
    "Copy button pastes waist, hip, ratio, and the headline label in one block of text.",
  ],
  useCases: [
    "Nurses, trainers, or students checking homework against textbook examples.",
    "Anyone comparing their tape numbers with what a GP or dietitian already wrote down.",
    "Quick what-if when clothing size changed but weight on the scale barely moved.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Why does WHO talk about 0.90 for men and 0.85 for women?",
    answer:
      "Those are widely repeated WHR values where central fat distribution tends to correlate more often with cardiometabolic risk in large population studies. They are screening hints, not personal diagnoses.",
  },
  {
    question: "What is the difference between WHR and waist circumference alone?",
    answer:
      "WHR adjusts for bone structure and hip width. Waist alone ignores hip size, which is why charts often list both. This calculator shows WHR first and then adds a waist sentence when sex is selected.",
  },
  {
    question: "Can I use a cloth tape from a sewing kit?",
    answer:
      "Yes, if it is non-stretchy and you keep it level all the way around. Metal tapes from the hardware store are awkward on curves.",
  },
  {
    question: "My ratio is high but I lift weights—should I worry?",
    answer:
      "Dense muscle around the midsection can nudge waist up without much visceral fat. That is why context from sport, diet, sleep, and labs still matters more than one ratio.",
  },
  {
    question: "Is this page medical advice?",
    answer:
      "No. It only performs division and maps numbers to commonly quoted reference bands. A clinician who knows you beats any online form.",
  },
];

export default function WaistHipRatioCalculatorPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Waist-to-hip ratio</h1>
            <p className="mt-1 text-sm text-slate-500">
              Waist and hip circumferences, ratio, and optional chart-style notes
            </p>
          </div>
        </div>
      </div>

      <WaistHipRatioCalculator />

      <section
        className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8"
        aria-labelledby="whr-reference-heading"
      >
        <h2
          id="whr-reference-heading"
          className="text-lg font-semibold text-slate-200 sm:text-xl"
        >
          Definitions used here
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
          <p>
            Waist-to-hip ratio compares two tape measurements. Researchers like it because it tracks
            upper-body fat pattern a little better than BMI alone, though it still misses muscle vs
            fat inside the abdomen.
          </p>
          <p className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 font-mono text-slate-300">
            WHR = waist ÷ hip &nbsp;&nbsp;(same unit top and bottom)
          </p>
          <p>
            Example: 80 cm waist and 100 cm hip → WHR = 0.800. The same ratio appears if you type
            31.5 in and 39.37 in, because both numbers scale by the same inch-to-cm factor.
          </p>
        </div>

        <h3 className="mt-8 text-base font-semibold text-slate-200">WHR lines in the calculator</h3>
        <p className="mt-2 text-sm text-slate-400">
          The colour chip compares your ratio to{" "}
          <span className="font-medium text-slate-300">above 0.90</span> for men and{" "}
          <span className="font-medium text-slate-300">above 0.85</span> for women—the pair most often
          named alongside WHO waist-circumference guidance. At or on the line counts as the lower-risk
          side of that split in this tool.
        </p>

        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm text-slate-300">
            <caption className="sr-only">WHR reference values by sex</caption>
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/80">
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  Sex
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  WHR threshold (this page)
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  How we phrase it
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 text-slate-400">
              <tr className="bg-slate-900/20">
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-200">Male</td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">&gt; 0.90</td>
                <td className="px-3 py-3">
                  Above counts as the higher-pattern side; equal or below is the other chip colour.
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-200">Female</td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">&gt; 0.85</td>
                <td className="px-3 py-3">
                  Same logic: on the number or lower is treated as the lower side of that WHO-style split.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-base font-semibold text-slate-200">Waist-only bands (extra text)</h3>
        <p className="mt-2 text-sm text-slate-400">
          When sex is set, the calculator converts your waist to centimetres (if needed) and compares
          it to 94 / 102 cm for men and 80 / 88 cm for women—again the Europid-oriented pair that shows
          up beside WHO metabolic risk material. South Asian and Japanese guidelines sometimes start
          at lower centimetre cut-offs; follow your local sheet if it disagrees.
        </p>

        <h3 className="mt-8 text-base font-semibold text-slate-200">Worth keeping in mind</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-400">
          <li>
            Pregnancy, bloating, or fluid retention can widen the waist tape without changing long-term
            fat stores much.
          </li>
          <li>
            Very wide hips mechanically lower WHR even when waist fat is not low—another reason the
            ratio is only one window.
          </li>
          <li>
            For height-and-weight screening, the{" "}
            <Link href="/tools/health/bmi-calculator" className="text-slate-200 underline">
              BMI calculator
            </Link>{" "}
            and the{" "}
            <Link href="/tools/health/skeletal-muscle-index-calculator" className="text-slate-200 underline">
              skeletal muscle index tool
            </Link>{" "}
            answer different questions; none of them replace labs or a physical exam.
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Quick guide</h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How do I measure and type the numbers?</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {WHR_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. What is being calculated?</h3>
            <div className="space-y-2">
              {WHR_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. How far can I trust a single reading?</h3>
            <div className="space-y-2">
              {WHR_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Why run it in the browser?</h3>
            <ul className="list-disc space-y-2 pl-5">
              {WHR_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Who tends to open a page like this?</h3>
            <ul className="list-disc space-y-2 pl-5">
              {WHR_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
