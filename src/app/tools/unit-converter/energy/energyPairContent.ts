import { ENERGY_UNITS, getEnergyMultiplier } from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  kcal:
    "The kilocalorie (kcal) is 1,000 calories in the nutrition sense—often labeled “Calorie” on food packaging. Here 1 kcal = 4,184 J (thermochemical calorie definition used in this tool).",
  kwh:
    "One kilowatt-hour is the energy from 1 kW of power for one hour: 1 kWh = 3,600,000 J. Utility bills and battery specs often use kWh.",
  cal:
    "The small calorie (cal) is 4.184 J in this converter (thermochemical). Do not confuse with the dietary kilocalorie (kcal).",
  j:
    "The joule is the SI unit of energy. All other units here are converted through fixed joule equivalents.",
  kj:
    "One kilojoule is 1,000 J. Scientific and engineering contexts often use kJ alongside joules.",
  wh:
    "One watt-hour is 3,600 J—the energy from 1 W for one hour. Common for small batteries and device ratings.",
  btu:
    "The British thermal unit used here is the IT BTU: ≈ 1,055.056 J. It appears in HVAC, heating equipment, and US engineering data.",
  ev:
    "The electronvolt is the energy change of one elementary charge across 1 V: 1 eV ≈ 1.602176634×10⁻¹⁹ J (exact by SI definition). Used in particle physics and chemistry.",
  therm: "A therm is a large US customary energy unit for natural gas (≈ 105.5 MJ here).",
  ftlb: "The foot-pound is a mechanical work unit common in US torque and ballistics contexts.",
};

export function getUnitDescription(key: string): string {
  return (
    UNIT_DESCRIPTIONS[key] ??
    `${ENERGY_UNITS[key]?.name ?? key} is converted via its joule equivalent in this tool.`
  );
}

export type EnergyKind = "nutrition" | "electric" | "si" | "imperial" | "atomic";

export function getEnergyKind(key: string): EnergyKind {
  if (key === "kcal" || key === "cal") return "nutrition";
  if (key === "kwh" || key === "wh") return "electric";
  if (key === "j" || key === "kj") return "si";
  if (key === "btu" || key === "therm" || key === "ftlb") return "imperial";
  return "atomic";
}

function kindLabel(k: EnergyKind): string {
  if (k === "nutrition") return "food / nutrition energy (calories)";
  if (k === "electric") return "electrical energy (watt-hours)";
  if (k === "si") return "SI energy (joules)";
  if (k === "imperial") return "US / imperial engineering units (BTU, therm, ft·lb)";
  return "atomic-scale energy (electronvolts)";
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const mult = getEnergyMultiplier(fromKey, toKey);
  const fromName = ENERGY_UNITS[fromKey].nameSg ?? ENERGY_UNITS[fromKey].name;
  const toName = ENERGY_UNITS[toKey].nameSg ?? ENERGY_UNITS[toKey].name;
  const fk = getEnergyKind(fromKey);
  const tk = getEnergyKind(toKey);

  if (fk === tk) {
    return `Both units are ${kindLabel(fk)}. Conversions use fixed joule factors, so results stay consistent with the definitions in this converter. The factor from ${fromName} to ${toName} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  return `You are converting between ${kindLabel(fk)} (${ENERGY_UNITS[fromKey].name}) and ${kindLabel(tk)} (${ENERGY_UNITS[toKey].name}). All values are mapped through joules first. The numeric factor is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const m = getEnergyMultiplier(fromKey, toKey);
  const fromName = ENERGY_UNITS[fromKey].nameSg ?? ENERGY_UNITS[fromKey].name;
  const toName = ENERGY_UNITS[toKey].nameSg ?? ENERGY_UNITS[toKey].name;
  const Ff = ENERGY_UNITS[fromKey].factor;
  const Ft = ENERGY_UNITS[toKey].factor;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of joules per ${fromKey} divided by joules per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${Ff} / ${Ft}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string): string | null {
  if (fromKey === "cal" && toKey === "j") {
    return `Thermochemical calorie: 1 cal = 4.184 J exactly in this tool.`;
  }
  if (fromKey === "kcal" && toKey === "cal") {
    return `1 kcal = 1,000 cal (nutrition kilocalorie vs small calorie).`;
  }
  if (fromKey === "kwh" && toKey === "j") {
    return `1 kWh = 1 kJ/s × 3,600 s = 3,600,000 J.`;
  }
  if (fromKey === "kj" && toKey === "j") {
    return `SI prefix: 1 kJ = 1,000 J.`;
  }
  if (fromKey === "wh" && toKey === "j") {
    return `1 Wh = 1 W × 3,600 s / 1,000 = 3,600 J (one watt for one hour).`;
  }
  if (fromKey === "btu" && toKey === "j") {
    return `IT British thermal unit: 1 BTU ≈ 1,055.05585262 J here.`;
  }
  if (fromKey === "ev" && toKey === "j") {
    return `1 eV = 1.602176634×10⁻¹⁹ J by the SI definition of the elementary charge.`;
  }
  return null;
}
