import Link from "next/link";

export const mortgageLoanApplicationDocumentsMeta = {
  slug: "mortgage-loan-application-documents",
  title: "주택담보대출 신청 절차 및 필요 서류",
  description:
    "주담대 신청 절차·필수 서류, 잔금일 역산 준비 일정, 소득 유형별 제출물, 심사 지연·반려 흔한 원인과 대응 방법을 정리했습니다.",
  updated: "2026년 4월 14일",
} as const;

export function MortgageLoanApplicationDocumentsBody() {
  return (
    <>
      <p>
        주택담보대출은 신청부터 대출 실행까지 통상 1~2주가 소요됩니다. 서류 미비로 인한 지연이 가장 흔한 문제이므로 잔금일 최소
        3주 전에 준비를 시작하는 것이 안전합니다. 표는 <strong>무엇을 준비해야 하는지</strong>를 정리한 것이고, 이 글은{" "}
        <strong>언제·어떤 순서로 준비하면 지연을 줄일 수 있는지</strong>에 초점을 맞췄습니다.
      </p>

      <section className="space-y-4" aria-labelledby="guide-mla-timeline">
        <h2 id="guide-mla-timeline" className="text-foreground text-xl font-semibold tracking-tight">
          잔금일 역산 준비 일정(예: 잔금 D-21)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              잔금 3주 전부터 역산한 준비 순서(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  할 일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  D-21~18
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2~3곳 사전 한도 조회, 소득·주택 요건 확인, 은행별 서류 목록 받기
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  D-17~14
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  등본·초본·가족관계·소득 서류·등기부등본 발급(유효기간 확인)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  D-13~10
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 신청·서류 제출, 감정 평가 일정 잡기</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  D-9~5
                </th>
                <td className="border-border border-b px-3 py-2.5">심사·승인, 인감증명·근저당 설정 서류 진행</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  D-4~잔금일
                </th>
                <td className="px-3 py-2.5">실행 확정, 잔금 당일 송금·등기 연계 확인</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          공동명의·세입자 있는 매물·자영업 소득 증빙은 통상 1~2주 더 걸릴 수 있어, D-21은 <strong>최소</strong> 기준으로
          보는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-mla-procedure">
        <h2 id="guide-mla-procedure" className="text-foreground text-xl font-semibold tracking-tight">
          전체 신청 절차
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택담보대출 신청 단계별 안내
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소요 기간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1단계
                </th>
                <td className="border-border border-b px-3 py-2.5">사전 상담 및 대출 한도 조회</td>
                <td className="border-border border-b px-3 py-2.5">1~2일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2단계
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 상품 비교 및 선택</td>
                <td className="border-border border-b px-3 py-2.5">1~3일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3단계
                </th>
                <td className="border-border border-b px-3 py-2.5">서류 준비 및 신청</td>
                <td className="border-border border-b px-3 py-2.5">2~5일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4단계
                </th>
                <td className="border-border border-b px-3 py-2.5">담보 감정 평가</td>
                <td className="border-border border-b px-3 py-2.5">2~3일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5단계
                </th>
                <td className="border-border border-b px-3 py-2.5">심사 및 승인</td>
                <td className="border-border border-b px-3 py-2.5">3~5일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6단계
                </th>
                <td className="border-border border-b px-3 py-2.5">근저당권 설정 등기</td>
                <td className="border-border border-b px-3 py-2.5">1~2일</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7단계
                </th>
                <td className="px-3 py-2.5">대출 실행(잔금일)</td>
                <td className="px-3 py-2.5">당일</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-mla-docs-common">
        <h2 id="guide-mla-docs-common" className="text-foreground text-xl font-semibold tracking-tight">
          필요 서류: 공통
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공통 제출 서류
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  서류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  발급처
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신분증
                </th>
                <td className="border-border border-b px-3 py-2.5">본인 지참</td>
                <td className="border-border border-b px-3 py-2.5">주민등록증·운전면허증</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주민등록등본
                </th>
                <td className="border-border border-b px-3 py-2.5">정부24·주민센터</td>
                <td className="border-border border-b px-3 py-2.5">세대원 전원 포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주민등록초본
                </th>
                <td className="border-border border-b px-3 py-2.5">정부24·주민센터</td>
                <td className="border-border border-b px-3 py-2.5">주소 변동 이력 포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  가족관계증명서
                </th>
                <td className="border-border border-b px-3 py-2.5">정부24</td>
                <td className="border-border border-b px-3 py-2.5">주택 수 확인용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  인감증명서(대출용)
                </th>
                <td className="px-3 py-2.5">주민센터</td>
                <td className="px-3 py-2.5">발급 후 3개월 이내</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-mla-docs-income">
        <h2 id="guide-mla-docs-income" className="text-foreground text-xl font-semibold tracking-tight">
          필요 서류: 소득 증빙(소득 유형별)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소득 유형별 제출 서류
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소득 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  필요 서류
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  근로소득자
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  원천징수영수증, 재직증명서, 건강보험료 납부확인서
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자영업자
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  사업자등록증명원, 종합소득세 신고서, 소득금액증명원
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  프리랜서
                </th>
                <td className="border-border border-b px-3 py-2.5">소득금액증명원, 용역계약서 또는 거래명세서</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  연금소득자
                </th>
                <td className="px-3 py-2.5">연금수령 확인서 또는 연금지급 내역서</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-mla-docs-collateral">
        <h2 id="guide-mla-docs-collateral" className="text-foreground text-xl font-semibold tracking-tight">
          필요 서류: 담보 주택 관련
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              담보 주택 관련 서류
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  서류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  발급처
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부동산 등기부등본
                </th>
                <td className="border-border border-b px-3 py-2.5">대법원 인터넷등기소</td>
                <td className="border-border border-b px-3 py-2.5">발급 후 1개월 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매계약서 사본
                </th>
                <td className="border-border border-b px-3 py-2.5">본인 보관</td>
                <td className="border-border border-b px-3 py-2.5">주택 구입 목적 시</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  건축물대장
                </th>
                <td className="border-border border-b px-3 py-2.5">정부24</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전입세대 열람내역
                </th>
                <td className="border-border border-b px-3 py-2.5">주민센터</td>
                <td className="border-border border-b px-3 py-2.5">세입자 유무 확인용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  임대차계약서 사본
                </th>
                <td className="px-3 py-2.5">본인 보관</td>
                <td className="px-3 py-2.5">세입자 있는 경우</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-mla-channel">
        <h2 id="guide-mla-channel" className="text-foreground text-xl font-semibold tracking-tight">
          신청 방법: 비대면 vs 대면
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신청 채널별 방법과 특징
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  특징
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비대면
                </th>
                <td className="border-border border-b px-3 py-2.5">은행 앱·인터넷뱅킹</td>
                <td className="border-border border-b px-3 py-2.5">서류 스캔 업로드, 빠른 처리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대면
                </th>
                <td className="border-border border-b px-3 py-2.5">영업점 방문</td>
                <td className="border-border border-b px-3 py-2.5">복잡한 상황 상담 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  정책 모기지
                </th>
                <td className="px-3 py-2.5">
                  기금 e든든(
                  <a
                    href="https://enhuf.molit.go.kr"
                    className="text-primary underline-offset-4 hover:underline"
                    rel="noopener noreferrer"
                  >
                    enhuf.molit.go.kr
                  </a>
                  ) 또는 수탁은행
                </td>
                <td className="px-3 py-2.5">디딤돌·보금자리론 신청</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-mla-checklist">
        <h2 id="guide-mla-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          신청 전 반드시 확인해야 할 사항
        </h2>
        <p>
          담보 주택이 규제지역에 해당하는지 여부를 먼저 확인해야 합니다. 규제지역 여부에 따라{" "}
          <abbr title="담보인정비율">LTV</abbr> 한도가 달라져 실제 대출 가능 금액이 크게 달라집니다.
        </p>
        <p>
          잔금일이 정해진 상태에서 서류 지연이 발생하면 계약 위약금 문제로 이어질 수 있으므로, 잔금일 기준 최소 3주 전에 서류 준비를
          시작하는 것이 안전합니다.
        </p>
        <p>
          공동명의로 대출을 신청하는 경우 명의자 전원의 서류가 필요합니다. 준비 기간을 더 넉넉히 잡아야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-mla-doc-caution">
        <h2 id="guide-mla-doc-caution" className="text-foreground text-xl font-semibold tracking-tight">
          서류 발급 시 주의 사항
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              서류별 유의점
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주의사항
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기부등본
                </th>
                <td className="border-border border-b px-3 py-2.5">발급 후 1개월 이내 유효</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  인감증명서
                </th>
                <td className="border-border border-b px-3 py-2.5">반드시 「대출용」으로 발급</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소득 서류
                </th>
                <td className="border-border border-b px-3 py-2.5">전년도·전전년도 모두 요구하는 경우 있음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  온라인 발급 서류
                </th>
                <td className="px-3 py-2.5">PDF 저장 후 제출 가능 여부 사전 확인</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 금융기관별로 추가 서류를 요구할 수 있으므로 신청 전 해당 은행에 서류 목록을 확인하는 것이 필수입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-mla-delay-reasons">
        <h2 id="guide-mla-delay-reasons" className="text-foreground text-xl font-semibold tracking-tight">
          심사 지연·보완 요청이 잦은 이유
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>소득 서류 기간 불일치</strong> — 전년도만 제출했는데 전전년도도 요구하는 경우. 근로자는 원천징수·재직증명
            발급일도 확인.
          </li>
          <li>
            <strong>등기부등본·인감증명 유효기간 경과</strong> — 등본 1개월, 인감 3개월 등 은행별 기준이 다릅니다.
          </li>
          <li>
            <strong>담보 특이사항 미공개</strong> — 전입세대·임대차·가압류 등은 감정·법무 검토에서 추가 서류를 요구합니다.
          </li>
          <li>
            <strong>DSR·LTV 재산정</strong> — 타행 대출·카드론이 신용조회에 잡히면 한도가 줄어 실행일 전 재심사가 필요할 수
            있습니다.
          </li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="guide-mla-self-employed">
        <h2 id="guide-mla-self-employed" className="text-foreground text-xl font-semibold tracking-tight">
          자영업·프리랜서는 더 여유 있게
        </h2>
        <p>
          사업소득·프리랜서는 소득금액증명·신고서 등 발급·확정 시점에 따라 2~4주 더 걸리는 경우가 많습니다. 잔금일이
          정해져 있다면 <strong>매매계약 전</strong>에 소득 인정 가능 여부를 1곳 이상 사전 상담하는 것이 안전합니다.{" "}
          <Link href="/guide/income-type-loan-limit-difference-guide" className="text-primary underline-offset-4 hover:underline">
            소득 유형별 대출 한도
          </Link>
          도 함께 참고하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            대출 조건에 따른 월 상환액은 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
