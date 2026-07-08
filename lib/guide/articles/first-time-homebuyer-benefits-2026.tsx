import Link from "next/link";

export const firstTimeHomebuyerBenefits2026Meta = {
  slug: "first-time-homebuyer-benefits-2026",
  title: "생애최초 주택 구입자 혜택 정리",
  description:
    "2026년 4월 기준 생애최초 주택 구입자 대상 대출·취득세·청약 혜택과 필수 확인사항을 표 중심으로 정리했습니다.",
  updated: "2026년 7월 8일",
} as const;

export function FirstTimeHomebuyerBenefits2026Body() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-first-home-overview">
        <h2 id="guide-first-home-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          생애최초 주택 구입자는 대출·세금·청약 세 가지 영역에서 일반 무주택자보다 완화된 조건을 적용받습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-first-home-basic-conditions">
        <h2 id="guide-first-home-basic-conditions" className="text-foreground text-xl font-semibold tracking-tight">
          적용 대상 기본 요건
        </h2>
        <p>
          본인과 배우자 모두 과거 주택 소유 이력이 없어야 하며, 분양권·입주권 보유 이력도 포함됩니다. 세대원 중 부모가 주택을
          보유한 경우 세대 분리 이후 요건 충족 여부를 별도로 확인해야 합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          디딤돌·버팀목 등 기금 대출은 접수일 기준 세대원 전원 무주택이 원칙입니다. 다만{" "}
          <strong>만 65세 이상 직계존속이 주택 1채(1세대)만 소유</strong>한 경우에는 기금 대출 「무주택으로 보는
          경우」에 해당해 예외가 인정될 수 있습니다(2025년 6월 HUG 디딤돌·버팀목 기준 60세→65세 상향).{" "}
          <strong>노부모부양 특별공급·청약 일반 무주택(60세)과는 다른 기준</strong>입니다. 주택{" "}
          <strong>등기부등본상 소유자</strong>가 65세 미만이거나 2주택 이상이면 세대 분리가 필요한 경우가 많습니다. 상세
          표는{" "}
          <Link
            href="/guide/bogeumjari-vs-didimdol#guide-compare-household-elderly"
            className="text-primary underline-offset-4 hover:underline"
          >
            보금자리론 vs 디딤돌 — 무주택·부모 연령
          </Link>
          을 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-first-home-loan-benefits">
        <h2 id="guide-first-home-loan-benefits" className="text-foreground text-xl font-semibold tracking-tight">
          ① 대출 혜택
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              생애최초 주택 구입자 대출 혜택 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  생애최초
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  디딤돌대출 LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">80%(수도권·규제지역 70%)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  디딤돌대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">2억 원</td>
                <td className="border-border border-b px-3 py-2.5">2억 4,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보금자리론 LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">80%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  보금자리론 한도
                </th>
                <td className="px-3 py-2.5">3억 6,000만 원</td>
                <td className="px-3 py-2.5">4억 2,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          단, LTV 완화와 별개로 DSR 40% 규제가 동시에 적용되므로 소득이 부족하면 최대 한도를 받지 못할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-first-home-tax-benefits">
        <h2 id="guide-first-home-tax-benefits" className="text-foreground text-xl font-semibold tracking-tight">
          ② 취득세 감면
        </h2>
        <p>
          12억 원 이하 주택 구입 시 취득세를 200만 원 한도 내에서 감면받을 수 있으며, 이 혜택은 2028년 말까지 연장
          적용됩니다. 감면은 자동 적용되지 않으며 취득세 납부 시 별도 신청이 필요합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득세 감면 주의사항
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주의사항
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실거주 의무
                </th>
                <td className="border-border border-b px-3 py-2.5">취득 후 3년 이상 실거주</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  추징 요건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  3년 내 매각·증여·임대 전환 시 감면액 추징
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  신청 기한
                </th>
                <td className="px-3 py-2.5">취득세 납부 기한 내 신청</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-first-home-special-supply">
        <h2 id="guide-first-home-special-supply" className="text-foreground text-xl font-semibold tracking-tight">
          ③ 청약 특별공급
        </h2>
        <p>
          세대원 전원 무주택이면서 혼인 중이거나 미혼 자녀가 있는 경우 신청할 수 있고, 1인 가구는 전용면적 60㎡ 이하 주택에
          한해 신청 가능합니다. 소득 기준은 도시근로자 월평균 소득의 130~160% 이하이며, 소득이 높더라도 자산 기준을 충족하면
          추첨 물량(30%)에 신청할 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-first-home-checklist">
        <h2 id="guide-first-home-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          혜택 적용 전 필수 확인 사항
        </h2>
        <p>
          주택 소유 이력은 청약홈에서 조회할 수 있습니다. 자격 미달 상태에서 계약을 진행하면 잔금 시점에 대출이 거절될 수 있으므로
          계약 전에 반드시 확인해야 합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 대출 한도 및 금리는 신청 시점 기준으로 변동될 수 있습니다. 정확한 조건은 주택도시기금(myhome.go.kr) 및 한국주택금융공사(hf.go.kr)에서
          확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            생애최초 조건 적용 시 월 상환액 대출 이자 계산
          </Link>
        </p>
      </aside>
    </>
  );
}
