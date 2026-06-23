import Link from "next/link";

export const equalPayment150MillionMortgageInterestGuideMeta = {
  slug: "equal-payment-150-million-mortgage-interest-guide",
  title: "원리금균등상환 주택담보대출 1억 5천만원 이자 계산 방식",
  description:
    "1억 5천만 원 원리금균등 상환의 월·총 이자 구조, 금리·기간 선택 시 DSR과의 관계, 계산기로 확인할 때와 이 글에서 볼 내용을 구분해 정리했습니다.",
  updated: "2026년 5월 15일",
} as const;

export function EqualPayment150MillionMortgageInterestGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ep15-intro">
        <p>
          원리금균등상환은 매월 납부하는 원금과 이자의 합계액이 동일한 상환 방식입니다. 대출 초기에는 이자 비중이 높고 원금 비중이
          낮지만, 시간이 지날수록 원금 비중이 늘어나고 이자 비중이 줄어듭니다. 홈{" "}
          <Link href="/#calculator" className="text-primary underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
          에 조건을 넣으면 숫자를 바로 볼 수 있고, 이 글은 <strong>1억 5천만 원 규모에서 기간·금리 선택이 월 부담에 어떻게
          연결되는지</strong> 정리합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ep15-dsr">
        <h2 id="guide-ep15-dsr" className="text-foreground text-xl font-semibold tracking-tight">
          30년 vs 20년: DSR 관점
        </h2>
        <p>
          같은 1억 5천만 원·금리 4%라도 30년이면 월 약 72만 원, 20년이면 약 91만 원 수준입니다. 기간을 줄이면 총 이자는
          줄지만 월 부담이 커져 DSR 한도에 더 빨리 닿습니다. 연봉 4,500만 원·기존 부채 없음이면 30년은 여유 있지만 20년은
          다른 대출과 합쳐 보면 빠듯해질 수 있습니다.{" "}
          <Link href="/guide/equal-payment-vs-equal-principal" className="text-primary underline-offset-4 hover:underline">
            원리금 vs 원금균등
          </Link>
          과 함께 상환 방식도 비교해 보세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ep15-formula">
        <h2 id="guide-ep15-formula" className="text-foreground text-xl font-semibold tracking-tight">
          기본 계산 공식
        </h2>
        <pre className="bg-muted/30 text-foreground overflow-x-auto rounded-md border border-border p-3 font-mono text-xs leading-relaxed whitespace-pre sm:text-sm">
          {`월 상환액 = 대출원금 × [월 이자율 × (1 + 월 이자율)^상환 개월 수]
                    ÷ [(1 + 월 이자율)^상환 개월 수 - 1]

월 이자율 = 연 금리 ÷ 12`}
        </pre>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ep15-rate-term">
        <h2 id="guide-ep15-rate-term" className="text-foreground text-xl font-semibold tracking-tight">
          금리·기간별 월 상환액 비교
        </h2>
        <p className="text-muted-foreground text-sm">대출 원금 1억 5,000만 원 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리·상환기간별 월 상환액(약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  10년 (120개월)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  20년 (240개월)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  30년 (360개월)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3.0%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 144만 9천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 83만 2천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 63만 2천 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3.5%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 148만 2천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 87만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 67만 4천 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4.0%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 151만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 90만 9천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 71만 6천 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4.5%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 155만 1천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 94만 9천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 76만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5.0%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 158만 7천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 99만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 80만 5천 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5.5%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 162만 4천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 103만 2천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 85만 2천 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  6.0%
                </th>
                <td className="px-3 py-2.5">약 166만 4천 원</td>
                <td className="px-3 py-2.5">약 107만 5천 원</td>
                <td className="px-3 py-2.5">약 89만 9천 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ep15-total-interest-30y">
        <h2 id="guide-ep15-total-interest-30y" className="text-foreground text-xl font-semibold tracking-tight">
          30년 상환 기준 금리별 총 이자 비교
        </h2>
        <p className="text-muted-foreground text-sm">대출 원금 1억 5,000만 원, 30년 원리금균등상환</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              30년 만기 금리별 총부담(약)
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
                  총 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  총 이자액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이자/원금 비율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3.0%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 63만 2천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 2,752만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 7,752만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 51.7%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3.5%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 67만 4천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 4,264만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 9,264만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 61.8%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4.0%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 71만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 5,776만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1억 776만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 71.8%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4.5%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 76만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 7,360만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1억 2,360만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 82.4%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5.0%
                </th>
                <td className="px-3 py-2.5">약 80만 5천 원</td>
                <td className="px-3 py-2.5">약 2억 8,980만 원</td>
                <td className="px-3 py-2.5">약 1억 3,980만 원</td>
                <td className="px-3 py-2.5">약 93.2%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>금리 1%p 차이가 30년 총 이자액을 약 1,500만 원~2,000만 원 변화시킵니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ep15-amortization">
        <h2 id="guide-ep15-amortization" className="text-foreground text-xl font-semibold tracking-tight">
          월별 원금·이자 상환액 변화
        </h2>
        <p className="text-muted-foreground text-sm">대출 원금 1억 5,000만 원, 금리 4%, 30년 원리금균등상환 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              회차별 원리금 구성(약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  회차
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이자
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  원금
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  잔여 원금
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  1회차
                </th>
                <td className="border-border border-b px-3 py-2.5">71만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">21만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 4,978만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  12회차
                </th>
                <td className="border-border border-b px-3 py-2.5">71만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">49만 3천 원</td>
                <td className="border-border border-b px-3 py-2.5">22만 3천 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 4,791만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  60회차 (5년)
                </th>
                <td className="border-border border-b px-3 py-2.5">71만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">46만 5천 원</td>
                <td className="border-border border-b px-3 py-2.5">25만 1천 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 3,939만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  120회차 (10년)
                </th>
                <td className="border-border border-b px-3 py-2.5">71만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">41만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 2,489만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  180회차 (15년)
                </th>
                <td className="border-border border-b px-3 py-2.5">71만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">34만 8천 원</td>
                <td className="border-border border-b px-3 py-2.5">36만 8천 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 447만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  240회차 (20년)
                </th>
                <td className="border-border border-b px-3 py-2.5">71만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">25만 5천 원</td>
                <td className="border-border border-b px-3 py-2.5">46만 1천 원</td>
                <td className="border-border border-b px-3 py-2.5">7,657만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  300회차 (25년)
                </th>
                <td className="border-border border-b px-3 py-2.5">71만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">13만 3천 원</td>
                <td className="border-border border-b px-3 py-2.5">58만 3천 원</td>
                <td className="border-border border-b px-3 py-2.5">3,986만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  360회차 (30년)
                </th>
                <td className="px-3 py-2.5">71만 6천 원</td>
                <td className="px-3 py-2.5">2천 원</td>
                <td className="px-3 py-2.5">71만 4천 원</td>
                <td className="px-3 py-2.5">0원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          초기 10년간은 월 상환액의 70% 이상이 이자로 나갑니다. 원금이 의미 있게 줄어들기 시작하는 시점은 대출 기간의 절반을 넘어선
          이후입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ep15-grace">
        <h2 id="guide-ep15-grace" className="text-foreground text-xl font-semibold tracking-tight">
          거치기간 설정 시 월 상환액 변화
        </h2>
        <p className="text-muted-foreground text-sm">동일 조건 (금리 4%, 30년 기준)에서 거치기간 설정 시</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거치기간별 월 납부·총 이자(약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거치기간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거치 중 월 납부액 (이자만)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  본 상환 시작 후 월 납부액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  총 이자액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  없음
                </th>
                <td className="border-border border-b px-3 py-2.5">—</td>
                <td className="border-border border-b px-3 py-2.5">71만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1억 780만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1년
                </th>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 73만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1억 970만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2년
                </th>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 74만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1억 1,160만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  3년
                </th>
                <td className="px-3 py-2.5">50만 원</td>
                <td className="px-3 py-2.5">약 76만 원</td>
                <td className="px-3 py-2.5">약 1억 1,350만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>거치기간 1년당 총 이자 부담이 약 190만 원 증가합니다(대출 이자 계산기 기준).</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ep15-term-compare">
        <h2 id="guide-ep15-term-compare" className="text-foreground text-xl font-semibold tracking-tight">
          상환 기간별 총 이자 비교
        </h2>
        <p className="text-muted-foreground text-sm">금리 4% 고정 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상환기간별 총 이자·절감(약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상환 기간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  총 이자액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이자 절감액 (30년 대비)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10년
                </th>
                <td className="border-border border-b px-3 py-2.5">약 151만 6천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3,192만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 7,584만 원 절감</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15년
                </th>
                <td className="border-border border-b px-3 py-2.5">약 111만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 4,980만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 5,796만 원 절감</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  20년
                </th>
                <td className="border-border border-b px-3 py-2.5">약 90만 9천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 6,816만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3,960만 원 절감</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  25년
                </th>
                <td className="border-border border-b px-3 py-2.5">약 79만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 8,700만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2,076만 원 절감</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  30년
                </th>
                <td className="px-3 py-2.5">약 71만 6천 원</td>
                <td className="px-3 py-2.5">약 1억 776만 원</td>
                <td className="px-3 py-2.5">기준</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          상환 기간을 30년에서 20년으로 줄이면 월 상환액이 약 19만 원 늘어나지만 총 이자가 약 3,960만 원 줄어듭니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ep15-prepay">
        <h2 id="guide-ep15-prepay" className="text-foreground text-xl font-semibold tracking-tight">
          중도상환 시 이자 절감 효과
        </h2>
        <p className="text-muted-foreground text-sm">금리 4%, 30년 원리금균등상환, 5년 후 5,000만 원 중도상환 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              중도상환 유·무 비교(약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중도상환 없음
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  5년 후 5,000만 원 중도상환
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔여 원금 (5년 후)
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1억 3,939만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 8,939만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이후 월 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">71만 6천 원 (동일)</td>
                <td className="border-border border-b px-3 py-2.5">약 46만 1천 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔여 기간 총 이자
                </th>
                <td className="border-border border-b px-3 py-2.5">약 8,500만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3,500만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  이자 절감액
                </th>
                <td className="px-3 py-2.5">—</td>
                <td className="px-3 py-2.5">약 5,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          중도상환 수수료(통상 잔여 원금의 0.6~1.4%)와 이자 절감액을 비교해 중도상환 시기를 결정하는 것이 중요합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ep15-dsr">
        <h2 id="guide-ep15-dsr" className="text-foreground text-xl font-semibold tracking-tight">
          DSR 40% 기준 대출 가능 여부 확인
        </h2>
        <p>1억 5,000만 원 대출을 받으려면 DSR 40% 기준을 충족해야 합니다.</p>
        <p className="text-muted-foreground text-sm">금리 4%, 30년 원리금균등상환, 기타 부채 없음 가정</p>
        <div className="space-y-2">
          <p className="font-medium">필요 연소득 계산</p>
          <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
            월 상환액 71만 6천 원 기준: 71만 6천 원 × 12개월 ÷ 40% = 약 2,148만 원
          </p>
        </div>
        <p>
          연소득 약 2,148만 원 이상이면 기타 부채 없이 1억 5,000만 원 대출이 가능합니다. 기존 부채가 있으면 필요 소득이 높아집니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 위 수치는 고정금리 기준 참고값이며, 실제 월 상환액은 금융기관별 계산 방식·금리 유형(변동·고정)·상환 방식에 따라 차이가
          있을 수 있습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="대출 이자 계산기 이동"
      >
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 대출 금액·금리·기간을 직접 입력하면 월 상환액을 바로 계산해볼 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
