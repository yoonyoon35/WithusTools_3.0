import Link from "next/link";

export const dongtanGiheungGuriGapInvestmentLandPermit2026GuideMeta = {
  slug: "dongtan-giheung-guri-gap-investment-land-permit-2026-guide",
  title: "동탄·기흥·구리 갭투자·토지거래허가…7월 5일부터 막히는 것",
  description:
    "2026년 6월 30일 발표 동탄·기흥·구리 토지거래허가구역(7월 5일 시행), 갭투자 7억·전세 3억 예시, 전세·신용대출 우회 제한, 허가 절차·7월 1~4일 공백기 안내.",
  updated: "2026년 7월 1일",
} as const;

export function DongtanGiheungGuriGapInvestmentLandPermit2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-dggp-intro">
        <h2 id="guide-dggp-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 30일 발표 기준
        </h2>
        <p>
          화성 동탄구·용인 기흥구·구리시는 7월 1일 규제지역(투기과열·조정대상)에 더해,{" "}
          <strong>7월 5일부터 토지거래허가구역</strong>이 됩니다(2027년 12월 31일까지). 경기도는 허가 대상을{" "}
          <strong>해당 지역 내 아파트</strong>로 한정했습니다. 동탄 등 3곳은 상반기 거래량이 전년 대비 크게 늘며
          갭투자 문의가 보도된 지역이라, 전세·대출·허가 규제를 따로 짚을 필요가 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggp-permit">
        <h2 id="guide-dggp-permit" className="text-foreground text-xl font-semibold tracking-tight">
          토지거래허가 — 무엇이 달라지나
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              토허구역 핵심
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
                  시행일
                </th>
                <td className="border-border border-b px-3 py-2.5">2026년 7월 5일 ~ 2027년 12월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상(경기도)
                </th>
                <td className="border-border border-b px-3 py-2.5">동탄구·기흥구·구리시 내 아파트</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  절차
                </th>
                <td className="border-border border-b px-3 py-2.5">매매계약 전 관할 시장·구청장 허가</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  허가 후
                </th>
                <td className="px-3 py-2.5">허가 목적(실거주 등)대로 이용, 실거주 의무 부과</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>허가 없이 계약하면 무효가 될 수 있습니다. 7월 1일 규제지역과 7월 5일 토허는 시행일이 다릅니다.</p>
        <p>
          허가 신청은 <strong>매매계약 체결 전</strong> 관할 시·구청에 합니다. 동탄은 화성시 동탄구청, 기흥은 용인시
          기흥구청, 구리는 구리시청이 관할입니다. 허가 목적(실거주 등)과 자금 출처를 입증하지 못하면 거절될 수
          있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggp-gap">
        <h2 id="guide-dggp-gap" className="text-foreground text-xl font-semibold tracking-tight">
          갭투자 — 어디가 막히나
        </h2>
        <p>
          전세를 끼고 매수하는 갭투자는 LTV 축소·토허·실거주 의무가 겹치면서 사실상 어려워집니다. 정부·금융당국
          발표에서 거론된 제한은 아래와 같습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              갭투자·우회 매수 관련 규제
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조치
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세대출 보유 중 투기과열지구 3억 원 초과 아파트 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">전세대출 회수 대상이 될 수 있음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  투기과열지구 3억 원 초과 아파트 취득 후
                </th>
                <td className="border-border border-b px-3 py-2.5">전세대출 이용 제한</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원 초과 신용대출 보유자
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 실행일로부터 1년간 규제지역 내 주택 취득 불가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택 LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">70% → 40%(7월 1일~)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  토허구역 아파트 매수
                </th>
                <td className="px-3 py-2.5">허가·실거주 목적 입증, 갭투자성 매수는 허가 거절 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          동탄·기흥·구리 대부분 아파트가 3억 원을 넘기 때문에, 전세대출을 유지한 채 추가 매수하는 구조는 검토가
          필요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggp-gap-example">
        <h2 id="guide-dggp-gap-example" className="text-foreground text-xl font-semibold tracking-tight">
          갭투자 숫자 예시 — 7억·전세 3억
        </h2>
        <p className="text-muted-foreground text-sm">
          전세 보증금을 끼고 매수할 때 실제 마련할 금액(갭)과 LTV를 같이 봅니다. 전세 3억·매매가 7억 가정.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              갭 4억 원 마련 — 지정 전·후 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  최대 주담대(7억 기준)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  갭 4억 중 대출로 충당
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  추가 현금
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지정 전(70%)
                </th>
                <td className="border-border border-b px-3 py-2.5">4억 9,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">갭 4억 전액 대출 가능</td>
                <td className="border-border border-b px-3 py-2.5">0원(대출만)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  지정 후(40%)
                </th>
                <td className="px-3 py-2.5">2억 8,000만 원</td>
                <td className="px-3 py-2.5">2억 8,000만 원</td>
                <td className="px-3 py-2.5">1억 2,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          여기에 전세대출 회수·이용 제한, 토허·실거주 의무, DSR 한도가 겹치면 갭투자는 사실상 어렵습니다. 7월 5일
          이후에는 허가 목적이 실거주가 아니면 통과하기 더 까다로워집니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dggp-residence">
        <h2 id="guide-dggp-residence" className="text-foreground text-xl font-semibold tracking-tight">
          실거주 의무 — 6개월 vs 2년
        </h2>
        <p>헷갈리기 쉬운 부분만 나눕니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>주담대 6개월 전입</strong> — 규제지역 주택 구입 목적 대출 실행 후 6개월 안에 전입(생애최초 70%
            LTV 등과 함께 언급)
          </li>
          <li>
            <strong>토허구역 실거주</strong> — 허가 목적대로 거주·이용, 위반 시 제재 가능
          </li>
          <li>
            <strong>1가구 1주택 양도세 비과세</strong> — 2년 이상 보유·2년 이상 실거주 요건(조정지역 포함)
          </li>
        </ul>
        <p>서로 다른 제도이므로 계약 전에 어떤 의무가 붙는지 구분해야 합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              실거주·전입 의무 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  위반 시
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주담대 전입(규제지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 실행 후 6개월</td>
                <td className="border-border border-b px-3 py-2.5">대출 조건 위반·회수 등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  토허 실거주
                </th>
                <td className="border-border border-b px-3 py-2.5">허가 목적 기간(지자체 기준)</td>
                <td className="border-border border-b px-3 py-2.5">허가 취소·제재 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  1가구 1주택 양도세 비과세
                </th>
                <td className="px-3 py-2.5">2년 보유·2년 실거주</td>
                <td className="px-3 py-2.5">비과세 요건 미충족</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggp-docs">
        <h2 id="guide-dggp-docs" className="text-foreground text-xl font-semibold tracking-tight">
          추가 서류·증빙
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거래 시 제출(발표 기준)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조정·규제지역 공통
                </th>
                <td className="border-border border-b px-3 py-2.5">자금조달계획서·입주계획서(가격 무관)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  투기과열지구 추가
                </th>
                <td className="px-3 py-2.5">예금잔액증명서·소득금액증명원 등 자금 출처 증빙</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dggp-july5">
        <h2 id="guide-dggp-july5" className="text-foreground text-xl font-semibold tracking-tight">
          7월 1일과 7월 5일 사이 계약
        </h2>
        <p>
          7월 1일~4일에 계약하면 규제지역 LTV 40%는 적용되지만, 토지거래허가는 7월 5일부터입니다. 5일 이후 잔금·
          계약을 하면 아파트 매수에 허가가 필요합니다. 「규제 전 막차」 계약이라도 토허 시행 이후에는 허가 절차를
          거쳐야 합니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>7월 1~4일 계약·6월 잔금</strong> — 토허 전이라 허가 없이 진행 가능(아파트). LTV는 이미 40%.
          </li>
          <li>
            <strong>7월 5일 이후 계약</strong> — 허가 → 계약 → 잔금 순서. 허가 없이 서명한 계약은 무효 소지.
          </li>
          <li>
            <strong>6월 계약·7월 5일 이후 잔금</strong> — 계약은 토허 전이어도, 잔금·등기 시점에 허가 필요 여부를
            구청에 확인.
          </li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dggp-mistakes">
        <h2 id="guide-dggp-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「전세 끼고 사도 LTV만 맞으면 된다」</strong> — 전세대출 회수·이용 제한이 별도로 있습니다.
          </li>
          <li>
            <strong>「토허는 토지만 해당」</strong> — 경기도 지정은 이 3곳 <strong>아파트</strong> 거래가 대상입니다.
          </li>
          <li>
            <strong>「7월 1일 전 계약이면 갭투자 그대로」</strong> — 대출 실행일·토허 시행일·허가 여부를 각각 봐야
            합니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggp-checklist">
        <h2 id="guide-dggp-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          갭투자·실거주 매수 전 확인
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
                  전세대출·신용대출(1억 초과) 보유 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  7월 5일 이후 계약 시 토지거래허가 필요 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  실거주·전입 계획(6개월·허가 목적)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  자금조달계획서·입주계획서·증빙 준비
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 허가 요건·실거주 의무·대출 제한은 지자체·금융기관 안내에 따릅니다. 관할 구청·시청과 대출 은행에서
          확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link
            href="/guide/dongtan-giheung-guri-regulated-area-ltv-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → LTV 40%·대출 한도 6억은 동탄·기흥·구리 규제지역 LTV 가이드에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
