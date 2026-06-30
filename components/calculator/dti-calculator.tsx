"use client";

import Link from "next/link";
import * as React from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoneyValue, ResultRow } from "@/components/calculator/calculator-result-rows";
import { CalculatorResultExportButtons } from "@/components/calculator/calculator-result-export-buttons";
import {
  CalculatorLoanBreakdownTable,
  LoanBreakdownTd,
  LoanBreakdownTh,
} from "@/components/calculator/calculator-loan-breakdown-table";
import {
  bulletDtiBasisHints,
  bulletDtiBasisLabels,
  bulletDtiBasisOrder,
  computeDtiSnapshotFromLoans,
  dtiInclusionRows,
  dtiLoanCategoryLabels,
  dtiReferenceRows,
  dtiSectorLabels,
  monthlyPaymentForDtiMortgage,
  type BulletDtiBasis,
  type DtiLoanCategory,
  type DtiLoanInput,
  type DtiSector,
} from "@/lib/dti-calculations";
import { formatDtiResultText } from "@/lib/dti-result-text";
import { formatNumber, removeCommas, repaymentTypeLabels, type RepaymentType } from "@/lib/loan-calculations";
import {
  equalPrincipalDsrBasisHints,
  equalPrincipalDsrBasisLabels,
  resolveDsrLoanTerms,
  type EqualPrincipalDsrBasis,
} from "@/lib/dsr-calculations";

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function parseAmountDisplay(display: string): number {
  const n = parseInt(removeCommas(display), 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function parseMonthsDisplay(display: string): number {
  const n = parseInt(display.replace(/\D/g, ""), 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function formatContribution(annualDtiWon: number, annualIncomeWon: number): string {
  if (annualIncomeWon <= 0) return "—";
  const pct = (annualDtiWon / annualIncomeWon) * 100;
  return pct % 1 === 0 ? `${pct}` : pct.toFixed(1).replace(/\.0$/, "");
}

type LoanKind = "existing" | "new";

interface LoanRowState {
  id: string;
  label: string;
  loanKind: LoanKind;
  category: DtiLoanCategory;
  inputMode: "details" | "monthly";
  totalPrincipalDisplay: string;
  balanceDisplay: string;
  totalTermDisplay: string;
  remainingTermDisplay: string;
  graceDisplay: string;
  rate: string;
  repaymentType: RepaymentType;
  monthlyDisplay: string;
}

function createLoanRow(id: string, loanKind: LoanKind = "new"): LoanRowState {
  return {
    id,
    label: "",
    loanKind,
    category: loanKind === "new" ? "mortgage" : "other",
    inputMode: "details",
    totalPrincipalDisplay: "",
    balanceDisplay: "",
    totalTermDisplay: loanKind === "new" ? "360" : "",
    remainingTermDisplay: loanKind === "new" ? "360" : "",
    graceDisplay: "0",
    rate: "",
    repaymentType: "equal-payment",
    monthlyDisplay: "",
  };
}

function parseLoanRow(row: LoanRowState): DtiLoanInput | null {
  if (row.inputMode === "monthly") {
    const monthly = parseInt(removeCommas(row.monthlyDisplay), 10);
    if (!Number.isFinite(monthly) || monthly <= 0) return null;
    return {
      label: row.label,
      isNew: row.loanKind === "new",
      category: row.category,
      inputMode: "monthly",
      monthlyWon: monthly,
    };
  }

  const totalPrincipal = parseAmountDisplay(row.totalPrincipalDisplay);
  const balance = parseAmountDisplay(row.balanceDisplay);
  const totalTerm = parseMonthsDisplay(row.totalTermDisplay);
  const remainingTerm = parseMonthsDisplay(row.remainingTermDisplay);
  const grace = parseMonthsDisplay(row.graceDisplay);
  const rate = parseFloat(row.rate);

  const input: DtiLoanInput = {
    label: row.label,
    isNew: row.loanKind === "new",
    category: row.category,
    inputMode: "details",
    totalPrincipalWon: totalPrincipal > 0 ? totalPrincipal : undefined,
    balanceWon: balance > 0 ? balance : undefined,
    totalTermMonths: totalTerm > 0 ? totalTerm : undefined,
    remainingTermMonths: remainingTerm > 0 ? remainingTerm : undefined,
    graceMonths: grace > 0 ? grace : 0,
    annualRatePercent: Number.isFinite(rate) && rate >= 0 ? rate : 0,
    repaymentType: row.repaymentType,
  };

  return resolveDsrLoanTerms(input) ? input : null;
}

function LoanAmountField({
  id,
  label,
  value,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} className="text-xs">
        {label}
      </Label>
      <Input
        id={id}
        inputMode="numeric"
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(addCommas(e.target.value.replace(/\D/g, "")))}
        className="h-9"
      />
    </div>
  );
}

function LoanMonthsField({
  id,
  label,
  value,
  placeholder,
  onChange,
  className,
}: {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1 ${className ?? ""}`}>
      <Label htmlFor={id} className="text-xs">
        {label}
      </Label>
      <Input
        id={id}
        inputMode="numeric"
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
        className="h-9"
      />
    </div>
  );
}

function LoanRowEditor({
  row,
  index,
  canRemove,
  equalPrincipalBasis,
  bulletBasis,
  onChange,
  onRemove,
}: {
  row: LoanRowState;
  index: number;
  canRemove: boolean;
  equalPrincipalBasis: EqualPrincipalDsrBasis;
  bulletBasis: BulletDtiBasis;
  onChange: (patch: Partial<LoanRowState>) => void;
  onRemove: () => void;
}) {
  const parsed = parseLoanRow(row);
  const terms = parsed?.inputMode === "details" ? resolveDsrLoanTerms(parsed) : null;
  const computedMonthly =
    parsed?.inputMode === "details" &&
    parsed.category === "mortgage" &&
    terms &&
    parsed.annualRatePercent != null
      ? monthlyPaymentForDtiMortgage(
          terms.balanceWon,
          parsed.annualRatePercent,
          terms.remainingTermMonths,
          parsed.repaymentType ?? "equal-payment",
          equalPrincipalBasis,
          bulletBasis,
          { graceMonths: terms.graceMonths },
        )
      : null;

  const monthlyLabel =
    row.category === "other" ? "월 이자(또는 이자 상당액)" : row.inputMode === "monthly" ? "월 상환액" : "월 상환";

  return (
    <div className="space-y-3 rounded-lg border p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
          <Input
            aria-label={`대출 ${index + 1} 이름`}
            placeholder={row.category === "mortgage" ? "예: 주택담보대출" : "예: 신용대출"}
            value={row.label}
            onChange={(e) => onChange({ label: e.target.value })}
            className="min-w-[140px] flex-1"
          />
          <div className="bg-muted inline-flex rounded-lg p-0.5" role="group" aria-label="대출 구분">
            <Button
              type="button"
              size="sm"
              variant={row.loanKind === "existing" ? "default" : "ghost"}
              className="h-8 px-3"
              onClick={() => onChange({ loanKind: "existing" })}
              aria-pressed={row.loanKind === "existing"}
            >
              기존
            </Button>
            <Button
              type="button"
              size="sm"
              variant={row.loanKind === "new" ? "default" : "ghost"}
              className="h-8 px-3"
              onClick={() => onChange({ loanKind: "new" })}
              aria-pressed={row.loanKind === "new"}
            >
              신규
            </Button>
          </div>
        </div>
        {canRemove ? (
          <Button type="button" size="sm" variant="ghost" className="text-muted-foreground shrink-0" onClick={onRemove}>
            <Trash2 className="size-4" aria-hidden />
            <span className="sr-only">대출 {index + 1} 삭제</span>
          </Button>
        ) : null}
      </div>

      <div className="space-y-2">
        <span className="text-sm font-medium">DTI 구분</span>
        <div className="bg-muted inline-flex rounded-lg p-0.5" role="group" aria-label="DTI 대출 구분">
          {(Object.keys(dtiLoanCategoryLabels) as DtiLoanCategory[]).map((key) => (
            <Button
              key={key}
              type="button"
              size="sm"
              variant={row.category === key ? "default" : "ghost"}
              className="h-8 px-3 text-xs sm:text-sm"
              onClick={() =>
                onChange({
                  category: key,
                  ...(key === "other" && row.repaymentType === "graduated"
                    ? { repaymentType: "equal-payment" as const, inputMode: "details" as const }
                    : {}),
                })
              }
              aria-pressed={row.category === key}
            >
              {dtiLoanCategoryLabels[key]}
            </Button>
          ))}
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {row.category === "mortgage"
            ? "주담대는 연간 원금+이자(원리금)가 DTI에 합산됩니다."
            : "신용·카드론·할부 등은 연간 이자만 DTI에 합산됩니다. 조건 입력 시 잔액×금리로 이자를 추정합니다."}
        </p>
      </div>

      {row.category === "mortgage" ? (
        <div className="space-y-2">
          <Label htmlFor={`loan-${row.id}-repayment`}>상환 방식</Label>
          <select
            id={`loan-${row.id}-repayment`}
            className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
            value={row.repaymentType}
            onChange={(e) => {
              const repaymentType = e.target.value as RepaymentType;
              onChange({
                repaymentType,
                ...(repaymentType === "graduated" ? { inputMode: "monthly" as const } : {}),
              });
            }}
          >
            <option value="equal-payment">{repaymentTypeLabels["equal-payment"]}</option>
            <option value="equal-principal">{repaymentTypeLabels["equal-principal"]}</option>
            <option value="graduated">{repaymentTypeLabels.graduated}</option>
            <option value="bullet">{repaymentTypeLabels.bullet}</option>
          </select>
        </div>
      ) : null}

      <div className="bg-muted inline-flex rounded-lg p-0.5" role="group" aria-label="입력 방식">
        <Button
          type="button"
          size="sm"
          variant={row.inputMode === "details" ? "default" : "ghost"}
          className="h-8 px-3"
          disabled={row.category === "mortgage" && row.repaymentType === "graduated"}
          onClick={() => onChange({ inputMode: "details" })}
          aria-pressed={row.inputMode === "details"}
        >
          대출 조건
        </Button>
        <Button
          type="button"
          size="sm"
          variant={row.inputMode === "monthly" ? "default" : "ghost"}
          className="h-8 px-3"
          onClick={() => onChange({ inputMode: "monthly" })}
          aria-pressed={row.inputMode === "monthly"}
        >
          {row.category === "other" ? "월 이자 직접" : "월 상환 직접"}
        </Button>
      </div>

      {row.inputMode === "monthly" ? (
        <div className="space-y-2">
          <Label htmlFor={`loan-${row.id}-monthly`}>{monthlyLabel}</Label>
          <div className="flex flex-wrap items-center gap-2">
            <Input
              id={`loan-${row.id}-monthly`}
              inputMode="numeric"
              autoComplete="off"
              placeholder="예: 300000"
              value={row.monthlyDisplay}
              onChange={(e) => onChange({ monthlyDisplay: addCommas(e.target.value.replace(/\D/g, "")) })}
              className="max-w-[220px]"
            />
            <span className="text-muted-foreground text-sm">원 / 월</span>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-muted/15 rounded-lg border p-3">
            <div className="overflow-x-auto">
              <div className="grid min-w-[26rem] grid-cols-[minmax(8rem,1fr)_minmax(5.5rem,1fr)_4.75rem] items-start gap-x-3 gap-y-2">
                <p className="text-muted-foreground text-xs font-medium">대출금</p>
                <p className="text-muted-foreground text-xs font-medium">대출기간 (개월)</p>
                <p className="text-muted-foreground text-xs font-medium">금리</p>

                <LoanAmountField
                  id={`loan-${row.id}-total`}
                  label="총액"
                  value={row.totalPrincipalDisplay}
                  placeholder="최초 원금"
                  onChange={(v) => onChange({ totalPrincipalDisplay: v })}
                />
                <LoanMonthsField
                  id={`loan-${row.id}-total-term`}
                  label="총"
                  value={row.totalTermDisplay}
                  placeholder="360"
                  onChange={(v) => onChange({ totalTermDisplay: v })}
                />
                <div className="col-start-3 row-span-3 row-start-2 flex flex-col gap-1 self-start">
                  <Label htmlFor={`loan-${row.id}-rate`} className="text-xs">
                    연이자율
                  </Label>
                  <div className="flex items-center gap-1">
                    <Input
                      id={`loan-${row.id}-rate`}
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="4.0"
                      value={row.rate}
                      onChange={(e) => onChange({ rate: e.target.value.replace(/[^0-9.]/g, "") })}
                      className="h-9 min-w-0"
                    />
                    <span className="text-muted-foreground shrink-0 text-xs">%</span>
                  </div>
                </div>

                <LoanAmountField
                  id={`loan-${row.id}-balance`}
                  label="잔액"
                  value={row.balanceDisplay}
                  placeholder={row.loanKind === "new" ? "총액과 동일" : "현재 잔액"}
                  onChange={(v) => onChange({ balanceDisplay: v })}
                />
                <LoanMonthsField
                  id={`loan-${row.id}-remaining-term`}
                  label="잔여"
                  value={row.remainingTermDisplay}
                  placeholder={row.loanKind === "new" ? "총과 동일" : "180"}
                  onChange={(v) => onChange({ remainingTermDisplay: v })}
                />

                {row.category === "mortgage" ? (
                  <LoanMonthsField
                    id={`loan-${row.id}-grace`}
                    label="거치"
                    value={row.graceDisplay}
                    placeholder="0"
                    className="col-start-2"
                    onChange={(v) => onChange({ graceDisplay: v })}
                  />
                ) : null}
              </div>
            </div>
          </div>

          {computedMonthly != null && computedMonthly > 0 ? (
            <p className="text-muted-foreground text-xs">
              DTI 반영 월 환산(주담대 원리금): 약 {formatNumber(Math.round(computedMonthly))}원
            </p>
          ) : row.category === "other" && terms && parsed?.annualRatePercent != null ? (
            <p className="text-muted-foreground text-xs">
              DTI 반영 연 이자 추정: 약 {formatNumber(Math.round((terms.balanceWon * parsed.annualRatePercent) / 100))}원
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}

export function DtiCalculator() {
  const exportRef = React.useRef<HTMLDivElement>(null);
  const loansBaseId = React.useId();
  const nextLoanSeqRef = React.useRef(1);
  const [annualIncomeManwonDisplay, setAnnualIncomeManwonDisplay] = React.useState("");
  const [sector, setSector] = React.useState<DtiSector>("bank");
  const [loans, setLoans] = React.useState<LoanRowState[]>(() => [createLoanRow(`${loansBaseId}-0`, "new")]);
  const [equalPrincipalBasis, setEqualPrincipalBasis] =
    React.useState<EqualPrincipalDsrBasis>("first-month");
  const [bulletBasis, setBulletBasis] = React.useState<BulletDtiBasis>("regulatory-10y-principal");
  const [hasCalculated, setHasCalculated] = React.useState(false);

  const hasEqualPrincipalMortgage = loans.some(
    (l) => l.category === "mortgage" && l.inputMode === "details" && l.repaymentType === "equal-principal",
  );
  const hasBulletMortgage = loans.some(
    (l) => l.category === "mortgage" && l.inputMode === "details" && l.repaymentType === "bullet",
  );

  const annualIncomeManwon = parseFloat(annualIncomeManwonDisplay.replace(/,/g, ""));
  const canSubmit = Number.isFinite(annualIncomeManwon) && annualIncomeManwon > 0;

  const snapshot = React.useMemo(() => {
    if (!hasCalculated || !canSubmit) return null;
    const parsedLoans = loans.map(parseLoanRow).filter((l): l is DtiLoanInput => l != null);
    return computeDtiSnapshotFromLoans({
      annualIncomeManwon,
      sector,
      loans: parsedLoans,
      equalPrincipalBasis,
      bulletBasis,
    });
  }, [annualIncomeManwon, bulletBasis, canSubmit, equalPrincipalBasis, hasCalculated, loans, sector]);

  const showZeroResult = !hasCalculated || !snapshot;
  const displaySnapshot = showZeroResult
    ? computeDtiSnapshotFromLoans({ annualIncomeManwon: 0, sector, loans: [] })
    : snapshot!;
  const displayDti = showZeroResult ? "0.00" : (displaySnapshot.dtiPercent?.toFixed(2) ?? "—");
  const displayWithinCap = showZeroResult ? true : displaySnapshot.withinCap;

  const exportText = React.useMemo(() => {
    if (!snapshot || showZeroResult) return "";
    return formatDtiResultText({ snapshot });
  }, [showZeroResult, snapshot]);

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="dti-calculator" className="scroll-mt-24">
        <CardHeader>
          <CardTitle className="text-xl">입력</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="dti-income">연 소득(세전, 만 원)</Label>
            <Input
              id="dti-income"
              inputMode="decimal"
              autoComplete="off"
              placeholder="예: 5000"
              value={annualIncomeManwonDisplay}
              onChange={(e) => setAnnualIncomeManwonDisplay(e.target.value.replace(/[^0-9.]/g, ""))}
            />
          </div>

          <div className="space-y-2">
            <span id="dti-sector-label" className="text-sm font-medium">
              심사 구분
            </span>
            <div className="bg-muted inline-flex rounded-lg p-0.5" role="group" aria-labelledby="dti-sector-label">
              {(Object.keys(dtiSectorLabels) as DtiSector[]).map((key) => (
                <Button
                  key={key}
                  type="button"
                  size="sm"
                  variant={sector === key ? "default" : "ghost"}
                  className="h-8 px-3"
                  onClick={() => setSector(key)}
                  aria-pressed={sector === key}
                >
                  {dtiSectorLabels[key]} ({key === "bank" ? "60%" : "50%"})
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium">대출 목록</span>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="h-8 gap-1"
                onClick={() => {
                  const seq = nextLoanSeqRef.current++;
                  setLoans((prev) => [...prev, createLoanRow(`${loansBaseId}-${seq}`, "existing")]);
                }}
              >
                <Plus className="size-4" aria-hidden />
                대출 추가
              </Button>
            </div>
            {loans.map((row, index) => (
              <LoanRowEditor
                key={row.id}
                row={row}
                index={index}
                canRemove={loans.length > 1}
                equalPrincipalBasis={equalPrincipalBasis}
                bulletBasis={bulletBasis}
                onChange={(patch) => setLoans((prev) => prev.map((r, i) => (i === index ? { ...r, ...patch } : r)))}
                onRemove={() => setLoans((prev) => prev.filter((_, i) => i !== index))}
              />
            ))}
          </div>

          {hasEqualPrincipalMortgage ? (
            <div className="space-y-2 border-t pt-4">
              <Label htmlFor="dti-ep-basis">원금균등 — DTI 연간 원리금 산출</Label>
              <select
                id="dti-ep-basis"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={equalPrincipalBasis}
                onChange={(e) => setEqualPrincipalBasis(e.target.value as EqualPrincipalDsrBasis)}
              >
                {(Object.keys(equalPrincipalDsrBasisLabels) as EqualPrincipalDsrBasis[]).map((key) => (
                  <option key={key} value={key}>
                    {equalPrincipalDsrBasisLabels[key]}
                  </option>
                ))}
              </select>
              <p className="text-muted-foreground text-xs">{equalPrincipalDsrBasisHints[equalPrincipalBasis]}</p>
            </div>
          ) : null}

          {hasBulletMortgage ? (
            <div className="space-y-2 border-t pt-4">
              <Label htmlFor="dti-bullet-basis">만기일시(주담대) — DTI 산정</Label>
              <select
                id="dti-bullet-basis"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={bulletBasis}
                onChange={(e) => setBulletBasis(e.target.value as BulletDtiBasis)}
              >
                {bulletDtiBasisOrder.map((key) => (
                  <option key={key} value={key}>
                    {bulletDtiBasisLabels[key]}
                  </option>
                ))}
              </select>
              <p className="text-muted-foreground text-xs">{bulletDtiBasisHints[bulletBasis]}</p>
            </div>
          ) : null}

          <Button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600"
            disabled={!canSubmit}
            onClick={() => setHasCalculated(true)}
          >
            DTI 계산하기
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
              <p className="text-sm font-semibold">DTI 계산기 · 계산 결과</p>
              <p className="text-muted-foreground text-xs">withustools.com · 참고용</p>
            </div>

            <div
              className={`rounded-lg border p-4 ${
                displayWithinCap
                  ? "border-emerald-500/40 bg-emerald-500/10"
                  : "border-amber-500/40 bg-amber-500/10"
              }`}
              role="status"
              aria-live="polite"
            >
              <p className="text-muted-foreground text-sm">총부채상환비율(DTI)</p>
              <p className="text-muted-foreground mt-0.5 text-xs">
                {dtiSectorLabels[sector]} 참고 한도 {displaySnapshot.capPercent}%
              </p>
              <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight">
                {displayDti}
                {!showZeroResult ? <span className="text-lg font-semibold">%</span> : null}
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                {showZeroResult
                  ? "연 소득과 대출을 입력한 뒤 계산하기를 누르면 결과가 갱신됩니다."
                  : displayWithinCap
                    ? `${displaySnapshot.capPercent}% 참고 한도 이내로 보입니다. DSR·LTV 등 다른 규제도 함께 확인하세요.`
                    : `${displaySnapshot.capPercent}% 참고 한도를 초과하는 수준입니다. 실제 심사·업권별 기준과 다를 수 있습니다.`}
              </p>
            </div>

            {!showZeroResult && displaySnapshot.loanResults.length > 0 ? (
              <CalculatorLoanBreakdownTable
                caption="대출별 DTI 반영액"
                columnCount={5}
                header={
                  <tr>
                    <LoanBreakdownTh>대출</LoanBreakdownTh>
                    <LoanBreakdownTh>구분</LoanBreakdownTh>
                    <LoanBreakdownTh>DTI 항목</LoanBreakdownTh>
                    <LoanBreakdownTh align="right">연 반영</LoanBreakdownTh>
                    <LoanBreakdownTh align="right">DTI 기여</LoanBreakdownTh>
                  </tr>
                }
                footnote="연 반영은 DTI 합산에 쓰는 연간 금액(주담대 원리금·기타 이자)입니다. DTI 기여는 해당 대출 연 반영 ÷ 연소득입니다."
              >
                {displaySnapshot.loanResults.map((loan, index) => (
                  <tr key={`${loan.label}-${index}`} className="border-b last:border-0">
                    <LoanBreakdownTd truncate>{loan.label}</LoanBreakdownTd>
                    <LoanBreakdownTd muted>{loan.isNew ? "신규" : "기존"}</LoanBreakdownTd>
                    <LoanBreakdownTd muted>
                      {loan.category === "mortgage" ? "원리금" : "이자"}
                    </LoanBreakdownTd>
                    <LoanBreakdownTd align="right">
                      {formatNumber(Math.round(loan.annualDti))}원
                    </LoanBreakdownTd>
                    <LoanBreakdownTd align="right" muted>
                      {formatContribution(loan.annualDti, displaySnapshot.annualIncomeWon)}%
                    </LoanBreakdownTd>
                  </tr>
                ))}
              </CalculatorLoanBreakdownTable>
            ) : null}

            <dl className="divide-border divide-y text-sm">
              <ResultRow label="연 소득">
                <MoneyValue amount={displaySnapshot.annualIncomeWon} />
              </ResultRow>
              <ResultRow label="주담대 연간 원리금 합계">
                <MoneyValue amount={Math.round(displaySnapshot.mortgageAnnual)} />
              </ResultRow>
              <ResultRow label="기타 대출 연간 이자 합계">
                <MoneyValue amount={Math.round(displaySnapshot.otherInterestAnnual)} />
              </ResultRow>
              <ResultRow label="신규 DTI 반영(월 환산)">
                <MoneyValue amount={Math.round(displaySnapshot.newMonthly)} />
              </ResultRow>
              <ResultRow label="월 DTI 반영 합계(환산)">
                <MoneyValue amount={Math.round(displaySnapshot.totalMonthly)} />
              </ResultRow>
              <ResultRow label="연 DTI 반영 합계">
                <MoneyValue amount={Math.round(displaySnapshot.annualDtiServiceWon)} />
              </ResultRow>
            </dl>

            <p className="rounded-md border border-border bg-muted/30 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
              DTI(%) = (주담대 연간 원리금 + 기타 대출 연간 이자) ÷ 연소득 × 100입니다. 2023년 이후 은행권 주담대는 실무상{" "}
              <strong>DSR 40%</strong>이 먼저 한도를 제한하는 경우가 많습니다.
            </p>
          </div>
          <div className="border-border/60 border-t pt-4">
            <CalculatorResultExportButtons
              disabled={showZeroResult}
              getText={() => exportText}
              captureRef={exportRef}
              filenameBase="dti-calculator-result"
            />
          </div>
        </CardContent>
      </Card>

      <DtiCalculatorReferenceCard />
    </div>
  );
}

function DtiReferenceTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: [string, string];
  rows: readonly { condition: string; value: string; note?: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
        <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">{caption}</caption>
        <thead>
          <tr className="bg-muted/40">
            <th scope="col" className="border-b px-3 py-2.5 font-semibold">
              {headers[0]}
            </th>
            <th scope="col" className="border-b px-3 py-2.5 font-semibold">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.condition} className="border-b last:border-0">
              <th scope="row" className="px-3 py-2.5 font-medium">
                {row.condition}
                {row.note ? (
                  <span className="text-muted-foreground ml-1 text-xs font-normal">({row.note})</span>
                ) : null}
              </th>
              <td className="text-muted-foreground px-3 py-2.5 text-sm leading-relaxed">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DtiCalculatorReferenceCard() {
  const formulaRows = [
    { condition: "DTI(%)", value: "(주담대 연간 원리금 + 기타 대출 연간 이자) ÷ 연소득 × 100" },
    { condition: "① 주담대", value: "연간 원금 + 이자(원리금). 만기일시는 min(잔여기간, 10년)으로 원금 환산 + 전액 이자" },
    { condition: "② 기타 대출", value: "연간 이자만(잔액 × 연이율, 또는 월 이자 직접 × 12)" },
    { condition: "③ 한도 비교", value: "업권별 참고 한도(은행 60%·제2금융 50%)와 산출 DTI(%) 비교" },
  ] as const;

  const exampleRows = [
    { condition: "연소득", value: "8,000만 원" },
    { condition: "신규 주담대(만기일시)", value: "잔액 3억 원 · 4% · 잔여 360개월 · 10년 규정" },
    { condition: "주담대 연간 원리금", value: "4,200만 원 (원금 3,000만 + 이자 1,200만)" },
    { condition: "기존 신용(이자만)", value: "잔액 3,000만 × 8% = 240만 원/년" },
    { condition: "DTI", value: "(4,200만 + 240만) ÷ 8,000만 × 100 = 55.5%" },
  ] as const;

  const excludedRows = [
    { condition: "DSR 40%·스트레스 DSR", value: "2023년 이후 은행권 실무 한도는 DTI보다 DSR에서 먼저 막히는 경우가 많음" },
    { condition: "LTV", value: "담보 인정 가격·규제지역·다주택·6억 캡·고가주택 등" },
    { condition: "마이너스통장·리볼빙·보증채무", value: "금융기관별 한도·이자 재산정" },
    { condition: "전세자금대출", value: "DTI·DSR 인정 방식이 기관·상품별로 상이" },
    { condition: "정책금융 세부 요건", value: "디딤돌·보금자리 등 소득·담보·LTV 별도 규정" },
    { condition: "담보가·소득 인정", value: "KB·감정·사업소득 인정률 등 심사 기준" },
  ] as const;

  const epRows = (Object.keys(equalPrincipalDsrBasisLabels) as EqualPrincipalDsrBasis[]).map((k) => ({
    condition: equalPrincipalDsrBasisLabels[k],
    value: equalPrincipalDsrBasisHints[k],
  }));

  const bulletRows = bulletDtiBasisOrder.map((k) => ({
    condition: bulletDtiBasisLabels[k],
    value: bulletDtiBasisHints[k],
  }));

  return (
    <Card className="scroll-mt-24 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-xl">DTI 기준표·참고</CardTitle>
        <p className="text-muted-foreground text-sm font-normal">
          DTI(%) = (주담대 연간 원리금 + 기타 대출 연간 이자) ÷ 연소득 × 100. 아래는 본 계산기 산출 순서와 일반적인
          기준을 요약한 참고용입니다.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <section className="space-y-2">
          <p className="text-sm font-semibold">1. DTI 산출 공식·순서</p>
          <DtiReferenceTable caption="DTI 산출 공식 및 계산 순서" headers={["항목", "내용"]} rows={formulaRows} />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">2. 계산 예시 (참고)</p>
          <p className="text-muted-foreground text-xs">은행권 · 연소득 8,000만 · 만기일시 주담대 10년 규정 · 기존 신용 이자만</p>
          <DtiReferenceTable caption="DTI 계산 예시" headers={["항목", "값"]} rows={exampleRows} />
          <p className="text-muted-foreground text-xs leading-relaxed">
            동일 조건(3억·4%·만기일시)에서 DSR 5년 규정은 연 7,200만 원, DTI 10년 규정은 연 4,200만 원으로 DTI가 더 낮게
            산출됩니다. DTI 60%를 통과해도 DSR 40%에서 먼저 한도가 줄어드는 경우가 많습니다.
          </p>
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">3. 업권별 DTI 한도 (참고)</p>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
                업권별 DTI 한도
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-b px-3 py-2.5 font-semibold">
                    구분
                  </th>
                  <th scope="col" className="border-b px-3 py-2.5 font-semibold">
                    한도
                  </th>
                  <th scope="col" className="border-b px-3 py-2.5 font-semibold">
                    비고
                  </th>
                </tr>
              </thead>
              <tbody>
                {dtiReferenceRows.map((row) => (
                  <tr key={row.condition} className="border-b last:border-0">
                    <td className="px-3 py-2.5 font-medium">{row.condition}</td>
                    <td className="px-3 py-2.5 tabular-nums">{row.cap}</td>
                    <td className="text-muted-foreground px-3 py-2.5 text-sm">{row.note ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">4. DTI vs DSR — 부채 반영 범위</p>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
                부채 항목별 DTI·DSR 반영
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-b px-3 py-2.5 font-semibold">
                    항목
                  </th>
                  <th scope="col" className="border-b px-3 py-2.5 font-semibold">
                    DTI
                  </th>
                  <th scope="col" className="border-b px-3 py-2.5 font-semibold">
                    DSR
                  </th>
                </tr>
              </thead>
              <tbody>
                {dtiInclusionRows.map((row) => (
                  <tr key={row.item} className="border-b last:border-0">
                    <td className="px-3 py-2.5 font-medium">{row.item}</td>
                    <td className="px-3 py-2.5">{row.dti}</td>
                    <td className="px-3 py-2.5">{row.dsr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">5. 만기일시(주담대) — DTI 산정 기준</p>
          <DtiReferenceTable caption="만기일시 주담대 DTI 산정 기준" headers={["기준", "설명"]} rows={bulletRows} />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">6. 원금균등 — DTI 연간 원리금 산출</p>
          <DtiReferenceTable
            caption="원금균등 주담대 DTI 연간 원리금 산출 방식"
            headers={["방식", "산출 개요"]}
            rows={epRows}
          />
          <p className="text-muted-foreground text-xs leading-relaxed">
            원리금균등·체증식 주담대는 각 상환 방식에 맞는 연간 원리금을 합산합니다. 체증식은 「월 상환 직접」 입력만 지원합니다.
          </p>
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">7. 본 계산기에 포함되지 않는 항목</p>
          <DtiReferenceTable caption="DTI 계산기 미포함 항목" headers={["항목", "설명"]} rows={excludedRows} />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">8. 흔한 오해</p>
          <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              「DTI 60% 통과 = 대출 가능」으로만 판단하는 경우가 많습니다. 은행권 주담대는{" "}
              <Link href="/guide/dsr-40-mortgage-limit" className="text-primary underline-offset-4 hover:underline">
                DSR 40%
              </Link>
              ·
              <Link href="/guide/stress-dsr-explained" className="text-primary ml-1 underline-offset-4 hover:underline">
                스트레스 DSR
              </Link>
              이 먼저 한도를 제한하는 경우가 훨씬 많습니다.
            </li>
            <li>
              신용·카드론 <strong className="text-foreground font-medium">원금</strong>은 DTI에는 덜 반영되지만 DSR에는
              포함됩니다. 소액 대출 여러 개가 DSR에서 합쳐 한도를 깎을 수 있습니다.
            </li>
            <li>
              만기일시 주담대 DTI와 DSR 산정이 같다고 보기 쉽지만, 본 계산기는 DTI{" "}
              <strong className="text-foreground font-medium">10년</strong>·DSR{" "}
              <strong className="text-foreground font-medium">5년</strong> 원금 환산을 각각 적용합니다.
            </li>
            <li>
              <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary underline-offset-4 hover:underline">
                디딤돌·보금자리
              </Link>
              등 정책금융은 DSR 대신 DTI 60%가 적용되는 사례가 있으나, 소득·담보·LTV 등 별도 요건이 있습니다.
            </li>
          </ul>
        </section>

        <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="from-primary/15 via-primary/8 bg-gradient-to-r to-transparent px-4 py-3 sm:px-5">
            <h3 className="text-primary text-base font-semibold tracking-tight">DTI 산정 시 참고사항</h3>
            <p className="text-muted-foreground mt-1 text-xs">본 계산기에 반영된 범위와 한계를 요약했습니다.</p>
          </div>
          <ol className="list-none space-y-3 p-4 sm:p-5">
            {[
              "연소득은 세전 근로소득(만 원)을 가정하며, 사업·임대·연금 등은 금융기관별 인정 방식이 다릅니다.",
              "대출 조건 입력 시 잔액·잔여 기간(개월)을 기준으로 연간 원리금을 산출합니다. 총액·총 기간·거치도 함께 반영할 수 있습니다.",
              "주담대는 연간 원금+이자, 기타 대출은 연간 이자만 합산합니다. 「월 이자·월 상환 직접」 입력 시 그 값×12를 사용합니다.",
              "만기일시 주담대 DTI 기본은 「10년 원금균등+전액 이자」(금융당국 별표9)이며, 원리금균등 환산·이자만도 선택할 수 있습니다.",
              "원금균등 주담대는 「첫 회차 × 12」가 기본입니다. DSR 계산기와 동일한 산출 방식을 공유합니다.",
              "체증식 주담대는 「월 상환 직접」 입력만 지원합니다. 스트레스 DSR·가산금리는 본 DTI 계산기에 적용되지 않습니다.",
              "LTV·DSR·규제지역·다주택 등은 별도 규정이며, 승인 한도는 신청 금융기관에서 확인해야 합니다.",
            ].map((text, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="border-amber-800/25 bg-amber-100 text-amber-950 dark:bg-amber-950/45 dark:border-amber-700/40 dark:text-amber-50 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded border text-xs font-semibold">
                  {i + 1}
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed">
          기준표는 가이드·정책 공지를 바탕으로 사용자가 빠르게 대조할 수 있도록 정리한 참고용입니다. 소득 인정·부채 재산정·만기일시
          환산 방식은 금융기관 심사와 다를 수 있습니다.
        </p>

        <p className="flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/guide/ltv-dti-dsr-comparison" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            LTV·DTI·DSR 비교
          </Link>
          <Link href="/guide/dsr-40-mortgage-limit" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            DSR 40%와 대출 한도
          </Link>
          <Link href="/guide/stress-dsr-explained" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            스트레스 DSR 설명
          </Link>
          <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            보금자리론 vs 디딤돌
          </Link>
          <Link href="/dsr-calculator" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          <Link href="/ltv-calculator" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            LTV 계산기
          </Link>
          <Link href="/loan-calculator" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
