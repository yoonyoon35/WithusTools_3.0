import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

const formulaRows = [
  ["① 과세표준", "매매: max(취득가액, 시가표준액) · 상속·증여·원시: 시가표준액(또는 시가인정액)"],
  ["② 취득세", "과세표준 × 취득세율(매매 4% · 증여 3.5% · 상속·원시 2.8%)"],
  ["③ 농어촌특별세", "과세표준 × 0.2%"],
  ["④ 지방교육세", "과세표준 × 교육세율(매매 0.4% · 증여 0.3% · 상속·원시 0.16%)"],
  ["⑤ 합계", "취득세 + 농어촌특별세 + 지방교육세"],
] as const;

const exampleRows = [
  ["가정", "오피스텔 매매 · 취득가액 2억 원(시가표준액 이하)"],
  ["과세표준", "2억 원"],
  ["취득세(4%)", "800만 원"],
  ["농어촌특별세(0.2%)", "40만 원"],
  ["지방교육세(0.4%)", "80만 원"],
  ["합계(4.6%)", "920만 원"],
] as const;

const rateRows = [
  ["매매", "4%", "0.2%", "0.4%", "4.6%"],
  ["증여", "3.5%", "0.2%", "0.3%", "4.0%"],
  ["상속·원시", "2.8%", "0.2%", "0.16%", "3.16%"],
] as const;

const includedRows = [
  ["자산", "오피스텔(주거용·업무용 동일 세율)"],
  ["취득 원인", "매매·증여·상속·원시취득"],
  ["부가세", "농어촌특별세·지방교육세 자동 합산"],
] as const;

const excludedRows = [
  ["주택 세율·다주택 중과", "오피스텔 취득 자체에는 미적용(본 계산기 범위 밖)"],
  ["생애최초 취득세 감면", "현행 기준 오피스텔은 미반영(개편안 확정 전)"],
  ["양도세·재산세·종부세·부가세", "취득 이후 세금은 별도"],
  ["이후 주택 취득 시 주택 수 판정", "실질 주거 여부 등은 가이드·과세당국 확인"],
  ["지자체 조례 가감", "표준세율의 50% 범위 가감 가능, 미반영"],
] as const;

const notes = [
  "오피스텔은 세법상 주택이 아니므로 주거용·업무용 구분 없이 주택 외 세율이 적용됩니다.",
  "매매 합계 4.6%는 아파트·빌라의 주택 세율(1~3%)·다주택 중과(8%·12%)와 별개입니다.",
  "유상취득(매매)은 취득가액과 시가표준액 중 큰 값을, 상속·증여·원시취득은 시가표준액(또는 시가인정액)을 과세표준으로 사용합니다.",
  "취득 이후 주택 수·양도세·부가세는 용도·실질에 따라 달라질 수 있으니 오피스텔 주거용·업무용 세금 가이드를 참고하세요.",
  "실제 신고세액은 관할 지자체 확인이 필요합니다. 취득세는 위택스에서 신고·납부할 수 있습니다.",
] as const;

export function OfficetelAcquisitionTaxCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="오피스텔 취득세 산정 참고"
      summary="오피스텔 취득세는 과세표준에 취득 원인별 세율을 곱하고, 농어촌특별세·지방교육세를 더해 계산합니다. 주거용·업무용 세율은 같습니다."
      footer="계산 결과는 참고용입니다. 정책 개편, 지자체 조례, 이후 주택 수 판정에 따라 실제 세액·중과 여부가 달라질 수 있습니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="오피스텔 취득세 산출 순서"
          headers={["단계", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[640px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection
        number={2}
        title="계산 예시 (참고)"
        subtitle="오피스텔 매매 · 취득가액 2억 원 가정"
      >
        <CalculatorReferenceTable
          caption="오피스텔 2억 원 매매 취득세 예시"
          headers={["항목", "금액·비고"]}
          rows={exampleRows}
          minWidth="min-w-[480px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={3} title="취득 원인별 세율">
        <CalculatorReferenceTable
          caption="오피스텔 취득세·농특세·지방교육세율"
          headers={["취득 원인", "취득세", "농특세", "지방교육세", "합계"]}
          rows={rateRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={4} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="오피스텔 취득세 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable
          caption="오피스텔 취득세 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceNotes number={5} notes={notes} />
    </CalculatorReferenceCard>
  );
}
