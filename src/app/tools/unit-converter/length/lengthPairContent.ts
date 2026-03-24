import {
  LENGTH_UNITS,
  getLengthMultiplier,
  getLengthSystem,
  type LengthSystem,
} from "@/utils/conversions";

const UNIT_DESCRIPTIONS: Record<string, string> = {
  nmi:
    "The nautical mile is a non-SI unit of length used in air and sea navigation. It is defined as exactly 1,852 meters (about 1.15078 statute miles).",
  mi:
    "The statute mile is a US customary and imperial unit equal to exactly 1,609.344 meters. It is widely used for road distances in the United States and the United Kingdom.",
  km:
    "The kilometer is an SI unit equal to 1,000 meters. It is the standard unit for longer distances in most countries that use the metric system.",
  m:
    "The meter is the SI base unit of length, defined using the speed of light. It is the foundation for centimeters, millimeters, and kilometers.",
  yd:
    "The yard is an imperial and US customary unit equal to 0.9144 meters exactly. It appears in sports fields, fabric, and everyday imperial measurements.",
  ft:
    "The foot is an imperial and US customary unit equal to exactly 0.3048 meters. Twelve inches make one foot; it is common in construction and human-scale dimensions.",
  in:
    "The inch is an imperial and US customary unit equal to exactly 0.0254 meters. Twelve inches equal one foot; it is used for screen sizes, tools, and fine measurements.",
  cm:
    "The centimeter is a metric unit equal to one hundredth of a meter (0.01 m). It is convenient for everyday objects, paper sizes, and body measurements.",
  mm:
    "The millimeter is a metric unit equal to one thousandth of a meter (0.001 m). It is used for precision engineering, 3D printing, and small tolerances.",
  um:
    "The micrometer (micron) is one millionth of a meter. It is used in microscopy, manufacturing tolerances, and fiber optics.",
  nm:
    "The nanometer is one billionth of a meter. It describes wavelengths of light, semiconductor features, and molecular scales.",
};

export function getUnitDescription(key: string): string {
  return UNIT_DESCRIPTIONS[key] ?? `${LENGTH_UNITS[key]?.name ?? key} is a standard length unit in this converter.`;
}

function systemLabel(s: LengthSystem): string {
  if (s === "nautical") return "nautical (navigation)";
  if (s === "imperial") return "US customary / imperial";
  return "metric (SI)";
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const fromSys = getLengthSystem(fromKey);
  const toSys = getLengthSystem(toKey);
  const mult = getLengthMultiplier(fromKey, toKey);

  if (fromSys === toSys && fromSys === "metric") {
    return `Both units are ${systemLabel("metric")} and tied to the meter. Converting between them uses powers of ten (or simple rational factors), so the relationship is exact in decimal arithmetic. The factor from ${LENGTH_UNITS[fromKey].nameSg ?? LENGTH_UNITS[fromKey].name} to ${LENGTH_UNITS[toKey].nameSg ?? LENGTH_UNITS[toKey].name} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  if (fromSys === toSys && fromSys === "imperial") {
    return `Both units belong to ${systemLabel("imperial")} length. Conversions often use simple ratios (for example inches and feet), while miles relate to yards and feet through fixed definitions. The numeric factor used here is traceable to the international inch (0.0254 m) and related definitions.`;
  }

  if (fromSys !== toSys) {
    return `You are converting between ${systemLabel(fromSys)} (${LENGTH_UNITS[fromKey].name}) and ${systemLabel(toSys)} (${LENGTH_UNITS[toKey].name}). Metric units are decimal; imperial units use inches, feet, yards, and miles tied to the international yard definition. Nautical miles are defined in meters (1 nmi = 1,852 m). This tool uses SI-based factors so results stay consistent with modern standards.`;
  }

  return `Length units are converted via their exact definitions in meters. The multiplier between ${fromKey} and ${toKey} is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const m = getLengthMultiplier(fromKey, toKey);
  const fromName = LENGTH_UNITS[fromKey].nameSg ?? LENGTH_UNITS[fromKey].name;
  const toName = LENGTH_UNITS[toKey].nameSg ?? LENGTH_UNITS[toKey].name;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of meters per ${fromKey} divided by meters per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${LENGTH_UNITS[fromKey].factor} / ${LENGTH_UNITS[toKey].factor}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

/** Readable numeric string for documentation (ratios, divisors) */
export function formatRatioDisplay(n: number): string {
  if (!Number.isFinite(n)) return "";
  const abs = Math.abs(n);
  if (abs >= 1e7 || (abs > 0 && abs < 1e-6)) return n.toExponential(8);
  return n
    .toFixed(14)
    .replace(/\.?0+$/, "");
}

/**
 * Optional derivation line (inches, metric steps) for “How to convert” sections.
 */
export function getExtraDerivation(fromKey: string, toKey: string): string | null {
  if (fromKey === "cm" && toKey === "ft") {
    const m = getLengthMultiplier("cm", "ft");
    return `1 centimeter is also equal to 1 ÷ 2.54 ÷ 12 feet (via inches: 1 cm = 1/2.54 in, 1 ft = 12 in), which equals ${formatRatioDisplay(m)} ft.`;
  }
  if (fromKey === "cm" && toKey === "in") {
    return `1 centimeter = 1/2.54 inch (international inch: 1 in = 2.54 cm).`;
  }
  if (fromKey === "in" && toKey === "ft") {
    return `1 inch = 1/12 foot (12 inches per foot).`;
  }
  if (fromKey === "ft" && toKey === "in") {
    return `1 foot = 12 inches (exactly).`;
  }
  if (fromKey === "cm" && toKey === "mm") {
    return `1 centimeter = 10 millimeters (metric).`;
  }
  if (fromKey === "mm" && toKey === "cm") {
    return `1 millimeter = 1/10 centimeter.`;
  }
  return null;
}
