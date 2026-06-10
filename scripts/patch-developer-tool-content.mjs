/**
 * toolContent.json에 Developer Tools 허브 + 하위 + pair 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { developerEn } from "./developer-en-data.mjs";
import { developerKo } from "./developer-ko-data.mjs";
import { developerUiEn, developerUiKo } from "./developer-ui-data.mjs";

const root = process.cwd();

const TOOL_UI_KEY = {
  "developer.ascii-code-converter": "asciiConverter",
  "developer.base64-encoder-decoder": "base64Encoder",
  "developer.code-formatter": "codeFormatter",
  "developer.color-picker": "colorPicker",
  "developer.css-sprites-generator": "cssSprites",
  "developer.numbersystem-converter": "numberSystemConverter",
  "developer.qr-code-generator": "qrCodeGenerator",
  "developer.qr-code-reader": "qrCodeReader",
};

const COLOR_PAIR_PREFIX = "developer.color-picker.converter.";
const NS_PAIR_PREFIX = "developer.numbersystem-converter.";

/** shared를 중첩(shared.copy)과 평탄(copy) 모두 지원 */
function withShared(uiMap, toolUi) {
  return { ...uiMap.shared, ...toolUi, shared: uiMap.shared };
}

function buildUi(uiMap, localKey, locale) {
  if (localKey.startsWith(COLOR_PAIR_PREFIX)) {
    return withShared(uiMap, { ...uiMap.colorPairCalculator, ...uiMap.colorPairPage });
  }
  if (localKey.startsWith(NS_PAIR_PREFIX) && localKey !== "developer.numbersystem-converter") {
    return withShared(uiMap, {
      ...uiMap.numberSystemPairCalculator,
      ...uiMap.numberSystemPairPage,
      conversionGuide: uiMap.numberSystemHub?.conversionGuide,
      errorMessages: uiMap.numberSystemConverter?.errorMessages,
    });
  }

  const toolKey = TOOL_UI_KEY[localKey];
  if (!toolKey) return undefined;

  const ui = withShared(uiMap, uiMap[toolKey]);

  if (localKey === "developer.numbersystem-converter") {
    Object.assign(ui, uiMap.numberSystemHub ?? {});
  }
  if (localKey === "developer.color-picker") {
    Object.assign(ui, uiMap.colorPickerHub ?? {});
  }

  return ui;
}

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? developerEn : developerKo;
  const uiMap = locale === "en" ? developerUiEn : developerUiKo;

  for (const localKey of Object.keys(srcMap)) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };
    const ui = buildUi(uiMap, localKey, locale);
    if (ui) nextValue.ui = ui;

    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with Developer Tools entries`);
}
