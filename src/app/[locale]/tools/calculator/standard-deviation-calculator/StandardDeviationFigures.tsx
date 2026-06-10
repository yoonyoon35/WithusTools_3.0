"use client";

/**
 * Reference visuals: sample SD formula, Gaussian bell curve, empirical rule (68–95–99.7).
 * Pure SVG — no chart/math libraries.
 */

import { useToolPageContent } from "@/hooks/useToolPageContent";

const META_PATH = "/tools/calculator/standard-deviation-calculator";

type FiguresUi = {
  sampleSdTitle: string;
  legendN: string;
  legendXi: string;
  legendXbar: string;
  populationNote: string;
  normalCurveTitle: string;
  normalCurveCaption: string;
  normalCurveAria: string;
  empiricalTitle: string;
  empiricalIntro: string;
  empiricalAria: string;
  axisCaption: string;
};

const W = 440;
const H = 170;
const PAD_X = 28;
const PAD_Y = 18;

function stdNormalPdf(x: number): number {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

function mapX(x: number, xMin: number, xMax: number): number {
  return PAD_X + ((x - xMin) / (xMax - xMin)) * (W - 2 * PAD_X);
}

function mapY(pdf: number, maxPdf: number): number {
  return H - PAD_Y - (pdf / maxPdf) * (H - 2 * PAD_Y);
}

function filledBellPath(xMin: number, xMax: number, xDomainMin: number, xDomainMax: number): string {
  const maxPdf = stdNormalPdf(0);
  const steps = 100;
  let top = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = xMin + t * (xMax - xMin);
    const pdf = stdNormalPdf(x);
    const sx = mapX(x, xDomainMin, xDomainMax);
    const sy = mapY(pdf, maxPdf);
    top += i === 0 ? `M ${sx} ${sy}` : ` L ${sx} ${sy}`;
  }
  const x0 = mapX(xMin, xDomainMin, xDomainMax);
  const x1 = mapX(xMax, xDomainMin, xDomainMax);
  const baseY = H - PAD_Y;
  return `${top} L ${x1} ${baseY} L ${x0} ${baseY} Z`;
}

function outlineBellPath(xDomainMin: number, xDomainMax: number): string {
  const maxPdf = stdNormalPdf(0);
  const steps = 140;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = xDomainMin + t * (xDomainMax - xDomainMin);
    const pdf = stdNormalPdf(x);
    const sx = mapX(x, xDomainMin, xDomainMax);
    const sy = mapY(pdf, maxPdf);
    d += i === 0 ? `M ${sx} ${sy}` : ` L ${sx} ${sy}`;
  }
  return d;
}

export default function StandardDeviationFigures() {
  const page = useToolPageContent(META_PATH);
  const figures = (page?.ui as { figures?: FiguresUi } | undefined)?.figures;

  if (!figures) return null;

  const domainMin = -3.6;
  const domainMax = 3.6;
  const outline = outlineBellPath(domainMin, domainMax);
  const baseY = H - PAD_Y;
  const x0 = mapX(0, domainMin, domainMax);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
          <h3 className="mb-4 text-center text-base font-semibold text-slate-200">
            {figures.sampleSdTitle}
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 text-slate-200">
            <div
              className="flex items-center justify-center gap-1 font-mono text-sm sm:text-base"
              aria-label="Sample standard deviation formula"
            >
              <span className="text-slate-400">s</span>
              <span>=</span>
              <span className="text-2xl leading-none text-blue-400 sm:text-3xl">√</span>
              <div className="flex flex-col items-center">
                <span className="border-b border-slate-500 px-2 pb-0.5 text-center text-xs sm:text-sm">
                  <span className="whitespace-nowrap">
                    Σ<sub className="text-slate-400">i=1</sub>
                    <sup className="text-slate-400">n</sup> (x<sub>i</sub> − x̄)²
                  </span>
                </span>
                <span className="pt-0.5 text-xs sm:text-sm">n − 1</span>
              </div>
            </div>
            <ul className="w-full space-y-1.5 border-t border-slate-700 pt-4 text-left text-xs text-slate-400 sm:text-sm">
              <li>
                <span className="font-mono text-slate-300">n</span> — {figures.legendN}
              </li>
              <li>
                <span className="font-mono text-slate-300">xᵢ</span> — {figures.legendXi}
              </li>
              <li>
                <span className="font-mono text-slate-300">x̄</span> — {figures.legendXbar}
              </li>
            </ul>
            <p className="text-xs text-slate-500">{figures.populationNote}</p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
          <h3 className="mb-3 text-center text-base font-semibold text-slate-200">
            {figures.normalCurveTitle}
          </h3>
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full max-h-48 text-blue-400"
            role="img"
            aria-label={figures.normalCurveAria}
          >
            <title>{figures.normalCurveTitle}</title>
            <path
              d={filledBellPath(domainMin, domainMax, domainMin, domainMax)}
              className="fill-blue-500/25 stroke-none"
            />
            <path d={outline} fill="none" stroke="currentColor" strokeWidth={2} className="text-blue-400" />
            <line
              x1={PAD_X}
              y1={baseY}
              x2={W - PAD_X}
              y2={baseY}
              className="stroke-slate-600"
              strokeWidth={1}
            />
            <line x1={x0} y1={baseY - 4} x2={x0} y2={baseY + 4} className="stroke-slate-500" strokeWidth={1.5} />
            <text x={x0} y={H - 2} textAnchor="middle" className="fill-slate-400 text-[11px]">
              0
            </text>
            <text x={mapX(-1, domainMin, domainMax)} y={H - 2} textAnchor="middle" className="fill-slate-500 text-[10px]">
              −1σ
            </text>
            <text x={mapX(1, domainMin, domainMax)} y={H - 2} textAnchor="middle" className="fill-slate-500 text-[10px]">
              +1σ
            </text>
          </svg>
          <p className="mt-2 text-center text-xs text-slate-500">{figures.normalCurveCaption}</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
        <h3 className="mb-3 text-center text-base font-semibold text-slate-200">
          {figures.empiricalTitle}
        </h3>
        <p className="mb-4 text-center text-xs text-slate-500 sm:text-sm">{figures.empiricalIntro}</p>
        <svg
          viewBox={`0 0 ${W} ${H + 36}`}
          className="h-auto w-full max-h-56"
          role="img"
          aria-label={figures.empiricalAria}
        >
          <title>{figures.empiricalTitle}</title>
          <path d={filledBellPath(-3, 3, domainMin, domainMax)} className="fill-emerald-600/15" />
          <path d={filledBellPath(-2, 2, domainMin, domainMax)} className="fill-emerald-500/25" />
          <path d={filledBellPath(-1, 1, domainMin, domainMax)} className="fill-emerald-400/35" />
          <path d={outline} fill="none" stroke="#34d399" strokeWidth={2} />
          <line
            x1={PAD_X}
            y1={baseY}
            x2={W - PAD_X}
            y2={baseY}
            className="stroke-slate-600"
            strokeWidth={1}
          />
          {[-3, -2, -1, 0, 1, 2, 3].map((k) => {
            const px = mapX(k, domainMin, domainMax);
            return (
              <g key={k}>
                <line x1={px} y1={baseY - 3} x2={px} y2={baseY + 3} className="stroke-slate-500" strokeWidth={1} />
                <text x={px} y={H + 10} textAnchor="middle" className="fill-slate-400 text-[10px]">
                  {k === 0 ? "μ" : k > 0 ? `μ+${k}σ` : `μ${k}σ`}
                </text>
              </g>
            );
          })}
          <text x={mapX(0, domainMin, domainMax)} y={H + 26} textAnchor="middle" className="fill-slate-500 text-[9px]">
            {figures.axisCaption}
          </text>
        </svg>
        <ul className="mx-auto mt-4 grid max-w-lg gap-2 text-xs text-slate-400 sm:grid-cols-3 sm:text-sm">
          <li className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-center">
            <span className="block font-semibold text-emerald-300">68%</span>
            <span>μ ± 1σ</span>
          </li>
          <li className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-center">
            <span className="block font-semibold text-emerald-300">95%</span>
            <span>μ ± 2σ</span>
          </li>
          <li className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-center">
            <span className="block font-semibold text-emerald-300">99.7%</span>
            <span>μ ± 3σ</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
