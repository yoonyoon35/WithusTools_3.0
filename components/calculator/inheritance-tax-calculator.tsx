"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorResultExportButtons } from "@/components/calculator/calculator-result-export-buttons";
import {
  BASIC_DEDUCTION,
  CHILD_DEDUCTION_PER_PERSON,
  CO_RESIDENCE_HOUSING_CAP,
  DISABLED_DEDUCTION_BASE,
  ELDERLY_DEDUCTION_PER_PERSON,
  FILING_TAX_CREDIT_RATE,
  FINANCIAL_DEDUCTION_CAP,
  FINANCIAL_DEDUCTION_MIN,
  FINANCIAL_DEDUCTION_THRESHOLD,
  GENERATION_SKIP_MINOR_THRESHOLD,
  INSTALLMENT_THRESHOLD,
  LUMP_SUM_DEDUCTION,
  MINOR_DEDUCTION_BASE,
  MINIMUM_TAXABLE_BASE,
  SPOUSE_DEDUCTION_CAP,
  SPOUSE_DEDUCTION_MINIMUM,
  computeInheritanceTax,
  INHERITANCE_TAX_BRACKETS,
  toPercent,
  type HeirComposition,
  type InheritanceTaxResult,
} from "@/lib/inheritance-tax-calculations";
import { formatInheritanceTaxResultText } from "@/lib/inheritance-tax-result-text";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber, removeCommas } from "@/lib/loan-calculations";

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function parseAmount(display: string): number {
  return parseInt(removeCommas(display), 10) || 0;
}

/** 할증 대상 지분(%) — 소수점 허용 */
function sanitizePercentInput(value: string): string {
  let sanitized = value.replace(/[^\d.]/g, "");
  const dotIndex = sanitized.indexOf(".");
  if (dotIndex !== -1) {
    sanitized = sanitized.slice(0, dotIndex + 1) + sanitized.slice(dotIndex + 1).replace(/\./g, "");
  }
  return sanitized;
}

function parsePercentToRatio(value: string): number {
  const n = parseFloat(value);
  if (!Number.isFinite(n)) return 0;
  return Math.min(1, Math.max(0, n / 100));
}

function ResultAmountBlock({
  amount,
  className,
  rightAlign,
}: {
  amount: number;
  className?: string;
  rightAlign?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-0.5${rightAlign ? " items-end text-right" : ""}`}>
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
  if (!Number.isFinite(maxBase)) return "30억 원 초과";
  if (maxBase >= 1_000_000_000) return `${maxBase / 100_000_000}억 원 이하`;
  return `${maxBase / 10_000}만 원 이하`;
}

function AmountInput({
  id,
  label,
  hint,
  value,
  onChange,
}: {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        inputMode="numeric"
        placeholder="0"
        value={value}
        onChange={(e) => onChange(addCommas(e.target.value))}
      />
      {hint ? <p className="text-muted-foreground text-xs leading-relaxed">{hint}</p> : null}
    </div>
  );
}

export function InheritanceTaxCalculator() {
  const [totalPropertyDisplay, setTotalPropertyDisplay] = React.useState("");
  const [nonTaxableDisplay, setNonTaxableDisplay] = React.useState("");
  const [debtsDisplay, setDebtsDisplay] = React.useState("");
  const [priorGiftsHeirsDisplay, setPriorGiftsHeirsDisplay] = React.useState("");
  const [priorGiftsNonHeirsDisplay, setPriorGiftsNonHeirsDisplay] = React.useState("");
  const [nonHeirBequestDisplay, setNonHeirBequestDisplay] = React.useState("");
  const [financialAssetsDisplay, setFinancialAssetsDisplay] = React.useState("");
  const [financialDebtsDisplay, setFinancialDebtsDisplay] = React.useState("");
  const [appraisalFeeDisplay, setAppraisalFeeDisplay] = React.useState("");
  const [disasterLossDisplay, setDisasterLossDisplay] = React.useState("");
  const [coResidenceHousingDisplay, setCoResidenceHousingDisplay] = React.useState("");
  const [otherBusinessDeductionDisplay, setOtherBusinessDeductionDisplay] = React.useState("");
  const [priorGiftTaxPaidDisplay, setPriorGiftTaxPaidDisplay] = React.useState("");
  const [spouseActualInheritanceDisplay, setSpouseActualInheritanceDisplay] = React.useState("");
  const [spousePriorGiftTaxBaseDisplay, setSpousePriorGiftTaxBaseDisplay] = React.useState("");

  const [heirComposition, setHeirComposition] = React.useState<HeirComposition>("spouse-children");
  const [childCount, setChildCount] = React.useState("1");
  const [parentCount, setParentCount] = React.useState("1");
  const [childDeductionCount, setChildDeductionCount] = React.useState("1");
  const [minorCount, setMinorCount] = React.useState("0");
  const [minorYearsTo19, setMinorYearsTo19] = React.useState("10");
  const [elderlyCount, setElderlyCount] = React.useState("0");
  const [disabledCount, setDisabledCount] = React.useState("0");
  const [disabledLifeYears, setDisabledLifeYears] = React.useState("20");
  const [generationSkipSharePercent, setGenerationSkipSharePercent] = React.useState("100");

  const [isSpouseOnlyHeir, setIsSpouseOnlyHeir] = React.useState(false);
  const [hasGenerationSkipHeir, setHasGenerationSkipHeir] = React.useState(false);
  const [generationSkipMinorOverThreshold, setGenerationSkipMinorOverThreshold] = React.useState(false);
  const [isSubstituteInheritance, setIsSubstituteInheritance] = React.useState(false);
  const [timelyFiling, setTimelyFiling] = React.useState(true);

  const [result, setResult] = React.useState<InheritanceTaxResult | null>(null);
  const exportRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (heirComposition === "spouse-only") {
      setIsSpouseOnlyHeir(true);
    }
  }, [heirComposition]);

  function performCalculation() {
    const minorHeirDeductions = Array.from({ length: Math.max(0, parseInt(minorCount, 10) || 0) }, () => ({
      yearsTo19: parseInt(minorYearsTo19, 10) || 1,
    }));
    const disabledHeirDeductions = Array.from(
      { length: Math.max(0, parseInt(disabledCount, 10) || 0) },
      () => ({
        lifeExpectancyYears: parseInt(disabledLifeYears, 10) || 1,
      }),
    );

    setResult(
      computeInheritanceTax({
        totalInheritedProperty: parseAmount(totalPropertyDisplay),
        nonTaxableExclusion: parseAmount(nonTaxableDisplay),
        debtsChargesFuneral: parseAmount(debtsDisplay),
        priorGiftsToHeirs: parseAmount(priorGiftsHeirsDisplay),
        priorGiftsToNonHeirs: parseAmount(priorGiftsNonHeirsDisplay),
        nonHeirBequest: parseAmount(nonHeirBequestDisplay),
        renouncedPropertyToNextHeir: 0,
        financialAssets: parseAmount(financialAssetsDisplay),
        financialDebts: parseAmount(financialDebtsDisplay),
        appraisalFee: parseAmount(appraisalFeeDisplay),
        disasterLossDeduction: parseAmount(disasterLossDisplay),
        coResidenceInheritedHousingValue: parseAmount(coResidenceHousingDisplay),
        otherBusinessDeduction: parseAmount(otherBusinessDeductionDisplay),
        heirComposition,
        childCount: parseInt(childCount, 10) || 0,
        parentCount: parseInt(parentCount, 10) || 0,
        spouseActualInheritance: parseAmount(spouseActualInheritanceDisplay),
        spousePriorGiftTaxBase: parseAmount(spousePriorGiftTaxBaseDisplay),
        isSpouseOnlyHeir: isSpouseOnlyHeir || heirComposition === "spouse-only",
        childDeductionCount: parseInt(childDeductionCount, 10) || 0,
        minorHeirDeductions,
        elderlyCount: parseInt(elderlyCount, 10) || 0,
        disabledHeirDeductions,
        hasGenerationSkipHeir,
        generationSkipHeirShareRatio: parsePercentToRatio(generationSkipSharePercent),
        generationSkipMinorOverThreshold,
        isSubstituteInheritance,
        priorGiftTaxPaid: parseAmount(priorGiftTaxPaidDisplay),
        timelyFiling,
      }),
    );
  }

  const hasRequiredInput = totalPropertyDisplay.length > 0;

  const showSpouseFields =
    heirComposition === "spouse-only" ||
    heirComposition === "spouse-children" ||
    heirComposition === "spouse-parents";

  const exportText = React.useMemo(
    () => (result ? formatInheritanceTaxResultText(result) : ""),
    [result],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="inheritance-tax-calculator" className="scroll-mt-24">
        <CardHeader>
          <CardTitle className="text-lg">입력</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-3 rounded-lg border bg-muted/20 p-3">
            <p className="text-sm font-medium">① 상속재산·차감</p>
            <AmountInput
              id="it-total-property"
              label="총상속재산가액(원)"
              hint="상속개시일 현재 시가. 부동산·금융·보험금·신탁재산 등 합계"
              value={totalPropertyDisplay}
              onChange={setTotalPropertyDisplay}
            />
            <AmountInput
              id="it-non-taxable"
              label="비과세·과세가액 불산입(원)"
              value={nonTaxableDisplay}
              onChange={setNonTaxableDisplay}
            />
            <AmountInput
              id="it-debts"
              label="공과금·채무·장례비용(원)"
              value={debtsDisplay}
              onChange={setDebtsDisplay}
            />
            <AmountInput
              id="it-prior-gifts-heirs"
              label="사전증여 — 상속인(10년 이내, 원)"
              value={priorGiftsHeirsDisplay}
              onChange={setPriorGiftsHeirsDisplay}
            />
            <AmountInput
              id="it-prior-gifts-non-heirs"
              label="사전증여 — 비상속인(5년 이내, 원)"
              value={priorGiftsNonHeirsDisplay}
              onChange={setPriorGiftsNonHeirsDisplay}
            />
            <AmountInput
              id="it-non-heir-bequest"
              label="비상속인 유증·사인증여(원)"
              hint="공제 종합한도 계산용"
              value={nonHeirBequestDisplay}
              onChange={setNonHeirBequestDisplay}
            />
          </div>

          <div className="space-y-3 rounded-lg border bg-muted/20 p-3">
            <p className="text-sm font-medium">② 상속공제</p>
            <div className="space-y-2">
              <Label htmlFor="it-heir-composition">상속인 구성(배우자 법정상속분)</Label>
              <select
                id="it-heir-composition"
                className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                value={heirComposition}
                onChange={(e) => setHeirComposition(e.target.value as HeirComposition)}
              >
                <option value="spouse-children">배우자 + 직계비속(자녀)</option>
                <option value="spouse-parents">배우자 + 직계존속(부모)</option>
                <option value="spouse-only">배우자 단독</option>
                <option value="children-only">직계비속만(배우자 없음)</option>
                <option value="other">기타(배우자공제 미적용)</option>
              </select>
            </div>

            {(heirComposition === "spouse-children" || heirComposition === "children-only") && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="it-child-count">직계비속 수(법정분)</Label>
                  <Input
                    id="it-child-count"
                    inputMode="numeric"
                    value={childCount}
                    onChange={(e) => setChildCount(e.target.value.replace(/\D/g, ""))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="it-child-deduction">자녀공제 대상 수</Label>
                  <Input
                    id="it-child-deduction"
                    inputMode="numeric"
                    value={childDeductionCount}
                    onChange={(e) => setChildDeductionCount(e.target.value.replace(/\D/g, ""))}
                  />
                  <p className="text-muted-foreground text-xs">1인당 5,000만 원(제20조)</p>
                </div>
              </div>
            )}

            {heirComposition === "spouse-parents" && (
              <div className="space-y-2">
                <Label htmlFor="it-parent-count">직계존속 수</Label>
                <Input
                  id="it-parent-count"
                  inputMode="numeric"
                  value={parentCount}
                  onChange={(e) => setParentCount(e.target.value.replace(/\D/g, ""))}
                />
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="it-minor-count">미성년자공제 인원</Label>
                <Input
                  id="it-minor-count"
                  inputMode="numeric"
                  value={minorCount}
                  onChange={(e) => setMinorCount(e.target.value.replace(/\D/g, ""))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="it-minor-years">19세까지 연수(공통)</Label>
                <Input
                  id="it-minor-years"
                  inputMode="numeric"
                  value={minorYearsTo19}
                  onChange={(e) => setMinorYearsTo19(e.target.value.replace(/\D/g, ""))}
                />
                <p className="text-muted-foreground text-xs">1,000만×연수, 1년 미만은 1년</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="it-elderly">65세 이상 연로자공제</Label>
                <Input
                  id="it-elderly"
                  inputMode="numeric"
                  value={elderlyCount}
                  onChange={(e) => setElderlyCount(e.target.value.replace(/\D/g, ""))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="it-disabled-count">장애인공제 인원</Label>
                <Input
                  id="it-disabled-count"
                  inputMode="numeric"
                  value={disabledCount}
                  onChange={(e) => setDisabledCount(e.target.value.replace(/\D/g, ""))}
                />
              </div>
            </div>

            {parseInt(disabledCount, 10) > 0 && (
              <div className="space-y-2">
                <Label htmlFor="it-disabled-years">기대여명 연수(공통)</Label>
                <Input
                  id="it-disabled-years"
                  inputMode="numeric"
                  value={disabledLifeYears}
                  onChange={(e) => setDisabledLifeYears(e.target.value.replace(/\D/g, ""))}
                />
              </div>
            )}

            {showSpouseFields && (
              <>
                <AmountInput
                  id="it-spouse-inheritance"
                  label="배우자 실제 상속액(원)"
                  hint="사전증여·추정상속재산 제외. 5억 미만이면 최소 5억 공제"
                  value={spouseActualInheritanceDisplay}
                  onChange={setSpouseActualInheritanceDisplay}
                />
                <AmountInput
                  id="it-spouse-prior-gift-base"
                  label="배우자 사전증여 과세표준(원)"
                  hint="배우자공제 한도 계산 시 차감"
                  value={spousePriorGiftTaxBaseDisplay}
                  onChange={setSpousePriorGiftTaxBaseDisplay}
                />
              </>
            )}

            <div className="flex items-center gap-2">
              <Checkbox
                id="it-spouse-only-heir"
                checked={isSpouseOnlyHeir || heirComposition === "spouse-only"}
                disabled={heirComposition === "spouse-only"}
                onCheckedChange={(v) => setIsSpouseOnlyHeir(v === true)}
              />
              <Label htmlFor="it-spouse-only-heir" className="cursor-pointer font-normal">
                배우자 단독 상속(일괄공제 5억 불가)
              </Label>
            </div>

            <AmountInput
              id="it-financial-assets"
              label="금융재산(본래 상속재산, 원)"
              value={financialAssetsDisplay}
              onChange={setFinancialAssetsDisplay}
            />
            <AmountInput
              id="it-financial-debts"
              label="금융채무(원)"
              value={financialDebtsDisplay}
              onChange={setFinancialDebtsDisplay}
            />
            <AmountInput
              id="it-co-residence"
              label="동거주택 상속주택가액(원)"
              hint="제23조의2 — 100% 공제, 한도 6억(요건 충족 시)"
              value={coResidenceHousingDisplay}
              onChange={setCoResidenceHousingDisplay}
            />
            <AmountInput
              id="it-disaster"
              label="재해손실공제(원)"
              value={disasterLossDisplay}
              onChange={setDisasterLossDisplay}
            />
            <AmountInput
              id="it-other-business"
              label="가업·영농 등 기타 상속공제(원)"
              value={otherBusinessDeductionDisplay}
              onChange={setOtherBusinessDeductionDisplay}
            />
            <AmountInput
              id="it-appraisal-fee"
              label="감정평가 수수료(원)"
              hint="과세표준에서 공제(상속공제와 별도). 입력 시 결과에 차감 내역이 표시됩니다."
              value={appraisalFeeDisplay}
              onChange={setAppraisalFeeDisplay}
            />
          </div>

          <div className="space-y-3 rounded-lg border bg-muted/20 p-3">
            <p className="text-sm font-medium">③ 세액공제·할증</p>
            <AmountInput
              id="it-prior-gift-tax"
              label="사전증여분 증여세 산출세액(원)"
              hint="증여세액공제(과세가액 5억 초과 시)"
              value={priorGiftTaxPaidDisplay}
              onChange={setPriorGiftTaxPaidDisplay}
            />
            <div className="flex items-center gap-2">
              <Checkbox
                id="it-timely-filing"
                checked={timelyFiling}
                onCheckedChange={(v) => setTimelyFiling(v === true)}
              />
              <Label htmlFor="it-timely-filing" className="cursor-pointer font-normal">
                법정신고기한 내 신고(신고세액공제 3%)
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="it-generation-skip"
                checked={hasGenerationSkipHeir}
                onCheckedChange={(v) => setHasGenerationSkipHeir(v === true)}
              />
              <Label htmlFor="it-generation-skip" className="cursor-pointer font-normal">
                세대생략 할증(자녀가 아닌 직계비속)
              </Label>
            </div>
            {hasGenerationSkipHeir && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="it-generation-skip-share">할증 대상 상속 지분(%)</Label>
                  <Input
                    id="it-generation-skip-share"
                    inputMode="decimal"
                    placeholder="예: 33.33"
                    value={generationSkipSharePercent}
                    onChange={(e) => setGenerationSkipSharePercent(sanitizePercentInput(e.target.value))}
                  />
                  <p className="text-muted-foreground text-xs">
                    상속재산 중 할증 대상 상속인의 지분. 공동상속 시 33.33%처럼 소수점 입력 가능
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="it-generation-skip-minor"
                    checked={generationSkipMinorOverThreshold}
                    onCheckedChange={(v) => setGenerationSkipMinorOverThreshold(v === true)}
                  />
                  <Label htmlFor="it-generation-skip-minor" className="cursor-pointer font-normal">
                    미성년자·상속재산 20억 초과(40% 할증)
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="it-substitute"
                    checked={isSubstituteInheritance}
                    onCheckedChange={(v) => setIsSubstituteInheritance(v === true)}
                  />
                  <Label htmlFor="it-substitute" className="cursor-pointer font-normal">
                    대습상속(할증 배제)
                  </Label>
                </div>
              </>
            )}
          </div>

          <Button type="button" className="w-full" disabled={!hasRequiredInput} onClick={performCalculation}>
            상속세 계산하기
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">계산 결과</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!result ? (
            <p className="text-muted-foreground text-sm leading-relaxed">
              총상속재산가액을 입력한 뒤 계산하기를 누르면 과세가액·공제·세액이 표시됩니다.
            </p>
          ) : (
            <div ref={exportRef} className="bg-background space-y-4 rounded-lg p-3">
              <div className="border-border/80 border-b pb-2">
                <p className="text-sm font-semibold">상속세 계산기 · 계산 결과</p>
                <p className="text-muted-foreground text-xs">withustools.com · 참고용</p>
              </div>
              <div className="space-y-2 border-b pb-4">
                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-muted-foreground">상속세 과세가액</span>
                  <ResultAmountBlock amount={result.taxableEstateValue} className="font-semibold tabular-nums" rightAlign />
                </div>
                {showSpouseFields && result.spouseLegalShareRatio > 0 && (
                  <p className="text-muted-foreground text-xs">
                    배우자 법정상속분 {toPercent(result.spouseLegalShareRatio)}(
                    {formatNumber(result.spouseLegalShareAmount)}원)
                  </p>
                )}
              </div>

              {result.isBelowMinimumTaxable ? (
                <>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">상속공제</p>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">
                        {result.deductions.lumpSumApplied ? "일괄공제" : "기초+인적공제"}
                      </span>
                      <span className="tabular-nums">{formatNumber(result.deductions.lumpOrPersonalAmount)}원</span>
                    </div>
                    {result.deductions.spouse > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">배우자 상속공제</span>
                        <span className="tabular-nums">{formatNumber(result.deductions.spouse)}원</span>
                      </div>
                    )}
                    <div className="flex justify-between gap-4 border-t pt-2 font-medium">
                      <span>공제 합계(한도 반영)</span>
                      <span className="tabular-nums">{formatNumber(result.deductions.totalApplied)}원</span>
                    </div>
                  </div>
                  <div className="space-y-2 border-t pt-4 text-sm">
                    <p className="font-medium">과세표준 산출</p>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">공제 후 금액</span>
                      <span className="tabular-nums">{formatNumber(result.taxBaseBeforeAppraisal)}원</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">− 감정평가 수수료</span>
                      <span className="tabular-nums">
                        {result.appraisalFee > 0 ? "−" : ""}
                        {formatNumber(result.appraisalFee)}원
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-t pt-2 font-medium">
                      <span>= 과세표준</span>
                      <span className="tabular-nums">{formatNumber(result.taxBase)}원</span>
                    </div>
                  </div>
                  <div className="border-primary/30 bg-primary/5 rounded-lg border p-4">
                    <p className="text-sm font-medium">과세표준 50만 원 미만 — 상속세 없음</p>
                    <p className="text-muted-foreground mt-1 text-xs">제25조②</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">상속공제</p>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">
                        {result.deductions.lumpSumApplied ? "일괄공제" : "기초+인적공제"}
                      </span>
                      <span className="tabular-nums">{formatNumber(result.deductions.lumpOrPersonalAmount)}원</span>
                    </div>
                    {result.deductions.spouse > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">배우자 상속공제</span>
                        <span className="tabular-nums">{formatNumber(result.deductions.spouse)}원</span>
                      </div>
                    )}
                    {result.deductions.financial > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">금융재산 상속공제</span>
                        <span className="tabular-nums">{formatNumber(result.deductions.financial)}원</span>
                      </div>
                    )}
                    {result.deductions.coResidenceHousing > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">동거주택 상속공제</span>
                        <span className="tabular-nums">{formatNumber(result.deductions.coResidenceHousing)}원</span>
                      </div>
                    )}
                    {result.deductions.disaster > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">재해손실공제</span>
                        <span className="tabular-nums">{formatNumber(result.deductions.disaster)}원</span>
                      </div>
                    )}
                    {result.deductions.otherBusiness > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">가업·영농 등</span>
                        <span className="tabular-nums">{formatNumber(result.deductions.otherBusiness)}원</span>
                      </div>
                    )}
                    <div className="flex justify-between gap-4 border-t pt-2 font-medium">
                      <span>공제 합계(한도 반영)</span>
                      <span className="tabular-nums">{formatNumber(result.deductions.totalApplied)}원</span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t pt-4 text-sm">
                    <p className="font-medium">과세표준 산출</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      상속공제 적용 후 금액에서 감정평가 수수료를 추가로 차감합니다(제25조①2호). 상속공제와
                      구분되는 항목입니다.
                    </p>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">공제 후 금액</span>
                      <span className="tabular-nums">{formatNumber(result.taxBaseBeforeAppraisal)}원</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">− 감정평가 수수료</span>
                      <span className={`tabular-nums${result.appraisalFee > 0 ? " text-primary" : ""}`}>
                        {result.appraisalFee > 0 ? "−" : ""}
                        {formatNumber(result.appraisalFee)}원
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-t pt-2 font-medium">
                      <span>= 과세표준</span>
                      <ResultAmountBlock amount={result.taxBase} className="font-semibold tabular-nums" rightAlign />
                    </div>
                  </div>

                  <div className="space-y-2 border-t pt-4 text-sm">
                    <p className="text-muted-foreground text-xs">
                      적용 세율 {toPercent(result.appliedBracket.rate)} (누진공제{" "}
                      {formatNumber(result.appliedBracket.progressiveDeduction)}원)
                    </p>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">산출세액</span>
                      <span className="tabular-nums">{formatNumber(result.outputTax)}원</span>
                    </div>
                    {result.generationSkipSurcharge > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">
                          세대생략 할증({toPercent(result.generationSkipRate)})
                        </span>
                        <span className="tabular-nums">{formatNumber(result.generationSkipSurcharge)}원</span>
                      </div>
                    )}
                    {result.giftTaxCredit > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">증여세액공제</span>
                        <span className="text-primary tabular-nums">−{formatNumber(result.giftTaxCredit)}원</span>
                      </div>
                    )}
                    {result.filingTaxCredit > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">신고세액공제(3%)</span>
                        <span className="text-primary tabular-nums">−{formatNumber(result.filingTaxCredit)}원</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-primary/5 border-primary/20 rounded-lg border p-4">
                    <div className="flex justify-between gap-4">
                      <span className="text-sm font-medium">자진납부 상속세(참고)</span>
                      <ResultAmountBlock amount={result.payableTax} className="text-lg font-bold tabular-nums" rightAlign />
                    </div>
                    {result.installmentEligible && (
                      <p className="text-muted-foreground mt-2 text-xs">
                        분납 가능(1천만 초과분): 약 {formatNumber(result.installmentDeferrableAmount)}원 (제70조②)
                      </p>
                    )}
                  </div>
                </>
              )}

              {result.warnings.length > 0 && (
                <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-xs leading-relaxed">
                  {result.warnings.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              )}

              <p className="text-muted-foreground text-xs leading-relaxed">{result.filingDeadlineNote}</p>

              <CalculatorResultExportButtons
                disabled={!result}
                getText={() => exportText}
                captureRef={exportRef}
                filenameBase="inheritance-tax-calculator-result"
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">상속세 계산 흐름·세율 (국세청 기준)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm">
            국세청 「세액계산흐름도」·상속세 신고서 산출 순서를 기준으로, 과세가액 → 상속공제 → 과세표준 →
            산출세액 → 납부세액 순으로 계산합니다. 감정평가 수수료는 상속공제가 아니라 과세표준에서 차감합니다.
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
                  <th scope="col" className="w-36 p-2 text-left font-medium">
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
                  <td className="p-2 align-top font-medium">과세가액</td>
                  <td className="p-2 align-top">
                    <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                      <li>총상속재산 − 비과세·불산입 − 공과금·채무·장례비</li>
                      <li>
                        + 사전증여: 상속인 10년 이내·비상속인 5년 이내 증여재산(과세가액에 합산)
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">②</td>
                  <td className="p-2 align-top font-medium">상속공제</td>
                  <td className="p-2 align-top">
                    <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                      <li>
                        max(기초+인적, {formatNumber(LUMP_SUM_DEDUCTION)}원 일괄) + 배우자 + 금융 + 동거주택 +
                        재해 + 가업·영농 등
                      </li>
                      <li>제24조 종합한도 = 과세가액 − 유증·포기재산 − (과세가액 5억 초과 시 사전증여분)</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-xs">
                      공제 항목별 금액은 아래 「상속공제 기준표」를 참고하세요.
                    </p>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">③</td>
                  <td className="p-2 align-top font-medium">과세표준</td>
                  <td className="p-2 align-top">
                    <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                      <li>과세가액 − 상속공제 − 감정평가 수수료</li>
                      <li>
                        과세표준 {formatNumber(MINIMUM_TAXABLE_BASE)}원 미만 →{" "}
                        <strong className="text-foreground">상속세 없음</strong>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-top font-medium">④</td>
                  <td className="p-2 align-top font-medium whitespace-nowrap">
                    산출·납부세액
                  </td>
                  <td className="p-2 align-top">
                    <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                      <li>산출세액 = 과세표준 × 누진세율 − 누진공제</li>
                      <li>+ 세대생략 할증(30%·미성년 20억 초과 40%)</li>
                      <li>− 증여세액공제(과세가액 5억 초과·사전증여분) − 신고세액공제({toPercent(FILING_TAX_CREDIT_RATE)})</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-xs">
                      할증·공제 상세는 아래 「세대생략·세액공제」 표를 참고하세요.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
                상속공제 기준표(상속세법 제18~23조의2)
              </caption>
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="w-36 p-2 text-left font-medium">
                    공제
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    금액·산식
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    비고
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">기초공제</td>
                  <td className="p-2 align-top">{formatNumber(BASIC_DEDUCTION)}원</td>
                  <td className="p-2 align-top text-muted-foreground">모든 상속에 공통</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">일괄공제</td>
                  <td className="p-2 align-top">{formatNumber(LUMP_SUM_DEDUCTION)}원</td>
                  <td className="p-2 align-top text-muted-foreground">
                    max(기초+인적, 5억). 배우자 단독 상속인은 일괄공제 불가
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">인적공제</td>
                  <td className="p-2 align-top">
                    <ul className="text-muted-foreground list-disc space-y-0.5 pl-4">
                      <li>자녀(태아 포함) {formatNumber(CHILD_DEDUCTION_PER_PERSON)}원/인</li>
                      <li>
                        미성년자 {formatNumber(MINOR_DEDUCTION_BASE)}원 × 19세까지 연수(1년 미만 1년)
                      </li>
                      <li>65세 이상 {formatNumber(ELDERLY_DEDUCTION_PER_PERSON)}원/인</li>
                      <li>
                        장애인 {formatNumber(DISABLED_DEDUCTION_BASE)}원 × 기대여명(1년 미만 1년)
                      </li>
                    </ul>
                  </td>
                  <td className="p-2 align-top text-muted-foreground">배우자 제외 상속인·동거가족</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">배우자공제</td>
                  <td className="p-2 align-top">
                    min(실제상속액, 법정상속분, {formatNumber(SPOUSE_DEDUCTION_CAP)}원)
                    <br />
                    최소 {formatNumber(SPOUSE_DEDUCTION_MINIMUM)}원
                  </td>
                  <td className="p-2 align-top text-muted-foreground">
                    민법 법정상속분·사전증여 과세표준 차감 반영
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">금융재산</td>
                  <td className="p-2 align-top">
                    {formatNumber(FINANCIAL_DEDUCTION_THRESHOLD)}원 이하 전액, 초과 시 max(20%,{" "}
                    {formatNumber(FINANCIAL_DEDUCTION_MIN)}원) · 한도 {formatNumber(FINANCIAL_DEDUCTION_CAP)}원
                  </td>
                  <td className="p-2 align-top text-muted-foreground">본래 상속재산 중 금융재산만(사전증여 제외)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium whitespace-nowrap">동거주택</td>
                  <td className="p-2 align-top">
                    상속주택가액 100%, 한도 {formatNumber(CO_RESIDENCE_HOUSING_CAP)}원
                  </td>
                  <td className="p-2 align-top text-muted-foreground">
                    10년 이상 동거·무주택·1주택 등 요건(제23조의2)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-top font-medium whitespace-nowrap">감정평가 수수료</td>
                  <td className="p-2 align-top">과세표준에서 차감</td>
                  <td className="p-2 align-top text-muted-foreground">
                    <strong className="text-foreground">상속공제 아님</strong> — 공제 후 금액에서 별도 차감
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
                세대생략·세액공제(제27~28·69조)
              </caption>
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="w-36 p-2 text-left font-medium">
                    구분
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    내용
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">세대생략 할증</td>
                  <td className="p-2 align-top">
                    자녀가 아닌 직계비속(손·손녀 등) 상속 시 산출세액 × 지분 × 30%. 미성년자가{" "}
                    {formatNumber(GENERATION_SKIP_MINOR_THRESHOLD)}원 초과 상속 시 40%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">대습상속</td>
                  <td className="p-2 align-top text-muted-foreground">
                    선순위 상속인 사망으로 대습 상속한 경우 세대생략 할증 배제
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">증여세액공제</td>
                  <td className="p-2 align-top text-muted-foreground">
                    과세가액 {formatNumber(LUMP_SUM_DEDUCTION)}원 초과·사전증여분에 대해 납부(예정) 증여세를
                    산출세액 안분 공제
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-top font-medium">신고세액공제</td>
                  <td className="p-2 align-top text-muted-foreground">
                    법정신고기한 내 자진신고 시 (산출세액 + 할증 − 증여세액공제) × {toPercent(FILING_TAX_CREDIT_RATE)}.
                    무신고·과소신고 시 미적용
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
                상속세율(제26조)
              </caption>
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
                {INHERITANCE_TAX_BRACKETS.map((b) => (
                  <tr key={b.maxBase} className="border-b last:border-b-0">
                    <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                    <td className="p-2 text-right tabular-nums">{toPercent(b.rate)}</td>
                    <td className="p-2 text-right tabular-nums">
                      {b.progressiveDeduction > 0 ? `${formatNumber(b.progressiveDeduction)}원` : "없음"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-md border p-3 text-xs leading-relaxed">
            <p className="text-foreground font-medium">신고·납부·참고사항</p>
            <ol className="text-muted-foreground mt-2 list-decimal space-y-1 pl-4">
              <li>
                <strong className="text-foreground">신고기한</strong>: 상속개시일이 속하는 달의 말일부터 6개월
                이내(외국 거주·재산 국외 등은 9개월). 기한 내 신고 시 신고세액공제 3% 적용.
              </li>
              <li>
                <strong className="text-foreground">분납</strong>: 납부세액 {formatNumber(INSTALLMENT_THRESHOLD)}원
                초과 시 2년(또는 5년·10년) 분납 가능(제70조). 2천만 이하 초과분 전액, 그 이상은 50% 범위 내.
              </li>
              <li>
                <strong className="text-foreground">연부연납·물납</strong>: 납부곤란 등 일정 요건 시 이자만 내고
                세액을 연기하거나, 부동산 등으로 납부할 수 있습니다(별도 신청·심사).
              </li>
              <li>
                재산가액은 원칙적으로 <strong>상속개시일 현재 시가</strong>입니다. 본 계산기는 시가를 직접
                입력하는 방식이며, 감정평가·홈택스 자동계산과 차이가 날 수 있습니다.
              </li>
              <li>
                복수 상속인 시 세액은 상속인별 안분·대습상속·가업·영농상속공제 등 복잡한 경우가 많습니다. 본
                계산기는 1건 기준 참고용이며, 최종 신고는 홈택스·세무사 확인을 권장합니다.
              </li>
              <li>
                무신고·과소신고 가산세, 추징, 상속재산분류(비과세·불산입) 등은 본 계산기에 미반영입니다.
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
