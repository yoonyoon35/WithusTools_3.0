import Link from "next/link";

export const leaseContractWithoutBrokerGuideMeta = {
  slug: "lease-contract-without-broker-guide",
  title: "공인중개사 없이 계약서 작성하는 방법",
  description:
    "직접 작성 전 확인 서류, 필수 기재사항, 표준양식 다운로드, 전입·확정일자, 전월세 신고, 보증금 보호 조치를 표로 정리했습니다.",
  updated: "2026년 4월 28일",
} as const;

export function LeaseContractWithoutBrokerGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-lcwb-intro">
        <p>
          공인중개사 없이 임대인과 임차인이 직접 계약서를 작성하는 것은 법적으로 가능합니다. 다만 권리 관계 확인·계약서 필수
          기재사항·사후 신고 절차를 당사자가 직접 수행해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-pre">
        <h2 id="guide-lcwb-pre" className="text-foreground text-xl font-semibold tracking-tight">
          계약 전 필수 확인 사항
        </h2>
        <p>
          계약서 작성 전 아래 서류를 반드시 확인해야 합니다. 계약 후 문제가 발견되면 보증금 보호가 어려워질 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              계약 전 확인 서류
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 서류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기부등본
                </th>
                <td className="border-border border-b px-3 py-2.5">대법원 인터넷등기소 (iros.go.kr)</td>
                <td className="border-border border-b px-3 py-2.5">700원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  건축물대장
                </th>
                <td className="border-border border-b px-3 py-2.5">정부24 (gov.kr)</td>
                <td className="border-border border-b px-3 py-2.5">무료</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전입세대 열람내역
                </th>
                <td className="border-border border-b px-3 py-2.5">주민센터 방문 (임대인 동의 필요)</td>
                <td className="border-border border-b px-3 py-2.5">무료</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  국세·지방세 체납 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">임대인에게 납세증명서 요청</td>
                <td className="border-border border-b px-3 py-2.5">무료</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실제 소유자 확인
                </th>
                <td className="px-3 py-2.5">등기부등본 소유자와 신분증 대조</td>
                <td className="px-3 py-2.5">무료</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          등기부등본에서 근저당 설정액과 선순위 임차인 보증금 합계가 주택 시세의 80%를 초과하면 보증금 반환 위험이 있으므로
          계약을 재검토해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-required">
        <h2 id="guide-lcwb-required" className="text-foreground text-xl font-semibold tracking-tight">
          계약서 필수 기재사항
        </h2>
        <p>
          직접 작성하는 계약서에는 아래 항목이 반드시 포함되어야 합니다. 국토교통부 표준임대차계약서 양식을 활용하면 누락을
          방지할 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              필수 기재 항목
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
                  임대인·임차인 인적사항
                </th>
                <td className="border-border border-b px-3 py-2.5">성명·주민등록번호·주소·연락처</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임대 목적물 정보
                </th>
                <td className="border-border border-b px-3 py-2.5">주소·면적·층·호수</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증금
                </th>
                <td className="border-border border-b px-3 py-2.5">총액·계약금·중도금·잔금 및 각 지급일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임대 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">시작일·종료일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  월 차임 (월세의 경우)
                </th>
                <td className="border-border border-b px-3 py-2.5">금액·지급일·지급 방법</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  특약사항
                </th>
                <td className="border-border border-b px-3 py-2.5">수리 의무·옵션 포함 여부·관리비 등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  작성일
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 체결일</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  서명·날인
                </th>
                <td className="px-3 py-2.5">임대인·임차인 각각</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-form">
        <h2 id="guide-lcwb-form" className="text-foreground text-xl font-semibold tracking-tight">
          표준임대차계약서 양식 다운로드
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              표준임대차계약서 다운로드 안내
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제공처
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  다운로드·이용 경로
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  국토교통부
                </th>
                <td className="border-border border-b px-3 py-2.5">부동산거래관리시스템 (rtms.molit.go.kr)</td>
                <td className="border-border border-b px-3 py-2.5">무료</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  법제처
                </th>
                <td className="px-3 py-2.5">국가법령정보센터 (law.go.kr)</td>
                <td className="px-3 py-2.5">무료</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          국토교통부 표준임대차계약서는 위 경로에서 무료로 내려받을 수 있습니다. 표준 양식을 사용하면 필수 기재사항 누락을
          방지하고 이후 분쟁 발생 시 유리합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-lcwb-steps">
        <h2 id="guide-lcwb-steps" className="text-foreground text-xl font-semibold tracking-tight">
          계약서 작성 단계별 절차
        </h2>
        <ol className="text-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>등기부등본·건축물대장 등 권리 관계 확인</li>
          <li>표준임대차계약서 양식 출력 또는 온라인 작성</li>
          <li>계약 조건 협의 후 계약서 작성</li>
          <li>임대인·임차인 각각 서명·날인</li>
          <li>계약서 각 1부씩 보관</li>
          <li>잔금 지급일에 전입신고·확정일자 취득</li>
          <li>임대차 신고 (30일 이내)</li>
        </ol>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-movein">
        <h2 id="guide-lcwb-movein" className="text-foreground text-xl font-semibold tracking-tight">
          전입신고와 확정일자 취득
        </h2>
        <p>
          잔금 지급 당일 전입신고와 확정일자를 함께 취득해야 대항력과 우선변제권이 확보됩니다. 이사 당일 오전 중으로 처리하는
          것이 안전합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전입신고·확정일자
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전입신고
                </th>
                <td className="border-border border-b px-3 py-2.5">주민센터 방문 또는 정부24 온라인</td>
                <td className="border-border border-b px-3 py-2.5">무료</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  확정일자
                </th>
                <td className="px-3 py-2.5">주민센터 방문 또는 임대차 신고 시 자동 부여</td>
                <td className="px-3 py-2.5">600원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>임대차 신고 완료 시 확정일자가 자동으로 부여되므로 별도로 확정일자를 신청하지 않아도 됩니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-report">
        <h2 id="guide-lcwb-report" className="text-foreground text-xl font-semibold tracking-tight">
          임대차 신고 (전월세 신고제)
        </h2>
        <p>
          보증금 6,000만 원 초과 또는 월세 30만 원 초과하는 임대차 계약은 계약 체결일로부터 30일 이내에 신고해야 합니다.
          임대료 변동이 없는 갱신 계약은 신고 의무가 없습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전월세 신고 요약
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
                  신고 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">보증금 6,000만 원 초과 또는 월세 30만 원 초과</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신고 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 체결일로부터 30일 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신고 방법
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  부동산거래관리시스템 (rtms.molit.go.kr) 온라인 또는 주민센터 방문
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  단독 신고
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  계약서 첨부 시 임대인·임차인 중 한 명만 신고해도 공동 신고로 인정
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  미신고 과태료
                </th>
                <td className="px-3 py-2.5">단순 지연 시 2만 원~30만 원, 거짓 신고 시 최대 100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-protection">
        <h2 id="guide-lcwb-protection" className="text-foreground text-xl font-semibold tracking-tight">
          보증금 보호를 위한 추가 조치
        </h2>
        <p>
          직거래는 중개사의 중개사고 배상책임보험 보호를 받을 수 없습니다. 보증금 보호를 위해 아래 조치를 추가로 취하는 것이
          안전합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              추가 보호 조치
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조치
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세보증보험 가입
                </th>
                <td className="border-border border-b px-3 py-2.5">HUG·HF·SGI 중 조건에 맞는 기관 선택</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세권 설정 등기
                </th>
                <td className="border-border border-b px-3 py-2.5">법무사 통해 진행 (수수료 발생)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  특약사항 명확히 기재
                </th>
                <td className="px-3 py-2.5">수리 책임·퇴거 조건·관리비 포함 여부 등</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-lcwb-effect">
        <h2 id="guide-lcwb-effect" className="text-foreground text-xl font-semibold tracking-tight">
          직접 작성 계약서의 법적 효력
        </h2>
        <p>
          공인중개사가 작성하지 않아도 당사자 간 합의하에 서명·날인된 계약서는 법적으로 동일한 효력을 가집니다. 다만
          공인중개사가 없으면 중개사의 물건 확인·설명 의무가 없으므로 권리 관계 확인은 당사자가 직접 수행해야 합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 표준임대차계약서 양식과 임대차 신고 방법은 국토교통부 부동산거래관리시스템(rtms.molit.go.kr)에서 확인할 것을
          권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개수수료 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 전세 보증금에 따른 중개수수료 절감액은 중개수수료 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
