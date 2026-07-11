import {
  bulletDsrBasisHints,
  bulletDsrBasisLabels,
  bulletDsrBasisOrder,
  equalPrincipalDsrBasisHints,
  equalPrincipalDsrBasisLabels,
  stressDsrPresets,
  type EqualPrincipalDsrBasis,
} from "@/lib/dsr-calculations";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

const formulaRows = [
  ["DSR(%)", "연간 원리금 상환 합계 ÷ 연소득 × 100"],
  ["① 기존 대출", "각 건별 연간 원리금(원금+이자) 합산"],
  ["② 신규 대출", "상환방식·거치기간·스트레스 DSR 반영 후 연간 원리금 산출"],
  ["③ DSR", "(① + ②) ÷ 연소득 × 100"],
] as const;

const exampleRows = [
  ["연소득", "8,000만 원"],
  ["기존 신용대출", "3,000만 원 · 연 8% → 연간 원리금 약 240만 원"],
  ["신규 주담대", "3억 원 · 연 4% · 30년 · 원리금균등 → 연간 원리금 약 1,720만 원"],
  ["DSR", "≈ (240 + 1,720) ÷ 8,000 × 100 ≈ 24.5%"],
] as const;

const includedRows = [
  ["연소득", "세전 연소득(만 원) 기준"],
  ["기존·신규 대출", "건별 잔액·잔여기간·금리·상환방식·거치기간"],
  ["스트레스 DSR", "신규·대출 조건 입력 건에 명목 가산금리 적용"],
  ["원금균등·만기일시", "DSR 연간 상환 산정 방식 선택"],
  ["월 상환 직접 입력", "체증식·기관별 산정값 등 월 납입액 직접 반영"],
  ["대출 종류", "주택담보·신용·전세·자동차 할부 등 일반 유형"],
] as const;

const excludedRows = [
  ["마이너스통장·리볼빙", "한도·이자·DSR 산정 방식이 상품별로 상이"],
  ["보증채무", "연대보증·지급보증 등 부채 재산정"],
  ["LTV·DTI", "담보·소득 외 한도 규정"],
  ["규제지역·다주택", "정책·지역별 세부 한도"],
  ["스트레스 DSR 시행 단계", "금리 유형별 가중·적용 범위(본 계산기는 간이 모델)"],
  ["사업·임대·연금 소득", "금융기관별 소득 인정 방식"],
] as const;

const notes = [
  "연소득은 근로소득 기준 세전 연소득(만 원)을 가정하며, 사업·임대·연금 등은 금융기관별 인정 방식이 다릅니다.",
  "대출 조건 입력 시 잔액·잔여 기간(개월)을 기준으로 월 상환을 계산합니다. 총액·총 기간·거치도 함께 반영할 수 있습니다.",
  "스트레스 DSR은 신규·대출 조건 입력 건에만 가산금리를 적용합니다. 기존 대출·월 상환 직접 입력 건은 입력값을 그대로 씁니다.",
  "체증식은 「월 상환 직접」 입력만 지원합니다. 통장·상환 스케줄의 월 납입액을 그대로 넣으세요.",
  "만기일시 DSR 기본은 「5년 원금균등+전액 이자」(신용·만기일시 규정)이며, 원리금균등 환산·이자만도 선택할 수 있습니다. 금융기관별로 정의가 다를 수 있습니다.",
  "마이너스통장·신용카드 리볼빙·보증채무 등은 본 화면에 포함되지 않을 수 있습니다.",
  "LTV·DTI·규제지역·다주택·스트레스 DSR 단계별 시행 등은 별도 규정이며, 승인 한도는 신청 금융기관에서 확인해야 합니다.",
] as const;

export function DsrCalculatorReference() {
  const epRows = (Object.keys(equalPrincipalDsrBasisLabels) as EqualPrincipalDsrBasis[]).map((k) => [
    equalPrincipalDsrBasisLabels[k],
    equalPrincipalDsrBasisHints[k],
  ]);
  const bulletRows = bulletDsrBasisOrder.map((k) => [bulletDsrBasisLabels[k], bulletDsrBasisHints[k]]);
  const stressRows = stressDsrPresets
    .filter((p) => p.id !== "custom")
    .map((p) => [p.label, p.nominalPercent != null ? `${p.nominalPercent}%p` : "—"]);

  return (
    <CalculatorReferenceCard
      title="DSR 산정 참고"
      summary="DSR(%) = 연간 원리금 상환 합계 ÷ 연소득 × 100. 아래 표는 일반적인 기준을 요약한 것이며, 금융기관·상품별 심사와 다를 수 있습니다."
      footer="기준표는 가이드·정책 공지를 바탕으로 사용자가 빠르게 대조할 수 있도록 정리한 참고용입니다. 소득 인정·부채 재산정·스트레스 적용 범위는 금융기관 심사와 다를 수 있습니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="DSR 산출 공식 및 계산 순서"
          headers={["항목", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection
        number={2}
        title="계산 예시 (참고)"
        subtitle="연소득 8,000만 원 · 기존 신용 3,000만 원(8%) · 신규 주담대 3억 원(4%, 30년, 원리금균등) 가정"
      >
        <CalculatorReferenceTable
          caption="DSR 계산 예시"
          headers={["항목", "값"]}
          rows={exampleRows}
          minWidth="min-w-[560px]"
        />
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
        <p className="text-muted-foreground text-xs font-medium">업권별 DSR 한도 (참고)</p>
        <CalculatorReferenceTable
          caption="업권별 DSR 한도"
          headers={["구분", "DSR 한도", "비고"]}
          rows={[
            ["은행권", "40%", "주택담보·가계대출 일반 기준"],
            ["제2금융권", "50%", "저축은행·카드·캐피탈 등(상품별 상이)"],
            ["서민금융", "별도", "햇살론 등 정책상품은 별도 규정"],
          ]}
          minWidth="min-w-[480px]"
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">DSR에 포함되는 부채 (일반)</p>
        <CalculatorReferenceTable
          caption="대출 종류별 DSR 포함 항목"
          headers={["대출 종류", "포함 항목"]}
          rows={[
            ["주택담보대출", "연간 원금 + 이자"],
            ["신용대출·카드론", "연간 원금 + 이자"],
            ["자동차 할부", "연간 원금 + 이자"],
            ["전세자금대출", "연간 원금 + 이자(기관별 이자만 인정 등 상이)"],
            ["마이너스통장", "한도액 기준 연간 이자(미사용 한도도 반영될 수 있음)"],
          ]}
          minWidth="min-w-[560px]"
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">원금균등 — 연간 상환액 산출 방식</p>
        <CalculatorReferenceTable
          caption="원금균등 DSR 연간 상환 산출 방식"
          headers={["방식", "산출 개요"]}
          rows={epRows}
          minWidth="min-w-[640px]"
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">만기일시 — DSR 산정 기준</p>
        <CalculatorReferenceTable
          caption="만기일시 DSR 산정 기준"
          headers={["기준", "설명"]}
          rows={bulletRows}
          minWidth="min-w-[560px]"
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">스트레스 DSR — 명목 가산금리 참고</p>
        <CalculatorReferenceTable
          caption="스트레스 DSR 명목 가산금리 프리셋"
          headers={["구분", "명목 가산(%p)"]}
          rows={stressRows}
          minWidth="min-w-[720px]"
          lastColumnRight
        />
        <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
          신규 대출 금리 유형별 실제 가산 = 명목 × 가중(변동 100%, 혼합 80%, 주기형 40%, 순수 고정 0%). 계산기 입력과
          동일한 간이 모델입니다.
        </p>
      </CalculatorReferenceSection>
      <CalculatorReferenceNotes number={5} notes={notes} />
    </CalculatorReferenceCard>

  );
}
