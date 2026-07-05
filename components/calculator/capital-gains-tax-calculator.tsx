"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BASIC_DEDUCTION,
  BASIC_TAX_BRACKETS,
  calcHoldingPeriodFromDates,
  computeCapitalGainsTax,
  getGeneralLongTermDeductionRate,
  getOneHomeHoldingDeductionRate,
  getOneHomeResidenceDeductionRate,
  HIGH_PRICE_HOME_THRESHOLD,
  isMultiHomeSurchargeExemptPeriod,
  LOCAL_INCOME_TAX_RATE,
  toPercent,
  type AssetType,
  type CapitalGainsTaxResult,
  type HouseCount,
} from "@/lib/capital-gains-tax-calculations";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber, removeCommas } from "@/lib/loan-calculations";

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
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
  if (!Number.isFinite(maxBase)) return "초과";
  if (maxBase >= 1_000_000_000) return `${maxBase / 100_000_000}억 원 이하`;
  if (maxBase >= 100_000_000) return `${maxBase / 100_000_000}억 원 이하`;
  return `${maxBase / 10_000}만 원 이하`;
}

function todayIsoDate(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function CapitalGainsTaxCalculator() {
  const [assetType, setAssetType] = React.useState<AssetType>("housing");
  const [transferPriceDisplay, setTransferPriceDisplay] = React.useState("");
  const [acquisitionCostDisplay, setAcquisitionCostDisplay] = React.useState("");
  const [necessaryExpensesDisplay, setNecessaryExpensesDisplay] = React.useState("");
  const [acquisitionDate, setAcquisitionDate] = React.useState("");
  const [transferDate, setTransferDate] = React.useState(todayIsoDate);
  const [residenceStartDate, setResidenceStartDate] = React.useState("");
  const [houseCount, setHouseCount] = React.useState<HouseCount>("1");
  const [isRegulatedArea, setIsRegulatedArea] = React.useState(false);
  const [isOneHouseholdOneHome, setIsOneHouseholdOneHome] = React.useState(true);
  const [isRegistered, setIsRegistered] = React.useState(true);
  const [managementApprovalDate, setManagementApprovalDate] = React.useState("");
  const [memberRightsValueDisplay, setMemberRightsValueDisplay] = React.useState("");
  const [result, setResult] = React.useState<CapitalGainsTaxResult | null>(null);

  const showOneHomeInputs =
    assetType === "housing" || assetType === "presale" || assetType === "occupancy-right";
  const showResidenceInputs = showOneHomeInputs && isOneHouseholdOneHome;
  const showOccupancyInputs = assetType === "occupancy-right";

  const holdingPreview = React.useMemo(
    () => (acquisitionDate && transferDate ? calcHoldingPeriodFromDates(acquisitionDate, transferDate) : null),
    [acquisitionDate, transferDate],
  );

  const residencePreview = React.useMemo(() => {
    if (!transferDate) return null;
    const start = residenceStartDate || acquisitionDate;
    if (!start) return null;
    return calcHoldingPeriodFromDates(start, transferDate);
  }, [acquisitionDate, residenceStartDate, transferDate]);

  const formerHousingPreview = React.useMemo(() => {
    if (!showOccupancyInputs || !acquisitionDate || !managementApprovalDate) return null;
    return calcHoldingPeriodFromDates(acquisitionDate, managementApprovalDate);
  }, [acquisitionDate, managementApprovalDate, showOccupancyInputs]);

  React.useEffect(() => {
    if (houseCount !== "1") {
      setIsOneHouseholdOneHome(false);
    }
  }, [houseCount]);

  function performCalculation() {
    const transferPrice = parseInt(removeCommas(transferPriceDisplay), 10) || 0;
    const acquisitionCost = parseInt(removeCommas(acquisitionCostDisplay), 10) || 0;
    const necessaryExpenses = parseInt(removeCommas(necessaryExpensesDisplay), 10) || 0;

    const memberRightsValue = memberRightsValueDisplay
      ? parseInt(removeCommas(memberRightsValueDisplay), 10) || null
      : null;

    setResult(
      computeCapitalGainsTax({
        assetType,
        transferPrice,
        acquisitionCost,
        necessaryExpenses,
        acquisitionDate,
        transferDate,
        residenceStartDate: residenceStartDate || null,
        managementDisposalPlanApprovalDate:
          assetType === "occupancy-right" ? managementApprovalDate : null,
        memberRightsValue: assetType === "occupancy-right" ? memberRightsValue : null,
        houseCount,
        isRegulatedArea,
        isOneHouseholdOneHome: showOneHomeInputs && isOneHouseholdOneHome,
        isRegistered,
      }),
    );
  }

  const hasRequiredInput =
    transferPriceDisplay &&
    acquisitionCostDisplay &&
    acquisitionDate &&
    transferDate &&
    (assetType !== "occupancy-right" || managementApprovalDate);

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="capital-gains-tax-calculator" className="scroll-mt-24">
        <CardHeader>
          <CardTitle className="text-lg">입력</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="cgt-asset-type">자산 구분</Label>
            <select
              id="cgt-asset-type"
              className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              value={assetType}
              onChange={(e) => setAssetType(e.target.value as AssetType)}
            >
              <option value="housing">주택(주택부수토지 포함)</option>
              <option value="presale">분양권(주택분양권)</option>
              <option value="occupancy-right">조합원입주권</option>
              <option value="non-housing">주택 외 부동산(상가·토지 등)</option>
              <option value="non-business-land">비사업용 토지</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cgt-transfer-price">양도가액(실지거래가, 원)</Label>
            <Input
              id="cgt-transfer-price"
              inputMode="numeric"
              placeholder="예: 1,500,000,000"
              value={transferPriceDisplay}
              onChange={(e) => setTransferPriceDisplay(addCommas(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cgt-acquisition-cost">취득가액(원)</Label>
            <Input
              id="cgt-acquisition-cost"
              inputMode="numeric"
              placeholder="예: 900,000,000"
              value={acquisitionCostDisplay}
              onChange={(e) => setAcquisitionCostDisplay(addCommas(e.target.value))}
            />
            <p className="text-muted-foreground text-xs">취득 당시 실지거래가·감정가 등</p>
          </div>

          {showOccupancyInputs && (
            <>
              <div className="space-y-2">
                <Label htmlFor="cgt-member-rights">조합원권리가액(원, 선택)</Label>
                <Input
                  id="cgt-member-rights"
                  inputMode="numeric"
                  placeholder="미입력 시 양도가액과 동일"
                  value={memberRightsValueDisplay}
                  onChange={(e) => setMemberRightsValueDisplay(addCommas(e.target.value))}
                />
                <p className="text-muted-foreground text-xs">
                  관리처분인가 시점 조합원 지분 가액. 비우면 입주권분 양도차익 0으로 계산합니다.
                </p>
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="cgt-necessary-expenses">필요경비(원)</Label>
            <Input
              id="cgt-necessary-expenses"
              inputMode="numeric"
              placeholder="예: 15,000,000"
              value={necessaryExpensesDisplay}
              onChange={(e) => setNecessaryExpensesDisplay(addCommas(e.target.value))}
            />
            <p className="text-muted-foreground text-xs">취득세·중개수수료·수리비 등 증빙 가능 경비</p>
          </div>

          <div className="space-y-3 rounded-lg border bg-muted/20 p-3">
            <div className="space-y-2">
              <p className="text-sm font-medium">취득·양도 일정</p>
              <ul
                className="text-muted-foreground list-disc space-y-0.5 pl-4 text-xs leading-relaxed"
                aria-label="날짜 입력 시 자동 처리 항목"
              >
                <li>양도일 → 조정지역 다주택 중과 한시배제 여부(2026.5.9 이전·이후)</li>
                <li>취득일 + 조정지역 → 2017.8.3 이후 취득 주택의 거주 2년 요건 충족 여부</li>
                {showOccupancyInputs && (
                  <li>관리처분인가일 → 종전주택·입주권 보유기간 분리, 장특공 기산</li>
                )}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="cgt-acquisition-date">취득일</Label>
                <Input
                  id="cgt-acquisition-date"
                  type="date"
                  value={acquisitionDate}
                  max={transferDate || undefined}
                  onChange={(e) => setAcquisitionDate(e.target.value)}
                />
                <p className="text-muted-foreground text-xs">매수 잔금일·등기 접수일 등 취득 시점</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cgt-transfer-date">양도일</Label>
                <Input
                  id="cgt-transfer-date"
                  type="date"
                  value={transferDate}
                  min={acquisitionDate || undefined}
                  onChange={(e) => setTransferDate(e.target.value)}
                />
                <p className="text-muted-foreground text-xs">원칙: 매도 잔금·대금청산일</p>
              </div>
            </div>
            {showOccupancyInputs && (
              <div className="space-y-2">
                <Label htmlFor="cgt-management-approval-date">관리처분계획인가일</Label>
                <Input
                  id="cgt-management-approval-date"
                  type="date"
                  value={managementApprovalDate}
                  min={acquisitionDate || undefined}
                  max={transferDate || undefined}
                  onChange={(e) => setManagementApprovalDate(e.target.value)}
                />
                <p className="text-muted-foreground text-xs">
                  종전주택 → 입주권 전환일. 장특공·1세1주택 보유기간은 취득일~인가일 기준입니다.
                </p>
              </div>
            )}
            {showResidenceInputs && (
              <div className="space-y-2">
                <Label htmlFor="cgt-residence-start-date">거주 시작일(선택)</Label>
                <Input
                  id="cgt-residence-start-date"
                  type="date"
                  value={residenceStartDate}
                  min={acquisitionDate || undefined}
                  max={transferDate || undefined}
                  onChange={(e) => setResidenceStartDate(e.target.value)}
                />
                <p className="text-muted-foreground text-xs">
                  전입·실거주 시작일. 비우면 취득일과 동일한 것으로 계산합니다.
                </p>
              </div>
            )}
            {holdingPreview ? (
              <div
                className="border-primary/25 bg-primary/5 space-y-1.5 rounded-md border p-2.5"
                role="status"
                aria-live="polite"
              >
                <p className="text-foreground text-xs font-medium">입력 날짜 기준 자동 산출</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  보유: <strong className="text-foreground">{holdingPreview.label}</strong>
                  {holdingPreview.meetsMinimumYears(2)
                    ? " · 2년 이상 보유"
                    : holdingPreview.isLessThanYears(1)
                      ? " · 1년 미만(단기세율)"
                      : " · 1~2년(단기세율)"}
                </p>
                {formerHousingPreview && showOccupancyInputs && (
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    종전주택 보유(인가일까지):{" "}
                    <strong className="text-foreground">{formerHousingPreview.label}</strong>
                  </p>
                )}
                {residencePreview && showResidenceInputs && (
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    거주: <strong className="text-foreground">{residencePreview.label}</strong>
                    {residencePreview.meetsMinimumYears(2)
                      ? " · 거주 2년 이상(표2·비과세 요건 검토)"
                      : " · 거주 2년 미만(표1 장특공)"}
                  </p>
                )}
                {transferDate && houseCount !== "1" && isRegulatedArea && (
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    다주택 중과 한시배제:{" "}
                    <strong className="text-foreground">
                      {isMultiHomeSurchargeExemptPeriod(transferDate)
                        ? "적용(양도일 2026.5.9 이전)"
                        : "미적용(2026.5.10~ 중과)"}
                    </strong>
                  </p>
                )}
                {showOneHomeInputs && isOneHouseholdOneHome && isRegulatedArea && acquisitionDate >= "2017-08-03" && residencePreview && (
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    조정지역 취득 거주요건:{" "}
                    <strong className="text-foreground">
                      {residencePreview.meetsMinimumYears(2) ? "충족" : "미충족"}
                    </strong>
                    (2017.8.3 이후 취득)
                  </p>
                )}
              </div>
            ) : (
              <p className="text-muted-foreground text-xs leading-relaxed">
                취득일과 양도일을 입력하면 위 항목의 자동 산출 결과가 여기에 표시됩니다.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cgt-house-count">양도일 현재 세대 주택 수</Label>
            <select
              id="cgt-house-count"
              className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              value={houseCount}
              onChange={(e) => setHouseCount(e.target.value as HouseCount)}
            >
              <option value="1">1주택</option>
              <option value="2">2주택</option>
              <option value="3+">3주택 이상</option>
            </select>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="cgt-regulated-area"
                checked={isRegulatedArea}
                onCheckedChange={(v) => setIsRegulatedArea(v === true)}
              />
              <Label htmlFor="cgt-regulated-area" className="cursor-pointer font-normal">
                조정대상지역 소재
              </Label>
            </div>

            {showOneHomeInputs && houseCount === "1" && (
              <div className="flex items-center gap-2">
                <Checkbox
                  id="cgt-one-home"
                  checked={isOneHouseholdOneHome}
                  onCheckedChange={(v) => setIsOneHouseholdOneHome(v === true)}
                />
                <Label htmlFor="cgt-one-home" className="cursor-pointer font-normal">
                  1세대 1주택 해당
                </Label>
              </div>
            )}

            {assetType !== "presale" && assetType !== "occupancy-right" && (
              <div className="flex items-center gap-2">
                <Checkbox
                  id="cgt-registered"
                  checked={isRegistered}
                  onCheckedChange={(v) => setIsRegistered(v === true)}
                />
                <Label htmlFor="cgt-registered" className="cursor-pointer font-normal">
                  취득·양도 모두 등기 완료
                </Label>
              </div>
            )}
          </div>

          <Button type="button" className="w-full" onClick={performCalculation} disabled={!hasRequiredInput}>
            계산하기
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">계산 결과</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!result ? (
            <p className="text-muted-foreground text-sm">양도가액·취득가액 등을 입력한 뒤 계산하기를 누르세요.</p>
          ) : result.isFullyExempt ? (
            <div className="space-y-3">
              <p className="text-lg font-semibold text-green-700 dark:text-green-400">비과세(또는 과세대상 없음)</p>
              <p className="text-muted-foreground text-sm">{result.exemptReason}</p>
              <div className="flex justify-between gap-2 text-sm">
                <span className="text-muted-foreground">양도차익</span>
                <ResultAmountBlock amount={result.grossGain} className="tabular-nums font-medium" />
              </div>
            </div>
          ) : (
            <>
              <div className="bg-primary/5 rounded-lg border p-4">
                <p className="text-muted-foreground text-sm">납부세액 합계(지방소득세 포함)</p>
                <ResultAmountBlock
                  amount={result.totalPayableTax}
                  className="text-primary text-2xl font-bold tabular-nums"
                />
              </div>

              <div className="grid gap-2 text-sm">
                {result.holdingPeriodLabel && (
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">보유 기간</span>
                    <span>
                      {result.holdingPeriodLabel}
                      {result.holdingCompleteYears > 0 && ` (${result.holdingCompleteYears}년차)`}
                    </span>
                  </div>
                )}
                {result.residencePeriodLabel && showResidenceInputs && (
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">거주 기간</span>
                    <span>
                      {result.residencePeriodLabel}
                      {result.residenceCompleteYears > 0 && ` (${result.residenceCompleteYears}년차)`}
                    </span>
                  </div>
                )}
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground">양도차익</span>
                  <span className="tabular-nums">{formatNumber(result.grossGain)}원</span>
                </div>
                {result.formerHousingGain != null && (
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">종전주택분 양도차익</span>
                    <span className="tabular-nums">{formatNumber(result.formerHousingGain)}원</span>
                  </div>
                )}
                {result.occupancyRightsGain != null && (
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">입주권분 양도차익</span>
                    <span className="tabular-nums">{formatNumber(result.occupancyRightsGain)}원</span>
                  </div>
                )}
                {result.highPriceApportionmentRatio != null && (
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">
                      고가주택 과세대상 비율(12억 초과분)
                    </span>
                    <span className="tabular-nums">{toPercent(result.highPriceApportionmentRatio)}</span>
                  </div>
                )}
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground">과세대상 양도차익</span>
                  <span className="tabular-nums">{formatNumber(result.taxableGain)}원</span>
                </div>
                {result.longTermDeductionAmount > 0 && (
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">
                      장기보유특별공제(
                      {result.longTermDeductionTable === "table2"
                        ? `표2 보유 ${toPercent(result.holdingDeductionRate)}+거주 ${toPercent(result.residenceDeductionRate)}`
                        : `표1 ${toPercent(result.longTermDeductionRate)}`}
                      )
                    </span>
                    <span className="tabular-nums text-green-700 dark:text-green-400">
                      −{formatNumber(result.longTermDeductionAmount)}원
                    </span>
                  </div>
                )}
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground">양도소득금액</span>
                  <span className="tabular-nums">{formatNumber(result.transferIncome)}원</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground">기본공제</span>
                  <span className="tabular-nums">−{formatNumber(result.basicDeduction)}원</span>
                </div>
                <div className="flex justify-between gap-2 border-t pt-2 font-medium">
                  <span>과세표준</span>
                  <span className="tabular-nums">{formatNumber(result.taxBase)}원</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground">
                    양도소득 산출세액 ({toPercent(result.appliedEffectiveRate)})
                  </span>
                  <span className="tabular-nums">{formatNumber(result.outputTax)}원</span>
                </div>
                <p className="text-muted-foreground pl-0 text-xs">{result.appliedRateLabel}</p>
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground">지방소득세({toPercent(LOCAL_INCOME_TAX_RATE)})</span>
                  <span className="tabular-nums">{formatNumber(result.localIncomeTax)}원</span>
                </div>
                <div className="flex justify-between gap-2 border-t pt-2 font-semibold">
                  <span>총 납부액</span>
                  <ResultAmountBlock amount={result.totalPayableTax} className="tabular-nums" rightAlign />
                </div>
              </div>

              {result.rateCandidates.length > 1 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">세율 비교(큰 세액 적용)</p>
                  <div className="overflow-auto rounded-md border">
                    <table className="w-full min-w-[320px] border-collapse text-sm">
                      <thead className="bg-muted/50 border-b">
                        <tr>
                          <th scope="col" className="p-2 text-left font-medium">
                            구분
                          </th>
                          <th scope="col" className="p-2 text-right font-medium">
                            산출세액
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.rateCandidates.map((c) => (
                          <tr
                            key={c.label}
                            className={`border-b last:border-b-0 ${c.label === result.appliedRateLabel ? "bg-primary/5 font-medium" : ""}`}
                          >
                            <td className="p-2">{c.label}</td>
                            <td className="p-2 text-right tabular-nums">{formatNumber(c.outputTax)}원</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {result.installmentEligible && (
                <p className="text-muted-foreground text-xs">
                  납부세액 1천만 원 초과 시 분할납부 가능(최대{" "}
                  {formatNumber(result.installmentDeferrableAmount)}원, 납부기한 후 2개월 이내).
                </p>
              )}

              {result.warnings.length > 0 && (
                <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-xs">
                  {result.warnings.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              )}

              <p className="text-muted-foreground text-xs">{result.filingDeadlineNote}</p>
            </>
          )}
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">양도소득세 계산 흐름</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm">
            국세청 양도소득세 신고서 산출 순서를 기준으로, 양도차익 → 비과세·장특공 → 과세표준 → 세액 순으로
            계산합니다.
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
                  <td className="p-2 align-top font-medium">양도차익</td>
                  <td className="p-2 align-top">양도가액 − 취득가액 − 필요경비</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">②</td>
                  <td className="p-2 align-top font-medium whitespace-nowrap">
                    비과세·고가 안분
                  </td>
                  <td className="p-2 align-top">
                    <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                      <li>
                        1세1주택·{formatNumber(HIGH_PRICE_HOME_THRESHOLD)}원 이하·2년 보유·거주 등 →{" "}
                        <strong className="text-foreground">비과세</strong>
                      </li>
                      <li>
                        12억 초과 → 과세대상 = 양도차익 × (양도가 − 12억) ÷ 양도가
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">③</td>
                  <td className="p-2 align-top font-medium">장기보유특별공제</td>
                  <td className="p-2 align-top">
                    <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                      <li>
                        표1(일반): 3년~ 연 2%p, 최대 30% (비사업용 토지 포함)
                      </li>
                      <li>
                        표2(1세1주택·거주 2년~): 보유·거주 각 최대 40%, 합산 최대 80%
                      </li>
                      <li>조정지역 다주택 중과 재시행 후 → 장특공 배제</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-xs">
                      자산별 적용은 아래 「자산별 특례」·「장기보유특별공제」 표를 참고하세요.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-top font-medium">④</td>
                  <td className="p-2 align-top font-medium whitespace-nowrap">
                    과세표준·세액
                  </td>
                  <td className="p-2 align-top">
                    <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                      <li>양도소득금액 = 과세대상 양도차익 − 장특공</li>
                      <li>
                        과세표준 = 양도소득금액 − 기본공제 {formatNumber(BASIC_DEDUCTION)}원
                      </li>
                      <li>
                        산출세액 = max(기본누진·단기·분양권·미등기·중과·비사업용토지)
                      </li>
                      <li>
                        지방소득세 = 산출세액 × {toPercent(LOCAL_INCOME_TAX_RATE)}
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
                자산별 특례
              </caption>
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="w-28 p-2 text-left font-medium">
                    자산
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    비과세·장특공
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    세율·중과
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">주택</td>
                  <td className="p-2 align-top">1세1주택 비과세·표1/표2 장특공</td>
                  <td className="p-2 align-top">기본 누진·단기·조정지역 다주택 중과</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium">분양권</td>
                  <td className="p-2 align-top">장특공·1세1주택 비과세 미적용</td>
                  <td className="p-2 align-top">1년 미만 70%, 1년 이상 60%(다주택 중과 미적용)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium whitespace-nowrap">조합원입주권</td>
                  <td className="p-2 align-top">
                    인가 전 종전주택분만 표2(각 최대 24%p)·12억 안분
                  </td>
                  <td className="p-2 align-top">기본 누진(인가 후 입주권분은 장특공 없음)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-medium whitespace-nowrap">비사업용 토지</td>
                  <td className="p-2 align-top">표1 장특공(최대 30%)</td>
                  <td className="p-2 align-top">기본 누진 + 10%p 중과</td>
                </tr>
                <tr>
                  <td className="p-2 align-top font-medium whitespace-nowrap">주택 외 부동산</td>
                  <td className="p-2 align-top">표1 장특공</td>
                  <td className="p-2 align-top">기본 누진·단기(1년 미만 50%, 1~2년 40%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
                기본 누진세율(소득세법 §55①, 2023~)
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
                {BASIC_TAX_BRACKETS.map((b) => (
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

          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
                장기보유특별공제(소득세법 §95②)
              </caption>
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th scope="col" className="p-2 text-left font-medium">
                    보유·거주
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    표1(일반)
                  </th>
                  <th scope="col" className="p-2 text-left font-medium">
                    표2(1세대1주택·거주2년~)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[3, 5, 10, 15].map((years) => (
                  <tr key={years} className="border-b last:border-b-0">
                    <td className="p-2">{years}년</td>
                    <td className="p-2">{toPercent(getGeneralLongTermDeductionRate(years))}</td>
                    <td className="p-2">
                      보유 {toPercent(getOneHomeHoldingDeductionRate(years))}
                      {years >= 2 && ` + 거주 ${toPercent(getOneHomeResidenceDeductionRate(years))}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-md border p-3 text-xs leading-relaxed">
            <p className="text-foreground font-medium">적용요건·참고사항</p>
            <ol className="text-muted-foreground mt-2 list-decimal space-y-1 pl-4">
              <li>
                양도시기는 원칙적으로 <strong>대금청산일(잔금일)</strong>입니다. 등기가 먼저면 등기접수일이
                양도시기가 될 수 있습니다.
              </li>
              <li>
                보유·거주 기간은 <strong>취득일·양도일</strong>로 산출합니다(1년 미만 끝수 버림). 장특공·단기세율
                판정에 사용됩니다.
              </li>
              <li>
                1세대 1주택 비과세는 실지거래가 합계{" "}
                <strong>{formatNumber(HIGH_PRICE_HOME_THRESHOLD)}원 이하</strong>, 2년 이상 보유, 조정지역 취득 시
                2년 거주 등 요건이 필요합니다.
              </li>
              <li>
                조정대상지역 다주택: 2026.5.10~ 기본세율+20%p(2주택)·+30%p(3주택+) 중과, 장특공 배제. 2026.5.9까지
                양도·2년 보유는 한시 배제.
              </li>
              <li>
                비사업용 토지: 기본세율 + 10%p 중과. 보유 3년 이상이면 표1 장기보유특별공제(최대 30%) 적용.
              </li>
              <li>
                분양권: 보유 1년 미만 70%, 1년 이상 60% 단일세율. 장특공·1세1주택 비과세·다주택 중과
                미적용(주택 수 산정에는 포함될 수 있음).
              </li>
              <li>
                조합원입주권: 관리처분인가일 기준 종전주택·입주권 차익 분리. 1세1주택 12억 안분·표2
                장특공(인가 전분).
              </li>
              <li>단기: 주택 1년 미만 70%, 1~2년 60%. 일반 자산 50%·40%.</li>
              <li>확정신고·다건 양도·감면소득 등은 본 계산기에 미반영. 홈택스·세무사 확인 권장.</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
