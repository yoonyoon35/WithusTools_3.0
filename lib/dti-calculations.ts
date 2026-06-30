import {
  calculateEqualPayment,
  type RepaymentType,
} from "@/lib/loan-calculations";
import {
  annualLoanDebtService,
  impliedMonthlyFromAnnual,
  resolveDsrLoanTerms,
  type DsrLoanInput,
  type EqualPrincipalDsrBasis,
} from "@/lib/dsr-calculations";

/** 주담대 만기일시 DTI — 대출기간 최대 10년 원금 환산(금융당국 별표9). */
export const BULLET_DTI_REGULATORY_AMORTIZATION_YEARS = 10;

export type BulletDtiBasis = "regulatory-10y-principal" | "equal-payment" | "interest-only";

export const bulletDtiBasisOrder: readonly BulletDtiBasis[] = [
  "regulatory-10y-principal",
  "equal-payment",
  "interest-only",
] as const;

export const bulletDtiBasisLabels: Record<BulletDtiBasis, string> = {
  "regulatory-10y-principal": "10년 원금균등+전액 이자 (주담대 DTI 규정)",
  "equal-payment": "원리금균등 환산",
  "interest-only": "기간 중 이자만 (실제 월 납입)",
};

export const bulletDtiBasisHints: Record<BulletDtiBasis, string> = {
  "regulatory-10y-principal":
    "잔액을 min(잔여기간, 10년)으로 나눈 연간 원금 + 잔액 전액 기준 이자입니다. 잔여 10년 이상 만기일시 주담대 DTI에 적용되는 금융당국 기준입니다.",
  "equal-payment":
    "만기일시를 입력한 총·잔여 기간으로 원리금균등 환산합니다. 기관·계산기 비교용입니다.",
  "interest-only":
    "만기 전 실제 납부 이자만 반영합니다. DTI 심사용이 아니라 통장 출금액 확인에 가깝습니다.",
};

function bulletDtiAmortizationYears(remainingTermMonths: number): number {
  const years = remainingTermMonths / 12;
  if (years >= BULLET_DTI_REGULATORY_AMORTIZATION_YEARS) return BULLET_DTI_REGULATORY_AMORTIZATION_YEARS;
  return Math.max(years, 1 / 12);
}

/** 주담대 DTI 연간 원리금(만기일시는 10년 규정 등 DTI 전용 기준). */
export function annualMortgageDtiService(
  balanceWon: number,
  annualRatePercent: number,
  remainingTermMonths: number,
  repaymentType: RepaymentType,
  equalPrincipalBasis: EqualPrincipalDsrBasis,
  bulletBasis: BulletDtiBasis,
  options?: { graceMonths?: number; graduatedAnnualIncreasePercent?: number },
): number {
  const graceMonths = Math.max(0, Math.min(600, Math.round(options?.graceMonths ?? 0)));
  const months = Math.min(600, Math.max(1, Math.round(remainingTermMonths)));
  if (balanceWon <= 0) return 0;

  if (repaymentType === "bullet") {
    if (bulletBasis === "regulatory-10y-principal") {
      const amortYears = bulletDtiAmortizationYears(months);
      const annualPrincipal = balanceWon / amortYears;
      const annualInterest = balanceWon * (annualRatePercent / 100);
      return annualPrincipal + annualInterest;
    }
    if (bulletBasis === "equal-payment") {
      const { monthlyPayment } = calculateEqualPayment(balanceWon, annualRatePercent, months, graceMonths);
      return monthlyPayment * 12;
    }
    const monthlyRate = annualRatePercent / 100 / 12;
    return balanceWon * monthlyRate * 12;
  }

  return annualLoanDebtService(
    balanceWon,
    annualRatePercent,
    months,
    repaymentType,
    equalPrincipalBasis,
    "regulatory-5y-principal",
    options,
  );
}

export function monthlyPaymentForDtiMortgage(
  balanceWon: number,
  annualRatePercent: number,
  remainingTermMonths: number,
  repaymentType: RepaymentType,
  equalPrincipalBasis: EqualPrincipalDsrBasis = "first-month",
  bulletBasis: BulletDtiBasis = "regulatory-10y-principal",
  options?: { graceMonths?: number },
): number {
  return impliedMonthlyFromAnnual(
    annualMortgageDtiService(
      balanceWon,
      annualRatePercent,
      remainingTermMonths,
      repaymentType,
      equalPrincipalBasis,
      bulletBasis,
      options,
    ),
  );
}

/** 은행권 DTI 한도(%). 2026년 6월 기준 가이드·금융당국 안내와 동일하게 60% 적용. */
export const DTI_BANK_CAP_PERCENT = 60;

/** 제2금융권(저축은행·카드·캐피탈 등) DTI 한도(%). 상품별 상이하나 참고값 50%. */
export const DTI_NON_BANK_CAP_PERCENT = 50;

export type DtiSector = "bank" | "non-bank";

export type DtiLoanCategory = "mortgage" | "other";

export const dtiSectorLabels: Record<DtiSector, string> = {
  bank: "은행권",
  "non-bank": "제2금융권",
};

export const dtiLoanCategoryLabels: Record<DtiLoanCategory, string> = {
  mortgage: "주택담보(원리금)",
  other: "기타 대출(이자만)",
};

export function dtiCapPercentForSector(sector: DtiSector): number {
  return sector === "bank" ? DTI_BANK_CAP_PERCENT : DTI_NON_BANK_CAP_PERCENT;
}

export interface DtiLoanInput extends DsrLoanInput {
  category: DtiLoanCategory;
}

export interface DtiLoanResult {
  label: string;
  isNew: boolean;
  category: DtiLoanCategory;
  inputMode: DsrLoanInput["inputMode"];
  /** DTI 합산에 반영되는 연간 금액 */
  annualDti: number;
  /** 비교용: 계약 기준 연간 원리금(주담대) 또는 연 이자(기타) */
  annualReference: number;
  monthlyDti: number;
  contractRatePercent: number | null;
}

function annualInterestOnBalance(balanceWon: number, annualRatePercent: number): number {
  if (balanceWon <= 0 || annualRatePercent <= 0) return 0;
  return balanceWon * (annualRatePercent / 100);
}

/** DTI 반영 연간 금액 — 주담대는 원리금, 기타는 이자만 */
export function annualDtiContribution(
  loan: DtiLoanInput,
  equalPrincipalBasis: EqualPrincipalDsrBasis,
  bulletBasis: BulletDtiBasis,
): number {
  if (loan.inputMode === "monthly") {
    const monthly = loan.monthlyWon ?? 0;
    if (monthly <= 0) return 0;
    return monthly * 12;
  }

  const terms = resolveDsrLoanTerms(loan);
  const rate = loan.annualRatePercent ?? 0;
  if (!terms) return 0;

  if (loan.category === "other") {
    return annualInterestOnBalance(terms.balanceWon, rate);
  }

  return annualMortgageDtiService(
    terms.balanceWon,
    rate,
    terms.remainingTermMonths,
    loan.repaymentType ?? "equal-payment",
    equalPrincipalBasis,
    bulletBasis,
    {
      graceMonths: terms.graceMonths,
      graduatedAnnualIncreasePercent: loan.graduatedAnnualIncreasePercent,
    },
  );
}

function computeLoanResult(
  loan: DtiLoanInput,
  equalPrincipalBasis: EqualPrincipalDsrBasis,
  bulletBasis: BulletDtiBasis,
): DtiLoanResult | null {
  const label =
    loan.label?.trim() ||
    (loan.category === "mortgage"
      ? loan.isNew
        ? "신규 주담대"
        : "기존 주담대"
      : loan.isNew
        ? "신규 기타 대출"
        : "기존 기타 대출");

  if (loan.inputMode === "monthly") {
    const monthly = loan.monthlyWon ?? 0;
    if (monthly <= 0) return null;
    const annual = monthly * 12;
    return {
      label,
      isNew: loan.isNew,
      category: loan.category,
      inputMode: loan.inputMode,
      annualDti: annual,
      annualReference: annual,
      monthlyDti: monthly,
      contractRatePercent: null,
    };
  }

  const terms = resolveDsrLoanTerms(loan);
  const contractRate = loan.annualRatePercent ?? 0;
  if (!terms) return null;

  const annualDti = annualDtiContribution(loan, equalPrincipalBasis, bulletBasis);
  if (annualDti <= 0) return null;

  let annualReference = annualDti;
  if (loan.category === "other") {
    annualReference = annualInterestOnBalance(terms.balanceWon, contractRate);
  } else {
    annualReference = annualMortgageDtiService(
      terms.balanceWon,
      contractRate,
      terms.remainingTermMonths,
      loan.repaymentType ?? "equal-payment",
      equalPrincipalBasis,
      bulletBasis,
      {
        graceMonths: terms.graceMonths,
        graduatedAnnualIncreasePercent: loan.graduatedAnnualIncreasePercent,
      },
    );
  }

  return {
    label,
    isNew: loan.isNew,
    category: loan.category,
    inputMode: loan.inputMode,
    annualDti,
    annualReference,
    monthlyDti: annualDti / 12,
    contractRatePercent: contractRate,
  };
}

export function computeDtiSnapshotFromLoans(args: {
  annualIncomeManwon: number;
  sector: DtiSector;
  loans: DtiLoanInput[];
  equalPrincipalBasis?: EqualPrincipalDsrBasis;
  bulletBasis?: BulletDtiBasis;
}) {
  const equalPrincipalBasis = args.equalPrincipalBasis ?? "first-month";
  const bulletBasis = args.bulletBasis ?? "regulatory-10y-principal";
  const capPercent = dtiCapPercentForSector(args.sector);
  const annualIncomeWon = args.annualIncomeManwon * 10_000;

  const loanResults = args.loans
    .map((loan) => computeLoanResult(loan, equalPrincipalBasis, bulletBasis))
    .filter((r): r is DtiLoanResult => r != null && r.annualDti > 0);

  const sum = (pick: (r: DtiLoanResult) => number) =>
    loanResults.reduce((acc, r) => acc + pick(r), 0);

  const mortgageAnnual = sum((r) => (r.category === "mortgage" ? r.annualDti : 0));
  const otherInterestAnnual = sum((r) => (r.category === "other" ? r.annualDti : 0));
  const annualDtiServiceWon = mortgageAnnual + otherInterestAnnual;

  const newAnnual = sum((r) => (r.isNew ? r.annualDti : 0));
  const existingAnnual = sum((r) => (r.isNew ? 0 : r.annualDti));
  const totalMonthly = annualDtiServiceWon / 12;
  const newMonthly = newAnnual / 12;
  const existingMonthly = existingAnnual / 12;

  const dtiPercent =
    annualIncomeWon > 0 ? (annualDtiServiceWon / annualIncomeWon) * 100 : null;
  const withinCap = dtiPercent != null ? dtiPercent <= capPercent + 1e-9 : true;

  return {
    sector: args.sector,
    capPercent,
    annualIncomeWon,
    loanResults,
    mortgageAnnual,
    otherInterestAnnual,
    annualDtiServiceWon,
    newAnnual,
    existingAnnual,
    newMonthly,
    existingMonthly,
    totalMonthly,
    dtiPercent,
    withinCap,
    equalPrincipalBasis,
    bulletBasis,
  };
}

export const dtiReferenceRows = [
  { condition: "은행권(일반)", cap: "60%", note: "주담대·가계대출 등" },
  { condition: "제2금융권(참고)", cap: "50%", note: "저축은행·카드·캐피탈 등" },
  { condition: "정책금융(디딤돌·보금자리 등)", cap: "60%", note: "DSR 대신 DTI 적용 사례" },
] as const;

export const dtiInclusionRows = [
  { item: "주담대 원금", dti: "포함", dsr: "포함" },
  { item: "주담대 이자", dti: "포함", dsr: "포함" },
  { item: "신용·카드론 원금", dti: "미포함", dsr: "포함" },
  { item: "신용·카드론 이자", dti: "포함", dsr: "포함" },
  { item: "할부·학자금 원금", dti: "미포함", dsr: "포함" },
] as const;
