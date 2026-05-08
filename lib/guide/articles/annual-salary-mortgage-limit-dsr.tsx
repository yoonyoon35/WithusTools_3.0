import Link from "next/link";

export const annualSalaryMortgageLimitDsrMeta = {
  slug: "annual-salary-mortgage-limit-dsr",
  title: "연봉별 주택담보대출 한도 기준",
  description:
    "DSR 40%를 기준으로 한 연봉별 월 상환 가능액·대출 한도 추산, 기존 부채 반영, 금리·LTV와의 관계를 표로 정리한 참고 안내입니다.",
  updated: "2026년 4월 14일",
} as const;

export function AnnualSalaryMortgageLimitDsrBody() {
  return (
    <>
      <p>
        연봉에 따른 주택담보대출 한도는 <strong>DSR 40%</strong> 규제를 기준으로 산출됩니다. DSR 40%란 연간 원리금 상환액이 연소득의
        40%를 초과할 수 없다는 규제입니다.
      </p>

      <section className="space-y-4" aria-labelledby="guide-salary-dsr-monthly">
        <h2 id="guide-salary-dsr-monthly" className="text-foreground text-xl font-semibold tracking-tight">
          DSR 40% 기준 월 상환 가능액
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              연봉별 월 소득 환산 및 DSR 40% 적용 시 월 상환 한도
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연봉
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 소득 환산
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  DSR 40% 적용 시 월 상환 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">250만 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">333만 원</td>
                <td className="border-border border-b px-3 py-2.5">133만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">417만 원</td>
                <td className="border-border border-b px-3 py-2.5">167만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">583만 원</td>
                <td className="border-border border-b px-3 py-2.5">233만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">667만 원</td>
                <td className="border-border border-b px-3 py-2.5">267만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  1억 원
                </th>
                <td className="px-3 py-2.5">833만 원</td>
                <td className="px-3 py-2.5">333만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-salary-limit-estimate">
        <h2 id="guide-salary-limit-estimate" className="text-foreground text-xl font-semibold tracking-tight">
          연봉별 대출 한도 추산
        </h2>
        <p className="text-muted-foreground text-sm">
          금리 4%, 30년 원리금균등상환, 기존 부채 없음 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              연봉별 월 상환 한도와 대출 가능 한도(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연봉
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환 한도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 가능 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 900만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">133만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 7,800만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">167만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 4,900만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 4억 1,800만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">233만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 4억 8,700만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">267만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 5억 5,800만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  1억 원
                </th>
                <td className="px-3 py-2.5">333만 원</td>
                <td className="px-3 py-2.5">약 6억 9,600만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 위 수치는 기존 부채가 전혀 없는 경우를 가정한 참고값입니다. 실제 한도는 기존 부채, 금리,{" "}
          <abbr title="담보인정비율">LTV</abbr>, 금융기관별 심사 기준에 따라 달라집니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-salary-existing-debt">
        <h2 id="guide-salary-existing-debt" className="text-foreground text-xl font-semibold tracking-tight">
          기존 부채가 있는 경우
        </h2>
        <p>
          기존 부채의 월 원리금 상환액은 DSR 한도에서 차감됩니다. 연봉 5,000만 원 기준 월 상환 한도 167만 원에서 기존 부채 상환액을
          뺀 나머지만 주택담보대출에 활용할 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              연봉 5,000만 원·금리 4%·30년·원리금균등 가정 시 기존 부채 반영(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연봉
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기존 부채 월 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주담대 활용 가능액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">167만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 4,900만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">30만 원(차량 할부)</td>
                <td className="border-border border-b px-3 py-2.5">137만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 8,700만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">50만 원(신용대출)</td>
                <td className="border-border border-b px-3 py-2.5">117만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 4,500만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5,000만 원
                </th>
                <td className="px-3 py-2.5">80만 원(복합 부채)</td>
                <td className="px-3 py-2.5">87만 원</td>
                <td className="px-3 py-2.5">약 1억 8,200만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-salary-rate-change">
        <h2 id="guide-salary-rate-change" className="text-foreground text-xl font-semibold tracking-tight">
          금리 변동에 따른 한도 변화
        </h2>
        <p className="text-muted-foreground text-sm">
          연봉 5,000만 원, 기존 부채 없음, 30년 원리금균등상환 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[22rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리별 대출 한도(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3.5%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 3억 7,100만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4.0%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 3억 4,900만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4.5%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 3억 2,900만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5.0%
                </th>
                <td className="px-3 py-2.5">약 3억 1,100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          금리가 1%p 오를 때마다 같은 연봉 기준 대출 한도가 약 2,000만 원~3,000만 원 감소합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-salary-ltv">
        <h2 id="guide-salary-ltv" className="text-foreground text-xl font-semibold tracking-tight">
          LTV 규제와의 관계
        </h2>
        <p>
          DSR 한도 내 대출 가능 금액이 산출되더라도, LTV(주택담보인정비율) 규제로 인해 실제 대출액은 주택 감정가의 일정 비율을 초과할 수
          없습니다. 두 규제 중 낮은 금액이 실제 한도로 적용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              구분별 LTV 한도(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  LTV 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 주담대
                </th>
                <td className="border-border border-b px-3 py-2.5">감정가의 70%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초(비수도권)
                </th>
                <td className="border-border border-b px-3 py-2.5">감정가의 80%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  생애최초(수도권·규제지역)
                </th>
                <td className="px-3 py-2.5">감정가의 70%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 정확한 한도는 금융기관 심사를 통해 확인해야 하며, 소득 산정 방식(근로소득·사업소득·기타소득)에 따라 결과가 달라질 수
          있습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            내 연봉과 금리 조건에 맞는 월 상환액은 대출 이자 계산기에서 직접 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          에서 연 소득·기존 부채·상환 방식에 따른 DSR을 함께 확인해 보세요.
        </p>
      </aside>
    </>
  );
}
