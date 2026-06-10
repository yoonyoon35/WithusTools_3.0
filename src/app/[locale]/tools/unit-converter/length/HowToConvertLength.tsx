import {
  LENGTH_UNITS,
  convertLength,
  formatLengthResult,
} from "@/utils/conversions";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import { formatRatioDisplay, getExtraDerivation } from "./lengthPairContent";
import { lengthUnitLabel } from "./lengthPairUi";

const HOW_TO_EXAMPLES = [20, 50] as const;

function SubD({ unit }: { unit: string }) {
  return (
    <span className="inline">
      <em>d</em>
      <sub className="text-[0.75em] text-slate-400">({unit})</sub>
    </span>
  );
}

export default function HowToConvertLength({
  fromKey,
  toKey,
  ui,
}: {
  fromKey: string;
  toKey: string;
  ui?: unknown;
}) {
  const howTo = asMap(asMap(ui).howToConvert);
  const fromSg = lengthUnitLabel(ui, fromKey, "nameSg");
  const toSg = lengthUnitLabel(ui, toKey, "nameSg");
  const fromPlural = lengthUnitLabel(ui, fromKey, "name");
  const toPlural = lengthUnitLabel(ui, toKey, "name");
  const Lf = LENGTH_UNITS[fromKey].factor;
  const Lt = LENGTH_UNITS[toKey].factor;
  const mult = Lf / Lt;
  const divisor = Lt / Lf;

  const multStr = formatRatioDisplay(mult);
  const divisorStr = formatRatioDisplay(divisor);
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
            mult: multStr,
          })}
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            1 {fromKey} = ({Lf} m ÷ {Lt} m) {toKey} = {multStr} {toKey}
          </p>
        </div>

        {extra && <p>{extra}</p>}

        <p>
          {formatUi(asText(howTo.factorExplain), {
            fromSg: fromSg.toLowerCase(),
            toSg: toSg.toLowerCase(),
            fromKey,
            toKey,
            fromFactor: String(Lf),
            toFactor: String(Lt),
            mult: multStr,
          })}
        </p>

        <p>
          {formatUi(asText(howTo.letDFrom), {
            fromSg,
            toSg,
            fromKey,
            toKey,
          })}
        </p>

        <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <p>
            <SubD unit={toKey} /> = <SubD unit={fromKey} /> × ({Lf} / {Lt})
          </p>
        </div>

        <p>{asText(howTo.divideExplain)}</p>

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
            {HOW_TO_EXAMPLES.map((n, idx) => {
              const result = convertLength(n, fromKey, toKey);
              const outStr = formatLengthResult(result);
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
