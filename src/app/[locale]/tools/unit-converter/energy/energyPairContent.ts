import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import { ENERGY_UNITS, getEnergyMultiplier } from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";
import { energyUnitLabel } from "./energyPairUi";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  toe: "A ton of oil equivalent (toe) is a large industrial energy unit standardized at 41.868 GJ. It is common in energy policy and fuel-balance reporting.",
  gj: "One gigajoule is 1,000,000,000 J. Utility-scale and fuel-system reporting commonly use GJ.",
  mmbtu:
    "MMBtu means one million IT BTU: 1,000,000 × 1,055.05585262 J. It is widely used in gas and thermal energy markets.",
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
  kwh_th:
    "Kilowatt-hour (thermal) is shown as a thermal-energy label and uses the same joule definition as kWh (3.6 MJ).",
  mj: "One megajoule is 1,000,000 J. It is common in fuel-content and engineering thermal calculations.",
  ftlb: "The feet-pound is a mechanical work unit common in US torque and ballistics contexts.",
  gev: "A gigaelectronvolt is 10^9 eV and is used in high-energy physics scales.",
  mev: "A megaelectronvolt is 10^6 eV and appears in nuclear and particle physics contexts.",
};

export type EnergyKind = "nutrition" | "electric" | "si" | "imperial" | "atomic";

export function getEnergyKind(key: string): EnergyKind {
  if (key === "kcal" || key === "cal") return "nutrition";
  if (key === "kwh" || key === "kwh_th" || key === "wh") return "electric";
  if (key === "j" || key === "kj" || key === "mj" || key === "gj") return "si";
  if (key === "btu" || key === "mmbtu" || key === "therm" || key === "toe" || key === "ftlb") return "imperial";
  return "atomic";
}

function kindLabel(k: EnergyKind, ui?: unknown): string {
  const pageUi = asMap(ui);
  if (k === "nutrition") return asText(pageUi.kindNutrition) || "food / nutrition energy (calories)";
  if (k === "electric") return asText(pageUi.kindElectric) || "electrical energy (watt-hours)";
  if (k === "si") return asText(pageUi.kindSi) || "SI energy (joules)";
  if (k === "imperial") return asText(pageUi.kindImperial) || "US / imperial engineering units (BTU, therm, ft·lb)";
  return asText(pageUi.kindAtomic) || "atomic-scale energy (electronvolts)";
}

export function getUnitDescription(key: string, ui?: unknown): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  const localized = asText(descriptions[key]);
  if (localized) return localized;
  return (
    UNIT_DESCRIPTIONS[key] ??
    `${ENERGY_UNITS[key]?.name ?? key} is converted via its joule equivalent in this tool.`
  );
}

export function getRelationshipContext(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const mult = getEnergyMultiplier(fromKey, toKey);
  const fromName = energyUnitLabel(ui, fromKey, "nameSg");
  const toName = energyUnitLabel(ui, toKey, "nameSg");
  const fk = getEnergyKind(fromKey);
  const tk = getEnergyKind(toKey);
  const vars = {
    fromName,
    toName,
    fromKey,
    toKey,
    mult: String(mult),
    multExp: mult.toExponential(6),
    kind: kindLabel(fk, pageUi),
    fromKind: kindLabel(fk, pageUi),
    toKind: kindLabel(tk, pageUi),
  };

  if (fk === tk && asText(pageUi.relationshipSame)) {
    return formatUi(asText(pageUi.relationshipSame), vars);
  }
  if (fk !== tk && asText(pageUi.relationshipCross)) {
    return formatUi(asText(pageUi.relationshipCross), vars);
  }
  if (asText(pageUi.relationshipDefault)) {
    return formatUi(asText(pageUi.relationshipDefault), vars);
  }

  if (fk === tk) {
    return `Both units are ${kindLabel(fk, pageUi)}. Conversions use fixed joule factors, so results stay consistent with the definitions in this converter. The factor from ${fromName} to ${toName} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  return `You are converting between ${kindLabel(fk, pageUi)} (${ENERGY_UNITS[fromKey].name}) and ${kindLabel(tk, pageUi)} (${ENERGY_UNITS[toKey].name}). All values are mapped through joules first. The numeric factor is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const m = getEnergyMultiplier(fromKey, toKey);
  const fromName = energyUnitLabel(ui, fromKey, "nameSg");
  const toName = energyUnitLabel(ui, toKey, "nameSg");
  const template = asText(pageUi.summaryTemplate);
  if (template) {
    return formatUi(template, {
      fromName,
      toName,
      fromKey,
      toKey,
      fromFactor: String(ENERGY_UNITS[fromKey].factor),
      toFactor: String(ENERGY_UNITS[toKey].factor),
      mult: String(m),
    });
  }
  const Ff = ENERGY_UNITS[fromKey].factor;
  const Ft = ENERGY_UNITS[toKey].factor;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of joules per ${fromKey} divided by joules per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${Ff} / ${Ft}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string, ui?: unknown): string | null {
  const howTo = asMap(asMap(ui).howToConvert);
  const derivations = asMap(howTo.extraDerivations);
  const localized = asText(derivations[`${fromKey}-${toKey}`]);
  if (localized) return localized;

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
  if (fromKey === "mj" && toKey === "j") {
    return `SI prefix: 1 MJ = 1,000,000 J.`;
  }
  if (fromKey === "gj" && toKey === "j") {
    return `SI prefix: 1 GJ = 1,000,000,000 J.`;
  }
  if (fromKey === "wh" && toKey === "j") {
    return `1 Wh = 1 W × 3,600 s / 1,000 = 3,600 J (one watt for one hour).`;
  }
  if (fromKey === "btu" && toKey === "j") {
    return `IT British thermal unit: 1 BTU ≈ 1,055.05585262 J here.`;
  }
  if (fromKey === "mmbtu" && toKey === "j") {
    return `1 MMBtu = 1,000,000 BTU (IT) ≈ 1.05505585262 × 10^9 J.`;
  }
  if (fromKey === "ev" && toKey === "j") {
    return `1 eV = 1.602176634×10⁻¹⁹ J by the SI definition of the elementary charge.`;
  }
  return null;
}
