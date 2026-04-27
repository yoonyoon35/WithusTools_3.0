import Link from "next/link";

export const apartmentBrokerageFeeGuideMeta = {
  slug: "apartment-brokerage-fee-guide",
  title: "아파트 매매 중개수수료 얼마나 나올까",
  description:
    "2026년 4월 기준 아파트 매매 중개 상한요율표, 매매가별 수수료 예시, 9억 구간 경계, 부가세·지급 시기와 흔한 실수를 표로 정리했습니다.",
  updated: "2026년 4월 28일",
} as const;

export function ApartmentBrokerageFeeGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-abf-intro">
        <h2 id="guide-abf-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          아파트 매매 중개수수료는 거래금액에 상한요율을 곱한 금액 이내에서 공인중개사와 협의해 결정합니다. 매도인과 매수인이 각각
          중개사에게 별도로 지급하는 것이 원칙입니다.
        </p>
        <p className="text-muted-foreground text-sm">
          2026년 기준 아파트 매매 상한요율은 5,000만 원 미만 0.6%(한도 25만 원), 5,000만 원 이상 2억 원 미만 0.5%(한도 80만 원), 2억
          원 이상 9억 원 미만 0.4%, 9억 원 이상 12억 원 미만 0.5%, 12억 원 이상 15억 원 미만 0.6%, 15억 원 이상 0.7%입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-abf-cap-table">
        <h2 id="guide-abf-cap-table" className="text-foreground text-xl font-semibold tracking-tight">
          매매 상한요율표
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거래금액 구간별 상한요율·한도액
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
        <p>상한요율은 최대치입니다. 상한 이내에서 공인중개사와 협의해 낮출 수 있습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-abf-examples">
        <h2 id="guide-abf-examples" className="text-foreground text-xl font-semibold tracking-tight">
          매매가별 중개수수료 예시(상한요율 기준)
        </h2>
        <p className="text-muted-foreground text-sm">매도인·매수인 각각 부담 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1인당 수수료·쌍방 합계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  1인당 수수료
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  쌍방 합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.6%</td>
                <td className="border-border border-b px-3 py-2.5">18만 원(한도 25만 원)</td>
                <td className="border-border border-b px-3 py-2.5">36만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">40만 원(한도 80만 원)</td>
                <td className="border-border border-b px-3 py-2.5">80만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 5,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">75만 원(한도 80만 원)</td>
                <td className="border-border border-b px-3 py-2.5">150만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">120만 원</td>
                <td className="border-border border-b px-3 py-2.5">240만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">280만 원</td>
                <td className="border-border border-b px-3 py-2.5">560만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">450만 원</td>
                <td className="border-border border-b px-3 py-2.5">900만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.6%</td>
                <td className="border-border border-b px-3 py-2.5">720만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,440만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15억 원
                </th>
                <td className="px-3 py-2.5">0.7%</td>
                <td className="px-3 py-2.5">1,050만 원</td>
                <td className="px-3 py-2.5">2,100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-abf-cliff">
        <h2 id="guide-abf-cliff" className="text-foreground text-xl font-semibold tracking-tight">
          9억 원 구간 경계에서 수수료 급등 주의
        </h2>
        <p>
          매매가 9억 원 미만까지는 요율이 0.4%이지만, 9억 원을 넘는 순간 0.5%로 올라갑니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              구간 경계 인근 1인당 수수료(상한요율 기준)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수수료(1인당)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8억 9,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">356만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">450만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  차이
                </th>
                <td className="px-3 py-2.5">94만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          9억 원짜리 아파트와 10억 원짜리 아파트의 수수료 차이가 140만 원에 달하므로, 계약 전에 내 거래 금액이 어느 구간에 해당하는지
          반드시 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-abf-vat">
        <h2 id="guide-abf-vat" className="text-foreground text-xl font-semibold tracking-tight">
          부가가치세(VAT) 별도 여부 확인 필수
        </h2>
        <p>
          공인중개사가 일반과세자인 경우 중개수수료에 VAT 10%가 추가됩니다. 간이과세자는 면제될 수 있으니 거래 전 확인이 필요합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              중개사 과세 유형별 부가세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  부가세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반과세자 공인중개사
                </th>
                <td className="border-border border-b px-3 py-2.5">수수료의 10% 추가</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  간이과세자 공인중개사
                </th>
                <td className="px-3 py-2.5">면제 또는 감면</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          5억 원 아파트 매매 시 상한요율 기준 수수료 200만 원에 부가세 20만 원이 추가되면 실제 납부액은 220만 원이 됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-abf-timing">
        <h2 id="guide-abf-timing" className="text-foreground text-xl font-semibold tracking-tight">
          중개수수료 지급 시기
        </h2>
        <p>
          중개수수료 지급 시기는 공인중개사와 의뢰인 간 약정에 따르되, 약정이 없을 때에는 거래대금 지급이 완료된 날(잔금일)에
          지급합니다.
        </p>
        <p>계약금 지급 시 일부, 잔금 지급 시 나머지를 납부하는 방식으로 약정하는 경우도 있습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-abf-mistakes">
        <h2 id="guide-abf-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          중개수수료 관련 자주 하는 실수
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              실수 유형과 점검 포인트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실수
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상한요율을 고정 금액으로 착각
                </th>
                <td className="border-border border-b px-3 py-2.5">상한요율은 최대치이며 협의 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부가세 포함 여부 미확인
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 전 VAT 포함 여부 반드시 확인</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  구두 합의만 믿음
                </th>
                <td className="border-border border-b px-3 py-2.5">계약서 특약란에 수수료 금액 명시 필수</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  쌍방 부담 원칙 모름
                </th>
                <td className="border-border border-b px-3 py-2.5">매도인·매수인 각각 별도 지급이 원칙</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  구간 경계 미확인
                </th>
                <td className="px-3 py-2.5">9억 원·12억 원·15억 원 경계 구간 요율 급등 주의</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-abf-overcharge">
        <h2 id="guide-abf-overcharge" className="text-foreground text-xl font-semibold tracking-tight">
          과다 청구 시 대처 방법
        </h2>
        <p>
          상한요율을 초과한 수수료를 요구하는 것은 공인중개사법 위반입니다. 과다 청구가 발생하면 중개사에게 요율 근거를 서면으로
          요청하고, 계약 전에 수수료 금액을 계약서 특약란에 확정해두면 분쟁을 예방할 수 있습니다. 분쟁이 발생하면 한국공인중개사협회
          분쟁조정위원회에 조정을 신청할 수 있습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 중개수수료 상한요율은 시·도 조례에 따라 지역별로 다소 차이가 있을 수 있습니다. 정확한 요율은 국토교통부(molit.go.kr) 또는
          한국공인중개사협회(kar.or.kr)에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개수수료 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            매매가를 직접 입력하면 중개수수료를 바로 계산해볼 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
