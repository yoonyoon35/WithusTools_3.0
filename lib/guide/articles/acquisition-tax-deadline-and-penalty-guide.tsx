import Link from "next/link";

export const acquisitionTaxDeadlineAndPenaltyGuideMeta = {
  slug: "acquisition-tax-deadline-and-penalty-guide",
  title: "취득세 납부 기한과 가산세",
  description:
    "2026년 4월 기준 취득세 신고·납부 기한, 가산세 유형과 세율, 지연별 부담 비교, 중가산세, 납부 방법을 표와 예시로 정리했습니다.",
  updated: "2026년 5월 5일",
} as const;

export function AcquisitionTaxDeadlineAndPenaltyGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-atdp-overview">
        <h2 id="guide-atdp-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          취득세는 부동산을 취득한 날로부터 정해진 기한 내에 신고·납부해야 합니다. 취득세 과세물건을 취득한 날로부터 60일 이내에
          산출된 세액을 신고·납부해야 하며, 등기를 하는 경우에는 등기 신청서를 접수하는 날까지 납부해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atdp-deadline">
        <h2 id="guide-atdp-deadline" className="text-foreground text-xl font-semibold tracking-tight">
          납부 기한 기준
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득 유형별 납부 기한
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부 기한
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 매매 (등기 전)
                </th>
                <td className="border-border border-b px-3 py-2.5">잔금 지급일로부터 60일 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기 신청 시
                </th>
                <td className="border-border border-b px-3 py-2.5">등기 신청서 접수일까지 (60일 이전이라도)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">상속 개시일이 속하는 달의 말일부터 6개월 이내</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  증여 취득
                </th>
                <td className="px-3 py-2.5">취득일로부터 60일 이내</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          등기를 먼저 신청하는 경우 60일이 지나지 않았더라도 등기 접수일까지 취득세를 납부해야 합니다. 통상 잔금일과 등기 접수일이
          같은 날이므로 잔금일에 납부하는 것이 안전합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-atdp-base-date">
        <h2 id="guide-atdp-base-date" className="text-foreground text-xl font-semibold tracking-tight">
          납부 기한 기산점 주의사항
        </h2>
        <p>
          취득일은 잔금 지급일과 등기 접수일 중 빠른 날입니다. 계약금·중도금 지급일은 취득일로 보지 않습니다. 다만 계약금을 지급한
          날이 잔금 지급일보다 앞서더라도 취득세 기산일은 잔금 지급일 기준입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atdp-penalty-types">
        <h2 id="guide-atdp-penalty-types" className="text-foreground text-xl font-semibold tracking-tight">
          가산세 종류와 세율
        </h2>
        <p>기한 내 신고·납부를 하지 않으면 신고불성실가산세와 납부지연가산세가 동시에 부과됩니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              가산세 유형·세율·산정 기준
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  가산세 종류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  산정 기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무신고가산세
                </th>
                <td className="border-border border-b px-3 py-2.5">산출세액의 20%</td>
                <td className="border-border border-b px-3 py-2.5">신고 자체를 하지 않은 경우</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신고기한 경과 후 1개월 이내 신고
                </th>
                <td className="border-border border-b px-3 py-2.5">산출세액의 10%</td>
                <td className="border-border border-b px-3 py-2.5">1개월 이내 기한 후 신고 시 감면</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  과소신고가산세
                </th>
                <td className="border-border border-b px-3 py-2.5">부족납부세액의 10%</td>
                <td className="border-border border-b px-3 py-2.5">실제보다 낮게 신고한 경우</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부정과소신고가산세
                </th>
                <td className="border-border border-b px-3 py-2.5">부족납부세액의 40%</td>
                <td className="border-border border-b px-3 py-2.5">허위신고·고의 과소신고</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  납부지연가산세
                </th>
                <td className="px-3 py-2.5">미납세액 × 1일 10만분의 22 × 지연일수</td>
                <td className="px-3 py-2.5">납부 기한 초과 시 매일 누적</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atdp-example">
        <h2 id="guide-atdp-example" className="text-foreground text-xl font-semibold tracking-tight">
          가산세 계산 예시
        </h2>
        <p>취득세 500만 원, 60일 납부 기한 초과 후 90일째 납부 (총 30일 지연) 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              예시 계산
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  계산
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무신고가산세
                </th>
                <td className="border-border border-b px-3 py-2.5">500만 원 × 20%</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  납부지연가산세
                </th>
                <td className="border-border border-b px-3 py-2.5">500만 원 × (22/100,000) × 30일</td>
                <td className="border-border border-b px-3 py-2.5">약 3만 3천 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계 추가 부담
                </th>
                <td className="px-3 py-2.5">-</td>
                <td className="px-3 py-2.5">약 103만 3천 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atdp-compare">
        <h2 id="guide-atdp-compare" className="text-foreground text-xl font-semibold tracking-tight">
          납부 기한별 가산세 부담 비교
        </h2>
        <p>취득세 500만 원 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지연 기간별 추가 부담
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지연 기간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  무신고가산세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부지연가산세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계 추가 부담
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1개월 이내 신고
                </th>
                <td className="border-border border-b px-3 py-2.5">50만 원 (10%)</td>
                <td className="border-border border-b px-3 py-2.5">약 3만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 53만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1개월 초과 신고
                </th>
                <td className="border-border border-b px-3 py-2.5">100만 원 (20%)</td>
                <td className="border-border border-b px-3 py-2.5">약 7만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 107만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3개월 지연
                </th>
                <td className="border-border border-b px-3 py-2.5">100만 원 (20%)</td>
                <td className="border-border border-b px-3 py-2.5">약 10만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 110만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  6개월 지연
                </th>
                <td className="px-3 py-2.5">100만 원 (20%)</td>
                <td className="px-3 py-2.5">약 20만 원</td>
                <td className="px-3 py-2.5">약 120만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          1개월 이내에 기한 후 신고를 하면 무신고가산세가 50% 감면되어 10%만 적용됩니다. 기한을 넘겼다면 최대한 빨리 신고하는 것이
          유리합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atdp-heavy">
        <h2 id="guide-atdp-heavy" className="text-foreground text-xl font-semibold tracking-tight">
          중가산세 (미신고 후 매각 시)
        </h2>
        <p>
          취득일로부터 2년 이내에 신고·납부를 하지 않고 매각하는 경우에는 산출세액의 80%를 추가 부과하는 중가산세가 적용됩니다.
          이는 일반 무신고가산세(20%)보다 훨씬 무거운 제재입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[24rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              일반 무신고 vs 중가산세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  가산세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 무신고
                </th>
                <td className="border-border border-b px-3 py-2.5">20%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  미신고 후 2년 내 매각
                </th>
                <td className="px-3 py-2.5">80% (중가산세)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atdp-payment">
        <h2 id="guide-atdp-payment" className="text-foreground text-xl font-semibold tracking-tight">
          납부 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신고·납부 경로
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  온라인
                </th>
                <td className="border-border border-b px-3 py-2.5">위택스(wetax.go.kr) 신고·납부</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  오프라인
                </th>
                <td className="border-border border-b px-3 py-2.5">주택 소재지 관할 시·군·구청 세무과 방문</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  법무사 대행
                </th>
                <td className="px-3 py-2.5">등기 위임 시 취득세 신고·납부 대행</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-atdp-extend">
        <h2 id="guide-atdp-extend" className="text-foreground text-xl font-semibold tracking-tight">
          납부 기한 연장 가능 여부
        </h2>
        <p>
          천재지변·화재·도난 등 불가피한 사유가 있는 경우 관할 지방자치단체에 납부 기한 연장을 신청할 수 있습니다. 단, 단순히 자금
          부족이나 업무 착오는 연장 사유로 인정되지 않습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-atdp-refund">
        <h2 id="guide-atdp-refund" className="text-foreground text-xl font-semibold tracking-tight">
          기납부 후 감면 누락 시 환급
        </h2>
        <p>
          취득세를 납부한 후 생애최초 취득세 감면 등 감면 신청을 누락한 경우 경정청구를 통해 환급받을 수 있습니다. 경정청구 기한은
          납부일로부터 5년 이내입니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 취득세 납부 기한과 가산세율은 지방세법 및 지방세기본법에 근거합니다. 정확한 납부 기한과 가산세 계산은 위택스(wetax.go.kr)
          또는 관할 시·군·구청 세무과에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 매매가에 따른 취득세는 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
