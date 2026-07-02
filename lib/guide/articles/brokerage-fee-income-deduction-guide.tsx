import Link from "next/link";

export const brokerageFeeIncomeDeductionGuideMeta = {
  slug: "brokerage-fee-income-deduction-guide",
  title: "중개수수료 소득공제 방법",
  description:
    "2026년 4월 기준 중개수수료 소득공제 기본 요건, 대상 거래, 현금영수증 발급·신고, VAT 처리, 절감 효과, 양도세 활용법을 표로 정리했습니다.",
  updated: "2026년 5월 5일",
} as const;

export function BrokerageFeeIncomeDeductionGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-bfid-overview">
        <h2 id="guide-bfid-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          부동산 중개수수료는 연말정산 시 30%의 소득공제를 받을 수 있습니다. 공제한도는 연간 200만 원이며, 현금영수증을 발급받아야
          공제가 가능합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-basic">
        <h2 id="guide-bfid-basic" className="text-foreground text-xl font-semibold tracking-tight">
          소득공제 기본 조건
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소득공제 요건 요약
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
                  공제율
                </th>
                <td className="border-border border-b px-3 py-2.5">30%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연간 공제한도
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원 (신용카드·현금영수증 통합 한도)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  최소 수수료 금액
                </th>
                <td className="border-border border-b px-3 py-2.5">10만 원 이상</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  필요 조건
                </th>
                <td className="border-border border-b px-3 py-2.5">현금영수증 또는 카드 결제 영수증 보유</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  적용 대상
                </th>
                <td className="px-3 py-2.5">근로소득자 (연말정산 대상자)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-target">
        <h2 id="guide-bfid-target" className="text-foreground text-xl font-semibold tracking-tight">
          소득공제 대상 거래 유형
        </h2>
        <p>
          소득공제 대상 중개수수료는 주택 매매·임대차·신축·재건축·재개발, 분양권 매매·전매, 토지 매매·임대차 중개수수료입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거래 유형별 소득공제 가능 여부
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거래 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소득공제 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  아파트·빌라 매매
                </th>
                <td className="border-border border-b px-3 py-2.5">✅</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세·월세 임대차
                </th>
                <td className="border-border border-b px-3 py-2.5">✅</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양권 전매
                </th>
                <td className="border-border border-b px-3 py-2.5">✅</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  토지 매매
                </th>
                <td className="border-border border-b px-3 py-2.5">✅</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  상가·오피스텔 (업무용)
                </th>
                <td className="px-3 py-2.5">❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-receipt">
        <h2 id="guide-bfid-receipt" className="text-foreground text-xl font-semibold tracking-tight">
          현금영수증 발급 방법
        </h2>
        <p>
          부동산 중개업은 현금영수증 의무발행 업종으로, 수수료가 10만 원 이상이면 반드시 발급해줘야 합니다. 발급을 거부하면
          국세청에 신고할 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              결제 수단별 영수증 처리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  결제 방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  영수증 처리
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  카드 결제
                </th>
                <td className="border-border border-b px-3 py-2.5">국세청 간소화 서비스에 자동 반영</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  현금·계좌이체
                </th>
                <td className="px-3 py-2.5">공인중개사에게 현금영수증 발급 요청 필수</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          현금이나 계좌이체로 납부한 경우 공인중개사에게 직접 「현금영수증 발급해 주세요」라고 요청해야 합니다. 별도 요청이 없으면
          발급되지 않는 경우가 많습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfid-retroactive">
        <h2 id="guide-bfid-retroactive" className="text-foreground text-xl font-semibold tracking-tight">
          거래 후 현금영수증 소급 발급
        </h2>
        <p>
          거래 시점에 현금영수증을 발급받지 못했더라도 거래일로부터 5년 이내에 공인중개사에게 발급을 요청할 수 있습니다.
        </p>
        <p>
          5년이 지나지 않았다면 중개사를 찾아 소급 발급을 요청할 수 있고, 중개사가 발급을 거부하는 경우 국세청
          홈택스(hometax.go.kr)에서 현금영수증 미발급 신고가 가능합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-report">
        <h2 id="guide-bfid-report" className="text-foreground text-xl font-semibold tracking-tight">
          현금영수증 미발급 신고 방법 및 포상금
        </h2>
        <p>
          중개업소가 현금영수증 발급을 거부할 경우 국세청 홈택스에서 현금영수증 미발급 신고가 가능합니다. 위반 사실이 확인되면
          미발급 금액의 20%가 포상금으로 지급됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신고 경로·포상금·제재
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
                  신고처
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  국세청 홈택스(hometax.go.kr) → 상담/불복/신고 → 현금영수증 미발급 신고
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  포상금
                </th>
                <td className="border-border border-b px-3 py-2.5">미발급 금액의 20%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  중개업소 제재
                </th>
                <td className="px-3 py-2.5">미발급 금액의 20% 가산세 부과</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-vat">
        <h2 id="guide-bfid-vat" className="text-foreground text-xl font-semibold tracking-tight">
          부가세(VAT) 포함 시 현금영수증 처리
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              과세 유형별 VAT·현금영수증 기준
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공인중개사 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  부가세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  현금영수증 발급 금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반과세자
                </th>
                <td className="border-border border-b px-3 py-2.5">10% 별도 청구 가능</td>
                <td className="border-border border-b px-3 py-2.5">수수료 + 부가세 합계금액</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  간이과세자 (연매출 4,800만 원 미만)
                </th>
                <td className="border-border border-b px-3 py-2.5">청구 불가</td>
                <td className="border-border border-b px-3 py-2.5">수수료 금액</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  간이과세자 (연매출 4,800만 원 이상)
                </th>
                <td className="px-3 py-2.5">4% 수준 청구 가능</td>
                <td className="px-3 py-2.5">수수료 + 부가세 합계금액</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          간이과세자인데 부가세 10%를 요구하는 것은 불법입니다. 사업자등록증을 확인하거나 국세청 홈택스에서 사업자등록번호를
          조회하면 일반과세자 여부를 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-benefit">
        <h2 id="guide-bfid-benefit" className="text-foreground text-xl font-semibold tracking-tight">
          소득공제 절감 효과 예시
        </h2>
        <p className="text-muted-foreground text-sm">연봉 5,000만 원 근로자, 중개수수료 200만 원 납부 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              절감 효과 예시
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
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소득공제 금액
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원 × 30% = 60만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 세율 (예시)
                </th>
                <td className="border-border border-b px-3 py-2.5">24%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  예상 세금 환급액
                </th>
                <td className="px-3 py-2.5">60만 원 × 24% = 약 14만 4천 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>실제 환급액은 총급여·공제 항목·적용 세율에 따라 달라집니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfid-capital-gains">
        <h2 id="guide-bfid-capital-gains" className="text-foreground text-xl font-semibold tracking-tight">
          양도소득세 절세에도 활용 가능
        </h2>
        <p>
          부동산 중개수수료는 양도소득세 계산 시 양도차익에서 차감되는 필요경비로 인정됩니다. 부동산 매도 시에도 현금영수증을
          챙기면 양도세를 줄이는 데 활용할 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              활용 방식 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  활용 방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  근로소득자 (매수·임차)
                </th>
                <td className="border-border border-b px-3 py-2.5">연말정산 현금영수증 소득공제</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  부동산 매도자
                </th>
                <td className="px-3 py-2.5">양도소득세 필요경비 공제</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfid-year-end">
        <h2 id="guide-bfid-year-end" className="text-foreground text-xl font-semibold tracking-tight">
          연말정산 반영 방법
        </h2>
        <p>
          현금영수증으로 발급받은 중개수수료는 국세청 연말정산 간소화 서비스(hometax.go.kr)에서 자동으로 조회됩니다. 카드로 결제한
          경우도 동일하게 자동 반영됩니다. 간소화 서비스에서 조회되지 않는 경우 공인중개사에게 현금영수증 발급 여부를 재확인해야
          합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 소득공제 한도와 공제율은 소득세법 개정에 따라 변동될 수 있습니다. 정확한 공제 적용 방법은 국세청
          홈택스(hometax.go.kr) 또는 국세상담센터(126)에서 확인할 것을 권장합니다.
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
