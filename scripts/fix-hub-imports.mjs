import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "src/app/[locale]");

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, acc);
    else if (name === "page.tsx") acc.push(full);
  }
  return acc;
}

for (const file of walk(appDir)) {
  let content = fs.readFileSync(file, "utf-8");
  let changed = false;

  if (
    content.includes("generatePageMetadata(") &&
    !content.includes('import { generatePageMetadata }')
  ) {
    if (content.includes('import { createMetadata } from "@/lib/metadata";')) {
      content = content.replace(
        'import { createMetadata } from "@/lib/metadata";\n',
        'import { generatePageMetadata } from "@/lib/page-metadata";\n'
      );
    } else {
      content = content.replace(
        /import type \{ Metadata \} from "next";\n/,
        `import type { Metadata } from "next";\nimport { generatePageMetadata } from "@/lib/page-metadata";\n`
      );
    }
    changed = true;
  }

  if (
    content.includes("<HubToolGrid") &&
    !content.includes('import HubToolGrid from "@/components/HubToolGrid"')
  ) {
    if (content.includes('import ToolIcon from "@/components/ToolIcon";\n')) {
      content = content.replace(
        'import ToolIcon from "@/components/ToolIcon";\n',
        `import ToolIcon from "@/components/ToolIcon";\nimport HubToolGrid from "@/components/HubToolGrid";\n`
      );
    } else {
      content = content.replace(
        /import type \{ Metadata \} from "next";\n/,
        `import type { Metadata } from "next";\nimport HubToolGrid from "@/components/HubToolGrid";\n`
      );
    }
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log("fixed:", path.relative(root, file));
  }
}
