import Link from "next/link";

export const kakaoEmergencyLoanInterestGuideMeta = {
  slug: "kakao-emergency-loan-interest-guide",
  title: "카카오 비상금대출 이자 계산 방식",
  description:
    "카카오뱅크 비상금대출(마이너스통장) 이자 계산식, 사용액·일수별 예시, 한도만 열어둔 경우, 계산기로 어림할 때와 실제 일할 이자의 차이를 정리했습니다.",
  updated: "2026년 9월 19일",
} as const;

export function KakaoEmergencyLoanInterestGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-kel-intro">
        <h2 id="guide-kel-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 9월 19일 기준
        </h2>
        <p>
          검색에서 말하는 「카카오 비상금대출」은 보통{" "}
          <strong>카카오뱅크 비상금대출</strong>을 가리킵니다. 원금이 한꺼번에 입금되는 분할상환 대출이 아니라, 한도만 열고{" "}
          <strong>쓴 금액에 대해서만 이자를 내는 마이너스통장</strong>입니다. 쓰지 않으면 이자가 없고, 쓰고 바로 넣으면 그 일수만큼만
          붙습니다.
        </p>
        <p>
          지식인·검색에서 「이자가 어떻게 나오는지」를 묻는 경우가 많은 이유는, 주담대처럼 원리금균등 월 상환액을 기대하고 보기
          때문입니다. 이 글은 <strong>일할 이자 공식</strong>과 사용 패턴별 숫자, 그리고{" "}
          <Link href="/loan-calculator" className="text-primary underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
          의 만기일시(이자만)로 어림할 때 어디가 같고 어디가 다른지를 정리합니다. 확정 금리·한도는 카카오뱅크 앱·상품설명서를
          따릅니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-kel-structure" className="text-primary underline-offset-4 hover:underline">
              상품 구조
            </a>
          </li>
          <li>
            <a href="#guide-kel-formula" className="text-primary underline-offset-4 hover:underline">
              이자 계산 공식
            </a>
          </li>
          <li>
            <a href="#guide-kel-examples" className="text-primary underline-offset-4 hover:underline">
              사용액·일수별 예시
            </a>
          </li>
          <li>
            <a href="#guide-kel-same-day" className="text-primary underline-offset-4 hover:underline">
              당일 인출·상환
            </a>
          </li>
          <li>
            <a href="#guide-kel-calculator" className="text-primary underline-offset-4 hover:underline">
              계산기로 어림하는 법
            </a>
          </li>
          <li>
            <a href="#guide-kel-dsr" className="text-primary underline-offset-4 hover:underline">
              DSR·한도만 열어둔 경우
            </a>
          </li>
          <li>
            <a href="#guide-kel-notes" className="text-primary underline-offset-4 hover:underline">
              금리·연체·비슷한 상품
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-kel-structure">
        <h2 id="guide-kel-structure" className="text-foreground text-xl font-semibold tracking-tight">
          상품 구조
        </h2>
        <p>
          카카오뱅크 공시 기준으로 한도는 최소 50만 원~최대 300만 원, 기간은 1년(심사 후 1년 단위 연장), 상환 방식은{" "}
          <strong>만기일시상환</strong>입니다. 기간 중에는 한도 안에서 수시로 쓰고 갚을 수 있고, 중도상환해약금은 없습니다. 이자는
          매월 지정 납입일에 한도가 열린 입출금 계좌에서 자동 출금됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              카카오뱅크 비상금대출 요약(2026년 9월 19일 공시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 종류
                </th>
                <td className="border-border border-b px-3 py-2.5">마이너스통장(한도대출)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  한도
                </th>
                <td className="border-border border-b px-3 py-2.5">50만 원 ~ 300만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리(비상금대출)
                </th>
                <td className="border-border border-b px-3 py-2.5">연 4.947% ~ 15.000%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리(중신용비상금대출)
                </th>
                <td className="border-border border-b px-3 py-2.5">연 7.025% ~ 11.901%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이자 부과
                </th>
                <td className="border-border border-b px-3 py-2.5">사용한 금액만, 미사용 시 0원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  연체금리
                </th>
                <td className="px-3 py-2.5">대출금리 + 연 3%(최고 연 15% 등 약관 제한)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          적용 금리는 기준금리(신잔액COFIX 6개월 또는 금융채 1년) + 가산금리 − 우대금리입니다. 가산금리는 개인 심사마다 다르고,
          대출 기간 중에는 바뀌지 않습니다. 위 숫자는 공시 구간이며 본인 약정 금리가 아닙니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-kel-formula">
        <h2 id="guide-kel-formula" className="text-foreground text-xl font-semibold tracking-tight">
          이자 계산 공식
        </h2>
        <p>
          카카오뱅크는 직전 결산일 다음 날(또는 신규일)부터 이번 달 결산일까지{" "}
          <strong>매일의 대출 사용금액 × 대출금리</strong>를 더해 이자를 만듭니다. 참고용으로 풀어 쓰면 아래와 같습니다.
        </p>
        <pre className="bg-muted/30 text-foreground overflow-x-auto rounded-md border border-border p-3 font-mono text-xs leading-relaxed whitespace-pre sm:text-sm">
          {`일 이자 = 그날의 사용금액 × 연 금리 ÷ 365
월 이자 = 결산 기간 동안 일 이자의 합

한 달 내내 같은 금액을 썼다면
월 이자 어림 ≈ 사용금액 × 연 금리 ÷ 12`}
        </pre>
        <p>
          한 달 내내 잔액이 같으면 ÷12 어림과 일할 합이 비슷합니다. 며칠만 쓰거나 중간에 갚으면{" "}
          <strong>일할 합이 더 적습니다</strong>. 반대로 주담대 계산기처럼 원리금균등으로 넣으면, 없는 원금 분할까지 잡혀 월
          부담이 실제와 크게 어긋납니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kel-examples">
        <h2 id="guide-kel-examples" className="text-foreground text-xl font-semibold tracking-tight">
          사용액·일수별 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          일할 계산(연 금리 ÷ 365 × 일수). 원 단위 절사·반올림은 은행 처리에 따라 수 원 차이가 날 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              카카오 비상금대출 이자 예시(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  사용 패턴
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  가정 금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일할 이자(약)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  ÷12 어림
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  한도만 열고 0원
                </th>
                <td className="border-border border-b px-3 py-2.5">상관없음</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  100만 원 × 10일
                </th>
                <td className="border-border border-b px-3 py-2.5">연 6%</td>
                <td className="border-border border-b px-3 py-2.5">약 1,644원</td>
                <td className="border-border border-b px-3 py-2.5">약 5,000원(한 달 가정)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  300만 원 × 30일
                </th>
                <td className="border-border border-b px-3 py-2.5">연 4.947%</td>
                <td className="border-border border-b px-3 py-2.5">약 1만 2,196원</td>
                <td className="border-border border-b px-3 py-2.5">약 1만 2,368원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  300만 원 × 30일
                </th>
                <td className="border-border border-b px-3 py-2.5">연 6%</td>
                <td className="border-border border-b px-3 py-2.5">약 1만 4,795원</td>
                <td className="border-border border-b px-3 py-2.5">1만 5,000원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  300만 원 × 30일
                </th>
                <td className="px-3 py-2.5">연 15%</td>
                <td className="px-3 py-2.5">약 3만 6,986원</td>
                <td className="px-3 py-2.5">3만 7,500원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          한 달 내내 한도를 다 쓰면 ÷12 어림과 일할이 수백 원 차이로 가깝습니다. 열흘만 쓰면 일할이 훨씬 적습니다. 「300만 원을
          받았으니 매달 원리금이 나온다」고 보면 과대 계산이 됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-kel-same-day">
        <h2 id="guide-kel-same-day" className="text-foreground text-xl font-semibold tracking-tight">
          당일 인출·상환
        </h2>
        <p>
          아침에 쓰고 저녁에 갚아도 이자가 0이 아닐 수 있습니다. 상품설명서상 마이너스통장의 「매일의 잔액」은 마감잔액만이 아니라,
          하루 중 최고잔액이 반영되는 방식입니다. 당일 200만 원을 썼다가 같은 날 넣어도{" "}
          <strong>그 최고잔액 1일치</strong>가 잡힐 수 있습니다.
        </p>
        <p>
          연 6%·200만 원 1일이면 약 329원입니다. 소액이지만 「당일 상환 = 무이자」로 알고 반복하면, 결산일에 이자가 생긴 이유를
          찾기 어렵습니다. 정확한 잔액 산정은 약관·상품설명서를 따릅니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-kel-calculator">
        <h2 id="guide-kel-calculator" className="text-foreground text-xl font-semibold tracking-tight">
          계산기로 어림하는 법
        </h2>
        <p>
          본 사이트{" "}
          <Link href="/loan-calculator" className="text-primary underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
          는 월 단위 단리(연이율 ÷ 12)입니다. 카카오 비상금대출처럼 <strong>며칠만 쓰는 일할</strong>을 날짜별로 더하지는 않습니다.
          다만 한 달 내내 같은 금액을 쓸 계획이면, 아래처럼 넣으면 월 이자 규모를 빠르게 볼 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              계산기 입력 요령(어림)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  입력
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  넣는 값
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 원금
                </th>
                <td className="border-border border-b px-3 py-2.5">한도가 아니라 실제로 쓸 금액</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리
                </th>
                <td className="border-border border-b px-3 py-2.5">앱에 표시된 본인 약정 금리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상환 방식
                </th>
                <td className="border-border border-b px-3 py-2.5">만기일시(이자만)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  기간
                </th>
                <td className="px-3 py-2.5">1년 등 약정 기간. 월 이자는 원금×금리÷12</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          원리금균등·원금균등으로 넣으면 매월 원금까지 나눠 갚는 숫자로 나와, 비상금대출 실제 청구와 맞지 않습니다. 단기 사용
          이자는 위 공식으로 일수를 곱하는 편이 맞습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-kel-dsr">
        <h2 id="guide-kel-dsr" className="text-foreground text-xl font-semibold tracking-tight">
          DSR·한도만 열어둔 경우
        </h2>
        <p>
          이자는 사용액 기준이지만,{" "}
          <abbr title="총부채원리금상환비율">DSR</abbr>은 마이너스통장을{" "}
          <strong>한도액 기준 연간 이자</strong>로 잡는 경우가 많습니다. 300만 원 한도를 열어두고 한 번도 안 써도, 심사에서는
          한도×금리만큼 연간 이자가 잡힐 수 있습니다.
        </p>
        <p>
          주담대·신용대출을 추가로 받을 계획이면 쓰지 않는 비상금 한도를 줄이거나 해지하는 편이 유리한 경우가 있습니다.{" "}
          <Link href="/guide/dsr-calculation-method" className="text-primary underline-offset-4 hover:underline">
            DSR 계산 방법
          </Link>
          과{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          에서 한도 대출이 어떻게 잡히는지 함께 보세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kel-notes">
        <h2 id="guide-kel-notes" className="text-foreground text-xl font-semibold tracking-tight">
          금리·연체·비슷한 상품
        </h2>
        <p>
          검색어 「카카오 비상금대출」과 카카오페이 비상금·다른 은행 비상금대출은 상품이 다릅니다. 다만 토스·케이뱅크 등{" "}
          <strong>소액 비상금도 마이너스통장·일할 이자</strong>인 경우가 많아, 공식 자체는 같은 방식으로 보면 됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              이자 관련 확인 사항
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인할 것
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이자가 생각보다 큼
                </th>
                <td className="border-border border-b px-3 py-2.5">한 달 사용 일수·하루 최고잔액·약정 금리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  납입일 잔액 부족
                </th>
                <td className="border-border border-b px-3 py-2.5">한도 안에서 이자 출금, 부족 시 연체이자</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신용·소득이 좋아짐
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link
                    href="/guide/rate-reduction-request-right"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    금리인하요구권
                  </Link>{" "}
                  앱 신청 가능 여부
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  연장 심사
                </th>
                <td className="px-3 py-2.5">만기 전 앱 연장. 거절 시 잔액·미납 이자 전액 상환</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          이 글은 카카오뱅크 상품 페이지·가계대출 상품설명서의 공개 산식을 바탕으로 한 참고용입니다. 공식 상담·약정 조건은
          카카오뱅크(1599-3333) 또는 앱에서 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            한 달 내내 쓸 금액의 월 이자는 대출 이자 계산기에서 만기일시로 어림할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
