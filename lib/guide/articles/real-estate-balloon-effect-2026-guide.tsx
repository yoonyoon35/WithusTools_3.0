import Link from "next/link";

export const realEstateBalloonEffect2026GuideMeta = {
  slug: "real-estate-balloon-effect-2026-guide",
  title: "부동산 풍선효과란…규제지역과 인접 비규제지역 수요 이동",
  description:
    "2026년 7월 기준 부동산 풍선효과 정의·발생 조건, 10·15 대책 이후 동탄·기흥·구리 거래·가격 상승, 6월 30일 규제 이후 남양주·병점·권선·평택 등 인접 비규제지역 사례, LTV·취득세·대출 확인 포인트를 표로 정리했습니다.",
  updated: "2026년 7월 7일",
} as const;

export function RealEstateBalloonEffect2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-rbe-intro">
        <h2 id="guide-rbe-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          부동산 시장에서 <strong>풍선효과</strong>는 한 지역에 규제·세금·대출 한도가 강해지면, 그 지역으로 들어오려던
          매수·투자 수요가 <strong>인접 비규제지역</strong>으로 밀려 집값·거래량이 그쪽에서 먼저 오르는 현상을 말합니다.
          2025년 10·15 부동산 대책 이후 수도권 규제지역과 맞닿은 경기 비규제지역에서 이 현상이 두드러졌고, 그중{" "}
          <strong>화성 동탄구·용인 기흥구·구리시</strong>가 2026년 6월 30일 신규 규제지역으로 지정됐습니다.
        </p>
        <p>
          규제 직후에는 <strong>남양주·병점·권선·평택</strong> 등 인접지로 수요가 옮겨가는 조짐이 보도되고 있습니다. 이
          글은 풍선효과가 무엇인지, 왜 동탄·기흥·구리가 규제 대상이 됐는지, 현재 어떤 지역에서 논의되는지, 매수 전
          무엇을 확인해야 하는지 정리합니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-rbe-definition" className="text-primary underline-offset-4 hover:underline">
              풍선효과란 무엇인가
            </a>
          </li>
          <li>
            <a href="#guide-rbe-mechanism" className="text-primary underline-offset-4 hover:underline">
              왜 생기는가 — 대출·세금·거래 규제 차이
            </a>
          </li>
          <li>
            <a href="#guide-rbe-first-wave" className="text-primary underline-offset-4 hover:underline">
              10·15 대책 이후 — 동탄·기흥·구리가 풍선효과를 받은 이유
            </a>
          </li>
          <li>
            <a href="#guide-rbe-regulation" className="text-primary underline-offset-4 hover:underline">
              2026년 6월 30일 규제 지정
            </a>
          </li>
          <li>
            <a href="#guide-rbe-second-wave" className="text-primary underline-offset-4 hover:underline">
              규제 이후 인접지 풍선효과 — 현재 거론되는 지역
            </a>
          </li>
          <li>
            <a href="#guide-rbe-cases" className="text-primary underline-offset-4 hover:underline">
              지역별 사례 — 남양주·병점·권선·평택
            </a>
          </li>
          <li>
            <a href="#guide-rbe-demand" className="text-primary underline-offset-4 hover:underline">
              실수요 vs 투기·갭투자
            </a>
          </li>
          <li>
            <a href="#guide-rbe-check" className="text-primary underline-offset-4 hover:underline">
              인접 비규제지 매수 전 확인
            </a>
          </li>
          <li>
            <a href="#guide-rbe-mistakes" className="text-primary underline-offset-4 hover:underline">
              자주 하는 오해
            </a>
          </li>
          <li>
            <a href="#guide-rbe-checklist" className="text-primary underline-offset-4 hover:underline">
              체크리스트
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-rbe-definition">
        <h2 id="guide-rbe-definition" className="text-foreground text-xl font-semibold tracking-tight">
          풍선효과란 무엇인가
        </h2>
        <p>
          <strong>부동산 풍선효과(balloon effect)</strong>는 특정 지역에 매수·대출·세금 규제가 강해지면, 그 지역으로
          몰리던 수요가 <strong>규제가 약한 인접 지역</strong>으로 이동하면서 집값·거래량·호가가 그쪽에서 먼저 오르는
          현상을 뜻합니다. 풍선을 한쪽에서 누르면 공기가 다른 쪽으로 밀리는 것과 비슷해 붙은 이름입니다.
        </p>
        <p>
          풍선효과는 반드시 「집값이 오른다」는 뜻만은 아닙니다. 규제 지역에서는 거래가 줄고(숨 고르기),{" "}
          <strong>상대적으로 규제가 약한 곳</strong>에서 호가·신고가·거래량이 먼저 움직이는 패턴을 가리킵니다. 같은
          생활권·출퇴근권 안에서 LTV·취득세·토지거래허가 여부가 달라지면, 매수자는 규제 지역 대신 인접
          비규제지역을 찾는 경우가 많습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              풍선효과와 비슷한 표현
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  용어
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  의미
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  풍선효과
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  규제·세금 강화 지역 → 인접 비규제지역으로 수요·가격 이동
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수요 이동·대체지역 효과
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  같은 맥락. 실수요자가 규제 지역 대신 인근 비규제지를 찾는 경우
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  규제 회피·우회 매수
                </th>
                <td className="px-3 py-2.5">
                  투기·갭투자 등 규제를 피해 다른 지역·수단으로 매수하는 행태(별도 규제 대상)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rbe-mechanism">
        <h2 id="guide-rbe-mechanism" className="text-foreground text-xl font-semibold tracking-tight">
          왜 생기는가 — 대출·세금·거래 규제 차이
        </h2>
        <p>
          풍선효과는 보통 <strong>규제지역과 비규제지역 사이의 「매수 비용·절차 차이」</strong>에서 시작됩니다.
          같은 매매가라도 규제 여부에 따라 필요한 자기자금·세금·서류가 달라지기 때문입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              규제지역 vs 비규제지역 — 매수 시 체감 차이(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  규제지역(예: 동탄·기흥·구리, 7월 1일~)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  인접 비규제지역(예: 남양주·병점)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택 LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">40%(투기과열지구)</td>
                <td className="border-border border-b px-3 py-2.5">70% 등(일반 비규제)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택 취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">조정대상지역 8% 중과</td>
                <td className="border-border border-b px-3 py-2.5">비조정 1~3% 구간 등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  토지거래허가
                </th>
                <td className="border-border border-b px-3 py-2.5">동탄·기흥·구리 7월 5일~ 적용</td>
                <td className="border-border border-b px-3 py-2.5">미지정 지역은 허가 불필요</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7억 원 무주택 매수 시 대출(참고)
                </th>
                <td className="px-3 py-2.5">LTV 40% → 약 2.8억</td>
                <td className="px-3 py-2.5">LTV 70% → 약 4.9억</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          7억 원 아파트를 무주택 기준으로 살 때, LTV만 놓고 보면 규제지역과 비규제지역 사이에{" "}
          <strong>약 2.1억 원</strong> 가량 대출 가능액 차이가 납니다. 실수요자는 자기자금 부담이 적은 인접
          비규제지를, 투자·갭투자 수요는 규제가 약한 저가 단지를 찾는 경우가 보도됩니다. 전국 공통 규제 설명은{" "}
          <Link href="/guide/regulated-area-designation-effects-2026-guide" className="text-primary underline-offset-4 hover:underline">
            규제지역 지정 시 달라지는 것
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rbe-first-wave">
        <h2 id="guide-rbe-first-wave" className="text-foreground text-xl font-semibold tracking-tight">
          10·15 대책 이후 — 동탄·기흥·구리가 풍선효과를 받은 이유
        </h2>
        <p>
          2025년 10월 15일 부동산 대책 이후 수도권·경기 대부분이 규제지역·토지거래허가구역으로 묶이면서,{" "}
          <strong>규제지역과 맞닿은 경기 비규제지역 18곳</strong>으로 매수 자금이 크게 유입됐습니다. 국회 국토교통위
          이종욱 의원실이 국토교통부 자료를 분석한 결과, 2024년 11월~2025년 5월 7개월간 이 18곳 주택 매입액은 약{" "}
          <strong>15조 5,882억 원</strong>으로, 전년 동기(약 6조 269억 원) 대비 <strong>약 159%</strong> 늘었습니다.
          같은 기간 경기도 전체(+77%)·서울(+15%) 증가율을 크게 웃돌았습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              10·15 대책 이후 주택 매입액 증가가 두드러진 지역(7개월, 의원실·보도 인용)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매입액(약)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  전년 동기 대비
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  풍선효과 배경(요약)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  화성 동탄구
                </th>
                <td className="border-border border-b px-3 py-2.5">4조 3,306억 원</td>
                <td className="border-border border-b px-3 py-2.5">+215%</td>
                <td className="border-border border-b px-3 py-2.5">반도체·GTX 호재, 비규제지역 효과</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  구리시
                </th>
                <td className="border-border border-b px-3 py-2.5">1조 4,573억 원</td>
                <td className="border-border border-b px-3 py-2.5">+330%</td>
                <td className="border-border border-b px-3 py-2.5">서울 인접·역세권, 갭투자 유입 보도</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  용인 기흥구
                </th>
                <td className="px-3 py-2.5">1조 9,801억 원</td>
                <td className="px-3 py-2.5">+192%</td>
                <td className="px-3 py-2.5">반도체 벨트·교통 호재</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          국토부 실거래·보도 기준, 2026년 상반기 동탄구 거래는 전년 대비 약 <strong>112%</strong>, 구리시 약{" "}
          <strong>135%</strong>, 기흥구 약 <strong>70%</strong> 늘었고, 동탄·구리 평균 매매가는 전년 상반기 대비 각각
          약 <strong>11.4%·10.8%</strong> 올랐습니다. 즉 동탄·기흥·구리는 10·15 대책 이후 「풍선효과를 받은
          지역」이었고, 그 결과 2026년 6월 30일 규제 지정의 직접적 배경이 됐습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rbe-regulation">
        <h2 id="guide-rbe-regulation" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 30일 규제 지정
        </h2>
        <p>
          국토교통부는 6월 30일 <strong>화성시 동탄구, 용인시 기흥구, 구리시</strong>를 투기과열지구·조정대상지역으로
          신규 지정했습니다. 효력은 <strong>2026년 7월 1일</strong>부터이며, 경기도는 같은 3곳을{" "}
          <strong>7월 5일</strong>부터 토지거래허가구역(2027년 12월 31일까지)으로 지정했습니다. 수도권 규제지역은
          기존 37곳에 3곳이 더해 <strong>총 40곳</strong>이 됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              동탄·기흥·구리 규제 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시행
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  LTV(무주택)
                </th>
                <td className="border-border border-b px-3 py-2.5">70% → 40%</td>
                <td className="border-border border-b px-3 py-2.5">7월 1일~</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택 취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">조정대상지역 8% 중과</td>
                <td className="border-border border-b px-3 py-2.5">취득일 기준</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  토지거래허가(아파트)
                </th>
                <td className="px-3 py-2.5">매매 전 구청 허가</td>
                <td className="px-3 py-2.5">7월 5일~</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          LTV·대출 한도·생애최초 예외는{" "}
          <Link
            href="/guide/dongtan-giheung-guri-regulated-area-ltv-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            동탄·기흥·구리 LTV 가이드
          </Link>
          , 2주택 취득세는{" "}
          <Link
            href="/guide/dongtan-giheung-guri-second-home-acquisition-tax-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            취득세 가이드
          </Link>
          , 갭투자·토허는{" "}
          <Link
            href="/guide/dongtan-giheung-guri-gap-investment-land-permit-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            갭투자·토허 가이드
          </Link>
          에서 자세히 다룹니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rbe-second-wave">
        <h2 id="guide-rbe-second-wave" className="text-foreground text-xl font-semibold tracking-tight">
          규제 이후 인접지 풍선효과 — 현재 거론되는 지역
        </h2>
        <p>
          6월 30일 규제 발표 직후, 매수·투자 관심이 <strong>동탄·기흥·구리와 생활권을 공유하는 비규제지역</strong>으로
          옮겨가는 조짐이 보도됐습니다. 규제 지역 인접지를 중심으로 호가 상승·신고가 거래·거래량 증가가 포착됐다는
          분석이 이어지고 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              규제 지역별 인접·대체지와 6·30 발표 이후 매매 대금 증가율(보도·업계 집계, 참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신규 규제지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  풍선효과로 거론되는 인접·대체지
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  발표 이후 매매 대금 증가(참고)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  구리시
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>남양주</strong> (다산·별내신도시 등)
                </td>
                <td className="border-border border-b px-3 py-2.5">남양주시 약 +141%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  화성 동탄구
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>화성 병점</strong>, <strong>평택</strong> 등
                </td>
                <td className="border-border border-b px-3 py-2.5">병점구 약 +201%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  용인 기흥구
                </th>
                <td className="px-3 py-2.5">
                  <strong>수원 권선구</strong>, <strong>안양 만안구</strong> 등
                </td>
                <td className="px-3 py-2.5">권선구 약 +146%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 증가율은 규제 발표 전후 단기 구간·집계 방식에 따라 달라질 수 있습니다. 호가·신고가는 실거래와 다를 수
          있으니 참고용으로만 보세요.
        </p>
        <p>
          국토부는 반도체 벨트 중심으로 규제 범위가 한정됐기 때문에, 과거 10·15 대책 직후처럼{" "}
          <strong>광범위한 풍선효과는 나타나지 않을 것</strong>이라는 입장입니다. 다만 현장에서는 대출 접근성이
          상대적으로 양호한 인접지로 수요가 쏠리는 분위기가 뚜렷하다는 보도도 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rbe-cases">
        <h2 id="guide-rbe-cases" className="text-foreground text-xl font-semibold tracking-tight">
          지역별 사례 — 남양주·병점·권선·평택
        </h2>
        <p>2026년 6~7월 보도·현장 사례를 지역별로 묶어 정리했습니다. 단지·호가는 시점마다 변동됩니다.</p>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">구리 인접 — 남양주(다산·별내)</h3>
        <p>
          10·15 대책 이후 구리로 갭투자·매수 수요가 몰리며 가격이 오른 뒤, 6·30 규제 발표 이후{" "}
          <strong>남양주 다산·별내신도시</strong>로 관심이 옮겨간다는 보도가 있습니다. 다산신도시 일대에서 하루
          거래 10건 가량 체결됐다는 현장 언급, 다산자이폴라리스 전용 84㎡가 직전 최고가 대비 약 8,500만 원 오른
          신고가 거래 등이 보도됐습니다. 구리 인접지 다산리버펠리체2단지 전용 84㎡는 호가가 3,000만 원 올라 7억
          5,000만 원에 매물로 나왔다는 사례도 있습니다.
        </p>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">동탄 인접 — 화성 병점</h3>
        <p>
          동탄 규제로 수요가 같은 화성시 <strong>병점구</strong>로 이동한다는 분석이 나왔습니다. 병점역아이파크캐슬
          전용 84㎡는 규제 발표 전 호가 7억 5,000만 원에서 발표 후 8억 원으로 올랐다는 보도가 있고, 6·30 이후
          병점구 부동산 매매 대금 증가율이 약 201%로 집계됐습니다.
        </p>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">기흥 인접 — 수원 권선·안양 만안</h3>
        <p>
          용인 기흥구 규제 이후 <strong>수원 권선구</strong>·<strong>안양 만안구</strong> 등 인접 비규제지에서 호가
          상승·거래 증가가 포착됐다는 보도가 있습니다. 권선구는 규제 발표 이후 매매 대금 증가율 약 146%로
          거론됐습니다.
        </p>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">동탄 대체 — 평택</h3>
        <p>
          동탄 매수 문이 좁아지자 <strong>평택</strong> 등 더 멀리 떨어진 비규제지로 수요가 이동했다는 보도도
          있습니다. GTX·KTX 등 교통 호재와 저가 아파트 비중이 커, 「동탄 대신 평택」이라는 표현이 쓰인 사례가
          있습니다. 다만 출퇴근·생활권이 동탄·구리 인접지와 다르므로, 실수요·투자 목적을 구분해 봐야 합니다.
        </p>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              풍선효과 인접지 — 규제 여부·매수 시 참고(2026년 7월)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  인접 규제지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  7월 기준 규제(요약)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  남양주
                </th>
                <td className="border-border border-b px-3 py-2.5">구리</td>
                <td className="border-border border-b px-3 py-2.5">비규제(일반 LTV 70% 등). 추후 지정 여부 확인</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  병점(화성)
                </th>
                <td className="border-border border-b px-3 py-2.5">동탄</td>
                <td className="border-border border-b px-3 py-2.5">동탄구와 행정구역 분리, 비규제</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  권선(수원)
                </th>
                <td className="border-border border-b px-3 py-2.5">기흥</td>
                <td className="border-border border-b px-3 py-2.5">비규제</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  평택
                </th>
                <td className="px-3 py-2.5">동탄(생활·투자 대체)</td>
                <td className="px-3 py-2.5">비규제. 거리·교통 여건 별도 검토</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rbe-demand">
        <h2 id="guide-rbe-demand" className="text-foreground text-xl font-semibold tracking-tight">
          실수요 vs 투기·갭투자
        </h2>
        <p>
          풍선효과를 설명할 때 <strong>실수요 이동</strong>과 <strong>투기·갭투자</strong>를 구분하는 것이
          중요합니다. 규제 지역과 생활권을 공유하는 비규제지는 대출·취득세 부담이 적어, 실거주 목적의 대체지로
          선택될 수 있습니다.
        </p>
        <p>
          한편 일부 전문가·업계 분석은, 교통·정주 여건 대비 호가만 빠르게 오르는 구간에서는{" "}
          <strong>실수요보다 투기·갭투자</strong> 비중이 크다는 지적도 있습니다. 진입 장벽이 낮은 저가 아파트·
          전세가율이 높은 단지를 겨냥한 매수가 늘었다는 해석입니다. 갭투자·토허·전세대출 규제는{" "}
          <Link
            href="/guide/dongtan-giheung-guri-gap-investment-land-permit-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            갭투자·토허 가이드
          </Link>
          를 참고하세요.
        </p>
        <p>
          우리은행 부동산연구원 등에서는 규제·비규제 간 가격·규제 격차가 당분간 대체 수요를 자극할 수 있지만,{" "}
          <strong>대출총량 규제·취득세 중과·고금리</strong> 등으로 과거만큼 강한 풍선효과로 이어질지는 지켜봐야
          한다는 전망도 나옵니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rbe-check">
        <h2 id="guide-rbe-check" className="text-foreground text-xl font-semibold tracking-tight">
          인접 비규제지 매수 전 확인
        </h2>
        <p>
          풍선효과로 거론되는 지역을 매수할 때도, 「비규제」라는 이유만으로 충분한 자기자금·상환 여력이 있는지
          확인해야 합니다. 호가·신고가 상승과 실제 체결·대출 가능액은 다를 수 있습니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>규제 지정 여부</strong> — 남양주·병점 등도 추후 조정·토허 지정 가능성을 국토부·지자체 공지로
            확인
          </li>
          <li>
            <strong>LTV·DSR</strong> — 비규제지라도 DSR 40%·스트레스 DSR·기존 대출에 따라 한도가 줄 수 있음.{" "}
            <Link href="/ltv-calculator" className="text-primary underline-offset-4 hover:underline">
              LTV 계산기
            </Link>
            ·{" "}
            <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
              DSR 계산기
            </Link>
          </li>
          <li>
            <strong>취득세</strong> — 2주택 이상·조정 지정 시 8% 중과. 취득일 기준 적용.{" "}
            <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              취득세 계산기
            </Link>
          </li>
          <li>
            <strong>실거주·교통</strong> — 평택 등 원거리 대체지는 출퇴근·학군·생활 인프라를 별도로 비교
          </li>
          <li>
            <strong>호가 vs 실거래</strong> — 풍선효과 기대로 매도호가만 먼저 오른 경우, 실거래가·전세가율과
            괴리 확인
          </li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="guide-rbe-mistakes">
        <h2 id="guide-rbe-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「풍선효과 = 무조건 집값 상승」</strong> — 규제 지역은 거래·상승폭이 둔화되고, 인접지만
            상대적으로 오를 수 있습니다. 전국·전 지역 동반 상승을 뜻하지 않습니다.
          </li>
          <li>
            <strong>「비규제지면 LTV 70% 확정」</strong> — DSR·한도 6억·다주택·고가주택 규정을 함께 봐야 합니다.
          </li>
          <li>
            <strong>「동탄 막히면 병점·평택은 안전」</strong> — 병점·남양주 등도 거래·가격이 빠르게 오르면 추가
            규제 검토 대상이 될 수 있습니다.
          </li>
          <li>
            <strong>「풍선효과는 모두 투기」</strong> — 실수요 대체(자기자금·대출 부담 회피)와 투기·갭투자가
            섞일 수 있습니다. 목적·상환 계획을 구분해야 합니다.
          </li>
          <li>
            <strong>「호가 오른 만큼 수익 확정」</strong> — 호가·신고가는 참고일 뿐, 실제 매도 시점·대출·세금을
            반영한 순수익과 다릅니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rbe-checklist">
        <h2 id="guide-rbe-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          풍선효과 지역 매수·관망 전 확인
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
                  매물 주소의 조정·투기과열·토허 지정 여부(국토부·지자체)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  LTV·DSR·스트레스 DSR 반영 실제 대출 가능액
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  주택 수·2주택 취득세 8% 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  호가·신고가 vs 최근 실거래·전세가율
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  인접 규제지(동탄·기흥·구리)와 생활·출퇴근 여건 비교
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 규제 지정·거래·가격은 정책·시장에 따라 수시 변동됩니다. 최신 지정 현황은{" "}
          <a
            href="https://www.molit.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            국토교통부(molit.go.kr)
          </a>
          · 실거래 공개시스템·신청 금융기관에서 확인하세요.
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
            → 동탄·기흥·구리 LTV 40%·6억·7억·8억 매수 예시는 LTV 가이드에서 볼 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/regulated-area-designation-effects-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 규제지역 지정 시 대출·취득세·양도세 변화는 전국 공통 가이드에서 정리했습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/dongtan-giheung-guri-second-home-acquisition-tax-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 동탄·기흥·구리 2주택 취득세 8% 예시는 취득세 가이드에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
