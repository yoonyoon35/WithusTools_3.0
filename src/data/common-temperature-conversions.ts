import { getCanonicalTemperatureSlug } from "@/utils/conversions";

export type TemperatureScaleName = "Celsius" | "Fahrenheit" | "Kelvin" | "Rankine";

export interface CommonTemperatureConversionRow {
  from: TemperatureScaleName;
  to: TemperatureScaleName;
  v1: number;
  v2: number;
  ctx: string;
  /** Full pathname, e.g. `/tools/unit-converter/temperature/celsius-to-fahrenheit` */
  slug: string;
}

const SCALE_TO_KEY: Record<TemperatureScaleName, string> = {
  Celsius: "c",
  Fahrenheit: "f",
  Kelvin: "k",
  Rankine: "r",
};

function pairPath(from: TemperatureScaleName, to: TemperatureScaleName): string {
  const fromKey = SCALE_TO_KEY[from];
  const toKey = SCALE_TO_KEY[to];
  return `/tools/unit-converter/temperature/${getCanonicalTemperatureSlug(fromKey, toKey)}`;
}

const RAW_ROWS: Omit<CommonTemperatureConversionRow, "slug">[] = [
  { from: "Celsius", to: "Fahrenheit", v1: 0, v2: 32, ctx: "Freezing point of water" },
  { from: "Celsius", to: "Fahrenheit", v1: 100, v2: 212, ctx: "Boiling point of water" },
  {
    from: "Celsius",
    to: "Fahrenheit",
    v1: 180,
    v2: 356,
    ctx: "Standard baking temperature (Golden rule)",
  },
  {
    from: "Celsius",
    to: "Fahrenheit",
    v1: 36.5,
    v2: 97.7,
    ctx: "Normal human body temperature",
  },
  {
    from: "Celsius",
    to: "Fahrenheit",
    v1: -40,
    v2: -40,
    ctx: "Unique point where Celsius and Fahrenheit are equal",
  },
  {
    from: "Fahrenheit",
    to: "Celsius",
    v1: 98.6,
    v2: 37,
    ctx: "US standard for normal body temperature",
  },
  { from: "Fahrenheit", to: "Celsius", v1: 100, v2: 37.8, ctx: "Threshold for a high fever" },
  {
    from: "Fahrenheit",
    to: "Celsius",
    v1: 450,
    v2: 232.2,
    ctx: "High-heat oven setting for pizza or searing",
  },
  {
    from: "Fahrenheit",
    to: "Celsius",
    v1: 72,
    v2: 22.2,
    ctx: "Commonly recommended indoor room temperature",
  },
  {
    from: "Fahrenheit",
    to: "Celsius",
    v1: 0,
    v2: -17.8,
    ctx: "Extremely cold winter day reference",
  },
  {
    from: "Celsius",
    to: "Kelvin",
    v1: -273.15,
    v2: 0,
    ctx: "Absolute Zero - the lowest possible temperature",
  },
  {
    from: "Celsius",
    to: "Kelvin",
    v1: 0,
    v2: 273.15,
    ctx: "Standard freezing point in scientific Kelvin scale",
  },
  {
    from: "Celsius",
    to: "Kelvin",
    v1: 25,
    v2: 298.15,
    ctx: "Standard laboratory room temperature (SATP)",
  },
  {
    from: "Celsius",
    to: "Kelvin",
    v1: 100,
    v2: 373.15,
    ctx: "Water boiling point in thermodynamic scale",
  },
  {
    from: "Celsius",
    to: "Kelvin",
    v1: 1500,
    v2: 1773.15,
    ctx: "Approximate melting point of iron",
  },
  { from: "Kelvin", to: "Celsius", v1: 273.15, v2: 0, ctx: "Ice-water equilibrium point" },
  {
    from: "Kelvin",
    to: "Celsius",
    v1: 310.15,
    v2: 37,
    ctx: "Human body temperature in Kelvin",
  },
  {
    from: "Kelvin",
    to: "Celsius",
    v1: 373.15,
    v2: 100,
    ctx: "Steam point of water at standard pressure",
  },
  {
    from: "Kelvin",
    to: "Celsius",
    v1: 77,
    v2: -196.15,
    ctx: "Boiling point of liquid nitrogen",
  },
  {
    from: "Kelvin",
    to: "Celsius",
    v1: 5778,
    v2: 5504.85,
    ctx: "Effective surface temperature of the Sun",
  },
  {
    from: "Fahrenheit",
    to: "Rankine",
    v1: -459.67,
    v2: 0,
    ctx: "Absolute Zero in the Rankine scale",
  },
  {
    from: "Fahrenheit",
    to: "Rankine",
    v1: 32,
    v2: 491.67,
    ctx: "Freezing point of water for US engineering",
  },
  {
    from: "Fahrenheit",
    to: "Rankine",
    v1: 212,
    v2: 671.67,
    ctx: "Boiling point of water in Rankine scale",
  },
  {
    from: "Fahrenheit",
    to: "Rankine",
    v1: 70,
    v2: 529.67,
    ctx: "US engineering standard room temperature",
  },
  {
    from: "Fahrenheit",
    to: "Rankine",
    v1: 0,
    v2: 459.67,
    ctx: "Fahrenheit zero reference in absolute terms",
  },
  {
    from: "Rankine",
    to: "Fahrenheit",
    v1: 491.67,
    v2: 32,
    ctx: "Rankine conversion back to water's freezing point",
  },
  {
    from: "Rankine",
    to: "Fahrenheit",
    v1: 671.67,
    v2: 212,
    ctx: "Rankine conversion back to water's boiling point",
  },
  {
    from: "Rankine",
    to: "Fahrenheit",
    v1: 536.67,
    v2: 77,
    ctx: "Standard ambient temperature for US aerospace",
  },
  {
    from: "Rankine",
    to: "Fahrenheit",
    v1: 0,
    v2: -459.67,
    ctx: "Rankine scale origin in Fahrenheit",
  },
  {
    from: "Rankine",
    to: "Fahrenheit",
    v1: 1000,
    v2: 540.33,
    ctx: "Common temperature in gas turbine calculations",
  },
  {
    from: "Kelvin",
    to: "Rankine",
    v1: 1,
    v2: 1.8,
    ctx: "The ratio between SI and Imperial absolute scales",
  },
  {
    from: "Kelvin",
    to: "Rankine",
    v1: 273.15,
    v2: 491.67,
    ctx: "Water's freezing point across absolute scales",
  },
  {
    from: "Kelvin",
    to: "Rankine",
    v1: 373.15,
    v2: 671.67,
    ctx: "Water's boiling point across absolute scales",
  },
  {
    from: "Kelvin",
    to: "Rankine",
    v1: 0,
    v2: 0,
    ctx: "The shared starting point: Absolute Zero",
  },
  {
    from: "Kelvin",
    to: "Rankine",
    v1: 310.15,
    v2: 558.27,
    ctx: "Human body temperature in absolute units",
  },
  {
    from: "Rankine",
    to: "Kelvin",
    v1: 1.8,
    v2: 1,
    ctx: "Basic conversion factor for absolute units",
  },
  {
    from: "Rankine",
    to: "Kelvin",
    v1: 491.67,
    v2: 273.15,
    ctx: "Scientific freezing point comparison",
  },
  {
    from: "Rankine",
    to: "Kelvin",
    v1: 671.67,
    v2: 373.15,
    ctx: "Scientific boiling point comparison",
  },
  {
    from: "Rankine",
    to: "Kelvin",
    v1: 540,
    v2: 300,
    ctx: "Round numbers often used in engineering exams",
  },
  {
    from: "Rankine",
    to: "Kelvin",
    v1: 1000,
    v2: 555.56,
    ctx: "High-temperature thermal analysis point",
  },
];

export const COMMON_TEMPERATURE_CONVERSIONS: CommonTemperatureConversionRow[] = RAW_ROWS.map((row) => ({
  ...row,
  slug: pairPath(row.from, row.to),
}));

export function formatCommonConversionNumber(n: number): string {
  if (!Number.isFinite(n)) return String(n);
  const s = n.toFixed(12).replace(/\.?0+$/, "");
  if (s === "" || s === "-") return "0";
  return s === "-0" ? "0" : s;
}

function unitSuffix(scale: TemperatureScaleName): string {
  if (scale === "Kelvin") return " K";
  if (scale === "Celsius") return " °C";
  if (scale === "Fahrenheit") return " °F";
  return " °R";
}

export function formatConversionCell(scale: TemperatureScaleName, value: number): string {
  return `${formatCommonConversionNumber(value)}${unitSuffix(scale)}`;
}

/** FAQPage JSON-LD derived from all reference rows (for SEO). */
export function getCommonTemperatureConversionsFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: COMMON_TEMPERATURE_CONVERSIONS.map((row) => ({
      "@type": "Question",
      name: `Temperature conversion: ${formatCommonConversionNumber(row.v1)} ${row.from} to ${row.to} (${row.ctx})`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${formatConversionCell(row.from, row.v1)} equals ${formatConversionCell(row.to, row.v2)}. ${row.ctx}. Open the dedicated ${row.from}-to-${row.to} converter for formulas and step-by-step examples.`,
      },
    })),
  };
}
