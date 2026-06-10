import { asMap, asText } from "@/lib/tool-ui-helpers";
import { SPEED_KEY_TO_SLUG, SPEED_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Meter per Second, Knot, …) even on localized pages. */
export function speedUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = SPEED_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function speedUnitSlug(key: string): string {
  return SPEED_KEY_TO_SLUG[key] ?? key;
}

export function speedUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
