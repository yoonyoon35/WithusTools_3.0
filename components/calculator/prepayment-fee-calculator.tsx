"use client";

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
  PREPAYMENT_FEE_FORMULA,
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

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">중도상환 수수료 계산 기준</CardTitle>
          <p className="text-muted-foreground text-sm font-normal">
            {PREPAYMENT_FEE_FORMULA}. 면제 기간이 있는 상품은 잔여기간·대출기간 모두 면제 기간(통상 3년) 기준으로
            계산하고, 없는 상품은 만기일까지 남은 기간을 잔여기간으로, 전체 대출기간을 분모로 사용합니다.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="mb-2 text-sm font-semibold">계산 예시</p>
            <div className="overflow-auto rounded-md border">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th scope="col" className="p-2 text-left font-medium">
                      항목
                    </th>
                    <th scope="col" className="p-2 text-left font-medium">
                      내용
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["중도상환 원금", "5,000만 원"],
                    ["수수료율", "1.2%"],
                    ["계약 대출기간", "30년(360개월)"],
                    ["수수료 계산 기간", "3년(36개월, 면제 기간)"],
                    ["경과 기간", "1년(12개월)"],
                    ["잔여기간", "24개월(36개월 − 12개월)"],
                    ["수수료", "5,000만 원 × 1.2% × (24 ÷ 36) = 약 40만 원"],
                  ].map(([label, value]) => (
                    <tr
                      key={label}
                      className="border-b transition-colors duration-150 ease-out last:border-0 hover:bg-primary/10 dark:hover:bg-primary/20"
                    >
                      <td className="p-2 font-medium">{label}</td>
                      <td className="p-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold">금융기관별 수수료율 범위</p>
            <div className="overflow-auto rounded-md border">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th scope="col" className="p-2 text-left font-medium">
                      구분
                    </th>
                    <th scope="col" className="p-2 text-left font-medium">
                      수수료율 범위
                    </th>
                    <th scope="col" className="p-2 text-left font-medium">
                      면제 기간
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["시중은행 주담대", "0.6% ~ 1.4%", "3년"],
                    ["인터넷전문은행", "0% ~ 0.7%", "1년 ~ 3년"],
                    ["저축은행", "1.0% ~ 2.0%", "3년"],
                    ["정책 모기지(디딤돌·보금자리론)", "1.2% ~ 1.5%", "3년"],
                  ].map(([kind, rate, exemption]) => (
                    <tr
                      key={kind}
                      className="border-b transition-colors duration-150 ease-out last:border-0 hover:bg-primary/10 dark:hover:bg-primary/20"
                    >
                      <td className="p-2 font-medium">{kind}</td>
                      <td className="p-2">{rate}</td>
                      <td className="p-2">{exemption}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-2 text-xs">
              ※ 수수료율과 면제 기간은 상품 및 시점에 따라 다르며, 대출 계약서에서 반드시 확인해야 합니다.
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold">수수료 면제 또는 감면 조건</p>
            <div className="overflow-auto rounded-md border">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th scope="col" className="p-2 text-left font-medium">
                      조건
                    </th>
                    <th scope="col" className="p-2 text-left font-medium">
                      내용
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["면제 기간 경과 후 상환", "대출 실행 후 3년 초과 시 수수료 없음"],
                    ["면제 기간 없는 상품", "만기 전 중도상환 시 잔여 대출기간 기준으로 수수료 부과"],
                    ["디딤돌대출 중도상환", "2024년 8월 ~ 2026년 12월 31일까지 수수료 면제"],
                    ["연간 일부 상환 허용", "일부 상품은 연간 일정 금액 이내 수수료 면제"],
                    ["금리인하요구권 행사 후 갈아타기", "금융기관별 조건 상이"],
                  ].map(([condition, detail]) => (
                    <tr
                      key={condition}
                      className="border-b transition-colors duration-150 ease-out last:border-0 hover:bg-primary/10 dark:hover:bg-primary/20"
                    >
                      <td className="p-2 font-medium">{condition}</td>
                      <td className="p-2">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
            <div className="from-primary/15 via-primary/8 bg-gradient-to-r to-transparent px-4 py-3 sm:px-5">
              <h3 className="text-primary text-base font-semibold tracking-tight">수수료와 이자 절감 비교</h3>
              <p className="text-muted-foreground mt-1 text-xs">
                중도상환 전 수수료와 절감되는 이자를 함께 따져야 합니다. 아래는 참고용 단순 가정 예시입니다.
              </p>
            </div>
            <div className="space-y-5 p-4 text-sm leading-relaxed sm:p-5">
              <div className="space-y-2">
                <h4 className="font-semibold">2억 원 대출 — 수수료가 남은 기간 이자보다 적어지는 시점</h4>
                <p>
                  대출 원금 2억 원, 금리 연 4%, 30년(360개월), 중도상환 수수료율 1.2%, 면제 기간 3년, 원리금균등상환을
                  가정합니다. 이 조건에서 5,000만 원을 일부 중도상환할 때,{" "}
                  <strong>수수료가 앞으로 내야 할 이자보다 작아지는 구간은 대체로 대출 초·중반</strong>입니다.
                </p>
                <p>
                  예를 들어 실행 1년 차(면제 종료까지 24개월 남음)에 5,000만 원을 상환하면 수수료는 약 40만 원입니다. 같은
                  5,000만 원을 끝까지 갚지 않고 유지하면, 잔여 대출기간(약 29년) 동안 해당 원금만큼 추가로 부담하는 이자는
                  수천만 원에 달합니다. 수수료가 남은 기간 이자보다 훨씬 적으므로, 이 시점의 조기 상환은 이자 절감 측면에서
                  유리한 편입니다.
                </p>
                <p>
                  반대로 <strong>잔여 대출기간이 1~2년뿐</strong>이고 금리가 이미 2%대처럼 낮다면 이야기가 달라집니다. 잔여
                  24개월 동안 5,000만 원에 붙는 이자가 100~150만 원 수준까지 줄어들 수 있고, 면제 직전이라 수수료도 5~10만
                  원대로 낮아집니다. 절감 이자와 수수료의 차이가 크지 않아, 굳이 지금 상환하지 않아도 되는 경우가
                  생깁니다. 잔여 6개월 미만·금리 2% 이하처럼 조건이 겹치면 수수료가 절감 이자보다 클 수도 있으니, 면제
                  기간 종료를 기다리거나 만기 상환을 검토하는 편이 낫습니다.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">2억 원 대출 — 잔여 24개월(면제 종료 전)에 5,000만 원 중도상환할 때</h4>
                <p>
                  같은 2억 원·연 4%·30년 대출에서 실행 후 1년이 지나 면제 종료까지 24개월 남은 시점에 5,000만 원을
                  중도상환한다고 가정합니다.
                </p>
                <p>
                  이때 납부할 <strong>중도상환 수수료는 약 40만 원</strong>입니다(5,000만 원 × 1.2% × (24 ÷ 36)). 상환하지
                  않고 24개월을 더 갚아 나가면, 해당 5,000만 원에 대해 그 기간 동안 추가로 부담하는 이자는{" "}
                  <strong>약 380만 원</strong> 수준으로 잡을 수 있습니다(금리·상환 방식에 따라 달라짐). 수수료 40만 원을
                  내더라도 이자 380만 원을 줄일 수 있으므로, <strong>순 절감액은 약 340만 원</strong> 정도로 볼 수
                  있습니다.
                </p>
                <p>
                  실행 2년 차(면제 종료까지 12개월 남음)에 같은 금액을 상환하면 수수료는 약 20만 원으로 줄지만, 12개월간
                  절감되는 이자도 약 190만 원 수준으로 함께 줄어듭니다. 여전히 상환이 유리할 수 있지만, 앞 시점보다
                  절감 폭은 작아집니다. 실행 3년이 지나 면제 기간이 끝나면 수수료는 0원이므로, 급하지 않다면 그때
                  상환하는 것도 한 방법입니다.
                </p>
                <p className="text-muted-foreground text-xs">
                  ※ 이자 절감액은 잔여 원금·상환 방식(원리금균등·원금균등·만기일시)에 따라 달라집니다. 본인 조건에 맞는
                  금액은{" "}
                  <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
                    대출 이자 계산기
                  </Link>
                  에서 확인할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <Link
              href="/guide/prepayment-fee-calculation"
              className="text-primary text-sm font-medium underline-offset-4 hover:underline"
            >
              중도상환 수수료 계산 방식
            </Link>
            <Link
              href="/guide/600-million-prepayment-vs-interest-guide"
              className="text-primary text-sm font-medium underline-offset-4 hover:underline"
            >
              6억 대출 중도상환 vs 이자납입
            </Link>
            <Link href="/guide/loan-refinancing-guide" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
              대출 갈아타기 가이드
            </Link>
            <Link href="/#calculator" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
              대출 이자 계산기
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
