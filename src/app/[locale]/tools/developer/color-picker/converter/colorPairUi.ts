import { asMap, asText } from "@/lib/tool-ui-helpers";
import { COLOR_FORMAT_LABELS, type ColorFormatKey } from "@/utils/colorFormatConversions";

export function colorFormatLabel(
  ui: unknown,
  key: ColorFormatKey,
  variant: "short" | "long" = "short"
): string {
  const formats = asMap(asMap(ui).formats);
  const entry = asMap(formats[key]);
  const localized = asText(entry[variant]);
  if (localized) return localized;
  return COLOR_FORMAT_LABELS[key][variant];
}

export function localizeColorError(message: string, ui: unknown): string {
  const errors = asMap(asMap(ui).errorMessages);
  return asText(errors[message]) || message;
}
