import Link from "next/link";

export const prepaymentVsInterest600MillionGuideMeta = {
  slug: "600-million-prepayment-vs-interest-guide",
  title: "6억 대출 후 중도상환 vs 이자납입 비교",
  description:
    "6억 원 주담대에서 중도상환 수수료와 남은 기간 이자를 비교하는 방법, 상환 시점별 손익, 굳이 지금 상환하지 않아도 되는 경우를 정리했습니다.",
  updated: "2026년 5월 27일",
} as const;

export function PrepaymentVsInterest600MillionGuideBody() {
  return (
    <>
      <p>
        6억 원 규모 주택담보대출에서 일부 또는 전액을 조기 상환할 때, 중도상환 수수료를 내더라도 이자를 아낄 수
        있는지부터 확인해야 합니다. 수수료가 절감 이자보다 크면 상환 시점을 늦추는 편이 낫고,{" "}
        <strong>반대로 이자 절감이 더 크면 수수료를 지불하고 상환하는 쪽이 유리</strong>할 수 있습니다. 아래는
        참고용 단순 가정이며, 본인 조건은{" "}
        <Link href="/prepayment-fee-calculator" className="text-primary underline-offset-4 hover:underline">
          중도상환 수수료 계산기
        </Link>
        와{" "}
        <Link href="/#calculator" className="text-primary underline-offset-4 hover:underline">
          대출 이자 계산기
        </Link>
        로 다시 확인하는 것이 좋습니다.
      </p>

      <section className="space-y-4" aria-labelledby="guide-prep600-assumptions">
        <h2 id="guide-prep600-assumptions" className="text-foreground text-xl font-semibold tracking-tight">
          예시 가정
        </h2>
        <p>
          이 글 전체에서 공통으로 쓰는 조건입니다. 6억 원을 30년(360개월), 금리 연 4%, 원리금균등상환으로 받았고,
          중도상환 수수료율 1.2%, 면제 기간 3년(36개월)인 상품을 가정합니다. 일부 중도상환 금액은 대출 원금의
          4분의 1인 <strong>1억 5,000만 원</strong>으로 잡았습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              6억 원 대출 예시 조건
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
                  대출 원금
                </th>
                <td className="border-border border-b px-3 py-2.5">6억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리·기간·상환 방식
                </th>
                <td className="border-border border-b px-3 py-2.5">연 4%, 30년, 원리금균등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중도상환 수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">1.2%, 면제 기간 3년</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일부 중도상환 원금
                </th>
                <td className="border-border border-b px-3 py-2.5">1억 5,000만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  수수료 계산식
                </th>
                <td className="px-3 py-2.5">중도상환 원금 × 수수료율 × (잔여기간 ÷ 대출기간)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 수수료율·면제 기간·일할 방식은 금융기관·상품마다 다릅니다.{" "}
          <Link href="/guide/prepayment-fee-calculation" className="text-primary underline-offset-4 hover:underline">
            중도상환 수수료 계산 방식
          </Link>
          글도 함께 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prep600-timing">
        <h2 id="guide-prep600-timing" className="text-foreground text-xl font-semibold tracking-tight">
          수수료가 남은 기간 이자보다 적어지는 시점
        </h2>
        <p>
          1억 5,000만 원을 중도상환할 때, <strong>한 번 내는 수수료</strong>와{" "}
          <strong>그 원금을 끝까지 갚지 않을 경우 앞으로 더 내야 할 이자</strong>를 비교하는 것이 출발점입니다.
          대출 초·중반에는 잔여 기간이 길어 이자 부담이 크고, 후반으로 갈수록 둘 다 함께 줄어듭니다.
        </p>
        <p>
          실행 1년 차(면제 종료까지 24개월 남음)에 1억 5,000만 원을 상환하면 수수료는 약{" "}
          <strong>120만 원</strong>입니다(1억 5,000만 × 1.2% × (24 ÷ 36)). 같은 금액을 만기까지 유지하면, 잔여
          대출기간(약 29년) 동안 해당 원금만큼 추가로 부담하는 이자는 <strong>1억 원을 훌쩍 넘길 수 있습니다</strong>.
          수수료가 남은 기간 이자보다 훨씬 적으므로, 이 시점의 조기 상환은 이자 절감 측면에서 유리한 편입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대출 잔여 기간별 1억 5,000만 원 중도상환 — 수수료와 이자 부담(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중도상환 수수료(약)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  잔여 기간 추가 이자(약)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  판단
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실행 1년 차(면제 24개월 남음)
                </th>
                <td className="border-border border-b px-3 py-2.5">120만 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 원 이상</td>
                <td className="border-border border-b px-3 py-2.5">상환 유리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실행 2년 차(면제 12개월 남음)
                </th>
                <td className="border-border border-b px-3 py-2.5">60만 원</td>
                <td className="border-border border-b px-3 py-2.5">수천만 원대</td>
                <td className="border-border border-b px-3 py-2.5">상환 유리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔여 1~2년·금리 2%대
                </th>
                <td className="border-border border-b px-3 py-2.5">15~30만 원</td>
                <td className="border-border border-b px-3 py-2.5">300~450만 원</td>
                <td className="border-border border-b px-3 py-2.5">차이 축소, 미루어도 됨</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  면제 기간 경과(3년 초과)
                </th>
                <td className="px-3 py-2.5">0원</td>
                <td className="px-3 py-2.5">잔여 기간에 따라 상이</td>
                <td className="px-3 py-2.5">수수료 부담 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          반대로 <strong>잔여 대출기간이 1~2년뿐</strong>이고 금리가 이미 2%대처럼 낮다면 이야기가 달라집니다. 잔여
          24개월 동안 1억 5,000만 원에 붙는 이자가 300~450만 원 수준까지 줄어들 수 있고, 면제 직전이라 수수료도
          15~30만 원대로 낮아집니다. 절감 이자와 수수료의 차이가 크지 않아, 굳이 지금 상환하지 않아도 되는 경우가
          생깁니다. 잔여 6개월 미만·금리 2% 이하처럼 조건이 겹치면 수수료가 절감 이자보다 클 수도 있으니, 면제
          기간 종료를 기다리거나 만기 상환을 검토하는 편이 낫습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prep600-compare-24">
        <h2 id="guide-prep600-compare-24" className="text-foreground text-xl font-semibold tracking-tight">
          면제 종료 24개월 전, 1억 5,000만 원 중도상환 비교
        </h2>
        <p>
          같은 6억 원·연 4%·30년 대출에서 실행 후 1년이 지나 면제 종료까지 24개월 남은 시점에 1억 5,000만 원을
          중도상환한다고 가정합니다. 이때 내야 할 수수료와, 상환하지 않고 24개월을 더 갚아 나갈 때 해당 원금에서
          발생하는 이자를 나란히 보면 판단이 수월합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              실행 1년 차 — 수수료 vs 24개월 이자(1억 5,000만 원)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액(약)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중도상환 수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">120만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  24개월간 추가 이자(상환하지 않을 경우)
                </th>
                <td className="border-border border-b px-3 py-2.5">1,140만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  순 절감액(이자 − 수수료)
                </th>
                <td className="px-3 py-2.5">약 1,020만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          수수료 120만 원을 내더라도 24개월간 약 1,140만 원의 이자를 줄일 수 있으므로, 이 시점에서는 조기 상환이
          유리한 편입니다. 다만 이자 절감액은 잔여 원금·상환 방식(원리금균등·원금균등·만기일시)에 따라 달라지므로,
          위 숫자는 대략적인 비교용입니다.
        </p>
        <p className="text-muted-foreground text-sm">같은 1억 5,000만 원, 상환 시점만 바꿨을 때</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상환 시점별 수수료·이자 절감(약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상환 시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중도상환 수수료
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  면제 종료 전 절감 이자
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순 절감(약)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실행 1년 차(면제 24개월 남음)
                </th>
                <td className="border-border border-b px-3 py-2.5">120만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,140만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,020만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실행 2년 차(면제 12개월 남음)
                </th>
                <td className="border-border border-b px-3 py-2.5">60만 원</td>
                <td className="border-border border-b px-3 py-2.5">570만 원</td>
                <td className="border-border border-b px-3 py-2.5">510만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실행 3년 차(면제 기간 종료)
                </th>
                <td className="px-3 py-2.5">0원</td>
                <td className="px-3 py-2.5">—</td>
                <td className="px-3 py-2.5">수수료 없이 상환 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          실행 2년 차에 같은 금액을 상환하면 수수료는 60만 원으로 줄지만, 12개월간 절감되는 이자도 570만 원
          수준으로 함께 줄어듭니다. 여전히 상환이 유리할 수 있지만, 1년 차보다 절감 폭은 작습니다. 실행 3년이
          지나 면제 기간이 끝나면 수수료는 0원이므로, 급하지 않다면 그때 상환하는 것도 한 방법입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-prep600-when-wait">
        <h2 id="guide-prep600-when-wait" className="text-foreground text-xl font-semibold tracking-tight">
          굳이 지금 상환하지 않아도 되는 경우
        </h2>
        <p>
          6억 원 대출이라도 잔여 기간과 금리 조건에 따라 결과는 달라집니다. 아래에 해당하면 수수료만 보고 성급히
          상환하기보다 시점을 조정하는 편이 낫습니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>잔여 1~2년, 금리 2%대처럼 이미 낮아 절감 이자와 수수료 차이가 작을 때</li>
          <li>
            곧{" "}
            <Link href="/guide/loan-refinancing-guide" className="text-primary underline-offset-4 hover:underline">
              갈아타기
            </Link>
            로 더 낮은 금리를 받을 수 있어, 중도상환 수수료와 신규 대출 비용을 합산해 비교해야 할 때
          </li>
          <li>면제 기간이 3개월 이내로 남아 수수료 없이 상환할 수 있을 때</li>
          <li>디딤돌 등 기간 한정 면제가 적용되는 상품에서 면제 종료일 전후 타이밍을 맞출 때</li>
        </ul>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/prepayment-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            중도상환 수수료 계산기
          </Link>
          에서 본인 수수료율·면제 기간·상환 시점을 넣어 볼 수 있습니다.{" "}
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
          로 상환 방식별 이자 절감액을 함께 확인하세요.
        </p>
      </aside>
    </>
  );
}
