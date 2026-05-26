import Link from "next/link";

export const equalPaymentVsEqualPrincipalMeta = {
  slug: "equal-payment-vs-equal-principal",
  title: "원리금균등상환 vs 원금균등상환 비교",
  description:
    "원리금균등·원금균등의 구조 차이, DSR·중도상환과의 관계, 연봉·여유자금별 선택 시나리오와 흔한 실수를 정리한 상환 방식 선택 가이드입니다.",
  updated: "2026년 4월 13일",
} as const;

export function EqualPaymentVsEqualPrincipalBody() {
  return (
    <>
      <p>
        두 방식 모두 매월 원금과 이자를 함께 상환하는 분할상환 방식입니다. 차이는 매월 상환액을 어떻게 구성하느냐에 있습니다. 홈
        화면의{" "}
        <Link href="/#calculator" className="text-primary underline-offset-4 hover:underline">
          대출 이자 계산기
        </Link>
        는 조건별 숫자를 빠르게 비교하는 데 적합하고, 이 글은 <strong>왜 한쪽을 선택하는지</strong> 판단할 때 참고하는 용도로
        정리했습니다.
      </p>

      <section className="space-y-3" aria-labelledby="guide-equal-when-matters">
        <h2 id="guide-equal-when-matters" className="text-foreground text-xl font-semibold tracking-tight">
          상환 방식 선택이 특히 중요한 경우
        </h2>
        <p>
          대출 기간이 20~30년으로 길고, 초기 월 상환액이{" "}
          <abbr title="총부채원리금상환비율">DSR</abbr> 한도에 가깝게 잡힌 경우 방식 선택이 한도·생활비에 직접 영향을 줍니다.
          원금균등을 고르면 총 이자는 줄지만 1~3년차 월 부담이 커져 DSR 심사에서 불리할 수 있고, 원리금균등은 한도는 넉넉해질 수
          있으나 장기 이자 부담이 커집니다.
        </p>
        <p>
          반대로 DSR 여유가 충분하고 중도상환·보너스 상환 계획이 있다면, 방식보다 <strong>언제 얼마를 더 갚을지</strong>가 총
          이자에 더 큰 영향을 줄 때도 많습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-core-diff">
        <h2 id="guide-equal-core-diff" className="text-foreground text-xl font-semibold tracking-tight">
          핵심 차이
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              원리금균등상환 vs 원금균등상환 핵심 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  원리금균등상환
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  원금균등상환
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매월 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">일정</td>
                <td className="border-border border-b px-3 py-2.5">초기 높고 점차 감소</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매월 원금 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">초기 적고 점차 증가</td>
                <td className="border-border border-b px-3 py-2.5">일정</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  총 이자 부담
                </th>
                <td className="border-border border-b px-3 py-2.5">상대적으로 많음</td>
                <td className="border-border border-b px-3 py-2.5">상대적으로 적음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  초기 상환 부담
                </th>
                <td className="border-border border-b px-3 py-2.5">낮음</td>
                <td className="border-border border-b px-3 py-2.5">높음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  가계 예산 관리
                </th>
                <td className="px-3 py-2.5">용이</td>
                <td className="px-3 py-2.5">복잡</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-example-compare">
        <h2 id="guide-equal-example-compare" className="text-foreground text-xl font-semibold tracking-tight">
          예시 비교
        </h2>
        <p className="text-muted-foreground text-sm">
          대출 원금 2억 원, 금리 4%, 상환 기간 30년 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상환 방식별 월 상환액·총 상환액 비교(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  원리금균등
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  원금균등
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1회차 월 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 95만 5천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 122만 2천 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  120회차 월 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 95만 5천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 100만 6천 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  240회차 월 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 95만 5천 원</td>
                <td className="border-border border-b px-3 py-2.5">약 78만 9천 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  총 상환액
                </th>
                <td className="border-border border-b px-3 py-2.5">약 3억 4,400만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 2,100만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  총 이자액
                </th>
                <td className="px-3 py-2.5">약 1억 4,400만 원</td>
                <td className="px-3 py-2.5">약 1억 2,100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          같은 조건에서 원금균등상환의 총 이자 부담이 약 2,300만 원 적습니다. 단, 초기 월 상환액은 원금균등상환이 약 27만 원 더
          높습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-selection-criteria">
        <h2 id="guide-equal-selection-criteria" className="text-foreground text-xl font-semibold tracking-tight">
          상환 방식 선택 기준
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상황별 추천 상환 방식
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적합한 방식
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  월 소득이 일정하고 예산 관리가 중요한 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">원리금균등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  초기 여유 자금이 충분한 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">원금균등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기 대출로 총 이자 부담을 줄이고 싶은 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">원금균등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  퇴직 후 상환 부담 감소를 원하는 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">원금균등</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  대출 초기 자금 여유가 없는 경우
                </th>
                <td className="px-3 py-2.5">원리금균등</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-equal-scenario">
        <h2 id="guide-equal-scenario" className="text-foreground text-xl font-semibold tracking-tight">
          시나리오: 연봉 5,500만 원, 대출 2억 원
        </h2>
        <p>
          DSR 40% 기준 월 상환 가능액은 약 183만 원입니다. 아래는 금리 4%·30년·거치기간 없음 가정입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              DSR 한도와 맞물린 상환 방식 선택(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  1회차 월 상환
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  판단
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  원리금균등
                </th>
                <td className="border-border border-b px-3 py-2.5">약 95만 5천 원</td>
                <td className="border-border border-b px-3 py-2.5">DSR 대비 여유 있음. 월 고정 지출 관리에 유리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  원금균등
                </th>
                <td className="border-border border-b px-3 py-2.5">약 122만 2천 원</td>
                <td className="border-border border-b px-3 py-2.5">한도는 통과하나 초기 부담 큼. 보너스·중도상환 전제면 검토</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  기존 신용대출 월 50만 원 보유
                </th>
                <td className="px-3 py-2.5">주담대 활용 가능 약 133만 원</td>
                <td className="px-3 py-2.5">원금균등 초기 122만 원은 가능하나, 생활비·비상금까지 고려하면 원리금균등이 안전한 경우 많음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          같은 대출액이라도 <strong>기존 부채·생활비·비상자금</strong>까지 넣어 보면 선택이 달라집니다. 계산기로 숫자를 확인한 뒤,
          실제로 감당 가능한 1~3년차 월 부담을 기준으로 고르는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-equal-prepayment">
        <h2 id="guide-equal-prepayment" className="text-foreground text-xl font-semibold tracking-tight">
          중도상환·거치기간과 함께 볼 때
        </h2>
        <p>
          중도상환을 계획하고 있다면 두 방식의 총 이자 차이는 줄어듭니다. 어느 방식이든 초기에 상환할수록 이자 절감 효과가 크며,
          중도상환 수수료·최소 유지 기간을 먼저 확인해야 합니다.
        </p>
        <p>
          거치기간(이자만 납부)을 쓰면 초기 부담은 줄지만 총 이자가 늘고, 거치 종료 후 상환액이 크게 올라갑니다. 거치기간은
          원리금균등·원금균등에만 적용되며,{" "}
          <Link href="/guide/grace-period-explained" className="text-primary underline-offset-4 hover:underline">
            거치기간 설명
          </Link>
          과 함께 보세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-equal-mistakes">
        <h2 id="guide-equal-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          흔한 실수
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>총 이자만 보고 원금균등 선택</strong> — 초기 3년간 월 부담이 DSR·생활비를 초과하면 오히려 연체·추가
            대출 위험이 커집니다.
          </li>
          <li>
            <strong>은행 기본값(원리금균등)을 그대로 수용</strong> — 상품·기관마다 허용 방식이 다릅니다. 신청 전 비교 모드로
            차이를 확인하세요.
          </li>
          <li>
            <strong>중도상환 계획 없이 “이자 적은 쪽”만 고름</strong> — 실제로 중도상환을 못 하면 원금균등의 이점이 줄어듭니다.
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          ※ 위 예시는 이해를 돕기 위한 참고값이며, 실제 상환액은 금융기관별 계산·절사 방식에 따라 차이가 있을 수 있습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            내 대출 조건에 맞는 두 방식의 상환액 차이 계산
          </Link>
        </p>
      </aside>
    </>
  );
}
