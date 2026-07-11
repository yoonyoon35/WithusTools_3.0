"use client";

import { LtvCalculatorReference } from "@/components/calculator/reference";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  buildLtvAppliedBasisItems,
  computeLtvSnapshot,
  ltvHomeOwnershipLabels,
  ltvMetroAreaLabels,
  ltvRegionTypeLabels,
  LTV_BANK_LOAN_CAP_WON,
  type LtvHomeOwnership,
  type LtvMetroArea,
  type LtvRegionType,
} from "@/lib/ltv-calculations";
import { formatNumber, removeCommas } from "@/lib/loan-calculations";
import { MoneyValue, ResultRow } from "@/components/calculator/calculator-result-rows";
import { CalculatorResultExportButtons } from "@/components/calculator/calculator-result-export-buttons";
import { formatLtvResultText } from "@/lib/ltv-result-text";

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function parseAmountDisplay(display: string): number {
  const n = parseInt(removeCommas(display), 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function formatPercent(value: number): string {
  return value % 1 === 0 ? `${value}` : value.toFixed(2).replace(/\.?0+$/, "");
}

function LtvAppliedBasisSection({
  items,
  limitReasonLabel,
}: {
  items: readonly { label: string; value: string }[];
  limitReasonLabel: string;
}) {
  return (
    <section
      className="rounded-md border border-border bg-muted/25 px-3 py-3"
      aria-labelledby="ltv-applied-basis-title"
    >
      <h3 id="ltv-applied-basis-title" className="text-sm font-medium">
        적용 근거
      </h3>
      <dl className="mt-2 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
            <dt className="text-muted-foreground shrink-0 text-xs sm:text-sm">{item.label}</dt>
            <dd className="text-right text-sm font-medium">{item.value}</dd>
          </div>
        ))}
      </dl>
      <p className="text-muted-foreground mt-2.5 border-t border-border/80 pt-2 text-xs leading-relaxed">
        LTV 한도 분기: <span className="text-foreground font-medium">{limitReasonLabel}</span>
      </p>
    </section>
  );
}

export function LtvCalculator() {
  const exportRef = React.useRef<HTMLDivElement>(null);
  const [collateralDisplay, setCollateralDisplay] = React.useState("");
  const [plannedLoanDisplay, setPlannedLoanDisplay] = React.useState("");
  const [seniorLienDisplay, setSeniorLienDisplay] = React.useState("");
  const [regionType, setRegionType] = React.useState<LtvRegionType>("non-regulated");
  const [homeOwnership, setHomeOwnership] = React.useState<LtvHomeOwnership>("none");
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = React.useState(false);
  const [metroArea, setMetroArea] = React.useState<LtvMetroArea>("capital");
  const [applyLoanCap, setApplyLoanCap] = React.useState(true);
  const [hasCalculated, setHasCalculated] = React.useState(false);

  const showFirstTimeInputs = homeOwnership === "none";

  React.useEffect(() => {
    if (!showFirstTimeInputs) setIsFirstTimeBuyer(false);
  }, [showFirstTimeInputs]);

  const collateralWon = parseAmountDisplay(collateralDisplay);
  const canSubmit = collateralWon > 0;

  const snapshot = React.useMemo(() => {
    if (!hasCalculated || !canSubmit) return null;
    const plannedRaw = removeCommas(plannedLoanDisplay);
    const plannedParsed = plannedRaw ? parseAmountDisplay(plannedLoanDisplay) : undefined;
    return computeLtvSnapshot({
      collateralValueWon: collateralWon,
      plannedLoanWon: plannedParsed,
      seniorLienWon: parseAmountDisplay(seniorLienDisplay),
      applyLoanCap,
      context: {
        regionType,
        homeOwnership,
        isFirstTimeBuyer: showFirstTimeInputs && isFirstTimeBuyer,
        metroArea,
      },
    });
  }, [
    applyLoanCap,
    canSubmit,
    collateralWon,
    hasCalculated,
    homeOwnership,
    isFirstTimeBuyer,
    metroArea,
    plannedLoanDisplay,
    regionType,
    seniorLienDisplay,
    showFirstTimeInputs,
  ]);

  const showZeroResult = !hasCalculated || !snapshot;

  const appliedBasisItems = React.useMemo(() => {
    if (!snapshot) return [];
    return buildLtvAppliedBasisItems(
      {
        regionType,
        homeOwnership,
        isFirstTimeBuyer: showFirstTimeInputs && isFirstTimeBuyer,
        metroArea,
      },
      { applyLoanCap },
    );
  }, [
    applyLoanCap,
    homeOwnership,
    isFirstTimeBuyer,
    metroArea,
    regionType,
    showFirstTimeInputs,
    snapshot,
  ]);

  const exportText = React.useMemo(() => {
    if (!snapshot || showZeroResult) return "";
    const showInputLtvHero = snapshot.currentLtvPercent != null;
    const heroLabel = showInputLtvHero ? "입력 대출 포함 LTV" : "적용 LTV 한도";
    const heroValue = showInputLtvHero
      ? `${formatPercent(snapshot.currentLtvPercent!)}%`
      : snapshot.limit.loanUnavailable
        ? "0%"
        : `${formatPercent(snapshot.limit.ltvLimitPercent)}%`;
    const heroNote = showInputLtvHero
      ? snapshot.withinLimit === false
        ? "입력한 대출 희망액 기준 LTV 한도를 초과합니다."
        : "입력한 대출 희망액은 LTV 한도 이내로 보입니다."
      : snapshot.limit.reasonLabel;

    return formatLtvResultText({
      snapshot,
      collateralWon,
      basisItems: appliedBasisItems,
      seniorLienWon: parseAmountDisplay(seniorLienDisplay),
      heroLabel,
      heroValue,
      heroNote,
    });
  }, [appliedBasisItems, collateralWon, seniorLienDisplay, showZeroResult, snapshot]);

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="ltv-calculator" className="scroll-mt-24">
        <CardHeader>
          <CardTitle className="text-xl">입력</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="ltv-collateral">담보 주택 가격·감정가</Label>
            <Input
              id="ltv-collateral"
              inputMode="numeric"
              autoComplete="off"
              placeholder="예: 400000000"
              value={collateralDisplay}
              onChange={(e) => setCollateralDisplay(addCommas(e.target.value.replace(/\D/g, "")))}
            />
            <p className="text-muted-foreground text-xs">주택담보대출 심사에 사용되는 담보 인정 가격(원)을 입력합니다.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ltv-senior-lien">선순위 설정액(선택)</Label>
            <Input
              id="ltv-senior-lien"
              inputMode="numeric"
              autoComplete="off"
              placeholder="예: 50000000"
              value={seniorLienDisplay}
              onChange={(e) => setSeniorLienDisplay(addCommas(e.target.value.replace(/\D/g, "")))}
            />
            <p className="text-muted-foreground text-xs">
              담보에 이미 설정된 근저당·기존 주담대 등 선순위 채권이 있으면 입력합니다. LTV 한도에서 차감됩니다.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ltv-planned-loan">대출 희망액(선택)</Label>
            <Input
              id="ltv-planned-loan"
              inputMode="numeric"
              autoComplete="off"
              placeholder="예: 280000000"
              value={plannedLoanDisplay}
              onChange={(e) => setPlannedLoanDisplay(addCommas(e.target.value.replace(/\D/g, "")))}
            />
            <p className="text-muted-foreground text-xs">
              입력하면 (선순위+희망 대출)÷담보가 기준 LTV(%)와 한도 충족 여부를 함께 표시합니다.
            </p>
          </div>

          <div className="space-y-2 border-t pt-4">
            <span id="ltv-region-label" className="text-sm font-medium">
              지역 구분
            </span>
            <div className="bg-muted inline-flex rounded-lg p-0.5" role="group" aria-labelledby="ltv-region-label">
              {(Object.keys(ltvRegionTypeLabels) as LtvRegionType[]).map((key) => (
                <Button
                  key={key}
                  type="button"
                  size="sm"
                  variant={regionType === key ? "default" : "ghost"}
                  className="h-8 px-3"
                  onClick={() => setRegionType(key)}
                  aria-pressed={regionType === key}
                >
                  {ltvRegionTypeLabels[key]}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span id="ltv-ownership-label" className="text-sm font-medium">
              주택 보유
            </span>
            <div className="bg-muted inline-flex flex-wrap rounded-lg p-0.5" role="group" aria-labelledby="ltv-ownership-label">
              {(Object.keys(ltvHomeOwnershipLabels) as LtvHomeOwnership[]).map((key) => (
                <Button
                  key={key}
                  type="button"
                  size="sm"
                  variant={homeOwnership === key ? "default" : "ghost"}
                  className="h-8 px-3"
                  onClick={() => setHomeOwnership(key)}
                  aria-pressed={homeOwnership === key}
                >
                  {ltvHomeOwnershipLabels[key]}
                </Button>
              ))}
            </div>
          </div>

          {showFirstTimeInputs ? (
            <div className="bg-muted/30 space-y-4 rounded-lg border p-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="ltv-first-time"
                  checked={isFirstTimeBuyer}
                  onCheckedChange={(v) => setIsFirstTimeBuyer(v === true)}
                />
                <div className="space-y-1">
                  <Label htmlFor="ltv-first-time" className="cursor-pointer font-medium">
                    생애최초 주택 구입
                  </Label>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    무주택자 중 생애최초 주택 구입 요건을 충족하는 경우 LTV 한도가 완화될 수 있습니다.
                  </p>
                </div>
              </div>

              {isFirstTimeBuyer ? (
                <div className="space-y-2">
                  <span id="ltv-metro-label" className="text-sm font-medium">
                    생애최초 지역
                  </span>
                  <div className="bg-muted inline-flex rounded-lg p-0.5" role="group" aria-labelledby="ltv-metro-label">
                    {(Object.keys(ltvMetroAreaLabels) as LtvMetroArea[]).map((key) => (
                      <Button
                        key={key}
                        type="button"
                        size="sm"
                        variant={metroArea === key ? "default" : "ghost"}
                        className="h-8 px-3"
                        onClick={() => setMetroArea(key)}
                        aria-pressed={metroArea === key}
                      >
                        {ltvMetroAreaLabels[key]}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="flex items-start gap-3 border-t pt-4">
            <Checkbox
              id="ltv-loan-cap"
              checked={applyLoanCap}
              onCheckedChange={(v) => setApplyLoanCap(v === true)}
            />
            <div className="space-y-1">
              <Label htmlFor="ltv-loan-cap" className="cursor-pointer font-medium">
                은행권 대출 한도 {formatNumber(LTV_BANK_LOAN_CAP_WON)}원 캡 적용
              </Label>
              <p className="text-muted-foreground text-xs leading-relaxed">
                규제지역 등에서 적용되는 은행권 주담대 최대 한도(참고)를 반영합니다.
              </p>
            </div>
          </div>

          <Button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600"
            disabled={!canSubmit}
            onClick={() => setHasCalculated(true)}
          >
            LTV 계산하기
          </Button>
        </CardContent>
      </Card>

      <Card className="scroll-mt-24 outline-none" tabIndex={-1}>
        <CardHeader>
          <CardTitle className="text-xl">계산 결과</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div ref={exportRef} className="bg-background space-y-4 rounded-lg p-3">
            <div className="border-border/80 border-b pb-2">
              <p className="text-sm font-semibold">LTV 계산기 · 계산 결과</p>
              <p className="text-muted-foreground text-xs">withustools.com · 참고용</p>
            </div>
          {(() => {
            const showInputLtvHero = !showZeroResult && snapshot.currentLtvPercent != null;
            return (
              <div
                className={`rounded-lg border p-4 ${
                  showZeroResult
                    ? "border-border bg-muted/20"
                    : showInputLtvHero
                      ? snapshot.withinLimit === false
                        ? "border-amber-500/40 bg-amber-500/10"
                        : "border-emerald-500/40 bg-emerald-500/10"
                      : snapshot.limit.loanUnavailable
                        ? "border-amber-500/40 bg-amber-500/10"
                        : "border-emerald-500/40 bg-emerald-500/10"
                }`}
                role="status"
                aria-live="polite"
              >
                <p className="text-muted-foreground text-sm">
                  {showZeroResult ? "입력 대출 포함 LTV" : showInputLtvHero ? "입력 대출 포함 LTV" : "적용 LTV 한도"}
                </p>
                <p className="text-muted-foreground mt-0.5 text-xs">
                  {showZeroResult
                    ? "계산 전"
                    : showInputLtvHero
                      ? "선순위+희망 대출 ÷ 담보가 기준"
                      : snapshot.limit.reasonLabel}
                </p>
                <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight">
                  {showZeroResult
                    ? "—"
                    : showInputLtvHero
                      ? formatPercent(snapshot.currentLtvPercent!)
                      : snapshot.limit.loanUnavailable
                        ? "0"
                        : formatPercent(snapshot.limit.ltvLimitPercent)}
                  {!showZeroResult && (showInputLtvHero || !snapshot.limit.loanUnavailable) ? (
                    <span className="text-lg font-semibold">%</span>
                  ) : null}
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  {showZeroResult
                    ? "담보 가격을 입력한 뒤 계산하기를 누르면 결과가 갱신됩니다."
                    : showInputLtvHero
                      ? snapshot.withinLimit === false
                        ? "입력한 대출 희망액 기준 LTV 한도를 초과합니다. 대출 가능액 또는 자기자금을 조정해 보세요."
                        : "입력한 대출 희망액은 LTV 한도 이내로 보입니다. DSR·스트레스 DSR 등 추가 규제는 별도 확인이 필요합니다."
                      : snapshot.limit.loanUnavailable
                        ? "선택한 조건에서는 주택 구입 목적 주담대가 사실상 불가능한 것으로 간주됩니다."
                        : "아래 대출 가능액은 LTV 규제만 반영한 참고값입니다."}
                </p>
              </div>
            );
          })()}

          {!showZeroResult ? (
            <>
              <LtvAppliedBasisSection
                items={appliedBasisItems}
                limitReasonLabel={snapshot.limit.reasonLabel}
              />

              <dl className="divide-border divide-y text-sm">
                <ResultRow label="적용 LTV 한도">
                  {snapshot.limit.loanUnavailable ? "0" : `${formatPercent(snapshot.limit.ltvLimitPercent)}%`}
                </ResultRow>
                <ResultRow label="담보 인정 가격">
                  <MoneyValue amount={collateralWon} />
                </ResultRow>
                <ResultRow label="LTV 한도 내 설정 가능 총액">
                  <MoneyValue amount={snapshot.grossEncumbranceCapWon} />
                </ResultRow>
                {parseAmountDisplay(seniorLienDisplay) > 0 ? (
                  <ResultRow label="선순위 설정액">
                    <MoneyValue amount={parseAmountDisplay(seniorLienDisplay)} />
                  </ResultRow>
                ) : null}
                <ResultRow label="신규 대출 가능액(LTV 기준)">
                  <MoneyValue amount={snapshot.finalMaxLoanWon} />
                </ResultRow>
                {snapshot.loanCapAppliedWon != null ? (
                  <ResultRow label="6억 원 캡 적용 전">
                    <MoneyValue amount={snapshot.netMaxLoanWon} />
                  </ResultRow>
                ) : null}
                <ResultRow label="필요 자기자금(참고)">
                  <MoneyValue amount={snapshot.requiredEquityWon} />
                </ResultRow>
                {snapshot.currentLtvPercent != null ? (
                  <ResultRow label="선순위+희망 대출 합계">
                    <MoneyValue amount={snapshot.totalEncumbranceWon ?? 0} />
                  </ResultRow>
                ) : null}
              </dl>

              <p className="rounded-md border border-border bg-muted/30 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                LTV(%) = (선순위 설정액 + 대출금) ÷ 담보 인정 가격 × 100입니다. 실제 한도는 DSR·스트레스 DSR·고가주택·금융기관
                내부 기준 등에 따라 더 줄어들 수 있습니다.
              </p>
            </>
          ) : null}
          </div>
          <div className="border-border/60 border-t pt-4">
            <CalculatorResultExportButtons
              disabled={showZeroResult}
              getText={() => exportText}
              captureRef={exportRef}
              filenameBase="ltv-calculator-result"
            />
          </div>
        </CardContent>
      </Card>

      <LtvCalculatorReference />
    </div>
  );
}
