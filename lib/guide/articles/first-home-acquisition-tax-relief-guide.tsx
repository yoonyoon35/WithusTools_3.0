import Link from "next/link";

export const firstHomeAcquisitionTaxReliefGuideMeta = {
  slug: "first-home-acquisition-tax-relief-guide",
  title: "생애최초 취득세 감면 조건과 신청 방법",
  description:
    "2026년 4월 기준 생애최초 감면 조건, 감면 한도, 매매가별 효과, 예외 요건, 신청·사후 관리(추징), 환급 방법을 표로 정리했습니다.",
  updated: "2026년 5월 5일",
} as const;

export function FirstHomeAcquisitionTaxReliefGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-fhatr-overview">
        <h2 id="guide-fhatr-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          생애최초 주택 구입 취득세 감면은 본인과 배우자가 생애 처음으로 주택을 구입할 때 취득세를 최대 200만 원 한도 내에서
          감면해주는 제도입니다. 소득 기준 제한 없이 취득가액 12억 원 이하 주택이면 누구나 적용받을 수 있으며, 2028년 12월 31일까지
          연장 적용됩니다. 2026년 1월 개정으로 인구감소지역 내 생애최초 한도는 300만 원으로 확대됐습니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-fhatr-condition" className="text-primary underline-offset-4 hover:underline">
              감면 조건
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-amount" className="text-primary underline-offset-4 hover:underline">
              감면 금액·인구감소지역
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-by-price" className="text-primary underline-offset-4 hover:underline">
              매매가별 감면 효과
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-childbirth" className="text-primary underline-offset-4 hover:underline">
              출산·양육 감면과 선택
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-replace" className="text-primary underline-offset-4 hover:underline">
              1주택 교체·일시적 2주택
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-exception" className="text-primary underline-offset-4 hover:underline">
              무주택 예외
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-ownership" className="text-primary underline-offset-4 hover:underline">
              분양권·오피스텔·해외 보유
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-ineligible" className="text-primary underline-offset-4 hover:underline">
              감면 불가·12억 초과
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-joint" className="text-primary underline-offset-4 hover:underline">
              공동명의
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-apply" className="text-primary underline-offset-4 hover:underline">
              신청 방법
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-docs" className="text-primary underline-offset-4 hover:underline">
              필요 서류
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-recapture" className="text-primary underline-offset-4 hover:underline">
              추징 조건
            </a>
          </li>
          <li>
            <a href="#guide-fhatr-refund" className="text-primary underline-offset-4 hover:underline">
              환급·경정청구
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-fhatr-condition">
        <h2 id="guide-fhatr-condition" className="text-foreground text-xl font-semibold tracking-tight">
          감면 조건
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              생애최초 취득세 감면 기본 요건
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
                <td className="border-border border-b px-3 py-2.5">본인과 배우자 모두 과거 주택 소유 이력 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소득 기준
                </th>
                <td className="border-border border-b px-3 py-2.5">없음 (소득 무관)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 가액
                </th>
                <td className="border-border border-b px-3 py-2.5">취득가액 12억 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 유형
                </th>
                <td className="border-border border-b px-3 py-2.5">아파트·빌라·단독주택 등 모든 주택</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득 방법
                </th>
                <td className="border-border border-b px-3 py-2.5">유상취득 (매매)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  사후 거주
                </th>
                <td className="px-3 py-2.5">취득 후 3개월 이내 전입·1가구 1주택, 3년 상시 거주(미이행 시 추징)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhatr-amount">
        <h2 id="guide-fhatr-amount" className="text-foreground text-xl font-semibold tracking-tight">
          감면 금액
        </h2>
        <p>
          취득세액이 200만 원 이하이면 전액 면제되고, 취득세액이 200만 원을 초과하면 200만 원만 공제됩니다. 인구감소지역에
          해당하면 한도가 300만 원으로 확대됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 유형별 감면 한도
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면 내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 지역 (12억 원 이하)
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 최대 200만 원 감면</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  인구감소지역 소재 주택
                </th>
                <td className="px-3 py-2.5">취득세 최대 300만 원 감면 (2026년 이후 농어촌특구 등은 제외·인구감소지역으로 축소)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          지방교육세는 취득세 감면분에 연동되므로 취득세 200만 원 감면 시 지방교육세 20만 원도 추가 감면되어 실질 감면액은 최대
          220만 원입니다. 인구감소지역 300만 원 감면 시 지방교육세 30만 원이 함께 줄어 실질 최대 약 330만 원 수준입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              인구감소지역 300만 원 감면 예시 (매매가 3억·1주택·85㎡ 이하)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 지역 (200만)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  인구감소지역 (300만)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  감면 전 합계
                </th>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실납부(감면 후)
                </th>
                <td className="px-3 py-2.5">110만 원</td>
                <td className="px-3 py-2.5">0원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          인구감소지역 목록은 행정안전부 고시(89개 시·군 등)를 따릅니다. 세컨드홈 특례용 인구감소·관심지역과 범위가 다를 수
          있으므로{" "}
          <Link
            href="/guide/acquisition-tax-relief-programs-2026-guide#guide-atrp-decline-region"
            className="text-primary underline-offset-4 hover:underline"
          >
            감면 제도 총정리 ③절
          </Link>
          을 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhatr-by-price">
        <h2 id="guide-fhatr-by-price" className="text-foreground text-xl font-semibold tracking-tight">
          매매가별 감면 효과
        </h2>
        <p className="text-muted-foreground text-sm">
          무주택자 1주택 취득, 전용 85㎡ 이하·일반 지역 200만 원 감면 기준. 합계는 취득세+지방교육세이며 농어촌특별세는
          포함하지 않습니다(85㎡ 이하 시 농특세 0).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매가별 감면 전·후 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계(감면 전)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실납부 합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">110만 원 (전액)</td>
                <td className="border-border border-b px-3 py-2.5">110만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">220만 원 (전액)</td>
                <td className="border-border border-b px-3 py-2.5">220만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">220만 원</td>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
                <td className="border-border border-b px-3 py-2.5">110만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">220만 원</td>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="px-3 py-2.5">약 1,167만 원</td>
                <td className="px-3 py-2.5">220만 원</td>
                <td className="px-3 py-2.5">약 1,284만 원</td>
                <td className="px-3 py-2.5">약 1,064만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ <strong>농어촌특별세</strong>는 생애최초 감면 대상이 아닙니다. 전용 85㎡ 초과 주택은 농특세가 별도 부과되며 감면되지
          않습니다. 지방교육세 산출 방식은{" "}
          <Link
            href="/guide/local-education-rural-special-tax-acquisition-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            지방교육세·농특세 계산법
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhatr-childbirth">
        <h2 id="guide-fhatr-childbirth" className="text-foreground text-xl font-semibold tracking-tight">
          출산·양육 감면과 선택
        </h2>
        <p>
          2024년 1월 1일 이후 출산한 가구가 주택을 취득하는 경우, 출산·양육 감면(최대 500만 원)을 받을 수 있습니다. 생애최초
          감면(200만 원)과 출산·양육 감면은 <strong>동시 적용되지 않으며</strong> 하나를 선택해야 합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              생애최초 vs 출산·양육 (매매가 3억·85㎡ 이하 예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면 한도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실납부(합계)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원(+지방교육세 연동)</td>
                <td className="border-border border-b px-3 py-2.5">110만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  출산·양육
                </th>
                <td className="px-3 py-2.5">500만 원(+지방교육세 연동)</td>
                <td className="px-3 py-2.5">0원(전액 감면)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          이미 생애최초 감면(200만 원)을 받았더라도 출산 요건을 충족하면 출산·양육 감면으로 <strong>변경·경정청구</strong>해
          차액(약 300만 원)을 추가 환급받을 수 있습니다. 출산 전·후 취득 시점에 따라 신청 시기가 달라지므로{" "}
          <Link
            href="/guide/acquisition-tax-relief-programs-2026-guide#guide-atrp-childbirth"
            className="text-primary underline-offset-4 hover:underline"
          >
            감면 제도 총정리 ②절
          </Link>
          을 함께 확인하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-fhatr-replace">
        <h2 id="guide-fhatr-replace" className="text-foreground text-xl font-semibold tracking-tight">
          1주택 교체·일시적 2주택과 병행
        </h2>
        <p>
          기존 주택을 팔기 전 새 주택을 먼저 취득하면 취득 시점에 2주택으로 보아 중과세율(8% 등)이 적용될 수 있습니다. 이 경우{" "}
          <Link
            href="/guide/temporary-two-home-acquisition-tax-exception-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            일시적 2주택 취득세 중과 예외
          </Link>
          요건(종전 주택 3년 내 처분 등)을 충족하면 1주택 일반세율(1~3%)로 신고할 수 있습니다.
        </p>
        <p>
          일시적 2주택으로 1~3% 세율을 적용한 뒤에도, 무주택·생애최초 요건을 충족하면 <strong>생애최초 200만 원 감면을 추가
          신청</strong>할 수 있습니다. 두 제도는 중복 적용 가능합니다. 1주택 교체 시 세율 구조는{" "}
          <Link
            href="/guide/first-home-acquisition-tax-amount-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            1주택자 취득세 얼마나 나올까
          </Link>
          가이드도 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhatr-exception">
        <h2 id="guide-fhatr-exception" className="text-foreground text-xl font-semibold tracking-tight">
          무주택으로 간주되는 예외 경우
        </h2>
        <p>과거 주택을 소유했더라도 아래 경우에는 무주택으로 간주해 감면을 적용받을 수 있습니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              예외 사유별 요건
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  예외 사유
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조건
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  노후 단독주택
                </th>
                <td className="border-border border-b px-3 py-2.5">사용 승인 후 20년 이상 경과된 단독주택 소유·처분</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소형 단독주택
                </th>
                <td className="border-border border-b px-3 py-2.5">전용 85㎡ 이하 단독주택 소유·처분</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">상속으로 취득한 주택 소유·처분</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  초소형 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">전용 20㎡ 이하 주택 1채 소유·처분</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  저가 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">시가표준액 100만 원 이하 주택 소유·처분</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  전세사기피해주택
                </th>
                <td className="px-3 py-2.5">전세사기피해주택 소유·처분</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          단, 위 예외에 해당하더라도 감면 대상 주택 취득일 전 또는 취득일로부터 3개월 이내에 처분한 경우에 한정합니다. 예외
          무주택 해당 시 등기·매매계약서 등 <strong>처분 증빙</strong>을 추가로 제출해야 할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhatr-ownership">
        <h2 id="guide-fhatr-ownership" className="text-foreground text-xl font-semibold tracking-tight">
          분양권·오피스텔·해외 보유와 무주택 판단
        </h2>
        <p>
          생애최초 감면은 본인·배우자의 <strong>과거 주택 소유 이력</strong>을 기준으로 합니다. 아래는 신청 전에 관할
          구청·위택스에서 확인이 필요한 대표 항목입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소유 이력 확인 시 유의사항
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  참고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양권·입주권
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2020년 8월 이후 취득한 분양권·조합원 입주권은 주택 수·소유 이력에 포함될 수 있음
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  오피스텔
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  취득 시점 공부상 업무시설이면 주택 수 제외인 경우가 많으나, 주거용 판정·용도 변경 이력은 별도 확인
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  해외 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  국내 주택과 별도로 해외 부동산 보유 이력이 무주택 판단에 영향을 줄 수 있으므로 사전 문의 권장
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  배우자·혼인 관계
                </th>
                <td className="px-3 py-2.5">
                  혼인·이혼·재혼 시 배우자의 과거 주택 이력도 함께 검토. 가족관계증명서·혼인관계증명서로 확인
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          주택 수 산정·유형별 세율은{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide#guide-at-house-count" className="text-primary underline-offset-4 hover:underline">
            2026년 취득세율 가이드
          </Link>
          ,{" "}
          <Link href="/guide/apartment-villa-officetel-acquisition-tax-guide" className="text-primary underline-offset-4 hover:underline">
            아파트 vs 빌라 vs 오피스텔
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-fhatr-ineligible">
        <h2 id="guide-fhatr-ineligible" className="text-foreground text-xl font-semibold tracking-tight">
          감면 불가·12억 초과
        </h2>
        <p>
          아래에 해당하면 생애최초 감면을 받을 수 없습니다. 취득가액이 12억 원을 초과하면 감면 한도와 관계없이 적용 대상에서
          제외되며, 일반 1주택 세율로 납부합니다.
        </p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
          <li>본인 또는 배우자에게 주택 소유 이력이 있고, 위 무주택 예외에 해당하지 않는 경우</li>
          <li>취득가액(과세표준) 12억 원 초과</li>
          <li>취득 시점 세대 기준 2주택 이상 보유(일시적 2주택·세컨드홈 등 별도 특례 미적용 시)</li>
          <li>증여·상속 등 무상 취득(매매·유상취득만 해당)</li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="guide-fhatr-joint">
        <h2 id="guide-fhatr-joint" className="text-foreground text-xl font-semibold tracking-tight">
          공동명의 취득 시 주의사항
        </h2>
        <p>
          공동명의로 취득하는 경우 감면 한도는 1인 기준이 아니라 주택 전체 기준으로 최대 200만 원(인구감소지역 300만 원)입니다.
          부부가 각각 200만 원씩 받는 구조가 아닙니다. 부부 중 한쪽이라도 과거 주택 소유 이력이 있으면 감면 적용이 불가합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhatr-apply">
        <h2 id="guide-fhatr-apply" className="text-foreground text-xl font-semibold tracking-tight">
          신청 방법
        </h2>
        <p>생애최초 취득세 감면은 자동 적용이 아니므로 반드시 신청해야 합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신청 경로·기한
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  온라인 신청
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  위택스(wetax.go.kr) → 취득세 신고 → 감면사유 선택 → 생애최초(일반 200만) 또는 인구감소지역 생애최초(300만)
                  선택
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  오프라인 신청
                </th>
                <td className="border-border border-b px-3 py-2.5">주택 소재지 관할 시·군·구청 세무과 방문</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  신청 기한
                </th>
                <td className="px-3 py-2.5">취득세 납부 기한(잔금일로부터 60일) 이내</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          위택스 화면·감면사유 명칭은 지자체·시기에 따라 다를 수 있습니다. 인구감소지역 해당 여부가 불확실하면 신청 전 관할
          구청 세무과에 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhatr-docs">
        <h2 id="guide-fhatr-docs" className="text-foreground text-xl font-semibold tracking-tight">
          필요 서류
        </h2>
        <p>
          생애최초 주택구입 취득세 감면 신청서와 함께 주민등록등본(최근 5년 이내 주소 포함, 주민번호 전체 공개)과
          가족관계증명서를 준비해 제출합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              제출 서류·발급처
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  서류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  발급처·비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 취득세 감면 신청서
                </th>
                <td className="border-border border-b px-3 py-2.5">위택스 또는 관할 구청 서식</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주민등록등본 (주민번호 전체 공개)
                </th>
                <td className="border-border border-b px-3 py-2.5">정부24·주민센터</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  가족관계증명서
                </th>
                <td className="border-border border-b px-3 py-2.5">정부24 (배우자·혼인·이혼 이력 확인용)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  혼인관계증명서
                </th>
                <td className="border-border border-b px-3 py-2.5">정부24 (혼인·재혼·이혼 이력이 있는 경우)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  예외 무주택 증빙
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  등기사항전부증명서·매매계약서·처분 확인서 등 (상속·소형·저가 등 예외 해당 시)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  신분증
                </th>
                <td className="px-3 py-2.5">본인 지참</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhatr-recapture">
        <h2 id="guide-fhatr-recapture" className="text-foreground text-xl font-semibold tracking-tight">
          사후 관리 요건 (추징 조건)
        </h2>
        <p>감면을 받은 후 아래 조건을 지키지 않으면 감면받은 취득세와 가산세·이자가 추징됩니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              추징 사유
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  추징 사유
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전입 미이행
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  취득일로부터 3개월 이내 전입신고 및 상시 거주 시작 미이행
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  가구 1주택 미달성
                </th>
                <td className="border-border border-b px-3 py-2.5">취득일로부터 3개월 이내 1가구 1주택 미달성</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조기 매각·증여
                </th>
                <td className="border-border border-b px-3 py-2.5">상시 거주 3년 미만 상태에서 매각·증여</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  임대 전환
                </th>
                <td className="px-3 py-2.5">상시 거주 3년 미만 상태에서 임대 목적 사용</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          세입자가 있는 주택을 매수한 경우 임대차계약 종료 후 1년 이내 전입하면 추징 대상에서 제외됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhatr-refund">
        <h2 id="guide-fhatr-refund" className="text-foreground text-xl font-semibold tracking-tight">
          이미 납부한 경우 환급·경정청구
        </h2>
        <p>
          감면 신청을 하지 않고 취득세를 납부한 경우에도 경정청구를 통해 환급받을 수 있습니다. 생애최초로 받은 뒤 출산·양육
          감면으로 변경하는 경우에도 동일하게 경정청구합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              경정청구 요약
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
                  신청 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 납부일로부터 5년 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  온라인
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  위택스 → 지방세 신고·납부 → 경정청구(과오납) → 해당 취득세 건 선택
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  오프라인
                </th>
                <td className="border-border border-b px-3 py-2.5">관할 구청 세무과 방문·경정청구서 제출</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  제출 서류
                </th>
                <td className="px-3 py-2.5">
                  경정청구서, 감면 신청서, 주민등록등본, 가족관계증명서(출산·양육 변경 시 출생증명 등 추가)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 생애최초 취득세 감면 조건과 감면 기한은 지방세특례제한법에 따르며 정부 정책에 따라 변동될 수 있습니다. 정확한 적용
          조건은 위택스(wetax.go.kr) 또는 관할 시·군·구청 세무과에서 확인할 것을 권장합니다.
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
              href="/guide/acquisition-tax-relief-programs-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              취득세 세액공제·감면 제도 총정리
            </Link>
          </li>
          <li>
            <Link
              href="/guide/first-home-acquisition-tax-amount-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              1주택자 취득세 얼마나 나올까
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
            <Link
              href="/guide/temporary-two-home-acquisition-tax-exception-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              일시적 2주택 취득세 중과 예외
            </Link>
          </li>
          <li>
            <Link
              href="/guide/local-education-rural-special-tax-acquisition-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              지방교육세·농특세 계산법
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
