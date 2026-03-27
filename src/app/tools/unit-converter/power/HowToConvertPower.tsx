import {
  POWER_UNITS,
  convertPower,
  formatPowerResult,
  formatWithThousands,
  isPowerDbmKey,
  powerValueToWatts,
} from "@/utils/conversions";
import { formatRatioDisplay, getExtraDerivation } from "./powerPairContent";

const HOW_TO_LINEAR_EXAMPLES = [1, 10] as const;
const HOW_TO_DBM_EXAMPLES = [10, 30] as const;

function SubD({ unit }: { unit: string }) {
  return (
    <span className="inline">
      <em>d</em>
      <sub className="text-[0.75em] text-slate-400">({unit})</sub>
    </span>
  );
}

export default function HowToConvertPower({
  fromKey,
  toKey,
}: {
  fromKey: string;
  toKey: string;
}) {
  const fromSg = POWER_UNITS[fromKey].nameSg ?? POWER_UNITS[fromKey].name;
  const toSg = POWER_UNITS[toKey].nameSg ?? POWER_UNITS[toKey].name;
  const fromPlural = POWER_UNITS[fromKey].name;
  const toPlural = POWER_UNITS[toKey].name;
  const extra = getExtraDerivation(fromKey, toKey);

  const involvesDbm = isPowerDbmKey(fromKey) || isPowerDbmKey(toKey);

  if (involvesDbm) {
    return (
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">
          How to convert {fromPlural.toLowerCase()} to {toPlural.toLowerCase()}
        </h2>
        <div className="space-y-6 text-sm leading-relaxed text-slate-400">
          <p>
            <span className="font-medium text-slate-200">dBm</span> is logarithmic: power relative to 1 mW.{" "}
            <span className="font-mono text-slate-300">P_W = 10^((dBm − 30) / 10)</span> and{" "}
            <span className="font-mono text-slate-300">dBm = 10 × log₁₀(P_W × 1000)</span> for{" "}
            <span className="font-medium text-slate-200">P_W &gt; 0</span>.
          </p>
          {isPowerDbmKey(fromKey) && !isPowerDbmKey(toKey) && (
            <p>
              To reach {toSg}, convert dBm → W, then divide by the watt factor for {toKey} (
              <span className="font-mono text-slate-300">{POWER_UNITS[toKey].factor}</span> W per 1 {toKey}).
            </p>
          )}
          {!isPowerDbmKey(fromKey) && isPowerDbmKey(toKey) && (
            <p>
              From {fromSg}, multiply by <span className="font-mono text-slate-300">{POWER_UNITS[fromKey].factor}</span>{" "}
              W per {fromKey} to get watts, then apply the dBm formula (watts must be positive).
            </p>
          )}
          <div className="border-t border-slate-700 pt-6">
            <h3 className="mb-4 text-base font-semibold text-slate-200">Examples</h3>
            <div className="space-y-6">
              {HOW_TO_DBM_EXAMPLES.map((n, idx) => {
                const result = convertPower(n, fromKey, toKey);
                const outStr = formatPowerResult(result, toKey);
                const ok = Number.isFinite(result);
                return (
                  <div key={n}>
                    <p className="mb-2 font-medium text-slate-300">
                      Example #{idx + 1}: Convert {n} {fromKey} to {toSg.toLowerCase()}
                    </p>
                    <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                      {ok ? (
                        <p>
                          {n} {fromKey} → {outStr} {toKey}
                        </p>
                      ) : (
                        <p>Invalid or non-positive intermediate watts for this pair.</p>
                      )}
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

  const Wf = POWER_UNITS[fromKey].factor!;
  const Wt = POWER_UNITS[toKey].factor!;
  const mult = Wf / Wt;
  const divisor = Wt / Wf;
  const multStr = formatRatioDisplay(mult);
  const divisorStr = formatRatioDisplay(divisor);

  return (
    <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-200">
        How to convert {fromPlural.toLowerCase()} to {toPlural.toLowerCase()}
      </h2>

      <div className="space-y-6 text-sm leading-relaxed text-slate-400">
        <p>
          <span className="font-medium text-slate-200">1 {fromSg.toLowerCase()}</span> is equal to{" "}
          <span className="font-medium text-slate-200">{multStr}</span>{" "}
          <span className="font-medium text-slate-200">{toSg.toLowerCase()}</span> when both are expressed in
          watt-equivalents:
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            1 {fromKey} = ({formatWithThousands(Wf)} W ÷ {formatWithThousands(Wt)} W) {toKey} = {multStr} {toKey}
          </p>
        </div>

        {extra && <p>{extra}</p>}

        <p>
          Each {fromSg.toLowerCase()} is defined as <span className="font-mono text-slate-300">{formatWithThousands(Wf)}</span>{" "}
          W and each {toSg.toLowerCase()} as <span className="font-mono text-slate-300">{formatWithThousands(Wt)}</span> W in
          this tool, so one {fromKey} equals{" "}
          <span className="font-mono text-slate-300">{formatWithThousands(Wf)}</span> ÷{" "}
          <span className="font-mono text-slate-300">{formatWithThousands(Wt)}</span> {toKey} = {multStr} {toKey}.
        </p>

        <p>
          Let <SubD unit={fromKey} /> be the numeric value in <span className="text-slate-300">{fromSg}</span> ({fromKey}), and{" "}
          <SubD unit={toKey} /> the value in <span className="text-slate-300">{toSg}</span> ({toKey}). Then:
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubD unit={toKey} /> = <SubD unit={fromKey} /> × ({formatWithThousands(Wf)} / {formatWithThousands(Wt)})
          </p>
        </div>

        <p>
          Equivalently, divide by how many {fromKey} fit into one {toKey} (watts per {toKey} divided by watts per{" "}
          {fromKey}):
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
            {HOW_TO_LINEAR_EXAMPLES.map((n, idx) => {
              const result = convertPower(n, fromKey, toKey);
              const outStr = formatPowerResult(result, toKey);
              const wMid = powerValueToWatts(n, fromKey);
              return (
                <div key={n}>
                  <p className="mb-2 font-medium text-slate-300">
                    Example #{idx + 1}: Convert {n} {fromKey} to {toSg.toLowerCase()}
                  </p>
                  <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                    <p>
                      {n} {fromKey} = {n} {fromKey} × ({formatWithThousands(Wf)}/{formatWithThousands(Wt)}) {toKey} ={" "}
                      {outStr} {toKey}
                    </p>
                    <p className="mt-2 text-slate-400">
                      {n} {fromKey} = {n} {fromKey} ÷ {divisorStr} = {outStr} {toKey}
                    </p>
                    <p className="mt-2 text-slate-500">
                      Intermediate watts: {formatWithThousands(formatPowerResult(wMid, "w"))} W
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
