import {
  ENERGY_UNITS,
  convertEnergy,
  formatEnergyResult,
  formatWithThousands,
} from "@/utils/conversions";
import { formatRatioDisplay, getExtraDerivation } from "./energyPairContent";

const HOW_TO_EXAMPLES = [1, 10] as const;

function SubD({ unit }: { unit: string }) {
  return (
    <span className="inline">
      <em>d</em>
      <sub className="text-[0.75em] text-slate-400">({unit})</sub>
    </span>
  );
}

export default function HowToConvertEnergy({
  fromKey,
  toKey,
}: {
  fromKey: string;
  toKey: string;
}) {
  const fromSg = ENERGY_UNITS[fromKey].nameSg ?? ENERGY_UNITS[fromKey].name;
  const toSg = ENERGY_UNITS[toKey].nameSg ?? ENERGY_UNITS[toKey].name;
  const fromPlural = ENERGY_UNITS[fromKey].name;
  const toPlural = ENERGY_UNITS[toKey].name;
  const Jf = ENERGY_UNITS[fromKey].factor;
  const Jt = ENERGY_UNITS[toKey].factor;
  const mult = Jf / Jt;
  const divisor = Jt / Jf;

  const multStr = formatRatioDisplay(mult);
  const divisorStr = formatRatioDisplay(divisor);
  const extra = getExtraDerivation(fromKey, toKey);

  return (
    <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-200">
        How to convert {fromPlural.toLowerCase()} to {toPlural.toLowerCase()}
      </h2>

      <div className="space-y-6 text-sm leading-relaxed text-slate-400">
        <p>
          <span className="font-medium text-slate-200">1 {fromSg.toLowerCase()}</span> is equal to{" "}
          <span className="font-medium text-slate-200">{multStr}</span>{" "}
          <span className="font-medium text-slate-200">{toSg.toLowerCase()}</span> when both are expressed
          in joule-equivalents:
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            1 {fromKey} = ({formatWithThousands(Jf)} J ÷ {formatWithThousands(Jt)} J) {toKey} = {multStr}{" "}
            {toKey}
          </p>
        </div>

        {extra && <p>{extra}</p>}

        <p>
          Each {fromSg.toLowerCase()} is defined as{" "}
          <span className="font-mono text-slate-300">{formatWithThousands(Jf)}</span> J and each{" "}
          {toSg.toLowerCase()} as <span className="font-mono text-slate-300">{formatWithThousands(Jt)}</span>{" "}
          J in this tool, so one {fromKey} equals{" "}
          <span className="font-mono text-slate-300">{formatWithThousands(Jf)}</span> ÷{" "}
          <span className="font-mono text-slate-300">{formatWithThousands(Jt)}</span> {toKey} = {multStr}{" "}
          {toKey}.
        </p>

        <p>
          Let <SubD unit={fromKey} /> be the numeric amount in <span className="text-slate-300">{fromSg}</span> (
          {fromKey}), and <SubD unit={toKey} /> the amount in <span className="text-slate-300">{toSg}</span> (
          {toKey}). Then:
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubD unit={toKey} /> = <SubD unit={fromKey} /> × ({formatWithThousands(Jf)} /{" "}
            {formatWithThousands(Jt)})
          </p>
        </div>

        <p>
          Equivalently, divide by how many {fromKey} fit into one {toKey} (joules per {toKey} divided by joules
          per {fromKey}):
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubD unit={toKey} /> = <SubD unit={fromKey} /> ÷ {divisorStr}
          </p>
        </div>

        <p className="text-slate-500">
          Or: {toSg.toLowerCase()} = {fromSg.toLowerCase()} ÷ {divisorStr}
        </p>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="mb-4 text-base font-semibold text-slate-200">Examples</h3>
          <div className="space-y-6">
            {HOW_TO_EXAMPLES.map((n, idx) => {
              const result = convertEnergy(n, fromKey, toKey);
              const outStr = formatEnergyResult(result);
              return (
                <div key={n}>
                  <p className="mb-2 font-medium text-slate-300">
                    Example #{idx + 1}: Convert {n} {fromKey} to {toSg.toLowerCase()}
                  </p>
                  <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                    <p>
                      {n} {fromKey} = {n} {fromKey} × ({formatWithThousands(Jf)}/{formatWithThousands(Jt)}){" "}
                      {toKey} = {outStr} {toKey}
                    </p>
                    <p className="mt-2 text-slate-400">
                      {n} {fromKey} = {n} {fromKey} ÷ {divisorStr} = {outStr} {toKey}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
