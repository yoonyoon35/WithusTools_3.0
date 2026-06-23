"use client";

import Link from "next/link";
import * as React from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  bulletDsrBasisHints,
  bulletDsrBasisLabels,
  computeDsrSnapshotFromLoans,
  equalPrincipalDsrBasisHints,
  equalPrincipalDsrBasisLabels,
  monthlyPaymentForDsr,
  resolveDsrLoanTerms,
  stressDsrPresets,
  stressRateKindLabels,
  type BulletDsrBasis,
  type DsrLoanInput,
  type DsrLoanInputMode,
  type EqualPrincipalDsrBasis,
  type StressDsrPresetId,
  type StressRateKind,
} from "@/lib/dsr-calculations";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber, removeCommas, repaymentTypeLabels, type RepaymentType } from "@/lib/loan-calculations";

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

type LoanKind = "existing" | "new";

interface LoanRowState {
  id: string;
  label: string;
  loanKind: LoanKind;
  inputMode: DsrLoanInputMode;
  totalPrincipalDisplay: string;
  balanceDisplay: string;
  totalTermDisplay: string;
  remainingTermDisplay: string;
  graceDisplay: string;
  rate: string;
  repaymentType: RepaymentType;
  stressRateKind: StressRateKind;
  monthlyDisplay: string;
}

function createLoanRow(id: string, loanKind: LoanKind = "new"): LoanRowState {
  return {
    id,
    label: "",
    loanKind,
    inputMode: "details",
    totalPrincipalDisplay: "",
    balanceDisplay: "",
    totalTermDisplay: loanKind === "new" ? "360" : "",
    remainingTermDisplay: loanKind === "new" ? "360" : "",
    graceDisplay: "0",
    rate: "",
    repaymentType: "equal-payment",
    stressRateKind: "variable",
    monthlyDisplay: "",
  };
}

function parseAmountDisplay(display: string): number {
  const n = parseInt(removeCommas(display), 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function parseMonthsDisplay(display: string): number {
  const n = parseInt(display.replace(/\D/g, ""), 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function parseLoanRow(row: LoanRowState): DsrLoanInput | null {
  if (row.inputMode === "monthly") {
    const monthly = parseInt(removeCommas(row.monthlyDisplay), 10);
    if (!Number.isFinite(monthly) || monthly <= 0) return null;
    return {
      label: row.label,
      isNew: row.loanKind === "new",
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

  const input: DsrLoanInput = {
    label: row.label,
    isNew: row.loanKind === "new",
    inputMode: "details",
    totalPrincipalWon: totalPrincipal > 0 ? totalPrincipal : undefined,
    balanceWon: balance > 0 ? balance : undefined,
    totalTermMonths: totalTerm > 0 ? totalTerm : undefined,
    remainingTermMonths: remainingTerm > 0 ? remainingTerm : undefined,
    graceMonths: grace > 0 ? grace : 0,
    annualRatePercent: Number.isFinite(rate) && rate >= 0 ? rate : 0,
    repaymentType: row.repaymentType,
    stressRateKind: row.stressRateKind,
  };

  return resolveDsrLoanTerms(input) ? input : null;
}


export function DsrCalculator() {
  const loansBaseId = React.useId();
  const nextLoanSeqRef = React.useRef(1);
  const [annualIncomeManwonDisplay, setAnnualIncomeManwonDisplay] = React.useState("");
  const [loans, setLoans] = React.useState<LoanRowState[]>(() => [createLoanRow(`${loansBaseId}-0`, "new")]);
  const [equalPrincipalDsrBasis, setEqualPrincipalDsrBasis] =
    React.useState<EqualPrincipalDsrBasis>("first-month");
  const [bulletDsrBasis, setBulletDsrBasis] = React.useState<BulletDsrBasis>("interest-only");
  const [dsrMode, setDsrMode] = React.useState<"general" | "stress">("general");
  const [stressPresetId, setStressPresetId] = React.useState<StressDsrPresetId>("metro_mortgage");
  const [stressCustomPercent, setStressCustomPercent] = React.useState("1.5");
  const [hasCalculated, setHasCalculated] = React.useState(false);

  const hasEqualPrincipalLoan = loans.some((l) => l.inputMode === "details" && l.repaymentType === "equal-principal");
  const hasBulletLoan = loans.some((l) => l.inputMode === "details" && l.repaymentType === "bullet");
  const hasNewDetailLoan = loans.some((l) => l.loanKind === "new" && l.inputMode === "details");

  const nominalStressPercent = React.useMemo(() => {
    if (dsrMode !== "stress") return 0;
    const preset = stressDsrPresets.find((p) => p.id === stressPresetId);
    if (stressPresetId === "custom") {
      const v = parseFloat(stressCustomPercent);
      return Number.isFinite(v) && v >= 0 ? v : NaN;
    }
    return preset?.nominalPercent ?? 0;
  }, [dsrMode, stressPresetId, stressCustomPercent]);

  const parsedLoans = React.useMemo(
    () => loans.map(parseLoanRow).filter((l): l is DsrLoanInput => l != null),
    [loans],
  );

  const snapshot = React.useMemo(() => {
    const manwon = parseInt(removeCommas(annualIncomeManwonDisplay), 10);
    const annualIncomeManwon = Number.isFinite(manwon) && manwon > 0 ? manwon : 0;
    const stress =
      dsrMode === "stress" && Number.isFinite(nominalStressPercent)
        ? { nominalStressPercent: nominalStressPercent as number }
        : null;

    return computeDsrSnapshotFromLoans({
      annualIncomeManwon,
      loans: parsedLoans,
      equalPrincipalDsrBasis,
      bulletDsrBasis,
      stress,
    });
  }, [
    annualIncomeManwonDisplay,
    parsedLoans,
    equalPrincipalDsrBasis,
    bulletDsrBasis,
    dsrMode,
    nominalStressPercent,
  ]);

  const stressInputsValid =
    dsrMode !== "stress" || (Number.isFinite(nominalStressPercent) && !Number.isNaN(nominalStressPercent));

  const canSubmit =
    parseInt(removeCommas(annualIncomeManwonDisplay), 10) > 0 &&
    parsedLoans.length > 0 &&
    stressInputsValid;

  const updateLoan = (id: string, patch: Partial<LoanRowState>) => {
    setLoans((prev) =>
      prev.map((row) => {
        if (row.id !== id) return row;
        const next = { ...row, ...patch };
        if (next.repaymentType === "graduated") {
          next.inputMode = "monthly";
        }
        return next;
      }),
    );
  };

  const addLoan = (loanKind: LoanKind) => {
    const id = `${loansBaseId}-${nextLoanSeqRef.current++}`;
    setLoans((prev) => [...prev, createLoanRow(id, loanKind)]);
  };

  const removeLoan = (id: string) => {
    setLoans((prev) => (prev.length <= 1 ? prev : prev.filter((row) => row.id !== id)));
  };

  const dsrDisplay = snapshot.dsrPercent != null ? snapshot.dsrPercent.toFixed(2) : "—";
  const withinBankCap = snapshot.dsrPercent != null && snapshot.dsrPercent <= 40;
  const showZeroResult = !hasCalculated || !canSubmit;

  const displaySnapshot = showZeroResult
    ? {
        ...snapshot,
        loanResults: [],
        newMonthly: 0,
        newMonthlyContract: 0,
        totalMonthly: 0,
        totalMonthlyContract: 0,
        annualDebtServiceWon: 0,
        annualDebtServiceContractWon: 0,
        dsrPercent: 0,
        contractRatePercent: 0,
        newLoanRateForDsrPercent: 0,
        stressAddPercent: 0,
        isStressDsr: false,
      }
    : snapshot;

  const displayDsr = showZeroResult ? "0.00" : dsrDisplay;
  const displayWithinBankCap = showZeroResult ? true : withinBankCap;
  const showSingleNewRate = !showZeroResult && displaySnapshot.loanResults.filter((l) => l.isNew && l.inputMode === "details").length === 1;

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="dsr-calculator" className="scroll-mt-24">
        <CardHeader>
          <CardTitle className="text-xl">입력</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="dsr-annual-income">연 소득(세전)</Label>
            <div className="flex flex-wrap items-center gap-2">
              <Input
                id="dsr-annual-income"
                inputMode="numeric"
                autoComplete="off"
                placeholder="예: 5000"
                value={annualIncomeManwonDisplay}
                onChange={(e) => setAnnualIncomeManwonDisplay(addCommas(e.target.value.replace(/\D/g, "")))}
                className="max-w-[200px]"
              />
              <span className="text-muted-foreground text-sm">만 원</span>
            </div>
            <p className="text-muted-foreground text-xs">
              근로소득은 원천징수영수증 기준 연간 금액을 만 원 단위로 입력합니다.
            </p>
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-medium">대출 목록</p>
              <div className="flex flex-wrap gap-2">
                <Button type="button" size="sm" variant="outline" onClick={() => addLoan("existing")}>
                  <Plus className="mr-1 size-3.5" aria-hidden />
                  기존 대출
                </Button>
                <Button type="button" size="sm" variant="outline" onClick={() => addLoan("new")}>
                  <Plus className="mr-1 size-3.5" aria-hidden />
                  신규 대출
                </Button>
              </div>
            </div>
            <p className="text-muted-foreground text-xs">
              기존·신규 대출을 각각 추가하세요. 「대출 조건」은 잔액·잔여 기간 기준으로 월 상환을 계산합니다. 신규는
              총액·총 기간만 넣어도 되고(잔액·잔여는 자동 보완), 기존은 잔액·잔여를 꼭 입력하세요. 체증식은 「월 상환
              직접」만 사용합니다.
            </p>

            <div className="space-y-3">
              {loans.map((row, index) => (
                <LoanRowEditor
                  key={row.id}
                  row={row}
                  index={index}
                  dsrMode={dsrMode}
                  canRemove={loans.length > 1}
                  equalPrincipalDsrBasis={equalPrincipalDsrBasis}
                  bulletDsrBasis={bulletDsrBasis}
                  onChange={(patch) => updateLoan(row.id, patch)}
                  onRemove={() => removeLoan(row.id)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2 border-t pt-4">
            <span id="dsr-mode-label" className="text-sm font-medium">
              DSR 산정 방식
            </span>
            <div
              className="bg-muted inline-flex rounded-lg p-0.5"
              role="group"
              aria-labelledby="dsr-mode-label"
            >
              <Button
                type="button"
                size="sm"
                variant={dsrMode === "general" ? "default" : "ghost"}
                className="h-8 px-3"
                onClick={() => setDsrMode("general")}
                aria-pressed={dsrMode === "general"}
              >
                일반 DSR
              </Button>
              <Button
                type="button"
                size="sm"
                variant={dsrMode === "stress" ? "default" : "ghost"}
                className="h-8 px-3"
                onClick={() => setDsrMode("stress")}
                aria-pressed={dsrMode === "stress"}
              >
                스트레스 DSR
              </Button>
            </div>
          </div>

          {dsrMode === "stress" ? (
            <div className="bg-muted/30 space-y-4 rounded-lg border p-4">
              <div className="space-y-2">
                <Label htmlFor="dsr-stress-preset">명목 스트레스 가산금리(%p)</Label>
                <select
                  id="dsr-stress-preset"
                  className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                  value={stressPresetId}
                  onChange={(e) => setStressPresetId(e.target.value as StressDsrPresetId)}
                >
                  {stressDsrPresets.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>
              {stressPresetId === "custom" ? (
                <div className="space-y-2">
                  <Label htmlFor="dsr-stress-custom">가산금리 직접 입력(%p)</Label>
                  <Input
                    id="dsr-stress-custom"
                    inputMode="decimal"
                    autoComplete="off"
                    placeholder="예: 1.5"
                    value={stressCustomPercent}
                    onChange={(e) => setStressCustomPercent(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="max-w-[120px]"
                  />
                </div>
              ) : null}
              {hasNewDetailLoan ? (
                <p className="text-muted-foreground text-xs">
                  신규 대출 각 건의 「금리 유형」은 해당 대출 카드에서 설정합니다.
                </p>
              ) : (
                <p className="text-muted-foreground text-xs">
                  스트레스 가산을 적용하려면 신규 대출을 「대출 조건」 방식으로 입력하세요.
                </p>
              )}
            </div>
          ) : null}

          {hasEqualPrincipalLoan ? (
            <div className="space-y-2 border-t pt-4">
              <Label htmlFor="dsr-ep-basis">원금균등 DSR·납입 추정 기준</Label>
              <select
                id="dsr-ep-basis"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={equalPrincipalDsrBasis}
                onChange={(e) => setEqualPrincipalDsrBasis(e.target.value as EqualPrincipalDsrBasis)}
              >
                <option value="first-month">{equalPrincipalDsrBasisLabels["first-month"]}</option>
                <option value="year1-sum">{equalPrincipalDsrBasisLabels["year1-sum"]}</option>
                <option value="lifetime-avg">{equalPrincipalDsrBasisLabels["lifetime-avg"]}</option>
              </select>
              <p className="text-muted-foreground text-xs">{equalPrincipalDsrBasisHints[equalPrincipalDsrBasis]}</p>
            </div>
          ) : null}

          {hasBulletLoan ? (
            <div className="space-y-2 border-t pt-4">
              <Label htmlFor="dsr-bullet-basis">만기일시 — DSR 산정 기준 (선택)</Label>
              <select
                id="dsr-bullet-basis"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={bulletDsrBasis}
                onChange={(e) => setBulletDsrBasis(e.target.value as BulletDsrBasis)}
              >
                <option value="interest-only">{bulletDsrBasisLabels["interest-only"]}</option>
                <option value="equal-payment">{bulletDsrBasisLabels["equal-payment"]}</option>
              </select>
              <p className="text-muted-foreground text-xs">{bulletDsrBasisHints[bulletDsrBasis]}</p>
            </div>
          ) : null}

          <Button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600"
            disabled={!canSubmit}
            onClick={() => setHasCalculated(true)}
          >
            DSR 계산하기
          </Button>
        </CardContent>
      </Card>

      <Card className="scroll-mt-24 outline-none" tabIndex={-1}>
        <CardHeader>
          <CardTitle className="text-xl">계산 결과</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            className={`rounded-lg border p-4 ${
              displayWithinBankCap
                ? "border-emerald-500/40 bg-emerald-500/10"
                : "border-amber-500/40 bg-amber-500/10"
            }`}
            role="status"
            aria-live="polite"
          >
            <p className="text-muted-foreground text-sm">총부채원리금상환비율(DSR)</p>
            <p className="text-muted-foreground mt-0.5 text-xs">
              {dsrMode === "stress"
                ? displaySnapshot.isStressDsr
                  ? "스트레스 DSR(신규 대출에 가산금리 반영)"
                  : "스트레스 DSR"
                : "일반 DSR"}
              {showZeroResult ? " · 계산 전" : null}
            </p>
            <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight">
              {displayDsr}
              <span className="text-lg font-semibold">%</span>
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              {showZeroResult
                ? "입력 후 계산하기를 누르면 결과가 갱신됩니다."
                : displayWithinBankCap
                  ? "은행권에서 흔히 예시되는 40% 기준(참고)과 비교해 이내로 보입니다. 제2금융권 등은 별도 기준이 적용될 수 있습니다."
                  : "은행권 40% 참고 기준을 초과하는 수준으로 입력되었습니다. 실제 심사·업권별 한도와 다를 수 있습니다."}
            </p>
          </div>

          {!showZeroResult && displaySnapshot.loanResults.length > 0 ? (
            <div className="rounded-md border">
              <table className="w-full table-fixed border-collapse text-sm">
                <caption className="sr-only">대출별 월 상환액</caption>
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th
                      scope="col"
                      className={`px-2 py-1.5 text-left text-xs font-medium sm:text-sm ${displaySnapshot.isStressDsr ? "w-[22%]" : "w-[30%]"}`}
                    >
                      대출
                    </th>
                    <th
                      scope="col"
                      className={`px-1 py-1.5 text-left text-xs font-medium sm:text-sm ${displaySnapshot.isStressDsr ? "w-[10%]" : "w-[12%]"}`}
                    >
                      구분
                    </th>
                    <th
                      scope="col"
                      className={`px-1 py-1.5 text-right text-xs font-medium whitespace-nowrap sm:px-2 sm:text-sm ${displaySnapshot.isStressDsr ? "w-[34%]" : "w-[58%]"}`}
                    >
                      월 상환 (계약)
                    </th>
                    {displaySnapshot.isStressDsr ? (
                      <th
                        scope="col"
                        className="w-[34%] px-1 py-1.5 text-right text-xs font-medium whitespace-nowrap sm:px-2 sm:text-sm"
                      >
                        월 상환 (DSR)
                      </th>
                    ) : null}
                  </tr>
                </thead>
                <tbody>
                  {displaySnapshot.loanResults.map((loan) => (
                    <tr key={loan.label + loan.isNew + loan.monthlyContract} className="border-b last:border-0">
                      <td className="truncate px-2 py-1.5 font-medium">{loan.label}</td>
                      <td className="text-muted-foreground px-1 py-1.5 whitespace-nowrap">
                        {loan.isNew ? "신규" : "기존"}
                      </td>
                      <td className="px-1 py-1.5 text-right text-xs tabular-nums whitespace-nowrap sm:px-2 sm:text-sm">
                        {formatNumber(Math.round(loan.monthlyContract))}원
                      </td>
                      {displaySnapshot.isStressDsr ? (
                        <td className="px-1 py-1.5 text-right text-xs tabular-nums whitespace-nowrap sm:px-2 sm:text-sm">
                          {formatNumber(Math.round(loan.monthlyDsr))}원
                        </td>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          <dl className="text-sm space-y-3">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="text-muted-foreground">연 소득</dt>
              <dd className="font-medium tabular-nums">
                {formatNumber(displaySnapshot.annualIncomeWon)}원
                <span className="text-muted-foreground ml-1 text-xs font-normal">
                  ({formatAmountKoreanWon(displaySnapshot.annualIncomeWon)})
                </span>
              </dd>
            </div>
            {showSingleNewRate ? (
              <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-muted-foreground">계약 금리(신규 1건)</dt>
                <dd className="font-medium tabular-nums">
                  {`${displaySnapshot.contractRatePercent % 1 === 0 ? displaySnapshot.contractRatePercent : displaySnapshot.contractRatePercent.toFixed(2)}%`}
                </dd>
              </div>
            ) : null}
            {dsrMode === "stress" && showSingleNewRate ? (
              <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-muted-foreground">DSR 산정 금리(신규 1건)</dt>
                <dd className="font-medium tabular-nums">
                  {displaySnapshot.newLoanRateForDsrPercent % 1 === 0
                    ? `${displaySnapshot.newLoanRateForDsrPercent}%`
                    : `${displaySnapshot.newLoanRateForDsrPercent.toFixed(2)}%`}
                  {displaySnapshot.stressAddPercent > 0 ? (
                    <span className="text-muted-foreground ml-1 text-xs font-normal">
                      (가산 +{displaySnapshot.stressAddPercent % 1 === 0 ? displaySnapshot.stressAddPercent : displaySnapshot.stressAddPercent.toFixed(2)}%p)
                    </span>
                  ) : null}
                </dd>
              </div>
            ) : null}
            <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="text-muted-foreground">신규 대출 월 상환 합계</dt>
              <dd className="font-medium tabular-nums">
                {formatNumber(Math.round(displaySnapshot.newMonthlyContract))}원
              </dd>
            </div>
            {displaySnapshot.isStressDsr ? (
              <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-muted-foreground">신규 월 상환 (DSR 산정용)</dt>
                <dd className="font-medium tabular-nums">{formatNumber(Math.round(displaySnapshot.newMonthly))}원</dd>
              </div>
            ) : null}
            <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="text-muted-foreground">
                {displaySnapshot.isStressDsr ? "월 상환 합계 (DSR 산정용)" : "월 상환 합계"}
              </dt>
              <dd className="font-medium tabular-nums">{formatNumber(Math.round(displaySnapshot.totalMonthly))}원</dd>
            </div>
            {displaySnapshot.isStressDsr ? (
              <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-muted-foreground">월 상환 합계 (실제 납입 추정)</dt>
                <dd className="font-medium tabular-nums">
                  {formatNumber(Math.round(displaySnapshot.totalMonthlyContract))}원
                </dd>
              </div>
            ) : null}
            <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="text-muted-foreground">
                {displaySnapshot.isStressDsr ? "연간 상환 합계 (DSR 산정용)" : "연간 원리금 상환 합계"}
              </dt>
              <dd className="font-medium tabular-nums">{formatNumber(Math.round(displaySnapshot.annualDebtServiceWon))}원</dd>
            </div>
          </dl>

          <p className="rounded-md border border-border bg-muted/30 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
            DSR(%)는 「연간 상환 합계 (DSR 산정용)」÷ 연소득으로 계산합니다. 대출 조건은 <strong>잔액·잔여 기간</strong>
            과 상환 방식으로 월 상환을 추정합니다. 스트레스 가산은 신규·대출 조건 입력 건에만 적용됩니다.
          </p>
        </CardContent>
      </Card>

      <DsrCalculatorReferenceCard />
    </div>
  );
}

function LoanRowEditor({
  row,
  index,
  dsrMode,
  canRemove,
  equalPrincipalDsrBasis,
  bulletDsrBasis,
  onChange,
  onRemove,
}: {
  row: LoanRowState;
  index: number;
  dsrMode: "general" | "stress";
  canRemove: boolean;
  equalPrincipalDsrBasis: EqualPrincipalDsrBasis;
  bulletDsrBasis: BulletDsrBasis;
  onChange: (patch: Partial<LoanRowState>) => void;
  onRemove: () => void;
}) {
  const parsed = parseLoanRow(row);
  const terms = parsed?.inputMode === "details" ? resolveDsrLoanTerms(parsed) : null;
  const computedMonthly =
    parsed?.inputMode === "details" && terms && parsed.annualRatePercent != null
      ? monthlyPaymentForDsr(
          terms.balanceWon,
          parsed.annualRatePercent,
          terms.remainingTermMonths,
          parsed.repaymentType ?? "equal-payment",
          equalPrincipalDsrBasis,
          bulletDsrBasis,
          {
            graceMonths: terms.graceMonths,
          },
        )
      : null;

  return (
    <div className="space-y-3 rounded-lg border p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
          <Input
            aria-label={`대출 ${index + 1} 이름`}
            placeholder={row.loanKind === "new" ? "예: 주택담보대출" : "예: 자동차 할부"}
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
              onClick={() =>
                onChange({
                  loanKind: "existing",
                  ...(row.repaymentType !== "graduated" ? { inputMode: "details" } : {}),
                })
              }
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
        {row.repaymentType === "graduated" ? (
          <p className="text-muted-foreground text-xs leading-relaxed">
            체증식은 DSR 계산기에서 「월 상환 직접」만 지원합니다. 통장·상환 스케줄의 이번 달 납입액을 입력하세요.
          </p>
        ) : null}
      </div>

      <div className="bg-muted inline-flex rounded-lg p-0.5" role="group" aria-label="입력 방식">
        <Button
          type="button"
          size="sm"
          variant={row.inputMode === "details" ? "default" : "ghost"}
          className="h-8 px-3"
          disabled={row.repaymentType === "graduated"}
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
          월 상환 직접
        </Button>
      </div>

      {row.inputMode === "monthly" ? (
        <div className="space-y-2">
          <Label htmlFor={`loan-${row.id}-monthly`}>월 상환액</Label>
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

                <LoanMonthsField
                  id={`loan-${row.id}-grace`}
                  label="거치"
                  value={row.graceDisplay}
                  placeholder="0"
                  className="col-start-2"
                  onChange={(v) => onChange({ graceDisplay: v })}
                />
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-xs leading-relaxed">
            {row.loanKind === "new"
              ? "신규: 총액·총 기간만 입력해도 됩니다. 잔액·잔여가 비어 있으면 총액·총 기간으로 계산합니다."
              : "기존: 현재 잔액과 남은 상환 개월 수를 입력하세요. 거치 기간이 끝났으면 0입니다."}
            {" "}
            만기일시상환은 <strong>잔액</strong>에 대출 원금을 입력하고 상환 방식에서 「만기일시상환」을 선택하세요.
          </p>

          {row.loanKind === "new" && dsrMode === "stress" ? (
            <div className="space-y-2">
              <Label htmlFor={`loan-${row.id}-stress-kind`}>금리 유형 (스트레스 DSR)</Label>
              <select
                id={`loan-${row.id}-stress-kind`}
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={row.stressRateKind}
                onChange={(e) => onChange({ stressRateKind: e.target.value as StressRateKind })}
              >
                {(Object.keys(stressRateKindLabels) as StressRateKind[]).map((k) => (
                  <option key={k} value={k}>
                    {stressRateKindLabels[k]}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          {computedMonthly != null && computedMonthly > 0 ? (
            <p className="text-muted-foreground text-xs">
              {parsed?.repaymentType === "bullet"
                ? bulletDsrBasis === "interest-only"
                  ? "계약 금리 기준 월 납입(이자)"
                  : "DSR 환산 월 상환(원리금균등)"
                : "계약 금리 기준 월 상환 추정"}
              :{" "}
              <span className="text-foreground font-medium tabular-nums">
                {formatNumber(Math.round(computedMonthly))}원
              </span>
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}

function LoanAmountField({
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
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={className ? `flex flex-col gap-1 ${className}` : "flex flex-col gap-1"}>
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
        className="h-9 min-w-0"
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
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={className ? `flex flex-col gap-1 ${className}` : "flex flex-col gap-1"}>
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
        className="h-9 min-w-0"
      />
    </div>
  );
}

function DsrReferenceTable({
  caption,
  headers,
  rows,
  minWidth,
}: {
  caption: string;
  headers: string[];
  rows: readonly (readonly string[])[];
  minWidth: string;
}) {
  return (
    <div className="overflow-auto rounded-md border">
      <table className={`w-full ${minWidth} border-collapse text-sm`}>
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-muted/50 border-b">
          <tr>
            {headers.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={`p-2 font-medium ${i === headers.length - 1 && headers.length === 3 ? "text-right" : "text-left"}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row[0]}
              className="border-b transition-colors duration-150 ease-out last:border-0 hover:bg-primary/10 dark:hover:bg-primary/20"
            >
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`p-2 ${i === 0 ? "font-medium" : "text-muted-foreground"} ${i === 1 && headers.length === 3 ? "text-right font-medium text-foreground" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DsrCalculatorReferenceCard() {
  const epRows = (Object.keys(equalPrincipalDsrBasisLabels) as EqualPrincipalDsrBasis[]).map((k) => [
    equalPrincipalDsrBasisLabels[k],
    equalPrincipalDsrBasisHints[k],
  ]);
  const bulletRows = (Object.keys(bulletDsrBasisLabels) as BulletDsrBasis[]).map((k) => [
    bulletDsrBasisLabels[k],
    bulletDsrBasisHints[k],
  ]);
  const stressRows = stressDsrPresets
    .filter((p) => p.id !== "custom")
    .map((p) => [p.label, p.nominalPercent != null ? `${p.nominalPercent}%p` : "—"]);

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg">DSR 기준표 및 산정 참고</CardTitle>
        <p className="text-muted-foreground text-sm font-normal">
          DSR(%) = 연간 원리금 상환 합계 ÷ 연소득 × 100. 아래 표는 일반적인 기준을 요약한 것이며, 금융기관·상품별 심사와 다를 수
          있습니다.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <section className="space-y-2">
          <p className="text-sm font-semibold">1. 업권별 DSR 한도 (참고)</p>
          <DsrReferenceTable
            caption="업권별 DSR 한도"
            headers={["구분", "DSR 한도", "비고"]}
            rows={[
              ["은행권", "40%", "주택담보·가계대출 일반 기준"],
              ["제2금융권", "50%", "저축은행·카드·캐피탈 등(상품별 상이)"],
              ["서민금융", "별도", "햇살론 등 정책상품은 별도 규정"],
            ]}
            minWidth="min-w-[480px]"
          />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">2. DSR에 포함되는 부채 (일반)</p>
          <DsrReferenceTable
            caption="대출 종류별 DSR 포함 항목"
            headers={["대출 종류", "포함 항목"]}
            rows={[
              ["주택담보대출", "연간 원금 + 이자"],
              ["신용대출·카드론", "연간 원금 + 이자"],
              ["자동차 할부", "연간 원금 + 이자"],
              ["전세자금대출", "연간 원금 + 이자(기관별 이자만 인정 등 상이)"],
              ["마이너스통장", "한도액 기준 연간 이자(미사용 한도도 반영될 수 있음)"],
            ]}
            minWidth="min-w-[560px]"
          />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">3. 원금균등 — 연간 상환액 산출 방식</p>
          <DsrReferenceTable
            caption="원금균등 DSR 연간 상환 산출 방식"
            headers={["방식", "산출 개요"]}
            rows={epRows}
            minWidth="min-w-[640px]"
          />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">4. 만기일시 — DSR 산정 기준</p>
          <DsrReferenceTable
            caption="만기일시 DSR 산정 기준"
            headers={["기준", "설명"]}
            rows={bulletRows}
            minWidth="min-w-[560px]"
          />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">5. 스트레스 DSR — 명목 가산금리 참고</p>
          <DsrReferenceTable
            caption="스트레스 DSR 명목 가산금리 프리셋"
            headers={["구분", "명목 가산(%p)"]}
            rows={stressRows}
            minWidth="min-w-[720px]"
          />
          <p className="text-muted-foreground text-xs leading-relaxed">
            신규 대출 금리 유형별 실제 가산 = 명목 × 가중(변동 100%, 혼합 80%, 주기형 40%, 순수 고정 0%). 계산기 입력과 동일한 간이
            모델입니다.
          </p>
        </section>

        <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="from-primary/15 via-primary/8 bg-gradient-to-r to-transparent px-4 py-3 sm:px-5">
            <h3 className="text-primary text-base font-semibold tracking-tight">DSR 산정 시 참고사항</h3>
            <p className="text-muted-foreground mt-1 text-xs">본 계산기에 반영된 범위와 한계를 요약했습니다.</p>
          </div>
          <ol className="list-none space-y-3 p-4 sm:p-5">
            {[
              "연소득은 근로소득 기준 세전 연소득(만 원)을 가정하며, 사업·임대·연금 등은 금융기관별 인정 방식이 다릅니다.",
              "대출 조건 입력 시 잔액·잔여 기간(개월)을 기준으로 월 상환을 계산합니다. 총액·총 기간·거치도 함께 반영할 수 있습니다.",
              "스트레스 DSR은 신규·대출 조건 입력 건에만 가산금리를 적용합니다. 기존 대출·월 상환 직접 입력 건은 입력값을 그대로 씁니다.",
              "체증식은 「월 상환 직접」 입력만 지원합니다. 통장·상환 스케줄의 월 납입액을 그대로 넣으세요.",
              "원금균등·만기일시는 선택한 연간 상환 산출 방식에 따라 DSR이 달라집니다. 타사 계산기와 정의가 다를 수 있습니다.",
              "마이너스통장·신용카드 리볼빙·보증채무 등은 본 화면에 포함되지 않을 수 있습니다.",
              "LTV·DTI·규제지역·다주택·스트레스 DSR 단계별 시행 등은 별도 규정이며, 승인 한도는 신청 금융기관에서 확인해야 합니다.",
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
          기준표는 가이드·정책 공지를 바탕으로 사용자가 빠르게 대조할 수 있도록 정리한 참고용입니다. 소득 인정·부채 재산정·스트레스 적용
          범위는 금융기관 심사와 다를 수 있습니다.
        </p>

        <p className="flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/guide/dsr-calculation-method" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            DSR 계산 방법 (상세 가이드)
          </Link>
          <Link href="/guide/stress-dsr-explained" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            스트레스 DSR 설명
          </Link>
          <Link href="/guide/ltv-dti-dsr-comparison" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            LTV·DTI·DSR 비교
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
