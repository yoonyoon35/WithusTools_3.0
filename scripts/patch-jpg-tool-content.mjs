/**
 * toolContent.json에 JPG 허브 + 형식별 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { jpgEn, jpgUiEn } from "./jpg-en-data.mjs";
import { jpgKo, jpgUiKo } from "./jpg-ko-data.mjs";

const root = process.cwd();

const FORMAT_SLUGS = [
  "heic",
  "heif",
  "avif",
  "bmp",
  "png",
  "svg",
  "tiff",
  "webp",
  "psd",
  "jfif",
  "ico",
  "ai",
  "dng",
  "cr2",
  "cr3",
  "tga",
  "pdf",
];

const localKeys = ["jpg-converter", ...FORMAT_SLUGS.map((f) => `jpg-converter.${f}`)];

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? jpgEn : jpgKo;
  const uiEn = jpgUiEn;
  const uiKo = jpgUiKo;

  for (const localKey of localKeys) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };

    if (localKey === "jpg-converter") {
      nextValue.ui =
        locale === "en"
          ? {
              gifConverterLink: "GIF Converter",
              imageToolsLink: "Image Tools",
              pdfToolsLink: "PDF Tools",
            }
          : {
              gifConverterLink: "GIF 변환기",
              imageToolsLink: "이미지 도구",
              pdfToolsLink: "PDF 도구",
            };
    } else {
      const slug = localKey.replace("jpg-converter.", "");
      nextValue.ui =
        slug === "pdf"
          ? locale === "en"
            ? uiEn.pdfToJpg
            : uiKo.pdfToJpg
          : locale === "en"
            ? uiEn.jpgConverter
            : uiKo.jpgConverter;
      nextValue.backToHub =
        locale === "en" ? "← Back to JPG Converter" : "← JPG 변환기로";
    }

    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with JPG entries`);
}
