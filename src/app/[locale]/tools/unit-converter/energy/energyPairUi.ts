import { asMap, asText } from "@/lib/tool-ui-helpers";
import { ENERGY_KEY_TO_SLUG, ENERGY_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Joule, Kilocalorie, …) even on localized pages. */
export function energyUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = ENERGY_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function energyUnitSlug(key: string): string {
  return ENERGY_KEY_TO_SLUG[key] ?? key;
}

export function energyUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
