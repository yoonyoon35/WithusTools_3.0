/**
 * 기존 TS 데이터에서 en 카탈로그 JSON 생성 (1회/갱신용)
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function extractRecord(filePath, varName) {
  const src = fs.readFileSync(path.join(root, filePath), "utf8");
  const match = src.match(
    new RegExp(`(?:export )?const ${varName}[^=]*=\\s*(\\{[\\s\\S]*?\\n\\});`)
  );
  if (!match) throw new Error(`Could not extract ${varName} from ${filePath}`);
  return Function(`"use strict"; return (${match[1]});`)();
}

function extractTools() {
  const src = fs.readFileSync(path.join(root, "src/data/tools.ts"), "utf8");
  const match = src.match(/export const TOOLS[^=]*=\s*(\[[\s\S]*?\n\]);/);
  if (!match) throw new Error("Could not extract TOOLS");
  return Function(`"use strict"; return (${match[1]});`)();
}

const PATH_TITLES = extractRecord("src/data/all-tools.ts", "PATH_TITLES");
const BREADCRUMB_NAMES = extractRecord("src/lib/breadcrumb.ts", "BREADCRUMB_NAMES");
const PATH_LAST_OVERRIDES = (() => {
  const src = fs.readFileSync(path.join(root, "src/lib/breadcrumb.ts"), "utf8");
  const match = src.match(/const PATH_LAST_OVERRIDES[^=]*=\s*(\{[\s\S]*?\n\});/);
  return match ? Function(`"use strict"; return (${match[1]});`)() : {};
})();
const TOOLS = extractTools();

const toolsMessages = {};
for (const tool of TOOLS) {
  toolsMessages[tool.id] = { title: tool.title, description: tool.description };
}

const enDir = path.join(root, "messages/en");
fs.mkdirSync(enDir, { recursive: true });
fs.writeFileSync(path.join(enDir, "tools.json"), JSON.stringify(toolsMessages, null, 2));
fs.writeFileSync(path.join(enDir, "pathTitles.json"), JSON.stringify(PATH_TITLES, null, 2));
fs.writeFileSync(
  path.join(enDir, "breadcrumb.json"),
  JSON.stringify({ names: BREADCRUMB_NAMES, pathOverrides: PATH_LAST_OVERRIDES, home: "Home" }, null, 2)
);

console.log("Exported EN catalog:", {
  tools: Object.keys(toolsMessages).length,
  pathTitles: Object.keys(PATH_TITLES).length,
  breadcrumbNames: Object.keys(BREADCRUMB_NAMES).length,
});
