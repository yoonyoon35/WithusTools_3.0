"use client";

import { Link } from "@/components/I18nLink";
import { useToolPageContent } from "@/hooks/useToolPageContent";
import LatexDisplay from "./LatexDisplay";

const META_PATH = "/tools/calculator/percentage-calculator";
const tryBase = "/tools/calculator/percentage-calculator";
const anchor = "#percentage-calculator-tool";

const btnCls =
  "inline-flex min-h-[2.5rem] items-center justify-center rounded-lg border border-blue-500/60 bg-blue-600/25 px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-blue-400 hover:bg-blue-600/40 touch-manipulation";

const LATEX_BY_TAB: Record<string, string> = {
  basic: String.raw`P = \frac{r}{100} \cdot N`,
  change: String.raw`C = \frac{N_{\text{new}} - N_{\text{old}}}{N_{\text{old}}} \times 100`,
  of: String.raw`Q = \frac{B}{A} \times 100`,
  after: String.raw`V = V_0 \cdot \left(1 + \frac{p}{100}\right)`,
};

const MODE_ORDER = ["basic", "change", "of", "after"] as const;

type FormulaMode = {
  title: string;
  variableNote: string;
  exampleLabel: string;
  steps: { step: string; expression: string }[];
};

type FormulasUi = {
  sectionTitle: string;
  sectionIntro: string;
  formulaLabel: string;
  stepByStepLabel: string;
  stepCol: string;
  calcCol: string;
  tryItNow: string;
  modes: Record<string, FormulaMode>;
};

export default function PercentageGuideFormulas() {
  const page = useToolPageContent(META_PATH);
  const formulas = (page?.ui as { formulas?: FormulasUi } | undefined)?.formulas;

  if (!formulas) return null;

  return (
    <div className="mb-10 space-y-8 border-b border-slate-700 pb-10">
      <div>
        <h3 className="text-lg font-semibold text-slate-100">{formulas.sectionTitle}</h3>
        <p className="mt-2 text-sm text-slate-500">{formulas.sectionIntro}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {MODE_ORDER.map((tab) => {
          const mode = formulas.modes[tab];
          if (!mode) return null;
          return (
            <article
              key={tab}
              className="flex flex-col rounded-xl border-2 border-blue-500/25 bg-slate-900/40 p-5 shadow-lg shadow-blue-900/10"
            >
              <h4 className="mb-3 text-base font-semibold text-blue-200">{mode.title}</h4>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                {formulas.formulaLabel}
              </p>
              <LatexDisplay latex={LATEX_BY_TAB[tab] ?? ""} />
              <p className="mt-3 text-xs leading-relaxed text-slate-500">{mode.variableNote}</p>

              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-slate-500">
                {formulas.stepByStepLabel}
              </p>
              <p className="mb-2 text-sm text-slate-400">{mode.exampleLabel}</p>
              <div className="scrollbar-thin overflow-x-auto rounded-lg border border-slate-600/80 bg-slate-950/50">
                <table className="w-full min-w-[260px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="px-3 py-2 font-medium text-slate-300">{formulas.stepCol}</th>
                      <th className="px-3 py-2 font-medium text-slate-300">{formulas.calcCol}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mode.steps.map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/60 last:border-0">
                        <td className="whitespace-nowrap px-3 py-2 align-top text-slate-400">
                          {row.step}
                        </td>
                        <td className="px-3 py-2 font-mono text-xs text-slate-200 sm:text-sm">
                          {row.expression}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5">
                <Link href={`${tryBase}?tab=${tab}${anchor}`} className={btnCls}>
                  {formulas.tryItNow}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
