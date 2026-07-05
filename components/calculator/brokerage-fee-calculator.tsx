"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { brokerageRateLinks } from "@/lib/brokerage-rate-links";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber, removeCommas } from "@/lib/loan-calculations";

type PropertyKind = "house" | "officetel" | "other";
type DealKind = "sale" | "lease";
type OfficetelKind = "residentialSmall" | "other";
type HouseAmountMode = "direct" | "depositMonthly";

interface BracketResult {
  rate: number;
  cap: number | null;
  rawFee: number;
  maxFee: number;
}

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function toPercent(rate: number): string {
  return `${(rate * 100).toFixed(3).replace(/\.?0+$/, "")}%`;
}

/** 월세가 있는 임대차: 거래금액 = 보증금 + 월세×100, 합이 5천만 원 미만이면 보증금 + 월세×70 */
function computeLeaseTransactionAmount(deposit: number, monthlyRent: number): number {
  if (monthlyRent <= 0) return deposit;
  const sum100 = deposit + monthlyRent * 100;
  if (sum100 < 50_000_000) {
    return deposit + monthlyRent * 70;
  }
  return sum100;
}

function applyCap(raw: number, cap: number | null): number {
  if (cap === null) return raw;
  return Math.min(raw, cap);
}

/** 주택 매매·교환 — 서울시 고시 요율 (2021.12.30 기준) */
function maxFeeHouseSale(amount: number): BracketResult {
  let rate: number;
  let cap: number | null;
  if (amount < 50_000_000) {
    rate = 0.006;
    cap = 250_000;
  } else if (amount < 200_000_000) {
    rate = 0.005;
    cap = 800_000;
  } else if (amount < 900_000_000) {
    rate = 0.004;
    cap = null;
  } else if (amount < 1_200_000_000) {
    rate = 0.005;
    cap = null;
  } else if (amount < 1_500_000_000) {
    rate = 0.006;
    cap = null;
  } else {
    rate = 0.007;
    cap = null;
  }
  const rawFee = amount * rate;
  const maxFee = applyCap(rawFee, cap);
  return { rate, cap, rawFee, maxFee };
}

/** 주택 임대차 등 — 서울시 고시 요율 */
function maxFeeHouseLease(amount: number): BracketResult {
  let rate: number;
  let cap: number | null;
  if (amount < 50_000_000) {
    rate = 0.005;
    cap = 200_000;
  } else if (amount < 100_000_000) {
    rate = 0.004;
    cap = 300_000;
  } else if (amount < 600_000_000) {
    rate = 0.003;
    cap = null;
  } else if (amount < 1_200_000_000) {
    rate = 0.004;
    cap = null;
  } else if (amount < 1_500_000_000) {
    rate = 0.005;
    cap = null;
  } else {
    rate = 0.006;
    cap = null;
  }
  const rawFee = amount * rate;
  const maxFee = applyCap(rawFee, cap);
  return { rate, cap, rawFee, maxFee };
}

function maxFeeOfficetel(deal: DealKind, kind: OfficetelKind): (amount: number) => BracketResult {
  return (amount: number) => {
    if (kind === "other") {
      const rate = 0.009;
      const rawFee = amount * rate;
      return { rate, cap: null, rawFee, maxFee: rawFee };
    }
    const rate = deal === "sale" ? 0.005 : 0.004;
    const rawFee = amount * rate;
    return { rate, cap: null, rawFee, maxFee: rawFee };
  };
}

function maxFeeOther(amount: number): BracketResult {
  const rate = 0.009;
  const rawFee = amount * rate;
  return { rate, cap: null, rawFee, maxFee: rawFee };
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

export function BrokerageFeeCalculator() {
  const [propertyKind, setPropertyKind] = React.useState<PropertyKind>("house");
  const [dealKind, setDealKind] = React.useState<DealKind>("sale");
  const [officetelKind, setOfficetelKind] = React.useState<OfficetelKind>("residentialSmall");
  const [houseAmountMode, setHouseAmountMode] = React.useState<HouseAmountMode>("direct");
  const [amountDisplay, setAmountDisplay] = React.useState("");
  const [depositDisplay, setDepositDisplay] = React.useState("");
  const [monthlyDisplay, setMonthlyDisplay] = React.useState("");
  const [result, setResult] = React.useState<{
    transactionAmount: number;
    bracket: BracketResult;
    label: string;
  } | null>(null);

  const isHouse = propertyKind === "house";
  const isOfficetel = propertyKind === "officetel";
  const showDealKind = isHouse || isOfficetel;
  const showHouseLeaseInputs = isHouse && dealKind === "lease";

  const onMoneyInputChange = (raw: string, setter: (value: string) => void) => {
    const num = raw.replace(/[^0-9]/g, "");
    setter(num ? addCommas(num) : "");
  };

  const performCalculation = () => {
    let transactionAmount = 0;
    let label = "거래금액";

    if (isHouse && dealKind === "lease" && houseAmountMode === "depositMonthly") {
      const deposit = parseFloat(removeCommas(depositDisplay)) || 0;
      const monthly = parseFloat(removeCommas(monthlyDisplay)) || 0;
      if (deposit <= 0 && monthly <= 0) {
        window.alert("보증금 또는 월세를 입력해주세요.");
        return;
      }
      transactionAmount = computeLeaseTransactionAmount(deposit, monthly);
      label = "환산 거래금액(보증금+월세 환산)";
    } else {
      transactionAmount = parseFloat(removeCommas(amountDisplay)) || 0;
      if (transactionAmount <= 0) {
        window.alert("거래금액을 올바르게 입력해주세요.");
        return;
      }
    }

    let bracket: BracketResult;

    if (isHouse) {
      bracket = dealKind === "sale" ? maxFeeHouseSale(transactionAmount) : maxFeeHouseLease(transactionAmount);
    } else if (isOfficetel) {
      bracket = maxFeeOfficetel(dealKind, officetelKind)(transactionAmount);
    } else {
      bracket = maxFeeOther(transactionAmount);
    }

    setResult({ transactionAmount, bracket, label });
  };

  React.useEffect(() => {
    if (!isHouse || dealKind !== "lease") {
      setHouseAmountMode("direct");
    }
  }, [isHouse, dealKind]);

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="brokerage-fee-calculator" className="scroll-mt-24">
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="propertyKind">부동산 구분</Label>
            <select
              id="propertyKind"
              className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
              value={propertyKind}
              onChange={(e) => setPropertyKind(e.target.value as PropertyKind)}
            >
              <option value="house">주택 (주택 부지·분양권 등 포함)</option>
              <option value="officetel">오피스텔</option>
              <option value="other">주택·오피스텔 외 (토지, 상가 등)</option>
            </select>
          </div>

          {showDealKind ? (
            <div className="space-y-2">
              <Label htmlFor="dealKind">거래 유형</Label>
              <select
                id="dealKind"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={dealKind}
                onChange={(e) => setDealKind(e.target.value as DealKind)}
              >
                <option value="sale">매매·교환</option>
                <option value="lease">임대차 등</option>
              </select>
            </div>
          ) : null}

          {isOfficetel ? (
            <div className="space-y-2">
              <Label htmlFor="officetelKind">오피스텔 세부</Label>
              <select
                id="officetelKind"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={officetelKind}
                onChange={(e) => setOfficetelKind(e.target.value as OfficetelKind)}
              >
                <option value="residentialSmall">전용 85㎡ 이하, 주방·화장실·욕실 등 주거 시설</option>
                <option value="other">그 외 (85㎡ 초과 또는 시설 미비 등)</option>
              </select>
            </div>
          ) : null}

          {showHouseLeaseInputs ? (
            <div className="space-y-3 rounded-lg border bg-muted/20 p-3">
              <p className="text-sm font-medium">임대차 거래금액 입력 방식</p>
              <div className="flex flex-wrap gap-3 text-sm">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="houseAmountMode"
                    className="accent-primary"
                    checked={houseAmountMode === "direct"}
                    onChange={() => setHouseAmountMode("direct")}
                  />
                  거래금액 직접 입력
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="houseAmountMode"
                    className="accent-primary"
                    checked={houseAmountMode === "depositMonthly"}
                    onChange={() => setHouseAmountMode("depositMonthly")}
                  />
                  보증금 + 월세 (환산 적용)
                </label>
              </div>
              {houseAmountMode === "depositMonthly" ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="deposit">보증금 (원)</Label>
                    <Input
                      id="deposit"
                      inputMode="numeric"
                      placeholder="예: 200,000,000"
                      value={depositDisplay}
                      onChange={(e) => onMoneyInputChange(e.target.value, setDepositDisplay)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyRent">월세 (원)</Label>
                    <Input
                      id="monthlyRent"
                      inputMode="numeric"
                      placeholder="월세 없으면 0"
                      value={monthlyDisplay}
                      onChange={(e) => onMoneyInputChange(e.target.value, setMonthlyDisplay)}
                    />
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    월세가 있는 경우 거래금액 = 보증금 + (월세 × 100)으로 계산하되, 그 합이 5천만 원 미만이면 보증금 + (월세 × 70)으로
                    다시 계산합니다.
                  </p>
                </>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="houseLeaseAmount">거래금액 (원)</Label>
                  <Input
                    id="houseLeaseAmount"
                    inputMode="numeric"
                    placeholder="예: 150,000,000"
                    value={amountDisplay}
                    onChange={(e) => onMoneyInputChange(e.target.value, setAmountDisplay)}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="transactionAmount">거래금액 (원)</Label>
              <Input
                id="transactionAmount"
                inputMode="numeric"
                placeholder="예: 500,000,000"
                value={amountDisplay}
                onChange={(e) => onMoneyInputChange(e.target.value, setAmountDisplay)}
              />
              <p className="text-muted-foreground text-xs">
                {isHouse && dealKind === "sale"
                  ? "분양권은 실제 납입금(대출 포함) + 프리미엄 합산액을 거래금액으로 입력하세요."
                  : isOfficetel && dealKind === "lease"
                    ? "오피스텔 임대차는 환산 거래금액을 직접 입력합니다. 월세가 있으면 보증금 + (월세 × 100)으로 계산하고, 합계가 5천만 원 미만이면 보증금 + (월세 × 70)으로 입력하세요."
                    : "합산하여 산정한 금액을 입력하세요."}
              </p>
            </div>
          )}

          <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600" onClick={performCalculation}>
            계산하기
          </Button>

          <p className="text-muted-foreground text-xs leading-relaxed">
            본 계산기는 서울특별시가 고시한 중개보수 상한 요율을 바탕으로 한 참고용입니다. 실제 중개수수료는 의뢰인과 개업공인중개사 간 협의로
            결정되며, 부가가치세는 별도입니다. 다른 지역·시점의 고시와 다를 수 있습니다.
          </p>
        </CardContent>
      </Card>

      <Card className="scroll-mt-24">
        <CardHeader>
          <CardTitle className="text-xl">계산 결과</CardTitle>
        </CardHeader>
        <CardContent>
          {result ? (
            <div className="grid gap-3" role="list">
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">{result.label}</span>
                <ResultAmountBlock amount={result.transactionAmount} className="text-lg font-semibold tabular-nums" />
              </div>
              <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">적용 상한 요율</span>
                <span className="text-lg font-semibold tabular-nums">{toPercent(result.bracket.rate)}</span>
              </div>
              {result.bracket.cap !== null ? (
                <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                  <span className="text-muted-foreground text-sm">해당 구간 요율 적용 금액 (요율 × 거래금액)</span>
                  <ResultAmountBlock amount={Math.round(result.bracket.rawFee)} className="text-lg font-semibold tabular-nums" />
                </div>
              ) : null}
              {result.bracket.cap !== null ? (
                <div className="flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                  <span className="text-muted-foreground text-sm">구간 한도액</span>
                  <span className="text-lg font-semibold tabular-nums">{formatNumber(result.bracket.cap)}원</span>
                </div>
              ) : null}
              <div className="bg-muted/40 flex flex-col gap-0.5 rounded-lg border p-3" role="listitem">
                <span className="text-muted-foreground text-sm">법정 최대 중개수수료 (상한)</span>
                <ResultAmountBlock amount={Math.round(result.bracket.maxFee)} className="text-2xl font-bold tabular-nums" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                실제 지급액은 상한 이내에서 당사자가 협의한 금액이며, 부가가치세는 별도입니다.
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">계산 전입니다. 조건을 선택하고 금액을 입력한 뒤 계산하기를 누르세요.</p>
          )}
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">서울특별시 부동산 중개보수 요율표</CardTitle>
          <p className="text-muted-foreground text-sm font-normal">
            주택 요율은 2021년 12월 30일 기준, 오피스텔·주택 외는 2015년 1월 6일 기준 고시를 반영했습니다.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="mb-2 text-sm font-semibold">1. 주택 — 매매·교환</p>
            <div className="overflow-auto rounded-md border">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th scope="col" className="p-2 text-left font-medium">
                      거래금액
                    </th>
                    <th scope="col" className="p-2 text-right font-medium">
                      상한 요율
                    </th>
                    <th scope="col" className="p-2 text-right font-medium">
                      한도액
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["5천만 원 미만", "0.6% (6/1,000)", "25만 원"],
                    ["5천만 원 이상 ~ 2억 원 미만", "0.5% (5/1,000)", "80만 원"],
                    ["2억 원 이상 ~ 9억 원 미만", "0.4% (4/1,000)", "한도 없음"],
                    ["9억 원 이상 ~ 12억 원 미만", "0.5% (5/1,000)", "한도 없음"],
                    ["12억 원 이상 ~ 15억 원 미만", "0.6% (6/1,000)", "한도 없음"],
                    ["15억 원 이상", "0.7% (7/1,000)", "한도 없음"],
                  ].map(([a, b, c]) => (
                    <tr
                      key={a}
                      className="border-b transition-colors duration-150 ease-out last:border-0 hover:bg-primary/10 dark:hover:bg-primary/20"
                    >
                      <td className="p-2">{a}</td>
                      <td className="p-2 text-right">{b}</td>
                      <td className="p-2 text-right">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold">2. 주택 — 임대차 등 (매매·교환 제외)</p>
            <div className="overflow-auto rounded-md border">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th scope="col" className="p-2 text-left font-medium">
                      거래금액
                    </th>
                    <th scope="col" className="p-2 text-right font-medium">
                      상한 요율
                    </th>
                    <th scope="col" className="p-2 text-right font-medium">
                      한도액
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["5천만 원 미만", "0.5% (5/1,000)", "20만 원"],
                    ["5천만 원 이상 ~ 1억 원 미만", "0.4% (4/1,000)", "30만 원"],
                    ["1억 원 이상 ~ 6억 원 미만", "0.3% (3/1,000)", "한도 없음"],
                    ["6억 원 이상 ~ 12억 원 미만", "0.4% (4/1,000)", "한도 없음"],
                    ["12억 원 이상 ~ 15억 원 미만", "0.5% (5/1,000)", "한도 없음"],
                    ["15억 원 이상", "0.6% (6/1,000)", "한도 없음"],
                  ].map(([a, b, c]) => (
                    <tr
                      key={a}
                      className="border-b transition-colors duration-150 ease-out last:border-0 hover:bg-primary/10 dark:hover:bg-primary/20"
                    >
                      <td className="p-2">{a}</td>
                      <td className="p-2 text-right">{b}</td>
                      <td className="p-2 text-right">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold">3. 오피스텔</p>
            <div className="overflow-auto rounded-md border">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th scope="col" className="p-2 text-left font-medium">
                      대상
                    </th>
                    <th scope="col" className="p-2 text-left font-medium">
                      거래 유형
                    </th>
                    <th scope="col" className="p-2 text-right font-medium">
                      상한 요율
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition-colors duration-150 ease-out hover:bg-primary/10 dark:hover:bg-primary/20">
                    <td className="p-2" rowSpan={2}>
                      전용 85㎡ 이하, 주방·화장실·욕실 등
                    </td>
                    <td className="p-2">매매·교환</td>
                    <td className="p-2 text-right">0.5% (5/1,000)</td>
                  </tr>
                  <tr className="border-b transition-colors duration-150 ease-out hover:bg-primary/10 dark:hover:bg-primary/20">
                    <td className="p-2">임대차 등</td>
                    <td className="p-2 text-right">0.4% (4/1,000)</td>
                  </tr>
                  <tr className="transition-colors duration-150 ease-out hover:bg-primary/10 dark:hover:bg-primary/20">
                    <td className="p-2">그 외 (85㎡ 초과 또는 시설 미비 등)</td>
                    <td className="p-2">매매·교환·임대차 등</td>
                    <td className="p-2 text-right">0.9% (9/1,000)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold">4. 주택·오피스텔 외 (토지, 상가 등)</p>
            <div className="overflow-auto rounded-md border">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th scope="col" className="p-2 text-left font-medium">
                      거래 유형
                    </th>
                    <th scope="col" className="p-2 text-right font-medium">
                      상한 요율
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="transition-colors duration-150 ease-out hover:bg-primary/10 dark:hover:bg-primary/20">
                    <td className="p-2">매매·교환·임대차 등</td>
                    <td className="p-2 text-right">거래금액의 0.9% (9/1,000)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
            <div className="from-primary/15 via-primary/8 bg-gradient-to-r to-transparent px-4 py-3 sm:px-5">
              <h3 className="text-primary text-base font-semibold tracking-tight">부동산 중개보수 적용기준</h3>
              <p className="text-muted-foreground mt-1 text-xs">협의·산정·게시 등 법령상 기준을 요약했습니다.</p>
            </div>
            <ol className="list-none space-y-3 p-4 sm:p-5">
              {[
                "중개보수는 거래당사자와 개업공인중개사가 협의하여 거래금액에 요율을 곱한 금액 범위에서 정하되, 법정 상한을 초과할 수 없습니다.",
                "지급 시기는 당사자 간 협약이 우선하며, 협약이 없으면 거래대금 지급이 완료된 때에 지급합니다.",
                "월세가 있는 임대차는 거래금액을 보증금 + (월세 × 100)으로 산정하되, 그 합이 5천만 원 미만이면 보증금 + (월세 × 70)으로 다시 산정합니다.",
                "건축물이 주거와 비주거에 복합된 경우 주거 전용면적 합이 2분의 1 이상이면 주택 요율, 미만이면 비주택 요율이 적용됩니다.",
                "분양권 등의 거래금액은 거래일까지 실제 납입한 금액(대출 포함)과 프리미엄을 합한 금액으로 합니다.",
                "부가가치세는 중개보수와 별개로 부과될 수 있습니다.",
                "주택·오피스텔 외 부동산은 법정 범위 안에서 중개보수 요율표를 게시해야 합니다.",
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
            요율표는 고시 내용을 사용자가 빠르게 대조할 수 있도록 정리한 것입니다. 용어·구간 해석은 관할 지자체 및 최신 고시를 확인하세요.
          </p>

          <div className="space-y-3 rounded-xl border p-4 sm:p-5">
            <h3 className="text-base font-semibold tracking-tight">지역별 공식 요율표 확인</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              본 서비스는 서울특별시 기준 요율표를 바탕으로 작성되었습니다. 정확한 적용 요율은 거래 대상 부동산 소재지 관할 지자체의 공식
              요율표(최신 고시)를 확인하세요.
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {brokerageRateLinks.map((item) => {
                const hasLink = item.href.trim().length > 0;
                return hasLink ? (
                  <Link
                    key={item.region}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-muted/70 flex items-center justify-between rounded-md border px-3 py-2 text-sm transition-colors"
                  >
                    <span>{item.region}</span>
                    <span className="text-muted-foreground text-xs">공식 사이트</span>
                  </Link>
                ) : (
                  <div
                    key={item.region}
                    className="bg-muted/25 flex items-center justify-between rounded-md border px-3 py-2 text-sm"
                    aria-label={`${item.region} 링크 준비중`}
                  >
                    <span>{item.region}</span>
                    <span className="text-muted-foreground text-xs">링크 준비중</span>
                  </div>
                );
              })}
            </div>
            <p className="text-muted-foreground text-xs">
              고시 개정 및 조례 변경으로 내용이 달라질 수 있으므로, 신고 전 반드시 해당 지자체 최신 공고를 확인하세요.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
