import Link from "next/link";

export const acquisitionTaxReliefPrograms2026GuideMeta = {
  slug: "acquisition-tax-relief-programs-2026-guide",
  title: "취득세 세액공제·감면 제도 총정리",
  description:
    "2026년 기준 생애최초, 출산·양육, 인구감소지역, 세컨드홈, 미분양, 일시적 2주택 등 취득세 감면·공제 제도를 표로 정리했습니다. 적용 요건, 신청 절차, 추징 유의사항과 세액공제 한도를 참고용으로 확인하세요. 실제 신고·심사 결과는 개별 사안마다 달라질 수 있습니다.",
  updated: "2026년 5월 5일",
} as const;

export function AcquisitionTaxReliefPrograms2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-atrp-overview">
        <h2 id="guide-atrp-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          주택 취득세는 조건에 따라 감면받을 수 있는 제도가 여러 가지 있습니다. 2026년 1월 1일부터 지방세법과
          지방세특례제한법 개정안이 시행되어 생애최초 주택 구입·출산양육 가구·인구감소지역 주택 취득 시 감면 혜택이
          확대됐습니다.
        </p>
        <p>
          제도는 크게 <strong>세액 감면</strong>(산출 취득세에서 일정 금액·비율 공제)과{" "}
          <strong>중과 면제</strong>(2주택 8% 등 중과세율 대신 1~3% 적용)로 나뉩니다. 생애최초·출산·양육·미분양은
          전자, 세컨드홈·일시적 2주택은 후자에 해당합니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-atrp-compare" className="text-primary underline-offset-4 hover:underline">
              제도 한눈에 비교
            </a>
          </li>
          <li>
            <a href="#guide-atrp-choice" className="text-primary underline-offset-4 hover:underline">
              제도 선택 가이드
            </a>
          </li>
          <li>
            <a href="#guide-atrp-firsthome" className="text-primary underline-offset-4 hover:underline">
              ① 생애최초
            </a>
          </li>
          <li>
            <a href="#guide-atrp-childbirth" className="text-primary underline-offset-4 hover:underline">
              ② 출산·양육
            </a>
          </li>
          <li>
            <a href="#guide-atrp-decline-region" className="text-primary underline-offset-4 hover:underline">
              ③ 인구감소지역 생애최초
            </a>
          </li>
          <li>
            <a href="#guide-atrp-second-home" className="text-primary underline-offset-4 hover:underline">
              ④ 세컨드홈
            </a>
          </li>
          <li>
            <a href="#guide-atrp-unsold" className="text-primary underline-offset-4 hover:underline">
              ⑤ 미분양
            </a>
          </li>
          <li>
            <a href="#guide-atrp-temp-two-home" className="text-primary underline-offset-4 hover:underline">
              ⑥ 일시적 2주택
            </a>
          </li>
          <li>
            <a href="#guide-atrp-apply" className="text-primary underline-offset-4 hover:underline">
              신청 방법
            </a>
          </li>
          <li>
            <a href="#guide-atrp-overlap" className="text-primary underline-offset-4 hover:underline">
              중복 적용
            </a>
          </li>
          <li>
            <a href="#guide-atrp-clawback" className="text-primary underline-offset-4 hover:underline">
              추징 주의
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-atrp-compare">
        <h2 id="guide-atrp-compare" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 주택 취득세 감면 제도 한눈에 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2026년 감면·특례 제도 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  혜택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소득 제한
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 기한
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 주택 구입
                </th>
                <td className="border-border border-b px-3 py-2.5">세액 감면</td>
                <td className="border-border border-b px-3 py-2.5">취득세 200만 원 한도</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">2028년 12월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 (인구감소지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">세액 감면</td>
                <td className="border-border border-b px-3 py-2.5">취득세 300만 원 한도</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">2028년 12월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  출산·양육 주택 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">세액 감면</td>
                <td className="border-border border-b px-3 py-2.5">취득세 500만 원 한도</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">2028년 12월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  세컨드홈 특례 (인구감소지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">중과 면제</td>
                <td className="border-border border-b px-3 py-2.5">2주택 8% 대신 1~3%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">2026년 12월 31일 취득분</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방 준공 후 미분양 아파트
                </th>
                <td className="border-border border-b px-3 py-2.5">세액 감면</td>
                <td className="border-border border-b px-3 py-2.5">취득세 50% 감면</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">2026년 12월 31일</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  일시적 2주택
                </th>
                <td className="px-3 py-2.5">중과 면제</td>
                <td className="px-3 py-2.5">조정지역 8% 대신 1~3%</td>
                <td className="px-3 py-2.5">없음</td>
                <td className="px-3 py-2.5">상시</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 저가주택(수도권 공시가 1억·지방 2억 이하) 중과 제외는 세액 감면이 아니라, 다주택 중과 자체가 적용되지
          않는 별도 제도입니다.{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
            2026년 취득세율 완전 정리
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-choice">
        <h2 id="guide-atrp-choice" className="text-foreground text-xl font-semibold tracking-tight">
          어떤 제도를 먼저 볼까? 선택 가이드
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상황별 검토 제도
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  우선 검토
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택·첫 주택 매매(12억 이하)
                </th>
                <td className="border-border border-b px-3 py-2.5">생애최초 감면 / 출산·양육(해당 시)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택 + 조정지역 이사(신규 취득)
                </th>
                <td className="border-border border-b px-3 py-2.5">일시적 2주택(종전 주택 3년 내 처분)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택 + 인구감소지역 추가 매수
                </th>
                <td className="border-border border-b px-3 py-2.5">세컨드홈 특례(종전 주택 처분 불필요)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수도권 외 미분양 아파트 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">준공 후 미분양 50% 감면</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  인구감소지역 첫 주택
                </th>
                <td className="px-3 py-2.5">생애최초 300만 원(일반 200만 대신)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-firsthome">
        <h2 id="guide-atrp-firsthome" className="text-foreground text-xl font-semibold tracking-tight">
          ① 생애최초 주택 구입 취득세 감면
        </h2>
        <p>
          본인과 배우자 모두 주택 소유 이력이 없는 경우 취득가액 12억 원 이하 주택에 최대 200만 원 한도 내 취득세를 감면합니다.
          취득세액이 200만 원 이하면 전액 면제, 초과하면 200만 원만 공제됩니다. 소득 제한은 없습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              생애최초 감면 요건
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
                  감면 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 가액
                </th>
                <td className="border-border border-b px-3 py-2.5">12억 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실거주 요건
                </th>
                <td className="border-border border-b px-3 py-2.5">취득일로부터 3개월 이내 전입·상시 거주</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  추징 요건
                </th>
                <td className="px-3 py-2.5">3년 미만 매각·증여·임대 시 추징</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          지방교육세는 취득세 감면분에 연동되므로 취득세 200만 원 감면 시 지방교육세 20만 원도 줄어 실질 감면액은 최대{" "}
          <strong>220만 원</strong>입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매가별 감면 효과 요약(1주택·85㎡ 이하)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면 전 합계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실납부(감면 후)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
                <td className="border-border border-b px-3 py-2.5">110만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="px-3 py-2.5">550만 원</td>
                <td className="px-3 py-2.5">330만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          상세 요건·신청·추징은{" "}
          <Link
            href="/guide/first-home-acquisition-tax-relief-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            생애최초 취득세 감면
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-childbirth">
        <h2 id="guide-atrp-childbirth" className="text-foreground text-xl font-semibold tracking-tight">
          ② 출산·양육 주택 취득세 감면
        </h2>
        <p>
          2024년 1월 1일 이후 출산한 가구가 출산일로부터 5년 이내 주택을 취득하거나, 주택 취득 후 1년 이내 출산해 1가구 1주택이
          되는 경우 취득세를 최대 500만 원 한도 내 100% 감면합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              출산·양육 감면 요건
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
                  감면 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  출산 요건
                </th>
                <td className="border-border border-b px-3 py-2.5">2024년 1월 1일 이후 출산</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득 시기
                </th>
                <td className="border-border border-b px-3 py-2.5">출산일로부터 5년 이내 또는 취득 후 1년 이내 출산</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 가액
                </th>
                <td className="border-border border-b px-3 py-2.5">12억 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상
                </th>
                <td className="border-border border-b px-3 py-2.5">1가구 1주택 (미혼모·미혼부 포함)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  적용 횟수
                </th>
                <td className="px-3 py-2.5">최초 1회</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          취득세에 부과되는 농어촌특별세·지방교육세도 함께 감면되므로 실질 감면액은 약 550만 원 수준입니다. 생애최초 감면(200만 원)을
          이미 받은 경우에도 출산 요건을 충족하면 출산·양육 감면(500만 원)으로 변경해 차액 300만 원을 추가 환급받을 수 있습니다.
          경정청구 기한은 납부일로부터 5년 이내입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              계산 예시: 매매가 3억 원·1주택(85㎡ 이하)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면 전
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  출산·양육 감면 후
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원(전액 감면)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-decline-region">
        <h2 id="guide-atrp-decline-region" className="text-foreground text-xl font-semibold tracking-tight">
          ③ 인구감소지역 생애최초 취득세 감면 확대
        </h2>
        <p>
          행정안전부 고시 <strong>인구감소지역</strong>(89개 시·군 등) 내 생애최초 주택 구입 시 취득세 감면 한도가 200만
          원에서 <strong>300만 원</strong>으로 확대됩니다. 지방교육세 연동 시 실질 최대 약 <strong>330만 원</strong>
          수준입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              일반 지역 vs 인구감소지역
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  인구감소지역
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  감면 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  적용 대상
                </th>
                <td className="px-3 py-2.5">취득가액 12억 원 이하</td>
                <td className="px-3 py-2.5">취득가액 12억 원 이하</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          인구감소지역(생애최초 300만)과 인구감소·관심지역(세컨드홈 특례)은 지정 범위가 다릅니다. 세컨드홈은 2026년
          관심지역 9곳이 추가된 등 별도 고시를 따릅니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-second-home">
        <h2 id="guide-atrp-second-home" className="text-foreground text-xl font-semibold tracking-tight">
          ④ 세컨드홈 특례 (인구감소지역)
        </h2>
        <p>
          무주택자·1주택자가 인구감소·관심지역 주택을 추가로 취득하는 경우 2주택 중과(8%) 대신 1주택 일반세율(1~3%)이
          적용됩니다. <strong>종전 주택 처분은 필수가 아닙니다.</strong>
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세컨드홈 특례 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조건
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상자
                </th>
                <td className="border-border border-b px-3 py-2.5">세대 기준 무주택·1주택</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 가액
                </th>
                <td className="border-border border-b px-3 py-2.5">취득가 12억 이하 또는 공시가 9억 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">2026년 12월 31일 취득분까지</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5억 추가 취득 시(85㎡ 이하)
                </th>
                <td className="px-3 py-2.5">중과 4,200만 원 → 특례 550만 원 수준</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          지역 목록·신청·비적용 사례는{" "}
          <Link
            href="/guide/second-home-acquisition-tax-exception-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            세컨드홈 취득세 특례
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-unsold">
        <h2 id="guide-atrp-unsold" className="text-foreground text-xl font-semibold tracking-tight">
          ⑤ 지방 준공 후 미분양 아파트 취득세 감면
        </h2>
        <p>
          수도권 외 지역의 준공 후 미분양 아파트(전용 85㎡ 이하, 취득가액 6억 원 이하)를 개인이 취득하는 경우 취득세
          최대 50%를 감면받을 수 있으며, 다주택자 취득세 중과 대상에서도 제외됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              미분양 감면 요약·예시
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
                  감면율
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 50%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상
                </th>
                <td className="border-border border-b px-3 py-2.5">수도권 외 준공 후 미분양, 85㎡ 이하, 6억 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">2026년 12월 31일 취득분</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  3억·1주택 예시(85㎡ 이하)
                </th>
                <td className="px-3 py-2.5">330만 원 → 50% 감면 후 약 165만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-temp-two-home">
        <h2 id="guide-atrp-temp-two-home" className="text-foreground text-xl font-semibold tracking-tight">
          ⑥ 일시적 2주택 취득세 중과 예외
        </h2>
        <p>
          1주택자가 이사 등 실수요로 신규 주택을 취득해 2주택이 된 경우, 종전 주택을 <strong>3년 이내</strong>{" "}
          처분하면 신규 주택에 1주택 일반세율(1~3%)이 적용됩니다. 실질 절세 효과는 주로{" "}
          <strong>신규 주택이 조정대상지역</strong>일 때(8% 중과 회피) 큽니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              일시적 2주택 요약
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
                  처분 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">신규 주택 취득일로부터 3년</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억·조정지역 예시
                </th>
                <td className="border-border border-b px-3 py-2.5">특례 약 1,284만 원 vs 중과 약 5,880만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  미처분 시
                </th>
                <td className="px-3 py-2.5">해당 중과세율과 납부액 차액 추징 + 가산세</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          인정 사유·신고·세컨드홈과의 차이는{" "}
          <Link
            href="/guide/temporary-two-home-acquisition-tax-exception-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            일시적 2주택 취득세 중과 예외 조건
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-apply">
        <h2 id="guide-atrp-apply" className="text-foreground text-xl font-semibold tracking-tight">
          감면·특례 제도별 신청 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              제도별 신청 시기·방법
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신청 시기
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신청 방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초·인구감소 생애최초
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 납부 기한(60일) 이내</td>
                <td className="border-border border-b px-3 py-2.5">위택스 또는 관할 구청(감면 신청)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  출산·양육 감면
                </th>
                <td className="border-border border-b px-3 py-2.5">취득 시 신청 또는 출산 후 경정청구</td>
                <td className="border-border border-b px-3 py-2.5">위택스 또는 관할 구청 세무과</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  세컨드홈 특례
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 신고·납부 기한(60일) 이내</td>
                <td className="border-border border-b px-3 py-2.5">위택스 또는 관할 구청(특례 신청)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  미분양 아파트 감면
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 신고 시</td>
                <td className="border-border border-b px-3 py-2.5">위택스 또는 관할 구청</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  일시적 2주택
                </th>
                <td className="px-3 py-2.5">취득세 신고·납부 시</td>
                <td className="px-3 py-2.5">1주택 일반세율로 신고(별도 서류 없는 경우 많음, 관할 확인)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>세액 감면형</strong>(생애최초·출산·미분양)은 자동 적용되지 않으며 별도 신청이 필요합니다.{" "}
          <strong>중과 면제형</strong>(세컨드홈·일시적 2주택)은 취득세 신고 시 해당 세율·특례를 선택·적용하며, 관할
          기관 안내에 따라 추가 확인이 필요할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-overlap">
        <h2 id="guide-atrp-overlap" className="text-foreground text-xl font-semibold tracking-tight">
          감면·특례 중복 적용 가능 여부
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              제도 조합별 중복 적용
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조합
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 + 출산·양육
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  불가(동시). 출산 요건 충족 시 출산·양육으로 변경·차액 환급
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 + 일시적 2주택
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  가능. 일시적 2주택으로 1~3% 적용 후 생애최초 200만 원 감면 추가 신청
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 + 세컨드홈
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  불가(동시). 첫 주택은 생애최초, 지방 추가 주택은 세컨드홈 등 취득 건별 선택
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  미분양 50% + 생애최초
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  가능(요건 충족 시). 50% 감면 후 잔액에 생애최초 한도 적용 등 순차 적용
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  출산·양육 + 세컨드홈
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  불가(동시). 1가구 1주택 출산 감면 vs 2주택 세컨드홈은 취득 목적·건이 다름
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일시적 2주택 + 세컨드홈
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  불가(동시). 이사·조정지역은 일시적 2주택, 지방 추가는 세컨드홈 등 해당 건만 적용
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  출산·양육 + 생애최초 외 감면
                </th>
                <td className="px-3 py-2.5">출산·양육과 다른 세액 감면은 중복 불가(하나 선택)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-clawback">
        <h2 id="guide-atrp-clawback" className="text-foreground text-xl font-semibold tracking-tight">
          감면·특례 후 추징 주의사항
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              추징 사유별 적용 대상
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  추징 사유
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 제도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3개월 이내 전입·상시 거주 미이행
                </th>
                <td className="border-border border-b px-3 py-2.5">생애최초·출산·양육</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3년 미만 매각·증여·임대
                </th>
                <td className="border-border border-b px-3 py-2.5">생애최초·출산·양육</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득 후 3개월 이내 1가구 1주택 미달성
                </th>
                <td className="border-border border-b px-3 py-2.5">생애최초</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종전 주택 3년 내 미처분
                </th>
                <td className="border-border border-b px-3 py-2.5">일시적 2주택(해당 중과세율과 차액 추징)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  세컨드홈 요건 미충족·허위 신고
                </th>
                <td className="px-3 py-2.5">세컨드홈 특례(중과세율로 재산정·추징 가능)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          일시적 2주택·세컨드홈 추징·가산세 상세는 각각{" "}
          <Link
            href="/guide/temporary-two-home-acquisition-tax-exception-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            일시적 2주택
          </Link>
          ,{" "}
          <Link
            href="/guide/second-home-acquisition-tax-exception-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            세컨드홈
          </Link>
          가이드를 참고하세요.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 감면 조건과 적용 기한은 지방세특례제한법에 따르며 정부 정책에 따라 변동될 수 있습니다. 정확한 조건은
          위택스(wetax.go.kr) 또는 행정안전부(mois.go.kr)에서 확인할 것을 권장합니다.
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
              href="/guide/first-home-acquisition-tax-relief-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              생애최초 취득세 감면
            </Link>
          </li>
          <li>
            <Link
              href="/guide/second-home-acquisition-tax-exception-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              세컨드홈 취득세 특례
            </Link>
          </li>
          <li>
            <Link
              href="/guide/temporary-two-home-acquisition-tax-exception-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              일시적 2주택 취득세 중과 예외
            </Link>
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
