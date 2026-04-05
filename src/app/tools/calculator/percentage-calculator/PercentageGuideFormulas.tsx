import Link from "next/link";
import LatexDisplay from "./LatexDisplay";

const tryBase = "/tools/calculator/percentage-calculator";
const anchor = "#percentage-calculator-tool";

const btnCls =
  "inline-flex min-h-[2.5rem] items-center justify-center rounded-lg border border-blue-500/60 bg-blue-600/25 px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-blue-400 hover:bg-blue-600/40 touch-manipulation";

type StepRow = { step: string; expression: string };

const MODE_BLOCKS: {
  key: string;
  title: string;
  latex: string;
  variableNote: string;
  exampleLabel: string;
  steps: StepRow[];
  tab: string;
}[] = [
  {
    key: "basic",
    title: "Basic Percentage",
    latex: String.raw`P = \frac{r}{100} \cdot N`,
    variableNote: "P = result amount, r = percentage (%), N = base number.",
    exampleLabel: "Example: What is 20% of 100?",
    steps: [
      { step: "Substitute", expression: "r = 20, N = 100" },
      { step: "Apply formula", expression: "P = (20 ÷ 100) × 100 = 0.2 × 100" },
      { step: "Result", expression: "P = 20" },
    ],
    tab: "basic",
  },
  {
    key: "change",
    title: "Percentage Change",
    latex: String.raw`C = \frac{N_{\text{new}} - N_{\text{old}}}{N_{\text{old}}} \times 100`,
    variableNote: "C = percent change (%), Nold = original value, Nnew = new value (C > 0 increase, C < 0 decrease).",
    exampleLabel: "Example: Value rises from 80 to 100.",
    steps: [
      { step: "Substitute", expression: "N_old = 80, N_new = 100" },
      { step: "Numerator", expression: "100 − 80 = 20" },
      { step: "Divide & × 100", expression: "C = (20 ÷ 80) × 100 = 0.25 × 100" },
      { step: "Result", expression: "C = 25%" },
    ],
    tab: "change",
  },
  {
    key: "of",
    title: "Percentage Of (part vs whole)",
    latex: String.raw`Q = \frac{B}{A} \times 100`,
    variableNote: "Q = what percent B is of A, A = total (whole), B = part (A ≠ 0).",
    exampleLabel: "Example: What percent of 200 is 40?",
    steps: [
      { step: "Substitute", expression: "A = 200, B = 40" },
      { step: "Ratio", expression: "B ÷ A = 40 ÷ 200 = 0.2" },
      { step: "Result", expression: "Q = 0.2 × 100 = 20%" },
    ],
    tab: "of",
  },
  {
    key: "after",
    title: "Value After Change",
    latex: String.raw`V = V_0 \cdot \left(1 + \frac{p}{100}\right)`,
    variableNote: "V = final value, V0 = starting value, p = change in % (negative for decrease).",
    exampleLabel: "Example: 2,000 after a 15% decrease (discount).",
    steps: [
      { step: "Substitute", expression: "V₀ = 2,000, p = −15" },
      { step: "Factor", expression: "1 + (−15 ÷ 100) = 1 − 0.15 = 0.85" },
      { step: "Multiply", expression: "V = 2,000 × 0.85" },
      { step: "Result", expression: "V = 1,700" },
    ],
    tab: "after",
  },
];

export default function PercentageGuideFormulas() {
  return (
    <div className="mb-10 space-y-8 border-b border-slate-700 pb-10">
      <div>
        <h3 className="text-lg font-semibold text-slate-100">Formulas</h3>
        <p className="mt-2 text-sm text-slate-500">
          Each mode uses a standard definition below. Symbols match the fields in the calculator tabs.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {MODE_BLOCKS.map((mode) => (
          <article
            key={mode.key}
            className="flex flex-col rounded-xl border-2 border-blue-500/25 bg-slate-900/40 p-5 shadow-lg shadow-blue-900/10"
          >
            <h4 className="mb-3 text-base font-semibold text-blue-200">{mode.title}</h4>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">Formula</p>
            <LatexDisplay latex={mode.latex} />
            <p className="mt-3 text-xs leading-relaxed text-slate-500">{mode.variableNote}</p>

            <p className="mt-5 text-xs font-medium uppercase tracking-wide text-slate-500">Step-by-step</p>
            <p className="mb-2 text-sm text-slate-400">{mode.exampleLabel}</p>
            <div className="scrollbar-thin overflow-x-auto rounded-lg border border-slate-600/80 bg-slate-950/50">
              <table className="w-full min-w-[260px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="px-3 py-2 font-medium text-slate-300">Step</th>
                    <th className="px-3 py-2 font-medium text-slate-300">Calculation</th>
                  </tr>
                </thead>
                <tbody>
                  {mode.steps.map((row, i) => (
                    <tr key={i} className="border-b border-slate-700/60 last:border-0">
                      <td className="whitespace-nowrap px-3 py-2 align-top text-slate-400">{row.step}</td>
                      <td className="px-3 py-2 font-mono text-xs text-slate-200 sm:text-sm">{row.expression}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5">
              <Link href={`${tryBase}?tab=${mode.tab}${anchor}`} className={btnCls}>
                Try it now
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
