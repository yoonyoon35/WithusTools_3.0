import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

const formulaRows = [
  ["① 과세표준", "max(취득가액, 시가표준액)"],
  ["② 산출 취득세", "과세표준 × 1주택 매매 세율(6억 이하 1% · 6~9억 구간식 · 9억 초과 3%)"],
  ["③ 생애최초 감면", "산출 취득세에서 한도(일반 200만 · 확대 300만 원)만큼 공제. 산출세액 ≤ 한도면 전액 면제"],
  ["④ 지방교육세", "감면 후 취득세 × 1/10 (취득세율 8% 미만인 1주택 매매)"],
  ["⑤ 농어촌특별세", "전용 85㎡ 초과 시 과세표준 × 0.2%(1주택)"],
  ["⑥ 합계", "감면 후 취득세 + 지방교육세 + 농어촌특별세"],
] as const;

const exampleRows = [
  ["가정", "1주택 매매 · 6억 원 · 85㎡ 이하 · 일반 한도 200만 원"],
  ["과세표준", "6억 원"],
  ["산출 취득세(1%)", "600만 원"],
  ["생애최초 감면", "−200만 원"],
  ["취득세(감면 후)", "400만 원"],
  ["지방교육세", "40만 원(감면 후 취득세×1/10)"],
  ["농어촌특별세", "0원"],
  ["합계", "440만 원"],
] as const;

const includedRows = [
  ["전제", "주택 매매 · 1주택"],
  ["생애최초 감면", "기본 적용(끄면 감면 전 비교 가능)"],
  ["감면 한도", "일반 200만 원 · 소형·인구감소지역 등 300만 원"],
  ["부가세", "지방교육세·농어촌특별세 합산"],
] as const;

const excludedRows = [
  ["무주택·거주 목적·12억 이하 등 적격 요건 심사", "체크만으로 적용하며 요건은 확인하지 않음"],
  ["추징(취득 후 3년 이내 매각·증여·임대 등)", "감면 후 의무 위반 시 별도"],
  ["출산·양육 등 다른 감면과의 중복 한도", "별도 제도"],
  ["다주택·중과·분양권·입주권", "일반 취득세 계산기에서 확인"],
] as const;

const notes = [
  "본 계산기는 1주택 매매를 전제로 생애최초 감면액을 빠르게 보는 참고용입니다.",
  "감면은 산출 취득세에서 한도만큼 공제하는 단순 모델입니다. 지방교육세는 감면 후 취득세의 10분의 1로 산출합니다.",
  "실제 적격 여부·신청·추징은 관할 지자체와 생애최초 취득세 감면 가이드를 확인하세요.",
  "다주택·농지·오피스텔은 일반 취득세 계산기 또는 농지 취득세 계산기를 이용하세요.",
] as const;

export function FirstHomeAcquisitionTaxCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="생애최초 취득세 감면 산정 참고"
      summary="1주택 매매의 산출 취득세에서 감면 한도(200만·300만 원)를 공제하고, 감면 후 취득세를 기준으로 지방교육세를 다시 산출합니다."
      footer="계산 결과는 참고용입니다. 감면 요건·한도·추징은 관할 지자체 확인이 필요합니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="생애최초 취득세 감면 산출 순서"
          headers={["단계", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[640px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={2} title="계산 예시 (참고)">
        <CalculatorReferenceTable
          caption="6억 원 1주택 매매 · 일반 한도 200만 원 예시"
          headers={["항목", "내용"]}
          rows={exampleRows}
          minWidth="min-w-[480px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={3} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="생애최초 취득세 감면 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable
          caption="생애최초 취득세 감면 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceNotes number={4} notes={notes} />
    </CalculatorReferenceCard>
  );
}
