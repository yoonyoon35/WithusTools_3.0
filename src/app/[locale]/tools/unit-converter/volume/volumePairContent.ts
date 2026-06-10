import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import {
  VOLUME_UNITS,
  getVolumeMultiplier,
  getVolumeSystem,
  type VolumeSystem,
} from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";
import { volumeUnitLabel } from "./volumePairUi";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  m3:
    "The cubic meter is the SI-derived unit of volume. One cubic meter equals 1,000 liters. Engineering, shipping containers, and scientific volumes often use m³.",
  ukgal:
    "The UK imperial gallon is defined as approximately 4.54609 liters. It is larger than the US liquid gallon and is used for fuel and drinks labeling in the UK.",
  gal:
    "The US liquid gallon is defined as 231 cubic inches (about 3.78541 liters). US recipes, fuel economy, and retail liquids typically use US gallons.",
  ft3:
    "The cubic foot is the volume of a cube one foot on a side (about 28.3168 liters). HVAC, construction, and US freight sometimes use cubic feet.",
  l:
    "The liter is a metric unit equal to one cubic decimeter (0.001 m³). Science, global food labeling, and most countries' everyday volumes use liters.",
  ukqt:
    "The UK imperial quart is one quarter of an imperial gallon (about 1.1365 liters). It appears in UK cooking and beverage measures.",
  ukpt:
    "The UK imperial pint is half an imperial quart (about 0.56826 liters). UK draught beer and milk are often sold in pints.",
  qt:
    "The US liquid quart is one quarter of a US gallon (about 0.94635 liters). US cooking and retail packaging use liquid quarts.",
  pt:
    "The US liquid pint is half a US liquid quart (about 0.47318 liters). US recipes and dairy containers often use pints.",
  ukcup:
    "The UK metric cup is often taken as 250 ml in modern recipes, though traditional imperial cups differ; this converter uses the liter-based UK cup factor from the shared table.",
  cup:
    "The US customary cup is 236.588 ml (half a US liquid pint). US baking recipes frequently measure dry and liquid ingredients in cups.",
  in3:
    "The cubic inch is the volume of a cube one inch on a side. Engine displacement in the US and small volumes in machining use cubic inches.",
  floz:
    "The US fluid ounce is 1/128 of a US gallon (about 29.5735 ml). US nutrition labels and recipes use fluid ounces for liquids.",
  ukfloz:
    "The UK fluid ounce is 1/160 of an imperial gallon (about 28.4131 ml). UK recipes and beverages may use imperial fluid ounces.",
  tbsp:
    "The US tablespoon is 1/2 US fluid ounce (about 14.7868 ml). US recipes use tablespoons for cooking volumes.",
  uktbsp:
    "The UK tablespoon is often standardized near 15 ml in modern usage; this tool uses the liter-based UK tablespoon factor from the shared table.",
  tsp:
    "The US teaspoon is 1/6 US fluid ounce (about 4.9289 ml). US recipes use teaspoons for spices and small liquid amounts.",
  uktsp:
    "The UK teaspoon is smaller than many US teaspoons; this tool uses the liter-based UK teaspoon factor from the shared table.",
};

export function getUnitDescription(key: string, ui?: unknown): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  const localized = asText(descriptions[key]);
  if (localized) return localized;
  return (
    UNIT_DESCRIPTIONS[key] ?? `${VOLUME_UNITS[key]?.name ?? key} is a standard volume unit in this converter.`
  );
}

function systemLabel(s: VolumeSystem, ui?: unknown): string {
  const pageUi = asMap(ui);
  if (s === "uk") return asText(pageUi.systemUk) || "UK imperial fluid / volume";
  if (s === "us") return asText(pageUi.systemUs) || "US customary fluid / volume";
  return asText(pageUi.systemMetric) || "metric (SI)";
}

export function getRelationshipContext(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const fromSys = getVolumeSystem(fromKey);
  const toSys = getVolumeSystem(toKey);
  const mult = getVolumeMultiplier(fromKey, toKey);
  const fromName = volumeUnitLabel(ui, fromKey, "nameSg");
  const toName = volumeUnitLabel(ui, toKey, "nameSg");
  const vars = {
    fromName,
    toName,
    fromKey,
    toKey,
    mult: String(mult),
    multExp: mult.toExponential(6),
    fromSystem: systemLabel(fromSys, pageUi),
    toSystem: systemLabel(toSys, pageUi),
    system: systemLabel(fromSys, pageUi),
  };

  if (fromSys === toSys && asText(pageUi.relationshipSame)) {
    return formatUi(asText(pageUi.relationshipSame), vars);
  }
  if (fromSys !== toSys && asText(pageUi.relationshipCross)) {
    return formatUi(asText(pageUi.relationshipCross), vars);
  }
  if (asText(pageUi.relationshipDefault)) {
    return formatUi(asText(pageUi.relationshipDefault), vars);
  }

  if (fromSys === toSys) {
    return `Both units are ${systemLabel(fromSys)} in this tool's grouping. Conversions use fixed liter equivalents, so factors are consistent for cooking, engineering, and cross-checking labels. The factor from ${fromName} to ${toName} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  return `You are converting between ${systemLabel(fromSys)} (${VOLUME_UNITS[fromKey].name}) and ${systemLabel(toSys)} (${VOLUME_UNITS[toKey].name}). US and UK fluid measures differ (gallons, ounces, tablespoons); metric liters and cubic meters align with SI. The numeric factor used here is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const m = getVolumeMultiplier(fromKey, toKey);
  const fromName = volumeUnitLabel(ui, fromKey, "nameSg");
  const toName = volumeUnitLabel(ui, toKey, "nameSg");
  const template = asText(pageUi.summaryTemplate);
  if (template) {
    return formatUi(template, {
      fromName,
      toName,
      fromKey,
      toKey,
      fromFactor: String(VOLUME_UNITS[fromKey].factor),
      toFactor: String(VOLUME_UNITS[toKey].factor),
      mult: String(m),
    });
  }
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of liters per ${fromKey} divided by liters per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${VOLUME_UNITS[fromKey].factor} / ${VOLUME_UNITS[toKey].factor}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string, ui?: unknown): string | null {
  const howTo = asMap(asMap(ui).howToConvert);
  const derivations = asMap(howTo.extraDerivations);
  const localized = asText(derivations[`${fromKey}-${toKey}`]);
  if (localized) return localized;

  if (fromKey === "tbsp" && toKey === "tsp") {
    return `1 US tablespoon = 3 US teaspoons exactly (1/2 fl oz vs 1/6 fl oz of a US gallon).`;
  }
  if (fromKey === "tsp" && toKey === "tbsp") {
    return `1 US teaspoon = 1/3 US tablespoon.`;
  }
  if (fromKey === "floz" && toKey === "tbsp") {
    return `1 US fluid ounce = 2 US tablespoons (each tbsp is 1/2 fl oz).`;
  }
  if (fromKey === "m3" && toKey === "l") {
    return `1 cubic meter = 1,000 liters by definition (1 m³ = 1000 dm³).`;
  }
  if (fromKey === "l" && toKey === "m3") {
    return `1 liter = 0.001 cubic meter.`;
  }
  if (fromKey === "gal" && toKey === "l") {
    return `1 US liquid gallon = 231 cubic inches, defined in liters here as 3.78541178 L.`;
  }
  return null;
}
