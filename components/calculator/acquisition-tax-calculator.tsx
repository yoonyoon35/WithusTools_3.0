"use client";

import { AcquisitionTaxCalculatorReference } from "@/components/calculator/reference";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber, removeCommas } from "@/lib/loan-calculations";
import { CircleHelp } from "lucide-react";

type HouseCount = "1" | "2" | "3" | "4+";
type AcquisitionType = "paid" | "gift" | "inheritance" | "original";
type PropertyCategory = "house" | "non-house" | "farmland";
type FarmlandSaleType = "new" | "self-cultivation";
type NonHouseDetailType = "general" | "office-business" | "office-residential";

/** 생애최초 등 확대 감면(한도 300만 원) vs 일반 감면(한도 200만 원) — 행정 해석·개정 시 조정 */
type LifetimeFirstReliefTier = "general" | "extended";

/** 지방세특례제한법 시행령 등에 따른 생애최초 주택 취득세 감면(운영기준) 단순화 모델. 참고용. */
const LIFETIME_FIRST_DEDUCTION_CAP_GENERAL_WON = 2_000_000;
const LIFETIME_FIRST_DEDUCTION_CAP_EXTENDED_WON = 3_000_000;

interface TaxResult {
  taxableBase: number;
  acquisitionTaxRate: number;
  acquisitionTax: number;
  acquisitionTaxGross?: number;
  lifetimeFirstReliefDeduction?: number;
  localEducationTaxRate: number;
  localEducationTax: number;
  ruralSpecialTaxRate: number;
  ruralSpecialTax: number;
  totalTax: number;
}

function getGeneralAcquisitionTaxRate(price: number): number {
  if (price <= 600_000_000) return 0.01;
  if (price <= 900_000_000) {
    return (price * (2 / 3 / 100_000_000) - 3) / 100;
  }
  return 0.03;
}

/** 주택·매매 기준 산출 취득세율 (생애최초 감면 전 단계) */
function calculateAcquisitionTaxRate(price: number, houseCount: HouseCount, isAdjustedArea: boolean): number {
  const generalRate = getGeneralAcquisitionTaxRate(price);

  if (houseCount === "1") return generalRate;
  if (houseCount === "2") return isAdjustedArea ? 0.08 : generalRate;
  if (houseCount === "3") return isAdjustedArea ? 0.12 : 0.08;
  return 0.12;
}

function getLifetimeFirstDeductionCapWon(tier: LifetimeFirstReliefTier): number {
  return tier === "extended" ? LIFETIME_FIRST_DEDUCTION_CAP_EXTENDED_WON : LIFETIME_FIRST_DEDUCTION_CAP_GENERAL_WON;
}

/** 산출 취득세에서 감면 한도만큼 공제(산출세액이 한도 이하면 전액 면제). */
function applyLifetimeFirstAcquisitionTaxDeduction(
  grossAcquisitionTaxWon: number,
  tier: LifetimeFirstReliefTier,
): { netWon: number; deductionWon: number } {
  const cap = getLifetimeFirstDeductionCapWon(tier);
  if (grossAcquisitionTaxWon <= 0) return { netWon: 0, deductionWon: 0 };
  if (grossAcquisitionTaxWon <= cap) return { netWon: 0, deductionWon: grossAcquisitionTaxWon };
  return { netWon: grossAcquisitionTaxWon - cap, deductionWon: cap };
}

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function clampRate(rate: number): number {
  return Math.min(1, Math.max(0, rate));
}

function getNonPaidAcquisitionTaxRate(type: AcquisitionType): number {
  if (type === "gift") return 0.035;
  if (type === "inheritance") return 0.028;
  if (type === "original") return 0.028;
  return 0;
}

function getHouseNonPaidLocalEducationTaxRate(type: AcquisitionType): number {
  if (type === "gift") return 0.003;
  if (type === "inheritance" || type === "original") return 0.0016;
  return 0;
}

function calculateRuralSpecialTaxRate(houseCount: HouseCount, isAdjustedArea: boolean, isOver85: boolean): number {
  if (!isOver85) return 0;
  if (houseCount === "1") return 0.002;
  if (houseCount === "2") return isAdjustedArea ? 0.006 : 0.002;
  if (houseCount === "3") return isAdjustedArea ? 0.01 : 0.006;
  return 0.01;
}

function getNonHouseRates(
  type: AcquisitionType,
  _detailType: NonHouseDetailType,
): { acquisition: number; rural: number; education: number } {
  if (type === "paid") return { acquisition: 0.04, rural: 0.002, education: 0.004 };
  if (type === "gift") return { acquisition: 0.035, rural: 0.002, education: 0.003 };
  return { acquisition: 0.028, rural: 0.002, education: 0.0016 };
}

function getFarmlandRates(
  type: AcquisitionType,
  saleType: FarmlandSaleType,
  applyFarmingInheritanceRelief: boolean,
): { acquisition: number; rural: number; education: number } | null {
  if (type === "paid") {
    if (saleType === "self-cultivation") {
      return { acquisition: 0.015, rural: 0, education: 0.001 };
    }
    return { acquisition: 0.03, rural: 0.002, education: 0.002 };
  }
  if (type === "gift") {
    return { acquisition: 0.035, rural: 0.002, education: 0.003 };
  }
  if (type === "inheritance") {
    if (applyFarmingInheritanceRelief) {
      return { acquisition: 0.003, rural: 0, education: 0.0006 };
    }
    return { acquisition: 0.023, rural: 0.002, education: 0.0006 };
  }
  if (type === "original") {
    return { acquisition: 0.028, rural: 0.002, education: 0.0016 };
  }
  return null;
}

function toPercent(rate: number): string {
  return `${(rate * 100).toFixed(3).replace(/\.?0+$/, "")}%`;
}

function ResultAmountBlock({ amount, className }: { amount: number; className?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className={className}>{formatNumber(amount)}원</span>
      <span className="text-muted-foreground text-xs font-normal leading-relaxed" aria-label={`한글 금액 ${formatAmountKoreanWon(amount)}`}>
        {formatAmountKoreanWon(amount)}
      </span>
    </div>
  );
}

function ResultTaxWithRate({ amount, rate }: { amount: number; rate: number }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-lg font-semibold tabular-nums">
        {formatNumber(amount)}원 ({toPercent(rate)})
      </span>
      <span className="text-muted-foreground text-xs font-normal leading-relaxed" aria-label={`한글 금액 ${formatAmountKoreanWon(amount)}`}>
        {formatAmountKoreanWon(amount)}
      </span>
    </div>
  );
}

export function AcquisitionTaxCalculator() {
  const [propertyCategory, setPropertyCategory] = React.useState<PropertyCategory>("house");
  const [nonHouseDetailType, setNonHouseDetailType] = React.useState<NonHouseDetailType>("general");
  const [acquisitionType, setAcquisitionType] = React.useState<AcquisitionType>("paid");
  const [farmlandSaleType, setFarmlandSaleType] = React.useState<FarmlandSaleType>("new");
  const [applyFarmingInheritanceRelief, setApplyFarmingInheritanceRelief] = React.useState(false);
  const [priceDisplay, setPriceDisplay] = React.useState("");
  const [officialValueDisplay, setOfficialValueDisplay] = React.useState("");
  const [houseCount, setHouseCount] = React.useState<HouseCount>("1");
  const [isAdjustedArea, setIsAdjustedArea] = React.useState(false);
  const [isOver85, setIsOver85] = React.useState(false);
  const [applyLifetimeFirstRelief, setApplyLifetimeFirstRelief] = React.useState(false);
  const [lifetimeFirstTier, setLifetimeFirstTier] = React.useState<LifetimeFirstReliefTier>("general");
  const [result, setResult] = React.useState<TaxResult | null>(null);

  const isHouseCategory = propertyCategory === "house";
  const isNonHouseCategory = propertyCategory === "non-house";
  const isFarmlandCategory = propertyCategory === "farmland";
  const isPaidType = acquisitionType === "paid";
  const isGiftType = acquisitionType === "gift";
  const isInheritanceType = acquisitionType === "inheritance";
  const isOriginalType = acquisitionType === "original";
  const usesOfficialValueOnly = isGiftType || isInheritanceType || isOriginalType;
  const isAdjustedToggleEnabled = isHouseCategory && isPaidType && houseCount !== "1";
  const showHouseInputs = isHouseCategory && isPaidType;
  const showLifetimeFirstInputs = showHouseInputs && houseCount === "1";
  const showAreaOver85Input = isHouseCategory;

  React.useEffect(() => {
    if (!isAdjustedToggleEnabled) setIsAdjustedArea(false);
  }, [isAdjustedToggleEnabled]);

  React.useEffect(() => {
    if (!showLifetimeFirstInputs) {
      setApplyLifetimeFirstRelief(false);
      setLifetimeFirstTier("general");
    }
  }, [showLifetimeFirstInputs]);

  React.useEffect(() => {
    if (isHouseCategory) {
      if (acquisitionType !== "paid" && acquisitionType !== "gift" && acquisitionType !== "inheritance" && acquisitionType !== "original") {
        setAcquisitionType("paid");
      }
      return;
    }
    if (isNonHouseCategory) {
      if (acquisitionType !== "paid" && acquisitionType !== "gift" && acquisitionType !== "inheritance" && acquisitionType !== "original") {
        setAcquisitionType("paid");
      }
      setIsAdjustedArea(false);
      return;
    }
    if (isFarmlandCategory) {
      if (acquisitionType !== "paid" && acquisitionType !== "gift" && acquisitionType !== "inheritance" && acquisitionType !== "original") {
        setAcquisitionType("paid");
      }
      setIsAdjustedArea(false);
      setIsOver85(false);
      if (acquisitionType !== "inheritance") {
        setApplyFarmingInheritanceRelief(false);
      }
    }
  }, [acquisitionType, isFarmlandCategory, isHouseCategory, isNonHouseCategory]);

  const onMoneyInputChange = (raw: string, setter: (value: string) => void) => {
    const num = raw.replace(/[^0-9]/g, "");
    setter(num ? addCommas(num) : "");
  };

  const performCalculation = () => {
    const acquisitionPrice = parseFloat(removeCommas(priceDisplay)) || 0;
    const officialValue = parseFloat(removeCommas(officialValueDisplay)) || 0;
    const taxableBase = usesOfficialValueOnly ? officialValue : Math.max(acquisitionPrice, officialValue);

    if (usesOfficialValueOnly && officialValue <= 0) {
      const typeText = isGiftType ? "증여" : isInheritanceType ? "상속" : "원시";
      window.alert(`${typeText}는 시가표준액(또는 시가인정액)을 올바르게 입력해주세요.`);
      return;
    }

    if (!usesOfficialValueOnly && taxableBase <= 0) {
      window.alert("취득가액 또는 시가표준액 중 하나 이상을 올바르게 입력해주세요.");
      return;
    }

    let acquisitionTaxRate = 0;
    let localEducationTaxRate = 0;
    let ruralSpecialTaxRate = 0;

    if (isHouseCategory) {
      acquisitionTaxRate = clampRate(
        isPaidType ? calculateAcquisitionTaxRate(taxableBase, houseCount, isAdjustedArea) : getNonPaidAcquisitionTaxRate(acquisitionType),
      );
      localEducationTaxRate = clampRate(
        isPaidType ? 0 : getHouseNonPaidLocalEducationTaxRate(acquisitionType),
      );
      ruralSpecialTaxRate = clampRate(
        isPaidType ? calculateRuralSpecialTaxRate(houseCount, isAdjustedArea, isOver85) : isOver85 ? 0.002 : 0,
      );
    } else if (isNonHouseCategory) {
      if (nonHouseDetailType === "office-residential") {
        acquisitionTaxRate = clampRate(
          isPaidType
            ? calculateAcquisitionTaxRate(taxableBase, "1", false)
            : getNonPaidAcquisitionTaxRate(acquisitionType),
        );
        ruralSpecialTaxRate = clampRate(
          isPaidType ? calculateRuralSpecialTaxRate("1", false, isOver85) : isOver85 ? 0.002 : 0,
        );
        if (!isPaidType) {
          localEducationTaxRate = clampRate(getHouseNonPaidLocalEducationTaxRate(acquisitionType));
        }
      } else {
        const rates = getNonHouseRates(acquisitionType, nonHouseDetailType);
        acquisitionTaxRate = rates.acquisition;
        ruralSpecialTaxRate = rates.rural;
        localEducationTaxRate = rates.education;
      }
    } else {
      const rates = getFarmlandRates(acquisitionType, farmlandSaleType, applyFarmingInheritanceRelief);
      if (!rates) {
        window.alert("농지는 현재 매매, 증여, 상속 또는 원시 유형만 지원합니다.");
        return;
      }
      acquisitionTaxRate = rates.acquisition;
      ruralSpecialTaxRate = rates.rural;
      localEducationTaxRate = rates.education;
    }

    let acquisitionTax = taxableBase * acquisitionTaxRate;
    let acquisitionTaxGross: number | undefined;
    let lifetimeFirstReliefDeduction: number | undefined;

    const applyLifetimeFirstModel =
      applyLifetimeFirstRelief && isHouseCategory && isPaidType && houseCount === "1";

    if (applyLifetimeFirstModel) {
      acquisitionTaxGross = acquisitionTax;
      const applied = applyLifetimeFirstAcquisitionTaxDeduction(acquisitionTax, lifetimeFirstTier);
      acquisitionTax = applied.netWon;
      lifetimeFirstReliefDeduction = applied.deductionWon;
    }

    const usesHousePaidLocalEducationRule =
      (isHouseCategory || (isNonHouseCategory && nonHouseDetailType === "office-residential")) && isPaidType;

    let localEducationTax: number;
    if (usesHousePaidLocalEducationRule) {
      if (acquisitionTaxRate >= 0.08) {
        localEducationTaxRate = 0.004;
        localEducationTax = taxableBase * localEducationTaxRate;
      } else {
        localEducationTax = acquisitionTax * 0.1;
        localEducationTaxRate = taxableBase > 0 ? clampRate(localEducationTax / taxableBase) : 0;
      }
    } else {
      localEducationTax = taxableBase * localEducationTaxRate;
    }

    const ruralSpecialTax = taxableBase * ruralSpecialTaxRate;

    setResult({
      taxableBase,
      acquisitionTaxRate,
      acquisitionTax,
      acquisitionTaxGross,
      lifetimeFirstReliefDeduction,
      localEducationTaxRate,
      localEducationTax,
      ruralSpecialTaxRate,
      ruralSpecialTax,
      totalTax: acquisitionTax + localEducationTax + ruralSpecialTax,
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="acquisition-tax-calculator" className="scroll-mt-24">
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="propertyCategory">자산 구분</Label>
            <select
              id="propertyCategory"
              className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
              value={propertyCategory}
              onChange={(e) => setPropertyCategory(e.target.value as PropertyCategory)}
            >
              <option value="house">주택</option>
              <option value="non-house">주택 외 (토지, 건물 등)</option>
              <option value="farmland">농지</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="acquisitionType">취득유형</Label>
            <select
              id="acquisitionType"
              className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
              value={acquisitionType}
              onChange={(e) => setAcquisitionType(e.target.value as AcquisitionType)}
            >
              <option value="paid">매매</option>
              {(isHouseCategory || isNonHouseCategory || isFarmlandCategory) ? <option value="gift">증여</option> : null}
              <option value="inheritance">상속</option>
              {(isHouseCategory || isNonHouseCategory || isFarmlandCategory) ? <option value="original">원시</option> : null}
            </select>
          </div>

          {isNonHouseCategory ? (
            <div className="space-y-2">
              <Label htmlFor="nonHouseDetailType">주택 외 세부 구분</Label>
              <select
                id="nonHouseDetailType"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={nonHouseDetailType}
                onChange={(e) => setNonHouseDetailType(e.target.value as NonHouseDetailType)}
              >
                <option value="general">일반 주택 외 자산</option>
                <option value="office-business">업무용 오피스텔 (4%)</option>
                <option value="office-residential">주거용 오피스텔 (주택 세율)</option>
              </select>
              <p className="text-muted-foreground text-xs">
                업무용은 주택 외 4% 기준, 주거용은 1주택 구간세율을 적용합니다. 주택 수·조정지역 등은 자산 구분을 주택으로
                선택해 세부 조건을 입력하세요.
              </p>
            </div>
          ) : null}

          {isFarmlandCategory && isPaidType ? (
            <div className="space-y-2">
              <Label htmlFor="farmlandSaleType">농지 매매 유형</Label>
              <select
                id="farmlandSaleType"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={farmlandSaleType}
                onChange={(e) => setFarmlandSaleType(e.target.value as FarmlandSaleType)}
              >
                <option value="new">신규</option>
                <option value="self-cultivation">2년 이상 자경</option>
              </select>
            </div>
          ) : null}

          {isFarmlandCategory && acquisitionType === "inheritance" ? (
            <div className="flex items-center gap-2">
              <Checkbox
                id="farmingInheritanceRelief"
                checked={applyFarmingInheritanceRelief}
                onCheckedChange={(checked) => setApplyFarmingInheritanceRelief(checked === true)}
              />
              <Label htmlFor="farmingInheritanceRelief" className="font-normal">
                영농상속 감면 적용 (취득세 0.3%, 농특세 면제)
              </Label>
            </div>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="acquisitionPrice">취득가액 (원)</Label>
            <Input
              id="acquisitionPrice"
              inputMode="numeric"
              placeholder="예: 600,000,000"
              value={priceDisplay}
              disabled={usesOfficialValueOnly}
              onChange={(e) => onMoneyInputChange(e.target.value, setPriceDisplay)}
            />
            <p className="text-muted-foreground text-xs">
              {usesOfficialValueOnly
                ? `${isGiftType ? "증여" : isInheritanceType ? "상속" : "원시"}는 취득가액 입력 없이 시가표준액(또는 시가인정액) 기준으로 계산합니다.`
                : "실제 취득가액(매매의 경우 계약가 등)을 입력하세요."}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="officialValue">{usesOfficialValueOnly ? "시가표준액 (또는 시가인정액)" : "시가표준액"} (원)</Label>
            <Input
              id="officialValue"
              inputMode="numeric"
              placeholder="예: 550,000,000"
              value={officialValueDisplay}
              onChange={(e) => onMoneyInputChange(e.target.value, setOfficialValueDisplay)}
            />
            <p className="text-muted-foreground text-xs">
              {usesOfficialValueOnly
                ? `${isGiftType ? "증여" : isInheritanceType ? "상속" : "원시"}는 해당 금액을 과세표준으로 사용합니다.`
                : "두 값 중 큰 금액을 과세표준으로 사용합니다."}
            </p>
          </div>

          {showHouseInputs ? (
            <div className="space-y-2">
              <Label htmlFor="houseCount">취득 후 주택 수</Label>
              <select
                id="houseCount"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={houseCount}
                onChange={(e) => setHouseCount(e.target.value as HouseCount)}
              >
                <option value="1">1주택자</option>
                <option value="2">2주택자</option>
                <option value="3">3주택자</option>
                <option value="4+">4주택 이상</option>
              </select>
            </div>
          ) : null}

          {showLifetimeFirstInputs ? (
            <div className="bg-muted/30 space-y-3 rounded-lg border p-3">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <Checkbox
                  id="lifetimeFirstRelief"
                  checked={applyLifetimeFirstRelief}
                  onCheckedChange={(checked) => setApplyLifetimeFirstRelief(checked === true)}
                />
                <Label htmlFor="lifetimeFirstRelief" className="cursor-pointer font-medium">
                  생애최초 주택 취득세 감면 적용
                </Label>
                <span className="group relative inline-flex shrink-0 items-center">
                  <button
                    type="button"
                    className="text-muted-foreground hover:text-foreground focus-visible:ring-ring rounded-full p-0.5 outline-none transition-colors focus-visible:ring-2"
                    aria-label="생애최초 감면 적용 안내"
                  >
                    <CircleHelp className="size-4" strokeWidth={2} aria-hidden />
                  </button>
                  <span
                    role="tooltip"
                    className="border-border bg-background text-foreground pointer-events-none invisible absolute bottom-[calc(100%+8px)] left-1/2 z-50 w-[min(calc(100vw-2rem),20rem)] -translate-x-1/2 rounded-md border px-3 py-2 text-left text-xs leading-relaxed shadow-md opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                  >
                    참고용 예상 금액입니다. 체크 시 산출 취득세에서 감면 한도(일반 200만 원 · 소형·인구감소지역 등 300만 원)만큼 공제한 결과를 보여 줍니다.
                    무주택·거주 목적·취득가액 12억 원 이하 등 실제 적격 요건은 확인하지 않습니다. 취득세율 8% 미만인 1주택 매매에서는 지방교육세를 감면 후 취득세의
                    10분의 1로 산출하고, 농어촌특별세는 변함없이 산출합니다. 적용 기한·추징·세부
                    유형은 관할 지자체에 확인하세요.
                  </span>
                </span>
              </div>
              {applyLifetimeFirstRelief ? (
                <div className="space-y-2">
                  <Label htmlFor="lifetimeFirstTier">감면 한도 유형</Label>
                  <select
                    id="lifetimeFirstTier"
                    className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                    value={lifetimeFirstTier}
                    onChange={(e) => setLifetimeFirstTier(e.target.value as LifetimeFirstReliefTier)}
                  >
                    <option value="general">일반주택 등 (감면 한도 200만 원)</option>
                    <option value="extended">소형주택·인구감소지역 등 (감면 한도 300만 원)</option>
                  </select>
                </div>
              ) : null}
            </div>
          ) : null}

          {showHouseInputs ? (
            <div className="flex items-center gap-2">
              <Checkbox
                id="adjustedArea"
                checked={isAdjustedArea}
                disabled={!isAdjustedToggleEnabled}
                onCheckedChange={(checked) => setIsAdjustedArea(checked === true)}
              />
              <Label htmlFor="adjustedArea" className={!isAdjustedToggleEnabled ? "text-muted-foreground font-normal" : "font-normal"}>
                조정대상지역 취득
              </Label>
            </div>
          ) : null}

          {showAreaOver85Input ? (
            <div className="flex items-center gap-2">
              <Checkbox id="isOver85" checked={isOver85} onCheckedChange={(checked) => setIsOver85(checked === true)} />
              <Label htmlFor="isOver85" className="font-normal">
                전용면적 85m² 초과 (농어촌특별세 적용 여부)
              </Label>
            </div>
          ) : null}

          <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600" onClick={performCalculation}>
            계산하기
          </Button>

          <p className="text-muted-foreground text-xs leading-relaxed">
            본 계산기는 참고용 간편 계산기입니다. 실제 세액은 취득원인, 감면 여부, 지분취득, 법인 여부, 분양권·입주권 포함 여부, 관할 지자체 해석
            등에 따라 달라질 수 있습니다.
          </p>
        </CardContent>
      </Card>

      <Card className="scroll-mt-24">
        <CardHeader>
          <CardTitle className="text-xl">계산 결과</CardTitle>
        </CardHeader>
        <CardContent>
          {result ? (
            <div className="grid gap-3 sm:grid-cols-1" role="list">
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">과세표준 (입력값 중 큰 금액)</span>
                <ResultAmountBlock amount={result.taxableBase} className="text-lg font-semibold tabular-nums" />
              </div>
              {result.acquisitionTaxGross != null && result.lifetimeFirstReliefDeduction != null ? (
                <div className="flex flex-col gap-0.5 rounded-lg border border-dashed p-3" role="listitem">
                  <span className="text-muted-foreground text-sm">취득세 (생애최초 감면 전 산출세액)</span>
                  <ResultAmountBlock amount={result.acquisitionTaxGross} className="text-base font-semibold tabular-nums" />
                </div>
              ) : null}
              {result.lifetimeFirstReliefDeduction != null && result.lifetimeFirstReliefDeduction > 0 ? (
                <div className="flex flex-col gap-0.5 rounded-lg border border-dashed p-3" role="listitem">
                  <span className="text-muted-foreground text-sm">생애최초 감면 (취득세 공제액)</span>
                  <span className="text-lg font-semibold tabular-nums text-emerald-700 dark:text-emerald-400">
                    −{formatNumber(result.lifetimeFirstReliefDeduction)}원
                  </span>
                  <span className="text-muted-foreground text-xs font-normal leading-relaxed">
                    한도 내 공제이며, 실제 신고 시 관할 지자체 기준이 우선합니다.
                  </span>
                </div>
              ) : null}
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">{result.acquisitionTaxGross != null ? "취득세 (감면 후)" : "취득세"}</span>
                <ResultTaxWithRate amount={result.acquisitionTax} rate={result.acquisitionTaxRate} />
              </div>
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">지방교육세</span>
                {result.acquisitionTaxGross != null ? (
                  <div className="flex flex-col gap-0.5">
                    <span className="text-lg font-semibold tabular-nums">
                      {formatNumber(result.localEducationTax)}원 (취득세의 10%)
                    </span>
                    <span
                      className="text-muted-foreground text-xs font-normal leading-relaxed"
                      aria-label={`한글 금액 ${formatAmountKoreanWon(result.localEducationTax)}`}
                    >
                      {formatAmountKoreanWon(result.localEducationTax)}
                    </span>
                  </div>
                ) : (
                  <ResultTaxWithRate amount={result.localEducationTax} rate={result.localEducationTaxRate} />
                )}
              </div>
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">농어촌특별세</span>
                <ResultTaxWithRate amount={result.ruralSpecialTax} rate={result.ruralSpecialTaxRate} />
              </div>
              <div className="bg-muted/40 flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">총 예상 취득 부대세</span>
                <ResultAmountBlock amount={result.totalTax} className="text-2xl font-bold tabular-nums" />
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">계산 전입니다. 입력값을 채우고 계산하기를 누르면 결과가 표시됩니다.</p>
          )}
        </CardContent>
      </Card>

      <AcquisitionTaxCalculatorReference />
    </div>
  );
}
