import {
  WEIGHT_UNITS,
  getWeightMultiplier,
  getWeightSystem,
  type WeightSystem,
} from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  t:
    "The metric ton (tonne) is 1,000 kilograms or one million grams. It is standard for freight, agriculture, and industrial mass in most metric countries.",
  lton:
    "The long ton (UK ton) is 2,240 pounds avoirdupois (about 1.016 metric tons). It appears in UK shipping and some historical contexts.",
  ust:
    "The US short ton is 2,000 pounds avoirdupois (exactly 907.18474 kg in the international avoirdupois pound definition). Common in US freight and industry.",
  st:
    "The stone is 14 pounds (UK and Ireland). It is often used for human body weight in those regions.",
  kg:
    "The kilogram is the SI base unit of mass (defined via fundamental constants). Everyday metric weights and science use kilograms and grams.",
  lb:
    "The international avoirdupois pound is exactly 0.45359237 kg. It is the standard pound for weight in the US and for many trade weights.",
  g:
    "The gram is one thousandth of a kilogram. Recipes, lab work, and small masses typically use grams.",
  oz:
    "The avoirdupois ounce is 1/16 of an avoirdupois pound (about 28.35 g). Cooking and postal weights often use ounces.",
  mg:
    "The milligram is one thousandth of a gram. Medication doses and fine measurements use milligrams.",
  ug:
    "The microgram is one millionth of a gram. It appears in pharmacology and trace analysis.",
};

export function getUnitDescription(key: string): string {
  return (
    UNIT_DESCRIPTIONS[key] ?? `${WEIGHT_UNITS[key]?.name ?? key} is a standard mass unit in this converter.`
  );
}

function systemLabel(s: WeightSystem): string {
  if (s === "us_mass") return "US customary (short ton)";
  if (s === "imperial") return "imperial / UK (stone, long ton, pound, ounce)";
  return "metric (SI)";
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const fromSys = getWeightSystem(fromKey);
  const toSys = getWeightSystem(toKey);
  const mult = getWeightMultiplier(fromKey, toKey);
  const fromName = WEIGHT_UNITS[fromKey].nameSg ?? WEIGHT_UNITS[fromKey].name;
  const toName = WEIGHT_UNITS[toKey].nameSg ?? WEIGHT_UNITS[toKey].name;

  if (fromSys === toSys && fromSys === "metric") {
    return `Both units are ${systemLabel("metric")} and tied to the gram via the kilogram. Conversions use exact ratios from their gram definitions. The factor from ${fromName} to ${toName} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  if (fromSys === toSys && fromSys === "imperial") {
    return `Both units belong to ${systemLabel("imperial")}. Relationships such as 16 oz per lb and 14 lb per stone are exact in the avoirdupois system; tons use fixed pound counts. This tool uses international definitions tied to the kilogram.`;
  }

  if (fromSys !== toSys) {
    return `You are converting between ${systemLabel(fromSys)} (${WEIGHT_UNITS[fromKey].name}) and ${systemLabel(toSys)} (${WEIGHT_UNITS[toKey].name}). Metric mass is decimal from the gram; US and imperial masses use pounds and ounces with fixed definitions relative to the kilogram. The numeric factor used here is ${mult.toExponential(6)}.`;
  }

  return `Mass units are converted via their exact definitions in grams. The multiplier between ${fromKey} and ${toKey} is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const m = getWeightMultiplier(fromKey, toKey);
  const fromName = WEIGHT_UNITS[fromKey].nameSg ?? WEIGHT_UNITS[fromKey].name;
  const toName = WEIGHT_UNITS[toKey].nameSg ?? WEIGHT_UNITS[toKey].name;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of grams per ${fromKey} divided by grams per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${WEIGHT_UNITS[fromKey].factor} / ${WEIGHT_UNITS[toKey].factor}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string): string | null {
  if (fromKey === "kg" && toKey === "lb") {
    return `1 kilogram is also equal to 1 ÷ 0.45359237 pounds (international pound definition), which matches the gram-based factor used here.`;
  }
  if (fromKey === "lb" && toKey === "oz") {
    return `1 pound = 16 ounces (avoirdupois) exactly.`;
  }
  if (fromKey === "oz" && toKey === "lb") {
    return `1 ounce = 1/16 pound (avoirdupois).`;
  }
  if (fromKey === "st" && toKey === "lb") {
    return `1 stone = 14 pounds exactly (UK/Ireland usage).`;
  }
  if (fromKey === "g" && toKey === "mg") {
    return `1 gram = 1,000 milligrams (metric).`;
  }
  if (fromKey === "mg" && toKey === "g") {
    return `1 milligram = 1/1,000 gram.`;
  }
  if (fromKey === "t" && toKey === "kg") {
    return `1 metric ton = 1,000 kilograms by definition.`;
  }
  return null;
}
