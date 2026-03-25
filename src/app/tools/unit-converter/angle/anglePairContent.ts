import { ANGLE_UNITS } from "@/utils/conversions";

const UNIT_DESCRIPTIONS: Record<string, string> = {
  turn: "One revolution (turn) is a full circle: 2π radians or 360°. Used in rotation rates, motors, and astronomy (e.g. revolutions per minute).",
  deg: "Degrees divide a circle into 360 parts. Common in everyday angles, maps, and many engineering drawings.",
  arcmin: "An arc minute is 1/60 of a degree (π/10,800 rad). Used in astronomy, navigation, and precision optics (MOA).",
  arcsec: "An arc second is 1/60 of an arc minute or 1/3600 of a degree. Common in astronomy and very fine angular resolution.",
  grad: "Gradians (gon) divide a right angle into 100 parts; 400 gradians make a full turn. Used in some surveying and European contexts.",
  rad: "The radian is the SI unit of plane angle. One radian is the angle subtended by an arc equal to the radius; 2π rad = one full circle.",
  mrad: "A milliradian is 1/1000 radian. Used in ballistics, long-range shooting, and engineering for small angles.",
  mil: "NATO mils split a full circle into 6,400 parts for artillery and tactical optics; 1 mil = 2π/6400 rad.",
};

export function getUnitDescription(key: string): string {
  return (
    UNIT_DESCRIPTIONS[key] ??
    `${ANGLE_UNITS[key]?.name ?? key} is an angle unit in this converter; values bridge through radians.`
  );
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const fromName = ANGLE_UNITS[fromKey]?.nameSg ?? ANGLE_UNITS[fromKey]?.name ?? fromKey;
  const toName = ANGLE_UNITS[toKey]?.nameSg ?? ANGLE_UNITS[toKey]?.name ?? toKey;

  return `Both ${fromName} and ${toName} are converted by fixed multiples of the radian. Multiplying by (rad per ${fromKey}) ÷ (rad per ${toKey}) matches passing through radians, keeping degrees, gradians, arc minutes, NATO mils, and revolutions consistent on the hub.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const fromName = ANGLE_UNITS[fromKey]?.nameSg ?? ANGLE_UNITS[fromKey]?.name ?? fromKey;
  const toName = ANGLE_UNITS[toKey]?.nameSg ?? ANGLE_UNITS[toKey]?.name ?? toKey;

  const fromF = ANGLE_UNITS[fromKey]?.factor;
  const toF = ANGLE_UNITS[toKey]?.factor;
  if (fromF == null || toF == null) {
    return `To convert ${fromName} to ${toName}, this tool uses an intermediate value in radians.`;
  }

  if (fromF === toF) {
    return `To convert ${fromName} to ${toName}, both units use the same radian factor (${fromF} rad per unit) in this tool, so the numeric value is unchanged (1:1).`;
  }

  const ratio = fromF / toF;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by (${fromF} rad per ${fromKey}) / (${toF} rad per ${toKey}). ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${fromF} / ${toF}). Numerically, 1 ${fromKey} equals ${ratio} ${toKey}.`
  );
}
