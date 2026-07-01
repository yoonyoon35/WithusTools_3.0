import Link from "next/link";

export const dongtanGiheungGuriRegulatedAreaLtv2026GuideMeta = {
  slug: "dongtan-giheung-guri-regulated-area-ltv-2026-guide",
  title: "동탄·기흥·구리 규제지역 지정…7월 1일 LTV 40% 뭐가 달라지나",
  description:
    "2026년 6월 30일 발표 화성 동탄구·용인 기흥구·구리시 규제지역 지정 배경, 7월 1일 LTV 40%·대출한도·생애최초 70%, 6억·7억·8억 매수 예시, 막차 계약·DSR과 부대비용 안내.",
  updated: "2026년 7월 1일",
} as const;

export function DongtanGiheungGuriRegulatedAreaLtv2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-dggl-intro">
        <h2 id="guide-dggl-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 30일 발표 기준
        </h2>
        <p>
          국토교통부는 6월 30일 <strong>화성시 동탄구, 용인시 기흥구, 구리시</strong>를 투기과열지구·조정대상지역으로
          신규 지정한다고 발표했습니다. 효력은 <strong>2026년 7월 1일</strong>부터입니다. 경기도는 같은 3곳을{" "}
          <strong>7월 5일</strong>부터 토지거래허가구역(2027년 12월 31일까지)으로 지정했습니다. 수도권 규제지역은
          기존 37곳에 3곳이 더해 <strong>총 40곳</strong>이 됩니다.
        </p>
        <p>
          지정 배경은 2025년 10·15 대책 이후 <strong>비규제지역으로 풍선효과</strong>가 나타난 지역에 투자 수요가
          유입되면서 집값·거래량이 빠르게 늘었다는 점입니다. 국토부는 동탄·기흥은 반도체 호황·GTX 등 교통 호재,
          구리는 서울 인접 역세권 수요를 이유로 들었습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-areas">
        <h2 id="guide-dggl-areas" className="text-foreground text-xl font-semibold tracking-tight">
          어디가 해당되나
        </h2>
        <p>행정구역 <strong>전역</strong>이 대상입니다. 동탄은 2026년 2월 화성시 동탄구 신설 이후 구 단위로 지정됐습니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신규 규제지역 3곳
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  관할
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  동탄
                </th>
                <td className="border-border border-b px-3 py-2.5">경기 화성시 동탄구</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기흥
                </th>
                <td className="border-border border-b px-3 py-2.5">경기 용인시 기흥구</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  구리
                </th>
                <td className="px-3 py-2.5">경기 구리시</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          상반기 실거래 신고 기준 동탄구 거래는 전년 대비 약 112%, 구리시 약 135%, 기흥구 약 70% 늘었고, 동탄·구리
          평균 매매가는 전년 상반기 대비 각각 약 11.4%·10.8% 올랐습니다(국토부 실거래·보도 인용).
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-schedule">
        <h2 id="guide-dggl-schedule" className="text-foreground text-xl font-semibold tracking-tight">
          시행 일정
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지정·시행 시점
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시행일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  투기과열지구·조정대상지역
                </th>
                <td className="border-border border-b px-3 py-2.5">2026년 7월 1일</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  토지거래허가구역(경기도, 아파트)
                </th>
                <td className="px-3 py-2.5">2026년 7월 5일 ~ 2027년 12월 31일</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          대출 규제는 7월 1일, 토지거래허가·실거주 의무 등은 7월 5일부터 적용됩니다.{" "}
          <Link
            href="/guide/dongtan-giheung-guri-gap-investment-land-permit-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            갭투자·토허구역
          </Link>
          는 별도 가이드에서 정리했습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-ltv">
        <h2 id="guide-dggl-ltv" className="text-foreground text-xl font-semibold tracking-tight">
          LTV — 누가 40%인가
        </h2>
        <p>정부 발표 기준, 이 3곳이 규제지역이 되면 주택담보대출 LTV가 아래처럼 적용됩니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 수별 LTV(7월 1일 이후)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지정 전(비규제)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지정 후
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  처분조건부 1주택
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 주택 구입
                </th>
                <td className="border-border border-b px-3 py-2.5">80%(비수도권 등)</td>
                <td className="border-border border-b px-3 py-2.5">70%(대출 후 6개월 내 전입)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  유주택자·추가 매수
                </th>
                <td className="px-3 py-2.5">60% 등</td>
                <td className="px-3 py-2.5">신규 주담대 원칙적 제한</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 생애최초·처분조건부 요건·금리 유형별 적용은 금융기관 심사 기준을 따릅니다.
        </p>
        <p>
          <strong>처분조건부 1주택</strong>은 기존 주택을 일정 기한 안에 처분하기로 약정하고 새 집을 사는 경우로,
          무주택과 같이 40% LTV가 적용됩니다. <strong>생애최초</strong>는 주택을 한 번도 소유한 적 없는 세대가 첫
          주택을 살 때 70% LTV가 열리지만, 대출 실행 후 <strong>6개월 내 전입</strong>이 붙습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-cap">
        <h2 id="guide-dggl-cap" className="text-foreground text-xl font-semibold tracking-tight">
          대출 한도(수도권·규제지역·구입 목적)
        </h2>
        <p>LTV와 별도로, 주택 가격 구간에 따라 주택담보대출 <strong>최대 한도</strong>가 정해집니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 가격별 대출 한도 상한
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  최대 대출
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">6억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 원 초과 ~ 25억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">4억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  25억 원 초과
                </th>
                <td className="px-3 py-2.5">2억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          LTV 40%와 한도는 <strong>둘 다</strong> 적용됩니다. 예를 들어 20억 원 아파트는 LTV상 8억 원까지 나올 수
          있어도, 15억~25억 구간 한도 때문에 실제 대출은 <strong>4억 원</strong>이 상한입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-examples">
        <h2 id="guide-dggl-examples" className="text-foreground text-xl font-semibold tracking-tight">
          무주택·6억·7억 매수 시 대출 차이
        </h2>
        <p className="text-muted-foreground text-sm">LTV만 비교. 15억 이하 한도 6억 원 이내, DSR·스트레스 DSR 별도.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매가별 최대 대출·필요 자기자금
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지정 전(70%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지정 후(40%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  자기자금 차이
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 4억 2,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">대출 2억 4,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">+1억 8,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 4억 9,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">대출 2억 8,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">+2억 1,000만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  8억 원
                </th>
                <td className="px-3 py-2.5">대출 5억 6,000만 원</td>
                <td className="px-3 py-2.5">대출 3억 2,000만 원</td>
                <td className="px-3 py-2.5">+2억 4,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          동탄·구리 상반기 평균 매매가가 7억~8억 원대로 올라온 만큼, 40% LTV만 적용해도 자기자금이 2억 원 넘게
          늘어날 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-first">
        <h2 id="guide-dggl-first" className="text-foreground text-xl font-semibold tracking-tight">
          생애최초 70% — 7억 원 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          생애최초 요건 충족 시 40%가 아닌 70% LTV가 적용될 수 있습니다. 7억 원 매수 기준 비교입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              7억 원 매수, 생애최초 vs 일반 무주택
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  최대 대출
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  필요 자기자금(대출만)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 무주택(40%)
                </th>
                <td className="border-border border-b px-3 py-2.5">2억 8,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">4억 2,000만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  생애최초(70%)
                </th>
                <td className="px-3 py-2.5">4억 9,000만 원</td>
                <td className="px-3 py-2.5">2억 1,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          차이는 약 2억 1,000만 원입니다. 다만 생애최초는 소득·가격 상한·기존 주택 보유 이력 등 요건을 모두
          충족해야 하고, 대출 후 <strong>6개월 내 전입</strong>이 붙습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-dsr">
        <h2 id="guide-dggl-dsr" className="text-foreground text-xl font-semibold tracking-tight">
          LTV만으로 끝나지 않는다 — DSR·스트레스 DSR
        </h2>
        <p>
          LTV 40%·한도 6억을 맞춰도, 연소득 대비 상환 부담(DSR)이나 스트레스 DSR(금리 +3%p 가산 등)에서 대출이
          더 줄어들 수 있습니다. 특히 기존 대출·전세대출·신용대출이 있으면 동탄·기흥·구리 매수 한도가 LTV 표만큼
          나오지 않는 경우가 많습니다.
        </p>
        <p>
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          에서 본인 소득·기존 대출을 넣어 실제 받을 수 있는 금액을 먼저 확인하는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-costs">
        <h2 id="guide-dggl-costs" className="text-foreground text-xl font-semibold tracking-tight">
          대출 외 잔금일에 필요한 돈
        </h2>
        <p>자기자금은 대출 한도를 뺀 금액에 더해 아래 비용이 붙습니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>취득세</strong> — 무주택·1주택은 일반 세율(6억 원대 약 660만 원 수준). 2주택은 조정지역 8% 중과.{" "}
            <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              취득세 계산기
            </Link>
          </li>
          <li>
            <strong>중개보수·국민주택채권</strong> — 매매가·지역에 따라 달라집니다.
          </li>
          <li>
            <strong>인지대·등기비용</strong> — 소액이지만 잔금 자금에 포함해야 합니다.
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          7억 원 무주택 매수 시 대출 2.8억 + 취득세·중개비 등을 합치면, 표의 「4.2억 자기자금」보다 실제 필요 현금이
          더 클 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-timing">
        <h2 id="guide-dggl-timing" className="text-foreground text-xl font-semibold tracking-tight">
          7월 1일 전에 계약했으면
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              시점별 적용(일반적 해석, 은행별 차이 있음)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  LTV
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6월 계약, 6월 대출 실행·잔금
                </th>
                <td className="border-border border-b px-3 py-2.5">70% 가능(비규제 시점)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6월 계약, 7월 1일 이후 대출 실행·잔금
                </th>
                <td className="border-border border-b px-3 py-2.5">40% 적용 가능성 큼</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7월 1일 이후 계약
                </th>
                <td className="px-3 py-2.5">40%(생애최초·처분조건부 예외 별도)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          6월에 가계약·본계약을 마치고 대출을 신청하는 사례가 보도됐지만,{" "}
          <strong>70% LTV를 받을 수 있는지는 대출 신청·실행 시점과 금융기관 기준</strong>에 따릅니다. 계약서에
          적힌 날짜만으로 결정되지 않으니, 잔금일 전에 은행에 서면으로 확인하는 것이 안전합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dggl-mistakes">
        <h2 id="guide-dggl-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「규제지역이면 무주택도 LTV 70%」</strong> — 일반 조정지역은 70%이지만, 이번 3곳은{" "}
            <strong>투기과열지구</strong>가 겹쳐 무주택도 40%입니다.
          </li>
          <li>
            <strong>「6월에 계약했으니 70% 확정」</strong> — 대출 실행일이 7월 1일 이후면 40%가 적용될 수 있습니다.
          </li>
          <li>
            <strong>「LTV 40%면 대출 2.8억이면 된다」</strong> — DSR·기존 대출·한도 6억 규칙을 함께 봐야 합니다.
          </li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dggl-other">
        <h2 id="guide-dggl-other" className="text-foreground text-xl font-semibold tracking-tight">
          대출 외에 같이 바뀌는 것(요약)
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>2주택 취득세 8%</strong> — 조정대상지역 중과.{" "}
            <Link
              href="/guide/dongtan-giheung-guri-second-home-acquisition-tax-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              취득세 예시
            </Link>
          </li>
          <li>
            <strong>다주택자 양도세 중과</strong> — 조정지역 내 주택 매도 시(2026년 5월 10일부터 재시행 중)
          </li>
          <li>
            <strong>청약</strong> — 1순위 2년 가입·세대주 요건, 재당첨 제한·가점제 강화
          </li>
          <li>
            <strong>분양권 전매</strong> — 수도권 규제지역 기준 3년 금지
          </li>
        </ul>
        <p>
          전국 공통 설명은{" "}
          <Link href="/guide/regulated-area-designation-effects-2026-guide" className="text-primary underline-offset-4 hover:underline">
            규제지역 지정 시 달라지는 것
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-checklist">
        <h2 id="guide-dggl-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          동탄·기흥·구리 매수 전 확인
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
                  매물 주소가 동탄구·기흥구·구리시 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  7월 1일 이후 LTV 40%·한도 6억 반영 자기자금
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  생애최초·처분조건부 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  7월 5일 이후 토지거래허가·실거주 의무
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 지정 범위·LTV·한도는 국토교통부·금융위원회 고시와 은행별 기준에 따릅니다. 최신 내용은{" "}
          <a
            href="https://www.molit.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            국토교통부(molit.go.kr)
          </a>
          ·{" "}
          <Link href="/ltv-calculator" className="text-primary underline-offset-4 hover:underline">
            LTV 계산기
          </Link>
          · 신청 금융기관에서 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → LTV와 함께 DSR·스트레스 DSR 한도는 DSR 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
