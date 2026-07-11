import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

const formulaRows = [
  ["① 과세표준", "유상: max(취득가액, 시가표준액) · 무상: 시가표준액(또는 시가인정액)"],
  ["② 취득세", "과세표준 × 취득세율(주택수·조정지역·가격구간·취득원인별)"],
  ["③ 생애최초 감면", "1주택 매매 시 산출 취득세에서 한도(200만/300만 원) 공제"],
  ["④ 지방교육세", "취득세율 8% 미만: 취득세×1/10 · 8% 이상: 과세표준×0.4%"],
  ["⑤ 농어촌특별세", "과세표준 × 농특세율(전용 85㎡ 초과 시 부과)"],
  ["⑥ 합계", "취득세 + 지방교육세 + 농어촌특별세"],
] as const;

const exampleRows = [
  ["가정", "주택 매매 · 1주택 · 6억 원 · 85㎡ 이하 · 조정지역 외"],
  ["과세표준", "6억 원"],
  ["취득세(1%)", "600만 원"],
  ["지방교육세", "60만 원(취득세×1/10)"],
  ["농어촌특별세", "0원(85㎡ 이하)"],
  ["합계", "660만 원"],
] as const;

const includedRows = [
  ["자산 구분", "주택·주택 외·농지·업무용 오피스텔"],
  ["취득 원인", "매매·증여·상속·원시"],
  ["주택 매매 세율", "주택 수·조정대상지역·취득가액 구간별 취득세율"],
  ["생애최초 감면", "1주택 매매 시 산출 취득세 한도 공제(단순 모델)"],
  ["농지·영농상속", "2년 자경·영농상속 감면 세율 선택"],
] as const;

const excludedRows = [
  ["신혼·지방 이전 등 기타 감면", "별도 요건·한도"],
  ["법인 취득·공유지분", "지분율·납세의무자 별도"],
  ["분양권·입주권", "권리 취득 형태별 별도"],
  ["일시적 2주택 예외", "정책·시행일별 해석 차이"],
  ["시행일·지자체 해석", "개정·유권해석에 따라 달라질 수 있음"],
] as const;

const houseSaleRateRows = [
  ["1주택", "지역 무관", "6억원 이하", "1%", "0.2% (85m² 초과 시)", "0.1%"],
  ["1주택", "지역 무관", "6억원 초과 ~ 9억원 이하", "(취득가액 x 2/3억원 - 3) x 1/100", "0.2% (85m² 초과 시)", "취득세의 1/10"],
  ["1주택", "지역 무관", "9억원 초과", "3%", "0.2% (85m² 초과 시)", "0.3%"],
  ["2주택", "조정대상지역", "가격 구간 무관", "8%", "0.6% (85m² 초과 시)", "0.4%"],
  ["2주택", "조정대상지역 외", "6억원 이하 / 6~9억원 / 9억원 초과", "1% / 구간식 / 3%", "0.2% (85m² 초과 시)", "0.1% / 취득세의 1/10 / 0.3%"],
  ["3주택", "조정대상지역", "가격 구간 무관", "12%", "1.0% (85m² 초과 시)", "0.4%"],
  ["3주택", "조정대상지역 외", "가격 구간 무관", "8%", "0.6% (85m² 초과 시)", "0.4%"],
  ["4주택 이상", "조정대상지역 / 조정대상지역 외", "가격 구간 무관", "12%", "1.0% (85m² 초과 시)", "0.4%"],
] as const;

const houseNonPaidRateRows = [
  ["증여(무상취득)", "시가표준액 또는 시가인정액 기준", "3.5%", "0.2% (85m² 초과 시)", "0.3%"],
  ["상속(무상취득)", "시가표준액 또는 시가인정액 기준", "2.8%", "0.2% (85m² 초과 시)", "0.16%"],
  ["원시", "시가표준액 또는 시가인정액 기준", "2.8%", "0.2% (85m² 초과 시)", "0.16%"],
] as const;

const nonHouseRateRows = [
  ["주택 외", "매매(토지, 건물 등)", "4%", "0.2%", "0.4%"],
  ["주택 외", "원시(신축), 상속(농지 외)", "2.8%", "0.2%", "0.16%"],
  ["주택 외", "무상취득(증여)", "3.5%", "0.2%", "0.3%"],
  ["업무용 오피스텔", "매매", "4%", "0.2%", "0.4%"],
  ["업무용 오피스텔", "증여", "3.5%", "0.2%", "0.3%"],
  ["업무용 오피스텔", "상속/원시", "2.8%", "0.2%", "0.16%"],
  ["농지", "매매(신규)", "3%", "0.2%", "0.2%"],
  ["농지", "매매(2년 이상 자경)", "1.5%", "면제", "0.1%"],
  ["농지", "증여", "3.5%", "0.2%", "0.3%"],
  ["농지", "상속", "2.3%", "0.2%", "0.06%"],
  ["농지", "상속(영농상속, 감면 적용 시)", "0.3%", "면제", "0.06%"],
  ["농지", "원시취득", "2.8%", "0.2%", "0.16%"],
] as const;

const notes = [
  "주택·주택 외·농지·업무용 오피스텔과 매매·증여·상속·원시 취득 원인을 선택해 취득세·농어촌특별세·지방교육세를 확인할 수 있습니다.",
  "유상 취득은 취득가액과 시가표준액 중 큰 값을 과세표준으로 하며, 무상 취득은 시가표준액(또는 시가인정액)을 사용합니다.",
  "1주택 매매 시 생애최초 감면을 켜면 산출 취득세에서 한도(일반 200만·확대 300만 원)만큼 공제하는 단순 모델을 적용합니다.",
  "취득세율 8% 미만인 주택 매매는 지방교육세를 취득세의 10분의 1로, 농어촌특별세는 과세표준×세율로 산출합니다.",
  "농지 1.5%(2년 이상 자경)·영농상속 0.3%는 각각 자경·영농상속 요건 충족 시에만 적용되는 특례값입니다.",
  "신혼·지방 이전 감면, 법인 취득, 공유지분, 분양권·입주권, 일시적 2주택 예외 등은 본 계산기에 미반영일 수 있습니다.",
] as const;

export function AcquisitionTaxCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="취득세 산정 참고"
      summary="취득세·농어촌특별세·지방교육세는 과세표준과 자산·취득원인별 세율에 따라 산출됩니다. 아래는 본 계산기 산식과 일반적인 세율 구조를 요약한 참고용입니다."
      footer="기준표는 일반적인 주택 유상취득 세율 구조를 쉽게 보도록 단순화해 정리했습니다. 정책 개편, 감면 요건, 일시적 2주택, 법인 취득, 지분율 등에 따라 실제 신고세액은 달라질 수 있습니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="취득세 산출 순서"
          headers={["단계", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[640px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection
        number={2}
        title="계산 예시 (참고)"
        subtitle="주택 매매 · 1주택 · 취득가액 6억 원 · 85㎡ 이하 가정"
      >
        <CalculatorReferenceTable
          caption="1주택 6억 원 취득세 계산 예시"
          headers={["항목", "금액·비고"]}
          rows={exampleRows}
          minWidth="min-w-[480px]"
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
        <p className="text-muted-foreground text-xs font-medium">주택 매매 기준표</p>
        <CalculatorReferenceTable
          caption="주택 매매 취득세·농특·교육세율"
          headers={["취득 후 주택 수", "지역 구분", "취득가액 구간", "취득세율", "농어촌특별세율", "지방교육세율"]}
          rows={houseSaleRateRows}
          minWidth="min-w-[980px]"
          lastColumnRight
        />
        <p className="text-muted-foreground mt-4 text-xs font-medium">주택 무상·원시취득 기준표</p>
        <CalculatorReferenceTable
          caption="주택 무상·원시취득 세율"
          headers={["구분", "과세표준 기준", "취득세율", "농어촌특별세율", "지방교육세율"]}
          rows={houseNonPaidRateRows}
          minWidth="min-w-[980px]"
          lastColumnRight
        />
        <p className="text-muted-foreground mt-4 text-xs font-medium">주택 외 및 농지 기준표</p>
        <CalculatorReferenceTable
          caption="주택 외 및 농지 취득세 기준표"
          headers={["구분", "세부 유형", "취득세율", "농어촌특별세율", "지방교육세율"]}
          rows={nonHouseRateRows}
          minWidth="min-w-[980px]"
          lastColumnRight
        />
        <div className="mt-4 rounded-md border p-3 text-xs leading-relaxed">
          <p className="text-foreground font-medium">적용요건</p>
          <p className="text-muted-foreground mt-1">
            표의 세율은 일반적인 취득원인(매매·증여·상속·원시)과 자산 구분(주택·주택 외·농지)을 기준으로 단순화한 참고값입니다. 농지
            1.5%(2년 이상 자경)는 관계 법령에서 요구하는 자경 요건과 증빙, 사후 유지 요건을 충족하는 경우에만 적용됩니다.
          </p>
          <p className="text-muted-foreground mt-1">
            영농상속 0.3%는 영농상속 감면 요건을 충족한 경우의 특례값이며, 요건 미충족 시 일반 농지 상속세율이 적용될 수 있습니다.
          </p>
          <p className="text-muted-foreground mt-1">
            업무용 오피스텔은 원칙적으로 주택 외 기준으로 계산하며, 실제 사용 형태가 주거용으로 판단되는 경우에는 주택 기준 적용 여부를 관할
            기관에서 확인해야 합니다.
          </p>
          <p className="text-foreground mt-3 font-medium">제외조건</p>
          <p className="text-muted-foreground mt-1">
            생애최초 감면은 취득세 산출액에 한해 단순 공제 모형으로 반영합니다. 주택 매매이면서 취득세율 8% 미만인 경우 지방교육세는 감면 후 취득세의 10분의 1로
            산출하고, 농어촌특별세는 과세표준×세율로 산출합니다.
            신혼·지방 이전 등 기타 감면, 법인 취득, 공유지분, 분양권·입주권 포함, 일시적 2주택 예외, 시행일·해석 차이는 별도입니다. 실제 신고 전에는 관할
            시군구 또는 세무전문가 확인이 필요합니다.
          </p>
        </div>
      </CalculatorReferenceSection>
      <CalculatorReferenceNotes number={5} notes={notes} />
    </CalculatorReferenceCard>

  );
}
