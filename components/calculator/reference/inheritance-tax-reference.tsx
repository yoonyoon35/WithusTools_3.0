import {
  BASIC_DEDUCTION,
  CHILD_DEDUCTION_PER_PERSON,
  CO_RESIDENCE_HOUSING_CAP,
  DISABLED_DEDUCTION_BASE,
  ELDERLY_DEDUCTION_PER_PERSON,
  FILING_TAX_CREDIT_RATE,
  FINANCIAL_DEDUCTION_CAP,
  FINANCIAL_DEDUCTION_MIN,
  FINANCIAL_DEDUCTION_THRESHOLD,
  GENERATION_SKIP_MINOR_THRESHOLD,
  INSTALLMENT_THRESHOLD,
  INHERITANCE_TAX_BRACKETS,
  LUMP_SUM_DEDUCTION,
  MINOR_DEDUCTION_BASE,
  MINIMUM_TAXABLE_BASE,
  SPOUSE_DEDUCTION_CAP,
  SPOUSE_DEDUCTION_MINIMUM,
  toPercent,
} from "@/lib/inheritance-tax-calculations";
import { formatNumber } from "@/lib/loan-calculations";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

function formatBracketLabel(maxBase: number): string {
  if (!Number.isFinite(maxBase)) return "30억 원 초과";
  if (maxBase >= 1_000_000_000) return `${maxBase / 100_000_000}억 원 이하`;
  return `${maxBase / 10_000}만 원 이하`;
}

const exampleRows = [
  ["가정", "과세가액 10억 · 배우자·자녀 2명 · 일괄공제 적용"],
  ["상속공제", "max(기초+인적, 5억) + 배우자공제 등"],
  ["과세표준", "과세가액 − 상속공제 − 감정평가 수수료"],
  ["산출세액", "과세표준 × 누진세율 − 누진공제"],
  ["납부세액", "산출세액 + 할증 − 증여세액공제 − 신고세액공제(3%)"],
] as const;

const includedRows = [
  ["과세가액", "상속재산 − 공과금·채무·장례비 + 사전증여"],
  ["상속공제", "기초·일괄·인적·배우자·금융·동거주택 등"],
  ["감정평가 수수료", "과세표준에서 차감(상속공제 아님)"],
  ["세대생략 할증", "직계비속(자녀 외)·미성년 초과분"],
  ["세액공제", "증여세액공제·신고세액공제(3%)"],
] as const;

const excludedRows = [
  ["가업·영농상속공제", "요건·한도 별도"],
  ["재해공제", "재해 요건 별도"],
  ["복수 상속인 안분", "1건 기준 참고용"],
  ["비과세·불산입", "재산 분류별 별도"],
  ["무신고 가산세", "추징·가산세 미반영"],
] as const;

const generationSkipRows = [
  [
    "세대생략 할증",
    `자녀가 아닌 직계비속(손·손녀 등) 상속 시 산출세액 × 지분 × 30%. 미성년자가 ${formatNumber(GENERATION_SKIP_MINOR_THRESHOLD)}원 초과 상속 시 40%`,
  ],
  ["대습상속", "선순위 상속인 사망으로 대습 상속한 경우 세대생략 할증 배제"],
  [
    "증여세액공제",
    `과세가액 ${formatNumber(LUMP_SUM_DEDUCTION)}원 초과·사전증여분에 대해 납부(예정) 증여세를 산출세액 안분 공제`,
  ],
  [
    "신고세액공제",
    `법정신고기한 내 자진신고 시 (산출세액 + 할증 − 증여세액공제) × ${toPercent(FILING_TAX_CREDIT_RATE)}. 무신고·과소신고 시 미적용`,
  ],
] as const;

const notes = [
  "상속재산·공과금·채무·사전증여·상속인 구성을 입력하면 상속세를 산출합니다.",
  "상속공제는 기초·일괄·인적·배우자·금융·동거주택 등을 합산하되 제24조 종합한도를 적용합니다.",
  "감정평가 수수료는 상속공제가 아니라 과세표준에서 별도 차감합니다.",
  "과세표준 2억 원 미만이면 상속세가 없습니다.",
  "복수 상속인·가업·영농상속·비과세 재산 등은 본 계산기에 미반영일 수 있습니다.",
] as const;

export function InheritanceTaxCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="상속세 산정 참고"
      summary="과세가액 → 상속공제 → 과세표준 → 산출세액 → 납부세액 순으로 계산합니다. 아래는 본 계산기 산식과 국세청 세액계산 흐름도를 요약한 참고용입니다."
      footer="기준표는 국세청 상속세 신고서 산출 순서를 바탕으로 사용자가 빠르게 대조할 수 있도록 정리한 참고용입니다. 최종 신고는 홈택스·세무사 확인을 권장합니다."
    >
      <CalculatorReferenceSection
        number={1}
        title="본 계산기 산출 공식·순서"
        footnote="감정평가 수수료는 상속공제가 아니라 과세표준에서 차감합니다."
      >
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="border-b bg-muted/50 px-3 py-2 text-left text-sm font-medium">
              계산 단계
            </caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="w-12 p-2 text-left font-medium">
                  단계
                </th>
                <th scope="col" className="w-36 p-2 text-left font-medium">
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
                <td className="p-2 align-top font-medium">과세가액</td>
                <td className="p-2 align-top">
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>총상속재산 − 비과세·불산입 − 공과금·채무·장례비</li>
                    <li>
                      + 사전증여: 상속인 10년 이내·비상속인 5년 이내 증여재산(과세가액에 합산)
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">②</td>
                <td className="p-2 align-top font-medium">상속공제</td>
                <td className="p-2 align-top">
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>
                      max(기초+인적, {formatNumber(LUMP_SUM_DEDUCTION)}원 일괄) + 배우자 + 금융 + 동거주택 +
                      재해 + 가업·영농 등
                    </li>
                    <li>제24조 종합한도 = 과세가액 − 유증·포기재산 − (과세가액 5억 초과 시 사전증여분)</li>
                  </ul>
                  <p className="text-muted-foreground mt-2 text-xs">
                    공제 항목별 금액은 아래 「상속공제 기준표」를 참고하세요.
                  </p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">③</td>
                <td className="p-2 align-top font-medium">과세표준</td>
                <td className="p-2 align-top">
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>과세가액 − 상속공제 − 감정평가 수수료</li>
                    <li>
                      과세표준 {formatNumber(MINIMUM_TAXABLE_BASE)}원 미만 →{" "}
                      <strong className="text-foreground">상속세 없음</strong>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-top font-medium">④</td>
                <td className="p-2 align-top font-medium whitespace-nowrap">
                  산출·납부세액
                </td>
                <td className="p-2 align-top">
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>산출세액 = 과세표준 × 누진세율 − 누진공제</li>
                    <li>+ 세대생략 할증(30%·미성년 20억 초과 40%)</li>
                    <li>− 증여세액공제(과세가액 5억 초과·사전증여분) − 신고세액공제({toPercent(FILING_TAX_CREDIT_RATE)})</li>
                  </ul>
                  <p className="text-muted-foreground mt-2 text-xs">
                    할증·공제 상세는 아래 「세대생략·세액공제」 표를 참고하세요.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CalculatorReferenceSection>

      <CalculatorReferenceSection
        number={2}
        title="계산 예시 (참고)"
        subtitle="과세가액 10억 원 · 배우자·자녀 2명 · 일괄공제 적용 가정"
      >
        <CalculatorReferenceTable
          caption="상속세 계산 흐름 예시"
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
        <p className="text-muted-foreground text-xs font-medium">상속공제 기준표(상속세법 제18~23조의2)</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="sr-only">상속공제 기준표</caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="w-36 p-2 text-left font-medium">
                  공제
                </th>
                <th scope="col" className="p-2 text-left font-medium">
                  금액·산식
                </th>
                <th scope="col" className="p-2 text-left font-medium">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">기초공제</td>
                <td className="p-2 align-top">{formatNumber(BASIC_DEDUCTION)}원</td>
                <td className="p-2 align-top text-muted-foreground">모든 상속에 공통</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">일괄공제</td>
                <td className="p-2 align-top">{formatNumber(LUMP_SUM_DEDUCTION)}원</td>
                <td className="p-2 align-top text-muted-foreground">
                  max(기초+인적, 5억). 배우자 단독 상속인은 일괄공제 불가
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">인적공제</td>
                <td className="p-2 align-top">
                  <ul className="text-muted-foreground list-disc space-y-0.5 pl-4">
                    <li>자녀(태아 포함) {formatNumber(CHILD_DEDUCTION_PER_PERSON)}원/인</li>
                    <li>
                      미성년자 {formatNumber(MINOR_DEDUCTION_BASE)}원 × 19세까지 연수(1년 미만 1년)
                    </li>
                    <li>65세 이상 {formatNumber(ELDERLY_DEDUCTION_PER_PERSON)}원/인</li>
                    <li>
                      장애인 {formatNumber(DISABLED_DEDUCTION_BASE)}원 × 기대여명(1년 미만 1년)
                    </li>
                  </ul>
                </td>
                <td className="p-2 align-top text-muted-foreground">배우자 제외 상속인·동거가족</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">배우자공제</td>
                <td className="p-2 align-top">
                  min(실제상속액, 법정상속분, {formatNumber(SPOUSE_DEDUCTION_CAP)}원)
                  <br />
                  최소 {formatNumber(SPOUSE_DEDUCTION_MINIMUM)}원
                </td>
                <td className="p-2 align-top text-muted-foreground">
                  민법 법정상속분·사전증여 과세표준 차감 반영
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 align-top font-medium">금융재산</td>
                <td className="p-2 align-top">
                  {formatNumber(FINANCIAL_DEDUCTION_THRESHOLD)}원 이하 전액, 초과 시 max(20%,{" "}
                  {formatNumber(FINANCIAL_DEDUCTION_MIN)}원) · 한도 {formatNumber(FINANCIAL_DEDUCTION_CAP)}원
                </td>
                <td className="p-2 align-top text-muted-foreground">본래 상속재산 중 금융재산만(사전증여 제외)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 align-top font-medium whitespace-nowrap">동거주택</td>
                <td className="p-2 align-top">
                  상속주택가액 100%, 한도 {formatNumber(CO_RESIDENCE_HOUSING_CAP)}원
                </td>
                <td className="p-2 align-top text-muted-foreground">
                  10년 이상 동거·무주택·1주택 등 요건(제23조의2)
                </td>
              </tr>
              <tr>
                <td className="p-2 align-top font-medium whitespace-nowrap">감정평가 수수료</td>
                <td className="p-2 align-top">과세표준에서 차감</td>
                <td className="p-2 align-top text-muted-foreground">
                  <strong className="text-foreground">상속공제 아님</strong> — 공제 후 금액에서 별도 차감
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground mt-4 text-xs font-medium">세대생략·세액공제(제27~28·69조)</p>
        <CalculatorReferenceTable
          caption="세대생략·세액공제"
          headers={["구분", "내용"]}
          rows={generationSkipRows}
          minWidth="min-w-[520px]"
        />

        <p className="text-muted-foreground mt-4 text-xs font-medium">상속세율(제26조)</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <caption className="sr-only">상속세 누진세율</caption>
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
              {INHERITANCE_TAX_BRACKETS.map((b) => (
                <tr key={b.maxBase} className="border-b last:border-b-0">
                  <td className="p-2">{formatBracketLabel(b.maxBase)}</td>
                  <td className="p-2 text-right tabular-nums">{toPercent(b.rate)}</td>
                  <td className="p-2 text-right tabular-nums">
                    {b.progressiveDeduction > 0 ? `${formatNumber(b.progressiveDeduction)}원` : "없음"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 rounded-md border p-3 text-xs leading-relaxed">
          <p className="text-foreground font-medium">신고·납부·참고사항</p>
          <ol className="text-muted-foreground mt-2 list-decimal space-y-1 pl-4">
            <li>
              <strong className="text-foreground">신고기한</strong>: 상속개시일이 속하는 달의 말일부터 6개월
              이내(외국 거주·재산 국외 등은 9개월). 기한 내 신고 시 신고세액공제 3% 적용.
            </li>
            <li>
              <strong className="text-foreground">분납</strong>: 납부세액 {formatNumber(INSTALLMENT_THRESHOLD)}원
              초과 시 2년(또는 5년·10년) 분납 가능(제70조). 2천만 이하 초과분 전액, 그 이상은 50% 범위 내.
            </li>
            <li>
              <strong className="text-foreground">연부연납·물납</strong>: 납부곤란 등 일정 요건 시 이자만 내고
              세액을 연기하거나, 부동산 등으로 납부할 수 있습니다(별도 신청·심사).
            </li>
            <li>
              재산가액은 원칙적으로 <strong>상속개시일 현재 시가</strong>입니다. 본 계산기는 시가를 직접
              입력하는 방식이며, 감정평가·홈택스 자동계산과 차이가 날 수 있습니다.
            </li>
            <li>
              복수 상속인 시 세액은 상속인별 안분·대습상속·가업·영농상속공제 등 복잡한 경우가 많습니다. 본
              계산기는 1건 기준 참고용이며, 최종 신고는 홈택스·세무사 확인을 권장합니다.
            </li>
            <li>
              무신고·과소신고 가산세, 추징, 상속재산분류(비과세·불산입) 등은 본 계산기에 미반영입니다.
            </li>
          </ol>
        </div>
      </CalculatorReferenceSection>
      <CalculatorReferenceNotes number={5} notes={notes} />
    </CalculatorReferenceCard>

  );
}
