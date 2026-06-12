/**
 * toolContent.json에 Speed Converter 허브 + 전용 페어 페이지 + UI 병합
 */
import fs from "node:fs";
import path from "node:path";
import {
  SPEED_HUB_KEYS,
  SPEED_KEY_TO_SLUG,
  speedHubContentEn,
  speedHubContentKo,
  speedUiEn,
  speedUiKo,
} from "./unit-converter-speed-ui-data.mjs";

const root = process.cwd();
const HUB_PATH = "tools.unit-converter.speed";

function withShared(uiMap, toolUi) {
  return { ...uiMap.shared, ...toolUi, shared: uiMap.shared };
}

function getCanonicalSpeedSlug(fromKey, toKey) {
  const a = SPEED_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = SPEED_KEY_TO_SLUG[toKey] ?? toKey;
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
    ...uiMap.speedConverter,
    ...uiMap.speedHub,
    unitDescriptions: uiMap.unitDescriptions,
    faqPage: uiMap.faqPage,
  });
}

function buildPairUi(uiMap) {
  return withShared(uiMap, {
    ...uiMap.speedPairCalculator,
    ...uiMap.speedPairPage,
    unitDescriptions: uiMap.unitDescriptions,
    howToConvert: uiMap.howToConvert,
  });
}

function englishUnitName(key) {
  const names = {
    mps: "Meter per Second",
    kmps: "Kilometer per Second",
    kph: "Kilometer per Hour",
    mph: "Mile per Hour",
    knots: "Knot",
    fpm: "Foot per Minute",
    fps: "Feet per Second",
    ips: "Inch per Second",
    cms: "Centimeter per Second",
    mms: "Millimeter per Second",
    mach: "Mach",
    beaufort: "Beaufort",
    c: "Speed of light (c)",
  };
  return names[key] ?? key;
}

function buildPairContent(fromKey, toKey, uiMap, locale) {
  const fromName = englishUnitName(fromKey);
  const toName = englishUnitName(toKey);
  const page = uiMap.speedPairPage;

  const faqQ1 =
    locale === "ko"
      ? `이 페이지에서 ${fromName}을(를) ${toName}(으)로 어떻게 변환하나요?`
      : `How do I convert ${fromName} to ${toName}?`;
  const faqA1 =
    locale === "ko"
      ? `${fromName} 값을 입력하면 고정된 쌍 설정으로 ${toName} 결과가 반환됩니다.`
      : `Type a ${fromName} value and this page returns the ${toName} result with fixed pair settings.`;
  const faqQ2 =
    locale === "ko" ? "수식과 변환 표가 포함되나요?" : "Are formulas and conversion tables included?";
  const faqA2 =
    locale === "ko"
      ? "예. 수식 줄, 설명 섹션, 속도 변환 표가 포함되어 있습니다."
      : "Yes. This page includes formula lines, explanation sections, and speed conversion tables.";
  const faqQ3 =
    locale === "ko"
      ? "다른 속도 단위 쌍 페이지로 이동할 수 있나요?"
      : "Can I move to other speed pair pages?";
  const faqA3 =
    locale === "ko"
      ? "예. 아래 관련 속도 단위 쌍 링크에서 이동할 수 있습니다."
      : "Yes. Cross-links to related speed unit pairs are provided below.";

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
    backToHub: page.backToSpeedHub,
    backToDeveloper: page.backToUnitConverter,
  };
}

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const uiMap = locale === "en" ? speedUiEn : speedUiKo;
  const hubSrc = locale === "en" ? speedHubContentEn : speedHubContentKo;

  data.byPath[HUB_PATH] = { ...hubSrc, ui: buildHubUi(uiMap) };

  for (const key of Object.keys(data.byPath)) {
    if (key.startsWith(`${HUB_PATH}.`)) {
      delete data.byPath[key];
    }
  }

  let pairCount = 0;
  for (const fromKey of SPEED_HUB_KEYS) {
    for (const toKey of SPEED_HUB_KEYS) {
      if (fromKey === toKey) continue;
      const slug = getCanonicalSpeedSlug(fromKey, toKey);
      data.byPath[`${HUB_PATH}.${slug}`] = {
        ...buildPairContent(fromKey, toKey, uiMap, locale),
        ui: buildPairUi(uiMap),
      };
      pairCount++;
    }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json: speed hub + ${pairCount} pair pages`);
}
