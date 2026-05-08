import Link from "next/link";

export const ltvDtiDsrComparisonMeta = {
  slug: "ltv-dti-dsr-comparison",
  title: "LTV·DTI·DSR 차이 한눈에 정리",
  description:
    "주택담보대출 심사에 쓰이는 LTV·DTI·DSR의 의미, 계산식, 포함 부채 범위 차이와 한도 산출 예시를 표로 정리했습니다.",
  updated: "2026년 4월 14일",
} as const;

export function LtvDtiDsrComparisonBody() {
  return (
    <>
      <p>
        주택담보대출 심사 시 <abbr title="담보인정비율">LTV</abbr>, <abbr title="총부채상환비율">DTI</abbr>,{" "}
        <abbr title="총부채원리금상환비율">DSR</abbr> 세 가지 규제가 동시에 적용됩니다. 세 규제 중{" "}
        <strong>가장 낮은 금액</strong>이 실제 대출 한도로 결정됩니다.
      </p>

      <section className="space-y-4" aria-labelledby="guide-ltd-core-compare">
        <h2 id="guide-ltd-core-compare" className="text-foreground text-xl font-semibold tracking-tight">
          세 규제 핵심 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              LTV·DTI·DSR 핵심 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  LTV
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  DTI
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  DSR
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  한국어 명칭
                </th>
                <td className="border-border border-b px-3 py-2.5">주택담보인정비율</td>
                <td className="border-border border-b px-3 py-2.5">총부채상환비율</td>
                <td className="border-border border-b px-3 py-2.5">총부채원리금상환비율</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계산 기준
                </th>
                <td className="border-border border-b px-3 py-2.5">담보 주택 가치</td>
                <td className="border-border border-b px-3 py-2.5">연소득</td>
                <td className="border-border border-b px-3 py-2.5">연소득</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  포함 부채 범위
                </th>
                <td className="border-border border-b px-3 py-2.5">해당 없음</td>
                <td className="border-border border-b px-3 py-2.5">주담대 원리금 + 기타 대출 이자</td>
                <td className="border-border border-b px-3 py-2.5">모든 부채 원리금 전액</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  규제 한도(은행권)
                </th>
                <td className="border-border border-b px-3 py-2.5">70%(생애최초 80%)</td>
                <td className="border-border border-b px-3 py-2.5">60%</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  도입 목적
                </th>
                <td className="px-3 py-2.5">담보 가치 대비 과도한 대출 방지</td>
                <td className="px-3 py-2.5">소득 대비 이자 부담 관리</td>
                <td className="px-3 py-2.5">소득 대비 전체 상환 부담 관리</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ltd-formulas">
        <h2 id="guide-ltd-formulas" className="text-foreground text-xl font-semibold tracking-tight">
          각 규제 계산식
        </h2>
        <ul className="bg-muted/30 space-y-2 rounded-md border border-border px-4 py-3 text-sm leading-relaxed">
          <li>
            <strong>LTV</strong> = 대출금액 ÷ 담보 주택 감정가 × 100
          </li>
          <li>
            <strong>DTI</strong> = (주담대 연간 원리금 + 기타 대출 연간 이자) ÷ 연소득 × 100
          </li>
          <li>
            <strong>DSR</strong> = 모든 대출 연간 원리금 합계 ÷ 연소득 × 100
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dti-dsr-diff">
        <h2 id="guide-dti-dsr-diff" className="text-foreground text-xl font-semibold tracking-tight">
          DTI와 DSR의 차이
        </h2>
        <p>
          DTI와 DSR은 모두 소득 대비 상환 부담을 측정하지만 <strong>포함 범위</strong>가 다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              부채 항목별 DTI·DSR 반영 여부
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  DTI 포함 여부
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  DSR 포함 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주담대 원금
                </th>
                <td className="border-border border-b px-3 py-2.5">포함</td>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주담대 이자
                </th>
                <td className="border-border border-b px-3 py-2.5">포함</td>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신용대출 원금
                </th>
                <td className="border-border border-b px-3 py-2.5">미포함</td>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신용대출 이자
                </th>
                <td className="border-border border-b px-3 py-2.5">포함</td>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자동차 할부 원금
                </th>
                <td className="border-border border-b px-3 py-2.5">미포함</td>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  카드론 원금
                </th>
                <td className="border-border border-b px-3 py-2.5">미포함</td>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  학자금대출 원금
                </th>
                <td className="px-3 py-2.5">미포함</td>
                <td className="px-3 py-2.5">포함</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          DSR은 모든 부채의 원금까지 포함하므로 DTI보다 엄격한 규제입니다. 2023년 이후 은행권 대출의 실질적 한도는{" "}
          <strong>DSR 40%</strong>가 결정합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ltd-example">
        <h2 id="guide-ltd-example" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          주택 감정가 5억 원, 연봉 5,000만 원, 기존 신용대출 월 상환 30만 원 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              규제별 한도 산출(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  규제
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  계산
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  LTV 70%
                </th>
                <td className="border-border border-b px-3 py-2.5">5억 원 × 70%</td>
                <td className="border-border border-b px-3 py-2.5">3억 5,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  DTI 60%
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  연소득 5,000만 원 × 60% = 3,000만 원(연간 상환 가능액)
                </td>
                <td className="border-border border-b px-3 py-2.5">약 4억 2,000만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  DSR 40%
                </th>
                <td className="px-3 py-2.5">
                  연소득 5,000만 원 × 40% = 2,000만 원 → 기존 부채 360만 원 차감 → 1,640만 원
                </td>
                <td className="px-3 py-2.5">약 2억 8,700만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>세 규제를 모두 적용하면 실제 한도는 가장 낮은 약 2억 8,700만 원이 됩니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ltv-regional">
        <h2 id="guide-ltv-regional" className="text-foreground text-xl font-semibold tracking-tight">
          지역별·대상별 LTV 적용 기준
        </h2>
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
                  일반(비규제지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  규제지역 1주택자
                </th>
                <td className="border-border border-b px-3 py-2.5">50%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초(비수도권)
                </th>
                <td className="border-border border-b px-3 py-2.5">80%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초(수도권·규제지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  다주택자(규제지역)
                </th>
                <td className="px-3 py-2.5">30%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ltd-increase-limit">
        <h2 id="guide-ltd-increase-limit" className="text-foreground text-xl font-semibold tracking-tight">
          대출 한도를 높이는 방법
        </h2>
        <p>
          세 규제 중 실질적 병목은 대부분 DSR입니다. DSR 한도를 높이려면 기존 부채를 줄이거나 소득을 높이는 방법 외에 선택지가
          없습니다. 대출 신청 전 신용대출·자동차 할부·카드론 등 불필요한 부채를 정리하는 것이 한도 확보에 가장 효과적입니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 규제 기준은 정부 정책에 따라 변동될 수 있으며, 실제 적용 기준은 금융기관 및 대출 상품에 따라 상이합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            LTV·DSR 조건을 반영한 월 상환액은 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          에서 소득·기존 부채를 넣고 일반/스트레스 DSR을 비교해 볼 수 있습니다.
        </p>
      </aside>
    </>
  );
}
