import {
  TEMPERATURE_UNITS,
  convertTemperature,
  formatTemperatureResult,
  getTemperatureFormulaLine,
} from "@/utils/conversions";
import {
  getDetailedFormulaExplanation,
  getExtraDerivation,
  getTemperatureHowToExamples,
} from "./temperaturePairContent";

export default function HowToConvertTemperature({
  fromKey,
  toKey,
}: {
  fromKey: string;
  toKey: string;
}) {
  const toSg = TEMPERATURE_UNITS[toKey].nameSg ?? TEMPERATURE_UNITS[toKey].name;
  const fromPlural = TEMPERATURE_UNITS[fromKey].name;
  const toPlural = TEMPERATURE_UNITS[toKey].name;
  const extra = getExtraDerivation(fromKey, toKey);
  const examples = getTemperatureHowToExamples(fromKey, toKey);

  return (
    <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-200">
        How to convert {fromPlural} to {toPlural}
      </h2>

      <div className="space-y-6 text-sm leading-relaxed text-slate-400">
        <p>{getDetailedFormulaExplanation(fromKey, toKey)}</p>

        {extra && <p>{extra}</p>}

        <p className="text-slate-500">
          Unlike units with a single fixed ratio (meters to feet), absolute temperatures include an offset.
          Always use the full formula for this pair—do not “multiply only” by a scale factor unless you are
          computing a temperature <em>difference</em> (interval), where offsets cancel.
        </p>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="mb-4 text-base font-semibold text-slate-200">Examples</h3>
          <div className="space-y-6">
            {examples.map((n, idx) => {
              const result = convertTemperature(n, fromKey, toKey);
              const outStr = formatTemperatureResult(result);
              const line = getTemperatureFormulaLine(n, fromKey, toKey);
              return (
                <div key={n}>
                  <p className="mb-2 font-medium text-slate-300">
                    Example #{idx + 1}: Convert {n} {fromKey} to {toSg}
                  </p>
                  <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                    <p>{line}</p>
                    <p className="mt-2 text-slate-400">
                      → {outStr} {toKey}
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
