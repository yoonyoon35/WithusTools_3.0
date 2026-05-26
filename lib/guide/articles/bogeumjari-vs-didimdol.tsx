import Link from "next/link";

export const bogeumjariVsDidimdolMeta = {
  slug: "bogeumjari-vs-didimdol",
  title: "보금자리론 vs 디딤돌대출 비교",
  description:
    "보금자리론·디딤돌대출 조건 비교와 주택가·소득·한도별 선택 시나리오, 혼합 검토 순서, 신청 전 흔한 실수를 정리했습니다.",
  updated: "2026년 4월 13일",
} as const;

export function BogeumjariVsDidimdolBody() {
  return (
    <>
      <p>
        두 상품 모두 한국주택금융공사(<abbr title="Korea Housing Finance Corporation">HF</abbr>)가 취급하는 정책 모기지
        상품입니다. 시중 금리보다 낮은 <strong>고정금리</strong>가 적용되며, <strong>무주택 실수요자</strong>를 주요 대상으로 합니다.
        조건표만 보면 비슷해 보이지만, <strong>주택 가격·소득·필요 대출액</strong>에 따라 어느 쪽이 유리한지 달라집니다.
      </p>

      <section className="space-y-3" aria-labelledby="guide-compare-decision-flow">
        <h2 id="guide-compare-decision-flow" className="text-foreground text-xl font-semibold tracking-tight">
          먼저 확인할 순서
        </h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>무주택·세대주 요건</strong> — 디딤돌은 세대주 조건이 있습니다.
          </li>
          <li>
            <strong>주택 가격</strong> — 5억 원 초과면 디딤돌 대상에서 제외됩니다.
          </li>
          <li>
            <strong>부부합산 연소득</strong> — 디딤돌 소득 한도(일반 6,000만 원, 생애최초 7,000만 원 등) 충족 여부.
          </li>
          <li>
            <strong>필요 대출액</strong> — 디딤돌 최대 2억 5,000만 원, 보금자리론 최대 3억 6,000만 원.
          </li>
          <li>
            <strong>금리·우대 조건</strong> — 분기별 고시 금리와 비대면 가산(보금자리론 0.1%p) 등을 비교.
          </li>
        </ol>
      </section>

      <section className="space-y-4" aria-labelledby="guide-compare-basic">
        <h2 id="guide-compare-basic" className="text-foreground text-xl font-semibold tracking-tight">
          기본 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보금자리론과 디딤돌대출 기본 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보금자리론
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  디딤돌대출
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상
                </th>
                <td className="border-border border-b px-3 py-2.5">무주택자(소득 제한 없음)</td>
                <td className="border-border border-b px-3 py-2.5">무주택 세대주(소득 제한 있음)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연소득 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">제한 없음</td>
                <td className="border-border border-b px-3 py-2.5">
                  부부합산 6,000만 원 이하(생애최초 7,000만 원)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 가격 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">6억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">5억 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 3억 6,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">최대 2억 5,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 유형
                </th>
                <td className="border-border border-b px-3 py-2.5">고정금리</td>
                <td className="border-border border-b px-3 py-2.5">고정금리</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  상환 기간
                </th>
                <td className="px-3 py-2.5">10·15·20·30년</td>
                <td className="px-3 py-2.5">10·15·20·30년</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 금리는 분기별로 변동 고시되며, 가입 시점 기준으로 적용됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-compare-income">
        <h2 id="guide-compare-income" className="text-foreground text-xl font-semibold tracking-tight">
          소득 요건 세부 기준(디딤돌대출)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              디딤돌대출 소득 요건(부부합산)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대상
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연소득 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반
                </th>
                <td className="border-border border-b px-3 py-2.5">6,000만 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 구입자
                </th>
                <td className="border-border border-b px-3 py-2.5">7,000만 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2자녀 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">7,000만 원 이하</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  3자녀 이상
                </th>
                <td className="px-3 py-2.5">8,000만 원 이하</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-compare-ltv">
        <h2 id="guide-compare-ltv" className="text-foreground text-xl font-semibold tracking-tight">
          LTV 적용 기준
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[24rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보금자리론·디딤돌대출 LTV 적용(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보금자리론
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  디딤돌대출
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반
                </th>
                <td className="border-border border-b px-3 py-2.5">70% 이하</td>
                <td className="border-border border-b px-3 py-2.5">70% 이하</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  생애최초
                </th>
                <td className="px-3 py-2.5">80% 이하</td>
                <td className="px-3 py-2.5">80% 이하</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-compare-scenarios">
        <h2 id="guide-compare-scenarios" className="text-foreground text-xl font-semibold tracking-tight">
          상황별 선택 시나리오
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              조건별 우선 검토 상품(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  우선 검토
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이유
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초, 매매 4억, 부부합산 5,500만
                </th>
                <td className="border-border border-b px-3 py-2.5">디딤돌대출</td>
                <td className="border-border border-b px-3 py-2.5">소득·주택가 한도 충족, 통상 금리 유리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매 5.5억, 부부합산 8,000만
                </th>
                <td className="border-border border-b px-3 py-2.5">보금자리론</td>
                <td className="border-border border-b px-3 py-2.5">디딤돌은 주택가·소득 초과</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매 4.2억, LTV 80% 필요(대출 3.36억)
                </th>
                <td className="border-border border-b px-3 py-2.5">보금자리론 + 시중은행</td>
                <td className="border-border border-b px-3 py-2.5">디딤돌 한도 2.5억 초과분은 다른 상품 필요</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  소득 6,500만(디딤돌 초과), 매매 4.8억
                </th>
                <td className="px-3 py-2.5">보금자리론</td>
                <td className="px-3 py-2.5">소득 한도만 넘어도 디딤돌 불가</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          필요 대출액이 한 상품 한도를 넘으면 <strong>정책 모기지 + 시중은행</strong> 조합을 검토합니다. 이때{" "}
          <abbr title="총부채원리금상환비율">DSR</abbr>·
          <abbr title="담보인정비율">LTV</abbr>는 전체 대출 합산 기준이므로,{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          로 미리 합산해 보는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-compare-howto">
        <h2 id="guide-compare-howto" className="text-foreground text-xl font-semibold tracking-tight">
          상품 선택 기준
        </h2>
        <p>
          소득이 디딤돌대출 기준을 충족하는 경우 <strong>디딤돌대출</strong>이 우선 검토 대상입니다. 통상 보금자리론보다 낮은 금리가 적용되기
          때문입니다. 소득이 기준을 초과하거나 주택 가격이 5억 원을 넘는 경우에는 <strong>보금자리론</strong>을 검토합니다.
        </p>
        <p>
          신청은 기금 e든든(
          <a
            href="https://enhuf.molit.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            rel="noopener noreferrer"
          >
            enhuf.molit.go.kr
          </a>
          ) 또는 수탁은행을 통해 진행합니다. 금리·한도·우대 조건은{" "}
          <a
            href="https://www.hf.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            rel="noopener noreferrer"
          >
            한국주택금융공사
          </a>
          고시를 기준으로 확인하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-compare-mistakes">
        <h2 id="guide-compare-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          신청 전 흔한 실수
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>금리만 보고 선택</strong> — 디딤돌 한도 2.5억으로 부족하면 결국 시중은행 금리도 함께 봐야 합니다.
          </li>
          <li>
            <strong>소득 산정 착오</strong> — 부부합산·세대주·무주택 요건은 서류 심사에서 엄격히 확인됩니다.
          </li>
          <li>
            <strong>비대면 가산 미반영</strong> — 보금자리론은 비대면 신청 시 0.1%p 가산이 붙을 수 있습니다.
          </li>
          <li>
            <strong>중도상환 수수료 간과</strong> — 두 상품 모두 조기 상환 시 수수료가 발생할 수 있어, 갈아타기·상환 계획과 함께
            봐야 합니다.
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          ※ 두 상품 모두 중도상환 시 수수료가 발생할 수 있으며, 실제 금리 및 한도는 신청 시점 기준으로 확인이 필요합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            대출 금리와 상환 기간에 따른 월 상환액·대출 이자 계산
          </Link>
          은 홈의 대출 이자 계산기에서 확인할 수 있습니다.
        </p>
      </aside>
    </>
  );
}

