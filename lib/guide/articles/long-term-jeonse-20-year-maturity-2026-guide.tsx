import Link from "next/link";

export const longTermJeonse20YearMaturity2026GuideMeta = {
  slug: "long-term-jeonse-20-year-maturity-2026-guide",
  title: "장기전세 20년 만기 대응 가이드: 계약연장·분양전환 선택과 비용",
  description:
    "2026년 7월 기준 서울시 장기전세주택(시프트) 20년 만기 배경, 입주민·서울시 입장, 퇴거·재계약·분양전환·이주 선택지별 비용·절차, 만기 전 체크리스트를 표로 정리했습니다.",
  updated: "2026년 7월 15일",
} as const;

export function LongTermJeonse20YearMaturity2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ltj-intro">
        <h2 id="guide-ltj-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          서울시 <strong>장기전세주택</strong>(일명 <strong>시프트</strong>)은 2007년 도입된 공공임대 제도로, 주변 전세 시세 대비
          낮은 보증금(통상 시세의 20~80%)으로 <strong>최장 20년</strong> 거주할 수 있도록 설계됐습니다. 설계 단계부터 분양
          전환을 전제로 하지 않았고, 입주 당시 계약서에도 20년 만기 후 퇴거가 명시돼 있습니다.
        </p>
        <p>
          2027년부터 강동구 강일리버파크·강일리엔파크 등 초기 입주 단지가 순차적으로 만기를 맞으면서, 입주민들은{" "}
          <strong>계약 연장·분양 전환</strong>을 요구하고 서울시는 <strong>계약대로 퇴거·미리내집 재공급</strong> 입장을
          유지하고 있습니다. 이 글은 뉴스 논란을 넘어, 만기를 앞둔 세입자가 <strong>선택지·비용·확인 사항</strong>을
          비교하는 데 초점을 맞춥니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ol className="text-muted-foreground list-decimal space-y-1 pl-5">
          <li>
            <a href="#guide-ltj-what" className="text-primary underline-offset-4 hover:underline">
              장기전세주택(시프트)이란
            </a>
          </li>
          <li>
            <a href="#guide-ltj-timeline" className="text-primary underline-offset-4 hover:underline">
              20년 만기 일정·규모
            </a>
          </li>
          <li>
            <a href="#guide-ltj-dispute" className="text-primary underline-offset-4 hover:underline">
              계약연장·분양전환 논란 요약
            </a>
          </li>
          <li>
            <a href="#guide-ltj-options" className="text-primary underline-offset-4 hover:underline">
              만기 후 선택지 4가지 비교
            </a>
          </li>
          <li>
            <a href="#guide-ltj-cost" className="text-primary underline-offset-4 hover:underline">
              선택지별 비용·자금 시나리오
            </a>
          </li>
          <li>
            <a href="#guide-ltj-mirinae" className="text-primary underline-offset-4 hover:underline">
              시프트 vs 장기전세주택Ⅱ(미리내집)
            </a>
          </li>
          <li>
            <a href="#guide-ltj-checklist" className="text-primary underline-offset-4 hover:underline">
              만기 전 체크리스트
            </a>
          </li>
        </ol>
      </nav>

      <section className="space-y-3" aria-labelledby="guide-ltj-what">
        <h2 id="guide-ltj-what" className="text-foreground text-xl font-semibold tracking-tight">
          장기전세주택(시프트)이란
        </h2>
        <p>
          서울시와 서울주택도시공사(SH)가 공급하는 공공임대주택으로, 무주택 세대에게 주변 전세 시세보다 낮은 보증금으로
          장기 거주 기회를 제공합니다. 일반 민간 전세와 달리 <strong>임대인은 SH·서울시</strong>이며, 입주자는 분양권이 아닌{" "}
          <strong>임차권(전세)</strong> 형태로 거주합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              장기전세주택(시프트) 핵심 조건
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
                  도입
                </th>
                <td className="border-border border-b px-3 py-2.5">2007년(전세 시장 안정·주거비 부담 완화 목적)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증금 수준
                </th>
                <td className="border-border border-b px-3 py-2.5">주변 전세 시세의 약 20~80%(단지·시기별 상이)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  최장 거주
                </th>
                <td className="border-border border-b px-3 py-2.5">20년(계약 기간 만료 시 퇴거 원칙)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양 전환
                </th>
                <td className="border-border border-b px-3 py-2.5">설계·계약상 근거 없음(2026년 7월 현재 서울시 공식 입장)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  청약 자격
                </th>
                <td className="border-border border-b px-3 py-2.5">거주 중에도 일반 분양주택 청약 자격 유지 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  만기 후 공급 계획
                </th>
                <td className="px-3 py-2.5">서울시는 퇴거 물량을 신혼부부 등 대상 장기전세주택Ⅱ(미리내집) 등으로 재공급 예정</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ltj-timeline">
        <h2 id="guide-ltj-timeline" className="text-foreground text-xl font-semibold tracking-tight">
          20년 만기 일정·규모
        </h2>
        <p>
          2027년부터 초기 입주 단지가 본격적으로 만기를 맞습니다. 서울시에 따르면 2027~2031년 사이 최장 거주 기간 20년이
          만료되는 가구는 약 <strong>9,361가구</strong>에 달합니다. 이후 2030년대 중반까지 해마다 만기 물량이 이어질
          전망입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주요 단지 만기 시점(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시기
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대표 단지·지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2027년~
                </th>
                <td className="border-border border-b px-3 py-2.5">강동구 강일리버파크·강일리엔파크, 마곡수명산파크, 송파파인타운</td>
                <td className="border-border border-b px-3 py-2.5">만기 논란 본격화</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2028년
                </th>
                <td className="border-border border-b px-3 py-2.5">은평뉴타운 등</td>
                <td className="border-border border-b px-3 py-2.5">순차 만기</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2030년
                </th>
                <td className="border-border border-b px-3 py-2.5">상암월드컵파크 등</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2031년
                </th>
                <td className="border-border border-b px-3 py-2.5">세곡리엔파크, 고덕리엔파크 등</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  2033~2035년
                </th>
                <td className="px-3 py-2.5">서초네이처힐, 서초포레스타 등</td>
                <td className="px-3 py-2.5">2030년대 중반까지 이어짐</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 단지별 입주 시기·계약 조건이 다르므로, 본인 계약서의 <strong>임대차 종료일</strong>과 SH·관리사무소 공지를
          기준으로 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ltj-dispute">
        <h2 id="guide-ltj-dispute" className="text-foreground text-xl font-semibold tracking-tight">
          계약연장·분양전환 논란 요약
        </h2>
        <p>
          입주민 측은 20년간 낮은 주거비로 거주했지만, 만기 시 보증금만 돌려받고 퇴거해야 하므로 인근 시세(예: 전세 10억
          원대)로 재정착하기 어렵다는 점을 문제 삼고 있습니다. 일부 단지는 보증금을 시세 80% 수준으로 조정한{" "}
          <strong>재계약</strong>이나, <strong>감정가 기준 분양 전환</strong>을 요구하고 있습니다.
        </p>
        <p>
          서울시는 계약 당시 재계약·분양 전환이 불가한 조건으로 공급됐다는 점, 신규 대기자와의 형평성, SH 재정 부담 등을
          이유로 <strong>만기 퇴거 원칙</strong>을 유지하고 있습니다. 2024년 출시한 장기전세주택Ⅱ(미리내집)에는 분양
          전환 근거가 있어, 기존 시프트 입주민과의 형평성 논란도 이어지고 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              입주민 요구 vs 서울시 입장(2026년 7월 기준)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  입주민·권익단체 요구
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  서울시·SH 공식 입장
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약 연장
                </th>
                <td className="border-border border-b px-3 py-2.5">무주택·고령·저소득 등 조건 충족 시 재계약 보장</td>
                <td className="border-border border-b px-3 py-2.5">계약상 20년 만기 후 퇴거 원칙, 연장 근거 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양 전환
                </th>
                <td className="border-border border-b px-3 py-2.5">장기 거주자 대상 감정가·시세 기준 우선매수·분양 기회</td>
                <td className="border-border border-b px-3 py-2.5">시프트는 분양 전환 전제 아님, 수용 어렵다는 입장</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이주 지원
                </th>
                <td className="border-border border-b px-3 py-2.5">저리 이주 대출·공공전세·LH 연계 등</td>
                <td className="border-border border-b px-3 py-2.5">기존 공공임대·전세 지원 제도 안내(정책별 상이)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  만기 물량 활용
                </th>
                <td className="px-3 py-2.5">기존 입주민 우선 재공급·참여 보장</td>
                <td className="px-3 py-2.5">신혼부부 등 대상 미리내집(장기전세Ⅱ) 재공급 계획</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 정책은 국회·서울시 논의에 따라 변동될 수 있습니다. 2026년 7월 현재 확정된 연장·분양 전환 제도는 없으며, 본
          글은 <strong>현행 계약 기준</strong>에서 세입자가 준비할 수 있는 실무 관점을 정리합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ltj-options">
        <h2 id="guide-ltj-options" className="text-foreground text-xl font-semibold tracking-tight">
          만기 후 선택지 4가지 비교
        </h2>
        <p>
          정책 변화 여부와 관계없이, 만기를 앞둔 세입자는 아래 네 가지 경로 중 하나(또는 조합)를 검토하게 됩니다. 민간
          전세와 달리 갱신청구권·묵시적 갱신은 <strong>공공임대 계약 조건</strong>에 따라 적용되지 않을 수 있으므로, 본인
          계약서·SH 안내를 우선 확인하세요.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              만기 후 선택지 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  선택지
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  개요
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주요 비용·절차
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유의점
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ① 계약대로 퇴거·이주
                </th>
                <td className="border-border border-b px-3 py-2.5">보증금 반환 후 타 지역 전·월세 또는 매매로 이동</td>
                <td className="border-border border-b px-3 py-2.5">
                  이사비, 신규 보증금·중개수수료, 전세자금대출 이자
                </td>
                <td className="border-border border-b px-3 py-2.5">시세 대비 보증금 격차가 클수록 추가 자금 필요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ② 민간 전세 재계약
                </th>
                <td className="border-border border-b px-3 py-2.5">인근 또는 타 지역 민간 임대차 신규 계약</td>
                <td className="border-border border-b px-3 py-2.5">
                  보증금 증액분, 중개수수료, 확정일자·전세보증보험
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  합의 재계약·갱신청구권 등{" "}
                  <Link href="/guide/jeonse-renewal-brokerage-fee-guide" className="text-primary underline-offset-4 hover:underline">
                    민간 전세 재계약 규칙
                  </Link>{" "}
                  적용
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ③ 분양·매매(소유권 취득)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  정책 변경 시 우선매수, 또는 동일·인근 단지 매매
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  취득세, 등기·중개수수료, 주담대(DSR·LTV)
                </td>
                <td className="border-border border-b px-3 py-2.5">2026년 7월 현재 시프트 분양 전환은 미확정</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  ④ 공공임대·전세 재신청
                </th>
                <td className="px-3 py-2.5">LH·SH 공공임대, 행복주택, 전세임대 등 재공급 신청</td>
                <td className="px-3 py-2.5">입주 자격·대기 순번, 보증금·관리비</td>
                <td className="px-3 py-2.5">만기와 별개로 자격·경쟁률 확인 필요, 즉시 입주 어려울 수 있음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ltj-cost">
        <h2 id="guide-ltj-cost" className="text-foreground text-xl font-semibold tracking-tight">
          선택지별 비용·자금 시나리오
        </h2>
        <p>
          아래는 보도에서 자주 언급되는 <strong>「시세 10억·보증금 3억」</strong> 수준을 가정한 참고 예시입니다. 실제
          단지·호수·시점에 따라 달라집니다.
        </p>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">시나리오 A: 퇴거 후 인근 민간 전세(보증금 8억)로 이주</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              퇴거·재전세 자금 흐름(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액(예시)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  시프트 보증금 반환
                </th>
                <td className="border-border border-b px-3 py-2.5">+3억 원</td>
                <td className="border-border border-b px-3 py-2.5">만기 퇴거 시</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신규 전세 보증금
                </th>
                <td className="border-border border-b px-3 py-2.5">−8억 원</td>
                <td className="border-border border-b px-3 py-2.5">인근 시세 기준</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  추가 필요 자금
                </th>
                <td className="border-border border-b px-3 py-2.5">5억 원</td>
                <td className="border-border border-b px-3 py-2.5">자기자금 + 전세자금대출</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세 중개수수료(8억 기준)
                </th>
                <td className="border-border border-b px-3 py-2.5">약 24만 원(0.3%)</td>
                <td className="border-border border-b px-3 py-2.5">임대인·임차인 분담 관행</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이사·입주 비용
                </th>
                <td className="border-border border-b px-3 py-2.5">수십~100만 원+</td>
                <td className="border-border border-b px-3 py-2.5">거리·규모별 상이</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  전세보증보험(선택)
                </th>
                <td className="px-3 py-2.5">수십만 원대</td>
                <td className="px-3 py-2.5">보증금·기간에 따라 변동</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">시나리오 B: 퇴거 후 동일급 매매(10억) 검토</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매 시 추가 부대비용(10억·1주택·생애최초 가정, 예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액(예시)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매가
                </th>
                <td className="border-border border-b px-3 py-2.5">10억 원</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자기자금(보증금+추가)
                </th>
                <td className="border-border border-b px-3 py-2.5">3억~4억 원</td>
                <td className="border-border border-b px-3 py-2.5">LTV·DSR에 따라 대출 한도 결정</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세(1~3% 구간)
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,100만~1,650만 원</td>
                <td className="border-border border-b px-3 py-2.5">감면·주택 수·가격에 따라 변동</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료(매매)
                </th>
                <td className="border-border border-b px-3 py-2.5">약 400만~500만 원</td>
                <td className="border-border border-b px-3 py-2.5">10억 구간 0.4~0.5% 상한</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기·인지세 등
                </th>
                <td className="border-border border-b px-3 py-2.5">약 100만~200만 원</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  주담대 이자(매월)
                </th>
                <td className="px-3 py-2.5">DSR·금리·기간에 따라 산출</td>
                <td className="px-3 py-2.5">
                  <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
                    DSR 계산기
                  </Link>
                  ·{" "}
                  <Link href="/loan-calculator" className="text-primary underline-offset-4 hover:underline">
                    대출 이자 계산기
                  </Link>
                  참고
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">시나리오 C: 입주민 요구대로 「보증금 80% 재계약」이 도입될 경우(가정)</h3>
        <p>
          일부 단지에서 요구하는 「시세 80% 보증금 재계약」이 정책으로 반영된다면, 위 10억·3억 예시에서는 보증금이{" "}
          <strong>약 8억 원</strong> 수준으로 조정될 수 있습니다. 이 경우 추가 자금은 약 5억 원이며, 중개수수료는 SH
          직거래 여부·재계약 방식에 따라 달라집니다.{" "}
          <strong>2026년 7월 현재 이는 입주민 요구안이며 확정 정책이 아닙니다.</strong>
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ltj-mirinae">
        <h2 id="guide-ltj-mirinae" className="text-foreground text-xl font-semibold tracking-tight">
          시프트 vs 장기전세주택Ⅱ(미리내집)
        </h2>
        <p>
          서울시는 2024년 <strong>장기전세주택Ⅱ(미리내집)</strong>을 출시해, 일정 조건(20년 거주·자녀 출산 등) 충족 시{" "}
          <strong>분양 전환</strong> 근거를 두었습니다. 기존 시프트 입주민은 이 제도와 별개로 계약됐기 때문에 형평성
          논란이 커지고 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              시프트(기존) vs 미리내집(신규) 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  장기전세주택(시프트)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  장기전세주택Ⅱ(미리내집)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  도입
                </th>
                <td className="border-border border-b px-3 py-2.5">2007년~</td>
                <td className="border-border border-b px-3 py-2.5">2024년~</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  최장 거주
                </th>
                <td className="border-border border-b px-3 py-2.5">20년</td>
                <td className="border-border border-b px-3 py-2.5">20년(조건별 상이)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양 전환
                </th>
                <td className="border-border border-b px-3 py-2.5">계약상 없음</td>
                <td className="border-border border-b px-3 py-2.5">일정 조건 충족 시 시세 80~90% 수준 분양 기회(정책 안)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  만기 후
                </th>
                <td className="border-border border-b px-3 py-2.5">퇴거·보증금 반환(현행 원칙)</td>
                <td className="border-border border-b px-3 py-2.5">분양 전환 또는 퇴거(입주 계약 조건 따름)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  만기 물량 재공급
                </th>
                <td className="px-3 py-2.5">—</td>
                <td className="px-3 py-2.5">서울시, 시프트 퇴거 물량을 미리내집 등으로 재공급 계획</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ltj-checklist">
        <h2 id="guide-ltj-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          만기 전 체크리스트
        </h2>
        <p>
          만기 1~2년 전부터 아래 항목을 순서대로 확인하면, 퇴거·이주·매매 결정 시 자금 계획을 세우기 수월합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              장기전세 만기 대비 체크리스트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold w-16 text-center">
                  확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  임대차 종료일
                </th>
                <td className="border-border border-b px-3 py-2.5">계약서·SH 통지의 정확한 만기일</td>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  보증금 반환 절차
                </th>
                <td className="border-border border-b px-3 py-2.5">퇴거 검수·반환 시기·계좌(관리사무소·SH 안내)</td>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  인근 전·월세 시세
                </th>
                <td className="border-border border-b px-3 py-2.5">실거래·전세가율로 이주 비용 추산</td>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  추가 자금·대출 가능액
                </th>
                <td className="border-border border-b px-3 py-2.5">전세자금·주담대 DSR·LTV 사전 점검</td>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  공공임대·전세 재신청 자격
                </th>
                <td className="border-border border-b px-3 py-2.5">LH·SH·행복주택 등 입주 요건·대기 현황</td>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  정책·단지 공지
                </th>
                <td className="border-border border-b px-3 py-2.5">서울시·SH·입주민 설명회·권익단체 공지 추적</td>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  학군·생활권 이전 계획
                </th>
                <td className="border-border border-b px-3 py-2.5">자녀 학교·출퇴근·의료 등 생활 인프라</td>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  세금·수수료 시뮬레이션
                </th>
                <td className="px-3 py-2.5">매매·재전세·이사 시 취득세·중개수수료·부대비용 계산</td>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 계약 연장·분양 전환은 2026년 7월 현재 확정된 제도가 아닙니다. 최신 입장은{" "}
          <a
            href="https://www.seoul.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            서울시(seoul.go.kr)
          </a>
          ·{" "}
          <a
            href="https://www.i-sh.co.kr"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            SH공사(i-sh.co.kr)
          </a>
          공지를 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드·계산기"
      >
        <p>
          <Link
            href="/guide/jeonse-renewal-brokerage-fee-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 민간 전세 재계약 시 중개수수료·갱신권은 전세 재계약 가이드에서 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/jeonse-brokerage-fee-calculation-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 전세 보증금 구간별 중개수수료는 전세 중개수수료 가이드·계산기에서 볼 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/home-purchase-additional-costs-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 분양·매매를 검토한다면 주택 구입 부대비용 가이드를 함께 참고하세요.
          </Link>
        </p>
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 전세·매매 중개수수료는 중개수수료 계산기에서, 취득세는 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
