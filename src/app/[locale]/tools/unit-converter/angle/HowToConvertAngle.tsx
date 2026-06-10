import {
  convertAngle,
  formatAngleResult,
  getAngleFormulaLine,
  ANGLE_UNITS,
} from "@/utils/conversions";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import { getExtraDerivation } from "./anglePairContent";
import { angleUnitLabel } from "./anglePairUi";

const HOW_TO_EXAMPLES = [1, 10] as const;

function SubA({ unit }: { unit: string }) {
  return (
    <span className="inline">
      <em>θ</em>
      <sub className="text-[0.75em] text-slate-400">({unit})</sub>
    </span>
  );
}

export default function HowToConvertAngle({
  fromKey,
  toKey,
  ui,
}: {
  fromKey: string;
  toKey: string;
  ui?: unknown;
}) {
  const howTo = asMap(asMap(ui).howToConvert);
  const fromSg = angleUnitLabel(ui, fromKey, "nameSg");
  const toSg = angleUnitLabel(ui, toKey, "nameSg");
  const fromPlural = angleUnitLabel(ui, fromKey, "name");
  const toPlural = angleUnitLabel(ui, toKey, "name");
  const extra = getExtraDerivation(fromKey, toKey, ui);

  const fromF = ANGLE_UNITS[fromKey]?.factor;
  const toF = ANGLE_UNITS[toKey]?.factor;
  if (fromF == null || toF == null) {
    const title = formatUi(asText(howTo.titleTemplate), {
      fromPlural: fromPlural.toLowerCase(),
      toPlural: toPlural.toLowerCase(),
    });
    return (
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">{title}</h2>
        <p className="text-sm leading-relaxed text-slate-400">{asText(howTo.unknownPair)}</p>
      </section>
    );
  }

  const mult = fromF / toF;
  const divisor = toF / fromF;

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
            1 {fromKey} = ({fromF} rad ÷ {toF} rad) {toKey} = {mult} {toKey}
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
          {formatUi(asText(howTo.letAFrom), {
            fromSg,
            fromKey,
            toSg,
            toKey,
          })}
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubA unit={toKey} /> = <SubA unit={fromKey} /> × ({fromF} / {toF})
          </p>
        </div>

        <p>{formatUi(asText(howTo.divideExplain), { fromKey, toKey })}</p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubA unit={toKey} /> = <SubA unit={fromKey} /> ÷ {divisor}
          </p>
        </div>

        <p className="text-slate-500">
          {formatUi(asText(howTo.orLine), {
            toSg: toSg.toLowerCase(),
            fromSg: fromSg.toLowerCase(),
            divisor: String(divisor),
          })}
        </p>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="mb-4 text-base font-semibold text-slate-200">{asText(howTo.examplesTitle)}</h3>
          <div className="space-y-6">
            {HOW_TO_EXAMPLES.map((n, idx) => {
              const result = convertAngle(n, fromKey, toKey);
              const outStr = formatAngleResult(result);
              return (
                <div key={n}>
                  <p className="mb-2 font-medium text-slate-300">
                    {formatUi(asText(howTo.exampleTitleTemplate), {
                      n: idx + 1,
                      value: n,
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
                    <p className="mt-2 text-slate-500">{getAngleFormulaLine(n, fromKey, toKey)}</p>
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
