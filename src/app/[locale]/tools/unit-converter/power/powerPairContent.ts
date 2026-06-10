import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import {
  POWER_UNITS,
  convertPower,
  formatPowerResult,
  isPowerDbmKey,
} from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";
import { powerUnitLabel } from "./powerPairUi";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  w: "The watt is the SI unit of power (one joule per second). All linear units in this converter are defined by a fixed watt equivalent.",
  mw: "One milliwatt is one thousandth of a watt. Common in RF, fiber optics, and low-power electronics.",
  kw: "One kilowatt is 1,000 W. Motor, heater, and grid-scale loads are often rated in kW.",
  megaw: "One megawatt is one million watts. Utility generation, large drives, and grid studies use MW.",
  gw: "One gigawatt is one billion watts. Utility generation capacity and grid planning commonly use GW.",
  hp: "Mechanical horsepower here is the US definition: 550 ft·lbf/s ≈ 745.70 W. Automotive and industrial specs often cite hp.",
  ps: "PS is metric horsepower (also called Pferdestarke), defined as 735.49875 W. It appears widely in EU and Korean vehicle specs.",
  cv: "CV (cheval-vapeur) is a metric horsepower unit equivalent to 735.49875 W, commonly used in European market specs.",
  btu_hr: "BTU per hour expresses thermal power using the IT British thermal unit (≈ 1,055.056 J per BTU), divided by one hour. Common in HVAC equipment ratings.",
  kcal_h: "Kilocalories per hour is a thermal power rate using the thermochemical kilocalorie (4,184 J per kcal) spread over one hour.",
  va: "Volt-amperes describe apparent power in AC circuits. At unity power factor, VA matches real power in watts; this tool uses that 1:1 mapping for conversion.",
  kva: "One kilovolt-ampere equals 1,000 VA. At unity power factor in this converter, kVA maps linearly to watts.",
  mva: "One megavolt-ampere equals 1,000,000 VA. Common in transformer and grid-scale apparent-power ratings.",
  tr: "One ton of refrigeration (TR) equals 12,000 BTU/h (IT), approximately 3,516.85 W. It is widely used in HVAC and refrigeration sizing.",
  dbm: "dBm is a logarithmic power level relative to 1 mW: P(W) = 10^((dBm − 30)/10). It is standard in RF and telecommunications; it is not a linear multiple of the watt.",
  dbw: "dBW is a logarithmic power level relative to 1 W: P(W) = 10^(dBW/10). RF, microwave, and antenna work often use dBW with dBm.",
  ft_lb_s: "Foot-pounds per second is a mechanical power rate: 1 ft·lb/s = 1.3558179483314004 W (exactly, from the international foot definition).",
};

export type PowerKind = "si" | "thermal" | "mechanical" | "electrical" | "rf";

export function getPowerKind(key: string): PowerKind {
  if (key === "w" || key === "mw" || key === "kw" || key === "megaw" || key === "gw") return "si";
  if (key === "btu_hr" || key === "kcal_h") return "thermal";
  if (key === "hp" || key === "ps" || key === "cv" || key === "ft_lb_s") return "mechanical";
  if (key === "dbm" || key === "dbw") return "rf";
  return "electrical";
}

function kindLabel(k: PowerKind, ui?: unknown): string {
  const pageUi = asMap(ui);
  if (k === "si") return asText(pageUi.kindSi) || "SI / decimal power (watts and prefixes)";
  if (k === "thermal") return asText(pageUi.kindThermal) || "thermal engineering rates (BTU/h, kcal/h)";
  if (k === "mechanical") return asText(pageUi.kindMechanical) || "mechanical power (horsepower, ft·lb/s)";
  if (k === "rf") return asText(pageUi.kindRf) || "logarithmic RF levels (dBm/dBW)";
  return asText(pageUi.kindElectrical) || "apparent power at unity PF (VA)";
}

export function getUnitDescription(key: string, ui?: unknown): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  const localized = asText(descriptions[key]);
  if (localized) return localized;
  return (
    UNIT_DESCRIPTIONS[key] ??
    `${POWER_UNITS[key]?.name ?? key} is converted via its watt equivalent in this tool.`
  );
}

export function getRelationshipContext(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const fromName = powerUnitLabel(ui, fromKey, "nameSg");
  const toName = powerUnitLabel(ui, toKey, "nameSg");
  const fk = getPowerKind(fromKey);
  const tk = getPowerKind(toKey);

  if (isPowerDbmKey(fromKey) || isPowerDbmKey(toKey)) {
    const template = asText(pageUi.relationshipDbm);
    if (template) {
      return formatUi(template, {
        fromKind: kindLabel(fk, pageUi),
        toKind: kindLabel(tk, pageUi),
        fromName,
        toName,
      });
    }
    return `You are converting between ${kindLabel(fk, pageUi)} (${POWER_UNITS[fromKey].name}) and ${kindLabel(tk, pageUi)} (${POWER_UNITS[toKey].name}). Log units (dBm/dBW) use base-10 definitions relative to 1 mW or 1 W; linear units map through watts first, then to or from the selected log unit. Only strictly positive power in watts maps to a real dB power value.`;
  }

  const mult = convertPower(1, fromKey, toKey);
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
    return `Both units are ${kindLabel(fk, pageUi)}. Conversions use fixed watt factors, so results stay consistent with the definitions in this converter. The factor from ${fromName} to ${toName} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  return `You are converting between ${kindLabel(fk, pageUi)} (${POWER_UNITS[fromKey].name}) and ${kindLabel(tk, pageUi)} (${POWER_UNITS[toKey].name}). All linear values are mapped through watts first. The numeric factor is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string, ui?: unknown): string {
  const pageUi = asMap(ui);
  const fromName = powerUnitLabel(ui, fromKey, "nameSg");
  const toName = powerUnitLabel(ui, toKey, "nameSg");

  if (isPowerDbmKey(fromKey) && !isPowerDbmKey(toKey)) {
    const F = POWER_UNITS[toKey].factor!;
    if (fromKey === "dbw") {
      return (
        `To convert ${fromName} to ${toName}, first convert dBW to watts: P_W = 10^(dBW/10). ` +
        `Then divide by the watt factor for ${toKey}: value_${toKey} = P_W / ${F}.`
      );
    }
    return (
      `To convert ${fromName} to ${toName}, first convert dBm to watts: P_W = 10^((dBm − 30)/10). ` +
      `Then divide by the watt factor for ${toKey}: value_${toKey} = P_W / ${F}.`
    );
  }
  if (!isPowerDbmKey(fromKey) && isPowerDbmKey(toKey)) {
    const F = POWER_UNITS[fromKey].factor!;
    if (toKey === "dbw") {
      return (
        `To convert ${fromName} to ${toName}, multiply by watts per ${fromKey}, then apply dBW: ` +
        `dBW = 10 × log₁₀(P_W), where P_W = value_${fromKey} × ${F}. ` +
        `Watts must be positive.`
      );
    }
    return (
      `To convert ${fromName} to ${toName}, multiply by watts per ${fromKey}, then apply dBm: ` +
      `dBm = 10 × log₁₀(P_W × 1000), where P_W = value_${fromKey} × ${F}. ` +
      `Watts must be positive.`
    );
  }
  if (isPowerDbmKey(fromKey) && isPowerDbmKey(toKey)) {
    return `Both units are logarithmic dB power units (dBm/dBW). Map through watts for absolute conversion: first recover watts from the source dB level, then apply the target dB definition.`;
  }

  const Ff = POWER_UNITS[fromKey].factor!;
  const Ft = POWER_UNITS[toKey].factor!;
  const m = Ff / Ft;
  const template = asText(pageUi.summaryTemplate);
  if (template) {
    return formatUi(template, {
      fromName,
      toName,
      fromKey,
      toKey,
      fromFactor: String(Ff),
      toFactor: String(Ft),
      mult: String(m),
    });
  }
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of watts per ${fromKey} divided by watts per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${Ff} / ${Ft}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string, ui?: unknown): string | null {
  const howTo = asMap(asMap(ui).howToConvert);
  const derivations = asMap(howTo.extraDerivations);
  const localized = asText(derivations[`${fromKey}-${toKey}`]);
  if (localized) return localized;

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
