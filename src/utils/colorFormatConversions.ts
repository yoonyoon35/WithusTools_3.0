/**
 * Color format conversion (HEX, RGB, RGBA, HSL, HSV, CMYK) for dedicated pair pages.
 * All math uses sRGB; CMYK is device-independent approximation (0–100%).
 */

export const COLOR_FORMAT_KEYS = ["hex", "rgb", "rgba", "hsl", "hsv", "cmyk"] as const;
export type ColorFormatKey = (typeof COLOR_FORMAT_KEYS)[number];

const FORMAT_TO_SLUG: Record<ColorFormatKey, string> = {
  hex: "hex",
  rgb: "rgb",
  rgba: "rgba",
  hsl: "hsl",
  hsv: "hsv",
  cmyk: "cmyk",
};

const SLUG_TO_FORMAT: Record<string, ColorFormatKey> = {
  hex: "hex",
  rgb: "rgb",
  rgba: "rgba",
  hsl: "hsl",
  hsv: "hsv",
  cmyk: "cmyk",
};

export const COLOR_FORMAT_LABELS: Record<ColorFormatKey, { short: string; long: string }> = {
  hex: { short: "HEX", long: "Hexadecimal (#RRGGBB)" },
  rgb: { short: "RGB", long: "RGB (red, green, blue)" },
  rgba: { short: "RGBA", long: "RGBA (RGB + alpha)" },
  hsl: { short: "HSL", long: "HSL (hue, saturation, lightness)" },
  hsv: { short: "HSV", long: "HSV (hue, saturation, value)" },
  cmyk: { short: "CMYK", long: "CMYK (print inks)" },
};

export function isValidColorFormatKey(k: string): k is ColorFormatKey {
  return (COLOR_FORMAT_KEYS as readonly string[]).includes(k);
}

export function getCanonicalColorPairSlug(from: ColorFormatKey, to: ColorFormatKey): string {
  return `${FORMAT_TO_SLUG[from]}-to-${FORMAT_TO_SLUG[to]}`;
}

export function parseColorPairSlug(slug: string): { from: ColorFormatKey; to: ColorFormatKey } | null {
  const s = slug.trim().toLowerCase();
  const sep = "-to-";
  const i = s.indexOf(sep);
  if (i === -1) return null;
  const fromPart = s.slice(0, i);
  const toPart = s.slice(i + sep.length);
  if (!fromPart || !toPart) return null;
  const from = SLUG_TO_FORMAT[fromPart];
  const to = SLUG_TO_FORMAT[toPart];
  if (!from || !to || from === to) return null;
  return { from, to };
}

export function getColorFormatKeys(): ColorFormatKey[] {
  return [...COLOR_FORMAT_KEYS];
}

/** Every directed pair (6×5 = 30). */
export function getAllColorFormatPairs(): { from: ColorFormatKey; to: ColorFormatKey }[] {
  const pairs: { from: ColorFormatKey; to: ColorFormatKey }[] = [];
  for (const from of COLOR_FORMAT_KEYS) {
    for (const to of COLOR_FORMAT_KEYS) {
      if (from === to) continue;
      pairs.push({ from, to });
    }
  }
  return pairs;
}

export interface RgbaColor {
  r: number;
  g: number;
  b: number;
  /** 0–1 */
  a: number;
}

function clamp255(n: number): number {
  return Math.max(0, Math.min(255, Math.round(n)));
}

function clamp01(n: number): number {
  return Math.max(0, Math.min(1, n));
}

export function rgbToHex(r: number, g: number, b: number): string {
  const h = (n: number) => clamp255(n).toString(16).padStart(2, "0").toUpperCase();
  return `#${h(r)}${h(g)}${h(b)}`;
}

export function hexToRgb(hex: string): [number, number, number] | null {
  const s = hex.trim().replace(/^#/, "");
  if (!/^[a-f\d]{6}$/i.test(s) && !/^[a-f\d]{8}$/i.test(s)) return null;
  const r = parseInt(s.slice(0, 2), 16);
  const g = parseInt(s.slice(2, 4), 16);
  const b = parseInt(s.slice(4, 6), 16);
  return [r, g, b];
}

export function hexAlpha(hex: string): number | null {
  const s = hex.trim().replace(/^#/, "");
  if (/^[a-f\d]{8}$/i.test(s)) {
    return parseInt(s.slice(6, 8), 16) / 255;
  }
  return null;
}

export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;
  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  return [clamp255((r + m) * 255), clamp255((g + m) * 255), clamp255((b + m) * 255)];
}

export function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  const v = max * 100;
  const s = max === 0 ? 0 : (delta / max) * 100;
  if (delta !== 0) {
    if (max === r) h = 60 * (((g - b) / delta) % 6);
    else if (max === g) h = 60 * ((b - r) / delta + 2);
    else h = 60 * ((r - g) / delta + 4);
    if (h < 0) h += 360;
  }
  return [Math.round(h), Math.round(s), Math.round(v)];
}

export function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
  s /= 100;
  v /= 100;
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0,
    g = 0,
    b = 0;
  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  return [clamp255((r + m) * 255), clamp255((g + m) * 255), clamp255((b + m) * 255)];
}

export function rgbToCmyk(r: number, g: number, b: number): [number, number, number, number] {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const k = 1 - Math.max(rn, gn, bn);
  if (k >= 1 - 1e-9) return [0, 0, 0, 100];
  const c = ((1 - rn - k) / (1 - k)) * 100;
  const m = ((1 - gn - k) / (1 - k)) * 100;
  const y = ((1 - bn - k) / (1 - k)) * 100;
  return [Math.round(c), Math.round(m), Math.round(y), Math.round(k * 100)];
}

/**
 * Inverse of {@link rgbToCmyk} for integer CMYK percentages.
 * Many RGB triples map to the same rounded CMYK, so the naive 255×(1−C)(1−K) rounding can disagree with
 * the Color Picker (which is RGB/HEX-first). Among all RGB whose {@link rgbToCmyk} equals (c,m,y,k), we pick
 * the tuple closest to (⌊R⌋, round(G), ⌈B⌉) in Euclidean distance — tied with lexicographic order — which
 * aligns the CMYK → HEX converter with values shown next to a picked color in the Color Picker.
 */
export function cmykToRgb(c: number, m: number, y: number, k: number): [number, number, number] {
  const cn = c / 100;
  const mn = m / 100;
  const yn = y / 100;
  const kn = k / 100;

  const Rc = 255 * (1 - cn) * (1 - kn);
  const Gc = 255 * (1 - mn) * (1 - kn);
  const Bc = 255 * (1 - yn) * (1 - kn);

  const rT = clamp255(Math.floor(Rc));
  const gT = clamp255(Math.round(Gc));
  const bT = clamp255(Math.ceil(Bc));

  const pad = 28;
  const rLo = Math.max(0, Math.floor(Rc) - pad);
  const rHi = Math.min(255, Math.ceil(Rc) + pad);
  const gLo = Math.max(0, Math.floor(Gc) - pad);
  const gHi = Math.min(255, Math.ceil(Gc) + pad);
  const bLo = Math.max(0, Math.floor(Bc) - pad);
  const bHi = Math.min(255, Math.ceil(Bc) + pad);

  let bestR = clamp255(Math.round(Rc));
  let bestG = clamp255(Math.round(Gc));
  let bestB = clamp255(Math.round(Bc));
  let bestD = Infinity;
  let found = false;

  for (let r = rLo; r <= rHi; r++) {
    for (let g = gLo; g <= gHi; g++) {
      for (let b = bLo; b <= bHi; b++) {
        const [cc, mm, yy, kk] = rgbToCmyk(r, g, b);
        if (cc !== c || mm !== m || yy !== y || kk !== k) continue;

        const dr = r - rT;
        const dg = g - gT;
        const db = b - bT;
        const d = dr * dr + dg * dg + db * db;

        if (
          !found ||
          d < bestD ||
          (d === bestD &&
            (r < bestR || (r === bestR && g < bestG) || (r === bestR && g === bestG && b < bestB)))
        ) {
          bestR = r;
          bestG = g;
          bestB = b;
          bestD = d;
          found = true;
        }
      }
    }
  }

  if (!found) {
    return [clamp255(Math.round(Rc)), clamp255(Math.round(Gc)), clamp255(Math.round(Bc))];
  }
  return [bestR, bestG, bestB];
}

function parseNumberLoose(raw: string): number | null {
  const n = parseFloat(raw.replace(/%/g, "").trim());
  return Number.isFinite(n) ? n : null;
}

function parseThreeNumbers(input: string): [number, number, number] | null {
  const nums = input.match(/-?\d*\.?\d+/g);
  if (!nums || nums.length < 3) return null;
  const a = parseNumberLoose(nums[0]);
  const b = parseNumberLoose(nums[1]);
  const c = parseNumberLoose(nums[2]);
  if (a === null || b === null || c === null) return null;
  return [a, b, c];
}

function parseFourNumbers(input: string): [number, number, number, number] | null {
  const nums = input.match(/-?\d*\.?\d+/g);
  if (!nums || nums.length < 4) return null;
  const q = nums.map((x) => parseNumberLoose(x));
  if (q.some((n) => n === null)) return null;
  return q as [number, number, number, number];
}

export function parseColorInput(
  from: ColorFormatKey,
  raw: string
): { ok: true; color: RgbaColor } | { ok: false; error: string } {
  const t = raw.trim();
  if (!t) return { ok: false, error: "Enter a color value" };

  if (from === "hex") {
    const rgb = hexToRgb(t);
    if (!rgb) return { ok: false, error: "Use #RRGGBB or #RRGGBBAA (hex)" };
    const a = hexAlpha(t) ?? 1;
    return { ok: true, color: { r: rgb[0], g: rgb[1], b: rgb[2], a: clamp01(a) } };
  }

  if (from === "rgb") {
    const inner = t.replace(/^rgb\s*\(\s*/i, "").replace(/\s*\)\s*$/i, "");
    const triple = parseThreeNumbers(inner);
    if (!triple) return { ok: false, error: "Use rgb(r, g, b) or r, g, b (0–255)" };
    const [r, g, b] = triple;
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      return { ok: false, error: "RGB channels must be between 0 and 255" };
    }
    return { ok: true, color: { r, g, b, a: 1 } };
  }

  if (from === "rgba") {
    const inner = t.replace(/^rgba\s*\(\s*/i, "").replace(/\s*\)\s*$/i, "");
    const nums = inner.match(/-?\d*\.?\d+/g);
    if (!nums || nums.length < 4) {
      return { ok: false, error: "Use rgba(r, g, b, a) with a from 0 to 1 (or fourth value 0–255 as alpha)" };
    }
    const r = parseNumberLoose(nums[0])!;
    const g = parseNumberLoose(nums[1])!;
    const b = parseNumberLoose(nums[2])!;
    let a = parseNumberLoose(nums[3])!;
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      return { ok: false, error: "RGB channels must be between 0 and 255" };
    }
    if (a > 1 && a <= 255) a /= 255;
    if (a < 0 || a > 1) return { ok: false, error: "Alpha must be between 0 and 1" };
    return { ok: true, color: { r, g, b, a: clamp01(a) } };
  }

  if (from === "hsl") {
    const inner = t.replace(/^hsl\s*\(\s*/i, "").replace(/\s*\)\s*$/i, "");
    const triple = parseThreeNumbers(inner);
    if (!triple) return { ok: false, error: "Use hsl(h, s%, l%) with h 0–360 and s,l 0–100" };
    let [h, s, l] = triple;
    h = ((h % 360) + 360) % 360;
    if (s < 0 || s > 100 || l < 0 || l > 100) {
      return { ok: false, error: "Saturation and lightness must be 0–100%" };
    }
    const [r, g, b] = hslToRgb(h, s, l);
    return { ok: true, color: { r, g, b, a: 1 } };
  }

  if (from === "hsv") {
    const inner = t.replace(/^hsv\s*\(\s*/i, "").replace(/\s*\)\s*$/i, "");
    const triple = parseThreeNumbers(inner);
    if (!triple) return { ok: false, error: "Use hsv(h, s%, v%) with h 0–360 and s,v 0–100" };
    let [h, s, v] = triple;
    h = ((h % 360) + 360) % 360;
    if (s < 0 || s > 100 || v < 0 || v > 100) {
      return { ok: false, error: "Saturation and value must be 0–100%" };
    }
    const [r, g, b] = hsvToRgb(h, s, v);
    return { ok: true, color: { r, g, b, a: 1 } };
  }

  // cmyk
  const inner = t.replace(/^cmyk\s*\(\s*/i, "").replace(/\s*\)\s*$/i, "");
  const quad = parseFourNumbers(inner);
  if (!quad) return { ok: false, error: "Use cmyk(c%, m%, y%, k%) with values 0–100" };
  const [c, m, y, k] = quad;
  if ([c, m, y, k].some((n) => n < 0 || n > 100)) {
    return { ok: false, error: "CMYK components must be between 0 and 100" };
  }
  const [r, g, b] = cmykToRgb(c, m, y, k);
  return { ok: true, color: { r, g, b, a: 1 } };
}

export function formatColorOutput(to: ColorFormatKey, color: RgbaColor): string {
  const { r, g, b, a } = color;
  switch (to) {
    case "hex": {
      if (a < 1) {
        const ai = Math.round(clamp01(a) * 255);
        const h = (n: number) => clamp255(n).toString(16).padStart(2, "0").toUpperCase();
        return `#${h(r)}${h(g)}${h(b)}${h(ai)}`;
      }
      return rgbToHex(r, g, b);
    }
    case "rgb":
      return `rgb(${clamp255(r)}, ${clamp255(g)}, ${clamp255(b)})`;
    case "rgba": {
      const alphaStr = String(+clamp01(a).toFixed(3));
      return `rgba(${clamp255(r)}, ${clamp255(g)}, ${clamp255(b)}, ${alphaStr})`;
    }
    case "hsl": {
      const [h, s, l] = rgbToHsl(r, g, b);
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
    case "hsv": {
      const [h, s, v] = rgbToHsv(r, g, b);
      return `hsv(${h}, ${s}%, ${v}%)`;
    }
    case "cmyk": {
      const [c, m, y, k] = rgbToCmyk(r, g, b);
      return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
    }
    default:
      return "";
  }
}

export function getColorConversionFormulaLine(
  from: ColorFormatKey,
  to: ColorFormatKey,
  color: RgbaColor,
  result: string
): string {
  const { r, g, b, a } = color;
  const inner = `sRGB ${a < 1 ? `(${clamp255(r)}, ${clamp255(g)}, ${clamp255(b)}, α=${clamp01(a).toFixed(2)})` : `(${clamp255(r)}, ${clamp255(g)}, ${clamp255(b)})`}`;
  return `${COLOR_FORMAT_LABELS[from].short} → ${inner} → ${COLOR_FORMAT_LABELS[to].short}: ${result}`;
}

function q(n: number, d = 4): string {
  const s = n.toFixed(d).replace(/\.?0+$/, "");
  return s === "-0" ? "0" : s;
}

function hsvSectorLabel(h: number): string {
  if (h >= 0 && h < 60) return "0°≤H<60° (red→yellow)";
  if (h < 120) return "60°≤H<120° (yellow→green)";
  if (h < 180) return "120°≤H<180° (green→cyan)";
  if (h < 240) return "180°≤H<240° (cyan→blue)";
  if (h < 300) return "240°≤H<300° (blue→magenta)";
  return "300°≤H<360° (magenta→red)";
}

function explainHsvPipeline(hIn: number, sIn: number, vIn: number, R: number, G: number, B: number): string[] {
  const h = ((hIn % 360) + 360) % 360;
  const Sn = sIn / 100;
  const Vn = vIn / 100;
  const C = Vn * Sn;
  const h60 = h / 60;
  const mod2 = h60 % 2;
  const x = C * (1 - Math.abs(mod2 - 1));
  const m = Vn - C;
  let r0 = 0,
    g0 = 0,
    b0 = 0;
  if (h >= 0 && h < 60) {
    r0 = C;
    g0 = x;
    b0 = 0;
  } else if (h < 120) {
    r0 = x;
    g0 = C;
    b0 = 0;
  } else if (h < 180) {
    r0 = 0;
    g0 = C;
    b0 = x;
  } else if (h < 240) {
    r0 = 0;
    g0 = x;
    b0 = C;
  } else if (h < 300) {
    r0 = x;
    g0 = 0;
    b0 = C;
  } else {
    r0 = C;
    g0 = 0;
    b0 = x;
  }
  const label = hsvSectorLabel(h);
  return [
    `HSV input (after hue wrap): H=${q(h, 2)}°, S=${sIn}%, V=${vIn}% → S'=${q(Sn)}, V'=${q(Vn)}`,
    `C = V'×S' = ${q(Vn)}×${q(Sn)} = ${q(C)}; X = C×(1-|mod(H/60,2)−1|) = ${q(C)}×(1−|${q(mod2, 3)}−1|) = ${q(x)}; m = V'−C = ${q(m)}`,
    `${label}: linear (R',G',B') = (${q(r0)}, ${q(g0)}, ${q(b0)})`,
    `sRGB = round((R'+m)×255, …) = (${R}, ${G}, ${B})`,
  ];
}

function explainHslPipeline(hIn: number, sIn: number, lIn: number, R: number, G: number, B: number): string[] {
  const h = ((hIn % 360) + 360) % 360;
  const s = sIn / 100;
  const l = lIn / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r0 = 0,
    g0 = 0,
    b0 = 0;
  if (h >= 0 && h < 60) {
    r0 = c;
    g0 = x;
    b0 = 0;
  } else if (h < 120) {
    r0 = x;
    g0 = c;
    b0 = 0;
  } else if (h < 180) {
    r0 = 0;
    g0 = c;
    b0 = x;
  } else if (h < 240) {
    r0 = 0;
    g0 = x;
    b0 = c;
  } else if (h < 300) {
    r0 = x;
    g0 = 0;
    b0 = c;
  } else {
    r0 = c;
    g0 = 0;
    b0 = x;
  }
  const label = hsvSectorLabel(h);
  return [
    `HSL input: H=${q(h, 2)}°, S=${sIn}%, L=${lIn}% → S'=${q(s)}, L'=${q(l)}`,
    `C = (1−|2L'−1|)×S' = ${q(c)}; X = ${q(x)}; m = L'−C/2 = ${q(m)} (${label})`,
    `Linear (R',G',B') = (${q(r0)}, ${q(g0)}, ${q(b0)}) → sRGB = (${R}, ${G}, ${B})`,
  ];
}

function explainRgbToHslLines(r: number, g: number, b: number): string[] {
  const rn = r / 255,
    gn = g / 255,
    bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const d = max - min;
  const l = (max + min) / 2;
  let s = 0;
  if (max !== min) s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let hDeg = 0;
  if (max !== min) {
    let h = 0;
    if (max === rn) h = (gn - bn) / d + (gn < bn ? 6 : 0);
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h /= 6;
    hDeg = h * 360;
  }
  const [hOut, sOut, lOut] = rgbToHsl(r, g, b);
  return [
    `Normalize R,G,B to 0–1: (${q(rn)}, ${q(gn)}, ${q(bn)}) → max=${q(max)}, min=${q(min)}, Δ=${q(d)}`,
    `L = (max+min)/2 = ${q(l)} → ${lOut}%; S = ${max === min ? "0" : `${q(s)} → ${sOut}%`}`,
    `H from dominant channel + Δ → ${q(hDeg, 2)}° → rounded ${hOut}° (hsl output uses integer ° and %)`,
  ];
}

function explainRgbToHsvLines(r: number, g: number, b: number): string[] {
  const rn = r / 255,
    gn = g / 255,
    bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  const v = max * 100;
  const s = max === 0 ? 0 : (delta / max) * 100;
  let h = 0;
  if (delta !== 0) {
    if (max === rn) h = 60 * (((gn - bn) / delta) % 6);
    else if (max === gn) h = 60 * ((bn - rn) / delta + 2);
    else h = 60 * ((rn - gn) / delta + 4);
    if (h < 0) h += 360;
  }
  const [hOut, sOut, vOut] = rgbToHsv(r, g, b);
  return [
    `V = max(R,G,B)×100 = ${q(max)}×100 = ${q(v, 2)}% → ${vOut}%; S = Δ/max×100 = ${q(s, 2)}% → ${sOut}%`,
    `H (60° family from max channel) = ${q(h, 2)}° → ${hOut}°`,
  ];
}

function explainRgbToCmykLines(r: number, g: number, b: number): string[] {
  const rn = r / 255,
    gn = g / 255,
    bn = b / 255;
  const k = 1 - Math.max(rn, gn, bn);
  if (k >= 1 - 1e-9) {
    return [`K = 1−max(R,G,B) = 1 → black: cmyk(0%, 0%, 0%, 100%)`];
  }
  const c = ((1 - rn - k) / (1 - k)) * 100;
  const m = ((1 - gn - k) / (1 - k)) * 100;
  const y = ((1 - bn - k) / (1 - k)) * 100;
  const [co, mo, yo, ko] = rgbToCmyk(r, g, b);
  return [
    `K = 1−max(${q(rn)},${q(gn)},${q(bn)}) = ${q(k)} → ${ko}%`,
    `C = (1−R'−K)/(1−K)×100 = ${q(c, 2)}% → ${co}%; M = ${q(m, 2)}% → ${mo}%; Y = ${q(y, 2)}% → ${yo}%`,
  ];
}

function explainHexBytes(r: number, g: number, b: number): string[] {
  const hr = clamp255(r).toString(16).toUpperCase().padStart(2, "0");
  const hg = clamp255(g).toString(16).toUpperCase().padStart(2, "0");
  const hb = clamp255(b).toString(16).toUpperCase().padStart(2, "0");
  return [
    `HEX: R=${clamp255(r)}→0x${hr}, G=${clamp255(g)}→0x${hg}, B=${clamp255(b)}→0x${hb} → #${hr}${hg}${hb}`,
  ];
}

function explainHexParse(raw: string): string[] {
  const s = raw.trim().replace(/^#/, "");
  if (!/^[a-f\d]{6}$/i.test(s) && !/^[a-f\d]{8}$/i.test(s)) return [];
  const r = parseInt(s.slice(0, 2), 16);
  const g = parseInt(s.slice(2, 4), 16);
  const b = parseInt(s.slice(4, 6), 16);
  const lines = [
    `Parse pairs: 0x${s.slice(0, 2)}=${r}, 0x${s.slice(2, 4)}=${g}, 0x${s.slice(4, 6)}=${b}`,
  ];
  if (/^[a-f\d]{8}$/i.test(s)) {
    const ai = parseInt(s.slice(6, 8), 16);
    lines.push(`Alpha byte 0x${s.slice(6, 8)} = ${ai} → α=${q(ai / 255, 3)}`);
  }
  return lines;
}

/**
 * Line-by-line breakdown for the calculator panel (input-based arithmetic aligned with this file’s functions).
 */
export function getConversionCalculationSteps(
  from: ColorFormatKey,
  to: ColorFormatKey,
  raw: string,
  color: RgbaColor,
  result: string
): string[] {
  const lines: string[] = [];
  lines.push(getColorConversionFormulaLine(from, to, color, result));

  const R = clamp255(color.r);
  const G = clamp255(color.g);
  const B = clamp255(color.b);
  const t = raw.trim();

  switch (from) {
    case "hex":
      lines.push(...explainHexParse(t));
      break;
    case "rgb": {
      const inner = t.replace(/^rgb\s*\(\s*/i, "").replace(/\s*\)\s*$/i, "");
      const tr = parseThreeNumbers(inner);
      if (tr) lines.push(`RGB input channels: R=${tr[0]}, G=${tr[1]}, B=${tr[2]} (used as sRGB 0–255)`);
      break;
    }
    case "rgba": {
      const inner = t.replace(/^rgba\s*\(\s*/i, "").replace(/\s*\)\s*$/i, "");
      const nums = inner.match(/-?\d*\.?\d+/g);
      if (nums && nums.length >= 4) {
        let a = parseNumberLoose(nums[3])!;
        if (a > 1 && a <= 255) a /= 255;
        lines.push(
          `RGBA input: R=${nums[0]}, G=${nums[1]}, B=${nums[2]}, α=${nums[3]} → internal α=${q(clamp01(a), 3)}`
        );
      }
      break;
    }
    case "hsl": {
      const inner = t.replace(/^hsl\s*\(\s*/i, "").replace(/\s*\)\s*$/i, "");
      const tr = parseThreeNumbers(inner);
      if (tr) lines.push(...explainHslPipeline(tr[0], tr[1], tr[2], R, G, B));
      break;
    }
    case "hsv": {
      const inner = t.replace(/^hsv\s*\(\s*/i, "").replace(/\s*\)\s*$/i, "");
      const tr = parseThreeNumbers(inner);
      if (tr) lines.push(...explainHsvPipeline(tr[0], tr[1], tr[2], R, G, B));
      break;
    }
    case "cmyk": {
      const inner = t.replace(/^cmyk\s*\(\s*/i, "").replace(/\s*\)\s*$/i, "");
      const qu = parseFourNumbers(inner);
      if (qu) {
        const [c0, m0, y0, k0] = qu;
        const cn = c0 / 100,
          mn = m0 / 100,
          yn = y0 / 100,
          kn = k0 / 100;
        const Rc = 255 * (1 - cn) * (1 - kn);
        const Gc = 255 * (1 - mn) * (1 - kn);
        const Bc = 255 * (1 - yn) * (1 - kn);
        lines.push(
          `CMYK ${c0}%, ${m0}%, ${y0}%, ${k0}% → naive linear R=255(1−${q(cn)})(1−${q(kn)})=${q(Rc, 2)}, G=${q(Gc, 2)}, B=${q(Bc, 2)}`
        );
        lines.push(
          `Picker-aligned sRGB (${R}, ${G}, ${B}): integer CMYK maps to several RGB triples; this tool picks the one that matches the Color Picker’s HEX when you copy CMYK from there.`
        );
      }
      break;
    }
    default:
      break;
  }

  if (to === "hex") {
    if (color.a < 1) {
      const ai = Math.round(clamp01(color.a) * 255);
      const hx = ai.toString(16).toUpperCase().padStart(2, "0");
      lines.push(...explainHexBytes(R, G, B));
      lines.push(`Alpha ${q(color.a, 3)}×255≈${ai} → 0x${hx} → ${result}`);
    } else {
      lines.push(...explainHexBytes(R, G, B));
    }
  } else if (to === "rgb") {
    lines.push(`Output rgb(${R}, ${G}, ${B})`);
  } else if (to === "rgba") {
    lines.push(`Output rgba(${R}, ${G}, ${B}, ${String(+clamp01(color.a).toFixed(3))})`);
  } else if (to === "hsl") {
    lines.push(...explainRgbToHslLines(R, G, B));
  } else if (to === "hsv") {
    lines.push(...explainRgbToHsvLines(R, G, B));
  } else if (to === "cmyk") {
    lines.push(...explainRgbToCmykLines(R, G, B));
  }

  return lines;
}

export function convertColorString(
  from: ColorFormatKey,
  to: ColorFormatKey,
  raw: string
):
  | { ok: true; result: string; formula: string; calculationSteps: string[]; color: RgbaColor }
  | { ok: false; error: string } {
  const parsed = parseColorInput(from, raw);
  if (!parsed.ok) return parsed;
  const result = formatColorOutput(to, parsed.color);
  const formula = getColorConversionFormulaLine(from, to, parsed.color, result);
  const calculationSteps = getConversionCalculationSteps(from, to, raw, parsed.color, result);
  return { ok: true, result, formula, calculationSteps, color: parsed.color };
}

export function getDefaultColorInput(from: ColorFormatKey): string {
  // #3498DB
  switch (from) {
    case "hex":
      return "#3498DB";
    case "rgb":
      return "52, 152, 219";
    case "rgba":
      return "rgba(52, 152, 219, 0.85)";
    case "hsl":
      return "hsl(204, 70%, 53%)";
    case "hsv":
      return "hsv(204, 76%, 86%)";
    case "cmyk":
      return "cmyk(76%, 31%, 0%, 14%)";
    default:
      return "";
  }
}
