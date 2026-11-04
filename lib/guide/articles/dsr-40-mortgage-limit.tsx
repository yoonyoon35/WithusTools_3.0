import Link from "next/link";

export const dsr40MortgageLimitMeta = {
  slug: "dsr-40-mortgage-limit",
  title: "DSR 계산 방법과 40% 주택담보대출 한도 산정",
  description:
    "DSR 계산식과 포함 대출 범위, 소득 유형별 산정 방식, DSR 40% 한도 산정 단계, LTV·스트레스 DSR과의 관계, 연소득·기존 부채별 시나리오와 한도 산출 시 흔한 실수를 정리했습니다.",
  updated: "2026년 11월 4일",
} as const;

export function Dsr40MortgageLimitBody() {
  return (
    <>
      <p className="text-muted-foreground text-sm">
        <strong className="text-foreground">2026년 11월 4일 기준.</strong> DSR 40% 산출 후에도 LTV(규제지역 무주택 40% 등), 주담대 6억
        원 상한, 스트레스 DSR, 은행별 자체 한도가 더 낮은 값을 적용할 수 있습니다.
      </p>
      <p>
        <abbr title="총부채원리금상환비율">DSR</abbr>(총부채원리금상환비율)은 연간 총 부채 원리금 상환액을 연소득으로 나눈 비율입니다. 2023년
        이후 은행권 기준 <strong>40%</strong>가 상한선으로 적용되고 있습니다.{" "}
        이 글은 DSR 계산식과 포함 부채 범위를 먼저 정리한 뒤, <strong>40% 한도 안에서 주담대 가능액을 추산</strong>하는 흐름을
        다룹니다.
      </p>

      <section className="space-y-3" aria-labelledby="guide-dsr-formula">
        <h2 id="guide-dsr-formula" className="text-foreground text-xl font-semibold tracking-tight">
          DSR 기본 계산식
        </h2>
        <p className="rounded-md border border-border bg-muted/30 px-3 py-2 text-sm font-medium leading-relaxed">
          DSR(%) = 연간 총 원리금 상환액 ÷ 연소득 × 100
        </p>
        <p>
          은행권은 총대출액이 1억 원을 넘는 차주에게 DSR 40%를 적용하고, 제2금융권(저축은행·카드사·캐피탈 등)은 50%를 적용합니다.
          차주 개인 단위로 계산하므로 배우자와 자동으로 합산되지 않습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dsr-debt-scope">
        <h2 id="guide-dsr-debt-scope" className="text-foreground text-xl font-semibold tracking-tight">
          어떤 대출이 DSR에 포함되고 어떻게 계산되나
        </h2>
        <p>
          주택담보대출만이 아니라 차주가 보유한 가계대출의 원리금이 대부분 포함됩니다. 다만 대출 종류마다 연간 원금을 환산하는 방식이
          다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대출 종류별 DSR 반영 방식(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 종류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  DSR 반영 방식
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택담보대출
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  실제 상환 방식·만기 기준 연간 원금+이자(원금 일시상환은 최대 10년으로 나눠 반영)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신용대출
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  원금을 약정만기(5~10년)로 분할, 분할상환이 아니면 5년으로 나눈 원금 + 이자
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  마이너스통장(한도대출)
                </th>
                <td className="border-border border-b px-3 py-2.5">사용액이 아니라 약정 한도 전액을 기준으로 원금·이자 산정</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  카드론(장기카드대출)
                </th>
                <td className="border-border border-b px-3 py-2.5">약정만기(3~5년 이내)로 나눈 원금 + 이자</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자동차 할부(캐피탈)·학자금대출 등
                </th>
                <td className="border-border border-b px-3 py-2.5">향후 1년간 실제 갚는 원금+이자(신용카드 할부는 대출이 아니라 제외)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세자금대출
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  원금은 제외. 수도권·규제지역에서 1주택자가 2025년 10월 29일 이후 받은 신규분만 이자상환액 반영(정책 전세대출 제외)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  제외 대출
                </th>
                <td className="px-3 py-2.5">서민금융상품, 300만 원 이하 소액대출, 예·적금담보대출, 보험계약대출 등</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 위 방식은 은행업감독업무시행세칙 기준을 요약한 것이며, 금융기관별 산정과 일부 차이가 날 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dsr-example">
        <h2 id="guide-dsr-example" className="text-foreground text-xl font-semibold tracking-tight">
          DSR 계산 예시(간이)
        </h2>
        <p className="text-muted-foreground text-sm">
          연소득 5,000만 원, 월 상환액을 그대로 12개월로 곱한 간이 계산. 신규 주담대는 금리 4%·30년 원리금균등 약 2억 원 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대출별 월·연간 상환액 합산
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 종류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연간 상환액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기존 신용대출
                </th>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">360만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자동차 할부
                </th>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">360만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신규 주담대(금리 4%, 30년)
                </th>
                <td className="border-border border-b px-3 py-2.5">약 95만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,140만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">155만 원</td>
                <td className="px-3 py-2.5">1,860만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          DSR = 1,860만 원 ÷ 5,000만 원 × 100 = <strong>37.2%</strong>이므로 은행권 40% 이내입니다. 실제 심사에서는 신용대출을 5년
          분할로 환산하고 스트레스 금리를 더하는 등 위 간이 계산보다 높게 나올 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dsr-income-type">
        <h2 id="guide-dsr-income-type" className="text-foreground text-xl font-semibold tracking-tight">
          소득 유형별 산정 방식
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소득 유형별 인정 기준
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소득 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  산정 기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  근로소득
                </th>
                <td className="border-border border-b px-3 py-2.5">원천징수영수증 기준 세전 연소득</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  사업소득
                </th>
                <td className="border-border border-b px-3 py-2.5">종합소득세 신고 기준 소득</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연금소득
                </th>
                <td className="border-border border-b px-3 py-2.5">실수령액 기준</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  임대·기타소득
                </th>
                <td className="px-3 py-2.5">금융기관별 인정 기준 상이(증빙 서류 확인 필요)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          유형별 한도 차이는{" "}
          <Link href="/guide/income-type-loan-limit-difference-guide" className="text-primary underline-offset-4 hover:underline">
            소득 유형별 대출 한도 차이
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-steps">
        <h2 id="guide-dsr-steps" className="text-foreground text-xl font-semibold tracking-tight">
          한도 산출 4단계(요약)
        </h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>연소득 확인</strong> — 금융기관별 산정 방식(세전·세후, 보너스 반영)이 다릅니다.
          </li>
          <li>
            <strong>DSR 40% 적용</strong> — 연소득 × 40% = 연간 상환 가능 원리금 → 12로 나눠 월 한도 산출.
          </li>
          <li>
            <strong>기존 부채 차감</strong> — 신용·할부·타 주담대 등 월 원리금을 뺀 나머지가 신규 주담대에 쓸 수 있는 금액.
          </li>
          <li>
            <strong>금리·기간 역산 + LTV 비교</strong> — 월 상환액으로 대출 원금을 역산한 뒤, 담보가의 LTV 한도와 비교해
            낮은 쪽이 실제 한도.
          </li>
        </ol>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-criteria">
        <h2 id="guide-dsr-criteria" className="text-foreground text-xl font-semibold tracking-tight">
          적용 기준
        </h2>
        <p>
          연소득 <strong>5,000만 원</strong> 기준 월 소득 환산액은 약 <strong>417만 원</strong>입니다. DSR 40%를 적용하면 월 상환 가능
          원리금 합계는 <strong>167만 원</strong>입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-existing-debt">
        <h2 id="guide-dsr-existing-debt" className="text-foreground text-xl font-semibold tracking-tight">
          기존 부채 반영
        </h2>
        <p>
          예를 들어 차량 할부 월 <strong>30만 원</strong>이 있는 경우, 주택담보대출에 배분 가능한 월 상환액은{" "}
          <strong>137만 원</strong>으로 줄어듭니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-limit-calc">
        <h2 id="guide-dsr-limit-calc" className="text-foreground text-xl font-semibold tracking-tight">
          대출 한도 산출
        </h2>
        <p>
          금리 <strong>4%</strong>, <strong>30년</strong> 원리금균등상환 조건에서 월 <strong>137만 원</strong>을 상환한다고 가정하면, 대출
          가능 금액은 약 <strong>2억 8,700만 원</strong>으로 볼 수 있습니다. 같은 조건에서 기존 부채가 없을 때는 약{" "}
          <strong>3억 5,000만 원</strong>까지 산출되며, 차량 할부로 인한 한도 감소분은 약 <strong>6,300만 원</strong>입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dsr-rate-table">
        <h2 id="guide-dsr-rate-table" className="text-foreground text-xl font-semibold tracking-tight">
          금리 변동에 따른 한도 변화
        </h2>
        <p className="text-muted-foreground text-sm">
          아래는 월 상환액 <strong className="text-foreground">137만 원</strong>, 상환 기간 <strong className="text-foreground">30년</strong>
          , 원리금균등상환을 가정한 예시입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리별 대출 한도(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 한도(참고)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">3.5%</td>
                <td className="border-border border-b px-3 py-2.5">137만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 500만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">4.0%</td>
                <td className="border-border border-b px-3 py-2.5">137만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 8,700만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">4.5%</td>
                <td className="border-border border-b px-3 py-2.5">137만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 7,000만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">5.0%</td>
                <td className="px-3 py-2.5">137만 원</td>
                <td className="px-3 py-2.5">약 2억 5,500만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-ltv-bottleneck">
        <h2 id="guide-dsr-ltv-bottleneck" className="text-foreground text-xl font-semibold tracking-tight">
          DSR은 통과했는데 LTV에서 막히는 경우
        </h2>
        <p>
          DSR만 보면 약 2억 8,700만 원까지 가능해 보여도, 담보 주택 감정가 3억 5,000만 원·<strong>비규제지역·LTV 70%</strong>
          면 LTV 한도는 <strong>2억 4,500만 원</strong>입니다. 규제지역이면 LTV 40%로 <strong>1억 4,000만 원</strong>이
          먼저 적용될 수 있습니다. 이 경우 실제 한도는 DSR 산출액이 아니라 LTV 쪽입니다.
        </p>
        <p>
          생애최초·규제지역·다주택 여부에 따라 LTV가 달라지므로,{" "}
          <Link href="/guide/ltv-dti-dsr-comparison" className="text-primary underline-offset-4 hover:underline">
            LTV·DTI·DSR 차이
          </Link>
          와 함께 보세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-stress">
        <h2 id="guide-dsr-stress" className="text-foreground text-xl font-semibold tracking-tight">
          스트레스 DSR과의 관계
        </h2>
        <p>
          은행 심사에서는 DSR 40%를 넘지 않더라도, <strong>스트레스 DSR</strong>(금리 가산 후 한도)에서 먼저 걸리는
          경우가 있습니다. 2026년 하반기(7~12월)에도 지방 비규제지역 주담대는 <strong>2단계(0.75%p)</strong>가
          유지됩니다(6월 30일 은행연합회 발표).
          변동금리·혼합금리는 특히 실제 금리보다 높은 금리로 한도를 계산하므로, 위 표의 한도보다 10~20% 낮게 나올 수
          있고, 수도권·규제지역 주담대는 스트레스 금리 3.0%(3단계 100%)가 적용돼 더 크게 줄 수 있습니다.{" "}
          <Link href="/guide/stress-dsr-explained" className="text-primary underline-offset-4 hover:underline">
            스트레스 DSR
          </Link>
          ·{" "}
          <Link href="/guide/ltv-dti-dsr-comparison" className="text-primary underline-offset-4 hover:underline">
            LTV·DTI·DSR 차이
          </Link>
          를 함께 보세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-mistakes">
        <h2 id="guide-dsr-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          흔한 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>신용카드 한도만 보고 DSR 여유 있다고 판단</strong> — 사용 중인 카드론·리볼빙·마이너스통장도 포함될 수
            있습니다.
          </li>
          <li>
            <strong>안 쓰는 마이너스통장은 DSR과 무관하다고 생각</strong> — 잔액이 0원이어도 약정 한도 전액이 기준이라, 대출 전
            불필요한 한도를 줄이거나 해지하는 편이 유리합니다.
          </li>
          <li>
            <strong>전세대출은 모두 DSR 대상이라고 생각</strong> — 원금은 제외되고, 수도권·규제지역 1주택자의 신규 전세대출(2025년
            10월 29일 이후)만 이자가 반영됩니다. 정책 전세대출은 제외입니다.
          </li>
          <li>
            <strong>DSR 40%를 넘으면 대출이 불가능하다고 생각</strong> — 제2금융권은 50%까지 적용되지만 금리가 높아 이자 부담이
            커지므로 신중한 검토가 필요합니다.
          </li>
          <li>
            <strong>만기일시·원금균등 산정 방식 무시</strong> — 금융기관별로 연간 원금 상환액 계산이 달라 DSR 결과가
            달라집니다.
          </li>
          <li>
            <strong>DSR 한도 = 실제 승인 한도</strong> — LTV, 스트레스 DSR, 신용·DSR 외 내부 기준이 추가로 적용됩니다.
          </li>
        </ul>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="참고 안내"
      >
        <p>
          <span className="text-foreground font-medium">※</span> 실제 한도는 <abbr title="담보인정비율">LTV</abbr>, 신용등급, 금융기관별
          정책에 따라 달라질 수 있습니다.
        </p>
        <p>
          <Link
            href="/loan-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            금리와 상환 기간별 월 상환액·대출 이자 계산
          </Link>
          은 홈의 대출 이자 계산기에서 직접 조건을 바꿔가며 확인해 보세요.
        </p>
        <p>
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          에서 연 소득·기존 부채를 입력해 DSR을 간이 계산해 볼 수 있습니다.
        </p>
      </aside>
    </>
  );
}
