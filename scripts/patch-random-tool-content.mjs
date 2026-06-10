/**
 * toolContent.json에 Random Generator 허브 + 하위 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { randomEn } from "./random-en-data.mjs";
import { randomKo } from "./random-ko-data.mjs";
import { randomUiEn, randomUiKo } from "./random-ui-data.mjs";

const root = process.cwd();
const localKeys = [
  "random",
  "random.password-generator",
  "random.random-number-generator",
];

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? randomEn : randomKo;
  const uiMap = locale === "en" ? randomUiEn : randomUiKo;

  for (const localKey of localKeys) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };

    if (localKey === "random.password-generator") {
      nextValue.ui = { ...uiMap.passwordGenerator };
    } else if (localKey === "random.random-number-generator") {
      nextValue.ui = { ...uiMap.randomNumberGenerator };
    }

    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with Random Generator entries`);
}
