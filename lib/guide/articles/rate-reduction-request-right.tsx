import Link from "next/link";

export const rateReductionRequestRightMeta = {
  slug: "rate-reduction-request-right",
  title: "금리인하요구권이란",
  description:
    "금리인하요구권 신청 사유·절차, 갈아타기와 비교했을 때 의미 있는 경우, 거절 시 대응과 신청 전 확인 사항을 정리했습니다.",
  updated: "2026년 4월 14일",
} as const;

export function RateReductionRequestRightBody() {
  return (
    <>
      <p>
        금리인하요구권은 대출받은 시점보다 신용 상태 및 상환 능력이 크게 개선된 경우, 이용 중인 대출의 금리를 낮춰 달라고 요구할 수
        있는 법적 권리입니다. 은행법 제30조의2에 근거하며 모든 금융기관에 적용됩니다. 다만 <strong>무조건 인하</strong>가
        아니며, 정책 모기지·연체 중 대출 등은 대상에서 빠집니다.
      </p>

      <section className="space-y-3" aria-labelledby="guide-rrr-when-worth">
        <h2 id="guide-rrr-when-worth" className="text-foreground text-xl font-semibold tracking-tight">
          신청해볼 만한 때와 아닐 때
        </h2>
        <p>
          승진·연봉 인상 후 소득증빙이 명확해졌거나, 신용점수가 한 등급 이상 올랐을 때 시도해볼 가치가 있습니다. 반면 이미
          우대금리가 거의 다 적용된 상태이거나, 타행 갈아타기 견적이 더 유리한 경우에는 인하요구권보다{" "}
          <Link href="/guide/loan-refinancing-guide" className="text-primary underline-offset-4 hover:underline">
            대환대출
          </Link>
          비교가 먼저입니다. 중도상환 수수료와 새 대출 취급 비용을 합쳐 보면 “0.1~0.2%p 인하”만으로는 갈아타기가 손해일 수
          있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rrr-reasons">
        <h2 id="guide-rrr-reasons" className="text-foreground text-xl font-semibold tracking-tight">
          신청 가능 사유
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리인하요구권 신청 사유와 예시
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  사유
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  예시
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소득 증가
                </th>
                <td className="border-border border-b px-3 py-2.5">취업·승진·연봉 인상·부업 소득 발생</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산 증가
                </th>
                <td className="border-border border-b px-3 py-2.5">부동산·금융자산 증가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신용점수 상승
                </th>
                <td className="border-border border-b px-3 py-2.5">KCB·NICE 신용평점 개선</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부채 감소
                </th>
                <td className="border-border border-b px-3 py-2.5">기존 대출 상환으로 DSR 개선</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  직장 변경
                </th>
                <td className="px-3 py-2.5">중소기업에서 대기업·공공기관으로 이직</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          신용 상태 개선이 발생한 경우 신청 횟수와 신청 시점에 관계없이 금리인하요구권을 신청할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rrr-eligibility">
        <h2 id="guide-rrr-eligibility" className="text-foreground text-xl font-semibold tracking-tight">
          적용 대상 및 제외 대상
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리인하요구권 적용·제외 구분
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
                  적용 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  신용 상태에 따라 금리가 차등 적용되는 가계대출
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  제외 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  정책 모기지(디딤돌·보금자리론·버팀목 등)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  제외 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  협약대출·재정자금대출 등 고정 금리 상품
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  제외 대상
                </th>
                <td className="px-3 py-2.5">연체 중인 대출(연체 해소 후 신청 가능)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          정책 모기지는 신용 상태와 무관하게 금리가 결정되므로 금리인하요구권 적용 대상이 아닙니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rrr-procedure">
        <h2 id="guide-rrr-procedure" className="text-foreground text-xl font-semibold tracking-tight">
          신청 절차
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리인하요구권 신청 단계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1단계
                </th>
                <td className="border-border border-b px-3 py-2.5">신용 상태 개선 여부 확인(신용점수 조회)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2단계
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  증빙 서류 준비(재직증명서·소득증빙·신용점수 확인서 등)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3단계
                </th>
                <td className="border-border border-b px-3 py-2.5">비대면(앱·인터넷뱅킹) 또는 영업점 방문 신청</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  4단계
                </th>
                <td className="px-3 py-2.5">
                  신청 접수일로부터 10영업일 이내 결과 통보(문자·우편·전화)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rrr-bank-paths">
        <h2 id="guide-rrr-bank-paths" className="text-foreground text-xl font-semibold tracking-tight">
          주요 은행 비대면 신청 경로
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              은행별 비대면 신청 예시
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  은행
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신청 경로
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  KB국민은행
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  스타뱅킹 → 전체메뉴 → 뱅킹 → 상품관리/해지 → 개인대출 금리인하요구권
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  토스뱅크
                </th>
                <td className="border-border border-b px-3 py-2.5">홈 → 대출 선택 → 관리 → 금리인하 요구권 신청</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  기타 은행
                </th>
                <td className="px-3 py-2.5">각 은행 앱 → 대출 메뉴 → 금리인하요구권</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-rrr-before-apply">
        <h2 id="guide-rrr-before-apply" className="text-foreground text-xl font-semibold tracking-tight">
          신청 전 알아야 할 사항
        </h2>
        <p>
          심사 결과에 따라 금리인하가 수용되지 않을 수 있습니다. 신용 상태 개선이 경미하거나, 현재 적용 금리가 이미 해당 상품의
          최저금리 수준인 경우 거절될 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-rrr-credit-score">
        <h2 id="guide-rrr-credit-score" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수를 빠르게 올리는 방법
        </h2>
        <p>
          금리인하요구권 신청 전 신용점수를 높이면 수용 가능성이 높아집니다. 통신요금·공공요금 납부 이력을 신용평가사에 제출하거나,
          기존 소액 대출을 정리하는 것이 단기간 내 신용점수를 개선하는 효과적인 방법입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rrr-strategy">
        <h2 id="guide-rrr-strategy" className="text-foreground text-xl font-semibold tracking-tight">
          대출 유형별 활용 전략
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대출 유형별 활용 방법
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  활용 방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택담보대출(변동금리)
                </th>
                <td className="border-border border-b px-3 py-2.5">소득 증가 또는 신용점수 상승 시 즉시 신청</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신용대출
                </th>
                <td className="border-border border-b px-3 py-2.5">승진·이직 후 소득증빙서류 제출</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  자동차 할부
                </th>
                <td className="px-3 py-2.5">신용점수 개선 후 신청</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-rrr-rejected">
        <h2 id="guide-rrr-rejected" className="text-foreground text-xl font-semibold tracking-tight">
          거절됐을 때
        </h2>
        <p>
          거절 사유를 문자·서면으로 받아 두세요. “이미 최저 구간”인지, “개선 폭 부족”인지에 따라 다음 행동이 달라집니다. 소득·
          신용이 더 좋아진 뒤 재신청하거나, 다른 은행 한도 조회 후 갈아타기를 검토하면 됩니다.{" "}
          <Link href="/guide/credit-score-loan-rate-guide" className="text-primary underline-offset-4 hover:underline">
            신용점수와 금리
          </Link>
          관리를 병행하면 재신청 때 도움이 됩니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 금리인하요구권은 법적 권리이나 수용 여부는 금융기관 심사에 따라 결정됩니다. 거절된 경우 사유를 확인 후 재신청이
          가능합니다.
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
