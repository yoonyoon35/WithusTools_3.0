import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

const formulaRows = [
  ["① 과세표준", "매매: max(취득가액, 시가표준액) · 상속·증여·원시: 시가표준액(또는 시가인정액)"],
  ["② 취득세", "과세표준 × 취득세율(매매 3% · 자경 1.5% · 상속 2.3% · 영농상속 0.3% · 증여 3.5% · 원시 2.8%)"],
  ["③ 농어촌특별세", "과세표준 × 0.2%(자경 매매·영농상속은 0%)"],
  ["④ 지방교육세", "과세표준 × 교육세율(매매 0.2% · 자경 0.1% · 상속·영농상속 0.06% · 증여 0.3% · 원시 0.16%)"],
  ["⑤ 합계", "취득세 + 농어촌특별세 + 지방교육세"],
] as const;

const includedRows = [
  ["취득 원인", "매매·증여·상속·원시취득"],
  ["매매 구분", "일반(신규) 3% · 2년 이상 자경 1.5%"],
  ["상속 구분", "일반 2.3% · 영농상속 0.3%"],
  ["부가세", "농어촌특별세·지방교육세 자동 합산"],
] as const;

const excludedRows = [
  ["자경·영농상속 요건 확인", "거주지·농업 외 소득·면적 한도 등은 확인하지 않고, 선택한 세율만 적용"],
  ["감면 추징", "자경 의무 위반 시 추징세액은 별도"],
  ["귀농인·농업법인 등 다른 감면", "요건·일몰이 달라 미반영"],
  ["공유지분 취득", "지분율별 과세표준 계산은 직접 입력 필요"],
  ["지자체 조례 가감", "표준세율의 50% 범위 가감 가능, 미반영"],
] as const;

const notes = [
  "농지는 주택과 달리 주택 수·조정대상지역에 따라 세율이 달라지지 않고, 취득 원인과 자경 요건에 따라 세율이 갈립니다.",
  "유상취득(매매)은 취득가액과 시가표준액 중 큰 값을, 상속·증여·원시취득은 시가표준액(또는 시가인정액)을 과세표준으로 사용합니다.",
  "2년 이상 자경 매매(1.5%)와 영농상속(0.3%)은 요건을 충족한 경우에만 적용되는 값입니다. 요건은 아래 안내를 먼저 확인하세요.",
  "자경농민 취득세 50% 경감은 현행법상 2026년 12월 31일까지이며, 연장 개정안은 국회 심의 중입니다.",
  "실제 신고세액은 관할 지자체 확인이 필요합니다. 취득세는 위택스에서 신고·납부할 수 있습니다.",
] as const;

export function FarmlandAcquisitionTaxCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="농지 취득세 산정 참고"
      summary="농지 취득세는 과세표준에 취득 원인별 세율을 곱하고, 농어촌특별세·지방교육세를 더해 계산합니다. 세율표와 요건은 아래 설명에서 정리했습니다."
      footer="계산 결과는 참고용입니다. 자경 감면 요건, 감면 일몰, 지자체 조례에 따라 실제 세액이 달라질 수 있습니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="농지 취득세 산출 순서"
          headers={["단계", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[640px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={2} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="농지 취득세 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable
          caption="농지 취득세 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceNotes number={3} notes={notes} />
    </CalculatorReferenceCard>
  );
}
