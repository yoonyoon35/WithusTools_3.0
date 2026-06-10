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
  if (!content.includes("locale: locale as Locale")) continue;

  const fnMatch = content.match(
    /export async function generateMetadata[\s\S]*?^}/m
  );
  if (!fnMatch) continue;
  const fnBody = fnMatch[0];
  if (fnBody.includes("const { locale") || fnBody.includes("const {locale")) {
    continue;
  }

  content = content.replace(
    /locale: locale as Locale/g,
    "locale: params.locale as Locale"
  );
  fs.writeFileSync(file, content);
  console.log("fixed:", path.relative(root, file));
}
