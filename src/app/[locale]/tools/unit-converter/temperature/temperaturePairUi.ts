import { asMap, asText } from "@/lib/tool-ui-helpers";
import { TEMPERATURE_KEY_TO_SLUG, TEMPERATURE_UNITS } from "@/utils/conversions";

/** Scale names stay in English (Celsius, Fahrenheit, …) even on localized pages. */
export function temperatureUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = TEMPERATURE_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function temperatureUnitSlug(key: string): string {
  return TEMPERATURE_KEY_TO_SLUG[key] ?? key;
}

export function temperatureUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
