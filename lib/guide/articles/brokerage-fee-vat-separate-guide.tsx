import Link from "next/link";

export const brokerageFeeVatSeparateGuideMeta = {
  slug: "brokerage-fee-vat-separate-guide",
  title: "중개수수료 부가세(VAT) 별도인가",
  description:
    "2026년 6월 기준 중개수수료 부가세 별도·포함 여부, 일반·간이과세자 차이, 매매·전세 실납부 예시, 계약서 기재 방법과 확인 절차를 표로 정리했습니다.",
  updated: "2026년 6월 1일",
} as const;

export function BrokerageFeeVatSeparateGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-bfvs-intro">
        <h2 id="guide-bfvs-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 기준
        </h2>
        <p>
          중개수수료 상한요율은 <strong>공급가(수수료 본액)</strong>에 적용됩니다. 공인중개사가{" "}
          <strong>일반과세자</strong>이면 여기에 부가가치세 10%를 <strong>별도</strong>로 받는 것이 원칙입니다. 「수수료
          200만 원」이라고만 들었는데 잔금일 220만 원을 청구받는 경우가 대부분 이 때문입니다.{" "}
          <Link href="/brokerage-fee-calculator" className="text-primary underline-offset-4 hover:underline">
            중개수수료 계산기
          </Link>
          는 상한요율 기준 공급가를 보여 주며, 부가세는 별도로 더해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfvs-answer">
        <h2 id="guide-bfvs-answer" className="text-foreground text-xl font-semibold tracking-tight">
          한 줄로 정리하면
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              과세 유형별 부가세
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
                  실무상 의미
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반과세자
                </th>
                <td className="border-border border-b px-3 py-2.5">수수료의 10% 별도</td>
                <td className="border-border border-b px-3 py-2.5">200만 원 → 실납 220만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  간이과세자(연매출 4,800만 원 미만)
                </th>
                <td className="border-border border-b px-3 py-2.5">10% 청구 불가</td>
                <td className="border-border border-b px-3 py-2.5">수수료 금액 그대로</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  간이과세자(연매출 4,800만 원 이상)
                </th>
                <td className="px-3 py-2.5">약 4% 수준만 가능</td>
                <td className="px-3 py-2.5">10% 요구 시 확인 필요</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          「부가세 별도」는 수수료와 세금을 나눠 받는다는 뜻이고, 「부가세 포함」이면 견적 금액 안에 세금까지 들어
          있습니다. 중개사마다 다르므로 <strong>계약 전에 한 번 확인</strong>하는 것이 맞습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfvs-cap">
        <h2 id="guide-bfvs-cap" className="text-foreground text-xl font-semibold tracking-tight">
          상한요율과 부가세는 따로 계산
        </h2>
        <p>
          공인중개사법상 상한요율은 부가세를 포함하지 않습니다. 5억 원 아파트 매매에서 상한 0.4%를 적용하면 공급가는
          200만 원이고, 일반과세자라면 부가세 20만 원이 더해져 1인당 <strong>220만 원</strong>을 내게 됩니다. 부가세
          20만 원까지 합쳐 상한을 넘길 수는 없습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              5억 원 매매, 일반과세자(1인당)
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
                  중개수수료(공급가)
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부가세(10%)
                </th>
                <td className="border-border border-b px-3 py-2.5">20만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실납부액
                </th>
                <td className="px-3 py-2.5">220만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          상한요율표·구간별 예시는{" "}
          <Link href="/guide/brokerage-fee-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
            중개수수료 요율표
          </Link>
          와{" "}
          <Link href="/guide/apartment-brokerage-fee-guide" className="text-primary underline-offset-4 hover:underline">
            아파트 매매 중개수수료
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfvs-cases">
        <h2 id="guide-bfvs-cases" className="text-foreground text-xl font-semibold tracking-tight">
          거래 유형별 실납부 예시
        </h2>
        <p className="text-muted-foreground text-sm">상한요율·일반과세자·1인당 기준</p>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">매매 8억 원</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                공급가·부가세·실납부
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    구분
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    수수료(0.4%)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">320만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    부가세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">32만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    실납부
                  </th>
                  <td className="px-3 py-2.5">352만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">전세 보증금 3억 원</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                공급가·부가세·실납부
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    구분
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    수수료(0.3%)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">90만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    부가세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">9만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    실납부
                  </th>
                  <td className="px-3 py-2.5">99만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">「부가세 포함 200만 원」으로 합의한 경우</h3>
          <p>
            견적이 부가세 포함 200만 원이면 공급가는 약 181만 8천 원, 부가세 약 18만 2천 원으로 나뉩니다. 반대로 공급가
            200만 원 + 부가세 별도면 실납 220만 원입니다. 같은 「200만 원」이라도 표현에 따라 40만 원 차이가 납니다.
          </p>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfvs-check">
        <h2 id="guide-bfvs-check" className="text-foreground text-xl font-semibold tracking-tight">
          과세 유형 확인 방법
        </h2>
        <p>부가세를 얼마까지 받을 수 있는지는 중개사의 사업자 유형에 달려 있습니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>중개사무소에 <strong>사업자등록증</strong> 사본 요청 — 일반·간이과세 구분 확인</li>
          <li>국세청 <strong>홈택스</strong> 사업자등록번호 조회</li>
          <li>간이과세자에게 10%를 요구받으면 거절하거나 관할 세무서에 문의</li>
        </ul>
        <p>
          소득공제용 현금영수증은 <strong>실제 납부한 합계(수수료+부가세)</strong>로 발급받아야 합니다. 자세한 처리는{" "}
          <Link href="/guide/brokerage-fee-income-deduction-guide" className="text-primary underline-offset-4 hover:underline">
            중개수수료 소득공제
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfvs-contract">
        <h2 id="guide-bfvs-contract" className="text-foreground text-xl font-semibold tracking-tight">
          계약서에 어떻게 적어야 하나
        </h2>
        <p>
          구두로 「200만 원」만 합의하고 특약에 적지 않으면, 잔금일 부가세를 두고 다투는 경우가 많습니다. 아래처럼
          금액과 포함 여부를 함께 적는 편이 낫습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              특약 기재 예시
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  표현
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실납부(일반과세, 공급가 200만 원 가정)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  「중개수수료 200만 원(부가세 별도)」
                </th>
                <td className="border-border border-b px-3 py-2.5">220만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  「중개수수료 220만 원(부가세 포함)」
                </th>
                <td className="border-border border-b px-3 py-2.5">220만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  「중개수수료 200만 원」(포함·별도 미기재)
                </th>
                <td className="px-3 py-2.5">분쟁 소지 있음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          지급 시기와 함께 정리하려면{" "}
          <Link href="/guide/brokerage-fee-payment-timing-guide" className="text-primary underline-offset-4 hover:underline">
            중개수수료 지급 시기
          </Link>
          가이드도 함께 보세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfvs-mistakes">
        <h2 id="guide-bfvs-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          자주 생기는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「상한이 200만 원이니 200만 원만 내면 된다」</strong> — 일반과세자면 220만 원이 맞습니다. 상한은
            공급가 기준입니다.
          </li>
          <li>
            <strong>「부가세는 중개사가 내는 것 아닌가」</strong> — 중개사가 국세로 납부하지만, 의뢰인에게는 별도
            청구하는 구조입니다.
          </li>
          <li>
            <strong>「간이과세라 VAT 없다」</strong> — 맞을 수도 있지만, 연매출 4,800만 원 이상 간이과세자는 낮은
            요율만 가능합니다. 10%는 확인이 필요합니다.
          </li>
          <li>
            <strong>「매도·매수 합쳐 한 번만 내면 된다」</strong> — 쌍방 각각 부담이 원칙이라, VAT도 1인당 따로
            계산됩니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfvs-checklist">
        <h2 id="guide-bfvs-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          계약 전 확인
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              체크리스트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 w-24 font-semibold">
                  확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  공인중개사 일반·간이과세 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  수수료 공급가와 부가세 포함·별도 구분
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  계약서 특약란에 실납부액 기재
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  잔금일 자금(수수료+부가세) 별도 준비
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 부가세·과세 유형은 국세법·공인중개사법 등에 따르며, 중개사 개별 상황에 따라 달라질 수 있습니다. 분쟁 시
          한국공인중개사협회(kar.or.kr) 분쟁조정 또는 관할 구청에 문의할 수 있습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개수수료 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 거래금액·유형별 상한요율 수수료는 중개수수료 계산기에서 확인할 수 있습니다. 부가세는 별도로 더하세요.
          </Link>
        </p>
      </aside>
    </>
  );
}
