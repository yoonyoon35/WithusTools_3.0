/**
 * toolContent.json에 Image 허브 + 하위 도구 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { imageEn, imageUiEn } from "./image-en-data.mjs";
import { imageKo, imageUiKo } from "./image-ko-data.mjs";

const root = process.cwd();

const localKeys = [
  "image",
  "image.image-compressor",
  "image.image-format-converter",
  "image.images-to-animated-gif",
  "image.image-editor",
  "image.paint-board",
];

const uiByLocalKeyEn = {
  "image.image-compressor": imageUiEn.imageCompressor,
  "image.image-format-converter": imageUiEn.imageFormatConverter,
  "image.images-to-animated-gif": imageUiEn.imagesToAnimatedGif,
  "image.image-editor": imageUiEn.imageEditor,
  "image.paint-board": imageUiEn.paintBoard,
};

const uiByLocalKeyKo = {
  "image.image-compressor": imageUiKo.imageCompressor,
  "image.image-format-converter": imageUiKo.imageFormatConverter,
  "image.images-to-animated-gif": imageUiKo.imagesToAnimatedGif,
  "image.image-editor": imageUiKo.imageEditor,
  "image.paint-board": imageUiKo.paintBoard,
};

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? imageEn : imageKo;
  const uiMap = locale === "en" ? uiByLocalKeyEn : uiByLocalKeyKo;

  for (const localKey of localKeys) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };
    if (localKey === "image") {
      nextValue.ui =
        locale === "en"
          ? {
              gifConverterLink: "GIF Converter",
              pdfToolsLink: "PDF Tools",
              developerToolsLink: "Developer Tools",
              guideIntroPrefix: "For format-specific GIF routes, see",
              guideIntroSuffix: "To combine images into PDF, use",
            }
          : {
              gifConverterLink: "GIF 변환기",
              pdfToolsLink: "PDF 도구",
              developerToolsLink: "개발자 도구",
              guideIntroPrefix: "형식별 GIF 변환 경로는",
              guideIntroSuffix: "여러 이미지를 PDF로 합치려면",
            };
    } else {
      nextValue.ui = uiMap[localKey];
      nextValue.backToHub =
        locale === "en" ? "← Back to Image Tools" : "← 이미지 도구로";
    }
    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with Image entries`);
}
