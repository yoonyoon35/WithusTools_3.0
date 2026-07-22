#!/usr/bin/env node
/**
 * public/llms.txt · public/llms-full.txt 생성
 * next build 전 prebuild에서 실행됩니다.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const articlesDir = path.join(root, "lib", "guide", "articles");
const siteUrl = "https://withustools.com";

const calculators = [
  { path: "/loan-calculator", title: "대출 이자 계산기", desc: "원리금균등·원금균등·만기일시상환, 거치기간, 상환 방식 비교." },
  { path: "/dsr-calculator", title: "DSR·주담대 한도 계산기", desc: "연소득·기존·신규 대출로 DSR(%)과 월 상환 부담 간이 산출." },
  { path: "/dti-calculator", title: "DTI 계산기", desc: "주담대 원리금·기타 대출 이자로 DTI(%) 간이 산출." },
  { path: "/ltv-calculator", title: "LTV 계산기", desc: "담보 가격·규제지역·주택 보유 조건으로 LTV(%)와 대출 가능액." },
  { path: "/acquisition-tax-calculator", title: "취득세 계산기", desc: "주택·주택 외 자산, 취득 유형별 취득세·지방교육세·농특세." },
  { path: "/brokerage-fee-calculator", title: "중개수수료 계산기", desc: "매매·전세·월세 거래 유형별 중개수수료 상한액." },
  { path: "/prepayment-fee-calculator", title: "중도상환 수수료 계산기", desc: "중도상환 수수료·면제 기간 참고 계산." },
  {
    path: "/comprehensive-property-tax-calculator",
    title: "종합부동산세 계산기",
    desc: "재산세·종부세·농특세와 연간 보유세 합계.",
  },
];

const featuredGuides = [
  "dsr-calculation-method",
  "dsr-40-mortgage-limit",
  "acquisition-tax-rates-2026-guide",
  "brokerage-fee-rates-2026-guide",
  "equal-payment-vs-equal-principal",
  "first-time-homebuyer-benefits-2026",
  "comprehensive-property-tax-overview-guide",
  "ltv-dti-dsr-comparison",
];

function parseArticleMeta(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const slug = raw.match(/slug:\s*"([^"]+)"/)?.[1];
  const title = raw.match(/title:\s*"([^"]+)"/)?.[1];
  const description = raw.match(/description:\s*\n?\s*"([^"]+)"/)?.[1] ?? raw.match(/description:\s*"([^"]+)"/)?.[1];
  const updated = raw.match(/updated:\s*"([^"]+)"/)?.[1];
  return { slug, title, description, updated, raw };
}

function stripBodyToText(raw) {
  const bodyMatch = raw.match(/export function \w+Body\(\) \{([\s\S]*)\n\}/);
  const body = bodyMatch ? bodyMatch[1] : raw;
  return body
    .replace(/<table[\s\S]*?<\/table>/g, (table) =>
      table
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .replace(/<Link[^>]*href=\{?"([^"}]+)"?\}?[^>]*>([\s\S]*?)<\/Link>/g, "$2 ($1)")
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, "$2 ($1)")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, "\n\n## $1\n\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, "\n\n### $1\n\n")
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/g, "\n$1\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]+\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const articleFiles = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".tsx"));
const articles = articleFiles
  .map((f) => parseArticleMeta(path.join(articlesDir, f)))
  .filter((a) => a.slug && a.title)
  .sort((a, b) => a.slug.localeCompare(b.slug));

const llmsLines = [
  "# WithusTools",
  "",
  `> WithusTools(withustools.com)는 대출 이자·DSR·LTV·DTI·취득세·중개수수료·종부세 계산기와 2026년 기준 가이드 ${articles.length}편을 무료 제공하는 한국어 부동산·금융 참고 사이트입니다.`,
  "",
  "표준 계산식과 공공 자료 기반 참고용 콘텐츠입니다. 실제 심사·신고 결과는 금융기관·관할 지자체에서 확인해야 합니다.",
  "",
  "## 계산기",
  "",
  ...calculators.map(
    (c) => `- [${c.title}](${siteUrl}${c.path}): ${c.desc}`,
  ),
  "",
  "## 가이드 허브",
  "",
  `- [대출·금융 가이드](${siteUrl}/guide): DSR·상환·취득세·중개수수료·보유세 주제별 ${articles.length}편.`,
  `- [사이트 소개](${siteUrl}/about): 운영 배경·콘텐츠 작성 기준·문의.`,
  "",
  "## 자주 찾는 가이드",
  "",
];

for (const slug of featuredGuides) {
  const article = articles.find((a) => a.slug === slug);
  if (article) {
    llmsLines.push(
      `- [${article.title}](${siteUrl}/guide/${article.slug}): ${article.description ?? ""}`,
    );
  }
}

llmsLines.push("", "## Optional", "", `- [개인정보처리방침](${siteUrl}/privacy)`, `- [이용약관](${siteUrl}/terms)`, `- [오픈소스 고지](${siteUrl}/oss-notice)`, "");

const fullLines = [
  "# WithusTools — Full content index",
  "",
  "> Auto-generated companion to /llms.txt. Contains plain-text extracts of guide articles for LLM context.",
  "",
];

for (const article of articles) {
  fullLines.push(`---`, "", `# ${article.title}`, "", `URL: ${siteUrl}/guide/${article.slug}`, "");
  if (article.updated) fullLines.push(`Updated: ${article.updated}`, "");
  if (article.description) fullLines.push(article.description, "");
  fullLines.push(stripBodyToText(article.raw), "", "");
}

const publicDir = path.join(root, "public");
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "llms.txt"), llmsLines.join("\n"), "utf8");
fs.writeFileSync(path.join(publicDir, "llms-full.txt"), fullLines.join("\n"), "utf8");

console.log(`[generate-llms] llms.txt + llms-full.txt (${articles.length} guides)`);
