import {
  POWER_UNITS,
  convertPower,
  formatPowerResult,
  formatWithThousands,
  isPowerDbmKey,
  powerValueToWatts,
} from "@/utils/conversions";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import { formatRatioDisplay, getExtraDerivation } from "./powerPairContent";
import { powerUnitLabel } from "./powerPairUi";

const HOW_TO_LINEAR_EXAMPLES = [1, 10] as const;
const HOW_TO_DBM_EXAMPLES = [10, 30] as const;

function SubD({ unit }: { unit: string }) {
  return (
    <span className="inline">
      <em>p</em>
      <sub className="text-[0.75em] text-slate-400">({unit})</sub>
    </span>
  );
}

export default function HowToConvertPower({
  fromKey,
  toKey,
  ui,
}: {
  fromKey: string;
  toKey: string;
  ui?: unknown;
}) {
  const howTo = asMap(asMap(ui).howToConvert);
  const fromSg = powerUnitLabel(ui, fromKey, "nameSg");
  const toSg = powerUnitLabel(ui, toKey, "nameSg");
  const fromPlural = powerUnitLabel(ui, fromKey, "name");
  const toPlural = powerUnitLabel(ui, toKey, "name");
  const extra = getExtraDerivation(fromKey, toKey, ui);

  const involvesDbm = isPowerDbmKey(fromKey) || isPowerDbmKey(toKey);

  if (involvesDbm) {
    const title = formatUi(asText(howTo.dbmTitleTemplate) || asText(howTo.titleTemplate), {
      fromPlural: fromPlural.toLowerCase(),
      toPlural: toPlural.toLowerCase(),
    });

    return (
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">{title}</h2>
        <div className="space-y-6 text-sm leading-relaxed text-slate-400">
          <p>{asText(howTo.dbmIntro)}</p>
          {isPowerDbmKey(fromKey) && !isPowerDbmKey(toKey) && (
            <p>
              {formatUi(asText(howTo.dbmToLinear), {
                toSg,
                toKey,
                toFactor: String(POWER_UNITS[toKey].factor),
              })}
            </p>
          )}
          {!isPowerDbmKey(fromKey) && isPowerDbmKey(toKey) && (
            <p>
              {formatUi(asText(howTo.linearToDbm), {
                fromSg,
                fromKey,
                fromFactor: String(POWER_UNITS[fromKey].factor),
              })}
            </p>
          )}
          <div className="border-t border-slate-700 pt-6">
            <h3 className="mb-4 text-base font-semibold text-slate-200">{asText(howTo.examplesTitle)}</h3>
            <div className="space-y-6">
              {HOW_TO_DBM_EXAMPLES.map((n, idx) => {
                const result = convertPower(n, fromKey, toKey);
                const outStr = formatPowerResult(result, toKey);
                const ok = Number.isFinite(result);
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
                      {ok ? (
                        <p>
                          {n} {fromKey} → {outStr} {toKey}
                        </p>
                      ) : (
                        <p>{asText(howTo.dbmInvalid)}</p>
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
            mult: multStr,
          })}
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            1 {fromKey} = ({formatWithThousands(Wf)} W ÷ {formatWithThousands(Wt)} W) {toKey} = {multStr} {toKey}
          </p>
        </div>

        {extra && <p>{extra}</p>}

        <p>
          {formatUi(asText(howTo.factorExplain), {
            fromSg: fromSg.toLowerCase(),
            toSg: toSg.toLowerCase(),
            fromKey,
            toKey,
            fromFactor: formatWithThousands(Wf),
            toFactor: formatWithThousands(Wt),
            mult: multStr,
          })}
        </p>

        <p>
          {formatUi(asText(howTo.letPFrom), {
            fromSg,
            fromKey,
            toSg,
            toKey,
          })}
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubD unit={toKey} /> = <SubD unit={fromKey} /> × ({formatWithThousands(Wf)} / {formatWithThousands(Wt)})
          </p>
        </div>

        <p>
          {formatUi(asText(howTo.divideExplain), { fromKey, toKey })}
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubD unit={toKey} /> = <SubD unit={fromKey} /> ÷ {divisorStr}
          </p>
        </div>

        <p className="text-slate-500">
          {formatUi(asText(howTo.orLine), {
            toSg: toSg.toLowerCase(),
            fromSg: fromSg.toLowerCase(),
            divisor: divisorStr,
          })}
        </p>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="mb-4 text-base font-semibold text-slate-200">{asText(howTo.examplesTitle)}</h3>
          <div className="space-y-6">
            {HOW_TO_LINEAR_EXAMPLES.map((n, idx) => {
              const result = convertPower(n, fromKey, toKey);
              const outStr = formatPowerResult(result, toKey);
              const wMid = powerValueToWatts(n, fromKey);
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
