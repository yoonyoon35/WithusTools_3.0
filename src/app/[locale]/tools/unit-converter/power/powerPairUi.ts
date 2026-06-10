import { asMap, asText } from "@/lib/tool-ui-helpers";
import { POWER_KEY_TO_SLUG, POWER_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Watt, Kilowatt, …) even on localized pages. */
export function powerUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = POWER_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function powerUnitSlug(key: string): string {
  return POWER_KEY_TO_SLUG[key] ?? key;
}

export function powerUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
