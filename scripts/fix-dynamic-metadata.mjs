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

  const before = content;
  content = content.replace(/\],,/g, "],");
  content = content.replace(/\)\),,/g, ")),");
  content = content.replace(/withustools"\],,/g, 'withustools"],');

  // FAQ: params 동기 — locale 추출
  if (file.includes("faq")) {
    content = content.replace(
      /export async function generateMetadata\(\{\s*params,\s*\}[\s\S]*?params: \{ locale: string; category: string; slug: string \};\s*\}\): Promise<Metadata> \{\s*const entry = getFaqEntry\(params\.category, params\.slug\);/,
      `export async function generateMetadata({
  params,
}: {
  params: { locale: string; category: string; slug: string };
}): Promise<Metadata> {
  const { locale, category, slug } = params;
  const entry = getFaqEntry(category, slug);`
    );
    content = content.replace(
      /path: `\/faq\/\$\{entry\.category\}\/\$\{entry\.slug\}`/,
      "path: `/faq/${category}/${slug}`"
    );
  }

  if (content !== before) {
    fs.writeFileSync(file, content);
    console.log("fixed:", path.relative(root, file));
  }
}
