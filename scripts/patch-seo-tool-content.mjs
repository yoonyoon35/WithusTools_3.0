/**
 * toolContent.json에 SEO Tools 허브 + 하위 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { seoEn } from "./seo-en-data.mjs";
import { seoKo } from "./seo-ko-data.mjs";
import { seoUiEn, seoUiKo } from "./seo-ui-data.mjs";

const root = process.cwd();
const localKeys = [
  "seo",
  "seo.favicon-generator",
  "seo.metatag-generator",
  "seo.robots-generator",
  "seo.sitemap-generator",
];

const uiKeyByLocal = {
  "seo.favicon-generator": "faviconGenerator",
  "seo.metatag-generator": "metaTagGenerator",
  "seo.robots-generator": "robotsGenerator",
  "seo.sitemap-generator": "sitemapGenerator",
};

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? seoEn : seoKo;
  const uiMap = locale === "en" ? seoUiEn : seoUiKo;

  for (const localKey of localKeys) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };
    const uiKey = uiKeyByLocal[localKey];
    if (uiKey && uiMap[uiKey]) {
      nextValue.ui = { ...uiMap[uiKey] };
    }

    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with SEO Tools entries`);
}
