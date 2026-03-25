import { convertSpeed, formatSpeedResult, getSpeedFormulaLine, SPEED_UNITS } from "@/utils/conversions";

const HOW_TO_EXAMPLES_LINEAR = [10, 50] as const;
const HOW_TO_EXAMPLES_BEAUFORT = [3, 7] as const;

function SubV({ unit }: { unit: string }) {
  return (
    <span className="inline">
      <em>v</em>
      <sub className="text-[0.75em] text-slate-400">({unit})</sub>
    </span>
  );
}

export default function HowToConvertSpeed({ fromKey, toKey }: { fromKey: string; toKey: string }) {
  const fromSg = SPEED_UNITS[fromKey]?.nameSg ?? SPEED_UNITS[fromKey]?.name ?? fromKey;
  const toSg = SPEED_UNITS[toKey]?.nameSg ?? SPEED_UNITS[toKey]?.name ?? toKey;
  const fromPlural = SPEED_UNITS[fromKey]?.name ?? fromKey;
  const toPlural = SPEED_UNITS[toKey]?.name ?? toKey;

  const fromF = SPEED_UNITS[fromKey]?.factor;
  const toF = SPEED_UNITS[toKey]?.factor;
  const beaufortInvolved = fromKey === "beaufort" || toKey === "beaufort";
  const bothLinear = fromF != null && toF != null && !beaufortInvolved;

  if (beaufortInvolved) {
    return (
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">
          How to convert {fromPlural.toLowerCase()} to {toPlural.toLowerCase()}
        </h2>
        <div className="space-y-6 text-sm leading-relaxed text-slate-400">
          <p>
            The Beaufort scale is a <span className="text-slate-300">discrete wind force (0–12)</span> based on
            mean wind at 10 m. This tool converts by passing through an equivalent value in meters per second
            (WMO-style m/s bands; midpoints when starting from a force).
          </p>
          <p>
            <span className="font-medium text-slate-200">From Beaufort:</span> your input is rounded to the
            nearest whole force 0–12, then the midpoint m/s for that force is used before converting to{" "}
            {toSg.toLowerCase()}.
          </p>
          <p>
            <span className="font-medium text-slate-200">To Beaufort:</span> your speed is converted to m/s,
            then classified into the matching force 0–12.
          </p>
          <div className="border-t border-slate-700 pt-6">
            <h3 className="mb-4 text-base font-semibold text-slate-200">Examples</h3>
            <div className="space-y-6">
              {HOW_TO_EXAMPLES_BEAUFORT.map((n, idx) => {
                const result = convertSpeed(n, fromKey, toKey);
                const line = getSpeedFormulaLine(n, fromKey, toKey);
                return (
                  <div key={n}>
                    <p className="mb-2 font-medium text-slate-300">
                      Example #{idx + 1}: Convert {n} {fromKey} to {toSg.toLowerCase()}
                    </p>
                    <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                      <p>{line}</p>
                      <p className="mt-2 text-slate-400">
                        Result: {Number.isFinite(result) ? formatSpeedResult(result) : "—"} {toKey}
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

  if (!bothLinear) {
    return (
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">
          How to convert {fromPlural.toLowerCase()} to {toPlural.toLowerCase()}
        </h2>
        <p className="text-sm leading-relaxed text-slate-400">
          This pair uses fixed m/s definitions per unit (Mach 1 and c are defined in m/s). Multiply by the ratio
          of m/s per {fromKey} to m/s per {toKey}, as shown in the formula line in the calculator above.
        </p>
      </section>
    );
  }

  const mult = fromF / toF;
  const divisor = toF / fromF;

  return (
    <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-200">
        How to convert {fromPlural.toLowerCase()} to {toPlural.toLowerCase()}
      </h2>

      <div className="space-y-6 text-sm leading-relaxed text-slate-400">
        <p>
          <span className="font-medium text-slate-200">1 {fromSg.toLowerCase()}</span> equals{" "}
          <span className="font-medium text-slate-200">{mult}</span>{" "}
          <span className="font-medium text-slate-200">{toSg.toLowerCase()}</span> in this tool (via m/s):
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            1 {fromKey} = ({fromF} m/s ÷ {toF} m/s) {toKey} = {mult} {toKey}
          </p>
        </div>

        <p>
          Each {fromSg.toLowerCase()} carries <span className="font-mono text-slate-300">{fromF}</span> m/s and
          each {toSg.toLowerCase()} <span className="font-mono text-slate-300">{toF}</span> m/s, so one {fromKey}{" "}
          equals <span className="font-mono text-slate-300">{fromF}</span> ÷{" "}
          <span className="font-mono text-slate-300">{toF}</span> {toKey}.
        </p>

        <p>
          Let <SubV unit={fromKey} /> be the numeric speed in <span className="text-slate-300">{fromSg}</span> (
          {fromKey}), and <SubV unit={toKey} /> in <span className="text-slate-300">{toSg}</span> ({toKey}). Then:
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubV unit={toKey} /> = <SubV unit={fromKey} /> × ({fromF} / {toF})
          </p>
        </div>

        <p>
          Equivalently, divide by how many {fromKey} fit into one {toKey} (m/s per {toKey} divided by m/s per{" "}
          {fromKey}):
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubV unit={toKey} /> = <SubV unit={fromKey} /> ÷ {divisor}
          </p>
        </div>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="mb-4 text-base font-semibold text-slate-200">Examples</h3>
          <div className="space-y-6">
            {HOW_TO_EXAMPLES_LINEAR.map((n, idx) => {
              const result = convertSpeed(n, fromKey, toKey);
              const outStr = formatSpeedResult(result);
              return (
                <div key={n}>
                  <p className="mb-2 font-medium text-slate-300">
                    Example #{idx + 1}: Convert {n} {fromKey} to {toSg.toLowerCase()}
                  </p>
                  <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                    <p>
                      {n} {fromKey} = {n} {fromKey} × ({fromF}/{toF}) {toKey} = {outStr} {toKey}
                    </p>
                    <p className="mt-2 text-slate-400">
                      {n} {fromKey} = {n} {fromKey} ÷ {divisor} = {outStr} {toKey}
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
