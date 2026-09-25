import { TAX_BRACKETS } from "@/lib/comprehensive-income-tax-calculations";
import { formatNumber } from "@/lib/loan-calculations";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";

const brackets = TAX_BRACKETS["2023-2025"];

function bracketLabel(index: number): string {
  const current = brackets[index];
  const previous = index === 0 ? 0 : brackets[index - 1].maxBase;
  if (!Number.isFinite(current.maxBase)) return `${formatNumber(previous)}원 초과`;
  if (index === 0) return `${formatNumber(current.maxBase)}원 이하`;
  return `${formatNumber(previous)}원 초과 ${formatNumber(current.maxBase)}원 이하`;
}

const flowRows = [
  ["①", "소득금액", "이자·배당·사업(부동산임대)·근로·연금·기타소득금액의 합"],
  ["②", "종합소득금액", "위 소득금액의 합. 분리과세 사적연금은 합산에서 제외"],
  ["③", "과세표준", "종합소득금액 − 합산하지 않는 금융소득 − 인적공제 − 그 밖 소득공제. 이자·배당이 2천만 원 이하면 전액, 넘으면 2천만 원을 뺍니다"],
  ["④", "산출세액", "과세표준 × 세율 − 누진공제. 이자·배당이 2천만 원을 넘으면 제62조 1호와 2호 중 큰 금액"],
  ["⑤", "세액공제·감면", "자녀세액공제·표준세액공제와 입력한 합계를 산출세액에서 뺌. 0원 미만으로는 내려가지 않음"],
  ["⑥", "가산세", "무신고·과소신고·장부 불성실 중 큰 금액 + 성실신고 미제출 + 납부지연"],
  ["⑦", "납부·환급", "세액공제 후 세액 + 가산세 − 원천징수·중간예납·수시부과"],
] as const;

const exampleRows = [
  ["세율 예시", "과세표준 30,000,000원 × 15% − 1,260,000원 = 3,240,000원"],
  ["금융소득 비교", "이자·배당 3,000만 원, 사업소득 5,000만 원, 소득공제 150만 원. 1호 11,080,000원, 2호 10,215,000원 → 11,080,000원"],
  ["방문판매원", "수입 4,500만 원, 4천만 원까지 75%, 초과분 65% → 소득금액 11,750,000원"],
  ["제조업 추계", "수입 1억 2천만 원, 주요경비 6,800만 원, 기준 20%의 1/2, 배율 3.4 → 40,000,000원"],
  ["서식 예시", "수입 7천만 원, 주요경비 4,500만 원, 기준 11.4%, 단순 86%, 배율 2.8 → 17,020,000원"],
  ["강연료", "총지급 800만 원, 필요경비율 60% → 기타소득금액 3,200,000원"],
  ["원천징수", "수입 1,000만 원 × 3.3% = 330,000원. 소득세 300,000원, 지방소득세 30,000원"],
] as const;

const includedRows = [
  ["세율", "2025년 귀속까지 쓰는 2023~2025년 세율표"],
  ["사업·부동산임대", "임대 외는 장부 소득금액 또는 경비율 추계. 부동산임대는 따로 두고, 임대 결손은 다른 소득에서 빼지 않음"],
  ["이월결손금", "임대 이월결손금은 임대소득에서만. 그 밖 이월결손금은 임대 외 소득과 종합과세 금융소득에서 공제"],
  ["연금계좌세액공제", "연금저축 600만 원, 합산 900만 원. 합산 종합소득 4,500만 원 이하 15%, 초과 12%"],
  ["인적공제", "기본공제 1명 150만 원. 70세 이상 100만 원, 장애인 200만 원, 부녀자 50만 원, 한부모 100만 원"],
  ["자녀·표준세액공제", "2026~2029년 귀속은 2016년생 이전. 1명 25만 원, 2명 55만 원, 이후 1명당 40만 원. 2017년생은 2030년 귀속부터. 표준세액공제는 근로소득 13만 원, 성실사업자 12만 원, 그 밖 7만 원"],
  ["금융소득 비교과세", "이자·배당 합계 2천만 원 초과 시 제62조의 두 산출세액 중 큰 금액. 일반 원천징수세율 14%"],
  ["경비율 조정", "자가 ±0.4·0.3, 장애인 단순소득률 20%, 인적용역 4천만 원 구간"],
  ["기타·사적연금", "총지급액 × 필요경비율, 분리과세는 입력 금액 × 15%"],
  ["가산세", "무신고 20·40·60%, 복식부기 수입금액 0.07·0.14%, 과소 10%, 무기장 20%, 납부지연 일 0.022%"],
  ["중간예납", "기준액 × 1/2, 50만 원 미만 소액부징수, 분납, 추계액"],
] as const;

const excludedRows = [
  ["그 밖 소득공제·세액공제", "연금보험료와 영수증이 있는 세액공제·감면은 합계를 직접 넣습니다."],
  ["업종별 경비율", "해당 업종 비율을 직접 넣습니다."],
  ["근로소득공제", "연말정산이 끝난 근로소득금액을 넣습니다."],
  ["개인지방소득세", "종합소득 결정세액에 지방소득세를 더하지 않습니다. 원천징수 0.3%는 이미 낸 국세에 넣지 않습니다."],
  ["주택임대 분리과세", "수입 2천만 원 이하 14%와 등록 공제는 이 계산에서 다루지 않습니다."],
  ["금융소득 특례", "비영업대금 25%, 출자공동사업자 배당, 배당가산·배당세액공제는 계산하지 않습니다."],
  ["기장세액공제", "간편장부대상자가 복식부기로 신고하면 산출세액의 20%, 한도 100만 원입니다. 세액공제 합계에 넣어 계산합니다."],
] as const;

const thresholdRows = [
  ["가. 농업·도소매·부동산매매 등", "3억 원", "6천만 원"],
  ["나. 제조·음식·숙박·건설 등", "1억 5천만 원", "3천 6백만 원"],
  ["다. 부동산임대·서비스 등", "7천 5백만 원", "2천 4백만 원"],
] as const;

const multiplierRows = [
  ["2007년 귀속", "2.0배", "2.4배"],
  ["2008년 귀속", "2.1배", "2.6배"],
  ["2009년 귀속", "2.2배", "2.8배"],
  ["2010~2015년 귀속", "2.4배", "3.0배"],
  ["2016~2019년 귀속", "2.6배", "3.2배"],
  ["2020~2027년 귀속", "2.8배", "3.4배"],
] as const;

const agentRows = [
  ["보험모집인 940906", "77.6% / 68.6%", "22.4% / 31.4%"],
  ["방문판매원 940908", "75.0% / 65.0%", "25.0% / 35.0%"],
  ["음료품배달원 940907", "80.0% / 72.0%", "20.0% / 28.0%"],
] as const;

const penaltyRows = [
  ["일반 무신고", "무신고납부세액 × 20%"],
  ["복식부기 무신고", "무신고납부세액 × 20%와 수입금액 × 0.07% 중 큰 금액"],
  ["부정 무신고", "무신고납부세액 × 40%. 국제거래가 있으면 60%"],
  ["부정 무신고·복식부기", "40%(국제거래 60%)와 수입금액 × 0.14% 중 큰 금액"],
  ["과소신고·초과환급", "과소신고납부세액 × 10%"],
  ["장부 기록·보관 불성실", "산출세액 × (무기장 소득금액 ÷ 종합소득금액) × 20%"],
  ["납부지연", "미납세액 × 경과일수 × 2.2/10,000. 2022년 2월 16일 이후"],
  ["성실신고확인서 미제출", "산출세액 × (사업소득금액 ÷ 종합소득금액) × 5%와 수입금액 × 0.02% 중 큰 금액"],
] as const;

const notes = [
  "종합소득금액에서 합산하지 않는 금융소득과 소득공제를 뺀 과세표준에 세율을 곱하고 누진공제를 빼 산출세액을 만듭니다. 이자·배당이 2천만 원을 넘으면 그 산출세액에 2천만 원×14%를 더한 1호와, 금융소득 전체×14%에 다른 소득 산출세액을 더한 2호 중 큰 금액을 씁니다.",
  "단순경비율은 수입금액에서 수입금액 × 경비율을 뺀 금액이 소득금액입니다. 기준경비율은 그 식과 배율을 곱한 금액 중 작은 쪽입니다.",
  "2025년 귀속 배율은 간편장부대상자 2.8배, 복식부기의무자 3.4배입니다. 복식부기 추계는 기준경비율의 1/2를 씁니다.",
  "무신고·과소신고·장부 불성실가산세가 겹치면 큰 금액만 적용하고, 같으면 무신고·과소신고만 적용합니다. 2018년 귀속부터 성실신고확인서 미제출 가산세는 그 금액에 더합니다.",
  "중간예납세액이 50만 원 미만이면 소액부징수입니다. 1천만 원 이하는 2026년 11월 30일까지 전액, 2천만 원 이하는 1천만 원 초과분, 2천만 원 초과는 50% 이하를 2027년 2월 1일까지 나눌 수 있습니다.",
  "연금보험료·특별소득공제, 업종별 경비율, 개인지방소득세는 확인한 금액을 직접 넣습니다. 기본공제와 추가공제는 부양가족 인원으로 계산합니다. 신고 전에는 홈택스와 맞추세요.",
] as const;

export function ComprehensiveIncomeTaxCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="종합소득세 산정 참고"
      summary="소득금액에서 과세표준, 산출세액, 세액공제, 가산세, 이미 낸 세금을 거쳐 납부·환급세액을 구합니다."
      footer="세율, 경비율, 가산세, 중간예납 기준을 계산 순서대로 정리했습니다. 신고 전에는 홈택스와 맞추세요."
    >
      <CalculatorReferenceSection
        number={1}
        title="본 계산기 산출 공식·순서"
        footnote="인적공제, 자녀세액공제, 표준세액공제는 인원과 선택으로 계산합니다. 영수증이 있는 공제와 감면은 합계를 입력합니다."
      >
        <CalculatorReferenceTable
          caption="종합소득세 계산 단계"
          headers={["단계", "항목", "산식·적용"]}
          rows={flowRows}
          minWidth="min-w-[640px]"
        />
        <div className="mt-3 rounded-md border p-3 text-xs leading-relaxed">
          <p className="text-foreground font-medium">사업소득을 경비율로 넣을 때</p>
          <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-4">
            <li>단순경비율: 소득금액 = 수입금액 − (수입금액 × 단순경비율). 일자리 안정자금은 수입금액에서 뺍니다.</li>
            <li>
              기준경비율: ① 수입금액 − 주요경비 − (수입금액 × 기준경비율), ② {"{"}수입금액 − (수입금액 ×
              단순경비율){"}"} × 배율. 둘 중 작은 금액. ①이 0보다 작으면 0.
            </li>
            <li>주요경비 = 기초재고 포함분 + 당기 지출(매입·임차료·인건비) − 기말재고 포함분.</li>
            <li>복식부기의무자가 추계하면 기준경비율의 1/2를 기타경비에 적용합니다.</li>
          </ul>
        </div>
      </CalculatorReferenceSection>

      <CalculatorReferenceSection
        number={2}
        title="계산 예시"
        subtitle="같은 식으로 검산할 수 있는 숫자입니다."
      >
        <CalculatorReferenceTable
          caption="종합소득세 계산 예시"
          headers={["구분", "계산"]}
          rows={exampleRows}
          minWidth="min-w-[640px]"
        />
        <div className="mt-3 rounded-md border p-3 text-xs leading-relaxed">
          <p className="text-foreground font-medium">제조업 추계를 식대로 풀면</p>
          <ol className="text-muted-foreground mt-2 list-decimal space-y-1 pl-4">
            <li>120,000,000 − 68,000,000 − (120,000,000 × 20% × 1/2) = 40,000,000원</li>
            <li>{"{"}120,000,000 − (120,000,000 × 75%){"}"} × 3.4 = 102,000,000원</li>
            <li>둘 중 작은 40,000,000원이 추계 소득금액입니다. 직전 연도 수입 4억 원이라 복식부기의무자입니다.</li>
          </ol>
          <p className="text-foreground mt-3 font-medium">학원강사 환급</p>
          <p className="text-muted-foreground mt-1">
            수입 10,000,000원, 원천징수 330,000원, 결정세액 220,000원, 환급 110,000원(종합소득세
            100,000원 + 개인지방소득세 10,000원)입니다. 결정세액을 만든 경비율과 공제는 따로 넣어야
            합니다.
          </p>
        </div>
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={3} title="자동 계산과 직접 입력">
        <p className="text-muted-foreground text-xs font-medium">계산에 반영</p>
        <CalculatorReferenceTable
          caption="계산에 반영하는 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[560px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">직접 입력</p>
        <CalculatorReferenceTable
          caption="직접 입력하는 항목"
          headers={["항목", "계산 방식"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={4} title="세율·경비율·가산세·중간예납">
        <p className="text-muted-foreground text-xs font-medium">종합소득세 세율 (2023~2025년 귀속)</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <caption className="sr-only">2023~2025년 귀속 종합소득세 세율</caption>
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
              {brackets.map((bracket, index) => (
                <tr key={bracket.maxBase} className="border-b last:border-b-0">
                  <td className="p-2">{bracketLabel(index)}</td>
                  <td className="p-2 text-right tabular-nums">{bracket.rate * 100}%</td>
                  <td className="p-2 text-right tabular-nums">
                    {bracket.progressiveDeduction > 0 ? `${formatNumber(bracket.progressiveDeduction)}원` : "없음"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed">
          구간이 바뀌는 금액은 위·아래 식이 같은 세액입니다. 14,000,000원은 6%로 840,000원이고, 15%
          식도 840,000원입니다. 50,000,000원은 6,240,000원, 88,000,000원은 15,360,000원입니다.
        </p>

        <p className="text-muted-foreground mt-4 text-xs font-medium">직전 연도 수입금액. 이상이면 복식부기·기준경비율</p>
        <CalculatorReferenceTable
          caption="기장의무와 경비율 기준금액"
          headers={["업종", "복식부기", "기준경비율"]}
          rows={thresholdRows}
          minWidth="min-w-[560px]"
        />
        <p className="text-muted-foreground text-xs leading-relaxed">
          기준금액 미만이면 간편장부·단순경비율입니다. 욕탕업은 기장의무만 나 군, 경비율은 다 군입니다.
          수리 및 기타 개인서비스 중 인적용역은 기장의무는 다 군, 경비율은 나 군(직전 연도 3,600만 원)입니다.
          전문직은 수입금액과 관계없이 복식부기의무자이고 기준경비율을 적용합니다. 해당 연도 수입이
          복식부기 기준 이상이면 단순경비율을 적용하지 않습니다. 당해 연도 신규 사업자는 단순경비율이
          원칙이나, 전문직과 복식부기 기준 이상 수입은 빠집니다.
        </p>

        <p className="text-muted-foreground mt-4 text-xs font-medium">기준경비율 소득상한 배율</p>
        <CalculatorReferenceTable
          caption="귀속 연도별 간편장부·복식부기 배율"
          headers={["귀속", "간편장부대상자", "복식부기의무자"]}
          rows={multiplierRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground text-xs leading-relaxed">
          2025년 귀속 신고에는 2.8배·3.4배를 씁니다. 복식부기의무자 추계는 기준경비율의 절반을
          기타경비로 봅니다.
        </p>

        <p className="text-muted-foreground mt-4 text-xs font-medium">
          보험모집인·방문판매원·음료품배달원. 4천만 원 이하 / 초과
        </p>
        <CalculatorReferenceTable
          caption="연말정산 사업소득 단순경비율과 소득률"
          headers={["구분", "단순경비율", "소득률"]}
          rows={agentRows}
          minWidth="min-w-[520px]"
        />
        <p className="text-muted-foreground text-xs leading-relaxed">
          수입금액 7,500만 원 미만이고 다른 소득이 없으면 소속 회사 연말정산으로 납세의무를 마칠 수
          있습니다. 연말정산 소득금액 = 총수입금액 × 소득률(1 − 단순경비율). 다른 소득이 있어 5월에
          확정신고할 때는 그 소득금액을 다시 계산하지 않고 그대로 쓸 수 있습니다.
        </p>

        <p className="text-muted-foreground mt-4 text-xs font-medium">자가·장애인 조정</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-xs leading-relaxed">
          <li>자가 기준경비율 = 일반율 + 0.4. 일반율 11.6이면 12.0.</li>
          <li>자가 단순경비율 = 일반율 − 0.3. 일반율 90.3이면 90.0. 임대인과 임차인이 같은 세대이면 자가입니다.</li>
          <li>장애인 직접 경영 단순경비율 = 단순경비율 + (100% − 단순경비율) × 20%. 90.3이면 92.2.</li>
          <li>농업·광업·건설·인적용역 등 지정 업종은 자가율을 적용하지 않습니다.</li>
        </ul>

        <p className="text-muted-foreground mt-4 text-xs font-medium">가산세. 겹치면 큰 금액</p>
        <CalculatorReferenceTable
          caption="종합소득세 가산세 요율"
          headers={["종류", "가산세액"]}
          rows={penaltyRows}
          minWidth="min-w-[560px]"
        />
        <p className="text-muted-foreground text-xs leading-relaxed">
          무신고납부세액은 세액공제를 뺀 금액입니다. 간편장부 추계의 무기장가산세는 2025년 신규
          사업자, 2024년 수입 4,800만 원 미만, 연말정산 사업소득만 있는 사람에게는 적용하지 않습니다.
          해당하면 무기장 소득금액을 비워 둡니다.
        </p>

        <p className="text-muted-foreground mt-4 text-xs font-medium">중간예납</p>
        <div className="rounded-md border p-3 text-xs leading-relaxed">
          <p>
            중간예납세액 = 중간예납기준액 × 1/2 − (중간예납 기간의 토지 등 매매차익 예정신고 납부세액)
          </p>
          <p className="text-muted-foreground mt-2">
            기준액 = 전년도 중간예납세액 + 확정신고 자진납부세액 + 추가납부세액 + 기한 후·수정신고 추가
            자진납부세액 − 환급세액. 고지는 11월 초, 2026년 납부기한은 11월 30일입니다.
          </p>
          <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-4">
            <li>12,500,000원 → 분납 2,500,000원, 11월 30일까지 10,000,000원</li>
            <li>18,000,000원 → 분납 8,000,000원, 11월 30일까지 10,000,000원</li>
            <li>30,000,010원 → 분납 15,000,000원, 11월 30일까지 15,000,010원</li>
            <li>99,999,990원 → 분납 49,999,990원, 11월 30일까지 50,000,000원</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            추계액은 (상반기 종합소득금액 × 2 − 이월결손금 − 종합소득공제)에
            기본세율을 적용한 산출세액을 2로 나눈 뒤, 6월 30일까지의 공제·감면, 토지 등 예정신고
            산출세액, 수시부과세액, 원천징수세액을 뺍니다. 기준액의 30%에 미달하면 신고할 수 있고,
            50만 원 미만이면 납부 대상이 아니나 신고서를 내야 고지를 취소할 수 있습니다.
          </p>
        </div>
      </CalculatorReferenceSection>

      <CalculatorReferenceNotes number={5} notes={notes} />
    </CalculatorReferenceCard>
  );
}
