import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

const formulaRows = [
  ["① 사용 금액", "한도가 아니라 실제로 쓴(또는 쓸) 금액. 미사용이면 0원"],
  ["② 사용 일수", "날짜 입력: 사용 시작일~기준일(같은 날=1일) · 또는 일수 직접 입력"],
  ["③ 일 이자", "사용 금액 × 연 금리 ÷ 365"],
  ["④ 기간 이자(일할)", "일 이자 × 사용 일수 (원 단위 반올림)"],
  ["⑤ 한 달 어림(÷12)", "사용 금액 × 연 금리 ÷ 12 — 한 달 내내 같은 잔액일 때 참고"],
] as const;

const includedRows = [
  ["사용 기간", "날짜로 계산(시작일·기준일) 또는 일수 직접 입력"],
  ["일할 이자", "연이율 ÷ 365 × 일수"],
  ["÷12 어림 비교", "한 달 내내 사용 가정과의 차이"],
  ["미사용", "사용 금액 0원이면 이자 0원"],
] as const;

const excludedRows = [
  ["결산 기간·최고잔액 정산", "은행마다 하루 잔액·결산일 산정이 다를 수 있음"],
  ["원 단위 절사·반올림 방식", "은행 처리에 따라 수 원 차이 가능"],
  ["연체이자·약정 변경", "연체금리·우대금리 변동은 미반영"],
  ["DSR 한도 산정", "한도액 기준 연간 이자는 DSR 계산기에서 별도 확인"],
] as const;

const notes = [
  "카카오뱅크·토스뱅크·케이뱅크 등 소액 비상금대출은 대개 마이너스통장(한도대출)이라 쓴 금액에만 이자가 붙습니다.",
  "며칠만 쓰거나 중간에 갚으면 일할 합이 ÷12 월 어림보다 적습니다. 대출 이자 계산기의 만기일시는 월 단위 어림입니다.",
  "날짜 입력에서 사용 시작일과 기준일이 같으면 1일로 계산합니다. 당일 인출·상환도 최고잔액 기준 1일치가 잡힐 수 있습니다.",
  "확정 금리는 앱 약정값을 넣으세요. 이 사이트는 카카오뱅크·토스뱅크·케이뱅크 등과 제휴·공식 관계가 없습니다.",
  "계산 결과는 참고용입니다. 확정 이자는 은행 앱·상품설명서·약관을 확인하세요.",
] as const;

export function EmergencyLoanInterestCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="비상금대출 이자 산정 참고"
      summary="비상금대출·마이너스통장 이자는 사용 금액에 연 금리를 곱한 뒤 365로 나눈 일 이자를, 쓴 일수만큼 더해 계산합니다. 한도만 열어두면 이자는 없습니다."
      footer="계산 결과는 참고용입니다. 은행 결산 방식·원 단위 처리·약정 금리에 따라 실제 청구액이 달라질 수 있습니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="비상금대출 일할 이자 산출 순서"
          headers={["단계", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[640px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={2} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="비상금대출 이자 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable
          caption="비상금대출 이자 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceNotes number={3} notes={notes} />
    </CalculatorReferenceCard>
  );
}
