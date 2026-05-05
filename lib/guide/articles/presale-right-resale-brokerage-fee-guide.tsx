import Link from "next/link";

export const presaleRightResaleBrokerageFeeGuideMeta = {
  slug: "presale-right-resale-brokerage-fee-guide",
  title: "분양권 전매 중개수수료 계산법",
  description:
    "2026년 4월 기준 분양권 거래금액 산정 방식, 적용 요율, 금액별 수수료 예시, 마이너스 프리미엄·추가 비용·전매제한 유의사항을 정리했습니다.",
  updated: "2026년 5월 5일",
} as const;

export function PresaleRightResaleBrokerageFeeGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-prrb-overview">
        <h2 id="guide-prrb-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          분양권 전매 중개수수료는 일반 아파트 매매와 계산 방식이 다릅니다. 분양권 매매 계약의 거래금액은 거래 당시까지 납입한
          계약금과 중도금(대출 포함)에 프리미엄을 모두 합하여 산정합니다. 분양가 전체가 아닌 실제 납입액과 프리미엄의 합계가
          기준입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-prrb-formula">
        <h2 id="guide-prrb-formula" className="text-foreground text-xl font-semibold tracking-tight">
          거래금액 산정 공식
        </h2>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
          분양권 거래금액 = 계약금 + 중도금(대출 포함) + 프리미엄
        </p>
        <p>분양가 자체는 거래금액에 포함되지 않습니다. 잔금은 아직 납부하지 않았으므로 포함하지 않습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prrb-example">
        <h2 id="guide-prrb-example" className="text-foreground text-xl font-semibold tracking-tight">
          거래금액 산정 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          분양가 5억 원 아파트, 계약금 10% 납부, 중도금 3회차(20%) 납부, 중도금 대출 30%, 프리미엄 5,000만 원 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              분양권 거래금액 산정 예시
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
                  계약금 (분양가의 10%)
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  납입 중도금 (분양가의 20%)
                </th>
                <td className="border-border border-b px-3 py-2.5">1억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중도금 대출 (분양가의 30%)
                </th>
                <td className="border-border border-b px-3 py-2.5">1억 5,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  프리미엄
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  거래금액 합계
                </th>
                <td className="px-3 py-2.5">3억 5,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>이 경우 중개수수료 계산 기준은 분양가 5억 원이 아닌 3억 5,000만 원입니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prrb-rate">
        <h2 id="guide-prrb-rate" className="text-foreground text-xl font-semibold tracking-tight">
          적용 요율표
        </h2>
        <p>분양권은 주택에 해당하므로 매매 상한요율표를 적용합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매 상한요율표
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거래금액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상한요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  한도액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.6%</td>
                <td className="border-border border-b px-3 py-2.5">25만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 이상 ~ 2억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">80만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 원 이상 ~ 9억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원 이상 ~ 12억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원 이상 ~ 15억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.6%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15억 원 이상
                </th>
                <td className="px-3 py-2.5">0.7%</td>
                <td className="px-3 py-2.5">없음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prrb-fee-example">
        <h2 id="guide-prrb-fee-example" className="text-foreground text-xl font-semibold tracking-tight">
          거래금액별 중개수수료 예시
        </h2>
        <p className="text-muted-foreground text-sm">상한요율 기준, 매도인·매수인 각각 부담</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              납입금 + 프리미엄 기준 수수료
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납입금 + 프리미엄
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  1인당 수수료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">40만 원 (한도 80만 원)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 5,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">75만 원 (한도 80만 원)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">80만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 5,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">140만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="px-3 py-2.5">0.4%</td>
                <td className="px-3 py-2.5">280만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-prrb-premium">
        <h2 id="guide-prrb-premium" className="text-foreground text-xl font-semibold tracking-tight">
          프리미엄 포함 여부가 핵심
        </h2>
        <p>
          분양권 중개수수료 계산 시 프리미엄을 포함해야 한다는 점이 일반 매매와 가장 큰 차이입니다. 프리미엄 없이 납입금만으로
          계산하면 수수료가 낮아지는 것처럼 보이지만, 이는 공인중개사법 시행규칙 위반입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-prrb-minus-premium">
        <h2 id="guide-prrb-minus-premium" className="text-foreground text-xl font-semibold tracking-tight">
          마이너스 프리미엄(마피) 시 처리 방법
        </h2>
        <p>
          분양권 시세가 분양가 아래로 떨어진 경우(마이너스 프리미엄) 거래금액에서 프리미엄을 차감합니다.
        </p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 text-sm">
          분양가 5억 원, 계약금 5,000만 원, 중도금 대출 1억 5,000만 원 납입, 마이너스 프리미엄 2,000만 원
          <br />
          거래금액 = 5,000만 원 + 1억 5,000만 원 - 2,000만 원 = 1억 8,000만 원
          <br />
          중개수수료 = 1억 8,000만 원 × 0.5% = 90만 원 → 한도 80만 원 적용
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-prrb-option">
        <h2 id="guide-prrb-option" className="text-foreground text-xl font-semibold tracking-tight">
          옵션·발코니 확장비 포함 여부
        </h2>
        <p>
          옵션비와 발코니 확장비는 분양권 거래금액 산정 시 포함 여부가 명확하지 않아 분쟁이 발생하는 경우가 있습니다. 계약서에
          항목별 금액을 명확히 기재하는 것이 분쟁을 예방하는 방법입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-prrb-loan">
        <h2 id="guide-prrb-loan" className="text-foreground text-xl font-semibold tracking-tight">
          중도금 대출 승계 시 주의사항
        </h2>
        <p>
          분양권 전매 시 매수인이 매도인의 중도금 대출을 승계하는 경우가 많습니다. 대출 승계 여부와 금액을 계약서에 명확히
          기재해야 하며, 대출 승계가 거래금액에 포함되는지 여부도 계약 전 확인이 필요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prrb-extra-cost">
        <h2 id="guide-prrb-extra-cost" className="text-foreground text-xl font-semibold tracking-tight">
          분양권 전매 시 추가 비용
        </h2>
        <p>중개수수료 외에 분양권 전매 시 발생하는 추가 비용도 사전에 파악해야 합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전매 시 부대비용
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비용 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  양도소득세
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  분양권 보유 기간 1년 미만 시 양도차익의 77%, 1년 이상 2년 미만 시 66%, 2년 이상 시 기본세율 적용
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부동산 거래 신고
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 체결일로부터 30일 이내 신고 의무</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  건설사 명의변경 수수료
                </th>
                <td className="px-3 py-2.5">건설사별 상이 (통상 10만 원 ~ 50만 원)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-prrb-vat">
        <h2 id="guide-prrb-vat" className="text-foreground text-xl font-semibold tracking-tight">
          부가가치세(VAT) 확인
        </h2>
        <p>
          공인중개사가 일반과세자인 경우 중개수수료에 VAT 10%가 추가됩니다. 계약 전 부가세 포함 여부를 반드시 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-prrb-limit-check">
        <h2 id="guide-prrb-limit-check" className="text-foreground text-xl font-semibold tracking-tight">
          전매제한 여부 사전 확인 필수
        </h2>
        <p>
          2023년 4월 주택법 시행령 개정으로 수도권 최대 전매제한 기간이 3년으로 단축됐습니다. 전매제한 기간 내 거래하면 주택법
          위반으로 3년 이하 징역 또는 3,000만 원 이하 벌금이 부과됩니다. 중개수수료를 계산하기 전에 전매제한 기간이 경과했는지
          반드시 확인해야 합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 분양권 중개수수료 계산 기준은 공인중개사법 시행규칙 제20조에 근거합니다. 정확한 요율은 국토교통부(molit.go.kr) 또는
          한국공인중개사협회(kar.or.kr)에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개보수 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 납입금과 프리미엄을 입력하면 중개수수료를 바로 계산해볼 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
