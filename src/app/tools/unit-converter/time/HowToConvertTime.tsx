import { TIME_UNITS, convertTime, formatTimeResult } from "@/utils/conversions";
import { formatRatioDisplay, getExtraDerivation } from "./timePairContent";

const HOW_TO_EXAMPLES = [20, 50] as const;

function SubT({ unit }: { unit: string }) {
  return (
    <span className="inline">
      <em>t</em>
      <sub className="text-[0.75em] text-slate-400">({unit})</sub>
    </span>
  );
}

export default function HowToConvertTime({
  fromKey,
  toKey,
}: {
  fromKey: string;
  toKey: string;
}) {
  const fromSg = TIME_UNITS[fromKey].nameSg ?? TIME_UNITS[fromKey].name;
  const toSg = TIME_UNITS[toKey].nameSg ?? TIME_UNITS[toKey].name;
  const fromPlural = TIME_UNITS[fromKey].name;
  const toPlural = TIME_UNITS[toKey].name;
  const Sf = TIME_UNITS[fromKey].factor;
  const St = TIME_UNITS[toKey].factor;
  const mult = Sf / St;
  const divisor = St / Sf;

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
          <span className="font-medium text-slate-200">{toSg.toLowerCase()}</span>:
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            1 {fromKey} = ({Sf} s ÷ {St} s) {toKey} = {multStr} {toKey}
          </p>
        </div>

        {extra && <p>{extra}</p>}

        <p>
          Each {fromSg.toLowerCase()} is defined as <span className="font-mono text-slate-300">{Sf}</span> s and each{" "}
          {toSg.toLowerCase()} as <span className="font-mono text-slate-300">{St}</span> s, so one {fromKey} equals{" "}
          <span className="font-mono text-slate-300">{Sf}</span> ÷ <span className="font-mono text-slate-300">{St}</span>{" "}
          {toKey} = {multStr} {toKey}.
        </p>

        <p>
          Let <SubT unit={fromKey} /> be the numeric value of the same duration measured in{" "}
          <span className="text-slate-300">{fromSg}</span> ({fromKey}), and <SubT unit={toKey} /> the value in{" "}
          <span className="text-slate-300">{toSg}</span> ({toKey}). Then:
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubT unit={toKey} /> = <SubT unit={fromKey} /> × ({Sf} / {St})
          </p>
        </div>

        <p>
          Equivalently, divide by how many {fromKey} fit into one {toKey} (seconds per {toKey} divided by seconds per{" "}
          {fromKey}):
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubT unit={toKey} /> = <SubT unit={fromKey} /> ÷ {divisorStr}
          </p>
        </div>

        <p className="text-slate-500">
          Or: {toSg.toLowerCase()} = {fromSg.toLowerCase()} ÷ {divisorStr}
        </p>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="mb-4 text-base font-semibold text-slate-200">Examples</h3>
          <div className="space-y-6">
            {HOW_TO_EXAMPLES.map((n, idx) => {
              const result = convertTime(n, fromKey, toKey);
              const outStr = formatTimeResult(result);
              return (
                <div key={n}>
                  <p className="mb-2 font-medium text-slate-300">
                    Example #{idx + 1}: Convert {n} {fromKey} to {toSg.toLowerCase()}
                  </p>
                  <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                    <p>
                      {n} {fromKey} = {n} {fromKey} × ({Sf}/{St}) {toKey} = {outStr} {toKey}
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
