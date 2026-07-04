import Link from "next/link";

export const newbornSpecialLoan2026GuideMeta = {
  slug: "newborn-special-loan-2026-guide",
  title: "신생아 특례 대출 조건 정리",
  description:
    "2026년 기준 신생아 특례 디딤돌·버팀목 대출 자격·소득·한도·금리, 맞벌이 2억·대환·청년·신혼과 비교, 신청 전 체크리스트를 표로 정리했습니다.",
  updated: "2026년 7월 3일",
} as const;

export function NewbornSpecialLoan2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-nsl-overview">
        <h2 id="guide-nsl-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          신생아 특례 대출은 출산 가구의 주거비 부담을 줄이기 위해 주택도시기금이 운영하는{" "}
          <strong>디딤돌대출(구입)</strong>과 <strong>버팀목 전세자금대출(전세)</strong>의 특례 유형입니다. 일반
          디딤돌·버팀목보다 <strong>소득·주택 가격·대출 한도</strong>가 넓고, 일정 기간{" "}
          <strong>특례금리</strong>가 적용됩니다.
        </p>
        <p>
          2023년 1월 1일 이후 출생(입양 포함) 아이를 둔 무주택 세대주가 주요 대상이며, 혼인 여부와 관계없이 신청할 수
          있습니다. 다만 <strong>대출 접수일 기준 2년 이내 출산</strong> 요건을 충족해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nsl-two-products">
        <h2 id="guide-nsl-two-products" className="text-foreground text-xl font-semibold tracking-tight">
          디딤돌 vs 버팀목 — 무엇이 다른가
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신생아 특례 두 상품 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신생아 특례 디딤돌
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신생아 특례 버팀목
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  용도
                </th>
                <td className="border-border border-b px-3 py-2.5">주택 구입·대환</td>
                <td className="border-border border-b px-3 py-2.5">전세 보증금</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신규 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">무주택 세대주</td>
                <td className="border-border border-b px-3 py-2.5">무주택 세대주</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  순자산 기준(2026년)
                </th>
                <td className="border-border border-b px-3 py-2.5">5억 1,100만 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">3억 4,500만 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 4억 원</td>
                <td className="border-border border-b px-3 py-2.5">최대 2억 4,000만 원(보증금 80% 이내)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  특례금리 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">기본 5년(추가 출산 시 최장 15년)</td>
                <td className="border-border border-b px-3 py-2.5">기본 4년(추가 출산 시 최장 12년)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  금리 범위(고시)
                </th>
                <td className="px-3 py-2.5">연 1.8% ~ 4.5% 구간</td>
                <td className="px-3 py-2.5">연 1.3% ~ 4.3% 구간</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 소득 요건(부부합산 1.3억 원·맞벌이 2억 원)은 두 상품 공통입니다. 금리·한도는 주택도시기금 고시와 수탁은행
          심사에 따릅니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nsl-eligibility">
        <h2 id="guide-nsl-eligibility" className="text-foreground text-xl font-semibold tracking-tight">
          공통 자격 요건
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신생아 특례 공통 기준
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
                  출산 요건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2023.1.1 이후 출생(입양) 아, <strong>대출 접수일 기준 2년 이내</strong> 출산
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 보유
                </th>
                <td className="border-border border-b px-3 py-2.5">무주택 세대주(신규 대출)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연소득(외벌이·미혼)
                </th>
                <td className="border-border border-b px-3 py-2.5">부부합산 1억 3,000만 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연소득(맞벌이)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  부부합산 2억 원 이하, <strong>각 1인 1.3억 원 이하</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  혼인 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">무관(가족관계증명서상 부모 합산 소득 심사)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  중복 대출
                </th>
                <td className="px-3 py-2.5">기존 기금 전세·주담대 이용 중이면 신규 불가(대환은 별도)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          임신 중에는 출생신고 전이라 신생아 특례 접수가 어렵습니다. 집 계약이 급하면{" "}
          <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary underline-offset-4 hover:underline">
            일반 디딤돌·신혼 디딤돌
          </Link>
          로 먼저 실행한 뒤, 출산 후 대환을 검토하는 경우가 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nsl-didimdol">
        <h2 id="guide-nsl-didimdol" className="text-foreground text-xl font-semibold tracking-tight">
          ① 신생아 특례 디딤돌 — 구입·대환
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              디딤돌 신생아 특례 핵심
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
                  대상 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">평가액 9억 원 이하, 전용 85㎡ 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 4억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  70%(생애최초 80%, 수도권·규제지역은 70%)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  DTI
                </th>
                <td className="border-border border-b px-3 py-2.5">60% 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상환 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">10·15·20·30년(거치 1년 또는 비거치)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  대환대출
                </th>
                <td className="px-3 py-2.5">
                  1주택 세대, 기존 주담대 잔액 범위 내 갈아타기 가능. 소득은 부부합산 1.3억 원 이하만(맞벌이 2억
                  미적용)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          LTV·한도와 별도로 은행권{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 40%
          </Link>
          이 적용되므로, 소득이 충분해도 실제 실행액이 한도보다 줄어들 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nsl-didimdol-rate">
        <h2 id="guide-nsl-didimdol-rate" className="text-foreground text-xl font-semibold tracking-tight">
          디딤돌 특례금리(참고)
        </h2>
        <p className="text-muted-foreground text-sm">
          소득·대출 기간에 따라 차등 적용됩니다. 특례금리는 기본 5년, 이후 일반 디딤돌 금리 등으로 전환될 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              부부합산 연소득별 금리 예시(30년 만기)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연소득
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 금리(참고)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2,000만 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">연 1.8%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8,500만 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">연 2.15% ~ 3.3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1.3억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">연 3.0% ~ 3.8%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  맞벌이 2억 원 이하
                </th>
                <td className="px-3 py-2.5">연 3.6% ~ 4.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nsl-botimmok">
        <h2 id="guide-nsl-botimmok" className="text-foreground text-xl font-semibold tracking-tight">
          ② 신생아 특례 버팀목 — 전세
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              버팀목 신생아 특례 핵심
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
                  대상 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">전용 85㎡ 이하, 임차보증금 지역별 상한 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증금 상한(참고)
                </th>
                <td className="border-border border-b px-3 py-2.5">수도권 3억, 광역시 2.5억, 그 외 2억 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  임차보증금의 80% 이내, 호당 최대 2억 4,000만 원
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">2년(미성년 자녀 1명당 2년 연장, 최장 12년)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상환 방식
                </th>
                <td className="border-border border-b px-3 py-2.5">만기일시상환 또는 혼합상환</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실거주
                </th>
                <td className="px-3 py-2.5">대출 후 1개월 내 전입·1년 이상 실거주 의무</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          일반 버팀목(수도권 한도 1.2억·소득 5,000만 원)보다 한도·소득 기준이 넓습니다. 상세 비교는{" "}
          <Link href="/guide/jeonse-loan-types-comparison" className="text-primary underline-offset-4 hover:underline">
            전세자금대출 종류 비교
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nsl-compare-regular">
        <h2 id="guide-nsl-compare-regular" className="text-foreground text-xl font-semibold tracking-tight">
          일반 디딤돌·버팀목과 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신생아 특례 vs 일반(디딤돌·버팀목)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 디딤돌
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신생아 특례 디딤돌
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연소득
                </th>
                <td className="border-border border-b px-3 py-2.5">6,000만 원 이하(생애최초 7,000만)</td>
                <td className="border-border border-b px-3 py-2.5">1.3억(맞벌이 2억)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 가격
                </th>
                <td className="border-border border-b px-3 py-2.5">5억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">9억 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">2억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">4억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  출산 요건
                </th>
                <td className="px-3 py-2.5">없음</td>
                <td className="px-3 py-2.5">2년 내 출산 필수</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nsl-scenario">
        <h2 id="guide-nsl-scenario" className="text-foreground text-xl font-semibold tracking-tight">
          상황별 시나리오
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-foreground text-base font-semibold">
              맞벌이, 연소득 1.5억, 매매 7억, 생애최초
            </h3>
            <p>
              일반 디딤돌은 소득·주택가(5억) 한도를 넘어 불가합니다. 신생아 특례 디딤돌은 소득·9억 이하 주택 요건을
              충족하면 LTV 80%(규제지역 70%)·한도 4억 원까지 검토할 수 있습니다. 실제 실행액은{" "}
              <Link href="/guide/dsr-40-mortgage-limit" className="text-primary underline-offset-4 hover:underline">
                DSR 40%
              </Link>
              과 기존 대출에 따라 달라집니다.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground text-base font-semibold">수도권 전세 2억 8천, 출산 1년 차</h3>
            <p>
              보증금 80%인 2억 2,400만 원까지 대출 가능(한도 2.4억 이내). 청년 버팀목(한도 2억)보다 4,000만 원 넓고,
              소득 1.3억(맞벌이 2억)까지 허용됩니다.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground text-base font-semibold">기존 시중은행 주담대 3억, 금리 4%대</h3>
            <p>
              1주택 세대라면 신생아 특례 <strong>대환</strong> 검토 가능. 잔액 범위 내 갈아타기이며, 대환은 부부합산
              1.3억 원 이하만 해당됩니다(맞벌이 2억 기준 미적용). 추가 자금 조달은 불가합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nsl-preferential">
        <h2 id="guide-nsl-preferential" className="text-foreground text-xl font-semibold tracking-tight">
          우대금리·특례 기간 연장
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>추가 출산</strong> — 자녀 1명당 특례금리 기간 연장(디딤돌 5년·버팀목 4년) 및 금리 우대
          </li>
          <li>
            <strong>청약통장</strong> — 가입 기간·납입에 따라 0.3~0.5%p 인하(상품별 상이)
          </li>
          <li>
            <strong>부동산 전자계약</strong> — 0.1%p 인하(기한 있음)
          </li>
          <li>
            <strong>다자녀</strong> — 버팀목 일반 유형 기준 0.7%p 등(신생아 특례와 중복 여부는 은행 확인)
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          ※ 우대 적용 후에도 버팀목 등 최저금리 하한(연 1.0% 등)이 있을 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nsl-docs">
        <h2 id="guide-nsl-docs" className="text-foreground text-xl font-semibold tracking-tight">
          신청 절차·준비 서류
        </h2>
        <p>
          <strong>기금e든든</strong> 앱·홈페이지 또는 수탁은행(우리·국민·농협·신한·하나 등)에서 신청합니다. 잔금(전입)
          일정에 맞춰 <strong>대출 확약·실행</strong> 일정을 잡아야 합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주요 준비 서류(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  서류
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공통
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  신분증, 주민등록등본, 가족관계·혼인관계증명, 소득금액증명원, 건강보험 자격득실
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신생아 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">출생신고 접수증·등본(출생일·부모 확인)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  디딤돌(구입)
                </th>
                <td className="border-border border-b px-3 py-2.5">매매계약서, 등기·감정평가, 자금조달계획서</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  버팀목(전세)
                </th>
                <td className="px-3 py-2.5">임대차계약서, 확정일자, 임차보증금 지급 증빙, 전입 예정 확인</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-nsl-mistakes">
        <h2 id="guide-nsl-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          신청 전 자주 놓치는 점
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「2세 이하」가 아니라 「접수일 기준 2년 내 출산」</strong> — 나이가 아니라 출산 시점 기준입니다.
          </li>
          <li>
            <strong>태아·임신 중 신청 불가</strong> — 출생신고 후에 접수합니다.
          </li>
          <li>
            <strong>순자산에 임차보증금·주식 포함</strong> — 구입 5.11억·전세 3.45억 기준을 초과하면 탈락합니다.
          </li>
          <li>
            <strong>대환은 소득 1.3억만</strong> — 맞벌이 2억 기준이 대환에는 적용되지 않을 수 있습니다.
          </li>
          <li>
            <strong>특례금리 기간 종료 후</strong> — 4~5년 뒤 금리가 올라가므로 상환 계획을 함께 봐야 합니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nsl-checklist">
        <h2 id="guide-nsl-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          신청 전 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              체크리스트
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
                  2023.1.1 이후 출생·접수일 2년 이내
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  무주택 세대주(신규) 또는 대환 요건
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  소득 1.3억(맞벌이 2억·각 1.3억 이하)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  순자산·주택가·보증금 상한
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  DSR·DTI·기존 기금대출 중복 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  출생신고·소득·자산 증빙 준비
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 자격·금리·한도는 주택도시기금 고시와 수탁은행 심사에 따릅니다. 최신 내용은{" "}
          <a
            href="https://www.myhome.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            마이홈포털(myhome.go.kr)
          </a>
          ·{" "}
          <a
            href="https://nhuf.molit.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            주택도시기금(nhuf.molit.go.kr)
          </a>
          에서 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link href="/guide/jeonse-loan-types-comparison" className="text-primary font-medium underline-offset-4 hover:underline">
            → 버팀목 유형별 비교는 전세자금대출 종류 가이드에서 볼 수 있습니다.
          </Link>
        </p>
        <p>
          <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary font-medium underline-offset-4 hover:underline">
            → 주택 구입 정책대출은 보금자리론 vs 디딤돌 가이드도 함께 참고하세요.
          </Link>
        </p>
        <p>
          <Link href="/guide/first-time-homebuyer-benefits-2026" className="text-primary font-medium underline-offset-4 hover:underline">
            → 생애최초 LTV·취득세 혜택은 생애최초 주택 구입자 가이드에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
