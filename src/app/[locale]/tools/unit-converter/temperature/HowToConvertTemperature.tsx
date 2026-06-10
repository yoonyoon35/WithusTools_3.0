import {
  convertTemperature,
  formatTemperatureResult,
  getTemperatureFormulaLine,
} from "@/utils/conversions";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import {
  getDetailedFormulaExplanation,
  getExtraDerivation,
  getTemperatureHowToExamples,
} from "./temperaturePairContent";
import { temperatureUnitLabel } from "./temperaturePairUi";

export default function HowToConvertTemperature({
  fromKey,
  toKey,
  ui,
}: {
  fromKey: string;
  toKey: string;
  ui?: unknown;
}) {
  const howTo = asMap(asMap(ui).howToConvert);
  const toSg = temperatureUnitLabel(ui, toKey, "nameSg");
  const fromPlural = temperatureUnitLabel(ui, fromKey, "name");
  const toPlural = temperatureUnitLabel(ui, toKey, "name");
  const extra = getExtraDerivation(fromKey, toKey, ui);
  const examples = getTemperatureHowToExamples(fromKey, toKey);

  const title = formatUi(asText(howTo.titleTemplate), {
    fromPlural: fromPlural.toLowerCase(),
    toPlural: toPlural.toLowerCase(),
  });

  return (
    <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-200">{title}</h2>

      <div className="space-y-6 text-sm leading-relaxed text-slate-400">
        <p>{getDetailedFormulaExplanation(fromKey, toKey, ui)}</p>

        {extra && <p>{extra}</p>}

        <p className="text-slate-500">{asText(howTo.intervalNote)}</p>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="mb-4 text-base font-semibold text-slate-200">{asText(howTo.examplesTitle)}</h3>
          <div className="space-y-6">
            {examples.map((n, idx) => {
              const result = convertTemperature(n, fromKey, toKey);
              const outStr = formatTemperatureResult(result);
              const line = getTemperatureFormulaLine(n, fromKey, toKey);
              return (
                <div key={n}>
                  <p className="mb-2 font-medium text-slate-300">
                    {formatUi(asText(howTo.exampleTitleTemplate), {
                      n: String(idx + 1),
                      value: String(n),
                      fromKey,
                      toSg: toSg.toLowerCase(),
                    })}
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
