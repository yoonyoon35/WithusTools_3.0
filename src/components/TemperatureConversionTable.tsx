import { convertTemperature, formatTemperatureResult, TEMPERATURE_UNITS } from "@/utils/conversions";

/** Reference inputs spanning cold / room / body / boiling (°C-oriented). */
export const TEMPERATURE_TABLE_COLD_STEPS = [-40, -20, -10, 0, 10, 20, 37, 100] as const;
/** Common Fahrenheit anchors when converting from °F. */
export const TEMPERATURE_TABLE_F_STEPS = [-40, 0, 32, 68, 86, 100, 212] as const;
/** Kelvin range examples around lab / room temperature. */
export const TEMPERATURE_TABLE_K_STEPS = [0, 200, 273.15, 300, 310.15, 373.15] as const;
/** Rankine (absolute); 491.67 R ≈ 0 °C, 671.67 R ≈ 100 °C. */
export const TEMPERATURE_TABLE_R_STEPS = [0, 400, 491.67, 536.67, 671.67, 1000] as const;

function pickStepsForFromKey(fromKey: string): readonly number[] {
  if (fromKey === "f") return TEMPERATURE_TABLE_F_STEPS;
  if (fromKey === "k") return TEMPERATURE_TABLE_K_STEPS;
  if (fromKey === "r") return TEMPERATURE_TABLE_R_STEPS;
  return TEMPERATURE_TABLE_COLD_STEPS;
}

export function TemperatureConversionTable({
  fromKey,
  toKey,
  values,
}: {
  fromKey: string;
  toKey: string;
  values: readonly number[] | number[];
}) {
  const fromName = TEMPERATURE_UNITS[fromKey].nameSg ?? TEMPERATURE_UNITS[fromKey].name;
  const toName = TEMPERATURE_UNITS[toKey].nameSg ?? TEMPERATURE_UNITS[toKey].name;

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
            const out = convertTemperature(v, fromKey, toKey);
            return (
              <tr key={v} className="border-b border-slate-700/80">
                <td className="py-2 pr-4 font-mono text-slate-300">{v}</td>
                <td className="py-2 font-mono text-slate-100">{formatTemperatureResult(out)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function TemperatureConversionTablesPair({
  fromKey,
  toKey,
}: {
  fromKey: string;
  toKey: string;
}) {
  const steps = pickStepsForFromKey(fromKey);
  const mid = Math.ceil(steps.length / 2);
  const first = steps.slice(0, mid);
  const second = steps.slice(mid);
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <TemperatureConversionTable fromKey={fromKey} toKey={toKey} values={first} />
      <TemperatureConversionTable fromKey={fromKey} toKey={toKey} values={second} />
    </div>
  );
}
