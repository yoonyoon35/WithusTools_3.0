import { asMap, asText } from "@/lib/tool-ui-helpers";
import { LENGTH_KEY_TO_SLUG, LENGTH_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Meter, Feet, …) even on localized pages. */
export function lengthUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = LENGTH_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function lengthUnitSlug(key: string): string {
  return LENGTH_KEY_TO_SLUG[key] ?? key;
}

export function lengthUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
