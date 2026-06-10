import fs from "node:fs";
import path from "node:path";
import { koByKey } from "./hub-cards-ko-data.mjs";

const root = process.cwd();
const en = JSON.parse(
  fs.readFileSync(path.join(root, "messages/en/hubCards.json"), "utf-8")
);

const koByPath = {};
for (const [key, enText] of Object.entries(en.byPath)) {
  koByPath[key] = koByKey[key] ?? enText;
}

const missing = Object.keys(en.byPath).filter((k) => !koByKey[k]);
if (missing.length) {
  console.warn(`KO missing ${missing.length}:`, missing.join(", "));
  process.exit(1);
}

const koDir = path.join(root, "messages/ko");
fs.mkdirSync(koDir, { recursive: true });
fs.writeFileSync(
  path.join(koDir, "hubCards.json"),
  JSON.stringify({ byPath: koByPath }, null, 2) + "\n"
);
console.log(`Wrote ${Object.keys(koByPath).length} KO hub card descriptions`);
