import { asMap, asText } from "@/lib/tool-ui-helpers";
import { WEIGHT_KEY_TO_SLUG, WEIGHT_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Kilogram, Pound, …) even on localized pages. */
export function weightUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = WEIGHT_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function weightUnitSlug(key: string): string {
  return WEIGHT_KEY_TO_SLUG[key] ?? key;
}

export function weightUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
