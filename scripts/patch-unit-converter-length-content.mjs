/**
 * toolContent.json에 Length Converter 허브 + 전용 페어 페이지 + UI 병합
 */
import fs from "node:fs";
import path from "node:path";
import {
  LENGTH_HUB_KEYS,
  LENGTH_KEY_TO_SLUG,
  LENGTH_UNIT_KEYS,
  lengthHubContentEn,
  lengthHubContentKo,
  lengthUiEn,
  lengthUiKo,
} from "./unit-converter-length-ui-data.mjs";

const root = process.cwd();
const HUB_PATH = "tools.unit-converter.length";
const HUB_META = "/tools/unit-converter/length";

function withShared(uiMap, toolUi) {
  return { ...uiMap.shared, ...toolUi, shared: uiMap.shared };
}

function getCanonicalLengthSlug(fromKey, toKey) {
  const a = LENGTH_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = LENGTH_KEY_TO_SLUG[toKey] ?? toKey;
  return `${a}-to-${b}`;
}

function unitLabel(uiMap, key, variant = "nameSg") {
  const u = uiMap.units?.[key];
  return u?.[variant] ?? key;
}

function formatTemplate(template, vars) {
  return Object.entries(vars).reduce(
    (s, [k, v]) => s.replaceAll(`{${k}}`, String(v)),
    template
  );
}

function buildHubUi(uiMap) {
  return withShared(uiMap, {
    ...uiMap.lengthConverter,
    ...uiMap.lengthHub,
    units: uiMap.units,
    unitDescriptions: uiMap.unitDescriptions,
    faqPage: uiMap.faqPage,
  });
}

function buildPairUi(uiMap) {
  return withShared(uiMap, {
    ...uiMap.lengthPairCalculator,
    ...uiMap.lengthPairPage,
    units: uiMap.units,
    unitDescriptions: uiMap.unitDescriptions,
    howToConvert: uiMap.howToConvert,
  });
}

function buildPairContent(fromKey, toKey, uiMap, locale) {
  const fromName = unitLabel(uiMap, fromKey, "nameSg");
  const toName = unitLabel(uiMap, toKey, "nameSg");
  const fromPlural = unitLabel(uiMap, fromKey, "name");
  const toPlural = unitLabel(uiMap, toKey, "name");
  const page = uiMap.lengthPairPage;

  const faqQ1 =
    locale === "ko"
      ? `이 페이지에서 ${fromName}을(를) ${toName}(으)로 어떻게 변환하나요?`
      : `How do I convert ${fromName} to ${toName} on this page?`;
  const faqA1 =
    locale === "ko"
      ? `${fromName} 값을 입력하면 고정된 쌍 규칙으로 ${toName} 결과가 즉시 계산됩니다.`
      : `Enter a ${fromName} value and this converter returns the ${toName} result immediately using fixed pair rules.`;
  const faqQ2 =
    locale === "ko" ? "수식과 표가 포함되나요?" : "Does this page include formulas and tables?";
  const faqA2 =
    locale === "ko"
      ? "예. 계산기 아래에서 변환 수식, 요약, 참고 표를 확인할 수 있습니다."
      : "Yes. You can review the conversion formula line, summary, and reference tables below the calculator.";
  const faqQ3 =
    locale === "ko"
      ? "다른 길이 단위 쌍으로 이동할 수 있나요?"
      : "Can I switch to other length unit pairs?";
  const faqA3 =
    locale === "ko"
      ? "예. 관련 페어 링크로 다른 전용 길이 변환 페이지로 빠르게 이동할 수 있습니다."
      : "Yes. Related pair links are provided so you can move to other dedicated length conversions quickly.";

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
    backToHub: page.backToLengthHub,
    backToDeveloper: page.backToUnitConverter,
  };
}

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const uiMap = locale === "en" ? lengthUiEn : lengthUiKo;
  const hubSrc = locale === "en" ? lengthHubContentEn : lengthHubContentKo;

  data.byPath[HUB_PATH] = {
    ...hubSrc,
    ui: buildHubUi(uiMap),
  };

  let pairCount = 0;
  for (const fromKey of LENGTH_UNIT_KEYS) {
    for (const toKey of LENGTH_UNIT_KEYS) {
      if (fromKey === toKey) continue;
      const slug = getCanonicalLengthSlug(fromKey, toKey);
      const pathKey = `${HUB_PATH}.${slug}`;
      data.byPath[pathKey] = {
        ...buildPairContent(fromKey, toKey, uiMap, locale),
        ui: buildPairUi(uiMap),
      };
      pairCount++;
    }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json: length hub + ${pairCount} pair pages`);
}
