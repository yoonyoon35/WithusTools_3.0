"use client";

import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ScheduleExportData } from "@/lib/download-schedule";
import {
  DEFAULT_GRADUATED_ANNUAL_INCREASE_PERCENT,
  formatNumber,
  removeCommas,
  repaymentTypeLabels,
  runCalculation,
  type CalculationOptions,
  type CalculationResult,
  type RepaymentType,
} from "@/lib/loan-calculations";

const PaymentChart = dynamic(
  () => import("./payment-chart").then((m) => ({ default: m.PaymentChart })),
  { ssr: false, loading: () => <div className="text-muted-foreground h-[300px] flex items-center justify-center text-sm">차트 불러오는 중…</div> },
);

const ScheduleDownloadButtons = dynamic(
  () => import("./schedule-download-buttons").then((m) => ({ default: m.ScheduleDownloadButtons })),
  { ssr: false },
);

const EMPTY_RESULT: CalculationResult = {
  monthlyPayment: 0,
  schedule: [],
};

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function parseRepaymentType(v: string | null): RepaymentType | null {
  if (v === "equal-payment" || v === "equal-principal" || v === "graduated" || v === "bullet") return v;
  return null;
}

function buildSearchParams(args: {
  amount: number;
  rate: number;
  grace: number;
  period: number;
  unit: "year" | "month";
  type: RepaymentType;
  graduatedRate: number;
  compare: boolean;
  compareType: RepaymentType | "";
}) {
  const p = new URLSearchParams();
  p.set("amount", String(Math.round(args.amount)));
  p.set("rate", String(args.rate));
  p.set("grace", String(args.grace));
  p.set("period", String(args.period));
  p.set("unit", args.unit);
  p.set("type", args.type);
  if (args.type === "graduated" || args.compareType === "graduated") {
    p.set("graduatedRate", String(args.graduatedRate));
  }
  if (args.compare && args.compareType) {
    p.set("compare", "1");
    p.set("compareType", args.compareType);
  }
  return p.toString();
}

function hydrateFromSearchParams(searchParams: URLSearchParams, setters: {
  setLoanAmountDisplay: (v: string) => void;
  setInterestRate: (v: string) => void;
  setGracePeriod: (v: string) => void;
  setLoanPeriod: (v: string) => void;
  setPeriodUnit: (v: "year" | "month") => void;
  setRepaymentType: (v: RepaymentType) => void;
  setGraduatedIncreaseRate: (v: string) => void;
  setCompareMode: (v: boolean) => void;
  setCompareType: (v: RepaymentType | "") => void;
}) {
  const amount = searchParams.get("amount");
  const rate = searchParams.get("rate");
  const grace = searchParams.get("grace");
  const period = searchParams.get("period");
  const unit = searchParams.get("unit");
  const type = searchParams.get("type");
  const compare = searchParams.get("compare");
  const compareT = searchParams.get("compareType");
  const graduatedRate = searchParams.get("graduatedRate");

  if (amount) setters.setLoanAmountDisplay(addCommas(amount.replace(/\D/g, "")));
  if (rate != null && rate !== "") setters.setInterestRate(rate);
  if (grace != null && grace !== "") setters.setGracePeriod(grace);
  if (period != null && period !== "") setters.setLoanPeriod(period);
  if (unit === "month" || unit === "year") setters.setPeriodUnit(unit);
  const pt = parseRepaymentType(type);
  if (pt) setters.setRepaymentType(pt);
  if (graduatedRate != null && graduatedRate !== "") setters.setGraduatedIncreaseRate(graduatedRate);
  setters.setCompareMode(compare === "1" || compare === "true");
  const ct = parseRepaymentType(compareT);
  setters.setCompareType(ct ?? "");
}

export function LoanCalculator() {
  const router = useRouter();
  const pathname = usePathname();

  const [loanAmountDisplay, setLoanAmountDisplay] = React.useState("");
  const [interestRate, setInterestRate] = React.useState("");
  const [gracePeriod, setGracePeriod] = React.useState("0");
  const [loanPeriod, setLoanPeriod] = React.useState("");
  const [periodUnit, setPeriodUnit] = React.useState<"year" | "month">("year");
  const [repaymentType, setRepaymentType] = React.useState<RepaymentType>("equal-payment");
  const [graduatedIncreaseRate, setGraduatedIncreaseRate] = React.useState(
    String(DEFAULT_GRADUATED_ANNUAL_INCREASE_PERCENT),
  );
  const [compareMode, setCompareMode] = React.useState(false);
  const [compareType, setCompareType] = React.useState<RepaymentType | "">("");

  const [result, setResult] = React.useState<CalculationResult>(EMPTY_RESULT);
  const [compareResult, setCompareResult] = React.useState<CalculationResult | null>(null);
  const [exportData, setExportData] = React.useState<ScheduleExportData | null>(null);
  const [hasCalculated, setHasCalculated] = React.useState(false);

  const resultRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function syncFromUrl() {
      hydrateFromSearchParams(new URLSearchParams(window.location.search), {
        setLoanAmountDisplay,
        setInterestRate,
        setGracePeriod,
        setLoanPeriod,
        setPeriodUnit,
        setRepaymentType,
        setGraduatedIncreaseRate,
        setCompareMode,
        setCompareType,
      });
    }
    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const graceDisabled = repaymentType === "bullet";

  React.useEffect(() => {
    if (graceDisabled) {
      setGracePeriod("0");
    }
  }, [graceDisabled]);

  const onLoanAmountChange = (raw: string) => {
    const num = raw.replace(/[^0-9]/g, "");
    setLoanAmountDisplay(num ? addCommas(num) : "");
  };

  const performCalculation = React.useCallback(() => {
    const loanAmount = parseFloat(removeCommas(loanAmountDisplay));
    const rate = parseFloat(interestRate);
    let grace = parseFloat(gracePeriod) || 0;
    const periodVal = parseFloat(loanPeriod);

    if (!loanAmount || loanAmount <= 0) {
      window.alert("대출 원금을 올바르게 입력해주세요.");
      return;
    }
    if (Number.isNaN(rate) || rate < 0 || rate > 100) {
      window.alert("이자율을 올바르게 입력해주세요 (0-100%).");
      return;
    }
    if (compareMode && !compareType) {
      window.alert("비교할 상환 방식을 선택해주세요.");
      return;
    }
    if (compareMode && compareType && repaymentType === compareType) {
      window.alert("비교 방식은 선택한 상환 방식과 다른 방식을 선택해주세요.");
      return;
    }

    if (grace < 0) grace = 0;
    if (grace > 5) grace = 5;

    let loanPeriodMonths: number;
    if (periodUnit === "year") {
      if (!periodVal || periodVal <= 0 || periodVal > 50) {
        window.alert("대출 기간을 올바르게 입력해주세요 (1-50년).");
        return;
      }
      loanPeriodMonths = periodVal * 12;
    } else {
      if (!periodVal || periodVal <= 0 || periodVal > 600) {
        window.alert("대출 기간을 올바르게 입력해주세요 (1-600개월).");
        return;
      }
      loanPeriodMonths = periodVal;
    }

    const finalGraceYears = graceDisabled ? 0 : grace;
    const graceMonths = finalGraceYears * 12;
    if (!graceDisabled && graceMonths >= loanPeriodMonths) {
      window.alert("거치기간은 대출기간보다 짧아야 합니다. 본금을 상환할 기간이 필요합니다.");
      return;
    }

    const parsedGraduatedRate = parseFloat(graduatedIncreaseRate);
    if (Number.isNaN(parsedGraduatedRate) || parsedGraduatedRate < 0 || parsedGraduatedRate > 20) {
      window.alert("체증률을 올바르게 입력해주세요 (0-20%).");
      return;
    }

    const calcOptions: CalculationOptions = {
      graduatedAnnualIncreasePercent: parsedGraduatedRate,
    };

    const primary = runCalculation(
      repaymentType,
      loanAmount,
      rate,
      loanPeriodMonths,
      finalGraceYears,
      calcOptions,
    );

    let second: CalculationResult | null = null;
    if (compareMode && compareType && compareType !== repaymentType) {
      second = runCalculation(compareType, loanAmount, rate, loanPeriodMonths, finalGraceYears, calcOptions);
    }

    setResult(primary);
    setCompareResult(second);
    setHasCalculated(true);

    const totalPayment = primary.schedule.reduce((s, r) => s + r.payment, 0);
    const totalInterest = primary.schedule.reduce((s, r) => s + r.interest, 0);
    setExportData({
      schedule: primary.schedule,
      principal: loanAmount,
      totalPayment,
      totalInterest,
      monthlyPayment: primary.monthlyPayment,
      interestRate: rate,
      loanPeriod: loanPeriodMonths,
      gracePeriod: finalGraceYears,
      repaymentType,
    });

    const qs = buildSearchParams({
      amount: loanAmount,
      rate,
      grace: finalGraceYears,
      period: periodVal,
      unit: periodUnit,
      type: repaymentType,
      graduatedRate: parsedGraduatedRate,
      compare: Boolean(compareMode && second),
      compareType: compareMode && second ? (compareType as RepaymentType) : "",
    });
    router.replace(`${pathname}?${qs}`, { scroll: false });

    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }, [
    loanAmountDisplay,
    interestRate,
    gracePeriod,
    loanPeriod,
    periodUnit,
    repaymentType,
    compareMode,
    compareType,
    graduatedIncreaseRate,
    graceDisabled,
    pathname,
    router,
  ]);

  const summary = React.useMemo(() => {
    if (!hasCalculated) {
      return {
        monthly: 0,
        totalPay: 0,
        totalInt: 0,
        monthlyDiff: null as number | null,
        totalPayDiff: null as number | null,
        totalIntDiff: null as number | null,
      };
    }

    const totalPayment = result.schedule.reduce((s, r) => s + r.payment, 0);
    const totalInterest = result.schedule.reduce((s, r) => s + r.interest, 0);
    if (!compareResult) {
      return {
        monthly: result.monthlyPayment,
        totalPay: totalPayment,
        totalInt: totalInterest,
        monthlyDiff: null as number | null,
        totalPayDiff: null as number | null,
        totalIntDiff: null as number | null,
      };
    }
    const cTotal = compareResult.schedule.reduce((s, r) => s + r.payment, 0);
    const cInt = compareResult.schedule.reduce((s, r) => s + r.interest, 0);
    return {
      monthly: result.monthlyPayment,
      totalPay: totalPayment,
      totalInt: totalInterest,
      monthlyDiff: result.monthlyPayment - compareResult.monthlyPayment,
      totalPayDiff: totalPayment - cTotal,
      totalIntDiff: totalInterest - cInt,
    };
  }, [result, compareResult, loanAmountDisplay, hasCalculated]);

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="calculator" className="scroll-mt-24">
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">대출 원금 (원)</Label>
            <Input
              id="loanAmount"
              inputMode="numeric"
              placeholder="예: 100,000,000"
              value={loanAmountDisplay}
              onChange={(e) => onLoanAmountChange(e.target.value)}
              aria-describedby="hint-amount"
            />
            <p id="hint-amount" className="text-muted-foreground text-xs">
              대출받을 금액을 입력하세요
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interestRate">연 이자율 (%)</Label>
            <Input
              id="interestRate"
              type="number"
              min={0}
              max={100}
              step="0.01"
              placeholder="예: 3.5"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              aria-describedby="hint-rate"
            />
            <p id="hint-rate" className="text-muted-foreground text-xs">
              연간 이자율을 입력하세요
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gracePeriod">거치기간 (년)</Label>
            <Input
              id="gracePeriod"
              type="number"
              min={0}
              max={5}
              step={1}
              disabled={graceDisabled}
              value={gracePeriod}
              onChange={(e) => {
                const v = parseFloat(e.target.value);
                if (Number.isNaN(v)) {
                  setGracePeriod(e.target.value);
                  return;
                }
                setGracePeriod(String(Math.min(5, Math.max(0, v))));
              }}
              className={graceDisabled ? "opacity-50" : ""}
              aria-describedby="hint-grace"
            />
            <p id="hint-grace" className="text-muted-foreground text-xs">
              거치기간 동안 이자만 납부합니다 (0-5년). 만기일시상환에서는 적용되지 않습니다.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanPeriod">대출 기간</Label>
            <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
              <div
                className="bg-muted inline-flex rounded-lg p-0.5"
                role="group"
                aria-label="대출 기간 단위"
              >
                <Button
                  type="button"
                  size="sm"
                  variant={periodUnit === "year" ? "default" : "ghost"}
                  className="h-8 px-3"
                  onClick={() => setPeriodUnit("year")}
                  aria-pressed={periodUnit === "year"}
                >
                  년
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={periodUnit === "month" ? "default" : "ghost"}
                  className="h-8 px-3"
                  onClick={() => setPeriodUnit("month")}
                  aria-pressed={periodUnit === "month"}
                >
                  월
                </Button>
              </div>
              <Input
                id="loanPeriod"
                type="number"
                className="max-w-[140px]"
                min={periodUnit === "year" ? 1 : 1}
                max={periodUnit === "year" ? 50 : 600}
                step={1}
                placeholder={periodUnit === "year" ? "예: 20" : "예: 240"}
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(e.target.value)}
              />
              <span className="text-muted-foreground text-sm whitespace-nowrap">
                {periodUnit === "year" ? "년" : "개월"}
              </span>
            </div>
            <p className="text-muted-foreground text-xs">
              {periodUnit === "year"
                ? "대출 상환 기간을 년으로 입력하세요 (1-50년)"
                : "대출 상환 기간을 개월 수로 입력하세요 (1-600개월)"}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="repaymentType">상환 방식</Label>
            <select
              id="repaymentType"
              className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
              value={repaymentType}
              onChange={(e) => setRepaymentType(e.target.value as RepaymentType)}
            >
              <option value="equal-payment">원리금균등상환</option>
              <option value="equal-principal">원금균등상환</option>
              <option value="graduated">체증식상환</option>
              <option value="bullet">만기일시상환</option>
            </select>
          </div>

          {repaymentType === "graduated" ? (
            <div className="space-y-2">
              <Label htmlFor="graduatedIncreaseRate">체증률 (연 %)</Label>
              <Input
                id="graduatedIncreaseRate"
                type="number"
                min={0}
                max={20}
                step="0.1"
                placeholder="예: 5"
                value={graduatedIncreaseRate}
                onChange={(e) => setGraduatedIncreaseRate(e.target.value)}
                aria-describedby="hint-graduated"
              />
              <GraduatedRepaymentGuide id="hint-graduated" />
            </div>
          ) : null}

          <div className="flex items-center gap-2">
            <Checkbox
              id="compareMode"
              checked={compareMode}
              onCheckedChange={(c) => {
                setCompareMode(c === true);
                if (!c) setCompareType("");
              }}
            />
            <Label htmlFor="compareMode" className="font-normal">
              다른 상환방식과 비교하기
            </Label>
          </div>

          {compareMode ? (
            <div className="space-y-2">
              <Label htmlFor="compareType">비교 방식</Label>
              <select
                id="compareType"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={compareType}
                onChange={(e) => setCompareType((e.target.value || "") as RepaymentType | "")}
              >
                <option value="">비교할 방식을 선택하세요</option>
                <option value="equal-payment" disabled={repaymentType === "equal-payment"}>
                  원리금균등상환
                </option>
                <option value="equal-principal" disabled={repaymentType === "equal-principal"}>
                  원금균등상환
                </option>
                <option value="graduated" disabled={repaymentType === "graduated"}>
                  체증식상환
                </option>
                <option value="bullet" disabled={repaymentType === "bullet"}>
                  만기일시상환
                </option>
              </select>
            </div>
          ) : null}

          <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600" onClick={performCalculation}>
            계산하기
          </Button>
        </CardContent>
      </Card>

      <Card ref={resultRef} tabIndex={-1} className="scroll-mt-24 outline-none">
        <CardHeader>
          <CardTitle className="text-xl">{compareResult ? "비교 결과" : "계산 결과"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <>
            <div className="grid gap-3 sm:grid-cols-1" role="list">
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">월 상환액</span>
                <span className="text-lg font-semibold tabular-nums">
                  {formatNumber(summary.monthly)}원
                  {summary.monthlyDiff != null ? (
                    <DiffSpan value={summary.monthlyDiff} />
                  ) : null}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">총 상환액</span>
                <span className="text-lg font-semibold tabular-nums">
                  {formatNumber(summary.totalPay)}원
                  {summary.totalPayDiff != null ? <DiffSpan value={summary.totalPayDiff} /> : null}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">총 이자액</span>
                <span className="text-lg font-semibold tabular-nums">
                  {formatNumber(summary.totalInt)}원
                  {summary.totalIntDiff != null ? <DiffSpan value={summary.totalIntDiff} /> : null}
                </span>
              </div>
            </div>

            <PaymentChart
              schedule={result.schedule}
              compareSchedule={compareResult?.schedule}
              labelPrimary={repaymentTypeLabels[repaymentType]}
              labelCompare={compareType ? repaymentTypeLabels[compareType as RepaymentType] : "비교"}
            />

            <div className="text-muted-foreground space-y-2 text-xs leading-relaxed">
              {compareResult ? (
                <p>
                  파란색 실선은 선택한 상환 방식, 주황색 점선은 비교 방식의 월상환액입니다. 빨간색 괄호는 더 많이 상환(불리), 초록색은 더 적게
                  상환(유리)을 뜻합니다.
                </p>
              ) : repaymentType !== "graduated" ? (
                <p>
                  월상환액은 상환원금과 이자의 합입니다. 원리금균등상환은 월상환액이 일정하고, 원금균등상환은 초기에 높고 점차 줄어듭니다.
                </p>
              ) : null}
              {repaymentType === "graduated" ? <GraduatedRepaymentGuide compact /> : null}
              {!result.schedule.length ? (
                <p>아직 계산 전입니다. 입력값을 채우고 계산하기를 누르면 결과와 차트가 갱신됩니다.</p>
              ) : null}
            </div>
          </>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-lg">상환 일정표</CardTitle>
          <ScheduleDownloadButtons data={exportData} />
        </CardHeader>
        <CardContent>
          <div
            className="max-h-[min(25.5rem,55vh)] overflow-auto rounded-md border"
            role="region"
            aria-label="상환 일정표. 약 10회차까지 보이며 나머지는 세로 스크롤로 확인할 수 있습니다."
          >
            <table className="w-full min-w-[520px] border-collapse text-sm" role="table" aria-label="상환 일정표">
              <thead className="bg-card sticky top-0 z-[1] shadow-[0_1px_0_0_var(--border)]">
                <tr className="bg-muted/50 border-b">
                  <th scope="col" className="bg-muted/50 p-2 text-left font-medium backdrop-blur-sm">
                    회차
                  </th>
                  <th scope="col" className="bg-muted/50 p-2 text-right font-medium backdrop-blur-sm">
                    상환원금
                  </th>
                  <th scope="col" className="bg-muted/50 p-2 text-right font-medium backdrop-blur-sm">
                    이자
                  </th>
                  <th scope="col" className="bg-muted/50 p-2 text-right font-medium backdrop-blur-sm">
                    월상환액
                  </th>
                  <th scope="col" className="bg-muted/50 p-2 text-right font-medium backdrop-blur-sm">
                    잔액
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.schedule.map((row) => (
                  <tr
                    key={row.month}
                    className="border-b transition-colors duration-150 ease-out odd:bg-background even:bg-muted/30 hover:bg-primary/10 dark:hover:bg-primary/20"
                  >
                    <td className="p-2">{row.month}회</td>
                    <td className="p-2 text-right tabular-nums">{formatNumber(row.principal)}원</td>
                    <td className="p-2 text-right tabular-nums">{formatNumber(row.interest)}원</td>
                    <td className="p-2 text-right tabular-nums">{formatNumber(row.payment)}원</td>
                    <td className="p-2 text-right tabular-nums">{formatNumber(row.balance)}원</td>
                  </tr>
                ))}
                {!result.schedule.length ? (
                  <tr>
                    <td colSpan={5} className="text-muted-foreground p-6 text-center text-sm">
                      계산 전입니다. 결과는 계산하기 버튼을 누르면 표시됩니다.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function GraduatedRepaymentGuide({ id, compact = false }: { id?: string; compact?: boolean }) {
  return (
    <div
      id={id}
      className={
        compact
          ? "text-muted-foreground space-y-1.5 text-xs leading-relaxed"
          : "border-border bg-muted/30 text-muted-foreground space-y-1.5 rounded-md border px-3 py-2.5 text-xs leading-relaxed"
      }
    >
      {!compact ? <p className="text-foreground font-medium">체증식 계산 방식 (본 계산기 기준)</p> : null}
      <ul className="list-disc space-y-1 pl-4">
        <li>
          같은 해 12개월은 월 상환액이 같고, 매년 체증률만큼 증가하는 계단식입니다. 매월 조금씩 복리로 오르는 방식은 아닙니다.
        </li>
        <li>월 상환액은 상환 시작 첫 달 기준입니다. 이후 회차는 상환 일정표에서 확인하세요.</li>
        <li>은행·타 계산기마다 체증 정의가 다를 수 있어 참고용으로 활용해 주세요.</li>
      </ul>
    </div>
  );
}

function DiffSpan({ value }: { value: number }) {
  const isPositive = value >= 0;
  const text = isPositive ? ` (+${formatNumber(Math.abs(value))}원)` : ` (${formatNumber(value)}원)`;
  return (
    <span className={isPositive ? "text-red-500 text-base font-semibold" : "text-emerald-600 text-base font-semibold"}>
      {text}
    </span>
  );
}
