import {
  BASIC_DEDUCTION,
  BASIC_TAX_BRACKETS,
  getGeneralLongTermDeductionRate,
  getOneHomeHoldingDeductionRate,
  getOneHomeResidenceDeductionRate,
  HIGH_PRICE_HOME_THRESHOLD,
  LOCAL_INCOME_TAX_RATE,
  toPercent,
} from "@/lib/capital-gains-tax-calculations";
import { formatNumber } from "@/lib/loan-calculations";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

function formatBracketLabel(maxBase: number): string {
  if (!Number.isFinite(maxBase)) return "초과";
  if (maxBase >= 1_000_000_000) return `${maxBase / 100_000_000}억 원 이하`;
  if (maxBase >= 100_000_000) return `${maxBase / 100_000_000}억 원 이하`;
  return `${maxBase / 10_000}만 원 이하`;
}

const exampleRows = [
  ["가정", "주택 · 양도가 8억 · 취득가 5억 · 필요경비 1,000만 · 보유 5년"],
  ["양도차익", "8억 − 5억 − 1,000만 = 2억 9,000만 원"],
  ["장특공(표1, 5년)", "2억 9,000만 × 10% = 2,900만 원 공제"],
  ["양도소득금액", "2억 6,100만 원"],
  ["과세표준", "2억 6,100만 − 250만 = 2억 5,850만 원"],
  ["산출세액+지방소득세", "누진세율 적용 후 합산(참고)"],
] as const;

const includedRows = [
  ["자산 유형", "주택·분양권·조합원입주권·비사업용 토지·주택 외"],
  ["양도차익", "양도가액 − 취득가액 − 필요경비"],
  ["비과세·고가 안분", "1세1주택 비과세·12억 초과 안분"],
  ["장기보유특별공제", "표1(일반)·표2(1세1주택·거주)"],
  ["세율", "기본 누진·단기·분양권·중과·비사업용 토지"],
] as const;

const excludedRows = [
  ["확정신고·다건 양도", "합산·안분 별도"],
  ["감면소득", "농지·가업 등 별도"],
  ["미등기 양도", "별도 세율·요건"],
  ["1세1주택 비과세 세부", "거주·조정지역 등 요건 확인 필요"],
  ["양도시기 판단", "잔금일·등기일 등 사실관계별"],
] as const;

const assetSpecialRows = [
  ["주택", "1세1주택 비과세·표1/표2 장특공", "기본 누진·단기·조정지역 다주택 중과"],
  ["분양권", "장특공·1세1주택 비과세 미적용", "1년 미만 70%, 1년 이상 60%(다주택 중과 미적용)"],
  ["조합원입주권", "인가 전 종전주택분만 표2(각 최대 24%p)·12억 안분", "기본 누진(인가 후 입주권분은 장특공 없음)"],
  ["비사업용 토지", "표1 장특공(최대 30%)", "기본 누진 + 10%p 중과"],
  ["주택 외 부동산", "표1 장특공", "기본 누진·단기(1년 미만 50%, 1~2년 40%)"],
] as const;

const notes = [
  "자산 유형·양도가·취득가·필요경비·보유·거주 기간을 입력하면 양도소득세·지방소득세를 산출합니다.",
  "1세대 1주택 비과세는 실지거래가 합계 12억 원 이하·2년 보유·거주 등 요건이 필요합니다.",
  "조정대상지역 다주택 중과(2026.5.10~) 시 장기보유특별공제가 배제될 수 있습니다.",
  "분양권·조합원입주권은 주택과 다른 세율·장특공 규정이 적용됩니다.",
  "확정신고·다건 양도·감면소득 등은 본 계산기에 미반영일 수 있습니다.",
] as const;

export function CapitalGainsTaxCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="양도소득세 산정 참고"
      summary="양도차익 → 비과세·장특공 → 과세표준 → 세액 순으로 산출합니다. 아래는 본 계산기 산식과 국세청 신고서 산출 순서를 요약한 참고용입니다."
      footer="기준표는 국세청 양도소득세 신고서 산출 순서를 바탕으로 사용자가 빠르게 대조할 수 있도록 정리한 참고용입니다. 양도시기·비과세 요건은 홈택스·세무사 확인을 권장합니다."
    >
      <CalculatorReferenceSection
        number={1}
        title="본 계산기 산출 공식·순서"
        footnote="국세청 양도소득세 신고서 산출 순서를 기준으로, 양도차익 → 비과세·장특공 → 과세표준 → 세액 순으로 계산합니다."
      >
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
              계산 단계
            </caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="w-12 p-2 text-left font-medium">
                  단계
                </th>
                <th scope="col" className="w-36 p-2 text-left font-medium">
                  항목
                </th>
                <th scope="col" className="p-2 text-left font-medium">
                  산식·적용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">①</td>
                <td className="p-2 align-top font-medium">양도차익</td>
                <td className="p-2 align-top">양도가액 − 취득가액 − 필요경비</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">②</td>
                <td className="p-2 align-top font-medium whitespace-nowrap">
                  비과세·고가 안분
                </td>
                <td className="p-2 align-top">
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>
                      1세1주택·{formatNumber(HIGH_PRICE_HOME_THRESHOLD)}원 이하·2년 보유·거주 등 →{" "}
                      <strong className="text-foreground">비과세</strong>
                    </li>
                    <li>
                      12억 초과 → 과세대상 = 양도차익 × (양도가 − 12억) ÷ 양도가
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">③</td>
                <td className="p-2 align-top font-medium">장기보유특별공제</td>
                <td className="p-2 align-top">
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>
                      표1(일반): 3년~ 연 2%p, 최대 30% (비사업용 토지 포함)
                    </li>
                    <li>
                      표2(1세1주택·거주 2년~): 보유·거주 각 최대 40%, 합산 최대 80%
                    </li>
                    <li>조정지역 다주택 중과 재시행 후 → 장특공 배제</li>
                  </ul>
                  <p className="text-muted-foreground mt-2 text-xs">
                    자산별 적용은 아래 「자산별 특례」·「장기보유특별공제」 표를 참고하세요.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-top font-medium">④</td>
                <td className="p-2 align-top font-medium whitespace-nowrap">
                  과세표준·세액
                </td>
                <td className="p-2 align-top">
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>양도소득금액 = 과세대상 양도차익 − 장특공</li>
                    <li>
                      과세표준 = 양도소득금액 − 기본공제 {formatNumber(BASIC_DEDUCTION)}원
                    </li>
                    <li>
                      산출세액 = max(기본누진·단기·분양권·미등기·중과·비사업용토지)
                    </li>
                    <li>
                      지방소득세 = 산출세액 × {toPercent(LOCAL_INCOME_TAX_RATE)}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CalculatorReferenceSection>

      <CalculatorReferenceSection
        number={2}
        title="계산 예시 (참고)"
        subtitle="주택 · 양도가 8억 · 취득가 5억 · 필요경비 1,000만 · 보유 5년 가정"
      >
        <CalculatorReferenceTable
          caption="주택 양도소득세 계산 예시"
          headers={["항목", "내용"]}
          rows={exampleRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={3} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="본 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable
          caption="본 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>


      <CalculatorReferenceSection number={4} title="법령·세율·요율 기준표">
        <p className="text-muted-foreground text-xs font-medium">자산별 특례</p>
        <CalculatorReferenceTable
          caption="자산별 비과세·장특공·세율"
          headers={["자산", "비과세·장특공", "세율·중과"]}
          rows={assetSpecialRows}
          minWidth="min-w-[640px]"
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">기본 누진세율(소득세법 §55①, 2023~)</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <caption className="sr-only">양도소득세 기본 누진세율</caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="p-2 text-left font-medium">
                  과세표준
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  세율
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  누진공제
                </th>
              </tr>
            </thead>
            <tbody>
              {BASIC_TAX_BRACKETS.map((b) => (
                <tr key={b.maxBase} className="border-b last:border-b-0">
                  <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                  <td className="p-2 text-right">{toPercent(b.rate)}</td>
                  <td className="p-2 text-right">
                    {b.progressiveDeduction > 0 ? `${formatNumber(b.progressiveDeduction)}원` : "없음"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground mt-4 text-xs font-medium">장기보유특별공제(소득세법 §95②)</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="sr-only">장기보유특별공제율</caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="p-2 text-left font-medium">
                  보유·거주
                </th>
                <th scope="col" className="p-2 text-left font-medium">
                  표1(일반)
                </th>
                <th scope="col" className="p-2 text-left font-medium">
                  표2(1세대1주택·거주2년~)
                </th>
              </tr>
            </thead>
            <tbody>
              {[3, 5, 10, 15].map((years) => (
                <tr key={years} className="border-b last:border-b-0">
                  <td className="p-2">{years}년</td>
                  <td className="p-2">{toPercent(getGeneralLongTermDeductionRate(years))}</td>
                  <td className="p-2">
                    보유 {toPercent(getOneHomeHoldingDeductionRate(years))}
                    {years >= 2 && ` + 거주 ${toPercent(getOneHomeResidenceDeductionRate(years))}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 rounded-md border p-3 text-xs leading-relaxed">
          <p className="text-foreground font-medium">적용요건·참고사항</p>
          <ol className="text-muted-foreground mt-2 list-decimal space-y-1 pl-4">
            <li>
              양도시기는 원칙적으로 <strong>대금청산일(잔금일)</strong>입니다. 등기가 먼저면 등기접수일이
              양도시기가 될 수 있습니다.
            </li>
            <li>
              보유·거주 기간은 <strong>취득일·양도일</strong>로 산출합니다(1년 미만 끝수 버림). 장특공·단기세율
              판정에 사용됩니다.
            </li>
            <li>
              1세대 1주택 비과세는 실지거래가 합계{" "}
              <strong>{formatNumber(HIGH_PRICE_HOME_THRESHOLD)}원 이하</strong>, 2년 이상 보유, 조정지역 취득 시
              2년 거주 등 요건이 필요합니다.
            </li>
            <li>
              조정대상지역 다주택: 2026.5.10~ 기본세율+20%p(2주택)·+30%p(3주택+) 중과, 장특공 배제. 2026.5.9까지
              양도·2년 보유는 한시 배제.
            </li>
            <li>
              비사업용 토지: 기본세율 + 10%p 중과. 보유 3년 이상이면 표1 장기보유특별공제(최대 30%) 적용.
            </li>
            <li>
              분양권: 보유 1년 미만 70%, 1년 이상 60% 단일세율. 장특공·1세1주택 비과세·다주택 중과
              미적용(주택 수 산정에는 포함될 수 있음).
            </li>
            <li>
              조합원입주권: 관리처분인가일 기준 종전주택·입주권 차익 분리. 1세1주택 12억 안분·표2
              장특공(인가 전분).
            </li>
            <li>단기: 주택 1년 미만 70%, 1~2년 60%. 일반 자산 50%·40%.</li>
            <li>확정신고·다건 양도·감면소득 등은 본 계산기에 미반영. 홈택스·세무사 확인 권장.</li>
          </ol>
        </div>
      </CalculatorReferenceSection>
      <CalculatorReferenceNotes number={5} notes={notes} />
    </CalculatorReferenceCard>

  );
}
