/**
 * 상속세 계산
 * 근거: 국세청 「상속세 개요」「세액계산흐름도」(cntntsId=7718, 7720),
 *       상속세 및 증여세법 제13·18~24·25~28·27·69조 (시행 2025.10.1.)
 */

export interface TaxBracket {
  maxBase: number;
  rate: number;
  progressiveDeduction: number;
}

/** 국세청 세액계산흐름도·제26조 상속세율 */
export const INHERITANCE_TAX_BRACKETS: TaxBracket[] = [
  { maxBase: 100_000_000, rate: 0.1, progressiveDeduction: 0 },
  { maxBase: 500_000_000, rate: 0.2, progressiveDeduction: 10_000_000 },
  { maxBase: 1_000_000_000, rate: 0.3, progressiveDeduction: 60_000_000 },
  { maxBase: 3_000_000_000, rate: 0.4, progressiveDeduction: 160_000_000 },
  { maxBase: Number.POSITIVE_INFINITY, rate: 0.5, progressiveDeduction: 460_000_000 },
];

export const BASIC_DEDUCTION = 200_000_000;
export const LUMP_SUM_DEDUCTION = 500_000_000;
export const CHILD_DEDUCTION_PER_PERSON = 50_000_000;
export const MINOR_DEDUCTION_BASE = 10_000_000;
export const ELDERLY_DEDUCTION_PER_PERSON = 50_000_000;
export const DISABLED_DEDUCTION_BASE = 10_000_000;
export const SPOUSE_DEDUCTION_CAP = 3_000_000_000;
export const SPOUSE_DEDUCTION_MINIMUM = 500_000_000;
export const FINANCIAL_DEDUCTION_THRESHOLD = 20_000_000;
export const FINANCIAL_DEDUCTION_MIN = 20_000_000;
export const FINANCIAL_DEDUCTION_CAP = 200_000_000;
export const CO_RESIDENCE_HOUSING_CAP = 600_000_000;
export const MINIMUM_TAXABLE_BASE = 500_000;
export const GENERATION_SKIP_MINOR_THRESHOLD = 2_000_000_000;
export const FILING_TAX_CREDIT_RATE = 0.03;
export const INSTALLMENT_THRESHOLD = 10_000_000;

export type HeirComposition = "spouse-only" | "spouse-children" | "spouse-parents" | "children-only" | "other";

export interface MinorHeirDeductionInput {
  /** 19세까지 남은 연수(1년 미만은 1년) */
  yearsTo19: number;
}

export interface DisabledHeirDeductionInput {
  /** 통계청 고시 기대여명 연수(1년 미만은 1년) */
  lifeExpectancyYears: number;
}

export interface InheritanceTaxInput {
  /** 총상속재산가액(본래 상속재산 + 간주상속재산 등) */
  totalInheritedProperty: number;
  /** 비과세 재산 + 과세가액 불산입 */
  nonTaxableExclusion: number;
  /** 공과금·채무·장례비용 */
  debtsChargesFuneral: number;
  /** 상속개시 전 10년 이내 상속인에게 증여한 재산 */
  priorGiftsToHeirs: number;
  /** 상속개시 전 5년 이내 상속인이 아닌 자에게 증여한 재산 */
  priorGiftsToNonHeirs: number;
  /** 상속인이 아닌 자에게 유증·사인증여한 재산(공제한도·배우자 법정분 계산용) */
  nonHeirBequest: number;
  /** 선순위 상속인 포기로 다음 순위 상속인이 받은 재산(공제한도용) */
  renouncedPropertyToNextHeir: number;
  /** 본래 상속재산 중 금융재산(금융재산 상속공제용) */
  financialAssets: number;
  /** 금융채무 */
  financialDebts: number;
  /** 감정평가 수수료(과세표준에서 공제) */
  appraisalFee: number;
  /** 재해손실공제액(손실−보험금 등) */
  disasterLossDeduction: number;
  /** 동거주택 상속공제 대상 상속주택가액(부수토지·담보채무 반영 후) */
  coResidenceInheritedHousingValue: number;
  /** 가업·영농상속공제 등 기타 상속공제(직접 입력) */
  otherBusinessDeduction: number;
  /** 상속인 구성(배우자 법정상속분) */
  heirComposition: HeirComposition;
  /** 직계비속(자녀 등) 수 — spouse-children·children-only */
  childCount: number;
  /** 직계존속 수 — spouse-parents */
  parentCount: number;
  /** 배우자가 실제 상속받은 금액(사전증여·추정상속재산 제외) */
  spouseActualInheritance: number;
  /** 배우자 사전증여재산의 증여세 과세표준(배우자공제 한도 계산용) */
  spousePriorGiftTaxBase: number;
  /** 배우자 단독 상속인 여부(일괄공제 5억 불가) */
  isSpouseOnlyHeir: boolean;
  /** 자녀공제 대상 자녀(태아 포함) 수 */
  childDeductionCount: number;
  /** 미성년자공제(배우자 제외 상속인·동거가족) */
  minorHeirDeductions: readonly MinorHeirDeductionInput[];
  /** 65세 이상 연로자공제(배우자 제외) */
  elderlyCount: number;
  /** 장애인공제 */
  disabledHeirDeductions: readonly DisabledHeirDeductionInput[];
  /** 세대생략 할증 대상(자녀가 아닌 직계비속·대습상속 제외) */
  hasGenerationSkipHeir: boolean;
  /** 할증 대상 상속인의 상속재산 지분비율(0~1) */
  generationSkipHeirShareRatio: number;
  /** 할증 대상이 미성년자이며 20억 초과 상속 */
  generationSkipMinorOverThreshold: boolean;
  /** 대습상속으로 할증 배제 */
  isSubstituteInheritance: boolean;
  /** 사전증여분에 대해 납부(예정)한 증여세 산출세액(증여세액공제) */
  priorGiftTaxPaid: number;
  /** 법정신고기한 내 신고(신고세액공제 3%) */
  timelyFiling: boolean;
}

export interface DeductionBreakdown {
  basicAndPersonal: number;
  lumpSumApplied: boolean;
  lumpOrPersonalAmount: number;
  spouse: number;
  financial: number;
  disaster: number;
  coResidenceHousing: number;
  otherBusiness: number;
  totalBeforeLimit: number;
  combinedLimit: number;
  totalApplied: number;
}

export interface InheritanceTaxResult {
  totalInheritedProperty: number;
  nonTaxableExclusion: number;
  debtsChargesFuneral: number;
  priorGiftsTotal: number;
  taxableEstateValue: number;
  inheritancePropertyValueForSpouse: number;
  spouseLegalShareRatio: number;
  spouseLegalShareAmount: number;
  deductions: DeductionBreakdown;
  /** 과세가액 − 상속공제 (감정평가 수수료 차감 전) */
  taxBaseBeforeAppraisal: number;
  appraisalFee: number;
  taxBase: number;
  isBelowMinimumTaxable: boolean;
  appliedBracket: TaxBracket;
  outputTax: number;
  generationSkipSurcharge: number;
  generationSkipRate: number;
  giftTaxCredit: number;
  taxBeforeFilingCredit: number;
  filingTaxCredit: number;
  payableTax: number;
  installmentEligible: boolean;
  installmentDeferrableAmount: number;
  filingDeadlineNote: string;
  warnings: string[];
}

export function toPercent(rate: number): string {
  return `${(rate * 100).toFixed(rate * 100 % 1 === 0 ? 0 : 1).replace(/\.0$/, "")}%`;
}

export function calcProgressiveTax(taxBase: number, brackets: TaxBracket[]): number {
  if (taxBase <= 0) return 0;
  for (const bracket of brackets) {
    if (taxBase <= bracket.maxBase) {
      return Math.round(taxBase * bracket.rate - bracket.progressiveDeduction);
    }
  }
  const last = brackets[brackets.length - 1];
  return Math.round(taxBase * last.rate - last.progressiveDeduction);
}

export function getAppliedBracket(taxBase: number, brackets: TaxBracket[]): TaxBracket {
  if (taxBase <= 0) return brackets[0];
  for (const bracket of brackets) {
    if (taxBase <= bracket.maxBase) return bracket;
  }
  return brackets[brackets.length - 1];
}

/** 민법 제1009조·국세청 배우자 법정상속분 */
export function getSpouseLegalShareRatio(composition: HeirComposition, childCount: number, parentCount: number): number {
  switch (composition) {
    case "spouse-only":
      return 1;
    case "spouse-children":
      if (childCount <= 0) return 1;
      return 1.5 / (1.5 + childCount);
    case "spouse-parents":
      if (parentCount <= 0) return 1;
      return 1.5 / (1.5 + parentCount);
    case "children-only":
    case "other":
      return 0;
    default:
      return 0;
  }
}

export function calcMinorDeduction(yearsTo19: number): number {
  const years = Math.max(1, Math.ceil(yearsTo19));
  return MINOR_DEDUCTION_BASE * years;
}

export function calcDisabledDeduction(lifeExpectancyYears: number): number {
  const years = Math.max(1, Math.ceil(lifeExpectancyYears));
  return DISABLED_DEDUCTION_BASE * years;
}

export function calcPersonalDeductionTotal(input: InheritanceTaxInput): number {
  let total = BASIC_DEDUCTION;
  total += input.childDeductionCount * CHILD_DEDUCTION_PER_PERSON;
  total += input.minorHeirDeductions.reduce((sum, m) => sum + calcMinorDeduction(m.yearsTo19), 0);
  total += input.elderlyCount * ELDERLY_DEDUCTION_PER_PERSON;
  total += input.disabledHeirDeductions.reduce(
    (sum, d) => sum + calcDisabledDeduction(d.lifeExpectancyYears),
    0,
  );
  return total;
}

export function calcLumpOrPersonalDeduction(input: InheritanceTaxInput): {
  personalTotal: number;
  amount: number;
  lumpSumApplied: boolean;
} {
  const personalTotal = calcPersonalDeductionTotal(input);
  if (input.isSpouseOnlyHeir) {
    return { personalTotal, amount: personalTotal, lumpSumApplied: false };
  }
  const amount = Math.max(LUMP_SUM_DEDUCTION, personalTotal);
  return { personalTotal, amount, lumpSumApplied: amount === LUMP_SUM_DEDUCTION && personalTotal < LUMP_SUM_DEDUCTION };
}

/** 배우자 상속공제 — 제19조 */
export function calcSpouseDeduction(
  inheritancePropertyValue: number,
  legalShareRatio: number,
  spouseActualInheritance: number,
  spousePriorGiftTaxBase: number,
): number {
  if (legalShareRatio <= 0 && spouseActualInheritance <= 0) return 0;

  const legalLimit = Math.min(
    Math.max(0, Math.round(inheritancePropertyValue * legalShareRatio) - spousePriorGiftTaxBase),
    SPOUSE_DEDUCTION_CAP,
  );

  if (spouseActualInheritance <= 0 || spouseActualInheritance < SPOUSE_DEDUCTION_MINIMUM) {
    return SPOUSE_DEDUCTION_MINIMUM;
  }

  return Math.min(spouseActualInheritance, legalLimit);
}

/** 금융재산 상속공제 — 제22조(본래 상속재산 중 금융재산만) */
export function calcFinancialAssetDeduction(financialAssets: number, financialDebts: number): number {
  const netFinancial = Math.max(0, financialAssets - financialDebts);
  if (netFinancial <= 0) return 0;
  if (netFinancial <= FINANCIAL_DEDUCTION_THRESHOLD) return netFinancial;
  const calculated = Math.max(Math.round(netFinancial * 0.2), FINANCIAL_DEDUCTION_MIN);
  return Math.min(calculated, FINANCIAL_DEDUCTION_CAP);
}

/** 동거주택 상속공제 — 제23조의2(100%, 한도 6억) */
export function calcCoResidenceHousingDeduction(inheritedHousingValue: number): number {
  if (inheritedHousingValue <= 0) return 0;
  return Math.min(inheritedHousingValue, CO_RESIDENCE_HOUSING_CAP);
}

/** 상속공제 종합한도 — 제24조 */
export function calcDeductionCombinedLimit(
  taxableEstateValue: number,
  nonHeirBequest: number,
  renouncedProperty: number,
  priorGiftsAdded: number,
  priorGiftDeductionsTaken: number,
): number {
  let limit = taxableEstateValue - nonHeirBequest - renouncedProperty;
  if (taxableEstateValue > LUMP_SUM_DEDUCTION) {
    limit -= Math.max(0, priorGiftsAdded - priorGiftDeductionsTaken);
  }
  return Math.max(0, limit);
}

/** 배우자 법정상속분 계산용 상속재산가액 — 집행기준 19-17-2 */
export function calcInheritancePropertyValueForSpouse(params: {
  totalInheritedProperty: number;
  priorGiftsToHeirs: number;
  priorGiftsToNonHeirs: number;
  nonHeirBequest: number;
  nonTaxableExclusion: number;
  debtsChargesFuneral: number;
}): number {
  return Math.max(
    0,
    params.totalInheritedProperty +
      params.priorGiftsToHeirs +
      params.priorGiftsToNonHeirs -
      params.nonHeirBequest -
      params.nonTaxableExclusion -
      params.debtsChargesFuneral,
  );
}

/** 세대생략 할증 — 제27조 */
export function calcGenerationSkipSurcharge(params: {
  outputTax: number;
  heirShareRatio: number;
  minorOverThreshold: boolean;
  isSubstituteInheritance: boolean;
  hasGenerationSkipHeir: boolean;
}): { surcharge: number; rate: number } {
  if (!params.hasGenerationSkipHeir || params.isSubstituteInheritance || params.outputTax <= 0) {
    return { surcharge: 0, rate: 0 };
  }
  const ratio = Math.min(1, Math.max(0, params.heirShareRatio));
  const rate = params.minorOverThreshold ? 0.4 : 0.3;
  const surcharge = Math.round(params.outputTax * ratio * rate);
  return { surcharge, rate };
}

/** 증여세액공제 — 제28조(과세가액 5억 이하 제외·비율 안분) */
export function calcGiftTaxCredit(params: {
  outputTax: number;
  taxableEstateValue: number;
  priorGiftsAdded: number;
  priorGiftTaxPaid: number;
}): number {
  if (params.priorGiftTaxPaid <= 0 || params.taxableEstateValue <= LUMP_SUM_DEDUCTION) return 0;
  if (params.priorGiftsAdded <= 0 || params.outputTax <= 0) return 0;
  const ratio = Math.min(1, params.priorGiftsAdded / params.taxableEstateValue);
  return Math.min(Math.round(params.outputTax * ratio), params.priorGiftTaxPaid);
}

/** 신고세액공제 — 제69조(3%) */
export function calcFilingTaxCredit(params: {
  outputTax: number;
  generationSkipSurcharge: number;
  deferredCollectionAmount: number;
  otherTaxCredits: number;
}): number {
  const base = Math.max(
    0,
    params.outputTax + params.generationSkipSurcharge - params.deferredCollectionAmount - params.otherTaxCredits,
  );
  return Math.round(base * FILING_TAX_CREDIT_RATE);
}

export function computeInheritanceTax(input: InheritanceTaxInput): InheritanceTaxResult {
  const warnings: string[] = [];
  const priorGiftsTotal = input.priorGiftsToHeirs + input.priorGiftsToNonHeirs;

  const taxableEstateValue = Math.max(
    0,
    input.totalInheritedProperty -
      input.nonTaxableExclusion -
      input.debtsChargesFuneral +
      priorGiftsTotal,
  );

  const inheritancePropertyValueForSpouse = calcInheritancePropertyValueForSpouse({
    totalInheritedProperty: input.totalInheritedProperty,
    priorGiftsToHeirs: input.priorGiftsToHeirs,
    priorGiftsToNonHeirs: input.priorGiftsToNonHeirs,
    nonHeirBequest: input.nonHeirBequest,
    nonTaxableExclusion: input.nonTaxableExclusion,
    debtsChargesFuneral: input.debtsChargesFuneral,
  });

  const spouseLegalShareRatio = getSpouseLegalShareRatio(
    input.heirComposition,
    input.childCount,
    input.parentCount,
  );
  const spouseLegalShareAmount = Math.round(inheritancePropertyValueForSpouse * spouseLegalShareRatio);

  const { personalTotal, amount: lumpOrPersonalAmount, lumpSumApplied } = calcLumpOrPersonalDeduction(input);

  const spouseDeduction =
    input.heirComposition === "spouse-only" ||
    input.heirComposition === "spouse-children" ||
    input.heirComposition === "spouse-parents"
      ? calcSpouseDeduction(
          inheritancePropertyValueForSpouse,
          spouseLegalShareRatio,
          input.spouseActualInheritance,
          input.spousePriorGiftTaxBase,
        )
      : 0;

  const financialDeduction = calcFinancialAssetDeduction(input.financialAssets, input.financialDebts);
  const disasterDeduction = Math.max(0, input.disasterLossDeduction);
  const coResidenceDeduction = calcCoResidenceHousingDeduction(input.coResidenceInheritedHousingValue);
  const otherBusinessDeduction = Math.max(0, input.otherBusinessDeduction);

  const totalBeforeLimit =
    lumpOrPersonalAmount +
    spouseDeduction +
    financialDeduction +
    disasterDeduction +
    coResidenceDeduction +
    otherBusinessDeduction;

  const combinedLimit = calcDeductionCombinedLimit(
    taxableEstateValue,
    input.nonHeirBequest,
    input.renouncedPropertyToNextHeir,
    priorGiftsTotal,
    0,
  );

  const totalAppliedDeduction = Math.min(totalBeforeLimit, combinedLimit, taxableEstateValue);

  if (totalBeforeLimit > combinedLimit) {
    warnings.push(
      `상속공제 합계(${formatWon(totalBeforeLimit)})가 제24조 종합한도(${formatWon(combinedLimit)})를 초과하여 한도까지만 반영했습니다.`,
    );
  }

  const taxBaseBeforeAppraisal = Math.max(0, taxableEstateValue - totalAppliedDeduction);
  const appraisalFee = Math.min(Math.max(0, input.appraisalFee), taxBaseBeforeAppraisal);
  const taxBase = Math.max(0, taxBaseBeforeAppraisal - appraisalFee);
  const isBelowMinimumTaxable = taxBase < MINIMUM_TAXABLE_BASE;

  if (isBelowMinimumTaxable) {
    return {
      totalInheritedProperty: input.totalInheritedProperty,
      nonTaxableExclusion: input.nonTaxableExclusion,
      debtsChargesFuneral: input.debtsChargesFuneral,
      priorGiftsTotal,
      taxableEstateValue,
      inheritancePropertyValueForSpouse,
      spouseLegalShareRatio,
      spouseLegalShareAmount,
      deductions: {
        basicAndPersonal: personalTotal,
        lumpSumApplied: lumpSumApplied,
        lumpOrPersonalAmount,
        spouse: spouseDeduction,
        financial: financialDeduction,
        disaster: disasterDeduction,
        coResidenceHousing: coResidenceDeduction,
        otherBusiness: otherBusinessDeduction,
        totalBeforeLimit,
        combinedLimit,
        totalApplied: totalAppliedDeduction,
      },
      taxBaseBeforeAppraisal,
      appraisalFee,
      taxBase,
      isBelowMinimumTaxable: true,
      appliedBracket: INHERITANCE_TAX_BRACKETS[0],
      outputTax: 0,
      generationSkipSurcharge: 0,
      generationSkipRate: 0,
      giftTaxCredit: 0,
      taxBeforeFilingCredit: 0,
      filingTaxCredit: 0,
      payableTax: 0,
      installmentEligible: false,
      installmentDeferrableAmount: 0,
      filingDeadlineNote: "상속개시일이 속하는 달의 말일부터 6개월 이내(외국 거주 등은 9개월) 신고·납부",
      warnings,
    };
  }

  const appliedBracket = getAppliedBracket(taxBase, INHERITANCE_TAX_BRACKETS);
  const outputTax = calcProgressiveTax(taxBase, INHERITANCE_TAX_BRACKETS);

  const { surcharge: generationSkipSurcharge, rate: generationSkipRate } = calcGenerationSkipSurcharge({
    outputTax,
    heirShareRatio: input.generationSkipHeirShareRatio,
    minorOverThreshold: input.generationSkipMinorOverThreshold,
    isSubstituteInheritance: input.isSubstituteInheritance,
    hasGenerationSkipHeir: input.hasGenerationSkipHeir,
  });

  const giftTaxCredit = calcGiftTaxCredit({
    outputTax,
    taxableEstateValue,
    priorGiftsAdded: priorGiftsTotal,
    priorGiftTaxPaid: input.priorGiftTaxPaid,
  });

  const taxBeforeFilingCredit = Math.max(0, outputTax + generationSkipSurcharge - giftTaxCredit);
  const filingTaxCredit = input.timelyFiling
    ? calcFilingTaxCredit({
        outputTax,
        generationSkipSurcharge,
        deferredCollectionAmount: 0,
        otherTaxCredits: giftTaxCredit,
      })
    : 0;

  const payableTax = Math.max(0, taxBeforeFilingCredit - filingTaxCredit);

  let installmentDeferrableAmount = 0;
  if (payableTax > INSTALLMENT_THRESHOLD) {
    installmentDeferrableAmount =
      payableTax <= 20_000_000 ? payableTax - INSTALLMENT_THRESHOLD : Math.round(payableTax * 0.5);
  }

  if (input.hasGenerationSkipHeir && !input.isSubstituteInheritance) {
    warnings.push(
      "세대생략 할증은 상속인별 안분·대습상속 여부에 따라 달라집니다. 복수 상속인 시 홈택스 자동계산과 대조하세요.",
    );
  }

  if (financialDeduction > 0 && priorGiftsTotal > 0) {
    warnings.push("금융재산 상속공제는 본래의 상속재산 중 금융재산에만 적용됩니다(사전증여 합산분 제외).");
  }

  return {
    totalInheritedProperty: input.totalInheritedProperty,
    nonTaxableExclusion: input.nonTaxableExclusion,
    debtsChargesFuneral: input.debtsChargesFuneral,
    priorGiftsTotal,
    taxableEstateValue,
    inheritancePropertyValueForSpouse,
    spouseLegalShareRatio,
    spouseLegalShareAmount,
    deductions: {
      basicAndPersonal: personalTotal,
      lumpSumApplied: lumpSumApplied,
      lumpOrPersonalAmount,
      spouse: spouseDeduction,
      financial: financialDeduction,
      disaster: disasterDeduction,
      coResidenceHousing: coResidenceDeduction,
      otherBusiness: otherBusinessDeduction,
      totalBeforeLimit,
      combinedLimit,
      totalApplied: totalAppliedDeduction,
    },
    taxBaseBeforeAppraisal,
    appraisalFee,
    taxBase,
    isBelowMinimumTaxable: false,
    appliedBracket,
    outputTax,
    generationSkipSurcharge,
    generationSkipRate,
    giftTaxCredit,
    taxBeforeFilingCredit,
    filingTaxCredit,
    payableTax,
    installmentEligible: payableTax > INSTALLMENT_THRESHOLD,
    installmentDeferrableAmount,
    filingDeadlineNote: "상속개시일이 속하는 달의 말일부터 6개월 이내(외국 거주 등은 9개월) 신고·납부",
    warnings,
  };
}

function formatWon(amount: number): string {
  return `${new Intl.NumberFormat("ko-KR").format(amount)}원`;
}
