import fs from "fs";
import path from "path";

const dir = "lib/guide/articles";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));

function analyze(file) {
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const slugMatch = raw.match(/slug:\s*"([^"]+)"/);
  const titleMatch = raw.match(/title:\s*"([^"]+)"/);
  const slug = slugMatch?.[1] ?? file;
  const title = titleMatch?.[1] ?? file;

  const bodyMatch = raw.match(/export function \w+Body\(\) \{([\s\S]*)\n\}/);
  const body = bodyMatch ? bodyMatch[1] : raw;

  const h2 = (body.match(/<h2[^>]*>/g) || []).length;
  const tables = (body.match(/<table/g) || []).length;
  const paragraphs = (body.match(/<p[\s>]/g) || []).length;

  const proseOnly = body
    .replace(/<table[\s\S]*?<\/table>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]+\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const tableText = (body.match(/<table[\s\S]*?<\/table>/g) || [])
    .join(" ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const proseLen = proseOnly.length;
  const tableLen = tableText.length;
  const totalLen = proseLen + tableLen;
  const tableRatio = totalLen ? tableLen / totalLen : 0;

  const hasExample = /예시|사례|가정|계산 예|시나리오/.test(body);
  const hasHowTo = /선택 기준|어떻게|방법|절차|신청|주의|흔한 실수|체크|팁/.test(body);

  let risk = 0;
  const reasons = [];

  if (proseLen < 500) {
    risk += 3;
    reasons.push(`본문 서사 매우 짧음(${proseLen}자)`);
  } else if (proseLen < 800) {
    risk += 2;
    reasons.push(`본문 서사 짧음(${proseLen}자)`);
  } else if (proseLen < 1100) {
    risk += 1;
    reasons.push(`본문 서사 보통(${proseLen}자)`);
  }

  if (tableRatio >= 0.75) {
    risk += 3;
    reasons.push(`표 비중 과다(${Math.round(tableRatio * 100)}%)`);
  } else if (tableRatio >= 0.6) {
    risk += 2;
    reasons.push(`표 비중 높음(${Math.round(tableRatio * 100)}%)`);
  } else if (tableRatio >= 0.45) {
    risk += 1;
    reasons.push(`표 비중 있음(${Math.round(tableRatio * 100)}%)`);
  }

  if (h2 <= 2) {
    risk += 2;
    reasons.push(`섹션 수 적음(H2 ${h2}개)`);
  } else if (h2 <= 3) {
    risk += 1;
    reasons.push(`섹션 수 보통(H2 ${h2}개)`);
  }

  if (!hasExample) {
    risk += 1;
    reasons.push("구체 예시/시나리오 부족");
  }
  if (!hasHowTo) {
    risk += 1;
    reasons.push("실행/판단 가이드 부족");
  }
  if (paragraphs <= 4) {
    risk += 1;
    reasons.push(`문단 수 적음(${paragraphs}개)`);
  }

  let tier = "낮음";
  if (risk >= 8) tier = "매우 높음";
  else if (risk >= 6) tier = "높음";
  else if (risk >= 4) tier = "중간";

  return {
    slug,
    title,
    proseLen,
    tableLen,
    tableRatio: Math.round(tableRatio * 100),
    h2,
    paragraphs,
    tables,
    hasExample,
    hasHowTo,
    risk,
    tier,
    reasons,
  };
}

const results = files.map(analyze).sort((a, b) => b.risk - a.risk || a.proseLen - b.proseLen);
console.log(JSON.stringify(results, null, 2));
