"use client";

import { HousingBondCalculatorReference } from "@/components/calculator/reference";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoneyValue, ResultRow } from "@/components/calculator/calculator-result-rows";
import { CalculatorResultExportButtons } from "@/components/calculator/calculator-result-export-buttons";
import {
  BOND_SAMPLE_DISCOUNT_RATES,
  bondAcquisitionLabels,
  bondPropertyKindLabels,
  bondRegionHints,
  bondRegionLabels,
  computeDiscountBurden,
  computeHousingBond,
  formatHousingBondResultText,
  formatRatePerThousand,
  type BondAcquisition,
  type BondPropertyKind,
  type BondRegion,
} from "@/lib/housing-bond-calculations";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { removeCommas } from "@/lib/loan-calculations";

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function parseAmountDisplay(display: string): number {
  const n = parseInt(removeCommas(display), 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function parsePercent(value: string): number {
  const n = parseFloat(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function ToggleGroup<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly { value: T; label: string }[];
  onChange: (next: T) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="bg-muted flex w-full flex-col rounded-lg p-0.5 sm:flex-row" role="group" aria-label={label}>
        {options.map((option) => (
          <Button
            key={option.value}
            type="button"
            size="sm"
            variant={value === option.value ? "default" : "ghost"}
            className="h-auto min-h-9 flex-1 px-3 py-1.5 whitespace-normal"
            onClick={() => onChange(option.value)}
            aria-pressed={value === option.value}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

function AmountHint({ amount }: { amount: number }) {
  if (amount <= 0) return null;
  return <p className="text-muted-foreground text-xs">{formatAmountKoreanWon(amount)}</p>;
}

export function HousingBondCalculator() {
  const exportRef = React.useRef<HTMLDivElement>(null);
  const [acquisition, setAcquisition] = React.useState<BondAcquisition>("paid");
  const [propertyKind, setPropertyKind] = React.useState<BondPropertyKind>("housing");
  const [region, setRegion] = React.useState<BondRegion>("metro");
  const [standardValueDisplay, setStandardValueDisplay] = React.useState("");
  const [sharePercent, setSharePercent] = React.useState("100");
  const [withMortgage, setWithMortgage] = React.useState(false);
  const [mortgageDisplay, setMortgageDisplay] = React.useState("");
  const [discountRate, setDiscountRate] = React.useState("");
  const [hasCalculated, setHasCalculated] = React.useState(false);

  const standardValueWon = parseAmountDisplay(standardValueDisplay);
  const mortgageAmountWon = parseAmountDisplay(mortgageDisplay);
  const shareValue = parsePercent(sharePercent);
  const discountRateValue = parsePercent(discountRate);
  const canSubmit = standardValueWon > 0 && shareValue > 0 && shareValue <= 100;

  const result = React.useMemo(() => {
    if (!hasCalculated || !canSubmit) return null;
    return computeHousingBond({
      acquisition,
      propertyKind,
      region,
      standardValueWon,
      sharePercent: shareValue,
      withMortgage,
      mortgageAmountWon,
    });
  }, [
    hasCalculated,
    canSubmit,
    acquisition,
    propertyKind,
    region,
    standardValueWon,
    shareValue,
    withMortgage,
    mortgageAmountWon,
  ]);

  const exportText = React.useMemo(() => {
    if (!result) return "";
    return formatHousingBondResultText({
      result,
      discountRatePercent: discountRateValue > 0 ? discountRateValue : null,
    });
  }, [result, discountRateValue]);

  const discountRates = React.useMemo(() => {
    const rates: number[] = [...BOND_SAMPLE_DISCOUNT_RATES];
    if (discountRateValue > 0 && !rates.includes(discountRateValue)) rates.unshift(discountRateValue);
    return rates;
  }, [discountRateValue]);

  const markDirty = () => setHasCalculated(false);

  const onMoneyChange = (raw: string, setter: (value: string) => void) => {
    const num = raw.replace(/[^0-9]/g, "");
    setter(num ? addCommas(num) : "");
    markDirty();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="housing-bond-calculator" className="scroll-mt-24">
        <CardContent className="space-y-4 pt-6">
          <ToggleGroup<BondAcquisition>
            label="등기 유형"
            value={acquisition}
            options={(Object.keys(bondAcquisitionLabels) as BondAcquisition[]).map((key) => ({
              value: key,
              label: bondAcquisitionLabels[key],
            }))}
            onChange={(next) => {
              setAcquisition(next);
              markDirty();
            }}
          />

          {acquisition === "paid" ? (
            <div className="space-y-2">
              <Label htmlFor="bond-kind">부동산 종류</Label>
              <select
                id="bond-kind"
                className="border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2"
                value={propertyKind}
                onChange={(e) => {
                  setPropertyKind(e.target.value as BondPropertyKind);
                  markDirty();
                }}
              >
                {(Object.keys(bondPropertyKindLabels) as BondPropertyKind[]).map((key) => (
                  <option key={key} value={key}>
                    {bondPropertyKindLabels[key]}
                  </option>
                ))}
              </select>
              <p className="text-muted-foreground text-xs">
                오피스텔·상가·복합건물은 「주택·토지 외」로 선택합니다. 상속·증여는 종류와 관계없이 같은 표를 씁니다.
              </p>
            </div>
          ) : null}

          <ToggleGroup<BondRegion>
            label="부동산 소재지"
            value={region}
            options={(Object.keys(bondRegionLabels) as BondRegion[]).map((key) => ({
              value: key,
              label: bondRegionLabels[key],
            }))}
            onChange={(next) => {
              setRegion(next);
              markDirty();
            }}
          />
          <p className="text-muted-foreground -mt-2 text-xs">{bondRegionHints[region]}</p>

          <div className="space-y-2">
            <Label htmlFor="bond-standard-value">시가표준액 (원)</Label>
            <Input
              id="bond-standard-value"
              inputMode="numeric"
              placeholder="예: 300,000,000"
              value={standardValueDisplay}
              onChange={(e) => onMoneyChange(e.target.value, setStandardValueDisplay)}
            />
            <AmountHint amount={standardValueWon} />
            <p className="text-muted-foreground text-xs leading-relaxed">
              매매가가 아니라 지방세 시가표준액(아파트는 공동주택가격, 토지는 개별공시지가 등)입니다. 등기 접수일 기준이며,
              공시가 없는 신규 분양 공동주택은 취득가격(분양가)을 입력하세요.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bond-share">취득 지분 (%)</Label>
            <Input
              id="bond-share"
              type="number"
              min={0.01}
              max={100}
              step="any"
              placeholder="100"
              value={sharePercent}
              onChange={(e) => {
                setSharePercent(e.target.value);
                markDirty();
              }}
              className="max-w-[160px]"
            />
            <p className="text-muted-foreground text-xs leading-relaxed">
              공동명의는 각자 지분율을 곱한 시가표준액 기준으로 사람마다 따로 계산합니다. 단독 명의면 100입니다.
            </p>
          </div>

          <div className="space-y-3 rounded-lg border bg-muted/20 p-3">
            <label className="flex cursor-pointer items-start gap-2 text-sm">
              <input
                type="checkbox"
                className="mt-1 size-4"
                checked={withMortgage}
                onChange={(e) => {
                  setWithMortgage(e.target.checked);
                  markDirty();
                }}
              />
              <span>
                <span className="font-medium">근저당권 설정(대출) 함께 계산</span>
                <span className="text-muted-foreground block text-xs">
                  채권최고액이 2천만 원 이상이면 설정금액의 10/1,000을 매입합니다(상한 10억 원).
                </span>
              </span>
            </label>
            {withMortgage ? (
              <div className="space-y-2">
                <Label htmlFor="bond-mortgage">채권최고액 (원)</Label>
                <Input
                  id="bond-mortgage"
                  inputMode="numeric"
                  placeholder="예: 360,000,000"
                  value={mortgageDisplay}
                  onChange={(e) => onMoneyChange(e.target.value, setMortgageDisplay)}
                />
                <AmountHint amount={mortgageAmountWon} />
                <p className="text-muted-foreground text-xs">
                  통상 대출 원금의 120~130%로 설정됩니다. 중소기업의 부동산담보대출 등 매입 제외 사유는 반영하지 않습니다.
                </p>
              </div>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bond-discount">할인율 (%, 선택)</Label>
            <Input
              id="bond-discount"
              type="number"
              min={0}
              max={100}
              step="0.1"
              placeholder="예: 7.5"
              value={discountRate}
              onChange={(e) => {
                setDiscountRate(e.target.value);
              }}
              className="max-w-[160px]"
            />
            <p className="text-muted-foreground text-xs leading-relaxed">
              채권을 즉시 매도할 때 은행이 적용하는 할인율입니다. 매일 달라지므로 당일 금융기관에서 확인한 값을 입력하세요.
              비우면 5·7·10% 가정값으로 비교합니다.
            </p>
          </div>

          <Button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600"
            disabled={!canSubmit}
            onClick={() => setHasCalculated(true)}
          >
            채권 매입금액 계산하기
          </Button>

          <p className="text-muted-foreground text-xs leading-relaxed">
            법령 구간표(주택도시기금법 시행령 별표)를 적용한 참고용 계산이며, 실제 매입금액은 등기 접수일의 시가표준액과
            법무사·금융기관 확인에 따릅니다.
          </p>
        </CardContent>
      </Card>

      <Card className="scroll-mt-24 outline-none" tabIndex={-1}>
        <CardHeader>
          <CardTitle className="text-xl">계산 결과</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div ref={exportRef} className="bg-background space-y-4 rounded-lg p-3">
            <div className="border-border/80 border-b pb-2">
              <p className="text-sm font-semibold">국민주택채권 계산기 · 계산 결과</p>
              <p className="text-muted-foreground text-xs">withustools.com · 참고용</p>
            </div>

            {result ? (
              <>
                <div className="rounded-lg border border-blue-500/40 bg-blue-500/10 p-4" role="status" aria-live="polite">
                  <p className="text-muted-foreground text-sm">국민주택채권 매입금액 합계</p>
                  <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight">
                    {new Intl.NumberFormat("ko-KR").format(result.totalAmount)}
                    <span className="text-lg font-semibold">원</span>
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">{formatAmountKoreanWon(result.totalAmount)}</p>
                  {result.mortgage ? (
                    <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                      소유권 이전과 근저당 설정을 각각 매입하는 것으로 합산했습니다. 동시에 등기할 때의 합산·중복 처리 방식은
                      법무사에게 확인하세요.
                    </p>
                  ) : null}
                </div>

                <div>
                  <p className="mb-1 text-sm font-semibold">
                    {acquisition === "paid" ? "소유권 이전 등기" : "상속·증여 등 취득 등기"}
                  </p>
                  {result.transfer.applicable && result.transfer.ratePerThousand != null ? (
                    <dl className="divide-y text-sm">
                      <ResultRow label="기준 시가표준액(지분 반영)">
                        <MoneyValue amount={result.transfer.baseWon} />
                      </ResultRow>
                      <ResultRow label="적용 구간">{result.transfer.tierLabel}</ResultRow>
                      <ResultRow label="적용 매입률">{formatRatePerThousand(result.transfer.ratePerThousand)}</ResultRow>
                      <ResultRow label="매입금액(1만 원 단위)">
                        <MoneyValue amount={result.transfer.amount} />
                      </ResultRow>
                    </dl>
                  ) : (
                    <p className="text-muted-foreground rounded-md border border-dashed p-3 text-sm">
                      {result.transfer.reason}
                    </p>
                  )}
                </div>

                {result.mortgage ? (
                  <div>
                    <p className="mb-1 text-sm font-semibold">근저당권 설정 등기</p>
                    {result.mortgage.applicable ? (
                      <dl className="divide-y text-sm">
                        <ResultRow label="채권최고액">
                          <MoneyValue amount={result.mortgage.settingAmountWon} />
                        </ResultRow>
                        <ResultRow label="적용 매입률">10/1,000 (1%)</ResultRow>
                        <ResultRow label={result.mortgage.capped ? "매입금액(10억 원 상한)" : "매입금액(1만 원 단위)"}>
                          <MoneyValue amount={result.mortgage.amount} />
                        </ResultRow>
                      </dl>
                    ) : (
                      <p className="text-muted-foreground rounded-md border border-dashed p-3 text-sm">
                        {result.mortgage.reason}
                      </p>
                    )}
                  </div>
                ) : null}

                {result.totalAmount > 0 ? (
                  <div>
                    <p className="mb-1 text-sm font-semibold">즉시 매도 시 실제 부담(할인 손실)</p>
                    <dl className="divide-y text-sm">
                      {discountRates.map((rate) => (
                        <ResultRow
                          key={rate}
                          label={
                            rate === discountRateValue
                              ? `입력한 할인율 ${rate}%`
                              : `할인율 ${rate}% 가정`
                          }
                        >
                          <MoneyValue amount={computeDiscountBurden(result.totalAmount, rate)} />
                        </ResultRow>
                      ))}
                    </dl>
                    <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                      채권을 만기까지 보유하지 않고 매입 당일 되팔면, 매입금액과 매도 대금의 차이(할인 손실)만 비용이 됩니다.
                      5·7·10%는 비교용 가정값이며 실제 할인율은 은행·날짜마다 다릅니다.
                    </p>
                  </div>
                ) : null}
              </>
            ) : (
              <p className="text-muted-foreground text-sm">
                등기 유형·소재지·시가표준액을 입력한 뒤 계산하기를 누르면 결과가 나타납니다.
              </p>
            )}
          </div>

          <div className="border-border/60 border-t pt-4">
            <CalculatorResultExportButtons
              disabled={!result}
              getText={() => exportText}
              captureRef={exportRef}
              filenameBase="housing-bond-calculator-result"
            />
          </div>

          <p className="text-muted-foreground text-xs leading-relaxed">
            등기 비용 전체(취득세·등록면허세·법무사 보수)는{" "}
            <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              취득세 계산기
            </Link>
            와{" "}
            <Link
              href="/guide/home-purchase-additional-costs-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              주택 구입 부대비용 가이드
            </Link>
            에서 함께 확인하세요.
          </p>
        </CardContent>
      </Card>

      <HousingBondCalculatorReference />
    </div>
  );
}
