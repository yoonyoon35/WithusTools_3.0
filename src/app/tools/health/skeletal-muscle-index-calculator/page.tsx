import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import SkeletalMuscleIndexCalculator from "./SkeletalMuscleIndexCalculator";

export const metadata: Metadata = createMetadata({
  title: "Skeletal Muscle Index Calculator",
  description:
    "Work out appendicular skeletal muscle mass divided by height squared (kg/m²). Metric or US height, optional EWGSOP2-style cut-offs for men and women—all in the browser.",
  path: "/tools/health/skeletal-muscle-index-calculator",
  keywords: [
    "skeletal muscle index",
    "appendicular muscle mass",
    "SMI calculator",
    "muscle mass index",
    "kg per m2 muscle",
    "BIA muscle index",
    "sarcopenia screening",
    "EWGSOP2",
    "ASM height squared",
    "withustools",
  ],
});

const SMI_GUIDE = {
  usage: [
    "Grab appendicular skeletal muscle mass (ASM) from a BIA or DXA print-out—arms and legs combined, not whole-body lean mass.",
    "Enter height and ASM in either metric or US units, then hit Calculate (or wait a beat; it updates after you stop typing).",
    "Choose male or female if you want the usual 7.0 / 5.5 kg/m² comparison lines; leave sex on Skip if you only need the raw index.",
  ],
  howItWorks: [
    "SMI = ASM ÷ height², with height in metres and ASM in kilograms. The result is always expressed as kg/m².",
    "US mode converts feet and inches to metres and pounds to kilograms before the same division runs.",
  ],
  about: [
    "Clinicians rarely diagnose sarcopenia from a single index. EWGSOP2, for example, pairs low muscle quantity with strength or performance tests.",
    "Different machines and software builds do not always agree to the last decimal. Treat this page as a double-check, not a replacement for the lab or physician who ordered the test.",
  ],
  advantages: [
    "No account, no server round-trip: numbers stay in your tab.",
    "Handles mixed US height with metric muscle mass if you flip modes instead of juggling converters elsewhere.",
    "Copy button hands you a plain-text line you can paste into notes or email.",
  ],
  useCases: [
    "Comparing your printed SMI to what you get when you recompute from ASM and height.",
    "Students or staff learning how body-composition indices are normalised to height.",
    "Rough tracking after resistance training when repeat scans exist—always same device vendor when possible.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "What exactly is appendicular skeletal muscle mass?",
    answer:
      "It is the estimated skeletal muscle in both arms and both legs. Whole-body lean mass also counts trunk fluid and other lean tissue, so do not substitute that larger figure here.",
  },
  {
    question: "Where do the 7.0 and 5.5 kg/m² numbers come from?",
    answer:
      "They follow the appendicular muscle mass index thresholds widely quoted from the EWGSOP2 sarcopenia update for men and women. Local guidelines or Asian consensus statements sometimes tweak numbers or add strength criteria.",
  },
  {
    question: "My InBody sheet already lists SMI. Why bother recalculating?",
    answer:
      "Handy when you distrust a typo, switch units mentally, or want the same formula spelled out on screen before you discuss the print-out with someone else.",
  },
  {
    question: "Does a high SMI mean I am in perfect shape?",
    answer:
      "Not necessarily. It is a mass-for-height ratio. Hydration shifts BIA readings; DXA has its own assumptions. Athletic people can look different on paper than sedentary people with the same index.",
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. It is a calculator. Use it for education or quick checks, and lean on qualified professionals for interpretation and treatment decisions.",
  },
];

export default function SkeletalMuscleIndexCalculatorPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Skeletal muscle index</h1>
            <p className="mt-1 text-sm text-slate-500">
              ASM ÷ height² (kg/m²), with optional sex-specific cut-offs
            </p>
          </div>
        </div>
      </div>

      <SkeletalMuscleIndexCalculator />

      <section
        className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8"
        aria-labelledby="smi-reference-heading"
      >
        <h2
          id="smi-reference-heading"
          className="text-lg font-semibold text-slate-200 sm:text-xl"
        >
          How the index is defined
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
          <p>
            Researchers and device manuals usually define skeletal muscle index (in this appendicular
            sense) as appendicular skeletal muscle mass in kilograms divided by standing height in
            metres, squared. Units end up as kg/m²—superficially like BMI, but the numerator is
            limb muscle, not total body weight.
          </p>
          <p className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 font-mono text-slate-300">
            SMI = ASM<sub className="text-xs">kg</sub> ÷ h²&nbsp;&nbsp;(h in metres)
          </p>
          <p>
            Example: ASM 30.0 kg at 1.75 m tall → 30 ÷ (1.75 × 1.75) ≈ 9.8 kg/m². If you only know
            height in centimetres, divide by 100 first.
          </p>
          <p>
            US height input on this page is converted to metres for you (total inches × 0.0254).
            Muscle mass entered in pounds is converted to kilograms before the division.
          </p>
        </div>

        <h3 className="mt-8 text-base font-semibold text-slate-200">
          EWGSOP2-style cut-offs used in the calculator
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          The 2019 European Working Group on Sarcopenia in Older People (EWGSOP2) paper gives{" "}
          <span className="font-medium text-slate-300">&lt; 7.0 kg/m²</span> for men and{" "}
          <span className="font-medium text-slate-300">&lt; 5.5 kg/m²</span> for women as indicative
          low appendicular muscle mass when paired with other clinical findings. Those thresholds
          assume ASM from standardised BIA or DXA pipelines—not a bathroom scale body-fat guess.
        </p>

        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm text-slate-300">
            <caption className="sr-only">
              Sex-specific appendicular muscle index thresholds
            </caption>
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/80">
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  Sex (comparison mode)
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  Cut-off on this page
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-200">
                  Plain-language note
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 text-slate-400">
              <tr className="bg-slate-900/20">
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-200">Male</td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">&lt; 7.0 kg/m²</td>
                <td className="px-3 py-3">
                  Flagged as below the published male threshold; not an automatic sarcopenia label.
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-200">Female</td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-slate-300">&lt; 5.5 kg/m²</td>
                <td className="px-3 py-3">
                  Same idea for the female threshold—context from gait, grip, and history still matters.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-base font-semibold text-slate-200">Worth keeping in mind</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-400">
          <li>
            Some Asian consensus documents adjust cut-offs or add calf circumference and chair-stand
            tests. If your clinic follows one of those systems, defer to their handout.
          </li>
          <li>
            Oedema, metal implants, and very different hydration states can shift BIA-derived ASM more
            than people expect.
          </li>
          <li>
            Athletes with large arms and legs can sit above the cut-offs yet still be injured;
            frail individuals sometimes sit near the line while feeling weak for other reasons.
          </li>
          <li>
            For a complementary height-and-weight screen, try the{" "}
            <Link href="/tools/health/bmi-calculator" className="text-slate-200 underline">
              BMI calculator
            </Link>
            —it answers a different question entirely.
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Quick guide</h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. What do I type in?</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {SMI_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. What formula runs under the hood?</h3>
            <div className="space-y-2">
              {SMI_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. How seriously should I take the colour band?</h3>
            <div className="space-y-2">
              {SMI_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Why use a browser-only tool?</h3>
            <ul className="list-disc space-y-2 pl-5">
              {SMI_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Typical situations</h3>
            <ul className="list-disc space-y-2 pl-5">
              {SMI_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
