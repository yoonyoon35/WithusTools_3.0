import type { ReactNode } from "react";
import Link from "next/link";

export const leaseContractWithoutBrokerGuideMeta = {
  slug: "lease-contract-without-broker-guide",
  title: "공인중개사 없이 계약서 작성하는 방법",
  description:
    "중개사 없이도 표준임대차계약서로 직접 계약할 수 있지만 전입신고·확정일자·전월세 신고와 보증금 보호 조치는 직접 챙겨야 합니다. 단계별 절차, 계약 전 확인 서류, 필수 기재사항, 상가 권리금과 복비의 구분을 다룹니다.",
  updated: "2026년 11월 15일",
} as const;

function FactTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: readonly string[];
  rows: readonly { label: string; cells: readonly ReactNode[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
          {caption}
        </caption>
        <thead>
          <tr className="bg-muted/40">
            {columns.map((column) => (
              <th key={column} scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const isLast = rowIndex === rows.length - 1;
            return (
              <tr key={`${row.label}-${rowIndex}`} className={isLast ? "bg-muted/20" : undefined}>
                <th
                  scope="row"
                  className={`px-3 py-2.5 font-medium ${isLast ? "" : "border-border border-b"}`}
                >
                  {row.label}
                </th>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={columns[cellIndex + 1]}
                    className={`px-3 py-2.5 ${isLast ? "" : "border-border border-b"}`}
                  >
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

export function LeaseContractWithoutBrokerGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-lcwb-intro">
        <p>
          공인중개사 없이 임대인과 임차인이 직접 계약서를 작성하는 것은 법적으로 가능합니다. 다만 권리 관계 확인·계약서 필수
          기재사항·사후 신고 절차를 당사자가 직접 수행해야 합니다.
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

      <section className="space-y-4" aria-labelledby="guide-lcwb-pre">
        <h2 id="guide-lcwb-pre" className="text-foreground text-xl font-semibold tracking-tight">
          계약 전 필수 확인 사항
        </h2>
        <p>
          계약서 작성 전 아래 서류를 반드시 확인해야 합니다. 계약 후 문제가 발견되면 보증금 보호가 어려워질 수 있습니다.
        </p>
        <FactTable
          caption="계약 전 확인 서류"
          columns={["확인 서류", "확인 방법", "비용"]}
          rows={[
            { label: "등기부등본", cells: ["대법원 인터넷등기소 (iros.go.kr)", "700원"] },
            { label: "건축물대장", cells: ["정부24 (gov.kr)", "무료"] },
            { label: "전입세대 열람내역", cells: ["주민센터 방문 (임대인 동의 필요)", "무료"] },
            { label: "국세·지방세 체납 여부", cells: ["임대인에게 납세증명서 요청", "무료"] },
            { label: "실제 소유자 확인", cells: ["등기부등본 소유자와 신분증 대조", "무료"] },
          ]}
        />
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
        <FactTable
          caption="필수 기재 항목"
          columns={["항목", "내용"]}
          rows={[
            { label: "임대인·임차인 인적사항", cells: ["성명·주민등록번호·주소·연락처"] },
            { label: "임대 목적물 정보", cells: ["주소·면적·층·호수"] },
            { label: "보증금", cells: ["총액·계약금·중도금·잔금 및 각 지급일"] },
            { label: "임대 기간", cells: ["시작일·종료일"] },
            { label: "월 차임 (월세의 경우)", cells: ["금액·지급일·지급 방법"] },
            { label: "특약사항", cells: ["수리 의무·옵션 포함 여부·관리비 등"] },
            { label: "작성일", cells: ["계약 체결일"] },
            { label: "서명·날인", cells: ["임대인·임차인 각각"] },
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-form">
        <h2 id="guide-lcwb-form" className="text-foreground text-xl font-semibold tracking-tight">
          표준임대차계약서 양식 다운로드
        </h2>
        <FactTable
          caption="표준임대차계약서 다운로드 안내"
          columns={["제공처", "다운로드·이용 경로", "비용"]}
          rows={[
            {
              label: "법무부(주택)",
              cells: [
                <a
                  key="housing-form"
                  href="https://www.moj.go.kr/bbs/moj/118/575868/artclView.do"
                  className="text-primary underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  주택임대차 표준계약서 (2023. 10. 6. 개정)
                </a>,
                "무료",
              ],
            },
            {
              label: "법무부(상가)",
              cells: [
                <a
                  key="commercial-form"
                  href="https://www.moj.go.kr/bbs/moj/119/606470/artclView.do"
                  className="text-primary underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  상가건물 임대차 표준계약서 (2026. 5. 12. 개정)
                </a>,
                "무료",
              ],
            },
          ]}
        />
        <p>
          주택은 법무부 주택임대차 표준계약서, 상가는 상가건물 임대차 표준계약서를 위 페이지에서 무료로 내려받을 수
          있습니다. 표준 양식을 사용하면 필수 기재사항 누락을 방지하고 이후 분쟁 발생 시 유리합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-movein">
        <h2 id="guide-lcwb-movein" className="text-foreground text-xl font-semibold tracking-tight">
          전입신고와 확정일자 취득
        </h2>
        <p>
          잔금 지급 당일 전입신고와 확정일자를 함께 취득해야 대항력과 우선변제권이 확보됩니다. 이사 당일 오전 중으로 처리하는
          것이 안전합니다.
        </p>
        <FactTable
          caption="전입신고·확정일자"
          columns={["항목", "방법", "비용"]}
          rows={[
            { label: "전입신고", cells: ["주민센터 방문 또는 정부24 온라인", "무료"] },
            { label: "확정일자", cells: ["주민센터 방문 또는 임대차 신고 시 자동 부여", "600원"] },
          ]}
        />
        <p>임대차 신고 완료 시 확정일자가 자동으로 부여되므로 별도로 확정일자를 신청하지 않아도 됩니다.</p>
        <p className="text-muted-foreground text-sm">
          ※ 임차인이 계약 만료 전 사망한 경우, 확정일자·계약서·보증금 입금 내역은 상속인의 권리 확인에 중요합니다.{" "}
          <Link
            href="/guide/tenant-death-lease-inheritance-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            임차인 사망 시 전월세·상속
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-report">
        <h2 id="guide-lcwb-report" className="text-foreground text-xl font-semibold tracking-tight">
          임대차 신고 (전월세 신고제)
        </h2>
        <p>
          보증금 6,000만 원 초과 또는 월세 30만 원 초과하는 임대차 계약은 계약 체결일로부터 30일 이내에 신고해야 합니다.
          임대료 변동이 없는 갱신 계약은 신고 의무가 없습니다.{" "}
          <Link
            href="/guide/lease-renewal-report-confirmed-date-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            재계약·단기 연장·월세 인상
          </Link>
          시 신고·확정일자는 별도 가이드를 참고하세요.
        </p>
        <FactTable
          caption="전월세 신고 요약"
          columns={["항목", "내용"]}
          rows={[
            { label: "신고 대상", cells: ["보증금 6,000만 원 초과 또는 월세 30만 원 초과"] },
            { label: "신고 기한", cells: ["계약 체결일로부터 30일 이내"] },
            { label: "신고 방법", cells: ["부동산거래관리시스템 (rtms.molit.go.kr) 온라인 또는 주민센터 방문"] },
            { label: "단독 신고", cells: ["계약서 첨부 시 임대인·임차인 중 한 명만 신고해도 공동 신고로 인정"] },
            { label: "미신고 과태료", cells: ["단순 지연 시 2만 원~30만 원, 거짓 신고 시 최대 100만 원"] },
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-protection">
        <h2 id="guide-lcwb-protection" className="text-foreground text-xl font-semibold tracking-tight">
          보증금 보호를 위한 추가 조치
        </h2>
        <p>
          직거래는 중개사의 중개사고 배상책임보험 보호를 받을 수 없습니다. 보증금 보호를 위해 아래 조치를 추가로 취하는 것이
          안전합니다.
        </p>
        <FactTable
          caption="추가 보호 조치"
          columns={["조치", "내용"]}
          rows={[
            { label: "전세보증보험 가입", cells: ["HUG·HF·SGI 중 조건에 맞는 기관 선택"] },
            { label: "전세권 설정 등기", cells: ["법무사 통해 진행 (수수료 발생)"] },
            { label: "특약사항 명확히 기재", cells: ["수리 책임·퇴거 조건·관리비 포함 여부 등"] },
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-lcwb-key-money-brokerage">
        <h2 id="guide-lcwb-key-money-brokerage" className="text-foreground text-xl font-semibold tracking-tight">
          상가 권리금과 중개수수료(복비) 구분
        </h2>
        <p>
          상가·점포를 <strong>양도·승계</strong>할 때 <strong>권리금</strong>과 <strong>중개수수료</strong>는{" "}
          <strong>별도</strong>입니다. 권리금은 통상 <strong>기존 임차인 ↔ 신규 임차인</strong> 간 협의하고, 복비는{" "}
          <strong>공인중개사 중개</strong>에 대한 대가입니다.
        </p>
        <FactTable
          caption="권리금 vs 복비"
          columns={["구분", "성격", "누가·무엇을"]}
          rows={[
            {
              label: "권리금",
              cells: ["임차인 간 점포·영업 가치 대가", "금액·지급은 당사자 협의. 임대인 승낙·재계약 별도 확인"],
            },
            {
              label: "중개수수료",
              cells: [
                "중개사 법정 상한 이내 보수",
                <>
                  임대차 원칙 <strong>임대인 + 임차인(신규)</strong> 각각.{" "}
                  <Link
                    href="/guide/brokerage-fee-rates-2026-guide#guide-bfr-commercial"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    상가 요율
                  </Link>
                </>,
              ],
            },
            {
              label: "묵시적 갱신 중 교체",
              cells: [
                "새 임대차 중개 시 복비 발생 가능",
                <>
                  <Link
                    href="/guide/jeonse-renewal-brokerage-fee-guide#guide-jrbf-commercial-key-money"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    기존 임차인 복비 면제
                  </Link>{" "}
                  등 참고
                </>,
              ],
            },
          ]}
        />
        <p className="text-muted-foreground text-sm">
          ※ 중개 의뢰 계약에 「기존 임차인 + 신규 임차인」만 부담한다고 적혀 있어도, 위 원칙과 다르면{" "}
          <strong>중개 계약·관할 지회</strong> 확인을 권장합니다.
        </p>
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
          ※ 표준임대차계약서 양식은 법무부 자료실에서, 임대차 신고는{" "}
          <a
            href="https://rtms.molit.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            국토교통부 부동산거래관리시스템(rtms.molit.go.kr)
          </a>
          에서 확인할 것을 권장합니다.
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
