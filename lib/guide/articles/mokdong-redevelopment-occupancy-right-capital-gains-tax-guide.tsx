import Link from "next/link";

export const mokdongRedevelopmentOccupancyRightCapitalGainsTaxGuideMeta = {
  slug: "mokdong-redevelopment-occupancy-right-capital-gains-tax-guide",
  title: "목동 재건축 입주권 양도세…19억·26억·35억이면 얼마나",
  description:
    "2026년 기준 목동 1~14단지 재건축 입주권 시세(5단지 35.4억·14단지 32.5억·10·11단지 19억 등)와 조합원입주권 양도소득세. 관리처분인가일·권리가액 기준 차익 분리, 12억 안분·2주택 중과·계산 예시.",
  updated: "2026년 7월 8일",
} as const;

export function MokdongRedevelopmentOccupancyRightCapitalGainsTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-mdocg-intro">
        <h2 id="guide-mdocg-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          양천구 <strong>목동신시가지 1~14단지</strong> 재건축이 본격화되면서{" "}
          <strong>조합원입주권(입주권)</strong> 전매·양도 문의가 늘고 있습니다. 단지·평형에 따라 양도가가{" "}
          <strong>19억~35억</strong>대까지 벌어지며, 입주권 양도세도 같은 금액이 아니면 결과가 크게 달라집니다.
        </p>
        <p>
          입주권은 <strong>관리처분계획인가일</strong> 기준으로 종전주택분·입주권분 차익을 나눠 과세합니다. 목동은{" "}
          <strong>서울 조정대상지역</strong>이라 12억 고가 안분·다주택 중과가 핵심입니다.{" "}
          <Link href="/capital-gains-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            양도소득세 계산기
          </Link>
          에서 「조합원입주권」·인가일·권리가액을 입력해 확인하고, 제도는{" "}
          <Link
            href="/guide/occupancy-right-capital-gains-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            조합원입주권 양도세 가이드
          </Link>
          를 참고하세요.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-mdocg-market" className="text-primary underline-offset-4 hover:underline">
              1~14단지 시세
            </a>
          </li>
          <li>
            <a href="#guide-mdocg-split" className="text-primary underline-offset-4 hover:underline">
              차익 분리·인가일
            </a>
          </li>
          <li>
            <a href="#guide-mdocg-amounts" className="text-primary underline-offset-4 hover:underline">
              단지별 예상 세액
            </a>
          </li>
          <li>
            <a href="#guide-mdocg-scenarios" className="text-primary underline-offset-4 hover:underline">
              시나리오별 계산
            </a>
          </li>
          <li>
            <a href="#guide-mdocg-mistakes" className="text-primary underline-offset-4 hover:underline">
              자주 하는 오해
            </a>
          </li>
          <li>
            <a href="#guide-mdocg-checklist" className="text-primary underline-offset-4 hover:underline">
              양도 전 확인
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-mdocg-market">
        <h2 id="guide-mdocg-market" className="text-foreground text-xl font-semibold tracking-tight">
          목동 1~14단지 입주권 시세(참고)
        </h2>
        <p>
          아래는 2026년 상반기 기준 시장에서 거론되는 <strong>단지·평형별 양도가</strong>를 정리한 것입니다. 실거래·
          호가·신고가가 혼재하므로 세금 시뮬레이션용 참고치로만 보세요.
        </p>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">고가 구간 TOP 3</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                목동 입주권 고가 사례
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    단지·평형
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    양도가(참고)
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    비고
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-muted/20">
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    5단지 115㎡
                  </th>
                  <td className="border-border border-b px-3 py-2.5">
                    <strong>35억 4,000만 원</strong>
                  </td>
                  <td className="border-border border-b px-3 py-2.5">최고가 경신 사례</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    14단지 157㎡
                  </th>
                  <td className="border-border border-b px-3 py-2.5">
                    <strong>32억 5,000만 원</strong>
                  </td>
                  <td className="border-border border-b px-3 py-2.5">신고가·공식 평당 약 6,532만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    55평대(대형)
                  </th>
                  <td className="px-3 py-2.5">
                    <strong>30억~33억 원</strong>
                  </td>
                  <td className="px-3 py-2.5">5단지 등 대형 평형 밴드</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">중간 구간(7단지·45평 등)</h3>
          <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm leading-relaxed">
            <li>
              <strong>7단지</strong> 25평 25~26억, 35평 26억+ — 커뮤니티에서 「전 평형 평당 1억 돌파」 언급
            </li>
            <li>
              <strong>45평대</strong> 약 <strong>26억 9,000만 원</strong>
            </li>
            <li>
              <strong>14단지</strong> 20평형 20억 돌파 구간도 형성
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">저가 구간 TOP 3</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                목동 입주권 상대적 저가 사례(소형 평형)
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    단지·평형
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    양도가(참고)
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    비고
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    10단지 22평
                  </th>
                  <td className="border-border border-b px-3 py-2.5">
                    <strong>19억 원</strong>
                  </td>
                  <td className="border-border border-b px-3 py-2.5">실거래 사례</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    11단지 20평형
                  </th>
                  <td className="border-border border-b px-3 py-2.5">
                    <strong>약 19억 원</strong>
                  </td>
                  <td className="border-border border-b px-3 py-2.5">소형 평형</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    12단지(11·12단지)
                  </th>
                  <td className="px-3 py-2.5">
                    <strong>20억 원 미만</strong>
                  </td>
                  <td className="px-3 py-2.5">11·12단지 소형 평형 묶음 언급</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-muted-foreground text-sm">
          ※ 조합설립인가·투기과열지구 규제에 따라 전매 가능 여부가 달라질 수 있습니다. 거래 전 조합·구청 확인이
          필요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-mdocg-split">
        <h2 id="guide-mdocg-split" className="text-foreground text-xl font-semibold tracking-tight">
          차익 분리·관리처분인가일
        </h2>
        <p>
          목동 입주권도 인가일을 기준으로 <strong>종전주택분·입주권분</strong>을 나눕니다. 장특공은 인가 전
          종전주택분에만 적용됩니다.
        </p>
        <div className="bg-muted/30 rounded-lg border border-border p-4 font-mono text-sm">
          종전주택분 = 조합원권리가액 − 취득가액 − 필요경비 · 입주권분 = 양도가액 − 조합원권리가액
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세금 시뮬레이션 공통 가정
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  값
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조합원 유형
                </th>
                <td className="border-border border-b px-3 py-2.5">원조합원·1세1주택·20년 이상 거주</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종전 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">2000년, 3.5억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  필요경비
                </th>
                <td className="border-border border-b px-3 py-2.5">2,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  관리처분인가일
                </th>
                <td className="border-border border-b px-3 py-2.5">2025-03-01</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  양도일
                </th>
                <td className="border-border border-b px-3 py-2.5">2026-07-01</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  조합원권리가액
                </th>
                <td className="px-3 py-2.5">단지별 8.8억~14억(아래 표 참고·인가 시점 조합 통지 기준 가정)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-mdocg-amounts">
        <h2 id="guide-mdocg-amounts" className="text-foreground text-xl font-semibold tracking-tight">
          단지별 예상 양도소득세(1세1주택)
        </h2>
        <p className="text-sm">
          권리가액은 단지·평형마다 다릅니다. 아래는 위 시세에 맞춘 <strong>참고 권리가액</strong>으로 계산기와 동일
          로직을 적용한 결과입니다.
        </p>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">고가 TOP 3</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                고가 단지 양도세(국세+지방소득세)
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    단지
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    양도가
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    권리가액(가정)
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    입주권분
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    총 납부
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-muted/20">
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    5단지 115㎡
                  </th>
                  <td className="border-border border-b px-3 py-2.5">35억 4,000만</td>
                  <td className="border-border border-b px-3 py-2.5">14억</td>
                  <td className="border-border border-b px-3 py-2.5">21.4억</td>
                  <td className="border-border border-b px-3 py-2.5">
                    약 <strong>8억 1,694만</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    14단지 157㎡
                  </th>
                  <td className="border-border border-b px-3 py-2.5">32억 5,000만</td>
                  <td className="border-border border-b px-3 py-2.5">13억</td>
                  <td className="border-border border-b px-3 py-2.5">19.5억</td>
                  <td className="border-border border-b px-3 py-2.5">
                    약 <strong>6억 8,607만</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    55평 33억
                  </th>
                  <td className="px-3 py-2.5">33억</td>
                  <td className="px-3 py-2.5">13.5억</td>
                  <td className="px-3 py-2.5">19.5억</td>
                  <td className="px-3 py-2.5">
                    약 <strong>7억 10만</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">중간·저가</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                7단지·45평·소형 평형 양도세
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    단지
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    양도가
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    권리가액(가정)
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    입주권분
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    총 납부
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    7단지 35평
                  </th>
                  <td className="border-border border-b px-3 py-2.5">26억</td>
                  <td className="border-border border-b px-3 py-2.5">11억</td>
                  <td className="border-border border-b px-3 py-2.5">15억</td>
                  <td className="border-border border-b px-3 py-2.5">
                    약 <strong>4억 2,721만</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    45평
                  </th>
                  <td className="border-border border-b px-3 py-2.5">26억 9,000만</td>
                  <td className="border-border border-b px-3 py-2.5">11억</td>
                  <td className="border-border border-b px-3 py-2.5">15.9억</td>
                  <td className="border-border border-b px-3 py-2.5">
                    약 <strong>4억 6,626만</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    10단지 22평
                  </th>
                  <td className="border-border border-b px-3 py-2.5">19억</td>
                  <td className="border-border border-b px-3 py-2.5">9억</td>
                  <td className="border-border border-b px-3 py-2.5">10억</td>
                  <td className="border-border border-b px-3 py-2.5">
                    약 <strong>1,771만</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    11단지 20평
                  </th>
                  <td className="border-border border-b px-3 py-2.5">19억</td>
                  <td className="border-border border-b px-3 py-2.5">9억</td>
                  <td className="border-border border-b px-3 py-2.5">10억</td>
                  <td className="border-border border-b px-3 py-2.5">
                    약 <strong>1,771만</strong>
                  </td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    12단지 소형
                  </th>
                  <td className="px-3 py-2.5">18억 5,000만</td>
                  <td className="px-3 py-2.5">8.8억</td>
                  <td className="px-3 py-2.5">9.7억</td>
                  <td className="px-3 py-2.5">
                    약 <strong>1,613만</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-muted-foreground text-sm">
          5단지 35.4억은 입주권분만 21.4억으로, 10단지 19억(입주권분 10억)과 비교하면 총 납부가{" "}
          <strong>약 46배</strong> 차이 납니다. 목동이라도 평형·단지에 따라 세금 규모가 완전히 달라집니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-mdocg-scenarios">
        <h2 id="guide-mdocg-scenarios" className="text-foreground text-xl font-semibold tracking-tight">
          시나리오별 계산
        </h2>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">5단지 115㎡·35억 4,000만 양도</h3>
          <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              종전주택분 = 14억 − 3.5억 − 2천만 = <strong>10.3억</strong> · 입주권분 = 35.4억 − 14억 ={" "}
              <strong>21.4억</strong>
            </li>
            <li>
              12억 안분(23.4억÷35.4억) 후 과세대상 합계 약 <strong>20.95억</strong> · 입주권분에 장특공 없음
            </li>
            <li>
              총 납부 <strong>약 8억 1,694만 원</strong>(국세+지방소득세)
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">10단지 22평·19억 실거래</h3>
          <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              권리가액 9억 가정 시 종전주택분 <strong>5.3억</strong> · 입주권분 <strong>10억</strong>
            </li>
            <li>
              12억 안분(7억÷19억) 적용 후 과세대상 약 <strong>5.64억</strong>
            </li>
            <li>
              총 납부 <strong>약 1,771만 원</strong> — 같은 목동이라도 5단지 대비 한 자릿수 수준
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">7단지 26억·입주권 보유 + 타 주택 1채(2주택)</h3>
          <p>
            5단지 35.4억·권리가액 14억을 2주택으로 양도하면 12억 안분 없이 중과(+20%p)가 붙어 총 납부는{" "}
            <strong>약 21억 9,223만 원</strong> 수준입니다. 10단지 19억(9억 권리가액) 2주택 가정 시에도 수억 원대가
            아니라 <strong>수천만~수억 원 이상</strong>으로 달라질 수 있으니, 입주권 처분 전 주택 수 정리가
            필수입니다.{" "}
            <Link
              href="/guide/capital-gains-surcharge-revival-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              다주택 중과 재시행
            </Link>
            가이드를 참고하세요.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">승계조합원(26억대 입주권 매수 후 양도)</h3>
          <p>
            7단지 26억급 입주권을 22억에 매수해 26억에 양도하면(권리가액 11억·승계 가정), 종전주택분 장특공 없이
            입주권분 차익 4억에 12억 안분이 적용됩니다. 1세1주택·거주 요건 충족 시 총 납부는{" "}
            <strong>약 1,200만 원대</strong>로 원조합원 26억 양도(약 4억 2,721만)보다 낮을 수 있습니다. 인가 직후
            고가 매수·거주 기간 부족이면 세액이 급증합니다. 원조합원 7단지 26억 양도 시 약 4억 2,721만 원과 비교해
            보세요.
          </p>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-mdocg-mistakes">
        <h2 id="guide-mdocg-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「목동이면 다 30억대」</strong> — 10·11·12단지 소형은 19억·20억 미만도 있습니다. 단지·평형을
            먼저 확인해야 합니다.
          </li>
          <li>
            <strong>「1세1주택이면 35억도 비과세」</strong> — 12억 초과 고가 안분이 적용됩니다. 5단지 35.4억은 1세1주택도
            수억 원대가 아니라 <strong>약 8억 1,694만 원</strong> 수준입니다.
          </li>
          <li>
            <strong>「평당 1억이면 권리가액도 1억×평수」</strong> — 시장 호가와 관리처분계획상 조합원권리가액은
            다릅니다. 세금 계산은 조합 통지 금액이 기준입니다.
          </li>
          <li>
            <strong>「20년 살면 입주권분에도 장특공」</strong> — 장특공은 인가 전 종전주택분만 해당합니다.
          </li>
          <li>
            <strong>「입주권은 주택 수에 안 잡힌다」</strong> — 조합원 입주권도 주택 수에 포함될 수 있어 다주택 중과
            대상이 됩니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-mdocg-checklist">
        <h2 id="guide-mdocg-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          양도 전 확인
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
                  단지·평형·실거래/호가(본인 물건)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  관리처분인가일·조합원권리가액(조합 서류)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  조합원 지위 양도 가능 여부(투기과열지구·예외 요건)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  양도일 기준 세대 주택 수
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  35억·19억 등 양도가와 별도로 12억 안분 적용 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  예상 세액·자금(고가 단지는 수억~수십억 원 규모 가능)
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 시세·권리가액은 단지·인가 단계마다 변합니다. 신고 전 홈택스·세무사·관할 세무서 확인이 필요합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link
            href="/guide/occupancy-right-capital-gains-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 조합원입주권(입주권) 양도소득세 제도·공식
          </Link>
        </p>
        <p>
          <Link
            href="/guide/one-household-one-home-capital-gains-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 1세1주택 비과세·12억 고가 안분
          </Link>
        </p>
        <p>
          <Link
            href="/guide/capital-gains-surcharge-revival-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 조정지역 다주택 양도세 중과
          </Link>
        </p>
        <p>
          <Link
            href="/capital-gains-tax-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 양도소득세 계산기
          </Link>
        </p>
      </aside>
    </>
  );
}
