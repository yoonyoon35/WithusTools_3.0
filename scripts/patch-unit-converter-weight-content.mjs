/**
 * toolContent.json에 Weight Converter 허브 + 전용 페어 페이지 + UI 병합
 */
import fs from "node:fs";
import path from "node:path";
import {
  WEIGHT_KEY_TO_SLUG,
  WEIGHT_UNIT_KEYS,
  weightHubContentEn,
  weightHubContentKo,
  weightUiEn,
  weightUiKo,
} from "./unit-converter-weight-ui-data.mjs";

const root = process.cwd();
const HUB_PATH = "tools.unit-converter.weight";

function withShared(uiMap, toolUi) {
  return { ...uiMap.shared, ...toolUi, shared: uiMap.shared };
}

function getCanonicalWeightSlug(fromKey, toKey) {
  const a = WEIGHT_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = WEIGHT_KEY_TO_SLUG[toKey] ?? toKey;
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
    ...uiMap.weightConverter,
    ...uiMap.weightHub,
    unitDescriptions: uiMap.unitDescriptions,
    faqPage: uiMap.faqPage,
  });
}

function buildPairUi(uiMap) {
  return withShared(uiMap, {
    ...uiMap.weightPairCalculator,
    ...uiMap.weightPairPage,
    unitDescriptions: uiMap.unitDescriptions,
    howToConvert: uiMap.howToConvert,
  });
}

/** Unit names in templates use English from WEIGHT_UNITS via patch-time English labels in slug only; h1 uses keys in runtime via weightUnitLabel */
function englishUnitName(key) {
  const names = {
    t: "Metric Ton",
    cwt_uk: "Hundredweight (UK)",
    cwt_us: "Hundredweight (US)",
    lton: "Long Ton (UK)",
    ust: "US Ton (Short)",
    st: "Stone",
    kg: "Kilogram",
    lb: "Pound",
    gr: "Grain",
    ct: "Carat",
    g: "Gram",
    oz: "Ounce",
    mg: "Milligram",
    ug: "Microgram",
  };
  return names[key] ?? key;
}

function buildPairContent(fromKey, toKey, uiMap, locale) {
  const fromName = englishUnitName(fromKey);
  const toName = englishUnitName(toKey);
  const page = uiMap.weightPairPage;

  const faqQ1 =
    locale === "ko"
      ? `이 페이지에서 ${fromName}을(를) ${toName}(으)로 어떻게 변환하나요?`
      : `How do I convert ${fromName} to ${toName} on this page?`;
  const faqA1 =
    locale === "ko"
      ? `${fromName} 값을 입력하면 고정된 쌍 규칙으로 ${toName} 결과가 자동 계산됩니다.`
      : `Enter a ${fromName} value and the ${toName} result is calculated automatically.`;
  const faqQ2 =
    locale === "ko" ? "수식 안내와 표가 포함되나요?" : "Does this pair page include formula guidance?";
  const faqA2 =
    locale === "ko"
      ? "예. 계산기 아래에서 수식, 요약, 변환 표를 확인할 수 있습니다."
      : "Yes. You can review formulas, summary notes, and conversion tables under the calculator.";
  const faqQ3 =
    locale === "ko"
      ? "다른 무게 단위 쌍으로 이동할 수 있나요?"
      : "Can I jump to other weight unit pairs?";
  const faqA3 =
    locale === "ko"
      ? "예. 페이지 하단의 관련 페어 링크에서 다른 전용 무게 변환 페이지로 이동할 수 있습니다."
      : "Yes. Related pair links are listed near the bottom of the page.";

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
    backToHub: page.backToWeightHub,
    backToDeveloper: page.backToUnitConverter,
  };
}

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const uiMap = locale === "en" ? weightUiEn : weightUiKo;
  const hubSrc = locale === "en" ? weightHubContentEn : weightHubContentKo;

  data.byPath[HUB_PATH] = { ...hubSrc, ui: buildHubUi(uiMap) };

  let pairCount = 0;
  for (const fromKey of WEIGHT_UNIT_KEYS) {
    for (const toKey of WEIGHT_UNIT_KEYS) {
      if (fromKey === toKey) continue;
      const slug = getCanonicalWeightSlug(fromKey, toKey);
      data.byPath[`${HUB_PATH}.${slug}`] = {
        ...buildPairContent(fromKey, toKey, uiMap, locale),
        ui: buildPairUi(uiMap),
      };
      pairCount++;
    }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json: weight hub + ${pairCount} pair pages`);
}
