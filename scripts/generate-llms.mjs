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
  { path: "/loan-calculator", title: "대출 이자 계산기", desc: "원리금균등·원금균등·만기일시상환, 거치기간, 비상금대출·마이너스통장 월 이자 어림, 상환 방식 비교." },
  { path: "/dsr-calculator", title: "DSR·주담대 한도 계산기", desc: "연소득·기존·신규 대출로 DSR(%) 산출, 목표 DSR(기본 40%·직접 설정) 기준 최대 대출 가능액 역산." },
  { path: "/dti-calculator", title: "DTI 계산기", desc: "주담대 원리금·기타 대출 이자로 DTI(%) 간이 산출." },
  { path: "/ltv-calculator", title: "LTV 계산기", desc: "담보 가격·규제지역·주택 보유 조건으로 LTV(%)와 대출 가능액." },
  { path: "/acquisition-tax-calculator", title: "취득세 계산기", desc: "주택·주택 외 자산, 취득 유형별 취득세·지방교육세·농특세." },
  { path: "/farmland-acquisition-tax-calculator", title: "농지 취득세 계산기", desc: "농지 매매·상속·증여·원시취득별 취득세·농특세·지방교육세, 2년 이상 자경 감면 요건과 농지취득자격증명·신고 기한 안내." },
  { path: "/brokerage-fee-calculator", title: "중개수수료 계산기", desc: "매매·전세·월세 거래 유형별 중개수수료 상한액." },
  { path: "/prepayment-fee-calculator", title: "중도상환 수수료 계산기", desc: "중도상환 수수료·면제 기간 참고 계산." },
  { path: "/national-housing-bond-calculator", title: "국민주택채권 계산기", desc: "시가표준액·지역별 국민주택채권 매입금액(이전·상속·증여·근저당)과 할인율별 즉시매도 실부담." },
  {
    path: "/comprehensive-property-tax-calculator",
    title: "종합부동산세 계산기",
    desc: "재산세·종부세·농특세와 연간 보유세 합계.",
  },
  {
    path: "/capital-gains-tax-calculator",
    title: "양도소득세 계산기",
    desc: "양도차익·1세대1주택 비과세·장기보유특별공제·다주택 중과, 양도세·지방소득세.",
  },
  {
    path: "/comprehensive-income-tax-calculator",
    title: "종합소득세 계산기",
    desc: "국세청 세율·경비율·중간예납으로 산출세액과 납부·환급세액.",
  },
  {
    path: "/inheritance-tax-calculator",
    title: "상속세 계산기",
    desc: "과세가액·일괄공제·배우자공제·금융재산공제·동거주택공제·신고세액공제 반영 예상 세액.",
  },
];

const topicHubs = [
  { id: "dsr-limit", title: "DSR·대출 한도 가이드", desc: "DSR 산정, 스트레스 DSR, LTV·DTI, 신용등급과 한도." },
  { id: "regulated-area", title: "규제지역·토지거래허가 가이드", desc: "규제지역 지정 영향, 다주택 대출, 토지거래허가·실거주." },
  { id: "repayment-rate", title: "상환·금리 가이드", desc: "원리금균등·원금균등, 거치, 고정·변동, 중도상환." },
  { id: "housing-loan", title: "주택·전세 대출 가이드", desc: "주담대·전세자금, 청약, 부대비용." },
  { id: "auction", title: "부동산 경매 가이드", desc: "경매 절차·비용·대출." },
  { id: "acquisition-tax", title: "취득세 가이드", desc: "세율·감면·중과, 지방교육세·농특세." },
  { id: "capital-gains-tax", title: "양도소득세 가이드", desc: "1주택 비과세, 장특공, 다주택 중과." },
  { id: "holding-tax", title: "보유세·종부세 가이드", desc: "재산세·종부세, 공시가격·기본공제." },
  { id: "inheritance-tax", title: "상속세 가이드", desc: "과세가액·상속공제·누진세율·신고." },
  { id: "comprehensive-income-tax", title: "종합소득세 가이드", desc: "세율·경비율·간편장부·중간예납." },
  { id: "brokerage", title: "중개수수료·거래 가이드", desc: "요율, 전·월세, 직거래, 분양권·재계약." },
];

const featuredGuides = [
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
  `> WithusTools(withustools.com)는 대출 이자·DSR·LTV·DTI·취득세·중개수수료·종부세·양도세·종소세·상속세 계산기와 2026년 기준 가이드 ${articles.length}편을 무료 제공하는 한국어 부동산·금융 참고 사이트입니다.`,
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
  `- [대출·금융 가이드](${siteUrl}/guide): DSR·상환·취득세·중개수수료·보유세·양도세·종소세·상속세 주제별 ${articles.length}편.`,
  ...topicHubs.map(
    (hub) => `- [${hub.title}](${siteUrl}/guide/topics/${hub.id}): ${hub.desc}`,
  ),
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
