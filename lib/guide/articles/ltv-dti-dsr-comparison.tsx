import Link from "next/link";

export const ltvDtiDsrComparisonMeta = {
  slug: "ltv-dti-dsr-comparison",
  title: "LTV·DTI·DSR 차이 한눈에 정리",
  description:
    "LTV·DTI·DSR의 차이, 실제 한도를 가르는 규제 판단, 연봉·담보·기존 부채가 겹칠 때 시나리오와 흔한 오해를 정리했습니다.",
  updated: "2026년 4월 14일",
} as const;

export function LtvDtiDsrComparisonBody() {
  return (
    <>
      <p>
        주택담보대출 심사 시 <abbr title="담보인정비율">LTV</abbr>, <abbr title="총부채상환비율">DTI</abbr>,{" "}
        <abbr title="총부채원리금상환비율">DSR</abbr> 세 가지 규제가 동시에 적용됩니다. 세 규제 중{" "}
        <strong>가장 낮은 금액</strong>이 실제 대출 한도로 결정됩니다. 2023년 이후 은행권에서는 실무상 <strong>DSR과 LTV</strong>
        중 어느 쪽이 먼저 한도를 막는지가 더 자주 문제가 됩니다.
      </p>

      <section className="space-y-3" aria-labelledby="guide-ltd-which-binds">
        <h2 id="guide-ltd-which-binds" className="text-foreground text-xl font-semibold tracking-tight">
          내 경우엔 어느 규제가 먼저 걸릴까
        </h2>
        <p>
          담보가 비싼 수도권 아파트·규제지역·다주택이면 LTV가 먼저 낮아집니다. 반면 저가 주택·기존 신용·할부가 많으면 DSR이
          먼저 걸립니다. DTI는 DSR보다 느슨한 편이라, 요즘은 “DTI는 통과했는데 DSR에서 막힌다”는 경우가 훨씬 많습니다.
        </p>
      </section>

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

      <section className="space-y-3" aria-labelledby="guide-ltd-mistakes">
        <h2 id="guide-ltd-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          흔한 오해
        </h2>
        <p>
          “LTV 70%니까 집값의 70%까지 빌릴 수 있다”만 기억하고 DSR·스트레스 DSR을 안 보는 경우, DTI만 통과했다고 안심하는
          경우가 있습니다. 또 신용대출 원금은 DTI에는 덜 반영되지만 DSR에는 들어가므로, 소액 대출 여러 개가 합쳐 한도를
          깎아 먹기도 합니다. 한도를 올리려면{" "}
          <Link href="/guide/dsr-40-mortgage-limit" className="text-primary underline-offset-4 hover:underline">
            DSR 40% 산정
          </Link>
          과{" "}
          <Link href="/guide/stress-dsr-explained" className="text-primary underline-offset-4 hover:underline">
            스트레스 DSR
          </Link>
          을 함께 확인하세요.
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
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
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
