import Link from "next/link";

export const gwangjuHonamSemiconductorLandPermit2026GuideMeta = {
  slug: "gwangju-honam-semiconductor-land-permit-2026-guide",
  title: "광주·나주·장성·화순 토지거래허가…7월 14일부터 허가·실거주가 필요한 것",
  description:
    "2026년 7월 9일 지정 호남 반도체 클러스터 광주 군공항 인근 토지거래허가구역(7월 14일 시행), 364.19㎢ 대상·면적 기준, 주택 2년 실거주·5년 실이용, 동탄과 다른 점, 허가 절차·체크리스트.",
  updated: "2026년 7월 15일",
} as const;

export function GwangjuHonamSemiconductorLandPermit2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ghlp-intro">
        <h2 id="guide-ghlp-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 9일 지정 · 7월 14일 시행
        </h2>
        <p>
          국토교통부는 7월 9일 중앙도시계획위원회 심의를 거쳐, 호남 반도체 첨단국가산단(반도체 클러스터) 예정지인{" "}
          <strong>광주 군공항 부지와 인근 일대 364.19㎢</strong>를 토지거래허가구역으로 지정했습니다. 효력은{" "}
          <strong>7월 14일</strong>부터 2028년 7월 13일까지 2년간입니다.
        </p>
        <p>
          6월 29일 정부가 호남권 반도체 메가프로젝트를 발표한 뒤 「칩세권」 투기 우려가 커지자 선제 조치로 나온
          지정입니다. 동탄·기흥·구리는 규제지역과 토허가 겹치지만, 광주권은{" "}
          <strong>토지거래허가구역만</strong> 새로 묶였습니다. LTV·취득세 중과는 그대로이고,{" "}
          <strong>매매 계약 전 허가·실거주·실이용 의무</strong>가 핵심입니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-ghlp-area" className="text-primary underline-offset-4 hover:underline">
              어디가 해당되나 — 364.19㎢ 범위
            </a>
          </li>
          <li>
            <a href="#guide-ghlp-permit" className="text-primary underline-offset-4 hover:underline">
              토지거래허가 — 무엇이 달라지나
            </a>
          </li>
          <li>
            <a href="#guide-ghlp-threshold" className="text-primary underline-offset-4 hover:underline">
              허가 면적 기준 — 용도지역별
            </a>
          </li>
          <li>
            <a href="#guide-ghlp-dongtan" className="text-primary underline-offset-4 hover:underline">
              동탄·기흥·구리와 다른 점
            </a>
          </li>
          <li>
            <a href="#guide-ghlp-procedure" className="text-primary underline-offset-4 hover:underline">
              허가 절차·관할 구청
            </a>
          </li>
          <li>
            <a href="#guide-ghlp-residence" className="text-primary underline-offset-4 hover:underline">
              실거주·실이용 의무
            </a>
          </li>
          <li>
            <a href="#guide-ghlp-example" className="text-primary underline-offset-4 hover:underline">
              주택 거래 예시 — 아파트·단독주택
            </a>
          </li>
          <li>
            <a href="#guide-ghlp-checklist" className="text-primary underline-offset-4 hover:underline">
              매수·매도 전 확인
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-ghlp-area">
        <h2 id="guide-ghlp-area" className="text-foreground text-xl font-semibold tracking-tight">
          어디가 해당되나 — 364.19㎢ 범위
        </h2>
        <p>
          대상은 법정동·리 경계를 기준으로 확정됐습니다. 반도체 산단이 들어설 군공항 부지(국·공유지)는 제외되지만,
          부지 내 <strong>사유지 11필지</strong>는 허가 대상에 포함됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              행정구역별 면적(국토교통부 발표)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  면적
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  광주 광산구
                </th>
                <td className="border-border border-b px-3 py-2.5">124.98㎢</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전남 나주시
                </th>
                <td className="border-border border-b px-3 py-2.5">97.93㎢</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  광주 남구
                </th>
                <td className="border-border border-b px-3 py-2.5">44.76㎢</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  광주 북구
                </th>
                <td className="border-border border-b px-3 py-2.5">28.72㎢</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  광주 서구
                </th>
                <td className="border-border border-b px-3 py-2.5">26.94㎢</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  광주 동구
                </th>
                <td className="border-border border-b px-3 py-2.5">22.66㎢</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전남 화순군
                </th>
                <td className="border-border border-b px-3 py-2.5">12.77㎢</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  전남 장성군
                </th>
                <td className="px-3 py-2.5">5.43㎢</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          개발 예정지 주변뿐 아니라 <strong>장성·화순 등 인접 지역</strong>까지 넓게 묶여, 지역 주민·업계에서
          재산권·거래 불편 우려가 제기되고 있습니다. 내 매물이 해당되는지는 관할 구·시·군청 토지거래허가 담당
          부서에서 확인하는 것이 가장 정확합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghlp-permit">
        <h2 id="guide-ghlp-permit" className="text-foreground text-xl font-semibold tracking-tight">
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
                <td className="border-border border-b px-3 py-2.5">2026년 7월 14일 ~ 2028년 7월 13일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  용도지역별 일정 면적 초과 토지·부속 건물(주택 포함)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  절차
                </th>
                <td className="border-border border-b px-3 py-2.5">매매계약 체결 전 관할 시장·구청장·군수 허가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  허가 후
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  허가 목적대로 이용(주택 2년 실거주, 토지 최대 5년 실이용)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  위반 시
                </th>
                <td className="px-3 py-2.5">이행명령·취득가액 최대 10% 이행강제금(매년)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          허가 없이 계약하면 <strong>무효</strong>가 될 수 있습니다. 국토부는 용인 반도체 국가산단과{" "}
          <strong>동일한 면적 기준</strong>을 적용했다고 밝혔습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghlp-threshold">
        <h2 id="guide-ghlp-threshold" className="text-foreground text-xl font-semibold tracking-tight">
          허가 면적 기준 — 용도지역별
        </h2>
        <p>아래 면적을 <strong>초과</strong>하는 토지·주택을 거래할 때 허가가 필요합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              도시지역(용도지역별)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  용도지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  허가 기준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주거지역
                </th>
                <td className="border-border border-b px-3 py-2.5">60㎡ 초과</td>
                <td className="border-border border-b px-3 py-2.5">
                  아파트·연립 등 <strong>대지 지분</strong> 60㎡ 초과도 해당
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상업·공업지역
                </th>
                <td className="border-border border-b px-3 py-2.5">각 150㎡ 초과</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  녹지지역
                </th>
                <td className="border-border border-b px-3 py-2.5">200㎡ 초과</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  용도 미지정
                </th>
                <td className="px-3 py-2.5">60㎡ 초과</td>
                <td className="px-3 py-2.5">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              도시지역 외(농·임야 등)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  허가 기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  농지
                </th>
                <td className="border-border border-b px-3 py-2.5">500㎡ 초과</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임야
                </th>
                <td className="border-border border-b px-3 py-2.5">1,000㎡ 초과</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  농지·임야 외
                </th>
                <td className="px-3 py-2.5">250㎡ 초과</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          일반 아파트는 대지 지분이 60㎡를 넘는 경우가 많아 <strong>대부분 허가 대상</strong>입니다. 소형
          다세대·오피스텔 등은 지분 면적을 등기부등본·분양서류로 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghlp-dongtan">
        <h2 id="guide-ghlp-dongtan" className="text-foreground text-xl font-semibold tracking-tight">
          동탄·기흥·구리와 다른 점
        </h2>
        <p>
          2026년 7월 수도권·호남권 토허 지정은 같은 「투기 차단」 목적이지만, 적용 방식이 다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              광주권 vs 동탄·기흥·구리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  광주·나주·장성·화순
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  동탄·기흥·구리
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  배경
                </th>
                <td className="border-border border-b px-3 py-2.5">호남 반도체 클러스터·군공항 이전</td>
                <td className="border-border border-b px-3 py-2.5">집값 급등·갭투자·풍선효과</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  규제지역
                </th>
                <td className="border-border border-b px-3 py-2.5">별도 지정 없음(토허만)</td>
                <td className="border-border border-b px-3 py-2.5">투기과열·조정대상(7/1~) + 토허(7/5~)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  허가 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">용도별 토지·주택 전반</td>
                <td className="border-border border-b px-3 py-2.5">경기도 지정: 해당 지역 내 아파트만</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">규제지역 LTV 40% 미적용</td>
                <td className="border-border border-b px-3 py-2.5">무주택·유주택 LTV 40% 등 적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  지정 기간
                </th>
                <td className="px-3 py-2.5">2028년 7월 13일까지</td>
                <td className="px-3 py-2.5">2027년 12월 31일까지</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          광주권 실거주 매수자는 LTV는 수도권 규제지역보다 유리할 수 있지만,{" "}
          <strong>토지·단독주택·상업용 토지 거래까지 허가</strong>가 걸립니다. 동탄 쪽 규제는{" "}
          <Link
            href="/guide/dongtan-giheung-guri-gap-investment-land-permit-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            동탄·기흥·구리 갭투자·토허 가이드
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghlp-procedure">
        <h2 id="guide-ghlp-procedure" className="text-foreground text-xl font-semibold tracking-tight">
          허가 절차·관할 구청
        </h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>매매계약 전</strong> 관할 지자체에 토지거래허가 신청(매수·매도 당사자 또는 대리인)
          </li>
          <li>
            <strong>이용 목적</strong>(실거주·자가사업 등)과 <strong>자금 출처</strong> 제출·심사
          </li>
          <li>
            허가 통보 후 <strong>계약 → 잔금 → 등기</strong> 순서로 진행
          </li>
        </ol>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              관할 기관(매물 소재지 기준)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매물 위치
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  허가 관청
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  광주 각 구
                </th>
                <td className="border-border border-b px-3 py-2.5">해당 구청(동·서·남·북·광산구)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  나주시
                </th>
                <td className="border-border border-b px-3 py-2.5">나주시청</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장성군·화순군
                </th>
                <td className="border-border border-b px-3 py-2.5">장성군청·화순군청</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          허가 목적이 실거주가 아니거나 자금조달계획·이용 계획을 입증하지 못하면 <strong>거절</strong>될 수
          있습니다. 공인중개사를 통해 거래할 때도 계약서 작성 전 허가 완료 여부를 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghlp-residence">
        <h2 id="guide-ghlp-residence" className="text-foreground text-xl font-semibold tracking-tight">
          실거주·실이용 의무
        </h2>
        <p>허가를 받은 뒤에는 신고한 목적대로 토지·주택을 이용해야 합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              허가 후 의무
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  의무
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  위반 시
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택(아파트·단독 등)
                </th>
                <td className="border-border border-b px-3 py-2.5">허가 후 2년간 실거주</td>
                <td className="border-border border-b px-3 py-2.5" rowSpan={2}>
                  이행명령·취득가액 최대 10% 이행강제금(매년)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  토지·기타
                </th>
                <td className="px-3 py-2.5">허가 목적대로 최대 5년간 실이용</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          「2년 실거주」는 토허 제도의 의무이고, 1가구 1주택 양도세 비과세의 2년 보유·2년 거주 요건과는{" "}
          <strong>별도 제도</strong>입니다.{" "}
          <Link
            href="/guide/regulated-area-designation-effects-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            규제지역 지정 시 달라지는 것
          </Link>
          가이드에서 토허·대출·세금을 함께 비교할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghlp-example">
        <h2 id="guide-ghlp-example" className="text-foreground text-xl font-semibold tracking-tight">
          주택 거래 예시 — 아파트·단독주택
        </h2>
        <p className="text-muted-foreground text-sm">
          실거주 목적 매수를 가정한 흐름입니다. 투기·단기 보유 목적은 허가 거절 가능성이 큽니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              광산구 아파트 5억 · 대지 지분 80㎡ · 실거주 매수
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  할 일
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1
                </th>
                <td className="border-border border-b px-3 py-2.5">광산구청에 허가 신청(실거주 목적)</td>
                <td className="border-border border-b px-3 py-2.5">대지 지분 60㎡ 초과 → 허가 대상</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2
                </th>
                <td className="border-border border-b px-3 py-2.5">자금조달계획서·입주계획서 등 제출</td>
                <td className="border-border border-b px-3 py-2.5">대출·자기자금 출처 입증</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3
                </th>
                <td className="border-border border-b px-3 py-2.5">허가 후 매매계약·잔금·등기</td>
                <td className="border-border border-b px-3 py-2.5">허가 전 계약 금지</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  4
                </th>
                <td className="px-3 py-2.5">허가일로부터 2년간 실거주</td>
                <td className="px-3 py-2.5">전입·거주 소명 필요</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          7월 13일까지 계약한 매물은 토허 전이라 허가 없이 진행될 수 있지만,{" "}
          <strong>7월 14일 이후 신규 계약</strong>부터는 반드시 허가를 받아야 합니다. 7월 13일 계약·7월 14일 이후
          잔금인 경우에도 허가 필요 여부를 구청에 확인하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ghlp-mistakes">
        <h2 id="guide-ghlp-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「규제지역이 아니니까 대출·세금은 그대로」</strong> — 맞지만, 토허구역이면 계약 전 허가·실거주
            의무는 별도로 적용됩니다.
          </li>
          <li>
            <strong>「아파트만 해당」</strong> — 동탄·기흥·구리는 아파트 한정이지만, 광주권은{" "}
            <strong>용도별 토지·주택 전반</strong>이 대상입니다.
          </li>
          <li>
            <strong>「군공항 부지는 다 제외」</strong> — 국·공유지는 제외되나, 부지 내 사유지 11필지는 포함됩니다.
          </li>
          <li>
            <strong>「허가만 받으면 바로 전매 가능」</strong> — 주택은 2년 실거주, 토지는 목적대로 최대 5년
            이용해야 합니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghlp-checklist">
        <h2 id="guide-ghlp-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          매수·매도 전 확인
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
                  매물이 토허구역·허가 면적 기준에 해당하는지
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  계약일이 7월 14일 이후인지(허가 필요 시점)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  관할 구·시·군청 허가 신청·이용 목적(실거주 등) 준비
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  2년 실거주·5년 실이용 계획 수립
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  취득세·중개수수료 등 부대비용(규제지역과 별도) 확인
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 허가 요건·심사 기준·처리 기간은 지자체마다 다를 수 있습니다. 취득세는{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          , 대출 한도는{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          로 참고하고, 최종 확인은 관할 구·시·군청과 금융기관에 하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p className="text-foreground font-medium">관련 가이드</p>
        <p>
          <Link
            href="/guide/regulated-area-designation-effects-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 토지거래허가·규제지역·조정지역 차이는 규제지역 지정 효과 가이드에서 정리했습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/dongtan-giheung-guri-gap-investment-land-permit-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 수도권 동탄·기흥·구리 토허·갭투자 규제는 해당 가이드를 참고하세요.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/real-estate-balloon-effect-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 대규모 개발 호재 지역의 토허 지정 배경·풍선효과는 부동산 풍선효과 가이드에서 볼 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
