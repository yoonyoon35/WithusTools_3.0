import {
  COMPREHENSIVE_LAND_BASIC_DEDUCTION,
  COMPREHENSIVE_LAND_BRACKETS,
  HOUSING_BASIC_DEDUCTION_DEFAULT,
  HOUSING_BASIC_DEDUCTION_ONE_HOME,
  HOUSING_BRACKETS_THREE_OR_MORE,
  HOUSING_BRACKETS_TWO_OR_LESS,
  HOUSING_FAIR_MARKET_RATIO,
  LOCAL_EDUCATION_TAX_RATE,
  PROPERTY_TAX_COMPREHENSIVE_LAND_BRACKETS,
  PROPERTY_TAX_HOUSING_BRACKETS,
  PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT,
  PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME,
  PROPERTY_TAX_HOUSING_TOP_STANDARD_RATE,
  PROPERTY_TAX_LAND_FAIR_RATIO,
  PROPERTY_TAX_SEPARATE_LAND_BRACKETS,
  SEPARATE_LAND_BASIC_DEDUCTION,
  SEPARATE_LAND_BRACKETS,
  toPercent,
} from "@/lib/comprehensive-property-tax-calculations";
import { formatNumber } from "@/lib/loan-calculations";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

function formatBracketLabel(maxBase: number): string {
  if (!Number.isFinite(maxBase)) return "초과";
  if (maxBase >= 1_000_000_000) return `${maxBase / 100_000_000}억 원 이하`;
  if (maxBase >= 100_000_000) return `${maxBase / 100_000_000}억 원 이하`;
  return `${maxBase / 10_000}만 원 이하`;
}

const formulaRows = [
  ["① 재산세(7월)", "공시가격 × 재산세 공정시장가액비율 → 과세표준 × 세율 − 누진공제"],
  ["② 지방교육세", "재산세 × 20%"],
  ["③ 종부세(12월)", "∑공시가격 − 기본공제 → × 종부세 공정 → 과세표준 × 세율 − 누진공제"],
  ["④ 재산세 공제", "종부세액 − 공제할 재산세액(표준세액 비례)"],
  ["⑤ 세액공제·상한", "1세1주택 세액공제(한도 80%) · 세부담상한(150%)"],
  ["⑥ 농특·합계", "종부세 납부세액 + 농어촌특별세(20%) · 연간 = 재산세+지방교육세+종부세+농특"],
] as const;

const exampleRows = [
  ["가정", "주택 1건 · 공시가격 5억 · 1주택(비1세1주택) · 85㎡ 이하"],
  ["재산세 과세표준", "5억 × 60% = 3억 원"],
  ["재산세+지방교육세", "누진세율 적용 후 합산(7월 납부)"],
  ["종부세", "5억 − 9억 기본공제 → 과세 없음(기본공제 이내)"],
  ["연간 보유세", "재산세+지방교육세 위주(종부세 해당 없음)"],
] as const;

const includedRows = [
  ["주택·토지 유형", "주택(부속토지)·종합합산토지·별도합산토지"],
  ["재산세", "공시가격·공정시장가액비율·누진세율·지방교육세"],
  ["종합부동산세", "기본공제·공정시장가액비율·재산세 공제·농특세"],
  ["1세1주택", "기본공제·공정비율·세액공제(연령·보유)"],
  ["세부담상한", "전년 대비 150% 상한"],
] as const;

const excludedRows = [
  ["합산배제 임대주택", "9월 신고·배제 요건 별도"],
  ["법인 주택", "단일세율·기본공제 없음(별도 규정)"],
  ["사원용주택·공동명의", "과세대상·안분 별도"],
  ["재산세 6·1 특례", "지역·요건별 세부 규정"],
  ["분납·연부연납", "납부 방식 별도 신청"],
] as const;

const typeDeductionRows = [
  ["주택(부속토지 포함)", "재산세 과세대상 주택", "9억(1세대1주택 12억)", `${toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT)}(${toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME)})`, "60%"],
  ["종합합산 토지", "나대지·잡종지 등", "5억", toPercent(PROPERTY_TAX_LAND_FAIR_RATIO), "100%"],
  ["별도합산 토지", "상가·사무실 부속토지 등", "80억", toPercent(PROPERTY_TAX_LAND_FAIR_RATIO), "100%"],
] as const;

const notes = [
  "주택·토지 공시가격과 주택 수·1세대 1주택 여부를 입력하면 재산세·종합부동산세·농어촌특별세를 유형별로 산출합니다.",
  "재산세(7월)를 먼저 계산한 뒤, 종부세(12월)에서 공제할 재산세액을 차감하는 순서로 반영합니다.",
  "1세대 1주택은 재산세·종부세 기본공제·공정시장가액비율·세액공제(연령·보유, 합산 한도 80%)가 달라집니다.",
  "세부담상한은 전년 납부세액 대비 150%를 넘지 않도록 조정합니다.",
  "합산배제 임대주택·사원용주택·법인 주택 등은 본 계산기에 미반영일 수 있습니다.",
] as const;

export function ComprehensivePropertyTaxCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="종합부동산세 산정 참고"
      summary="보유 부동산의 재산세(지방세)를 먼저 산출한 뒤 종합부동산세(국세)에서 공제할 재산세액을 차감합니다. 아래는 본 계산기 산식과 세율 구조를 요약한 참고용입니다."
      footer="기준표는 국세청 세액계산 흐름도·종합부동산세 신고서 별지를 바탕으로 사용자가 빠르게 대조할 수 있도록 정리한 참고용입니다. 과세기준일(6월 1일)·신고 요건은 관할 세무서에서 확인해야 합니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="재산세 → 종부세 산출 순서"
          headers={["단계", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[720px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection
        number={2}
        title="계산 예시 (참고)"
        subtitle="주택 공시가격 5억 원 · 1주택(비1세1주택) 가정"
      >
        <CalculatorReferenceTable
          caption="종부세 기본공제 이내 주택 예시"
          headers={["항목", "내용"]}
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
        <p className="text-muted-foreground text-sm">
          국세청 세액계산 흐름도·종합부동산세 신고서 별지3호 부표를 기준으로, 재산세(지방세)를 먼저 산출한 뒤
          종합부동산세(국세)에서 공제할 재산세액을 차감합니다. 유형별로 각각 계산한 후 합산합니다.
        </p>

        <div className="mt-4 overflow-auto rounded-md border">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
              계산 단계
            </caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="w-12 p-2 text-left font-medium">
                  단계
                </th>
                <th scope="col" className="w-40 p-2 text-left font-medium">
                  항목
                </th>
                <th scope="col" className="p-2 text-left font-medium">
                  산식·적용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">①</td>
                <td className="p-2 align-top font-medium whitespace-nowrap">
                  재산세·지방세
                  <span className="text-muted-foreground block text-xs font-normal">7월 납부</span>
                </td>
                <td className="p-2 align-top">
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>
                      공시가격 × 재산세 공정시장가액비율 (주택 일반{" "}
                      {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT)}, 1세1주택{" "}
                      {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME)}, 토지{" "}
                      {toPercent(PROPERTY_TAX_LAND_FAIR_RATIO)})
                    </li>
                    <li>= 재산세 과세표준 × 세율 − 누진공제</li>
                    <li>
                      = 재산세 + 지방교육세(재산세의 {toPercent(LOCAL_EDUCATION_TAX_RATE)})
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">②</td>
                <td className="p-2 align-top font-medium whitespace-nowrap">
                  종합부동산세
                  <span className="text-muted-foreground block text-xs font-normal">12월 납부</span>
                </td>
                <td className="p-2 align-top">
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>
                      ∑ 공시가격 − 기본공제 (주택 {formatNumber(HOUSING_BASIC_DEDUCTION_DEFAULT)}/
                      {formatNumber(HOUSING_BASIC_DEDUCTION_ONE_HOME)}, 종합합산토지{" "}
                      {formatNumber(COMPREHENSIVE_LAND_BASIC_DEDUCTION)}, 별도합산토지{" "}
                      {formatNumber(SEPARATE_LAND_BASIC_DEDUCTION)})
                    </li>
                    <li>
                      × 종부세 공정시장가액비율 (주택 {toPercent(HOUSING_FAIR_MARKET_RATIO)}, 토지 100%)
                    </li>
                    <li>= 종부세 과세표준 × 세율 − 누진공제</li>
                    <li>= 종합부동산세액 − 공제할 재산세액</li>
                    <li className="text-xs">
                      (공제 표준세액 = (공시가격−공제) × 종부세공정 × 재산세공정 × 표준세율)
                    </li>
                    <li>− 1세1주택 세액공제(한도 80%) − 세부담상한(150%)</li>
                    <li>= 종부세 납부세액 + 농어촌특별세(20%)</li>
                  </ul>
                  <p className="text-muted-foreground mt-2 text-xs">
                    유형별 기본공제·공정시장가액비율은 아래 표를 참고하세요.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-top font-medium">③</td>
                <td className="p-2 align-top font-medium whitespace-nowrap">연간 보유세</td>
                <td className="p-2 align-top">재산세 + 지방교육세 + 종부세 + 농어촌특별세</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground mt-4 text-xs font-medium">유형별 과세대상·공제금액·공정시장가액비율</p>
        <CalculatorReferenceTable
          caption="유형별 과세대상·공제·공정시장가액비율"
          headers={["유형", "과세대상", "기본공제", "재산세 공정", "종부세 공정"]}
          rows={typeDeductionRows}
          minWidth="min-w-[720px]"
          lastColumnRight
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">재산세(지방세) 기준표</p>
        <p className="text-muted-foreground text-sm">
          재산세는 관할 시·군·구에서 7월경 고지합니다. 과세표준 = 공시가격 × 재산세 공정시장가액비율(주택 일반{" "}
          {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT)}, 1세대 1주택{" "}
          {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME)}, 토지 {toPercent(PROPERTY_TAX_LAND_FAIR_RATIO)}).
          지방교육세는 재산세의 {toPercent(LOCAL_EDUCATION_TAX_RATE)}입니다. 1세대 1주택·공시가격 9억 원 이하는
          주택분 0.05% 단일세율이 적용됩니다.
        </p>
        <p className="text-muted-foreground mt-3 text-xs font-medium">주택분 재산세</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <caption className="sr-only">주택분 재산세 세율</caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="p-2 text-left font-medium">
                  과세표준
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  세율
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  누진공제
                </th>
              </tr>
            </thead>
            <tbody>
              {PROPERTY_TAX_HOUSING_BRACKETS.map((b) => (
                <tr key={b.maxBase} className="border-b last:border-b-0">
                  <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                  <td className="p-2 text-right">{toPercent(b.rate)}</td>
                  <td className="p-2 text-right">
                    {b.progressiveDeduction > 0 ? `${formatNumber(b.progressiveDeduction)}원` : "없음"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground mt-3 text-xs font-medium">토지분 재산세</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="sr-only">토지분 재산세 세율</caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="p-2 text-left font-medium">
                  구분
                </th>
                <th scope="col" className="p-2 text-left font-medium">
                  과세표준
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  세율
                </th>
              </tr>
            </thead>
            <tbody>
              {PROPERTY_TAX_COMPREHENSIVE_LAND_BRACKETS.map((b) => (
                <tr key={`pt-comp-${b.maxBase}`} className="border-b">
                  <td className="p-2">종합합산</td>
                  <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                  <td className="p-2 text-right">{toPercent(b.rate)}</td>
                </tr>
              ))}
              {PROPERTY_TAX_SEPARATE_LAND_BRACKETS.map((b) => (
                <tr key={`pt-sep-${b.maxBase}`} className="border-b last:border-b-0">
                  <td className="p-2">별도합산</td>
                  <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                  <td className="p-2 text-right">{toPercent(b.rate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground mt-4 text-xs font-medium">종합부동산세(국세) 기준표(&apos;23년 이후)</p>
        <p className="text-muted-foreground mt-2 text-xs font-medium">주택분 세율 — 2주택 이하(개인)</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <caption className="sr-only">종부세 주택분 2주택 이하 세율</caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="p-2 text-left font-medium">
                  과세표준
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  세율
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  누진공제
                </th>
              </tr>
            </thead>
            <tbody>
              {HOUSING_BRACKETS_TWO_OR_LESS.map((b) => (
                <tr key={b.maxBase} className="border-b last:border-b-0">
                  <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                  <td className="p-2 text-right">{toPercent(b.rate)}</td>
                  <td className="p-2 text-right">
                    {b.progressiveDeduction > 0 ? `${formatNumber(b.progressiveDeduction)}원` : "없음"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground mt-3 text-xs font-medium">주택분 세율 — 3주택 이상(개인)</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <caption className="sr-only">종부세 주택분 3주택 이상 세율</caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="p-2 text-left font-medium">
                  과세표준
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  세율
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  누진공제
                </th>
              </tr>
            </thead>
            <tbody>
              {HOUSING_BRACKETS_THREE_OR_MORE.map((b) => (
                <tr key={b.maxBase} className="border-b last:border-b-0">
                  <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                  <td className="p-2 text-right">{toPercent(b.rate)}</td>
                  <td className="p-2 text-right">
                    {b.progressiveDeduction > 0 ? `${formatNumber(b.progressiveDeduction)}원` : "없음"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground mt-3 text-xs font-medium">토지분 세율</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="sr-only">종부세 토지분 세율</caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="p-2 text-left font-medium">
                  구분
                </th>
                <th scope="col" className="p-2 text-left font-medium">
                  과세표준
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  세율
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPREHENSIVE_LAND_BRACKETS.map((b) => (
                <tr key={`comp-${b.maxBase}`} className="border-b">
                  <td className="p-2">종합합산</td>
                  <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                  <td className="p-2 text-right">{toPercent(b.rate)}</td>
                </tr>
              ))}
              {SEPARATE_LAND_BRACKETS.map((b) => (
                <tr key={`sep-${b.maxBase}`} className="border-b last:border-b-0">
                  <td className="p-2">별도합산</td>
                  <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                  <td className="p-2 text-right">{toPercent(b.rate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 rounded-md border p-3 text-xs leading-relaxed">
          <p className="text-foreground font-medium">적용요건·참고사항</p>
          <ol className="text-muted-foreground mt-2 list-decimal space-y-1 pl-4">
            <li>
              <strong>재산세와 종부세는 별도 고지</strong>이지만, 종부세 산출 시 공제할 재산세액을 차감합니다.
              공제 표준세액은 종합부동산세법 시행령 제4조의2에 따라 (공시가격−공제금액) × 종부세 공정 × 재산세
              공정 × 표준세율(주택 {toPercent(PROPERTY_TAX_HOUSING_TOP_STANDARD_RATE)})로 산출하고, 실제 공제액은
              재산세 × (공제 표준세액 ÷ 재산세 표준세액)입니다.
            </li>
            <li>
              1세대 1주택의 재산세 공정시장가액비율은 일반 주택({toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_DEFAULT)}
              )과 달리 {toPercent(PROPERTY_TAX_HOUSING_FAIR_RATIO_ONE_HOME)}가 적용됩니다. 종부세 공정은 주택{" "}
              {toPercent(HOUSING_FAIR_MARKET_RATIO)}입니다.
            </li>
            <li>
              과세기준일은 매년 <strong>6월 1일</strong>입니다. 주택 수·공시가격은 이 날 기준으로 확정됩니다.
            </li>
            <li>
              기본공제: 주택 {formatNumber(HOUSING_BASIC_DEDUCTION_DEFAULT)}원(1세대 1주택{" "}
              {formatNumber(HOUSING_BASIC_DEDUCTION_ONE_HOME)}원), 종합합산토지{" "}
              {formatNumber(COMPREHENSIVE_LAND_BASIC_DEDUCTION)}원, 별도합산토지{" "}
              {formatNumber(SEPARATE_LAND_BASIC_DEDUCTION)}원.
            </li>
            <li>
              1세대 1주택 세액공제: 연령 60세(20%)·65세(30%)·70세(40%), 보유 5년(20%)·10년(40%)·15년(50%) — 합산
              한도 80%.
            </li>
            <li>재산세 7월, 종부세·농특세 12월 1일~15일 납부. 250만 원 초과 시 종부세 6개월 이내 분납 가능.</li>
            <li>합산배제 임대주택·사원용주택 등은 9월 16일~30일 신고 필요. 본 계산기에는 미반영.</li>
            <li>법인 주택분: 2주택 이하 2.7%, 3주택 이상 5.0% 단일세율(기본공제 없음).</li>
          </ol>
        </div>
      </CalculatorReferenceSection>
      <CalculatorReferenceNotes number={5} notes={notes} />
    </CalculatorReferenceCard>

  );
}
