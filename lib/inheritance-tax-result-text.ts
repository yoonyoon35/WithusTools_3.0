import {
  buildExportTextFooter,
  buildExportTextHeader,
} from "@/lib/calculator-result-export";
import type { InheritanceTaxResult } from "@/lib/inheritance-tax-calculations";
import { toPercent } from "@/lib/inheritance-tax-calculations";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber } from "@/lib/loan-calculations";

function moneyLine(label: string, amount: number): string {
  return `${label}: ${formatNumber(amount)}원 (${formatAmountKoreanWon(amount)})`;
}

export function formatInheritanceTaxResultText(result: InheritanceTaxResult): string {
  const lines = [...buildExportTextHeader("상속세 계산기")];

  lines.push("[과세가액 산출]");
  lines.push(moneyLine("총상속재산가액", result.totalInheritedProperty));
  if (result.nonTaxableExclusion > 0) {
    lines.push(moneyLine("비과세·불산입", result.nonTaxableExclusion));
  }
  if (result.debtsChargesFuneral > 0) {
    lines.push(moneyLine("공과금·채무·장례비", result.debtsChargesFuneral));
  }
  if (result.priorGiftsTotal > 0) {
    lines.push(moneyLine("사전증여 합산", result.priorGiftsTotal));
  }
  lines.push(moneyLine("상속세 과세가액", result.taxableEstateValue));

  if (result.spouseLegalShareRatio > 0) {
    lines.push(
      `- 배우자 법정상속분: ${toPercent(result.spouseLegalShareRatio)} (${formatNumber(result.spouseLegalShareAmount)}원)`,
    );
  }
  lines.push("");

  lines.push("[상속공제]");
  lines.push(
    moneyLine(
      result.deductions.lumpSumApplied ? "일괄공제" : "기초+인적공제",
      result.deductions.lumpOrPersonalAmount,
    ),
  );
  if (result.deductions.spouse > 0) {
    lines.push(moneyLine("배우자 상속공제", result.deductions.spouse));
  }
  if (result.deductions.financial > 0) {
    lines.push(moneyLine("금융재산 상속공제", result.deductions.financial));
  }
  if (result.deductions.coResidenceHousing > 0) {
    lines.push(moneyLine("동거주택 상속공제", result.deductions.coResidenceHousing));
  }
  if (result.deductions.disaster > 0) {
    lines.push(moneyLine("재해손실공제", result.deductions.disaster));
  }
  if (result.deductions.otherBusiness > 0) {
    lines.push(moneyLine("가업·영농 등", result.deductions.otherBusiness));
  }
  lines.push(moneyLine("공제 합계(한도 반영)", result.deductions.totalApplied));
  lines.push("");

  lines.push("[과세표준 산출]");
  lines.push(moneyLine("공제 후 금액", result.taxBaseBeforeAppraisal));
  lines.push(
    `- 감정평가 수수료: ${result.appraisalFee > 0 ? "−" : ""}${formatNumber(result.appraisalFee)}원 (제25조①2호, 상속공제와 별도)`,
  );
  lines.push(moneyLine("과세표준", result.taxBase));
  lines.push("");

  if (result.isBelowMinimumTaxable) {
    lines.push("[과세표준]");
    lines.push("- 과세표준 50만 원 미만: 상속세 없음 (제25조②)");
  } else {
    lines.push(
      `- 적용 세율: ${toPercent(result.appliedBracket.rate)} (누진공제 ${formatNumber(result.appliedBracket.progressiveDeduction)}원)`,
    );
    lines.push(moneyLine("산출세액", result.outputTax));
    if (result.generationSkipSurcharge > 0) {
      lines.push(
        moneyLine(`세대생략 할증(${toPercent(result.generationSkipRate)})`, result.generationSkipSurcharge),
      );
    }
    if (result.giftTaxCredit > 0) {
      lines.push(`- 증여세액공제: −${formatNumber(result.giftTaxCredit)}원`);
    }
    if (result.filingTaxCredit > 0) {
      lines.push(`- 신고세액공제(3%): −${formatNumber(result.filingTaxCredit)}원`);
    }
    lines.push(moneyLine("자진납부 상속세(참고)", result.payableTax));
    if (result.installmentEligible) {
      lines.push(`- 분납 가능(1천만 초과분): 약 ${formatNumber(result.installmentDeferrableAmount)}원`);
    }
  }

  if (result.warnings.length > 0) {
    lines.push("");
    lines.push("[참고]");
    for (const w of result.warnings) {
      lines.push(`- ${w}`);
    }
  }

  lines.push("");
  lines.push(result.filingDeadlineNote);

  lines.push(...buildExportTextFooter());
  return lines.join("\n");
}
