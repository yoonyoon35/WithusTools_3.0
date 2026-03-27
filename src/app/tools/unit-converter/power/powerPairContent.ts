import { POWER_UNITS, convertPower, formatPowerResult, isPowerDbmKey } from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  w: "The watt is the SI unit of power (one joule per second). All linear units in this converter are defined by a fixed watt equivalent.",
  mw: "One milliwatt is one thousandth of a watt. Common in RF, fiber optics, and low-power electronics.",
  kw: "One kilowatt is 1,000 W. Motor, heater, and grid-scale loads are often rated in kW.",
  megaw: "One megawatt is one million watts. Utility generation, large drives, and grid studies use MW.",
  hp: "Mechanical horsepower here is the US definition: 550 ft·lbf/s ≈ 745.70 W. Automotive and industrial specs often cite hp.",
  btu_hr: "BTU per hour expresses thermal power using the IT British thermal unit (≈ 1,055.056 J per BTU), divided by one hour. Common in HVAC equipment ratings.",
  kcal_h: "Kilocalories per hour is a thermal power rate using the thermochemical kilocalorie (4,184 J per kcal) spread over one hour.",
  va: "Volt-amperes describe apparent power in AC circuits. At unity power factor, VA matches real power in watts; this tool uses that 1:1 mapping for conversion.",
  dbm: "dBm is a logarithmic power level relative to 1 mW: P(W) = 10^((dBm − 30)/10). It is standard in RF and telecommunications; it is not a linear multiple of the watt.",
  ft_lb_s: "Foot-pounds per second is a mechanical power rate: 1 ft·lb/s = 1.3558179483314004 W (exactly, from the international foot definition).",
};

export function getUnitDescription(key: string): string {
  return (
    UNIT_DESCRIPTIONS[key] ?? `${POWER_UNITS[key]?.name ?? key} is converted via its watt equivalent in this tool.`
  );
}

export type PowerKind = "si" | "thermal" | "mechanical" | "electrical" | "rf";

export function getPowerKind(key: string): PowerKind {
  if (key === "w" || key === "mw" || key === "kw" || key === "megaw") return "si";
  if (key === "btu_hr" || key === "kcal_h") return "thermal";
  if (key === "hp" || key === "ft_lb_s") return "mechanical";
  if (key === "dbm") return "rf";
  return "electrical";
}

function kindLabel(k: PowerKind): string {
  if (k === "si") return "SI / decimal power (watts and prefixes)";
  if (k === "thermal") return "thermal engineering rates (BTU/h, kcal/h)";
  if (k === "mechanical") return "mechanical power (horsepower, ft·lb/s)";
  if (k === "rf") return "logarithmic RF levels (dBm)";
  return "apparent power at unity PF (VA)";
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const fromName = POWER_UNITS[fromKey].nameSg ?? POWER_UNITS[fromKey].name;
  const toName = POWER_UNITS[toKey].nameSg ?? POWER_UNITS[toKey].name;
  const fk = getPowerKind(fromKey);
  const tk = getPowerKind(toKey);

  if (isPowerDbmKey(fromKey) || isPowerDbmKey(toKey)) {
    return `You are converting between ${kindLabel(fk)} (${POWER_UNITS[fromKey].name}) and ${kindLabel(tk)} (${POWER_UNITS[toKey].name}). dBm uses a base-10 logarithm relative to 1 mW; linear units map through watts first, then to or from dBm. Only strictly positive power in watts maps to a real dBm value.`;
  }

  const mult = convertPower(1, fromKey, toKey);
  if (fk === tk) {
    return `Both units are ${kindLabel(fk)}. Conversions use fixed watt factors, so results stay consistent with the definitions in this converter. The factor from ${fromName} to ${toName} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  return `You are converting between ${kindLabel(fk)} (${POWER_UNITS[fromKey].name}) and ${kindLabel(tk)} (${POWER_UNITS[toKey].name}). All linear values are mapped through watts first. The numeric factor is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const fromName = POWER_UNITS[fromKey].nameSg ?? POWER_UNITS[fromKey].name;
  const toName = POWER_UNITS[toKey].nameSg ?? POWER_UNITS[toKey].name;

  if (isPowerDbmKey(fromKey) && !isPowerDbmKey(toKey)) {
    const F = POWER_UNITS[toKey].factor!;
    return (
      `To convert ${fromName} to ${toName}, first convert dBm to watts: P_W = 10^((dBm − 30)/10). ` +
      `Then divide by the watt factor for ${toKey}: value_${toKey} = P_W / ${F}.`
    );
  }
  if (!isPowerDbmKey(fromKey) && isPowerDbmKey(toKey)) {
    const F = POWER_UNITS[fromKey].factor!;
    return (
      `To convert ${fromName} to ${toName}, multiply by watts per ${fromKey}, then apply dBm: ` +
      `dBm = 10 × log₁₀(P_W × 1000), where P_W = value_${fromKey} × ${F}. ` +
      `Watts must be positive.`
    );
  }
  if (isPowerDbmKey(fromKey) && isPowerDbmKey(toKey)) {
    return `Both units are dBm; subtracting levels on the log scale is equivalent to a ratio in linear power. For absolute conversion to another dBm reading, map through watts: dBm_to = 10 × log₁₀(10^((dBm_from − 30)/10) × 1000).`;
  }

  const Ff = POWER_UNITS[fromKey].factor!;
  const Ft = POWER_UNITS[toKey].factor!;
  const m = Ff / Ft;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of watts per ${fromKey} divided by watts per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${Ff} / ${Ft}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string): string | null {
  if (fromKey === "kw" && toKey === "w") {
    return `SI prefix: 1 kW = 1,000 W exactly.`;
  }
  if (fromKey === "w" && toKey === "mw") {
    return `1 W = 1,000 mW.`;
  }
  if (fromKey === "hp" && toKey === "kw") {
    return `1 mechanical hp ≈ 0.74569987 kW (exact definition via 550 ft·lbf/s).`;
  }
  if (fromKey === "btu_hr" && toKey === "w") {
    return `1 BTU/h (IT) = 1,055.05585262 J/h ÷ 3,600 s ≈ 0.29307107 W.`;
  }
  if (fromKey === "va" && toKey === "w") {
    return `At unity power factor, 1 VA corresponds to 1 W of real power.`;
  }
  return null;
}
