"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import {
  AREA_UNITS,
  DIGITAL_UNITS,
  ENERGY_UNITS,
  ANGLE_UNITS,
  LENGTH_UNITS,
  PRESSURE_UNITS,
  SPEED_UNITS,
  TEMPERATURE_UNITS,
  TIME_UNITS,
  VOLUME_UNITS,
  WEIGHT_UNITS,
  convertSpeed,
  convertSpeedWithFormula,
  convertTemperature,
  convertTemperatureWithFormula,
} from "@/utils/conversions";

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
  nameSg?: string; // singular unit label where helpful
  factor?: number; // base unit factor (for non-temperature)
}

const UNITS: Record<UnitCategory, Record<string, UnitDef>> = {
  length: LENGTH_UNITS as Record<string, UnitDef>,
  weight: WEIGHT_UNITS as Record<string, UnitDef>,
  temperature: TEMPERATURE_UNITS as Record<string, UnitDef>,
  area: AREA_UNITS as Record<string, UnitDef>,
  volume: VOLUME_UNITS as Record<string, UnitDef>,
  speed: SPEED_UNITS as Record<string, UnitDef>,
  time: TIME_UNITS as Record<string, UnitDef>,
  digital: DIGITAL_UNITS as Record<string, UnitDef>,
  pressure: PRESSURE_UNITS as Record<string, UnitDef>,
  energy: ENERGY_UNITS as Record<string, UnitDef>,
  angle: ANGLE_UNITS as Record<string, UnitDef>,
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
    const defaultTo =
      category === "temperature"
        ? "f"
        : category === "speed"
          ? "kph"
          : category === "angle"
            ? "rad"
            : keys[keys.length - 1];
    setFromUnit(first);
    setToUnit(defaultTo);
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
    const defaultTo =
      category === "temperature"
        ? "f"
        : category === "speed"
          ? "kph"
          : category === "angle"
            ? "rad"
            : keys[keys.length - 1];
    const to = toUnit || defaultTo;

    let result: number;
    let formula: string;

    if (category === "temperature") {
      [result, formula] = convertTemperatureWithFormula(val, from, to);
    } else if (category === "speed") {
      [result, formula] = convertSpeedWithFormula(val, from, to);
      if (!Number.isFinite(result)) {
        setToValue("");
        setFormulaText(formula);
        return;
      }
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

  const allUnitConversions = (() => {
    const val = parseFloat(fromValue);
    const keys = Object.keys(units);
    const useZero = isNaN(val) || !fromUnit || fromValue === "";
    return keys.map((key) => {
      let result: number;
      if (useZero) {
        result = 0;
      } else if (category === "temperature") {
        result = convertTemperature(val, fromUnit, key);
      } else if (category === "speed") {
        result = convertSpeed(val, fromUnit, key);
      } else {
        [result] = convertStandard(val, fromUnit, key, category);
      }
      return {
        unitKey: key,
        name: units[key].name,
        value: Number.isFinite(result) ? formatWithThousands(result.toFixed(6)) : "—",
      };
    });
  })();

  const inputCls =
    "rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const selectCls =
    "w-full min-w-0 rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

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
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <NumberInputWithStepper
              value={fromValue}
              onChange={(v) => setFromValue(v)}
              placeholder="Enter value"
              className="min-w-0 flex-1"
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

          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <input
              type="text"
              value={toValue ? formatWithThousands(toValue) : ""}
              readOnly
              className={`${inputCls} min-w-0 w-full cursor-default bg-slate-800/70`}
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

        <div className="mt-4 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3">
          <span className="min-w-0 flex-1 text-sm font-mono text-slate-400 break-all">
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
