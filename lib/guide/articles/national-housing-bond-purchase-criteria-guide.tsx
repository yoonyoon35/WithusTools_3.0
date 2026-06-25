import Link from "next/link";

export const nationalHousingBondPurchaseCriteriaGuideMeta = {
  slug: "national-housing-bond-purchase-criteria-guide",
  title: "주택 취득 시 국민주택채권 매입 기준",
  description:
    "2026년 6월 기준 주택 소유권 이전등기 시 국민주택채권 매입 요율, 시가표준액 기준 계산, 실제 부담액(할인), 저당권 설정, 면제 대상과 잔금 전 체크리스트를 표로 정리했습니다.",
  updated: "2026년 6월 1일",
} as const;

export function NationalHousingBondPurchaseCriteriaGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-nhb-overview">
        <h2 id="guide-nhb-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 기준
        </h2>
        <p>
          아파트·주택을 매수해 소유권 이전등기를 하려면, 일정 금액의 <strong>국민주택채권</strong>을 의무적으로 매입해야
          합니다. 매매가가 아니라 <strong>시가표준액(공시가격)</strong>에 지역별 요율을 곱해 산출하며, 대부분은 매입 직후
          할인 매도해 실제 부담은 채권 액면의 일부(할인 손실)로 정리됩니다. 이 글은 <strong>주택</strong> 소유권
          이전·보존등기를 중심으로 정리했습니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-nhb-standard-value" className="text-primary underline-offset-4 hover:underline">
              시가표준액 확인
            </a>
          </li>
          <li>
            <a href="#guide-nhb-when" className="text-primary underline-offset-4 hover:underline">
              언제·누가 매입
            </a>
          </li>
          <li>
            <a href="#guide-nhb-scenario" className="text-primary underline-offset-4 hover:underline">
              현금·대출·근저당만
            </a>
          </li>
          <li>
            <a href="#guide-nhb-rates" className="text-primary underline-offset-4 hover:underline">
              매입 요율
            </a>
          </li>
          <li>
            <a href="#guide-nhb-mortgage" className="text-primary underline-offset-4 hover:underline">
              근저당 설정
            </a>
          </li>
          <li>
            <a href="#guide-nhb-presale" className="text-primary underline-offset-4 hover:underline">
              신축·분양
            </a>
          </li>
          <li>
            <a href="#guide-nhb-cases" className="text-primary underline-offset-4 hover:underline">
              계산 예시
            </a>
          </li>
          <li>
            <a href="#guide-nhb-exempt" className="text-primary underline-offset-4 hover:underline">
              면제 대상
            </a>
          </li>
          <li>
            <a href="#guide-nhb-process" className="text-primary underline-offset-4 hover:underline">
              매입·할인 절차
            </a>
          </li>
          <li>
            <a href="#guide-nhb-checklist" className="text-primary underline-offset-4 hover:underline">
              잔금 전 체크리스트
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-nhb-standard-value">
        <h2 id="guide-nhb-standard-value" className="text-foreground text-xl font-semibold tracking-tight">
          시가표준액 확인과 매매가와의 차이
        </h2>
        <p>
          채권 매입액은 <strong>실제 매매가가 아니라 등기 당시 시가표준액</strong>을 기준으로 합니다. 시가표준액은
          보통 국토교통부 <strong>공시가격</strong>과 연동되며, 등기 접수 전 법무사·관할 등기소에서 최종 확인합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              시가표준액 조회·확인 경로(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  용도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  국토교통부 공시가격 알리미
                </th>
                <td className="border-border border-b px-3 py-2.5">주택 공시가격 사전 조회</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기 법무사·등기소
                </th>
                <td className="border-border border-b px-3 py-2.5">등기 접수용 시가표준액 최종 확정</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  채권 매입 은행
                </th>
                <td className="px-3 py-2.5">매입액 산출·할인율 적용</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          매매가와 공시가격이 다를 수 있습니다. 예를 들어 <strong>매매 6억 원·공시 3억 원</strong>이면 채권은 6억이
          아니라 <strong>3억×요율</strong>로 계산됩니다(기타 지역 2.1% → 630만 원).
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nhb-when">
        <h2 id="guide-nhb-when" className="text-foreground text-xl font-semibold tracking-tight">
          언제·누가 매입하나
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매입 의무가 생기는 대표 상황
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매입 주체
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 매매 후 소유권 이전등기
                </th>
                <td className="border-border border-b px-3 py-2.5">소유권을 이전받는 취득자(매수인)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신축 주택 최초 보존등기
                </th>
                <td className="border-border border-b px-3 py-2.5">소유권 보존등기 명의자</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택담보대출 근저당권 설정등기
                </th>
                <td className="border-border border-b px-3 py-2.5">저당권 설정자(차주) — 별도 요율 적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  상속·증여 등 무상 취득
                </th>
                <td className="px-3 py-2.5">등기 신청인(상속인·수증자 등) — 요율은 유상 취득과 동일</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          실무에서는 법무사가 등기 접수 전 채권 매입·할인 절차를 대행하는 경우가 많고, 은행 대출 연계 시 지정 법무사가
          함께 처리합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nhb-scenario">
        <h2 id="guide-nhb-scenario" className="text-foreground text-xl font-semibold tracking-tight">
          현금·대출·근저당만 재설정 구분
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              결제·등기 유형별 채권 매입
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전액 현금 매수
                </th>
                <td className="border-border border-b px-3 py-2.5">소유권 이전등기 기준(시가표준액×요율)만 매입</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출+이전·근저당 동시
                </th>
                <td className="border-border border-b px-3 py-2.5">이전·근저당 산출액 중 큰 금액 1회 매입</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  근저당만 재설정(대환·갈아타기)
                </th>
                <td className="px-3 py-2.5">
                  소유권 이전 없이 저당만 변경 시 채권최고액×1%(2,000만 이상) 기준. 이전등기와 당일 아니면 별도 산출
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nhb-rates">
        <h2 id="guide-nhb-rates" className="text-foreground text-xl font-semibold tracking-tight">
          주택 매입 요율(소유권 이전·보존등기)
        </h2>
        <p className="text-muted-foreground text-sm">
          시가표준액 구간별. <strong>서울·광역시</strong>(부산·대구·광주·대전·울산)와{" "}
          <strong>기타 지역</strong>(경기·인천·세종·지방 등) 요율이 다릅니다. 시가표준액 2,000만 원 이하는 매입 불요입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 시가표준액 구간별 국민주택채권 매입 요율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시가표준액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  서울·광역시
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기타 지역
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2,000만 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">매입 불요</td>
                <td className="border-border border-b px-3 py-2.5">매입 불요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2,000만 원 초과 ~ 5,000만 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1.3%</td>
                <td className="border-border border-b px-3 py-2.5">1.3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 초과 ~ 1억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1.9%</td>
                <td className="border-border border-b px-3 py-2.5">1.4%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원 초과 ~ 1억 6,000만 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">2.1%</td>
                <td className="border-border border-b px-3 py-2.5">1.6%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 6,000만 원 초과 ~ 2억 6,000만 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">2.3%</td>
                <td className="border-border border-b px-3 py-2.5">1.8%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 6,000만 원 초과 ~ 6억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">2.6%</td>
                <td className="border-border border-b px-3 py-2.5">2.1%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  6억 원 초과
                </th>
                <td className="px-3 py-2.5">3.1%</td>
                <td className="px-3 py-2.5">2.6%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>매입액은 만 원 단위로 반올림하는 것이 일반적입니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nhb-mortgage">
        <h2 id="guide-nhb-mortgage" className="text-foreground text-xl font-semibold tracking-tight">
          근저당권 설정등기 시 별도 기준
        </h2>
        <p>
          주택담보대출로 근저당권 설정등기를 함께 하면, 소유권 이전과 별도로 저당권 관련 채권 매입 의무가 생길 수
          있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              저당권 설정등기 매입 기준(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">채권최고액 2,000만 원 이상 근저당권 설정·이전</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매입 요율
                </th>
                <td className="border-border border-b px-3 py-2.5">채권최고액의 1%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  상한
                </th>
                <td className="px-3 py-2.5">매입액 10억 원 초과 시 10억 원까지만 적용</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          소유권 이전등기와 근저당 설정등기를 같은 날 하면, 각각 산출한 매입액 중 <strong>더 큰 금액</strong>을 기준으로
          한 번 매입하는 방식이 적용됩니다(중복 매입 방지 규정).
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-nhb-presale">
        <h2 id="guide-nhb-presale" className="text-foreground text-xl font-semibold tracking-tight">
          신축·분양 주택과 채권 매입 시점
        </h2>
        <p>
          분양 아파트는 잔금·소유권 이전등기(또는 신축 최초 보존등기) 시점에 채권 매입 의무가 생깁니다. 계약금·중도금
          단계에서는 보통 매입하지 않습니다. 시가표준액은 등기 접수 시점 기준이므로, 잔금 전 공시가격을 미리 확인해
          두는 것이 좋습니다.{" "}
          <Link
            href="/guide/new-apartment-600-million-acquisition-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            6억 신축 분양 아파트 취득세 계산
          </Link>
          가이드에서 잔금일 취득세·채권 등 자금을 함께 점검할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nhb-cases">
        <h2 id="guide-nhb-cases" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          할인율은 은행·일자마다 달라지며, 실무에서는 대략 <strong>5~10%</strong> 구간에서 변동하는 경우가 많습니다(참고).
        </p>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">예시 1 — 서울 아파트, 시가표준액 5억 원</h3>
          <p>2억 6,000만 원 초과 ~ 6억 원 이하 구간 → 요율 2.6%</p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                서울 5억 원(공시) 주택 취득
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    단계
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    채권 매입액(5억 × 2.6%)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">1,300만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    할인율 5% 가정 시 실부담
                  </th>
                  <td className="border-border border-b px-3 py-2.5">약 65만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    할인율 7% 가정 시 실부담
                  </th>
                  <td className="px-3 py-2.5">약 91만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">예시 2 — 경기도 아파트, 시가표준액 3억 원</h3>
          <p>기타 지역, 2억 6,000만 원 초과 ~ 6억 원 이하 → 요율 2.1%</p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                경기 3억 원(공시) 주택 취득
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    항목
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    채권 매입액(3억 × 2.1%)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">630만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    할인율 5% 가정 시 실부담
                  </th>
                  <td className="px-3 py-2.5">약 32만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">
            예시 3 — 매매 6억·공시 3억(기타 지역)
          </h3>
          <p>매매가와 관계없이 공시 3억 기준 → 630만 원 매입, 할인 5% 시 실부담 약 32만 원</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">예시 4 — 대출 3억 원, 채권최고액 3억 3,000만 원</h3>
          <p>소유권 이전(공시 3억·기타 2.1%=630만)과 근저당(3.3억×1%=330만)을 비교하면, 이전등기 쪽 금액이 더 큽니다.</p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                이전등기 vs 근저당 설정 비교
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    구분
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    산출 매입액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    소유권 이전등기
                  </th>
                  <td className="border-border border-b px-3 py-2.5">630만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    근저당권 설정등기
                  </th>
                  <td className="border-border border-b px-3 py-2.5">330만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    실제 매입 기준(큰 금액)
                  </th>
                  <td className="px-3 py-2.5">630만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nhb-exempt">
        <h2 id="guide-nhb-exempt" className="text-foreground text-xl font-semibold tracking-tight">
          매입 의무 면제·특수 케이스
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대표 면제·유의 사례
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대상
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  국가·지방자치단체·공공기관
                </th>
                <td className="border-border border-b px-3 py-2.5">매입 의무 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금융기관
                </th>
                <td className="border-border border-b px-3 py-2.5">매입 의무 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종교·사회복지·학교법인 등
                </th>
                <td className="border-border border-b px-3 py-2.5">해당 목적용 부동산 취득 시 면제(요건 충족)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  농어민
                </th>
                <td className="border-border border-b px-3 py-2.5">영농·어업용 토지 등 일부 면제</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  시가표준액 2,000만 원 이하 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">매입 불요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속·증여 등기
                </th>
                <td className="border-border border-b px-3 py-2.5">매입 의무 있음. 요율은 유상 취득과 동일(시가표준액 기준)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  오피스텔·상가 등 비주택
                </th>
                <td className="px-3 py-2.5">별도 요율·기준 적용. 이 글의 주택 표와 다를 수 있음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>일반 개인의 주택 매수는 위 면제 대상에 해당되지 않는 경우가 대부분입니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nhb-process">
        <h2 id="guide-nhb-process" className="text-foreground text-xl font-semibold tracking-tight">
          매입·할인 절차
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              등기 전 처리 순서
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1
                </th>
                <td className="border-border border-b px-3 py-2.5">시가표준액 확인(등기부·공시가격 조회)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2
                </th>
                <td className="border-border border-b px-3 py-2.5">지정 금융기관(KB·우리·NH 등)에서 채권 매입</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3
                </th>
                <td className="border-border border-b px-3 py-2.5">할인 매도(실무상 즉시 처리) — 할인 손실이 실부담</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  4
                </th>
                <td className="px-3 py-2.5">채권 매입 증명서를 첨부해 소유권 이전등기 접수</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          할인율은{" "}
          <a
            href="https://www.hf.go.kr"
            className="text-primary font-medium underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            주택도시기금(hf.go.kr)
          </a>
          ·은행 고시에 따라 수시로 바뀝니다. 잔금일 전후로 법무사 견적에 채권 할인 비용이 포함돼 있는지, 당일
          할인율을 확인하는 것이 좋습니다.
        </p>
        <p>
          채권 할인 손실 외에도 등기 당일{" "}
          <Link
            href="/guide/home-purchase-additional-costs-guide#guide-cost-registration"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            등록면허세·법무사 수수료·인지세
          </Link>
          가 함께 발생합니다.{" "}
          <Link
            href="/guide/home-purchase-additional-costs-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            주택 구입 추가 비용
          </Link>
          가이드에서 잔금일 부대비용을 함께 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nhb-checklist">
        <h2 id="guide-nhb-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          잔금 전 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              확인 항목
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
                  공시가격·시가표준액 확인(매매가와 별도)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  취득 주택 지역(서울·광역시 vs 기타) 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  현금·대출 여부에 따른 매입 기준(이전 vs 근저당) 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  법무사 비용 견적에 채권 할인 비용 포함 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  당일 할인율 확인(은행·주택도시기금)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  취득세·등록면허세·법무사 비용 등과 합산 자금 확보
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 매입 요율·면제 대상은 주택도시기금법 시행령 및 관련 고시에 따르며 개정될 수 있습니다. 정확한 매입액·할인율은{" "}
          <a
            href="https://www.hf.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            주택도시기금(hf.go.kr)
          </a>{" "}
          또는 채권 매입 은행에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p className="text-foreground font-medium">관련 가이드</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link
              href="/guide/home-purchase-additional-costs-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              주택 구입 추가 비용
            </Link>
            — 취득세·등기비·중개수수료·인지세
          </li>
          <li>
            <Link
              href="/guide/new-apartment-600-million-acquisition-tax-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              6억 신축 분양 아파트 취득세 계산
            </Link>
            — 잔금일 자금(취득세·채권)
          </li>
          <li>
            <Link
              href="/guide/acquisition-tax-rates-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              2026년 취득세율 완전 정리
            </Link>
          </li>
          <li>
            <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
              취득세 계산기
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
