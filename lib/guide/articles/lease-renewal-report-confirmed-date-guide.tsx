import Link from "next/link";

export const leaseRenewalReportConfirmedDateGuideMeta = {
  slug: "lease-renewal-report-confirmed-date-guide",
  title: "임대차 재계약·연장 시 전월세 신고·확정일자",
  description:
    "묵시적 갱신·계약갱신청구권·합의 재계약·단기 연장별 전월세 신고 의무와 확정일자 처리, 보증금·월세·임대인 변경 시 재신고 기준, rtms 신고 체크리스트를 표로 정리했습니다.",
  updated: "2026년 9월 17일",
} as const;

export function LeaseRenewalReportConfirmedDateGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-lrrcd-intro">
        <p>
          임대차 계약이 <strong>만료·갱신·연장</strong>될 때 전월세 신고(부동산거래관리시스템)와{" "}
          <strong>확정일자</strong>를 다시 해야 하는지는 <strong>재계약 방식</strong>과{" "}
          <strong>변경된 조건</strong>에 따라 달라집니다. 최초 입주 때와 달리, 갱신에서는 「임대료·보증금·기간·임대인」
          중 무엇이 바뀌었는지가 기준이 됩니다.
        </p>
        <p>
          이 글은 전·월세 공통으로 <strong>재계약 유형별 신고·확정일자</strong>를 정리합니다. 중개수수료·재계약 방식
          비교는{" "}
          <Link
            href="/guide/jeonse-renewal-brokerage-fee-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            전세 재계약 시 중개수수료
          </Link>
          , 최초 계약 시 신고 절차는{" "}
          <Link
            href="/guide/lease-contract-without-broker-guide#guide-lcwb-report"
            className="text-primary underline-offset-4 hover:underline"
          >
            공인중개사 없이 계약서 작성하기
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lrrcd-principle">
        <h2 id="guide-lrrcd-principle" className="text-foreground text-xl font-semibold tracking-tight">
          신고·확정일자 판단 기준
        </h2>
        <p>
          가이드상 핵심 문구는 「<strong>임대료 변동이 없는 갱신 계약은 신고 의무가 없다</strong>」입니다. 따라서
          재계약·연장 시 아래 순서로 판단합니다.
        </p>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>신고 대상 계약인지</strong> — 보증금 6,000만 원 초과 또는 월세 30만 원 초과
          </li>
          <li>
            <strong>재계약 유형</strong> — 묵시적 갱신·계약갱신청구권·합의 재계약·단기 연장 중 어디에 해당하는지
          </li>
          <li>
            <strong>변경 항목</strong> — 보증금·월세·계약 기간·임대인 중 실제로 바뀐 조건
          </li>
        </ol>
        <p>
          계약서에 「기존 계약의 연장」이라는 특약이 있어도, <strong>조건·기간·당사자</strong>가 바뀌면 행정상 처리는
          최초 계약과 다르게 봅니다. <strong>계약서를 새로 작성했는지</strong>보다 <strong>조건이 바뀌었는지</strong>가
          기준입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              변경 항목별 신고·확정일자 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  변경 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  전월세 재신고
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확정일자
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  변경 없음
                </th>
                <td className="border-border border-b px-3 py-2.5">불필요</td>
                <td className="border-border border-b px-3 py-2.5">기존 유효</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  월세·기간만 변경
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  신고 대상이면 <strong>변경 조건으로 재신고</strong> (30일 이내)
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  보증금 동일 시 기존 확정일자 유효 가능. 재신고 시 새 계약일 부여 —{" "}
                  <strong>기존 취소·재발급 주의</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증금 변경
                </th>
                <td className="border-border border-b px-3 py-2.5">신고 대상이면 재신고 (30일 이내)</td>
                <td className="border-border border-b px-3 py-2.5">
                  증액분에 대해서만 새로 취득. 기존 확정일자 취소 시 후순위 위험
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  임대인 변경
                </th>
                <td className="px-3 py-2.5">
                  조건 변경과 함께 재신고 시 <strong>현 임대인 정보</strong>로 등록
                </td>
                <td className="px-3 py-2.5">보증금·조건 변경 여부에 따라 위와 동일</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lrrcd-report-target">
        <h2 id="guide-lrrcd-report-target" className="text-foreground text-xl font-semibold tracking-tight">
          전월세 신고 — 대상·기한·방법
        </h2>
        <p>
          아래 기준에 해당하지 않으면 전월세 신고 의무 자체가 없을 수 있습니다. 신고 대상이라도 재계약 방식과 조건
          변경 여부에 따라 <strong>재신고가 필요한지</strong>가 달라집니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신고 대상·기한
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
                  부동산거래관리시스템(rtms.molit.go.kr) 온라인 또는 주민센터
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
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  갱신 시 면제
                </th>
                <td className="border-border border-b px-3 py-2.5">임대료 변동이 없는 갱신 계약</td>
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
        <p className="text-muted-foreground text-sm">
          임대차 신고를 완료하면 <strong>확정일자가 자동 부여</strong>됩니다. 주민센터에서 확정일자만 별도로 받을
          필요는 없습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lrrcd-by-type">
        <h2 id="guide-lrrcd-by-type" className="text-foreground text-xl font-semibold tracking-tight">
          재계약 유형별 — 신고·확정일자·계약서
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              유형별 처리 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  재계약 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  전월세 재신고
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확정일자
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  계약서
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  묵시적 갱신
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>불필요</strong> — 동일 조건 자동 연장
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>기존 유효</strong>
                </td>
                <td className="border-border border-b px-3 py-2.5">재작성 불필요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약갱신청구권
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  조건 <strong>변동 없으면</strong> 불필요. 보증금·월세 <strong>변경 시</strong> 재신고
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  보증금 <strong>증액분만</strong> 새로 취득
                </td>
                <td className="border-border border-b px-3 py-2.5">원칙 불필요 (증액 시 확정일자만)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  합의 재계약
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  신고 대상이고 조건 변경 시 <strong>재신고</strong> (30일 이내)
                </td>
                <td className="border-border border-b px-3 py-2.5">변경 항목에 따라 아래 「조건별」 참고</td>
                <td className="border-border border-b px-3 py-2.5">조건 변경 시 필요</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  단기 연장
                </th>
                <td className="px-3 py-2.5">
                  <strong>조건 변경 없으면</strong> 묵시적 갱신과 유사. <strong>월세·보증금·임대인 변경</strong> 시
                  합의 재계약과 동일
                </td>
                <td className="px-3 py-2.5">조건 변경 여부에 따라 위와 동일</td>
                <td className="px-3 py-2.5">당사자 합의 시 작성 가능 (행정 처리는 조건 변경 기준)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lrrcd-by-condition">
        <h2 id="guide-lrrcd-by-condition" className="text-foreground text-xl font-semibold tracking-tight">
          조건별 상세 — 월세·보증금·기간
        </h2>

        <h3 id="guide-lrrcd-rent-only" className="text-foreground text-base font-semibold">
          월세·기간만 변경 (보증금 동일)
        </h3>
        <p>
          보증금은 그대로이고 <strong>월세·계약 기간만</strong> 바뀌는 재계약에서 자주 확인하는 항목입니다.
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>전월세 신고:</strong> 신고 대상 계약이면 「임대료 변동 없는 갱신」에 해당하지 않으므로{" "}
            <strong>변경된 월세·기간으로 재신고</strong>합니다.
          </li>
          <li>
            <strong>확정일자:</strong> 우선변제권은 <strong>보증금·확정일자 시점</strong>이 핵심입니다. 보증금이
            같다면 <strong>최초 취득한 확정일자</strong>가 보증금 보호에 계속 유효할 수 있습니다. 재신고 시 새
            계약일에 확정일자가 부여되며, <strong>기존 확정일자를 취소·재발급하지 않도록</strong> 주의하세요.
          </li>
        </ul>

        <h3 id="guide-lrrcd-deposit" className="text-foreground text-base font-semibold">
          보증금 증액·감액
        </h3>
        <p>
          보증금이 바뀌면 신고·확정일자 모두 주의가 필요합니다. 증액분에만 새 확정일자를 받고, 기존 확정일자를 취소하면
          기존 보증금이 후순위로 밀릴 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보증금 변경 시
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  처리
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전월세 신고
                </th>
                <td className="border-border border-b px-3 py-2.5">계약일로부터 30일 이내 재신고</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  확정일자
                </th>
                <td className="border-border border-b px-3 py-2.5">증액분에 대해서만 새로 취득</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  전세보증보험
                </th>
                <td className="px-3 py-2.5">보증금 변경 시 가입 조건·한도 재확인</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lrrcd-landlord">
        <h2 id="guide-lrrcd-landlord" className="text-foreground text-xl font-semibold tracking-tight">
          임대인(집주인) 변경이 있는 경우
        </h2>
        <p>
          매매·상속 등으로 <strong>소유자가 바뀌었어도</strong> 기존 임대차계약은 원칙적으로 존속합니다. 재계약·연장
          과정에서 아래를 함께 확인합니다.
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>등기부등본</strong>으로 현 소유자와 계약서상 임대인이 일치하는지 확인
          </li>
          <li>
            현 임대인에게 <strong>기존 계약서·확정일자·전입신고</strong> 사본 제시
          </li>
          <li>
            월세 납부 계좌·연락처를 <strong>현재 임대인</strong> 기준으로 정리
          </li>
          <li>
            신고 대상이고 조건이 변경되면 재신고 시 <strong>현 임대인 정보</strong>로 등록
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          임대인 사망·상속·매매 등 세부는{" "}
          <Link
            href="/guide/tenant-death-lease-inheritance-guide#guide-tdli-landlord-tenant"
            className="text-primary underline-offset-4 hover:underline"
          >
            임차인·임대인 사망 시 전월세
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-lrrcd-checklist">
        <h2 id="guide-lrrcd-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          재계약·연장 시 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              체크리스트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  보증금 6,000만 원·월세 30만 원 기준 — <strong>신고 대상 여부</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  묵시적 갱신·갱신청구권·합의 재계약·단기 연장 중 <strong>어느 유형</strong>인지
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  보증금·월세·기간·임대인 중 <strong>변경된 조건</strong> 정리
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  조건 변경 + 신고 대상이면 <strong>30일 이내</strong> rtms.molit.go.kr 또는 주민센터 신고
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  보증금 증액 시 <strong>증액분 확정일자</strong> — 기존 확정일자 취소 금지
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  6
                </th>
                <td className="px-3 py-2.5">등기부등본·체납·근저당 변동 여부 재확인</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p className="font-medium text-foreground">관련 가이드</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link
              href="/guide/lease-contract-without-broker-guide#guide-lcwb-report"
              className="text-primary underline-offset-4 hover:underline"
            >
              전월세 신고·확정일자 (최초 계약)
            </Link>
          </li>
          <li>
            <Link
              href="/guide/jeonse-renewal-brokerage-fee-guide#guide-jrbf-checklist"
              className="text-primary underline-offset-4 hover:underline"
            >
              전세 재계약 — 중개수수료·신고 체크리스트
            </Link>
          </li>
          <li>
            <Link
              href="/guide/wolse-brokerage-fee-calculation-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              월세 중개수수료 계산
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
