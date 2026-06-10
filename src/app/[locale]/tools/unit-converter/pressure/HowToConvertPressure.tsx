import {
  convertPressure,
  formatPressureResult,
  getPressureFormulaLine,
  PRESSURE_UNITS,
} from "@/utils/conversions";

const HOW_TO_EXAMPLES = [1, 10] as const;

function SubP({ unit }: { unit: string }) {
  return (
    <span className="inline">
      <em>p</em>
      <sub className="text-[0.75em] text-slate-400">({unit})</sub>
    </span>
  );
}

export default function HowToConvertPressure({ fromKey, toKey }: { fromKey: string; toKey: string }) {
  const fromSg = PRESSURE_UNITS[fromKey]?.nameSg ?? PRESSURE_UNITS[fromKey]?.name ?? fromKey;
  const toSg = PRESSURE_UNITS[toKey]?.nameSg ?? PRESSURE_UNITS[toKey]?.name ?? toKey;
  const fromPlural = PRESSURE_UNITS[fromKey]?.name ?? fromKey;
  const toPlural = PRESSURE_UNITS[toKey]?.name ?? toKey;

  const fromF = PRESSURE_UNITS[fromKey]?.factor;
  const toF = PRESSURE_UNITS[toKey]?.factor;
  if (fromF == null || toF == null) {
    return (
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">
          How to convert {fromPlural.toLowerCase()} to {toPlural.toLowerCase()}
        </h2>
        <p className="text-sm leading-relaxed text-slate-400">Unknown unit pair.</p>
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
          <span className="font-medium text-slate-200">{toSg.toLowerCase()}</span> in this tool (via pascal):
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            1 {fromKey} = ({fromF} Pa ÷ {toF} Pa) {toKey} = {mult} {toKey}
          </p>
        </div>

        <p>
          Each {fromSg.toLowerCase()} carries <span className="font-mono text-slate-300">{fromF}</span> Pa and each{" "}
          {toSg.toLowerCase()} <span className="font-mono text-slate-300">{toF}</span> Pa, so one {fromKey} equals{" "}
          <span className="font-mono text-slate-300">{fromF}</span> ÷{" "}
          <span className="font-mono text-slate-300">{toF}</span> {toKey}.
        </p>

        <p>
          Let <SubP unit={fromKey} /> be pressure in <span className="text-slate-300">{fromSg}</span> ({fromKey}), and{" "}
          <SubP unit={toKey} /> in <span className="text-slate-300">{toSg}</span> ({toKey}). Then:
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubP unit={toKey} /> = <SubP unit={fromKey} /> × ({fromF} / {toF})
          </p>
        </div>

        <p>
          Equivalently, divide by how many {fromKey} fit into one {toKey} (Pa per {toKey} divided by Pa per{" "}
          {fromKey}):
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubP unit={toKey} /> = <SubP unit={fromKey} /> ÷ {divisor}
          </p>
        </div>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="mb-4 text-base font-semibold text-slate-200">Examples</h3>
          <div className="space-y-6">
            {HOW_TO_EXAMPLES.map((n, idx) => {
              const result = convertPressure(n, fromKey, toKey);
              const outStr = formatPressureResult(result);
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
                    <p className="mt-2 text-slate-500">{getPressureFormulaLine(n, fromKey, toKey)}</p>
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
