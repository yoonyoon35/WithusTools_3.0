import Link from "next/link";

export const tenantDeathLeaseInheritanceGuideMeta = {
  slug: "tenant-death-lease-inheritance-guide",
  title: "임차인·임대인 사망 시 전월세 계약·보증금·상속",
  description:
    "계약 만료 전 임차인·임대인 사망 시 임대차 존속, 보증금·월세 처리, 세입자·상속인 각각 확인할 절차, 민법 법정상속분, 상속세 신고와 전입·확정일자·보증보험 유의사항을 정리했습니다.",
  updated: "2026년 9월 14일",
} as const;

export function TenantDeathLeaseInheritanceGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-tdli-intro">
        <h2 id="guide-tdli-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 9월 기준
        </h2>
        <p>
          전·월세 계약 당사자인 <strong>임차인(세입자)</strong> 또는 <strong>임대인(집주인)</strong>이 계약 기간
          중 사망해도, 원칙적으로 <strong>임대차는 사망만으로 해지되지 않습니다</strong>. 다만 확인해야 할 서류·
          연락 상대·보증금 처리 주체가 <strong>누가 사망했는지</strong>에 따라 달라집니다. 이 글은 임차인 사망·
          임대인 사망을 구분해 정리합니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-tdli-compare" className="text-primary underline-offset-4 hover:underline">
              임차인 vs 임대인 사망
            </a>
          </li>
          <li>
            <a href="#guide-tdli-tenant" className="text-primary underline-offset-4 hover:underline">
              임차인 사망 시
            </a>
          </li>
          <li>
            <a href="#guide-tdli-landlord" className="text-primary underline-offset-4 hover:underline">
              임대인 사망 시
            </a>
          </li>
          <li>
            <a href="#guide-tdli-heirs" className="text-primary underline-offset-4 hover:underline">
              법정상속인·상속분
            </a>
          </li>
          <li>
            <a href="#guide-tdli-tax" className="text-primary underline-offset-4 hover:underline">
              상속세·신고
            </a>
          </li>
          <li>
            <a href="#guide-tdli-checklist" className="text-primary underline-offset-4 hover:underline">
              체크리스트
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-tdli-compare">
        <h2 id="guide-tdli-compare" className="text-foreground text-xl font-semibold tracking-tight">
          임차인 vs 임대인 사망
        </h2>
        <p>
          어느 쪽이 사망해도 <strong>계약서상 기간·보증금·월세 조건</strong>은 유효한 상태로 남습니다. 차이는{" "}
          <strong>누가 임차인·임대인 지위를 이어받는지</strong>, <strong>보증금을 누가 반환·수령하는지</strong>입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              사망 당사자별 처리 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  임차인(세입자) 사망
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  임대인(집주인) 사망
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약 존속
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  원칙 <strong>존속</strong>. 임차인 지위·보증금 반환청구권은 <strong>상속인</strong>에게
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  원칙 <strong>존속</strong>. 임대인 지위·월세 채권·보증금 반환 <strong>의무</strong>는 상속인에게
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속인이 하는 일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  임대인 통지, 거주·해지 결정, 보증금 채권 정리
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  부동산·임대차 승계, 세입자 연락, 보증금 반환 준비·등기
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상대방(생존 당사자)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>임대인</strong> — 상속인과 계약·보증금·월세 협의
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>세입자</strong> — 월세 납부·보증금 반환 상대를 상속인 측에 확인
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  보증금
                </th>
                <td className="px-3 py-2.5">
                  <strong>임차인 상속인</strong>이 계약 종료 시 반환 받음
                </td>
                <td className="px-3 py-2.5">
                  <strong>임대인 상속인</strong>이 계약 종료 시 세입자에게 반환 의무
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 특약으로 「당사자 사망 시 계약 종료」 등이 있는 경우 개별 계약·해석에 따라 달라질 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tdli-tenant">
        <h2 id="guide-tdli-tenant" className="text-foreground text-xl font-semibold tracking-tight">
          임차인 사망 시
        </h2>
        <p>
          <strong>법정상속인</strong>이 고인의 임차인 지위·보증금 반환청구권을 <strong>포괄상속</strong>합니다.
          임대인과의 관계는 상속인(들)이 이어받습니다.
        </p>

        <h3 id="guide-tdli-immediate" className="text-foreground text-base font-semibold">
          가족(상속인)이 확인할 일
        </h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              임차인 사망 — 확인·연락 순서(참고)
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-12">
                  1
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>임대차계약서</strong>·보증금 입금·{" "}
                  <Link
                    href="/guide/lease-contract-without-broker-guide#guide-lcwb-movein"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    전입·확정일자
                  </Link>{" "}
                  확보
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  2
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>임대인</strong>에게 사망 통지·연락 창구·거주·월세 계획 협의
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  3
                </th>
                <td className="border-border border-b px-3 py-2.5">법정상속인 확인·상속인 간 대표 정하기</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  4
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link
                    href="/guide/jeonse-guarantee-insurance-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    전세보증보험
                  </Link>
                  ·전세대출(근저당) 확인
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="guide-tdli-continue" className="text-foreground text-base font-semibold">
          거주 지속 vs 계약 종료
        </h3>
        <p className="text-muted-foreground text-sm">
          거주 지속 시 실제 거주 상속인의 전입·월세 납부, 임대인과 계약 당사자·연락처 정리(명의 변경·재계약은 협의). 중도
          해지 시 특약·위약·퇴거일 협의.{" "}
          <Link
            href="/guide/jeonse-renewal-brokerage-fee-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            갱신·묵시적 연장
          </Link>{" "}
          시점도 확인합니다.
        </p>

        <h3 id="guide-tdli-deposit" className="text-foreground text-base font-semibold">
          보증금·보증보험
        </h3>
        <p className="text-muted-foreground text-sm">
          납부한 보증금·반환청구권은 <strong>상속재산</strong>입니다. 계약 종료 시 임대인은 임차인 지위를 가진
          상속인에게 반환합니다. 확정일자·전입, 보증보험 증권 명의, 전세대출 잔액을 함께 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tdli-landlord">
        <h2 id="guide-tdli-landlord" className="text-foreground text-xl font-semibold tracking-tight">
          임대인 사망 시
        </h2>
        <p>
          임대인의 <strong>소유권</strong>과 <strong>임대인 지위</strong>(월세 수령·보증금 반환 의무)는 함께
          상속됩니다. 세입자의 <strong>대항력·우선변제권</strong> 등 기존 임차권은 주택임대차보호법상 원칙적으로
          유지됩니다. 임대인 사망만으로 세입자를 즉시 퇴거시킬 수 없습니다.
        </p>

        <h3 id="guide-tdli-landlord-heir" className="text-foreground text-base font-semibold">
          임대인 측 상속인이 확인할 일
        </h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              임대인 사망 — 상속인 확인 순서(참고)
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-12">
                  1
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>등기부등본</strong>·임대차계약서·세입자 보증금·월세 조건 확인
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  2
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>세입자</strong>에게 사망 통지·월세 납부 계좌·연락 창구·계약 존속 안내
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  3
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상속인 간 <strong>대표·관리자</strong> 정하기(월세 수령·관리비·수선·보증금 반환 창구)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  4
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>상속등기</strong>·근저당·담보대출 잔액 확인 — 보증금 반환과 우선순위에 영향
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="bg-muted/30 px-3 py-2.5 font-medium">
                  5
                </th>
                <td className="px-3 py-2.5">
                  상속재산·채무 파악 후{" "}
                  <Link
                    href="/guide/inherited-housing-acquisition-tax-2026-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    상속 취득세
                  </Link>
                  ·상속세 신고 기한 확인
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="guide-tdli-landlord-tenant" className="text-foreground text-base font-semibold">
          세입자(임차인)가 확인할 일
        </h3>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            월세·관리비는 <strong>가족관계증명·위임장</strong> 등으로 확인된 <strong>임대인 상속인(대표)</strong>에게
            납부합니다. 확인 없이 제3자에게 송금하지 않습니다.
          </li>
          <li>
            계약 기간 중 <strong>임대인 변경·매매</strong>가 예정된 경우 「대항력 있는 세입자」 보호 규칙이 적용될 수
            있습니다. 새 소유자·상속인에게 <strong>계약서·확정일자</strong> 사본을 제시해 권리를 확인합니다.
          </li>
          <li>
            계약 만료 시 보증금은 <strong>임대인 지위를 승계한 상속인</strong>이 반환합니다. 상속인이 여럿이면{" "}
            <strong>공동명의 수령·대표 1인 수령</strong> 등을 미리 서면으로 정리하는 것이 안전합니다.
          </li>
        </ul>

        <h3 id="guide-tdli-landlord-cotenant" className="text-foreground text-base font-semibold">
          상속인이 여럿일 때
        </h3>
        <p className="text-muted-foreground text-sm">
          부동산·임대 수익·보증금 반환 의무는 <strong>공동상속</strong> 지분에 따라 안분됩니다. 한 명이 단독으로
          매매·임대차 해지·보증금을 독단 처리하면 분쟁이 날 수 있으므로, <strong>협의분할·대표 선임·위임</strong>을
          정리합니다. 등기 명의·실제 관리·세입자 연락 창구를 맞춰 두는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tdli-heirs">
        <h2 id="guide-tdli-heirs" className="text-foreground text-xl font-semibold tracking-tight">
          법정상속인·상속분
        </h2>
        <p>
          임차인·임대인 <strong>어느 쪽이 사망해도</strong> 상속 순위·상속분은 동일한 <strong>민법 법정상속</strong>{" "}
          규칙을 따릅니다. <strong>사실혼 관계</strong>는 법정상속인이 아닙니다(예: 아들의 사실혼 여성은{" "}
          <strong>고인의 상속인이 아님</strong>).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대표적인 법정상속분(민법 제1012조 요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상속인 구성
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  법정상속분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  예시(아들·딸만)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  배우자 + 직계비속(자녀)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  배우자 <strong>1.5</strong>, 자녀 각 <strong>1</strong>
                </td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  배우자 없이 직계비속만
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>동수·균등</strong>
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  아들·딸 <strong>각 50%</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  배우자만
                </th>
                <td className="border-border border-b px-3 py-2.5">배우자 <strong>100%</strong></td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  사실혼·동거인
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  <strong>법정상속인 아님</strong>. 협의분할·유언 등 별도 정리 필요
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tdli-tax">
        <h2 id="guide-tdli-tax" className="text-foreground text-xl font-semibold tracking-tight">
          상속세·신고
        </h2>
        <p>
          <strong>임차인 사망</strong>: 보증금·예금 등 상속재산 합산.{" "}
          <strong>임대인 사망</strong>: 임대 주택·월세 채권·예금 등(담보대출·채무 차감 후) 합산.{" "}
          <Link
            href="/guide/inheritance-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            상속세 개요
          </Link>
          ·
          <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            상속세 계산기
          </Link>
          로 확인 후,{" "}
          <Link
            href="/guide/inheritance-tax-filing-deadline-installment-guide#guide-itfdi-deadline"
            className="text-primary underline-offset-4 hover:underline"
          >
            6개월 이내
          </Link>{" "}
          신고·납부 기한을 지킵니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 임대인이 사망해 <strong>주택을 상속</strong>받는 경우{" "}
          <Link
            href="/guide/inherited-housing-acquisition-tax-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            상속 취득세
          </Link>
          (지방세)도 별도입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tdli-checklist">
        <h2 id="guide-tdli-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          체크리스트
        </h2>
        <p className="text-foreground text-sm font-medium">임차인 사망(상속인·가족)</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm leading-relaxed">
          <li>계약서·보증금·확정일자·전입 서류 확보</li>
          <li>임대인 통지·거주·해지·월세 계획 협의</li>
          <li>법정상속인·사실혼 구분, 상속인 대표 정하기</li>
        </ul>
        <p className="text-foreground text-sm font-medium">임대인 사망(상속인)</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm leading-relaxed">
          <li>등기·임대차계약·세입자 보증금 조건 확인</li>
          <li>세입자에게 연락 창구·월세 계좌·계약 존속 안내</li>
          <li>상속등기·근저당·공동상속인 간 대표·위임 정리</li>
        </ul>
        <p className="text-foreground text-sm font-medium">임대인 사망(세입자)</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm leading-relaxed">
          <li>월세 납부 상대를 상속인(대표)으로 확인 후 납부</li>
          <li>만료 시 보증금 반환 주체·수령 방법을 서면으로 정리</li>
        </ul>
        <p className="text-muted-foreground text-sm">
          분쟁·고액 보증금·복잡한 공동상속은{" "}
          <strong>법률구조공단(132)·국세청 홈택스(126)·세무사·변호사</strong> 상담을 권합니다.
        </p>
      </section>
    </>
  );
}
