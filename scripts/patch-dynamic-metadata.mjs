/**
 * generateMetadata 동적 라우트에 locale 파라미터 및 createMetadata locale 전달
 */
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
  if (!content.includes("export async function generateMetadata")) continue;
  if (content.includes("generatePageMetadata")) continue;

  // params 타입에 locale 추가
  content = content.replace(
    /params:\s*Promise<\{([^}]+)\}>/g,
    (match, inner) => {
      if (inner.includes("locale:")) return match;
      const trimmed = inner.trim().replace(/;\s*$/, "");
      return `params: Promise<{ locale: string; ${trimmed} }>`;
    }
  );
  content = content.replace(
    /params:\s*\{([^}]+)\}/g,
    (match, inner) => {
      if (!content.includes("export async function generateMetadata")) return match;
      if (inner.includes("locale:")) return match;
      const trimmed = inner.trim().replace(/;\s*$/, "");
      return `params: { locale: string; ${trimmed} }`;
    }
  );

  // destructuring에 locale 추가
  content = content.replace(
    /const\s*\{([^}]+)\}\s*=\s*await params;/g,
    (match, inner) => {
      if (inner.includes("locale")) return match;
      return `const { locale, ${inner.trim()} } = await params;`;
    }
  );
  content = content.replace(
    /const\s*\{([^}]+)\}\s*=\s*params;/g,
    (match, inner) => {
      const fnIdx = content.lastIndexOf("export async function generateMetadata");
      const matchIdx = content.indexOf(match);
      if (matchIdx < fnIdx) return match;
      if (inner.includes("locale")) return match;
      return `const { locale, ${inner.trim()} } = params;`;
    }
  );

  // createMetadata 호출에 locale 추가
  content = content.replace(
    /return createMetadata\(\{([\s\S]*?)\}\);/g,
    (match, inner) => {
      if (inner.includes("locale:")) return match;
      return `return createMetadata({${inner.trim()},\n    locale: locale as import("@/i18n/routing").Locale,\n  });`;
    }
  );

  if (!content.includes('import type { Locale }')) {
    content = content.replace(
      /import type \{ Metadata \} from "next";\n/,
      `import type { Metadata } from "next";\nimport type { Locale } from "@/i18n/routing";\n`
    );
    content = content.replace(
      /locale: locale as import\("@\/i18n\/routing"\)\.Locale/g,
      "locale: locale as Locale"
    );
  }

  fs.writeFileSync(file, content);
  console.log("patched:", path.relative(root, file));
}
