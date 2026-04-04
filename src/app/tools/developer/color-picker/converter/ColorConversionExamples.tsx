import {
  COLOR_FORMAT_LABELS,
  convertColorString,
  type ColorFormatKey,
} from "@/utils/colorFormatConversions";

const SAMPLE_INPUTS: Partial<Record<ColorFormatKey, string[]>> = {
  hex: ["#000000", "#FFFFFF", "#3498DB"],
  rgb: ["0, 0, 0", "255, 255, 255", "231, 76, 60"],
  rgba: ["rgba(0,0,0,0.5)", "rgba(255,255,255,1)", "rgba(46, 204, 113, 0.75)"],
  hsl: ["hsl(0, 100%, 50%)", "hsl(120, 100%, 25%)", "hsl(204, 70%, 53%)"],
  hsv: ["hsv(0, 100%, 100%)", "hsv(120, 100%, 50%)", "hsv(204, 76%, 86%)"],
  cmyk: ["cmyk(0%, 0%, 0%, 100%)", "cmyk(0%, 0%, 0%, 0%)", "cmyk(0%, 63%, 54%, 9%)"],
};

export default function ColorConversionExamples({
  fromKey,
  toKey,
}: {
  fromKey: ColorFormatKey;
  toKey: ColorFormatKey;
}) {
  const samples = SAMPLE_INPUTS[fromKey] ?? [];
  const rows = samples
    .map((input) => {
      const out = convertColorString(fromKey, toKey, input);
      return out.ok ? { input, output: out.result } : null;
    })
    .filter(Boolean) as { input: string; output: string }[];

  if (rows.length === 0) return null;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">Example conversions</h2>
      <p className="mb-4 text-sm text-slate-500">
        Sample {COLOR_FORMAT_LABELS[fromKey].short} values and the matching {COLOR_FORMAT_LABELS[toKey].short}{" "}
        output using the same rules as the calculator.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-600 text-slate-400">
              <th className="py-2 pr-4 font-medium">{COLOR_FORMAT_LABELS[fromKey].short} input</th>
              <th className="py-2 font-medium">{COLOR_FORMAT_LABELS[toKey].short} output</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-700/80">
                <td className="py-3 pr-4 font-mono text-slate-300 break-all">{row.input}</td>
                <td className="py-3 font-mono text-slate-200 break-all">{row.output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
