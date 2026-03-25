import { convertPressure, formatPressureResult, PRESSURE_UNITS } from "@/utils/conversions";

/** Same step pattern as speed/length dedicated pages: 0.1 and 1–9. */
export const PRESSURE_TABLE_SMALL_STEPS = [0.1, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

/** Same step pattern as speed/length dedicated pages: 10–100 by 10. */
export const PRESSURE_TABLE_TENS_STEPS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;

export function PressureConversionTable({
  fromKey,
  toKey,
  values,
}: {
  fromKey: string;
  toKey: string;
  values: readonly number[] | number[];
}) {
  const fromName = PRESSURE_UNITS[fromKey]?.nameSg ?? PRESSURE_UNITS[fromKey]?.name ?? fromKey;
  const toName = PRESSURE_UNITS[toKey]?.nameSg ?? PRESSURE_UNITS[toKey]?.name ?? toKey;

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
            const out = convertPressure(v, fromKey, toKey);
            return (
              <tr key={v} className="border-b border-slate-700/80">
                <td className="py-2 pr-4 font-mono text-slate-300">{v}</td>
                <td className="py-2 font-mono text-slate-100">{formatPressureResult(out)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function PressureConversionTablesPair({ fromKey, toKey }: { fromKey: string; toKey: string }) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <PressureConversionTable fromKey={fromKey} toKey={toKey} values={PRESSURE_TABLE_SMALL_STEPS} />
      <PressureConversionTable fromKey={fromKey} toKey={toKey} values={PRESSURE_TABLE_TENS_STEPS} />
    </div>
  );
}
