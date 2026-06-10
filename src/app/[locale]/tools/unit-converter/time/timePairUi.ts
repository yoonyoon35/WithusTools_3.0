import { asMap, asText } from "@/lib/tool-ui-helpers";
import { TIME_KEY_TO_SLUG, TIME_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Hour, Day, …) even on localized pages. */
export function timeUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = TIME_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function timeUnitSlug(key: string): string {
  return TIME_KEY_TO_SLUG[key] ?? key;
}

export function timeUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
