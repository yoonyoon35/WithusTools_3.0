import {
  buildExportTextFooter,
  buildExportTextHeader,
} from "@/lib/calculator-result-export";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber } from "@/lib/loan-calculations";

/**
 * 제1종 국민주택채권 매입 기준 — 주택도시기금법 제8조, 같은 법 시행령 제8조제2항 [별표].
 * 매입금액 = 시가표준액(근저당은 설정금액) × 등기 유형·지역별 매입률(‰), 1만 원 미만 단수는 5천 원 이상 올림·미만 버림.
 */
export const HOUSING_BOND_FORMULA = "매입금액 = 시가표준액 × 매입률(‰) · 근저당은 설정금액 × 10/1,000";

export type BondAcquisition = "paid" | "free";
export type BondPropertyKind = "housing" | "land" | "other";
export type BondRegion = "metro" | "other";

export const bondAcquisitionLabels: Record<BondAcquisition, string> = {
  paid: "소유권 이전(매매 등 유상 취득)",
  free: "상속·증여 등 무상 취득",
};

export const bondPropertyKindLabels: Record<BondPropertyKind, string> = {
  housing: "주택(아파트·단독주택 등)",
  land: "토지",
  other: "주택·토지 외(오피스텔·상가 등)",
};

export const bondRegionLabels: Record<BondRegion, string> = {
  metro: "서울특별시·광역시",
  other: "그 밖의 지역",
};

export const bondRegionHints: Record<BondRegion, string> = {
  metro: "서울특별시와 부산·대구·인천·광주·대전·울산광역시",
  other: "경기·세종·강원·충청·전라·경상·제주 등 위 지역을 제외한 곳",
};

interface BondTier {
  /** 구간 하한(이상). 직전 구간 하한 미만이면 해당 없음 */
  min: number;
  label: string;
  /** 서울특별시·광역시 매입률(‰) */
  metro: number;
  /** 그 밖의 지역 매입률(‰) */
  other: number;
}

/** 유상 취득(소유권 이전) 구간표. 구간은 '이상 ~ 미만'. */
export const paidBondTiers: Record<BondPropertyKind, readonly BondTier[]> = {
  housing: [
    { min: 20_000_000, label: "2천만 원 이상 ~ 5천만 원 미만", metro: 13, other: 13 },
    { min: 50_000_000, label: "5천만 원 이상 ~ 1억 원 미만", metro: 19, other: 14 },
    { min: 100_000_000, label: "1억 원 이상 ~ 1억 6천만 원 미만", metro: 21, other: 16 },
    { min: 160_000_000, label: "1억 6천만 원 이상 ~ 2억 6천만 원 미만", metro: 23, other: 18 },
    { min: 260_000_000, label: "2억 6천만 원 이상 ~ 6억 원 미만", metro: 26, other: 21 },
    { min: 600_000_000, label: "6억 원 이상", metro: 31, other: 26 },
  ],
  land: [
    { min: 5_000_000, label: "5백만 원 이상 ~ 5천만 원 미만", metro: 25, other: 20 },
    { min: 50_000_000, label: "5천만 원 이상 ~ 1억 원 미만", metro: 40, other: 35 },
    { min: 100_000_000, label: "1억 원 이상", metro: 50, other: 45 },
  ],
  other: [
    { min: 10_000_000, label: "1천만 원 이상 ~ 1억 3천만 원 미만", metro: 10, other: 8 },
    { min: 130_000_000, label: "1억 3천만 원 이상 ~ 2억 5천만 원 미만", metro: 16, other: 14 },
    { min: 250_000_000, label: "2억 5천만 원 이상", metro: 20, other: 18 },
  ],
};

/** 상속·증여 등 무상 취득 구간표(부동산 종류 구분 없음). */
export const freeBondTiers: readonly BondTier[] = [
  { min: 10_000_000, label: "1천만 원 이상 ~ 5천만 원 미만", metro: 18, other: 14 },
  { min: 50_000_000, label: "5천만 원 이상 ~ 1억 5천만 원 미만", metro: 28, other: 25 },
  { min: 150_000_000, label: "1억 5천만 원 이상", metro: 42, other: 39 },
];

/** 저당권(근저당) 설정: 설정금액 2천만 원 이상 → 10/1,000, 매입금액 10억 원 상한. */
export const MORTGAGE_BOND_MIN_AMOUNT = 20_000_000;
export const MORTGAGE_BOND_RATE_PER_THOUSAND = 10;
export const MORTGAGE_BOND_CAP = 1_000_000_000;

/** 참고 비교용 가정 할인율(%). 실제 할인율은 은행·날짜마다 다릅니다. */
export const BOND_SAMPLE_DISCOUNT_RATES = [5, 7, 10] as const;

export interface HousingBondInput {
  acquisition: BondAcquisition;
  propertyKind: BondPropertyKind;
  region: BondRegion;
  /** 시가표준액(원) — 공동주택은 세대당, 공유물은 전체 기준 */
  standardValueWon: number;
  /** 취득 지분율(%). 공유지분율에 따라 시가표준액을 산정 */
  sharePercent: number;
  /** 근저당권 설정 동시 여부 */
  withMortgage: boolean;
  /** 채권최고액(근저당 설정금액, 원) */
  mortgageAmountWon: number;
}

export interface TransferBondResult {
  applicable: boolean;
  /** 기준 금액(시가표준액 × 지분율) */
  baseWon: number;
  tierLabel: string | null;
  ratePerThousand: number | null;
  rawAmount: number;
  amount: number;
  reason: string | null;
}

export interface MortgageBondResult {
  applicable: boolean;
  settingAmountWon: number;
  rawAmount: number;
  amount: number;
  capped: boolean;
  reason: string | null;
}

export interface HousingBondResult {
  input: HousingBondInput;
  transfer: TransferBondResult;
  mortgage: MortgageBondResult | null;
  /** 이전·근저당을 각각 매입하는 경우의 합계 */
  totalAmount: number;
}

/** 1만 원 미만 단수: 5천 원 이상이면 1만 원으로 올리고, 5천 원 미만이면 버립니다. */
export function roundBondAmount(amount: number): number {
  if (!Number.isFinite(amount) || amount <= 0) return 0;
  const unit = 10_000;
  const whole = Math.floor(amount / unit) * unit;
  const remainder = amount - whole;
  return remainder >= 5_000 ? whole + unit : whole;
}

function pickTier(tiers: readonly BondTier[], base: number): BondTier | null {
  let found: BondTier | null = null;
  for (const tier of tiers) {
    if (base >= tier.min) found = tier;
  }
  return found;
}

function minThreshold(tiers: readonly BondTier[]): number {
  return tiers[0]?.min ?? 0;
}

function formatThresholdWon(won: number): string {
  return formatAmountKoreanWon(won);
}

export function getBondTiers(acquisition: BondAcquisition, kind: BondPropertyKind): readonly BondTier[] {
  return acquisition === "free" ? freeBondTiers : paidBondTiers[kind];
}

export function formatRatePerThousand(rate: number): string {
  const percent = rate / 10;
  return `${rate}/1,000 (${percent % 1 === 0 ? percent.toFixed(0) : percent.toFixed(1)}%)`;
}

export function computeTransferBond(input: HousingBondInput): TransferBondResult {
  const share = Math.min(100, Math.max(0, input.sharePercent));
  const baseWon = Math.round((input.standardValueWon * share) / 100);
  const tiers = getBondTiers(input.acquisition, input.propertyKind);
  const threshold = minThreshold(tiers);

  if (baseWon <= 0) {
    return {
      applicable: false,
      baseWon,
      tierLabel: null,
      ratePerThousand: null,
      rawAmount: 0,
      amount: 0,
      reason: "시가표준액과 지분율을 입력해 주세요.",
    };
  }

  const tier = pickTier(tiers, baseWon);
  if (!tier) {
    return {
      applicable: false,
      baseWon,
      tierLabel: null,
      ratePerThousand: null,
      rawAmount: 0,
      amount: 0,
      reason: `시가표준액이 ${formatThresholdWon(threshold)} 미만이라 국민주택채권을 매입하지 않습니다.`,
    };
  }

  const rate = input.region === "metro" ? tier.metro : tier.other;
  const rawAmount = (baseWon * rate) / 1000;
  return {
    applicable: true,
    baseWon,
    tierLabel: tier.label,
    ratePerThousand: rate,
    rawAmount,
    amount: roundBondAmount(rawAmount),
    reason: null,
  };
}

export function computeMortgageBond(settingAmountWon: number): MortgageBondResult {
  if (!(settingAmountWon > 0)) {
    return {
      applicable: false,
      settingAmountWon: 0,
      rawAmount: 0,
      amount: 0,
      capped: false,
      reason: "채권최고액을 입력해 주세요.",
    };
  }
  if (settingAmountWon < MORTGAGE_BOND_MIN_AMOUNT) {
    return {
      applicable: false,
      settingAmountWon,
      rawAmount: 0,
      amount: 0,
      capped: false,
      reason: "근저당 설정금액이 2천만 원 미만이라 국민주택채권을 매입하지 않습니다.",
    };
  }
  const rawAmount = (settingAmountWon * MORTGAGE_BOND_RATE_PER_THOUSAND) / 1000;
  const capped = rawAmount > MORTGAGE_BOND_CAP;
  const amount = capped ? MORTGAGE_BOND_CAP : roundBondAmount(rawAmount);
  return {
    applicable: true,
    settingAmountWon,
    rawAmount,
    amount,
    capped,
    reason: null,
  };
}

export function computeHousingBond(input: HousingBondInput): HousingBondResult {
  const transfer = computeTransferBond(input);
  const mortgage = input.withMortgage ? computeMortgageBond(input.mortgageAmountWon) : null;
  const totalAmount = (transfer.applicable ? transfer.amount : 0) + (mortgage?.applicable ? mortgage.amount : 0);
  return { input, transfer, mortgage, totalAmount };
}

/** 즉시 매도 시 실제 부담(할인 손실) = 매입금액 × 할인율 */
export function computeDiscountBurden(bondAmount: number, discountRatePercent: number): number {
  if (!(bondAmount > 0) || !(discountRatePercent > 0)) return 0;
  return Math.round((bondAmount * discountRatePercent) / 100);
}

export const housingBondReferenceRows = {
  paid: (kind: BondPropertyKind) =>
    paidBondTiers[kind].map((tier) => [tier.label, formatRatePerThousand(tier.metro), formatRatePerThousand(tier.other)]),
  free: freeBondTiers.map((tier) => [tier.label, formatRatePerThousand(tier.metro), formatRatePerThousand(tier.other)]),
} as const;

export function formatHousingBondResultText(args: {
  result: HousingBondResult;
  discountRatePercent: number | null;
}): string {
  const { result, discountRatePercent } = args;
  const { input, transfer, mortgage } = result;
  const lines = [...buildExportTextHeader("국민주택채권 계산기")];
  const money = (label: string, amount: number) =>
    `${label}: ${formatNumber(Math.round(amount))}원 (${formatAmountKoreanWon(amount)})`;

  lines.push("[조건]");
  lines.push(`- 등기 유형: ${bondAcquisitionLabels[input.acquisition]}`);
  if (input.acquisition === "paid") lines.push(`- 부동산 종류: ${bondPropertyKindLabels[input.propertyKind]}`);
  lines.push(`- 지역: ${bondRegionLabels[input.region]}`);
  lines.push(money("- 시가표준액", input.standardValueWon));
  if (input.sharePercent !== 100) lines.push(`- 취득 지분: ${input.sharePercent}%`);
  lines.push("");

  lines.push("[소유권 이전·취득 등기]");
  if (transfer.applicable && transfer.ratePerThousand != null) {
    lines.push(`- 적용 구간: ${transfer.tierLabel}`);
    lines.push(`- 매입률: ${formatRatePerThousand(transfer.ratePerThousand)}`);
    lines.push(money("- 기준 금액", transfer.baseWon));
    lines.push(money("- 매입금액", transfer.amount));
  } else {
    lines.push(`- ${transfer.reason ?? "매입 대상 아님"}`);
  }

  if (mortgage) {
    lines.push("");
    lines.push("[근저당권 설정 등기]");
    if (mortgage.applicable) {
      lines.push(money("- 채권최고액", mortgage.settingAmountWon));
      lines.push(money("- 매입금액", mortgage.amount) + (mortgage.capped ? " (10억 원 상한 적용)" : ""));
    } else {
      lines.push(`- ${mortgage.reason ?? "매입 대상 아님"}`);
    }
  }

  lines.push("");
  lines.push("[합계]");
  lines.push(money("매입금액 합계(이전·근저당 각각 매입 가정)", result.totalAmount));

  const rates: number[] = [...BOND_SAMPLE_DISCOUNT_RATES];
  if (discountRatePercent != null && discountRatePercent > 0 && !rates.includes(discountRatePercent)) {
    rates.unshift(discountRatePercent);
  }
  if (result.totalAmount > 0) {
    lines.push("");
    lines.push("[즉시 매도 시 실제 부담(할인 손실)]");
    for (const rate of rates) {
      lines.push(money(`- 할인율 ${rate}%`, computeDiscountBurden(result.totalAmount, rate)));
    }
  }

  lines.push(...buildExportTextFooter());
  return lines.join("\n");
}
