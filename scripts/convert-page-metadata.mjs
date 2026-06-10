/**
 * export const metadata = createMetadata(...) → generatePageMetadata 패턴으로 일괄 변환
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "src/app/[locale]");

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (name === "page.tsx") acc.push(full);
  }
  return acc;
}

function parsePath(content) {
  const marker = "createMetadata({";
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  let depth = 0;
  let start = content.indexOf("{", idx);
  for (let i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    else if (content[i] === "}") {
      depth--;
      if (depth === 0) {
        const block = content.slice(start, i + 1);
        return block.match(/path:\s*["'`]([^"'`]+)["'`]/)?.[1] ?? null;
      }
    }
  }
  return null;
}

const GEN_IMPORT = `import { generatePageMetadata } from "@/lib/page-metadata";`;

for (const file of walk(appDir)) {
  let content = fs.readFileSync(file, "utf-8");
  if (!content.includes("export const metadata") || !content.includes("createMetadata({")) {
    continue;
  }

  const metaPath = parsePath(content);
  if (!metaPath) {
    console.warn("skip:", path.relative(root, file));
    continue;
  }

  // remove old metadata block
  content = content.replace(
    /export const metadata: Metadata = createMetadata\(\{[\s\S]*?\}\);\s*\n/,
    ""
  );

  if (!content.includes(GEN_IMPORT)) {
    content = content.replace(
      /import type \{ Metadata \} from "next";\n/,
      `import type { Metadata } from "next";\n${GEN_IMPORT}\n`
    );
  }

  content = content.replace(
    /import \{ createMetadata \} from "@\/lib\/metadata";\n/,
    ""
  );

  const genBlock = `const META_PATH = "${metaPath}";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

`;

  // insert after imports (before first const/export default)
  const insertAt = content.search(/^(const |export default|export async function generate)/m);
  if (insertAt === -1) {
    console.warn("insert fail:", path.relative(root, file));
    continue;
  }
  content = content.slice(0, insertAt) + genBlock + content.slice(insertAt);

  fs.writeFileSync(file, content);
  console.log("converted:", path.relative(root, file));
}
