/**
 * 종합소득세 계산
 * 근거: 국세청 종합소득세 개요(cntntsId=7664), 세액계산 흐름(7666), 세율(7667),
 *       가산세 요약표(7668), 기장의무(7669), 모두채움 납부·환급(238978, 239072),
 *       중간예납(7673·7674·7675), 경비율 적용방법 안내(게시) 한글 문서.
 * 소득공제·세액공제 항목별 한도는 그 화면에 없어 합계 입력값을 그대로 씁니다.
 */

export type AttributionYear = "2023-2025" | "2021-2022" | "2018-2020" | "2017";

export interface TaxBracket {
  /** 해당 구간 상한. 마지막 구간은 무한대 */
  maxBase: number;
  rate: number;
  progressiveDeduction: number;
}

export const TAX_BRACKETS: Record<AttributionYear, readonly TaxBracket[]> = {
  "2023-2025": [
    { maxBase: 14_000_000, rate: 0.06, progressiveDeduction: 0 },
    { maxBase: 50_000_000, rate: 0.15, progressiveDeduction: 1_260_000 },
    { maxBase: 88_000_000, rate: 0.24, progressiveDeduction: 5_760_000 },
    { maxBase: 150_000_000, rate: 0.35, progressiveDeduction: 15_440_000 },
    { maxBase: 300_000_000, rate: 0.38, progressiveDeduction: 19_940_000 },
    { maxBase: 500_000_000, rate: 0.4, progressiveDeduction: 25_940_000 },
    { maxBase: 1_000_000_000, rate: 0.42, progressiveDeduction: 35_940_000 },
    { maxBase: Number.POSITIVE_INFINITY, rate: 0.45, progressiveDeduction: 65_940_000 },
  ],
  "2021-2022": [
    { maxBase: 12_000_000, rate: 0.06, progressiveDeduction: 0 },
    { maxBase: 46_000_000, rate: 0.15, progressiveDeduction: 1_080_000 },
    { maxBase: 88_000_000, rate: 0.24, progressiveDeduction: 5_220_000 },
    { maxBase: 150_000_000, rate: 0.35, progressiveDeduction: 14_900_000 },
    { maxBase: 300_000_000, rate: 0.38, progressiveDeduction: 19_400_000 },
    { maxBase: 500_000_000, rate: 0.4, progressiveDeduction: 25_400_000 },
    { maxBase: 1_000_000_000, rate: 0.42, progressiveDeduction: 35_400_000 },
    { maxBase: Number.POSITIVE_INFINITY, rate: 0.45, progressiveDeduction: 65_400_000 },
  ],
  "2018-2020": [
    { maxBase: 12_000_000, rate: 0.06, progressiveDeduction: 0 },
    { maxBase: 46_000_000, rate: 0.15, progressiveDeduction: 1_080_000 },
    { maxBase: 88_000_000, rate: 0.24, progressiveDeduction: 5_220_000 },
    { maxBase: 150_000_000, rate: 0.35, progressiveDeduction: 14_900_000 },
    { maxBase: 300_000_000, rate: 0.38, progressiveDeduction: 19_400_000 },
    { maxBase: 500_000_000, rate: 0.4, progressiveDeduction: 25_400_000 },
    { maxBase: Number.POSITIVE_INFINITY, rate: 0.42, progressiveDeduction: 35_400_000 },
  ],
  "2017": [
    { maxBase: 12_000_000, rate: 0.06, progressiveDeduction: 0 },
    { maxBase: 46_000_000, rate: 0.15, progressiveDeduction: 1_080_000 },
    { maxBase: 88_000_000, rate: 0.24, progressiveDeduction: 5_220_000 },
    { maxBase: 150_000_000, rate: 0.35, progressiveDeduction: 14_900_000 },
    { maxBase: 500_000_000, rate: 0.38, progressiveDeduction: 19_400_000 },
    { maxBase: Number.POSITIVE_INFINITY, rate: 0.4, progressiveDeduction: 29_400_000 },
  ],
};

/** 경비율 적용방법 안내의 소득상한 배율 */
export const EXPENSE_RATIO_MULTIPLIERS = [
  { id: "2007", label: "2007년 귀속", simpleBook: 2, doubleEntry: 2.4 },
  { id: "2008", label: "2008년 귀속", simpleBook: 2.1, doubleEntry: 2.6 },
  { id: "2009", label: "2009년 귀속", simpleBook: 2.2, doubleEntry: 2.8 },
  { id: "2010-2015", label: "2010~2015년 귀속", simpleBook: 2.4, doubleEntry: 3 },
  { id: "2016-2019", label: "2016~2019년 귀속", simpleBook: 2.6, doubleEntry: 3.2 },
  { id: "2020-2027", label: "2020~2027년 귀속", simpleBook: 2.8, doubleEntry: 3.4 },
] as const;

export type MultiplierPeriodId = (typeof EXPENSE_RATIO_MULTIPLIERS)[number]["id"];

export const PERSONAL_SERVICE_THRESHOLD = 40_000_000;
export const PRIVATE_PENSION_SEPARATE_RATE = 0.15;
export const PRIVATE_PENSION_AGGREGATE_THRESHOLD = 15_000_000;
export const WITHHOLDING_INCOME_TAX_RATE = 0.03;
export const WITHHOLDING_LOCAL_TAX_RATE = 0.003;
export const INTERIM_MINIMUM = 500_000;
export const INTERIM_INSTALLMENT_FLOOR = 10_000_000;
export const INTERIM_INSTALLMENT_HALF_FROM = 20_000_000;
/** 소득세법 제14조 제3항 제6호. 원천징수된 이자·배당의 종합과세기준금액 */
export const FINANCIAL_INCOME_THRESHOLD = 20_000_000;
/** 소득세법 제129조 제1항 제1호 라목. 일반 이자·배당 원천징수세율 */
export const FINANCIAL_INCOME_WITHHOLDING_RATE = 0.14;

export type BookkeepingDuty = "simple-book" | "double-entry";

export type NoFilingKind =
  | "none"
  | "general"
  | "double-entry"
  | "fraud"
  | "fraud-double"
  | "fraud-international"
  | "fraud-international-double";

export interface SimpleBusinessInput {
  method: "simple";
  revenue: number;
  /** 일반 단순경비율. 90.3 이면 90.3% */
  simplePercent: number;
  /** 인적용역 4천만 원 초과분 경비율. 분할을 켜면 사용 */
  excessSimplePercent: number;
  personalServiceSplit: boolean;
  jobStabilityFund: number;
  selfOwned: boolean;
  selfRateExcluded: boolean;
  disabledOperator: boolean;
}

export interface StandardBusinessInput {
  method: "standard";
  revenue: number;
  /** 일반 기준경비율(%) */
  standardPercent: number;
  /** 비교소득용 단순경비율(%) */
  simplePercent: number;
  majorExpenses: number;
  openingInventoryMajor: number;
  closingInventoryMajor: number;
  duty: BookkeepingDuty;
  multiplierPeriodId: MultiplierPeriodId;
  selfOwned: boolean;
  selfRateExcluded: boolean;
}

export type BusinessInput = { method: "amount"; income: number } | SimpleBusinessInput | StandardBusinessInput;

/** 이 금액 이하 기타소득은 분리과세가 원칙. 납세자가 켠 경우에만 종합소득에 넣음 */
export const OTHER_INCOME_SEPARATE_LIMIT = 3_000_000;

export interface OtherIncomeInput {
  method: "amount" | "ratio";
  income: number;
  gross: number;
  /** 필요경비율(%). 강연료 안내는 60 */
  expensePercent: number;
  /** 300만 원 이하를 종합소득에 넣을 때. 300만 원 초과는 이 값과 관계없이 넣음 */
  includeInAggregate?: boolean;
}

export interface PenaltyInput {
  noFiling: NoFilingKind;
  /** 무신고 수입금액. 복식부기 무신고의 수입금액×0.07%·0.14%에 사용 */
  noFilingRevenue: number;
  /** 과소신고납부세액. 요율 10% */
  underreportedTax: number;
  /** 무기장·미달기장 소득금액 */
  unbookedIncome: number;
  sincereFilingMissing: boolean;
  sincereBusinessIncome: number;
  sincereBusinessRevenue: number;
  /** 미납·미달납부세액 */
  lateUnpaidTax: number;
  /** 납부기한 다음날부터 자진납부일 또는 납부고지일까지 */
  lateDays: number;
}

/** 소득세법 제50조. 기본공제 대상자 1명당 */
export const BASIC_DEDUCTION_PER_PERSON = 1_500_000;
/** 소득세법 제51조. 70세 이상 1명당 */
export const ELDERLY_ADDITIONAL_DEDUCTION = 1_000_000;
/** 소득세법 제51조. 장애인 1명당 */
export const DISABLED_ADDITIONAL_DEDUCTION = 2_000_000;
/** 소득세법 제51조. 부녀자, 종합소득금액 3천만 원 이하 */
export const WOMAN_ADDITIONAL_DEDUCTION = 500_000;
export const WOMAN_DEDUCTION_INCOME_CAP = 30_000_000;
/** 소득세법 제51조. 한부모. 부녀자와 겹치면 한부모만 */
export const SINGLE_PARENT_ADDITIONAL_DEDUCTION = 1_000_000;
/** 소득세법 제59조의2 제1항. 1명 */
export const CHILD_TAX_CREDIT_ONE = 250_000;
/** 소득세법 제59조의2 제1항. 2명 */
export const CHILD_TAX_CREDIT_TWO = 550_000;
/** 소득세법 제59조의2 제1항. 2명을 넘는 1명당 */
export const CHILD_TAX_CREDIT_EXTRA = 400_000;
/** 소득세법 제59조의4 제9항. 근로소득이 있을 때 */
export const STANDARD_TAX_CREDIT_WAGE = 130_000;
/** 소득세법 제59조의4 제9항. 근로소득이 없는 성실사업자 */
export const STANDARD_TAX_CREDIT_SINCERE = 120_000;
/** 소득세법 제59조의4 제9항. 근로소득이 없는 그 밖의 종합소득자 */
export const STANDARD_TAX_CREDIT_GENERAL = 70_000;

export interface PersonalDeductionInput {
  /** 본인. 종합소득이 있는 거주자 */
  includeSelf: boolean;
  /** 소득금액 합계 100만 원 이하인 배우자. 근로소득만 있으면 총급여 500만 원 이하 */
  spouse: boolean;
  /**
   * 생계를 같이하고 소득금액 합계 100만 원 이하인 부양가족 수.
   * 직계존속 60세 이상, 직계비속·입양자 20세 이하, 형제자매 20세 이하 또는 60세 이상.
   * 장애인·수급자·위탁아동은 나이 제한이 없습니다. 근로소득만 있으면 총급여 500만 원 이하.
   */
  dependentCount: number;
  /** 기본공제 대상자 중 70세 이상 */
  elderlyCount: number;
  /** 기본공제 대상자 중 장애인 */
  disabledCount: number;
  /** 배우자 있는 여성, 또는 부양가족이 있는 세대주 여성 */
  woman: boolean;
  /** 배우자 없고 기본공제 대상 직계비속·입양자가 있는 경우 */
  singleParent: boolean;
}

export interface PersonalDeductionDetail {
  people: number;
  basic: number;
  elderly: number;
  disabled: number;
  woman: number;
  singleParent: number;
  total: number;
}

export function emptyPersonalDeduction(): PersonalDeductionInput {
  return {
    includeSelf: false,
    spouse: false,
    dependentCount: 0,
    elderlyCount: 0,
    disabledCount: 0,
    woman: false,
    singleParent: false,
  };
}

export function computePersonalDeduction(
  input: PersonalDeductionInput,
  comprehensiveIncome: number,
): PersonalDeductionDetail {
  const people = Math.max(
    0,
    (input.includeSelf ? 1 : 0) + (input.spouse ? 1 : 0) + Math.max(0, Math.floor(input.dependentCount)),
  );
  const basic = people * BASIC_DEDUCTION_PER_PERSON;
  const elderlyPeople = Math.min(people, Math.max(0, Math.floor(input.elderlyCount)));
  const disabledPeople = Math.min(people, Math.max(0, Math.floor(input.disabledCount)));
  const elderly = elderlyPeople * ELDERLY_ADDITIONAL_DEDUCTION;
  const disabled = disabledPeople * DISABLED_ADDITIONAL_DEDUCTION;
  const singleParent =
    input.singleParent && !input.spouse && input.dependentCount > 0 ? SINGLE_PARENT_ADDITIONAL_DEDUCTION : 0;
  const woman =
    input.woman &&
    !singleParent &&
    (input.spouse || input.dependentCount > 0) &&
    comprehensiveIncome <= WOMAN_DEDUCTION_INCOME_CAP
      ? WOMAN_ADDITIONAL_DEDUCTION
      : 0;
  return {
    people,
    basic,
    elderly,
    disabled,
    woman,
    singleParent,
    total: basic + elderly + disabled + woman + singleParent,
  };
}

/** 소득세법 제59조의2 제1항. 기본공제 대상 자녀·손자녀 수 */
export function computeChildTaxCredit(count: number): number {
  const people = Math.max(0, Math.floor(count));
  if (people <= 0) return 0;
  if (people === 1) return CHILD_TAX_CREDIT_ONE;
  if (people === 2) return CHILD_TAX_CREDIT_TWO;
  return CHILD_TAX_CREDIT_TWO + (people - 2) * CHILD_TAX_CREDIT_EXTRA;
}

/**
 * 소득세법 제59조의4 제9항.
 * 근로소득이 있으면 13만 원. 없으면 성실사업자 12만 원, 그 밖은 7만 원.
 */
export function computeStandardTaxCredit(args: {
  apply: boolean;
  sincereBusiness: boolean;
  wageIncome: number;
}): number {
  if (!args.apply && !args.sincereBusiness) return 0;
  if (args.wageIncome > 0) return STANDARD_TAX_CREDIT_WAGE;
  if (args.sincereBusiness) return STANDARD_TAX_CREDIT_SINCERE;
  return STANDARD_TAX_CREDIT_GENERAL;
}

/** 소득세법 제59조의3. 연금저축 한도 */
export const PENSION_SAVING_CAP = 6_000_000;
/** 연금저축과 퇴직연금을 합친 한도 */
export const PENSION_ACCOUNT_CAP = 9_000_000;
/** 이 금액 이하의 합산 종합소득금액이면 15%, 넘으면 12% */
export const PENSION_CREDIT_HIGH_RATE_INCOME = 45_000_000;

export function computePensionAccountCredit(args: {
  pensionSaving: number;
  retirementPension: number;
  /** 분리과세 금융소득을 뺀, 결손 공제 후 합산 소득 */
  aggregatedIncome: number;
}): { contribution: number; rate: number; credit: number } {
  const saving = Math.min(PENSION_SAVING_CAP, Math.max(0, won(args.pensionSaving)));
  const retirement = Math.min(Math.max(0, PENSION_ACCOUNT_CAP - saving), Math.max(0, won(args.retirementPension)));
  const contribution = saving + retirement;
  const rate = args.aggregatedIncome <= PENSION_CREDIT_HIGH_RATE_INCOME ? 0.15 : 0.12;
  return { contribution, rate, credit: amountByPercent(contribution, rate * 100) };
}

export interface IncomeLossDetail {
  rentalIncome: number;
  rentalCarryUsed: number;
  /** 종합소득에 넣는 임대소득. 임대 결손은 0으로 두고 다른 소득에서 빼지 않습니다. */
  rentalForAggregate: number;
  businessCarryUsed: number;
  otherCarryUsed: number;
  lossUsedOnRental: number;
  lossUsedOnOther: number;
  lossUsedOnFinancial: number;
  unusedLoss: number;
}

/**
 * 부동산임대 결손·임대 이월결손금은 임대소득에서만 뺍니다.
 * 그 밖 사업결손과 이월결손금은 임대 이익, 다른 소득, 종합과세 금융소득 순서로 뺍니다.
 */
export function applyIncomeLosses(args: {
  rentalIncome: number;
  businessIncome: number;
  otherNonFinancial: number;
  financialIncluded: number;
  rentalCarryforward: number;
  otherCarryforward: number;
}): IncomeLossDetail {
  const rentalIncome = won(args.rentalIncome);
  const businessIncome = won(args.businessIncome);
  const otherNonFinancial = Math.max(0, won(args.otherNonFinancial));
  const financialIncluded = Math.max(0, won(args.financialIncluded));
  const rentalCarry = Math.max(0, won(args.rentalCarryforward));
  const otherCarry = Math.max(0, won(args.otherCarryforward));

  const rentalCarryUsed = rentalIncome > 0 ? Math.min(rentalIncome, rentalCarry) : 0;
  let rentalPositive = Math.max(0, rentalIncome - rentalCarryUsed);

  const businessCarryUsed = businessIncome > 0 ? Math.min(businessIncome, otherCarry) : 0;
  const currentBusinessLoss = Math.max(0, -businessIncome);
  let lossPool = currentBusinessLoss + (otherCarry - businessCarryUsed);

  const lossUsedOnRental = Math.min(rentalPositive, lossPool);
  rentalPositive -= lossUsedOnRental;
  lossPool -= lossUsedOnRental;

  const lossUsedOnOther = Math.min(otherNonFinancial, lossPool);
  lossPool -= lossUsedOnOther;

  const lossUsedOnFinancial = Math.min(financialIncluded, lossPool);
  lossPool -= lossUsedOnFinancial;

  const usedFromPool = lossUsedOnRental + lossUsedOnOther + lossUsedOnFinancial;
  const carryUsedFromPool = Math.min(otherCarry - businessCarryUsed, Math.max(0, usedFromPool - currentBusinessLoss));

  return {
    rentalIncome,
    rentalCarryUsed,
    rentalForAggregate: rentalPositive,
    businessCarryUsed,
    otherCarryUsed: businessCarryUsed + carryUsedFromPool,
    lossUsedOnRental,
    lossUsedOnOther,
    lossUsedOnFinancial,
    unusedLoss: lossPool,
  };
}

export interface ComprehensiveIncomeTaxInput {
  year: AttributionYear;
  /** true면 과세표준을 그대로 쓰고 소득·소득공제는 계산에 넣지 않음 */
  useDirectTaxBase: boolean;
  directTaxBase: number;
  interestIncome: number;
  dividendIncome: number;
  wageIncome: number;
  pensionIncome: number;
  business: BusinessInput;
  /** 부동산임대소득. 장부 결손은 마이너스. 다른 소득과 통산하지 않습니다. */
  rentalIncome: number;
  /** 부동산임대업 이월결손금. 임대소득에서만 공제 */
  rentalLossCarryforward: number;
  /** 임대 외 이월결손금 */
  otherLossCarryforward: number;
  other: OtherIncomeInput;
  /** 분리과세를 선택하면 종합소득에 넣지 않고 15%를 따로 계산 */
  privatePensionSeparate: boolean;
  privatePensionAmount: number;
  personal: PersonalDeductionInput;
  /**
   * 자녀세액공제 대상 수. 2026~2029년 귀속은 2016년생 이전 자녀·손자녀.
   * 기본공제 대상이라 부양가족 수를 넘기지 않습니다.
   */
  childCreditCount: number;
  /** 표준세액공제. 특별소득공제·특별세액공제·월세 세액공제를 신청하지 않을 때 */
  standardTaxCredit: boolean;
  /** 근로소득이 없는 성실사업자. 표준세액공제 12만 원 */
  sincereBusiness: boolean;
  /** 연금저축 납입액. 600만 원까지 */
  pensionSaving: number;
  /** 퇴직연금 납입액. 연금저축과 합쳐 900만 원까지 */
  retirementPension: number;
  /** 인적공제 외 소득공제 합계 */
  incomeDeductions: number;
  /** 자녀세액공제·표준세액공제 외 세액공제·감면 합계 */
  taxCredits: number;
  withholdingIncomeTax: number;
  interimPrepayment: number;
  occasionalAssessment: number;
  penalties: PenaltyInput;
}

export interface BusinessIncomeDetail {
  income: number;
  revenue: number;
  lines: string[];
}

export interface CalculatedTaxDetail {
  taxBase: number;
  rate: number;
  progressiveDeduction: number;
  tax: number;
}

/** 소득세법 제62조. 원천징수된 일반 이자·배당(14%)의 비교과세 */
export interface FinancialIncomeComparison {
  total: number;
  /** 과세표준에 합산하지 않는 금액. 2천만 원 이하면 전액, 초과하면 2천만 원 */
  excluded: number;
  /** 과세표준에 합산하는 2천만 원 초과분 */
  included: number;
  compared: boolean;
  /** 1호 가목. 초과분과 다른 소득의 과세표준 산출세액 */
  method1Progressive: number;
  /** 1호 나목. 종합과세기준금액 × 14% */
  method1Flat: number;
  method1: number;
  /** 2호 가목. 금융소득 전체 × 14% */
  method2Financial: number;
  /** 2호 나목. 금융소득을 뺀 다른 소득의 산출세액 */
  method2Other: number;
  method2: number;
  chosen: "method1" | "method2" | "none";
}

export interface PenaltyDetail {
  noFiling: number;
  understatement: number;
  bookkeeping: number;
  /** 무신고·과소신고·장부불성실 중 적용한 금액 */
  grouped: number;
  groupedLabel: string;
  sincere: number;
  latePayment: number;
  total: number;
}

export interface ComprehensiveIncomeTaxResult {
  year: AttributionYear;
  useDirectTaxBase: boolean;
  interestIncome: number;
  dividendIncome: number;
  financial: FinancialIncomeComparison;
  business: BusinessIncomeDetail;
  losses: IncomeLossDetail;
  wageIncome: number;
  pensionIncome: number;
  otherIncome: number;
  /** 300만 원 이하이고 종합소득에 넣지 않음 */
  otherIncomeSeparated: boolean;
  otherLines: string[];
  privatePensionSeparateTax: number;
  comprehensiveIncome: number;
  personal: PersonalDeductionDetail;
  /** 인적공제 + 그 밖 소득공제 */
  incomeDeductions: number;
  calculated: CalculatedTaxDetail;
  /** 자녀세액공제. 부양가족 수를 넘긴 인원은 빼서 계산 */
  childTaxCredit: number;
  childCreditCount: number;
  standardTaxCredit: number;
  pensionAccountCredit: number;
  pensionContributionUsed: number;
  pensionCreditRate: number;
  /** 직접 입력한 세액공제·감면 */
  enteredTaxCredits: number;
  /** 자녀세액공제 + 표준세액공제 + 직접 입력 */
  taxCredits: number;
  taxAfterCredits: number;
  penalties: PenaltyDetail;
  withholdingIncomeTax: number;
  interimPrepayment: number;
  occasionalAssessment: number;
  prepaidTotal: number;
  /** 세액공제 후 세액 + 가산세 − 기납부세액. 분리과세 사적연금은 별도 */
  nationalNet: number;
  separatePensionNet: number;
}

export interface InterimNoticeInput {
  priorInterim: number;
  finalSelfPayment: number;
  additionalAssessment: number;
  lateOrAmendedPayment: number;
  refund: number;
  landPrepayment: number;
}

export interface InterimInstallment {
  /** 안내 사례 기준 분납 가능액 */
  deferrable: number;
  /** 11월 30일까지 내는 금액(분납 가능액을 모두 미룰 때) */
  dueByNovember30: number;
}

export interface InterimNoticeResult {
  base: number;
  tax: number;
  belowMinimum: boolean;
  installment: InterimInstallment | null;
}

export interface InterimEstimateInput {
  periodIncome: number;
  lossCarryforward: number;
  incomeDeductions: number;
  year: AttributionYear;
  /** 6월 30일까지의 공제·감면, 토지 등 예정신고 산출세액, 수시부과, 원천징수 합계 */
  subtractions: number;
  noticeBase: number;
  mustFileBecauseNoBase: boolean;
}

export interface InterimEstimateResult {
  taxBase: number;
  calculatedTax: number;
  estimate: number;
  belowMinimum: boolean;
  underThirtyPercentOfBase: boolean;
  thirtyPercentOfBase: number;
  installment: InterimInstallment | null;
}

function won(amount: number): number {
  if (!Number.isFinite(amount)) return 0;
  return Math.round(amount);
}

/** percent는 11.4처럼 퍼센트 숫자 */
export function amountByPercent(amount: number, percent: number): number {
  return won((amount * percent) / 100);
}

function roundPercent1(percent: number): number {
  return Math.round(percent * 10) / 10;
}

export function computeCalculatedTax(taxBase: number, year: AttributionYear): CalculatedTaxDetail {
  const base = Math.max(0, won(taxBase));
  const bracket = TAX_BRACKETS[year].find((item) => base <= item.maxBase) ?? TAX_BRACKETS[year][TAX_BRACKETS[year].length - 1];
  const tax = Math.max(0, amountByPercent(base, bracket.rate * 100) - bracket.progressiveDeduction);
  return {
    taxBase: base,
    rate: bracket.rate,
    progressiveDeduction: bracket.progressiveDeduction,
    tax,
  };
}

export function multiplierFor(periodId: MultiplierPeriodId, duty: BookkeepingDuty): number {
  const row = EXPENSE_RATIO_MULTIPLIERS.find((item) => item.id === periodId) ?? EXPENSE_RATIO_MULTIPLIERS[5];
  return duty === "double-entry" ? row.doubleEntry : row.simpleBook;
}

function adjustedSimplePercent(input: SimpleBusinessInput): { percent: number; excess: number; lines: string[] } {
  const lines: string[] = [];
  let percent = input.simplePercent;
  let excess = input.personalServiceSplit ? input.excessSimplePercent : input.simplePercent;
  if (input.selfOwned && !input.selfRateExcluded) {
    percent = roundPercent1(percent - 0.3);
    excess = roundPercent1(excess - 0.3);
    lines.push("자가 사업자 단순경비율은 일반율에서 0.3을 뺍니다.");
  }
  if (input.disabledOperator) {
    percent = roundPercent1(percent + (100 - percent) * 0.2);
    excess = roundPercent1(excess + (100 - excess) * 0.2);
    lines.push("장애인 직접 경영은 단순경비율에 단순소득률의 20%를 더합니다. 안내 적용례 90.3은 92.2입니다.");
  }
  return { percent, excess, lines };
}

export function computeBusinessIncome(input: BusinessInput): BusinessIncomeDetail {
  if (input.method === "amount") {
    return {
      income: won(input.income),
      revenue: 0,
      lines: ["장부 소득금액을 입력값 그대로 사용합니다. 결손은 마이너스입니다."],
    };
  }

  if (input.method === "simple") {
    const revenue = Math.max(0, won(input.revenue) - won(input.jobStabilityFund));
    const adjusted = adjustedSimplePercent(input);
    const lines = [
      "소득금액 = 수입금액 − (수입금액 × 단순경비율)",
      ...adjusted.lines,
    ];
    if (input.jobStabilityFund > 0) {
      lines.push("일자리 안정자금은 수입금액에서 제외합니다. 2020년 2월 11일 이후 결정·경정분입니다.");
    }
    let income = 0;
    if (input.personalServiceSplit) {
      const below = Math.min(revenue, PERSONAL_SERVICE_THRESHOLD);
      const above = Math.max(0, revenue - PERSONAL_SERVICE_THRESHOLD);
      const belowIncome = below - amountByPercent(below, adjusted.percent);
      const aboveIncome = above - amountByPercent(above, adjusted.excess);
      income = belowIncome + aboveIncome;
      lines.push(
        `인적용역은 ${PERSONAL_SERVICE_THRESHOLD.toLocaleString("ko-KR")}원까지 기본율 ${adjusted.percent}%, 초과분 ${adjusted.excess}%입니다.`,
      );
    } else {
      income = revenue - amountByPercent(revenue, adjusted.percent);
      lines.push(`적용 단순경비율 ${adjusted.percent}%`);
    }
    return { income: Math.max(0, income), revenue, lines };
  }

  const revenue = Math.max(0, won(input.revenue));
  let standardPercent = input.standardPercent;
  const lines = [
    "① 수입금액 − 주요경비 − (수입금액 × 기준경비율)",
    "② {수입금액 − (수입금액 × 단순경비율)} × 배율",
    "소득금액은 ①과 ② 중 작은 금액입니다. ①이 0보다 작으면 0으로 둡니다.",
  ];
  if (input.selfOwned && !input.selfRateExcluded) {
    standardPercent = roundPercent1(standardPercent + 0.4);
    lines.push("자가 사업자 기준경비율은 일반율에 0.4를 더합니다. 안내 계산례 11.6은 12.0입니다.");
  }
  if (input.duty === "double-entry") {
    standardPercent = roundPercent1(standardPercent / 2);
    lines.push("복식부기의무자 추계는 기준경비율의 1/2를 기타경비에 적용합니다.");
  }
  const major = won(input.openingInventoryMajor) + won(input.majorExpenses) - won(input.closingInventoryMajor);
  lines.push("주요경비 = 기초재고 포함분 + 당기 지출 − 기말재고 포함분");
  const standardExpense = amountByPercent(revenue, standardPercent);
  const baseIncome = Math.max(0, revenue - major - standardExpense);
  const simpleIncome = revenue - amountByPercent(revenue, input.simplePercent);
  const multiplier = multiplierFor(input.multiplierPeriodId, input.duty);
  const comparison = won(simpleIncome * multiplier);
  const income = Math.min(baseIncome, comparison);
  lines.push(`적용 기준경비율 ${standardPercent}%, 배율 ${multiplier}배, 비교용 단순경비율 ${input.simplePercent}%`);
  return { income, revenue, lines };
}

export function computeOtherIncome(input: OtherIncomeInput): { income: number; lines: string[] } {
  if (input.method === "amount") {
    return { income: Math.max(0, won(input.income)), lines: ["기타소득금액을 입력값 그대로 사용합니다."] };
  }
  const gross = Math.max(0, won(input.gross));
  const income = gross - amountByPercent(gross, input.expensePercent);
  return {
    income: Math.max(0, income),
    lines: ["기타소득금액 = 총지급액 − (총지급액 × 필요경비율). 강연료 안내는 필요경비율 60%입니다."],
  };
}

function noFilingPenalty(kind: NoFilingKind, unreportedTax: number, revenue: number): number {
  const base = Math.max(0, won(unreportedTax));
  const receipts = Math.max(0, won(revenue));
  const twenty = amountByPercent(base, 20);
  const forty = amountByPercent(base, 40);
  const sixty = amountByPercent(base, 60);
  const revenue007 = won((receipts * 7) / 10_000);
  const revenue014 = won((receipts * 14) / 10_000);
  switch (kind) {
    case "none":
      return 0;
    case "general":
      return twenty;
    case "double-entry":
      return Math.max(twenty, revenue007);
    case "fraud":
      return forty;
    case "fraud-double":
      return Math.max(forty, revenue014);
    case "fraud-international":
      return sixty;
    case "fraud-international-double":
      return Math.max(sixty, revenue014);
    default:
      return 0;
  }
}

export function computePenalties(args: {
  calculatedTax: number;
  taxAfterCredits: number;
  comprehensiveIncome: number;
  penalties: PenaltyInput;
}): PenaltyDetail {
  const { penalties } = args;
  const noFiling = noFilingPenalty(penalties.noFiling, args.taxAfterCredits, penalties.noFilingRevenue);
  const understatement = amountByPercent(Math.max(0, penalties.underreportedTax), 10);
  const bookkeeping =
    args.comprehensiveIncome > 0
      ? won((args.calculatedTax * Math.max(0, penalties.unbookedIncome) * 0.2) / args.comprehensiveIncome)
      : 0;
  const filingSide = Math.max(noFiling, understatement);
  const grouped = Math.max(filingSide, bookkeeping);
  let groupedLabel = "가산세 없음";
  if (grouped > 0 && bookkeeping > filingSide) {
    groupedLabel = "장부 기록·보관 불성실가산세가 무신고·과소신고보다 커서 그 금액을 적용";
  } else if (grouped > 0 && bookkeeping === filingSide && bookkeeping > 0) {
    groupedLabel = "무신고·과소신고가산세와 장부 불성실가산세가 같아 무신고·과소신고가산세만 적용";
  } else if (noFiling > 0 && noFiling >= understatement) {
    groupedLabel = "무신고가산세";
  } else if (understatement > 0) {
    groupedLabel = "과소신고가산세";
  }

  let sincere = 0;
  if (penalties.sincereFilingMissing) {
    const byTax =
      args.comprehensiveIncome > 0
        ? won((args.calculatedTax * Math.max(0, penalties.sincereBusinessIncome) * 0.05) / args.comprehensiveIncome)
        : 0;
    const byRevenue = won((Math.max(0, penalties.sincereBusinessRevenue) * 2) / 10_000);
    sincere = Math.max(byTax, byRevenue);
  }
  const latePayment = won((Math.max(0, penalties.lateUnpaidTax) * Math.max(0, penalties.lateDays) * 2.2) / 10_000);
  return {
    noFiling,
    understatement,
    bookkeeping,
    grouped,
    groupedLabel,
    sincere,
    latePayment,
    total: grouped + sincere + latePayment,
  };
}

export function emptyPenalties(): PenaltyInput {
  return {
    noFiling: "none",
    noFilingRevenue: 0,
    underreportedTax: 0,
    unbookedIncome: 0,
    sincereFilingMissing: false,
    sincereBusinessIncome: 0,
    sincereBusinessRevenue: 0,
    lateUnpaidTax: 0,
    lateDays: 0,
  };
}

export function emptyFinancialComparison(): FinancialIncomeComparison {
  return {
    total: 0,
    excluded: 0,
    included: 0,
    compared: false,
    method1Progressive: 0,
    method1Flat: 0,
    method1: 0,
    method2Financial: 0,
    method2Other: 0,
    method2: 0,
    chosen: "none",
  };
}

/**
 * 소득세법 제62조.
 * 이자·배당 합계가 종합과세기준금액(2천만 원)을 넘으면 다음 중 큰 금액이 산출세액입니다.
 * 1호: (초과분 + 다른 종합소득 − 소득공제)의 산출세액 + 2천만 원 × 14%
 * 2호: 금융소득 전체 × 14% + (다른 종합소득 − 소득공제, 0 미만이면 0)의 산출세액
 * 2천만 원 이하인 원천징수 이자·배당은 과세표준에 합산하지 않습니다.
 * 비영업대금 25%, 원천징수되지 않은 이자·배당, 출자공동사업자 배당, 배당가산은 넣지 않습니다.
 */
export function computeFinancialIncomeComparison(args: {
  interestIncome: number;
  dividendIncome: number;
  otherIncome: number;
  incomeDeductions: number;
  year: AttributionYear;
  /** 2천만 원 초과분 중 이월결손금·사업결손으로 줄어든 금액. 14% 비교 기준은 줄이지 않습니다. */
  lossOffsetOnIncluded?: number;
}): FinancialIncomeComparison {
  const total = Math.max(0, won(args.interestIncome)) + Math.max(0, won(args.dividendIncome));
  const otherIncome = Math.max(0, won(args.otherIncome));
  const deductions = Math.max(0, won(args.incomeDeductions));
  if (total <= FINANCIAL_INCOME_THRESHOLD) {
    return { ...emptyFinancialComparison(), total, excluded: total };
  }
  const included = total - FINANCIAL_INCOME_THRESHOLD;
  const includedAfterLoss = Math.max(0, included - Math.max(0, won(args.lossOffsetOnIncluded ?? 0)));
  const method1Progressive = computeCalculatedTax(Math.max(0, includedAfterLoss + otherIncome - deductions), args.year).tax;
  const method1Flat = amountByPercent(FINANCIAL_INCOME_THRESHOLD, FINANCIAL_INCOME_WITHHOLDING_RATE * 100);
  const method1 = method1Progressive + method1Flat;
  const method2Financial = amountByPercent(total, FINANCIAL_INCOME_WITHHOLDING_RATE * 100);
  const method2Other = computeCalculatedTax(Math.max(0, otherIncome - deductions), args.year).tax;
  const method2 = method2Financial + method2Other;
  return {
    total,
    excluded: FINANCIAL_INCOME_THRESHOLD,
    included,
    compared: true,
    method1Progressive,
    method1Flat,
    method1,
    method2Financial,
    method2Other,
    method2,
    chosen: method1 >= method2 ? "method1" : "method2",
  };
}

export function computeComprehensiveIncomeTax(input: ComprehensiveIncomeTaxInput): ComprehensiveIncomeTaxResult {
  const business = input.useDirectTaxBase
    ? { income: 0, revenue: 0, lines: [] }
    : computeBusinessIncome(input.business);
  const other = input.useDirectTaxBase
    ? { income: 0, lines: [] }
    : computeOtherIncome(input.other);
  const otherIncomeSeparated =
    !input.useDirectTaxBase &&
    other.income > 0 &&
    other.income <= OTHER_INCOME_SEPARATE_LIMIT &&
    input.other.includeInAggregate !== true;
  const otherForAggregate = otherIncomeSeparated ? 0 : other.income;
  const privatePensionSeparateTax = input.privatePensionSeparate
    ? amountByPercent(Math.max(0, input.privatePensionAmount), PRIVATE_PENSION_SEPARATE_RATE * 100)
    : 0;
  const pensionInAggregate = input.privatePensionSeparate ? input.pensionIncome : input.pensionIncome + Math.max(0, input.privatePensionAmount);

  const interestIncome = Math.max(0, won(input.interestIncome));
  const dividendIncome = Math.max(0, won(input.dividendIncome));
  const wageIncome = Math.max(0, won(input.wageIncome));
  const pensionIncome = Math.max(0, won(pensionInAggregate));
  const financialTotal = interestIncome + dividendIncome;
  const financialExcludedPreview = financialTotal <= FINANCIAL_INCOME_THRESHOLD ? financialTotal : FINANCIAL_INCOME_THRESHOLD;
  const financialIncludedPreview = financialTotal - financialExcludedPreview;
  const losses = input.useDirectTaxBase
    ? applyIncomeLosses({
        rentalIncome: 0,
        businessIncome: 0,
        otherNonFinancial: 0,
        financialIncluded: 0,
        rentalCarryforward: 0,
        otherCarryforward: 0,
      })
    : applyIncomeLosses({
        rentalIncome: input.rentalIncome,
        businessIncome: business.income,
        otherNonFinancial: wageIncome + pensionIncome + otherForAggregate,
        financialIncluded: financialIncludedPreview,
        rentalCarryforward: input.rentalLossCarryforward,
        otherCarryforward: input.otherLossCarryforward,
      });
  const businessForAggregate = Math.max(0, business.income - losses.businessCarryUsed);
  const otherAfterLoss = wageIncome + pensionIncome + otherForAggregate - losses.lossUsedOnOther;
  const nonFinancialAfterLoss = losses.rentalForAggregate + businessForAggregate + otherAfterLoss;
  const comprehensiveIncome = input.useDirectTaxBase
    ? 0
    : financialTotal - losses.lossUsedOnFinancial + nonFinancialAfterLoss;

  const personal = input.useDirectTaxBase
    ? computePersonalDeduction(emptyPersonalDeduction(), 0)
    : computePersonalDeduction(input.personal, comprehensiveIncome);
  const otherDeductions = input.useDirectTaxBase ? 0 : Math.max(0, won(input.incomeDeductions));
  const incomeDeductions = personal.total + otherDeductions;
  const financial = input.useDirectTaxBase
    ? emptyFinancialComparison()
    : computeFinancialIncomeComparison({
        interestIncome,
        dividendIncome,
        otherIncome: nonFinancialAfterLoss,
        incomeDeductions,
        year: input.year,
        lossOffsetOnIncluded: losses.lossUsedOnFinancial,
      });
  const taxBase = input.useDirectTaxBase
    ? Math.max(0, won(input.directTaxBase))
    : Math.max(0, comprehensiveIncome - financial.excluded - incomeDeductions);
  const progressive = computeCalculatedTax(taxBase, input.year);
  const calculated = financial.compared
    ? { ...progressive, tax: financial.chosen === "method1" ? financial.method1 : financial.method2 }
    : progressive;
  const childCreditCount = input.useDirectTaxBase
    ? 0
    : Math.min(Math.max(0, Math.floor(input.childCreditCount)), Math.max(0, Math.floor(input.personal.dependentCount)));
  const childTaxCredit = computeChildTaxCredit(childCreditCount);
  const standardTaxCredit = input.useDirectTaxBase
    ? 0
    : computeStandardTaxCredit({
        apply: input.standardTaxCredit,
        sincereBusiness: input.sincereBusiness,
        wageIncome,
      });
  const aggregatedForPension = Math.max(0, comprehensiveIncome - (input.useDirectTaxBase ? 0 : financial.excluded));
  const pensionAccount = input.useDirectTaxBase
    ? { contribution: 0, rate: 0, credit: 0 }
    : computePensionAccountCredit({
        pensionSaving: input.pensionSaving,
        retirementPension: input.retirementPension,
        aggregatedIncome: aggregatedForPension,
      });
  const enteredTaxCredits = Math.max(0, won(input.taxCredits));
  const taxCredits = enteredTaxCredits + childTaxCredit + standardTaxCredit + pensionAccount.credit;
  const taxAfterCredits = Math.max(0, calculated.tax - taxCredits);
  const penalties = computePenalties({
    calculatedTax: calculated.tax,
    taxAfterCredits,
    comprehensiveIncome: input.useDirectTaxBase ? 0 : comprehensiveIncome,
    penalties: input.penalties,
  });
  const withholdingIncomeTax = Math.max(0, won(input.withholdingIncomeTax));
  const interimPrepayment = Math.max(0, won(input.interimPrepayment));
  const occasionalAssessment = Math.max(0, won(input.occasionalAssessment));
  const prepaidTotal = withholdingIncomeTax + interimPrepayment + occasionalAssessment;
  const nationalNet = taxAfterCredits + penalties.total - prepaidTotal;

  return {
    year: input.year,
    useDirectTaxBase: input.useDirectTaxBase,
    interestIncome,
    dividendIncome,
    financial,
    business,
    losses,
    wageIncome: Math.max(0, won(input.wageIncome)),
    pensionIncome: Math.max(0, won(pensionInAggregate)),
    otherIncome: other.income,
    otherIncomeSeparated,
    otherLines: other.lines,
    privatePensionSeparateTax,
    comprehensiveIncome,
    personal,
    incomeDeductions,
    calculated,
    childTaxCredit,
    childCreditCount,
    standardTaxCredit,
    pensionAccountCredit: pensionAccount.credit,
    pensionContributionUsed: pensionAccount.contribution,
    pensionCreditRate: pensionAccount.rate,
    enteredTaxCredits,
    taxCredits,
    taxAfterCredits,
    penalties,
    withholdingIncomeTax,
    interimPrepayment,
    occasionalAssessment,
    prepaidTotal,
    nationalNet,
    separatePensionNet: privatePensionSeparateTax,
  };
}

export function withholdingFromServiceRevenue(revenue: number): { incomeTax: number; localTax: number } {
  const base = Math.max(0, won(revenue));
  return {
    incomeTax: amountByPercent(base, WITHHOLDING_INCOME_TAX_RATE * 100),
    localTax: amountByPercent(base, WITHHOLDING_LOCAL_TAX_RATE * 100),
  };
}

/** 2천만 원 초과분의 50% 이내. 안내 사례는 50%를 10원 단위로 버린 금액입니다. */
export function interimInstallment(tax: number): InterimInstallment | null {
  const amount = won(tax);
  if (amount <= INTERIM_INSTALLMENT_FLOOR) return null;
  if (amount <= INTERIM_INSTALLMENT_HALF_FROM) {
    const deferrable = amount - INTERIM_INSTALLMENT_FLOOR;
    return { deferrable, dueByNovember30: INTERIM_INSTALLMENT_FLOOR };
  }
  const deferrable = Math.floor(amount / 2 / 10) * 10;
  return { deferrable, dueByNovember30: amount - deferrable };
}

export function computeInterimNotice(input: InterimNoticeInput): InterimNoticeResult {
  const base =
    won(input.priorInterim) +
    won(input.finalSelfPayment) +
    won(input.additionalAssessment) +
    won(input.lateOrAmendedPayment) -
    won(input.refund);
  const tax = won(base / 2) - won(input.landPrepayment);
  const belowMinimum = tax > 0 && tax < INTERIM_MINIMUM;
  return {
    base,
    tax,
    belowMinimum,
    installment: belowMinimum || tax <= 0 ? null : interimInstallment(tax),
  };
}

export function computeInterimEstimate(input: InterimEstimateInput): InterimEstimateResult {
  const taxBase = won(input.periodIncome) * 2 - won(input.lossCarryforward) - won(input.incomeDeductions);
  const calculated = computeCalculatedTax(taxBase, input.year);
  const estimate = won(calculated.tax / 2) - won(input.subtractions);
  const thirtyPercentOfBase = won((input.noticeBase * 30) / 100);
  const belowMinimum = estimate > 0 && estimate < INTERIM_MINIMUM;
  return {
    taxBase: Math.max(0, taxBase),
    calculatedTax: calculated.tax,
    estimate,
    belowMinimum,
    underThirtyPercentOfBase: input.noticeBase > 0 && estimate < thirtyPercentOfBase,
    thirtyPercentOfBase,
    installment: belowMinimum || estimate <= 0 ? null : interimInstallment(estimate),
  };
}
