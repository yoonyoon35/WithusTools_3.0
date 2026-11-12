import Link from "next/link";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

const formulaRows = [
  ["① 과세표준", "시가표준액(공시가격). 지분 상속 시 해당 지분 해당액"],
  ["② 취득세", "과세표준 × 2.8%"],
  ["③ 지방교육세", "과세표준 × 0.16%"],
  ["④ 농어촌특별세", "전용 85㎡ 초과 시 과세표준 × 0.2%, 이하이면 0"],
  ["⑤ 합계", "취득세 + 지방교육세 + 농어촌특별세"],
] as const;

const exampleRows = [
  ["가정", "상속 주택 · 시가표준액 5억 원 · 85㎡ 이하"],
  ["취득세(2.8%)", "1,400만 원"],
  ["지방교육세(0.16%)", "80만 원"],
  ["농어촌특별세", "0원"],
  ["합계(2.96%)", "1,480만 원"],
] as const;

const rateRows = [
  ["전용 85㎡ 이하", "2.8%", "0.16%", "0%", "2.96%"],
  ["전용 85㎡ 초과", "2.8%", "0.16%", "0.2%", "3.16%"],
] as const;

const includedRows = [
  ["대상", "주택 상속(시가표준액 기준)"],
  ["세율", "취득세 2.8% · 지방교육세 0.16% · 농특세(85㎡ 초과)"],
  ["과세표준", "시가표준액(공시가격)"],
] as const;

const excludedRows = [
  ["1가구 1주택 상속 특례(0.8%)", "요건·한도 별도 — 본 계산기 미반영"],
  ["매매·증여·원시", "일반 취득세 계산기 이용"],
  ["농지 상속·영농상속", "농지 취득세 계산기 이용"],
  ["주택 수 제외·중과 판정", "가이드·관할 지자체 확인"],
  ["상속세(국세)", "상속세 계산기에서 별도"],
] as const;

const notes = [
  "상속 주택 취득세율은 2.8%로 고정이며, 매매와 달리 주택 수·조정대상지역에 따른 중과가 적용되지 않습니다.",
  "과세표준은 실거래가가 아니라 시가표준액(공시가격)입니다. 공유 지분은 지분 해당액만 입력하세요.",
  "납부 기한은 상속개시일이 속하는 달의 말일부터 6개월(해외 주소 상속인 있으면 9개월)입니다.",
  "1가구 1주택 상속 특례(0.8%) 등 감면은 본 계산기에 포함되지 않습니다.",
  "실제 신고세액은 관할 지자체 확인이 필요합니다. 취득세는 위택스에서 신고·납부할 수 있습니다.",
] as const;

export function InheritedHousingAcquisitionTaxCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="상속 주택 취득세 산정 참고"
      summary="상속 주택은 시가표준액에 취득세 2.8%·지방교육세 0.16%를 곱하고, 전용 85㎡ 초과 시 농특세 0.2%를 더합니다."
      footer="계산 결과는 참고용입니다. 특례·지분·주택 수 판정은 관할 지자체·세무사 확인을 권장합니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="상속 주택 취득세 산출 순서"
          headers={["단계", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={2} title="계산 예시 (참고)" subtitle="시가표준액 5억 · 85㎡ 이하">
        <CalculatorReferenceTable
          caption="상속 주택 5억 원 취득세 예시"
          headers={["항목", "금액·비고"]}
          rows={exampleRows}
          minWidth="min-w-[480px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={3} title="세율 요약">
        <CalculatorReferenceTable
          caption="상속 주택 취득세·부가세율"
          headers={["구분", "취득세", "지방교육세", "농특세", "합계"]}
          rows={rateRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={4} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="상속 주택 취득세 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable
          caption="상속 주택 취득세 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceNotes number={5} notes={notes} />

      <p className="text-muted-foreground text-xs leading-relaxed">
        기한·주택 수·지분 세부는{" "}
        <Link
          href="/guide/inherited-housing-acquisition-tax-2026-guide"
          className="text-primary font-medium underline-offset-4 hover:underline"
        >
          상속 주택 취득세 가이드
        </Link>
        를 참고하세요.
      </p>
    </CalculatorReferenceCard>
  );
}
