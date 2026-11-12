"use client";

import { EmergencyLoanInterestCalculatorReference } from "@/components/calculator/reference";
import { CalculatorResultExportButtons } from "@/components/calculator/calculator-result-export-buttons";
import { MoneyValue, ResultRow } from "@/components/calculator/calculator-result-rows";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  computeEmergencyLoanDaysFromDates,
  computeEmergencyLoanInterest,
  type EmergencyLoanDaysInputMode,
} from "@/lib/emergency-loan-interest-calculations";
import { formatEmergencyLoanInterestResultText } from "@/lib/emergency-loan-interest-result-text";
import { formatNumber, removeCommas } from "@/lib/loan-calculations";
import { formatDateInputValue, formatDateLabel } from "@/lib/prepayment-fee-calculations";
import { referenceDisclaimerLine } from "@/lib/site";
import * as React from "react";

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function parseAmountDisplay(display: string): number {
  const n = parseInt(removeCommas(display), 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function parseRateDisplay(display: string): number | null {
  const n = parseFloat(display.replace(/,/g, "").trim());
  if (!Number.isFinite(n) || n < 0 || n > 100) return null;
  return n;
}

function parseDaysDisplay(display: string): number {
  const n = parseInt(display.replace(/\D/g, ""), 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function getDefaultStartDate(): string {
  const date = new Date();
  date.setDate(date.getDate() - 10);
  return formatDateInputValue(date);
}

function getDefaultAsOfDate(): string {
  return formatDateInputValue(new Date());
}

function DaysInputModeToggle({
  mode,
  onChange,
}: {
  mode: EmergencyLoanDaysInputMode;
  onChange: (next: EmergencyLoanDaysInputMode) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>사용 기간 입력 방식</Label>
      <div
        className="bg-muted inline-flex w-full rounded-lg p-0.5 sm:w-auto"
        role="group"
        aria-label="사용 기간 입력 방식"
      >
        <Button
          type="button"
          size="sm"
          variant={mode === "date" ? "default" : "ghost"}
          className="h-9 flex-1 px-4 sm:flex-none"
          onClick={() => onChange("date")}
          aria-pressed={mode === "date"}
        >
          날짜로 계산
        </Button>
        <Button
          type="button"
          size="sm"
          variant={mode === "days" ? "default" : "ghost"}
          className="h-9 flex-1 px-4 sm:flex-none"
          onClick={() => onChange("days")}
          aria-pressed={mode === "days"}
        >
          일수 직접 입력
        </Button>
      </div>
      <p className="text-muted-foreground text-xs leading-relaxed">
        {mode === "date"
          ? "사용 시작일(인출일)과 기준일(상환일·오늘 등)을 넣으면 일수를 자동으로 계산합니다. 같은 날이면 1일입니다."
          : "같은 잔액으로 둔 날 수를 직접 입력합니다. 당일 인출·상환도 1일로 잡을 수 있습니다."}
      </p>
    </div>
  );
}

export function EmergencyLoanInterestCalculator() {
  const [amountDisplay, setAmountDisplay] = React.useState("1,000,000");
  const [rateDisplay, setRateDisplay] = React.useState("6");
  const [daysInputMode, setDaysInputMode] = React.useState<EmergencyLoanDaysInputMode>("date");
  const [startDate, setStartDate] = React.useState(getDefaultStartDate);
  const [asOfDate, setAsOfDate] = React.useState(getDefaultAsOfDate);
  const [daysDisplay, setDaysDisplay] = React.useState("10");
  const [hasCalculated, setHasCalculated] = React.useState(false);
  const exportRef = React.useRef<HTMLDivElement>(null);

  const usedAmountWon = parseAmountDisplay(amountDisplay);
  const annualRatePercent = parseRateDisplay(rateDisplay);

  const daysFromDates =
    daysInputMode === "date" ? computeEmergencyLoanDaysFromDates(startDate, asOfDate) : null;
  const days =
    daysInputMode === "date" ? (daysFromDates ?? 0) : parseDaysDisplay(daysDisplay);

  const dateRangeInvalid =
    daysInputMode === "date" && startDate.trim() !== "" && asOfDate.trim() !== "" && daysFromDates == null;

  const canSubmit =
    annualRatePercent != null &&
    amountDisplay.trim() !== "" &&
    (daysInputMode === "days"
      ? daysDisplay.trim() !== ""
      : startDate.trim() !== "" && asOfDate.trim() !== "" && daysFromDates != null);

  const snapshot =
    hasCalculated && annualRatePercent != null && canSubmit
      ? computeEmergencyLoanInterest({
          usedAmountWon,
          annualRatePercent,
          days,
        })
      : null;

  const exportText =
    snapshot != null
      ? formatEmergencyLoanInterestResultText({
          snapshot,
          daysInputMode,
          startDate: daysInputMode === "date" ? startDate : undefined,
          asOfDate: daysInputMode === "date" ? asOfDate : undefined,
        })
      : "";

  const onDaysInputModeChange = (next: EmergencyLoanDaysInputMode) => {
    setDaysInputMode(next);
    setHasCalculated(false);
    if (next === "days" && daysFromDates != null) {
      setDaysDisplay(String(daysFromDates));
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <Card id="emergency-loan-interest-calculator" className="scroll-mt-24">
        <CardHeader>
          <CardTitle className="text-xl">대출 정보 입력</CardTitle>
          <p className="text-muted-foreground text-sm leading-relaxed">
            쓴 금액·약정 금리·사용 기간으로 일할 이자를 계산합니다. 카카오뱅크·토스뱅크·케이뱅크 등 마이너스통장형
            비상금대출에 공통으로 쓸 수 있으며, 이 사이트는 해당 은행과 제휴·공식 관계가 없습니다.
          </p>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="emergency-loan-amount">사용 금액(원)</Label>
            <Input
              id="emergency-loan-amount"
              inputMode="numeric"
              placeholder="예: 1,000,000"
              value={amountDisplay}
              onChange={(e) => {
                setAmountDisplay(addCommas(e.target.value));
                setHasCalculated(false);
              }}
            />
            <p className="text-muted-foreground text-xs leading-relaxed">
              한도가 아니라 실제로 쓰거나 쓸 금액을 넣으세요. 한도만 열고 쓰지 않으면 0원입니다.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergency-loan-rate">연 금리(%)</Label>
            <Input
              id="emergency-loan-rate"
              inputMode="decimal"
              placeholder="예: 6"
              value={rateDisplay}
              onChange={(e) => {
                setRateDisplay(e.target.value);
                setHasCalculated(false);
              }}
            />
            <p className="text-muted-foreground text-xs leading-relaxed">
              앱에 표시된 본인 약정 금리를 넣는 것이 가장 정확합니다.
            </p>
          </div>

          <DaysInputModeToggle mode={daysInputMode} onChange={onDaysInputModeChange} />

          {daysInputMode === "date" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="emergency-loan-start-date">사용 시작일</Label>
                <Input
                  id="emergency-loan-start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    setHasCalculated(false);
                  }}
                />
                <p className="text-muted-foreground text-xs leading-relaxed">인출·사용을 시작한 날</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency-loan-asof-date">기준일</Label>
                <Input
                  id="emergency-loan-asof-date"
                  type="date"
                  value={asOfDate}
                  onChange={(e) => {
                    setAsOfDate(e.target.value);
                    setHasCalculated(false);
                  }}
                />
                <p className="text-muted-foreground text-xs leading-relaxed">상환일·오늘·결산 기준일 등</p>
              </div>
              <div className="sm:col-span-2">
                {dateRangeInvalid ? (
                  <p className="text-destructive text-xs leading-relaxed" role="alert">
                    기준일은 사용 시작일 이후여야 합니다.
                  </p>
                ) : daysFromDates != null ? (
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    계산 일수: <span className="text-foreground font-medium tabular-nums">{daysFromDates}일</span>
                    {daysFromDates === 1 ? " (같은 날이면 1일로 봅니다)" : null}
                  </p>
                ) : (
                  <p className="text-muted-foreground text-xs leading-relaxed">날짜를 모두 선택해 주세요.</p>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="emergency-loan-days">사용 일수</Label>
              <Input
                id="emergency-loan-days"
                inputMode="numeric"
                placeholder="예: 10"
                value={daysDisplay}
                onChange={(e) => {
                  setDaysDisplay(e.target.value.replace(/[^\d]/g, ""));
                  setHasCalculated(false);
                }}
              />
            </div>
          )}

          <Button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600"
            disabled={!canSubmit}
            onClick={() => setHasCalculated(true)}
          >
            이자 계산하기
          </Button>
          <p className="text-muted-foreground text-xs leading-relaxed">{referenceDisclaimerLine}</p>
        </CardContent>
      </Card>

      <Card className="scroll-mt-24 outline-none" tabIndex={-1}>
        <CardHeader>
          <CardTitle className="text-xl">계산 결과</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div ref={exportRef} className="bg-background space-y-4 rounded-lg p-3">
            <div className="border-border/80 border-b pb-2">
              <p className="text-sm font-semibold">비상금대출 이자 계산기 · 계산 결과</p>
              <p className="text-muted-foreground text-xs">withustools.com · 참고용 · 비공식</p>
            </div>

            <div
              className={`rounded-lg border p-4 ${
                snapshot ? "border-emerald-500/40 bg-emerald-500/10" : "border-border bg-muted/20"
              }`}
              role="status"
              aria-live="polite"
            >
              <p className="text-muted-foreground text-sm">일할 이자 합계</p>
              <p className="text-muted-foreground mt-0.5 text-xs">
                {snapshot
                  ? `${formatNumber(snapshot.usedAmountWon)}원 × ${snapshot.annualRatePercent}% × ${snapshot.days}일`
                  : "입력 후 계산하기를 누르면 결과가 갱신됩니다."}
              </p>
              <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight">
                {snapshot ? (
                  <>
                    {formatNumber(snapshot.periodInterestWon)}
                    <span className="text-lg font-semibold">원</span>
                  </>
                ) : (
                  "—"
                )}
              </p>
              {snapshot ? (
                <p className="text-muted-foreground mt-2 text-sm">
                  {snapshot.usedAmountWon === 0
                    ? "사용 금액이 0원이면 이자는 없습니다."
                    : snapshot.days === 0
                      ? "사용 일수가 0일이면 이자는 없습니다."
                      : snapshot.days < 28
                        ? `한 달(÷12) 어림 ${formatNumber(snapshot.monthlyApproxWon)}원보다 일할이 ${formatNumber(Math.max(0, snapshot.vsMonthlyApproxWon))}원 적습니다.`
                        : `한 달 내내 비슷한 잔액이면 ÷12 어림(${formatNumber(snapshot.monthlyApproxWon)}원)과 수백 원 안팎으로 가깝습니다.`}
                </p>
              ) : null}
            </div>

            {snapshot ? (
              <dl className="divide-border divide-y text-sm">
                <ResultRow label="사용 금액">
                  <MoneyValue amount={snapshot.usedAmountWon} />
                </ResultRow>
                <ResultRow label="연 금리">{snapshot.annualRatePercent}%</ResultRow>
                {daysInputMode === "date" ? (
                  <>
                    <ResultRow label="사용 시작일">{formatDateLabel(startDate)}</ResultRow>
                    <ResultRow label="기준일">{formatDateLabel(asOfDate)}</ResultRow>
                  </>
                ) : null}
                <ResultRow label="사용 일수">{snapshot.days}일</ResultRow>
                <ResultRow label="하루 이자(반올림)">
                  <MoneyValue amount={snapshot.dailyInterestWon} />
                </ResultRow>
                <ResultRow label="일할 이자 합계">
                  <MoneyValue amount={snapshot.periodInterestWon} />
                </ResultRow>
                <ResultRow label="한 달(÷12) 어림">
                  <MoneyValue amount={snapshot.monthlyApproxWon} />
                </ResultRow>
              </dl>
            ) : null}

            {snapshot ? (
              <p className="rounded-md border border-border bg-muted/30 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                공식: 일 이자 = 사용금액 × 연 금리 ÷ 365 · 기간 이자 = 일 이자 × 일수. 날짜 입력 시 같은 날은 1일로
                봅니다. 은행 결산·최고잔액·원 단위 처리에 따라 수 원 차이가 날 수 있습니다.
              </p>
            ) : null}
          </div>

          <div className="border-border/60 border-t pt-4">
            <CalculatorResultExportButtons
              disabled={!snapshot}
              getText={() => exportText}
              captureRef={exportRef}
              filenameBase="emergency-loan-interest-calculator-result"
            />
          </div>
        </CardContent>
      </Card>

      <div className="lg:col-span-2">
        <EmergencyLoanInterestCalculatorReference />
      </div>
    </div>
  );
}
