import {
  calculateEqualPrincipal,
  calculateGraduatedPayment,
  calculateEqualPayment,
  DEFAULT_GRADUATED_ANNUAL_INCREASE_PERCENT,
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

/** 만기일시 DSR 산정 기준(기관·규정·계산기 비교용). bulletDsrBasisOrder 순 = 실무 DSR 심사에 가까운 순 */
export const BULLET_DSR_REGULATORY_AMORTIZATION_YEARS = 5;

export type BulletDsrBasis = "regulatory-5y-principal" | "equal-payment" | "interest-only";

export const bulletDsrBasisOrder: readonly BulletDsrBasis[] = [
  "regulatory-5y-principal",
  "equal-payment",
  "interest-only",
] as const;

export const bulletDsrBasisLabels: Record<BulletDsrBasis, string> = {
  "regulatory-5y-principal": "5년 원금균등+전액 이자 (신용·만기일시 DSR)",
  "equal-payment": "원리금균등 환산",
  "interest-only": "기간 중 이자만 (실제 월 납입)",
};

export const bulletDsrBasisHints: Record<BulletDsrBasis, string> = {
  "regulatory-5y-principal":
    "잔액을 5년(60개월) 균등 상환한다고 가정한 연간 원금 + 잔액 전액 기준 이자입니다. 신용대출 만기일시 DSR 규정·금융당국 안내와 유사하며, 실제 만기와 무관하게 5년을 적용합니다.",
  "equal-payment":
    "만기일시를 입력한 총·잔여 기간으로 원리금균등 환산합니다. 일부 금융기관·계산기 비교용입니다.",
  "interest-only":
    "만기 전 실제 납부 이자만 반영합니다. DSR 심사용이 아니라 통장 출금액 확인에 가깝습니다.",
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
  { id: "non_metro_mortgage", label: "비수도권 주담대 · 2026 하반기(1.50%p, 2단계)", nominalPercent: 1.5 },
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

/** DSR 연간 상환액 산출 (잔액·잔여기간·거치 반영) */
export function annualLoanDebtService(
  balanceWon: number,
  annualRatePercent: number,
  termMonths: number,
  repaymentType: RepaymentType,
  equalPrincipalBasis: EqualPrincipalDsrBasis,
  bulletBasis: BulletDsrBasis,
  options?: { graceMonths?: number; graduatedAnnualIncreasePercent?: number },
): number {
  const graceMonths = Math.max(0, Math.min(600, Math.round(options?.graceMonths ?? 0)));
  const graduatedIncrease =
    options?.graduatedAnnualIncreasePercent ?? DEFAULT_GRADUATED_ANNUAL_INCREASE_PERCENT;
  const months = Math.min(600, Math.max(1, Math.round(termMonths)));
  if (balanceWon <= 0) return 0;

  if (repaymentType === "equal-payment") {
    const { monthlyPayment } = calculateEqualPayment(
      balanceWon,
      annualRatePercent,
      months,
      graceMonths,
    );
    return monthlyPayment * 12;
  }

  if (repaymentType === "graduated") {
    const { schedule } = calculateGraduatedPayment(
      balanceWon,
      annualRatePercent,
      months,
      graceMonths,
      graduatedIncrease,
    );
    if (!schedule.length) return 0;
    const first = schedule[0]!.payment;
    const last = schedule[schedule.length - 1]!.payment;
    return ((first + last) / 2) * 12;
  }

  if (repaymentType === "bullet") {
    if (bulletBasis === "regulatory-5y-principal") {
      const annualPrincipal = balanceWon / BULLET_DSR_REGULATORY_AMORTIZATION_YEARS;
      const annualInterest = balanceWon * (annualRatePercent / 100);
      return annualPrincipal + annualInterest;
    }
    if (bulletBasis === "equal-payment") {
      const { monthlyPayment } = calculateEqualPayment(
        balanceWon,
        annualRatePercent,
        months,
        graceMonths,
      );
      return monthlyPayment * 12;
    }
    const monthlyRate = annualRatePercent / 100 / 12;
    return balanceWon * monthlyRate * 12;
  }

  if (equalPrincipalBasis === "first-month") {
    const { monthlyPayment } = calculateEqualPrincipal(
      balanceWon,
      annualRatePercent,
      months,
      graceMonths,
    );
    return monthlyPayment * 12;
  }

  if (equalPrincipalBasis === "year1-sum") {
    const { schedule } = calculateEqualPrincipal(
      balanceWon,
      annualRatePercent,
      months,
      graceMonths,
    );
    const count = Math.min(12, schedule.length);
    let sum = 0;
    for (let i = 0; i < count; i++) sum += schedule[i]!.payment;
    return sum;
  }

  const { schedule } = calculateEqualPrincipal(
    balanceWon,
    annualRatePercent,
    months,
    graceMonths,
  );
  if (!schedule.length) return 0;
  const totalPaid = schedule.reduce((sum, row) => sum + row.payment, 0);
  return (totalPaid / schedule.length) * 12;
}

/** @deprecated annualLoanDebtService 사용. grace 미반영 시 호환용 */
export function annualNewLoanDebtService(
  principalWon: number,
  annualRatePercent: number,
  termMonths: number,
  repaymentType: RepaymentType,
  equalPrincipalBasis: EqualPrincipalDsrBasis,
  bulletBasis: BulletDsrBasis,
): number {
  return annualLoanDebtService(
    principalWon,
    annualRatePercent,
    termMonths,
    repaymentType,
    equalPrincipalBasis,
    bulletBasis,
  );
}

/** 표시용 월환산액 = 연간÷12 (원금균등·기준별 의미 상이) */
export function impliedMonthlyFromAnnual(annualWon: number): number {
  return annualWon / 12;
}

/** 신규 대출의 DSR 산정용 월 상환액(참고). 원금균등은 basis 적용, 그 외는 상환 방식대로. */
export function monthlyPaymentForDsr(
  balanceWon: number,
  annualRatePercent: number,
  termMonths: number,
  repaymentType: RepaymentType,
  equalPrincipalBasis: EqualPrincipalDsrBasis = "first-month",
  bulletBasis: BulletDsrBasis = "regulatory-5y-principal",
  options?: { graceMonths?: number; graduatedAnnualIncreasePercent?: number },
): number {
  return impliedMonthlyFromAnnual(
    annualLoanDebtService(
      balanceWon,
      annualRatePercent,
      termMonths,
      repaymentType,
      equalPrincipalBasis,
      bulletBasis,
      options,
    ),
  );
}

export interface ResolvedDsrLoanTerms {
  balanceWon: number;
  remainingTermMonths: number;
  graceMonths: number;
}

/** 대출 조건 입력을 DSR 계산에 쓸 잔액·잔여기간 등으로 정규화 */
export function resolveDsrLoanTerms(loan: DsrLoanInput): ResolvedDsrLoanTerms | null {
  if (loan.inputMode !== "details") return null;

  const totalPrincipal = loan.totalPrincipalWon ?? loan.principalWon ?? 0;
  let balanceWon = loan.balanceWon ?? loan.principalWon ?? 0;
  if (balanceWon <= 0 && totalPrincipal > 0) balanceWon = totalPrincipal;

  let remainingTermMonths = loan.remainingTermMonths ?? loan.termMonths ?? 0;
  const totalTermMonths = loan.totalTermMonths ?? loan.termMonths ?? 0;
  if (remainingTermMonths <= 0 && totalTermMonths > 0) remainingTermMonths = totalTermMonths;

  const graceMonths = loan.graceMonths ?? 0;

  if (balanceWon <= 0) return null;
  if (remainingTermMonths <= 0) return null;

  return {
    balanceWon,
    remainingTermMonths: Math.min(600, Math.max(1, Math.round(remainingTermMonths))),
    graceMonths: Math.max(0, Math.min(600, Math.round(graceMonths))),
  };
}
export interface DsrStressOptions {
  /** 명목 스트레스 가산금리(%p). 예: 1.5 */
  nominalStressPercent: number;
  newLoanRateKind?: StressRateKind;
}

export type DsrLoanInputMode = "details" | "monthly";

export interface DsrLoanInput {
  label?: string;
  /** true = 이번에 받을(또는 받을 예정) 대출, false = 이미 갚고 있는 대출 */
  isNew: boolean;
  inputMode: DsrLoanInputMode;
  monthlyWon?: number;
  /** @deprecated balanceWon 사용 */
  principalWon?: number;
  /** 최초 대출 원금(총액). 계산은 balanceWon 우선 */
  totalPrincipalWon?: number;
  /** 현재 잔액. DSR 월 상환 계산의 기준 원금 (만기일시상환도 잔액에 원금 입력) */
  balanceWon?: number;
  /** @deprecated remainingTermMonths 사용 */
  termMonths?: number;
  /** 최초 약정 총 상환 기간(개월) */
  totalTermMonths?: number;
  /** 남은 상환 기간(개월) */
  remainingTermMonths?: number;
  /** 거치 기간(개월, 이자만 납부) */
  graceMonths?: number;
  annualRatePercent?: number;
  repaymentType?: RepaymentType;
  /** 체증식: 매년 월 상환 증가율(%). 미입력·범위 밖이면 5% */
  graduatedAnnualIncreasePercent?: number;
  /** 신규 대출 + 스트레스 DSR일 때만 사용 */
  stressRateKind?: StressRateKind;
}

export interface DsrLoanResult {
  label: string;
  isNew: boolean;
  inputMode: DsrLoanInputMode;
  monthlyContract: number;
  monthlyDsr: number;
  annualContract: number;
  annualDsr: number;
  contractRatePercent: number | null;
  dsrRatePercent: number | null;
  stressAddPercent: number;
}

function loanAnnualFromDetails(
  loan: DsrLoanInput,
  ratePercent: number,
  equalPrincipalBasis: EqualPrincipalDsrBasis,
  bulletBasis: BulletDsrBasis,
): number {
  if (loan.inputMode !== "details") return 0;
  const terms = resolveDsrLoanTerms(loan);
  if (!terms) return 0;
  const repaymentType = loan.repaymentType ?? "equal-payment";
  return annualLoanDebtService(
    terms.balanceWon,
    ratePercent,
    terms.remainingTermMonths,
    repaymentType,
    equalPrincipalBasis,
    bulletBasis,
    {
      graceMonths: terms.graceMonths,
      graduatedAnnualIncreasePercent: loan.graduatedAnnualIncreasePercent,
    },
  );
}

function computeLoanResult(
  loan: DsrLoanInput,
  equalPrincipalBasis: EqualPrincipalDsrBasis,
  bulletBasis: BulletDsrBasis,
  nominalStressPercent: number | null,
): DsrLoanResult | null {
  const label = loan.label?.trim() || (loan.isNew ? "신규 대출" : "기존 대출");

  if (loan.inputMode === "monthly") {
    const monthly = loan.monthlyWon ?? 0;
    if (monthly <= 0) return null;
    const annual = monthly * 12;
    return {
      label,
      isNew: loan.isNew,
      inputMode: loan.inputMode,
      monthlyContract: monthly,
      monthlyDsr: monthly,
      annualContract: annual,
      annualDsr: annual,
      contractRatePercent: null,
      dsrRatePercent: null,
      stressAddPercent: 0,
    };
  }

  const terms = resolveDsrLoanTerms(loan);
  const contractRate = loan.annualRatePercent ?? 0;
  if (!terms) return null;

  const annualContract = loanAnnualFromDetails(loan, contractRate, equalPrincipalBasis, bulletBasis);
  if (annualContract <= 0) return null;

  let stressAdd = 0;
  let dsrRate = contractRate;
  if (loan.isNew && nominalStressPercent != null) {
    stressAdd = effectiveStressAddPercent(
      nominalStressPercent,
      loan.stressRateKind ?? "variable",
    );
    dsrRate = contractRate + stressAdd;
  }

  const annualDsr = loanAnnualFromDetails(loan, dsrRate, equalPrincipalBasis, bulletBasis);

  return {
    label,
    isNew: loan.isNew,
    inputMode: loan.inputMode,
    monthlyContract: impliedMonthlyFromAnnual(annualContract),
    monthlyDsr: impliedMonthlyFromAnnual(annualDsr),
    annualContract,
    annualDsr,
    contractRatePercent: contractRate,
    dsrRatePercent: dsrRate,
    stressAddPercent: stressAdd,
  };
}

export function computeDsrSnapshotFromLoans(args: {
  annualIncomeManwon: number;
  loans: DsrLoanInput[];
  equalPrincipalDsrBasis?: EqualPrincipalDsrBasis;
  bulletDsrBasis?: BulletDsrBasis;
  stress?: DsrStressOptions | null;
}) {
  const basis = args.equalPrincipalDsrBasis ?? "first-month";
  const bulletBasis = args.bulletDsrBasis ?? "regulatory-5y-principal";
  const annualIncomeWon = args.annualIncomeManwon * 10_000;
  const nominalStress =
    args.stress != null && Number.isFinite(args.stress.nominalStressPercent)
      ? args.stress.nominalStressPercent
      : null;

  const loanResults = args.loans
    .map((loan) => computeLoanResult(loan, basis, bulletBasis, nominalStress))
    .filter((r): r is DsrLoanResult => r != null);

  const sum = (pick: (r: DsrLoanResult) => number) =>
    loanResults.reduce((acc, r) => acc + pick(r), 0);

  const existingMonthlyContract = sum((r) => (r.isNew ? 0 : r.monthlyContract));
  const newMonthlyContract = sum((r) => (r.isNew ? r.monthlyContract : 0));
  const existingMonthlyDsr = sum((r) => (r.isNew ? 0 : r.monthlyDsr));
  const newMonthlyDsr = sum((r) => (r.isNew ? r.monthlyDsr : 0));

  const totalMonthlyContract = existingMonthlyContract + newMonthlyContract;
  const totalMonthly = existingMonthlyDsr + newMonthlyDsr;
  const annualDebtServiceContractWon = sum((r) => r.annualContract);
  const annualDebtServiceWon = sum((r) => r.annualDsr);
  const dsrPercent =
    annualIncomeWon > 0 ? (annualDebtServiceWon / annualIncomeWon) * 100 : null;

  const newDetailLoans = loanResults.filter((r) => r.isNew && r.inputMode === "details");
  const contractRatePercent =
    newDetailLoans.length === 1 ? (newDetailLoans[0]!.contractRatePercent ?? 0) : 0;
  const newLoanRateForDsrPercent =
    newDetailLoans.length === 1 ? (newDetailLoans[0]!.dsrRatePercent ?? 0) : 0;
  const stressAddPercent =
    newDetailLoans.length === 1 ? newDetailLoans[0]!.stressAddPercent : 0;
  const isStressDsr = loanResults.some((r) => r.isNew && r.stressAddPercent > 0);

  return {
    annualIncomeWon,
    loanResults,
    existingMonthlyContract,
    existingMonthlyDsr,
    newMonthly: newMonthlyDsr,
    newMonthlyContract,
    totalMonthly,
    totalMonthlyContract,
    annualDebtServiceWon,
    annualDebtServiceContractWon,
    dsrPercent,
    contractRatePercent,
    newLoanRateForDsrPercent,
    stressAddPercent,
    isStressDsr,
    equalPrincipalDsrBasis: basis,
    bulletDsrBasis: bulletBasis,
  };
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
  const loans: DsrLoanInput[] = [];
  if (args.existingMonthlyWon > 0) {
    loans.push({
      isNew: false,
      inputMode: "monthly",
      monthlyWon: args.existingMonthlyWon,
      label: "기존 대출",
    });
  }
  if (args.newPrincipalWon > 0 && args.newTermMonths > 0) {
    loans.push({
      isNew: true,
      inputMode: "details",
      totalPrincipalWon: args.newPrincipalWon,
      balanceWon: args.newPrincipalWon,
      totalTermMonths: args.newTermMonths,
      remainingTermMonths: args.newTermMonths,
      annualRatePercent: args.newAnnualRatePercent,
      repaymentType: args.newRepaymentType,
      stressRateKind: args.stress?.newLoanRateKind ?? "variable",
    });
  }
  return computeDsrSnapshotFromLoans({
    annualIncomeManwon: args.annualIncomeManwon,
    loans,
    equalPrincipalDsrBasis: args.equalPrincipalDsrBasis,
    bulletDsrBasis: args.bulletDsrBasis,
    stress: args.stress,
  });
}
