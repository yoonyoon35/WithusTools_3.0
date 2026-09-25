import Link from "next/link";

export const comprehensiveIncomeTaxOverviewGuideMeta = {
  slug: "comprehensive-income-tax-overview-guide",
  title: "종합소득세 계산 구조 | 소득 합산·과세표준·세율·세액공제·기납부세액",
  description:
    "신고 대상, 소득별 합산, 2025년 귀속 기한, 세액 순서, 세율표, 환급·기납부, 전자신고·납부 경로를 계산에 쓸 수 있게 정리했습니다.",
  updated: "2026년 9월 23일",
} as const;

const ntsOverview = "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2224&cntntsId=7664";
const ntsModuPay = "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=40483&cntntsId=238978";
const ntsModuRefund = "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=41095&cntntsId=239072";
const ntsFiling = "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2225&cntntsId=7665";
const ntsFlow = "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2226&cntntsId=7666";
const ntsRate = "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2227&cntntsId=7667";
const ntsMethod = "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=40296&cntntsId=238910";
const ntsForeign = "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7802";

export function ComprehensiveIncomeTaxOverviewGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-gcit-intro">
        <h2 id="guide-gcit-intro" className="text-foreground text-xl font-semibold tracking-tight">
          신고와 계산의 기준
        </h2>
        <p>
          종합소득세는 해당 과세기간의 종합소득금액이 있는 사람이 다음 해 5월 1일부터 5월 31일까지
          신고·납부하는 세금입니다. 성실신고확인서를 제출하는 사람은 6월 30일까지입니다(소득세법 §70,
          §70조의2). 종합소득은 <strong>이자·배당·사업(부동산임대)·근로·연금·기타소득</strong>입니다.{" "}
          <Link href="/comprehensive-income-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            종합소득세 계산기
          </Link>
          는 세율·경비율·중간예납 식으로 세액을 구합니다.
        </p>
        <p>
          세액은 아래 순서로 계산합니다. 사업소득을 장부 없이 계산하는 식은{" "}
          <Link
            href="/guide/business-expense-ratio-application-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            경비율 적용 가이드
          </Link>
          , 주택임대소득 2천만 원 이하의 종합·분리 선택은{" "}
          <Link
            href="/guide/housing-rental-income-separate-taxation-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            주택임대소득 분리과세 가이드
          </Link>
          , 가산세 요율은{" "}
          <Link
            href="/guide/comprehensive-income-tax-penalty-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합소득세 가산세 가이드
          </Link>
          , 간편장부 기록과 결손금 공제 기간은{" "}
          <Link
            href="/guide/simple-bookkeeping-income-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            간편장부 가이드
          </Link>
          , 성실신고확인 기준 수입금액과 세액공제·미제출 가산세는{" "}
          <Link
            href="/guide/sincere-filing-confirmation-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            성실신고확인 가이드
          </Link>
          , 11월 고지세액과 추계액 식은{" "}
          <Link
            href="/guide/interim-prepayment-income-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            중간예납 가이드
          </Link>
          에 둡니다.
        </p>
      </section>

      <nav className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm" aria-label="목차">
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-gcit-who" className="text-primary underline-offset-4 hover:underline">
              신고 대상과 신고하지 않는 경우
            </a>
          </li>
          <li>
            <a href="#guide-gcit-deadline" className="text-primary underline-offset-4 hover:underline">
              신고기한·2025년 귀속·제출서류
            </a>
          </li>
          <li>
            <a href="#guide-gcit-types" className="text-primary underline-offset-4 hover:underline">
              소득 종류별 합산
            </a>
          </li>
          <li>
            <a href="#guide-gcit-flow" className="text-primary underline-offset-4 hover:underline">
              세액 계산 순서
            </a>
          </li>
          <li>
            <a href="#guide-gcit-rate" className="text-primary underline-offset-4 hover:underline">
              세율표와 산출세액
            </a>
          </li>
          <li>
            <a href="#guide-gcit-items" className="text-primary underline-offset-4 hover:underline">
              소득공제·세액공제 항목
            </a>
          </li>
          <li>
            <a href="#guide-gcit-foreign" className="text-primary underline-offset-4 hover:underline">
              외국납부세액공제 한도
            </a>
          </li>
          <li>
            <a href="#guide-gcit-refund" className="text-primary underline-offset-4 hover:underline">
              환급과 미리 낸 세금
            </a>
          </li>
          <li>
            <a href="#guide-gcit-method" className="text-primary underline-offset-4 hover:underline">
              신고·납부 방법
            </a>
          </li>
          <li>
            <a href="#guide-gcit-local" className="text-primary underline-offset-4 hover:underline">
              개인지방소득세
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-gcit-who">
        <h2 id="guide-gcit-who" className="text-foreground text-xl font-semibold tracking-tight">
          신고 대상과 신고하지 않는 경우
        </h2>
        <p>다음이면 확정신고하지 않아도 됩니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>근로소득만 있는 사람으로서 연말정산을 한 경우</li>
          <li>
            직전 과세기간 수입금액이 7,500만 원 미만이고 다른 소득이 없는 보험모집인·방문판매원·계약배달
            판매원의 사업소득으로서, 소속 회사가 연말정산을 한 경우
          </li>
          <li>퇴직소득과 연말정산 대상 사업소득만 있는 경우</li>
          <li>비과세 또는 분리과세되는 소득만 있는 경우</li>
          <li>연 300만 원 이하인 기타소득이 있는 사람으로서 분리과세를 원하는 경우 등</li>
        </ul>
        <p>근로소득만 있어 연말정산을 했더라도 다음에 해당하면 확정신고합니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            2명 이상에게서 받는 근로소득·공적연금소득·퇴직소득 또는 연말정산 대상 사업소득이 있는 경우.
            주된 근무지에서 종된 근무지 소득을 합산해 연말정산으로 소득세를 냄으로써 확정신고로 납부할
            세액이 없으면 제외
          </li>
          <li>
            원천징수 의무가 없는 근로소득 또는 퇴직소득이 있는 경우. 납세조합이 연말정산으로 소득세를
            납부한 사람과, 비거주 연예인 등의 용역 제공 원천징수 절차 특례에 따라 소득세를 납부한 경우는
            제외
          </li>
          <li>연말정산을 하지 않은 경우</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcit-deadline">
        <h2 id="guide-gcit-deadline" className="text-foreground text-xl font-semibold tracking-tight">
          신고기한·2025년 귀속·제출서류
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              법정신고 기한
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기한
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반
                </th>
                <td className="border-border border-b px-3 py-2.5">다음 연도 5월 1일~5월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  성실신고확인서 제출자
                </th>
                <td className="border-border border-b px-3 py-2.5">다음 연도 5월 1일~6월 30일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  토요일·공휴일
                </th>
                <td className="border-border border-b px-3 py-2.5">그 다음 날까지 신고·납부</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2025년 귀속
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2026년 6월 1일까지. 성실신고확인서 제출자는 2026년 6월 30일까지
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거주자 사망
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상속개시일(사망일)이 속하는 달의 말일부터 6개월이 되는 날까지
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">
                  국외이전을 위한 출국
                </th>
                <td className="px-3 py-2.5">출국일 전날까지</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          2025년 귀속 확정신고에서 아래 납세자의 납부기한은 2026년 6월 1일에서 2026년 8월 31일로
          직권연장됩니다. 직권연장되면 분납기한도 2026년 11월 2일까지입니다. 대상이 아니어도
          신고·납부가 어려워 연장 신청을 하면 지원받을 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2025년 귀속 납부기한 직권연장
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지원 대상·요건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제외
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">
                  부가가치세 납부기한 직권연장 대상 사업자
                </th>
                <td className="border-border border-b px-3 py-2.5 align-top leading-relaxed">
                  2026년 1월 부가가치세 납부기한 직권연장 대상. 일반과세자는 2024년 연매출 10억 원
                  이하이면서 2025년 1기 매출이 전년 동기 대비 30% 이상 감소한 제조·건설·도매·소매·음식·숙박·운수·서비스업.
                  간이과세자는 업종·과세표준 규모와 관계없이 전체. 부동산 임대업과 전문직 사업자(부가가치세법
                  시행령 제109조 제2항 제7호)는 이 대상에서 제외. 2026년 6월 1일까지 소득세 신고.
                  유가 민감업종 부가가치세 예정고지 납부기한 직권연장 대상도 종합소득세 납부기한을 직권연장
                </td>
                <td className="border-border border-b px-3 py-2.5 align-top">
                  금융소득 2천만 원 초과자, 성실신고 확인 대상자
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 align-top font-medium">
                  플랫폼 미정산
                </th>
                <td className="px-3 py-2.5 align-top leading-relaxed">
                  티몬·위메프 대규모 정산 지연으로 물품대금을 지급받지 못한 플랫폼 미정산 피해 사업자
                </td>
                <td className="px-3 py-2.5" />
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          연장 신청은 홈택스 로그인 후 증명·등록·신청·사업자현황, 세금 관련
          신청·신고 공통, 신고·납부 기한연장 신청/내역조회, 신고분 납부기한 연장신청입니다. 손택스는
          로그인 후 국세증명·사업자등록·세금 관련 신청/신고, 같은 공통 메뉴, 신고분 납부기한
          연장신청입니다.
        </p>
        <p>제출 서류는 다음과 같습니다.</p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>종합소득세·농어촌특별세·지방소득세 과세표준 확정신고 및 납부계산서</li>
          <li>
            소득공제·세액공제를 받는 경우 소득공제신고서·세액공제신고서와, 인적공제·연금보험료공제·주택담보노후연금
            이자비용공제·특별소득공제·자녀세액공제·연금계좌세액공제·특별세액공제 증명 서류. 증명 서류는
            입양관계증명서 또는 입양증명서, 수급자증명서, 가정위탁보호확인서, 가족관계증명서 또는
            주민등록표등본, 장애인증명서 또는 장애인등록증, 일시퇴거자 동거가족상황표, 주택담보노후연금
            이자비용증명서, 보험료 납입증명서 또는 영수증, 의료비지급명세서, 교육비납입증명서와 방과후
            학교 수업용 도서 구입 증명서, 장기주택저당차입금 이자상환 증명서·분양계약서 또는
            등기사항증명서, 기부금명세서·기부금영수증
          </li>
          <li>
            복식부기의무자는 재무상태표·손익계산서와 부속서류, 합계잔액시산표, 조정계산서. 간편장부대상자는
            간편장부 소득금액계산서. 기준·단순경비율 추계신고자는 추계소득금액계산서. 성실신고확인
            대상자는 성실신고확인서와 성실신고확인비용 세액공제신청서
          </li>
          <li>공동사업자는 공동사업자별 분배명세서</li>
          <li>영수증수취명세서</li>
          <li>결손금소급공제세액 환급신청서</li>
          <li>세액감면신청서</li>
          <li>소득금액계산명세서, 주민등록등본</li>
        </ol>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcit-types">
        <h2 id="guide-gcit-types" className="text-foreground text-xl font-semibold tracking-tight">
          소득 종류별 합산
        </h2>
        <p>
          2025년에 아래 소득이 있으면 합산해 2026년 6월 1일까지 신고합니다. 신고 대상 소득은
          사업소득(부동산임대소득 포함), 근로소득, 연금소득, 기타소득입니다. 기한 안에 신고·납부하지
          않으면 무신고가산세와 납부지연가산세를 더 부담할 수 있습니다.
        </p>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">사업소득</h3>
        <p>
          단순경비율 적용 대상의 사업소득금액은{" "}
          <strong>총수입금액 − 필요경비(총수입금액 × 단순경비율)</strong>입니다. 직전 연도(2024년)
          연간 수입금액이 아래 기준금액 미만이면 단순경비율 대상입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              모두채움(납부) 단순경비율 기준금액 미만
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  도·소매업 등
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제조업, 숙박 및 음식점업, 인적용역 등
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  임대업, 서비스업 등
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5">6천만 원</td>
                <td className="px-3 py-2.5">3천 6백만 원</td>
                <td className="px-3 py-2.5">2천 4백만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>인적용역 사업소득(3.3% 원천징수)이 있어도 종합소득세 신고 대상입니다.</p>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">근로소득</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>일반적으로 근로소득은 연말정산을 하므로 종합소득세 신고 대상이 아닙니다.</li>
          <li>
            2곳 이상에서 근무하고 그 근로소득을 합산해 연말정산하지 않았으면 모든 근로소득을 합산해
            신고합니다.
          </li>
          <li>
            근로소득 연말정산을 했어도 신고 대상인 다른 소득(사업소득, 연금소득, 기타소득)이 있으면
            근로소득과 그 소득을 합산해 신고합니다.
          </li>
        </ul>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">연금소득</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            국민연금, 공무원·군인·교직원 연금 등 연말정산을 한 공적연금은 종합소득세 신고 대상이
            아닙니다.
          </li>
          <li>
            공적연금소득과 신고 대상인 다른 소득(사업소득, 근로소득, 기타소득)이 함께 있으면 합산해
            신고합니다.
          </li>
          <li>
            사적연금 합계액이 연간 1,500만 원을 초과하면 다른 소득과 합산해 신고하거나, 분리과세(세율
            15%)를 선택해 신고할 수 있습니다. 사적연금은 연금저축계좌(연금저축보험, 연금저축펀드,
            연금저축신탁, 연금저축공제 등)와 퇴직연금계좌(확정기여형 퇴직연금 DC, 개인형 퇴직연금 IRP
            등)입니다.
          </li>
        </ul>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">기타소득</h3>
        <p>
          일시적인 강연료·원고료 등 기타소득은 기타소득금액이 연간 300만 원을 초과하는 경우에만 신고
          대상입니다. 강연료 연간 총지급액 800만 원이면 기타소득금액 = 총지급액 − (총지급액
          × 필요경비율) = 800만 원 − (800만 원 × 60%) = 320만 원입니다.
        </p>
        <p>
          계약금이 위약금·배상금으로 대체되는 기타소득(연간 소득금액 300만 원 미만)이 있으면 분리과세로
          신고합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcit-flow">
        <h2 id="guide-gcit-flow" className="text-foreground text-xl font-semibold tracking-tight">
          세액 계산 순서
        </h2>
        <p>세액은 다음 순서로 계산합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              납부·환급세액까지
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  계산
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1. 소득
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  이자소득, 배당소득, 사업소득(부동산임대), 근로소득, 연금소득, 기타소득
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2. 종합소득금액
                </th>
                <td className="border-border border-b px-3 py-2.5">위 소득금액의 합</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3. 소득공제
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  기본공제(본인, 배우자, 부양가족), 추가공제(경로우대, 장애인 등), 연금보험료공제,
                  주택담보노후연금 이자비용공제, 특별소득공제(보험료, 주택자금공제), 조세특례제한법상
                  주택마련저축·신용카드 등 사용금액·소기업·소상공인 공제부금·장기집합투자증권저축 등
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4. 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">종합소득금액에서 소득공제를 뺀 금액</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5. 산출세액
                </th>
                <td className="border-border border-b px-3 py-2.5">과세표준 × 세율(6~45%), 누진공제 차감</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6. 세액공제·감면
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  특별세액공제(보험료, 의료비, 교육비, 기부금, 표준세액공제), 기장세액공제,
                  외국납부세액공제, 재해손실세액공제, 배당세액공제, 근로소득세액공제, 혼인세액공제,
                  전자신고세액공제, 성실신고확인비용 세액공제, 중소기업 특별세액감면 등
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7. 가산세
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  무신고, 과소(초과환급)신고, 납부지연, 증빙불비, 장부 기록·보관 불성실 등
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8. 기납부세액
                </th>
                <td className="border-border border-b px-3 py-2.5">중간예납세액, 수시부과세액, 원천징수세액 등</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">
                  9. 납부·환급세액
                </th>
                <td className="px-3 py-2.5">산출세액에서 공제·감면을 빼고 가산세를 더한 뒤 기납부세액을 뺀 금액</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          장부를 기록·비치한 사업자의 소득금액은 <strong>총수입금액 − 필요경비</strong>입니다. 장부가
          없으면 경비율로 계산하며, 그 식과 배율은 경비율 가이드에 있습니다. 장부와 증빙서류는 소득세
          확정신고 기한이 지난 날부터 5년간 보존합니다. 통상 부과제척기간 만료 전에 발생한 결손금을
          그 뒤에 공제하면, 그 결손이 발생한 과세기간의 장부는 이월결손금을 공제한 과세기간의
          확정신고 기한부터 1년간 더 보존합니다. 결손이 나면 15년간 소득금액에서 공제할 수 있습니다.
          1인 미디어 사업은 거래 기록·증빙을 5년 보관하고, 이월결손금 공제를 받으면 15년간 보관합니다.
        </p>
        <p>
          주택임대·1인 미디어 계산 사례는 본인 1명의 기본공제를 150만 원, 표준세액공제를 7만 원으로
          둡니다. 다른 인적공제·특별공제 금액은 사례에 없으므로 여기서도 다루지 않습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcit-rate">
        <h2 id="guide-gcit-rate" className="text-foreground text-xl font-semibold tracking-tight">
          세율표와 산출세액
        </h2>
        <p>
          2025년 귀속, 과세표준 30,000,000원이면{" "}
          <strong>30,000,000 × 15% − 1,260,000 = 3,240,000원</strong>.
        </p>
        <p>산출세액 = (과세표준 × 해당 구간 세율) − 누진공제. 2023~2025년 귀속 표는 다음과 같습니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              종합소득세 세율 (2023~2025년 귀속)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  누진공제
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">14,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">6%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">14,000,000원 초과 50,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">15%</td>
                <td className="border-border border-b px-3 py-2.5">1,260,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">50,000,000원 초과 88,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">24%</td>
                <td className="border-border border-b px-3 py-2.5">5,760,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">88,000,000원 초과 150,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">35%</td>
                <td className="border-border border-b px-3 py-2.5">15,440,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">150,000,000원 초과 300,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">38%</td>
                <td className="border-border border-b px-3 py-2.5">19,940,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">300,000,000원 초과 500,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
                <td className="border-border border-b px-3 py-2.5">25,940,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">500,000,000원 초과 1,000,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">42%</td>
                <td className="border-border border-b px-3 py-2.5">35,940,000원</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">1,000,000,000원 초과</td>
                <td className="px-3 py-2.5">45%</td>
                <td className="px-3 py-2.5">65,940,000원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          같은 표를 구간별로 쌓으면 경계가 맞습니다. 14,000,000원 × 6% = 840,000원. 50,000,000원 ×
          15% − 1,260,000원 = 6,240,000원. 88,000,000원 × 24% − 5,760,000원 = 15,360,000원.
          150,000,000원 × 35% − 15,440,000원 = 37,060,000원. 300,000,000원 × 38% − 19,940,000원 =
          94,060,000원. 500,000,000원 × 40% − 25,940,000원 = 174,060,000원. 1,000,000,000원 × 42% −
          35,940,000원 = 384,060,000원이고, 1,000,000,000원 × 45% − 65,940,000원도 384,060,000원입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2023~2025년 귀속 표를 구간 누적으로 읽은 값
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  산출세액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">14,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">과세표준 × 6%</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">50,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">840,000원 + (14,000,000원 초과액 × 15%)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">88,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">6,240,000원 + (50,000,000원 초과액 × 24%)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">150,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">15,360,000원 + (88,000,000원 초과액 × 35%)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">300,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">37,060,000원 + (150,000,000원 초과액 × 38%)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">500,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">94,060,000원 + (300,000,000원 초과액 × 40%)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1,000,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">174,060,000원 + (500,000,000원 초과액 × 42%)</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">1,000,000,000원 초과</td>
                <td className="px-3 py-2.5">384,060,000원 + (1,000,000,000원 초과액 × 45%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>같은 페이지의 이전 귀속 세율은 아래와 같습니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2021~2022년 귀속
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">과세표준</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">세율</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">누진공제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">12,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">6%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">12,000,000원 초과 46,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">15%</td>
                <td className="border-border border-b px-3 py-2.5">1,080,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">46,000,000원 초과 88,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">24%</td>
                <td className="border-border border-b px-3 py-2.5">5,220,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">88,000,000원 초과 150,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">35%</td>
                <td className="border-border border-b px-3 py-2.5">14,900,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">150,000,000원 초과 300,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">38%</td>
                <td className="border-border border-b px-3 py-2.5">19,400,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">300,000,000원 초과 500,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
                <td className="border-border border-b px-3 py-2.5">25,400,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">500,000,000원 초과 1,000,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">42%</td>
                <td className="border-border border-b px-3 py-2.5">35,400,000원</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">1,000,000,000원 초과</td>
                <td className="px-3 py-2.5">45%</td>
                <td className="px-3 py-2.5">65,400,000원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2018~2020년 귀속
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">과세표준</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">세율</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">누진공제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">12,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">6%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">12,000,000원 초과 46,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">15%</td>
                <td className="border-border border-b px-3 py-2.5">1,080,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">46,000,000원 초과 88,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">24%</td>
                <td className="border-border border-b px-3 py-2.5">5,220,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">88,000,000원 초과 150,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">35%</td>
                <td className="border-border border-b px-3 py-2.5">14,900,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">150,000,000원 초과 300,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">38%</td>
                <td className="border-border border-b px-3 py-2.5">19,400,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">300,000,000원 초과 500,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
                <td className="border-border border-b px-3 py-2.5">25,400,000원</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">500,000,000원 초과</td>
                <td className="px-3 py-2.5">42%</td>
                <td className="px-3 py-2.5">35,400,000원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2017년 귀속
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">과세표준</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">세율</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">누진공제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">12,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">6%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">12,000,000원 초과 46,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">15%</td>
                <td className="border-border border-b px-3 py-2.5">1,080,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">46,000,000원 초과 88,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">24%</td>
                <td className="border-border border-b px-3 py-2.5">5,220,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">88,000,000원 초과 150,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">35%</td>
                <td className="border-border border-b px-3 py-2.5">14,900,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">150,000,000원 초과 500,000,000원 이하</td>
                <td className="border-border border-b px-3 py-2.5">38%</td>
                <td className="border-border border-b px-3 py-2.5">19,400,000원</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">500,000,000원 초과</td>
                <td className="px-3 py-2.5">40%</td>
                <td className="px-3 py-2.5">29,400,000원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcit-items">
        <h2 id="guide-gcit-items" className="text-foreground text-xl font-semibold tracking-tight">
          소득공제·세액공제 항목
        </h2>
        <p>
          계산기에서는 소득공제와 세액공제 합계를 직접 넣습니다. 항목별 한도와 공제율은 항목마다
          달라 여기서 금액을 정하지 않습니다. 공제 항목은 기본공제,
          추가공제, 연금보험료공제, 주택담보노후연금 이자비용공제, 특별소득공제(보험료·주택자금),
          주택마련저축, 신용카드 등 사용금액, 소기업·소상공인 공제부금, 장기집합투자증권저축,
          특별세액공제(보험료·의료비·교육비·기부금·표준세액공제), 기장세액공제, 외국납부세액공제,
          재해손실세액공제, 배당세액공제, 근로소득세액공제, 혼인세액공제, 전자신고세액공제,
          성실신고확인비용 세액공제, 중소기업 특별세액감면입니다.
        </p>
        <p>
          기장세액공제는 간편장부대상자가 복식부기로 기장해 신고하면 산출세액의 20%를 공제하고,
          한도는 100만 원입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcit-foreign">
        <h2 id="guide-gcit-foreign" className="text-foreground text-xl font-semibold tracking-tight">
          외국납부세액공제 한도
        </h2>
        <p>
          거주자의 종합소득금액에 국외원천소득이 있으면, 외국에 납부했거나 납부할 세액 중 일정액을
          종합소득 산출세액에서 공제할 수 있습니다(소득세법 제57조). 한도는 다음과 같습니다.
        </p>
        <p>
          <strong>외국납부세액공제 한도 = A × (B ÷ C)</strong>
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>A: 소득세법 제55조에 따라 계산한 해당 과세기간의 종합소득 산출세액</li>
          <li>
            B: 국외원천소득. 조세특례제한법 등으로 세액감면·면제를 받는 국외원천소득에 그 비율을 곱한
            금액은 제외
          </li>
          <li>C: 해당 과세기간의 종합소득금액</li>
        </ul>
        <p>
          B는 국외원천 매출에서 국외원천소득 대응비용을 뺀 금액입니다. 대응비용은 전체 관련 비용 ×
          (국외원천 매출 ÷ 전체 매출)입니다. 신고 때 내는 서류는 외국납부세액공제
          신청서(소득세법 시행규칙 제11호 서식), 국가별 외국납부세액공제 명세서(부표1), 소득종류별
          외국납부세액 명세서(부표2)입니다.
        </p>
        <p>
          2023년 귀속 사례 1은 업종코드 940306, 간편장부, 기준경비율 신고를 전제로 총수입
          3억 1,000만 원, 필요경비 5,208만 원, 소득공제 292만 원, 국외원천수입 1억 1,000만 원,
          대응비용 1,848만 원(5,208만 원 × 1억 1,000만 원 / 3억 1,000만 원), 국외원천소득 9,152만 원,
          외국납부세액 1,100만 원입니다. 산출세액은 7,696만 원[(3억 1,000만 원 − 5,208만 원 − 292만
          원) × 38% − 1,994만 원], 한도는 2,731만 원(7,696만 원 × 9,152만 원 / 2억 5,792만 원)입니다.
          그 해 공제액은 1,100만 원이고 이월액은 없습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcit-refund">
        <h2 id="guide-gcit-refund" className="text-foreground text-xl font-semibold tracking-tight">
          환급과 미리 낸 세금
        </h2>
        <p>
          사업소득(3.3% 원천징수소득 포함), 근로소득, 연금소득, 기타소득이 있으면 합산해 다음 해
          5월에 신고합니다. 기한 안에 신고하지 않으면 환급금이 지급되지 않고, 환급세액을 초과하면
          초과환급가산세와 납부지연가산세를 부담할 수 있습니다. 사적연금은 연간 합계 1,500만 원
          초과 시 합산 신고 또는 분리과세(세율 15%)를 선택할 수 있고, 기타소득은 기타소득금액(총지급액
          − 필요경비)이 300만 원을 초과한 경우에만 합산합니다.
        </p>
        <p>
          작년에 미리 낸 세금(기납부세액)이 이번 신고의 납부할 세금(총결정세액)보다 많으면 환급금이
          발생합니다. 미리 낸 세금은 원천징수세액과 중간예납세액입니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            원천징수: 회사는 인적용역 소득자에게 사업소득을 지급할 때 3.3%(사업소득세 3% + 개인지방소득세
            0.3%)를 원천징수합니다. 방문판매원, 보험설계사, 음료배달원, 신용카드 모집원,
            학습지 강사, 방과후 강사, 대출모집원, 방문점검원, 배달라이더, 행사도우미, 캐디 등입니다.
            근로소득, 연금소득, 기타소득도 지급처에서 세법에 따른 세액을 원천징수합니다.
          </li>
          <li>
            중간예납세액: 직전 과세기간(2024년) 종합소득세액의 1/2을 미리 냅니다. 2024년 과세기간의
            종합소득세 납부세액 100만 원 이상자 등 일부만 해당합니다. 계산식과 분납,
            추계액 신고는 중간예납 가이드에 있습니다.
          </li>
        </ul>
        <p>
          환급이 생기는 납세자에게는 종합소득세를 미리 계산해 안내하고, ARS(1544-9944) 등으로
          신고하면 종합소득세와 개인지방소득세를 환급받을 수 있습니다. 추가 공제 항목이 있으면
          직접 수정하고, 미리 낸 세금을 한도로 환급됩니다. 중간예납세액 때문에 종합소득세 환급금이
          생겨도 개인지방소득세는 중간예납으로 미리 낸 세금이 없어 납부세액이 생길 수 있습니다.
        </p>
        <p>
          2025년 중 학원강사 수입 10,000,000원이 생기고 학원에서 330,000원(10,000,000 ×
          3.3%)을 원천징수했습니다. 330,000원 중 300,000원은 사업소득세, 30,000원은 개인지방소득세입니다.
          필요경비(단순경비율)와 공제를 적용하면 2025년 소득에 대해 실제 낼 세금은 22만 원이나, 33만 원을
          미리 냈으므로 신고하면 차액 11만 원(종합소득세 10만 원 + 개인지방소득세 1만 원)을 환급받습니다.
          22만 원을 만든 경비율과 공제는 따로 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcit-method">
        <h2 id="guide-gcit-method" className="text-foreground text-xl font-semibold tracking-tight">
          신고·납부 방법
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            홈택스 전자신고: 로그인 → 세금신고 → 종합소득세 신고 → 신고서 선택, 정기신고 작성 → 신고서
            작성 및 제출 → 지방소득세 신고하기
          </li>
          <li>
            손택스: 홈택스 앱 설치 → 로그인 → 세금신고 → 종합소득세 신고 → 신고서 선택, 정기신고 작성 →
            신고서 작성 및 제출 → 지방소득세 신고하기
          </li>
          <li>장부 작성 등 전문가 도움이 필요하면 세무대리인을 통해 신고합니다.</li>
          <li>
            서면신고: 국세청 누리집에서 서식을 받거나 세무서에 있는 서식으로 작성한 뒤 관할 세무서에
            우편 또는 민원실 접수. 작성 요령과 서식은 국세청 누리집 → 국세신고안내 → 종합소득세.
          </li>
        </ul>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            홈택스 전자납부: 로그인(공동·금융인증서 필수) → 납부·고지·환급 → 세금납부 → 납부할 세액
            조회/납부 → 납부하기 → 결제수단(계좌이체, 신용카드, 간편결제). 이용시간 07:00∼23:30.
          </li>
          <li>
            카드로택스, 인터넷지로: 로그인(공동·금융인증서 필수) → 국세 → 조회납부 또는 자진납부 →
            납부하기 → 신용카드·계좌이체·간편결제. 이용시간 00:30∼23:30. 일부 은행 계좌이체는
            07:00∼23:30. 카드로택스는 2026년 5월 22일부터 서비스가 종료됩니다.
          </li>
          <li>
            은행 등 방문납부: 전자신고 후 납부서를 출력하거나, 납부서에 납부번호·세무서코드·계좌번호·인적사항·납부세액을
            적어 우체국 또는 은행에 납부. 납부서 서식은 국세청 누리집 → 국세신고안내 → 종합소득세 →
            주요서식에서 「납부서」 검색.
          </li>
        </ul>
        <p>
          납부기한 직권연장 대상이 아니어도 신고·납부가 어려워 연장 신청을 하면 지원받을 수
          있습니다. 홈택스는 로그인 → 증명·등록·신청·사업자현황 → 세금관련 신청·신고 공통분야 →
          신고·납부 기한연장 신청/내역조회 → 신고분 납부기한 연장신청. 손택스는 로그인 →
          국세증명·사업자등록·세금관련 신청/신고 → 세금관련 신청·신고 공통분야 → 신고분 납부기한
          연장신청입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcit-local">
        <h2 id="guide-gcit-local" className="text-foreground text-xl font-semibold tracking-tight">
          개인지방소득세
        </h2>
        <p>
          개인지방소득세는 2020년 1월 1일 이후부터 귀속연도와 관계없이 지방자치단체의 장(시·군·구청장)에게
          과세표준 확정신고, 수정신고, 경정청구를 합니다. 홈택스와 위택스를 연계한 전자신고로 국세
          신고를 마친 뒤 「개인지방소득세 신고 이동」 또는 신고내역조회의 「지방소득세 신고이동」으로
          위택스 신고서를 작성합니다.
        </p>
        <p className="text-sm leading-relaxed">
          근거 페이지:{" "}
          <a href={ntsOverview} className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            종합소득세 개요
          </a>
          ,{" "}
          <a href={ntsFiling} className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            신고 기한·서류
          </a>
          ,{" "}
          <a href={ntsFlow} className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            세액 계산 흐름
          </a>
          ,{" "}
          <a href={ntsRate} className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            세율
          </a>
          ,{" "}
          <a href={ntsForeign} className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            외국납부세액공제 안내
          </a>
          ,{" "}
          <a href={ntsModuPay} className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            모두채움(납부)
          </a>
          ,{" "}
          <a href={ntsModuRefund} className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            모두채움(환급)
          </a>
          ,{" "}
          <a href={ntsMethod} className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            신고·납부 방법
          </a>
          .
        </p>
      </section>
    </>
  );
}
