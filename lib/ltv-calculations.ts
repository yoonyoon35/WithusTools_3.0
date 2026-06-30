/** 은행권 주택담보대출 LTV·한도 간이 산출 (참고용). 정책 변경 시 수치 조정. */

export type LtvRegionType = "non-regulated" | "regulated";
export type LtvHomeOwnership = "none" | "one" | "multiple";
export type LtvMetroArea = "capital" | "non-capital";

export const LTV_BANK_LOAN_CAP_WON = 600_000_000;

export const ltvRegionTypeLabels: Record<LtvRegionType, string> = {
  "non-regulated": "비규제지역",
  regulated: "규제지역",
};

export const ltvHomeOwnershipLabels: Record<LtvHomeOwnership, string> = {
  none: "무주택",
  one: "1주택",
  multiple: "다주택(2주택 이상)",
};

export const ltvMetroAreaLabels: Record<LtvMetroArea, string> = {
  capital: "수도권·규제지역",
  "non-capital": "비수도권",
};

export interface LtvAppliedBasisItem {
  label: string;
  value: string;
}

/** 계산 결과에 표시할 사용자 선택·적용 조건 요약 */
export function buildLtvAppliedBasisItems(
  context: LtvLimitContext,
  options?: { applyLoanCap?: boolean },
): readonly LtvAppliedBasisItem[] {
  const items: LtvAppliedBasisItem[] = [
    { label: "지역 구분", value: ltvRegionTypeLabels[context.regionType] },
    { label: "주택 보유", value: ltvHomeOwnershipLabels[context.homeOwnership] },
  ];

  if (context.homeOwnership === "none") {
    items.push({
      label: "생애최초",
      value: context.isFirstTimeBuyer ? "해당" : "해당 없음",
    });
    if (context.isFirstTimeBuyer) {
      items.push({
        label: "생애최초 지역",
        value: ltvMetroAreaLabels[context.metroArea],
      });
    }
  }

  if (options?.applyLoanCap != null) {
    items.push({
      label: "은행권 6억 캡",
      value: options.applyLoanCap ? "적용" : "미적용",
    });
  }

  return items;
}

export interface LtvLimitContext {
  regionType: LtvRegionType;
  homeOwnership: LtvHomeOwnership;
  isFirstTimeBuyer: boolean;
  metroArea: LtvMetroArea;
}

export interface LtvLimitResolution {
  ltvLimitPercent: number;
  reasonLabel: string;
  loanUnavailable: boolean;
}

/** 보유·지역·생애최초 조건에 따른 LTV 한도(%). 2026년 3~4월 가이드 기준 간이 모델. */
export function resolveLtvLimit(ctx: LtvLimitContext): LtvLimitResolution {
  const { regionType, homeOwnership, isFirstTimeBuyer, metroArea } = ctx;

  if (homeOwnership === "multiple" && regionType === "regulated") {
    return {
      ltvLimitPercent: 0,
      reasonLabel: "규제지역 다주택자 — 주택 구입 목적 주담대 LTV 0%(사실상 불가)",
      loanUnavailable: true,
    };
  }

  if (homeOwnership === "none" && isFirstTimeBuyer && metroArea === "non-capital") {
    return {
      ltvLimitPercent: 80,
      reasonLabel: "생애최초 주택 구입(비수도권)",
      loanUnavailable: false,
    };
  }

  if (regionType === "regulated" && homeOwnership === "one") {
    return {
      ltvLimitPercent: 40,
      reasonLabel: "규제지역 1주택자",
      loanUnavailable: false,
    };
  }

  if (homeOwnership === "multiple") {
    return {
      ltvLimitPercent: 60,
      reasonLabel: "비규제지역 다주택자",
      loanUnavailable: false,
    };
  }

  if (homeOwnership === "none" && isFirstTimeBuyer && metroArea === "capital") {
    return {
      ltvLimitPercent: 70,
      reasonLabel: "생애최초 주택 구입(수도권·규제지역)",
      loanUnavailable: false,
    };
  }

  return {
    ltvLimitPercent: 70,
    reasonLabel: homeOwnership === "none" ? "무주택자(일반)" : "1주택자(비규제지역)",
    loanUnavailable: false,
  };
}

export interface LtvCalculationInput {
  collateralValueWon: number;
  /** 신규·추가 대출 희망액(선택). 입력 시 LTV(%)와 한도 충족 여부를 함께 표시. */
  plannedLoanWon?: number;
  /** 담보에 이미 설정된 선순위 채권(근저당·기존 주담대 등). */
  seniorLienWon: number;
  applyLoanCap: boolean;
  context: LtvLimitContext;
}

export interface LtvCalculationResult {
  limit: LtvLimitResolution;
  /** 담보가 × LTV 한도(%). 선순위 차감 전. */
  grossEncumbranceCapWon: number;
  /** 선순위 차감 후 신규 대출 가능액(6억 캡 적용 전). */
  netMaxLoanWon: number;
  /** 6억 원 캡 등 적용 후 최종 참고 대출 가능액. */
  finalMaxLoanWon: number;
  loanCapAppliedWon: number | null;
  /** 매매가=담보가 가정 시 필요 자기자금(선순위 없음·최대 대출 시). */
  requiredEquityWon: number;
  /** (선순위+희망 대출)÷담보가. plannedLoan 미입력 시 null. */
  currentLtvPercent: number | null;
  /** plannedLoan 입력 시 한도 이내 여부. */
  withinLimit: boolean | null;
  totalEncumbranceWon: number | null;
}

export function computeLtvSnapshot(input: LtvCalculationInput): LtvCalculationResult | null {
  const collateral = input.collateralValueWon;
  if (!Number.isFinite(collateral) || collateral <= 0) return null;

  const senior = Math.max(0, input.seniorLienWon ?? 0);
  const limit = resolveLtvLimit(input.context);

  const grossEncumbranceCapWon = Math.floor((collateral * limit.ltvLimitPercent) / 100);
  const netMaxLoanWon = limit.loanUnavailable
    ? 0
    : Math.max(0, grossEncumbranceCapWon - senior);

  let finalMaxLoanWon = netMaxLoanWon;
  let loanCapAppliedWon: number | null = null;
  if (input.applyLoanCap && netMaxLoanWon > LTV_BANK_LOAN_CAP_WON) {
    loanCapAppliedWon = LTV_BANK_LOAN_CAP_WON;
    finalMaxLoanWon = LTV_BANK_LOAN_CAP_WON;
  }

  const requiredEquityWon = Math.max(0, collateral - finalMaxLoanWon - senior);

  const planned = input.plannedLoanWon;
  let currentLtvPercent: number | null = null;
  let withinLimit: boolean | null = null;
  let totalEncumbranceWon: number | null = null;

  if (planned != null && Number.isFinite(planned) && planned >= 0) {
    totalEncumbranceWon = senior + planned;
    currentLtvPercent = (totalEncumbranceWon / collateral) * 100;
    withinLimit = limit.loanUnavailable ? false : currentLtvPercent <= limit.ltvLimitPercent + 1e-9;
  }

  return {
    limit,
    grossEncumbranceCapWon,
    netMaxLoanWon,
    finalMaxLoanWon,
    loanCapAppliedWon,
    requiredEquityWon,
    currentLtvPercent,
    withinLimit,
    totalEncumbranceWon,
  };
}

/** 기준표용 — 조건별 LTV 한도 요약 행 */
export const ltvReferenceRows: readonly { condition: string; ltv: string; note?: string }[] = [
  { condition: "비규제지역 · 무주택(일반)", ltv: "70%" },
  { condition: "비규제지역 · 1주택", ltv: "70%" },
  { condition: "비규제지역 · 다주택", ltv: "60%" },
  { condition: "규제지역 · 무주택(일반)", ltv: "70%" },
  { condition: "규제지역 · 1주택", ltv: "40%", note: "2026년 기준" },
  { condition: "규제지역 · 다주택", ltv: "0%", note: "주택 구입 목적 주담대 사실상 불가" },
  { condition: "생애최초 · 비수도권", ltv: "80%", note: "무주택자 한정" },
  { condition: "생애최초 · 수도권·규제지역", ltv: "70%", note: "무주택자 한정" },
] as const;
