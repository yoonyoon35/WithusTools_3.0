import {
  convertSpeed,
  formatSpeedResult,
  getSpeedFormulaLine,
  SPEED_UNITS,
} from "@/utils/conversions";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import { speedUnitLabel } from "./speedPairUi";

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

export default function HowToConvertSpeed({
  fromKey,
  toKey,
  ui,
}: {
  fromKey: string;
  toKey: string;
  ui?: unknown;
}) {
  const howTo = asMap(asMap(ui).howToConvert);
  const fromSg = speedUnitLabel(ui, fromKey, "nameSg");
  const toSg = speedUnitLabel(ui, toKey, "nameSg");
  const fromPlural = speedUnitLabel(ui, fromKey, "name");
  const toPlural = speedUnitLabel(ui, toKey, "name");

  const fromF = SPEED_UNITS[fromKey]?.factor;
  const toF = SPEED_UNITS[toKey]?.factor;
  const beaufortInvolved = fromKey === "beaufort" || toKey === "beaufort";
  const bothLinear = fromF != null && toF != null && !beaufortInvolved;

  const title = formatUi(asText(howTo.titleTemplate), {
    fromPlural: fromPlural.toLowerCase(),
    toPlural: toPlural.toLowerCase(),
  });

  if (beaufortInvolved) {
    return (
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">{title}</h2>
        <div className="space-y-6 text-sm leading-relaxed text-slate-400">
          <p>{asText(howTo.beaufortIntro)}</p>
          <p>{formatUi(asText(howTo.beaufortFromExplain), { toSg: toSg.toLowerCase() })}</p>
          <p>{asText(howTo.beaufortToExplain)}</p>
          <div className="border-t border-slate-700 pt-6">
            <h3 className="mb-4 text-base font-semibold text-slate-200">{asText(howTo.examplesTitle)}</h3>
            <div className="space-y-6">
              {HOW_TO_EXAMPLES_BEAUFORT.map((n, idx) => {
                const result = convertSpeed(n, fromKey, toKey);
                const line = getSpeedFormulaLine(n, fromKey, toKey);
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
                        {asText(howTo.resultLabel)}{" "}
                        {Number.isFinite(result) ? formatSpeedResult(result) : "—"} {toKey}
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
        <h2 className="mb-6 text-lg font-semibold text-slate-200">{title}</h2>
        <p className="text-sm leading-relaxed text-slate-400">
          {formatUi(asText(howTo.specialPairExplain), { fromKey, toKey })}
        </p>
      </section>
    );
  }

  const mult = fromF / toF;
  const divisor = toF / fromF;

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
            1 {fromKey} = ({fromF} m/s ÷ {toF} m/s) {toKey} = {mult} {toKey}
          </p>
        </div>

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
          {formatUi(asText(howTo.letVFrom), { fromSg, toSg, fromKey, toKey })}
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubV unit={toKey} /> = <SubV unit={fromKey} /> × ({fromF} / {toF})
          </p>
        </div>

        <p>{asText(howTo.divideExplain)}</p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubV unit={toKey} /> = <SubV unit={fromKey} /> ÷ {divisor}
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
            {HOW_TO_EXAMPLES_LINEAR.map((n, idx) => {
              const result = convertSpeed(n, fromKey, toKey);
              const outStr = formatSpeedResult(result);
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
