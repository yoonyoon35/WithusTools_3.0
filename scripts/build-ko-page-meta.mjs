/**
 * EN pageMeta.byPath → KO pageMeta.byPath
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const enMeta = JSON.parse(
  fs.readFileSync(path.join(root, "messages/en/pageMeta.json"), "utf-8")
);
const koPathTitles = JSON.parse(
  fs.readFileSync(path.join(root, "messages/ko/pathTitles.json"), "utf-8")
);
const koTools = JSON.parse(
  fs.readFileSync(path.join(root, "messages/ko/tools.json"), "utf-8")
);

const HUB_PATH_TO_TOOL_ID = {
  "/tools/ssh": "ssh-key-gen",
  "/tools/hash-calculator": "hash-calculator",
  "/tools/calculator": "calculator-tools",
  "/tools/health": "health-tools",
  "/tools/time": "time-tools",
  "/tools/image": "image-tools",
  "/tools/jpg-converter": "jpg-converter",
  "/tools/gif-converter": "gif-converter",
  "/tools/pdf": "pdf-tools",
  "/tools/pdf-converter": "pdf-converter",
  "/tools/text": "text-tools",
  "/tools/random": "random-tools",
  "/tools/seo": "seo-tools",
  "/tools/language": "language-tools",
  "/tools/developer": "developer-tools",
  "/tools/unit-converter": "unit-converter-tools",
};

function keyToPath(key) {
  if (key === "home") return "/";
  return "/" + key.replace(/\./g, "/");
}

const koByPath = {};

for (const [key, entry] of Object.entries(enMeta.byPath)) {
  const metaPath = keyToPath(key);
  const hubId = HUB_PATH_TO_TOOL_ID[metaPath];

  let title = koPathTitles[metaPath];
  if (!title && hubId && koTools[hubId]) title = koTools[hubId].title;
  if (!title && key === "home") title = "WithusTools - 무료 온라인 웹 도구";
  if (!title && key === "search") title = "도구 검색";
  if (!title && key === "tools") title = "도구";
  if (!title) title = entry.title;

  let description;
  if (key === "home") {
    description =
      "50개 이상의 무료 온라인 웹 도구. 계산기, 개발자 도구, 해시, 이미지, 랜덤 생성기, SEO, 텍스트, 시간 도구 등. 가입 불필요.";
  } else if (key === "search") {
    description = "WithusTools의 무료 온라인 도구를 검색하세요.";
  } else if (hubId && koTools[hubId]) {
    description = koTools[hubId].description;
  } else if (koPathTitles[metaPath]) {
    description = `브라우저에서 무료로 사용하는 ${koPathTitles[metaPath]}. 가입 없이 WithusTools에서 바로 이용하세요.`;
  } else {
    description = entry.description;
  }

  koByPath[key] = { title, description, keywords: entry.keywords };
}

const koDir = path.join(root, "messages/ko");
fs.mkdirSync(koDir, { recursive: true });
fs.writeFileSync(
  path.join(koDir, "pageMeta.json"),
  JSON.stringify({ byPath: koByPath }, null, 2) + "\n"
);
console.log(`Wrote ${Object.keys(koByPath).length} entries to messages/ko/pageMeta.json`);
