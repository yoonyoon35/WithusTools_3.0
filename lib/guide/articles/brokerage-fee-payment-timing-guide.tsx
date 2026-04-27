import Link from "next/link";

export const brokerageFeePaymentTimingGuideMeta = {
  slug: "brokerage-fee-payment-timing-guide",
  title: "중개수수료 납부 시기",
  description:
    "법적 원칙(잔금일), 거래 유형별 일반적인 납부 시기, 분할 납부 등 실무 관행, 취소·해제 시 반환 여부를 표로 정리했습니다.",
  updated: "2026년 4월 28일",
} as const;

export function BrokerageFeePaymentTimingGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-bfpt-intro">
        <p>
          중개수수료 납부 시기는 법으로 정해진 원칙이 있지만, 실무에서는 계약 당사자와 공인중개사 간 약정으로 달리 정하는 경우가
          많습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfpt-law">
        <h2 id="guide-bfpt-law" className="text-foreground text-xl font-semibold tracking-tight">
          법적 원칙
        </h2>
        <p>
          중개수수료 지급 시기는 공인중개사와 의뢰인 간 약정에 따르되, 약정이 없을 때에는 거래대금 지급이 완료된 날(잔금일)에
          지급합니다.
        </p>
        <p>별도 약정이 없으면 잔금일이 법적 납부 기준일입니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfpt-by-type">
        <h2 id="guide-bfpt-by-type" className="text-foreground text-xl font-semibold tracking-tight">
          거래 유형별 일반적인 납부 시기
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거래 유형별 일반적인 납부 시기
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거래 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반적인 납부 시기
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매
                </th>
                <td className="border-border border-b px-3 py-2.5">잔금 지급일 (잔금일)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세
                </th>
                <td className="border-border border-b px-3 py-2.5">잔금 지급일 또는 입주일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  월세
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 체결일 또는 입주일</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  분양권 전매
                </th>
                <td className="px-3 py-2.5">계약 체결일</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfpt-practice">
        <h2 id="guide-bfpt-practice" className="text-foreground text-xl font-semibold tracking-tight">
          실무에서 자주 쓰이는 납부 방식
        </h2>
        <p>
          법적 원칙은 잔금일 일시 납부이지만, 실무에서는 아래 두 가지 방식이 혼용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              실무에서 자주 쓰이는 납부 방식
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방식
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  특징
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금일 일시 납부
                </th>
                <td className="border-border border-b px-3 py-2.5">잔금 지급 당일 전액 납부</td>
                <td className="border-border border-b px-3 py-2.5">법적 원칙, 가장 일반적</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  분할 납부
                </th>
                <td className="px-3 py-2.5">계약금 시점 일부, 잔금일 나머지 납부</td>
                <td className="px-3 py-2.5">사전 약정 필요</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          분할 납부 시 계약금 시점에 납부하는 금액은 통상 수수료의 50% 수준이나, 금액은 공인중개사와 협의해 결정합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfpt-checklist">
        <h2 id="guide-bfpt-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          납부 전 반드시 확인해야 할 사항
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              납부 전 확인 사항
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
                  수수료 금액 서면 확정
                </th>
                <td className="border-border border-b px-3 py-2.5">계약서 특약란에 수수료 금액 명시</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부가세 포함 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">일반과세자 공인중개사는 VAT 10% 별도</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  영수증 발급
                </th>
                <td className="border-border border-b px-3 py-2.5">현금영수증 또는 세금계산서 요청</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  납부 방식 약정
                </th>
                <td className="px-3 py-2.5">일시·분할 여부 계약 시 명확히 확정</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          수수료 금액을 구두로만 합의하고 계약서에 명시하지 않으면 이후 분쟁이 발생할 수 있습니다. 계약서 특약란에 「중개수수료는
          금 OOO원(부가세 포함/별도)으로 한다」고 기재하는 것이 안전합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfpt-cancel">
        <h2 id="guide-bfpt-cancel" className="text-foreground text-xl font-semibold tracking-tight">
          계약이 취소·해제된 경우 수수료 반환 여부
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취소·해제 시 수수료 반환
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수수료 반환 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매수인·매도인 합의 해제
                </th>
                <td className="border-border border-b px-3 py-2.5">반환 의무 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일방 당사자 귀책으로 계약 무효·취소
                </th>
                <td className="border-border border-b px-3 py-2.5">귀책 당사자에게 반환 청구 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공인중개사 과실로 계약 무효·취소
                </th>
                <td className="border-border border-b px-3 py-2.5">공인중개사에게 손해배상 청구 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  계약금만 지급하고 잔금 전 해제
                </th>
                <td className="px-3 py-2.5">이미 납부한 수수료 반환 청구 가능 여부는 약정에 따름</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          계약이 성사되지 않은 경우 원칙적으로 수수료를 받을 수 없습니다. 단, 계약 성사 후 당사자 사정으로 해제된 경우는
          다릅니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfpt-long-schedule">
        <h2 id="guide-bfpt-long-schedule" className="text-foreground text-xl font-semibold tracking-tight">
          중도금·잔금 일정이 길어지는 경우 주의사항
        </h2>
        <p>
          분양 아파트처럼 계약에서 잔금까지 기간이 1~2년 이상 걸리는 경우, 납부 시기를 계약 시 명확히 약정하지 않으면 분쟁이
          발생할 수 있습니다. 이 경우 잔금일 납부 원칙을 적용하거나, 계약 체결 시와 잔금 시 분할 납부 방식으로 사전에 약정하는
          것이 일반적입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfpt-receipt">
        <h2 id="guide-bfpt-receipt" className="text-foreground text-xl font-semibold tracking-tight">
          현금영수증·세금계산서 발급
        </h2>
        <p>
          중개수수료 납부 시 현금영수증 또는 세금계산서를 반드시 요청해야 합니다. 현금영수증은 연말정산 소득공제에 활용할 수
          있으며, 공인중개사가 일반과세자인 경우 세금계산서 발급도 가능합니다. 발급을 거부하거나 영수증 없이 현금 납부를 요구하는
          경우 국세청 신고 대상이 됩니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 중개수수료 납부 시기와 방식은 당사자 간 약정으로 달리 정할 수 있습니다. 분쟁 예방을 위해 계약 전 수수료 금액·납부
          시기·VAT 포함 여부를 서면으로 확정할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개보수 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 거래금액에 따른 중개수수료는 중개보수 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
