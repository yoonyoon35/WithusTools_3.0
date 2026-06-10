import {
  convertTime,
  formatConversionTableCell,
  formatTimeResult,
  TIME_UNITS,
} from "@/utils/conversions";
import { timeUnitLabel } from "@/app/[locale]/tools/unit-converter/time/timePairUi";

export const TIME_TABLE_SMALL_STEPS = [0.1, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export const TIME_TABLE_TENS_STEPS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;

export function TimeConversionTable({
  fromKey,
  toKey,
  values,
  ui,
}: {
  fromKey: string;
  toKey: string;
  values: readonly number[] | number[];
  ui?: unknown;
}) {
  const fromName = ui
    ? timeUnitLabel(ui, fromKey, "nameSg")
    : TIME_UNITS[fromKey].nameSg ?? TIME_UNITS[fromKey].name;
  const toName = ui
    ? timeUnitLabel(ui, toKey, "nameSg")
    : TIME_UNITS[toKey].nameSg ?? TIME_UNITS[toKey].name;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[280px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-600">
            <th scope="col" className="py-2 pr-4 text-left font-semibold text-slate-200">
              {fromName} ({fromKey})
            </th>
            <th scope="col" className="py-2 text-left font-semibold text-slate-200">
              {toName} ({toKey})
            </th>
          </tr>
        </thead>
        <tbody>
          {values.map((v) => {
            const out = convertTime(v, fromKey, toKey);
            return (
              <tr key={v} className="border-b border-slate-700/80">
                <td className="py-2 pr-4 font-mono text-slate-300">{formatConversionTableCell(v)}</td>
                <td className="py-2 font-mono text-slate-100">
                  {formatConversionTableCell(formatTimeResult(out))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function TimeConversionTablesPair({
  fromKey,
  toKey,
  ui,
}: {
  fromKey: string;
  toKey: string;
  ui?: unknown;
}) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <TimeConversionTable fromKey={fromKey} toKey={toKey} values={TIME_TABLE_SMALL_STEPS} ui={ui} />
      <TimeConversionTable fromKey={fromKey} toKey={toKey} values={TIME_TABLE_TENS_STEPS} ui={ui} />
    </div>
  );
}
