"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

export type UnitCategory =
  | "length"
  | "weight"
  | "temperature"
  | "area"
  | "volume"
  | "speed"
  | "time"
  | "digital"
  | "pressure"
  | "energy"
  | "angle";

interface UnitDef {
  name: string;
  nameSg?: string; // singular form for Common Conversions
  factor?: number; // base unit factor (for non-temperature)
}

const UNITS: Record<UnitCategory, Record<string, UnitDef>> = {
  length: {
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
  },
  weight: {
    t: { name: "Metric Tons", nameSg: "Metric Ton", factor: 1000000 },
    lton: { name: "Long Tons (UK)", nameSg: "Long Ton (UK)", factor: 1016046.9088 },
    ust: { name: "US Tons (Short)", nameSg: "US Ton (Short)", factor: 907184.74 },
    st: { name: "Stone", factor: 6350.29318 },
    kg: { name: "Kilograms", nameSg: "Kilogram", factor: 1000 },
    lb: { name: "Pounds", nameSg: "Pound", factor: 453.59237 },
    g: { name: "Grams", nameSg: "Gram", factor: 1 },
    oz: { name: "Ounces", nameSg: "Ounce", factor: 28.349523125 },
    mg: { name: "Milligrams", nameSg: "Milligram", factor: 0.001 },
    ug: { name: "Micrograms", nameSg: "Microgram", factor: 0.000001 },
  },
  temperature: {
    k: { name: "Kelvin" },
    c: { name: "Celsius" },
    f: { name: "Fahrenheit" },
  },
  area: {
    mi2: { name: "Square Miles", nameSg: "Square Mile", factor: 2589988.110336 },
    km2: { name: "Square Kilometers", nameSg: "Square Kilometer", factor: 1000000 },
    ha: { name: "Hectares", nameSg: "Hectare", factor: 10000 },
    ac: { name: "Acres", nameSg: "Acre", factor: 4046.8564224 },
    m2: { name: "Square Meters", nameSg: "Square Meter", factor: 1 },
    yd2: { name: "Square Yards", nameSg: "Square Yard", factor: 0.83612736 },
    ft2: { name: "Square Feet", nameSg: "Square Feet", factor: 0.09290304 },
    cm2: { name: "Square Centimeters", nameSg: "Square Centimeter", factor: 0.0001 },
    in2: { name: "Square Inches", nameSg: "Square Inch", factor: 0.00064516 },
  },
  volume: {
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
    in3: { name: "Cubic Inches", nameSg: "Cubic Inch", factor: 0.016387064 },
    floz: { name: "Fluid Ounces (US)", nameSg: "Fluid Ounce (US)", factor: 0.0295735295625 },
    ukfloz: { name: "Fluid Ounces (UK)", nameSg: "Fluid Ounce (UK)", factor: 0.0284130625 },
    tbsp: { name: "Tablespoons (US)", nameSg: "Tablespoon (US)", factor: 0.01478676478125 },
    uktbsp: { name: "Tablespoons (UK)", nameSg: "Tablespoon (UK)", factor: 0.01420653125 },
    tsp: { name: "Teaspoons (US)", nameSg: "Teaspoon (US)", factor: 0.00492892159375 },
    uktsp: { name: "Teaspoons (UK)", nameSg: "Teaspoon (UK)", factor: 0.004735510416667 },
  },
  speed: {
    mps: { name: "Meters per Second", nameSg: "Meter per Second", factor: 1 },
    knots: { name: "Knots", nameSg: "Knot", factor: 1852 / 3600 },
    mph: { name: "Miles per Hour", nameSg: "Mile per Hour", factor: 0.44704 },
    fps: { name: "Feet per Second", nameSg: "Feet per Second", factor: 0.3048 },
    kph: { name: "Kilometers per Hour", nameSg: "Kilometer per Hour", factor: 0.277777778 },
  },
  time: {
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
  },
  digital: {
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
  },
  pressure: {
    bar: { name: "Bar", factor: 100000 },
    atm: { name: "Atmosphere", factor: 101325 },
    psi: { name: "PSI", factor: 6894.757293168 },
    kpa: { name: "Kilopascal", factor: 1000 },
    torr: { name: "Torr", factor: 101325 / 760 },
    pa: { name: "Pascal", factor: 1 },
  },
  energy: {
    therm: { name: "Therm", factor: 105505585.262 },
    kwh: { name: "Kilowatt Hours", nameSg: "Kilowatt Hour", factor: 3600000 },
    kcal: { name: "Kilocalories", nameSg: "Kilocalorie", factor: 4184 },
    wh: { name: "Watt Hours", nameSg: "Watt Hour", factor: 3600 },
    kj: { name: "Kilojoules", nameSg: "Kilojoule", factor: 1000 },
    btu: { name: "British Thermal Units", nameSg: "British Thermal Unit", factor: 1055.05585262 },
    cal: { name: "Calories", nameSg: "Calorie", factor: 4.184 },
    ftlb: { name: "Foot-Pounds", nameSg: "Foot-Pound", factor: 1.3558179483314004 },
    j: { name: "Joules", nameSg: "Joule", factor: 1 },
    ev: { name: "Electronvolts", nameSg: "Electronvolt", factor: 1.602176634e-19 },
  },
  angle: {
    turn: { name: "Revolutions", nameSg: "Revolution", factor: 2 * Math.PI },
    deg: { name: "Degrees", nameSg: "Degree", factor: Math.PI / 180 },
    grad: { name: "Gradians", nameSg: "Gradian", factor: Math.PI / 200 },
    rad: { name: "Radians", nameSg: "Radian", factor: 1 },
    mrad: { name: "Milliradians", nameSg: "Milliradian", factor: 0.001 },
    arcmin: { name: "Arc Minutes", nameSg: "Arc Minute", factor: Math.PI / 10800 },
    arcsec: { name: "Arc Seconds", nameSg: "Arc Second", factor: Math.PI / 648000 },
  },
};

const COMMON_CONVERSIONS: Record<UnitCategory, { from: string; to: string; value: number }[]> = {
  length: [
    { from: "km", to: "mi", value: 1 },
    { from: "mi", to: "km", value: 1 },
    { from: "m", to: "ft", value: 1 },
    { from: "ft", to: "m", value: 1 },
    { from: "cm", to: "in", value: 1 },
    { from: "in", to: "cm", value: 1 },
    { from: "km", to: "m", value: 1 },
    { from: "mi", to: "yd", value: 1 },
    { from: "yd", to: "m", value: 1 },
    { from: "mm", to: "in", value: 1 },
  ],
  weight: [
    { from: "kg", to: "lb", value: 1 },
    { from: "lb", to: "kg", value: 1 },
    { from: "g", to: "oz", value: 1 },
    { from: "oz", to: "g", value: 1 },
    { from: "kg", to: "g", value: 1 },
    { from: "g", to: "kg", value: 1 },
    { from: "lb", to: "oz", value: 1 },
    { from: "t", to: "kg", value: 1 },
    { from: "kg", to: "t", value: 1 },
    { from: "mg", to: "g", value: 1 },
  ],
  temperature: [
    { from: "c", to: "f", value: 0 },
    { from: "f", to: "c", value: 32 },
    { from: "c", to: "k", value: 0 },
    { from: "k", to: "c", value: 273.15 },
    { from: "f", to: "k", value: 32 },
    { from: "k", to: "f", value: 273.15 },
  ],
  area: [
    { from: "m2", to: "ft2", value: 1 },
    { from: "ft2", to: "m2", value: 1 },
    { from: "ha", to: "ac", value: 1 },
    { from: "ac", to: "ha", value: 1 },
    { from: "km2", to: "mi2", value: 1 },
    { from: "mi2", to: "km2", value: 1 },
    { from: "m2", to: "yd2", value: 1 },
    { from: "yd2", to: "m2", value: 1 },
    { from: "ft2", to: "in2", value: 1 },
    { from: "in2", to: "ft2", value: 1 },
  ],
  volume: [
    { from: "l", to: "gal", value: 1 },
    { from: "gal", to: "l", value: 1 },
    { from: "l", to: "cup", value: 1 },
    { from: "cup", to: "l", value: 1 },
    { from: "gal", to: "qt", value: 1 },
    { from: "qt", to: "gal", value: 1 },
    { from: "floz", to: "cup", value: 1 },
    { from: "cup", to: "floz", value: 1 },
    { from: "qt", to: "l", value: 1 },
    { from: "gal", to: "floz", value: 1 },
  ],
  speed: [
    { from: "kph", to: "mph", value: 1 },
    { from: "mph", to: "kph", value: 1 },
    { from: "mps", to: "kph", value: 1 },
    { from: "kph", to: "mps", value: 1 },
    { from: "knots", to: "kph", value: 1 },
    { from: "mph", to: "mps", value: 1 },
    { from: "knots", to: "mph", value: 1 },
    { from: "fps", to: "kph", value: 1 },
    { from: "kph", to: "fps", value: 1 },
    { from: "mps", to: "mph", value: 1 },
  ],
  time: [
    { from: "h", to: "min", value: 1 },
    { from: "min", to: "s", value: 1 },
    { from: "d", to: "h", value: 1 },
    { from: "wk", to: "d", value: 1 },
    { from: "yr", to: "d", value: 1 },
    { from: "min", to: "h", value: 1 },
    { from: "s", to: "min", value: 1 },
    { from: "h", to: "d", value: 1 },
    { from: "d", to: "wk", value: 1 },
    { from: "mo", to: "d", value: 1 },
  ],
  digital: [
    { from: "gb", to: "mb", value: 1 },
    { from: "mb", to: "gb", value: 1 },
    { from: "tb", to: "gb", value: 1 },
    { from: "mb", to: "kb", value: 1 },
    { from: "kb", to: "mb", value: 1 },
    { from: "gb", to: "tb", value: 1 },
    { from: "tb", to: "mb", value: 1 },
    { from: "kb", to: "gb", value: 1 },
    { from: "gb", to: "kb", value: 1 },
    { from: "mb", to: "tb", value: 1 },
  ],
  pressure: [
    { from: "bar", to: "psi", value: 1 },
    { from: "psi", to: "bar", value: 1 },
    { from: "kpa", to: "psi", value: 1 },
    { from: "atm", to: "bar", value: 1 },
    { from: "kpa", to: "bar", value: 1 },
    { from: "atm", to: "psi", value: 1 },
    { from: "psi", to: "atm", value: 1 },
    { from: "bar", to: "atm", value: 1 },
    { from: "pa", to: "kpa", value: 1 },
    { from: "torr", to: "atm", value: 1 },
  ],
  energy: [
    { from: "kcal", to: "kj", value: 1 },
    { from: "kj", to: "kcal", value: 1 },
    { from: "kwh", to: "kj", value: 1 },
    { from: "cal", to: "j", value: 1 },
    { from: "btu", to: "kj", value: 1 },
    { from: "kj", to: "btu", value: 1 },
    { from: "wh", to: "kj", value: 1 },
    { from: "j", to: "cal", value: 1 },
    { from: "kwh", to: "btu", value: 1 },
    { from: "btu", to: "kcal", value: 1 },
  ],
  angle: [
    { from: "deg", to: "rad", value: 180 },
    { from: "rad", to: "deg", value: 1 },
    { from: "deg", to: "grad", value: 90 },
    { from: "grad", to: "deg", value: 100 },
    { from: "rad", to: "grad", value: 1 },
    { from: "grad", to: "rad", value: 100 },
    { from: "turn", to: "deg", value: 1 },
    { from: "deg", to: "turn", value: 360 },
    { from: "arcmin", to: "deg", value: 60 },
    { from: "deg", to: "arcmin", value: 1 },
  ],
};

interface UnitConverterProps {
  category: UnitCategory;
  title: string;
}

function formatWithThousands(value: number | string): string {
  const str = typeof value === "string" ? value : String(value);
  const isNeg = str.startsWith("-");
  const s = isNeg ? str.slice(1) : str;
  const [intPart, decPart] = s.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const result = decPart != null ? `${withCommas}.${decPart}` : withCommas;
  return isNeg ? `-${result}` : result;
}

function convertTemperature(
  value: number,
  from: string,
  to: string
): [number, string] {
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
    default:
      result = celsius;
  }

  return [result, formula];
}

function convertStandard(
  value: number,
  from: string,
  to: string,
  category: UnitCategory
): [number, string] {
  const fromFactor = UNITS[category][from].factor!;
  const toFactor = UNITS[category][to].factor!;
  const result = (value * fromFactor) / toFactor;
  const formula = `${formatWithThousands(value)} ${from} × ${formatWithThousands(fromFactor)}/${formatWithThousands(toFactor)} = ${formatWithThousands(result.toFixed(6))} ${to}`;
  return [result, formula];
}

export default function UnitConverter({ category, title }: UnitConverterProps) {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [formulaText, setFormulaText] = useState("Formula will appear here");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const units = UNITS[category];
  const unitKeys = Object.keys(units);

  const showToast = (message: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
      toastTimeoutRef.current = null;
    }, 2500);
  };

  useEffect(() => {
    const keys = Object.keys(UNITS[category]);
    const first = keys[0];
    const last = keys[keys.length - 1];
    setFromUnit(first);
    setToUnit(category === "temperature" ? "f" : last);
  }, [category]);

  const convert = useCallback(() => {
    const keys = Object.keys(UNITS[category]);
    const val = parseFloat(fromValue);
    if (isNaN(val)) {
      setToValue("");
      setFormulaText("Enter a valid number");
      return;
    }

    const from = fromUnit || keys[0];
    const to = toUnit || keys[keys.length - 1];

    let result: number;
    let formula: string;

    if (category === "temperature") {
      [result, formula] = convertTemperature(val, from, to);
    } else {
      [result, formula] = convertStandard(val, from, to, category);
    }

    setToValue(result.toFixed(6));
    setFormulaText(formula);
  }, [fromValue, fromUnit, toUnit, category]);

  useEffect(() => {
    if (fromValue === "") {
      setToValue("");
      setFormulaText("Formula will appear here");
      return;
    }
    convert();
  }, [fromValue, fromUnit, toUnit, convert]);

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    if (fromValue) {
      setFromValue(toValue);
    }
  };

  const copyResult = async () => {
    if (!toValue) {
      showToast("No result to copy");
      return;
    }
    try {
      await navigator.clipboard.writeText(toValue);
      showToast("Result copied to clipboard!");
    } catch {
      showToast("Failed to copy result");
    }
  };

  const commonConversions = COMMON_CONVERSIONS[category] || [];

  const allUnitConversions = (() => {
    const val = parseFloat(fromValue);
    const keys = Object.keys(units);
    const useZero = isNaN(val) || !fromUnit || fromValue === "";
    return keys.map((key) => {
      let result: number;
      if (useZero) {
        result = 0;
      } else if (category === "temperature") {
        [result] = convertTemperature(val, fromUnit, key);
      } else {
        [result] = convertStandard(val, fromUnit, key, category);
      }
      return {
        unitKey: key,
        name: units[key].name,
        value: formatWithThousands(result.toFixed(6)),
      };
    });
  })();

  const inputCls =
    "rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const selectCls =
    "rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div className="mx-auto max-w-6xl relative">
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-slate-100 shadow-lg ring-1 ring-slate-700"
        >
          {toast}
        </div>
      )}
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1 rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-200">{title}</h3>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-1 flex-col gap-2">
            <NumberInputWithStepper
              value={fromValue}
              onChange={(v) => setFromValue(v)}
              placeholder="Enter value"
              className="flex-1"
              aria-label="From value"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className={selectCls}
              aria-label="From unit"
            >
              {unitKeys.map((key) => (
                <option key={key} value={key}>
                  {units[key].name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={swapUnits}
            className="flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-lg border border-slate-600 bg-slate-800 text-slate-400 transition-colors hover:border-slate-500 hover:bg-slate-700 hover:text-slate-200"
            aria-label="Swap units"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 3l4 4-4 4" />
              <path d="M20 7H4" />
              <path d="M8 21l-4-4 4-4" />
              <path d="M4 17h16" />
            </svg>
          </button>

          <div className="flex flex-1 flex-col gap-2">
            <input
              type="text"
              value={toValue ? formatWithThousands(toValue) : ""}
              readOnly
              className={`${inputCls} cursor-default bg-slate-800/70`}
              aria-label="To value"
            />
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className={selectCls}
              aria-label="To unit"
            >
              {unitKeys.map((key) => (
                <option key={key} value={key}>
                  {units[key].name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3">
          <span className="text-sm text-slate-400 font-mono break-all">
            {formulaText}
          </span>
          <button
            type="button"
            onClick={copyResult}
            className="shrink-0 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700"
          >
            Copy Result
          </button>
        </div>

        {commonConversions.length > 0 && (
          <div className="mt-6 border-t border-slate-700 pt-6">
            <p className="mb-3 text-sm font-medium text-slate-400">
              Common Conversions
            </p>
            <div className="flex flex-wrap gap-2">
              {commonConversions.map((conv, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setFromValue(String(conv.value));
                    setFromUnit(conv.from);
                    setToUnit(conv.to);
                  }}
                  className="rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-400 transition-colors hover:border-slate-500 hover:bg-slate-700 hover:text-slate-200"
                >
                  {(units[conv.from]?.nameSg ?? units[conv.from]?.name ?? conv.from)} to {(units[conv.to]?.nameSg ?? units[conv.to]?.name ?? conv.to)}
                </button>
              ))}
            </div>
          </div>
        )}
        </div>

        <div className="min-w-0 flex-1 rounded-xl border border-border bg-surface p-6">
          <h3 className="mb-4 text-lg font-semibold text-slate-200">
            All Unit Conversions
          </h3>
          <div className="max-h-[360px] overflow-y-auto space-y-2 pr-1 scrollbar-thin">
            {allUnitConversions.map(({ unitKey, name, value }) => (
              <div
                key={unitKey}
                className="flex items-center justify-between rounded-lg border border-slate-600 bg-slate-800/50 px-3 py-2 text-sm"
              >
                <span className="text-slate-400">{name}</span>
                <span className="font-mono font-medium text-slate-100">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
