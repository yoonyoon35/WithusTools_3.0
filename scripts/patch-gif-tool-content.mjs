/**
 * toolContent.json에 GIF 허브 + 형식별 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { gifEn } from "./gif-en-data.mjs";
import { gifKo } from "./gif-ko-data.mjs";
import { gifUiEn, gifUiKo } from "./gif-ui-data.mjs";

const root = process.cwd();

const FORMAT_SLUGS = [
  "heic", "heif", "avif", "bmp", "png", "svg", "tiff", "webp", "psd",
  "jfif", "ico", "ai", "dng", "cr2", "cr3", "tga", "jpg", "pdf",
];

const localKeys = ["gif-converter", ...FORMAT_SLUGS.map((f) => `gif-converter.${f}`)];

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? gifEn : gifKo;
  const uiMap = locale === "en" ? gifUiEn : gifUiKo;

  for (const localKey of localKeys) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };

    if (localKey === "gif-converter") {
      nextValue.ui =
        locale === "en"
          ? {
              imagesToAnimatedGifLink: "Images to Animated GIF",
              jpgConverterLink: "JPG Converter",
              imageToolsLink: "Image Tools",
            }
          : {
              imagesToAnimatedGifLink: "이미지→애니메이션 GIF",
              jpgConverterLink: "JPG 변환기",
              imageToolsLink: "이미지 도구",
            };
    } else {
      const slug = localKey.replace("gif-converter.", "");
      nextValue.ui =
        slug === "pdf"
          ? { ...uiMap.pdfToGif }
          : { loadingConverter: locale === "en" ? "Loading converter..." : "변환기 로딩 중..." };
    }

    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with GIF entries`);
}
