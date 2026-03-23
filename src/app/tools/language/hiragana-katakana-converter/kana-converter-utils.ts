/**
 * Romaji→Kana conversion with Korean romanization exception handling (2.0 fallback).
 * 한글 로마자(eo, eu, ae, yeo 등) → 일본어 발음에 맞는 가나 변환
 */
const ROWS: [string[], string[], string[]][] = [
  [["a", "i", "u", "e", "o"], ["あ", "い", "う", "え", "お"], ["ア", "イ", "ウ", "エ", "オ"]],
  [["ka", "ki", "ku", "ke", "ko"], ["か", "き", "く", "け", "こ"], ["カ", "キ", "ク", "ケ", "コ"]],
  [["sa", "shi", "su", "se", "so"], ["さ", "し", "す", "せ", "そ"], ["サ", "シ", "ス", "セ", "ソ"]],
  [["ta", "chi", "tsu", "te", "to"], ["た", "ち", "つ", "て", "と"], ["タ", "チ", "ツ", "テ", "ト"]],
  [["na", "ni", "nu", "ne", "no"], ["な", "に", "ぬ", "ね", "の"], ["ナ", "ニ", "ヌ", "ネ", "ノ"]],
  [["ha", "hi", "fu", "he", "ho"], ["は", "ひ", "ふ", "へ", "ほ"], ["ハ", "ヒ", "フ", "ヘ", "ホ"]],
  [["ma", "mi", "mu", "me", "mo"], ["ま", "み", "む", "め", "も"], ["マ", "ミ", "ム", "メ", "モ"]],
  [["ya", "yu", "yo"], ["や", "ゆ", "よ"], ["ヤ", "ユ", "ヨ"]],
  [["ra", "ri", "ru", "re", "ro"], ["ら", "り", "る", "れ", "ろ"], ["ラ", "リ", "ル", "レ", "ロ"]],
  [["wa", "wo", "n"], ["わ", "を", "ん"], ["ワ", "ヲ", "ン"]],
  [["ga", "gi", "gu", "ge", "go"], ["が", "ぎ", "ぐ", "げ", "ご"], ["ガ", "ギ", "グ", "ゲ", "ゴ"]],
  [["za", "ji", "zu", "ze", "zo"], ["ざ", "じ", "ず", "ぜ", "ぞ"], ["ザ", "ジ", "ズ", "ゼ", "ゾ"]],
  [["da", "ji", "zu", "de", "do"], ["だ", "ぢ", "づ", "で", "ど"], ["ダ", "ヂ", "ヅ", "デ", "ド"]],
  [["ba", "bi", "bu", "be", "bo"], ["ば", "び", "ぶ", "べ", "ぼ"], ["バ", "ビ", "ブ", "ベ", "ボ"]],
  [["pa", "pi", "pu", "pe", "po"], ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"], ["パ", "ピ", "プ", "ペ", "ポ"]],
  [["kya", "kyu", "kyo"], ["きゃ", "きゅ", "きょ"], ["キャ", "キュ", "キョ"]],
  [["sha", "shu", "sho"], ["しゃ", "しゅ", "しょ"], ["シャ", "シュ", "ショ"]],
  [["cha", "chu", "cho"], ["ちゃ", "ちゅ", "ちょ"], ["チャ", "チュ", "チョ"]],
  [["nya", "nyu", "nyo"], ["にゃ", "にゅ", "にょ"], ["ニャ", "ニュ", "ニョ"]],
  [["hya", "hyu", "hyo"], ["ひゃ", "ひゅ", "ひょ"], ["ヒャ", "ヒュ", "ヒョ"]],
  [["mya", "myu", "myo"], ["みゃ", "みゅ", "みょ"], ["ミャ", "ミュ", "ミョ"]],
  [["rya", "ryu", "ryo"], ["りゃ", "りゅ", "りょ"], ["リャ", "リュ", "リョ"]],
  [["gya", "gyu", "gyo"], ["ぎゃ", "ぎゅ", "ぎょ"], ["ギャ", "ギュ", "ギョ"]],
  [["ja", "ju", "jo"], ["じゃ", "じゅ", "じょ"], ["ジャ", "ジュ", "ジョ"]],
  [["bya", "byu", "byo"], ["びゃ", "びゅ", "びょ"], ["ビャ", "ビュ", "ビョ"]],
  [["pya", "pyu", "pyo"], ["ぴゃ", "ぴゅ", "ぴょ"], ["ピャ", "ピュ", "ピョ"]],
];

const H: Record<string, string> = {};
const K: Record<string, string> = {};

for (const [rom, h, k] of ROWS) {
  for (let i = 0; i < rom.length; i++) {
    H[rom[i]] = h[i];
    K[rom[i]] = k[i];
  }
}

// 예외 매핑 (한글 로마자 → 일본어 발음)
H["nn"] = "ん"; K["nn"] = "ン";
H["ng"] = "ん"; K["ng"] = "ン";
H["m"] = "む"; K["m"] = "ム";
H["eo"] = "お"; K["eo"] = "オ";
H["geo"] = "ご"; K["geo"] = "ゴ";
H["keo"] = "こ"; K["keo"] = "コ";
H["neo"] = "の"; K["neo"] = "ノ";
H["deo"] = "ど"; K["deo"] = "ド";
H["teo"] = "と"; K["teo"] = "ト";
H["reo"] = "ろ"; K["reo"] = "ロ";
H["meo"] = "も"; K["meo"] = "モ";
H["beo"] = "ぼ"; K["beo"] = "ボ";
H["peo"] = "ぽ"; K["peo"] = "ポ";
H["seo"] = "そ"; K["seo"] = "ソ";
H["jeo"] = "ぞ"; K["jeo"] = "ゾ";
H["cheo"] = "ちょ"; K["cheo"] = "チョ";
H["heo"] = "ほ"; K["heo"] = "ホ";
H["eu"] = "う"; K["eu"] = "ウ";
H["geu"] = "ぐ"; K["geu"] = "グ";
H["keu"] = "く"; K["keu"] = "ク";
H["neu"] = "ぬ"; K["neu"] = "ヌ";
H["deu"] = "づ"; K["deu"] = "ヅ";
H["teu"] = "つ"; K["teu"] = "ツ";
H["reu"] = "る"; K["reu"] = "ル";
H["meu"] = "む"; K["meu"] = "ム";
H["beu"] = "ぶ"; K["beu"] = "ブ";
H["peu"] = "ぷ"; K["peu"] = "プ";
H["seu"] = "す"; K["seu"] = "ス";
H["jeu"] = "ず"; K["jeu"] = "ズ";
H["cheu"] = "ち"; K["cheu"] = "チ";
H["heu"] = "ふ"; K["heu"] = "フ";
H["ae"] = "え"; K["ae"] = "エ";
H["gae"] = "げ"; K["gae"] = "ゲ";
H["kae"] = "け"; K["kae"] = "ケ";
H["nae"] = "ね"; K["nae"] = "ネ";
H["dae"] = "で"; K["dae"] = "デ";
H["tae"] = "て"; K["tae"] = "テ";
H["rae"] = "れ"; K["rae"] = "レ";
H["mae"] = "め"; K["mae"] = "メ";
H["bae"] = "べ"; K["bae"] = "ベ";
H["pae"] = "ぺ"; K["pae"] = "ペ";
H["sae"] = "せ"; K["sae"] = "セ";
H["jae"] = "ぜ"; K["jae"] = "ゼ";
H["chae"] = "ち"; K["chae"] = "チ";
H["hae"] = "へ"; K["hae"] = "ヘ";
H["hu"] = "ふ"; K["hu"] = "フ";
H["ji"] = "じ"; K["ji"] = "ジ";
H["zu"] = "ず"; K["zu"] = "ズ";
H["si"] = "し"; K["si"] = "シ";
H["ja"] = "ざ"; K["ja"] = "ザ";
H["ju"] = "ず"; K["ju"] = "ズ";
H["je"] = "ぜ"; K["je"] = "ゼ";
H["jo"] = "ぞ"; K["jo"] = "ゾ";
H["ti"] = "ち"; K["ti"] = "チ";
H["tu"] = "つ"; K["tu"] = "ツ";
H["di"] = "ぢ"; K["di"] = "ヂ";
H["du"] = "づ"; K["du"] = "ヅ";
H["die"] = "だい"; K["die"] = "ダイ";
H["yeo"] = "よ"; K["yeo"] = "ヨ";
H["nyeo"] = "にょ"; K["nyeo"] = "ニョ";
H["ryeo"] = "りょ"; K["ryeo"] = "リョ";
H["hyeo"] = "ひょ"; K["hyeo"] = "ヒョ";
H["kyeo"] = "きょ"; K["kyeo"] = "キョ";
H["myeo"] = "みょ"; K["myeo"] = "ミョ";
H["dyeo"] = "ぢょ"; K["dyeo"] = "ヂョ";
H["tyeo"] = "ちょ"; K["tyeo"] = "チョ";
H["byeo"] = "びょ"; K["byeo"] = "ビョ";
H["pyeo"] = "ぴょ"; K["pyeo"] = "ピョ";
H["syeo"] = "しょ"; K["syeo"] = "ショ";
H["jyeo"] = "じょ"; K["jyeo"] = "ジョ";
H["chyeo"] = "ちょ"; K["chyeo"] = "チョ";

// compoundVowels: cons + wa/wo/we/wi/wae/oe/ui
const CONS = ["g", "k", "n", "d", "t", "r", "m", "b", "p", "s", "j", "ch", "h"];
const CONS_H = ["ぐ", "く", "ぬ", "ど", "と", "る", "む", "ぶ", "ぷ", "す", "じ", "ち", "ふ"];
const CONS_K = ["グ", "ク", "ヌ", "ド", "ト", "ル", "ム", "ブ", "プ", "ス", "ジ", "チ", "フ"];
const COMPOUND: { rom: string; h: string; k: string }[] = [
  { rom: "wa", h: "ぁ", k: "ァ" },
  { rom: "wo", h: "ぉ", k: "ォ" },
  { rom: "we", h: "ぇ", k: "ェ" },
  { rom: "wi", h: "ぃ", k: "ィ" },
  { rom: "wae", h: "ぁえ", k: "ヮエ" },
  { rom: "oe", h: "ぇ", k: "ェ" },
  { rom: "ui", h: "ぃ", k: "ィ" },
];
for (const v of COMPOUND) {
  for (let c = 0; c < CONS.length; c++) {
    const r = CONS[c] + v.rom;
    H[r] = CONS_H[c] + v.h;
    K[r] = CONS_K[c] + v.k;
  }
}
H["we"] = "うぇ"; K["we"] = "ウェ";
H["wi"] = "うぃ"; K["wi"] = "ウィ";
H["wae"] = "ゎえ"; K["wae"] = "ヮエ";
H["oe"] = "うぇ"; K["oe"] = "ウェ";
H["ui"] = "うぃ"; K["ui"] = "ウィ";

function romajiToKana(romaji: string, toKatakana: boolean): string {
  const map = toKatakana ? K : H;
  let out = "";
  const s = (romaji || "").toLowerCase().replace(/ー/g, "");
  let i = 0;
  const smallTsu = toKatakana ? "ッ" : "っ";
  while (i < s.length) {
    const rest = s.slice(i);
    let matched = false;
    for (let len = 4; len >= 1; len--) {
      const sub = rest.slice(0, len);
      if (map[sub]) {
        out += map[sub];
        i += len;
        matched = true;
        break;
      }
    }
    if (matched) continue;
    if (rest.length >= 2 && rest.slice(0, 2) === "ng" && map["ng"]) {
      out += map["ng"];
      i += 2;
      continue;
    }
    if (rest[0] === "n" && (rest.length === 1 || /[^aoueiyn]/.test(rest[1]))) {
      out += toKatakana ? "ン" : "ん";
      i += 1;
      continue;
    }
    if (rest[0] === "k" && (rest.length === 1 || /[^aiueo]/.test(rest[1]))) {
      out += toKatakana ? "ク" : "く";
      i += 1;
      continue;
    }
    if (rest[0] === rest[1] && /[ksthpj]/.test(rest[0])) {
      out += smallTsu;
      i += 1;
      continue;
    }
    if (rest[0] === " ") {
      out += " ";
      i++;
      continue;
    }
    out += rest[0];
    i++;
  }
  return out;
}

export function fallbackToHiragana(t: string): string {
  if (/[\u3040-\u309f\u30a0-\u30ff]/.test(t)) {
    return t.replace(/[\u30a0-\u30ff]/g, (c) =>
      String.fromCharCode(c.charCodeAt(0) - 0x60)
    );
  }
  return romajiToKana(t, false);
}

export function fallbackToKatakana(t: string): string {
  if (/[\u3040-\u309f\u30a0-\u30ff]/.test(t)) {
    return t.replace(/[\u3040-\u309f]/g, (c) =>
      String.fromCharCode(c.charCodeAt(0) + 0x60)
    );
  }
  return romajiToKana(t, true);
}
