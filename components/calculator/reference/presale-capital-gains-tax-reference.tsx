import Link from "next/link";
import { BASIC_DEDUCTION, LOCAL_INCOME_TAX_RATE, toPercent } from "@/lib/capital-gains-tax-calculations";
import { formatNumber } from "@/lib/loan-calculations";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

const formulaRows = [
  ["① 양도차익", "양도가액 − 취득가액 − 필요경비"],
  ["② 장기보유특별공제·비과세", "분양권은 미적용"],
  ["③ 과세표준", "양도차익 − 기본공제(250만 원)"],
  ["④ 산출세액", "과세표준 × 전용세율(1년 미만 70% · 1년 이상 60%)"],
  ["⑤ 지방소득세", "산출세액 × 10%"],
  ["⑥ 합계", "산출세액 + 지방소득세"],
] as const;

const exampleRows = [
  ["가정", "분양권 · 양도가 15억 · 취득가 10억 · 필요경비 0 · 보유 1년 이상"],
  ["양도차익", "5억 원"],
  ["기본공제", `${formatNumber(BASIC_DEDUCTION)}원`],
  ["과세표준", "4억 9,750만 원"],
  ["산출세액(60%)", "2억 9,850만 원"],
  ["지방소득세(10%)", "2,985만 원"],
  ["합계", "약 3억 2,835만 원"],
] as const;

const rateRows = [
  ["1년 미만", "70%", "단일세율"],
  ["1년 이상", "60%", "단일세율"],
] as const;

const includedRows = [
  ["대상", "주택분양권 양도(2021.1.1 이후 양도 기준 전용세율)"],
  ["입력", "양도가·취득가·필요경비·취득일·양도일"],
  ["세율", "보유기간 1년 기준 70% / 60%"],
  ["지방소득세", `산출세액의 ${toPercent(LOCAL_INCOME_TAX_RATE)}`],
] as const;

const excludedRows = [
  ["1세대1주택 비과세·장특공", "분양권 양도에는 미적용"],
  ["다주택 중과(+20/30%p)", "주택 양도에만 해당(분양권 양도 자체 미적용)"],
  ["조합원입주권", "인가일 분리 등 — 양도소득세 계산기 이용"],
  ["전매제한·세액감면", "적법성·조특법 특례 미반영"],
  ["2021.1.1 이전 구세율(66%/77%)", "현행 60%/70%만 반영"],
] as const;

const notes = [
  "주택분양권 양도는 소득세법상 전용세율(1년 미만 70%, 1년 이상 60%)이 적용됩니다.",
  "장기보유특별공제·1세대1주택 비과세·조정지역 다주택 중과는 분양권 양도 자체에 적용되지 않습니다.",
  "2021.1.1 이후 취득한 분양권은 이후 주택 수 산정에 포함될 수 있으나, 이 계산기의 세율에는 영향을 주지 않습니다.",
  "구 세율 안내(66%·77%)와 혼동하기 쉽습니다. 현행 분양권은 60%·70%입니다.",
  "계산 결과는 참고용이며 최종 세액은 홈택스·관할 세무서 확인이 필요합니다.",
] as const;

export function PresaleCapitalGainsTaxCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="분양권 양도소득세 산정 참고"
      summary="분양권은 양도차익에서 기본공제만 뺀 뒤 보유기간별 60%·70% 단일세율을 적용합니다. 장특공·비과세·다주택 중과는 없습니다."
      footer="법령 근거: 소득세법 제104조(분양권 전용세율) 등. 계산 결과는 참고용이며 양도시기·사실관계는 홈택스·세무사 확인을 권장합니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="분양권 양도소득세 산출 순서"
          headers={["단계", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={2} title="계산 예시 (참고)" subtitle="양도가 15억 · 취득가 10억 · 보유 1년 이상">
        <CalculatorReferenceTable
          caption="분양권 양도세 예시"
          headers={["항목", "금액·비고"]}
          rows={exampleRows}
          minWidth="min-w-[480px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={3} title="분양권 전용세율">
        <CalculatorReferenceTable
          caption="주택분양권 양도 세율"
          headers={["보유기간", "세율", "비고"]}
          rows={rateRows}
          minWidth="min-w-[400px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={4} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="분양권 양도세 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable
          caption="분양권 양도세 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceNotes number={5} notes={notes} />

      <p className="text-muted-foreground text-xs leading-relaxed">
        세율·주택 수·전매 세부는{" "}
        <Link
          href="/guide/presale-right-capital-gains-tax-guide"
          className="text-primary font-medium underline-offset-4 hover:underline"
        >
          분양권 양도소득세 가이드
        </Link>
        를 참고하세요.
      </p>
    </CalculatorReferenceCard>
  );
}
