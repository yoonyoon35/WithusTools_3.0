/**
 * 종합부동산세·재산세 통합 계산
 * 근거: 국세청 「세액계산 흐름도」「궁금해요 종합부동산 세법」,
 *       종합부동산세법 시행령 제4조의2·제5조의3(공제할 재산세액),
 *       지방세법(재산세·지방교육세)
 */

export type HouseCount = "1" | "2" | "3+";
export type TaxpayerType = "individual" | "corporate";
export type FairMarketRatioPercent = 60 | 80 | 100;

export interface TaxBracket {
  maxBase: number;
  rate: number;
  progressiveDeduction: number;
}

export interface ComprehensivePropertyTaxInput {
  housingOfficialPrice: number;
  comprehensiveLandOfficialPrice: number;
  separateLandOfficialPrice: number;
  taxpayerType: TaxpayerType;
  houseCount: HouseCount;
  isOneHouseholdOneHome: boolean;
  fairMarketRatioPercent: FairMarketRatioPercent;
  age: number | null;
  holdingYears: number | null;
  priorYearPropertyAndCptTax: number | null;
  currentYearPropertyTax: number | null;
}

export interface PropertyTaxCategoryBreakdown {
  officialPrice: number;
  taxBase: number;
  propertyTaxFairRatio: number;
  appliedRate: number;
  progressiveDeduction: number;
  propertyTax: number;
  localEducationTax: number;
  propertyTaxStandardAmount: number;
}

export interface CategoryTaxBreakdown {
  officialPrice: number;
  basicDeduction: number;
  taxableBase: number;
  appliedRate: number;
  progressiveDeduction: number;
  grossComprehensiveTax: number;
  propertyTaxDetail: PropertyTaxCategoryBreakdown;
  propertyTaxCreditStandardAmount: number;
  propertyTaxCredit: number;
  outputTax: number;
  isTaxable: boolean;
}

export interface ComprehensivePropertyTaxResult {
  housing: CategoryTaxBreakdown;
  comprehensiveLand: CategoryTaxBreakdown;
  separateLand: CategoryTaxBreakdown;
  totalPropertyTax: number;
  totalLocalEducationTax: number;
  totalPropertyTaxWithEducation: number;
  outputTaxBeforeRelief: number;
  ageHoldingReliefRate: number;
  ageHoldingReliefAmount: number;
  outputTaxAfterAgeRelief: number;
  burdenCapExcessReduction: number;
  comprehensiveTaxAfterBurdenCap: number;
  ruralSpecialTax: number;
  totalComprehensivePayable: number;
  totalAnnualHoldingTax: number;
  installmentEligible: boolean;
  installmentDeferrableAmount: number;
  propertyTaxDueDateNote: string;
  comprehensiveTaxDueDateNote: string;
}

export const HOUSING_BASIC_DEDUCTION_DEFAULT = 900_000_000;
export const HOUSING_BASIC_DEDUCTION_ONE_HOME = 1_200_000_000;
export const COMPREHENSIVE_LAND_BASIC_DEDUCTION = 500_000_000;
export const SEPARATE_LAND_BASIC_DEDUCTION = 8_000_000_000;

export const HOUSING_FAIR_MARKET_RATIO = 0.6;
export const LAND_FAIR_MARKET_RATIO = 1;
/** 일반 주택 재산세 공정시장가액비율 */
export const PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT = 0.6;
/** 1세대 1주택 재산세 공정시장가액비율(국세청: 43~45%, 실무·신고서 기준 45%) */
export const PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME = 0.45;
export const PROPERTY_TAX_LAND_FAIR_RATIO = 0.7;
export const PROPERTY_TAX_ONE_HOME_SPECIAL_PRICE_CAP = 900_000_000;
export const PROPERTY_TAX_ONE_HOME_SPECIAL_RATE = 0.0005;
export const LOCAL_EDUCATION_TAX_RATE = 0.2;
export const RURAL_SPECIAL_TAX_RATE = 0.2;
export const TAX_BURDEN_CAP_RATE = 1.5;
export const INSTALLMENT_THRESHOLD = 2_500_000;
export const MAX_AGE_HOLDING_RELIEF_RATE = 0.8;

/** 주택 재산세 표준세율 최고 구간(신고서 별지3호 부표 ⑨란·지방세법) */
export const PROPERTY_TAX_HOUSING_TOP_STANDARD_RATE = 0.004;
export const PROPERTY_TAX_COMPREHENSIVE_LAND_TOP_STANDARD_RATE = 0.005;
export const PROPERTY_TAX_SEPARATE_LAND_TOP_STANDARD_RATE = 0.004;

export const HOUSING_BRACKETS_TWO_OR_LESS: TaxBracket[] = [
  { maxBase: 300_000_000, rate: 0.005, progressiveDeduction: 0 },
  { maxBase: 600_000_000, rate: 0.007, progressiveDeduction: 600_000 },
  { maxBase: 1_200_000_000, rate: 0.01, progressiveDeduction: 2_400_000 },
  { maxBase: 2_500_000_000, rate: 0.013, progressiveDeduction: 6_000_000 },
  { maxBase: 5_000_000_000, rate: 0.015, progressiveDeduction: 11_000_000 },
  { maxBase: 9_400_000_000, rate: 0.02, progressiveDeduction: 36_000_000 },
  { maxBase: Number.POSITIVE_INFINITY, rate: 0.027, progressiveDeduction: 118_000_000 },
];

export const HOUSING_BRACKETS_THREE_OR_MORE: TaxBracket[] = [
  { maxBase: 300_000_000, rate: 0.005, progressiveDeduction: 0 },
  { maxBase: 600_000_000, rate: 0.007, progressiveDeduction: 600_000 },
  { maxBase: 1_200_000_000, rate: 0.01, progressiveDeduction: 2_400_000 },
  { maxBase: 2_500_000_000, rate: 0.02, progressiveDeduction: 14_400_000 },
  { maxBase: 5_000_000_000, rate: 0.03, progressiveDeduction: 39_400_000 },
  { maxBase: 9_400_000_000, rate: 0.04, progressiveDeduction: 89_400_000 },
  { maxBase: Number.POSITIVE_INFINITY, rate: 0.05, progressiveDeduction: 183_400_000 },
];

export const CORPORATE_HOUSING_RATE_TWO_OR_LESS = 0.027;
export const CORPORATE_HOUSING_RATE_THREE_OR_MORE = 0.05;

export const COMPREHENSIVE_LAND_BRACKETS: TaxBracket[] = [
  { maxBase: 1_500_000_000, rate: 0.01, progressiveDeduction: 0 },
  { maxBase: 4_500_000_000, rate: 0.02, progressiveDeduction: 15_000_000 },
  { maxBase: Number.POSITIVE_INFINITY, rate: 0.03, progressiveDeduction: 60_000_000 },
];

export const SEPARATE_LAND_BRACKETS: TaxBracket[] = [
  { maxBase: 20_000_000_000, rate: 0.005, progressiveDeduction: 0 },
  { maxBase: 40_000_000_000, rate: 0.006, progressiveDeduction: 20_000_000 },
  { maxBase: Number.POSITIVE_INFINITY, rate: 0.007, progressiveDeduction: 60_000_000 },
];

export const PROPERTY_TAX_HOUSING_BRACKETS: TaxBracket[] = [
  { maxBase: 60_000_000, rate: 0.001, progressiveDeduction: 0 },
  { maxBase: 150_000_000, rate: 0.0015, progressiveDeduction: 30_000 },
  { maxBase: 300_000_000, rate: 0.0025, progressiveDeduction: 180_000 },
  { maxBase: Number.POSITIVE_INFINITY, rate: 0.004, progressiveDeduction: 630_000 },
];

export const PROPERTY_TAX_COMPREHENSIVE_LAND_BRACKETS: TaxBracket[] = [
  { maxBase: 50_000_000, rate: 0.002, progressiveDeduction: 0 },
  { maxBase: 100_000_000, rate: 0.003, progressiveDeduction: 50_000 },
  { maxBase: Number.POSITIVE_INFINITY, rate: 0.005, progressiveDeduction: 250_000 },
];

export const PROPERTY_TAX_SEPARATE_LAND_BRACKETS: TaxBracket[] = [
  { maxBase: 200_000_000, rate: 0.002, progressiveDeduction: 0 },
  { maxBase: 1_000_000_000, rate: 0.003, progressiveDeduction: 200_000 },
  { maxBase: Number.POSITIVE_INFINITY, rate: 0.004, progressiveDeduction: 1_200_000 },
];

export function getHousingBasicDeduction(
  taxpayerType: TaxpayerType,
  isOneHouseholdOneHome: boolean,
): number {
  if (taxpayerType === "corporate") return 0;
  return isOneHouseholdOneHome ? HOUSING_BASIC_DEDUCTION_ONE_HOME : HOUSING_BASIC_DEDUCTION_DEFAULT;
}

export function getHousingPropertyTaxFairRatio(
  taxpayerType: TaxpayerType,
  isOneHouseholdOneHome: boolean,
): number {
  if (taxpayerType === "individual" && isOneHouseholdOneHome) {
    return PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME;
  }
  return PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT;
}

export function getHousingTaxBrackets(
  taxpayerType: TaxpayerType,
  houseCount: HouseCount,
): TaxBracket[] | "flat" {
  if (taxpayerType === "corporate") return "flat";
  return houseCount === "3+" ? HOUSING_BRACKETS_THREE_OR_MORE : HOUSING_BRACKETS_TWO_OR_LESS;
}

export function getAppliedBracket(taxBase: number, brackets: TaxBracket[]): TaxBracket {
  for (const bracket of brackets) {
    if (taxBase <= bracket.maxBase) return bracket;
  }
  return brackets[brackets.length - 1];
}

export function calcProgressiveTax(taxBase: number, brackets: TaxBracket[]): number {
  if (taxBase <= 0) return 0;
  const bracket = getAppliedBracket(taxBase, brackets);
  return Math.max(0, Math.round(taxBase * bracket.rate - bracket.progressiveDeduction));
}

export function calcCorporateFlatTax(taxBase: number, houseCount: HouseCount): number {
  if (taxBase <= 0) return 0;
  const rate =
    houseCount === "3+" ? CORPORATE_HOUSING_RATE_THREE_OR_MORE : CORPORATE_HOUSING_RATE_TWO_OR_LESS;
  return Math.round(taxBase * rate);
}

function calcTaxableBase(officialPrice: number, basicDeduction: number, fairRatio: number): number {
  const excess = Math.max(0, officialPrice - basicDeduction);
  return Math.round(excess * fairRatio);
}

/**
 * 재산세(누진) + 지방교육세(20%)
 * 1세대 1주택·공시가격 9억 이하: 주택분 0.05% 단일세율(지방세법·국세청)
 */
export function calcPropertyTax(params: {
  officialPrice: number;
  propertyTaxBrackets: TaxBracket[];
  propertyTaxFairRatio: number;
  useOneHomeSpecialRate: boolean;
}): PropertyTaxCategoryBreakdown {
  if (params.officialPrice <= 0) {
    return {
      officialPrice: 0,
      taxBase: 0,
      propertyTaxFairRatio: params.propertyTaxFairRatio,
      appliedRate: 0,
      progressiveDeduction: 0,
      propertyTax: 0,
      localEducationTax: 0,
      propertyTaxStandardAmount: 0,
    };
  }

  const taxBase = Math.round(params.officialPrice * params.propertyTaxFairRatio);

  if (params.useOneHomeSpecialRate && params.officialPrice <= PROPERTY_TAX_ONE_HOME_SPECIAL_PRICE_CAP) {
    const propertyTax = Math.round(taxBase * PROPERTY_TAX_ONE_HOME_SPECIAL_RATE);
    return {
      officialPrice: params.officialPrice,
      taxBase,
      propertyTaxFairRatio: params.propertyTaxFairRatio,
      appliedRate: PROPERTY_TAX_ONE_HOME_SPECIAL_RATE,
      progressiveDeduction: 0,
      propertyTax,
      localEducationTax: Math.round(propertyTax * LOCAL_EDUCATION_TAX_RATE),
      propertyTaxStandardAmount: propertyTax,
    };
  }

  const propertyTaxStandardAmount = calcProgressiveTax(taxBase, params.propertyTaxBrackets);
  const bracket = getAppliedBracket(taxBase, params.propertyTaxBrackets);

  return {
    officialPrice: params.officialPrice,
    taxBase,
    propertyTaxFairRatio: params.propertyTaxFairRatio,
    appliedRate: bracket.rate,
    progressiveDeduction: bracket.progressiveDeduction,
    propertyTax: propertyTaxStandardAmount,
    localEducationTax: Math.round(propertyTaxStandardAmount * LOCAL_EDUCATION_TAX_RATE),
    propertyTaxStandardAmount,
  };
}

/**
 * 종합부동산세법 시행령 제4조의2·제5조의3
 * 공제할 재산세 표준세액 = (공시가격−공제금액) × 종부세공정 × 재산세공정 × 해당 표준세율
 * (종합부동산세 신고서 별지3호 부표(2) ⑨란 — 주택 0.4%, 종합합산토지 0.5%, 별도합산 0.4%)
 *
 * 실제 공제액 = 재산세(표준세액) × (공제 표준세액 / 전체 표준세액)
 */
function calcPropertyTaxCreditStandardAmount(params: {
  officialPrice: number;
  basicDeduction: number;
  cptFairRatio: number;
  propertyTaxFairRatio: number;
  topStandardRate: number;
}): number {
  const excess = Math.max(0, params.officialPrice - params.basicDeduction);
  if (excess <= 0) return 0;

  return Math.round(
    excess * params.cptFairRatio * params.propertyTaxFairRatio * params.topStandardRate,
  );
}

function calcPropertyTaxCredit(params: {
  propertyTaxDetail: PropertyTaxCategoryBreakdown;
  creditStandardAmount: number;
}): number {
  const { propertyTaxDetail, creditStandardAmount } = params;
  if (creditStandardAmount <= 0 || propertyTaxDetail.propertyTaxStandardAmount <= 0) return 0;

  const credit = Math.round(
    propertyTaxDetail.propertyTax *
      (creditStandardAmount / propertyTaxDetail.propertyTaxStandardAmount),
  );

  return Math.min(credit, propertyTaxDetail.propertyTax);
}

function calcAgeHoldingReliefRate(age: number | null, holdingYears: number | null): number {
  let ageRate = 0;
  if (age != null) {
    if (age >= 70) ageRate = 0.4;
    else if (age >= 65) ageRate = 0.3;
    else if (age >= 60) ageRate = 0.2;
  }

  let holdingRate = 0;
  if (holdingYears != null) {
    if (holdingYears >= 15) holdingRate = 0.5;
    else if (holdingYears >= 10) holdingRate = 0.4;
    else if (holdingYears >= 5) holdingRate = 0.2;
  }

  return Math.min(MAX_AGE_HOLDING_RELIEF_RATE, ageRate + holdingRate);
}

function calcInstallmentDeferrable(comprehensiveTaxPayable: number): number {
  if (comprehensiveTaxPayable <= INSTALLMENT_THRESHOLD) return 0;
  if (comprehensiveTaxPayable <= 5_000_000) return comprehensiveTaxPayable - INSTALLMENT_THRESHOLD;
  return Math.floor(comprehensiveTaxPayable * 0.5);
}

function calcCategoryTax(params: {
  officialPrice: number;
  basicDeduction: number;
  cptFairRatio: number;
  brackets: TaxBracket[] | "flat";
  houseCount: HouseCount;
  propertyTaxBrackets: TaxBracket[];
  propertyTaxFairRatio: number;
  propertyTaxCreditTopRate: number;
  useOneHomeSpecialPropertyRate: boolean;
}): CategoryTaxBreakdown {
  const propertyTaxDetail = calcPropertyTax({
    officialPrice: params.officialPrice,
    propertyTaxBrackets: params.propertyTaxBrackets,
    propertyTaxFairRatio: params.propertyTaxFairRatio,
    useOneHomeSpecialRate: params.useOneHomeSpecialPropertyRate,
  });

  const taxableBase = calcTaxableBase(params.officialPrice, params.basicDeduction, params.cptFairRatio);
  const isTaxable = taxableBase > 0;

  let grossComprehensiveTax = 0;
  let appliedRate = 0;
  let progressiveDeduction = 0;

  if (isTaxable) {
    if (params.brackets === "flat") {
      appliedRate =
        params.houseCount === "3+"
          ? CORPORATE_HOUSING_RATE_THREE_OR_MORE
          : CORPORATE_HOUSING_RATE_TWO_OR_LESS;
      grossComprehensiveTax = calcCorporateFlatTax(taxableBase, params.houseCount);
    } else {
      const bracket = getAppliedBracket(taxableBase, params.brackets);
      appliedRate = bracket.rate;
      progressiveDeduction = bracket.progressiveDeduction;
      grossComprehensiveTax = calcProgressiveTax(taxableBase, params.brackets);
    }
  }

  const propertyTaxCreditStandardAmount = calcPropertyTaxCreditStandardAmount({
    officialPrice: params.officialPrice,
    basicDeduction: params.basicDeduction,
    cptFairRatio: params.cptFairRatio,
    propertyTaxFairRatio: params.propertyTaxFairRatio,
    topStandardRate: params.propertyTaxCreditTopRate,
  });

  const propertyTaxCredit = calcPropertyTaxCredit({
    propertyTaxDetail,
    creditStandardAmount: propertyTaxCreditStandardAmount,
  });

  const outputTax = Math.max(0, grossComprehensiveTax - propertyTaxCredit);

  return {
    officialPrice: params.officialPrice,
    basicDeduction: params.basicDeduction,
    taxableBase,
    appliedRate,
    progressiveDeduction,
    grossComprehensiveTax,
    propertyTaxDetail,
    propertyTaxCreditStandardAmount,
    propertyTaxCredit,
    outputTax,
    isTaxable,
  };
}

export function computeComprehensivePropertyTax(
  input: ComprehensivePropertyTaxInput,
): ComprehensivePropertyTaxResult {
  const cptFairRatio = input.fairMarketRatioPercent / 100;
  const housingBasicDeduction = getHousingBasicDeduction(input.taxpayerType, input.isOneHouseholdOneHome);
  const housingPropertyTaxFairRatio = getHousingPropertyTaxFairRatio(
    input.taxpayerType,
    input.isOneHouseholdOneHome,
  );
  const housingBrackets = getHousingTaxBrackets(input.taxpayerType, input.houseCount);
  const useOneHomeSpecialPropertyRate =
    input.isOneHouseholdOneHome &&
    input.taxpayerType === "individual" &&
    input.housingOfficialPrice <= PROPERTY_TAX_ONE_HOME_SPECIAL_PRICE_CAP;

  const housing = calcCategoryTax({
    officialPrice: input.housingOfficialPrice,
    basicDeduction: housingBasicDeduction,
    cptFairRatio,
    brackets: housingBrackets,
    houseCount: input.houseCount,
    propertyTaxBrackets: PROPERTY_TAX_HOUSING_BRACKETS,
    propertyTaxFairRatio: housingPropertyTaxFairRatio,
    propertyTaxCreditTopRate: PROPERTY_TAX_HOUSING_TOP_STANDARD_RATE,
    useOneHomeSpecialPropertyRate,
  });

  const comprehensiveLand = calcCategoryTax({
    officialPrice: input.comprehensiveLandOfficialPrice,
    basicDeduction: COMPREHENSIVE_LAND_BASIC_DEDUCTION,
    cptFairRatio: LAND_FAIR_MARKET_RATIO,
    brackets: COMPREHENSIVE_LAND_BRACKETS,
    houseCount: input.houseCount,
    propertyTaxBrackets: PROPERTY_TAX_COMPREHENSIVE_LAND_BRACKETS,
    propertyTaxFairRatio: PROPERTY_TAX_LAND_FAIR_RATIO,
    propertyTaxCreditTopRate: PROPERTY_TAX_COMPREHENSIVE_LAND_TOP_STANDARD_RATE,
    useOneHomeSpecialPropertyRate: false,
  });

  const separateLand = calcCategoryTax({
    officialPrice: input.separateLandOfficialPrice,
    basicDeduction: SEPARATE_LAND_BASIC_DEDUCTION,
    cptFairRatio: LAND_FAIR_MARKET_RATIO,
    brackets: SEPARATE_LAND_BRACKETS,
    houseCount: input.houseCount,
    propertyTaxBrackets: PROPERTY_TAX_SEPARATE_LAND_BRACKETS,
    propertyTaxFairRatio: PROPERTY_TAX_LAND_FAIR_RATIO,
    propertyTaxCreditTopRate: PROPERTY_TAX_SEPARATE_LAND_TOP_STANDARD_RATE,
    useOneHomeSpecialPropertyRate: false,
  });

  const totalPropertyTax =
    housing.propertyTaxDetail.propertyTax +
    comprehensiveLand.propertyTaxDetail.propertyTax +
    separateLand.propertyTaxDetail.propertyTax;

  const totalLocalEducationTax =
    housing.propertyTaxDetail.localEducationTax +
    comprehensiveLand.propertyTaxDetail.localEducationTax +
    separateLand.propertyTaxDetail.localEducationTax;

  const totalPropertyTaxWithEducation = totalPropertyTax + totalLocalEducationTax;

  const outputTaxBeforeRelief =
    housing.outputTax + comprehensiveLand.outputTax + separateLand.outputTax;

  const ageHoldingReliefRate =
    input.taxpayerType === "individual" && input.isOneHouseholdOneHome
      ? calcAgeHoldingReliefRate(input.age, input.holdingYears)
      : 0;

  const ageHoldingReliefAmount = Math.round(outputTaxBeforeRelief * ageHoldingReliefRate);
  const outputTaxAfterAgeRelief = Math.max(0, outputTaxBeforeRelief - ageHoldingReliefAmount);

  let burdenCapExcessReduction = 0;
  let comprehensiveTaxAfterBurdenCap = outputTaxAfterAgeRelief;

  if (
    input.priorYearPropertyAndCptTax != null &&
    input.priorYearPropertyAndCptTax > 0 &&
    input.taxpayerType === "individual"
  ) {
    const currentPropertyTaxTotal =
      input.currentYearPropertyTax ?? totalPropertyTaxWithEducation;
    const capTotal = Math.round(input.priorYearPropertyAndCptTax * TAX_BURDEN_CAP_RATE);
    const actualTotal = currentPropertyTaxTotal + outputTaxAfterAgeRelief;
    if (actualTotal > capTotal) {
      burdenCapExcessReduction = actualTotal - capTotal;
      comprehensiveTaxAfterBurdenCap = Math.max(0, outputTaxAfterAgeRelief - burdenCapExcessReduction);
    }
  }

  const ruralSpecialTax = Math.round(comprehensiveTaxAfterBurdenCap * RURAL_SPECIAL_TAX_RATE);
  const totalComprehensivePayable = comprehensiveTaxAfterBurdenCap + ruralSpecialTax;
  const totalAnnualHoldingTax = totalPropertyTaxWithEducation + totalComprehensivePayable;
  const installmentDeferrableAmount = calcInstallmentDeferrable(comprehensiveTaxAfterBurdenCap);

  return {
    housing,
    comprehensiveLand,
    separateLand,
    totalPropertyTax,
    totalLocalEducationTax,
    totalPropertyTaxWithEducation,
    outputTaxBeforeRelief,
    ageHoldingReliefRate,
    ageHoldingReliefAmount,
    outputTaxAfterAgeRelief,
    burdenCapExcessReduction,
    comprehensiveTaxAfterBurdenCap,
    ruralSpecialTax,
    totalComprehensivePayable,
    totalAnnualHoldingTax,
    installmentEligible: installmentDeferrableAmount > 0,
    installmentDeferrableAmount,
    propertyTaxDueDateNote: "매년 7월(지자체 고지, 관할 시·군·구)",
    comprehensiveTaxDueDateNote: "매년 12월 1일 ~ 12월 15일(토·공휴일이면 다음 첫 평일)",
  };
}

export function toPercent(rate: number): string {
  return `${(rate * 100).toFixed(rate * 100 >= 1 ? 1 : 2).replace(/\.?0+$/, "")}%`;
}
