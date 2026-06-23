export type TermUnit = "year" | "month";
export type PrepaymentInputMode = "period" | "date";
export type RemainingPeriodBasis = "exemption" | "maturity";

/** 검산 시 (잔여기간 ÷ 대출기간)을 먼저 계산하도록 괄호를 표기한 공식 문구 */
export const PREPAYMENT_FEE_FORMULA =
  "중도상환 수수료 = 중도상환 원금 × 수수료율 × (잔여기간 ÷ 대출기간)";

export interface PrepaymentFeeInput {
  prepaymentAmount: number;
  feeRatePercent: number;
  loanTermMonths: number;
  elapsedMonths: number;
  hasExemptionPeriod: boolean;
  exemptionMonths: number;
}

export interface PrepaymentFeeDateInput {
  prepaymentAmount: number;
  feeRatePercent: number;
  loanStartDate: Date;
  prepaymentDate: Date;
  loanMaturityDate: Date;
  hasExemptionPeriod: boolean;
  exemptionMonths: number;
}

export interface PrepaymentFeeResult {
  inputMode: PrepaymentInputMode;
  prepaymentAmount: number;
  feeRatePercent: number;
  loanTermMonths: number;
  elapsedMonths: number;
  hasExemptionPeriod: boolean;
  exemptionMonths: number;
  remainingMonths: number;
  remainingPeriodBasis: RemainingPeriodBasis;
  /** 수수료 계산식 분모(면제 기간 또는 전체 대출기간) */
  feePeriodMonths: number;
  /** 날짜 입력 모드일 때 일 단위 값 */
  loanTermDays?: number;
  feePeriodDays?: number;
  elapsedDays?: number;
  remainingDays?: number;
  loanStartDate?: string;
  prepaymentDate?: string;
  loanMaturityDate?: string;
  exemptionEndDate?: string;
  feeAmount: number;
  isExempt: boolean;
  exemptReason?: string;
}

export function toMonths(value: number, unit: TermUnit): number {
  if (!Number.isFinite(value) || value <= 0) return 0;
  return unit === "year" ? Math.round(value * 12) : Math.round(value);
}

export function formatMonthsLabel(months: number): string {
  if (months <= 0) return "0개월";
  if (months % 12 === 0) return `${months / 12}년(${months}개월)`;
  return `${months}개월`;
}

export function formatDaysLabel(days: number): string {
  if (days <= 0) return "0일";
  return `${days.toLocaleString("ko-KR")}일`;
}

export function getRemainingPeriodLabel(basis: RemainingPeriodBasis): string {
  return basis === "exemption" ? "잔여기간 (면제 종료일 − 중도상환일)" : "잔여기간 (만기일 − 중도상환일)";
}

export function getFeePeriodLabel(basis: RemainingPeriodBasis): string {
  return basis === "exemption" ? "수수료 계산 기간 (면제 기간)" : "수수료 계산 기간 (대출기간)";
}

function getFeePeriodMonths(hasExemptionPeriod: boolean, exemptionMonths: number, loanTermMonths: number): number {
  return hasExemptionPeriod ? exemptionMonths : loanTermMonths;
}

export interface FeeSpreadDisplay {
  heading: string;
  amount: number;
  unitSuffix: string;
  divisorLabel: string;
}

/** 수수료를 잔여기간으로 나눈 참고값. 기간 입력 → 월, 날짜 입력 → 일 */
export function getFeeSpreadDisplay(result: PrepaymentFeeResult): FeeSpreadDisplay | null {
  if (result.isExempt || result.feeAmount <= 0) return null;

  if (result.inputMode === "date") {
    const days = result.remainingDays ?? 0;
    if (days <= 0) return null;
    return {
      heading: "하루 환산 부담",
      amount: Math.round(result.feeAmount / days),
      unitSuffix: "원/일",
      divisorLabel: formatDaysLabel(days),
    };
  }

  const months = result.remainingMonths;
  if (months <= 0) return null;
  return {
    heading: "1개월 환산 부담",
    amount: Math.round(result.feeAmount / months),
    unitSuffix: "원/월",
    divisorLabel: formatMonthsLabel(months),
  };
}

export function parseDateInput(value: string): Date | null {
  if (!value) return null;
  const parsed = new Date(`${value}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function formatDateInputValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatDateLabel(value: string): string {
  const parsed = parseDateInput(value);
  if (!parsed) return value;
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsed);
}

export function diffDays(start: Date, end: Date): number {
  const startUtc = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const endUtc = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.round((endUtc - startUtc) / (1000 * 60 * 60 * 24));
}

export function addMonthsToDate(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

function roundFee(amount: number): number {
  return Math.round(amount);
}

/** 중도상환 수수료 = 중도상환 원금 × 수수료율 × (잔여기간 / 대출기간). 면제 기간이 있으면 분모는 면제 기간(개월) */
export function computePrepaymentFee(input: PrepaymentFeeInput): PrepaymentFeeResult {
  const { prepaymentAmount, feeRatePercent, loanTermMonths, elapsedMonths, hasExemptionPeriod, exemptionMonths } =
    input;

  let remainingMonths: number;
  let isExempt = false;
  let exemptReason: string | undefined;
  const remainingPeriodBasis: RemainingPeriodBasis = hasExemptionPeriod ? "exemption" : "maturity";
  const feePeriodMonths = getFeePeriodMonths(hasExemptionPeriod, exemptionMonths, loanTermMonths);

  if (hasExemptionPeriod) {
    remainingMonths = Math.max(0, exemptionMonths - elapsedMonths);
    isExempt = elapsedMonths >= exemptionMonths;
    exemptReason = isExempt ? "면제 기간이 경과하여 중도상환 수수료가 면제됩니다." : undefined;
  } else {
    remainingMonths = Math.max(0, loanTermMonths - elapsedMonths);
  }

  let feeAmount = 0;
  if (!isExempt && prepaymentAmount > 0 && feePeriodMonths > 0 && feeRatePercent > 0 && remainingMonths > 0) {
    feeAmount = prepaymentAmount * (feeRatePercent / 100) * (remainingMonths / feePeriodMonths);
  }

  return {
    inputMode: "period",
    prepaymentAmount,
    feeRatePercent,
    loanTermMonths,
    elapsedMonths,
    hasExemptionPeriod,
    exemptionMonths,
    remainingMonths,
    remainingPeriodBasis,
    feePeriodMonths,
    feeAmount: roundFee(feeAmount),
    isExempt,
    exemptReason,
  };
}

/** 날짜 기준: 면제 기간 있음 → 잔여기간 = 면제 종료일 − 중도상환일, 없음 → 만기일 − 중도상환일 */
export function computePrepaymentFeeByDate(input: PrepaymentFeeDateInput): PrepaymentFeeResult {
  const {
    prepaymentAmount,
    feeRatePercent,
    loanStartDate,
    prepaymentDate,
    loanMaturityDate,
    hasExemptionPeriod,
    exemptionMonths,
  } = input;

  const loanTermDays = diffDays(loanStartDate, loanMaturityDate);
  const elapsedDays = diffDays(loanStartDate, prepaymentDate);
  const remainingPeriodBasis: RemainingPeriodBasis = hasExemptionPeriod ? "exemption" : "maturity";

  let remainingDays: number;
  let isExempt = false;
  let exemptReason: string | undefined;
  let exemptionEndDate: Date | undefined;
  let feePeriodDays: number;

  if (hasExemptionPeriod) {
    exemptionEndDate = addMonthsToDate(loanStartDate, exemptionMonths);
    remainingDays = Math.max(0, diffDays(prepaymentDate, exemptionEndDate));
    feePeriodDays = Math.max(1, diffDays(loanStartDate, exemptionEndDate));
    isExempt = prepaymentDate.getTime() >= exemptionEndDate.getTime();
    exemptReason = isExempt ? "면제 기간이 경과하여 중도상환 수수료가 면제됩니다." : undefined;
  } else {
    remainingDays = Math.max(0, diffDays(prepaymentDate, loanMaturityDate));
    feePeriodDays = loanTermDays;
  }

  let feeAmount = 0;
  if (!isExempt && prepaymentAmount > 0 && feePeriodDays > 0 && feeRatePercent > 0 && remainingDays > 0) {
    feeAmount = prepaymentAmount * (feeRatePercent / 100) * (remainingDays / feePeriodDays);
  }

  const loanTermMonths = Math.max(1, Math.round(loanTermDays / 30));
  const elapsedMonths = Math.max(0, Math.round(elapsedDays / 30));
  const remainingMonths = Math.max(0, Math.round(remainingDays / 30));
  const feePeriodMonths = Math.max(1, Math.round(feePeriodDays / 30));

  return {
    inputMode: "date",
    prepaymentAmount,
    feeRatePercent,
    loanTermMonths,
    elapsedMonths,
    hasExemptionPeriod,
    exemptionMonths,
    remainingMonths,
    remainingPeriodBasis,
    feePeriodMonths,
    loanTermDays,
    feePeriodDays,
    elapsedDays,
    remainingDays,
    loanStartDate: formatDateInputValue(loanStartDate),
    prepaymentDate: formatDateInputValue(prepaymentDate),
    loanMaturityDate: formatDateInputValue(loanMaturityDate),
    exemptionEndDate: exemptionEndDate ? formatDateInputValue(exemptionEndDate) : undefined,
    feeAmount: roundFee(feeAmount),
    isExempt,
    exemptReason,
  };
}
