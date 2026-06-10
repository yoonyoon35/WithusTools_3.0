import {
  convertPressure,
  formatPressureResult,
  getPressureFormulaLine,
  PRESSURE_UNITS,
} from "@/utils/conversions";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import { getExtraDerivation } from "./pressurePairContent";
import { pressureUnitLabel } from "./pressurePairUi";

const HOW_TO_EXAMPLES = [1, 10] as const;

function SubP({ unit }: { unit: string }) {
  return (
    <span className="inline">
      <em>p</em>
      <sub className="text-[0.75em] text-slate-400">({unit})</sub>
    </span>
  );
}

export default function HowToConvertPressure({
  fromKey,
  toKey,
  ui,
}: {
  fromKey: string;
  toKey: string;
  ui?: unknown;
}) {
  const howTo = asMap(asMap(ui).howToConvert);
  const fromSg = pressureUnitLabel(ui, fromKey, "nameSg");
  const toSg = pressureUnitLabel(ui, toKey, "nameSg");
  const fromPlural = pressureUnitLabel(ui, fromKey, "name");
  const toPlural = pressureUnitLabel(ui, toKey, "name");

  const fromF = PRESSURE_UNITS[fromKey]?.factor;
  const toF = PRESSURE_UNITS[toKey]?.factor;
  if (fromF == null || toF == null) {
    return (
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">
          {formatUi(asText(howTo.titleTemplate), {
            fromPlural: fromPlural.toLowerCase(),
            toPlural: toPlural.toLowerCase(),
          })}
        </h2>
        <p className="text-sm leading-relaxed text-slate-400">{asText(howTo.unknownPair)}</p>
      </section>
    );
  }

  const mult = fromF / toF;
  const divisor = toF / fromF;
  const extra = getExtraDerivation(fromKey, toKey, ui);

  const title = formatUi(asText(howTo.titleTemplate), {
    fromPlural: fromPlural.toLowerCase(),
    toPlural: toPlural.toLowerCase(),
  });

  return (
    <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-200">{title}</h2>

      <div className="space-y-6 text-sm leading-relaxed text-slate-400">
        <p>
          {formatUi(asText(howTo.oneEquals), {
            fromSg: fromSg.toLowerCase(),
            toSg: toSg.toLowerCase(),
            mult: String(mult),
          })}
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            1 {fromKey} = ({fromF} Pa ÷ {toF} Pa) {toKey} = {mult} {toKey}
          </p>
        </div>

        {extra && <p>{extra}</p>}

        <p>
          {formatUi(asText(howTo.factorExplain), {
            fromSg: fromSg.toLowerCase(),
            toSg: toSg.toLowerCase(),
            fromKey,
            toKey,
            fromFactor: String(fromF),
            toFactor: String(toF),
          })}
        </p>

        <p>
          {formatUi(asText(howTo.letPFrom), { fromSg, toSg, fromKey, toKey })}
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubP unit={toKey} /> = <SubP unit={fromKey} /> × ({fromF} / {toF})
          </p>
        </div>

        <p>{asText(howTo.divideExplain)}</p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubP unit={toKey} /> = <SubP unit={fromKey} /> ÷ {divisor}
          </p>
        </div>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="mb-4 text-base font-semibold text-slate-200">{asText(howTo.examplesTitle)}</h3>
          <div className="space-y-6">
            {HOW_TO_EXAMPLES.map((n, idx) => {
              const result = convertPressure(n, fromKey, toKey);
              const outStr = formatPressureResult(result);
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
