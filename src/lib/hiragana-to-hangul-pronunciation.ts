import {
  HANGUL_END,
  HANGUL_START,
  hangulCodePointToHiraganaPronunciation,
} from "./hangul-to-hiragana-pronunciation";

const HIRAGANA_START = 0x3040;
const HIRAGANA_END = 0x309f;

/** Katakana → hiragana for the main syllabic range (same offset as elsewhere in the project). */
function katakanaToHiraganaChar(c: string): string {
  const code = c.charCodeAt(0);
  if (code >= 0x30a1 && code <= 0x30f6) {
    return String.fromCharCode(code - 0x60);
  }
  return c;
}

function normalizeInputToHiraganaPass(s: string): string {
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const code = c.charCodeAt(0);
    if (code >= 0x30a0 && code <= 0x30ff) {
      out += katakanaToHiraganaChar(c);
    } else {
      out += c;
    }
  }
  return out;
}

type ReverseBundle = { map: Map<string, string>; maxLen: number };

let reverseBundle: ReverseBundle | null = null;

function buildReverseBundle(): ReverseBundle {
  const map = new Map<string, string>();
  let maxLen = 0;
  for (let cp = HANGUL_START; cp <= HANGUL_END; cp++) {
    const key = hangulCodePointToHiraganaPronunciation(cp);
    if (!key) continue;
    if (!map.has(key)) {
      map.set(key, String.fromCharCode(cp));
    }
    maxLen = Math.max(maxLen, key.length);
  }
  return { map, maxLen };
}

function getReverseBundle(): ReverseBundle {
  if (!reverseBundle) reverseBundle = buildReverseBundle();
  return reverseBundle;
}

/**
 * Parses normalized hiragana (after katakana→hiragana) into Hangul using longest-prefix match.
 * Unmatched hiragana characters are copied through.
 */
function consumeHiraganaRun(
  s: string,
  start: number,
  map: Map<string, string>,
  maxLen: number
): { end: number; output: string } {
  let i = start;
  let output = "";
  while (i < s.length) {
    const code = s.charCodeAt(i);
    if (code < HIRAGANA_START || code > HIRAGANA_END) break;

    let matched = false;
    const upper = Math.min(maxLen, s.length - i);
    for (let len = upper; len >= 1; len--) {
      const slice = s.slice(i, i + len);
      const hangul = map.get(slice);
      if (hangul !== undefined) {
        output += hangul;
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      output += s[i];
      i += 1;
    }
  }
  return { end: i, output };
}

/**
 * Converts hiragana (and main katakana syllables, normalized to hiragana) into Hangul using the
 * inverse of {@link hangulToHiraganaPronunciation}. Existing Hangul and non-kana text pass through.
 * Ambiguous strings map to one representative syllable when multiple Hangul share the same key.
 */
export function hiraganaToHangulPronunciation(input: string): string {
  const { map, maxLen } = getReverseBundle();
  const s = normalizeInputToHiraganaPass(input);
  let out = "";
  let i = 0;
  while (i < s.length) {
    const code = s.charCodeAt(i);
    if (code >= HANGUL_START && code <= HANGUL_END) {
      out += s[i];
      i += 1;
      continue;
    }
    if (code >= HIRAGANA_START && code <= HIRAGANA_END) {
      const { end, output } = consumeHiraganaRun(s, i, map, maxLen);
      out += output;
      i = end > i ? end : i + 1;
      continue;
    }
    out += s[i];
    i += 1;
  }
  return out;
}

/** Same implementation as {@link hiraganaToHangulPronunciation}; use for katakana-first tooling. */
export const katakanaToHangulPronunciation = hiraganaToHangulPronunciation;
