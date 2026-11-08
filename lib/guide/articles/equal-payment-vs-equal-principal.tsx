import Link from "next/link";

export const equalPaymentVsEqualPrincipalMeta = {
  slug: "equal-payment-vs-equal-principal",
  title: "원리금균등상환 vs 원금균등상환 비교와 이자 차이",
  description:
    "1억 5천만 원을 연 4%·30년으로 빌리면 첫 달 상환액은 원리금균등 71.6만 원, 원금균등 91.7만 원이고 총 이자는 약 1억 780만 원과 9,025만 원입니다. 금리·기간별 월 상환액, 중도상환 효과, DSR 필요 연소득과 선택 기준을 비교합니다.",
  updated: "2026년 11월 5일",
} as const;

type TableRow = readonly [string, ...string[]];

function InfoTable({
  caption,
  heads,
  rows,
  minWidth = "32rem",
}: {
  caption: string;
  heads: readonly string[];
  rows: readonly TableRow[];
  minWidth?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm" style={{ minWidth }}>
        <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
          {caption}
        </caption>
        <thead>
          <tr className="bg-muted/40">
            {heads.map((h) => (
              <th key={h} scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const last = i === rows.length - 1;
            const border = last ? "" : "border-border border-b";
            return (
              <tr key={row[0]} className={last ? "bg-muted/20" : undefined}>
                <th scope="row" className={`${border} px-3 py-2.5 font-medium`}>
                  {row[0]}
                </th>
                {row.slice(1).map((cell, j) => (
                  <td key={j} className={`${border} px-3 py-2.5`}>
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const linkClass = "text-primary underline-offset-4 hover:underline";

export function EqualPaymentVsEqualPrincipalBody() {
  return (
    <>
      <p>
        두 방식 모두 매월 원금과 이자를 함께 상환하는 분할상환 방식입니다. 차이는 매월 상환액을 어떻게 구성하느냐에 있습니다. 홈
        화면의{" "}
        <Link href="/loan-calculator" className="text-primary underline-offset-4 hover:underline">
          대출 이자 계산기
        </Link>
        는 조건별 숫자를 빠르게 비교하는 데 적합하고, 이 글은 <strong>왜 한쪽을 선택하는지</strong> 판단할 때 참고하는 용도로
        정리했습니다.
      </p>

      <section className="space-y-3" aria-labelledby="guide-equal-when-matters">
        <h2 id="guide-equal-when-matters" className="text-foreground text-xl font-semibold tracking-tight">
          상환 방식 선택이 특히 중요한 경우
        </h2>
        <p>
          대출 기간이 20~30년으로 길고, 초기 월 상환액이{" "}
          <abbr title="총부채원리금상환비율">DSR</abbr> 한도에 가깝게 잡힌 경우 방식 선택이 한도·생활비에 직접 영향을 줍니다.
          원금균등을 고르면 총 이자는 줄지만 1~3년차 월 부담이 커져 DSR 심사에서 불리할 수 있고, 원리금균등은 한도는 넉넉해질 수
          있으나 장기 이자 부담이 커집니다.
        </p>
        <p>
          반대로 DSR 여유가 충분하고 중도상환·보너스 상환 계획이 있다면, 방식보다 <strong>언제 얼마를 더 갚을지</strong>가 총
          이자에 더 큰 영향을 줄 때도 많습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-core-diff">
        <h2 id="guide-equal-core-diff" className="text-foreground text-xl font-semibold tracking-tight">
          핵심 차이
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              원리금균등상환 vs 원금균등상환 핵심 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  원리금균등상환
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  원금균등상환
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매월 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">일정</td>
                <td className="border-border border-b px-3 py-2.5">초기 높고 점차 감소</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매월 원금 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">초기 적고 점차 증가</td>
                <td className="border-border border-b px-3 py-2.5">일정</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  총 이자 부담
                </th>
                <td className="border-border border-b px-3 py-2.5">상대적으로 많음</td>
                <td className="border-border border-b px-3 py-2.5">상대적으로 적음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  초기 상환 부담
                </th>
                <td className="border-border border-b px-3 py-2.5">낮음</td>
                <td className="border-border border-b px-3 py-2.5">높음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  가계 예산 관리
                </th>
                <td className="px-3 py-2.5">용이</td>
                <td className="px-3 py-2.5">복잡</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-example-compare">
        <h2 id="guide-equal-example-compare" className="text-foreground text-xl font-semibold tracking-tight">
          예시 비교
        </h2>
        <p className="text-muted-foreground text-sm">
          대출 원금 2억 원, 금리 4%, 상환 기간 30년 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상환 방식별 월 상환액·총 상환액 비교(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  원리금균등
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  원금균등
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1회차 월 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 95만 5천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 122만 2천 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  120회차 월 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 95만 5천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 100만 2천 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  240회차 월 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 95만 5천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 78만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  총 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 3억 4,370만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 2,030만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  총 이자액
                </th>
                <td className="px-3 py-2.5">약 1억 4,370만 원</td>
                <td className="px-3 py-2.5">약 1억 2,030만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          같은 조건에서 원금균등상환의 총 이자 부담이 약 2,340만 원 적습니다. 단, 초기 월 상환액은 원금균등상환이 약 27만 원 더
          높습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-150-intro">
        <h2 id="guide-equal-150-intro" className="text-foreground text-xl font-semibold tracking-tight">
          1억 5천만 원 대출 예시 — 금리·기간별 월 상환액
        </h2>
        <p>
          1억 5천만 원 규모에서 금리와 기간 선택이 월 부담과 총 이자에 어떻게 연결되는지 표로 정리했습니다. 숫자는{" "}
          <Link href="/loan-calculator" className={linkClass}>
            대출 이자 계산기
          </Link>
          에 같은 조건을 넣어 확인할 수 있습니다. 원리금균등 월 상환액은 아래 식으로 구합니다.
        </p>
        <pre className="bg-muted/30 text-foreground overflow-x-auto rounded-md border border-border p-3 font-mono text-xs leading-relaxed whitespace-pre sm:text-sm">
          {`월 상환액 = 대출원금 × [월 이자율 × (1 + 월 이자율)^상환 개월 수]
                    ÷ [(1 + 월 이자율)^상환 개월 수 - 1]

월 이자율 = 연 금리 ÷ 12`}
        </pre>
        <InfoTable
          caption="1억 5천만 원 원리금균등 월 상환액(단위: 만 원, 약)"
          heads={["금리", "10년(120개월)", "20년(240개월)", "30년(360개월)"]}
          minWidth="34rem"
          rows={[
            ["3.0%", "144.8", "83.2", "63.2"],
            ["3.5%", "148.3", "87.0", "67.4"],
            ["4.0%", "151.9", "90.9", "71.6"],
            ["4.5%", "155.5", "94.9", "76.0"],
            ["5.0%", "159.1", "99.0", "80.5"],
            ["5.5%", "162.8", "103.2", "85.2"],
            ["6.0%", "166.5", "107.5", "89.9"],
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-150-total-interest">
        <h2 id="guide-equal-150-total-interest" className="text-foreground text-xl font-semibold tracking-tight">
          1억 5천만 원 총 이자 — 금리별·기간별
        </h2>
        <InfoTable
          caption="30년 원리금균등, 금리별 총부담(약)"
          heads={["금리", "월 상환액", "총 상환액", "총 이자액", "이자/원금"]}
          minWidth="40rem"
          rows={[
            ["3.0%", "63.2만 원", "2억 2,767만 원", "7,767만 원", "51.8%"],
            ["3.5%", "67.4만 원", "2억 4,248만 원", "9,248만 원", "61.7%"],
            ["4.0%", "71.6만 원", "2억 5,780만 원", "1억 780만 원", "71.9%"],
            ["4.5%", "76.0만 원", "2억 7,361만 원", "1억 2,361만 원", "82.4%"],
            ["5.0%", "80.5만 원", "2억 8,988만 원", "1억 3,988만 원", "93.3%"],
          ]}
        />
        <p>금리가 1%p 오르면 30년 총 이자가 약 3,000만 원 이상 늘어납니다(3%→4% 약 3,010만 원, 4%→5% 약 3,210만 원).</p>
        <InfoTable
          caption="금리 4% 고정, 상환 기간별 총 이자(약)"
          heads={["상환 기간", "월 상환액", "총 이자액", "30년 대비 이자 절감"]}
          minWidth="36rem"
          rows={[
            ["10년", "151.9만 원", "3,224만 원", "7,556만 원"],
            ["15년", "111.0만 원", "4,972만 원", "5,808만 원"],
            ["20년", "90.9만 원", "6,815만 원", "3,965만 원"],
            ["25년", "79.2만 원", "8,753만 원", "2,027만 원"],
            ["30년", "71.6만 원", "1억 780만 원", "기준"],
          ]}
        />
        <p>
          30년에서 20년으로 줄이면 월 상환액이 약 19만 원 늘고 총 이자가 약 3,965만 원 줄어듭니다. 기간을 줄일수록 월
          부담이 커져 DSR 한도에 더 빨리 닿습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-150-schedule">
        <h2 id="guide-equal-150-schedule" className="text-foreground text-xl font-semibold tracking-tight">
          1억 5천만 원 원리금균등 — 월별 원금·이자 변화와 원금균등 비교
        </h2>
        <InfoTable
          caption="원금 1억 5천만 원, 금리 4%, 30년 원리금균등 회차별 구성(약)"
          heads={["회차", "월 상환액", "이자", "원금", "잔여 원금"]}
          minWidth="38rem"
          rows={[
            ["1회차", "71.6만 원", "50.0만 원", "21.6만 원", "1억 4,978만 원"],
            ["12회차", "71.6만 원", "49.2만 원", "22.4만 원", "1억 4,736만 원"],
            ["60회차(5년)", "71.6만 원", "45.3만 원", "26.3만 원", "1억 3,567만 원"],
            ["120회차(10년)", "71.6만 원", "39.5만 원", "32.1만 원", "1억 1,818만 원"],
            ["180회차(15년)", "71.6만 원", "32.4만 원", "39.2만 원", "9,681만 원"],
            ["240회차(20년)", "71.6만 원", "23.7만 원", "47.9만 원", "7,073만 원"],
            ["300회차(25년)", "71.6만 원", "13.2만 원", "58.5만 원", "3,888만 원"],
            ["360회차(30년)", "71.6만 원", "0.2만 원", "71.4만 원", "0원"],
          ]}
        />
        <p>
          첫 달에는 월 상환액의 약 70%가 이자이고, 10년 차에도 절반이 넘는 55%, 20년 차에야 약 33%로 내려갑니다. 대출
          기간의 절반이 지나도 잔여 원금이 절반 가까이(10년 차 1억 1,818만 원) 남는 구조입니다.
        </p>
        <InfoTable
          caption="1억 5천만 원, 금리 4%, 30년 — 원리금균등 vs 원금균등"
          heads={["항목", "원리금균등", "원금균등"]}
          minWidth="30rem"
          rows={[
            ["1회차 월 상환액", "71.6만 원", "91.7만 원"],
            ["120회차 월 상환액", "71.6만 원", "75.1만 원"],
            ["240회차 월 상환액", "71.6만 원", "58.5만 원"],
            ["360회차 월 상환액", "71.6만 원", "41.8만 원"],
            ["총 이자액", "약 1억 780만 원", "약 9,025만 원"],
          ]}
        />
        <p>원금균등은 총 이자가 약 1,755만 원 적지만 첫 달 상환액이 약 20만 원 더 많습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-150-grace-prepay">
        <h2 id="guide-equal-150-grace-prepay" className="text-foreground text-xl font-semibold tracking-tight">
          1억 5천만 원 — 거치기간과 중도상환 효과
        </h2>
        <InfoTable
          caption="금리 4%, 전체 30년 안에서 거치기간(이자만 납부)을 둘 때(약)"
          heads={["거치기간", "거치 중 월 납부", "거치 후 월 상환", "총 이자액"]}
          minWidth="36rem"
          rows={[
            ["없음", "—", "71.6만 원", "1억 780만 원"],
            ["1년", "50만 원(이자만)", "72.9만 원", "1억 968만 원"],
            ["2년", "50만 원(이자만)", "74.3만 원", "1억 1,159만 원"],
            ["3년", "50만 원(이자만)", "75.8만 원", "1억 1,353만 원"],
          ]}
        />
        <p>
          거치기간 1년당 총 이자가 약 190만 원 늘고 거치 종료 후 월 상환액도 올라갑니다. 거치기간은 전체 대출 기간(30년)
          안에 포함하는 것으로 계산했습니다.
        </p>
        <InfoTable
          caption="금리 4%, 30년 원리금균등, 5년 후 5,000만 원 중도상환(약)"
          heads={["항목", "중도상환 없음", "상환 후 월 상환액 줄이기", "상환 후 월 상환액 유지(기간 단축)"]}
          minWidth="44rem"
          rows={[
            ["5년 후 잔여 원금", "1억 3,567만 원", "8,567만 원", "8,567만 원"],
            ["이후 월 상환액", "71.6만 원", "45.2만 원", "71.6만 원"],
            ["남은 기간", "25년(300개월)", "25년", "약 12년 9개월(153개월)"],
            ["남은 기간 총 이자", "약 7,917만 원", "약 4,999만 원", "약 2,382만 원"],
            ["이자 절감액", "—", "약 2,918만 원", "약 5,535만 원"],
          ]}
        />
        <p>
          같은 5,000만 원을 갚아도 월 상환액을 줄이는 것보다 <strong>월 상환액을 유지해 기간을 줄이는 쪽</strong>의 이자 절감이
          큽니다. 중도상환 수수료(상환액 × 요율 × 잔여 면제기간 비율, 최근 계약은 0.5~0.9%대·예전 계약은 1%를 넘기도 함)와
          절감 이자를 비교해 시기를 정하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-equal-150-dsr">
        <h2 id="guide-equal-150-dsr" className="text-foreground text-xl font-semibold tracking-tight">
          1억 5천만 원 대출에 필요한 연소득(DSR 40%)
        </h2>
        <p>
          금리 4%·30년 원리금균등·기타 부채 없음이면 월 상환액 71.6만 원 × 12개월 ÷ 40% = 약 <strong>2,148만 원</strong>의
          연소득이 필요합니다. 수도권·규제지역 주택담보대출에는 스트레스 금리 3.0%p 가산이 적용될 수 있어, 심사 금리를
          7%로 보면 월 상환액 99.8만 원, 필요 연소득 약 2,994만 원으로 커집니다. 기존 부채가 있으면 필요 소득이 더 높아집니다.{" "}
          <Link href="/guide/dsr-40-mortgage-limit" className={linkClass}>
            DSR 계산 방법과 40% 한도 산정
          </Link>
          에서 계산 구조를 볼 수 있습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 위 수치는 고정금리 기준 참고값이며, 실제 월 상환액은 금융기관별 계산 방식·금리 유형·상환 방식에 따라 다를 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-selection-criteria">
        <h2 id="guide-equal-selection-criteria" className="text-foreground text-xl font-semibold tracking-tight">
          상환 방식 선택 기준
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상황별 추천 상환 방식
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적합한 방식
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  월 소득이 일정하고 예산 관리가 중요한 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">원리금균등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  초기 여유 자금이 충분한 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">원금균등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기 대출로 총 이자 부담을 줄이고 싶은 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">원금균등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  퇴직 후 상환 부담 감소를 원하는 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">원금균등</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  대출 초기 자금 여유가 없는 경우
                </th>
                <td className="px-3 py-2.5">원리금균등</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-scenario">
        <h2 id="guide-equal-scenario" className="text-foreground text-xl font-semibold tracking-tight">
          시나리오: 연봉 5,500만 원, 대출 2억 원
        </h2>
        <p>
          DSR 40% 기준 월 상환 가능액은 약 183만 원입니다. 아래는 금리 4%·30년·거치기간 없음 가정입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              DSR 한도와 맞물린 상환 방식 선택(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  1회차 월 상환
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  판단
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  원리금균등
                </th>
                <td className="border-border border-b px-3 py-2.5">약 95만 5천 원</td>
                <td className="border-border border-b px-3 py-2.5">DSR 대비 여유 있음. 월 고정 지출 관리에 유리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  원금균등
                </th>
                <td className="border-border border-b px-3 py-2.5">약 122만 2천 원</td>
                <td className="border-border border-b px-3 py-2.5">한도는 통과하나 초기 부담 큼. 보너스·중도상환 전제면 검토</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  기존 신용대출 월 50만 원 보유
                </th>
                <td className="px-3 py-2.5">주담대 활용 가능 약 133만 원</td>
                <td className="px-3 py-2.5">원금균등 초기 122만 원은 가능하나, 생활비·비상금까지 고려하면 원리금균등이 안전한 경우 많음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          같은 대출액이라도 <strong>기존 부채·생활비·비상자금</strong>까지 넣어 보면 선택이 달라집니다. 계산기로 숫자를 확인한 뒤,
          실제로 감당 가능한 1~3년차 월 부담을 기준으로 고르는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-equal-prepayment">
        <h2 id="guide-equal-prepayment" className="text-foreground text-xl font-semibold tracking-tight">
          중도상환·거치기간과 함께 볼 때
        </h2>
        <p>
          중도상환을 계획하고 있다면 두 방식의 총 이자 차이는 줄어듭니다. 어느 방식이든 초기에 상환할수록 이자 절감 효과가 크며,
          중도상환 수수료·최소 유지 기간을 먼저 확인해야 합니다.
        </p>
        <p>
          거치기간(이자만 납부)을 쓰면 초기 부담은 줄지만 총 이자가 늘고, 거치 종료 후 상환액이 크게 올라갑니다. 거치기간은
          원리금균등·원금균등에만 적용되며,{" "}
          <Link href="/guide/grace-period-explained" className="text-primary underline-offset-4 hover:underline">
            거치기간 설명
          </Link>
          과 함께 보세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-equal-mistakes">
        <h2 id="guide-equal-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          흔한 실수
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>총 이자만 보고 원금균등 선택</strong> — 초기 3년간 월 부담이 DSR·생활비를 초과하면 오히려 연체·추가
            대출 위험이 커집니다.
          </li>
          <li>
            <strong>은행 기본값(원리금균등)을 그대로 수용</strong> — 상품·기관마다 허용 방식이 다릅니다. 신청 전 비교 모드로
            차이를 확인하세요. 초기 부담을 더 낮추는 체증식은{" "}
            <Link href="/guide/graduated-repayment-interest-guide" className="text-primary underline-offset-4 hover:underline">
              체증식 대출 이자 계산 방법
            </Link>
            에서 설명합니다.
          </li>
          <li>
            <strong>중도상환 계획 없이 “이자 적은 쪽”만 고름</strong> — 실제로 중도상환을 못 하면 원금균등의 이점이 줄어듭니다.
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          ※ 위 예시는 이해를 돕기 위한 참고값이며, 실제 상환액은 금융기관별 계산·절사 방식에 따라 차이가 있을 수 있습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            내 대출 조건에 맞는 두 방식의 상환액 차이 계산
          </Link>
        </p>
      </aside>
    </>
  );
}
