import Link from "next/link";

export const jeonseSafeTrustProgram2026GuideMeta = {
  slug: "jeonse-safe-trust-program-2026-guide",
  title: "전세 안심신탁사업이란? 전세보증보험과 차이 (2026 추진)",
  description:
    "전월세 안심신탁 구조, HUG 3자 계약·연 4%대 수익률·시세 20억 이하 우선, 10월 29일 기준 모집공고 대기 상태와 1차 모집 일정(신청 10~12월·입주 12월~), 전세보증보험과의 차이와 계약 전 확인 순서를 정리했습니다.",
  updated: "2026년 10월 30일",
} as const;

export function JeonseSafeTrustProgram2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-jstp-intro">
        <h2 id="guide-jstp-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 10월 29일 기준 · 결론부터
        </h2>
        <p>
          국토교통부는 2026년 8월 20일 <strong>전월세 안심신탁</strong> 사업을 공식 발표했습니다. 임차인이 낸
          전세보증금을 <strong>HUG(전월세안정화기구)</strong>가 받아 보관·운용하고, 연 <strong>4%대</strong> 수익을
          임대인에게 월 단위로 지급합니다. 전세사기 예방을 위해 보증금을 집주인 자산과 <strong>분리</strong>하는
          것이 핵심입니다.
        </p>
        <p>
          당초 계획은 9월 말 사업 공고였지만, <strong>10월 29일 현재 공식 모집공고는 아직 나오지 않았고 HUG가
          「조만간 공고」를 예고한 상태</strong>입니다. 9월 22일에는 사업 상담·신청을 지원하는 HUG 전월세 안심신탁센터가
          출범했습니다. HUG 안내 기준 1차 모집 일정은 <strong>신청 10~12월 → 3자 계약 11월~ → 입주 12월~2027년 2월</strong>
          이며, 실제 일정은 공사 사정에 따라 바뀔 수 있습니다. 시세 <strong>20억 원 이하</strong> 주택 우선, 임대인·임차인{" "}
          <strong>자발적 참여</strong>(법적 참여 의무 없음)입니다. 세부 수수료·약정서·월 수익률은 모집공고에서 확인합니다.
          당장 계약한다면{" "}
          <Link href="/guide/jeonse-guarantee-insurance-guide" className="text-primary underline-offset-4 hover:underline">
            전세보증보험
          </Link>
          ·등기부등본·확정일자 등 <strong>현행 보호 수단</strong>을 먼저 확인하는 것이 안전합니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-jstp-what" className="text-primary underline-offset-4 hover:underline">
              안심신탁사업이란
            </a>
          </li>
          <li>
            <a href="#guide-jstp-vs-insurance" className="text-primary underline-offset-4 hover:underline">
              전세보증보험과 차이
            </a>
          </li>
          <li>
            <a href="#guide-jstp-who" className="text-primary underline-offset-4 hover:underline">
              적용 대상(예정)
            </a>
          </li>
          <li>
            <a href="#guide-jstp-tenant-landlord" className="text-primary underline-offset-4 hover:underline">
              임차인·임대인에게 의미하는 것
            </a>
          </li>
          <li>
            <a href="#guide-jstp-legal" className="text-primary underline-offset-4 hover:underline">
              법적 근거·추진 일정
            </a>
          </li>
          <li>
            <a href="#guide-jstp-now" className="text-primary underline-offset-4 hover:underline">
              지금 전세 계약할 때 확인 순서
            </a>
          </li>
          <li>
            <a href="#guide-jstp-uncertain" className="text-primary underline-offset-4 hover:underline">
              아직 정해지지 않은 것
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-3" aria-labelledby="guide-jstp-what">
        <h2 id="guide-jstp-what" className="text-foreground text-xl font-semibold tracking-tight">
          안심신탁사업이란
        </h2>
        <p>
          2026년 7월 14일 정부가 발표한 <strong>2026년 하반기 경제성장전략</strong>에 포함된 전세 시장 안정화 방안입니다.
          보도·정책 자료에서는 <strong>안심신탁</strong>, <strong>전세신탁</strong>, <strong>안심전세신탁</strong>으로
          불리기도 합니다.
        </p>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            임차인이 전세보증금을 <strong>임대인 계좌가 아닌</strong> 전월세안정화기구(주택도시보증공사 HUG 산하)에 납부
          </li>
          <li>기구가 보증금을 별도 관리·운용</li>
          <li>운용에서 발생한 수익을 <strong>임대인에게 매월 지급</strong> — 월세 전환 대신 전세 유지 인센티브</li>
          <li>계약 종료 시 임차인에게 보증금 반환</li>
        </ol>
        <p>
          정부 설명에 따르면 보증금이 공적기구에 예치되면, 집주인 파산·경매 등으로 보증금이 다른 채권과 뒤섞일 위험을 줄이고,
          사고 발생 시 <strong>대위변제 절차 없이</strong> 반환을 앞당길 수 있다는 장점이 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jstp-vs-insurance">
        <h2 id="guide-jstp-vs-insurance" className="text-foreground text-xl font-semibold tracking-tight">
          전세보증보험과 차이
        </h2>
        <p>
          둘 다 전세보증금 보호와 관련 있지만, <strong>시점과 구조</strong>가 다릅니다. 안심신탁이 도입돼도 당분간은
          전세보증보험이 실무의 기본선으로 남을 가능성이 큽니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              안심신탁 vs 전세보증보험(전세보증금반환보증)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  안심신탁(예정)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  전세보증보험(현행)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증금 흐름
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  처음부터 HUG·전월세안정화기구가 보관
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  통상 임대인이 수령, 사고 시 보증기관이 대신 지급
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  성격
                </th>
                <td className="border-border border-b px-3 py-2.5">사전 분리·신탁 관리</td>
                <td className="border-border border-b px-3 py-2.5">사후 보험·구상</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임대인 수익
                </th>
                <td className="border-border border-b px-3 py-2.5">보증금 일시 수령 대신 연 4%대 운용 수익 월 수령</td>
                <td className="border-border border-b px-3 py-2.5">보증금 일시 수령(보험 가입 여부와 별개)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비용
                </th>
                <td className="border-border border-b px-3 py-2.5">세부 수수료는 모집공고에서 확인(공고 대기 중)</td>
                <td className="border-border border-b px-3 py-2.5">
                  보증료(연 0.1~0.3%대 등) —{" "}
                  <Link href="/guide/jeonse-guarantee-insurance-guide#guide-jeonse-org-compare" className="text-primary underline-offset-4 hover:underline">
                    기관별 비교
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 시점
                </th>
                <td className="border-border border-b px-3 py-2.5">모집공고 대기 중(HUG 안내: 신청 10~12월, 입주 12월~)</td>
                <td className="border-border border-b px-3 py-2.5">지금 가입 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  세입자 실무
                </th>
                <td className="px-3 py-2.5">임대인·기구가 신탁에 참여해야 효과</td>
                <td className="px-3 py-2.5">세입자가 직접 가입 신청 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jstp-who">
        <h2 id="guide-jstp-who" className="text-foreground text-xl font-semibold tracking-tight">
          적용 대상
        </h2>
        <p>
          HUG 안내 기준 <strong>시세 20억 원 이하</strong> 주택을 우선 대상으로 하며, 아파트·빌라·단독 등 주택 유형·
          지역 제한 없이 <strong>임대인·임차인이 자발적으로 신청</strong>합니다. 소득·연령·자산 제한이 없고 법인·개인과
          임대사업자 등록 여부도 따지지 않습니다. 보증금 전액을 HUG에 예치해야 하며, 일부만 맡기는 방식은 허용되지
          않습니다. 다만 위반건축물이거나 압류 등으로 임차인의 주거 안정을 해칠 수 있는 주택, 시세 대비 전세금이
          과도한 주택은 참여가 제한될 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              적용 범위 — HUG 안내(2026년 10월) 기준
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  안심신탁 적용 가능성
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등록임대사업자
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  참여 가능(등록 여부는 필수 조건 아님). 임대인은 임대보증금보증 보증료 면제 혜택을 받는 것으로 안내됨
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비등록 민간 임대인
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  소득·자산 제한 없이 자발적 참여 가능. 임차인을 아직 못 구했어도 신청 가능(HUG 매칭 지원)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 개인 간 전세
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  선택형 — 임대인·임차인 모두 동의 시 참여
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  공공임대·장기전세
                </th>
                <td className="px-3 py-2.5">
                  별도 제도 —{" "}
                  <Link href="/guide/long-term-jeonse-20-year-maturity-2026-guide" className="text-primary underline-offset-4 hover:underline">
                    장기전세 만기
                  </Link>
                  등과 구분
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 참여는 임대인·임차인의 자발적 신청이며 법적 참여 의무는 없습니다. 예탁 기간은 임대차 기간(최소 2년)에
          연동되고, 계약이 갱신되면 변경 약정으로 연장됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jstp-tenant-landlord">
        <h2 id="guide-jstp-tenant-landlord" className="text-foreground text-xl font-semibold tracking-tight">
          임차인·임대인에게 의미하는 것
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              기대 효과와 확인할 점
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기대 효과
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인할 점
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임차인
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  보증금이 집주인 채무와 분리, 사고 시 반환 신속화 기대
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  임대인이 신탁에 동의해야 함. 미참여 시 기존과 동일
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임대인
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  보증금 운용 수익 월 수령, 월세 전환 부담 완화 기대
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  수익률이 월세 수입보다 낮으면 참여율이 떨어질 수 있음
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  시장 전체
                </th>
                <td className="px-3 py-2.5">전세 물량·보증금 안전성 제고 기대</td>
                <td className="px-3 py-2.5">
                  전세자금대출·보증보험과 병행 여부는 추후 공지 확인
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          같은 성장전략에는 <strong>청년 전세보증금반환보증 보증료 지원</strong> 소득 요건 완화, 공공 매입임대 리츠 신설
          등도 포함됐습니다. 안심신탁만 단독으로 전세 시장이 바뀐다고 보기는 이릅니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jstp-legal">
        <h2 id="guide-jstp-legal" className="text-foreground text-xl font-semibold tracking-tight">
          법적 근거·추진 일정
        </h2>
        <p>
          8·13 주택 공급대책 후속으로 HUG가 전월세 안심신탁을 운영합니다. 당초 <strong>9월 말 사업 공고</strong>가
          예정돼 있었으나 10월 29일 현재 공식 모집공고는 나오지 않았습니다. HUG 안내 기준 1차 모집 일정은 아래와
          같으며, 공고 이후 달라질 수 있습니다. LH 매입임대 <strong>500가구</strong>도 시범 적용됩니다.
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>모집공고</strong> — 9월 말 예정이었으나 지연, HUG가 조만간 공고 예고(10월 29일 기준)
          </li>
          <li>
            <strong>신청·모집</strong> — 10월~12월(임대인 신청, 희망 시 HUG가 임차인 매칭 지원)
          </li>
          <li>
            <strong>3자 계약</strong> — 11월부터 임대인·임차인·HUG 3자 계약 체결
          </li>
          <li>
            <strong>입주</strong> — 12월~2027년 2월(1회차 모집은 이 기간 입주 가능한 건이 대상)
          </li>
        </ul>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>운영 주체</strong> — HUG 산하 전월세안정화기구(별도 설치 검토)
          </li>
          <li>
            <strong>연계 정책</strong> — 등록임대사업자 임대보증금 반환보증과 선택·병행 가능성
          </li>
          <li>
            <strong>관련 기관</strong> — 국토교통부, HUG(hug.or.kr), 전월세안정화기구
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jstp-now">
        <h2 id="guide-jstp-now" className="text-foreground text-xl font-semibold tracking-tight">
          지금 전세 계약할 때 확인 순서
        </h2>
        <p>
          안심신탁은 아직 <strong>공식 모집공고 전</strong>입니다(10월 29일 기준). 당장 전세를 구한다면 아래 순서가 실무에 더 직접적입니다.
        </p>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">등기부등본</strong> — 근저당·가압류·신탁등기 여부 확인
          </li>
          <li>
            <strong className="text-foreground">확정일자·전입신고</strong> — 대항력 확보
          </li>
          <li>
            <strong className="text-foreground">전세보증보험 가입 가능 여부</strong> — 계약 전 HUG 사전 조회
          </li>
          <li>
            <strong className="text-foreground">전세자금대출 한도</strong> —{" "}
            <Link href="/guide/jeonse-loan-types-comparison" className="text-primary underline-offset-4 hover:underline">
              버팀목·시중은행
            </Link>
            ·
            <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
              DSR
            </Link>
          </li>
          <li>
            <strong className="text-foreground">계약서·특약</strong> —{" "}
            <Link href="/guide/lease-contract-without-broker-guide" className="text-primary underline-offset-4 hover:underline">
              직거래 계약
            </Link>
            시에도 보증금 반환·해지 조건 명시
          </li>
          <li>
            <strong className="text-foreground">안심신탁 적용 여부</strong> — 시행 후 해당 매물·임대인이 참여하는지
            별도 확인
          </li>
        </ol>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jstp-uncertain">
        <h2 id="guide-jstp-uncertain" className="text-foreground text-xl font-semibold tracking-tight">
          아직 정해지지 않은 것
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>모집공고 <strong>정확한 게시 일정</strong>과 2회차 이후 모집(반기별 공고 예고) 시기</li>
          <li>신탁 <strong>수수료</strong>와 보증금 <strong>운용 수익률</strong>(임대인 참여율의 핵심)</li>
          <li>운용 손실·지연 반환 시 <strong>책임 주체</strong></li>
          <li>일반 개인 간 전세·오피스텔·다가구 등 <strong>적용 제외 범위</strong></li>
          <li>전세보증보험·전세자금대출과 <strong>중복·대체</strong> 관계</li>
        </ul>
        <p>
          위 항목은 국토교통부·HUG 공지가 나오면 이 글의 <code>updated</code> 날짜와 함께 갱신할 예정입니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="참고 안내"
      >
        <p>
          본 글은 <strong>2026년 10월 29일 기준 국토교통부·HUG 안내를 정리한 참고용</strong>이며, 안심신탁은 아직 전국
          전세에 일괄 적용되지 않습니다. 계약·가입 판단은 HUG·전월세안정화기구 공식 안내와{" "}
          <Link href="/guide/jeonse-guarantee-insurance-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            전세보증보험 가이드
          </Link>
          를 함께 확인하세요.
        </p>
        <p>
          전세자금이 필요하면{" "}
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
          로 월 부담을 미리 추산할 수 있습니다.
        </p>
      </aside>
    </>
  );
}
