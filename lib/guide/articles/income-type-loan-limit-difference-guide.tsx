import Link from "next/link";

export const incomeTypeLoanLimitDifferenceGuideMeta = {
  slug: "income-type-loan-limit-difference-guide",
  title: "소득 유형별 대출 한도 차이",
  description:
    "근로소득·사업소득·프리랜서의 소득 인정 방식과 DSR 기준 대출 한도 차이, 증빙 서류, 한도 개선 전략을 표로 정리했습니다.",
  updated: "2026년 4월 20일",
} as const;

export function IncomeTypeLoanLimitDifferenceGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-income-overview">
        <h2 id="guide-income-overview" className="text-foreground text-xl font-semibold tracking-tight">
          근로소득 vs 사업소득 vs 프리랜서
        </h2>
        <p>
          대출 한도를 결정하는 DSR은 연소득 대비 원리금 상환 비율입니다. 연소득이 같아도 소득 유형에 따라 금융기관이 인정하는 소득액이
          달라지기 때문에, 실제 대출 한도에 큰 차이가 생깁니다.
        </p>
        <p>근로소득은 100% 인정되지만 사업소득·프리랜서 소득은 반영률이 낮아 실제 체감 한도가 크게 줄어들 수 있습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-income-compare">
        <h2 id="guide-income-compare" className="text-foreground text-xl font-semibold tracking-tight">
          소득 유형별 인정 방식 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              근로소득자·사업소득자·프리랜서 인정 방식 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  근로소득자
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  사업소득자(자영업자)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  프리랜서
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소득 산정 기준
                </th>
                <td className="border-border border-b px-3 py-2.5">세전 연봉 전액</td>
                <td className="border-border border-b px-3 py-2.5">종합소득세 신고 소득</td>
                <td className="border-border border-b px-3 py-2.5">소득금액증명원 기준 소득</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소득 인정 비율
                </th>
                <td className="border-border border-b px-3 py-2.5">100%</td>
                <td className="border-border border-b px-3 py-2.5">신고 소득의 100%</td>
                <td className="border-border border-b px-3 py-2.5">신고 소득의 100%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  핵심 문제
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">실제 매출 &lt; 신고 소득 가능</td>
                <td className="border-border border-b px-3 py-2.5">소득 불규칙·증빙 어려움</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주요 증빙 서류
                </th>
                <td className="border-border border-b px-3 py-2.5">원천징수영수증·재직증명서</td>
                <td className="border-border border-b px-3 py-2.5">종합소득세 신고서·소득금액증명원</td>
                <td className="border-border border-b px-3 py-2.5">소득금액증명원·용역계약서</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  소득 인정 기간
                </th>
                <td className="px-3 py-2.5">전년도 또는 최근 3개월</td>
                <td className="px-3 py-2.5">최근 1~2년 평균</td>
                <td className="px-3 py-2.5">최근 1~2년 평균</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-income-limit-gap">
        <h2 id="guide-income-limit-gap" className="text-foreground text-xl font-semibold tracking-tight">
          같은 연소득 5,000만원 기준 대출 한도 차이
        </h2>
        <p className="text-muted-foreground text-sm">금리 4%, 30년 원리금균등상환, DSR 40% 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소득 유형별 인정 소득·월 상환 가능액·대출 한도
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소득 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금융기관 인정 소득
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환 가능액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  근로소득자
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">167만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 4,900만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자영업자(신고 소득 5,000만 원)
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">167만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 4,900만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자영업자(신고 소득 3,000만 원)
                </th>
                <td className="border-border border-b px-3 py-2.5">3,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 900만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  프리랜서(소득 불규칙·증빙 일부)
                </th>
                <td className="px-3 py-2.5">2,500만 원</td>
                <td className="px-3 py-2.5">83만 원</td>
                <td className="px-3 py-2.5">약 1억 7,400만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>자영업자와 프리랜서는 실제 버는 금액보다 세금 신고 소득이 낮은 경우가 많아 대출 한도가 크게 줄어듭니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-income-employee">
        <h2 id="guide-income-employee" className="text-foreground text-xl font-semibold tracking-tight">
          근로소득자
        </h2>
        <p>
          원천징수영수증 기준 세전 연소득이 그대로 반영됩니다. 소득 증빙이 명확하고 안정적이어서 세 유형 중 대출 심사에서 가장
          유리합니다. 재직 기간이 짧은 경우(통상 3개월 미만) 소득 인정이 제한될 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              근로소득자 필요 서류
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  필요 서류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  발급처
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  원천징수영수증
                </th>
                <td className="border-border border-b px-3 py-2.5">회사 또는 홈택스</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재직증명서
                </th>
                <td className="border-border border-b px-3 py-2.5">회사</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  건강보험료 납부확인서
                </th>
                <td className="px-3 py-2.5">국민건강보험공단</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-income-self-employed">
        <h2 id="guide-income-self-employed" className="text-foreground text-xl font-semibold tracking-tight">
          사업소득자(자영업자)
        </h2>
        <p>
          종합소득세 신고서상 소득금액이 기준입니다. 매출에서 비용을 차감한 순소득이 과세 대상이므로, 실제 매출이 높아도 비용 처리를
          많이 하면 신고 소득이 낮아져 대출 한도가 줄어듭니다. 최근 2년 치 소득의 평균을 적용하는 경우가 많습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              사업소득자 필요 서류
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  필요 서류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  발급처
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종합소득세 신고서·납부확인서
                </th>
                <td className="border-border border-b px-3 py-2.5">홈택스</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소득금액증명원
                </th>
                <td className="border-border border-b px-3 py-2.5">홈택스·세무서</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  사업자등록증명원
                </th>
                <td className="border-border border-b px-3 py-2.5">홈택스·세무서</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  부가가치세 과세표준증명원
                </th>
                <td className="px-3 py-2.5">홈택스</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-income-freelancer">
        <h2 id="guide-income-freelancer" className="text-foreground text-xl font-semibold tracking-tight">
          프리랜서
        </h2>
        <p>
          소득금액증명원이 주요 증빙입니다. 소득이 불규칙하거나 신고 소득이 낮으면 대출 한도가 크게 제한됩니다. 용역계약서·통장 입금
          내역 등 보조 증빙을 함께 제출하면 인정 소득을 높이는 데 도움이 됩니다. 일부 금융기관은 최근 6개월~1년 평균 입금액을 기준으로
          소득을 추정하기도 합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              프리랜서 필요 서류
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  필요 서류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  발급처
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소득금액증명원
                </th>
                <td className="border-border border-b px-3 py-2.5">홈택스·세무서</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  용역계약서 또는 거래명세서
                </th>
                <td className="border-border border-b px-3 py-2.5">본인 보관</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  최근 6개월 통장 거래내역
                </th>
                <td className="border-border border-b px-3 py-2.5">은행</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  원천징수영수증(3.3% 원천징수 시)
                </th>
                <td className="px-3 py-2.5">의뢰인 또는 홈택스</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-income-improve">
        <h2 id="guide-income-improve" className="text-foreground text-xl font-semibold tracking-tight">
          소득 인정액을 높이는 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소득 유형별 한도 개선 전략
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소득 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자영업자
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  비용 처리 최소화로 신고 소득 높이기(세금 부담과 트레이드오프)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  프리랜서
                </th>
                <td className="border-border border-b px-3 py-2.5">종합소득세 성실 신고로 소득금액증명원 소득 높이기</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공통
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 신청 전 최소 1~2년간 소득 신고 이력 쌓기</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  공통
                </th>
                <td className="px-3 py-2.5">배우자 소득 합산 신청(부부 합산 소득 기준 심사)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-income-spouse">
        <h2 id="guide-income-spouse" className="text-foreground text-xl font-semibold tracking-tight">
          배우자 소득 합산 활용
        </h2>
        <p>
          부부가 함께 대출을 신청하면 소득을 합산하여 DSR을 산정할 수 있습니다. 배우자 중 한 명이 근로소득자라면 합산 소득에서
          근로소득 비중이 높아져 전체 인정 소득이 올라가는 효과가 있습니다.
        </p>
        <p className="text-muted-foreground text-sm">예시: 자영업자 신고 소득 3,000만 원 + 배우자 근로소득 4,000만 원</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              부부 합산 시 한도 예시
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
                  합산 소득
                </th>
                <td className="border-border border-b px-3 py-2.5">7,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  DSR 40% 월 상환 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">233만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  대출 가능 한도(금리 4%, 30년)
                </th>
                <td className="px-3 py-2.5">약 4억 8,700만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>단독 신청 대비 대출 한도가 약 2억 8,000만 원 증가합니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-income-policy-mortgage">
        <h2 id="guide-income-policy-mortgage" className="text-foreground text-xl font-semibold tracking-tight">
          정책 모기지 활용 시 유의사항
        </h2>
        <p>
          디딤돌대출·보금자리론은 DSR 대신 DTI 60%가 적용되어 일반 은행 대출보다 한도 산정이 상대적으로 유리합니다. 다만 소득 조건
          (디딤돌: 부부합산 6,000~8,500만 원 이하)이 있으므로 해당 여부를 먼저 확인해야 합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 소득 인정 방식은 금융기관별로 다소 차이가 있으며, 심사 결과에 따라 실제 한도가 달라질 수 있습니다. 정확한 한도는 대출 신청
          금융기관에서 확인해야 합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            소득별 월 상환 가능액과 대출 한도는 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
