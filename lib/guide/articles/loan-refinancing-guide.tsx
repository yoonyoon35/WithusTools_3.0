import Link from "next/link";

export const loanRefinancingGuideMeta = {
  slug: "loan-refinancing-guide",
  title: "대출 갈아타기(대환대출) 방법과 비용",
  description:
    "2026년 4월 기준 대환대출 개요, 갈아타기 가능 대출, 주담대 조건·절차·비용, 손익 계산 예시와 유의사항을 표로 정리했습니다.",
  updated: "2026년 4월 14일",
} as const;

export function LoanRefinancingGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-refi-overview">
        <h2 id="guide-refi-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          대환대출은 기존 대출을 더 낮은 금리나 유리한 조건의 새로운 대출로 전환하는 것입니다. 2024년 1월부터 주택담보대출
          갈아타기가 대출이동서비스를 통해 비대면으로 가능해졌으며, 영업점을 방문하지 않고 앱에서 간편하게 진행할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-refi-eligible-types">
        <h2 id="guide-refi-eligible-types" className="text-foreground text-xl font-semibold tracking-tight">
          갈아타기 대상 대출 종류
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대출 종류별 갈아타기 가능 여부
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 종류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  갈아타기 가능 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  시중은행 주택담보대출
                </th>
                <td className="border-border border-b px-3 py-2.5">가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  시중은행 신용대출
                </th>
                <td className="border-border border-b px-3 py-2.5">가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세자금대출
                </th>
                <td className="border-border border-b px-3 py-2.5">가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  디딤돌대출·보금자리론(정책 모기지)
                </th>
                <td className="border-border border-b px-3 py-2.5">불가</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  연체 중인 대출
                </th>
                <td className="px-3 py-2.5">불가</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-refi-mortgage-conditions">
        <h2 id="guide-refi-mortgage-conditions" className="text-foreground text-xl font-semibold tracking-tight">
          주택담보대출 갈아타기 기본 조건
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주담대 갈아타기 시 확인할 조건
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상환·실행 조건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  대출 실행 후 6개월이 지나 정상 상환 중인 건만 가능
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  한도
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 10억 원 이하 대출에 한해 적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  담보 대상
                </th>
                <td className="px-3 py-2.5">
                  KB부동산 시세·한국부동산원 등을 통해 시세 조회가 가능한 아파트를 담보로 한 대출
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-refi-procedure">
        <h2 id="guide-refi-procedure" className="text-foreground text-xl font-semibold tracking-tight">
          갈아타기 절차
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대출 갈아타기 단계별 안내
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소요 시간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1단계
                </th>
                <td className="border-border border-b px-3 py-2.5">대출비교 플랫폼에서 기존 대출 조회</td>
                <td className="border-border border-b px-3 py-2.5">5~10분</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2단계
                </th>
                <td className="border-border border-b px-3 py-2.5">여러 금융기관 상품 비교</td>
                <td className="border-border border-b px-3 py-2.5">당일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3단계
                </th>
                <td className="border-border border-b px-3 py-2.5">신규 대출 심사 신청</td>
                <td className="border-border border-b px-3 py-2.5">2~7일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4단계
                </th>
                <td className="border-border border-b px-3 py-2.5">심사 승인 및 조건 확정</td>
                <td className="border-border border-b px-3 py-2.5">1~2일</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5단계
                </th>
                <td className="px-3 py-2.5">대출 실행 및 기존 대출 자동 상환</td>
                <td className="px-3 py-2.5">당일</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-refi-platforms">
        <h2 id="guide-refi-platforms" className="text-foreground text-xl font-semibold tracking-tight">
          비대면 신청 가능 플랫폼
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              채널별 신청처
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신청처
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  각 은행 앱
                </th>
                <td className="border-border border-b px-3 py-2.5">KB스타뱅킹·신한 SOL·토스뱅크 등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출비교 플랫폼
                </th>
                <td className="border-border border-b px-3 py-2.5">핀다·카카오페이·토스 등</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  영업점 방문
                </th>
                <td className="px-3 py-2.5">비대면 신청 불가 상품이나 복잡한 상황</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-refi-costs">
        <h2 id="guide-refi-costs" className="text-foreground text-xl font-semibold tracking-tight">
          갈아타기 시 발생하는 비용
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              비용 항목별 금액·비고
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비용 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액 범위
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중도상환 수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">잔여 원금의 0.6~1.4%</td>
                <td className="border-border border-b px-3 py-2.5">대출 실행 후 3년 이내 상환 시</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  근저당 설정비
                </th>
                <td className="border-border border-b px-3 py-2.5">대출금의 0.1~0.2%</td>
                <td className="border-border border-b px-3 py-2.5">신규 근저당 설정 시</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  인지세
                </th>
                <td className="border-border border-b px-3 py-2.5">5만~35만 원</td>
                <td className="border-border border-b px-3 py-2.5">대출 금액에 따라 차등</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  담보 감정 평가비
                </th>
                <td className="px-3 py-2.5">10만~30만 원</td>
                <td className="px-3 py-2.5">금융기관별 상이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-refi-pl">
        <h2 id="guide-refi-pl" className="text-foreground text-xl font-semibold tracking-tight">
          갈아타기 손익 계산 방법
        </h2>
        <p>갈아타기가 실제로 유리한지 판단하려면 비용과 이자 절감액을 비교해야 합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              손익 산출에 쓰는 기본 식
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  산출 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  계산식
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이자 절감액
                </th>
                <td className="border-border border-b px-3 py-2.5">잔여 원금 × 금리 차이 × 잔여 기간</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  순 절감액
                </th>
                <td className="px-3 py-2.5">이자 절감액 − 갈아타기 총 비용</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          예시: 잔여 원금 2억 원, 금리 1%p 인하, 잔여 기간 20년, 갈아타기 비용 300만 원
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[22rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              손익 계산 예시
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
                  연간 이자 절감액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 200만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  20년 총 절감액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 4,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  갈아타기 비용
                </th>
                <td className="border-border border-b px-3 py-2.5">약 300만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  순 절감액
                </th>
                <td className="px-3 py-2.5">약 3,700만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          이 경우 갈아타기가 명확히 유리합니다. 금리 차이가 0.5%p 미만이거나 잔여 기간이 짧으면 비용 대비 효과가 작아질 수
          있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-refi-when-good">
        <h2 id="guide-refi-when-good" className="text-foreground text-xl font-semibold tracking-tight">
          갈아타기가 유리한 경우
        </h2>
        <p>
          현재 적용 금리와 신규 대출 금리 차이가 0.5%p 이상이고, 잔여 대출 기간이 5년 이상 남아 있으며, 중도상환 수수료 면제 기간(3년)이
          경과한 경우입니다. 대출 잔액이 클수록 금리 인하 효과가 크므로 적극 검토할 만합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-refi-caution">
        <h2 id="guide-refi-caution" className="text-foreground text-xl font-semibold tracking-tight">
          갈아타기 전 주의 사항
        </h2>
        <p>
          갈아타기 시 신규 대출 심사를 받으므로 현재 <abbr title="총부채원리금상환비율">DSR</abbr> 기준을 충족해야 합니다. 기존 대출
          실행 시점보다 규제가 강화된 경우 한도가 줄어들 수 있습니다. 또한 갈아타기 후 일시적으로 신용점수가 하락할 수 있으나 단기적인
          영향에 그치는 경우가 많습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 갈아타기 가능 여부와 조건은 금융기관별로 다르며, 정확한 비용은 대출 신청 금융기관에서 확인해야 합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            금리 인하 후 월 상환액 변화는 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
