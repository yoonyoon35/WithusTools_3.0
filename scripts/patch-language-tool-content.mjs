/**
 * toolContent.json에 Language Tools 허브 + 하위 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { languageEn } from "./language-en-data.mjs";
import { languageKo } from "./language-ko-data.mjs";
import { languageUiEn, languageUiKo } from "./language-ui-data.mjs";

const root = process.cwd();

const localKeys = [
  "language",
  "language.alphabet-study",
  "language.hangul-study",
  "language.hiragana-study",
  "language.katakana-study",
  "language.hiragana-katakana-converter",
  "language.hangul-to-hiragana",
  "language.hangul-to-katakana",
  "language.hiragana-to-hangul",
  "language.katakana-to-hangul",
];

const studyUiKey = {
  "language.alphabet-study": "alphabetStudy",
  "language.hangul-study": "hangulStudy",
  "language.hiragana-study": "hiraganaStudy",
  "language.katakana-study": "katakanaStudy",
};

const converterUiKey = {
  "language.hiragana-katakana-converter": { tool: "kanaConverter" },
  "language.hangul-to-hiragana": { tool: "hangulToHiragana", disclaimer: "disclaimerHangulToKana" },
  "language.hangul-to-katakana": { tool: "hangulToKatakana", disclaimer: "disclaimerHangulToKana" },
  "language.hiragana-to-hangul": { tool: "hiraganaToHangul", disclaimer: "disclaimerKanaToHangul" },
  "language.katakana-to-hangul": { tool: "katakanaToHangul", disclaimer: "disclaimerKanaToHangul" },
};

function buildUi(uiMap, localKey) {
  const studyKey = studyUiKey[localKey];
  if (studyKey) {
    return { ...uiMap[studyKey] };
  }
  const conv = converterUiKey[localKey];
  if (conv) {
    const ui = { ...uiMap.sharedConverter, ...uiMap[conv.tool] };
    if (conv.disclaimer) {
      Object.assign(ui, uiMap[conv.disclaimer]);
    }
    return ui;
  }
  return undefined;
}

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? languageEn : languageKo;
  const uiMap = locale === "en" ? languageUiEn : languageUiKo;

  for (const localKey of localKeys) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };
    const ui = buildUi(uiMap, localKey);
    if (ui) nextValue.ui = ui;

    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with Language Tools entries`);
}
