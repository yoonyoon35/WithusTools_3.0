/**
 * toolContent.json에 PDF Converter 허브 + 형식별 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { pdfConverterEn } from "./pdf-converter-en-data.mjs";
import { pdfConverterKo } from "./pdf-converter-ko-data.mjs";
import { pdfUiEn, pdfUiKo } from "./pdf-ui-data.mjs";

const root = process.cwd();
const FORMATS = ["jpg", "heic", "heif", "png", "webp", "avif", "bmp", "tiff"];
const localKeys = ["pdf-converter", ...FORMATS.map((f) => `pdf-converter.${f}`)];

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? pdfConverterEn : pdfConverterKo;
  const uiMap = locale === "en" ? pdfUiEn : pdfUiKo;

  for (const localKey of localKeys) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };

    if (localKey === "pdf-converter") {
      nextValue.ui =
        locale === "en"
          ? { imageToPdfLink: "Image to PDF" }
          : { imageToPdfLink: "이미지→PDF" };
    } else {
      nextValue.ui = {
        ...uiMap.imageToPdf,
        loadingConverter: locale === "en" ? "Loading converter..." : "변환기 로딩 중...",
      };
    }

    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with PDF Converter entries`);
}
