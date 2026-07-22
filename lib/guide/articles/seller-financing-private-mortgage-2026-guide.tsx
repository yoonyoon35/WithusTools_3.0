import Link from "next/link";

export const sellerFinancingPrivateMortgage2026GuideMeta = {
  slug: "seller-financing-private-mortgage-2026-guide",
  title: "셀러 파이낸싱(집주인 대출)이란? 등기·잔금·체크리스트",
  description:
    "2026년 7월 기준 셀러 파이낸싱(집주인 대출)·사인 간 근저당 구조, 2025년 6·27 대책 이후 은행 한도와의 갭, 은행 vs 집주인 대출 비교, 등기부·금전소비대차·잔금일 순서, 매수·매도 리스크와 확인 체크리스트를 정리했습니다.",
  updated: "2026년 7월 22일",
} as const;

export function SellerFinancingPrivateMortgage2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-sfpm-intro">
        <h2 id="guide-sfpm-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준 · 결론부터
        </h2>
        <p>
          <strong>셀러 파이낸싱(집주인 대출)</strong>은 매도인이 매수인에게 <strong>잔금 일부를 빌려주고</strong>, 통상{" "}
          <strong>2순위 근저당(사인 간 근저당)</strong>으로 담보를 잡는 매매 구조입니다.{" "}
          <Link href="/guide/dsr-40-mortgage-limit" className="text-primary underline-offset-4 hover:underline">
            DSR·주담대 한도
          </Link>
          로 은행 대출이 부족할 때 호가에 <strong>집주인대출 ○억</strong> 문구가 붙기도 합니다.
        </p>
        <p>
          편한 잔금이 아니라 <strong>추가 채무 + 등기</strong>입니다.{" "}
          <strong>매매 특약·금전소비대차·잔금일 송금 순서·을구</strong>를 서면으로 맞추지 않으면 갈아타기·매도·말소에서
          분쟁이 날 수 있습니다. 본 글은 <strong>일반 참고</strong>이며, 개별 거래는{" "}
          <strong>은행·법무사·세무 전문가</strong> 확인이 필요합니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-sfpm-what" className="text-primary underline-offset-4 hover:underline">
              셀러 파이낸싱이란
            </a>
          </li>
          <li>
            <a href="#guide-sfpm-why" className="text-primary underline-offset-4 hover:underline">
              왜 늘었나 — 6·27 대책과 한도 갭
            </a>
          </li>
          <li>
            <a href="#guide-sfpm-vs-bank" className="text-primary underline-offset-4 hover:underline">
              은행 vs 집주인 대출
            </a>
          </li>
          <li>
            <a href="#guide-sfpm-structure" className="text-primary underline-offset-4 hover:underline">
              잔금 구조 예시
            </a>
          </li>
          <li>
            <a href="#guide-sfpm-registry" className="text-primary underline-offset-4 hover:underline">
              등기부·계약서
            </a>
          </li>
          <li>
            <a href="#guide-sfpm-closing" className="text-primary underline-offset-4 hover:underline">
              잔금일 순서
            </a>
          </li>
          <li>
            <a href="#guide-sfpm-risk" className="text-primary underline-offset-4 hover:underline">
              매수·매도 리스크
            </a>
          </li>
          <li>
            <a href="#guide-sfpm-checklist" className="text-primary underline-offset-4 hover:underline">
              확인 체크리스트
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-3" aria-labelledby="guide-sfpm-what">
        <h2 id="guide-sfpm-what" className="text-foreground text-xl font-semibold tracking-tight">
          셀러 파이낸싱이란
        </h2>
        <p>
          <strong>Seller Financing</strong>은 매도인(집주인)이 매수인에게 자금을 대여하고, 그 대가로 주택에{" "}
          <strong>근저당권</strong>을 설정해 매매가 성사되는 방식입니다. <strong>집주인 대출</strong>,{" "}
          <strong>사인 간 근저당</strong>으로도 불립니다.
        </p>
        <p>
          은행{" "}
          <Link href="/guide/mortgage-loan-application-documents" className="text-primary underline-offset-4 hover:underline">
            주택담보대출
          </Link>
          은 금융회사가 심사한 뒤 실행하고, 집주인 대출은 <strong>개인 간 채권·담보</strong>에 가깝습니다. 금리·만기·상환
          방식은 <strong>당사자 협의</strong>이며, 시중 주담대보다 높게 정해지는 경우가 많습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-sfpm-why">
        <h2 id="guide-sfpm-why" className="text-foreground text-xl font-semibold tracking-tight">
          왜 늘었나 — 6·27 대책과 한도 갭
        </h2>
        <p>
          <strong>2025년 6·27 부동산 대책</strong> 이후 수도권·규제지역 등에서{" "}
          <Link href="/guide/kb-mortgage-300-million-limit-2026-guide" className="text-primary underline-offset-4 hover:underline">
            주담대 6억 한도
          </Link>
          , <strong>LTV·DSR</strong>,{" "}
          <Link href="/guide/multi-homeowner-loan-regulations-guide" className="text-primary underline-offset-4 hover:underline">
            다주택자 대출 제한
          </Link>
          이 강화되었습니다. 매매가와 은행 인정 한도 사이 <strong>갭</strong>을 집주인 대출·자기자금으로 메우는 패턴이
          늘었습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          거래가 규제 우회로 해석될 여지가 있는 경우도 있어, 계약·등기·자금 출처를 정상 거래 구조로 맞추는 것이
          중요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-sfpm-vs-bank">
        <h2 id="guide-sfpm-vs-bank" className="text-foreground text-xl font-semibold tracking-tight">
          은행 vs 집주인 대출
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              은행 주담대 vs 집주인 대출(셀러론)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  은행 주담대
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  집주인 대출
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상대
                </th>
                <td className="border-border border-b px-3 py-2.5">금융회사</td>
                <td className="border-border border-b px-3 py-2.5">매도인(개인)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  심사
                </th>
                <td className="border-border border-b px-3 py-2.5">DSR·LTV·신용 등</td>
                <td className="border-border border-b px-3 py-2.5">당사자 협의</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  담보 순위
                </th>
                <td className="border-border border-b px-3 py-2.5">통상 1순위 근저당</td>
                <td className="border-border border-b px-3 py-2.5">2순위인 경우 많음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  금리·상환
                </th>
                <td className="px-3 py-2.5">상품별</td>
                <td className="px-3 py-2.5">계약마다 상이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-sfpm-structure">
        <h2 id="guide-sfpm-structure" className="text-foreground text-xl font-semibold tracking-tight">
          잔금 구조 예시
        </h2>
        <p>
          <strong>매매 20억</strong>, <strong>은행 10억</strong>, <strong>집주인 6억</strong>, <strong>자기자금 4억</strong>{" "}
          가정입니다. 집주인 6억은 보통 매수인에게 빌려준 뒤, 매수인이 잔금 20억을 집주인에게 지급하는{" "}
          <strong>돌려주기</strong> 구조입니다.
        </p>
        <p className="text-muted-foreground text-sm">
          매도인이 6억을 현금으로 받지 않고 채권만 남기는 형태도 있어, 매매대금·{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세
          </Link>
          ·계약은 법무사 확인이 필요합니다. 실무 서류는 <strong>매매계약(특약)</strong>,{" "}
          <strong>금전소비대차</strong>, <strong>근저당권설정</strong>, <strong>차용증·이자 영수</strong>입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-sfpm-registry">
        <h2 id="guide-sfpm-registry" className="text-foreground text-xl font-semibold tracking-tight">
          등기부·계약서
        </h2>
        <p>
          <strong>인터넷등기소</strong> 말소사항 포함 등기부등본에서 <strong>갑구</strong>(소유자·가압류 등),{" "}
          <strong>을구</strong>(근저당·임차권)를 확인합니다. 잔금 후 목표는{" "}
          <strong>1순위 은행 · 2순위 매도인</strong> 등 계약과 일치하는지입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              등기부 확인 시점
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  갑구
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  을구
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  계약 전
                </th>
                <td className="border-border border-b px-3 py-2.5">소유자 = 매도인</td>
                <td className="border-border border-b px-3 py-2.5">기존 근저당·임차권</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  등기 완료 후
                </th>
                <td className="border-border border-b px-3 py-2.5">매수인 명의</td>
                <td className="border-border border-b px-3 py-2.5">1·2순위 금액·채권자 대조</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  매매 특약
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  잔금일 은행·집주인 금액, 근저당 순위, 전액 상환 시 말소, 양도 시 말소 협조
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          직거래·호가 확인은{" "}
          <Link href="/guide/lease-contract-without-broker-guide" className="text-primary underline-offset-4 hover:underline">
            직거래 계약서
          </Link>
          ,{" "}
          <Link
            href="/guide/online-direct-trade-platform-precautions-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            온라인 직거래 주의
          </Link>
          가이드를 함께 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-sfpm-closing">
        <h2 id="guide-sfpm-closing" className="text-foreground text-xl font-semibold tracking-tight">
          잔금일 순서(협의마다 다름)
        </h2>
        <p className="text-muted-foreground text-sm">20억 예시 — 잔금 전날 타임라인을 문서로 맞추세요.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              잔금일 흐름(예시)
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
                  확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1
                </th>
                <td className="border-border border-b px-3 py-2.5">은행 10억 실행</td>
                <td className="border-border border-b px-3 py-2.5">실행 확인서</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2
                </th>
                <td className="border-border border-b px-3 py-2.5">집주인 → 매수인 6억(금전소비대차)</td>
                <td className="border-border border-b px-3 py-2.5">송금·계약일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3
                </th>
                <td className="border-border border-b px-3 py-2.5">매수인 → 집주인 잔금 20억</td>
                <td className="border-border border-b px-3 py-2.5">잔금 영수</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4
                </th>
                <td className="border-border border-b px-3 py-2.5">소유권 이전 + 1·2순위 근저당 등기</td>
                <td className="border-border border-b px-3 py-2.5">을구 대조</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5
                </th>
                <td className="px-3 py-2.5">기존 근저당 말소(해당 시)</td>
                <td className="px-3 py-2.5">말소 등기</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-sfpm-risk">
        <h2 id="guide-sfpm-risk" className="text-foreground text-xl font-semibold tracking-tight">
          매수·매도 리스크
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>매수</strong> — 집주인 원리금이{" "}
            <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
              DSR
            </Link>
            ·추가 대출에 영향 가능. 만기 일시상환·높은 금리. 2순위는 경매 시 은행 다음 배분. 구두 약속만으로는 입증
            어려움.
          </li>
          <li>
            <strong>매도</strong> — 회수 지연, 이자소득 등 세무. 말소 거부 시 매수자의 매도·{" "}
            <Link href="/guide/loan-refinancing-guide" className="text-primary underline-offset-4 hover:underline">
              갈아타기
            </Link>{" "}
            지연.
          </li>
          <li>
            <strong>분쟁</strong> — 잔금 후 집주인 근저당 미설정, 이자 미합의, 은행만 등기, 제3자 계좌 잔금.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-sfpm-checklist">
        <h2 id="guide-sfpm-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          확인 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              계약 전 · 잔금일 · 등기 후
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
                  등기부 갑·을구, 집주인 대출 조건 서면
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  은행 사전 심사·2순위 근저당 설정 가능 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  잔금일 송금 합계·은행·법무사 일정
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  등기 후 1·2순위·이자 납부일·말소 조건
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-sfpm-misconceptions">
        <h2 id="guide-sfpm-misconceptions" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>집주인이 빌려주면 DSR 무관</strong> — 은행 추가 심사·DSR에 영향 가능. 실행 전 확인.
          </li>
          <li>
            <strong>매매가 = 전액 은행 대출</strong> — 6억 한도·LTV로 은행은 일부만. 나머지는 자기자금·집주인 대출.
          </li>
          <li>
            <strong>호가 집주인대출 = 확정 조건</strong> — 매매 특약·금전소비대차·을구로 확인.
          </li>
          <li>
            <strong>등기만 하면 끝</strong> — 상환·말소·이자까지 계약 필요.
          </li>
        </ul>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p className="text-foreground font-medium">관련 가이드·계산기</p>
        <p>
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → DSR 계산기
          </Link>
          로 은행 대출분 월 상환·한도를 먼저 추산하세요. 집주인 대출 원리금은 별도로 더해 보세요.
        </p>
        <p>
          <Link href="/guide/auction-winning-bid-mortgage-loan-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            → 2025.6.27 이후 주담대 6억 한도
          </Link>
          는 경매·일반 매매 공통 적용 배경을 정리한 가이드에서 볼 수 있습니다.
        </p>
        <p>
          <Link href="/guide/direct-deal-vs-brokered-deal-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            → 직거래 vs 중개거래
          </Link>
          에서 등기부·권리 확인의 중요성을 함께 참고하세요.
        </p>
      </aside>
    </>
  );
}
