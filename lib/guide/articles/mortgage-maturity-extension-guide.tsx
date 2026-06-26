import Link from "next/link";

export const mortgageMaturityExtensionGuideMeta = {
  slug: "mortgage-maturity-extension-guide",
  title: "주택담보대출 연장(만기 연장) 방법과 주의사항",
  description:
    "2026년 4월 기준 주담대 만기 연장 절차, 재심사 항목, 다주택자 규제, 예외 조건, 연장·대환 비교와 거절 대응 방법을 표로 정리했습니다.",
  updated: "2026년 4월 20일",
} as const;

export function MortgageMaturityExtensionGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-maturity-overview">
        <h2 id="guide-maturity-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          주택담보대출 만기 연장은 기존 대출 계약의 상환 기간을 늘리는 것입니다. 만기가 도래해도 원금을 일시 상환할 여력이 없는 경우
          연장 신청을 통해 대출을 유지할 수 있습니다. 단, 연장 시 신규 대출에 준하는 심사가 이루어지며 2026년부터 다주택자에 대한 규제가
          대폭 강화됐습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-maturity-steps">
        <h2 id="guide-maturity-steps" className="text-foreground text-xl font-semibold tracking-tight">
          만기 연장 기본 절차
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              만기 연장 신청 단계·시기
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
                  시기
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1단계
                </th>
                <td className="border-border border-b px-3 py-2.5">만기 도래 안내 수신</td>
                <td className="border-border border-b px-3 py-2.5">만기 2~3개월 전</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2단계
                </th>
                <td className="border-border border-b px-3 py-2.5">은행 앱·영업점 연장 신청</td>
                <td className="border-border border-b px-3 py-2.5">만기 1~2개월 전</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3단계
                </th>
                <td className="border-border border-b px-3 py-2.5">소득·신용·담보 재심사</td>
                <td className="border-border border-b px-3 py-2.5">신청 후 수일 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4단계
                </th>
                <td className="border-border border-b px-3 py-2.5">연장 조건 확정</td>
                <td className="border-border border-b px-3 py-2.5">심사 완료 후</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5단계
                </th>
                <td className="px-3 py-2.5">연장 계약 체결</td>
                <td className="px-3 py-2.5">만기일 전</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          만기일 이전에 신청해야 합니다. 만기 연장 조치 없이 대출금을 상환하지 않을 경우 연체이자가 부과되며 압류·경매 등 채무자의
          재산·신용상의 불이익이 발생할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-maturity-review-items">
        <h2 id="guide-maturity-review-items" className="text-foreground text-xl font-semibold tracking-tight">
          연장 심사 시 재검토되는 항목
        </h2>
        <p>만기 연장은 단순한 기간 연장이 아닙니다. 금융기관은 연장 시점의 기준으로 아래 항목을 재심사합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              만기 연장 재심사 항목
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
                  소득
                </th>
                <td className="border-border border-b px-3 py-2.5">현재 소득 기준 DSR 재산정</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신용점수
                </th>
                <td className="border-border border-b px-3 py-2.5">연장 시점 기준 재평가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  담보 가치
                </th>
                <td className="border-border border-b px-3 py-2.5">주택 시세 재감정(일부 기관)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 수
                </th>
                <td className="border-border border-b px-3 py-2.5">보유 주택 수 변동 여부 확인</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">현재 규제 기준 재적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  금리
                </th>
                <td className="px-3 py-2.5">연장 시점 금리로 재산정</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>대출 실행 당시보다 소득이 줄었거나 DSR 규제가 강화된 경우 연장이 거절되거나 한도가 축소될 수 있습니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-maturity-rule-2026">
        <h2 id="guide-maturity-rule-2026" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 다주택자 만기 연장 규제
        </h2>
        <p className="text-muted-foreground text-sm">2026년 4월 17일 시행</p>
        <p>
          2026년 4월 17일부터 수도권·규제지역 내 아파트를 2채 이상 보유한 다주택자(개인 및 임대사업자)의 주택담보대출 만기 연장이
          원칙적으로 전면 금지됐습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-maturity-self-check">
        <h2 id="guide-maturity-self-check" className="text-foreground text-xl font-semibold tracking-tight">
          규제 대상 해당 여부 자가진단
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              3가지 조건 자가점검
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  해당 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택을 2채 이상 보유하고 있다
                </th>
                <td className="border-border border-b px-3 py-2.5">✅</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수도권 또는 규제지역 아파트를 담보로 대출받았다
                </th>
                <td className="border-border border-b px-3 py-2.5">✅</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  해당 대출의 만기가 2026년 4월 17일 이후에 도래한다
                </th>
                <td className="px-3 py-2.5">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>세 가지 모두 해당하면 만기 연장이 원칙적으로 불가합니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-maturity-non-target">
        <h2 id="guide-maturity-non-target" className="text-foreground text-xl font-semibold tracking-tight">
          규제 대상이 아닌 경우
        </h2>
        <p>
          1주택자, 비수도권·비규제지역 아파트 담보 대출자, 아파트가 아닌 오피스텔·빌라 담보 대출자는 이번 규제 대상이 아닙니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-maturity-exceptions">
        <h2 id="guide-maturity-exceptions" className="text-foreground text-xl font-semibold tracking-tight">
          다주택자 만기 연장 예외 조건
        </h2>
        <p>규제 대상 다주택자라도 아래 경우에는 만기 연장이 허용됩니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              다주택자 연장 허용 예외
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  예외 조건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  세입자 거주 중
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  발표일(4월 1일) 기준 유효한 임대차계약이 존재하는 경우 해당 임대차계약 종료일까지 한시적 만기 연장 유예
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  경매·공매 진행 중
                </th>
                <td className="px-3 py-2.5">법적 절차 진행 중인 경우 별도 협의</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-maturity-one-home-notice">
        <h2 id="guide-maturity-one-home-notice" className="text-foreground text-xl font-semibold tracking-tight">
          1주택자 만기 연장 시 주의사항
        </h2>
        <p>1주택자는 이번 규제 대상이 아니지만, 연장 시 아래 사항을 반드시 확인해야 합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1주택자 연장 시 체크포인트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주의사항
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 변동
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  연장 시점의 금리가 적용되어 기존보다 높아질 수 있음
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  DSR 재산정
                </th>
                <td className="border-border border-b px-3 py-2.5">소득 감소 시 한도 축소 또는 거절 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중도상환수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">연장과 동시에 일부 상환 시 수수료 발생 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  갈아타기 비교
                </th>
                <td className="border-border border-b px-3 py-2.5">연장보다 대환대출이 유리한지 사전 비교 필요</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  신청 시기
                </th>
                <td className="px-3 py-2.5">만기일 임박 시 심사 지연으로 연체 발생 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-maturity-vs-refi">
        <h2 id="guide-maturity-vs-refi" className="text-foreground text-xl font-semibold tracking-tight">
          만기 연장 vs 대환대출 비교
        </h2>
        <p>만기 도래 시 연장과 대환대출 중 유리한 것을 선택해야 합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              연장·대환대출 비교표
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  만기 연장
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대환대출
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  절차
                </th>
                <td className="border-border border-b px-3 py-2.5">비교적 간단</td>
                <td className="border-border border-b px-3 py-2.5">신규 심사 필요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리
                </th>
                <td className="border-border border-b px-3 py-2.5">현재 금리 재적용</td>
                <td className="border-border border-b px-3 py-2.5">타 금융기관 비교 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비용
                </th>
                <td className="border-border border-b px-3 py-2.5">중도상환수수료 없음</td>
                <td className="border-border border-b px-3 py-2.5">중도상환수수료·근저당 설정비 발생</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  한도
                </th>
                <td className="border-border border-b px-3 py-2.5">기존 잔액 이내</td>
                <td className="border-border border-b px-3 py-2.5">기존 잔액 이내</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  유리한 경우
                </th>
                <td className="px-3 py-2.5">현재 금리가 낮거나 절차 간소화 필요 시</td>
                <td className="px-3 py-2.5">타 기관 금리가 현저히 낮을 때</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-maturity-reject-response">
        <h2 id="guide-maturity-reject-response" className="text-foreground text-xl font-semibold tracking-tight">
          만기 연장 거절 시 대응 방법
        </h2>
        <p>연장이 거절된 경우 아래 순서로 대응할 수 있습니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거절 시 대응 순서
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1
                </th>
                <td className="border-border border-b px-3 py-2.5">거절 사유 확인(DSR 초과·신용점수 하락·LTV 초과 등)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2
                </th>
                <td className="border-border border-b px-3 py-2.5">기존 소액 부채 정리 후 재신청</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3
                </th>
                <td className="border-border border-b px-3 py-2.5">타 금융기관 대환대출 신청</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  4
                </th>
                <td className="px-3 py-2.5">금리인하요구권 행사 후 재협의</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          만기일까지 해결이 어려운 경우 금융기관에 미리 상황을 알리고 협의하는 것이 중요합니다. 연락을 피하면 기한이익 상실로 이어져
          경매 절차가 시작될 수 있습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 만기 연장 조건과 다주택자 규제 기준은 정부 정책에 따라 변동될 수 있습니다. 정확한 조건은 해당 금융기관 또는
          금융위원회(fsc.go.kr)에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            연장 후 변경되는 월 상환액은 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
