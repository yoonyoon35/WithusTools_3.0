import { buildExportTextFooter, buildExportTextHeader } from "@/lib/calculator-result-export";
import type {
  ComprehensiveIncomeTaxResult,
  InterimEstimateResult,
  InterimNoticeResult,
} from "@/lib/comprehensive-income-tax-calculations";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber } from "@/lib/loan-calculations";

function moneyLine(label: string, amount: number): string {
  return `${label}: ${formatNumber(amount)}원 (${formatAmountKoreanWon(amount)})`;
}

export function formatComprehensiveIncomeTaxResultText(result: ComprehensiveIncomeTaxResult): string {
  const lines = [...buildExportTextHeader("종합소득세 계산기")];
  if (!result.useDirectTaxBase) {
    lines.push(moneyLine("임대 외 사업소득", result.business.income));
    if (result.losses.rentalIncome !== 0) lines.push(moneyLine("부동산임대소득", result.losses.rentalIncome));
    if (result.losses.rentalCarryUsed > 0) lines.push(moneyLine("임대 이월결손금 공제", result.losses.rentalCarryUsed));
    if (result.losses.otherCarryUsed > 0) lines.push(moneyLine("이월결손금 공제", result.losses.otherCarryUsed));
    if (result.otherIncomeSeparated) {
      lines.push(`기타소득 ${formatNumber(result.otherIncome)}원은 300만 원 이하라 종합소득에 넣지 않았습니다.`);
    } else if (result.otherIncome > 0) {
      lines.push(moneyLine("기타소득금액", result.otherIncome));
    }
    lines.push(moneyLine("종합소득금액", result.comprehensiveIncome));
    if (result.financial.excluded > 0) lines.push(moneyLine("합산제외 금융소득", result.financial.excluded));
    lines.push(moneyLine("인적공제", result.personal.total));
    lines.push(moneyLine("소득공제", result.incomeDeductions));
  }
  lines.push(moneyLine("과세표준", result.calculated.taxBase));
  if (result.financial.compared) {
    const financial = result.financial;
    lines.push(
      `비교 1호: ${formatNumber(financial.method1Progressive)} + ${formatNumber(financial.method1Flat)} = ${formatNumber(financial.method1)}원`,
    );
    lines.push(
      `비교 2호: ${formatNumber(financial.method2Financial)} + ${formatNumber(financial.method2Other)} = ${formatNumber(financial.method2)}원`,
    );
    lines.push(moneyLine("산출세액", result.calculated.tax));
    lines.push(
      financial.method1 === financial.method2
        ? "소득세법 제62조 비교에서 1호와 2호가 같습니다. 금융소득 전체의 14%는 기납부세액에 넣습니다."
        : financial.chosen === "method2"
          ? "소득세법 제62조 비교에서 2호가 커서 2호를 산출세액으로 씁니다. 금융소득 전체의 14%는 기납부세액에 넣습니다."
          : "소득세법 제62조 비교에서 1호가 커서 1호를 산출세액으로 씁니다. 금융소득 전체의 14%는 기납부세액에 넣습니다.",
    );
  } else {
    lines.push(
      `산출세액: ${formatNumber(result.calculated.taxBase)} × ${result.calculated.rate * 100}% − ${formatNumber(result.calculated.progressiveDeduction)} = ${formatNumber(result.calculated.tax)}원`,
    );
    if (result.financial.excluded > 0) {
      lines.push("이자·배당 합계가 2천만 원 이하라 과세표준에 넣지 않았습니다. 그 원천징수세액은 기납부세액에 넣지 않습니다.");
    }
  }
  if (result.childTaxCredit > 0) lines.push(moneyLine("자녀세액공제", result.childTaxCredit));
  if (result.standardTaxCredit > 0) lines.push(moneyLine("표준세액공제", result.standardTaxCredit));
  if (result.pensionAccountCredit > 0) {
    lines.push(
      `연금계좌세액공제: ${formatNumber(result.pensionContributionUsed)} × ${result.pensionCreditRate * 100}% = ${formatNumber(result.pensionAccountCredit)}원`,
    );
  }
  if (result.enteredTaxCredits > 0) lines.push(moneyLine("그 밖 세액공제·감면", result.enteredTaxCredits));
  lines.push(moneyLine("세액공제·감면", result.taxCredits));
  lines.push(moneyLine("가산세", result.penalties.total));
  lines.push(moneyLine("기납부세액", result.prepaidTotal));
  lines.push(moneyLine(result.nationalNet >= 0 ? "납부할 세액" : "환급할 세액", Math.abs(result.nationalNet)));
  if (result.privatePensionSeparateTax > 0) {
    lines.push(moneyLine("사적연금 분리과세 15%", result.privatePensionSeparateTax));
  }
  lines.push(...buildExportTextFooter());
  return lines.join("\n");
}

export function formatInterimNoticeResultText(result: InterimNoticeResult): string {
  const lines = [...buildExportTextHeader("종합소득세 중간예납 계산기")];
  lines.push(moneyLine("중간예납기준액", result.base));
  lines.push(moneyLine("중간예납세액", result.tax));
  if (result.belowMinimum) lines.push("50만 원 미만이라 소액부징수입니다.");
  if (result.installment) {
    lines.push(moneyLine("분납 가능액", result.installment.deferrable));
    lines.push(moneyLine("11월 30일까지", result.installment.dueByNovember30));
  }
  lines.push(...buildExportTextFooter());
  return lines.join("\n");
}

export function formatInterimEstimateResultText(result: InterimEstimateResult): string {
  const lines = [...buildExportTextHeader("종합소득세 중간예납추계액 계산기")];
  lines.push(moneyLine("종합소득 과세표준", result.taxBase));
  lines.push(moneyLine("종합소득 산출세액", result.calculatedTax));
  lines.push(moneyLine("중간예납추계액", result.estimate));
  if (result.belowMinimum) lines.push("50만 원 미만이면 납부 대상이 아니고, 신고서를 내야 고지세액을 취소할 수 있습니다.");
  if (result.underThirtyPercentOfBase) lines.push("추계액이 중간예납기준액의 30%에 미달합니다.");
  lines.push(...buildExportTextFooter());
  return lines.join("\n");
}
