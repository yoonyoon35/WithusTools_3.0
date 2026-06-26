import Link from "next/link";

export const housingSubscriptionSavingsGuideMeta = {
  slug: "housing-subscription-savings-guide",
  title: "주택청약종합저축 완전 정리",
  description:
    "주택청약종합저축 가입 시점·납입 전략, 1순위 요건과 가점의 관계, 해지 시 잃는 것과 청약 전에 확인할 순서를 정리했습니다.",
  updated: "2026년 4월 20일",
} as const;

export function HousingSubscriptionSavingsGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-hss-overview">
        <h2 id="guide-hss-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          주택청약종합저축은 국민주택과 민영주택 모두 청약할 수 있는 만능 청약통장입니다. 1인 1계좌만 보유 가능하며, 연령에 관계없이
          누구나 가입할 수 있습니다. “언제든 가입” 가능하지만, <strong>1순위 자격(납입 기간·예치금)</strong>은 시간이
          필요하므로 내집마련 시기보다 1~2년 앞서 시작하는 편이 유리합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-hss-when-start">
        <h2 id="guide-hss-when-start" className="text-foreground text-xl font-semibold tracking-tight">
          지금 가입해야 할까
        </h2>
        <p>
          5~10년 안에 청약을 염두에 두고 있다면 월 25만 원(가점·1순위 인정 상한)까지 꾸준히 넣는 그림을 그려 보세요. 당장
          청약 계획이 없어도 세액공제 혜택만큼은 받을 수 있지만, 중도 해지 시 청약 가점·순위가 초기화될 수 있어 목적 없이
          오래 묶어 두기만 하는 것도 손해일 수 있습니다.{" "}
          <Link href="/guide/first-time-homebuyer-benefits-2026" className="text-primary underline-offset-4 hover:underline">
            생애최초 혜택
          </Link>
          과 특별공급 일정을 함께 보면 납입 속도를 정하기 쉽습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hss-basic">
        <h2 id="guide-hss-basic" className="text-foreground text-xl font-semibold tracking-tight">
          기본 상품 정보
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택청약종합저축 핵심 요약
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
                  가입 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">국내 거주 국민(연령 제한 없음)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  월 납입 금액
                </th>
                <td className="border-border border-b px-3 py-2.5">2만 원 이상 50만 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  월 납입 인정 금액
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 25만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 금리
                </th>
                <td className="border-border border-b px-3 py-2.5">연 2.3% ~ 3.1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  납입분 세액공제(안내상 소득공제)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  연간 납입액의 40%를 기준으로 세액에서 공제(환급)를 받는 구조입니다. 금융기관 안내에서는 “소득공제”로 통칭하는
                  경우가 많습니다.
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연간 세액공제 상한
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  조세특례제한법 등에 따른 <strong>연간 적용 한도</strong>가 정해져 있습니다. 2024년 11월 개정으로 그 한도가
                  연 <strong>240만 원에서 300만 원</strong>으로 확대되었습니다(실제 공제액은 납입액·세율·소득 구간에 따라 달라질 수
                  있음).
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  가입 계좌 수
                </th>
                <td className="px-3 py-2.5">전 금융기관 통틀어 1인 1계좌</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          2024년 11월부터 월 납입 인정액이 기존 10만 원에서 25만 원으로 상향되었습니다. 세액공제 연간 상한 확대는 위 표의「연간
          세액공제 상한」행을 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hss-first">
        <h2 id="guide-hss-first" className="text-foreground text-xl font-semibold tracking-tight">
          1순위 조건
        </h2>
        <p>
          1순위가 되어야 청약 당첨 가능성이 높아집니다. 국민주택과 민영주택의 1순위 조건이 다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              유형·지역별 1순위 가입 기간·납입 횟수
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  가입 기간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납입 횟수
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  국민주택
                </th>
                <td className="border-border border-b px-3 py-2.5">수도권</td>
                <td className="border-border border-b px-3 py-2.5">12개월 이상</td>
                <td className="border-border border-b px-3 py-2.5">12회 이상</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  국민주택
                </th>
                <td className="border-border border-b px-3 py-2.5">비수도권</td>
                <td className="border-border border-b px-3 py-2.5">6개월 이상</td>
                <td className="border-border border-b px-3 py-2.5">6회 이상</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  민영주택
                </th>
                <td className="border-border border-b px-3 py-2.5">수도권</td>
                <td className="border-border border-b px-3 py-2.5">12개월 이상</td>
                <td className="border-border border-b px-3 py-2.5">조건 없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  민영주택
                </th>
                <td className="px-3 py-2.5">비수도권</td>
                <td className="px-3 py-2.5">6개월 이상</td>
                <td className="px-3 py-2.5">조건 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hss-deposit">
        <h2 id="guide-hss-deposit" className="text-foreground text-xl font-semibold tracking-tight">
          민영주택 지역별 예치금 기준
        </h2>
        <p>민영주택 1순위는 가입 기간 외에 지역별 예치금을 충족해야 합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전용면적·지역별 예치금(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  전용면적
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  서울·부산
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기타 광역시
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기타 지역
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  85㎡ 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">250만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  102㎡ 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">600만 원</td>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  135㎡ 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">700만 원</td>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  모든 면적
                </th>
                <td className="px-3 py-2.5">1,500만 원</td>
                <td className="px-3 py-2.5">1,000만 원</td>
                <td className="px-3 py-2.5">500만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>모든 면적에 청약하려면 통장에 1,500만 원(서울·부산 기준) 이상 예치하면 됩니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hss-points">
        <h2 id="guide-hss-points" className="text-foreground text-xl font-semibold tracking-tight">
          청약 가점 산정 방식
        </h2>
        <p>
          민영주택 가점제 당첨자는 무주택 기간·부양가족 수·청약통장 가입 기간 세 항목으로 최대 84점을 산정합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              가점 항목별 만점 기준
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  최대 점수
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">32점</td>
                <td className="border-border border-b px-3 py-2.5">15년 이상 무주택 시 만점</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부양가족 수
                </th>
                <td className="border-border border-b px-3 py-2.5">35점</td>
                <td className="border-border border-b px-3 py-2.5">6명 이상 시 만점</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  청약통장 가입 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">17점</td>
                <td className="border-border border-b px-3 py-2.5">15년 이상 시 만점</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">84점</td>
                <td className="px-3 py-2.5">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hss-selection">
        <h2 id="guide-hss-selection" className="text-foreground text-xl font-semibold tracking-tight">
          국민주택 vs 민영주택 당첨자 선정 방식
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전용면적 구간별 선정 방식 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  국민주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  민영주택
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전용 40㎡ 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">납입 횟수 많은 순</td>
                <td className="border-border border-b px-3 py-2.5">가점제 또는 추첨제</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  전용 40㎡ 초과
                </th>
                <td className="px-3 py-2.5">3년 이상 무주택 세대주 중 납입액 많은 순</td>
                <td className="px-3 py-2.5">가점제 또는 추첨제</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-hss-youth">
        <h2 id="guide-hss-youth" className="text-foreground text-xl font-semibold tracking-tight">
          청년주택드림 청약통장
        </h2>
        <p>
          주택청약종합저축에 자격 요건을 충족하는 청년에게 우대금리와 비과세 혜택을 추가한 상품이 청년주택드림 청약통장입니다. 만
          19세 이상 34세 이하, 연소득 5,000만 원 이하 무주택자가 가입할 수 있으며 2년 이상 10년 이내 가입 시 연 4.5%의 우대금리가
          적용됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-hss-minor">
        <h2 id="guide-hss-minor" className="text-foreground text-xl font-semibold tracking-tight">
          미성년자 가입 시 주의사항
        </h2>
        <p>
          미성년자는 연령에 관계없이 가입 가능하나, 19세 이전 납입 기간은 최대 5년, 납입금액은 최대 600만 원까지만 인정됩니다. 청약
          가점 산정 시 가입 기간은 만 19세부터 기산되므로 일찍 가입할수록 유리합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hss-cancel">
        <h2 id="guide-hss-cancel" className="text-foreground text-xl font-semibold tracking-tight">
          해지 시 주의사항
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              해지 상황별 처리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  가입 1년 미만 해지
                </th>
                <td className="border-border border-b px-3 py-2.5">이자 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  가입 1년 이상 해지
                </th>
                <td className="border-border border-b px-3 py-2.5">이자 지급(약정 금리보다 낮음)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  당첨 후 해지
                </th>
                <td className="border-border border-b px-3 py-2.5">재가입 시 가입 기간 리셋</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  소득공제 받은 후 해지
                </th>
                <td className="px-3 py-2.5">추징세 발생 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          청약통장을 해지하면 가입 기간이 초기화되므로 신중해야 합니다. 당장 청약 계획이 없더라도 납입을 유지하는 것이 장기적으로
          유리합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-hss-strategy">
        <h2 id="guide-hss-strategy" className="text-foreground text-xl font-semibold tracking-tight">
          납입 전략
        </h2>
        <p>
          국민주택을 목표로 한다면 매월 25만 원씩 꾸준히 납입하는 것이 유리합니다. 민영주택 추첨제를 노린다면 예치금 기준만 충족하면
          되므로 월 납입액보다 예치금 총액 관리가 더 중요합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 청약 당첨 이후 예치금은 계약금이 아닙니다. 당첨 후 건설사가 제시한 기간 내에 별도로 계약금을 준비해야 합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            청약 당첨 후 주택담보대출 월 상환액은 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
