import {
  COLOR_FORMAT_LABELS,
  convertColorString,
  getDefaultColorInput,
  type ColorFormatKey,
} from "@/utils/colorFormatConversions";
import { getConversionProcedureSteps } from "./colorPairContent";

export default function HowToConvertColor({
  fromKey,
  toKey,
}: {
  fromKey: ColorFormatKey;
  toKey: ColorFormatKey;
}) {
  const fromL = COLOR_FORMAT_LABELS[fromKey].short;
  const toL = COLOR_FORMAT_LABELS[toKey].short;
  const exampleIn = getDefaultColorInput(fromKey);
  const converted = convertColorString(fromKey, toKey, exampleIn);
  const procedureSteps = getConversionProcedureSteps(fromKey, toKey);

  return (
    <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-200">
        How to convert {fromL} to {toL}
      </h2>

      <div className="space-y-4 text-sm leading-relaxed text-slate-400">
        <p>
          Enter a valid <span className="font-medium text-slate-200">{fromL}</span> value in the calculator.
          The tool follows the pipeline below: parse your input, hold the color as sRGB (with alpha when relevant),
          then format the result as <span className="font-medium text-slate-200">{toL}</span>.
        </p>
        <p>
          Accepted shapes include CSS-like functions (e.g. <span className="font-mono text-slate-300">rgb(...)</span>,{" "}
          <span className="font-mono text-slate-300">hsl(...)</span>) and compact comma-separated numbers where
          appropriate. Hex may include or omit the leading <span className="font-mono text-slate-300">#</span>.
        </p>

        <div>
          <h3 className="mb-3 text-base font-semibold text-slate-200">Conversion procedure</h3>
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
            <h3 className="mb-3 text-base font-semibold text-slate-200">Example</h3>
            <div className="rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
              <p className="break-all">
                <span className="text-slate-500">Input ({fromL}):</span> {exampleIn}
              </p>
              <p className="mt-2 break-all">
                <span className="text-slate-500">Output ({toL}):</span> {converted.result}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
