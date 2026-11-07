import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";
import { HOUSING_BOND_FORMULA, housingBondReferenceRows } from "@/lib/housing-bond-calculations";

const tableHeaders = ["시가표준액 구간(이상 ~ 미만)", "서울특별시·광역시", "그 밖의 지역"] as const;

const formulaRows = [
  ["매입금액(소유권 이전·상속·증여)", "시가표준액 × 등기 유형·지역·구간별 매입률(‰)"],
  ["매입금액(근저당 설정)", "채권최고액 × 10/1,000, 매입금액 상한 10억 원 (설정금액 2천만 원 미만은 매입 불요)"],
  ["① 기준 금액", "시가표준액 × 취득 지분율. 공동주택은 세대당 시가표준액을 씁니다"],
  ["② 단수 처리", "1만 원 미만 단수는 5천 원 이상이면 1만 원으로 올리고, 5천 원 미만이면 버립니다"],
  ["③ 실제 부담", "채권을 즉시 매도하면 매입금액 × 할인율만큼이 비용입니다"],
] as const;

const exampleRows = [
  ["조건", "서울 아파트, 시가표준액 2억 원, 단독 명의, 유상 소유권 이전"],
  ["적용 구간·매입률", "1억 6천만 원 이상 ~ 2억 6천만 원 미만, 23/1,000"],
  ["매입금액", "2억 원 × 23/1,000 = 460만 원"],
  ["실제 부담(할인율 10% 가정)", "460만 원 × 10% = 46만 원"],
  ["같은 조건, 그 밖의 지역", "2억 원 × 18/1,000 = 360만 원"],
  ["근저당 채권최고액 3억 6천만 원 추가 시", "3억 6천만 원 × 10/1,000 = 360만 원 (이전분과 각각 매입)"],
] as const;

const includedRows = [
  ["소유권 이전(유상)·상속·증여", "주택·토지·주택 및 토지 외 부동산 구분과 지역별 구간 매입률"],
  ["근저당권 설정", "채권최고액 2천만 원 이상 10/1,000, 매입금액 10억 원 상한"],
  ["공유 지분", "지분율을 곱한 시가표준액 기준"],
  ["즉시 매도 실부담", "입력한 할인율 또는 5·7·10% 가정 할인율별 비용"],
] as const;

const excludedRows = [
  ["건축물 소유권 보존등기", "건축허가 신청 때 채권을 매입하므로 보존등기에는 매입하지 않습니다(본 계산기 대상 아님)"],
  ["신탁·신탁종료에 따른 이전", "법령상 매입 제외 대상이라 계산하지 않습니다"],
  ["면제·감면 대상자", "국가기관·지방자치단체·농어업인의 농지 취득 등. 해당하면 금융기관·법무사에 확인하세요"],
  ["도시철도채권 매입분 상계", "도시철도채권을 매입한 경우 일부 호는 국민주택채권을 매입하지 않을 수 있습니다"],
  ["취득세·등록면허세·법무사 보수", "별도 계산기·가이드 이용"],
  ["당일 채권 할인율", "매일 변동하므로 직접 입력해야 합니다"],
] as const;

const notes = [
  "매입금액의 기준은 매매가가 아니라 등기 접수일의 시가표준액입니다. 시가표준액이 공시되지 않은 신규 분양 공동주택은 취득가격(분양가)을 기준으로 합니다.",
  "구간은 ‘이상 ~ 미만’입니다. 예를 들어 주택 시가표준액이 정확히 6억 원이면 2억 6천만 원~6억 원 구간이 아니라 6억 원 이상 구간(서울·광역시 31/1,000, 그 밖의 지역 26/1,000)을 적용합니다.",
  "주택 시가표준액 2천만 원 미만, 토지 5백만 원 미만, 주택·토지 외 부동산 1천만 원 미만은 매입 대상이 아닙니다. 상속·증여 등 무상 취득은 1천만 원 미만이 제외됩니다.",
  "지역은 법령 문구대로 ‘특별시 및 광역시’와 ‘그 밖의 지역’으로 나눕니다. 세종특별자치시는 특별시·광역시가 아니므로 그 밖의 지역으로 분류했습니다. 판단이 애매하면 등기소나 법무사에 확인하세요.",
  "건물 전체가 주거용이 아니면 ‘주택’ 표가 아니라 ‘주택 및 토지 외의 부동산’ 표를 씁니다. 1층 점포·2층 주택인 상가주택이나 업무시설로 등기된 오피스텔이 이에 해당할 수 있으니 건축물대장의 용도를 확인하세요.",
  "소유권 이전과 근저당 설정을 같은 날 등기할 때의 합산·중복 처리 방식은 본 계산기가 확정하지 않습니다. 각각 계산해 합산한 값이며, 법무사 견적서로 확인하세요.",
  "국민주택채권을 만기까지 보유할 의무는 없습니다. 대부분 매입과 동시에 은행에서 매도하며, 이때 부담하는 할인 손실이 실제 비용입니다.",
] as const;

export function HousingBondCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="국민주택채권 매입금액 산정 참고"
      summary={`${HOUSING_BOND_FORMULA}. 소유권 이전·상속·증여는 등기 접수일의 시가표준액에 지역·구간별 매입률을 곱하고, 근저당 설정은 채권최고액의 1%(상한 10억 원)를 매입합니다. 1만 원 미만 단수는 5천 원 이상 올림·미만 버림입니다.`}
      footer="※ 근거: 주택도시기금법 제8조, 같은 법 시행령 제8조제2항 [별표] 제1종국민주택채권 매입대상자 및 매입기준. 요율·면제 대상은 개정될 수 있으니 시행 중인 법령과 법무사·금융기관 안내를 확인하세요."
    >
      <CalculatorReferenceSection
        number={1}
        title="본 계산기 산출 공식·순서"
        footnote="매입금액은 등기를 신청하는 사람이 등기 전에 은행·우체국 등에서 매입하고, 영수증의 채권 발행번호를 등기신청서에 기재합니다."
      >
        <CalculatorReferenceTable
          caption="국민주택채권 매입금액 산출 공식 및 계산 순서"
          headers={["항목", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[640px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={2} title="계산 예시 (참고)" subtitle="서울 아파트 · 시가표준액 2억 원 · 유상 소유권 이전">
        <CalculatorReferenceTable caption="국민주택채권 계산 예시" headers={["항목", "내용"]} rows={exampleRows} minWidth="min-w-[640px]" />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={3} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable caption="본 계산기 포함 항목" headers={["항목", "설명"]} rows={includedRows} minWidth="min-w-[560px]" />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable caption="본 계산기 미포함 항목" headers={["항목", "설명"]} rows={excludedRows} minWidth="min-w-[560px]" />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={4} title="법령 매입률 기준표" subtitle="시가표준액 ‘이상 ~ 미만’, 1,000분율">
        <p className="text-muted-foreground text-xs font-medium">주택 — 소유권 이전(유상)</p>
        <CalculatorReferenceTable
          caption="주택 소유권 이전 국민주택채권 매입률"
          headers={tableHeaders}
          rows={housingBondReferenceRows.paid("housing")}
          minWidth="min-w-[640px]"
        />
        <p className="text-muted-foreground mt-4 text-xs font-medium">토지 — 소유권 이전(유상)</p>
        <CalculatorReferenceTable
          caption="토지 소유권 이전 국민주택채권 매입률"
          headers={tableHeaders}
          rows={housingBondReferenceRows.paid("land")}
          minWidth="min-w-[640px]"
        />
        <p className="text-muted-foreground mt-4 text-xs font-medium">주택 및 토지 외의 부동산 — 소유권 이전(유상)</p>
        <CalculatorReferenceTable
          caption="주택·토지 외 부동산 소유권 이전 국민주택채권 매입률"
          headers={tableHeaders}
          rows={housingBondReferenceRows.paid("other")}
          minWidth="min-w-[640px]"
        />
        <p className="text-muted-foreground mt-4 text-xs font-medium">상속·증여 등 무상 취득</p>
        <CalculatorReferenceTable
          caption="상속·증여 국민주택채권 매입률"
          headers={tableHeaders}
          rows={housingBondReferenceRows.free}
          minWidth="min-w-[640px]"
        />
        <p className="text-muted-foreground mt-4 text-xs font-medium">저당권(근저당) 설정</p>
        <CalculatorReferenceTable
          caption="저당권 설정 국민주택채권 매입률"
          headers={["대상", "매입금액", "상한"]}
          rows={[["저당권 설정금액 2천만 원 이상(전국 동일)", "설정금액의 10/1,000", "10억 원"]]}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceNotes number={5} title="국민주택채권 매입 시 참고사항" notes={notes} />
    </CalculatorReferenceCard>
  );
}
