/**
 * 양도소득세 계산
 * 근거: 국세청 「양도소득세 개요」(cntntsId=7707), 소득세법 제89·95·104·55조,
 *       소득세법 시행령 §155·§167의3(다주택 중과 한시배제) 등
 */

export type AssetType = "housing" | "presale" | "occupancy-right" | "non-housing" | "non-business-land";
export type HouseCount = "1" | "2" | "3+";

export interface TaxBracket {
  maxBase: number;
  rate: number;
  progressiveDeduction: number;
}

export interface CapitalGainsTaxInput {
  assetType: AssetType;
  transferPrice: number;
  acquisitionCost: number;
  necessaryExpenses: number;
  /** YYYY-MM-DD, 취득일(보유기간 기산) */
  acquisitionDate: string;
  /** YYYY-MM-DD, 양도일(원칙: 잔금·대금청산일) */
  transferDate: string;
  /** YYYY-MM-DD, 거주 시작일(미입력 시 취득일과 동일) */
  residenceStartDate: string | null;
  /** YYYY-MM-DD, 관리처분계획인가일(조합원입주권·원조합원) */
  managementDisposalPlanApprovalDate: string | null;
  /** 조합원권리가액(원). 미입력 시 양도가액과 동일(입주권분 양도차익 0 가정) */
  memberRightsValue: number | null;
  houseCount: HouseCount;
  isRegulatedArea: boolean;
  isOneHouseholdOneHome: boolean;
  isRegistered: boolean;
}

export interface HoldingPeriodFromDates {
  totalDays: number;
  completeYears: number;
  meetsMinimumYears: (years: number) => boolean;
  isLessThanYears: (years: number) => boolean;
  label: string;
}

/** 소득세법 시행령: 1년 미만 끝수 버림 → 완전 연수 */
export function calcHoldingPeriodFromDates(startIso: string, endIso: string): HoldingPeriodFromDates | null {
  const start = parseIsoDate(startIso);
  const end = parseIsoDate(endIso);
  if (!start || !end || end < start) return null;

  const totalDays = diffCalendarDays(start, end);
  let completeYears = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();
  const dayDiff = end.getDate() - start.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    completeYears -= 1;
  }
  completeYears = Math.max(0, completeYears);

  const meetsMinimumYears = (years: number) => end >= addCalendarYears(start, years);
  const isLessThanYears = (years: number) => end < addCalendarYears(start, years);

  const label =
    completeYears > 0 ? `${completeYears}년 (총 ${totalDays}일)` : `${totalDays}일`;

  return {
    totalDays,
    completeYears,
    meetsMinimumYears,
    isLessThanYears,
    label,
  };
}

function parseIsoDate(iso: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) return null;
  return date;
}

function diffCalendarDays(start: Date, end: Date): number {
  const utcStart = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const utcEnd = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.round((utcEnd - utcStart) / (1000 * 60 * 60 * 24));
}

function addCalendarYears(date: Date, years: number): Date {
  const next = new Date(date);
  next.setFullYear(next.getFullYear() + years);
  return next;
}

export const MULTI_HOME_SURCHARGE_EXEMPT_END = "2026-05-09";
export const REGULATED_AREA_RESIDENCE_RULE_START = "2017-08-03";

export function isMultiHomeSurchargeExemptPeriod(transferDateIso: string): boolean {
  const transfer = parseIsoDate(transferDateIso);
  const end = parseIsoDate(MULTI_HOME_SURCHARGE_EXEMPT_END);
  if (!transfer || !end) return false;
  return transfer <= end;
}

export function meetsRegulatedAreaResidenceRequirement(params: {
  isRegulatedArea: boolean;
  acquisitionDate: string;
  transferDate: string;
  residenceStartDate: string | null;
}): boolean {
  if (!params.isRegulatedArea) return true;
  const acquisition = parseIsoDate(params.acquisitionDate);
  const ruleStart = parseIsoDate(REGULATED_AREA_RESIDENCE_RULE_START);
  if (!acquisition || !ruleStart || acquisition < ruleStart) return true;

  const residenceStart = parseIsoDate(params.residenceStartDate ?? params.acquisitionDate);
  const transfer = parseIsoDate(params.transferDate);
  if (!residenceStart || !transfer) return false;

  return transfer >= addCalendarYears(residenceStart, 2);
}

interface ResolvedPeriods {
  holdingYears: number;
  residenceYears: number;
  holdingPeriod: HoldingPeriodFromDates;
  residencePeriod: HoldingPeriodFromDates;
  meetsRegulatedAreaResidenceRule: boolean;
  isMultiHomeSurchargeExemptPeriod: boolean;
}

function resolvePeriods(input: CapitalGainsTaxInput): ResolvedPeriods | null {
  const holdingPeriod = calcHoldingPeriodFromDates(input.acquisitionDate, input.transferDate);
  if (!holdingPeriod) return null;

  const residenceStart = input.residenceStartDate ?? input.acquisitionDate;
  const residencePeriod = calcHoldingPeriodFromDates(residenceStart, input.transferDate);
  if (!residencePeriod) return null;

  return {
    holdingYears: holdingPeriod.completeYears,
    residenceYears: residencePeriod.completeYears,
    holdingPeriod,
    residencePeriod,
    meetsRegulatedAreaResidenceRule: meetsRegulatedAreaResidenceRequirement({
      isRegulatedArea: input.isRegulatedArea,
      acquisitionDate: input.acquisitionDate,
      transferDate: input.transferDate,
      residenceStartDate: input.residenceStartDate,
    }),
    isMultiHomeSurchargeExemptPeriod: isMultiHomeSurchargeExemptPeriod(input.transferDate),
  };
}

export interface RateCandidate {
  label: string;
  outputTax: number;
  effectiveTopRate: number;
}

export interface CapitalGainsTaxResult {
  grossGain: number;
  isFullyExempt: boolean;
  exemptReason: string | null;
  taxableGain: number;
  highPriceApportionmentRatio: number | null;
  longTermDeductionRate: number;
  longTermDeductionTable: "none" | "table1" | "table2";
  holdingDeductionRate: number;
  residenceDeductionRate: number;
  longTermDeductionAmount: number;
  transferIncome: number;
  basicDeduction: number;
  taxBase: number;
  appliedRateLabel: string;
  /** 적용 세율(누진 구간세율 또는 단기·분양권 등 단일세율) */
  appliedEffectiveRate: number;
  rateCandidates: RateCandidate[];
  outputTax: number;
  localIncomeTax: number;
  totalPayableTax: number;
  installmentEligible: boolean;
  installmentDeferrableAmount: number;
  filingDeadlineNote: string;
  warnings: string[];
  holdingPeriodLabel: string;
  residencePeriodLabel: string;
  holdingCompleteYears: number;
  residenceCompleteYears: number;
  /** 종전주택분 양도차익(입주권) */
  formerHousingGain: number | null;
  /** 입주권분 양도차익 */
  occupancyRightsGain: number | null;
  /** 장특공 적용 대상(관리처분인가 전 종전주택분) */
  longTermDeductionEligibleGain: number | null;
}

export const HIGH_PRICE_HOME_THRESHOLD = 1_200_000_000;
export const BASIC_DEDUCTION = 2_500_000;
export const LOCAL_INCOME_TAX_RATE = 0.1;
export const INSTALLMENT_THRESHOLD = 10_000_000;

/** 소득세법 제55조① 기본세율(2023.1.1~). 산출세액 = 과세표준 × 세율 − 누진공제.
 *  누진공제 = 구간하한×세율 − 직전구간까지의 누적세액(§55 조문·별표 piecewise와 동치). */
export const BASIC_TAX_BRACKETS: TaxBracket[] = [
  { maxBase: 14_000_000, rate: 0.06, progressiveDeduction: 0 },
  { maxBase: 50_000_000, rate: 0.15, progressiveDeduction: 1_260_000 },
  { maxBase: 88_000_000, rate: 0.24, progressiveDeduction: 5_760_000 },
  { maxBase: 150_000_000, rate: 0.35, progressiveDeduction: 15_440_000 },
  { maxBase: 300_000_000, rate: 0.38, progressiveDeduction: 19_940_000 },
  { maxBase: 500_000_000, rate: 0.4, progressiveDeduction: 25_940_000 },
  { maxBase: 1_000_000_000, rate: 0.42, progressiveDeduction: 35_940_000 },
  { maxBase: Number.POSITIVE_INFINITY, rate: 0.45, progressiveDeduction: 65_940_000 },
];

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

function getAppliedBracket(taxBase: number, brackets: TaxBracket[]): TaxBracket {
  for (const bracket of brackets) {
    if (taxBase <= bracket.maxBase) return bracket;
  }
  return brackets[brackets.length - 1];
}

function calcProgressiveWithSurcharge(
  taxBase: number,
  brackets: TaxBracket[],
  surchargePoints: number,
): number {
  if (taxBase <= 0) return 0;
  const surcharged: TaxBracket[] = brackets.map((b) => ({
    ...b,
    rate: Math.min(b.rate + surchargePoints, 1),
  }));
  return calcProgressiveTax(taxBase, surcharged);
}

/** 표1: 일반 장기보유특별공제(3년~, 연 2%p 가산, 최대 30%) */
export function getGeneralLongTermDeductionRate(holdingYears: number): number {
  if (holdingYears < 3) return 0;
  return Math.min(0.06 + (holdingYears - 3) * 0.02, 0.3);
}

/** 표2 보유: (보유연수−2)×4%, 최대 40% */
export function getOneHomeHoldingDeductionRate(holdingYears: number): number {
  if (holdingYears < 3) return 0;
  return Math.min((holdingYears - 2) * 0.04, 0.4);
}

/** 표2 거주: (거주연수−2)×4%, 최대 40% */
export function getOneHomeResidenceDeductionRate(residenceYears: number): number {
  if (residenceYears < 2) return 0;
  return Math.min((residenceYears - 2) * 0.04, 0.4);
}

/** 입주권 표2: 보유·거주 각 (연수−2)×2%p, 항목별 최대 24% */
export function getOccupancyRightsTable2ComponentRate(years: number): number {
  if (years < 3) return 0;
  return Math.min((years - 2) * 0.02, 0.24);
}

interface OccupancyGainSplit {
  formerHousingGain: number;
  occupancyRightsGain: number;
  memberRightsValue: number;
}

function splitOccupancyGains(input: CapitalGainsTaxInput): OccupancyGainSplit {
  const memberRightsValue = input.memberRightsValue ?? input.transferPrice;
  const formerHousingGain = memberRightsValue - input.acquisitionCost - input.necessaryExpenses;
  const occupancyRightsGain = input.transferPrice - memberRightsValue;
  return { formerHousingGain, occupancyRightsGain, memberRightsValue };
}

interface OccupancyResolvedPeriods extends ResolvedPeriods {
  formerHousingHoldingPeriod: HoldingPeriodFromDates;
  formerHousingResidencePeriod: HoldingPeriodFromDates;
  occupancyRightsHoldingPeriod: HoldingPeriodFromDates | null;
  formerHousingHoldingYears: number;
  formerHousingResidenceYears: number;
  isOriginalMember: boolean;
}

function resolveOccupancyPeriods(input: CapitalGainsTaxInput): OccupancyResolvedPeriods | null {
  const approvalDate = input.managementDisposalPlanApprovalDate;
  if (!approvalDate) return null;

  const acquisition = parseIsoDate(input.acquisitionDate);
  const transfer = parseIsoDate(input.transferDate);
  const approval = parseIsoDate(approvalDate);
  if (!acquisition || !transfer || !approval) return null;
  if (approval < acquisition || approval > transfer) return null;

  const basePeriods = resolvePeriods(input);
  if (!basePeriods) return null;

  const formerHousingHoldingPeriod = calcHoldingPeriodFromDates(
    input.acquisitionDate,
    approvalDate,
  );
  if (!formerHousingHoldingPeriod) return null;

  const residenceStart = input.residenceStartDate ?? input.acquisitionDate;
  const formerHousingResidencePeriod = calcHoldingPeriodFromDates(residenceStart, approvalDate);
  if (!formerHousingResidencePeriod) return null;

  const occupancyRightsHoldingPeriod = calcHoldingPeriodFromDates(approvalDate, input.transferDate);

  const isOriginalMember = acquisition < approval;

  return {
    ...basePeriods,
    formerHousingHoldingPeriod,
    formerHousingResidencePeriod,
    occupancyRightsHoldingPeriod,
    formerHousingHoldingYears: formerHousingHoldingPeriod.completeYears,
    formerHousingResidenceYears: formerHousingResidencePeriod.completeYears,
    isOriginalMember,
  };
}

function apportionHighPriceGain(gain: number, transferPrice: number): {
  taxableGain: number;
  ratio: number;
} {
  const ratio = (transferPrice - HIGH_PRICE_HOME_THRESHOLD) / transferPrice;
  return { taxableGain: Math.round(gain * ratio), ratio };
}

function resolveOccupancyGainTaxable(params: {
  gain: number;
  transferPrice: number;
  isOneHome: boolean;
  meetsHoldTwoYearsToApproval: boolean;
  meetsResidenceRuleToApproval: boolean;
}): {
  taxableGain: number;
  highPriceApportionmentRatio: number | null;
  isFullyExempt: boolean;
  exemptReason: string | null;
} {
  if (params.gain <= 0) {
    return {
      taxableGain: 0,
      highPriceApportionmentRatio: null,
      isFullyExempt: true,
      exemptReason: null,
    };
  }

  if (
    params.isOneHome &&
    params.meetsHoldTwoYearsToApproval &&
    params.meetsResidenceRuleToApproval
  ) {
    if (params.transferPrice <= HIGH_PRICE_HOME_THRESHOLD) {
      return {
        taxableGain: 0,
        highPriceApportionmentRatio: null,
        isFullyExempt: true,
        exemptReason: "1세대 1주택·12억 이하·관리처분인가 전 2년 보유·거주요건 충족",
      };
    }
    const { taxableGain, ratio } = apportionHighPriceGain(params.gain, params.transferPrice);
    return {
      taxableGain,
      highPriceApportionmentRatio: ratio,
      isFullyExempt: false,
      exemptReason: null,
    };
  }

  return {
    taxableGain: params.gain,
    highPriceApportionmentRatio: null,
    isFullyExempt: false,
    exemptReason: null,
  };
}

function emptyResultFields(): Pick<
  CapitalGainsTaxResult,
  "formerHousingGain" | "occupancyRightsGain" | "longTermDeductionEligibleGain"
> {
  return {
    formerHousingGain: null,
    occupancyRightsGain: null,
    longTermDeductionEligibleGain: null,
  };
}

function isHousingLike(assetType: AssetType): boolean {
  return assetType === "housing" || assetType === "presale" || assetType === "occupancy-right";
}

function calcFlatTax(taxBase: number, rate: number): number {
  return Math.round(taxBase * rate);
}

function getMultiHomeSurchargePoints(houseCount: HouseCount): number {
  if (houseCount === "2") return 0.2;
  if (houseCount === "3+") return 0.3;
  return 0;
}

type ComputationContext = CapitalGainsTaxInput & ResolvedPeriods;

function shouldApplyMultiHomeSurcharge(
  input: ComputationContext,
): boolean {
  if (!input.isRegulatedArea || input.houseCount === "1") return false;
  // 주택분양권 양도는 §104 전용 60/70% 단일세율. 다주택 중과(§104⑦)는 「주택」 양도에 해당.
  if (input.assetType === "presale") return false;
  if (!isHousingLike(input.assetType)) return false;
  if (input.isMultiHomeSurchargeExemptPeriod && input.holdingPeriod.meetsMinimumYears(2)) return false;
  return true;
}

function isLongTermDeductionBlocked(input: ComputationContext): boolean {
  return shouldApplyMultiHomeSurcharge(input) && input.holdingPeriod.meetsMinimumYears(2);
}

function periodFields(ctx: ResolvedPeriods) {
  return {
    holdingPeriodLabel: ctx.holdingPeriod.label,
    residencePeriodLabel: ctx.residencePeriod.label,
    holdingCompleteYears: ctx.holdingYears,
    residenceCompleteYears: ctx.residenceYears,
  };
}

function resolveExemption(input: ComputationContext, grossGain: number): {
  isFullyExempt: boolean;
  exemptReason: string | null;
  taxableGain: number;
  highPriceApportionmentRatio: number | null;
} {
  if (grossGain <= 0) {
    return {
      isFullyExempt: true,
      exemptReason: "양도차익이 없거나 손실인 경우 과세되지 않습니다.",
      taxableGain: 0,
      highPriceApportionmentRatio: null,
    };
  }

  if (
    input.isOneHouseholdOneHome &&
    input.houseCount === "1" &&
    input.assetType === "housing" &&
    input.holdingPeriod.meetsMinimumYears(2) &&
    input.meetsRegulatedAreaResidenceRule
  ) {
    if (input.transferPrice <= HIGH_PRICE_HOME_THRESHOLD) {
      return {
        isFullyExempt: true,
        exemptReason:
          "1세대 1주택(실지거래가 12억 원 이하)·2년 이상 보유·거주요건 충족 시 비과세(소득세법 §89①3).",
        taxableGain: 0,
        highPriceApportionmentRatio: null,
      };
    }

    const ratio =
      (input.transferPrice - HIGH_PRICE_HOME_THRESHOLD) / input.transferPrice;
    return {
      isFullyExempt: false,
      exemptReason: null,
      taxableGain: Math.round(grossGain * ratio),
      highPriceApportionmentRatio: ratio,
    };
  }

  return {
    isFullyExempt: false,
    exemptReason: null,
    taxableGain: grossGain,
    highPriceApportionmentRatio: null,
  };
}

function resolveLongTermDeduction(
  input: ComputationContext,
  taxableGain: number,
): {
  longTermDeductionRate: number;
  longTermDeductionTable: "none" | "table1" | "table2";
  holdingDeductionRate: number;
  residenceDeductionRate: number;
  longTermDeductionAmount: number;
  warnings: string[];
} {
  const warnings: string[] = [];

  if (taxableGain <= 0) {
    return {
      longTermDeductionRate: 0,
      longTermDeductionTable: "none",
      holdingDeductionRate: 0,
      residenceDeductionRate: 0,
      longTermDeductionAmount: 0,
      warnings,
    };
  }

  if (input.assetType === "presale") {
    warnings.push(
      "분양권(주택분양권)은 장기보유특별공제·1세대1주택 비과세가 적용되지 않습니다(소득세법 §89·§95·§104).",
    );
    return {
      longTermDeductionRate: 0,
      longTermDeductionTable: "none",
      holdingDeductionRate: 0,
      residenceDeductionRate: 0,
      longTermDeductionAmount: 0,
      warnings,
    };
  }

  if (isLongTermDeductionBlocked(input)) {
    warnings.push(
      "조정대상지역 다주택자(중과 재시행 후)는 장기보유특별공제가 배제됩니다(소득세법 §104⑦·시행령 §167의10).",
    );
    return {
      longTermDeductionRate: 0,
      longTermDeductionTable: "none",
      holdingDeductionRate: 0,
      residenceDeductionRate: 0,
      longTermDeductionAmount: 0,
      warnings,
    };
  }

  const useTable2 =
    input.isOneHouseholdOneHome &&
    input.houseCount === "1" &&
    input.assetType === "housing" &&
    input.residencePeriod.meetsMinimumYears(2);

  if (useTable2) {
    const holdingRate = getOneHomeHoldingDeductionRate(input.holdingYears);
    const residenceRate = getOneHomeResidenceDeductionRate(input.residenceYears);
    const totalRate = Math.min(holdingRate + residenceRate, 0.8);
    return {
      longTermDeductionRate: totalRate,
      longTermDeductionTable: "table2",
      holdingDeductionRate: holdingRate,
      residenceDeductionRate: residenceRate,
      longTermDeductionAmount: Math.round(taxableGain * totalRate),
      warnings,
    };
  }

  const generalRate = getGeneralLongTermDeductionRate(input.holdingYears);
  if (input.assetType === "non-business-land" && generalRate > 0) {
    warnings.push(
      "비사업용 토지는 표1(일반) 장기보유특별공제가 적용됩니다(소득세법 §95②·§95④, 보유 3년~ 최대 30%).",
    );
  }
  if (
    input.isOneHouseholdOneHome &&
    !input.residencePeriod.meetsMinimumYears(2) &&
    input.assetType === "housing"
  ) {
    warnings.push("1세대 1주택이어도 거주 2년 미만이면 표1(일반) 장기보유특별공제가 적용됩니다.");
  }

  return {
    longTermDeductionRate: generalRate,
    longTermDeductionTable: generalRate > 0 ? "table1" : "none",
    holdingDeductionRate: generalRate,
    residenceDeductionRate: 0,
    longTermDeductionAmount: Math.round(taxableGain * generalRate),
    warnings,
  };
}

function buildRateCandidates(
  input: ComputationContext,
  taxBase: number,
): { candidates: RateCandidate[]; applied: RateCandidate } {
  if (taxBase <= 0) {
    const zero: RateCandidate = { label: "과세표준 없음", outputTax: 0, effectiveTopRate: 0 };
    return { candidates: [zero], applied: zero };
  }

  const candidates: RateCandidate[] = [];
  const { holdingPeriod } = input;
  const housingLike = isHousingLike(input.assetType);

  const basicTax = calcProgressiveTax(taxBase, BASIC_TAX_BRACKETS);
  const basicBracket = getAppliedBracket(taxBase, BASIC_TAX_BRACKETS);
  candidates.push({
    label: "기본 누진세율(§55①)",
    outputTax: basicTax,
    effectiveTopRate: basicBracket.rate,
  });

  if (!holdingPeriod.meetsMinimumYears(2) && input.assetType !== "presale" && input.assetType !== "occupancy-right") {
    const shortRate = housingLike
      ? holdingPeriod.isLessThanYears(1)
        ? 0.7
        : 0.6
      : holdingPeriod.isLessThanYears(1)
        ? 0.5
        : 0.4;
    candidates.push({
      label: housingLike
        ? holdingPeriod.isLessThanYears(1)
          ? "단기(1년 미만·주택 70%)"
          : "단기(1~2년·주택 60%)"
        : holdingPeriod.isLessThanYears(1)
          ? "단기(1년 미만 50%)"
          : "단기(1~2년 40%)",
      outputTax: calcFlatTax(taxBase, shortRate),
      effectiveTopRate: shortRate,
    });
  }

  if (input.assetType === "presale") {
    const presaleRate = holdingPeriod.isLessThanYears(1) ? 0.7 : 0.6;
    candidates.push({
      label: holdingPeriod.isLessThanYears(1)
        ? "분양권(70%·1년 미만)"
        : "분양권(60%·1년 이상)",
      outputTax: calcFlatTax(taxBase, presaleRate),
      effectiveTopRate: presaleRate,
    });
  }

  if (!input.isRegistered && input.assetType !== "presale") {
    candidates.push({
      label: "미등기양도(70%)",
      outputTax: calcFlatTax(taxBase, 0.7),
      effectiveTopRate: 0.7,
    });
  }

  if (input.assetType === "non-business-land") {
    const landSurchargeTax = calcProgressiveWithSurcharge(taxBase, BASIC_TAX_BRACKETS, 0.1);
    candidates.push({
      label: "비사업용 토지(기본+10%p)",
      outputTax: landSurchargeTax,
      effectiveTopRate: Math.min(basicBracket.rate + 0.1, 1),
    });
  }

  if (shouldApplyMultiHomeSurcharge(input)) {
    const points = getMultiHomeSurchargePoints(input.houseCount);
    const surchargeTax = calcProgressiveWithSurcharge(taxBase, BASIC_TAX_BRACKETS, points);
    candidates.push({
      label:
        input.houseCount === "2"
          ? "다주택 중과(기본+20%p·조정지역)"
          : "다주택 중과(기본+30%p·조정지역)",
      outputTax: surchargeTax,
      effectiveTopRate: Math.min(basicBracket.rate + points, 1),
    });
  }

  const applied = candidates.reduce((max, c) => (c.outputTax > max.outputTax ? c : max));
  return { candidates, applied };
}

function calcInstallmentDeferrable(totalTax: number): number {
  if (totalTax <= INSTALLMENT_THRESHOLD) return 0;
  if (totalTax <= 20_000_000) return totalTax - INSTALLMENT_THRESHOLD;
  return Math.floor(totalTax / 2);
}

function computeOccupancyRightsTax(input: CapitalGainsTaxInput): CapitalGainsTaxResult {
  const occPeriods = resolveOccupancyPeriods(input);
  if (!occPeriods) {
    return {
      grossGain: 0,
      isFullyExempt: true,
      exemptReason:
        "관리처분인가일·취득일·양도일을 올바르게 입력해 주세요. 관리처분인가일은 취득일 이후·양도일 이전이어야 합니다.",
      taxableGain: 0,
      highPriceApportionmentRatio: null,
      longTermDeductionRate: 0,
      longTermDeductionTable: "none",
      holdingDeductionRate: 0,
      residenceDeductionRate: 0,
      longTermDeductionAmount: 0,
      transferIncome: 0,
      basicDeduction: 0,
      taxBase: 0,
      appliedRateLabel: "입력 오류",
      appliedEffectiveRate: 0,
      rateCandidates: [],
      outputTax: 0,
      localIncomeTax: 0,
      totalPayableTax: 0,
      installmentEligible: false,
      installmentDeferrableAmount: 0,
      filingDeadlineNote: "",
      warnings: [],
      holdingPeriodLabel: "",
      residencePeriodLabel: "",
      holdingCompleteYears: 0,
      residenceCompleteYears: 0,
      ...emptyResultFields(),
    };
  }

  const warnings: string[] = [];
  const split = splitOccupancyGains(input);
  const grossGain = split.formerHousingGain + split.occupancyRightsGain;
  const isOneHome = input.isOneHouseholdOneHome && input.houseCount === "1";

  const meetsHoldToApproval = occPeriods.formerHousingHoldingPeriod.meetsMinimumYears(2);
  const meetsResidenceToApproval = occPeriods.formerHousingResidencePeriod.meetsMinimumYears(2);
  const meetsRegulatedResidenceToTransfer = meetsRegulatedAreaResidenceRequirement({
    isRegulatedArea: input.isRegulatedArea,
    acquisitionDate: input.acquisitionDate,
    transferDate: input.transferDate,
    residenceStartDate: input.residenceStartDate,
  });

  if (isOneHome && input.isRegulatedArea && !meetsRegulatedResidenceToTransfer) {
    warnings.push(
      "2017.8.3 이후 조정대상지역 취득 주택은 양도 전 2년 이상 거주해야 1세대 1주택 비과세·거주요건을 충족합니다.",
    );
  }

  const residenceRuleForExempt = input.isRegulatedArea
    ? meetsRegulatedResidenceToTransfer && meetsResidenceToApproval
    : meetsResidenceToApproval;

  const formerExempt = resolveOccupancyGainTaxable({
    gain: split.formerHousingGain,
    transferPrice: input.transferPrice,
    isOneHome,
    meetsHoldTwoYearsToApproval: meetsHoldToApproval,
    meetsResidenceRuleToApproval: residenceRuleForExempt,
  });

  const occupancyExempt = resolveOccupancyGainTaxable({
    gain: split.occupancyRightsGain,
    transferPrice: input.transferPrice,
    isOneHome,
    meetsHoldTwoYearsToApproval: meetsHoldToApproval,
    meetsResidenceRuleToApproval: residenceRuleForExempt,
  });

  const taxableFormer = formerExempt.isFullyExempt ? 0 : formerExempt.taxableGain;
  const taxableOccupancy = occupancyExempt.isFullyExempt ? 0 : occupancyExempt.taxableGain;
  const taxableGain = taxableFormer + taxableOccupancy;

  const periodResult = {
    holdingPeriodLabel: `종전주택 ${occPeriods.formerHousingHoldingPeriod.label} · 입주권 ${occPeriods.occupancyRightsHoldingPeriod?.label ?? "0일"}`,
    residencePeriodLabel: occPeriods.formerHousingResidencePeriod.label,
    holdingCompleteYears: occPeriods.formerHousingHoldingYears,
    residenceCompleteYears: occPeriods.formerHousingResidenceYears,
  };

  if (grossGain <= 0) {
    return {
      grossGain,
      isFullyExempt: true,
      exemptReason: "양도차익이 없거나 손실인 경우 과세되지 않습니다.",
      taxableGain: 0,
      highPriceApportionmentRatio: null,
      longTermDeductionRate: 0,
      longTermDeductionTable: "none",
      holdingDeductionRate: 0,
      residenceDeductionRate: 0,
      longTermDeductionAmount: 0,
      transferIncome: 0,
      basicDeduction: 0,
      taxBase: 0,
      appliedRateLabel: "과세 없음",
      appliedEffectiveRate: 0,
      rateCandidates: [],
      outputTax: 0,
      localIncomeTax: 0,
      totalPayableTax: 0,
      installmentEligible: false,
      installmentDeferrableAmount: 0,
      filingDeadlineNote:
        "비과세·무과세 해당 시에도 필요경비 증빙·양도 사실 확인을 위해 홈택스 안내를 참고하세요.",
      warnings,
      formerHousingGain: split.formerHousingGain,
      occupancyRightsGain: split.occupancyRightsGain,
      longTermDeductionEligibleGain: 0,
      ...periodResult,
    };
  }

  if (taxableGain <= 0) {
    const reason =
      formerExempt.exemptReason ??
      occupancyExempt.exemptReason ??
      "1세대 1주택 비과세 요건 충족으로 과세대상 양도차익이 없습니다.";
    return {
      grossGain,
      isFullyExempt: true,
      exemptReason: reason,
      taxableGain: 0,
      highPriceApportionmentRatio: formerExempt.highPriceApportionmentRatio,
      longTermDeductionRate: 0,
      longTermDeductionTable: "none",
      holdingDeductionRate: 0,
      residenceDeductionRate: 0,
      longTermDeductionAmount: 0,
      transferIncome: 0,
      basicDeduction: 0,
      taxBase: 0,
      appliedRateLabel: "비과세",
      appliedEffectiveRate: 0,
      rateCandidates: [],
      outputTax: 0,
      localIncomeTax: 0,
      totalPayableTax: 0,
      installmentEligible: false,
      installmentDeferrableAmount: 0,
      filingDeadlineNote:
        "비과세·무과세 해당 시에도 필요경비 증빙·양도 사실 확인을 위해 홈택스 안내를 참고하세요.",
      warnings,
      formerHousingGain: split.formerHousingGain,
      occupancyRightsGain: split.occupancyRightsGain,
      longTermDeductionEligibleGain: 0,
      ...periodResult,
    };
  }

  let longTermDeductionRate = 0;
  let holdingDeductionRate = 0;
  let residenceDeductionRate = 0;
  let longTermDeductionTable: "none" | "table1" | "table2" = "none";
  let longTermDeductionAmount = 0;
  const ltdEligibleGain = taxableFormer;

  if (!occPeriods.isOriginalMember) {
    warnings.push(
      "승계조합원(관리처분인가일 이후 취득) 입주권은 장기보유특별공제가 적용되지 않습니다.",
    );
  } else if (taxableFormer > 0 && isOneHome && meetsResidenceToApproval) {
    holdingDeductionRate = getOccupancyRightsTable2ComponentRate(
      occPeriods.formerHousingHoldingYears,
    );
    residenceDeductionRate = getOccupancyRightsTable2ComponentRate(
      occPeriods.formerHousingHoldingYears,
    );
    longTermDeductionRate = Math.min(holdingDeductionRate + residenceDeductionRate, 0.48);
    longTermDeductionTable = "table2";
    longTermDeductionAmount = Math.round(taxableFormer * longTermDeductionRate);
    warnings.push(
      "장기보유특별공제는 관리처분인가 전 종전주택분 양도차익에만 적용됩니다(소득세법 §95②).",
    );
  } else if (taxableFormer > 0) {
    warnings.push(
      "1세대 1주택·거주 2년 미만이거나 승계조합원인 경우 종전주택분에 표2 장특공이 적용되지 않을 수 있습니다.",
    );
  }

  if (split.occupancyRightsGain > 0) {
    warnings.push("관리처분인가 이후 입주권분 양도차익에는 장기보유특별공제가 적용되지 않습니다.");
  }

  const transferIncomeFormer = Math.max(0, taxableFormer - longTermDeductionAmount);
  const transferIncome = transferIncomeFormer + taxableOccupancy;
  const taxBase = Math.max(0, transferIncome - BASIC_DEDUCTION);

  const ctx: ComputationContext = { ...input, ...occPeriods };
  const { candidates, applied } = buildRateCandidates(ctx, taxBase);
  const outputTax = applied.outputTax;
  const localIncomeTax = Math.round(outputTax * LOCAL_INCOME_TAX_RATE);
  const totalPayableTax = outputTax + localIncomeTax;
  const deferrable = calcInstallmentDeferrable(totalPayableTax);

  if (occPeriods.isMultiHomeSurchargeExemptPeriod && input.houseCount !== "1" && input.isRegulatedArea) {
    warnings.push(
      "2026년 5월 9일까지 양도·보유 2년 이상 주택은 다주택 중과가 배제됩니다(시행령 §167의3).",
    );
  }

  return {
    grossGain,
    isFullyExempt: false,
    exemptReason: null,
    taxableGain,
    highPriceApportionmentRatio: formerExempt.highPriceApportionmentRatio,
    longTermDeductionRate,
    longTermDeductionTable,
    holdingDeductionRate,
    residenceDeductionRate,
    longTermDeductionAmount,
    transferIncome,
    basicDeduction: taxBase > 0 || transferIncome > 0 ? BASIC_DEDUCTION : 0,
    taxBase,
    appliedRateLabel: applied.label,
    appliedEffectiveRate: applied.effectiveTopRate,
    rateCandidates: candidates,
    outputTax,
    localIncomeTax,
    totalPayableTax,
    installmentEligible: deferrable > 0,
    installmentDeferrableAmount: deferrable,
    filingDeadlineNote:
      "양도일(원칙: 잔금·대금청산일)이 속하는 달 말일부터 2개월 이내 예정신고·납부(국세청 양도소득세 개요).",
    warnings,
    formerHousingGain: split.formerHousingGain,
    occupancyRightsGain: split.occupancyRightsGain,
    longTermDeductionEligibleGain: ltdEligibleGain,
    ...periodResult,
  };
}

export function computeCapitalGainsTax(input: CapitalGainsTaxInput): CapitalGainsTaxResult {
  if (input.assetType === "occupancy-right") {
    return computeOccupancyRightsTax(input);
  }

  const periods = resolvePeriods(input);
  if (!periods) {
    return {
      grossGain: 0,
      isFullyExempt: true,
      exemptReason: "취득일·양도일을 올바르게 입력해 주세요. 양도일은 취득일 이후여야 합니다.",
      taxableGain: 0,
      highPriceApportionmentRatio: null,
      longTermDeductionRate: 0,
      longTermDeductionTable: "none",
      holdingDeductionRate: 0,
      residenceDeductionRate: 0,
      longTermDeductionAmount: 0,
      transferIncome: 0,
      basicDeduction: 0,
      taxBase: 0,
      appliedRateLabel: "입력 오류",
      appliedEffectiveRate: 0,
      rateCandidates: [],
      outputTax: 0,
      localIncomeTax: 0,
      totalPayableTax: 0,
      installmentEligible: false,
      installmentDeferrableAmount: 0,
      filingDeadlineNote: "",
      warnings: [],
      holdingPeriodLabel: "",
      residencePeriodLabel: "",
      holdingCompleteYears: 0,
      residenceCompleteYears: 0,
      ...emptyResultFields(),
    };
  }

  const ctx: ComputationContext = { ...input, ...periods };
  const warnings: string[] = [];
  const grossGain = input.transferPrice - input.acquisitionCost - input.necessaryExpenses;
  const periodResult = periodFields(periods);

  if (
    !ctx.meetsRegulatedAreaResidenceRule &&
    ctx.isOneHouseholdOneHome &&
    ctx.isRegulatedArea
  ) {
    warnings.push(
      "2017.8.3 이후 조정대상지역 취득 주택은 양도 전 2년 이상 거주해야 1세대 1주택 비과세·거주요건을 충족합니다.",
    );
  }

  const exemption = resolveExemption(ctx, grossGain);
  if (exemption.isFullyExempt) {
    return {
      grossGain,
      isFullyExempt: true,
      exemptReason: exemption.exemptReason,
      taxableGain: 0,
      highPriceApportionmentRatio: exemption.highPriceApportionmentRatio,
      longTermDeductionRate: 0,
      longTermDeductionTable: "none",
      holdingDeductionRate: 0,
      residenceDeductionRate: 0,
      longTermDeductionAmount: 0,
      transferIncome: 0,
      basicDeduction: 0,
      taxBase: 0,
      appliedRateLabel: "비과세",
      appliedEffectiveRate: 0,
      rateCandidates: [],
      outputTax: 0,
      localIncomeTax: 0,
      totalPayableTax: 0,
      installmentEligible: false,
      installmentDeferrableAmount: 0,
      filingDeadlineNote:
        "비과세·무과세 해당 시에도 필요경비 증빙·양도 사실 확인을 위해 홈택스 안내를 참고하세요.",
      warnings,
      ...periodResult,
      ...emptyResultFields(),
    };
  }

  const longTerm = resolveLongTermDeduction(ctx, exemption.taxableGain);
  warnings.push(...longTerm.warnings);

  const transferIncome = Math.max(0, exemption.taxableGain - longTerm.longTermDeductionAmount);
  const taxBase = Math.max(0, transferIncome - BASIC_DEDUCTION);

  const { candidates, applied } = buildRateCandidates(ctx, taxBase);
  const outputTax = applied.outputTax;
  const localIncomeTax = Math.round(outputTax * LOCAL_INCOME_TAX_RATE);
  const totalPayableTax = outputTax + localIncomeTax;
  const deferrable = calcInstallmentDeferrable(totalPayableTax);

  if (
    ctx.isMultiHomeSurchargeExemptPeriod &&
    ctx.houseCount !== "1" &&
    ctx.isRegulatedArea &&
    ctx.assetType !== "presale"
  ) {
    warnings.push(
      "2026년 5월 9일까지 양도·보유 2년 이상 주택은 다주택 중과가 배제됩니다(시행령 §167의3).",
    );
  }

  if (ctx.assetType === "presale" && ctx.houseCount !== "1" && ctx.isRegulatedArea) {
    warnings.push(
      "주택분양권 양도는 보유 1년 미만 70%·1년 이상 60% 전용세율이 적용됩니다. 다주택 중과는 조정지역 내 주택 양도 시 해당하며, 분양권은 주택 수 산정에만 포함될 수 있습니다(2021.1.1 이후 취득).",
    );
  }

  return {
    grossGain,
    isFullyExempt: false,
    exemptReason: null,
    taxableGain: exemption.taxableGain,
    highPriceApportionmentRatio: exemption.highPriceApportionmentRatio,
    longTermDeductionRate: longTerm.longTermDeductionRate,
    longTermDeductionTable: longTerm.longTermDeductionTable,
    holdingDeductionRate: longTerm.holdingDeductionRate,
    residenceDeductionRate: longTerm.residenceDeductionRate,
    longTermDeductionAmount: longTerm.longTermDeductionAmount,
    transferIncome,
    basicDeduction: taxBase > 0 || transferIncome > 0 ? BASIC_DEDUCTION : 0,
    taxBase,
    appliedRateLabel: applied.label,
    appliedEffectiveRate: applied.effectiveTopRate,
    rateCandidates: candidates,
    outputTax,
    localIncomeTax,
    totalPayableTax,
    installmentEligible: deferrable > 0,
    installmentDeferrableAmount: deferrable,
    filingDeadlineNote:
      "양도일(원칙: 잔금·대금청산일)이 속하는 달 말일부터 2개월 이내 예정신고·납부(국세청 양도소득세 개요).",
    warnings,
    ...periodResult,
    ...emptyResultFields(),
  };
}
