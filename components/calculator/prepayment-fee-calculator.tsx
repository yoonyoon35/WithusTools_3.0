"use client";

import { PrepaymentFeeCalculatorReference } from "@/components/calculator/reference";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber, removeCommas } from "@/lib/loan-calculations";
import {
  addMonthsToDate,
  computePrepaymentFee,
  computePrepaymentFeeByDate,
  diffDays,
  formatDateInputValue,
  formatDateLabel,
  formatDaysLabel,
  formatMonthsLabel,
  getFeePeriodLabel,
  getFeeSpreadDisplay,
  getRemainingPeriodLabel,
  parseDateInput,
  toMonths,
  type PrepaymentFeeResult,
  type PrepaymentInputMode,
  type TermUnit,
} from "@/lib/prepayment-fee-calculations";
import { referenceDisclaimerLine } from "@/lib/site";

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function getDefaultLoanStartDate(): string {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  return formatDateInputValue(date);
}

function getDefaultPrepaymentDate(): string {
  return formatDateInputValue(new Date());
}

function getDefaultMaturityDateFromStart(startValue: string, loanTermMonths: number): string {
  const start = parseDateInput(startValue);
  if (!start) return "";
  return formatDateInputValue(addMonthsToDate(start, loanTermMonths));
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

function TermUnitToggle({
  id,
  label,
  unit,
  onChange,
}: {
  id: string;
  label: string;
  unit: TermUnit;
  onChange: (next: TermUnit) => void;
}) {
  return (
    <div className="bg-muted inline-flex rounded-lg p-0.5" role="group" aria-label={label}>
      <Button
        type="button"
        size="sm"
        variant={unit === "year" ? "default" : "ghost"}
        className="h-8 px-3"
        onClick={() => onChange("year")}
        aria-pressed={unit === "year"}
        id={`${id}-year`}
      >
        년
      </Button>
      <Button
        type="button"
        size="sm"
        variant={unit === "month" ? "default" : "ghost"}
        className="h-8 px-3"
        onClick={() => onChange("month")}
        aria-pressed={unit === "month"}
        id={`${id}-month`}
      >
        개월
      </Button>
    </div>
  );
}

function InputModeToggle({
  mode,
  onChange,
}: {
  mode: PrepaymentInputMode;
  onChange: (next: PrepaymentInputMode) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>기간 입력 방식</Label>
      <div className="bg-muted inline-flex w-full rounded-lg p-0.5 sm:w-auto" role="group" aria-label="기간 입력 방식">
        <Button
          type="button"
          size="sm"
          variant={mode === "period" ? "default" : "ghost"}
          className="h-9 flex-1 px-4 sm:flex-none"
          onClick={() => onChange("period")}
          aria-pressed={mode === "period"}
        >
          기간 입력
        </Button>
        <Button
          type="button"
          size="sm"
          variant={mode === "date" ? "default" : "ghost"}
          className="h-9 flex-1 px-4 sm:flex-none"
          onClick={() => onChange("date")}
          aria-pressed={mode === "date"}
        >
          날짜 입력
        </Button>
      </div>
      <p className="text-muted-foreground text-xs">
        {mode === "period"
          ? "대출기간·경과 기간을 년 또는 개월로 입력합니다."
          : "대출 실행일·중도상환일·만기일을 달력에서 선택해 일 단위로 계산합니다."}
      </p>
    </div>
  );
}

function ExemptionModeToggle({
  hasExemptionPeriod,
  onChange,
}: {
  hasExemptionPeriod: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>수수료 면제 기간</Label>
      <div className="bg-muted inline-flex w-full rounded-lg p-0.5 sm:w-auto" role="group" aria-label="수수료 면제 기간 여부">
        <Button
          type="button"
          size="sm"
          variant={hasExemptionPeriod ? "default" : "ghost"}
          className="h-9 flex-1 px-4 sm:flex-none"
          onClick={() => onChange(true)}
          aria-pressed={hasExemptionPeriod}
        >
          면제 기간 있음
        </Button>
        <Button
          type="button"
          size="sm"
          variant={!hasExemptionPeriod ? "default" : "ghost"}
          className="h-9 flex-1 px-4 sm:flex-none"
          onClick={() => onChange(false)}
          aria-pressed={!hasExemptionPeriod}
        >
          면제 기간 없음
        </Button>
      </div>
      <p className="text-muted-foreground text-xs">
        {hasExemptionPeriod
          ? "대출 실행 후 일정 기간이 지나면 수수료가 면제되는 상품입니다. (통상 3년)"
          : "만기 전 중도상환 시 수수료가 부과되며, 잔여기간은 만기일까지 남은 기간으로 계산합니다."}
      </p>
    </div>
  );
}

export function PrepaymentFeeCalculator() {
  const [inputMode, setInputMode] = React.useState<PrepaymentInputMode>("period");
  const [prepaymentDisplay, setPrepaymentDisplay] = React.useState("");
  const [feeRate, setFeeRate] = React.useState("1.2");
  const [loanTerm, setLoanTerm] = React.useState("30");
  const [loanTermUnit, setLoanTermUnit] = React.useState<TermUnit>("year");
  const [elapsedTerm, setElapsedTerm] = React.useState("1");
  const [elapsedTermUnit, setElapsedTermUnit] = React.useState<TermUnit>("year");
  const [exemptionTerm, setExemptionTerm] = React.useState("3");
  const [exemptionTermUnit, setExemptionTermUnit] = React.useState<TermUnit>("year");
  const [hasExemptionPeriod, setHasExemptionPeriod] = React.useState(true);
  const [loanStartDate, setLoanStartDate] = React.useState(getDefaultLoanStartDate);
  const [prepaymentDate, setPrepaymentDate] = React.useState(getDefaultPrepaymentDate);
  const [loanMaturityDate, setLoanMaturityDate] = React.useState(() =>
    getDefaultMaturityDateFromStart(getDefaultLoanStartDate(), 360),
  );
  const [result, setResult] = React.useState<PrepaymentFeeResult | null>(null);

  const onMoneyInputChange = (raw: string, setter: (value: string) => void) => {
    const num = raw.replace(/[^0-9]/g, "");
    setter(num ? addCommas(num) : "");
  };

  const switchTermUnit = (
    currentUnit: TermUnit,
    value: string,
    setter: (value: string) => void,
    nextUnit: TermUnit,
    setUnit: (unit: TermUnit) => void,
  ) => {
    if (nextUnit === currentUnit) return;
    const parsed = parseFloat(value);
    if (Number.isFinite(parsed) && parsed > 0) {
      if (currentUnit === "year" && nextUnit === "month") {
        setter(String(Math.round(parsed * 12)));
      } else if (currentUnit === "month" && nextUnit === "year") {
        setter(String(Math.round((parsed / 12) * 10) / 10));
      }
    }
    setUnit(nextUnit);
  };

  const syncDateFieldsFromPeriod = () => {
    const elapsedMonths = toMonths(parseFloat(elapsedTerm) || 0, elapsedTermUnit);
    const loanTermMonths = toMonths(parseFloat(loanTerm) || 0, loanTermUnit);
    const prepayment = new Date();
    const start = addMonthsToDate(prepayment, -elapsedMonths);
    setLoanStartDate(formatDateInputValue(start));
    setPrepaymentDate(formatDateInputValue(prepayment));
    setLoanMaturityDate(formatDateInputValue(addMonthsToDate(start, loanTermMonths)));
  };

  const syncPeriodFieldsFromDate = () => {
    const start = parseDateInput(loanStartDate);
    const prepay = parseDateInput(prepaymentDate);
    const maturity = parseDateInput(loanMaturityDate);
    if (start && prepay) {
      const elapsedDays = diffDays(start, prepay);
      setElapsedTerm(String(Math.max(0, Math.round(elapsedDays / 30))));
      setElapsedTermUnit("month");
    }
    if (start && maturity) {
      const termDays = diffDays(start, maturity);
      setLoanTerm(String(Math.max(1, Math.round(termDays / 30))));
      setLoanTermUnit("month");
    }
  };

  const handleInputModeChange = (next: PrepaymentInputMode) => {
    if (next === inputMode) return;
    if (next === "date") {
      syncDateFieldsFromPeriod();
    } else {
      syncPeriodFieldsFromDate();
    }
    setInputMode(next);
    setResult(null);
  };

  const handleLoanStartDateChange = (value: string) => {
    setLoanStartDate(value);
    const start = parseDateInput(value);
    const maturity = parseDateInput(loanMaturityDate);
    const prepay = parseDateInput(prepaymentDate);
    if (start && maturity && diffDays(start, maturity) <= 0) {
      const loanTermMonths = toMonths(parseFloat(loanTerm) || 30, loanTermUnit);
      setLoanMaturityDate(getDefaultMaturityDateFromStart(value, loanTermMonths));
    }
    if (start && prepay && diffDays(start, prepay) < 0) {
      setPrepaymentDate(value);
    }
  };

  const performCalculation = () => {
    const prepaymentAmount = parseFloat(removeCommas(prepaymentDisplay)) || 0;
    const feeRatePercent = parseFloat(feeRate) || 0;
    const exemptionMonths = hasExemptionPeriod ? toMonths(parseFloat(exemptionTerm) || 0, exemptionTermUnit) : 0;

    if (prepaymentAmount <= 0) {
      window.alert("중도상환 원금을 올바르게 입력해주세요.");
      return;
    }
    if (feeRatePercent <= 0) {
      window.alert("수수료율을 입력해주세요.");
      return;
    }
    if (hasExemptionPeriod && exemptionMonths <= 0) {
      window.alert("면제 기간을 입력해주세요.");
      return;
    }

    if (inputMode === "period") {
      const loanTermMonths = toMonths(parseFloat(loanTerm) || 0, loanTermUnit);
      const elapsedMonths = toMonths(parseFloat(elapsedTerm) || 0, elapsedTermUnit);

      if (loanTermMonths <= 0) {
        window.alert("대출기간을 입력해주세요.");
        return;
      }
      if (elapsedMonths < 0) {
        window.alert("경과 기간을 올바르게 입력해주세요.");
        return;
      }

      setResult(
        computePrepaymentFee({
          prepaymentAmount,
          feeRatePercent,
          loanTermMonths,
          elapsedMonths,
          hasExemptionPeriod,
          exemptionMonths,
        }),
      );
      return;
    }

    const start = parseDateInput(loanStartDate);
    const prepay = parseDateInput(prepaymentDate);
    const maturity = parseDateInput(loanMaturityDate);

    if (!start || !prepay || !maturity) {
      window.alert("대출 실행일, 중도상환일, 대출 만기일을 모두 선택해주세요.");
      return;
    }
    if (diffDays(start, prepay) < 0) {
      window.alert("중도상환일은 대출 실행일 이후여야 합니다.");
      return;
    }
    if (diffDays(start, maturity) <= 0) {
      window.alert("대출 만기일은 대출 실행일 이후여야 합니다.");
      return;
    }

    setResult(
      computePrepaymentFeeByDate({
        prepaymentAmount,
        feeRatePercent,
        loanStartDate: start,
        prepaymentDate: prepay,
        loanMaturityDate: maturity,
        hasExemptionPeriod,
        exemptionMonths,
      }),
    );
  };

  const exemptionEndPreview = React.useMemo(() => {
    if (!hasExemptionPeriod || inputMode !== "date") return null;
    const start = parseDateInput(loanStartDate);
    if (!start) return null;
    const months = toMonths(parseFloat(exemptionTerm) || 0, exemptionTermUnit);
    if (months <= 0) return null;
    return formatDateLabel(formatDateInputValue(addMonthsToDate(start, months)));
  }, [hasExemptionPeriod, inputMode, loanStartDate, exemptionTerm, exemptionTermUnit]);

  const handleExemptionModeChange = (next: boolean) => {
    setHasExemptionPeriod(next);
    setResult(null);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="prepayment-fee-calculator" className="scroll-mt-24">
        <CardContent className="space-y-4 pt-6">
          <InputModeToggle mode={inputMode} onChange={handleInputModeChange} />

          <div className="space-y-2">
            <Label htmlFor="prepaymentAmount">중도상환 원금 (원)</Label>
            <Input
              id="prepaymentAmount"
              inputMode="numeric"
              placeholder="예: 50,000,000"
              value={prepaymentDisplay}
              onChange={(e) => onMoneyInputChange(e.target.value, setPrepaymentDisplay)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="feeRate">수수료율 (%)</Label>
            <Input
              id="feeRate"
              type="number"
              min={0}
              max={100}
              step="0.01"
              placeholder="예: 1.2"
              value={feeRate}
              onChange={(e) => setFeeRate(e.target.value)}
            />
            <p className="text-muted-foreground text-xs">대출 계약서에 명시된 중도상환 수수료율을 입력하세요.</p>
          </div>

          {inputMode === "period" ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="loanTerm">대출기간</Label>
                <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                  <TermUnitToggle
                    id="loan-term"
                    label="대출기간 단위"
                    unit={loanTermUnit}
                    onChange={(next) => switchTermUnit(loanTermUnit, loanTerm, setLoanTerm, next, setLoanTermUnit)}
                  />
                  <Input
                    id="loanTerm"
                    type="number"
                    min={1}
                    max={loanTermUnit === "year" ? 50 : 600}
                    step={loanTermUnit === "year" ? "any" : 1}
                    placeholder={loanTermUnit === "year" ? "예: 30" : "예: 360"}
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="max-w-[140px]"
                  />
                  <span className="text-muted-foreground text-sm whitespace-nowrap">
                    {loanTermUnit === "year" ? "년" : "개월"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="elapsedTerm">대출 실행 후 경과 기간</Label>
                <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                  <TermUnitToggle
                    id="elapsed-term"
                    label="경과 기간 단위"
                    unit={elapsedTermUnit}
                    onChange={(next) =>
                      switchTermUnit(elapsedTermUnit, elapsedTerm, setElapsedTerm, next, setElapsedTermUnit)
                    }
                  />
                  <Input
                    id="elapsedTerm"
                    type="number"
                    min={0}
                    max={elapsedTermUnit === "year" ? 50 : 600}
                    step={elapsedTermUnit === "year" ? "any" : 1}
                    placeholder={elapsedTermUnit === "year" ? "예: 1" : "예: 12"}
                    value={elapsedTerm}
                    onChange={(e) => setElapsedTerm(e.target.value)}
                    className="max-w-[140px]"
                  />
                  <span className="text-muted-foreground text-sm whitespace-nowrap">
                    {elapsedTermUnit === "year" ? "년" : "개월"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">중도상환 예정 시점까지 대출 실행 후 지난 기간입니다.</p>
              </div>
            </>
          ) : (
            <div className="space-y-3 rounded-lg border bg-muted/20 p-3">
              <p className="text-sm font-medium">대출·상환 일정</p>
              <div className="space-y-2">
                <Label htmlFor="loanStartDate">대출 실행일</Label>
                <Input
                  id="loanStartDate"
                  type="date"
                  value={loanStartDate}
                  max={prepaymentDate || undefined}
                  onChange={(e) => handleLoanStartDateChange(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prepaymentDate">중도상환일</Label>
                <Input
                  id="prepaymentDate"
                  type="date"
                  value={prepaymentDate}
                  min={loanStartDate || undefined}
                  max={loanMaturityDate || undefined}
                  onChange={(e) => setPrepaymentDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="loanMaturityDate">대출 만기일</Label>
                <Input
                  id="loanMaturityDate"
                  type="date"
                  value={loanMaturityDate}
                  min={loanStartDate || undefined}
                  onChange={(e) => setLoanMaturityDate(e.target.value)}
                />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                달력에서 날짜를 선택하면 경과 기간·잔여기간·대출기간을 일 단위로 계산합니다. 금융기관마다 월할·일할 방식이
                다를 수 있습니다.
              </p>
            </div>
          )}

          <ExemptionModeToggle hasExemptionPeriod={hasExemptionPeriod} onChange={handleExemptionModeChange} />

          {hasExemptionPeriod ? (
            <div className="space-y-2">
              <Label htmlFor="exemptionTerm">면제 기간</Label>
              <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                <TermUnitToggle
                  id="exemption-term"
                  label="면제 기간 단위"
                  unit={exemptionTermUnit}
                  onChange={(next) =>
                    switchTermUnit(exemptionTermUnit, exemptionTerm, setExemptionTerm, next, setExemptionTermUnit)
                  }
                />
                <Input
                  id="exemptionTerm"
                  type="number"
                  min={1}
                  max={exemptionTermUnit === "year" ? 10 : 120}
                  step={exemptionTermUnit === "year" ? "any" : 1}
                  placeholder={exemptionTermUnit === "year" ? "예: 3" : "예: 36"}
                  value={exemptionTerm}
                  onChange={(e) => setExemptionTerm(e.target.value)}
                  className="max-w-[140px]"
                />
                <span className="text-muted-foreground text-sm whitespace-nowrap">
                  {exemptionTermUnit === "year" ? "년" : "개월"}
                </span>
              </div>
              <p className="text-muted-foreground text-xs">
                대출 실행일로부터 적용됩니다.
                {exemptionEndPreview ? ` (면제 종료 예정일: ${exemptionEndPreview})` : null}
              </p>
            </div>
          ) : null}

          <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600" onClick={performCalculation}>
            계산하기
          </Button>

          <p className="text-muted-foreground text-xs leading-relaxed">
            {referenceDisclaimerLine} 실제 수수료율·면제 조건·계산 방식은 금융기관 및 대출 상품에 따라 상이합니다.
          </p>
        </CardContent>
      </Card>

      <Card className="scroll-mt-24">
        <CardHeader>
          <CardTitle className="text-xl">계산 결과</CardTitle>
        </CardHeader>
        <CardContent>
          {result ? (
            (() => {
              const feeSpread = getFeeSpreadDisplay(result);
              return (
            <div className="grid gap-3" role="list">
              {result.isExempt ? (
                <div
                  className="bg-emerald-50 dark:bg-emerald-950/30 flex flex-col gap-1 rounded-lg border border-emerald-200 p-3 dark:border-emerald-900/50"
                  role="listitem"
                >
                  <span className="text-sm font-medium text-emerald-800 dark:text-emerald-200">수수료 면제</span>
                  <span className="text-muted-foreground text-sm">{result.exemptReason}</span>
                </div>
              ) : null}
              {result.inputMode === "date" && result.loanStartDate && result.prepaymentDate ? (
                <>
                  <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                    <span className="text-muted-foreground text-sm">대출 실행일</span>
                    <span className="text-lg font-semibold">{formatDateLabel(result.loanStartDate)}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                    <span className="text-muted-foreground text-sm">중도상환일</span>
                    <span className="text-lg font-semibold">{formatDateLabel(result.prepaymentDate)}</span>
                  </div>
                  {result.hasExemptionPeriod && result.exemptionEndDate ? (
                    <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                      <span className="text-muted-foreground text-sm">면제 종료일</span>
                      <span className="text-lg font-semibold">{formatDateLabel(result.exemptionEndDate)}</span>
                    </div>
                  ) : null}
                </>
              ) : null}
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">중도상환 원금</span>
                <ResultAmountBlock amount={result.prepaymentAmount} className="text-lg font-semibold tabular-nums" />
              </div>
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">적용 수수료율</span>
                <span className="text-lg font-semibold tabular-nums">{result.feeRatePercent}%</span>
              </div>
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">계약 대출기간</span>
                <span className="text-lg font-semibold tabular-nums">
                  {result.inputMode === "date" && result.loanTermDays !== undefined
                    ? `${formatDaysLabel(result.loanTermDays)} (${formatMonthsLabel(result.loanTermMonths)} 환산)`
                    : formatMonthsLabel(result.loanTermMonths)}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">{getFeePeriodLabel(result.remainingPeriodBasis)}</span>
                <span className="text-lg font-semibold tabular-nums">
                  {result.inputMode === "date" && result.feePeriodDays !== undefined
                    ? `${formatDaysLabel(result.feePeriodDays)} (${formatMonthsLabel(result.feePeriodMonths)} 환산)`
                    : formatMonthsLabel(result.feePeriodMonths)}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">경과 기간</span>
                <span className="text-lg font-semibold tabular-nums">
                  {result.inputMode === "date" && result.elapsedDays !== undefined
                    ? `${formatDaysLabel(result.elapsedDays)} (${formatMonthsLabel(result.elapsedMonths)} 환산)`
                    : formatMonthsLabel(result.elapsedMonths)}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">{getRemainingPeriodLabel(result.remainingPeriodBasis)}</span>
                <span className="text-lg font-semibold tabular-nums">
                  {result.inputMode === "date" && result.remainingDays !== undefined
                    ? `${formatDaysLabel(result.remainingDays)} (${formatMonthsLabel(result.remainingMonths)} 환산)`
                    : formatMonthsLabel(result.remainingMonths)}
                </span>
              </div>
              <div className="bg-muted/40 flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">중도상환 수수료</span>
                <ResultAmountBlock amount={result.feeAmount} className="text-2xl font-bold tabular-nums" />
              </div>
              {!result.isExempt && feeSpread ? (
                <div className="flex flex-col gap-0.5 rounded-lg border border-dashed p-3" role="listitem">
                  <span className="text-muted-foreground text-sm">{feeSpread.heading}</span>
                  <span className="text-lg font-semibold tabular-nums">
                    {formatNumber(feeSpread.amount)}
                    {feeSpread.unitSuffix}
                  </span>
                  <span className="text-muted-foreground text-xs leading-relaxed">
                    {formatNumber(result.feeAmount)}원 ÷ {feeSpread.divisorLabel} — 잔여기간으로 나눈 참고값입니다.
                  </span>
                </div>
              ) : null}
            </div>
              );
            })()
          ) : (
            <p className="text-muted-foreground text-sm">계산 전입니다. 조건을 입력한 뒤 계산하기를 누르세요.</p>
          )}
        </CardContent>
      </Card>

      <PrepaymentFeeCalculatorReference />
    </div>
  );
}
