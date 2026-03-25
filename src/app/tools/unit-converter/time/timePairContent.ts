import {
  TIME_UNITS,
  getTimeMultiplier,
  getTimeTier,
  type TimeTier,
} from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  yr:
    "In this converter, one year is defined as exactly 365 days (31,536,000 seconds). Calendar years with leap days differ; use this factor for consistent duration math.",
  mo:
    "One month here is exactly 30 days (2,592,000 seconds)—a common average for converters. Real calendar months vary from 28 to 31 days.",
  wk:
    "One week is 7 days or 604,800 seconds. Weeks are used for schedules, payroll periods, and agile sprints.",
  d:
    "One day is 24 hours or 86,400 seconds (civil day, no leap-second adjustment in this tool).",
  h:
    "One hour is 60 minutes or 3,600 seconds. Hours divide work shifts, travel time, and media duration.",
  min:
    "One minute is 60 seconds. Minutes are standard for short durations and timestamps.",
  s:
    "The second is the SI base unit of time (scientific definition via atomic clocks). This tool uses fixed-length seconds for conversion.",
  ms:
    "One millisecond is one thousandth of a second. Computing, audio, and reaction times use milliseconds.",
  us:
    "One microsecond is one millionth of a second. Electronics and high-speed measurements use microseconds.",
  ns:
    "One nanosecond is one billionth of a second. CPU timings and optics may reference nanoseconds.",
};

export function getUnitDescription(key: string): string {
  return (
    UNIT_DESCRIPTIONS[key] ?? `${TIME_UNITS[key]?.name ?? key} is a standard time unit in this converter.`
  );
}

function tierLabel(t: TimeTier): string {
  if (t === "long") return "longer spans (days to years, with average month/year definitions)";
  if (t === "medium") return "hours, minutes, and seconds";
  return "subsecond precision (milliseconds and smaller)";
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const fromTier = getTimeTier(fromKey);
  const toTier = getTimeTier(toKey);
  const mult = getTimeMultiplier(fromKey, toKey);
  const fromName = TIME_UNITS[fromKey].nameSg ?? TIME_UNITS[fromKey].name;
  const toName = TIME_UNITS[toKey].nameSg ?? TIME_UNITS[toKey].name;

  if (fromTier === toTier) {
    return `Both units fall in ${tierLabel(fromTier)}. Conversions use fixed second counts per unit, so factors stay consistent for estimation and UI math. The factor from ${fromName} to ${toName} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  return `You are converting between ${tierLabel(fromTier)} (${TIME_UNITS[fromKey].name}) and ${tierLabel(toTier)} (${TIME_UNITS[toKey].name}). Very large and very small steps share the same second-based definitions here. The numeric factor is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const m = getTimeMultiplier(fromKey, toKey);
  const fromName = TIME_UNITS[fromKey].nameSg ?? TIME_UNITS[fromKey].name;
  const toName = TIME_UNITS[toKey].nameSg ?? TIME_UNITS[toKey].name;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of seconds per ${fromKey} divided by seconds per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${TIME_UNITS[fromKey].factor} / ${TIME_UNITS[toKey].factor}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string): string | null {
  if (fromKey === "min" && toKey === "s") {
    return `1 minute = 60 seconds exactly.`;
  }
  if (fromKey === "h" && toKey === "min") {
    return `1 hour = 60 minutes exactly.`;
  }
  if (fromKey === "d" && toKey === "h") {
    return `1 day = 24 hours exactly (in this converter’s civil-day model).`;
  }
  if (fromKey === "wk" && toKey === "d") {
    return `1 week = 7 days exactly.`;
  }
  if (fromKey === "s" && toKey === "ms") {
    return `1 second = 1,000 milliseconds exactly.`;
  }
  if (fromKey === "yr" && toKey === "d") {
    return `1 year here = 365 days = 31,536,000 seconds (no leap day in this fixed definition).`;
  }
  return null;
}
