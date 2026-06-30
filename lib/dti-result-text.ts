import {
  buildExportTextFooter,
  buildExportTextHeader,
} from "@/lib/calculator-result-export";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import type { DtiLoanResult } from "@/lib/dti-calculations";
import { dtiSectorLabels } from "@/lib/dti-calculations";
import { formatNumber } from "@/lib/loan-calculations";

function moneyLine(label: string, amount: number): string {
  return `${label}: ${formatNumber(Math.round(amount))}원 (${formatAmountKoreanWon(amount)})`;
}

function formatContribution(annualDtiWon: number, annualIncomeWon: number): string {
  if (annualIncomeWon <= 0) return "—";
  const pct = (annualDtiWon / annualIncomeWon) * 100;
  return pct % 1 === 0 ? `${pct}%` : `${pct.toFixed(1).replace(/\.0$/, "")}%`;
}

export interface DtiResultTextSnapshot {
  dtiPercent: number | null;
  capPercent: number;
  withinCap: boolean;
  sector: "bank" | "non-bank";
  annualIncomeWon: number;
  loanResults: DtiLoanResult[];
  mortgageAnnual: number;
  otherInterestAnnual: number;
  annualDtiServiceWon: number;
  newMonthly: number;
  existingMonthly: number;
  totalMonthly: number;
}

export function formatDtiResultText(args: { snapshot: DtiResultTextSnapshot }): string {
  const { snapshot } = args;
  const lines = [...buildExportTextHeader("DTI 계산기")];

  lines.push(
    `[총부채상환비율(DTI)] ${snapshot.dtiPercent != null ? `${snapshot.dtiPercent.toFixed(2)}%` : "—"}`,
  );
  lines.push(`- 심사 구분: ${dtiSectorLabels[snapshot.sector]} (참고 한도 ${snapshot.capPercent}%)`);
  lines.push(`- 한도 대비: ${snapshot.withinCap ? "이내" : "초과"}`);
  lines.push("");

  if (snapshot.loanResults.length > 0) {
    lines.push("[대출별 DTI 반영]");
    for (const loan of snapshot.loanResults) {
      lines.push(
        `- ${loan.label} (${loan.isNew ? "신규" : "기존"} · ${loan.category === "mortgage" ? "주담대 원리금" : "기타 이자"})`,
      );
      lines.push(`  · DTI 반영(연): ${formatNumber(Math.round(loan.annualDti))}원`);
      lines.push(`  · DTI 기여: ${formatContribution(loan.annualDti, snapshot.annualIncomeWon)}`);
    }
    lines.push("");
  }

  lines.push("[합계]");
  lines.push(moneyLine("연 소득", snapshot.annualIncomeWon));
  lines.push(moneyLine("주담대 연간 원리금 합계", Math.round(snapshot.mortgageAnnual)));
  lines.push(moneyLine("기타 대출 연간 이자 합계", Math.round(snapshot.otherInterestAnnual)));
  lines.push(moneyLine("DTI 합산(연)", Math.round(snapshot.annualDtiServiceWon)));
  lines.push(moneyLine("신규 DTI 반영(월 환산)", Math.round(snapshot.newMonthly)));
  lines.push(moneyLine("기존 DTI 반영(월 환산)", Math.round(snapshot.existingMonthly)));
  lines.push(moneyLine("월 합계(환산)", Math.round(snapshot.totalMonthly)));

  lines.push(...buildExportTextFooter());
  return lines.join("\n");
}
