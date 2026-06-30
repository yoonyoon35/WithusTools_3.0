import {
  buildExportTextFooter,
  buildExportTextHeader,
} from "@/lib/calculator-result-export";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import type { DsrLoanResult } from "@/lib/dsr-calculations";
import { formatNumber } from "@/lib/loan-calculations";

function moneyLine(label: string, amount: number): string {
  return `${label}: ${formatNumber(amount)}원 (${formatAmountKoreanWon(amount)})`;
}

function formatContribution(annualDsrWon: number, annualIncomeWon: number): string {
  if (annualIncomeWon <= 0) return "—";
  const pct = (annualDsrWon / annualIncomeWon) * 100;
  return pct % 1 === 0 ? `${pct}%` : `${pct.toFixed(1).replace(/\.0$/, "")}%`;
}

export interface DsrResultTextSnapshot {
  dsrPercent: number | null;
  annualIncomeWon: number;
  loanResults: DsrLoanResult[];
  newMonthlyContract: number;
  newMonthly: number;
  totalMonthly: number;
  totalMonthlyContract: number;
  annualDebtServiceWon: number;
  contractRatePercent: number;
  newLoanRateForDsrPercent: number;
  stressAddPercent: number;
  isStressDsr: boolean;
}

export function formatDsrResultText(args: {
  snapshot: DsrResultTextSnapshot;
  dsrModeLabel: string;
  withinBankCap: boolean;
}): string {
  const { snapshot, dsrModeLabel, withinBankCap } = args;
  const lines = [...buildExportTextHeader("DSR 계산기")];

  lines.push(`[총부채원리금상환비율(DSR)] ${snapshot.dsrPercent != null ? `${snapshot.dsrPercent.toFixed(2)}%` : "—"}`);
  lines.push(`- 산정 방식: ${dsrModeLabel}`);
  lines.push(`- 은행권 40% 참고: ${withinBankCap ? "이내" : "초과"}`);
  lines.push("");

  if (snapshot.loanResults.length > 0) {
    lines.push("[대출별 상환]");
    for (const loan of snapshot.loanResults) {
      lines.push(`- ${loan.label} (${loan.isNew ? "신규" : "기존"})`);
      lines.push(`  · 월 상환(계약): ${formatNumber(Math.round(loan.monthlyContract))}원`);
      if (snapshot.isStressDsr) {
        lines.push(`  · 월 상환(DSR): ${formatNumber(Math.round(loan.monthlyDsr))}원`);
        lines.push(`  · 연 상환(계약): ${formatNumber(Math.round(loan.annualContract))}원`);
      }
      lines.push(`  · 연 상환(DSR): ${formatNumber(Math.round(loan.annualDsr))}원`);
      lines.push(`  · DSR 기여: ${formatContribution(loan.annualDsr, snapshot.annualIncomeWon)}`);
    }
    lines.push("");
  }

  lines.push("[합계]");
  lines.push(moneyLine("연 소득", snapshot.annualIncomeWon));
  if (snapshot.contractRatePercent > 0) {
    lines.push(`- 계약 금리(신규 1건): ${snapshot.contractRatePercent}%`);
  }
  if (snapshot.isStressDsr && snapshot.newLoanRateForDsrPercent > 0) {
    lines.push(
      `- DSR 산정 금리(신규 1건): ${snapshot.newLoanRateForDsrPercent}%${snapshot.stressAddPercent > 0 ? ` (가산 +${snapshot.stressAddPercent}%p)` : ""}`,
    );
  }
  lines.push(moneyLine("신규 대출 월 상환 합계", Math.round(snapshot.newMonthlyContract)));
  if (snapshot.isStressDsr) {
    lines.push(moneyLine("신규 월 상환 (DSR 산정용)", Math.round(snapshot.newMonthly)));
  }
  lines.push(
    moneyLine(snapshot.isStressDsr ? "월 상환 합계 (DSR 산정용)" : "월 상환 합계", Math.round(snapshot.totalMonthly)),
  );
  if (snapshot.isStressDsr) {
    lines.push(moneyLine("월 상환 합계 (실제 납입 추정)", Math.round(snapshot.totalMonthlyContract)));
  }
  lines.push(
    moneyLine(
      snapshot.isStressDsr ? "연간 상환 합계 (DSR 산정용)" : "연간 원리금 상환 합계",
      Math.round(snapshot.annualDebtServiceWon),
    ),
  );

  lines.push(...buildExportTextFooter());
  return lines.join("\n");
}
