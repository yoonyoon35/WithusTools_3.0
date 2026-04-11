/**
 * Korean Hangul → Japanese hiragana by approximate pronunciation (not official orthography).
 * Syllable-based: initial + medial + optional final (batchim).
 */

export const HANGUL_START = 0xac00;
export const HANGUL_END = 0xd7a3;

/** Medial (jungseong) index 0–20 → hiragana body with ㅇ (no initial consonant) */
const VOWEL_ONLY: string[] = [
  "あ",
  "え",
  "や",
  "え",
  "お",
  "え",
  "よ",
  "え",
  "お",
  "わ",
  "うぇ",
  "おい",
  "よ",
  "う",
  "うぉ",
  "うぇ",
  "うぃ",
  "ゆ",
  "う",
  "うい",
  "い",
];

/** Cho index → 21-length row (jung 0–20). Indices 1,4,8,10,13 are tense; built as っ + base row. */
const ROW_ㄱ: string[] = [
  "が",
  "げ",
  "ぎゃ",
  "げ",
  "ご",
  "げ",
  "ぎょ",
  "げ",
  "ご",
  "ぐわ",
  "ぐぇ",
  "ごい",
  "ぎょ",
  "ぐ",
  "ぐぉ",
  "ぐぇ",
  "ぐぃ",
  "ぎゅ",
  "ぐ",
  "ぐい",
  "ぎ",
];
const ROW_ㄴ: string[] = [
  "な",
  "ね",
  "にゃ",
  "ね",
  "の",
  "ね",
  "にょ",
  "ね",
  "の",
  "にわ",
  "ね",
  "のい",
  "にょ",
  "ぬ",
  "ぬぉ",
  "ぬぇ",
  "ぬぃ",
  "にゅ",
  "ぬ",
  "ぬい",
  "に",
];
const ROW_ㄷ: string[] = [
  "だ",
  "で",
  "ぢゃ",
  "で",
  "ど",
  "で",
  "ぢょ",
  "で",
  "ど",
  "どわ",
  "でぇ",
  "どい",
  "ぢょ",
  "づ",
  "どぉ",
  "でぇ",
  "でぃ",
  "ぢゅ",
  "づ",
  "づい",
  "ぢ",
];
const ROW_ㄹ: string[] = [
  "ら",
  "れ",
  "りゃ",
  "れ",
  "ろ",
  "れ",
  "りょ",
  "れ",
  "ろ",
  "るわ",
  "れ",
  "ろい",
  "りょ",
  "る",
  "るぉ",
  "るぇ",
  "るぃ",
  "りゅ",
  "る",
  "るい",
  "り",
];
const ROW_ㅁ: string[] = [
  "ま",
  "め",
  "みゃ",
  "め",
  "も",
  "め",
  "みょ",
  "め",
  "も",
  "むわ",
  "め",
  "もい",
  "みょ",
  "む",
  "むぉ",
  "むぇ",
  "むぃ",
  "みゅ",
  "む",
  "むい",
  "み",
];
const ROW_ㅂ: string[] = [
  "ば",
  "べ",
  "びゃ",
  "べ",
  "ぼ",
  "べ",
  "びょ",
  "べ",
  "ぼ",
  "ぶわ",
  "べ",
  "ぼい",
  "びょ",
  "ぶ",
  "ぶぉ",
  "ぶぇ",
  "ぶぃ",
  "びゅ",
  "ぶ",
  "ぶい",
  "び",
];
const ROW_ㅅ: string[] = [
  "さ",
  "せ",
  "しゃ",
  "せ",
  "そ",
  "せ",
  "しょ",
  "せ",
  "そ",
  "すわ",
  "せ",
  "そい",
  "しょ",
  "す",
  "すぉ",
  "すぇ",
  "すぃ",
  "しゅ",
  "す",
  "すい",
  "し",
];
/** ㅈ — alveolo-palatal [tɕ], mapped to ちゃ行 */
const ROW_ㅈ: string[] = [
  "ちゃ",
  "ちぇ",
  "ちゃ",
  "ちぇ",
  "ちょ",
  "ちぇ",
  "ちょ",
  "ちぇ",
  "ちょ",
  "ちゅわ",
  "ちぇ",
  "ちょい",
  "ちょ",
  "ちゅ",
  "ちゅぉ",
  "ちぇ",
  "ちぃ",
  "ちゅ",
  "ちゅ",
  "ちゅい",
  "ち",
];
/** ㅊ — same slots as ㅈ for practical hiragana (aspiration not written) */
const ROW_ㅊ = ROW_ㅈ;
const ROW_ㅋ: string[] = [
  "か",
  "け",
  "きゃ",
  "け",
  "こ",
  "け",
  "きょ",
  "け",
  "こ",
  "くわ",
  "け",
  "こい",
  "きょ",
  "く",
  "くぉ",
  "くぇ",
  "くぃ",
  "きゅ",
  "く",
  "くい",
  "き",
];
const ROW_ㅌ: string[] = [
  "た",
  "て",
  "ちゃ",
  "て",
  "と",
  "て",
  "ちょ",
  "て",
  "と",
  "とわ",
  "て",
  "とい",
  "ちょ",
  "つ",
  "つぉ",
  "て",
  "てぃ",
  "ちゅ",
  "つ",
  "つい",
  "ち",
];
const ROW_ㅍ: string[] = [
  "ぱ",
  "ぺ",
  "ぴゃ",
  "ぺ",
  "ぽ",
  "ぺ",
  "ぴょ",
  "ぺ",
  "ぽ",
  "ぷわ",
  "ぺ",
  "ぽい",
  "ぴょ",
  "ぷ",
  "ぷぉ",
  "ぷぇ",
  "ぷぃ",
  "ぴゅ",
  "ぷ",
  "ぷい",
  "ぴ",
];
const ROW_ㅎ: string[] = [
  "は",
  "へ",
  "ひゃ",
  "へ",
  "ほ",
  "へ",
  "ひょ",
  "へ",
  "ほ",
  "ふわ",
  "へ",
  "ほい",
  "ひょ",
  "ふ",
  "ふぉ",
  "ふぇ",
  "ふぃ",
  "ひゅ",
  "ふ",
  "ふい",
  "ひ",
];

const CHO_ROWS: (string[] | null)[] = [
  ROW_ㄱ, // 0 ㄱ
  null, // 1 ㄲ → っ + ㄱ
  ROW_ㄴ, // 2 ㄴ
  ROW_ㄷ, // 3 ㄷ
  null, // 4 ㄸ → っ + ㄷ
  ROW_ㄹ, // 5 ㄹ
  ROW_ㅁ, // 6 ㅁ
  ROW_ㅂ, // 7 ㅂ
  null, // 8 ㅃ → っ + ㅂ
  ROW_ㅅ, // 9 ㅅ
  null, // 10 ㅆ → っ + ㅅ
  null, // 11 ㅇ → vowel only
  ROW_ㅈ, // 12 ㅈ
  null, // 13 ㅉ → っ + ㅈ
  ROW_ㅊ, // 14 ㅊ
  ROW_ㅋ, // 15 ㅋ
  ROW_ㅌ, // 16 ㅌ
  ROW_ㅍ, // 17 ㅍ
  ROW_ㅎ, // 18 ㅎ
];

const TENSE_BASE_CHO: Record<number, number> = {
  1: 0,
  4: 3,
  8: 7,
  10: 9,
  13: 12,
};

/** Jongseong index 0–27 → trailing hiragana (approximate Japanese coda) */
const JONG_HIRA: string[] = [
  "",
  "く",
  "く",
  "くす",
  "ん",
  "ん",
  "ん",
  "っ",
  "る",
  "くる",
  "むる",
  "ぶる",
  "る",
  "てる",
  "ぷる",
  "る",
  "む",
  "ぷ",
  "ぷす",
  "す",
  "っす",
  "ん",
  "っ",
  "っ",
  "く",
  "っ",
  "ぷ",
  "っ",
];

function syllableBody(cho: number, jung: number): string {
  if (cho === 11) return VOWEL_ONLY[jung] ?? "";
  const tenseBase = TENSE_BASE_CHO[cho];
  if (tenseBase !== undefined) {
    const baseRow = CHO_ROWS[tenseBase];
    if (!baseRow) return "";
    const b = baseRow[jung] ?? "";
    return b ? `っ${b}` : "";
  }
  const row = CHO_ROWS[cho];
  if (!row) return "";
  return row[jung] ?? "";
}

function hangulSyllableToHiragana(code: number): string {
  if (code < HANGUL_START || code > HANGUL_END) return "";
  const s = code - HANGUL_START;
  const cho = Math.floor(s / 588);
  const jung = Math.floor((s % 588) / 28);
  const jong = s % 28;
  const body = syllableBody(cho, jung);
  const tail = JONG_HIRA[jong] ?? "";
  return body + tail;
}

/** Hiragana string for one Hangul syllable code point (for reverse lookup tables). */
export function hangulCodePointToHiraganaPronunciation(code: number): string {
  return hangulSyllableToHiragana(code);
}

/**
 * Converts Hangul runs to hiragana; non-Hangul characters are copied as-is.
 */
export function hangulToHiraganaPronunciation(input: string): string {
  let out = "";
  for (let i = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);
    if (c >= HANGUL_START && c <= HANGUL_END) {
      out += hangulSyllableToHiragana(c);
    } else {
      out += input[i];
    }
  }
  return out;
}

/** Map hiragana codepoints to katakana (U+3040–U+309F → +0x60). Other codepoints unchanged. */
export function hiraganaStringToKatakana(s: string): string {
  return s.replace(/[\u3040-\u309f]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) + 0x60)
  );
}

/**
 * Same pronunciation rules as {@link hangulToHiraganaPronunciation}, output in katakana.
 */
export function hangulToKatakanaPronunciation(input: string): string {
  return hiraganaStringToKatakana(hangulToHiraganaPronunciation(input));
}
