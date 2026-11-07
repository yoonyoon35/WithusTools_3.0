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

/**
 * 은행 신규 주택담보대출 DTI 한도 — 은행업감독규정 별표 6 제3장 3호(총부채상환비율).
 * 가목: 투기지역·투기과열지구 40%, 조정대상지역(아파트) 50%, 그 밖의 수도권(아파트) 60%.
 * 다목: 생애최초주택구매자·규제지역 서민·실수요자의 주택구입 목적 대출은 60% 이내.
 * 마목: 2주택 이상 세대의 생활안정자금 대출은 가목 비율에서 10%p 차감(여신심사위원회 승인 시 제외 가능).
 */
export type DtiRegion = "speculative" | "adjusted" | "metro" | "other";

export type DtiHousingType = "apartment" | "other";

export type DtiLoanCategory = "mortgage" | "other";

export const dtiRegionOrder: readonly DtiRegion[] = ["speculative", "adjusted", "metro", "other"] as const;

export const dtiRegionLabels: Record<DtiRegion, string> = {
  speculative: "투기지역·투기과열지구",
  adjusted: "조정대상지역",
  metro: "그 밖의 수도권(위 지역 제외)",
  other: "수도권 밖 비규제지역",
};

export const dtiHousingTypeLabels: Record<DtiHousingType, string> = {
  apartment: "아파트(주상복합 포함)",
  other: "아파트 외 주택",
};

export const dtiLoanCategoryLabels: Record<DtiLoanCategory, string> = {
  mortgage: "주택담보(원리금)",
  other: "기타 대출(이자만)",
};

export interface DtiLimitConditions {
  region: DtiRegion;
  housingType: DtiHousingType;
  /** 생애최초주택구매자 또는 규제지역 서민·실수요자의 주택구입 목적 대출 */
  firstHomeOrPractical: boolean;
  /** 2주택 이상 세대의 생활안정자금 목적 대출 */
  livingFundMultiHome: boolean;
}

export interface DtiLimitResolution {
  /** 적용 한도(%). DTI 비율이 정해지지 않은 경우 null */
  capPercent: number | null;
  /** 적용 근거 한 줄 설명 */
  basis: string;
}

export const defaultDtiLimitConditions: DtiLimitConditions = {
  region: "speculative",
  housingType: "apartment",
  firstHomeOrPractical: false,
  livingFundMultiHome: false,
};

export function resolveDtiLimit(conditions: DtiLimitConditions): DtiLimitResolution {
  const { region, housingType } = conditions;
  const isApartment = housingType === "apartment";

  let cap: number | null = null;
  let basis: string;

  if (region === "speculative") {
    cap = 40;
    basis = "투기지역·투기과열지구 40%(주택 전체)";
  } else if (region === "adjusted") {
    if (isApartment) {
      cap = 50;
      basis = "조정대상지역 아파트 50%";
    } else {
      basis = "조정대상지역 아파트 외 주택은 DTI 비율 미지정";
    }
  } else if (region === "metro") {
    if (isApartment) {
      cap = 60;
      basis = "그 밖의 수도권 아파트 60%";
    } else {
      basis = "그 밖의 수도권 아파트 외 주택은 DTI 비율 미지정";
    }
  } else {
    basis = "수도권 밖 비규제지역은 DTI 비율 미지정";
  }

  if (cap != null && conditions.livingFundMultiHome) {
    cap -= 10;
    basis += " − 10%p(2주택 이상 세대 생활안정자금)";
  } else if (cap != null && conditions.firstHomeOrPractical && cap < 60) {
    cap = 60;
    basis = "생애최초·서민실수요 주택구입 대출 60% 이내";
  }

  return { capPercent: cap, basis };
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
  limitConditions: DtiLimitConditions;
  loans: DtiLoanInput[];
  equalPrincipalBasis?: EqualPrincipalDsrBasis;
  bulletBasis?: BulletDtiBasis;
}) {
  const equalPrincipalBasis = args.equalPrincipalBasis ?? "first-month";
  const bulletBasis = args.bulletBasis ?? "regulatory-10y-principal";
  const { capPercent, basis: limitBasis } = resolveDtiLimit(args.limitConditions);
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
  const withinCap: boolean | null =
    capPercent == null ? null : dtiPercent != null ? dtiPercent <= capPercent + 1e-9 : true;

  return {
    limitConditions: args.limitConditions,
    capPercent,
    limitBasis,
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
  { condition: "투기지역·투기과열지구", cap: "40%", note: "주택 전체" },
  { condition: "조정대상지역", cap: "50%", note: "해당 지역 아파트(주상복합 포함) 담보대출만" },
  { condition: "그 밖의 수도권", cap: "60%", note: "아파트(주상복합 포함) 담보대출만, 위 지역 제외" },
  { condition: "수도권 밖 비규제지역", cap: "비율 없음", note: "DTI 비율 미지정(DSR은 별도 적용)" },
  { condition: "생애최초·규제지역 서민·실수요자", cap: "60% 이내", note: "주택구입 목적 주담대에 한해 달리 적용 가능" },
  { condition: "2주택 이상 세대 생활안정자금", cap: "위 비율 −10%p", note: "여신심사위원회 승인 시 차감하지 않을 수 있음" },
  { condition: "정책금융(디딤돌·보금자리 등)", cap: "60%", note: "은행업감독규정과 별개인 상품 기준(생애최초·실수요자 요건 등)" },
] as const;

export const dtiExemptionRows = [
  ["소액대출", "전 금융기관 합산 1억 원 이내. 단, 같은 집(단일물건) 누적 대출이 1억 원을 넘으면 적용"],
  ["불가피한 채무 인수", "상속, 채권보전을 위한 경매 참가 등"],
  ["분양·재건축·재개발 관련", "분양 주택 중도금대출, 재건축·재개발 이주비대출, 추가분담금 중도금대출"],
  ["상환부담 경감 조건 변경", "원금·이자 감면, 금리·만기·상환방법·거치기간 조정(상환방법은 10년 이상 분할상환 전환에 한함)"],
  ["규제지역 밖 사업장 잔금대출", "분양 주택·재건축·재개발 주택 잔금대출"],
  ["긴급 생활안정자금", "1억 5천만 원 한도, 목적 입증·약정 및 여신심사위원회 승인 필요"],
] as const;

export const dtiInclusionRows = [
  { item: "주담대 원금", dti: "포함", dsr: "포함" },
  { item: "주담대 이자", dti: "포함", dsr: "포함" },
  { item: "신용·카드론 원금", dti: "미포함", dsr: "포함" },
  { item: "신용·카드론 이자", dti: "포함", dsr: "포함" },
  { item: "할부·학자금 원금", dti: "미포함", dsr: "포함" },
] as const;
