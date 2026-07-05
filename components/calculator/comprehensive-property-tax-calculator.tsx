"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  COMPREHENSIVE_LAND_BASIC_DEDUCTION,
  COMPREHENSIVE_LAND_BRACKETS,
  computeComprehensivePropertyTax,
  HOUSING_BASIC_DEDUCTION_DEFAULT,
  HOUSING_BASIC_DEDUCTION_ONE_HOME,
  HOUSING_BRACKETS_THREE_OR_MORE,
  HOUSING_BRACKETS_TWO_OR_LESS,
  HOUSING_FAIR_MARKET_RATIO,
  LOCAL_EDUCATION_TAX_RATE,
  PROPERTY_TAX_COMPREHENSIVE_LAND_BRACKETS,
  PROPERTY_TAX_HOUSING_BRACKETS,
  PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT,
  PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME,
  PROPERTY_TAX_HOUSING_TOP_STANDARD_RATE,
  PROPERTY_TAX_LAND_FAIR_RATIO,
  PROPERTY_TAX_SEPARATE_LAND_BRACKETS,
  SEPARATE_LAND_BASIC_DEDUCTION,
  SEPARATE_LAND_BRACKETS,
  toPercent,
  type CategoryTaxBreakdown,
  type ComprehensivePropertyTaxResult,
  type FairMarketRatioPercent,
  type HouseCount,
  type TaxpayerType,
} from "@/lib/comprehensive-property-tax-calculations";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber, removeCommas } from "@/lib/loan-calculations";

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function ResultAmountBlock({ amount, className }: { amount: number; className?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className={className}>{formatNumber(amount)}원</span>
      <span
        className="text-muted-foreground text-xs font-normal leading-relaxed"
        aria-label={`한글 금액 ${formatAmountKoreanWon(amount)}`}
      >
        {formatAmountKoreanWon(amount)}
      </span>
    </div>
  );
}

function formatBracketLabel(maxBase: number): string {
  if (!Number.isFinite(maxBase)) return "초과";
  if (maxBase >= 1_000_000_000) return `${maxBase / 100_000_000}억 원 이하`;
  if (maxBase >= 100_000_000) return `${maxBase / 100_000_000}억 원 이하`;
  return `${maxBase / 10_000}만 원 이하`;
}

function PropertyTaxCategoryResult({
  label,
  category,
}: {
  label: string;
  category: CategoryTaxBreakdown;
}) {
  if (category.propertyTaxDetail.propertyTax <= 0) return null;

  return (
    <div className="grid gap-2 text-sm">
      <p className="font-medium">{label}</p>
      <div className="flex justify-between gap-2">
        <span className="text-muted-foreground">
          재산세 과세표준(공시가격×{toPercent(category.propertyTaxDetail.propertyTaxFairRatio)})
        </span>
        <span className="tabular-nums">{formatNumber(category.propertyTaxDetail.taxBase)}원</span>
      </div>
      <div className="flex justify-between gap-2">
        <span className="text-muted-foreground">재산세</span>
        <span className="tabular-nums">
          {formatNumber(category.propertyTaxDetail.propertyTax)}원 (
          {toPercent(category.propertyTaxDetail.appliedRate)})
        </span>
      </div>
      {category.propertyTaxDetail.localEducationTax > 0 && (
        <div className="flex justify-between gap-2">
          <span className="text-muted-foreground">지방교육세({toPercent(LOCAL_EDUCATION_TAX_RATE)})</span>
          <span className="tabular-nums">{formatNumber(category.propertyTaxDetail.localEducationTax)}원</span>
        </div>
      )}
    </div>
  );
}

export function ComprehensivePropertyTaxCalculator() {
  const [taxpayerType, setTaxpayerType] = React.useState<TaxpayerType>("individual");
  const [housingPriceDisplay, setHousingPriceDisplay] = React.useState("");
  const [comprehensiveLandDisplay, setComprehensiveLandDisplay] = React.useState("");
  const [separateLandDisplay, setSeparateLandDisplay] = React.useState("");
  const [houseCount, setHouseCount] = React.useState<HouseCount>("1");
  const [isOneHouseholdOneHome, setIsOneHouseholdOneHome] = React.useState(true);
  const [fairMarketRatio, setFairMarketRatio] = React.useState<FairMarketRatioPercent>(60);
  const [ageDisplay, setAgeDisplay] = React.useState("");
  const [holdingYearsDisplay, setHoldingYearsDisplay] = React.useState("");
  const [priorYearTaxDisplay, setPriorYearTaxDisplay] = React.useState("");
  const [currentPropertyTaxDisplay, setCurrentPropertyTaxDisplay] = React.useState("");
  const [result, setResult] = React.useState<ComprehensivePropertyTaxResult | null>(null);

  const showOneHomeInputs = taxpayerType === "individual";
  const showAgeHoldingInputs = showOneHomeInputs && isOneHouseholdOneHome;
  const showBurdenCapInputs = taxpayerType === "individual";

  React.useEffect(() => {
    if (taxpayerType === "corporate") {
      setIsOneHouseholdOneHome(false);
    }
  }, [taxpayerType]);

  React.useEffect(() => {
    if (houseCount !== "1") {
      setIsOneHouseholdOneHome(false);
    }
  }, [houseCount]);

  function performCalculation() {
    const housingOfficialPrice = parseInt(removeCommas(housingPriceDisplay), 10) || 0;
    const comprehensiveLandOfficialPrice = parseInt(removeCommas(comprehensiveLandDisplay), 10) || 0;
    const separateLandOfficialPrice = parseInt(removeCommas(separateLandDisplay), 10) || 0;
    const age = ageDisplay ? parseInt(ageDisplay, 10) : null;
    const holdingYears = holdingYearsDisplay ? parseInt(holdingYearsDisplay, 10) : null;
    const priorYearPropertyAndCptTax = priorYearTaxDisplay
      ? parseInt(removeCommas(priorYearTaxDisplay), 10)
      : null;
    const currentYearPropertyTax = currentPropertyTaxDisplay
      ? parseInt(removeCommas(currentPropertyTaxDisplay), 10)
      : null;

    setResult(
      computeComprehensivePropertyTax({
        housingOfficialPrice,
        comprehensiveLandOfficialPrice,
        separateLandOfficialPrice,
        taxpayerType,
        houseCount,
        isOneHouseholdOneHome: showOneHomeInputs && isOneHouseholdOneHome,
        fairMarketRatioPercent: fairMarketRatio,
        age,
        holdingYears,
        priorYearPropertyAndCptTax,
        currentYearPropertyTax,
      }),
    );
  }

  const hasAnyInput =
    housingPriceDisplay || comprehensiveLandDisplay || separateLandDisplay;

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="comprehensive-property-tax-calculator" className="scroll-mt-24">
        <CardHeader>
          <CardTitle className="text-lg">입력</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="cpt-taxpayer-type">납세자 구분</Label>
            <select
              id="cpt-taxpayer-type"
              className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              value={taxpayerType}
              onChange={(e) => setTaxpayerType(e.target.value as TaxpayerType)}
            >
              <option value="individual">개인</option>
              <option value="corporate">법인</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpt-housing-price">주택 공시가격 합계(원)</Label>
            <Input
              id="cpt-housing-price"
              inputMode="numeric"
              placeholder="예: 2,000,000,000"
              value={housingPriceDisplay}
              onChange={(e) => setHousingPriceDisplay(addCommas(e.target.value))}
            />
            <p className="text-muted-foreground text-xs">주택·주택부속토지 포함, 전국 합산</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpt-house-count">6월 1일 기준 주택 수</Label>
            <select
              id="cpt-house-count"
              className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              value={houseCount}
              onChange={(e) => setHouseCount(e.target.value as HouseCount)}
            >
              <option value="1">1주택</option>
              <option value="2">2주택</option>
              <option value="3+">3주택 이상</option>
            </select>
          </div>

          {showOneHomeInputs && (
            <div className="flex items-start gap-2">
              <Checkbox
                id="cpt-one-home"
                checked={isOneHouseholdOneHome}
                disabled={houseCount !== "1"}
                onCheckedChange={(checked) => setIsOneHouseholdOneHome(checked === true)}
              />
              <Label htmlFor="cpt-one-home" className="cursor-pointer leading-relaxed font-normal">
                1세대 1주택자(기본공제 12억 원·세액공제 가능)
              </Label>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="cpt-fair-ratio">공정시장가액비율(주택분)</Label>
            <select
              id="cpt-fair-ratio"
              className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              value={fairMarketRatio}
              onChange={(e) => setFairMarketRatio(parseInt(e.target.value, 10) as FairMarketRatioPercent)}
            >
              <option value={60}>60%(현행)</option>
              <option value={80}>80%(가정)</option>
              <option value={100}>100%(가정)</option>
            </select>
            <p className="text-muted-foreground text-xs">
              종부세 공정시장가액비율입니다. 재산세 공정(1세대1주택 45%·일반 60%)과 별도이며, 토지분 종부세는 100%
              고정.
            </p>
          </div>

          <details className="rounded-md border p-3">
            <summary className="cursor-pointer text-sm font-medium">토지·고급 옵션</summary>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cpt-comp-land">종합합산 토지 공시가격(원)</Label>
                <Input
                  id="cpt-comp-land"
                  inputMode="numeric"
                  placeholder="나대지·잡종지 등, 없으면 0"
                  value={comprehensiveLandDisplay}
                  onChange={(e) => setComprehensiveLandDisplay(addCommas(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cpt-sep-land">별도합산 토지 공시가격(원)</Label>
                <Input
                  id="cpt-sep-land"
                  inputMode="numeric"
                  placeholder="상가·사무실 부속토지 등, 없으면 0"
                  value={separateLandDisplay}
                  onChange={(e) => setSeparateLandDisplay(addCommas(e.target.value))}
                />
              </div>

              {showAgeHoldingInputs && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="cpt-age">만 나이(세액공제)</Label>
                    <Input
                      id="cpt-age"
                      inputMode="numeric"
                      placeholder="예: 65"
                      value={ageDisplay}
                      onChange={(e) => setAgeDisplay(e.target.value.replace(/\D/g, ""))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpt-holding">보유 연수(세액공제)</Label>
                    <Input
                      id="cpt-holding"
                      inputMode="numeric"
                      placeholder="예: 10"
                      value={holdingYearsDisplay}
                      onChange={(e) => setHoldingYearsDisplay(e.target.value.replace(/\D/g, ""))}
                    />
                  </div>
                </>
              )}

              {showBurdenCapInputs && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="cpt-prior-tax">직전 연도 재산세+종부세 합계(원)</Label>
                    <Input
                      id="cpt-prior-tax"
                      inputMode="numeric"
                      placeholder="세부담상한(150%) 산출 시"
                      value={priorYearTaxDisplay}
                      onChange={(e) => setPriorYearTaxDisplay(addCommas(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpt-current-property">당해 연도 재산세 합계(원)</Label>
                    <Input
                      id="cpt-current-property"
                      inputMode="numeric"
                      placeholder="미입력 시 위에서 계산한 재산세 사용"
                      value={currentPropertyTaxDisplay}
                      onChange={(e) => setCurrentPropertyTaxDisplay(addCommas(e.target.value))}
                    />
                  </div>
                </>
              )}
            </div>
          </details>

          <Button type="button" className="w-full" onClick={performCalculation} disabled={!hasAnyInput}>
            계산하기
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">계산 결과</CardTitle>
        </CardHeader>
        <CardContent>
          {result ? (
            <div className="space-y-4" role="list">
              {result.totalPropertyTax > 0 && (
                <div className="space-y-3 rounded-lg border border-blue-200/60 bg-blue-50/40 p-3 dark:border-blue-900/40 dark:bg-blue-950/20" role="listitem">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold">① 재산세(지방세)</p>
                    <span className="text-muted-foreground text-xs">{result.propertyTaxDueDateNote}</span>
                  </div>
                  <PropertyTaxCategoryResult label="주택분" category={result.housing} />
                  <PropertyTaxCategoryResult label="종합합산 토지분" category={result.comprehensiveLand} />
                  <PropertyTaxCategoryResult label="별도합산 토지분" category={result.separateLand} />
                  <div className="space-y-1 border-t pt-2">
                    <div className="flex justify-between gap-2 text-sm">
                      <span className="text-muted-foreground">재산세 합계</span>
                      <span className="tabular-nums">{formatNumber(result.totalPropertyTax)}원</span>
                    </div>
                    {result.totalLocalEducationTax > 0 && (
                      <div className="flex justify-between gap-2 text-sm">
                        <span className="text-muted-foreground">지방교육세 합계</span>
                        <span className="tabular-nums">{formatNumber(result.totalLocalEducationTax)}원</span>
                      </div>
                    )}
                    <div className="flex justify-between gap-2 text-sm font-medium">
                      <span>재산세+지방교육세</span>
                      <span className="tabular-nums">{formatNumber(result.totalPropertyTaxWithEducation)}원</span>
                    </div>
                  </div>
                </div>
              )}

              {(result.housing.isTaxable ||
                result.comprehensiveLand.isTaxable ||
                result.separateLand.isTaxable) && (
                <div className="space-y-3 rounded-lg border p-3" role="listitem">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold">② 종합부동산세(국세)</p>
                    <span className="text-muted-foreground text-xs">{result.comprehensiveTaxDueDateNote}</span>
                  </div>

                  {result.housing.isTaxable && (
                    <div className="space-y-2 border-b pb-3 text-sm">
                      <p className="font-medium">주택분</p>
                      <div className="flex justify-between gap-2">
                        <span className="text-muted-foreground">과세표준</span>
                        <span className="tabular-nums">{formatNumber(result.housing.taxableBase)}원</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-muted-foreground">종부세(공제 전)</span>
                        <span className="tabular-nums">
                          {formatNumber(result.housing.grossComprehensiveTax)}원 ({toPercent(result.housing.appliedRate)})
                        </span>
                      </div>
                      {result.housing.propertyTaxCreditStandardAmount > 0 && (
                        <div className="flex justify-between gap-2">
                          <span className="text-muted-foreground">공제 표준세액(시행령 제4조의2)</span>
                          <span className="tabular-nums">
                            {formatNumber(result.housing.propertyTaxCreditStandardAmount)}원
                          </span>
                        </div>
                      )}
                      {result.housing.propertyTaxCredit > 0 && (
                        <div className="flex justify-between gap-2">
                          <span className="text-muted-foreground">공제할 재산세</span>
                          <span className="text-destructive tabular-nums">
                            −{formatNumber(result.housing.propertyTaxCredit)}원
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between gap-2 font-medium">
                        <span>주택분 산출세액</span>
                        <span className="tabular-nums">{formatNumber(result.housing.outputTax)}원</span>
                      </div>
                    </div>
                  )}

                  {result.comprehensiveLand.isTaxable && (
                    <div className="space-y-1 border-b pb-3 text-sm">
                      <p className="font-medium">종합합산 토지분</p>
                      <div className="flex justify-between gap-2 font-medium">
                        <span>산출세액</span>
                        <span className="tabular-nums">{formatNumber(result.comprehensiveLand.outputTax)}원</span>
                      </div>
                    </div>
                  )}

                  {result.separateLand.isTaxable && (
                    <div className="space-y-1 border-b pb-3 text-sm">
                      <p className="font-medium">별도합산 토지분</p>
                      <div className="flex justify-between gap-2 font-medium">
                        <span>산출세액</span>
                        <span className="tabular-nums">{formatNumber(result.separateLand.outputTax)}원</span>
                      </div>
                    </div>
                  )}

                  {result.ageHoldingReliefAmount > 0 && (
                    <div className="flex justify-between gap-2 text-sm">
                      <span className="text-muted-foreground">
                        1세대 1주택 세액공제({toPercent(result.ageHoldingReliefRate)})
                      </span>
                      <span className="text-destructive tabular-nums">
                        −{formatNumber(result.ageHoldingReliefAmount)}원
                      </span>
                    </div>
                  )}

                  {result.burdenCapExcessReduction > 0 && (
                    <div className="flex justify-between gap-2 text-sm">
                      <span className="text-muted-foreground">세부담상한(150%) 초과세액</span>
                      <span className="text-destructive tabular-nums">
                        −{formatNumber(result.burdenCapExcessReduction)}원
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between gap-2 text-sm">
                    <span className="text-muted-foreground">종부세(농특세 전)</span>
                    <span className="font-semibold tabular-nums">
                      {formatNumber(result.comprehensiveTaxAfterBurdenCap)}원
                    </span>
                  </div>
                  <div className="flex justify-between gap-2 text-sm">
                    <span className="text-muted-foreground">농어촌특별세(20%)</span>
                    <span className="tabular-nums">{formatNumber(result.ruralSpecialTax)}원</span>
                  </div>
                  <div className="flex justify-between gap-2 border-t pt-2 text-sm font-medium">
                    <span>종부세+농특세 합계</span>
                    <span className="tabular-nums">{formatNumber(result.totalComprehensivePayable)}원</span>
                  </div>

                  {result.installmentEligible && (
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      분납 가능: 종부세 {formatNumber(result.installmentDeferrableAmount)}원을 납부기한 경과 후 6개월
                      이내 분납(농특세는 분납 비율에 따라 분납).
                    </p>
                  )}
                </div>
              )}

              {result.totalPropertyTax <= 0 &&
                !result.housing.isTaxable &&
                !result.comprehensiveLand.isTaxable &&
                !result.separateLand.isTaxable && (
                  <p className="text-muted-foreground text-sm">입력한 공시가격 기준 과세 대상이 없습니다.</p>
                )}

              {(result.totalPropertyTax > 0 ||
                result.housing.isTaxable ||
                result.comprehensiveLand.isTaxable ||
                result.separateLand.isTaxable) && (
                <div className="bg-primary/5 flex flex-col gap-0.5 rounded-lg border-2 border-primary/20 p-3" role="listitem">
                  <span className="text-muted-foreground text-sm">
                    ③ 연간 보유세 합계(재산세+지방교육세+종부세+농특세)
                  </span>
                  <ResultAmountBlock amount={result.totalAnnualHoldingTax} className="text-2xl font-bold tabular-nums" />
                  <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                    재산세·지방교육세는 7월, 종부세·농특세는 12월에 각각 납부합니다. 실납부 시기는 다르지만 연간
                    부담 합계로 비교할 때 사용합니다.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">
              계산 전입니다. 공시가격을 입력하고 계산하기를 누르면 결과가 표시됩니다.
            </p>
          )}
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">세액계산 흐름도</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm">
            국세청 세액계산 흐름도·종합부동산세 신고서 별지3호 부표를 기준으로, 재산세(지방세)를 먼저 산출한 뒤
            종합부동산세(국세)에서 공제할 재산세액을 차감합니다. 유형별로 각각 계산한 후 합산합니다.
          </p>

          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
                계산 단계
              </caption>
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="w-12 p-2 text-left font-medium">
                    단계
                  </th>
                  <th scope="col" className="w-40 p-2 text-left font-medium">
                    항목
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    산식·적용
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">①</td>
                  <td className="p-2 align-top font-medium whitespace-nowrap">
                    재산세·지방세
                    <span className="text-muted-foreground block text-xs font-normal">7월 납부</span>
                  </td>
                  <td className="p-2 align-top">
                    <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                      <li>
                        공시가격 × 재산세 공정시장가액비율 (주택 일반{" "}
                        {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT)}, 1세1주택{" "}
                        {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME)}, 토지{" "}
                        {toPercent(PROPERTY_TAX_LAND_FAIR_RATIO)})
                      </li>
                      <li>= 재산세 과세표준 × 세율 − 누진공제</li>
                      <li>
                        = 재산세 + 지방교육세(재산세의 {toPercent(LOCAL_EDUCATION_TAX_RATE)})
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">②</td>
                  <td className="p-2 align-top font-medium whitespace-nowrap">
                    종합부동산세
                    <span className="text-muted-foreground block text-xs font-normal">12월 납부</span>
                  </td>
                  <td className="p-2 align-top">
                    <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                      <li>
                        ∑ 공시가격 − 기본공제 (주택 {formatNumber(HOUSING_BASIC_DEDUCTION_DEFAULT)}/
                        {formatNumber(HOUSING_BASIC_DEDUCTION_ONE_HOME)}, 종합합산토지{" "}
                        {formatNumber(COMPREHENSIVE_LAND_BASIC_DEDUCTION)}, 별도합산토지{" "}
                        {formatNumber(SEPARATE_LAND_BASIC_DEDUCTION)})
                      </li>
                      <li>
                        × 종부세 공정시장가액비율 (주택 {toPercent(HOUSING_FAIR_MARKET_RATIO)}, 토지 100%)
                      </li>
                      <li>= 종부세 과세표준 × 세율 − 누진공제</li>
                      <li>= 종합부동산세액 − 공제할 재산세액</li>
                      <li className="text-xs">
                        (공제 표준세액 = (공시가격−공제) × 종부세공정 × 재산세공정 × 표준세율)
                      </li>
                      <li>− 1세1주택 세액공제(한도 80%) − 세부담상한(150%)</li>
                      <li>= 종부세 납부세액 + 농어촌특별세(20%)</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-xs">
                      유형별 기본공제·공정시장가액비율은 아래 표를 참고하세요.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-top font-medium">③</td>
                  <td className="p-2 align-top font-medium whitespace-nowrap">연간 보유세</td>
                  <td className="p-2 align-top">
                    재산세 + 지방교육세 + 종부세 + 농어촌특별세
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
                유형별 과세대상·공제금액·공정시장가액비율
              </caption>
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="p-2 text-left font-medium">
                    유형
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    과세대상
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    기본공제
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    재산세 공정
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    종부세 공정
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">주택(부속토지 포함)</td>
                  <td className="p-2">재산세 과세대상 주택</td>
                  <td className="p-2 text-right">9억(1세대1주택 12억)</td>
                  <td className="p-2 text-right">
                    {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT)}(
                    {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME)})
                  </td>
                  <td className="p-2 text-right">60%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">종합합산 토지</td>
                  <td className="p-2">나대지·잡종지 등</td>
                  <td className="p-2 text-right">5억</td>
                  <td className="p-2 text-right">{toPercent(PROPERTY_TAX_LAND_FAIR_RATIO)}</td>
                  <td className="p-2 text-right">100%</td>
                </tr>
                <tr>
                  <td className="p-2">별도합산 토지</td>
                  <td className="p-2">상가·사무실 부속토지 등</td>
                  <td className="p-2 text-right">80억</td>
                  <td className="p-2 text-right">{toPercent(PROPERTY_TAX_LAND_FAIR_RATIO)}</td>
                  <td className="p-2 text-right">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">재산세(지방세) 기준표</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm">
            재산세는 관할 시·군·구에서 7월경 고지합니다. 과세표준 = 공시가격 × 재산세 공정시장가액비율(주택 일반{" "}
            {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT)}, 1세대 1주택{" "}
            {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME)}, 토지 {toPercent(PROPERTY_TAX_LAND_FAIR_RATIO)}).
            지방교육세는 재산세의 {toPercent(LOCAL_EDUCATION_TAX_RATE)}입니다. 1세대 1주택·공시가격 9억 원 이하는
            주택분 0.05% 단일세율이 적용됩니다.
          </p>

          <p className="text-sm font-semibold">주택분 재산세</p>
          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="p-2 text-left font-medium">
                    과세표준
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    세율
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    누진공제
                  </th>
                </tr>
              </thead>
              <tbody>
                {PROPERTY_TAX_HOUSING_BRACKETS.map((b) => (
                  <tr key={b.maxBase} className="border-b last:border-b-0">
                    <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                    <td className="p-2 text-right">{toPercent(b.rate)}</td>
                    <td className="p-2 text-right">
                      {b.progressiveDeduction > 0 ? `${formatNumber(b.progressiveDeduction)}원` : "없음"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm font-semibold">토지분 재산세</p>
          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="p-2 text-left font-medium">
                    구분
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    과세표준
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    세율
                  </th>
                </tr>
              </thead>
              <tbody>
                {PROPERTY_TAX_COMPREHENSIVE_LAND_BRACKETS.map((b) => (
                  <tr key={`pt-comp-${b.maxBase}`} className="border-b">
                    <td className="p-2">종합합산</td>
                    <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                    <td className="p-2 text-right">{toPercent(b.rate)}</td>
                  </tr>
                ))}
                {PROPERTY_TAX_SEPARATE_LAND_BRACKETS.map((b) => (
                  <tr key={`pt-sep-${b.maxBase}`} className="border-b last:border-b-0">
                    <td className="p-2">별도합산</td>
                    <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                    <td className="p-2 text-right">{toPercent(b.rate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">종합부동산세(국세) 기준표(’23년 이후)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm font-semibold">주택분 세율 — 2주택 이하(개인)</p>
          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="p-2 text-left font-medium">
                    과세표준
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    세율
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    누진공제
                  </th>
                </tr>
              </thead>
              <tbody>
                {HOUSING_BRACKETS_TWO_OR_LESS.map((b) => (
                  <tr key={b.maxBase} className="border-b last:border-b-0">
                    <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                    <td className="p-2 text-right">{toPercent(b.rate)}</td>
                    <td className="p-2 text-right">
                      {b.progressiveDeduction > 0 ? `${formatNumber(b.progressiveDeduction)}원` : "없음"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm font-semibold">주택분 세율 — 3주택 이상(개인)</p>
          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="p-2 text-left font-medium">
                    과세표준
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    세율
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    누진공제
                  </th>
                </tr>
              </thead>
              <tbody>
                {HOUSING_BRACKETS_THREE_OR_MORE.map((b) => (
                  <tr key={b.maxBase} className="border-b last:border-b-0">
                    <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                    <td className="p-2 text-right">{toPercent(b.rate)}</td>
                    <td className="p-2 text-right">
                      {b.progressiveDeduction > 0 ? `${formatNumber(b.progressiveDeduction)}원` : "없음"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm font-semibold">토지분 세율</p>
          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="p-2 text-left font-medium">
                    구분
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    과세표준
                  </th>
                  <th scope="col" className="p-2 text-right font-medium">
                    세율
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPREHENSIVE_LAND_BRACKETS.map((b) => (
                  <tr key={`comp-${b.maxBase}`} className="border-b">
                    <td className="p-2">종합합산</td>
                    <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                    <td className="p-2 text-right">{toPercent(b.rate)}</td>
                  </tr>
                ))}
                {SEPARATE_LAND_BRACKETS.map((b) => (
                  <tr key={`sep-${b.maxBase}`} className="border-b last:border-b-0">
                    <td className="p-2">별도합산</td>
                    <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                    <td className="p-2 text-right">{toPercent(b.rate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-md border p-3 text-xs leading-relaxed">
            <p className="text-foreground font-medium">적용요건·참고사항</p>
            <ol className="text-muted-foreground mt-2 list-decimal space-y-1 pl-4">
              <li>
                <strong>재산세와 종부세는 별도 고지</strong>이지만, 종부세 산출 시 공제할 재산세액을 차감합니다.
                공제 표준세액은 종합부동산세법 시행령 제4조의2에 따라 (공시가격−공제금액) × 종부세 공정 × 재산세
                공정 × 표준세율(주택 {toPercent(PROPERTY_TAX_HOUSING_TOP_STANDARD_RATE)})로 산출하고, 실제 공제액은
                재산세 × (공제 표준세액 ÷ 재산세 표준세액)입니다.
              </li>
              <li>
                1세대 1주택의 재산세 공정시장가액비율은 일반 주택({toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT)}
                )과 달리 {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME)}가 적용됩니다. 종부세 공정은 주택{" "}
                {toPercent(HOUSING_FAIR_MARKET_RATIO)}입니다.
              </li>
              <li>
                과세기준일은 매년 <strong>6월 1일</strong>입니다. 주택 수·공시가격은 이 날 기준으로 확정됩니다.
              </li>
              <li>
                기본공제: 주택 {formatNumber(HOUSING_BASIC_DEDUCTION_DEFAULT)}원(1세대 1주택{" "}
                {formatNumber(HOUSING_BASIC_DEDUCTION_ONE_HOME)}원), 종합합산토지{" "}
                {formatNumber(COMPREHENSIVE_LAND_BASIC_DEDUCTION)}원, 별도합산토지{" "}
                {formatNumber(SEPARATE_LAND_BASIC_DEDUCTION)}원.
              </li>
              <li>
                1세대 1주택 세액공제: 연령 60세(20%)·65세(30%)·70세(40%), 보유 5년(20%)·10년(40%)·15년(50%) — 합산
                한도 80%.
              </li>
              <li>재산세 7월, 종부세·농특세 12월 1일~15일 납부. 250만 원 초과 시 종부세 6개월 이내 분납 가능.</li>
              <li>합산배제 임대주택·사원용주택 등은 9월 16일~30일 신고 필요. 본 계산기에는 미반영.</li>
              <li>법인 주택분: 2주택 이하 2.7%, 3주택 이상 5.0% 단일세율(기본공제 없음).</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
