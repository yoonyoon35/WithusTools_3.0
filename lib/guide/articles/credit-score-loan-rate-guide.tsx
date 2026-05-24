import Link from "next/link";
// import { AllCreditAffiliateCta } from "@/components/affiliate/allcredit-cta";

export const creditScoreLoanRateGuideMeta = {
  slug: "credit-score-loan-rate-guide",
  title: "신용점수 관리 방법과 대출 금리의 관계",
  description:
    "2026년 4월 시중은행 기준 신용점수 구간별 금리 영향, 산정 요소, 점수 올리기·떨어뜨리는 행동, 절감 효과 예시와 확인 방법을 표로 정리했습니다.",
  updated: "2026년 4월 14일",
} as const;

export function CreditScoreLoanRateGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-credit-intro">
        <h2 id="guide-credit-intro" className="text-foreground text-xl font-semibold tracking-tight">
          개요
        </h2>
        <p>
          신용점수는 금융기관이 대출 심사 시 금리와 한도를 결정하는 핵심 기준입니다. 같은 조건의 대출이라도 신용점수에 따라 금리가
          최대 1~2%p 이상 차이 날 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-credit-tiers">
        <h2 id="guide-credit-tiers" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수 구간별 대출 금리 영향
        </h2>
        <p className="text-muted-foreground text-sm">2026년 4월 시중은행 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신용점수 구간별 주담대·신용대출 금리 영향(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신용점수 구간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  등급
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주담대 금리 영향
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신용대출 금리 영향
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  951점 ~ 1,000점
                </th>
                <td className="border-border border-b px-3 py-2.5">1등급</td>
                <td className="border-border border-b px-3 py-2.5">최우대금리 적용</td>
                <td className="border-border border-b px-3 py-2.5">연 4.29% ~ 4.89%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  901점 ~ 950점
                </th>
                <td className="border-border border-b px-3 py-2.5">2등급</td>
                <td className="border-border border-b px-3 py-2.5">우대금리 일부 적용</td>
                <td className="border-border border-b px-3 py-2.5">연 4.5% ~ 5.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  801점 ~ 900점
                </th>
                <td className="border-border border-b px-3 py-2.5">3~4등급</td>
                <td className="border-border border-b px-3 py-2.5">기본금리 적용</td>
                <td className="border-border border-b px-3 py-2.5">연 5% 이상</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  700점 ~ 800점
                </th>
                <td className="border-border border-b px-3 py-2.5">5~6등급</td>
                <td className="border-border border-b px-3 py-2.5">가산금리 부과</td>
                <td className="border-border border-b px-3 py-2.5">연 6% 이상</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  700점 미만
                </th>
                <td className="px-3 py-2.5">7등급 이하</td>
                <td className="px-3 py-2.5">대출 거절 가능</td>
                <td className="px-3 py-2.5">2금융권 이용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-credit-factors">
        <h2 id="guide-credit-factors" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수를 산정하는 주요 요소
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              요소별 영향과 세부 내용
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  요소
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  영향
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세부 내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상환 이력
                </th>
                <td className="border-border border-b px-3 py-2.5">매우 큼</td>
                <td className="border-border border-b px-3 py-2.5">연체 이력이 가장 큰 감점 요인</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부채 수준
                </th>
                <td className="border-border border-b px-3 py-2.5">큼</td>
                <td className="border-border border-b px-3 py-2.5">총 대출 잔액 및 DSR 비율</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신용 거래 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">중간</td>
                <td className="border-border border-b px-3 py-2.5">오래된 신용 거래일수록 유리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신용 거래 다양성
                </th>
                <td className="border-border border-b px-3 py-2.5">중간</td>
                <td className="border-border border-b px-3 py-2.5">카드·대출·할부 등 다양한 거래 이력</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  최근 신규 대출 조회
                </th>
                <td className="px-3 py-2.5">작음</td>
                <td className="px-3 py-2.5">단기간 다수 조회 시 일시적 하락</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-credit-improve">
        <h2 id="guide-credit-improve" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수를 올리는 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              방법별 효과와 소요 기간(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  효과
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소요 기간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연체 즉시 해소
                </th>
                <td className="border-border border-b px-3 py-2.5">매우 큼</td>
                <td className="border-border border-b px-3 py-2.5">해소 후 1~3개월</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  카드값·대출 이자 자동납부 설정
                </th>
                <td className="border-border border-b px-3 py-2.5">큼</td>
                <td className="border-border border-b px-3 py-2.5">3~6개월</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  통신요금·공공요금 납부 이력 등록
                </th>
                <td className="border-border border-b px-3 py-2.5">중간</td>
                <td className="border-border border-b px-3 py-2.5">1~3개월</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  불필요한 마이너스통장 한도 축소
                </th>
                <td className="border-border border-b px-3 py-2.5">중간</td>
                <td className="border-border border-b px-3 py-2.5">1~2개월</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소액 신용대출 정리
                </th>
                <td className="border-border border-b px-3 py-2.5">중간</td>
                <td className="border-border border-b px-3 py-2.5">1~3개월</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  주거래 은행 집중 거래
                </th>
                <td className="px-3 py-2.5">중간</td>
                <td className="px-3 py-2.5">6개월 이상</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          통신요금·공공요금 납부 이력은 KCB(올크레딧) 또는 NICE(나이스지키미)에 직접 등록 신청해야 반영됩니다. 자동으로 반영되지
          않으므로 별도 신청이 필요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-credit-harmful">
        <h2 id="guide-credit-harmful" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수를 떨어뜨리는 행동
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              행동별 영향
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  행동
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  영향
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연체(단 하루라도)
                </th>
                <td className="border-border border-b px-3 py-2.5">매우 큼 — 회복에 수년 소요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  단기간 다수 대출 신청
                </th>
                <td className="border-border border-b px-3 py-2.5">중간 — 단기 하락 후 회복</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  마이너스통장 한도 증액
                </th>
                <td className="border-border border-b px-3 py-2.5">중간 — 부채 한도 증가로 반영</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  카드 현금서비스·카드론 사용
                </th>
                <td className="border-border border-b px-3 py-2.5">큼 — 고금리 부채로 인식</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  저축은행·캐피탈 대출 이용
                </th>
                <td className="px-3 py-2.5">중간 — 2금융권 이용 이력 반영</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-credit-savings">
        <h2 id="guide-credit-savings" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수와 대출 금리 절감 효과 예시
        </h2>
        <p className="text-muted-foreground text-sm">대출 원금 2억 원, 30년 원리금균등상환 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신용점수 구간별 예상 금리·월 상환액·총 이자(참고)
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
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  951점 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">4.0%</td>
                <td className="border-border border-b px-3 py-2.5">약 95만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1억 4,400만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  850점 수준
                </th>
                <td className="border-border border-b px-3 py-2.5">4.5%</td>
                <td className="border-border border-b px-3 py-2.5">약 101만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1억 6,400만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  750점 수준
                </th>
                <td className="px-3 py-2.5">5.0%</td>
                <td className="px-3 py-2.5">약 107만 원</td>
                <td className="px-3 py-2.5">약 1억 8,600만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>신용점수 100점 차이가 30년 기준 총 이자 약 2,000만 원 차이로 이어질 수 있습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-credit-check">
        <h2 id="guide-credit-check" className="text-foreground text-xl font-semibold tracking-tight">
          대출 신청 전 신용점수 확인 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              서비스별 비용과 확인 가능 점수
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
                  확인 가능 점수
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  카카오페이·토스
                </th>
                <td className="border-border border-b px-3 py-2.5">무료</td>
                <td className="border-border border-b px-3 py-2.5">KCB 점수</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  나이스지키미
                </th>
                <td className="border-border border-b px-3 py-2.5">무료(월 1회)</td>
                <td className="border-border border-b px-3 py-2.5">NICE 점수</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  올크레딧
                </th>
                <td className="px-3 py-2.5">무료(월 1회)</td>
                <td className="px-3 py-2.5">KCB 점수</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          금융기관마다 KCB 또는 NICE 중 다른 기준을 사용할 수 있으므로 두 곳 모두 확인하는 것이 좋습니다.
        </p>
        {/* <AllCreditAffiliateCta description="표에 소개한 올크레딧에서 KCB 신용등급을 무료(월 1회)로 확인할 수 있습니다." /> */}
      </section>

      <section className="space-y-3" aria-labelledby="guide-credit-strategy">
        <h2 id="guide-credit-strategy" className="text-foreground text-xl font-semibold tracking-tight">
          대출 신청 전 신용점수 관리 전략
        </h2>
        <p>
          대출 신청 예정일 기준 최소 3~6개월 전부터 관리를 시작하는 것이 효과적입니다. 대출 신청 직전에는 신규 대출 조회나 카드
          발급을 자제하고, 기존 소액 부채를 먼저 정리하는 것이 유리합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 신용점수 산정 방식은 KCB와 NICE가 다르며, 금융기관마다 자체 내부 신용평가시스템을 병행 적용합니다. 정확한 금리는 대출
          신청 시 금융기관 심사를 통해 확인됩니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            신용점수 개선 후 적용 가능한 금리 기준 월 상환액은 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
