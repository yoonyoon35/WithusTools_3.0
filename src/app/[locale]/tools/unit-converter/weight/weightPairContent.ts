import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import {
  WEIGHT_UNITS,
  getWeightMultiplier,
  getWeightSystem,
  type WeightSystem,
} from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";
import { weightUnitLabel } from "./weightPairUi";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  t:
    "The metric ton (tonne) is 1,000 kilograms or one million grams. It is standard for freight, agriculture, and industrial mass in most metric countries.",
  cwt_uk:
    "The UK hundredweight (long hundredweight) is 112 lb, about 50.802 kg. It appears in legacy UK trade and agriculture references.",
  cwt_us:
    "The US hundredweight (short hundredweight) is 100 lb, exactly 45.359237 kg from the international pound definition.",
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
  gr: "The grain is 1/7000 of a pound (exactly 64.79891 mg). It is used in ballistics, pharmacy, and precious-metal contexts.",
  ct: "The metric carat is exactly 0.2 grams (200 mg), commonly used for gemstones and jewelry.",
  g:
    "The gram is one thousandth of a kilogram. Recipes, lab work, and small masses typically use grams.",
  oz:
    "The avoirdupois ounce is 1/16 of an avoirdupois pound (about 28.35 g). Cooking and postal weights often use ounces.",
  mg:
    "The milligram is one thousandth of a gram. Medication doses and fine measurements use milligrams.",
  ug:
    "The microgram is one millionth of a gram. It appears in pharmacology and trace analysis.",
};

export function getUnitDescription(key: string, ui?: unknown): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  const localized = asText(descriptions[key]);
  if (localized) return localized;
  return (
    UNIT_DESCRIPTIONS[key] ?? `${WEIGHT_UNITS[key]?.name ?? key} is a standard mass unit in this converter.`
  );
}

function systemLabel(s: WeightSystem, ui?: unknown): string {
  const pageUi = asMap(ui);
  if (s === "us_mass") return asText(pageUi.systemUsMass) || "US customary (short ton)";
  if (s === "imperial") return asText(pageUi.systemImperial) || "imperial / UK (stone, long ton, pound, ounce)";
  return asText(pageUi.systemMetric) || "metric (SI)";
}

export function getRelationshipContext(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const fromSys = getWeightSystem(fromKey);
  const toSys = getWeightSystem(toKey);
  const mult = getWeightMultiplier(fromKey, toKey);
  const fromName = weightUnitLabel(ui, fromKey, "nameSg");
  const toName = weightUnitLabel(ui, toKey, "nameSg");
  const vars = {
    fromName,
    toName,
    fromKey,
    toKey,
    mult: String(mult),
    multExp: mult.toExponential(6),
    fromSystem: systemLabel(fromSys, pageUi),
    toSystem: systemLabel(toSys, pageUi),
  };

  if (fromSys === toSys && fromSys === "metric" && asText(pageUi.relationshipMetric)) {
    return formatUi(asText(pageUi.relationshipMetric), vars);
  }
  if (fromSys === toSys && fromSys === "imperial" && asText(pageUi.relationshipImperial)) {
    return formatUi(asText(pageUi.relationshipImperial), vars);
  }
  if (fromSys !== toSys && asText(pageUi.relationshipCross)) {
    return formatUi(asText(pageUi.relationshipCross), vars);
  }
  if (asText(pageUi.relationshipDefault)) {
    return formatUi(asText(pageUi.relationshipDefault), vars);
  }

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

export function getDetailedFormulaExplanation(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const m = getWeightMultiplier(fromKey, toKey);
  const fromName = weightUnitLabel(ui, fromKey, "nameSg");
  const toName = weightUnitLabel(ui, toKey, "nameSg");
  const template = asText(pageUi.summaryTemplate);
  if (template) {
    return formatUi(template, {
      fromName,
      toName,
      fromKey,
      toKey,
      fromFactor: String(WEIGHT_UNITS[fromKey].factor),
      toFactor: String(WEIGHT_UNITS[toKey].factor),
      mult: String(m),
    });
  }
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of grams per ${fromKey} divided by grams per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${WEIGHT_UNITS[fromKey].factor} / ${WEIGHT_UNITS[toKey].factor}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string, ui?: unknown): string | null {
  const howTo = asMap(asMap(ui).howToConvert);
  const derivations = asMap(howTo.extraDerivations);
  const localized = asText(derivations[`${fromKey}-${toKey}`]);
  if (localized) return localized;

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
  if (fromKey === "ct" && toKey === "g") {
    return `1 carat = 0.2 grams exactly (200 mg).`;
  }
  if (fromKey === "gr" && toKey === "mg") {
    return `1 grain = 64.79891 milligrams (1/7000 lb via the international pound).`;
  }
  return null;
}
