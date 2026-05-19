"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  computeDsrSnapshot,
  bulletDsrBasisHints,
  bulletDsrBasisLabels,
  equalPrincipalDsrBasisHints,
  equalPrincipalDsrBasisLabels,
  stressDsrPresets,
  stressRateKindLabels,
  type BulletDsrBasis,
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

export function DsrCalculator() {
  const [annualIncomeManwonDisplay, setAnnualIncomeManwonDisplay] = React.useState("");
  const [existingMonthlyDisplay, setExistingMonthlyDisplay] = React.useState("");
  const [newPrincipalDisplay, setNewPrincipalDisplay] = React.useState("");
  const [newRate, setNewRate] = React.useState("");
  const [termUnit, setTermUnit] = React.useState<"year" | "month">("year");
  const [newTerm, setNewTerm] = React.useState("30");
  const [newRepaymentType, setNewRepaymentType] = React.useState<RepaymentType>("equal-payment");
  const [equalPrincipalDsrBasis, setEqualPrincipalDsrBasis] =
    React.useState<EqualPrincipalDsrBasis>("first-month");
  const [bulletDsrBasis, setBulletDsrBasis] = React.useState<BulletDsrBasis>("equal-payment");
  const [dsrMode, setDsrMode] = React.useState<"general" | "stress">("general");
  const [stressPresetId, setStressPresetId] = React.useState<StressDsrPresetId>("metro_mortgage");
  const [stressCustomPercent, setStressCustomPercent] = React.useState("1.5");
  const [stressRateKind, setStressRateKind] = React.useState<StressRateKind>("variable");
  const [hasCalculated, setHasCalculated] = React.useState(false);

  const nominalStressPercent = React.useMemo(() => {
    if (dsrMode !== "stress") return 0;
    const preset = stressDsrPresets.find((p) => p.id === stressPresetId);
    if (stressPresetId === "custom") {
      const v = parseFloat(stressCustomPercent);
      return Number.isFinite(v) && v >= 0 ? v : NaN;
    }
    return preset?.nominalPercent ?? 0;
  }, [dsrMode, stressPresetId, stressCustomPercent]);

  const termMonthsFromInputs = React.useMemo(() => {
    const n = parseFloat(newTerm);
    if (!Number.isFinite(n) || n <= 0) return 0;
    if (termUnit === "year") {
      return Math.min(600, Math.max(1, Math.round(n * 12)));
    }
    return Math.min(600, Math.max(1, Math.round(n)));
  }, [newTerm, termUnit]);

  const snapshot = React.useMemo(() => {
    const manwon = parseInt(removeCommas(annualIncomeManwonDisplay), 10);
    const existingMonthly = parseInt(removeCommas(existingMonthlyDisplay), 10) || 0;
    const principal = parseInt(removeCommas(newPrincipalDisplay), 10) || 0;
    const rate = parseFloat(newRate);

    const annualIncomeManwon = Number.isFinite(manwon) && manwon > 0 ? manwon : 0;
    const newAnnualRatePercent = Number.isFinite(rate) && rate >= 0 ? rate : 0;

    const stress =
      dsrMode === "stress" && Number.isFinite(nominalStressPercent)
        ? { nominalStressPercent: nominalStressPercent as number, newLoanRateKind: stressRateKind }
        : null;

    return computeDsrSnapshot({
      annualIncomeManwon,
      existingMonthlyWon: Number.isFinite(existingMonthly) ? existingMonthly : 0,
      newPrincipalWon: principal,
      newAnnualRatePercent: newAnnualRatePercent,
      newTermMonths: termMonthsFromInputs,
      newRepaymentType,
      equalPrincipalDsrBasis,
      bulletDsrBasis,
      stress,
    });
  }, [
    annualIncomeManwonDisplay,
    existingMonthlyDisplay,
    newPrincipalDisplay,
    newRate,
    termMonthsFromInputs,
    newRepaymentType,
    equalPrincipalDsrBasis,
    bulletDsrBasis,
    dsrMode,
    nominalStressPercent,
    stressRateKind,
  ]);

  const stressInputsValid =
    dsrMode !== "stress" || (Number.isFinite(nominalStressPercent) && !Number.isNaN(nominalStressPercent));

  const canSubmit =
    parseInt(removeCommas(annualIncomeManwonDisplay), 10) > 0 &&
    parseInt(removeCommas(newPrincipalDisplay), 10) > 0 &&
    termMonthsFromInputs > 0 &&
    stressInputsValid;

  const switchTermUnit = (next: "year" | "month") => {
    if (next === termUnit) return;
    const n = parseFloat(newTerm);
    if (Number.isFinite(n) && n > 0) {
      if (termUnit === "year" && next === "month") {
        setNewTerm(String(Math.min(600, Math.max(1, Math.round(n * 12)))));
      } else if (termUnit === "month" && next === "year") {
        const y = n / 12;
        setNewTerm(Number.isInteger(y) ? String(y) : String(Math.round(y * 1000) / 1000));
      }
    }
    setTermUnit(next);
  };

  const dsrDisplay = snapshot.dsrPercent != null ? snapshot.dsrPercent.toFixed(2) : "—";
  const withinBankCap = snapshot.dsrPercent != null && snapshot.dsrPercent <= 40;
  const showZeroResult = !hasCalculated || !canSubmit;

  const displaySnapshot: typeof snapshot = showZeroResult
    ? {
        annualIncomeWon: 0,
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
        equalPrincipalDsrBasis: snapshot.equalPrincipalDsrBasis,
        bulletDsrBasis: snapshot.bulletDsrBasis,
      }
    : snapshot;

  const displayDsr = showZeroResult ? "0.00" : dsrDisplay;
  const displayWithinBankCap = showZeroResult ? true : withinBankCap;

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

          <div className="space-y-2">
            <Label htmlFor="dsr-existing-monthly">그 밖의 기존 대출 월 상환액 합계</Label>
            <div className="flex flex-wrap items-center gap-2">
              <Input
                id="dsr-existing-monthly"
                inputMode="numeric"
                autoComplete="off"
                placeholder="0"
                value={existingMonthlyDisplay}
                onChange={(e) => setExistingMonthlyDisplay(addCommas(e.target.value.replace(/\D/g, "")))}
                className="max-w-[220px]"
              />
              <span className="text-muted-foreground text-sm">원 / 월</span>
            </div>
            <p className="text-muted-foreground text-xs">
              신용·카드론·자동차 할부 등 이미 갚고 있는 달 원리금 합(없으면 0).
            </p>
          </div>

          <div className="space-y-2 border-t pt-4">
            <p className="text-sm font-medium">신규 대출(예: 주택담보대출)</p>
            <Label htmlFor="dsr-new-principal">대출 원금</Label>
            <div className="flex flex-wrap items-center gap-2">
              <Input
                id="dsr-new-principal"
                inputMode="numeric"
                autoComplete="off"
                placeholder="예: 300000000"
                value={newPrincipalDisplay}
                onChange={(e) => setNewPrincipalDisplay(addCommas(e.target.value.replace(/\D/g, "")))}
                className="max-w-[240px]"
              />
              <span className="text-muted-foreground text-sm">원</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dsr-new-rate">연이자율</Label>
            <div className="flex flex-wrap items-center gap-2">
              <Input
                id="dsr-new-rate"
                inputMode="decimal"
                autoComplete="off"
                placeholder="예: 4.0"
                value={newRate}
                onChange={(e) => setNewRate(e.target.value.replace(/[^0-9.]/g, ""))}
                className="max-w-[120px]"
              />
              <span className="text-muted-foreground text-sm">%</span>
            </div>
            <p className="text-muted-foreground text-xs">계약(표시) 금리입니다. 스트레스 DSR 선택 시 DSR 산정용으로 가산될 수 있습니다.</p>
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
            <p className="text-muted-foreground text-xs">
              스트레스 DSR은 한도 산정 시 신규 대출에 대해, 계약 금리에 명목 스트레스를 금리 유형별 비율로 가산한
              금리로 연간 상환 부담을 다시 잡습니다. 기존 대출은 입력하신 월 상환액을 그대로 두며(실제 심사에서는 기존
              부채에도 스트레스가 붙을 수 있음), 만기일시·원금균등은 화면 안내와 동일한 간이 규칙을 따릅니다.
            </p>
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
                {stressPresetId === "policy1015_metro_regulated" ? (
                  <p className="text-muted-foreground text-xs">
                    수도권·규제지역 주담대에 대한 명목 스트레스 가산 <strong>하한 3.0%p</strong>를 적용한 참고값입니다. 해당
                    대출이 아니면 다른 프리셋을 선택하세요.
                  </p>
                ) : null}
              </div>
              {stressPresetId === "custom" ? (
                <div className="space-y-2">
                  <Label htmlFor="dsr-stress-custom">가산금리 직접 입력(%p)</Label>
                  <div className="flex flex-wrap items-center gap-2">
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
                </div>
              ) : null}
              <div className="space-y-2">
                <Label htmlFor="dsr-stress-rate-kind">신규 대출 금리 유형</Label>
                <select
                  id="dsr-stress-rate-kind"
                  className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                  value={stressRateKind}
                  onChange={(e) => setStressRateKind(e.target.value as StressRateKind)}
                >
                  {(Object.keys(stressRateKindLabels) as StressRateKind[]).map((k) => (
                    <option key={k} value={k}>
                      {stressRateKindLabels[k]}
                    </option>
                  ))}
                </select>
                {stressRateKind === "fixed" ? (
                  <p className="text-muted-foreground text-xs">
                    순수 고정금리는 스트레스 가산이 적용되지 않아 일반 DSR과 같은 산정 금리가 됩니다.
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="dsr-new-term">상환 기간</Label>
            <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
              <div
                className="bg-muted inline-flex rounded-lg p-0.5"
                role="group"
                aria-label="상환 기간 단위"
              >
                <Button
                  type="button"
                  size="sm"
                  variant={termUnit === "year" ? "default" : "ghost"}
                  className="h-8 px-3"
                  onClick={() => switchTermUnit("year")}
                  aria-pressed={termUnit === "year"}
                >
                  년
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={termUnit === "month" ? "default" : "ghost"}
                  className="h-8 px-3"
                  onClick={() => switchTermUnit("month")}
                  aria-pressed={termUnit === "month"}
                >
                  개월
                </Button>
              </div>
              <Input
                id="dsr-new-term"
                type="number"
                min={termUnit === "year" ? 1 : 1}
                max={termUnit === "year" ? 50 : 600}
                step={termUnit === "year" ? "any" : 1}
                placeholder={termUnit === "year" ? "예: 30" : "예: 360"}
                value={newTerm}
                onChange={(e) => setNewTerm(e.target.value)}
                className="max-w-[140px]"
              />
              <span className="text-muted-foreground text-sm whitespace-nowrap">
                {termUnit === "year" ? "년" : "개월"}
              </span>
            </div>
            <p className="text-muted-foreground text-xs">
              {termUnit === "year"
                ? "대출 상환 기간을 년 단위로 입력합니다 (1~50년, 계산 시 개월로 환산)."
                : "대출 상환 기간을 개월 수로 입력합니다 (1~600개월)."}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dsr-repayment-type">상환 방식</Label>
            <select
              id="dsr-repayment-type"
              className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
              value={newRepaymentType}
              onChange={(e) => setNewRepaymentType(e.target.value as RepaymentType)}
            >
              <option value="equal-payment">{repaymentTypeLabels["equal-payment"]}</option>
              <option value="equal-principal">{repaymentTypeLabels["equal-principal"]}</option>
              <option value="bullet">{repaymentTypeLabels.bullet}</option>
            </select>
            <p className="text-muted-foreground text-xs">
              {newRepaymentType === "equal-principal"
                ? "원금균등은 월 상환이 달마다 달라집니다. DSR·실제 납입 추정에 쓸 연간 상환액 산출 방식을 아래에서 고를 수 있습니다."
                : newRepaymentType === "bullet"
                  ? "만기일시는 DSR 산정 기준(이자만 vs 원리금균등 환산)을 선택할 수 있습니다."
                  : null}
            </p>
            {newRepaymentType === "equal-principal" ? (
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
            {newRepaymentType === "bullet" ? (
              <div className="space-y-2 border-t pt-4">
                <Label htmlFor="dsr-bullet-basis">만기일시 DSR·납입 추정 기준</Label>
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
          </div>

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
          <>
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

            {newRepaymentType === "equal-principal" ? (
              <div className="text-muted-foreground rounded-md border border-border bg-muted/20 px-3 py-2 text-xs leading-relaxed">
                원금균등 연간 상환 산출:{" "}
                <span className="text-foreground font-medium">
                  {equalPrincipalDsrBasisLabels[displaySnapshot.equalPrincipalDsrBasis]}
                </span>
              </div>
            ) : null}
            {newRepaymentType === "bullet" ? (
              <div className="text-muted-foreground rounded-md border border-border bg-muted/20 px-3 py-2 text-xs leading-relaxed">
                만기일시 연간 상환 산출:{" "}
                <span className="text-foreground font-medium">
                  {bulletDsrBasisLabels[displaySnapshot.bulletDsrBasis]}
                </span>
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
              <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-muted-foreground">계약 금리(신규)</dt>
                <dd className="font-medium tabular-nums">
                  {`${displaySnapshot.contractRatePercent % 1 === 0 ? displaySnapshot.contractRatePercent : displaySnapshot.contractRatePercent.toFixed(2)}%`}
                </dd>
              </div>
              {dsrMode === "stress" ? (
                <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-muted-foreground">DSR 산정 금리(신규)</dt>
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
                <dt className="text-muted-foreground">
                  {displaySnapshot.isStressDsr ? "신규 월 상환액 (계약 금리·납입 추정)" : "신규 대출 월 상환액"}
                </dt>
                <dd className="font-medium tabular-nums">
                  {formatNumber(Math.round(displaySnapshot.newMonthlyContract))}원
                </dd>
              </div>
              {displaySnapshot.isStressDsr ? (
                <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-muted-foreground max-w-[min(100%,18rem)] leading-snug">
                    신규 월 상환액 (DSR 산정용)
                  </dt>
                  <dd className="font-medium tabular-nums">{formatNumber(Math.round(displaySnapshot.newMonthly))}원</dd>
                </div>
              ) : null}
              {displaySnapshot.isStressDsr ? (
                <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-muted-foreground max-w-[min(100%,18rem)] leading-snug">
                    월 상환 합계 (실제 납입 추정)
                  </dt>
                  <dd className="font-medium tabular-nums">
                    {formatNumber(Math.round(displaySnapshot.totalMonthlyContract))}원
                  </dd>
                </div>
              ) : null}
              <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-muted-foreground max-w-[min(100%,18rem)] leading-snug">
                  {displaySnapshot.isStressDsr ? "월 상환 합계 (DSR 산정용)" : "월 상환 합계"}
                </dt>
                <dd className="font-medium tabular-nums">{formatNumber(Math.round(displaySnapshot.totalMonthly))}원</dd>
              </div>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-muted-foreground max-w-[min(100%,18rem)] leading-snug">
                  {displaySnapshot.isStressDsr ? "연간 상환 합계 (DSR 산정용)" : "연간 원리금 상환 합계"}
                </dt>
                <dd className="font-medium tabular-nums">{formatNumber(Math.round(displaySnapshot.annualDebtServiceWon))}원</dd>
              </div>
              {displaySnapshot.isStressDsr ? (
                <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-muted-foreground max-w-[min(100%,18rem)] leading-snug">
                    연간 상환 합계 (실제 납입 추정)
                  </dt>
                  <dd className="font-medium tabular-nums">
                    {formatNumber(Math.round(displaySnapshot.annualDebtServiceContractWon))}원
                  </dd>
                </div>
              ) : null}
            </dl>

            <p className="rounded-md border border-border bg-muted/30 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
              DSR(%)는 「연간 상환 합계 (DSR 산정용)」÷ 연소득으로 계산합니다. 원금균등은 선택한 기준에 따라 신규
              대출 쪽 연간 상환액이 달라집니다. 「실제 납입 추정」은 계약 금리만 반영한 금액이며, 표시 월액은
              연간÷12로 맞춘 값이라 첫 달 실제 납입·1년차 평균과 다를 수 있습니다. 만기일시는 선택한 기준에 따라
              이자만 또는 원리금균등 환산액으로 연간 상환을 잡습니다. 스트레스 가산은 한도 산정용 가정입니다.
              마이너스통장·은행별 규정·제2금융 DSR 한도 등은 반영하지 않습니다.
            </p>

          </>
        </CardContent>
      </Card>

      <DsrCalculatorReferenceCard />
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
              "기존 대출은 월 상환액 합계를 직접 입력합니다. 스트레스 DSR에서도 기존 부채는 입력값을 그대로 쓰며, 실제 심사에서는 기존 부채에도 스트레스가 붙을 수 있습니다.",
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
