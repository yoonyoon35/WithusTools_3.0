import { MACH_TO_MPS_ISA, SPEED_OF_LIGHT_MPS, SPEED_UNITS } from "@/utils/conversions";

const UNIT_DESCRIPTIONS: Record<string, string> = {
  mps:
    "Meters per second is the SI derived unit for speed. It is the standard in physics and engineering for expressing velocity.",
  kph:
    "Kilometers per hour is common for road speeds, weather reports, and everyday travel outside countries that use miles per hour.",
  mph:
    "Miles per hour is used for road speeds primarily in the United States, the United Kingdom, and some other countries.",
  knots:
    "The knot is one nautical mile per hour (1852 m/h). It is standard in maritime and aviation navigation.",
  fps:
    "Feet per second appears in ballistics, engineering, and some US sports contexts; it relates to imperial length per second.",
  mach:
    `Mach number is the ratio of speed to the local speed of sound. Here Mach 1 is fixed at ${MACH_TO_MPS_ISA} m/s (ISA sea level, ~15 °C) for consistent numeric conversion.`,
  beaufort:
    "The Beaufort wind force scale (0–12) describes mean wind at 10 m height. This tool maps forces to midpoint m/s (WMO-style bands) and maps m/s back to a force index.",
  c: `The speed of light in vacuum is exactly ${SPEED_OF_LIGHT_MPS} m/s (SI definition). Enter speeds as a fraction of c (e.g. 0.001 c).`,
};

export function getUnitDescription(key: string): string {
  return (
    UNIT_DESCRIPTIONS[key] ??
    `${SPEED_UNITS[key]?.name ?? key} is a speed unit in this converter (values bridge through meters per second unless noted for Beaufort).`
  );
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const fromName = SPEED_UNITS[fromKey]?.nameSg ?? SPEED_UNITS[fromKey]?.name ?? fromKey;
  const toName = SPEED_UNITS[toKey]?.nameSg ?? SPEED_UNITS[toKey]?.name ?? toKey;

  if (fromKey === "beaufort" || toKey === "beaufort") {
    return `You are converting between ${fromName} and ${toName}. Beaufort is a discrete wind scale; conversions use WMO mean-wind m/s bands at 10 m. Linear units (m/s, km/h, mph, knots, etc.) bridge through an equivalent m/s value. Mach and c use fixed m/s definitions for Mach 1 and vacuum c.`;
  }

  if (fromKey === "c" || toKey === "c") {
    return `You are converting between ${fromName} and ${toName}. Speeds as a fraction of c are multiplied by ${SPEED_OF_LIGHT_MPS} m/s to compare with everyday units.`;
  }

  if (fromKey === "mach" || toKey === "mach") {
    return `You are converting between ${fromName} and ${toName}. Mach is treated as multiples of Mach 1 = ${MACH_TO_MPS_ISA} m/s (ISA reference). Actual Mach depends on altitude and temperature; this tool uses one reference sound speed for reproducible numbers.`;
  }

  return `Both ${fromName} and ${toName} are expressed as fixed multiples of meters per second in this tool. Converting multiplies by the ratio of m/s per ${fromKey} to m/s per ${toKey}, so results stay consistent with SI-based definitions (international mile, knot, feet, etc.).`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const fromName = SPEED_UNITS[fromKey]?.nameSg ?? SPEED_UNITS[fromKey]?.name ?? fromKey;
  const toName = SPEED_UNITS[toKey]?.nameSg ?? SPEED_UNITS[toKey]?.name ?? toKey;

  if (fromKey === "beaufort" || toKey === "beaufort") {
    return `Beaufort conversions use the WMO-style mean wind m/s ranges at 10 m. From Beaufort: your value is rounded to force 0–12, then the midpoint m/s for that force is used. To Beaufort: the m/s equivalent of your input is classified into a force 0–12. Other pairs with ${fromName} and ${toName} still pass through that m/s bridge.`;
  }

  const fromF = SPEED_UNITS[fromKey]?.factor;
  const toF = SPEED_UNITS[toKey]?.factor;
  if (fromF == null || toF == null) {
    return `To convert ${fromName} to ${toName}, this tool uses an intermediate value in meters per second.`;
  }
  const ratio = fromF / toF;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by (${fromF} m/s per ${fromKey}) / (${toF} m/s per ${toKey}). ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${fromF} / ${toF}). Numerically, 1 ${fromKey} equals ${ratio} ${toKey}.`
  );
}
