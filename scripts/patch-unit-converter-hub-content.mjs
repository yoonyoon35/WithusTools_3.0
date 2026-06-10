/**
 * toolContent.json에 Unit Converter Tools 허브 페이지 병합
 */
import fs from "node:fs";
import path from "node:path";
import {
  unitConverterHubContentEn,
  unitConverterHubContentKo,
} from "./unit-converter-hub-ui-data.mjs";

const root = process.cwd();
const HUB_PATH = "tools.unit-converter";

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const src = locale === "en" ? unitConverterHubContentEn : unitConverterHubContentKo;

  data.byPath[HUB_PATH] = { ...src };

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json: unit converter hub`);
}
