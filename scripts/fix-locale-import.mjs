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
  if (!content.includes("as Locale")) continue;
  if (content.includes('import type { Locale }')) continue;

  content = content.replace(
    /import type \{ Metadata \} from "next";\r?\n/,
    `import type { Metadata } from "next";\nimport type { Locale } from "@/i18n/routing";\n`
  );
  fs.writeFileSync(file, content);
  console.log("fixed:", path.relative(root, file));
}
