"use client";

import { ComprehensiveIncomeTaxCalculatorReference } from "@/components/calculator/reference";
import { CalculatorResultExportButtons } from "@/components/calculator/calculator-result-export-buttons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  computeBusinessIncome,
  computeComprehensiveIncomeTax,
  computeInterimEstimate,
  computeInterimNotice,
  emptyPenalties,
  withholdingFromServiceRevenue,
  type BookkeepingDuty,
  type BusinessInput,
  type ComprehensiveIncomeTaxResult,
  type InterimEstimateResult,
  type InterimNoticeResult,
  type NoFilingKind,
} from "@/lib/comprehensive-income-tax-calculations";
import {
  formatComprehensiveIncomeTaxResultText,
  formatInterimEstimateResultText,
  formatInterimNoticeResultText,
} from "@/lib/comprehensive-income-tax-result-text";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber, removeCommas } from "@/lib/loan-calculations";
import * as React from "react";

const selectClass =
  "border-input bg-background focus-visible:ring-ring h-10 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:ring-2";

type Mode = "income" | "base" | "interim-notice" | "interim-estimate";
type BusinessMethod = "amount" | "simple" | "standard";
type View =
  | { kind: "tax"; result: ComprehensiveIncomeTaxResult }
  | { kind: "notice"; result: InterimNoticeResult }
  | { kind: "estimate"; result: InterimEstimateResult };

function addCommas(value: string): string {
  const numValue = removeCommas(value);
  if (!numValue) return "";
  return new Intl.NumberFormat("ko-KR").format(parseInt(numValue, 10));
}

function addSignedCommas(value: string): string {
  const raw = removeCommas(value).replace(/[^\d-]/g, "");
  const negative = raw.startsWith("-");
  const digits = raw.replace(/-/g, "");
  if (!digits) return negative ? "-" : "";
  const formatted = new Intl.NumberFormat("ko-KR").format(parseInt(digits, 10));
  return negative ? `-${formatted}` : formatted;
}

function parseAmount(display: string): number {
  return parseInt(removeCommas(display), 10) || 0;
}

function parseSignedAmount(display: string): number {
  const n = parseInt(removeCommas(display), 10);
  return Number.isFinite(n) ? n : 0;
}

function parsePercent(value: string): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : 0;
}

function parseCount(value: string): number {
  const n = parseInt(value, 10);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}

function CountField({
  id,
  label,
  hint,
  value,
  onChange,
}: {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} inputMode="numeric" placeholder="0" value={value} onChange={(e) => onChange(e.target.value.replace(/[^\d]/g, ""))} />
      {hint ? <p className="text-muted-foreground text-xs leading-relaxed">{hint}</p> : null}
    </div>
  );
}

function FieldGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3 rounded-md border p-3">
      <p className="text-sm font-medium">{title}</p>
      {children}
    </div>
  );
}

function AmountField({
  id,
  label,
  hint,
  value,
  onChange,
  signed = false,
}: {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
  signed?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        inputMode="numeric"
        placeholder="0"
        value={value}
        onChange={(e) => onChange((signed ? addSignedCommas : addCommas)(e.target.value))}
      />
      {hint ? <p className="text-muted-foreground text-xs leading-relaxed">{hint}</p> : null}
    </div>
  );
}

export function ComprehensiveIncomeTaxCalculator() {
  const [mode, setMode] = React.useState<Mode>("income");
  const [directBase, setDirectBase] = React.useState("");
  const [interest, setInterest] = React.useState("");
  const [dividend, setDividend] = React.useState("");
  const [wage, setWage] = React.useState("");
  const [pension, setPension] = React.useState("");
  const [privatePension, setPrivatePension] = React.useState("");
  const [privateSeparate, setPrivateSeparate] = React.useState(false);
  const [businessMethod, setBusinessMethod] = React.useState<BusinessMethod>("simple");
  const [businessIncome, setBusinessIncome] = React.useState("");
  const [rentalIncome, setRentalIncome] = React.useState("");
  const [rentalCarry, setRentalCarry] = React.useState("");
  const [otherCarry, setOtherCarry] = React.useState("");
  const [pensionSaving, setPensionSaving] = React.useState("");
  const [retirementPension, setRetirementPension] = React.useState("");
  const [revenue, setRevenue] = React.useState("");
  const [simplePercent, setSimplePercent] = React.useState("");
  const [excessPercent, setExcessPercent] = React.useState("");
  const [personalSplit, setPersonalSplit] = React.useState(false);
  const [jobFund, setJobFund] = React.useState("");
  const [standardPercent, setStandardPercent] = React.useState("");
  const [majorExpenses, setMajorExpenses] = React.useState("");
  const [openingMajor, setOpeningMajor] = React.useState("");
  const [closingMajor, setClosingMajor] = React.useState("");
  const [duty, setDuty] = React.useState<BookkeepingDuty>("simple-book");
  const [selfOwned, setSelfOwned] = React.useState(false);
  const [selfExcluded, setSelfExcluded] = React.useState(false);
  const [disabledOperator, setDisabledOperator] = React.useState(false);
  const [otherMethod, setOtherMethod] = React.useState<"amount" | "ratio">("amount");
  const [otherIncome, setOtherIncome] = React.useState("");
  const [otherInclude, setOtherInclude] = React.useState(false);
  const [otherGross, setOtherGross] = React.useState("");
  const [otherPercent, setOtherPercent] = React.useState("");
  const [deductions, setDeductions] = React.useState("");
  const [includeSelf, setIncludeSelf] = React.useState(true);
  const [spouse, setSpouse] = React.useState(false);
  const [dependentCount, setDependentCount] = React.useState("");
  const [childCreditCount, setChildCreditCount] = React.useState("");
  const [standardCredit, setStandardCredit] = React.useState(false);
  const [sincereBusiness, setSincereBusiness] = React.useState(false);
  const [elderlyCount, setElderlyCount] = React.useState("");
  const [disabledCount, setDisabledCount] = React.useState("");
  const [womanDeduction, setWomanDeduction] = React.useState(false);
  const [singleParent, setSingleParent] = React.useState(false);
  const [credits, setCredits] = React.useState("");
  const [withholding, setWithholding] = React.useState("");
  const [interimPaid, setInterimPaid] = React.useState("");
  const [occasional, setOccasional] = React.useState("");
  const [usePenalties, setUsePenalties] = React.useState(false);
  const [noFiling, setNoFiling] = React.useState<NoFilingKind>("none");
  const [noFilingRevenue, setNoFilingRevenue] = React.useState("");
  const [underreported, setUnderreported] = React.useState("");
  const [unbooked, setUnbooked] = React.useState("");
  const [sincereMissing, setSincereMissing] = React.useState(false);
  const [lateUnpaid, setLateUnpaid] = React.useState("");
  const [lateDays, setLateDays] = React.useState("");

  const [priorInterim, setPriorInterim] = React.useState("");
  const [finalPayment, setFinalPayment] = React.useState("");
  const [additional, setAdditional] = React.useState("");
  const [lateAmended, setLateAmended] = React.useState("");
  const [refunded, setRefunded] = React.useState("");
  const [landPrepay, setLandPrepay] = React.useState("");
  const [periodIncome, setPeriodIncome] = React.useState("");
  const [lossCarry, setLossCarry] = React.useState("");
  const [estimateDeductions, setEstimateDeductions] = React.useState("");
  const [estimateSubtractions, setEstimateSubtractions] = React.useState("");
  const [noticeBase, setNoticeBase] = React.useState("");
  const [mustFile, setMustFile] = React.useState(false);

  const [view, setView] = React.useState<View | null>(null);
  const exportRef = React.useRef<HTMLDivElement>(null);

  function fillWithholding() {
    const detail = computeBusinessIncome(buildBusinessInput());
    const split = withholdingFromServiceRevenue(detail.revenue);
    setWithholding(addCommas(String(split.incomeTax)));
  }

  function buildBusinessInput(): BusinessInput {
    if (businessMethod === "amount") return { method: "amount", income: parseSignedAmount(businessIncome) };
    if (businessMethod === "simple") {
      return {
        method: "simple",
        revenue: parseAmount(revenue),
        simplePercent: parsePercent(simplePercent),
        excessSimplePercent: parsePercent(excessPercent),
        personalServiceSplit: personalSplit,
        jobStabilityFund: parseAmount(jobFund),
        selfOwned,
        selfRateExcluded: selfExcluded,
        disabledOperator,
      };
    }
    return {
      method: "standard",
      revenue: parseAmount(revenue),
      standardPercent: parsePercent(standardPercent),
      simplePercent: parsePercent(simplePercent),
      majorExpenses: parseAmount(majorExpenses),
      openingInventoryMajor: parseAmount(openingMajor),
      closingInventoryMajor: parseAmount(closingMajor),
      duty,
      multiplierPeriodId: "2020-2027",
      selfOwned,
      selfRateExcluded: selfExcluded,
    };
  }

  function performCalculation() {
    if (mode === "interim-notice") {
      setView({
        kind: "notice",
        result: computeInterimNotice({
          priorInterim: parseAmount(priorInterim),
          finalSelfPayment: parseAmount(finalPayment),
          additionalAssessment: parseAmount(additional),
          lateOrAmendedPayment: parseAmount(lateAmended),
          refund: parseAmount(refunded),
          landPrepayment: parseAmount(landPrepay),
        }),
      });
      return;
    }
    if (mode === "interim-estimate") {
      setView({
        kind: "estimate",
        result: computeInterimEstimate({
          periodIncome: parseAmount(periodIncome),
          lossCarryforward: parseAmount(lossCarry),
          incomeDeductions: parseAmount(estimateDeductions),
          year: "2023-2025",
          subtractions: parseAmount(estimateSubtractions),
          noticeBase: parseAmount(noticeBase),
          mustFileBecauseNoBase: mustFile,
        }),
      });
      return;
    }

    const business = buildBusinessInput();
    const businessDetail = computeBusinessIncome(business);
    const penalties = emptyPenalties();
    if (usePenalties) {
      penalties.noFiling = noFiling;
      penalties.noFilingRevenue = parseAmount(noFilingRevenue) || businessDetail.revenue;
      penalties.underreportedTax = parseAmount(underreported);
      penalties.unbookedIncome = parseAmount(unbooked);
      penalties.sincereFilingMissing = sincereMissing;
      penalties.sincereBusinessIncome = businessDetail.income;
      penalties.sincereBusinessRevenue = businessDetail.revenue || parseAmount(noFilingRevenue);
      penalties.lateUnpaidTax = parseAmount(lateUnpaid);
      penalties.lateDays = parseAmount(lateDays);
    }

    setView({
      kind: "tax",
      result: computeComprehensiveIncomeTax({
        year: "2023-2025",
        useDirectTaxBase: mode === "base",
        directTaxBase: parseAmount(directBase),
        interestIncome: parseAmount(interest),
        dividendIncome: parseAmount(dividend),
        wageIncome: parseAmount(wage),
        pensionIncome: parseAmount(pension),
        business,
        rentalIncome: parseSignedAmount(rentalIncome),
        rentalLossCarryforward: parseAmount(rentalCarry),
        otherLossCarryforward: parseAmount(otherCarry),
        other: {
          method: otherMethod,
          income: parseAmount(otherIncome),
          gross: parseAmount(otherGross),
          expensePercent: parsePercent(otherPercent),
          includeInAggregate: otherInclude,
        },
        privatePensionSeparate: privateSeparate,
        privatePensionAmount: parseAmount(privatePension),
        personal: {
          includeSelf,
          spouse,
          dependentCount: parseCount(dependentCount),
          elderlyCount: parseCount(elderlyCount),
          disabledCount: parseCount(disabledCount),
          woman: womanDeduction,
          singleParent,
        },
        childCreditCount: parseCount(childCreditCount),
        standardTaxCredit: standardCredit,
        sincereBusiness,
        pensionSaving: parseAmount(pensionSaving),
        retirementPension: parseAmount(retirementPension),
        incomeDeductions: parseAmount(deductions),
        taxCredits: parseAmount(credits),
        withholdingIncomeTax: parseAmount(withholding),
        interimPrepayment: parseAmount(interimPaid),
        occasionalAssessment: parseAmount(occasional),
        penalties,
      }),
    });
  }

  const exportText = () => {
    if (!view) return "";
    if (view.kind === "tax") return formatComprehensiveIncomeTaxResultText(view.result);
    if (view.kind === "notice") return formatInterimNoticeResultText(view.result);
    return formatInterimEstimateResultText(view.result);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Card id="comprehensive-income-tax-calculator" className="scroll-mt-24">
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="cit-mode">계산</Label>
            <select id="cit-mode" className={selectClass} value={mode} onChange={(e) => setMode(e.target.value as Mode)}>
              <option value="income">종합소득세</option>
              <option value="base">과세표준으로 산출세액</option>
              <option value="interim-notice">중간예납 고지세액</option>
              <option value="interim-estimate">중간예납 추계액</option>
            </select>
          </div>

          {mode === "base" ? (
            <AmountField id="cit-base" label="과세표준" value={directBase} onChange={setDirectBase} hint="30,000,000원이면 산출세액은 3,240,000원입니다." />
          ) : null}

          {mode === "income" ? (
            <>
              <FieldGroup title="금융소득">
                <AmountField id="cit-interest" label="이자소득금액" value={interest} onChange={setInterest} />
                <AmountField
                  id="cit-dividend"
                  label="배당소득금액"
                  value={dividend}
                  onChange={setDividend}
                  hint="원천징수된 일반 이자·배당(14%)입니다. 합계가 2천만 원 이하면 과세표준에 넣지 않고, 그 원천징수세액은 기납부세액에도 넣지 않습니다. 2천만 원을 넘으면 초과분만 넣고, 소득세법 제62조에 따라 1호(초과분과 다른 소득의 산출세액 + 2천만 원×14%)와 2호(금융소득 전체×14% + 다른 소득 산출세액) 중 큰 금액을 씁니다. 이때 금융소득 전체의 14%는 기납부세액에 넣습니다. 비영업대금 25%, 출자공동사업자 배당, 배당가산은 넣지 않습니다."
                />
              </FieldGroup>
              <FieldGroup title="사업·부동산임대">
              <div className="space-y-2">
                <Label htmlFor="cit-business-method">임대 외 사업소득</Label>
                <select
                  id="cit-business-method"
                  className={selectClass}
                  value={businessMethod}
                  onChange={(e) => setBusinessMethod(e.target.value as BusinessMethod)}
                >
                  <option value="amount">장부 소득금액</option>
                  <option value="simple">단순경비율 추계</option>
                  <option value="standard">기준경비율 추계</option>
                </select>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  장부로 기장했으면 장부 소득금액을 고르고, 결손은 마이너스로 넣습니다. 간편장부와 복식부기 구분은 기준경비율 추계에서 고릅니다. 부동산임대소득은 아래 칸에 따로 넣습니다.
                </p>
              </div>
              {businessMethod === "amount" ? (
                <AmountField
                  id="cit-business-income"
                  label="장부 소득금액"
                  value={businessIncome}
                  onChange={setBusinessIncome}
                  signed
                  hint="결손은 마이너스입니다. 추계는 결손을 0으로 봅니다."
                />
              ) : (
                <>
                  <AmountField id="cit-revenue" label="수입금액" value={revenue} onChange={setRevenue} />
                  <div className="space-y-2">
                    <Label htmlFor="cit-simple-rate">{businessMethod === "standard" ? "비교용 단순경비율(%)" : "단순경비율(%)"}</Label>
                    <Input id="cit-simple-rate" inputMode="decimal" placeholder="예: 75" value={simplePercent} onChange={(e) => setSimplePercent(e.target.value)} />
                  </div>
                </>
              )}
              {businessMethod === "simple" ? (
                <>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cit-split" checked={personalSplit} onCheckedChange={(v) => setPersonalSplit(v === true)} />
                    <Label htmlFor="cit-split" className="cursor-pointer font-normal">
                      인적용역, 4천만 원까지 기본율·초과분 별도 경비율
                    </Label>
                  </div>
                  {personalSplit ? (
                    <div className="space-y-2">
                      <Label htmlFor="cit-excess">4천만 원 초과분 단순경비율(%)</Label>
                      <Input id="cit-excess" inputMode="decimal" value={excessPercent} onChange={(e) => setExcessPercent(e.target.value)} />
                    </div>
                  ) : null}
                  <AmountField id="cit-job-fund" label="일자리 안정자금" value={jobFund} onChange={setJobFund} hint="단순경비율 소득 계산에서 수입금액에서 빼는 금액입니다." />
                  <div className="flex items-center gap-2">
                    <Checkbox id="cit-disabled" checked={disabledOperator} onCheckedChange={(v) => setDisabledOperator(v === true)} />
                    <Label htmlFor="cit-disabled" className="cursor-pointer font-normal">
                      장애인이 직접 경영
                    </Label>
                  </div>
                </>
              ) : null}
              {businessMethod === "standard" ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="cit-standard-rate">기준경비율(%)</Label>
                    <Input id="cit-standard-rate" inputMode="decimal" placeholder="예: 11.4" value={standardPercent} onChange={(e) => setStandardPercent(e.target.value)} />
                  </div>
                  <AmountField id="cit-major" label="당기 주요경비" value={majorExpenses} onChange={setMajorExpenses} hint="매입비용 + 임차료 + 인건비" />
                  <AmountField id="cit-open" label="기초재고에 포함된 주요경비" value={openingMajor} onChange={setOpeningMajor} />
                  <AmountField id="cit-close" label="기말재고에 포함된 주요경비" value={closingMajor} onChange={setClosingMajor} />
                  <div className="space-y-2">
                    <Label htmlFor="cit-duty">기장의무</Label>
                    <select id="cit-duty" className={selectClass} value={duty} onChange={(e) => setDuty(e.target.value as BookkeepingDuty)}>
                      <option value="simple-book">간편장부대상자 · 2.8배</option>
                      <option value="double-entry">복식부기의무자 · 3.4배, 기준경비율 1/2</option>
                    </select>
                  </div>
                </>
              ) : null}
              {businessMethod !== "amount" ? (
                <>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cit-self" checked={selfOwned} onCheckedChange={(v) => setSelfOwned(v === true)} />
                    <Label htmlFor="cit-self" className="cursor-pointer font-normal">
                      자가 사업장
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cit-self-excluded" checked={selfExcluded} onCheckedChange={(v) => setSelfExcluded(v === true)} />
                    <Label htmlFor="cit-self-excluded" className="cursor-pointer font-normal">
                      자가율을 적용하지 않는 업종
                    </Label>
                  </div>
                </>
              ) : null}

              <AmountField
                id="cit-rental"
                label="부동산임대소득금액"
                value={rentalIncome}
                onChange={setRentalIncome}
                signed
                hint="장부 소득금액입니다. 임대 결손과 임대 이월결손금은 다른 소득에서 빼지 않습니다. 성실신고확인은 부동산임대 수입을 서비스업 기준(직전 연도 5억 원)으로 보고, 다른 업종 수입과 합치지 않습니다."
              />
              <AmountField
                id="cit-rental-carry"
                label="부동산임대 이월결손금"
                value={rentalCarry}
                onChange={setRentalCarry}
                hint="올해 임대소득이 있을 때만 그 소득에서 뺍니다."
              />
              <AmountField
                id="cit-other-carry"
                label="이월결손금(임대 외)"
                value={otherCarry}
                onChange={setOtherCarry}
                hint="임대 외 사업소득에서 먼저 빼고, 남으면 다른 소득과 종합과세 금융소득에서 뺍니다."
              />
              </FieldGroup>

              <FieldGroup title="근로·연금·기타">
                <AmountField id="cit-wage" label="근로소득금액" value={wage} onChange={setWage} hint="연말정산이 끝난 근로소득금액을 넣습니다." />
                <AmountField id="cit-pension" label="연금소득금액" value={pension} onChange={setPension} hint="연말정산한 공적연금만 있으면 신고 대상이 아닙니다. 다른 신고 대상 소득과 함께 있을 때 합산합니다." />
                <AmountField
                  id="cit-private-pension"
                  label="사적연금 금액"
                  value={privatePension}
                  onChange={setPrivatePension}
                  hint="연 1,500만 원을 초과하면 종합소득에 합산하거나 15% 분리과세를 선택할 수 있습니다. 분리과세를 켜면 입력한 금액에 15%를 곱합니다."
                />
                <div className="flex items-center gap-2">
                  <Checkbox id="cit-private-separate" checked={privateSeparate} onCheckedChange={(v) => setPrivateSeparate(v === true)} />
                  <Label htmlFor="cit-private-separate" className="cursor-pointer font-normal">
                    사적연금 분리과세 15%
                  </Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cit-other-method">기타소득</Label>
                  <select
                    id="cit-other-method"
                    className={selectClass}
                    value={otherMethod}
                    onChange={(e) => setOtherMethod(e.target.value as "amount" | "ratio")}
                  >
                    <option value="amount">소득금액 직접 입력</option>
                    <option value="ratio">총지급액과 필요경비율</option>
                  </select>
                </div>
                {otherMethod === "amount" ? (
                  <AmountField id="cit-other" label="기타소득금액" value={otherIncome} onChange={setOtherIncome} />
                ) : (
                  <>
                    <AmountField id="cit-other-gross" label="기타소득 총지급액" value={otherGross} onChange={setOtherGross} />
                    <div className="space-y-2">
                      <Label htmlFor="cit-other-rate">필요경비율(%)</Label>
                      <Input id="cit-other-rate" inputMode="decimal" placeholder="강연료 예시 60" value={otherPercent} onChange={(e) => setOtherPercent(e.target.value)} />
                    </div>
                  </>
                )}
                <div className="flex items-center gap-2">
                  <Checkbox id="cit-other-include" checked={otherInclude} onCheckedChange={(v) => setOtherInclude(v === true)} />
                  <Label htmlFor="cit-other-include" className="cursor-pointer font-normal">
                    종합소득에 포함하기
                  </Label>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  연 300만 원 이하는 빼 둡니다. 이 칸을 켜면 그 금액도 종합소득에 넣습니다. 300만 원을 넘으면 항상 넣습니다.
                </p>
              </FieldGroup>

              <FieldGroup title="소득공제">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  기본공제는 1명당 150만 원입니다. 7세 이하 자녀도 부양가족 수에 넣습니다. 배우자·부양가족은 연간 소득금액 100만 원 이하일 때 넣습니다. 근로소득만 있으면 총급여 500만 원 이하입니다. 부양가족은 직계존속 60세 이상, 직계비속·입양자 20세 이하, 형제자매 20세 이하 또는 60세 이상입니다. 장애인·수급자·위탁아동은 나이 제한이 없습니다.
                </p>
                <div className="flex items-center gap-2">
                  <Checkbox id="cit-taxpayer" checked={includeSelf} onCheckedChange={(v) => setIncludeSelf(v === true)} />
                  <Label htmlFor="cit-taxpayer" className="cursor-pointer font-normal">본인</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="cit-spouse" checked={spouse} onCheckedChange={(v) => setSpouse(v === true)} />
                  <Label htmlFor="cit-spouse" className="cursor-pointer font-normal">배우자</Label>
                </div>
                <CountField id="cit-dependents" label="부양가족 수" value={dependentCount} onChange={setDependentCount} />
                <CountField id="cit-elderly" label="그중 70세 이상" value={elderlyCount} onChange={setElderlyCount} hint="1명당 추가 100만 원" />
                <CountField id="cit-disabled-family" label="그중 장애인" value={disabledCount} onChange={setDisabledCount} hint="1명당 추가 200만 원. 본인·배우자 포함" />
                <div className="flex items-center gap-2">
                  <Checkbox id="cit-woman" checked={womanDeduction} onCheckedChange={(v) => setWomanDeduction(v === true)} />
                  <Label htmlFor="cit-woman" className="cursor-pointer font-normal">부녀자 50만 원</Label>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">종합소득금액 3천만 원 이하이고, 배우자가 있거나 부양가족이 있는 세대주일 때 적용합니다. 한부모 공제와 겹치면 한부모만 적용합니다.</p>
                <div className="flex items-center gap-2">
                  <Checkbox id="cit-single-parent" checked={singleParent} onCheckedChange={(v) => setSingleParent(v === true)} />
                  <Label htmlFor="cit-single-parent" className="cursor-pointer font-normal">한부모 100만 원</Label>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">배우자가 없고 기본공제 대상 직계비속·입양자가 있을 때 적용합니다.</p>
                <AmountField id="cit-deduction" label="그 밖 소득공제" value={deductions} onChange={setDeductions} hint="연금보험료 등입니다. 기본공제와 추가공제는 위 인원으로 계산합니다. 표준세액공제를 켜면 특별소득공제는 넣지 않습니다." />
              </FieldGroup>
            </>
          ) : null}

          {mode === "income" || mode === "base" ? (
            <>
              <FieldGroup title="세액공제·감면">
                {mode === "income" ? (
                  <>
                    <CountField
                      id="cit-child-credit"
                      label="2016년생 이전 자녀·손자녀"
                      value={childCreditCount}
                      onChange={setChildCreditCount}
                      hint="2017년생은 2030년 귀속부터 넣습니다. 기본공제 대상만 해당하고, 부양가족 수를 넘기면 그 수로 맞춥니다. 1명 25만 원, 2명 55만 원, 3명부터는 55만 원에 1명당 40만 원을 더합니다."
                    />
                    <AmountField
                      id="cit-pension-saving"
                      label="연금저축 납입액"
                      value={pensionSaving}
                      onChange={setPensionSaving}
                      hint="600만 원까지 공제합니다. 넘는 금액은 600만 원으로 맞춥니다."
                    />
                    <AmountField
                      id="cit-retirement-pension"
                      label="퇴직연금 납입액"
                      value={retirementPension}
                      onChange={setRetirementPension}
                      hint="연금저축과 합쳐 900만 원까지입니다. 합산되는 종합소득금액이 4,500만 원 이하면 15%, 넘으면 12%입니다. 근로소득만 있고 총급여가 5,500만 원을 넘는 구간은 이 세율과 다를 수 있습니다."
                    />
                    <div className="flex items-center gap-2">
                      <Checkbox id="cit-standard-credit" checked={standardCredit} onCheckedChange={(v) => setStandardCredit(v === true)} />
                      <Label htmlFor="cit-standard-credit" className="cursor-pointer font-normal">표준세액공제</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="cit-sincere-business" checked={sincereBusiness} onCheckedChange={(v) => setSincereBusiness(v === true)} />
                      <Label htmlFor="cit-sincere-business" className="cursor-pointer font-normal">성실사업자</Label>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      특별소득공제, 특별세액공제, 월세 세액공제를 신청하지 않을 때 표준세액공제를 켭니다. 근로소득이 있으면 13만 원, 없으면 7만 원입니다. 근로소득이 없고 사업용계좌 신고 등 성실사업자 요건을 갖추면 성실사업자를 켜고, 그때는 12만 원입니다.
                    </p>
                  </>
                ) : null}
                <AmountField
                  id="cit-credit"
                  label="그 밖 세액공제·감면"
                  value={credits}
                  onChange={setCredits}
                  hint="보험료, 의료비, 교육비, 기부금, 월세, 감면처럼 영수증이 있는 항목의 합계입니다. 자녀세액공제, 표준세액공제, 연금계좌세액공제는 위에서 계산합니다. 표준세액공제를 켰으면 특별세액공제와 월세 세액공제는 넣지 않습니다."
                />
              </FieldGroup>
              <FieldGroup title="기납부·가산세">
              <AmountField
                id="cit-withholding"
                label="원천징수세액(소득세)"
                value={withholding}
                onChange={setWithholding}
                hint="인적용역 3.3% 중 소득세는 3%입니다. 지방소득세 0.3%는 여기 넣지 않습니다. 이자·배당이 2천만 원을 넘을 때만 그 14% 원천징수세액을 포함합니다."
              />
              {mode === "income" && businessMethod !== "amount" ? (
                <Button type="button" variant="outline" onClick={fillWithholding}>
                  수입금액의 3%를 원천징수세액에 넣기
                </Button>
              ) : null}
              <AmountField id="cit-interim-paid" label="중간예납세액" value={interimPaid} onChange={setInterimPaid} />
              <AmountField id="cit-occasional" label="수시부과세액" value={occasional} onChange={setOccasional} />
              <div className="flex items-center gap-2">
                <Checkbox id="cit-penalty-on" checked={usePenalties} onCheckedChange={(v) => setUsePenalties(v === true)} />
                <Label htmlFor="cit-penalty-on" className="cursor-pointer font-normal">
                  가산세 계산
                </Label>
              </div>
              {usePenalties ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="cit-nofiling">무신고</Label>
                    <select id="cit-nofiling" className={selectClass} value={noFiling} onChange={(e) => setNoFiling(e.target.value as NoFilingKind)}>
                      <option value="none">없음</option>
                      <option value="general">일반 20%</option>
                      <option value="double-entry">복식부기, 20%와 수입금액 0.07% 중 큰 금액</option>
                      <option value="fraud">부정 40%</option>
                      <option value="fraud-double">부정 복식부기, 40%와 수입금액 0.14% 중 큰 금액</option>
                      <option value="fraud-international">국제거래 부정 60%</option>
                      <option value="fraud-international-double">국제거래 부정 복식부기, 60%와 수입금액 0.14% 중 큰 금액</option>
                    </select>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      무신고납부세액은 세액공제 후 금액으로 둡니다. 장부 불성실·과소신고와 겹치면 큰 금액만 적용하고, 같으면 무신고·과소신고만 적용합니다.
                    </p>
                  </div>
                  <AmountField id="cit-nofiling-revenue" label="무신고 수입금액" value={noFilingRevenue} onChange={setNoFilingRevenue} />
                  <AmountField id="cit-under" label="과소신고납부세액" value={underreported} onChange={setUnderreported} hint="요율 10%" />
                  <AmountField id="cit-unbooked" label="무기장·미달기장 소득금액" value={unbooked} onChange={setUnbooked} hint="산출세액 × (이 금액 ÷ 종합소득금액) × 20%" />
                  <div className="flex items-center gap-2">
                    <Checkbox id="cit-sincere" checked={sincereMissing} onCheckedChange={(v) => setSincereMissing(v === true)} />
                    <Label htmlFor="cit-sincere" className="cursor-pointer font-normal">
                      성실신고확인서 미제출 (2018년 귀속부터 위 가산세에 더함)
                    </Label>
                  </div>
                  <AmountField id="cit-late-tax" label="미납·미달납부세액" value={lateUnpaid} onChange={setLateUnpaid} />
                  <AmountField id="cit-late-days" label="미납 일수" value={lateDays} onChange={setLateDays} hint="2022년 2월 16일 이후 1일당 0.022%(2.2/10,000)" />
                </>
              ) : null}
              </FieldGroup>
            </>
          ) : null}

          {mode === "interim-notice" ? (
            <>
              <AmountField id="cit-prior" label="전년도 중간예납세액" hint="2024년 11월에 낸 중간예납세액" value={priorInterim} onChange={setPriorInterim} />
              <AmountField id="cit-final" label="확정신고 자진납부세액" hint="2025년 5~6월 확정신고 때 낸 세액" value={finalPayment} onChange={setFinalPayment} />
              <AmountField id="cit-add" label="추가납부세액(가산세 포함)" hint="소득세법 제85조" value={additional} onChange={setAdditional} />
              <AmountField id="cit-late-pay" label="기한 후·수정신고 추가 자진납부세액" value={lateAmended} onChange={setLateAmended} />
              <AmountField id="cit-refunded" label="환급세액" value={refunded} onChange={setRefunded} />
              <AmountField id="cit-land" label="중간예납 기간 토지 등 매매차익 예정신고 납부세액" value={landPrepay} onChange={setLandPrepay} />
            </>
          ) : null}

          {mode === "interim-estimate" ? (
            <>
              <AmountField id="cit-period" label="중간예납 기간 종합소득금액" value={periodIncome} onChange={setPeriodIncome} />
              <AmountField id="cit-loss" label="이월결손금" value={lossCarry} onChange={setLossCarry} />
              <AmountField id="cit-est-deduction" label="종합소득공제" value={estimateDeductions} onChange={setEstimateDeductions} />
              <AmountField
                id="cit-sub"
                label="6월 30일까지 공제·감면, 토지 등 예정신고 산출세액, 수시부과, 원천징수 합계"
                value={estimateSubtractions}
                onChange={setEstimateSubtractions}
              />
              <AmountField id="cit-notice-base" label="중간예납기준액" value={noticeBase} onChange={setNoticeBase} hint="추계액이 이 금액의 30%에 미달하면 신고·납부할 수 있습니다." />
              <div className="flex items-center gap-2">
                <Checkbox id="cit-must" checked={mustFile} onCheckedChange={(v) => setMustFile(v === true)} />
                <Label htmlFor="cit-must" className="cursor-pointer font-normal">
                  기준액이 없는 복식부기의무자이고 상반기 사업 실적이 있음
                </Label>
              </div>
            </>
          ) : null}

          <Button type="button" className="w-full" onClick={performCalculation}>
            계산하기
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">계산 결과</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!view ? (
            <p className="text-muted-foreground text-sm leading-relaxed">
              소득금액 또는 과세표준을 입력한 뒤 계산하기를 누르면 산출세액과 납부·환급세액이 표시됩니다.
            </p>
          ) : (
            <div ref={exportRef} className="bg-background space-y-4 rounded-lg p-3">
              <div className="border-border/80 border-b pb-2">
                <p className="text-sm font-semibold">종합소득세 계산기 · 계산 결과</p>
                <p className="text-muted-foreground text-xs">withustools.com · 참고용</p>
              </div>
              {view.kind === "tax" ? <TaxResult result={view.result} /> : null}
              {view.kind === "notice" ? <NoticeResult result={view.result} /> : null}
              {view.kind === "estimate" ? <EstimateResult result={view.result} mustFile={mustFile} /> : null}
              <CalculatorResultExportButtons
                disabled={!view}
                getText={exportText}
                captureRef={exportRef}
                filenameBase="comprehensive-income-tax-calculator-result"
              />
            </div>
          )}
        </CardContent>
      </Card>

      <ComprehensiveIncomeTaxCalculatorReference />
    </div>
  );
}

function ResultAmountBlock({
  amount,
  className,
  rightAlign,
}: {
  amount: number;
  className?: string;
  rightAlign?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-0.5${rightAlign ? " items-end text-right" : ""}`}>
      <span className={className}>{formatNumber(amount)}원</span>
      <span className="text-muted-foreground text-xs font-normal leading-relaxed">{formatAmountKoreanWon(amount)}</span>
    </div>
  );
}

function AmountLine({ label, amount, emphasize }: { label: string; amount: number; emphasize?: boolean }) {
  return (
    <div className="flex justify-between gap-4">
      <span className={emphasize ? "" : "text-muted-foreground"}>{label}</span>
      <span className={`tabular-nums${emphasize ? " text-primary" : ""}`}>
        {emphasize ? "−" : ""}
        {formatNumber(amount)}원
      </span>
    </div>
  );
}

function TaxResult({ result }: { result: ComprehensiveIncomeTaxResult }) {
  const pay = result.nationalNet >= 0;
  return (
    <div className="space-y-4 text-sm">
      {!result.useDirectTaxBase ? (
        <div className="space-y-2">
          <p className="font-medium">소득금액</p>
          <AmountLine label="임대 외 사업소득" amount={result.business.income} />
          {result.losses.rentalIncome !== 0 || result.losses.rentalCarryUsed > 0 ? (
            <AmountLine label="부동산임대소득" amount={result.losses.rentalIncome} />
          ) : null}
          {result.losses.rentalCarryUsed > 0 ? <AmountLine label="임대 이월결손금 공제" amount={result.losses.rentalCarryUsed} emphasize /> : null}
          {result.losses.otherCarryUsed > 0 ? <AmountLine label="이월결손금 공제" amount={result.losses.otherCarryUsed} emphasize /> : null}
          {result.losses.rentalIncome < 0 ? (
            <p className="text-muted-foreground text-xs leading-relaxed">부동산임대 결손은 다른 소득에서 빼지 않습니다.</p>
          ) : null}
          {result.business.lines.map((line) => (
            <p key={line} className="text-muted-foreground text-xs leading-relaxed">{line}</p>
          ))}
          {result.otherIncomeSeparated ? (
            <p className="text-muted-foreground text-xs leading-relaxed">
              기타소득 {formatNumber(result.otherIncome)}원은 300만 원 이하라 종합소득에 넣지 않았습니다.
            </p>
          ) : result.otherIncome > 0 ? (
            <AmountLine label="기타소득금액" amount={result.otherIncome} />
          ) : null}
          <div className="flex justify-between gap-4 border-t pt-2 font-medium">
            <span>종합소득금액</span>
            <ResultAmountBlock amount={result.comprehensiveIncome} className="font-semibold tabular-nums" rightAlign />
          </div>
        </div>
      ) : null}

      <div className="space-y-2 border-t pt-4">
        <p className="font-medium">과세표준 산출</p>
        {!result.useDirectTaxBase && result.financial.excluded > 0 ? (
          <AmountLine label="합산제외 금융소득" amount={result.financial.excluded} emphasize />
        ) : null}
        {!result.useDirectTaxBase ? <AmountLine label="인적공제" amount={result.personal.total} emphasize /> : null}
        {!result.useDirectTaxBase ? <AmountLine label="소득공제" amount={result.incomeDeductions} emphasize /> : null}
        <div className="flex justify-between gap-4 border-t pt-2 font-medium">
          <span>= 과세표준</span>
          <ResultAmountBlock amount={result.calculated.taxBase} className="font-semibold tabular-nums" rightAlign />
        </div>
      </div>

      <div className="space-y-2 border-t pt-4">
        <p className="text-muted-foreground text-xs">
          {result.financial.compared
            ? `1호 ${formatNumber(result.financial.method1)}원 · 2호 ${formatNumber(result.financial.method2)}원 중 큰 금액`
            : `${formatNumber(result.calculated.taxBase)} × ${result.calculated.rate * 100}% − ${formatNumber(result.calculated.progressiveDeduction)}`}
        </p>
        <div className="flex justify-between gap-4">
          <span className="text-muted-foreground">산출세액</span>
          <span className="tabular-nums">{formatNumber(result.calculated.tax)}원</span>
        </div>
      {result.financial.compared ? (
        <p className="text-muted-foreground py-2 text-xs leading-relaxed">
          1호는 초과분과 다른 소득의 산출세액 {formatNumber(result.financial.method1Progressive)}원에 2천만 원×14%인{" "}
          {formatNumber(result.financial.method1Flat)}원을 더한 금액입니다. 2호는 금융소득 전체×14%인{" "}
          {formatNumber(result.financial.method2Financial)}원에 다른 소득 산출세액 {formatNumber(result.financial.method2Other)}원을
          더한 금액입니다. 금융소득 전체의 14% {formatNumber(result.financial.method2Financial)}원은 기납부세액에 넣습니다.
        </p>
      ) : null}
      {!result.financial.compared && result.financial.excluded > 0 ? (
        <p className="text-muted-foreground py-2 text-xs leading-relaxed">
          이자·배당 합계가 2천만 원 이하라 과세표준에 넣지 않았습니다. 그 원천징수세액은 기납부세액에 넣지 않습니다.
        </p>
      ) : null}
        {result.childTaxCredit > 0 ? <AmountLine label="자녀세액공제" amount={result.childTaxCredit} emphasize /> : null}
        {result.standardTaxCredit > 0 ? <AmountLine label="표준세액공제" amount={result.standardTaxCredit} emphasize /> : null}
        {result.pensionAccountCredit > 0 ? (
          <>
            <AmountLine label="연금계좌세액공제" amount={result.pensionAccountCredit} emphasize />
            <p className="text-muted-foreground text-xs">
              공제 대상 납입액 {formatNumber(result.pensionContributionUsed)}원 × {result.pensionCreditRate * 100}%
            </p>
          </>
        ) : null}
        {result.enteredTaxCredits > 0 ? <AmountLine label="그 밖 세액공제·감면" amount={result.enteredTaxCredits} emphasize /> : null}
        <div className="flex justify-between gap-4 border-t pt-2 font-medium">
          <span>세액공제·감면</span>
          <span className="tabular-nums">{formatNumber(result.taxCredits)}원</span>
        </div>
        <AmountLine label="가산세" amount={result.penalties.total} />
        {result.penalties.groupedLabel ? <p className="text-muted-foreground text-xs">{result.penalties.groupedLabel}</p> : null}
        <AmountLine label="기납부세액" amount={result.prepaidTotal} emphasize />
        {result.privatePensionSeparateTax > 0 ? <AmountLine label="사적연금 분리과세" amount={result.privatePensionSeparateTax} /> : null}
      </div>

      <div className="bg-primary/5 border-primary/20 rounded-lg border p-4">
        <div className="flex justify-between gap-4">
          <span className="text-sm font-medium">{pay ? "납부할 세액" : "환급할 세액"}</span>
          <ResultAmountBlock amount={Math.abs(result.nationalNet)} className="text-lg font-bold tabular-nums" rightAlign />
        </div>
      </div>
    </div>
  );
}

function NoticeResult({ result }: { result: InterimNoticeResult }) {
  return (
    <div className="space-y-4 text-sm">
      <div className="space-y-2">
        <AmountLine label="중간예납기준액" amount={result.base} />
        <div className="flex justify-between gap-4 border-t pt-2 font-medium">
          <span>중간예납세액</span>
          <ResultAmountBlock amount={result.tax} className="font-semibold tabular-nums" rightAlign />
        </div>
      </div>
      {result.belowMinimum ? (
        <div className="border-primary/30 bg-primary/5 rounded-lg border p-4">
          <p className="text-sm font-medium">50만 원 미만 — 소액부징수</p>
        </div>
      ) : (
        <div className="bg-primary/5 border-primary/20 rounded-lg border p-4">
          <div className="flex justify-between gap-4">
            <span className="text-sm font-medium">중간예납세액</span>
            <ResultAmountBlock amount={result.tax} className="text-lg font-bold tabular-nums" rightAlign />
          </div>
          {result.installment ? (
            <p className="text-muted-foreground mt-2 text-xs">
              분납 가능액 {formatNumber(result.installment.deferrable)}원 · 2026년 11월 30일까지{" "}
              {formatNumber(result.installment.dueByNovember30)}원. 2천만 원 초과는 세액의 50% 이하를 10원 단위로 버릴 수 있습니다. 분납 납부기한은 2027년 2월 1일입니다.
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}

function EstimateResult({ result, mustFile }: { result: InterimEstimateResult; mustFile: boolean }) {
  return (
    <div className="space-y-4 text-sm">
      <div className="space-y-2">
        <AmountLine label="과세표준" amount={result.taxBase} />
        <AmountLine label="산출세액" amount={result.calculatedTax} />
        <AmountLine label="기준액의 30%" amount={result.thirtyPercentOfBase} />
      </div>
      {result.underThirtyPercentOfBase ? (
        <p className="text-muted-foreground py-2 text-xs leading-relaxed">추계액이 중간예납기준액의 30%에 미달해 신고·납부할 수 있습니다.</p>
      ) : null}
      {result.belowMinimum ? (
        <p className="text-muted-foreground py-2 text-xs leading-relaxed">
          50만 원 미만이면 납부 대상이 아닙니다. 추계액 신고서를 제출해야 고지세액을 취소할 수 있습니다.
        </p>
      ) : null}
      {mustFile ? (
        <p className="text-muted-foreground py-2 text-xs leading-relaxed">
          중간예납기준액이 없는 복식부기의무자가 상반기 사업 실적이 있으면 신고·납부해야 합니다.
        </p>
      ) : null}
      <div className="bg-primary/5 border-primary/20 rounded-lg border p-4">
        <div className="flex justify-between gap-4">
          <span className="text-sm font-medium">중간예납추계액</span>
          <ResultAmountBlock amount={result.estimate} className="text-lg font-bold tabular-nums" rightAlign />
        </div>
        {result.installment ? (
          <p className="text-muted-foreground mt-2 text-xs">
            분납 가능액 {formatNumber(result.installment.deferrable)}원 · 11월 30일까지 {formatNumber(result.installment.dueByNovember30)}원
          </p>
        ) : null}
      </div>
    </div>
  );
}
