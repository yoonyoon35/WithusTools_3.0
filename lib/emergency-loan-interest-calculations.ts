/** 비상금대출·마이너스통장 일할 이자 (연이율 ÷ 365 × 일수) — 참고용 단순 모델 */

import { diffDays, parseDateInput } from "@/lib/prepayment-fee-calculations";

export type EmergencyLoanDaysInputMode = "date" | "days";

/**
 * 사용 시작일~기준일 일수.
 * 같은 날이면 1일(당일 인출·상환도 1일치가 잡힐 수 있음).
 * 기준일이 더 이르면 null.
 */
export function computeEmergencyLoanDaysFromDates(
  startDateValue: string,
  asOfDateValue: string,
): number | null {
  const start = parseDateInput(startDateValue);
  const asOf = parseDateInput(asOfDateValue);
  if (!start || !asOf) return null;
  const delta = diffDays(start, asOf);
  if (delta < 0) return null;
  return Math.max(1, delta);
}

export type EmergencyLoanInterestInput = {
  /** 사용 금액(원). 미사용이면 0 */
  usedAmountWon: number;
  /** 연 금리(%) */
  annualRatePercent: number;
  /** 사용 일수 */
  days: number;
};

export type EmergencyLoanInterestResult = {
  usedAmountWon: number;
  annualRatePercent: number;
  days: number;
  /** 하루 이자(원, 반올림 전 소수) */
  dailyInterestRaw: number;
  /** 하루 이자(원, 반올림) */
  dailyInterestWon: number;
  /** 일할 이자 합계(원, 반올림) — 일 이자×일수 후 반올림이 아니라 총액 기준 반올림 */
  periodInterestWon: number;
  /** 한 달(÷12) 어림 이자(원, 반올림) */
  monthlyApproxWon: number;
  /** ÷12 어림 대비 일할 절감액(원). 음수면 일할이 더 큼(거의 없음) */
  vsMonthlyApproxWon: number;
};

export function computeEmergencyLoanInterest(input: EmergencyLoanInterestInput): EmergencyLoanInterestResult | null {
  const usedAmountWon = Math.max(0, Math.floor(input.usedAmountWon));
  const annualRatePercent = input.annualRatePercent;
  const days = Math.max(0, Math.floor(input.days));

  if (!Number.isFinite(annualRatePercent) || annualRatePercent < 0 || annualRatePercent > 100) return null;
  if (!Number.isFinite(days) || days < 0 || days > 3660) return null;
  if (!Number.isFinite(usedAmountWon)) return null;

  if (usedAmountWon === 0 || days === 0 || annualRatePercent === 0) {
    return {
      usedAmountWon,
      annualRatePercent,
      days,
      dailyInterestRaw: 0,
      dailyInterestWon: 0,
      periodInterestWon: 0,
      monthlyApproxWon: 0,
      vsMonthlyApproxWon: 0,
    };
  }

  const rate = annualRatePercent / 100;
  const dailyInterestRaw = (usedAmountWon * rate) / 365;
  const periodInterestRaw = dailyInterestRaw * days;
  const periodInterestWon = Math.round(periodInterestRaw);
  const dailyInterestWon = Math.round(dailyInterestRaw);
  const monthlyApproxWon = Math.round((usedAmountWon * rate) / 12);
  const vsMonthlyApproxWon = monthlyApproxWon - periodInterestWon;

  return {
    usedAmountWon,
    annualRatePercent,
    days,
    dailyInterestRaw,
    dailyInterestWon,
    periodInterestWon,
    monthlyApproxWon,
    vsMonthlyApproxWon,
  };
}
