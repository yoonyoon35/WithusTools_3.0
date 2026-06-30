"use client";

import Link from "next/link";
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
  ltvReferenceRows,
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

function LtvReferenceTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: [string, string];
  rows: readonly { condition: string; ltv: string; note?: string }[];
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
              <td className="px-3 py-2.5 tabular-nums">{row.ltv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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

      <LtvCalculatorReferenceCard />
    </div>
  );
}

function LtvCalculatorReferenceCard() {
  const formulaRows = [
    { condition: "LTV(%)", ltv: "(선순위 설정액 + 대출금) ÷ 담보 인정 가격 × 100" },
    { condition: "① 적용 LTV", ltv: "규제지역·주택 보유·생애최초 조건에 따른 한도(%)" },
    { condition: "② 설정 가능 총액", ltv: "담보 인정 가격 × 적용 LTV" },
    { condition: "③ 신규 대출 가능액", ltv: "② − 선순위 설정액" },
    { condition: "④ 최종(6억 캡 적용 시)", ltv: "min(③, 6억 원)" },
  ] as const;

  const exampleRows = [
    { condition: "담보 인정 가격", ltv: "4억 원" },
    { condition: "적용 LTV", ltv: "70%" },
    { condition: "선순위 설정액", ltv: "5,000만 원" },
    { condition: "설정 가능 총액 (②)", ltv: "2억 8,000만 원" },
    { condition: "신규 가능액 (③)", ltv: "2억 3,000만 원" },
    { condition: "6억 캡", ltv: "미적용(③ < 6억)" },
  ] as const;

  const excludedRows = [
    { condition: "DSR·DTI·스트레스 DSR", ltv: "소득·부채 기준 한도" },
    { condition: "고가주택·구간별 규제", ltv: "담보 가격대별 추가 LTV 제한" },
    { condition: "대출 목적", ltv: "구입 vs 갈아타기·추가대출 등 목적별 상이" },
    { condition: "정책금융", ltv: "디딤돌·보금자리 등 별도 LTV·한도" },
    { condition: "전세·깡통전세", ltv: "전세 보증 등 다른 LTV 규정" },
    { condition: "담보가 산정", ltv: "KB·감정·매매가 중 금융기관별 인정" },
  ] as const;

  return (
    <Card className="scroll-mt-24 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-xl">LTV 기준표·참고</CardTitle>
        <p className="text-muted-foreground text-sm font-normal">
          LTV(%) = (선순위 설정액 + 대출금) ÷ 담보 인정 가격 × 100. 아래는 본 계산기 산출 순서와 일반적인 한도를 요약한
          참고용입니다.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <section className="space-y-2">
          <p className="text-sm font-semibold">1. LTV 산출 공식·순서</p>
          <LtvReferenceTable
            caption="LTV 산출 공식 및 계산 순서"
            headers={["항목", "내용"]}
            rows={formulaRows}
          />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">2. 계산 예시 (참고)</p>
          <p className="text-muted-foreground text-xs">비규제지역 · 무주택(일반) · LTV 70% · 6억 캡 적용 가정</p>
          <LtvReferenceTable caption="LTV 대출 가능액 계산 예시" headers={["항목", "값"]} rows={exampleRows} />
          <p className="text-muted-foreground text-xs leading-relaxed">
            담보 10억·LTV 70%·선순위 없음이면 ③은 7억 원이지만, 6억 캡을 켜면 최종 가능액은 6억 원으로 줄어듭니다.
          </p>
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">3. 구분별 LTV 한도 (참고)</p>
          <LtvReferenceTable caption="구분별 LTV 한도(참고)" headers={["구분", "LTV 한도"]} rows={ltvReferenceRows} />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">4. 본 계산기에 포함되지 않는 항목</p>
          <LtvReferenceTable caption="LTV 계산기 미포함 항목" headers={["항목", "설명"]} rows={excludedRows} />
          <p className="text-muted-foreground text-xs leading-relaxed">
            규제지역 여부는 조정대상지역·투기과열지구 등 금융위·지자체 공지를 확인해 입력하세요.{" "}
            <Link
              href="/guide/multi-homeowner-loan-regulations-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              다주택자 대출 규제 가이드
            </Link>
            를 함께 참고할 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">5. 흔한 오해</p>
          <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              “LTV 70%니까 집값의 70%까지 빌릴 수 있다”만 보고{" "}
              <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
                DSR
              </Link>
              ·
              <Link href="/guide/stress-dsr-explained" className="text-primary ml-1 underline-offset-4 hover:underline">
                스트레스 DSR
              </Link>
              을 확인하지 않는 경우가 많습니다. LTV·DSR·DTI 중 <strong className="text-foreground font-medium">가장 낮은 한도</strong>
              가 실제 승인 한도에 가깝습니다.
            </li>
            <li>
              생애최초 LTV 완화는 체크만으로 적용되지 않습니다. 본인·배우자 무주택·분양권 이력 등{" "}
              <Link
                href="/guide/first-time-homebuyer-benefits-2026"
                className="text-primary underline-offset-4 hover:underline"
              >
                생애최초 요건
              </Link>
              을 금융기관 심사에서 별도 확인합니다.
            </li>
            <li>
              은행권 주담대 LTV와{" "}
              <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary underline-offset-4 hover:underline">
                디딤돌·보금자리
              </Link>
              등 정책상품 LTV·최대 한도(예: 2억·2.4억)는 다릅니다. 본 계산기는 은행권 주담대 간이 모델입니다.
            </li>
          </ul>
        </section>

        <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="from-primary/15 via-primary/8 bg-gradient-to-r to-transparent px-4 py-3 sm:px-5">
            <h3 className="text-primary text-base font-semibold tracking-tight">LTV 산정 시 참고사항</h3>
            <p className="text-muted-foreground mt-1 text-xs">본 계산기에 반영된 범위와 한계를 요약했습니다.</p>
          </div>
          <ol className="list-none space-y-3 p-4 sm:p-5">
            {[
              "담보 가격은 감정가·KB시세 등 금융기관이 인정하는 담보 가치를 원 단위로 입력합니다.",
              "선순위 설정액은 기존 근저당·선순위 채권이 LTV 한도에서 차감되는 금액입니다.",
              "생애최초 LTV 완화는 무주택자·요건 충족 시에만 적용됩니다. 실제 인정은 금융기관 심사에 따릅니다.",
              "규제지역·다주택·6·27 대책 등 정책 변경에 따라 LTV 한도는 달라질 수 있습니다.",
              "6억 원 캡은 은행권 주담대 최대 한도 참고값이며, 제2금융권·특례 상품은 별도입니다.",
              "고가주택·투기과열지구·조정대상지역 세부 규정, DSR·DTI·스트레스 DSR은 본 화면에 포함되지 않습니다.",
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
          기준표는 가이드·정책 공지를 바탕으로 사용자가 빠르게 대조할 수 있도록 정리한 참고용입니다. 실제 승인 한도는 신청
          금융기관에서 확인해야 합니다.
        </p>

        <p className="flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/guide/ltv-dti-dsr-comparison" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            LTV·DTI·DSR 비교
          </Link>
          <Link
            href="/guide/first-time-homebuyer-benefits-2026"
            className="text-primary text-sm font-medium underline-offset-4 hover:underline"
          >
            생애최초 혜택
          </Link>
          <Link
            href="/guide/multi-homeowner-loan-regulations-guide"
            className="text-primary text-sm font-medium underline-offset-4 hover:underline"
          >
            다주택자 대출 규제
          </Link>
          <Link href="/guide/stress-dsr-explained" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            스트레스 DSR 설명
          </Link>
          <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            보금자리론 vs 디딤돌
          </Link>
          <Link href="/guide/dsr-40-mortgage-limit" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            DSR 40%와 대출 한도
          </Link>
          <Link
            href="/guide/mortgage-loan-application-documents"
            className="text-primary text-sm font-medium underline-offset-4 hover:underline"
          >
            주담대 서류·심사
          </Link>
          <Link href="/dsr-calculator" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          <Link href="/dti-calculator" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            DTI 계산기
          </Link>
          <Link href="/loan-calculator" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
