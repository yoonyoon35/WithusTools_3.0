import Link from "next/link";

export const dsr40MortgageLimitMeta = {
  slug: "dsr-40-mortgage-limit",
  title: "DSR 40% 기준 주택담보대출 한도 산정 방식",
  description:
    "DSR 40%와 연소득·기존 부채를 반영한 월 상환 가능액, 금리별 주택담보대출 한도 예시를 정리했습니다. 참고용이며 실제 한도는 금융기관 정책에 따릅니다.",
  updated: "2026년 4월 13일",
} as const;

export function Dsr40MortgageLimitBody() {
  return (
    <>
      <p>
        <abbr title="총부채원리금상환비율">DSR</abbr>(총부채원리금상환비율)은 연간 총 부채 원리금 상환액을 연소득으로 나눈 비율입니다. 2023년
        이후 은행권 기준 <strong>40%</strong>가 상한선으로 적용되고 있습니다.
      </p>

      <section className="space-y-3" aria-labelledby="guide-dsr-criteria">
        <h2 id="guide-dsr-criteria" className="text-foreground text-xl font-semibold tracking-tight">
          적용 기준
        </h2>
        <p>
          연소득 <strong>5,000만 원</strong> 기준 월 소득 환산액은 약 <strong>417만 원</strong>입니다. DSR 40%를 적용하면 월 상환 가능
          원리금 합계는 <strong>167만 원</strong>입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-existing-debt">
        <h2 id="guide-dsr-existing-debt" className="text-foreground text-xl font-semibold tracking-tight">
          기존 부채 반영
        </h2>
        <p>
          예를 들어 차량 할부 월 <strong>30만 원</strong>이 있는 경우, 주택담보대출에 배분 가능한 월 상환액은{" "}
          <strong>137만 원</strong>으로 줄어듭니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-limit-calc">
        <h2 id="guide-dsr-limit-calc" className="text-foreground text-xl font-semibold tracking-tight">
          대출 한도 산출
        </h2>
        <p>
          금리 <strong>4%</strong>, <strong>30년</strong> 원리금균등상환 조건에서 월 <strong>137만 원</strong>을 상환한다고 가정하면, 대출
          가능 금액은 약 <strong>2억 8,700만 원</strong>으로 볼 수 있습니다. 같은 조건에서 기존 부채가 없을 때는 약{" "}
          <strong>3억 5,000만 원</strong>까지 산출되며, 차량 할부로 인한 한도 감소분은 약 <strong>6,300만 원</strong>입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dsr-rate-table">
        <h2 id="guide-dsr-rate-table" className="text-foreground text-xl font-semibold tracking-tight">
          금리 변동에 따른 한도 변화
        </h2>
        <p className="text-muted-foreground text-sm">
          아래는 월 상환액 <strong className="text-foreground">137만 원</strong>, 상환 기간 <strong className="text-foreground">30년</strong>
          , 원리금균등상환을 가정한 예시입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리별 대출 한도(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 한도(참고)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">3.5%</td>
                <td className="border-border border-b px-3 py-2.5">137만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 500만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">4.0%</td>
                <td className="border-border border-b px-3 py-2.5">137만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 8,700만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">4.5%</td>
                <td className="border-border border-b px-3 py-2.5">137만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 7,100만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">5.0%</td>
                <td className="px-3 py-2.5">137만 원</td>
                <td className="px-3 py-2.5">약 2억 5,500만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="참고 안내"
      >
        <p>
          <span className="text-foreground font-medium">※</span> 실제 한도는 <abbr title="담보인정비율">LTV</abbr>, 신용등급, 금융기관별
          정책에 따라 달라질 수 있습니다.
        </p>
        <p>
          <Link
            href="/#calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            금리와 상환 기간별 월 상환액·대출 이자 계산
          </Link>
          은 홈의 대출 이자 계산기에서 직접 조건을 바꿔가며 확인해 보세요.
        </p>
        <p>
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          에서 연 소득·기존 부채를 입력해 DSR을 간이 계산해 볼 수 있습니다.
        </p>
      </aside>
    </>
  );
}
