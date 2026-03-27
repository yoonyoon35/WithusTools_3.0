import {
  convertAngle,
  formatAngleResult,
  formatConversionTableCell,
  ANGLE_UNITS,
} from "@/utils/conversions";

/** Same step pattern as speed/length dedicated pages: 0.1 and 1–9. */
export const ANGLE_TABLE_SMALL_STEPS = [0.1, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

/** Same step pattern as speed/length dedicated pages: 10–100 by 10. */
export const ANGLE_TABLE_TENS_STEPS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;

export function AngleConversionTable({
  fromKey,
  toKey,
  values,
}: {
  fromKey: string;
  toKey: string;
  values: readonly number[] | number[];
}) {
  const fromName = ANGLE_UNITS[fromKey]?.nameSg ?? ANGLE_UNITS[fromKey]?.name ?? fromKey;
  const toName = ANGLE_UNITS[toKey]?.nameSg ?? ANGLE_UNITS[toKey]?.name ?? toKey;

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
            const out = convertAngle(v, fromKey, toKey);
            return (
              <tr key={v} className="border-b border-slate-700/80">
                <td className="py-2 pr-4 font-mono text-slate-300">{formatConversionTableCell(v)}</td>
                <td className="py-2 font-mono text-slate-100">
                  {formatConversionTableCell(formatAngleResult(out))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function AngleConversionTablesPair({ fromKey, toKey }: { fromKey: string; toKey: string }) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <AngleConversionTable fromKey={fromKey} toKey={toKey} values={ANGLE_TABLE_SMALL_STEPS} />
      <AngleConversionTable fromKey={fromKey} toKey={toKey} values={ANGLE_TABLE_TENS_STEPS} />
    </div>
  );
}
