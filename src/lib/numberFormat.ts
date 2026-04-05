/** Strip to a safe numeric string: optional leading '-', digits, one '.'. */
export function sanitizeNumericInput(input: string): string {
  const withoutCommas = input.replace(/,/g, "");
  let sign = "";
  let rest = withoutCommas.trim();
  if (rest.startsWith("-")) {
    sign = "-";
    rest = rest.slice(1);
  }
  let out = "";
  let dotSeen = false;
  for (const ch of rest) {
    if (ch >= "0" && ch <= "9") out += ch;
    else if (ch === "." && !dotSeen) {
      out += ch;
      dotSeen = true;
    }
  }
  return sign + out;
}

export function formatWithCommas(raw: string): string {
  if (raw === "" || raw === "-") return raw;
  const neg = raw.startsWith("-");
  let s = neg ? raw.slice(1) : raw;
  const parts = s.split(".");
  const intPart = parts[0] ?? "";
  const frac = parts[1];
  const intFmt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const body = frac !== undefined ? `${intFmt}.${frac}` : intFmt;
  return neg ? `-${body}` : body;
}

/** Cursor position after re-formatting: map by "raw" character count before cursor (ignoring commas). */
export function rawPrefixLengthFromDisplay(display: string, cursor: number): number {
  return display.slice(0, cursor).replace(/,/g, "").length;
}

export function displayCursorFromRawPrefix(display: string, rawPrefixLen: number): number {
  if (rawPrefixLen <= 0) return 0;
  let rawCount = 0;
  for (let i = 0; i < display.length; i++) {
    const ch = display[i];
    if (ch !== ",") {
      rawCount += 1;
      if (rawCount === rawPrefixLen) return i + 1;
    }
  }
  return display.length;
}

export function formatResultNumber(
  n: number,
  opts?: { minDecimals?: number; maxDecimals?: number },
): string {
  const minD = opts?.minDecimals ?? 0;
  const maxD = opts?.maxDecimals ?? 2;
  return n.toLocaleString("en-US", {
    minimumFractionDigits: minD,
    maximumFractionDigits: maxD,
  });
}
