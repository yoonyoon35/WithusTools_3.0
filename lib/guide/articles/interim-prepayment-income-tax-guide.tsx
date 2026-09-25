import Link from "next/link";

export const interimPrepaymentIncomeTaxGuideMeta = {
  slug: "interim-prepayment-income-tax-guide",
  title: "종합소득세 중간예납 | 기준액의 1/2, 분납, 추계액 신고",
  description:
    "납부 제외, 중간예납기준액과 1/2 계산, 2026년 11월 30일 납부, 1천만 원 초과 분납, 상반기 추계액 식과 기본세율표를 계산에 쓸 수 있게 정리했습니다.",
  updated: "2026년 9월 23일",
} as const;

export function InterimPrepaymentIncomeTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-gipt-intro">
        <h2 id="guide-gipt-intro" className="text-foreground text-xl font-semibold tracking-tight">
          상반기 소득세를 11월에 냄
        </h2>
        <p>
          소득세 중간예납은 내년 5월에 낼 소득세를 미리 내는 것이 아니라, 올해 상반기(1월 1일~6월
          30일)의 소득세를 11월에 내는 것입니다. 고지제로 운영하고, 상반기 실적이
          부진하면 추계액 신고를 할 수 있습니다. 확정신고에서 이 금액은 기납부세액으로 빠지며, 그
          순서는{" "}
          <Link
            href="/guide/comprehensive-income-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합소득세 계산 구조
          </Link>
          에 있습니다. 중간예납은 직전 과세기간 종합소득세액의 1/2이고, 2024년 납부세액 100만 원
          이상자 등 일부만 해당합니다. 아래가 계산식입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gipt-who">
        <h2 id="guide-gipt-who" className="text-foreground text-xl font-semibold tracking-tight">
          내는 사람과 빼는 사람
        </h2>
        <p>원칙적으로 종합소득이 있는 거주자는 중간예납 대상입니다. 아래에서 빠집니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              중간예납 납부 대상에서 제외
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">구분</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">제외 사유</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">신규사업자</th>
                <td className="border-border border-b px-3 py-2.5">
                  2025년 12월 31일 현재 사업자가 아닌 사람으로서 2026년 중 새로 사업을 시작한 사람
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">휴·폐업자</th>
                <td className="border-border border-b px-3 py-2.5">
                  2026년 6월 30일 이전 휴·폐업자. 2026년 6월 30일 이후 폐업자 중 수시 자납 또는 수시
                  부과한 경우
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">
                  다음 소득만 있는 사람
                </th>
                <td className="border-border border-b px-3 py-2.5 leading-relaxed">
                  이자·배당·근로·연금·기타소득만 있는 사람. 사업소득 중 속기·타자 등 사무지원 서비스업
                  소득. 수시 부과 사업소득. 저술가·화가·배우·가수·영화감독·연출가·촬영사 등 자영예술가.
                  직업선수·코치·심판 등 기타 스포츠서비스업. 독립된 자격의 보험 모집, 증권 매매 권유 등
                  실적에 따른 모집수당·권장수당·집금수당. (후원)방문판매 판매수당 등(2025년 귀속분 사업소득
                  연말정산을 한 경우에 한함). 분리과세 주택임대소득 또는 전환정비사업조합 조합원이 하는
                  공동사업 소득
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">납세조합</th>
                <td className="border-border border-b px-3 py-2.5">
                  납세조합이 중간예납 기간(1월 1일~6월 30일) 중 해당 조합원의 소득세를 매월 원천징수해
                  납부한 경우
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">부동산 매매업자</th>
                <td className="border-border border-b px-3 py-2.5">
                  중간예납 기간(1월 1일~6월 30일) 중 매도한 토지 또는 건물에 대해 토지 등 매매차익
                  예정신고·납부세액이 중간예납기준액의 50%를 초과하는 경우
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 align-top font-medium">소액부징수</th>
                <td className="px-3 py-2.5">중간예납세액이 50만 원 미만인 경우</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gipt-formula">
        <h2 id="guide-gipt-formula" className="text-foreground text-xl font-semibold tracking-tight">
          고지세액
        </h2>
        <p>관할 세무서가 납부고지서를 보냅니다. 고지는 11월 초, 납부 기한은 2026년 11월 30일(월)입니다.</p>
        <p>
          <strong>
            중간예납세액 = 중간예납기준액 × 1/2 − (중간예납 기간 중의 토지 등 매매차익 예정신고 납부세액)
          </strong>
        </p>
        <p>
          <strong>
            중간예납기준액 = (전년도 중간예납세액 + 확정신고 자진납부세액 + 추가납부세액 + 기한 후·수정신고
            추가 자진납부세액) − 환급세액
          </strong>
        </p>
        <p>추가납부세액은 소득세법 제85조에 따라 결정한 추가납부세액(가산세 포함)입니다. 번호별 내용은 다음과 같습니다.</p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>2024년 11월의 종합소득세 중간예납세액</li>
          <li>2025년 5월~6월의 종합소득세 확정신고 자진납부세액</li>
          <li>소득세법 제85조에 따른 추가납부세액(가산세액 포함)</li>
          <li>국세기본법에 의한 기한 후 신고 납부세액(가산세액 포함)과 추가 자진납부세액(가산세액 포함)</li>
          <li>
            소득세법 제85조에 따른 환급세액. 국세기본법 제45조의2 경정청구에 따른 결정이 있으면 그
            내용이 반영된 금액을 포함
          </li>
        </ol>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gipt-split">
        <h2 id="guide-gipt-split" className="text-foreground text-xl font-semibold tracking-tight">
          분납
        </h2>
        <p>중간예납세액이 1천만 원을 초과하면 분납할 수 있습니다. 분납분 납부 방법도 같습니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>납부할 세액이 2천만 원 이하이면, 1천만 원을 초과한 금액을 분납할 수 있습니다.</li>
          <li>납부할 세액이 2천만 원을 초과하면, 세액의 50% 이하 금액을 분납할 수 있습니다.</li>
          <li>1천만 원 이하는 분납 대상이 아니고, 2026년 11월 30일까지 전액을 냅니다.</li>
          <li>분납 고지분에 대한 고지는 2027년 1월 초 납부고지서 발송, 분납세액 납부 기한은 2027년 2월 1일(월)입니다.</li>
        </ul>
        <p>
          분납 사례에서 11월 30일까지 낼 세액은 다음과 같습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              분납 사례 (열 제목은 2026.11.30.까지 납부할 세액)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">중간예납세액</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">분납 가능액</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">11월 30일까지</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">12,500,000원</td>
                <td className="border-border border-b px-3 py-2.5">2,500,000원</td>
                <td className="border-border border-b px-3 py-2.5">10,000,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">18,000,000원</td>
                <td className="border-border border-b px-3 py-2.5">8,000,000원</td>
                <td className="border-border border-b px-3 py-2.5">10,000,000원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">30,000,010원</td>
                <td className="border-border border-b px-3 py-2.5">15,000,000원</td>
                <td className="border-border border-b px-3 py-2.5">15,000,010원</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">99,999,990원</td>
                <td className="px-3 py-2.5">49,999,990원</td>
                <td className="px-3 py-2.5">50,000,000원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>납부 경로는 다음과 같습니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            홈택스: 로그인(공인인증서 필수) → 납부·고지·환급 → 세금납부 → 납부할 세액 조회/납부 →
            과세구분이 고지분인 건 → 납부하기 → 계좌이체·신용카드·간편결제. 이용시간 07:00~23:30.
            분납할 세액을 빼고 기한 내 납부할 세액만 납부세액에 넣어 낼 수 있습니다.
          </li>
          <li>손택스도 같은 순서이며, 메뉴 이름은 납부할 세액 조회납부입니다.</li>
          <li>
            납부고지서의 가상계좌 또는 국세계좌로 이체하거나 금융기관에 직접 냅니다. 분납액을 뺀 금액만
            이체하거나, 자진납부서에 낼 세액을 적어 낼 수 있습니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gipt-estimate">
        <h2 id="guide-gipt-estimate" className="text-foreground text-xl font-semibold tracking-tight">
          추계액 신고
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            2026년 상반기(1월 1일~6월 30일) 종합소득금액에 대한 소득세(중간예납추계액)가 중간예납기준액의
            30%에 미달하면 신고·납부할 수 있습니다.
          </li>
          <li>
            중간예납기준액이 없는 거주자 중 복식부기의무자가 2026년 상반기 사업 실적이 있으면
            신고·납부해야 합니다.
          </li>
        </ul>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>종합소득 과세표준 = (중간예납 기간의 종합소득금액 × 2) − 이월결손금 − 종합소득공제</li>
          <li>종합소득 산출세액 = 과세표준 × 기본세율(6%~45%)</li>
          <li>
            중간예납추계액 = (산출세액 ÷ 2) − (2026년 6월 30일까지의 공제·감면세액, 토지 등 매매차익
            예정신고 산출세액, 수시부과세액, 원천징수세액)
          </li>
        </ol>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              추계액에 쓰는 기본세율
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
                <td className="border-border border-b px-3 py-2.5">1,400만 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">6%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">5,000만 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">15%</td>
                <td className="border-border border-b px-3 py-2.5">126만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">8,800만 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">24%</td>
                <td className="border-border border-b px-3 py-2.5">576만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1억 5,000만 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">35%</td>
                <td className="border-border border-b px-3 py-2.5">1,544만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">3억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">38%</td>
                <td className="border-border border-b px-3 py-2.5">1,994만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">5억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
                <td className="border-border border-b px-3 py-2.5">2,594만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">10억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">42%</td>
                <td className="border-border border-b px-3 py-2.5">3,594만 원</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">10억 원 초과</td>
                <td className="px-3 py-2.5">45%</td>
                <td className="px-3 py-2.5">6,594만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            중간예납추계액이 50만 원 미만이면 납부 대상이 아닙니다. 추계액 신고서를 제출해야 중간예납
            고지세액을 취소할 수 있습니다.
          </li>
          <li>추계액으로 신고·납부해도 납부할 세액이 1천만 원을 초과하면 분납할 수 있습니다.</li>
        </ul>
        <p className="text-sm leading-relaxed">
          근거: 국세청{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2236&cntntsId=7673"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            중간예납 대상
          </a>
          ,{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7674"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            세액 계산·납부
          </a>
          ,{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2238&cntntsId=7675"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            추계액 신고
          </a>
          ,{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=41095&cntntsId=239072"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            모두채움(환급)
          </a>
          .
        </p>
      </section>
    </>
  );
}
