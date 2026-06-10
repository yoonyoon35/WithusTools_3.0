/**
 * pageMeta 추출: git HEAD의 구 page.tsx 또는 현재 createMetadata 블록
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

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

function pathToKey(metaPath) {
  if (!metaPath || metaPath === "/") return "home";
  return metaPath.replace(/^\//, "").replace(/\//g, ".");
}

function parseCreateMetadataBlock(content) {
  const marker = "createMetadata({";
  const idx = content.indexOf(marker);
  if (idx === -1) return null;

  let depth = 0;
  let start = content.indexOf("{", idx);
  let end = start;
  for (let i = start; i < content.length; i++) {
    const ch = content[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  const block = content.slice(start, end + 1);

  const title = block.match(/title:\s*["'`]((?:\\.|[^"'`])*)["'`]/)?.[1];
  const description = block.match(
    /description:\s*(?:\n\s*)?["'`]((?:\\.|[^"'`])*)["'`]/s
  )?.[1];
  const metaPath = block.match(/path:\s*["'`]([^"'`]+)["'`]/)?.[1];
  if (!title || !description || !metaPath) return null;

  const kwMatch = block.match(/keywords:\s*\[([\s\S]*?)\]/);
  const keywords = [];
  if (kwMatch) {
    const re = /["'`]((?:\\.|[^"'`])*)["'`]/g;
    let m;
    while ((m = re.exec(kwMatch[1]))) keywords.push(m[1]);
  }

  return { title, description, path: metaPath, keywords };
}

function readFromGit(legacyPath) {
  try {
    return execSync(`git show HEAD:${legacyPath}`, {
      cwd: root,
      encoding: "utf-8",
      stdio: ["pipe", "pipe", "pipe"],
    });
  } catch {
    return null;
  }
}

const byPath = {};

for (const file of walk(appDir)) {
  const rel = path.relative(appDir, file).replace(/\\/g, "/");
  const legacyPath = `src/app/${rel}`;

  let content = fs.readFileSync(file, "utf-8");
  let parsed = parseCreateMetadataBlock(content);

  if (!parsed) {
    const metaPathMatch = content.match(/const META_PATH = "([^"]+)"/);
    if (metaPathMatch) {
      const gitContent = readFromGit(legacyPath);
      if (gitContent) parsed = parseCreateMetadataBlock(gitContent);
      if (!parsed) {
        console.warn("git parse fail:", legacyPath);
        continue;
      }
    } else {
      continue;
    }
  }

  byPath[pathToKey(parsed.path)] = {
    title: parsed.title,
    description: parsed.description,
    keywords: parsed.keywords,
  };
}

byPath.home = {
  title: "WithusTools - Free Online Web Tools",
  description:
    "50+ free online web tools. Calculator, developer tools, hash, image, random generator, SEO, text, time tools and more. No signup required.",
  keywords: ["online tools", "web utilities", "free tools", "withustools"],
};

const outDir = path.join(root, "messages/en");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, "pageMeta.json"),
  JSON.stringify({ byPath }, null, 2) + "\n"
);
console.log(`Wrote ${Object.keys(byPath).length} entries to messages/en/pageMeta.json`);
