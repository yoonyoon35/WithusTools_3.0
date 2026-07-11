import Link from "next/link";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";
import { PREPAYMENT_FEE_FORMULA } from "@/lib/prepayment-fee-calculations";

const formulaRows = [
  ["중도상환 수수료", PREPAYMENT_FEE_FORMULA],
  ["① 잔여기간", "면제 기간 상품: 면제 종료까지 남은 기간. 없는 상품: 만기까지 남은 기간"],
  ["② 대출기간(분모)", "면제 기간 상품: 면제 기간(통상 3년). 없는 상품: 계약 전체 대출기간"],
  ["③ 면제 판정", "면제 기간 경과 후 상환 시 수수료 0원"],
  ["④ 입력 방식", "기간(개월) 또는 일자(달력) 선택. 일자 모드는 일 단위로 경과·잔여 산출"],
] as const;

const exampleRows = [
  ["중도상환 원금", "5,000만 원"],
  ["수수료율", "1.2%"],
  ["계약 대출기간", "30년(360개월)"],
  ["수수료 계산 기간", "3년(36개월, 면제 기간)"],
  ["경과 기간", "1년(12개월)"],
  ["잔여기간", "24개월(36개월 − 12개월)"],
  ["수수료", "5,000만 원 × 1.2% × (24 ÷ 36) = 약 40만 원"],
] as const;

const includedRows = [
  ["중도상환 수수료", "원금 × 수수료율 × (잔여기간 ÷ 대출기간)"],
  ["면제 기간 모드", "면제 기간 있음/없음, 경과 후 면제 판정"],
  ["입력 방식", "기간(개월) 또는 일자(달력) 선택"],
  ["잔여기간 참고", "수수료 ÷ 잔여기간 월할 참고값"],
] as const;

const excludedRows = [
  ["이자 절감액 자동 계산", "수수료와 비교는 참고 문구·별도 대출 계산기 이용"],
  ["취급·중개 수수료", "대출 실행 시 일회성"],
  ["금융기관별 월할·일할 차이", "기관마다 잔여기간 산정 방식 상이"],
  ["연간 일부 상환 면제 한도", "상품별 별도 규정"],
  ["DSR·LTV·한도 심사", "별도 계산기·금융기관 심사"],
] as const;

const feeRateRows = [
  ["시중은행 주담대", "0.6% ~ 1.4%", "3년"],
  ["인터넷전문은행", "0% ~ 0.7%", "1년 ~ 3년"],
  ["저축은행", "1.0% ~ 2.0%", "3년"],
  ["정책 모기지(디딤돌·보금자리론)", "1.2% ~ 1.5%", "3년"],
] as const;

const exemptionRows = [
  ["면제 기간 경과 후 상환", "대출 실행 후 3년 초과 시 수수료 없음"],
  ["면제 기간 없는 상품", "만기 전 중도상환 시 잔여 대출기간 기준으로 수수료 부과"],
  ["디딤돌대출 중도상환", "2024년 8월 ~ 2026년 12월 31일까지 수수료 면제"],
  ["연간 일부 상환 허용", "일부 상품은 연간 일정 금액 이내 수수료 면제"],
  ["금리인하요구권 행사 후 갈아타기", "금융기관별 조건 상이"],
] as const;

const notes = [
  "면제 기간이 있는 상품은 잔여기간·대출기간 모두 면제 기간(통상 3년) 기준으로 계산합니다.",
  "면제 기간이 없는 상품은 만기일까지 남은 기간을 잔여기간으로, 전체 대출기간을 분모로 사용합니다.",
  "기간(개월) 입력과 일자(달력) 입력 모두 지원하며, 일자 모드는 일 단위로 경과·잔여를 산출합니다.",
  "수수료율과 면제 조건은 상품 및 시점에 따라 다르며, 대출 계약서에서 반드시 확인해야 합니다.",
  "중도상환 전 수수료와 절감되는 이자를 함께 따져야 합니다. 실제 수수료율·면제 조건·계산 방식은 금융기관 및 대출 상품에 따라 상이합니다.",
] as const;

export function PrepaymentFeeCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="중도상환 수수료 산정 참고"
      summary={`${PREPAYMENT_FEE_FORMULA}. 면제 기간이 있는 상품은 잔여기간·대출기간 모두 면제 기간(통상 3년) 기준으로 계산하고, 없는 상품은 만기일까지 남은 기간을 잔여기간으로, 전체 대출기간을 분모로 사용합니다.`}
      footer="※ 수수료율과 면제 기간은 상품 및 시점에 따라 다르며, 대출 계약서에서 반드시 확인해야 합니다."
    >
      <CalculatorReferenceSection
        number={1}
        title="본 계산기 산출 공식·순서"
        footnote="검산 시 (잔여기간 ÷ 대출기간)을 먼저 계산하도록 괄호를 표기했습니다. 금융기관마다 월할·일할 방식이 다를 수 있습니다."
      >
        <CalculatorReferenceTable
          caption="중도상환 수수료 산출 공식 및 계산 순서"
          headers={["항목", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[640px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={2} title="계산 예시 (참고)" subtitle="면제 기간 3년 · 실행 1년 경과 · 수수료율 1.2%">
        <CalculatorReferenceTable caption="중도상환 수수료 계산 예시" headers={["항목", "내용"]} rows={exampleRows} minWidth="min-w-[640px]" />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={3} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="본 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[560px]"
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
        <p className="text-muted-foreground text-xs font-medium">금융기관별 수수료율 범위</p>
        <CalculatorReferenceTable
          caption="금융기관별 수수료율 범위"
          headers={["구분", "수수료율 범위", "면제 기간"]}
          rows={feeRateRows}
          minWidth="min-w-[640px]"
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">수수료 면제 또는 감면 조건</p>
        <CalculatorReferenceTable
          caption="수수료 면제 또는 감면 조건"
          headers={["조건", "내용"]}
          rows={exemptionRows}
          minWidth="min-w-[640px]"
        />

        <div className="relative mt-4 overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="from-primary/15 via-primary/8 bg-gradient-to-r to-transparent px-4 py-3 sm:px-5">
            <h3 className="text-primary text-base font-semibold tracking-tight">수수료와 이자 절감 비교</h3>
            <p className="text-muted-foreground mt-1 text-xs">
              중도상환 전 수수료와 절감되는 이자를 함께 따져야 합니다. 아래는 참고용 단순 가정 예시입니다.
            </p>
          </div>
          <div className="space-y-5 p-4 text-sm leading-relaxed sm:p-5">
            <div className="space-y-2">
              <h4 className="font-semibold">2억 원 대출 — 수수료가 남은 기간 이자보다 적어지는 시점</h4>
              <p>
                대출 원금 2억 원, 금리 연 4%, 30년(360개월), 중도상환 수수료율 1.2%, 면제 기간 3년, 원리금균등상환을
                가정합니다. 이 조건에서 5,000만 원을 일부 중도상환할 때,{" "}
                <strong>수수료가 앞으로 내야 할 이자보다 작아지는 구간은 대체로 대출 초·중반</strong>입니다.
              </p>
              <p>
                예를 들어 실행 1년 차(면제 종료까지 24개월 남음)에 5,000만 원을 상환하면 수수료는 약 40만 원입니다. 같은
                5,000만 원을 끝까지 갚지 않고 유지하면, 잔여 대출기간(약 29년) 동안 해당 원금만큼 추가로 부담하는 이자는
                수천만 원에 달합니다. 수수료가 남은 기간 이자보다 훨씬 적으므로, 이 시점의 조기 상환은 이자 절감 측면에서
                유리한 편입니다.
              </p>
              <p>
                반대로 <strong>잔여 대출기간이 1~2년뿐</strong>이고 금리가 이미 2%대처럼 낮다면 이야기가 달라집니다. 잔여
                24개월 동안 5,000만 원에 붙는 이자가 100~150만 원 수준까지 줄어들 수 있고, 면제 직전이라 수수료도 5~10만
                원대로 낮아집니다. 절감 이자와 수수료의 차이가 크지 않아, 굳이 지금 상환하지 않아도 되는 경우가
                생깁니다. 잔여 6개월 미만·금리 2% 이하처럼 조건이 겹치면 수수료가 절감 이자보다 클 수도 있으니, 면제
                기간 종료를 기다리거나 만기 상환을 검토하는 편이 낫습니다.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">2억 원 대출 — 잔여 24개월(면제 종료 전)에 5,000만 원 중도상환할 때</h4>
              <p>
                같은 2억 원·연 4%·30년 대출에서 실행 후 1년이 지나 면제 종료까지 24개월 남은 시점에 5,000만 원을
                중도상환한다고 가정합니다.
              </p>
              <p>
                이때 납부할 <strong>중도상환 수수료는 약 40만 원</strong>입니다(5,000만 원 × 1.2% × (24 ÷ 36)). 상환하지
                않고 24개월을 더 갚아 나가면, 해당 5,000만 원에 대해 그 기간 동안 추가로 부담하는 이자는{" "}
                <strong>약 380만 원</strong> 수준으로 잡을 수 있습니다(금리·상환 방식에 따라 달라짐). 수수료 40만 원을
                내더라도 이자 380만 원을 줄일 수 있으므로, <strong>순 절감액은 약 340만 원</strong> 정도로 볼 수
                있습니다.
              </p>
              <p>
                실행 2년 차(면제 종료까지 12개월 남음)에 같은 금액을 상환하면 수수료는 약 20만 원으로 줄지만, 12개월간
                절감되는 이자도 약 190만 원 수준으로 함께 줄어듭니다. 여전히 상환이 유리할 수 있지만, 앞 시점보다
                절감 폭은 작아집니다. 실행 3년이 지나 면제 기간이 끝나면 수수료는 0원이므로, 급하지 않다면 그때
                상환하는 것도 한 방법입니다.
              </p>
              <p className="text-muted-foreground text-xs">
                ※ 이자 절감액은 잔여 원금·상환 방식(원리금균등·원금균등·만기일시)에 따라 달라집니다. 본인 조건에 맞는
                금액은{" "}
                <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
                  대출 이자 계산기
                </Link>
                에서 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </CalculatorReferenceSection>
      <CalculatorReferenceNotes number={5} title="중도상환 수수료 산정 시 참고사항" notes={notes} />
    </CalculatorReferenceCard>

  );
}
