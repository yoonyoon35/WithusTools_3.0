import { asMap, asText } from "@/lib/tool-ui-helpers";
import { ANGLE_KEY_TO_SLUG, ANGLE_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Degree, Radian, …) even on localized pages. */
export function angleUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = ANGLE_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function angleUnitSlug(key: string): string {
  return ANGLE_KEY_TO_SLUG[key] ?? key;
}

export function angleUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
