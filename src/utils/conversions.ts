/**
 * Shared length conversion utilities (factors relative to meters).
 * Keep in sync with length unit definitions used in UnitConverter.
 */

export interface LengthUnitDef {
  name: string;
  nameSg?: string;
  factor: number;
}

/** SI / metric / imperial length units — factors are meters per unit */
export const LENGTH_UNITS: Record<string, LengthUnitDef> = {
  nmi: { name: "Nautical Miles", nameSg: "Nautical Mile", factor: 1852 },
  mi: { name: "Miles", nameSg: "Mile", factor: 1609.344 },
  km: { name: "Kilometers", nameSg: "Kilometer", factor: 1000 },
  m: { name: "Meters", nameSg: "Meter", factor: 1 },
  yd: { name: "Yards", nameSg: "Yard", factor: 0.9144 },
  ft: { name: "Feet", nameSg: "Feet", factor: 0.3048 },
  in: { name: "Inches", nameSg: "Inch", factor: 0.0254 },
  cm: { name: "Centimeters", nameSg: "Centimeter", factor: 0.01 },
  mm: { name: "Millimeters", nameSg: "Millimeter", factor: 0.001 },
  um: { name: "Micrometers", nameSg: "Micrometer", factor: 0.000001 },
  nm: { name: "Nanometers", nameSg: "Nanometer", factor: 0.000000001 },
};

/** Preferred URL segment per unit key (readable slugs) */
export const LENGTH_KEY_TO_SLUG: Record<string, string> = {
  nmi: "nmi",
  mi: "mile",
  km: "km",
  m: "m",
  yd: "yard",
  ft: "feet",
  in: "inch",
  cm: "cm",
  mm: "mm",
  um: "um",
  nm: "nm",
};

/** Map URL slug fragments (lowercase) to unit keys */
const SLUG_TO_KEY: Record<string, string> = {
  // keys
  nmi: "nmi",
  mi: "mi",
  mile: "mi",
  miles: "mi",
  km: "km",
  kilometer: "km",
  kilometers: "km",
  kilometre: "km",
  kilometres: "km",
  m: "m",
  meter: "m",
  meters: "m",
  metre: "m",
  metres: "m",
  yd: "yd",
  yard: "yd",
  yards: "yd",
  ft: "ft",
  foot: "ft",
  feet: "ft",
  in: "in",
  inch: "in",
  inches: "in",
  cm: "cm",
  centimeter: "cm",
  centimeters: "cm",
  centimetre: "cm",
  centimetres: "cm",
  mm: "mm",
  millimeter: "mm",
  millimeters: "mm",
  millimetre: "mm",
  millimetres: "mm",
  um: "um",
  micrometer: "um",
  micrometers: "um",
  micrometre: "um",
  micrometres: "um",
  nm: "nm",
  nanometer: "nm",
  nanometers: "nm",
  nanometre: "nm",
  nanometres: "nm",
};

export function formatWithThousands(value: number | string): string {
  const str = typeof value === "string" ? value : String(value);
  const isNeg = str.startsWith("-");
  const s = isNeg ? str.slice(1) : str;
  const [intPart, decPart] = s.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const result = decPart != null ? `${withCommas}.${decPart}` : withCommas;
  return isNeg ? `-${result}` : result;
}

export function getLengthKeys(): string[] {
  return Object.keys(LENGTH_UNITS);
}

export function isValidLengthKey(key: string): boolean {
  return key in LENGTH_UNITS;
}

export function getCanonicalLengthSlug(fromKey: string, toKey: string): string {
  const a = LENGTH_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = LENGTH_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

/**
 * Parse "cm-to-mm" or "feet-to-inch" into unit keys.
 */
export function parseLengthPairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = SLUG_TO_KEY[fromPart];
  const to = SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidLengthKey(from) || !isValidLengthKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function getLengthMultiplier(fromKey: string, toKey: string): number {
  const from = LENGTH_UNITS[fromKey].factor;
  const to = LENGTH_UNITS[toKey].factor;
  return from / to;
}

export function convertLength(value: number, fromKey: string, toKey: string): number {
  return value * getLengthMultiplier(fromKey, toKey);
}

export function formatLengthResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const s = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return s === "-0" ? "0" : s;
}

export function getLengthFormulaLine(
  value: number,
  fromKey: string,
  toKey: string
): string {
  const fromFactor = LENGTH_UNITS[fromKey].factor;
  const toFactor = LENGTH_UNITS[toKey].factor;
  const result = convertLength(value, fromKey, toKey);
  return `${formatWithThousands(value)} ${fromKey} × (${formatWithThousands(fromFactor)} / ${formatWithThousands(toFactor)}) = ${formatWithThousands(formatLengthResult(result))} ${toKey}`;
}

export type LengthSystem = "metric" | "imperial" | "nautical";

export function getLengthSystem(key: string): LengthSystem {
  if (key === "nmi") return "nautical";
  if (key === "mi" || key === "yd" || key === "ft" || key === "in") return "imperial";
  return "metric";
}

/** Same 8 units as the Length Converter “dedicated pairs” hub (excludes nmi, µm, nm). */
export const LENGTH_HUB_KEYS = ["m", "km", "cm", "mm", "in", "ft", "mi", "yd"] as const;

/** All converter paths from one hub unit to every other hub unit (7 links). */
export function getOutboundLengthHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidLengthKey(hubKey)) return [];
  return LENGTH_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/length/${getCanonicalLengthSlug(hubKey, toKey)}`,
  }));
}

// --- Weight (factors are grams per unit; aligned with UnitConverter) ---

export interface WeightUnitDef {
  name: string;
  nameSg?: string;
  factor: number;
}

export const WEIGHT_UNITS: Record<string, WeightUnitDef> = {
  t: { name: "Metric Tons", nameSg: "Metric Ton", factor: 1_000_000 },
  lton: { name: "Long Tons (UK)", nameSg: "Long Ton (UK)", factor: 1016046.9088 },
  ust: { name: "US Tons (Short)", nameSg: "US Ton (Short)", factor: 907184.74 },
  st: { name: "Stone", factor: 6350.29318 },
  kg: { name: "Kilograms", nameSg: "Kilogram", factor: 1000 },
  lb: { name: "Pounds", nameSg: "Pound", factor: 453.59237 },
  g: { name: "Grams", nameSg: "Gram", factor: 1 },
  oz: { name: "Ounces", nameSg: "Ounce", factor: 28.349523125 },
  mg: { name: "Milligrams", nameSg: "Milligram", factor: 0.001 },
  ug: { name: "Micrograms", nameSg: "Microgram", factor: 0.000001 },
};

/** Preferred URL segment per unit key */
export const WEIGHT_KEY_TO_SLUG: Record<string, string> = {
  t: "metric-ton",
  lton: "long-ton",
  ust: "us-ton",
  st: "stone",
  kg: "kg",
  lb: "lb",
  g: "g",
  oz: "oz",
  mg: "mg",
  ug: "ug",
};

const WEIGHT_SLUG_TO_KEY: Record<string, string> = {
  t: "t",
  "metric-ton": "t",
  tonne: "t",
  lton: "lton",
  "long-ton": "lton",
  "uk-ton": "lton",
  ust: "ust",
  "us-ton": "ust",
  "short-ton": "ust",
  st: "st",
  stone: "st",
  stones: "st",
  kg: "kg",
  kilogram: "kg",
  kilograms: "kg",
  lb: "lb",
  lbs: "lb",
  pound: "lb",
  pounds: "lb",
  g: "g",
  gram: "g",
  grams: "g",
  oz: "oz",
  ounce: "oz",
  ounces: "oz",
  mg: "mg",
  milligram: "mg",
  milligrams: "mg",
  ug: "ug",
  microgram: "ug",
  micrograms: "ug",
};

export function getWeightKeys(): string[] {
  return Object.keys(WEIGHT_UNITS);
}

export function isValidWeightKey(key: string): boolean {
  return key in WEIGHT_UNITS;
}

export function getCanonicalWeightSlug(fromKey: string, toKey: string): string {
  const a = WEIGHT_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = WEIGHT_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

export function parseWeightPairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = WEIGHT_SLUG_TO_KEY[fromPart];
  const to = WEIGHT_SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidWeightKey(from) || !isValidWeightKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function getWeightMultiplier(fromKey: string, toKey: string): number {
  const from = WEIGHT_UNITS[fromKey].factor;
  const to = WEIGHT_UNITS[toKey].factor;
  return from / to;
}

export function convertWeight(value: number, fromKey: string, toKey: string): number {
  return value * getWeightMultiplier(fromKey, toKey);
}

export function formatWeightResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return str === "-0" ? "0" : str;
}

export function getWeightFormulaLine(
  value: number,
  fromKey: string,
  toKey: string
): string {
  const fromFactor = WEIGHT_UNITS[fromKey].factor;
  const toFactor = WEIGHT_UNITS[toKey].factor;
  const result = convertWeight(value, fromKey, toKey);
  return `${formatWithThousands(value)} ${fromKey} × (${formatWithThousands(fromFactor)} / ${formatWithThousands(toFactor)}) = ${formatWithThousands(formatWeightResult(result))} ${toKey}`;
}

export type WeightSystem = "metric" | "imperial" | "us_mass";

export function getWeightSystem(key: string): WeightSystem {
  if (key === "lb" || key === "oz" || key === "st" || key === "lton") return "imperial";
  if (key === "ust") return "us_mass";
  return "metric";
}

/** Hub list: common cooking, shipping, and body-weight units (excludes µg, long ton). */
export const WEIGHT_HUB_KEYS = ["kg", "g", "mg", "lb", "oz", "t", "st", "ust"] as const;

export function getOutboundWeightHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidWeightKey(hubKey)) return [];
  return WEIGHT_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/weight/${getCanonicalWeightSlug(hubKey, toKey)}`,
  }));
}
