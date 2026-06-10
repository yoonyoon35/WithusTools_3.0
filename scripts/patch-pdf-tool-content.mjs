/**
 * toolContent.json에 PDF Tools 허브 + 하위 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { pdfEn } from "./pdf-en-data.mjs";
import { pdfKo } from "./pdf-ko-data.mjs";
import { pdfUiEn, pdfUiKo } from "./pdf-ui-data.mjs";

const root = process.cwd();
const localKeys = ["pdf", "pdf.merge-pdf", "pdf.image-to-pdf"];

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? pdfEn : pdfKo;
  const uiMap = locale === "en" ? pdfUiEn : pdfUiKo;

  for (const localKey of localKeys) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };

    if (localKey === "pdf") {
      nextValue.ui =
        locale === "en"
          ? { pdfConverterLink: "PDF Converter (by format)" }
          : { pdfConverterLink: "PDF 변환기(형식별)" };
    } else if (localKey === "pdf.merge-pdf") {
      nextValue.ui = { ...uiMap.mergePdf };
    } else if (localKey === "pdf.image-to-pdf") {
      nextValue.ui = { ...uiMap.imageToPdf };
    }

    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with PDF Tools entries`);
}
