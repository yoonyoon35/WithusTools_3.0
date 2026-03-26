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

// --- Area (factors are square meters per unit; aligned with UnitConverter) ---

export interface AreaUnitDef {
  name: string;
  nameSg?: string;
  factor: number;
}

export const AREA_UNITS: Record<string, AreaUnitDef> = {
  mi2: { name: "Square Miles", nameSg: "Square Mile", factor: 2589988.110336 },
  km2: { name: "Square Kilometers", nameSg: "Square Kilometer", factor: 1_000_000 },
  ha: { name: "Hectares", nameSg: "Hectare", factor: 10000 },
  ac: { name: "Acres", nameSg: "Acre", factor: 4046.8564224 },
  m2: { name: "Square Meters", nameSg: "Square Meter", factor: 1 },
  yd2: { name: "Square Yards", nameSg: "Square Yard", factor: 0.83612736 },
  ft2: { name: "Square Feet", nameSg: "Square Feet", factor: 0.09290304 },
  cm2: { name: "Square Centimeters", nameSg: "Square Centimeter", factor: 0.0001 },
  in2: { name: "Square Inches", nameSg: "Square Inch", factor: 0.00064516 },
};

export const AREA_KEY_TO_SLUG: Record<string, string> = {
  mi2: "sq-mile",
  km2: "sq-km",
  ha: "hectare",
  ac: "acre",
  m2: "sq-m",
  yd2: "sq-yard",
  ft2: "sq-ft",
  cm2: "sq-cm",
  in2: "sq-inch",
};

const AREA_SLUG_TO_KEY: Record<string, string> = {
  mi2: "mi2",
  "sq-mile": "mi2",
  "square-mile": "mi2",
  km2: "km2",
  "sq-km": "km2",
  "square-km": "km2",
  "square-kilometer": "km2",
  ha: "ha",
  hectare: "ha",
  hectares: "ha",
  ac: "ac",
  acre: "ac",
  acres: "ac",
  m2: "m2",
  "sq-m": "m2",
  "square-m": "m2",
  "square-meter": "m2",
  "square-metre": "m2",
  yd2: "yd2",
  "sq-yard": "yd2",
  "square-yard": "yd2",
  ft2: "ft2",
  "sq-ft": "ft2",
  "square-ft": "ft2",
  "square-feet": "ft2",
  "square-foot": "ft2",
  cm2: "cm2",
  "sq-cm": "cm2",
  "square-cm": "cm2",
  "square-centimeter": "cm2",
  "square-centimetre": "cm2",
  in2: "in2",
  "sq-inch": "in2",
  "square-inch": "in2",
  "square-inches": "in2",
};

export function getAreaKeys(): string[] {
  return Object.keys(AREA_UNITS);
}

export function isValidAreaKey(key: string): boolean {
  return key in AREA_UNITS;
}

export function getCanonicalAreaSlug(fromKey: string, toKey: string): string {
  const a = AREA_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = AREA_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

export function parseAreaPairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = AREA_SLUG_TO_KEY[fromPart];
  const to = AREA_SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidAreaKey(from) || !isValidAreaKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function getAreaMultiplier(fromKey: string, toKey: string): number {
  const from = AREA_UNITS[fromKey].factor;
  const to = AREA_UNITS[toKey].factor;
  return from / to;
}

export function convertArea(value: number, fromKey: string, toKey: string): number {
  return value * getAreaMultiplier(fromKey, toKey);
}

export function formatAreaResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return str === "-0" ? "0" : str;
}

export function getAreaFormulaLine(
  value: number,
  fromKey: string,
  toKey: string
): string {
  const fromFactor = AREA_UNITS[fromKey].factor;
  const toFactor = AREA_UNITS[toKey].factor;
  const result = convertArea(value, fromKey, toKey);
  return `${formatWithThousands(value)} ${fromKey} × (${formatWithThousands(fromFactor)} / ${formatWithThousands(toFactor)}) = ${formatWithThousands(formatAreaResult(result))} ${toKey}`;
}

export type AreaSystem = "metric" | "imperial";

export function getAreaSystem(key: string): AreaSystem {
  if (key === "mi2" || key === "yd2" || key === "ft2" || key === "in2" || key === "ac") {
    return "imperial";
  }
  return "metric";
}

/** Hub list: common land and floor-area units (excludes cm²). */
export const AREA_HUB_KEYS = ["m2", "km2", "ha", "ac", "ft2", "yd2", "in2", "mi2"] as const;

export function getOutboundAreaHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidAreaKey(hubKey)) return [];
  return AREA_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/area/${getCanonicalAreaSlug(hubKey, toKey)}`,
  }));
}

// --- Volume (factors are liters per unit; aligned with UnitConverter) ---

export interface VolumeUnitDef {
  name: string;
  nameSg?: string;
  factor: number;
}

export const VOLUME_UNITS: Record<string, VolumeUnitDef> = {
  m3: { name: "Cubic Meters", nameSg: "Cubic Meter", factor: 1000 },
  ukgal: { name: "Gallons (UK)", nameSg: "Gallon (UK)", factor: 4.54609 },
  gal: { name: "Gallons (US)", nameSg: "Gallon (US)", factor: 3.78541178 },
  ft3: { name: "Cubic Feet", nameSg: "Cubic Feet", factor: 28.316846592 },
  l: { name: "Liters", nameSg: "Liter", factor: 1 },
  ukqt: { name: "Quarts (UK)", nameSg: "Quart (UK)", factor: 1.1365225 },
  ukpt: { name: "Pints (UK)", nameSg: "Pint (UK)", factor: 0.56826125 },
  qt: { name: "Quarts (US)", nameSg: "Quart (US)", factor: 0.946352946 },
  pt: { name: "Pints (US)", nameSg: "Pint (US)", factor: 0.473176473 },
  ukcup: { name: "Cups (UK)", nameSg: "Cup (UK)", factor: 0.284130625 },
  cup: { name: "Cups (US)", nameSg: "Cup (US)", factor: 0.2365882365 },
  in3: { name: "Cubic Inches", nameSg: "Cubic Inches", factor: 0.016387064 },
  floz: { name: "Fluid Ounces (US)", nameSg: "Fluid Ounce (US)", factor: 0.0295735295625 },
  ukfloz: { name: "Fluid Ounces (UK)", nameSg: "Fluid Ounce (UK)", factor: 0.0284130625 },
  tbsp: { name: "Tablespoons (US)", nameSg: "Tablespoon (US)", factor: 0.01478676478125 },
  uktbsp: { name: "Tablespoons (UK)", nameSg: "Tablespoon (UK)", factor: 0.01420653125 },
  tsp: { name: "Teaspoons (US)", nameSg: "Teaspoon (US)", factor: 0.00492892159375 },
  uktsp: { name: "Teaspoons (UK)", nameSg: "Teaspoon (UK)", factor: 0.004735510416667 },
};

export const VOLUME_KEY_TO_SLUG: Record<string, string> = {
  m3: "cubic-meter",
  ukgal: "uk-gallon",
  gal: "us-gallon",
  ft3: "cubic-ft",
  l: "liter",
  ukqt: "uk-quart",
  ukpt: "uk-pint",
  qt: "us-quart",
  pt: "us-pint",
  ukcup: "uk-cup",
  cup: "us-cup",
  in3: "cubic-inch",
  floz: "us-fluid-ounce",
  ukfloz: "uk-fluid-ounce",
  tbsp: "us-tablespoon",
  uktbsp: "uk-tablespoon",
  tsp: "us-teaspoon",
  uktsp: "uk-teaspoon",
};

const VOLUME_SLUG_TO_KEY: Record<string, string> = {
  m3: "m3",
  "cubic-meter": "m3",
  "cubic-metre": "m3",
  ukgal: "ukgal",
  "uk-gallon": "ukgal",
  gal: "gal",
  "us-gallon": "gal",
  ft3: "ft3",
  "cubic-ft": "ft3",
  "cubic-feet": "ft3",
  l: "l",
  liter: "l",
  liters: "l",
  litre: "l",
  litres: "l",
  ukqt: "ukqt",
  "uk-quart": "ukqt",
  ukpt: "ukpt",
  "uk-pint": "ukpt",
  qt: "qt",
  "us-quart": "qt",
  pt: "pt",
  "us-pint": "pt",
  ukcup: "ukcup",
  "uk-cup": "ukcup",
  cup: "cup",
  "us-cup": "cup",
  in3: "in3",
  "cubic-inch": "in3",
  "cubic-inches": "in3",
  floz: "floz",
  "us-fluid-ounce": "floz",
  ukfloz: "ukfloz",
  "uk-fluid-ounce": "ukfloz",
  tbsp: "tbsp",
  "us-tablespoon": "tbsp",
  uktbsp: "uktbsp",
  "uk-tablespoon": "uktbsp",
  tsp: "tsp",
  "us-teaspoon": "tsp",
  uktsp: "uktsp",
  "uk-teaspoon": "uktsp",
};

export function getVolumeKeys(): string[] {
  return Object.keys(VOLUME_UNITS);
}

export function isValidVolumeKey(key: string): boolean {
  return key in VOLUME_UNITS;
}

export function getCanonicalVolumeSlug(fromKey: string, toKey: string): string {
  const a = VOLUME_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = VOLUME_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

export function parseVolumePairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = VOLUME_SLUG_TO_KEY[fromPart];
  const to = VOLUME_SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidVolumeKey(from) || !isValidVolumeKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function getVolumeMultiplier(fromKey: string, toKey: string): number {
  const from = VOLUME_UNITS[fromKey].factor;
  const to = VOLUME_UNITS[toKey].factor;
  return from / to;
}

export function convertVolume(value: number, fromKey: string, toKey: string): number {
  return value * getVolumeMultiplier(fromKey, toKey);
}

export function formatVolumeResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return str === "-0" ? "0" : str;
}

export function getVolumeFormulaLine(
  value: number,
  fromKey: string,
  toKey: string
): string {
  const fromFactor = VOLUME_UNITS[fromKey].factor;
  const toFactor = VOLUME_UNITS[toKey].factor;
  const result = convertVolume(value, fromKey, toKey);
  return `${formatWithThousands(value)} ${fromKey} × (${formatWithThousands(fromFactor)} / ${formatWithThousands(toFactor)}) = ${formatWithThousands(formatVolumeResult(result))} ${toKey}`;
}

export type VolumeSystem = "metric" | "us" | "uk";

export function getVolumeSystem(key: string): VolumeSystem {
  if (
    key === "ukgal" ||
    key === "ukqt" ||
    key === "ukpt" ||
    key === "ukcup" ||
    key === "ukfloz" ||
    key === "uktbsp" ||
    key === "uktsp"
  ) {
    return "uk";
  }
  if (key === "m3" || key === "l") return "metric";
  return "us";
}

/** Hub: liter, m³, US gal, US fl oz, ft³, US tbsp, US tsp, in³ (8×7 = 56 pair pages). */
export const VOLUME_HUB_KEYS = ["l", "m3", "gal", "floz", "ft3", "tbsp", "tsp", "in3"] as const;

export function getOutboundVolumeHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidVolumeKey(hubKey)) return [];
  return VOLUME_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/volume/${getCanonicalVolumeSlug(hubKey, toKey)}`,
  }));
}

// --- Time (factors are seconds per unit; aligned with UnitConverter) ---

export interface TimeUnitDef {
  name: string;
  nameSg?: string;
  factor: number;
}

export const TIME_UNITS: Record<string, TimeUnitDef> = {
  yr: { name: "Years", nameSg: "Year", factor: 31536000 },
  mo: { name: "Months", nameSg: "Month", factor: 2592000 },
  wk: { name: "Weeks", nameSg: "Week", factor: 604800 },
  d: { name: "Days", nameSg: "Day", factor: 86400 },
  h: { name: "Hours", nameSg: "Hour", factor: 3600 },
  min: { name: "Minutes", nameSg: "Minute", factor: 60 },
  s: { name: "Seconds", nameSg: "Second", factor: 1 },
  ms: { name: "Milliseconds", nameSg: "Millisecond", factor: 0.001 },
  us: { name: "Microseconds", nameSg: "Microsecond", factor: 0.000001 },
  ns: { name: "Nanoseconds", nameSg: "Nanosecond", factor: 0.000000001 },
};

export const TIME_KEY_TO_SLUG: Record<string, string> = {
  yr: "year",
  mo: "month",
  wk: "week",
  d: "day",
  h: "hour",
  min: "minute",
  s: "second",
  ms: "millisecond",
  us: "microsecond",
  ns: "nanosecond",
};

const TIME_SLUG_TO_KEY: Record<string, string> = {
  yr: "yr",
  year: "yr",
  years: "yr",
  mo: "mo",
  month: "mo",
  months: "mo",
  wk: "wk",
  week: "wk",
  weeks: "wk",
  d: "d",
  day: "d",
  days: "d",
  h: "h",
  hr: "h",
  hour: "h",
  hours: "h",
  min: "min",
  minute: "min",
  minutes: "min",
  s: "s",
  sec: "s",
  second: "s",
  seconds: "s",
  ms: "ms",
  millisecond: "ms",
  milliseconds: "ms",
  us: "us",
  microsecond: "us",
  microseconds: "us",
  ns: "ns",
  nanosecond: "ns",
  nanoseconds: "ns",
};

export function getTimeKeys(): string[] {
  return Object.keys(TIME_UNITS);
}

export function isValidTimeKey(key: string): boolean {
  return key in TIME_UNITS;
}

export function getCanonicalTimeSlug(fromKey: string, toKey: string): string {
  const a = TIME_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = TIME_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

export function parseTimePairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = TIME_SLUG_TO_KEY[fromPart];
  const to = TIME_SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidTimeKey(from) || !isValidTimeKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function getTimeMultiplier(fromKey: string, toKey: string): number {
  const from = TIME_UNITS[fromKey].factor;
  const to = TIME_UNITS[toKey].factor;
  return from / to;
}

export function convertTime(value: number, fromKey: string, toKey: string): number {
  return value * getTimeMultiplier(fromKey, toKey);
}

export function formatTimeResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return str === "-0" ? "0" : str;
}

export function getTimeFormulaLine(
  value: number,
  fromKey: string,
  toKey: string
): string {
  const fromFactor = TIME_UNITS[fromKey].factor;
  const toFactor = TIME_UNITS[toKey].factor;
  const result = convertTime(value, fromKey, toKey);
  return `${formatWithThousands(value)} ${fromKey} × (${formatWithThousands(fromFactor)} / ${formatWithThousands(toFactor)}) = ${formatWithThousands(formatTimeResult(result))} ${toKey}`;
}

export type TimeTier = "long" | "medium" | "short";

export function getTimeTier(key: string): TimeTier {
  if (key === "yr" || key === "mo" || key === "wk" || key === "d") return "long";
  if (key === "h" || key === "min" || key === "s") return "medium";
  return "short";
}

/** Hub: year, month, week, day, hour, minute, second, millisecond (8×7 = 56). */
export const TIME_HUB_KEYS = ["yr", "mo", "wk", "d", "h", "min", "s", "ms"] as const;

export function getOutboundTimeHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidTimeKey(hubKey)) return [];
  return TIME_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/time/${getCanonicalTimeSlug(hubKey, toKey)}`,
  }));
}

// --- Digital storage (factors are bytes per unit; decimal SI + IEC; aligned with UnitConverter) ---

export interface DigitalUnitDef {
  name: string;
  nameSg?: string;
  factor: number;
}

export const DIGITAL_UNITS: Record<string, DigitalUnitDef> = {
  pib: { name: "Pebibytes", nameSg: "Pebibyte", factor: 1125899906842624 },
  pb: { name: "Petabytes", nameSg: "Petabyte", factor: 1e15 },
  pibit: { name: "Pebibits", nameSg: "Pebibit", factor: 140737488355328 },
  pbit: { name: "Petabits", nameSg: "Petabit", factor: 1.25e14 },
  tib: { name: "Tebibytes", nameSg: "Tebibyte", factor: 1099511627776 },
  tb: { name: "Terabytes", nameSg: "Terabyte", factor: 1e12 },
  tibit: { name: "Tebibits", nameSg: "Tebibit", factor: 137438953472 },
  tbit: { name: "Terabits", nameSg: "Terabit", factor: 1.25e11 },
  gib: { name: "Gibibytes", nameSg: "Gibibyte", factor: 1073741824 },
  gb: { name: "Gigabytes", nameSg: "Gigabyte", factor: 1e9 },
  gibit: { name: "Gibibits", nameSg: "Gibibit", factor: 134217728 },
  gbit: { name: "Gigabits", nameSg: "Gigabit", factor: 1.25e8 },
  mib: { name: "Mebibytes", nameSg: "Mebibyte", factor: 1048576 },
  mb: { name: "Megabytes", nameSg: "Megabyte", factor: 1e6 },
  mibit: { name: "Mebibits", nameSg: "Mebibit", factor: 131072 },
  mbit: { name: "Megabits", nameSg: "Megabit", factor: 125000 },
  kib: { name: "Kibibytes", nameSg: "Kibibyte", factor: 1024 },
  kb: { name: "Kilobytes", nameSg: "Kilobyte", factor: 1000 },
  kibit: { name: "Kibibits", nameSg: "Kibibit", factor: 128 },
  kbit: { name: "Kilobits", nameSg: "Kilobit", factor: 125 },
  b: { name: "Bytes", nameSg: "Byte", factor: 1 },
  bit: { name: "Bits", nameSg: "Bit", factor: 0.125 },
};

/** URL segment per key (readable; unique vs mebibyte/megabyte, etc.) */
export const DIGITAL_KEY_TO_SLUG: Record<string, string> = {
  pib: "pebibyte",
  pb: "petabyte",
  pibit: "pebibit",
  pbit: "petabit",
  tib: "tebibyte",
  tb: "terabyte",
  tibit: "tebibit",
  tbit: "terabit",
  gib: "gibibyte",
  gb: "gigabyte",
  gibit: "gibibit",
  gbit: "gigabit",
  mib: "mebibyte",
  mb: "megabyte",
  mibit: "mebibit",
  mbit: "megabit",
  kib: "kibibyte",
  kb: "kilobyte",
  kibit: "kibibit",
  kbit: "kilobit",
  b: "byte",
  bit: "bit",
};

const DIGITAL_SLUG_TO_KEY: Record<string, string> = {
  pib: "pib",
  pebibyte: "pib",
  pebibytes: "pib",
  pb: "pb",
  petabyte: "pb",
  petabytes: "pb",
  pibit: "pibit",
  pebibit: "pibit",
  pebibits: "pibit",
  pbit: "pbit",
  petabit: "pbit",
  petabits: "pbit",
  tib: "tib",
  tebibyte: "tib",
  tebibytes: "tib",
  tb: "tb",
  terabyte: "tb",
  terabytes: "tb",
  tibit: "tibit",
  tebibit: "tibit",
  tebibits: "tibit",
  tbit: "tbit",
  terabit: "tbit",
  terabits: "tbit",
  gib: "gib",
  gibibyte: "gib",
  gibibytes: "gib",
  gb: "gb",
  gigabyte: "gb",
  gigabytes: "gb",
  gibit: "gibit",
  gibibit: "gibit",
  gibibits: "gibit",
  gbit: "gbit",
  gigabit: "gbit",
  gigabits: "gbit",
  mib: "mib",
  mebibyte: "mib",
  mebibytes: "mib",
  mb: "mb",
  megabyte: "mb",
  megabytes: "mb",
  mibit: "mibit",
  mebibit: "mibit",
  mebibits: "mibit",
  mbit: "mbit",
  megabit: "mbit",
  megabits: "mbit",
  kib: "kib",
  kibibyte: "kib",
  kibibytes: "kib",
  kb: "kb",
  kilobyte: "kb",
  kilobytes: "kb",
  kibit: "kibit",
  kibibit: "kibit",
  kibibits: "kibit",
  kbit: "kbit",
  kilobit: "kbit",
  kilobits: "kbit",
  b: "b",
  byte: "b",
  bytes: "b",
  bit: "bit",
  bits: "bit",
};

export function getDigitalKeys(): string[] {
  return Object.keys(DIGITAL_UNITS);
}

export function isValidDigitalKey(key: string): boolean {
  return key in DIGITAL_UNITS;
}

export function getCanonicalDigitalSlug(fromKey: string, toKey: string): string {
  const a = DIGITAL_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = DIGITAL_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

export function parseDigitalPairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = DIGITAL_SLUG_TO_KEY[fromPart];
  const to = DIGITAL_SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidDigitalKey(from) || !isValidDigitalKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function getDigitalMultiplier(fromKey: string, toKey: string): number {
  const from = DIGITAL_UNITS[fromKey].factor;
  const to = DIGITAL_UNITS[toKey].factor;
  return from / to;
}

export function convertDigital(value: number, fromKey: string, toKey: string): number {
  return value * getDigitalMultiplier(fromKey, toKey);
}

export function formatDigitalResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return str === "-0" ? "0" : str;
}

export function getDigitalFormulaLine(value: number, fromKey: string, toKey: string): string {
  const fromFactor = DIGITAL_UNITS[fromKey].factor;
  const toFactor = DIGITAL_UNITS[toKey].factor;
  const result = convertDigital(value, fromKey, toKey);
  return `${formatWithThousands(value)} ${fromKey} × (${formatWithThousands(fromFactor)} / ${formatWithThousands(toFactor)}) = ${formatWithThousands(formatDigitalResult(result))} ${toKey}`;
}

/** Hub order: GB, TB, MB, B, KB, PB, bits, Mbit (8×7 = 56 dedicated pages). */
export const DIGITAL_HUB_KEYS = ["gb", "tb", "mb", "b", "kb", "pb", "bit", "mbit"] as const;

export function getOutboundDigitalHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidDigitalKey(hubKey)) return [];
  return DIGITAL_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/digital/${getCanonicalDigitalSlug(hubKey, toKey)}`,
  }));
}

// --- Energy (factors are joules per unit; aligned with UnitConverter) ---

export interface EnergyUnitDef {
  name: string;
  nameSg?: string;
  factor: number;
}

export const ENERGY_UNITS: Record<string, EnergyUnitDef> = {
  therm: { name: "Therm", factor: 105505585.262 },
  kwh: { name: "Kilowatt Hours", nameSg: "Kilowatt Hour", factor: 3600000 },
  kcal: { name: "Kilocalories", nameSg: "Kilocalorie", factor: 4184 },
  wh: { name: "Watt Hours", nameSg: "Watt Hour", factor: 3600 },
  kj: { name: "Kilojoules", nameSg: "Kilojoule", factor: 1000 },
  btu: { name: "British Thermal Units", nameSg: "British Thermal Unit", factor: 1055.05585262 },
  cal: { name: "Calories", nameSg: "Calorie", factor: 4.184 },
  ftlb: { name: "Feet-Pounds", nameSg: "Feet-Pound", factor: 1.3558179483314004 },
  j: { name: "Joules", nameSg: "Joule", factor: 1 },
  ev: { name: "Electronvolts", nameSg: "Electronvolt", factor: 1.602176634e-19 },
};

export const ENERGY_KEY_TO_SLUG: Record<string, string> = {
  therm: "therm",
  kwh: "kilowatt-hour",
  kcal: "kilocalorie",
  wh: "watt-hour",
  kj: "kilojoule",
  btu: "btu",
  cal: "calorie",
  ftlb: "foot-pound",
  j: "joule",
  ev: "electronvolt",
};

const ENERGY_SLUG_TO_KEY: Record<string, string> = {
  therm: "therm",
  therms: "therm",
  kwh: "kwh",
  kwhr: "kwh",
  "kilowatt-hour": "kwh",
  "kilowatt-hours": "kwh",
  kilowatthour: "kwh",
  kcal: "kcal",
  kilocalorie: "kcal",
  kilocalories: "kcal",
  wh: "wh",
  "watt-hour": "wh",
  "watt-hours": "wh",
  watthour: "wh",
  kj: "kj",
  kilojoule: "kj",
  kilojoules: "kj",
  btu: "btu",
  btus: "btu",
  cal: "cal",
  calorie: "cal",
  calories: "cal",
  ftlb: "ftlb",
  "ft-lb": "ftlb",
  "foot-pound": "ftlb",
  "foot-pounds": "ftlb",
  j: "j",
  joule: "j",
  joules: "j",
  ev: "ev",
  electronvolt: "ev",
  electronvolts: "ev",
};

export function getEnergyKeys(): string[] {
  return Object.keys(ENERGY_UNITS);
}

export function isValidEnergyKey(key: string): boolean {
  return key in ENERGY_UNITS;
}

export function getCanonicalEnergySlug(fromKey: string, toKey: string): string {
  const a = ENERGY_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = ENERGY_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

export function parseEnergyPairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = ENERGY_SLUG_TO_KEY[fromPart];
  const to = ENERGY_SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidEnergyKey(from) || !isValidEnergyKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function getEnergyMultiplier(fromKey: string, toKey: string): number {
  const from = ENERGY_UNITS[fromKey].factor;
  const to = ENERGY_UNITS[toKey].factor;
  return from / to;
}

export function convertEnergy(value: number, fromKey: string, toKey: string): number {
  return value * getEnergyMultiplier(fromKey, toKey);
}

export function formatEnergyResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return str === "-0" ? "0" : str;
}

export function getEnergyFormulaLine(value: number, fromKey: string, toKey: string): string {
  const fromFactor = ENERGY_UNITS[fromKey].factor;
  const toFactor = ENERGY_UNITS[toKey].factor;
  const result = convertEnergy(value, fromKey, toKey);
  return `${formatWithThousands(value)} ${fromKey} × (${formatWithThousands(fromFactor)} / ${formatWithThousands(toFactor)}) = ${formatWithThousands(formatEnergyResult(result))} ${toKey}`;
}

/** Hub: kcal, kWh, cal, J, kJ, Wh, BTU, eV (8×7 = 56). */
export const ENERGY_HUB_KEYS = ["kcal", "kwh", "cal", "j", "kj", "wh", "btu", "ev"] as const;

export function getOutboundEnergyHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidEnergyKey(hubKey)) return [];
  return ENERGY_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/energy/${getCanonicalEnergySlug(hubKey, toKey)}`,
  }));
}

// --- Speed (m/s bridge; Mach & c linear; Beaufort = WMO mean wind at 10 m, discrete 0–12) ---

/** Mach 1 → m/s (ISA sea level, ~15 °C). */
export const MACH_TO_MPS_ISA = 340.29;

/** Speed of light in vacuum (exact, m/s). */
export const SPEED_OF_LIGHT_MPS = 299_792_458;

/**
 * Midpoint m/s for each Beaufort force 0–12 (WMO / marine mean wind at 10 m).
 * Force 12 uses a representative value above 32.7 m/s.
 */
export const BEAUFORT_MID_MS: readonly number[] = [
  0.1, 0.9, 2.45, 4.4, 6.7, 9.35, 12.3, 15.5, 18.95, 22.6, 26.45, 30.55, 37,
];

const LINEAR_SPEED_MPS_PER_UNIT: Record<string, number> = {
  mps: 1,
  kph: 1000 / 3600,
  mph: 0.44704,
  knots: 1852 / 3600,
  fps: 0.3048,
  mach: MACH_TO_MPS_ISA,
  c: SPEED_OF_LIGHT_MPS,
};

export interface SpeedUnitDef {
  name: string;
  nameSg?: string;
  /** m/s per 1 unit; omitted for Beaufort (discrete WMO scale). */
  factor?: number;
}

/** Speed units aligned with the Speed Converter hub and dedicated pair pages. */
export const SPEED_UNITS: Record<string, SpeedUnitDef> = {
  mps: { name: "Meters per Second", nameSg: "Meter per Second", factor: LINEAR_SPEED_MPS_PER_UNIT.mps },
  kph: { name: "Kilometers per Hour", nameSg: "Kilometer per Hour", factor: LINEAR_SPEED_MPS_PER_UNIT.kph },
  mph: { name: "Miles per Hour", nameSg: "Mile per Hour", factor: LINEAR_SPEED_MPS_PER_UNIT.mph },
  knots: { name: "Knots", nameSg: "Knot", factor: LINEAR_SPEED_MPS_PER_UNIT.knots },
  fps: { name: "Feet per Second", nameSg: "Feet per Second", factor: LINEAR_SPEED_MPS_PER_UNIT.fps },
  mach: { name: "Mach (ISA sea level)", nameSg: "Mach", factor: LINEAR_SPEED_MPS_PER_UNIT.mach },
  beaufort: { name: "Beaufort wind force", nameSg: "Beaufort" },
  c: { name: "Speed of light (c)", nameSg: "Speed of light (c)", factor: LINEAR_SPEED_MPS_PER_UNIT.c },
};

export const SPEED_KEY_TO_SLUG: Record<string, string> = {
  mps: "mps",
  kph: "kph",
  mph: "mph",
  knots: "knots",
  fps: "fps",
  mach: "mach",
  beaufort: "beaufort",
  c: "c",
};

const SPEED_SLUG_TO_KEY: Record<string, string> = {
  mps: "mps",
  kph: "kph",
  "km-h": "kph",
  kmh: "kph",
  mph: "mph",
  knots: "knots",
  knot: "knots",
  fps: "fps",
  mach: "mach",
  beaufort: "beaufort",
  c: "c",
};

/** Hub keys for dedicated speed pair pages (8×7 = 56). */
export const SPEED_HUB_KEYS = ["mps", "kph", "mph", "knots", "fps", "mach", "beaufort", "c"] as const;

export function getSpeedKeys(): string[] {
  return Object.keys(SPEED_UNITS);
}

export function isValidSpeedKey(key: string): boolean {
  return key in SPEED_UNITS;
}

export function getCanonicalSpeedSlug(fromKey: string, toKey: string): string {
  const a = SPEED_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = SPEED_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

export function parseSpeedPairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = SPEED_SLUG_TO_KEY[fromPart];
  const to = SPEED_SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidSpeedKey(from) || !isValidSpeedKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function getOutboundSpeedHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidSpeedKey(hubKey)) return [];
  return SPEED_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/speed/${getCanonicalSpeedSlug(hubKey, toKey)}`,
  }));
}

export function msToBeaufortForce(ms: number): number {
  if (!Number.isFinite(ms) || ms < 0) return 0;
  if (ms <= 0.2) return 0;
  if (ms <= 1.5) return 1;
  if (ms <= 3.3) return 2;
  if (ms <= 5.4) return 3;
  if (ms <= 7.9) return 4;
  if (ms <= 10.7) return 5;
  if (ms <= 13.8) return 6;
  if (ms <= 17.1) return 7;
  if (ms <= 20.7) return 8;
  if (ms <= 24.4) return 9;
  if (ms <= 28.4) return 10;
  if (ms <= 32.6) return 11;
  return 12;
}

function beaufortForceToMidMs(b: number): number {
  const i = Math.round(Math.min(12, Math.max(0, b)));
  return BEAUFORT_MID_MS[i]!;
}

export function speedToMps(value: number, unit: string): number {
  if (unit === "beaufort") {
    return beaufortForceToMidMs(value);
  }
  const mult = LINEAR_SPEED_MPS_PER_UNIT[unit];
  if (mult == null) return NaN;
  return value * mult;
}

export function mpsToSpeed(valueMs: number, unit: string): number {
  if (unit === "beaufort") {
    return msToBeaufortForce(valueMs);
  }
  const mult = LINEAR_SPEED_MPS_PER_UNIT[unit];
  if (mult == null) return NaN;
  return valueMs / mult;
}

export function convertSpeed(value: number, from: string, to: string): number {
  const mps = speedToMps(value, from);
  if (!Number.isFinite(mps)) return NaN;
  return mpsToSpeed(mps, to);
}

export function convertSpeedWithFormula(value: number, from: string, to: string): [number, string] {
  const mps = speedToMps(value, from);
  if (!Number.isFinite(mps)) {
    return [NaN, "Unknown speed unit"];
  }
  const result = mpsToSpeed(mps, to);
  if (!Number.isFinite(result)) {
    return [NaN, "Unknown speed unit"];
  }

  if (from === "beaufort" || to === "beaufort") {
    const note =
      "Beaufort: WMO mean wind at 10 m. From Beaufort rounds to force 0–12 then uses midpoint m/s; to Beaufort returns force index.";
    return [
      result,
      `${formatWithThousands(value)} ${from} → ${formatWithThousands(mps.toFixed(6))} m/s (equiv.) → ${formatWithThousands(result.toFixed(6))} ${to}. ${note}`,
    ];
  }

  const fromF = LINEAR_SPEED_MPS_PER_UNIT[from];
  const toF = LINEAR_SPEED_MPS_PER_UNIT[to];
  if (fromF == null || toF == null) {
    return [NaN, "Unknown speed unit"];
  }
  const formula = `${formatWithThousands(value)} ${from} × (${formatWithThousands(fromF)}/${formatWithThousands(toF)}) = ${formatWithThousands(result.toFixed(6))} ${to}`;
  return [result, formula];
}

export function formatSpeedResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return str === "-0" ? "0" : str;
}

export function getSpeedFormulaLine(value: number, fromKey: string, toKey: string): string {
  return convertSpeedWithFormula(value, fromKey, toKey)[1];
}

// --- Pressure (linear, pascal base) ---

export interface PressureUnitDef {
  name: string;
  nameSg?: string;
  /** Pa per 1 unit */
  factor: number;
}

/** Standard atmosphere ÷ 760 — used for torr and conventional mmHg in this tool. */
export const PA_PER_TORR = 101325 / 760;

export const PRESSURE_UNITS: Record<string, PressureUnitDef> = {
  bar: { name: "Bar", nameSg: "Bar", factor: 100_000 },
  atm: { name: "Atmosphere", nameSg: "Atmosphere", factor: 101_325 },
  psi: { name: "PSI", nameSg: "PSI", factor: 6894.757293168 },
  kpa: { name: "Kilopascal", nameSg: "Kilopascal", factor: 1000 },
  hpa: { name: "Hectopascal (hPa)", nameSg: "Hectopascal", factor: 100 },
  torr: { name: "Torr", nameSg: "Torr", factor: PA_PER_TORR },
  mmhg: { name: "Millimeter of Mercury (mmHg)", nameSg: "mmHg", factor: PA_PER_TORR },
  pa: { name: "Pascal", nameSg: "Pascal", factor: 1 },
};

export const PRESSURE_KEY_TO_SLUG: Record<string, string> = {
  bar: "bar",
  atm: "atm",
  psi: "psi",
  kpa: "kpa",
  hpa: "hpa",
  torr: "torr",
  mmhg: "mmhg",
  pa: "pa",
};

const PRESSURE_SLUG_TO_KEY: Record<string, string> = {
  bar: "bar",
  atm: "atm",
  psi: "psi",
  kpa: "kpa",
  hpa: "hpa",
  torr: "torr",
  mmhg: "mmhg",
  pa: "pa",
};

/** Hub keys for dedicated pressure pair pages (8×7 = 56). Order matches UnitConverter. */
export const PRESSURE_HUB_KEYS = ["bar", "atm", "psi", "kpa", "hpa", "torr", "mmhg", "pa"] as const;

export function getPressureKeys(): string[] {
  return Object.keys(PRESSURE_UNITS);
}

export function isValidPressureKey(key: string): boolean {
  return key in PRESSURE_UNITS;
}

export function getCanonicalPressureSlug(fromKey: string, toKey: string): string {
  const a = PRESSURE_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = PRESSURE_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

export function parsePressurePairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = PRESSURE_SLUG_TO_KEY[fromPart];
  const to = PRESSURE_SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidPressureKey(from) || !isValidPressureKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function getOutboundPressureHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidPressureKey(hubKey)) return [];
  return PRESSURE_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/pressure/${getCanonicalPressureSlug(hubKey, toKey)}`,
  }));
}

export function convertPressure(value: number, from: string, to: string): number {
  const fromF = PRESSURE_UNITS[from]?.factor;
  const toF = PRESSURE_UNITS[to]?.factor;
  if (fromF == null || toF == null) return NaN;
  return (value * fromF) / toF;
}

export function convertPressureWithFormula(value: number, from: string, to: string): [number, string] {
  const fromF = PRESSURE_UNITS[from]?.factor;
  const toF = PRESSURE_UNITS[to]?.factor;
  if (fromF == null || toF == null) {
    return [NaN, "Unknown pressure unit"];
  }
  const result = (value * fromF) / toF;
  const formula = `${formatWithThousands(value)} ${from} × (${formatWithThousands(fromF)}/${formatWithThousands(toF)}) = ${formatWithThousands(result.toFixed(6))} ${to}`;
  return [result, formula];
}

export function formatPressureResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return str === "-0" ? "0" : str;
}

export function getPressureFormulaLine(value: number, fromKey: string, toKey: string): string {
  return convertPressureWithFormula(value, fromKey, toKey)[1];
}

// --- Angle (linear, radian base) ---

export interface AngleUnitDef {
  name: string;
  nameSg?: string;
  /** Radians per 1 unit */
  factor: number;
}

export const ANGLE_UNITS: Record<string, AngleUnitDef> = {
  turn: { name: "Revolutions", nameSg: "Revolution", factor: 2 * Math.PI },
  deg: { name: "Degrees", nameSg: "Degree", factor: Math.PI / 180 },
  arcmin: { name: "Arc Minutes", nameSg: "Arc Minute", factor: Math.PI / 10800 },
  arcsec: { name: "Arc Seconds", nameSg: "Arc Second", factor: Math.PI / 648000 },
  grad: { name: "Gradians", nameSg: "Gradian", factor: Math.PI / 200 },
  rad: { name: "Radians", nameSg: "Radian", factor: 1 },
  mrad: { name: "Milliradians", nameSg: "Milliradian", factor: 0.001 },
  mil: { name: "Mils (NATO, 6400)", nameSg: "Mil", factor: (2 * Math.PI) / 6400 },
};

export const ANGLE_KEY_TO_SLUG: Record<string, string> = {
  turn: "turn",
  deg: "deg",
  arcmin: "arcmin",
  arcsec: "arcsec",
  grad: "grad",
  rad: "rad",
  mrad: "mrad",
  mil: "mil",
};

const ANGLE_SLUG_TO_KEY: Record<string, string> = {
  turn: "turn",
  revolution: "turn",
  revolutions: "turn",
  deg: "deg",
  degree: "deg",
  degrees: "deg",
  arcmin: "arcmin",
  arcminute: "arcmin",
  arcminutes: "arcmin",
  arcsec: "arcsec",
  arcsecond: "arcsec",
  arcseconds: "arcsec",
  grad: "grad",
  gradian: "grad",
  gradians: "grad",
  gon: "grad",
  rad: "rad",
  radian: "rad",
  radians: "rad",
  mrad: "mrad",
  milliradian: "mrad",
  milliradians: "mrad",
  mil: "mil",
  mils: "mil",
};

/** Hub keys for dedicated angle pair pages (8×7 = 56). Order matches UnitConverter. */
export const ANGLE_HUB_KEYS = ["turn", "deg", "arcmin", "arcsec", "grad", "rad", "mrad", "mil"] as const;

export function getAngleKeys(): string[] {
  return Object.keys(ANGLE_UNITS);
}

export function isValidAngleKey(key: string): boolean {
  return key in ANGLE_UNITS;
}

export function getCanonicalAngleSlug(fromKey: string, toKey: string): string {
  const a = ANGLE_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = ANGLE_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

export function parseAnglePairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = ANGLE_SLUG_TO_KEY[fromPart];
  const to = ANGLE_SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidAngleKey(from) || !isValidAngleKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function getOutboundAngleHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidAngleKey(hubKey)) return [];
  return ANGLE_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/angle/${getCanonicalAngleSlug(hubKey, toKey)}`,
  }));
}

export function convertAngle(value: number, from: string, to: string): number {
  const fromF = ANGLE_UNITS[from]?.factor;
  const toF = ANGLE_UNITS[to]?.factor;
  if (fromF == null || toF == null) return NaN;
  return (value * fromF) / toF;
}

export function convertAngleWithFormula(value: number, from: string, to: string): [number, string] {
  const fromF = ANGLE_UNITS[from]?.factor;
  const toF = ANGLE_UNITS[to]?.factor;
  if (fromF == null || toF == null) {
    return [NaN, "Unknown angle unit"];
  }
  const result = (value * fromF) / toF;
  const formula = `${formatWithThousands(value)} ${from} × (${formatWithThousands(fromF)}/${formatWithThousands(toF)}) = ${formatWithThousands(result.toFixed(6))} ${to}`;
  return [result, formula];
}

export function formatAngleResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return str === "-0" ? "0" : str;
}

export function getAngleFormulaLine(value: number, fromKey: string, toKey: string): string {
  return convertAngleWithFormula(value, fromKey, toKey)[1];
}

// --- Temperature (Celsius, Fahrenheit, Kelvin; offsets — not factor-only scaling) ---

export interface TemperatureUnitDef {
  name: string;
  nameSg?: string;
}

export const TEMPERATURE_UNITS: Record<string, TemperatureUnitDef> = {
  c: { name: "Celsius", nameSg: "Celsius" },
  f: { name: "Fahrenheit", nameSg: "Fahrenheit" },
  k: { name: "Kelvin", nameSg: "Kelvin" },
  r: { name: "Rankine", nameSg: "Rankine" },
};

export const TEMPERATURE_KEY_TO_SLUG: Record<string, string> = {
  c: "celsius",
  f: "fahrenheit",
  k: "kelvin",
  r: "rankine",
};

const TEMPERATURE_SLUG_TO_KEY: Record<string, string> = {
  c: "c",
  celsius: "c",
  f: "f",
  fahrenheit: "f",
  k: "k",
  kelvin: "k",
  r: "r",
  rankine: "r",
};

/** Celsius, Fahrenheit, Kelvin, Rankine — 4×3 = 12 dedicated pair pages. */
export const TEMPERATURE_HUB_KEYS = ["c", "f", "k", "r"] as const;

export function getTemperatureKeys(): string[] {
  return Object.keys(TEMPERATURE_UNITS);
}

export function isValidTemperatureKey(key: string): boolean {
  return key in TEMPERATURE_UNITS;
}

export function getCanonicalTemperatureSlug(fromKey: string, toKey: string): string {
  const a = TEMPERATURE_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = TEMPERATURE_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

export function parseTemperaturePairSlug(slug: string): { from: string; to: string } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;

  const from = TEMPERATURE_SLUG_TO_KEY[fromPart];
  const to = TEMPERATURE_SLUG_TO_KEY[toPart];
  if (!from || !to || !isValidTemperatureKey(from) || !isValidTemperatureKey(to)) return null;
  if (from === to) return null;

  return { from, to };
}

export function toCelsius(value: number, from: string): number {
  switch (from) {
    case "c":
      return value;
    case "f":
      return (value - 32) * (5 / 9);
    case "k":
      return value - 273.15;
    case "r":
      return value * (5 / 9) - 273.15;
    default:
      return value;
  }
}

export function fromCelsius(celsius: number, to: string): number {
  switch (to) {
    case "c":
      return celsius;
    case "f":
      return celsius * (9 / 5) + 32;
    case "k":
      return celsius + 273.15;
    case "r":
      return (celsius + 273.15) * (9 / 5);
    default:
      return celsius;
  }
}

export function convertTemperature(value: number, from: string, to: string): number {
  return fromCelsius(toCelsius(value, from), to);
}

/** Same behavior as the former UnitConverter `convertTemperature` (formula text for UI). */
export function convertTemperatureWithFormula(value: number, from: string, to: string): [number, string] {
  let celsius: number;
  let formula = "";

  switch (from) {
    case "c":
      celsius = value;
      break;
    case "f":
      celsius = (value - 32) * (5 / 9);
      formula = `(${formatWithThousands(value)}°F - 32) × 5/9 = ${formatWithThousands(celsius.toFixed(6))}°C`;
      break;
    case "k":
      celsius = value - 273.15;
      formula = `${formatWithThousands(value)}K - 273.15 = ${formatWithThousands(celsius.toFixed(6))}°C`;
      break;
    case "r":
      celsius = value * (5 / 9) - 273.15;
      formula = `${formatWithThousands(value)} R × 5/9 − 273.15 = ${formatWithThousands(celsius.toFixed(6))}°C`;
      break;
    default:
      celsius = value;
  }

  let result: number;
  switch (to) {
    case "c":
      result = celsius;
      formula = `${formatWithThousands(value)}${from.toUpperCase()} = ${formatWithThousands(result.toFixed(6))}°C`;
      break;
    case "f":
      result = celsius * (9 / 5) + 32;
      formula = `(${formatWithThousands(celsius.toFixed(6))}°C × 9/5) + 32 = ${formatWithThousands(result.toFixed(6))}°F`;
      break;
    case "k":
      result = celsius + 273.15;
      formula = `${formatWithThousands(celsius.toFixed(6))}°C + 273.15 = ${formatWithThousands(result.toFixed(6))}K`;
      break;
    case "r":
      result = (celsius + 273.15) * (9 / 5);
      formula = `(${formatWithThousands(celsius.toFixed(6))}°C + 273.15) × 9/5 = ${formatWithThousands(result.toFixed(6))} R`;
      break;
    default:
      result = celsius;
  }

  return [result, formula];
}

export function formatTemperatureResult(value: number, maxDecimals = 10): string {
  if (!Number.isFinite(value)) return "";
  const rounded = Number(value.toPrecision(12));
  const str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, "");
  return str === "-0" ? "0" : str;
}

export function getTemperatureFormulaLine(value: number, fromKey: string, toKey: string): string {
  const [, formula] = convertTemperatureWithFormula(value, fromKey, toKey);
  return formula;
}

export function getOutboundTemperatureHubLinks(hubKey: string): { toKey: string; href: string }[] {
  if (!isValidTemperatureKey(hubKey)) return [];
  return TEMPERATURE_HUB_KEYS.filter((k) => k !== hubKey).map((toKey) => ({
    toKey,
    href: `/tools/unit-converter/temperature/${getCanonicalTemperatureSlug(hubKey, toKey)}`,
  }));
}
