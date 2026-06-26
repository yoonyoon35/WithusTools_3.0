import Link from "next/link";
// import { AllCreditAffiliateCta } from "@/components/affiliate/allcredit-cta";

export const creditScoreMortgageInterestRelationGuideMeta = {
  slug: "credit-score-mortgage-interest-relation-guide",
  title: "신용점수와 대출이자와의 관계",
  description:
    "2026년 4월 기준 대출금리 구조, 신용점수 구간별 금리·이자 영향, 금리 결정 요인, 절감 전략·점수 확인 방법과 공시 활용 안내입니다.",
  updated: "2026년 5월 15일",
} as const;

export function CreditScoreMortgageInterestRelationGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-csmir-intro">
        <h2 id="guide-csmir-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          신용점수는 대출 금리를 결정하는 핵심 변수 중 하나입니다. 전국은행연합회 소비자포털에서는 신용점수별 주택담보대출 금리를 비교 공시하고 있으며, 대출금리는 기준금리에 가산금리를 더하고 우대금리를 차감하는 구조로 결정됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-csmir-structure">
        <h2 id="guide-csmir-structure" className="text-foreground text-xl font-semibold tracking-tight">
          대출금리 결정 구조
        </h2>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
          대출금리 = 기준금리 + 가산금리 - 우대금리
        </p>
        <p>
          가산금리는 업무원가·법적비용·위험프리미엄·기대이익률로 구성되며, 신용점수별 예상 손실률이 위험프리미엄에 반영되어 신용점수가 낮을수록 가산금리가 높아집니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-csmir-tiers">
        <h2 id="guide-csmir-tiers" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수 구간별 주담대 금리 영향
        </h2>
        <p className="text-muted-foreground text-sm">2026년 4월 기준 시중은행 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신용점수·등급별 주담대 금리 영향
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신용점수 구간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신용등급
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리 영향
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  951점 ~ 1,000점
                </th>
                <td className="border-border border-b px-3 py-2.5">1등급</td>
                <td className="border-border border-b px-3 py-2.5">최저 우대금리 적용</td>
                <td className="border-border border-b px-3 py-2.5">은행별 최저금리 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  901점 ~ 950점
                </th>
                <td className="border-border border-b px-3 py-2.5">2등급</td>
                <td className="border-border border-b px-3 py-2.5">우대금리 일부 적용</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  801점 ~ 900점
                </th>
                <td className="border-border border-b px-3 py-2.5">3~4등급</td>
                <td className="border-border border-b px-3 py-2.5">기본금리 적용</td>
                <td className="border-border border-b px-3 py-2.5">은행연합회 공시 기준금리 (신용등급 3등급 기준)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  701점 ~ 800점
                </th>
                <td className="border-border border-b px-3 py-2.5">5~6등급</td>
                <td className="border-border border-b px-3 py-2.5">가산금리 추가 부과</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  700점 미만
                </th>
                <td className="px-3 py-2.5">7등급 이하</td>
                <td className="px-3 py-2.5">고가산금리 또는 대출 거절</td>
                <td className="px-3 py-2.5">신용등급이 낮거나 우대금리를 받지 못하면 6~7%대 금리 부담 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-csmir-impact">
        <h2 id="guide-csmir-impact" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수별 금리 차이가 이자에 미치는 영향
        </h2>
        <p className="text-muted-foreground text-sm">대출 원금 3억 원, 30년 원리금균등상환 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              구간별 예상 금리·월 상환·총 이자(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신용점수 구간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  예상 금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  30년 총 이자
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  951점 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">4.0%</td>
                <td className="border-border border-b px-3 py-2.5">약 143만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 1,480만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  850점 수준
                </th>
                <td className="border-border border-b px-3 py-2.5">4.5%</td>
                <td className="border-border border-b px-3 py-2.5">약 152만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 4,720만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  750점 수준
                </th>
                <td className="border-border border-b px-3 py-2.5">5.0%</td>
                <td className="border-border border-b px-3 py-2.5">약 161만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 7,960만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  700점 미만
                </th>
                <td className="px-3 py-2.5">5.5%</td>
                <td className="px-3 py-2.5">약 170만 원</td>
                <td className="px-3 py-2.5">약 3억 1,200만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>신용점수 구간에 따라 30년 총 이자 차이가 최대 약 1억 원에 달할 수 있습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-csmir-path">
        <h2 id="guide-csmir-path" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수가 금리에 영향을 미치는 구체적 경로
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리 연결 경로
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
                  위험프리미엄
                </th>
                <td className="border-border border-b px-3 py-2.5">신용점수가 낮을수록 연체 가능성이 높다고 판단해 가산금리 증가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  우대금리 적용 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">신용점수 기준 우대금리 항목 충족 여부 결정</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">신용점수 낮으면 LTV·DSR 외 추가 한도 제한 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  금융기관 선택 범위
                </th>
                <td className="px-3 py-2.5">점수 낮을수록 1금융권 이용 제한·2금융권 이용 불가피</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-csmir-other">
        <h2 id="guide-csmir-other" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수 외 금리에 영향을 미치는 요소
        </h2>
        <p>신용점수만으로 금리가 결정되지 않습니다. 아래 요소들이 복합적으로 작용합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리에 영향을 주는 기타 요인
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  요소
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리 영향
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주거래 은행 거래 실적
                </th>
                <td className="border-border border-b px-3 py-2.5">급여이체·카드 실적 따라 0.1~0.6%p 우대금리 적용 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  담보 주택 종류
                </th>
                <td className="border-border border-b px-3 py-2.5">아파트 &gt; 빌라 &gt; 단독주택 순으로 담보 인정 유리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소득 안정성
                </th>
                <td className="border-border border-b px-3 py-2.5">근로소득자 &gt; 사업소득자 &gt; 프리랜서 순으로 유리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">장기일수록 금리 높아지는 경향</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 유형
                </th>
                <td className="border-border border-b px-3 py-2.5">변동·혼합·고정에 따라 초기 금리 차이 발생</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  대출 시점
                </th>
                <td className="px-3 py-2.5">시장금리 수준에 따라 동일 신용점수라도 금리 상이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-csmir-save">
        <h2 id="guide-csmir-save" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수 구간별 금리 차이 절감 전략
        </h2>
        <p className="text-muted-foreground text-sm">신용점수 구간별 금리를 낮추는 현실적인 방법</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              구간별 우선 전략
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신용점수 구간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  우선 전략
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  900점 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">주거래 은행 우대금리 최대한 확보·복수 은행 비교</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  800점 ~ 900점
                </th>
                <td className="border-border border-b px-3 py-2.5">신용점수 추가 상승 후 대출 신청·금리인하요구권 활용</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  700점 ~ 800점
                </th>
                <td className="border-border border-b px-3 py-2.5">기존 소액 부채 정리 후 재신청·2금융권 병행 비교</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  700점 미만
                </th>
                <td className="px-3 py-2.5">신용점수 회복 우선·연체 즉시 해소</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-csmir-swing">
        <h2 id="guide-csmir-swing" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수 20~30점 차이의 실질 효과
        </h2>
        <p>
          신용점수 20~30점 차이만으로 금리 차이가 발생하는 경우가 많으므로 대출 신청 전 신용점수를 최대한 끌어올리는 것이
          중요합니다.
        </p>
        <h3 className="text-foreground text-base font-semibold tracking-tight">
          신용점수 20점 상승으로 금리 0.2%p 인하 시 이자 절감 효과
        </h3>
        <p className="text-muted-foreground text-sm">대출 원금 3억 원, 30년 원리금균등상환 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              0.2%p 인하 시 절감(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  월 상환액 절감
                </th>
                <td className="border-border border-b px-3 py-2.5">약 3만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연간 이자 절감
                </th>
                <td className="border-border border-b px-3 py-2.5">약 36만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  30년 총 이자 절감
                </th>
                <td className="px-3 py-2.5">약 1,080만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>신용점수 관리에 투자하는 시간이 장기적으로 수백만 원~수천만 원의 이자 절감으로 이어집니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-csmir-check">
        <h2 id="guide-csmir-check" className="text-foreground text-xl font-semibold tracking-tight">
          대출 신청 전 신용점수 확인 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              무료·저비용 확인 채널
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  서비스
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비용
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 점수
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  카카오페이
                </th>
                <td className="border-border border-b px-3 py-2.5">무료</td>
                <td className="border-border border-b px-3 py-2.5">KCB 점수</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  토스
                </th>
                <td className="border-border border-b px-3 py-2.5">무료</td>
                <td className="border-border border-b px-3 py-2.5">KCB 점수</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  나이스지키미
                </th>
                <td className="border-border border-b px-3 py-2.5">무료 (월 1회)</td>
                <td className="border-border border-b px-3 py-2.5">NICE 점수</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  올크레딧
                </th>
                <td className="px-3 py-2.5">무료 (월 1회)</td>
                <td className="px-3 py-2.5">KCB 점수</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          금융기관마다 KCB 또는 NICE 중 다른 기준을 사용하므로 두 곳 모두 확인하는 것이 좋습니다. 대출 신청 예정일 기준 최소
          3~6개월 전부터 관리를 시작하는 것이 효과적입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-csmir-public">
        <h2 id="guide-csmir-public" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수별 금리 비교 공시 확인 방법
        </h2>
        <p>
          전국은행연합회 소비자포털(portal.kfb.or.kr)에서 은행별·신용점수별 주택담보대출 금리를 직접 비교할 수 있습니다.
          금융감독원 금융상품한눈에(finlife.fss.or.kr)에서도 주요 금융기관 대출 금리를 확인할 수 있습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 신용점수별 금리는 금융기관별로 다르며 시장금리 변동에 따라 수시로 달라질 수 있습니다. 정확한 적용 금리는 대출 신청 시 해당 금융기관에서 확인해야 합니다.
        </p>
      </section>

      {/* <AllCreditAffiliateCta
        className="w-full"
        description="본인이 어느 신용점수 구간에 속하는지 먼저 확인하면, 위 표의 금리·이자 차이를 실제 조건과 연결해 보기 쉽습니다. KCB 신용등급 무료 조회입니다."
      /> */}

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="대출 이자 계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 금리에 따른 월 상환액과 총 이자는 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
