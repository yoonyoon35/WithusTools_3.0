import Link from "next/link";

export const prepaymentFeeCalculationMeta = {
  slug: "prepayment-fee-calculation",
  title: "중도상환 수수료 계산 방식",
  description:
    "중도상환 수수료 계산 공식, 디딤돌대출 수수료 면제(2026년 12월 31일까지 상환분), 이자 절감액 비교, 갈아타기·만기 대기 중 선택 기준을 정리했습니다. 대출 조건별 중도상환 시 손익을 판단하는 방법을 표와 예시로 설명한 참고 가이드입니다. 금융기관별 약관·수수료율·우대 조건은 개별 확인이 필요하며 실제 절감액은 달라질 수 있습니다.",
  updated: "2026년 11월 4일",
} as const;

export function PrepaymentFeeCalculationBody() {
  return (
    <>
      <p>
        중도상환 수수료는 대출 만기 전 원금 일부 또는 전액을 상환할 때 금융기관에 납부하는 수수료입니다. 대출 초기 자금 조달
        비용을 보전하기 위해 부과되며, 통상 대출 실행일로부터 3년 이내 상환 시 적용됩니다. 수수료를 내더라도 이자 절감이
        더 크면 상환이 유리하지만, <strong>반드시 그런 것은 아닙니다</strong>.
      </p>

      <section className="space-y-3" aria-labelledby="guide-prepayment-when-not">
        <h2 id="guide-prepayment-when-not" className="text-foreground text-xl font-semibold tracking-tight">
          굳이 지금 상환하지 않아도 되는 경우
        </h2>
        <p>
          금리가 이미 낮고 잔여 기간이 1~2년뿐이면 절감 이자가 수수료를 못 넘길 수 있습니다. 곧{" "}
          <Link href="/guide/loan-refinancing-guide" className="text-primary underline-offset-4 hover:underline">
            갈아타기
          </Link>
          로 더 낮은 금리를 받을 수 있다면, 기존 대출 중도상환 수수료와 새 대출 비용을 합쳐 비교하는 편이 낫습니다. 디딤돌
          등 기간 한정 면제가 있는 경우에는 면제 종료일 전후로 타이밍을 맞추는 것도 방법입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-prepayment-formula">
        <h2 id="guide-prepayment-formula" className="text-foreground text-xl font-semibold tracking-tight">
          기본 계산식
        </h2>
        <p className="rounded-md border border-border bg-muted/30 px-3 py-2 font-medium">
          중도상환 수수료 = 중도상환 원금 × 수수료율 × (잔여기간 ÷ 대출기간)
        </p>
        <p>
          잔여기간은 중도상환일로부터 수수료 면제 기간(통상 3년) 종료일까지의 기간입니다. 면제 기간이 있는 상품은
          분모의 대출기간도 면제 기간(통상 3년)으로 계산합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prepayment-example">
        <h2 id="guide-prepayment-example" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          대출 원금 2억 원, 수수료율 0.7%, 대출기간 30년(360개월), 대출 실행 후 1년(12개월) 시점에 5,000만 원 중도상환 가정
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 0.7%는 계산을 보여 주기 위한 가정치입니다. 2025년 1월 13일 이후 은행권에서 새로 받은 주택담보대출은 실제 비용 범위
          안에서 요율이 정해져 대체로 0.5%대~0.9%대이고, 그 전에 받은 대출은 계약 당시 요율(고정형 1.4%·변동형 1.2% 등)이
          그대로 적용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              중도상환 수수료 계산 예시
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
                  중도상환 원금
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수수료율
                </th>
                <td className="border-border border-b px-3 py-2.5">0.7%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약 대출기간
                </th>
                <td className="border-border border-b px-3 py-2.5">30년(360개월)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수수료 계산 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">3년(36개월, 면제 기간)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  경과 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">1년(12개월)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔여기간
                </th>
                <td className="border-border border-b px-3 py-2.5">24개월(36개월 − 12개월)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  수수료
                </th>
                <td className="px-3 py-2.5">5,000만 원 × 0.7% × (24 ÷ 36) = 약 23만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          상환 시점이 늦을수록 잔여기간이 줄어 수수료도 감소합니다. 같은 조건에서 2년 시점에 상환하면 수수료는 약 12만 원으로
          줄어듭니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prepayment-rate-range">
        <h2 id="guide-prepayment-rate-range" className="text-foreground text-xl font-semibold tracking-tight">
          금융기관별 수수료율 범위
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금융기관별 중도상환 수수료율 범위
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수수료율 범위
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  면제 기간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  시중은행 주담대
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2025년 1월 13일 이후 신규: 대체로 0.5%대~0.9%대(은행·금리 유형별 공시), 그 전 계약: 고정 1.4%·변동 1.2% 등
                </td>
                <td className="border-border border-b px-3 py-2.5">3년</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  인터넷전문은행
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  0% ~ 0.6%대(카카오뱅크는 주담대 중도상환 수수료 면제, 그 외는 은행별 공시 확인)
                </td>
                <td className="border-border border-b px-3 py-2.5">3년 이내(카카오뱅크는 면제)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  저축은행
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  금융회사별 공시 확인(2025년 1월 이후 신규분은 실비용 기준으로 산정)
                </td>
                <td className="border-border border-b px-3 py-2.5">3년</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  디딤돌대출
                </th>
                <td className="border-border border-b px-3 py-2.5">0.6% 한도 (2026년 12월 31일까지 상환분은 면제)</td>
                <td className="border-border border-b px-3 py-2.5">3년</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">
                  보금자리론
                </th>
                <td className="px-3 py-2.5">0.5% 한도 (2025년 4월 이후 신청분)</td>
                <td className="px-3 py-2.5">3년</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 수수료율과 면제 기간은 상품 및 시점에 따라 다르며, 대출 계약서에서 반드시 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prepayment-exemption">
        <h2 id="guide-prepayment-exemption" className="text-foreground text-xl font-semibold tracking-tight">
          수수료 면제 또는 감면 조건
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              중도상환 수수료 면제·감면 조건
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  면제 기간 경과 후 상환
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 실행 후 3년 초과 시 수수료 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  디딤돌대출 중도상환
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2024년 8월 12일 ~ 2026년 12월 31일까지 상환한 원금은 수수료 면제 (이후에는 3년 이내 상환분에 0.6% 한도로
                  부과)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보금자리론 중도상환
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  사회적배려층·다자녀(3자녀 이상) 우대금리 대상자, 전세사기피해자는 면제 (2025년 4월 1일 이후 신청분 기준)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연간 일부 상환 허용
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  일부 상품은 연간 일정 금액 이내 수수료 면제
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  금리인하요구권 행사 후 갈아타기
                </th>
                <td className="px-3 py-2.5">금융기관별 조건 상이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prepayment-didimdol">
        <h2 id="guide-prepayment-didimdol" className="text-foreground text-xl font-semibold tracking-tight">
          디딤돌대출 중도상환수수료 면제, 2026년 12월 31일까지 (2026년 11월 4일 기준)
        </h2>
        <p>
          디딤돌대출은 원래 실행일부터 3년 이내에 갚은 원금에 수수료가 붙지만, <strong>2024년 8월 12일부터 2026년 12월 31일까지
          중도상환된 원금</strong>에는 수수료가 면제됩니다. 면제 여부는 대출을 받은 날이 아니라 <strong>원금을 실제로 갚은 날(상환
          처리일)</strong>로 판단합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              디딤돌대출 중도상환수수료 정리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상환일
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수수료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2026년 12월 31일까지
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  면제(0원). 일부 상환도 상환한 원금만큼 면제
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2027년 1월 1일 이후, 실행 후 3년 이내
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상환 원금 × 0.6% × (3년 − 경과일수) ÷ 3년
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실행 후 3년 경과
                </th>
                <td className="px-3 py-2.5">언제 갚아도 수수료 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          예를 들어 실행 1년이 지난 시점에 1억 원을 갚는다면 2026년 12월 31일까지는 0원이고, 2027년 1월 이후에는 1억 원 × 0.6% × (2년 ÷
          3년)으로 약 40만 원이 됩니다. 금리 인하나 갈아타기를 고민하는 경우, 이 한시 면제가 끝나기 전에 상환하면 수수료를 아낄 수 있습니다.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>연장 여부는 아직 확정되지 않았습니다.</strong> 2026년 11월 4일 기준 공식 안내(마이홈포털 디딤돌 상품 안내)는 면제 기간을
            2026년 12월 31일까지로 표시합니다. 2027년 이후 상환은 연장 공지를 다시 확인하세요.
          </li>
          <li>
            신청일이 아니라 <strong>상환 처리일</strong>이 기준입니다. 연말에는 은행 처리 가능 시간이 있으니 마지막 주에 몰아서 하지 말고
            여유 있게 처리하세요.
          </li>
          <li>
            대출계약을 철회한 경우에도 수수료가 면제됩니다. 보금자리론은 이 한시 면제 대상이 아니며, 사회적배려층·3자녀 이상 다자녀가구·
            전세사기피해자 등 조건에 해당할 때만 면제됩니다(수수료 한도 0.5%).
          </li>
          <li>
            <Link href="/prepayment-fee-calculator" className="text-primary underline-offset-4 hover:underline">
              중도상환 수수료 계산기
            </Link>
            에서 디딤돌 조건(수수료율 0.6%, 면제 기간 3년)으로 면제 종료 후 예상 수수료를 계산해 볼 수 있습니다. 면제 기간 안에 상환하면
            계산 결과와 관계없이 0원입니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prepayment-interest-saving">
        <h2 id="guide-prepayment-interest-saving" className="text-foreground text-xl font-semibold tracking-tight">
          수수료 대비 이자 절감액 비교
        </h2>
        <p>
          중도상환 전 수수료 납부액과 이자 절감액을 비교하는 것이 선행되어야 합니다. 수수료가 절감되는 이자보다 크면 상환 시점을
          늦추는 것이 유리합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          위 예시 기준(5,000만 원 조기 상환, 금리 4%, 잔여 원금 기준 이자 절감 효과)
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              수수료와 이자 절감액 비교(예시)
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
                  중도상환 수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">약 23만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2년간 이자 절감액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 380만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  순 절감액
                </th>
                <td className="px-3 py-2.5">약 357만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>이 경우 수수료를 납부하더라도 조기 상환이 유리합니다.</p>
        <p>
          6억 원 규모 대출의 상환 시점별 비교는{" "}
          <Link href="/guide/600-million-prepayment-vs-interest-guide" className="text-primary underline-offset-4 hover:underline">
            6억 대출 후 중도상환 vs 이자납입 비교
          </Link>
          글에서 자세히 다룹니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 실제 수수료율과 계산 방식은 금융기관 및 대출 상품에 따라 상이합니다. 정확한 수수료는 대출 계약서 또는 해당 금융기관에서
          확인해야 합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/prepayment-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            중도상환 수수료는 중도상환 수수료 계산기에서 바로 계산할 수 있다.
          </Link>{" "}
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            상환 시점별 이자 절감액은 대출 이자 계산기에서 확인할 수 있다.
          </Link>
        </p>
      </aside>
    </>
  );
}
