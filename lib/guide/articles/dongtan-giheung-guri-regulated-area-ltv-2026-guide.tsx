import Link from "next/link";

export const dongtanGiheungGuriRegulatedAreaLtv2026GuideMeta = {
  slug: "dongtan-giheung-guri-regulated-area-ltv-2026-guide",
  title: "동탄·기흥·구리 규제지역 — 대출·취득세·토지거래허가",
  description:
    "동탄구·기흥구·구리시는 2026년 7월 1일 규제지역이 되어 LTV 40%·한도 6억·6개월 내 전입 의무와 취득세 2주택 8%·3주택 12%가 적용됩니다. 7월 5일부터는 아파트 매매에 토지거래허가(2년 실거주)도 필요합니다.",
  updated: "2026년 11월 4일",
} as const;

type TableRow = readonly [string, ...string[]];

function InfoTable({
  caption,
  heads,
  rows,
  minWidth = "32rem",
}: {
  caption: string;
  heads: readonly string[];
  rows: readonly TableRow[];
  minWidth?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm" style={{ minWidth }}>
        <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
          {caption}
        </caption>
        <thead>
          <tr className="bg-muted/40">
            {heads.map((h) => (
              <th key={h} scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const last = i === rows.length - 1;
            const border = last ? "" : "border-border border-b";
            return (
              <tr key={row[0]} className={last ? "bg-muted/20" : undefined}>
                <th scope="row" className={`${border} px-3 py-2.5 font-medium`}>
                  {row[0]}
                </th>
                {row.slice(1).map((cell, j) => (
                  <td key={j} className={`${border} px-3 py-2.5`}>
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const linkClass = "text-primary underline-offset-4 hover:underline";

export function DongtanGiheungGuriRegulatedAreaLtv2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-dggl-intro">
        <h2 id="guide-dggl-intro" className="text-foreground text-xl font-semibold tracking-tight">
          무엇이 언제 바뀌었나
        </h2>
        <p>
          국토교통부는 2026년 6월 30일 <strong>화성시 동탄구, 용인시 기흥구, 구리시</strong>를 투기과열지구·조정대상지역으로
          신규 지정한다고 발표했고, 효력은 <strong>7월 1일</strong>부터입니다. 경기도는 같은 3곳을 <strong>7월 5일부터
          2027년 12월 31일까지</strong> 토지거래허가구역(아파트 대상)으로 지정했습니다. 수도권 규제지역은 기존 37곳에 3곳이 더해
          <strong> 40곳</strong>이 됐습니다.
        </p>
        <p>
          배경은 2025년 10·15 대책 이후 비규제지역으로 수요가 옮겨 가는{" "}
          <Link href="/guide/real-estate-balloon-effect-2026-guide" className={linkClass}>
            풍선효과
          </Link>
          입니다. 한국부동산원 6월 넷째 주 기준 올해 아파트 매매가격 누적 상승률은 동탄구 11.38%, 구리시 7.87%, 기흥구 6.21%였습니다.
          동탄·기흥은 반도체 호황과 GTX-A 등 교통 호재, 구리는 서울 인접 역세권 수요가 거론됐습니다.
        </p>
        <InfoTable
          caption="지정 대상과 시행일"
          heads={["구분", "내용"]}
          rows={[
            ["대상 지역", "화성시 동탄구, 용인시 기흥구, 구리시(행정구역 전역)"],
            ["투기과열지구·조정대상지역", "2026년 7월 1일 효력(대출·세제 규제 즉시 적용)"],
            ["토지거래허가구역(경기도)", "2026년 7월 5일 ~ 2027년 12월 31일, 허가 대상은 아파트"],
          ]}
        />
      </section>

      <section className="space-y-3" aria-labelledby="guide-dggl-summary">
        <h2 id="guide-dggl-summary" className="text-foreground text-xl font-semibold tracking-tight">
          한눈에 보는 달라진 점
        </h2>
        <InfoTable
          caption="규제지역 지정으로 달라지는 것(요약)"
          heads={["분야", "핵심 내용", "자세히"]}
          minWidth="36rem"
          rows={[
            ["대출", "무주택·처분조건부 1주택 LTV 70% → 40%, 유주택자 구입 목적 주담대 불가, 6개월 내 전입", "아래 ‘대출’"],
            ["취득세", "2주택 8%, 3주택 이상 12% 중과(지방교육세 별도)", "아래 ‘취득세’"],
            ["토지거래허가", "아파트 매매계약 전 구청 허가, 취득 후 2년 실거주", "아래 ‘토지거래허가’"],
            ["양도세", "다주택자 조정지역 주택 양도 시 중과(+20%p·+30%p)·장기보유특별공제 배제", "아래 ‘양도세’"],
            ["기타", "청약 재당첨 제한, 분양권 전매 제한, 정비사업 조합원 지위 양도 제한", "규제지역 지정 가이드"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          전국 공통 설명은{" "}
          <Link href="/guide/regulated-area-designation-effects-2026-guide" className={linkClass}>
            규제지역 지정 시 달라지는 것
          </Link>
          을 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-ltv">
        <h2 id="guide-dggl-ltv" className="text-foreground text-xl font-semibold tracking-tight">
          대출 — LTV 40%, 한도 6억, 6개월 전입
        </h2>
        <p>
          비규제지역에서 70%였던 무주택자 LTV가 규제지역에서는 <strong>40%</strong>로 낮아집니다. 조정대상지역과 투기과열지구 모두 무주택 기준은
          40%이고, 수도권 유주택자는 규제지역 여부와 관계없이 구입 목적 주담대 LTV가 0%입니다.
        </p>
        <InfoTable
          caption="주택 수별 LTV(7월 1일 이후, 동탄·기흥·구리)"
          heads={["구분", "지정 전(비규제)", "지정 후"]}
          minWidth="34rem"
          rows={[
            ["무주택", "70%", "40%"],
            ["처분조건부 1주택(6개월 내 처분 약정)", "70%", "40%"],
            ["생애최초 주택 구입", "70%(수도권)", "70%(금융당국 표현 60~70%), 6개월 내 전입"],
            ["유주택자·추가 매수", "0%(수도권 다주택은 이미 제한)", "0%(구입 목적 주담대 불가)"],
          ]}
        />
        <p>
          <strong>생애최초</strong>는 세대 구성원 모두 주택을 소유한 적이 없을 때 적용되며 별도 소득·가격 요건은 없습니다. 금융위원회는 이 지역에서도
          생애최초와 정책모기지에는 완화된 LTV(60~70%)가 적용된다고 밝혔고, 실제 비율은 금융회사 심사를 따릅니다. 서민·실수요자 우대
          요건(주택가격 상한·소득)은 별도 제도입니다.
        </p>
        <InfoTable
          caption="수도권·규제지역 주택 가격별 주담대 한도 상한"
          heads={["주택 가격", "최대 대출"]}
          rows={[
            ["15억 원 이하", "6억 원"],
            ["15억 원 초과 ~ 25억 원 이하", "4억 원"],
            ["25억 원 초과", "2억 원"],
          ]}
        />
        <p>
          LTV와 한도는 <strong>둘 다</strong> 적용됩니다. 20억 원 아파트는 LTV 40%로 8억 원이 나와도 15억~25억 구간 한도 때문에 실제로는 4억 원이
          상한입니다. 또한 규제지역 구입 목적 주담대는 대출 실행 후 <strong>6개월 안에 전입</strong>해야 하며, 이는 생애최초뿐 아니라 일반 무주택자도
          같습니다.
        </p>

        <h3 className="text-foreground text-base font-semibold">매매가별 자기자금 차이</h3>
        <p className="text-muted-foreground text-sm">무주택 기준, LTV만 비교(한도 6억 이내). DSR·스트레스 DSR은 별도입니다.</p>
        <InfoTable
          caption="매매가별 최대 대출·필요 자기자금(대출만 기준)"
          heads={["매매가", "지정 전(70%)", "지정 후(40%)", "자기자금 증가"]}
          minWidth="38rem"
          rows={[
            ["6억 원", "대출 4억 2,000만 원", "대출 2억 4,000만 원", "+1억 8,000만 원"],
            ["7억 원", "대출 4억 9,000만 원", "대출 2억 8,000만 원", "+2억 1,000만 원"],
            ["8억 원", "대출 5억 6,000만 원", "대출 3억 2,000만 원", "+2억 4,000만 원"],
          ]}
        />
        <p>
          표의 증가분은 대출만 기준입니다. 취득세·중개보수·등기비용을 더하면 실제 필요한 현금은 더 큽니다. 생애최초라면 7억 원 매수 시 70%로 대출
          4억 9,000만 원, 필요한 자기자금 2억 1,000만 원이라 일반 무주택(대출 2억 8,000만 원, 자기자금 4억 2,000만 원)과 2억 1,000만 원 차이가
          납니다. 다만 생애최초도 6개월 내 전입을 지켜야 합니다.
        </p>

        <h3 className="text-foreground text-base font-semibold">LTV만으로 끝나지 않는다</h3>
        <p>
          연소득 대비 상환 부담인 DSR과 스트레스 DSR(수도권·규제지역 주담대는 스트레스 금리 3.0% 가산)에서 대출이 더 줄 수 있습니다. 본인 소득과 기존
          대출을 넣어{" "}
          <Link href="/dsr-calculator" className={linkClass}>
            DSR 계산기
          </Link>
          로 가능액을 먼저 확인하세요. 은행 자체 한도도 따로 있으니, 예를 들어 KB국민은행의 구입 목적 주담대 3억 원 제한은{" "}
          <Link href="/guide/kb-mortgage-300-million-limit-2026-guide" className={linkClass}>
            KB 3억 한도 가이드
          </Link>
          에서 확인할 수 있습니다.
        </p>

        <h3 className="text-foreground text-base font-semibold">전세대출·신용대출 제한</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>전세대출 보유자</strong>가 투기과열지구 내 3억 원 초과 아파트를 취득하면 전세대출이 회수되고, 취득 후에도 전세대출 이용이 제한됩니다.
            6월 30일까지 매매계약과 계약금 납부를 증명하면 예외가 인정될 수 있습니다.
          </li>
          <li>
            <strong>1억 원 초과 신용대출</strong>을 보유한 차주는 대출 실행일로부터 1년간 규제지역 내 주택 구입이 제한됩니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-tax">
        <h2 id="guide-dggl-tax" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 — 2주택 8%, 3주택 12%
        </h2>
        <p>
          조정대상지역에서 주택을 추가로 취득해 세대 기준 2주택·3주택이 되면 취득세가 중과됩니다. 무주택자나 1주택자가 첫 주택으로 사는 경우는 지정과
          관계없이 일반 세율(1~3%)입니다. 주택 수는 <strong>세대(배우자·함께 사는 직계가족) 합산</strong>으로 따지므로, 배우자 명의로 사도 이미 1주택이 있으면 2주택
          취득입니다.
        </p>
        <InfoTable
          caption="취득 시 세대 주택 수별 취득세율(동탄·기흥·구리, 전용 85㎡ 이하)"
          heads={["상황", "취득세율", "지방교육세 포함 합계(참고)"]}
          minWidth="36rem"
          rows={[
            ["무주택 → 첫 주택", "1~3% 일반 세율", "6억 원 이하 약 1.1%"],
            ["1주택 보유 → 추가 취득(2주택)", "8%", "약 8.4%"],
            ["2주택 보유 → 추가 취득(3주택)", "12%", "약 12.4%"],
            ["일시적 2주택 특례 충족", "1~3% 일반 세율", "—"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          지방교육세는 중과 시 0.4%가 붙습니다. 전용 85㎡ 초과 시 농어촌특별세 0.6%가 추가됩니다. 정확한 금액은{" "}
          <Link href="/acquisition-tax-calculator" className={linkClass}>
            취득세 계산기
          </Link>
          로 확인하세요.
        </p>
        <InfoTable
          caption="7억 원, 2주택, 전용 85㎡ 이하 세목별 계산"
          heads={["세목", "세율", "납부액"]}
          minWidth="30rem"
          rows={[
            ["취득세", "8%", "5,600만 원"],
            ["지방교육세", "0.4%", "280만 원"],
            ["합계", "—", "5,880만 원"],
          ]}
        />
        <p>
          전용 85㎡를 넘으면 농특세 0.6%(7억 기준 420만 원)가 더해져 합계 약 <strong>6,300만 원</strong>입니다.
        </p>
        <InfoTable
          caption="일반 세율(1~3%) vs 2주택 중과, 전용 85㎡ 이하·지방교육세 포함"
          heads={["매매가", "일반 세율", "2주택 중과(8.4%)", "차이"]}
          minWidth="40rem"
          rows={[
            ["5억 원", "약 550만 원", "약 4,200만 원", "+3,650만 원"],
            ["6억 원", "약 660만 원", "약 5,040만 원", "+4,380만 원"],
            ["7억 원", "약 1,283만 원", "약 5,880만 원", "+4,597만 원"],
            ["8억 원", "약 2,053만 원", "약 6,720만 원", "+4,667만 원"],
            ["10억 원", "약 3,300만 원", "약 8,400만 원", "+5,100만 원"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          6억 초과~9억 이하 구간은 가격에 따라 세율이 1~3%로 연속 변하는 방식(취득가액 억 원 × 2/3 − 3, %)이라 일반 세율이 매매가에 비례해 커집니다. 3주택은 12.4%라 6억 원
          약 7,440만 원, 7억 원 약 8,680만 원입니다.
        </p>

        <h3 className="text-foreground text-base font-semibold">계약일이 아닌 취득일, 단 지정 공고일 이전 계약은 예외</h3>
        <p>
          취득세율은 원칙적으로 <strong>취득일(잔금 지급일과 등기일 중 빠른 날)</strong>의 지역 지정 여부로 정해집니다. 다만 지방세법 제13조의2 제4항은 조정대상지역
          지정고시일 이전에 매매계약(분양계약 포함)을 체결하고 <strong>계약금을 지급한 사실이 증빙으로 확인되면</strong> 지정 전에 취득한 것으로 봅니다. 이번 지정의 국토교통부 공고(제2026-882호·제2026-883호)는 6월 30일 발표 다음 날인 <strong>2026년 7월 1일</strong>에 났습니다. 6월 30일은 발표일이고 기준일은 공고일입니다. 따라서 공고일 이전에 계약금을 보낸 계약은 잔금이 7월 이후여도 중과를 피할 수 있습니다. 계약서 날짜만이 아니라 계약금 이체 내역이 중요하며, 소액 가계약금만 보낸 경우는
          인정 여부가 갈릴 수 있습니다. 공고일 당일(7월 1일) 계약은 법문상 
        </p>

        <h3 className="text-foreground text-base font-semibold">일시적 2주택 — 갈아타기</h3>
        <p>
          이사·직장 이동 등으로 새 집을 먼저 사고 종전 주택을 나중에 파는{" "}
          <Link href="/guide/temporary-two-home-acquisition-tax-exception-guide" className={linkClass}>
            일시적 2주택
          </Link>{" "}
          특례를 쓰면 8% 대신 1~3%만 낼 수 있습니다. 취득 전 1주택자였고, 종전 주택을 기한 안에 처분하며, 처분 후 신고 절차를 밟아야 합니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            처분 기한은 원칙적으로 신규 주택 취득일부터 <strong>3년</strong>입니다.
          </li>
          <li>
            종전 주택과 신규 주택이 <strong>모두 조정대상지역</strong>이면 2026년 10월 1일 이후 취득분부터 <strong>2년</strong>입니다(2026년 8월 26일 이전에 계약금을
            지급한 계약은 3년 유지). 동탄·기흥·구리끼리, 또는 서울 규제지역에서 이곳으로 갈아타는 경우가 해당될 수 있습니다.
          </li>
          <li>투자 목적의 추가 매수는 통상 특례 대상이 아닙니다.</li>
        </ul>

        <h3 className="text-foreground text-base font-semibold">사례로 보면</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>무주택 → 기흥 8억 첫 매수</strong>: 1주택 취득이라 일반 세율, 약 2,053만 원(지방교육세 포함, 85㎡ 이하). 지정과 무관하지만 LTV 40%·6개월 전입·토허는 적용됩니다.
          </li>
          <li>
            <strong>서울 1주택 → 동탄 7억 추가 취득(종전 주택 처분 전)</strong>: 일시적 2주택 요건을 못 맞추면 약 5,880만 원 수준의 중과 대상입니다. 구입
            목적 주담대도 유주택자라 막힙니다.
          </li>
          <li>
            <strong>구리 1주택 보유 → 구리 6억 투자 매수</strong>: 약 5,040만 원 중과에 LTV 0%, 토허 실거주 의무까지 겹쳐 사실상 어렵습니다.
          </li>
        </ul>
        <p>
          전국 기준은{" "}
          <Link href="/guide/second-home-acquisition-tax-surcharge-2026-guide" className={linkClass}>
            2주택자 취득세 중과 가이드
          </Link>
          에서 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-permit">
        <h2 id="guide-dggl-permit" className="text-foreground text-xl font-semibold tracking-tight">
          토지거래허가 — 7월 5일부터 아파트 매매
        </h2>
        <InfoTable
          caption="토지거래허가구역 핵심"
          heads={["항목", "내용"]}
          minWidth="34rem"
          rows={[
            ["기간", "2026년 7월 5일 ~ 2027년 12월 31일"],
            ["대상", "동탄구·기흥구·구리시 내 아파트(기준면적 초과 거래)"],
            ["절차", "매매계약 체결 전 관할 시장·구청장 허가"],
            ["실거주", "허가받아 취득한 아파트는 취득일로부터 2년간 실거주 의무"],
            ["위반 시", "허가 없이 계약하면 2년 이하 징역 또는 2천만 원 이하 벌금, 의무 위반 시 취득가액 10% 범위 이행강제금(매년)·허가 취소"],
          ]}
        />
        <p>
          허가 신청은 <strong>계약 체결 전</strong>에 합니다. 동탄은 화성시 동탄구청, 기흥은 용인시 기흥구청, 구리는 구리시청이 관할이며, 허가 목적(실거주)과 자금 조달
          계획을 설명하지 못하면 거절될 수 있습니다. 전세를 끼고 사는 갭투자는 실거주 의무 때문에 사실상 차단됩니다.
        </p>

        <h3 className="text-foreground text-base font-semibold">서로 다른 세 가지 의무</h3>
        <InfoTable
          caption="실거주·전입 의무 비교"
          heads={["제도", "기간", "위반 시"]}
          minWidth="36rem"
          rows={[
            ["주담대 전입(규제지역 구입 목적)", "대출 실행 후 6개월", "대출 조건 위반·회수 등"],
            ["토허 실거주", "취득일로부터 2년", "이행강제금·허가 취소"],
            ["1가구 1주택 양도세 비과세", "2년 보유·2년 거주(조정지역 취득)", "비과세 요건 미충족"],
          ]}
        />

        <h3 className="text-foreground text-base font-semibold">갭투자는 어디서 막히나</h3>
        <InfoTable
          caption="갭투자·우회 매수 관련 제한"
          heads={["상황", "조치"]}
          minWidth="38rem"
          rows={[
            ["전세대출 보유자가 투기과열지구 3억 원 초과 아파트 취득", "전세대출 회수·이용 제한"],
            ["1억 원 초과 신용대출 보유자", "대출 실행일부터 1년간 규제지역 내 주택 구입 제한"],
            ["세입자를 끼고 구입", "6개월 전입·2년 실거주를 지킬 수 없어 구입 목적 주담대와 토허 허가 모두 막힘"],
            ["무주택 LTV", "70% → 40%"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          참고로 LTV만 계산하면, 매매가 7억 원·전세 3억 원(갭 4억 원)일 때 지정 전 70%는 대출 4억 9,000만 원으로 갭을 대출로 충당할 수 있었지만, 40%는 2억 8,000만 원이라
          1억 2,000만 원을 현금으로 더 마련해야 합니다. 위 의무 때문에 지금은 이 계산 자체가 현실적이지 않습니다.
        </p>

        <h3 className="text-foreground text-base font-semibold">거래 시 제출 서류</h3>
        <p>
          투기과열지구는 가격과 관계없이 자금조달계획서·입주계획서를 내고, 예금잔액증명서·소득금액증명원 등 자금 출처 증빙을 첨부해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-sell">
        <h2 id="guide-dggl-sell" className="text-foreground text-xl font-semibold tracking-tight">
          양도세 — 다주택자 매도 시
        </h2>
        <p>
          2026년 5월 10일부터 다주택자 양도세 중과 유예가 끝나, 조정대상지역 주택을 파는 다주택자는 중과를 받습니다. 취득세 8%를 내고 산 뒤 짧게 보유하고 팔면 양도세
          중과까지 겹칠 수 있습니다.
        </p>
        <InfoTable
          caption="조정지역 양도세 중과(요약)"
          heads={["보유 주택 수", "중과"]}
          rows={[
            ["2주택", "기본세율 + 20%p, 장기보유특별공제 배제"],
            ["3주택 이상", "기본세율 + 30%p, 장기보유특별공제 배제"],
          ]}
        />
        <p>
          공고일(7월 1일) 이전에 매도계약을 체결하고 계약금을 받은 사실이 증빙되면 중과 대상에서 제외되는 경과규정이 있으며, 공고일 당일 계약도 국세청 사전답변에서 제외 대상으로 회신된 사례가 있습니다(사실관계에 따라 다를 수 있음).{" "}
          <Link href="/guide/capital-gains-surcharge-revival-2026-guide" className={linkClass}>
            양도세 중과 가이드
          </Link>
          를 함께 보세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-timing">
        <h2 id="guide-dggl-timing" className="text-foreground text-xl font-semibold tracking-tight">
          계약 시점별 적용 정리
        </h2>
        <InfoTable
          caption="계약 시점별 대출·취득세·토허 적용(일반적 해석, 금융회사·지자체 확인 필요)"
          heads={["상황", "대출(LTV)", "취득세", "토지거래허가"]}
          minWidth="44rem"
          rows={[
            [
              "6월 30일까지 계약금 납부 증명 또는 대출 신청 접수(대출 기준일)",
              "종전 규정(70%) 적용 가능",
              "공고일(7월 1일) 이전 계약·계약금 지급 증빙 시 지정 전 취득으로 봄(중과 배제)",
              "허가 불필요",
            ],
            ["7월 1일 계약(공고일 당일)", "40%", "‘이전’에 포함되는 것으로 보는 해석이 유력하나 직접 해석례 확인 필요", "허가 불필요"],
            ["7월 2일~4일 계약", "40%", "중과 적용(2주택 이상)", "허가 불필요"],
            ["7월 5일 이후 계약", "40%", "중과 적용(2주택 이상)", "계약 전 허가 필수, 2년 실거주"],
          ]}
        />
        <p>
          대출 경과규정의 기준일은 효력 발생일 전날인 6월 30일입니다. 금융당국은 6월 30일까지 금융회사 전산상 대출 신청을 마쳤거나, 주택매매계약을 체결하고 계약금 납부 사실을 증명한 경우 종전 규정을 적용한다는 경과규정을 뒀습니다.
          토지거래허가 대상 주택은 6월 30일까지 허가를 신청·접수했다면 그 뒤 계약해도 종전 규정을 적용받을 수 있습니다. 증액 없는 중도금대출의 잔금대출 전환이나 대환도 기존
          대출 취급 시점의 LTV를 적용받을 수 있습니다. 다만 적용 여부는 금융회사별로 달라질 수 있어 <strong>잔금 전에 은행에 서면으로 확인</strong>하는 것이 안전합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dggl-mistakes">
        <h2 id="guide-dggl-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「규제지역이어도 무주택은 70%」</strong> — 투기과열·조정대상 모두 무주택 LTV는 40%입니다. 70%는 비규제지역 기준이었습니다.
          </li>
          <li>
            <strong>「6월에 계약했으니 대출은 무조건 70%」</strong> — 6월 30일까지 계약금 납부를 증명했거나 대출 신청을 접수한 경우에 한해 종전 규정이 적용됩니다.
          </li>
          <li>
            <strong>「조정지역이면 1주택도 8%」</strong> — 8%는 2주택 이상 추가 취득 때만입니다. 무주택·1주택 첫 매수는 일반 세율입니다.
          </li>
          <li>
            <strong>「6월에 계약했으니 잔금이 7월이면 무조건 8%」</strong> — 공고일(7월 1일) 이전 계약·계약금 지급이 증빙되면 지정 전 취득으로 봅니다. 대출 경과규정의 기준일(6월 30일)과는 다릅니다.
          </li>
          <li>
            <strong>「생애최초는 소득·가격 요건이 있다」</strong> — 생애최초 LTV는 세대 전원 무주택 이력이 기준입니다. 전입 6개월 의무는 일반 무주택자도 같습니다.
          </li>
          <li>
            <strong>「LTV 40%면 2.8억(7억 기준)만 모으면 된다」</strong> — 취득세·중개보수와 DSR·한도까지 함께 봐야 합니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dggl-checklist">
        <h2 id="guide-dggl-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          매수 전 확인 목록
        </h2>
        <InfoTable
          caption="체크리스트"
          heads={["항목", "확인"]}
          minWidth="30rem"
          rows={[
            ["매물 주소가 동탄구·기흥구·구리시에 해당하는가", "□"],
            ["대출은 6월 30일까지, 취득세는 공고일(7월 1일) 이전 계약금 지급 증빙이 있는가(경과규정)", "□"],
            ["LTV 40%·한도 6억·DSR을 반영한 자기자금과 취득세·중개보수", "□"],
            ["세대 주택 수, 일시적 2주택·생애최초 해당 여부", "□"],
            ["7월 5일 이후 계약이면 토지거래허가와 2년 실거주 계획, 6개월 전입", "□"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          ※ 지정 범위·LTV·한도·세율은 국토교통부·금융위원회·행정안전부 고시와 금융회사 기준에 따릅니다. 최신 내용은{" "}
          <a href="https://www.molit.go.kr" className={linkClass} target="_blank" rel="noopener noreferrer">
            국토교통부(molit.go.kr)
          </a>
          ·{" "}
          <Link href="/ltv-calculator" className={linkClass}>
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
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 2주택 중과 취득세는 취득세 계산기에서 계산해 보세요.
          </Link>
        </p>
      </aside>
    </>
  );
}
