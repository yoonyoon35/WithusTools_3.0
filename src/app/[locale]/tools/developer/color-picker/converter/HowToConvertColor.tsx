import {
  convertColorString,
  getDefaultColorInput,
  type ColorFormatKey,
} from "@/utils/colorFormatConversions";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import { getConversionProcedureSteps } from "./colorPairContent";
import { colorFormatLabel } from "./colorPairUi";

export default function HowToConvertColor({
  fromKey,
  toKey,
  ui,
}: {
  fromKey: ColorFormatKey;
  toKey: ColorFormatKey;
  ui?: unknown;
}) {
  const pageUi = asMap(ui);
  const fromL = colorFormatLabel(ui, fromKey, "short");
  const toL = colorFormatLabel(ui, toKey, "short");
  const exampleIn = getDefaultColorInput(fromKey);
  const converted = convertColorString(fromKey, toKey, exampleIn);
  const procedureSteps = getConversionProcedureSteps(fromKey, toKey, ui);
  const title = formatUi(asText(pageUi.howToConvertTitle), { from: fromL, to: toL });
  const intro1 = formatUi(asText(pageUi.howToIntro1), { from: fromL, to: toL });

  return (
    <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-200">
        {title}
      </h2>

      <div className="space-y-4 text-sm leading-relaxed text-slate-400">
        {intro1 ? <p>{intro1}</p> : null}
        {asText(pageUi.howToIntro2) ? <p>{asText(pageUi.howToIntro2)}</p> : null}

        <div>
          <h3 className="mb-3 text-base font-semibold text-slate-200">{asText(pageUi.conversionProcedure)}</h3>
          <ol className="list-decimal space-y-4 pl-5 marker:text-slate-500">
            {procedureSteps.map((step, i) => (
              <li key={i} className="pl-1">
                {step}
              </li>
            ))}
          </ol>
        </div>

        {converted.ok && (
          <div className="border-t border-slate-700 pt-6">
            <h3 className="mb-3 text-base font-semibold text-slate-200">{asText(pageUi.exampleTitle)}</h3>
            <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
              <p className="break-all">
                <span className="text-slate-500">{formatUi(asText(pageUi.inputLabel), { format: fromL })}</span> {exampleIn}
              </p>
              <p className="mt-2 break-all">
                <span className="text-slate-500">{formatUi(asText(pageUi.outputLabel), { format: toL })}</span> {converted.result}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
