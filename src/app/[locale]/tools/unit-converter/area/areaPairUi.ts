import { asMap, asText } from "@/lib/tool-ui-helpers";
import { AREA_KEY_TO_SLUG, AREA_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Square Meter, Acre, …) even on localized pages. */
export function areaUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = AREA_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function areaUnitSlug(key: string): string {
  return AREA_KEY_TO_SLUG[key] ?? key;
}

export function areaUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
