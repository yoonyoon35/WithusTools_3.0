import Link from "next/link";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";
import {
  bulletDtiBasisHints,
  bulletDtiBasisLabels,
  bulletDtiBasisOrder,
  dtiInclusionRows,
  dtiReferenceRows,
} from "@/lib/dti-calculations";
import {
  equalPrincipalDsrBasisHints,
  equalPrincipalDsrBasisLabels,
  type EqualPrincipalDsrBasis,
} from "@/lib/dsr-calculations";

const formulaRows = [
  ["DTI(%)", "(주담대 연간 원리금 + 기타 대출 연간 이자) ÷ 연소득 × 100"],
  ["① 주담대", "연간 원금 + 이자(원리금). 만기일시는 min(잔여기간, 10년)으로 원금 환산 + 전액 이자"],
  ["② 기타 대출", "연간 이자만(잔액 × 연이율, 또는 월 이자 직접 × 12)"],
  ["③ 한도 비교", "업권별 참고 한도(은행 60%·제2금융 50%)와 산출 DTI(%) 비교"],
] as const;

const exampleRows = [
  ["연소득", "8,000만 원"],
  ["신규 주담대(만기일시)", "잔액 3억 원 · 4% · 잔여 360개월 · 10년 규정"],
  ["주담대 연간 원리금", "4,200만 원 (원금 3,000만 + 이자 1,200만)"],
  ["기존 신용(이자만)", "잔액 3,000만 × 8% = 240만 원/년"],
  ["DTI", "(4,200만 + 240만) ÷ 8,000만 × 100 = 55.5%"],
] as const;

const includedRows = [
  ["연소득", "세전 근로소득(만 원) 기준"],
  ["주담대", "연간 원금+이자. 원리금균등·원금균등·체증식·만기일시 지원"],
  ["기타 대출", "연간 이자만(잔액×금리 또는 월 이자·월 상환 직접×12)"],
  ["만기일시 산정", "10년 원금균등+전액 이자 등 DTI 기준 선택"],
  ["원금균등 산정", "첫 회차×12 등 DSR 계산기와 동일 방식"],
  ["업권별 한도", "은행 60%·제2금융 50% 참고 비교"],
] as const;

const excludedRows = [
  ["DSR 40%·스트레스 DSR", "2023년 이후 은행권 실무 한도는 DTI보다 DSR에서 먼저 막히는 경우가 많음"],
  ["LTV", "담보 인정 가격·규제지역·다주택·6억 캡·고가주택 등"],
  ["마이너스통장·리볼빙·보증채무", "금융기관별 한도·이자 재산정"],
  ["전세자금대출", "DTI·DSR 인정 방식이 기관·상품별로 상이"],
  ["정책금융 세부 요건", "디딤돌·보금자리 등 소득·담보·LTV 별도 규정"],
  ["담보가·소득 인정", "KB·감정·사업소득 인정률 등 심사 기준"],
] as const;

const sectorLimitRows = dtiReferenceRows.map((row) => [row.condition, row.cap, row.note ?? ""]);

const inclusionRows = dtiInclusionRows.map((row) => [row.item, row.dti, row.dsr]);

const bulletRows = bulletDtiBasisOrder.map((k) => [bulletDtiBasisLabels[k], bulletDtiBasisHints[k]]);

const epRows = (Object.keys(equalPrincipalDsrBasisLabels) as EqualPrincipalDsrBasis[]).map((k) => [
  equalPrincipalDsrBasisLabels[k],
  equalPrincipalDsrBasisHints[k],
]);

const notes = [
  "연소득은 세전 근로소득(만 원)을 가정하며, 사업·임대·연금 등은 금융기관별 인정 방식이 다릅니다.",
  "대출 조건 입력 시 잔액·잔여 기간(개월)을 기준으로 연간 원리금을 산출합니다. 총액·총 기간·거치도 함께 반영할 수 있습니다.",
  "주담대는 연간 원금+이자, 기타 대출은 연간 이자만 합산합니다. 「월 이자·월 상환 직접」 입력 시 그 값×12를 사용합니다.",
  "만기일시 주담대 DTI 기본은 「10년 원금균등+전액 이자」(금융당국 별표9)이며, 원리금균등 환산·이자만도 선택할 수 있습니다.",
  "원금균등 주담대는 「첫 회차 × 12」가 기본입니다. DSR 계산기와 동일한 산출 방식을 공유합니다.",
  "체증식 주담대는 「월 상환 직접」 입력만 지원합니다. 스트레스 DSR·가산금리는 본 DTI 계산기에 적용되지 않습니다.",
  "LTV·DSR·규제지역·다주택 등은 별도 규정이며, 승인 한도는 신청 금융기관에서 확인해야 합니다.",
] as const;

export function DtiCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="DTI 산정 참고"
      summary="DTI(%) = (주담대 연간 원리금 + 기타 대출 연간 이자) ÷ 연소득 × 100. 아래는 본 계산기 산출 순서와 일반적인 기준을 요약한 참고용입니다."
      footer="기준표는 가이드·정책 공지를 바탕으로 사용자가 빠르게 대조할 수 있도록 정리한 참고용입니다. 소득 인정·부채 재산정·만기일시 환산 방식은 금융기관 심사와 다를 수 있습니다."
    >
      <CalculatorReferenceSection
        number={1}
        title="본 계산기 산출 공식·순서"
        footnote="주담대는 연간 원금+이자, 기타 대출은 연간 이자만 합산합니다. 만기일시 주담대는 DTI 10년·DSR 5년 원금 환산 규정이 다릅니다."
      >
        <CalculatorReferenceTable
          caption="DTI 산출 공식 및 계산 순서"
          headers={["항목", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection
        number={2}
        title="계산 예시 (참고)"
        subtitle="은행권 · 연소득 8,000만 · 만기일시 주담대 10년 규정 · 기존 신용 이자만"
        footnote={
          <>
            동일 조건(3억·4%·만기일시)에서 DSR 5년 규정은 연 7,200만 원, DTI 10년 규정은 연 4,200만 원으로 DTI가 더 낮게
            산출됩니다. DTI 60%를 통과해도 DSR 40%에서 먼저 한도가 줄어드는 경우가 많습니다.
          </>
        }
      >
        <CalculatorReferenceTable caption="DTI 계산 예시" headers={["항목", "값"]} rows={exampleRows} minWidth="min-w-[480px]" />
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
          caption="DTI 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>


      <CalculatorReferenceSection number={4} title="법령·세율·요율 기준표">
        <p className="text-muted-foreground text-xs font-medium">업권별 DTI 한도 (참고)</p>
        <CalculatorReferenceTable
          caption="업권별 DTI 한도"
          headers={["구분", "한도", "비고"]}
          rows={sectorLimitRows}
          minWidth="min-w-[560px]"
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">DTI vs DSR — 부채 반영 범위</p>
        <CalculatorReferenceTable
          caption="부채 항목별 DTI·DSR 반영"
          headers={["항목", "DTI", "DSR"]}
          rows={inclusionRows}
          minWidth="min-w-[480px]"
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">만기일시(주담대) — DTI 산정 기준</p>
        <CalculatorReferenceTable
          caption="만기일시 주담대 DTI 산정 기준"
          headers={["기준", "설명"]}
          rows={bulletRows}
          minWidth="min-w-[560px]"
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">원금균등 — DTI 연간 원리금 산출</p>
        <CalculatorReferenceTable
          caption="원금균등 주담대 DTI 연간 원리금 산출 방식"
          headers={["방식", "산출 개요"]}
          rows={epRows}
          minWidth="min-w-[640px]"
        />
        <p className="text-muted-foreground text-xs leading-relaxed">
          원리금균등·체증식 주담대는 각 상환 방식에 맞는 연간 원리금을 합산합니다. 체증식은 「월 상환 직접」 입력만 지원합니다.
        </p>

        <p className="text-muted-foreground mt-4 text-xs font-medium">흔한 오해</p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            「DTI 60% 통과 = 대출 가능」으로만 판단하는 경우가 많습니다. 은행권 주담대는{" "}
            <Link href="/guide/dsr-40-mortgage-limit" className="text-primary underline-offset-4 hover:underline">
              DSR 40%
            </Link>
            ·
            <Link href="/guide/stress-dsr-explained" className="text-primary ml-1 underline-offset-4 hover:underline">
              스트레스 DSR
            </Link>
            이 먼저 한도를 제한하는 경우가 훨씬 많습니다.
          </li>
          <li>
            신용·카드론 <strong className="text-foreground font-medium">원금</strong>은 DTI에는 덜 반영되지만 DSR에는
            포함됩니다. 소액 대출 여러 개가 DSR에서 합쳐 한도를 깎을 수 있습니다.
          </li>
          <li>
            만기일시 주담대 DTI와 DSR 산정이 같다고 보기 쉽지만, 본 계산기는 DTI{" "}
            <strong className="text-foreground font-medium">10년</strong>·DSR{" "}
            <strong className="text-foreground font-medium">5년</strong> 원금 환산을 각각 적용합니다.
          </li>
          <li>
            <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary underline-offset-4 hover:underline">
              디딤돌·보금자리
            </Link>
            등 정책금융은 DSR 대신 DTI 60%가 적용되는 사례가 있으나, 소득·담보·LTV 등 별도 요건이 있습니다.
          </li>
        </ul>
      </CalculatorReferenceSection>
      <CalculatorReferenceNotes number={5} title="DTI 산정 시 참고사항" notes={notes} />
    </CalculatorReferenceCard>

  );
}
