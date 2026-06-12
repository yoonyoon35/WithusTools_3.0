/**
 * toolContent.json에 Angle Converter 허브 + 전용 페어 페이지 + UI 병합
 */
import fs from "node:fs";
import path from "node:path";
import {
  ANGLE_HUB_KEYS,
  ANGLE_KEY_TO_SLUG,
  angleHubContentEn,
  angleHubContentKo,
  angleUiEn,
  angleUiKo,
} from "./unit-converter-angle-ui-data.mjs";

const root = process.cwd();
const HUB_PATH = "tools.unit-converter.angle";

function withShared(uiMap, toolUi) {
  return { ...uiMap.shared, ...toolUi, shared: uiMap.shared };
}

function getCanonicalAngleSlug(fromKey, toKey) {
  const a = ANGLE_KEY_TO_SLUG[fromKey] ?? fromKey;
  const b = ANGLE_KEY_TO_SLUG[toKey] ?? toKey;
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
    ...uiMap.angleConverter,
    ...uiMap.angleHub,
    unitDescriptions: uiMap.unitDescriptions,
    faqPage: uiMap.faqPage,
  });
}

function buildPairUi(uiMap) {
  return withShared(uiMap, {
    ...uiMap.anglePairCalculator,
    ...uiMap.anglePairPage,
    unitDescriptions: uiMap.unitDescriptions,
    howToConvert: uiMap.howToConvert,
  });
}

function englishUnitName(key) {
  const names = {
    turn: "Revolution",
    quadrant: "Quadrant",
    sextant: "Sextant",
    deg: "Degree",
    arcmin: "Arc Minute",
    moa: "Minute of Angle (MOA)",
    arcsec: "Arc Second",
    grad: "Gradian",
    rad: "Radian",
    mrad: "Milliradian",
    urad: "Microradian",
    mil: "Mil (NATO, 6400)",
  };
  return names[key] ?? key;
}

function buildPairContent(fromKey, toKey, uiMap, locale) {
  const fromName = englishUnitName(fromKey);
  const toName = englishUnitName(toKey);
  const page = uiMap.anglePairPage;

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
      ? "예. 수식 줄, 설명 섹션, 각도 변환 표가 포함되어 있습니다."
      : "Yes. This page includes formula lines, explanation sections, and angle conversion tables.";
  const faqQ3 =
    locale === "ko"
      ? "다른 각도 단위 쌍 페이지로 이동할 수 있나요?"
      : "Can I move to other angle pair pages?";
  const faqA3 =
    locale === "ko"
      ? "예. 아래 관련 각도 단위 쌍 링크에서 이동할 수 있습니다."
      : "Yes. Cross-links to related angle unit pairs are provided below.";

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
    backToHub: page.backToAngleHub,
    backToDeveloper: page.backToUnitConverter,
  };
}

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const uiMap = locale === "en" ? angleUiEn : angleUiKo;
  const hubSrc = locale === "en" ? angleHubContentEn : angleHubContentKo;

  data.byPath[HUB_PATH] = { ...hubSrc, ui: buildHubUi(uiMap) };

  for (const key of Object.keys(data.byPath)) {
    if (key.startsWith(`${HUB_PATH}.`)) {
      delete data.byPath[key];
    }
  }

  let pairCount = 0;
  for (const fromKey of ANGLE_HUB_KEYS) {
    for (const toKey of ANGLE_HUB_KEYS) {
      if (fromKey === toKey) continue;
      const slug = getCanonicalAngleSlug(fromKey, toKey);
      data.byPath[`${HUB_PATH}.${slug}`] = {
        ...buildPairContent(fromKey, toKey, uiMap, locale),
        ui: buildPairUi(uiMap),
      };
      pairCount++;
    }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json: angle hub + ${pairCount} pair pages`);
}
