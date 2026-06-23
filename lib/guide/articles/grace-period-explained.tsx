import Link from "next/link";

export const gracePeriodExplainedMeta = {
  slug: "grace-period-explained",
  title: "거치기간이란 무엇인가",
  description:
    "거치기간의 의미와 구조, 월 상환액·총 이자 변화 예시, 적합·부적합 상황, DSR과의 관계를 표로 정리한 안내입니다.",
  updated: "2026년 4월 14일",
} as const;

export function GracePeriodExplainedBody() {
  return (
    <>
      <p>
        거치기간은 대출 기간 중 원금을 상환하지 않고 이자만 납부하는 기간입니다. 거치기간이 끝나면 원금과 이자를 함께 상환하는 본
        상환 기간이 시작됩니다.
      </p>

      <section className="space-y-4" aria-labelledby="guide-grace-structure">
        <h2 id="guide-grace-structure" className="text-foreground text-xl font-semibold tracking-tight">
          기본 구조
        </h2>
        <pre
          className="bg-muted/30 text-foreground overflow-x-auto rounded-lg border border-border p-4 text-sm leading-relaxed"
          tabIndex={0}
        >
          {`대출 실행
    └─ 거치기간 (이자만 납부)
           └─ 본 상환 기간 (원금 + 이자 납부)
                      └─ 만기`}
        </pre>
        <p>
          예를 들어 30년 대출에 거치기간 2년을 설정하면, 처음 2년은 이자만 납부하고 이후 28년 동안 원금과 이자를 함께 상환합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grace-monthly-example">
        <h2 id="guide-grace-monthly-example" className="text-foreground text-xl font-semibold tracking-tight">
          거치기간 설정 시 월 상환액 변화 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          대출 원금 3억 원, 금리 4%, 30년 원리금균등상환 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거치기간 유무에 따른 월 납부액(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거치기간 중 월 납부액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  본 상환 시작 후 월 납부액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거치기간 없음
                </th>
                <td className="border-border border-b px-3 py-2.5">약 143만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 143만 원(동일)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거치기간 1년
                </th>
                <td className="border-border border-b px-3 py-2.5">약 100만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 146만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거치기간 2년
                </th>
                <td className="border-border border-b px-3 py-2.5">약 100만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 149만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  거치기간 3년
                </th>
                <td className="px-3 py-2.5">약 100만 원</td>
                <td className="px-3 py-2.5">약 152만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          거치기간이 길수록 본 상환 시작 후 월 상환액이 증가합니다. 거치기간 동안 원금이 전혀 줄지 않기 때문입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grace-total-interest">
        <h2 id="guide-grace-total-interest" className="text-foreground text-xl font-semibold tracking-tight">
          거치기간 설정에 따른 총 이자 차이
        </h2>
        <p className="text-muted-foreground text-sm">동일 조건 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[24rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거치기간별 총 이자액(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  총 이자액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거치기간 없음
                </th>
                <td className="border-border border-b px-3 py-2.5">약 2억 1,600만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거치기간 1년
                </th>
                <td className="border-border border-b px-3 py-2.5">약 2억 1,940만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거치기간 2년
                </th>
                <td className="border-border border-b px-3 py-2.5">약 2억 2,320만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  거치기간 3년
                </th>
                <td className="px-3 py-2.5">약 2억 2,710만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>거치기간 1년당 총 이자 부담이 약 375만 원 증가합니다(대출 이자 계산기 기준).</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grace-when-good">
        <h2 id="guide-grace-when-good" className="text-foreground text-xl font-semibold tracking-tight">
          거치기간이 적합한 경우
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상황별로 거치기간이 도움이 되는 경우
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이유
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 구입 직후 이사·인테리어 비용이 필요한 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">초기 자금 여유 확보</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  사업 초기 운영자금이 부족한 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">현금 흐름 관리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  단기간 내 소득 증가가 예상되는 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">향후 상환 여력 확보 후 본 상환</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  분양 후 입주까지 기간이 긴 경우
                </th>
                <td className="px-3 py-2.5">입주 전 이중 주거비 부담 완화</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grace-when-bad">
        <h2 id="guide-grace-when-bad" className="text-foreground text-xl font-semibold tracking-tight">
          거치기간이 적합하지 않은 경우
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거치기간을 신중히 검토해야 하는 경우
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이유
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기 대출인 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">거치기간이 길수록 총 이자 부담이 크게 증가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  본 상환 시작 후 소득 감소가 예상되는 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">상환액 급증으로 상환 부담 발생</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  총 이자 부담을 최소화하고 싶은 경우
                </th>
                <td className="px-3 py-2.5">거치기간 없이 바로 원금 상환이 유리</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-grace-dsr">
        <h2 id="guide-grace-dsr" className="text-foreground text-xl font-semibold tracking-tight">
          거치기간과 DSR의 관계
        </h2>
        <p>
          거치기간이 있으면 DSR 산정 방식은 금융기관·상품마다 다릅니다. 본 사이트{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          는 거치 종료 후 원리금균등 월 상환액을 연환산하는 방식을 사용합니다. 거치 중 실제 이자만 내는 기간보다 보수적으로
          잡힐 수 있으므로, 실제 심사 기준은 해당 금융기관에 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-grace-checklist">
        <h2 id="guide-grace-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          거치기간 설정 시 확인 사항
        </h2>
        <p>
          거치기간 종료 후 월 상환액이 얼마나 오르는지를 미리 확인하는 것이 필수입니다. 거치기간 동안 월 납부액이 낮아 여유롭다가 본
          상환이 시작되면서 상환액이 갑자기 크게 늘어나는 경우가 빈번하게 발생합니다. 대출 신청 전 거치기간을 설정했을 때와 설정하지
          않았을 때의 월 상환액을 직접 비교해 보는 것이 중요합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 거치기간 설정 가능 여부 및 최대 거치 기간은 금융기관 및 대출 상품에 따라 다릅니다. 정책 모기지(디딤돌·보금자리론)의 경우
          거치기간은 1년 이내로 제한됩니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            거치기간 설정 여부에 따른 월 상환액 차이는 대출 이자 계산기에서 직접 비교해 볼 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
