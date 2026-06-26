import Link from "next/link";

export const jeonseLoanTypesComparisonMeta = {
  slug: "jeonse-loan-types-comparison",
  title: "전세자금대출 종류 및 조건 비교",
  description:
    "버팀목·시중은행 전세자금대출 조건 비교, 보증금·소득·나이별 선택 시나리오, 신청 순서와 자주 놓치는 제한 사항을 정리했습니다.",
  updated: "2026년 4월 14일",
} as const;

export function JeonseLoanTypesComparisonBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-jeonse-overview">
        <h2 id="guide-jeonse-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          전세자금대출은 크게 정책 대출(주택도시기금)과 시중은행 대출로 나뉩니다. 소득 조건을 충족하는 경우 정책 대출이 금리 면에서
          유리합니다. 다만 <strong>면적·보증금 한도·중복 대출 제한</strong> 때문에 “금리만 낮다”고 골라서는 안 되고, 내가
          계약하려는 전세 조건과 맞는지부터 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jeonse-decision">
        <h2 id="guide-jeonse-decision" className="text-foreground text-xl font-semibold tracking-tight">
          어디부터 확인할까
        </h2>
        <p>
          먼저 대상 주택이 버팀목 요건(전용 85㎡ 이하, 수도권 보증금 3억 이하 등)에 들어오는지 봅니다. 조건을 충족하면 연령·혼인·
          자녀 여부로 청년·신혼·신생아 유형 중 어디에 해당하는지 따집니다. 한도가 부족하면 시중은행으로 넘어가거나, 정책+시중
          조합을 검토합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-scenario">
        <h2 id="guide-jeonse-scenario" className="text-foreground text-xl font-semibold tracking-tight">
          시나리오: 만 29세, 전세 2억 8천, 연소득 4,200만
        </h2>
        <p>
          수도권 59㎡ 아파트 전세 2억 8천만 원, 무주택 세대주, 순자산 3억 이하라면 청년전용 버팀목 후보입니다. 한도 2억까지
          가능하므로 <strong>2억은 버팀목, 나머지 8천만 원은 자기자금 또는 시중은행</strong>으로 채우는 그림이 됩니다. 이때
          시중은행분까지 합쳐{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR
          </Link>
          이 40%를 넘지 않는지 확인하세요.
        </p>
        <p>
          반대로 전용 95㎡ 오피스텔 전세라면 면적 제한에 걸려 버팀목은 불가하고, 시중은행(보증금의 80% 이내)만 검토하게 됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-policy-vs-bank">
        <h2 id="guide-jeonse-policy-vs-bank" className="text-foreground text-xl font-semibold tracking-tight">
          정책 대출 vs 시중은행 대출 기본 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              버팀목(정책)과 시중은행 전세자금대출 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  정책 대출(버팀목)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시중은행 대출
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리
                </th>
                <td className="border-border border-b px-3 py-2.5">연 1.9% ~ 3.3%</td>
                <td className="border-border border-b px-3 py-2.5">연 3.5% ~ 4.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소득 제한
                </th>
                <td className="border-border border-b px-3 py-2.5">있음</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  한도
                </th>
                <td className="border-border border-b px-3 py-2.5">유형별 상이</td>
                <td className="border-border border-b px-3 py-2.5">보증금의 80% 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 면적 제한
                </th>
                <td className="border-border border-b px-3 py-2.5">전용 85㎡ 이하</td>
                <td className="border-border border-b px-3 py-2.5">제한 없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  대상 주택
                </th>
                <td className="px-3 py-2.5">아파트·빌라·오피스텔(주거용)</td>
                <td className="px-3 py-2.5">제한 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-botimmok-types">
        <h2 id="guide-jeonse-botimmok-types" className="text-foreground text-xl font-semibold tracking-tight">
          버팀목 전세자금대출 유형별 비교
        </h2>
        <p>
          버팀목 전세자금대출은 일반·청년·신혼·신생아 특례 네 가지 유형으로 운영되며, 각 유형별로 소득 기준과 대출 한도가 다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              버팀목 유형별 조건·한도·금리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  청년전용
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신혼가구
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신생아 특례
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연소득 기준
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">5,000만 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">7,500만 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">1억 3,000만 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  나이 조건
                </th>
                <td className="border-border border-b px-3 py-2.5">제한 없음</td>
                <td className="border-border border-b px-3 py-2.5">만 19~34세</td>
                <td className="border-border border-b px-3 py-2.5">혼인 7년 이내</td>
                <td className="border-border border-b px-3 py-2.5">2세 이하 자녀</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수도권 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">1억 2,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">2억 원</td>
                <td className="border-border border-b px-3 py-2.5">2억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">2억 4,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 범위
                </th>
                <td className="border-border border-b px-3 py-2.5">연 1.9% ~ 3.3%</td>
                <td className="border-border border-b px-3 py-2.5">연 2.0% ~ 3.1%</td>
                <td className="border-border border-b px-3 py-2.5">연 2.2% ~ 3.3%</td>
                <td className="border-border border-b px-3 py-2.5">별도 고시</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  최저 금리(우대 적용 시)
                </th>
                <td className="px-3 py-2.5">연 1.0%</td>
                <td className="px-3 py-2.5">연 1.0%</td>
                <td className="px-3 py-2.5">연 1.0%</td>
                <td className="px-3 py-2.5">연 1.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 2026년 2월 27일 버팀목 금리가 인하되어 일반 버팀목 기준 연 1.9~3.3%가 적용되고 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-youth-rate">
        <h2 id="guide-jeonse-youth-rate" className="text-foreground text-xl font-semibold tracking-tight">
          청년전용 버팀목 소득별 금리
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[26rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              부부합산 연소득 구간별 적용 금리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  부부합산 연소득
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 금리
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2,000만 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">연 2.0%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4,000만 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">연 2.3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6,000만 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">연 2.7%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7,500만 원 이하(신혼)
                </th>
                <td className="px-3 py-2.5">연 3.1%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-common-eligibility">
        <h2 id="guide-jeonse-common-eligibility" className="text-foreground text-xl font-semibold tracking-tight">
          공통 자격 요건
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              버팀목 공통 자격 기준
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
                  주택 소유 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">무주택 세대주</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  순자산 기준
                </th>
                <td className="border-border border-b px-3 py-2.5">3억 4,500만 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상 주택 면적
                </th>
                <td className="border-border border-b px-3 py-2.5">전용 85㎡ 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상 주택 보증금
                </th>
                <td className="border-border border-b px-3 py-2.5">수도권 3억 원 이하, 지방 2억 원 이하</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  중복 대출
                </th>
                <td className="px-3 py-2.5">기존 전세자금대출·주담대 이용 중이면 불가</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-preferential">
        <h2 id="guide-jeonse-preferential" className="text-foreground text-xl font-semibold tracking-tight">
          주요 우대금리 항목
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              우대 조건별 금리 인하
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  우대 조건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  우대금리
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부동산 전자계약 체결
                </th>
                <td className="border-border border-b px-3 py-2.5">0.1%p 인하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방 소재 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">0.2%p 인하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  다자녀 가구
                </th>
                <td className="border-border border-b px-3 py-2.5">0.7%p 인하</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  기초생활수급권자·한부모가구
                </th>
                <td className="px-3 py-2.5">1.0%p 인하</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 우대금리는 중복 적용 가능하나, 최종 금리가 연 1.0% 미만인 경우 연 1.0%로 적용됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jeonse-term-repayment">
        <h2 id="guide-jeonse-term-repayment" className="text-foreground text-xl font-semibold tracking-tight">
          대출 기간 및 상환 방식
        </h2>
        <p>
          기본 대출 기간은 2년이며, 최장 10년까지 연장할 수 있습니다. 미성년 자녀가 있는 경우 자녀 1명당 2년 추가 연장이 가능합니다.
          상환 방식은 만기일시상환 또는 혼합상환(일부 분할·나머지 만기일시) 중 선택할 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jeonse-banks">
        <h2 id="guide-jeonse-banks" className="text-foreground text-xl font-semibold tracking-tight">
          신청 가능 은행
        </h2>
        <p>
          우리은행·신한은행·KB국민은행·NH농협은행·KEB하나은행·대구은행·부산은행
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 금리 및 한도는 신청 시점 기준으로 변동될 수 있습니다. 정확한 조건은 주택도시기금(
          <a
            href="https://www.myhome.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            rel="noopener noreferrer"
          >
            myhome.go.kr
          </a>
          )에서 확인할 것을 권장합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jeonse-mistakes">
        <h2 id="guide-jeonse-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          신청 전 자주 놓치는 점
        </h2>
        <p>
          기존 전세자금대출이나 주담대를 이용 중이면 버팀목 신규가 막힙니다. 계약 전에{" "}
          <Link href="/guide/jeonse-guarantee-insurance-guide" className="text-primary underline-offset-4 hover:underline">
            전세보증보험
          </Link>
          가입 가능 여부도 함께 봐야 합니다. 우대금리는 중복 적용되지만 최종 금리는 연 1.0% 아래로 내려가지 않으므로, “최저
          1.0%”만 보고 한도·기간을 간과하기 쉽습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            전세자금대출 이자 부담은 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
