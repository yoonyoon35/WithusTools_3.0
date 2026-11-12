import {
  buildExportTextFooter,
  buildExportTextHeader,
} from "@/lib/calculator-result-export";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import {
  type EmergencyLoanDaysInputMode,
  type EmergencyLoanInterestResult,
} from "@/lib/emergency-loan-interest-calculations";
import { formatNumber } from "@/lib/loan-calculations";
import { formatDateLabel } from "@/lib/prepayment-fee-calculations";

function moneyLine(label: string, amount: number): string {
  return `${label}: ${formatNumber(amount)}원 (${formatAmountKoreanWon(amount)})`;
}

export function formatEmergencyLoanInterestResultText(args: {
  snapshot: EmergencyLoanInterestResult;
  daysInputMode: EmergencyLoanDaysInputMode;
  startDate?: string;
  asOfDate?: string;
}): string {
  const { snapshot, daysInputMode, startDate, asOfDate } = args;
  const lines = [...buildExportTextHeader("비상금대출 이자 계산기")];

  lines.push(`[일할 이자] ${formatNumber(snapshot.periodInterestWon)}원 (${formatAmountKoreanWon(snapshot.periodInterestWon)})`);
  lines.push("");

  lines.push("[입력]");
  lines.push(moneyLine("사용 금액", snapshot.usedAmountWon));
  lines.push(`- 연 금리: ${snapshot.annualRatePercent}%`);
  if (daysInputMode === "date" && startDate && asOfDate) {
    lines.push(`- 사용 시작일: ${formatDateLabel(startDate)}`);
    lines.push(`- 기준일: ${formatDateLabel(asOfDate)}`);
  }
  lines.push(`- 사용 일수: ${snapshot.days}일`);
  lines.push("");

  lines.push("[상세 결과]");
  lines.push(moneyLine("하루 이자(반올림)", snapshot.dailyInterestWon));
  lines.push(moneyLine("일할 이자 합계", snapshot.periodInterestWon));
  lines.push(moneyLine("한 달(÷12) 어림", snapshot.monthlyApproxWon));
  if (snapshot.days > 0 && snapshot.days < 30) {
    lines.push(moneyLine("÷12 어림 대비 절감(참고)", Math.max(0, snapshot.vsMonthlyApproxWon)));
  }
  lines.push("");
  lines.push("공식: 일 이자 = 사용금액 × 연 금리 ÷ 365 · 기간 이자 = 일 이자 × 일수");
  lines.push("날짜 입력 시 같은 날은 1일로 봅니다. 한도만 열고 쓰지 않으면 이자는 0원입니다.");

  lines.push(...buildExportTextFooter());
  return lines.join("\n");
}
