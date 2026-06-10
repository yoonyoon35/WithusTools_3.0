/**
 * toolContent.json에 Health 허브 + 하위 도구 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { healthEn, healthUiEn } from "./health-en-data.mjs";
import { healthKo, healthUiKo } from "./health-ko-data.mjs";

const root = process.cwd();

const localKeys = [
  "health",
  "health.bmi-calculator",
  "health.bmr-tdee-calculator",
  "health.body-fat-calculator",
  "health.waist-hip-ratio-calculator",
  "health.skeletal-muscle-index-calculator",
];

const uiByLocalKeyEn = {
  "health.bmi-calculator": healthUiEn.bmi,
  "health.bmr-tdee-calculator": healthUiEn.bmrTdee,
  "health.body-fat-calculator": healthUiEn.bodyFat,
  "health.waist-hip-ratio-calculator": healthUiEn.whr,
  "health.skeletal-muscle-index-calculator": healthUiEn.smi,
};

const uiByLocalKeyKo = {
  "health.bmi-calculator": healthUiKo.bmi,
  "health.bmr-tdee-calculator": healthUiKo.bmrTdee,
  "health.body-fat-calculator": healthUiKo.bodyFat,
  "health.waist-hip-ratio-calculator": healthUiKo.whr,
  "health.skeletal-muscle-index-calculator": healthUiKo.smi,
};

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? healthEn : healthKo;
  const uiMap = locale === "en" ? uiByLocalKeyEn : uiByLocalKeyKo;

  for (const localKey of localKeys) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };
    if (localKey === "health") {
      nextValue.ui =
        locale === "en"
          ? {
              calculatorToolsLink: "Calculator Tools",
              unitConverterLink: "Unit Converter",
              timeToolsLink: "Time Tools",
              guideIntroPrefix: "Need unit conversion first? Try",
              guideIntroSuffix: "For scheduling, see",
            }
          : {
              calculatorToolsLink: "계산기 도구",
              unitConverterLink: "단위 변환기",
              timeToolsLink: "시간 도구",
              guideIntroPrefix: "먼저 단위 변환이 필요하면",
              guideIntroSuffix: "일정 계산은",
            };
    } else {
      nextValue.ui = uiMap[localKey];
      nextValue.backToHub =
        locale === "en" ? "← Back to Health Tools" : "← 건강 도구로";
    }
    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with Health entries`);
}
