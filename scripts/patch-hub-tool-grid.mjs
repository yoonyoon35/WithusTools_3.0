/**
 * 허브 페이지의 하드코딩 도구 목록 그리드를 HubToolGrid 로 교체
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const hubPages = [
  { rel: "src/app/[locale]/tools/calculator/page.tsx", cols: "sm:grid-cols-2" },
  { rel: "src/app/[locale]/tools/health/page.tsx", cols: "sm:grid-cols-2" },
  { rel: "src/app/[locale]/tools/developer/page.tsx", cols: "sm:grid-cols-2 lg:grid-cols-3" },
  { rel: "src/app/[locale]/tools/image/page.tsx", cols: "sm:grid-cols-2 lg:grid-cols-3" },
  { rel: "src/app/[locale]/tools/language/page.tsx", cols: "sm:grid-cols-2 lg:grid-cols-3" },
  { rel: "src/app/[locale]/tools/pdf/page.tsx", cols: "sm:grid-cols-2 lg:grid-cols-3" },
  { rel: "src/app/[locale]/tools/random/page.tsx", cols: "sm:grid-cols-2 lg:grid-cols-3" },
  { rel: "src/app/[locale]/tools/seo/page.tsx", cols: "sm:grid-cols-2" },
  { rel: "src/app/[locale]/tools/text/page.tsx", cols: "sm:grid-cols-2 lg:grid-cols-3" },
  { rel: "src/app/[locale]/tools/time/page.tsx", cols: "sm:grid-cols-2" },
  { rel: "src/app/[locale]/tools/unit-converter/page.tsx", cols: "sm:grid-cols-2 lg:grid-cols-3" },
];

for (const { rel, cols } of hubPages) {
  const file = path.join(root, rel);
  let content = fs.readFileSync(file, "utf-8");

  if (content.includes("<HubToolGrid")) {
    console.log("skip (already patched):", rel);
    continue;
  }

  const toolsMatch = content.match(/const (\w+_TOOLS) = \[([\s\S]*?)\] as const;/)
    ?? content.match(/const (\w+_TOOLS) = \[([\s\S]*?)\];\n/);
  if (!toolsMatch) {
    console.warn("no TOOLS array:", rel);
    continue;
  }

  const constName = toolsMatch[1];
  const paths = [];
  const pathRe = /path:\s*"([^"]+)"/g;
  let m;
  while ((m = pathRe.exec(toolsMatch[2]))) paths.push(m[1]);

  const pathsConst = `${constName.replace(/_TOOLS$/, "_PATHS")}`;
  const pathsBlock = `const ${pathsConst} = [\n${paths.map((p) => `  "${p}",`).join("\n")}\n] as const;\n\n`;

  content = content.replace(toolsMatch[0], `${pathsBlock}${toolsMatch[0]}`);

  if (!content.includes('import HubToolGrid from "@/components/HubToolGrid"')) {
    content = content.replace(
      /import ToolIcon from "@\/components\/ToolIcon";\n/,
      `import ToolIcon from "@/components/ToolIcon";\nimport HubToolGrid from "@/components/HubToolGrid";\n`
    );
  }

  const gridRe = new RegExp(
    `<div className="mb-8 grid gap-4 [^"]*">\\s*\\{${constName}\\.map\\([\\s\\S]*?\\)\\}\\s*</div>`,
    "m"
  );
  if (!gridRe.test(content)) {
    console.warn("no grid block:", rel);
    continue;
  }

  const colsProp = cols !== "sm:grid-cols-2 lg:grid-cols-3" ? ` columnsClassName="${cols}"` : "";
  content = content.replace(gridRe, `<HubToolGrid paths={${pathsConst}}${colsProp} />`);

  fs.writeFileSync(file, content);
  console.log("patched:", rel);
}
