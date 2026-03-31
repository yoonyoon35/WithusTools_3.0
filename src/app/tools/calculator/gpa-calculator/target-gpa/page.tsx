import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import TargetGPACalculator from "./TargetGPACalculator";

export const metadata: Metadata = createMetadata({
  title: "Target GPA Calculator — What GPA Do I Need?",
  description:
    "Plan toward a cumulative GPA goal: enter your current credits, GPA, target GPA, and this term’s credit load to see the required term GPA. Optional credits-needed estimate at an expected term GPA.",
  path: "/tools/calculator/gpa-calculator/target-gpa",
  keywords: [
    "target gpa",
    "gpa needed",
    "3.5 gpa",
    "cumulative gpa goal",
    "required semester gpa",
    "gpa planner",
    "withustools",
  ],
});

function CalculatorFallback() {
  return (
    <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
      Loading calculator…
    </div>
  );
}

export default function TargetGPAPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Target GPA Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">calculator</p>
          </div>
        </div>
      </div>

      <Suspense fallback={<CalculatorFallback />}>
        <TargetGPACalculator />
      </Suspense>

      <section
        id="target-gpa-guide"
        className="mt-10 space-y-8 rounded-xl border border-border bg-surface p-6 sm:p-8 text-sm leading-relaxed text-slate-400"
        aria-labelledby="target-gpa-guide-heading"
      >
        <h2 id="target-gpa-guide-heading" className="text-lg font-semibold text-slate-200">
          Guide: inputs, formulas, and “Credits at expected GPA”
        </h2>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-200">1. What each field means</h3>
          <p>
            The calculator uses the usual <strong className="font-medium text-slate-300">credit-weighted</strong>{" "}
            cumulative GPA: each course contributes (grade points × credit hours), and the cumulative GPA is
            total grade points divided by total credits.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-slate-300">Current cumulative credits (C)</span> — credits already on your
              transcript toward this GPA (before this term).
            </li>
            <li>
              <span className="text-slate-300">Current cumulative GPA (G)</span> — your GPA for those C credits.
            </li>
            <li>
              <span className="text-slate-300">Target cumulative GPA (T)</span> — the GPA you want your record to
              show <em>after</em> this term’s grades are included (same scale as G).
            </li>
            <li>
              <span className="text-slate-300">Planned credits (this term) (N)</span> — how many credits you will
              take <em>this term</em>. This is only used to compute{" "}
              <span className="text-slate-300">Required term GPA</span>: “What term average do I need on{' '}
              <em>these N credits</em> to land on T?”
            </li>
            <li>
              <span className="text-slate-300">Expected term GPA (optional) (S)</span> — a GPA you assume you can
              hold for <em>future</em> work (e.g. “I can average about 3.8 this term”). This drives the third
              result, <span className="text-slate-300">Credits at expected GPA</span>, explained in section 4.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-200">2. Core idea: GPA after this term</h3>
          <p>
            Your <span className="text-slate-300">quality points</span> so far are{" "}
            <span className="font-mono text-slate-300">C × G</span>. If this term you take{" "}
            <span className="font-mono text-slate-300">N</span> credits at a{" "}
            <span className="text-slate-300">term GPA</span> we call <span className="font-mono text-slate-300">R</span>
            , you add <span className="font-mono text-slate-300">N × R</span> quality points and{" "}
            <span className="font-mono text-slate-300">N</span> credits. The new cumulative GPA is:
          </p>
          <div className="rounded-lg border border-slate-600/80 bg-slate-800/40 px-4 py-3 font-mono text-slate-200">
            New cumulative GPA = (C×G + N×R) / (C + N)
          </div>
          <p>
            We set that equal to your goal <span className="font-mono text-slate-300">T</span> and solve for{" "}
            <span className="font-mono text-slate-300">R</span> (required term GPA).
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-200">3. Required term GPA (step by step)</h3>
          <p>Start from:</p>
          <div className="rounded-lg border border-slate-600/80 bg-slate-800/40 px-4 py-3 font-mono text-slate-200">
            (C×G + N×R) / (C + N) = T
          </div>
          <p>Multiply both sides by (C + N):</p>
          <div className="rounded-lg border border-slate-600/80 bg-slate-800/40 px-4 py-3 font-mono text-slate-200">
            C×G + N×R = T×(C + N)
          </div>
          <p>Subtract C×G, then divide by N (with N &gt; 0):</p>
          <div className="rounded-lg border border-slate-600/80 bg-slate-800/40 px-4 py-3 font-mono text-slate-200">
            R = ( T×(C + N) − C×G ) / N
          </div>
          <p>
            <span className="text-slate-300">Special case:</span> if <span className="font-mono text-slate-300">C = 0</span>{" "}
            (first term), then <span className="font-mono text-slate-300">R = T</span>: your term GPA must equal
            the cumulative you want.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-200">
            4. “Credits at expected GPA” — what it means
          </h3>
          <p>
            This number is <strong className="font-medium text-slate-300">not</strong> the same as “Planned credits
            (this term).” It answers a <em>different</em> question:
          </p>
          <blockquote className="border-l-2 border-slate-500 pl-4 text-slate-300">
            If I add some amount of credits where the average grade equals my{" "}
            <strong>expected term GPA (S)</strong>, how many of those credits do I need so my{" "}
            <strong>new cumulative GPA becomes exactly T</strong>?
          </blockquote>
          <p>
            Call that unknown number <span className="font-mono text-slate-300">N′</span> (the tool shows it as
            “Credits at expected GPA”). We assume one lump of <span className="font-mono text-slate-300">N′</span>{" "}
            credits at GPA <span className="font-mono text-slate-300">S</span> is merged into your record:
          </p>
          <div className="rounded-lg border border-slate-600/80 bg-slate-800/40 px-4 py-3 font-mono text-slate-200">
            (C×G + N′×S) / (C + N′) = T
          </div>
          <p>Expand and collect terms with N′ on one side:</p>
          <div className="space-y-2 font-mono text-slate-200">
            <div className="rounded-lg border border-slate-600/80 bg-slate-800/40 px-4 py-2">
              C×G + N′×S = T×(C + N′)
            </div>
            <div className="rounded-lg border border-slate-600/80 bg-slate-800/40 px-4 py-2">
              N′×S − N′×T = T×C − C×G = C×(T − G)
            </div>
            <div className="rounded-lg border border-slate-600/80 bg-slate-800/40 px-4 py-2">
              N′×(S − T) = C×(T − G)
            </div>
            <div className="rounded-lg border border-slate-600/80 bg-slate-800/40 px-4 py-3">
              N′ = C×(T − G) / (S − T) &nbsp;&nbsp;(when S ≠ T)
            </div>
          </div>
          <p>
            <span className="text-slate-300">Raising cumulative GPA (T &gt; G):</span> you need{" "}
            <span className="font-mono text-slate-300">S &gt; T</span>. If your expected term GPA is not above the
            target cumulative, you cannot pull the average up with that assumption — the tool shows N/A and a short
            hint.
          </p>
          <p>
            <span className="text-slate-300">Numeric example:</span>{" "}
            <span className="font-mono text-slate-300">C = 60</span>,{" "}
            <span className="font-mono text-slate-300">G = 3.4</span>,{" "}
            <span className="font-mono text-slate-300">T = 3.5</span>,{" "}
            <span className="font-mono text-slate-300">S = 4.0</span>. Then{" "}
            <span className="font-mono text-slate-300">N′ = 60×(0.1) / (0.5) = 12</span> credits at a 4.0 average
            bring you to a 3.5 cumulative. (Check: (60×3.4 + 12×4) / 72 = 3.5.)
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-200">5. Limits of this model</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              It does not know your school’s rules (grade replacement, pass/fail, withdrawal, repeated courses,
              rounding).
            </li>
            <li>
              “Required term GPA” above your scale maximum (e.g. above 4.0 on a 4.0 scale) means the goal is not
              reachable in one term with the N credits you entered — try more credits or a lower target.
            </li>
            <li>
              <span className="text-slate-300">Credits at expected GPA</span> is a planning estimate: it treats all
              those credits as one block at GPA S; real semesters split across time may round differently.
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/tools/calculator/gpa-calculator"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← GPA Calculator
        </Link>
        <Link href="/tools/calculator" className="text-slate-400 underline transition-colors hover:text-slate-200">
          ← Calculators
        </Link>
        <Link href="/" className="text-slate-400 underline transition-colors hover:text-slate-200">
          ← Home
        </Link>
      </div>
    </div>
  );
}
