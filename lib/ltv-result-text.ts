import {
  buildExportTextFooter,
  buildExportTextHeader,
} from "@/lib/calculator-result-export";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import type { LtvAppliedBasisItem, LtvCalculationResult } from "@/lib/ltv-calculations";
import { formatNumber } from "@/lib/loan-calculations";

function moneyLine(label: string, amount: number): string {
  return `${label}: ${formatNumber(amount)}원 (${formatAmountKoreanWon(amount)})`;
}

export function formatLtvResultText(args: {
  snapshot: LtvCalculationResult;
  collateralWon: number;
  basisItems: readonly LtvAppliedBasisItem[];
  seniorLienWon: number;
  heroLabel: string;
  heroValue: string;
  heroNote?: string;
}): string {
  const { snapshot, collateralWon, basisItems, seniorLienWon, heroLabel, heroValue, heroNote } = args;
  const lines = [...buildExportTextHeader("LTV 계산기")];

  lines.push(`[${heroLabel}] ${heroValue}`);
  if (heroNote) lines.push(heroNote);
  lines.push("");

  lines.push("[적용 근거]");
  for (const item of basisItems) {
    lines.push(`- ${item.label}: ${item.value}`);
  }
  lines.push(`- LTV 한도 분기: ${snapshot.limit.reasonLabel}`);
  lines.push("");

  lines.push("[상세 결과]");
  lines.push(
    `- 적용 LTV 한도: ${snapshot.limit.loanUnavailable ? "0" : `${snapshot.limit.ltvLimitPercent}%`}`,
  );
  lines.push(moneyLine("담보 인정 가격", collateralWon));
  lines.push(moneyLine("LTV 한도 내 설정 가능 총액", snapshot.grossEncumbranceCapWon));
  if (seniorLienWon > 0) lines.push(moneyLine("선순위 설정액", seniorLienWon));
  lines.push(moneyLine("신규 대출 가능액(LTV 기준)", snapshot.finalMaxLoanWon));
  if (snapshot.loanCapAppliedWon != null) {
    lines.push(moneyLine("6억 원 캡 적용 전", snapshot.netMaxLoanWon));
  }
  lines.push(moneyLine("필요 자기자금(참고)", snapshot.requiredEquityWon));
  if (snapshot.currentLtvPercent != null) {
    lines.push(`- 입력 대출 포함 LTV: ${snapshot.currentLtvPercent.toFixed(2).replace(/\.?0+$/, "")}%`);
    lines.push(moneyLine("선순위+희망 대출 합계", snapshot.totalEncumbranceWon ?? 0));
    lines.push(`- LTV 한도 충족: ${snapshot.withinLimit ? "이내" : "초과"}`);
  }

  lines.push(...buildExportTextFooter());
  return lines.join("\n");
}
