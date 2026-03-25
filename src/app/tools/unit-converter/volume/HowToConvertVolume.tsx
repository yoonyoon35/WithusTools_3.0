import { VOLUME_UNITS, convertVolume, formatVolumeResult } from "@/utils/conversions";
import { formatRatioDisplay, getExtraDerivation } from "./volumePairContent";

const HOW_TO_EXAMPLES = [20, 50] as const;

function SubVol({ unit }: { unit: string }) {
  return (
    <span className="inline">
      <em>V</em>
      <sub className="text-[0.75em] text-slate-400">({unit})</sub>
    </span>
  );
}

export default function HowToConvertVolume({
  fromKey,
  toKey,
}: {
  fromKey: string;
  toKey: string;
}) {
  const fromSg = VOLUME_UNITS[fromKey].nameSg ?? VOLUME_UNITS[fromKey].name;
  const toSg = VOLUME_UNITS[toKey].nameSg ?? VOLUME_UNITS[toKey].name;
  const fromPlural = VOLUME_UNITS[fromKey].name;
  const toPlural = VOLUME_UNITS[toKey].name;
  const Lf = VOLUME_UNITS[fromKey].factor;
  const Lt = VOLUME_UNITS[toKey].factor;
  const mult = Lf / Lt;
  const divisor = Lt / Lf;

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
            1 {fromKey} = ({Lf} L ÷ {Lt} L) {toKey} = {multStr} {toKey}
          </p>
        </div>

        {extra && <p>{extra}</p>}

        <p>
          Each {fromSg.toLowerCase()} is defined as <span className="font-mono text-slate-300">{Lf}</span> L and each{" "}
          {toSg.toLowerCase()} as <span className="font-mono text-slate-300">{Lt}</span> L, so one {fromKey} equals{" "}
          <span className="font-mono text-slate-300">{Lf}</span> ÷ <span className="font-mono text-slate-300">{Lt}</span>{" "}
          {toKey} = {multStr} {toKey}.
        </p>

        <p>
          Let <SubVol unit={fromKey} /> be the numeric value of the same volume measured in{" "}
          <span className="text-slate-300">{fromSg}</span> ({fromKey}), and <SubVol unit={toKey} /> the value in{" "}
          <span className="text-slate-300">{toSg}</span> ({toKey}). Then:
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubVol unit={toKey} /> = <SubVol unit={fromKey} /> × ({Lf} / {Lt})
          </p>
        </div>

        <p>
          Equivalently, divide by how many {fromKey} fit into one {toKey} (liters per {toKey} divided by liters per{" "}
          {fromKey}):
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubVol unit={toKey} /> = <SubVol unit={fromKey} /> ÷ {divisorStr}
          </p>
        </div>

        <p className="text-slate-500">
          Or: {toSg.toLowerCase()} = {fromSg.toLowerCase()} ÷ {divisorStr}
        </p>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="mb-4 text-base font-semibold text-slate-200">Examples</h3>
          <div className="space-y-6">
            {HOW_TO_EXAMPLES.map((n, idx) => {
              const result = convertVolume(n, fromKey, toKey);
              const outStr = formatVolumeResult(result);
              return (
                <div key={n}>
                  <p className="mb-2 font-medium text-slate-300">
                    Example #{idx + 1}: Convert {n} {fromKey} to {toSg.toLowerCase()}
                  </p>
                  <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                    <p>
                      {n} {fromKey} = {n} {fromKey} × ({Lf}/{Lt}) {toKey} = {outStr} {toKey}
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
