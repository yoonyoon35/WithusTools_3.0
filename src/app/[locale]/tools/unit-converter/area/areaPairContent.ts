import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import {
  AREA_UNITS,
  getAreaMultiplier,
  getAreaSystem,
  type AreaSystem,
} from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";
import { areaUnitLabel } from "./areaPairUi";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  mi2:
    "The square mile is an imperial and US customary unit of area equal to the area of a square one statute mile on a side. It is common for large land parcels and geography in the US and UK.",
  km2:
    "The square kilometer is a metric unit equal to one million square meters. It is standard for city sizes, large properties, and regional planning in metric countries.",
  ha:
    "The hectare is 10,000 square meters (100 m × 100 m). It is widely used for farmland, forests, and land registration outside the US.",
  daa: "The decare equals 1,000 m² (10 ares). It is used in agriculture and land records in parts of Europe and the Middle East.",
  a: "The are is 100 m². It is a metric land-area unit that sits between square meters and hectares.",
  ac:
    "The international acre is 4,046.8564224 m² by definition. Acres are standard for rural and suburban land in the US and still appear in UK property contexts.",
  pyeong:
    "Pyeong is a Korean traditional area unit used in real estate practice; 1 pyeong is about 3.305785 m².",
  tsubo:
    "Tsubo is a Japanese traditional area unit used in architecture and property contexts; 1 tsubo is about 3.305785 m².",
  m2:
    "The square meter is the SI derived unit of area. Floor plans, building codes, and science typically use square meters.",
  yd2:
    "The square yard is 9 square feet (3 ft × 3 ft). It appears in some sports fields, fabric, and older imperial measurements.",
  ft2:
    "Square feet (ft²) measure area; one ft² is a square with sides of 0.3048 m (international feet-based definitions). Real estate, interior design, and HVAC often use square feet.",
  cm2:
    "The square centimeter is one ten-thousandth of a square meter. Small objects, paper sizes, and biology use square centimeters.",
  in2:
    "The square inch is the area of a square one inch on a side. Displays, machining, and small parts often reference square inches.",
};

export function getUnitDescription(key: string, ui?: unknown): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  const localized = asText(descriptions[key]);
  if (localized) return localized;
  return (
    UNIT_DESCRIPTIONS[key] ?? `${AREA_UNITS[key]?.name ?? key} is a standard area unit in this converter.`
  );
}

function systemLabel(s: AreaSystem, ui?: unknown): string {
  const pageUi = asMap(ui);
  if (s === "imperial") return asText(pageUi.systemImperial) || "US customary / imperial";
  return asText(pageUi.systemMetric) || "metric (SI)";
}

export function getRelationshipContext(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const fromSys = getAreaSystem(fromKey);
  const toSys = getAreaSystem(toKey);
  const mult = getAreaMultiplier(fromKey, toKey);
  const fromName = areaUnitLabel(ui, fromKey, "nameSg");
  const toName = areaUnitLabel(ui, toKey, "nameSg");
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
    return `Both units are ${systemLabel("metric")} and tied to the square meter. Conversions use exact ratios from their m² definitions. The factor from ${fromName} to ${toName} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  if (fromSys === toSys && fromSys === "imperial") {
    return `Both units belong to ${systemLabel("imperial")} area measures. Relationships such as 9 ft² per yd² and 43,560 ft² per acre are exact under standard definitions. This tool uses SI-based square-meter factors for consistency.`;
  }

  if (fromSys !== toSys) {
    return `You are converting between ${systemLabel(fromSys)} (${AREA_UNITS[fromKey].name}) and ${systemLabel(toSys)} (${AREA_UNITS[toKey].name}). Metric area is decimal from the square meter; US/imperial units use feet, yards, miles, and acres tied to international feet (0.3048 m) and related definitions. The numeric factor used here is ${mult.toExponential(6)}.`;
  }

  return `Area units are converted via their exact definitions in square meters. The multiplier between ${fromKey} and ${toKey} is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const m = getAreaMultiplier(fromKey, toKey);
  const fromName = areaUnitLabel(ui, fromKey, "nameSg");
  const toName = areaUnitLabel(ui, toKey, "nameSg");
  const template = asText(pageUi.summaryTemplate);
  if (template) {
    return formatUi(template, {
      fromName,
      toName,
      fromKey,
      toKey,
      fromFactor: String(AREA_UNITS[fromKey].factor),
      toFactor: String(AREA_UNITS[toKey].factor),
      mult: String(m),
    });
  }
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of square meters per ${fromKey} divided by square meters per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${AREA_UNITS[fromKey].factor} / ${AREA_UNITS[toKey].factor}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string, ui?: unknown): string | null {
  const howTo = asMap(asMap(ui).howToConvert);
  const derivations = asMap(howTo.extraDerivations);
  const localized = asText(derivations[`${fromKey}-${toKey}`]);
  if (localized) return localized;

  if (fromKey === "ft2" && toKey === "in2") {
    return `1 ft² (square feet) = 12 in × 12 in = 144 square inches exactly.`;
  }
  if (fromKey === "yd2" && toKey === "ft2") {
    return `1 square yard = 3 ft × 3 ft = 9 ft² (square feet) exactly.`;
  }
  if (fromKey === "ac" && toKey === "ft2") {
    return `1 acre = 43,560 ft² (square feet) by the US survey / international definition used here.`;
  }
  if (fromKey === "ha" && toKey === "m2") {
    return `1 hectare = 100 m × 100 m = 10,000 m² exactly.`;
  }
  if (fromKey === "a" && toKey === "m2") {
    return `1 are = 100 m² exactly.`;
  }
  if (fromKey === "daa" && toKey === "m2") {
    return `1 decare = 1,000 m² exactly (10 ares).`;
  }
  if (fromKey === "pyeong" && toKey === "m2") {
    return `1 pyeong ≈ 3.305785 m² (used in Korean property listings).`;
  }
  if (fromKey === "tsubo" && toKey === "m2") {
    return `1 tsubo ≈ 3.305785 m² (Japanese traditional area unit).`;
  }
  if (fromKey === "km2" && toKey === "m2") {
    return `1 km² = 1,000 m × 1,000 m = 1,000,000 m² exactly.`;
  }
  if (fromKey === "m2" && toKey === "cm2") {
    return `1 m² = 100 cm × 100 cm = 10,000 cm² exactly.`;
  }
  return null;
}
