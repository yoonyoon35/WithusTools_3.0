import { PA_PER_TORR, PRESSURE_UNITS } from "@/utils/conversions";

const UNIT_DESCRIPTIONS: Record<string, string> = {
  pa: "The pascal (Pa) is the SI unit of pressure (one newton per square meter). It is the common reference for scientific and engineering work.",
  kpa: "The kilopascal (kPa) equals 1,000 Pa. It appears in HVAC, building science, and many technical specifications.",
  hpa: "The hectopascal (hPa) equals 100 Pa. Meteorologists use hPa for surface charts; 1 hPa equals 1 millibar.",
  bar: "The bar is 100,000 Pa. It is convenient for industrial and approximate atmospheric pressures (1 bar ≈ 1 atm).",
  atm: "The standard atmosphere (atm) is defined as exactly 101,325 Pa. It links legacy chemistry and physics problems to SI.",
  psi: "Pounds-force per square inch (PSI) is common for tires, hydraulics, and US industrial equipment.",
  torr: `The torr is defined as 1/760 of a standard atmosphere (≈${PA_PER_TORR} Pa). It is widely used in vacuum science alongside pascal.`,
  mmhg: `Millimeters of mercury (mmHg) is common in medicine (e.g. blood pressure). Here it uses the same Pa per unit as torr (${PA_PER_TORR} Pa).`,
};

export function getUnitDescription(key: string): string {
  return (
    UNIT_DESCRIPTIONS[key] ??
    `${PRESSURE_UNITS[key]?.name ?? key} is a pressure unit in this converter; values bridge through pascal.`
  );
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const fromName = PRESSURE_UNITS[fromKey]?.nameSg ?? PRESSURE_UNITS[fromKey]?.name ?? fromKey;
  const toName = PRESSURE_UNITS[toKey]?.nameSg ?? PRESSURE_UNITS[toKey]?.name ?? toKey;

  if (
    (fromKey === "torr" && toKey === "mmhg") ||
    (fromKey === "mmhg" && toKey === "torr")
  ) {
    return `You are converting between ${fromName} and ${toName}. In this tool both use the same pascal factor (standard atmosphere ÷ 760), so numeric values match one-to-one between torr and mmHg.`;
  }

  return `Both ${fromName} and ${toName} are converted by fixed multiples of the pascal. Multiplying by (Pa per ${fromKey}) ÷ (Pa per ${toKey}) gives the same result as passing through pascal, keeping bar, atm, PSI, kPa, hPa, torr, and mmHg consistent on the hub.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const fromName = PRESSURE_UNITS[fromKey]?.nameSg ?? PRESSURE_UNITS[fromKey]?.name ?? fromKey;
  const toName = PRESSURE_UNITS[toKey]?.nameSg ?? PRESSURE_UNITS[toKey]?.name ?? toKey;

  const fromF = PRESSURE_UNITS[fromKey]?.factor;
  const toF = PRESSURE_UNITS[toKey]?.factor;
  if (fromF == null || toF == null) {
    return `To convert ${fromName} to ${toName}, this tool uses an intermediate value in pascal.`;
  }

  if (fromF === toF) {
    return `To convert ${fromName} to ${toName}, both units use the same pascal factor (${fromF} Pa per unit) in this tool, so the numeric value is unchanged (1:1).`;
  }

  const ratio = fromF / toF;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by (${fromF} Pa per ${fromKey}) / (${toF} Pa per ${toKey}). ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${fromF} / ${toF}). Numerically, 1 ${fromKey} equals ${ratio} ${toKey}.`
  );
}
