import Link from "next/link";
import type { ReactNode } from "react";

export const brokerageFeeIncomeDeductionGuideMeta = {
  slug: "brokerage-fee-income-deduction-guide",
  title: "중개수수료 소득공제 방법",
  description:
    "중개수수료를 현금영수증으로 받으면 연말정산 신용카드 등 소득공제에 합산됩니다. 총급여 25% 초과분만 공제, 현금영수증 30%·신용카드 15%, 연 한도 300만 원(총급여 7천만 원 초과 250만 원), 미발급 신고와 절감 효과 예시를 정리했습니다. 2026년 10월 기준.",
  updated: "2026년 10월 30일",
} as const;

type TableProps = {
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly ReactNode[])[];
  minWidth?: string;
};

function GuideTable({ caption, headers, rows, minWidth = "min-w-[30rem]" }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className={`w-full ${minWidth} border-collapse text-left text-sm`}>
        <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
          {caption}
        </caption>
        <thead>
          <tr className="bg-muted/40">
            {headers.map((h) => (
              <th key={h} scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const last = i === rows.length - 1;
            const cell = last ? "px-3 py-2.5" : "border-border border-b px-3 py-2.5";
            return (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : undefined}>
                {row.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className={`${cell} font-medium`}>
                      {c}
                    </th>
                  ) : (
                    <td key={j} className={cell}>
                      {c}
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function BrokerageFeeIncomeDeductionGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-bfid-overview">
        <h2 id="guide-bfid-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 10월 30일 기준
        </h2>
        <p>
          중개수수료에는 별도의 소득공제 제도가 없습니다. 현금영수증(또는 카드)으로 결제한 중개수수료가 연말정산의{" "}
          <strong>신용카드 등 사용금액 소득공제</strong>에 다른 소비와 함께 합산됩니다. 총급여의 25%를 넘게 쓴 부분에 대해서만
          현금영수증은 <strong>30%</strong>, 신용카드는 <strong>15%</strong>가 공제되고, 연간 한도가 있습니다. 「중개수수료의
          30%를 돌려받는다」는 뜻이 아닙니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-basic">
        <h2 id="guide-bfid-basic" className="text-foreground text-xl font-semibold tracking-tight">
          소득공제 기본 조건
        </h2>
        <GuideTable
          caption="소득공제 요건 요약(조세특례제한법 제126조의2)"
          headers={["항목", "내용"]}
          minWidth="min-w-[36rem]"
          rows={[
            ["제도", "신용카드 등 사용금액 소득공제의 일부(중개수수료 전용 공제 아님)"],
            ["공제 문턱", "신용카드·현금영수증 등 사용액 합계가 총급여의 25%를 넘는 부분부터 공제"],
            ["공제율", "현금영수증·체크카드 30%, 신용카드 15%"],
            [
              "연간 한도",
              "총급여 7천만 원 이하 300만 원, 초과 250만 원(부양 자녀가 있으면 한도 확대: 7천만 원 이하 350만~400만 원, 초과 275만~300만 원)",
            ],
            ["최소 금액", "현금영수증 의무발급은 건당 10만 원 이상(요청하면 10만 원 미만도 발급 가능)"],
            ["적용 대상", "근로소득자(연말정산 대상자) — 본인과 소득 요건을 충족하는 배우자·직계존비속 사용분"],
            ["적용 기한", "2028년 12월 31일까지 사용한 금액"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          한도 초과분에는 전통시장·대중교통·문화체육 사용분 추가공제가 별도로 있습니다. 중개수수료는 해당하지 않으므로 여기서는
          다루지 않습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-target">
        <h2 id="guide-bfid-target" className="text-foreground text-xl font-semibold tracking-tight">
          소득공제 대상 거래 유형
        </h2>
        <p>
          근로소득자 본인이 사업과 관계없이 주택·분양권·토지 등을 거래하면서 부담한 중개수수료를 현금영수증이나 카드로
          결제하면 일반적으로 공제 대상에 포함됩니다. 사업과 관련된 지출은 소득공제가 아니라 사업자의 필요경비·매입세액 공제
          대상입니다.
        </p>
        <GuideTable
          caption="거래 유형별 소득공제 가능 여부(일반적인 경우)"
          headers={["거래 유형", "소득공제 여부"]}
          rows={[
            ["아파트·빌라 매매", "✅"],
            ["전세·월세 임대차", "✅"],
            ["분양권 전매", "✅"],
            ["토지 매매", "✅"],
            ["상가·오피스텔(업무용·사업 관련)", "❌ 사업 관련 비용은 소득공제 대상이 아님"],
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-receipt">
        <h2 id="guide-bfid-receipt" className="text-foreground text-xl font-semibold tracking-tight">
          현금영수증 발급 방법
        </h2>
        <p>
          부동산 중개업은 현금영수증 의무발행 업종이어서, 건당 10만 원 이상 현금 거래는 소비자가 요청하지 않아도 발급해야
          합니다. 발급을 거부하면 국세청에 신고할 수 있습니다.
        </p>
        <GuideTable
          caption="결제 수단별 영수증 처리"
          headers={["결제 방법", "영수증 처리"]}
          rows={[
            ["카드 결제", "국세청 간소화 서비스에 자동 반영(신용카드는 공제율 15%). 중개업소는 카드 가맹이 의무가 아니라 카드를 거절해도 위반이 아님"],
            ["현금·계좌이체", "현금영수증 발급 필수(공제율 30%). 요청하지 않으면 지정번호로 발급되어 내 연말정산에 반영되지 않을 수 있음"],
          ]}
        />
        <p>
          현금이나 계좌이체로 납부했다면 공인중개사에게 「소득공제용 현금영수증 발급해 주세요」라고 요청하고 본인 휴대전화·카드
          번호를 알려야 합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfid-retroactive">
        <h2 id="guide-bfid-retroactive" className="text-foreground text-xl font-semibold tracking-tight">
          거래 후 현금영수증을 못 받았다면
        </h2>
        <p>
          거래 당시 현금영수증을 받지 못했더라도 <strong>거래일로부터 5년 이내</strong>라면 방법이 있습니다. 중개사에게 소급
          발급을 요청하거나, 거부당하면 이체 내역·계약서 등 거래증명서류를 첨부해 국세청 홈택스·손택스에서 「현금거래 확인
          신청」을 하면 세무서 확인 후 소득공제가 인정됩니다.
        </p>
        <p className="text-muted-foreground text-sm">
          현금거래 확인 신청은 소득공제용이며 신고포상금 지급 대상은 아닙니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-report">
        <h2 id="guide-bfid-report" className="text-foreground text-xl font-semibold tracking-tight">
          현금영수증 미발급 신고 방법 및 포상금
        </h2>
        <p>
          건당 10만 원 이상 현금 거래에 중개업소가 현금영수증을 발급하지 않으면 거래일로부터 5년 이내에 미발급 신고를 할 수
          있습니다. 미발급 금액의 20%가 신고포상금으로 지급되며, 건당 25만 원·인별 연간 100만 원 한도입니다.
        </p>
        <GuideTable
          caption="신고 경로·포상금·제재"
          headers={["항목", "내용"]}
          minWidth="min-w-[36rem]"
          rows={[
            [
              "신고처",
              "국세청 홈택스(hometax.go.kr) → 상담·불복·제보 → 현금영수증·신용카드 미발급/발급거부 제보 → 현금영수증 미발급 신고",
            ],
            ["포상금", "미발급 금액의 20%(건당 25만 원, 인별 연 100만 원 한도)"],
            ["중개업소 제재", "미발급 금액의 20% 가산세(착오·누락으로 10일 이내 자진 발급하면 50% 감면)"],
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-vat">
        <h2 id="guide-bfid-vat" className="text-foreground text-xl font-semibold tracking-tight">
          부가세(VAT) 포함 시 현금영수증 처리
        </h2>
        <p>
          소득공제는 실제 결제한 금액(수수료 + 부가세)을 기준으로 합니다. 부가세 처리는 중개사의 과세 유형에 따라 다릅니다.
          자세한 내용은{" "}
          <Link href="/guide/brokerage-fee-vat-separate-guide" className="text-primary underline-offset-4 hover:underline">
            중개수수료 부가세 가이드
          </Link>
          를 참고하세요.
        </p>
        <GuideTable
          caption="과세 유형별 VAT·현금영수증 기준"
          headers={["공인중개사 유형", "부가세", "현금영수증 발급 금액"]}
          minWidth="min-w-[40rem]"
          rows={[
            [
              "일반과세자(직전 연도 공급대가 1억 400만 원 이상)",
              "수수료의 10% 별도 청구",
              "수수료 + 부가세 합계금액",
            ],
            [
              "간이과세자(직전 연도 공급대가 1억 400만 원 미만)",
              "부동산 중개업 부가가치율이 40%라 실제 납부세액은 공급대가의 4%. 의뢰인에게 받는 부가세 상당액은 약정 사항(실무상 4% 수준)",
              "실제 결제한 합계금액",
            ],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          법제처 해석에 따르면 간이과세자도 법정 중개보수와 별도로 부가세 상당액을 받을 수 있지만, 법정 중개보수(상한)는 부가세를
          뺀 금액 기준입니다. 사업자등록증이나 홈택스 사업자등록번호 조회로 과세 유형을 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-benefit">
        <h2 id="guide-bfid-benefit" className="text-foreground text-xl font-semibold tracking-tight">
          소득공제 절감 효과 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          가정: 총급여 5,000만 원(공제 문턱 1,250만 원), 신용카드 1,000만 원, 체크카드·현금영수증 800만 원 사용, 여기에
          중개수수료 200만 원을 현금영수증으로 추가 결제
        </p>
        <GuideTable
          caption="중개수수료 반영 전·후 공제액 비교"
          headers={["항목", "계산", "금액"]}
          minWidth="min-w-[38rem]"
          rows={[
            ["반영 전 공제액", "신용 1,000만 × 15% + 현금영수증 등 800만 × 30% − 문턱분 225만", "165만 원"],
            ["반영 후 공제액", "신용 1,000만 × 15% + 현금영수증 등 1,000만 × 30% − 문턱분 225만", "225만 원"],
            ["중개수수료로 늘어난 공제액", "200만 × 30%", "60만 원"],
            ["세금 절감(예시)", "60만 × 소득세율 15% + 지방소득세 10% (총 16.5%)", "약 9만 9천 원"],
          ]}
        />
        <p>
          「문턱분 225만 원」은 신용카드 1,000만 원의 15%(150만 원)와, 문턱 1,250만 원 중 나머지 250만 원의 30%(75만 원)를
          더한 값입니다. 이 예시는 연간 한도 300만 원 이내라서 그대로 공제됩니다. 다음에 해당하면 효과가 달라집니다.
        </p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm leading-relaxed">
          <li>한 해 사용액 합계가 총급여의 25%(예: 1,250만 원)에 못 미치면 공제가 0원입니다.</li>
          <li>이미 연간 한도(300만 원 등)를 채웠다면 중개수수료를 더해도 추가 공제가 없습니다.</li>
          <li>세율은 과세표준 구간에 따라 6%~45%이므로 절감액은 사람마다 다릅니다.</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-capital-gains">
        <h2 id="guide-bfid-capital-gains" className="text-foreground text-xl font-semibold tracking-tight">
          양도소득세 절세에도 활용 가능
        </h2>
        <p>
          부동산 중개수수료는 양도소득세 계산 시 양도차익에서 차감되는 필요경비로 인정됩니다. 부동산 매도 시에도 영수증과 이체
          내역을 챙기면 양도세를 줄이는 데 활용할 수 있습니다.
        </p>
        <GuideTable
          caption="활용 방식 요약"
          headers={["구분", "활용 방법"]}
          rows={[
            ["근로소득자(매수·임차)", "연말정산 신용카드 등 소득공제(현금영수증 30%)"],
            ["부동산 매도자", "양도소득세 필요경비 공제"],
          ]}
        />
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfid-year-end">
        <h2 id="guide-bfid-year-end" className="text-foreground text-xl font-semibold tracking-tight">
          연말정산 반영 방법
        </h2>
        <p>
          현금영수증으로 발급받은 중개수수료는 국세청 연말정산 간소화 서비스(hometax.go.kr)에서 조회됩니다. 카드로 결제한 경우도
          동일하게 반영됩니다. 간소화 서비스에서 조회되지 않으면 공인중개사에게 현금영수증 발급 여부를 재확인하세요.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 소득공제 한도와 공제율은 세법 개정에 따라 바뀔 수 있으며, 이 글은 조세특례제한법 제126조의2(2026년 9월 18일 시행분)
          기준입니다. 정확한 적용은 국세청 홈택스 또는 국세상담센터(126)에서 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개수수료 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 거래금액에 따른 중개수수료는 중개수수료 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
