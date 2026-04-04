import type { ColorFormatKey } from "@/utils/colorFormatConversions";
import { COLOR_FORMAT_LABELS } from "@/utils/colorFormatConversions";

/** Ordered steps for the “How to convert” section on each dedicated pair page. */
export function getConversionProcedureSteps(from: ColorFormatKey, to: ColorFormatKey): string[] {
  const f = COLOR_FORMAT_LABELS[from].short;
  const t = COLOR_FORMAT_LABELS[to].short;

  const step1 = getProcedureStepParse(from, f);
  const step2 = getProcedureStepToSrgb(from, f);
  const step3 = getProcedureStepEncode(to, t);
  const step4 = getProcedureStepFinalize(f, t);
  const foot = getProcedureFootnote(from, to);

  return [step1, step2, step3, step4, ...(foot ? [foot] : [])];
}

function getProcedureStepParse(from: ColorFormatKey, f: string): string {
  switch (from) {
    case "hex":
      return `Parse ${f}: optional leading “#” is removed. The parser expects exactly six hexadecimal digits for opaque colors (#RRGGBB), or eight digits when an alpha byte is included (#RRGGBBAA). Each pair is read as base 16 and becomes one channel in the 0–255 range. Invalid length or non-hex characters are rejected.`;
    case "rgb":
      return `Parse ${f}: accept either a CSS function rgb(r, g, b) or three numbers separated by commas. Whitespace is ignored. Each of R, G, B must be an integer or decimal within 0–255; values outside that range are treated as invalid input.`;
    case "rgba":
      return `Parse ${f}: accept rgba(r, g, b, a) or four comma-separated numbers. R, G, B follow the same 0–255 rule as RGB. Alpha may be written between 0 and 1 (typical for CSS) or, if you enter a value between 1 and 255, it is interpreted as an 8-bit alpha and divided by 255.`;
    case "hsl":
      return `Parse ${f}: accept hsl(h, s%, l%) or three numbers; hue may omit the degree symbol and is wrapped to 0–360°. Saturation and lightness are read as 0–100 (percent signs optional). The parser does not output HSL again here—it only reads your numbers so the tool can move onward to sRGB.`;
    case "hsv":
      return `Parse ${f}: accept hsv(h, s%, v%) (sometimes called HSB in other apps) with the same numeric conventions as HSL: hue 0–360°, saturation and value 0–100%. Again, these values are inputs only; the engine converts them to RGB next.`;
    case "cmyk":
      return `Parse ${f}: accept cmyk(c%, m%, y%, k%) or four comma-separated numbers. Each of C, M, Y, K is expected in 0–100, representing ink percentages for the simple subtractive model used on this site (not a specific printer ICC profile).`;
    default:
      return "";
  }
}

function getProcedureStepToSrgb(from: ColorFormatKey, f: string): string {
  switch (from) {
    case "hex":
      return `Resolve to internal sRGB: after parsing, the color is already expressed as three 8-bit channels. If only six hex digits were given, alpha is set to 1. If eight digits were given, the seventh and eighth nibbles define alpha as (alphaByte ÷ 255).`;
    case "rgb":
      return `Resolve to internal sRGB: the three integers are taken as R, G, B directly in sRGB. Alpha is fixed at 1 because plain RGB carries no transparency in this tool.`;
    case "rgba":
      return `Resolve to internal sRGB: R, G, B are used as-is; alpha is clamped to 0–1. All later steps that only care about red, green, and blue use these same channel values; formats that support opacity (RGBA, 8-digit HEX) read alpha from this internal value.`;
    case "hsl":
      return `Convert ${f} → sRGB: saturation and lightness are scaled to 0–1. Chroma C = (1 − |2L − 1|) × S. A temporary RGB triple is built from hue’s 60° segment (the “hex cone” model), then the same offset m = L − C/2 is added to each channel. Finally, each channel is multiplied by 255 and rounded to the nearest integer with clamping to 0–255.`;
    case "hsv":
      return `Convert ${f} → sRGB: S and V (value / brightness) are scaled to 0–1. Chroma C = V × S. As with HSL, hue selects which two of R,G,B carry the chroma and intermediate values; m = V − C is added to each channel before scaling to 0–255 with rounding and clamping.`;
    case "cmyk":
      return `Convert ${f} → sRGB: using normalized c,m,y,k ∈ [0,1], the tool applies the standard inverse: R = 255 × (1 − c)(1 − k), G = 255 × (1 − m)(1 − k), B = 255 × (1 − y)(1 − k). Integer CMYK can match more than one RGB after rounding; when several triples yield the same rounded CMYK, this site picks the one aligned with the Color Picker’s convention so copied CMYK values round-trip to the same HEX shown there.`;
    default:
      return "";
  }
}

function getProcedureStepEncode(to: ColorFormatKey, t: string): string {
  switch (to) {
    case "hex":
      return `Build ${t}: each of R, G, B is clamped to 0–255, rounded to an integer, and written as two uppercase hexadecimal digits. The calculator concatenates them as #RRGGBB. If the internal alpha is less than 1 (from RGBA or 8-digit hex input), two more hex digits are appended so the string becomes #RRGGBBAA; otherwise the six-digit form is used.`;
    case "rgb":
      return `Build ${t}: emit css rgb(r, g, b) with integer channels 0–255 separated by commas and spaces, matching common authoring style.`;
    case "rgba":
      return `Build ${t}: same RGB channels as above; alpha is formatted as a decimal in 0–1 with up to three significant fractional digits (trailing zeros trimmed), e.g. rgba(52, 152, 219, 0.85).`;
    case "hsl":
      return `Build ${t}: RGB is normalized to 0–1. Lightness L = (max + min)/2. Saturation S is 0 if max = min; otherwise S = (max − min) / (max + min) when L ≤ 0.5, or S = (max − min) / (2 − max − min) when L > 0.5. Hue (0–360°) is derived from which channel is maximal and the differences between channels. The page displays integer degrees and whole-number percentages: hsl(h, s%, l%).`;
    case "hsv":
      return `Build ${t}: V = max(R,G,B) (as a 0–100% value after scaling), S = 0 if V = 0, else S = (max − min) / max × 100. Hue uses the same 60° family of cases as the HSL step. Output is integer hue and whole percentages: hsv(h, s%, v%).`;
    case "cmyk":
      return `Build ${t}: let r,g,b be 0–1. K = 1 − max(r,g,b). If K = 1, the result is (0,0,0,100). Otherwise C, M, Y are computed as (1 − r − K)/(1 − K) etc., multiplied by 100, and rounded to integer percentages for display: cmyk(c%, m%, y%, k%).`;
    default:
      return "";
  }
}

function getProcedureStepFinalize(f: string, t: string): string {
  return `Finalize: the result string is what you copy from the calculator. The line under the fields summarizes the path in short form (${t} ← sRGB ← ${f}). Rounding is intentional so values read like typical CSS; tiny differences versus other apps can still appear because of integer hue, saturation, lightness/value, or ink percentages.`;
}

function getProcedureFootnote(from: ColorFormatKey, to: ColorFormatKey): string | null {
  const parts: string[] = [];
  if (from === "cmyk" || to === "cmyk") {
    parts.push(
      `CMYK reminder: this model is a screen-side approximation. For print-critical work, follow your printer or PDF export profile; use HEX/RGB on this site as the authoritative on-screen reference.`
    );
  }
  if (from === "hsv" || to === "hsv" || from === "hsl" || to === "hsl") {
    parts.push(
      `HSL/HSV reminder: when hue, saturation, and lightness/value are shown as whole numbers, more than one underlying RGB can produce the same text. Typing those integers back into a converter may therefore differ by ±1 from a color you first picked as HEX in the Color Picker—that is expected rounding behavior, not a broken formula.`
    );
  }
  return parts.length > 0 ? parts.join(" ") : null;
}

export function getFormatDescription(key: ColorFormatKey): string {
  switch (key) {
    case "hex":
      return "Hexadecimal codes pack red, green, and blue into six (or eight with alpha) base-16 digits. They are the default in CSS, design tools, and APIs.";
    case "rgb":
      return "RGB expresses a color as three integers from 0 to 255 for red, green, and blue in the sRGB space. It matches how screens mix light.";
    case "rgba":
      return "RGBA adds an alpha channel (opacity) from 0 (transparent) to 1 (opaque). The first three channels are the same as RGB.";
    case "hsl":
      return "HSL uses hue (0–360°), saturation (0–100%), and lightness (0–100%). It is convenient for adjusting perceived brightness and vividness.";
    case "hsv":
      return "HSV (also called HSB in some apps) uses hue, saturation (0–100%), and value/brightness (0–100%). It aligns with how many color wheels behave.";
    case "cmyk":
      return "CMYK describes cyan, magenta, yellow, and black ink percentages (0–100%). It is a print-oriented model; on-screen preview still uses RGB.";
    default:
      return "";
  }
}

export function getDetailedFormulaExplanation(from: ColorFormatKey, to: ColorFormatKey): string {
  const f = COLOR_FORMAT_LABELS[from].short;
  const t = COLOR_FORMAT_LABELS[to].short;
  return `This page converts ${f} input into ${t} output. The numbered “Conversion procedure” above is the full breakdown: validation and parsing, conversion to a single internal sRGB (+ alpha) sample, derivation of ${t} coordinates from that sample, and final rounding to the strings you see in CSS-oriented tools. The same pipeline runs in your browser as you type.`;
}

export function getRelationshipContext(from: ColorFormatKey, to: ColorFormatKey): string {
  const f = COLOR_FORMAT_LABELS[from].long;
  const t = COLOR_FORMAT_LABELS[to].long;
  return `${f} and ${t} are different ways to describe the same sRGB color (except CMYK, which is an approximate ink model). Converting ${COLOR_FORMAT_LABELS[from].short} → ${COLOR_FORMAT_LABELS[to].short} does not change the underlying color within the limits of each notation; it only changes how numbers are written.`;
}
