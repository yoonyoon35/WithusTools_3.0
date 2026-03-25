import {
  AREA_UNITS,
  getAreaMultiplier,
  getAreaSystem,
  type AreaSystem,
} from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  mi2:
    "The square mile is an imperial and US customary unit of area equal to the area of a square one statute mile on a side. It is common for large land parcels and geography in the US and UK.",
  km2:
    "The square kilometer is a metric unit equal to one million square meters. It is standard for city sizes, large properties, and regional planning in metric countries.",
  ha:
    "The hectare is 10,000 square meters (100 m × 100 m). It is widely used for farmland, forests, and land registration outside the US.",
  ac:
    "The international acre is 4,046.8564224 m² by definition. Acres are standard for rural and suburban land in the US and still appear in UK property contexts.",
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

export function getUnitDescription(key: string): string {
  return (
    UNIT_DESCRIPTIONS[key] ?? `${AREA_UNITS[key]?.name ?? key} is a standard area unit in this converter.`
  );
}

function systemLabel(s: AreaSystem): string {
  if (s === "imperial") return "US customary / imperial";
  return "metric (SI)";
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const fromSys = getAreaSystem(fromKey);
  const toSys = getAreaSystem(toKey);
  const mult = getAreaMultiplier(fromKey, toKey);
  const fromName = AREA_UNITS[fromKey].nameSg ?? AREA_UNITS[fromKey].name;
  const toName = AREA_UNITS[toKey].nameSg ?? AREA_UNITS[toKey].name;

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

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const m = getAreaMultiplier(fromKey, toKey);
  const fromName = AREA_UNITS[fromKey].nameSg ?? AREA_UNITS[fromKey].name;
  const toName = AREA_UNITS[toKey].nameSg ?? AREA_UNITS[toKey].name;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of square meters per ${fromKey} divided by square meters per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${AREA_UNITS[fromKey].factor} / ${AREA_UNITS[toKey].factor}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string): string | null {
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
  if (fromKey === "km2" && toKey === "m2") {
    return `1 km² = 1,000 m × 1,000 m = 1,000,000 m² exactly.`;
  }
  if (fromKey === "m2" && toKey === "cm2") {
    return `1 m² = 100 cm × 100 cm = 10,000 cm² exactly.`;
  }
  return null;
}
