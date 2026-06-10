import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import {
  TIME_UNITS,
  getTimeMultiplier,
  getTimeTier,
  type TimeTier,
} from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";
import { timeUnitLabel } from "./timePairUi";

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

function tierLabel(t: TimeTier, ui?: unknown): string {
  const pageUi = asMap(ui);
  if (t === "long") return asText(pageUi.tierLong) || "longer spans (days to years, with average month/year definitions)";
  if (t === "medium") return asText(pageUi.tierMedium) || "hours, minutes, and seconds";
  return asText(pageUi.tierShort) || "subsecond precision (milliseconds and smaller)";
}

export function getUnitDescription(key: string, ui?: unknown): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  const localized = asText(descriptions[key]);
  if (localized) return localized;
  return (
    UNIT_DESCRIPTIONS[key] ?? `${TIME_UNITS[key]?.name ?? key} is a standard time unit in this converter.`
  );
}

export function getRelationshipContext(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const fromTier = getTimeTier(fromKey);
  const toTier = getTimeTier(toKey);
  const mult = getTimeMultiplier(fromKey, toKey);
  const fromName = timeUnitLabel(ui, fromKey, "nameSg");
  const toName = timeUnitLabel(ui, toKey, "nameSg");
  const vars = {
    fromName,
    toName,
    fromKey,
    toKey,
    mult: String(mult),
    multExp: mult.toExponential(6),
    tier: tierLabel(fromTier, pageUi),
    fromTier: tierLabel(fromTier, pageUi),
    toTier: tierLabel(toTier, pageUi),
  };

  if (fromTier === toTier && asText(pageUi.relationshipSame)) {
    return formatUi(asText(pageUi.relationshipSame), vars);
  }
  if (fromTier !== toTier && asText(pageUi.relationshipCross)) {
    return formatUi(asText(pageUi.relationshipCross), vars);
  }
  if (asText(pageUi.relationshipDefault)) {
    return formatUi(asText(pageUi.relationshipDefault), vars);
  }

  if (fromTier === toTier) {
    return `Both units fall in ${tierLabel(fromTier)}. Conversions use fixed second counts per unit, so factors stay consistent for estimation and UI math. The factor from ${fromName} to ${toName} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  return `You are converting between ${tierLabel(fromTier)} (${TIME_UNITS[fromKey].name}) and ${tierLabel(toTier)} (${TIME_UNITS[toKey].name}). Very large and very small steps share the same second-based definitions here. The numeric factor is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const m = getTimeMultiplier(fromKey, toKey);
  const fromName = timeUnitLabel(ui, fromKey, "nameSg");
  const toName = timeUnitLabel(ui, toKey, "nameSg");
  const template = asText(pageUi.summaryTemplate);
  if (template) {
    return formatUi(template, {
      fromName,
      toName,
      fromKey,
      toKey,
      fromFactor: String(TIME_UNITS[fromKey].factor),
      toFactor: String(TIME_UNITS[toKey].factor),
      mult: String(m),
    });
  }
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of seconds per ${fromKey} divided by seconds per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${TIME_UNITS[fromKey].factor} / ${TIME_UNITS[toKey].factor}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string, ui?: unknown): string | null {
  const howTo = asMap(asMap(ui).howToConvert);
  const derivations = asMap(howTo.extraDerivations);
  const localized = asText(derivations[`${fromKey}-${toKey}`]);
  if (localized) return localized;

  if (fromKey === "min" && toKey === "s") {
    return `1 minute = 60 seconds exactly.`;
  }
  if (fromKey === "h" && toKey === "min") {
    return `1 hour = 60 minutes exactly.`;
  }
  if (fromKey === "d" && toKey === "h") {
    return `1 day = 24 hours exactly (in this converter's civil-day model).`;
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
