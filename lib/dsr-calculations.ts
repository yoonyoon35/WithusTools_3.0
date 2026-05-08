import {
  calculateEqualPrincipal,
  runCalculation,
  type RepaymentType,
} from "@/lib/loan-calculations";

/** 원금균등 시 DSR 연간 상환액 산출 방식(다른 기관·계산기와 비교용) */
export type EqualPrincipalDsrBasis = "first-month" | "year1-sum" | "lifetime-avg";

export const equalPrincipalDsrBasisLabels: Record<EqualPrincipalDsrBasis, string> = {
  "first-month": "첫 회차 월 상환 × 12 (보수적)",
  "year1-sum": "1년차 실제 상환 합산 (1~12회)",
  "lifetime-avg": "전체 기간 월 평균 × 12",
};

export const equalPrincipalDsrBasisHints: Record<EqualPrincipalDsrBasis, string> = {
  "first-month": "초기 부담·현금흐름·보수적 한도 감각에 가깝습니다.",
  "year1-sum":
    "첫 12개월 납입 합을 연 상환으로 봅니다. 상환 기간이 12개월 미만이면 남은 회차만 합산되며, 연소득 대비 비율은 그만큼 참고에 그칠 수 있습니다.",
  "lifetime-avg": "총 상환÷개월로 평균 낸 뒤 연환산합니다. 일부 안내용 계산기와 유사할 수 있습니다.",
};

/** 만기일시 DSR 산정 기준(기관·계산기 비교용) */
export type BulletDsrBasis = "interest-only" | "equal-payment";

export const bulletDsrBasisLabels: Record<BulletDsrBasis, string> = {
  "interest-only": "기간 중 이자만 (실제 납부 이자)",
  "equal-payment": "원리금균등 환산액 (동일 금리·기간 가정)",
};

export const bulletDsrBasisHints: Record<BulletDsrBasis, string> = {
  "interest-only": "만기 전까지 실제로 납부하는 이자만 연간 상환액에 반영합니다(만기 원금 제외).",
  "equal-payment":
    "만기일시를 원리금균등으로 환산해 연간 상환액을 계산합니다. 일부 기관·계산기의 보수적 산정과 유사할 수 있습니다.",
};

/** 신규 대출 스트레스 금리 반영: 가이드의 변동·혼합·주기·순수고정 가중 */
export type StressRateKind = "variable" | "hybrid" | "periodic" | "fixed";

const STRESS_WEIGHT: Record<StressRateKind, number> = {
  variable: 1,
  hybrid: 0.8,
  periodic: 0.4,
  fixed: 0,
};

export const stressRateKindLabels: Record<StressRateKind, string> = {
  variable: "변동금리 (가산 100%)",
  hybrid: "혼합형 (가산 80%)",
  periodic: "주기형 고정 (가산 40%)",
  fixed: "순수 고정금리 (가산 0%)",
};

/** 가이드·정책 참고용 명목 스트레스 금리 프리셋(%p) */
export const stressDsrPresets = [
  {
    id: "policy1015_metro_regulated",
    label: "10·15 대책 · 수도권·규제지역 주담대(명목 하한 3.00%p)",
    nominalPercent: 3.0,
  },
  { id: "metro_mortgage", label: "수도권 주담대 · 3단계 명목(1.50%p, 하한 별도)", nominalPercent: 1.5 },
  { id: "non_metro_mortgage", label: "비수도권 주담대 · 유예(0.75%p, 참고)", nominalPercent: 0.75 },
  { id: "credit_over_100m", label: "신용(잔액 1억 초과, 1.50%p)", nominalPercent: 1.5 },
  { id: "phase2_metro", label: "2단계 수도권 주담대(1.20%p, 참고)", nominalPercent: 1.2 },
  { id: "custom", label: "직접 입력", nominalPercent: null },
] as const;

export type StressDsrPresetId = (typeof stressDsrPresets)[number]["id"];

export function effectiveStressAddPercent(
  nominalStressPercent: number,
  rateKind: StressRateKind,
): number {
  if (!Number.isFinite(nominalStressPercent) || nominalStressPercent < 0) return 0;
  return nominalStressPercent * STRESS_WEIGHT[rateKind];
}

/** 신규 대출 연간 원리금(원금균등은 basis에 따라). 그 외 상환 방식은 월상환×12. */
export function annualNewLoanDebtService(
  principalWon: number,
  annualRatePercent: number,
  termMonths: number,
  repaymentType: RepaymentType,
  equalPrincipalBasis: EqualPrincipalDsrBasis,
  bulletBasis: BulletDsrBasis,
): number {
  if (principalWon <= 0 || termMonths <= 0) return 0;
  const months = Math.min(600, Math.max(1, Math.round(termMonths)));

  if (repaymentType !== "equal-principal" && repaymentType !== "bullet") {
    const { monthlyPayment } = runCalculation(repaymentType, principalWon, annualRatePercent, months, 0);
    return monthlyPayment * 12;
  }

  if (repaymentType === "bullet") {
    if (bulletBasis === "equal-payment") {
      const { monthlyPayment } = runCalculation("equal-payment", principalWon, annualRatePercent, months, 0);
      return monthlyPayment * 12;
    }
    const monthlyRate = annualRatePercent / 100 / 12;
    return principalWon * monthlyRate * 12;
  }

  if (equalPrincipalBasis === "first-month") {
    const { monthlyPayment } = runCalculation("equal-principal", principalWon, annualRatePercent, months, 0);
    return monthlyPayment * 12;
  }

  if (equalPrincipalBasis === "year1-sum") {
    const { schedule } = calculateEqualPrincipal(principalWon, annualRatePercent, months, 0);
    const count = Math.min(12, schedule.length);
    let sum = 0;
    for (let i = 0; i < count; i++) sum += schedule[i]!.payment;
    return sum;
  }

  const monthlyRate = annualRatePercent / 100 / 12;
  const totalInterest = principalWon * monthlyRate * (months + 1) / 2;
  const totalPaid = principalWon + totalInterest;
  return (totalPaid / months) * 12;
}

/** 표시용 월환산액 = 연간÷12 (원금균등·기준별 의미 상이) */
export function impliedMonthlyFromAnnual(annualWon: number): number {
  return annualWon / 12;
}

/** 신규 대출의 DSR 산정용 월 상환액(참고). 원금균등은 basis 적용, 그 외는 상환 방식대로. */
export function monthlyPaymentForDsr(
  principalWon: number,
  annualRatePercent: number,
  termMonths: number,
  repaymentType: RepaymentType,
  equalPrincipalBasis: EqualPrincipalDsrBasis = "first-month",
  bulletBasis: BulletDsrBasis = "interest-only",
): number {
  return impliedMonthlyFromAnnual(
    annualNewLoanDebtService(
      principalWon,
      annualRatePercent,
      termMonths,
      repaymentType,
      equalPrincipalBasis,
      bulletBasis,
    ),
  );
}
export interface DsrStressOptions {
  /** 명목 스트레스 가산금리(%p). 예: 1.5 */
  nominalStressPercent: number;
  newLoanRateKind: StressRateKind;
}

export function computeDsrSnapshot(args: {
  annualIncomeManwon: number;
  existingMonthlyWon: number;
  newPrincipalWon: number;
  newAnnualRatePercent: number;
  newTermMonths: number;
  newRepaymentType: RepaymentType;
  equalPrincipalDsrBasis?: EqualPrincipalDsrBasis;
  bulletDsrBasis?: BulletDsrBasis;
  stress?: DsrStressOptions | null;
}) {
  const basis = args.equalPrincipalDsrBasis ?? "first-month";
  const bulletBasis = args.bulletDsrBasis ?? "interest-only";
  const annualIncomeWon = args.annualIncomeManwon * 10_000;
  const stressAdd =
    args.stress != null
      ? effectiveStressAddPercent(args.stress.nominalStressPercent, args.stress.newLoanRateKind)
      : 0;
  const newLoanRateForDsr = args.newAnnualRatePercent + stressAdd;
  const annualNewContract = annualNewLoanDebtService(
    args.newPrincipalWon,
    args.newAnnualRatePercent,
    args.newTermMonths,
    args.newRepaymentType,
    basis,
    bulletBasis,
  );
  const annualNewDsr = annualNewLoanDebtService(
    args.newPrincipalWon,
    newLoanRateForDsr,
    args.newTermMonths,
    args.newRepaymentType,
    basis,
    bulletBasis,
  );
  const newMonthlyContract = impliedMonthlyFromAnnual(annualNewContract);
  const newMonthly = impliedMonthlyFromAnnual(annualNewDsr);
  const totalMonthly = args.existingMonthlyWon + newMonthly;
  const totalMonthlyContract = args.existingMonthlyWon + newMonthlyContract;
  const annualDebtServiceWon = args.existingMonthlyWon * 12 + annualNewDsr;
  const annualDebtServiceContractWon = args.existingMonthlyWon * 12 + annualNewContract;
  const dsrPercent =
    annualIncomeWon > 0 ? (annualDebtServiceWon / annualIncomeWon) * 100 : null;
  return {
    annualIncomeWon,
    newMonthly,
    newMonthlyContract,
    totalMonthly,
    totalMonthlyContract,
    annualDebtServiceWon,
    annualDebtServiceContractWon,
    dsrPercent,
    contractRatePercent: args.newAnnualRatePercent,
    newLoanRateForDsrPercent: newLoanRateForDsr,
    stressAddPercent: stressAdd,
    isStressDsr: Boolean(args.stress && stressAdd > 0),
    equalPrincipalDsrBasis: basis,
    bulletDsrBasis: bulletBasis,
  };
}
