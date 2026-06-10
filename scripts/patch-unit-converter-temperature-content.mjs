/**
 * toolContent.json에 Temperature Converter 허브 + 전용 페어 페이지 + UI 병합
 */
import fs from "node:fs";
import path from "node:path";
import {
  TEMPERATURE_KEY_TO_SLUG,
  TEMPERATURE_UNIT_KEYS,
  temperatureHubContentEn,
  temperatureHubContentKo,
  temperatureUiEn,
  temperatureUiKo,
} from "./unit-converter-temperature-ui-data.mjs";

const root = process.cwd();
const HUB_PATH = "tools.unit-converter.temperature";

function withShared(uiMap, toolUi) {
  return { ...uiMap.shared, ...toolUi, shared: uiMap.shared };
}

function getCanonicalTemperatureSlug(fromKey, toKey) {
  const a = TEMPERATURE_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = TEMPERATURE_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

function formatTemplate(template, vars) {
  return Object.entries(vars).reduce(
    (s, [k, v]) => s.replaceAll(`{${k}}`, String(v)),
    template
  );
}

function buildHubUi(uiMap) {
  return withShared(uiMap, {
    ...uiMap.temperatureConverter,
    ...uiMap.temperatureHub,
    unitDescriptions: uiMap.unitDescriptions,
    commonConversions: uiMap.commonConversions,
    faqPage: uiMap.faqPage,
  });
}

function buildPairUi(uiMap) {
  return withShared(uiMap, {
    ...uiMap.temperaturePairCalculator,
    ...uiMap.temperaturePairPage,
    unitDescriptions: uiMap.unitDescriptions,
    howToConvert: uiMap.howToConvert,
  });
}

function englishUnitName(key) {
  const names = { c: "Celsius", f: "Fahrenheit", k: "Kelvin", r: "Rankine" };
  return names[key] ?? key;
}

function buildPairContent(fromKey, toKey, uiMap, locale) {
  const fromName = englishUnitName(fromKey);
  const toName = englishUnitName(toKey);
  const page = uiMap.temperaturePairPage;

  const faqQ1 =
    locale === "ko"
      ? `이 페이지에서 ${fromName}을(를) ${toName}(으)로 어떻게 변환하나요?`
      : `How do I convert ${fromName} to ${toName} here?`;
  const faqA1 =
    locale === "ko"
      ? `${fromName} 값을 입력하면 오프셋을 반영한 수식으로 ${toName} 결과가 자동 계산됩니다.`
      : `Enter a ${fromName} value and the ${toName} result is calculated with offset-aware formulas.`;
  const faqQ2 =
    locale === "ko" ? "수식 안내와 표가 포함되나요?" : "Does this page include temperature formula details?";
  const faqA2 =
    locale === "ko"
      ? "예. 수식 줄, 설명, 변환 표가 포함되어 있습니다."
      : "Yes. This page includes formula lines, explanatory notes, and conversion tables.";
  const faqQ3 =
    locale === "ko"
      ? "다른 온도 척도 쌍으로 이동할 수 있나요?"
      : "Can I switch to other temperature scale pairs?";
  const faqA3 =
    locale === "ko"
      ? "예. 페이지 하단의 관련 페어 링크에서 이동할 수 있습니다."
      : "Yes. Related pair links are listed near the bottom.";

  return {
    h1: formatTemplate(page.h1Template, { fromName, toName }),
    subtitle: page.subtitleBadge,
    intro: formatTemplate(page.introTemplate, { fromName, toName }),
    guideTitle: formatTemplate(page.h1Template, { fromName, toName }),
    sections: [],
    faq: [
      { question: faqQ1, answer: faqA1 },
      { question: faqQ2, answer: faqA2 },
      { question: faqQ3, answer: faqA3 },
    ],
    backToHub: page.backToTemperatureHub,
    backToDeveloper: page.backToUnitConverter,
  };
}

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const uiMap = locale === "en" ? temperatureUiEn : temperatureUiKo;
  const hubSrc = locale === "en" ? temperatureHubContentEn : temperatureHubContentKo;

  data.byPath[HUB_PATH] = { ...hubSrc, ui: buildHubUi(uiMap) };

  let pairCount = 0;
  for (const fromKey of TEMPERATURE_UNIT_KEYS) {
    for (const toKey of TEMPERATURE_UNIT_KEYS) {
      if (fromKey === toKey) continue;
      const slug = getCanonicalTemperatureSlug(fromKey, toKey);
      data.byPath[`${HUB_PATH}.${slug}`] = {
        ...buildPairContent(fromKey, toKey, uiMap, locale),
        ui: buildPairUi(uiMap),
      };
      pairCount++;
    }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json: temperature hub + ${pairCount} pair pages`);
}
