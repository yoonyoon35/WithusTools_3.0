import Link from "next/link";

export const jeonseGuaranteeInsuranceGuideMeta = {
  slug: "jeonse-guarantee-insurance-guide",
  title: "전세보증보험 가입 방법과 필요성",
  description:
    "2026년 4월 기준 전세보증보험의 필요성, 기관별 비교, 보증료 계산, 가입 요건·절차·거절 사유와 계약 전 체크포인트를 표로 정리했습니다.",
  updated: "2026년 4월 20일",
} as const;

export function JeonseGuaranteeInsuranceGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-jeonse-overview">
        <h2 id="guide-jeonse-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          전세보증보험(전세보증금반환보증)은 전세 계약 종료 후 집주인이 보증금을 돌려주지 않을 때 보증기관이 세입자에게 먼저 보증금을
          지급하고, 이후 집주인에게 구상권을 행사하는 제도입니다. 전세사기와 깡통전세 피해가 급증하면서 전세보증보험은 사실상 필수
          가입 항목이 됐습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-org-compare">
        <h2 id="guide-jeonse-org-compare" className="text-foreground text-xl font-semibold tracking-tight">
          가입 기관 3곳 기본 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              HUG·HF·SGI 기본 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  HUG(주택도시보증공사)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  HF(한국주택금융공사)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  SGI(서울보증보험)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  성격
                </th>
                <td className="border-border border-b px-3 py-2.5">공공</td>
                <td className="border-border border-b px-3 py-2.5">공공</td>
                <td className="border-border border-b px-3 py-2.5">민간</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">수도권 7억 원, 비수도권 5억 원</td>
                <td className="border-border border-b px-3 py-2.5">수도권 7억 원, 비수도권 5억 원</td>
                <td className="border-border border-b px-3 py-2.5">아파트 한도 없음, 기타 10억 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증료율
                </th>
                <td className="border-border border-b px-3 py-2.5">연 0.115% ~ 0.154%</td>
                <td className="border-border border-b px-3 py-2.5">연 최대 0.04%</td>
                <td className="border-border border-b px-3 py-2.5">연 0.183% ~ 0.208%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  가입 조건
                </th>
                <td className="border-border border-b px-3 py-2.5">비교적 넓음</td>
                <td className="border-border border-b px-3 py-2.5">HF 전세자금대출 이용자만 가능</td>
                <td className="border-border border-b px-3 py-2.5">가장 넓음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  특이사항
                </th>
                <td className="px-3 py-2.5">취약계층 보증료 할인</td>
                <td className="px-3 py-2.5">보증료 가장 저렴</td>
                <td className="px-3 py-2.5">고액 아파트 유리</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-fee">
        <h2 id="guide-jeonse-fee" className="text-foreground text-xl font-semibold tracking-tight">
          보증료 계산 방식
        </h2>
        <p>보증료 = 보증금액 × 보증료율 × 전세계약기간(일수) ÷ 365</p>
        <p className="text-muted-foreground text-sm">전세보증금 3억 원, 2년(730일) 계약 기준 기관별 보증료 비교</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              기관별 보증료율·납부 보증료(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기관
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보증료율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부 보증료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  HF
                </th>
                <td className="border-border border-b px-3 py-2.5">연 0.04%</td>
                <td className="border-border border-b px-3 py-2.5">약 24만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  HUG
                </th>
                <td className="border-border border-b px-3 py-2.5">연 0.115%</td>
                <td className="border-border border-b px-3 py-2.5">약 69만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  SGI
                </th>
                <td className="px-3 py-2.5">연 0.183%</td>
                <td className="px-3 py-2.5">약 110만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          HUG는 연소득 5,000만 원 이하 사회초년생에게 60% 할인, 혼인 7년 이내 신혼부부(연소득 6,000만 원 이하)에게 40% 할인 혜택을
          제공합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-common-req">
        <h2 id="guide-jeonse-common-req" className="text-foreground text-xl font-semibold tracking-tight">
          공통 가입 요건
        </h2>
        <p>
          세 기관 모두 임대차계약서에 확정일자를 받아야 하며, 계약기간이 1년 이상인 전세계약이어야 합니다. 가입 기한은 전세계약
          기간의 절반이 지나기 전까지로, 2년 계약이라면 1년이 지나기 전에 반드시 가입해야 합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전세보증보험 공통 요건
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공통 요건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  확정일자
                </th>
                <td className="border-border border-b px-3 py-2.5">주민센터·법원·전자계약 통해 부여</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전입신고
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 주택에 전입신고 완료</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">1년 이상 전세계약</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  가입 시한
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 기간의 1/2 경과 전</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  집주인 동의
                </th>
                <td className="px-3 py-2.5">불필요(가입 후 집주인에게 자동 통보)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jeonse-ltv">
        <h2 id="guide-jeonse-ltv" className="text-foreground text-xl font-semibold tracking-tight">
          LTV 조건(깡통전세 방지 기준)
        </h2>
        <p>
          2023년 이후 깡통전세 방지 목적의 LTV 제한으로, 보통 (전세금 + 선순위채권) ≤ 주택가격 × 90% 조건을 충족해야 합니다.
          단독·다가구 등 일부 유형은 선순위채권 기준이 더 엄격할 수 있어 계약 전 반드시 확인이 필요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-pick">
        <h2 id="guide-jeonse-pick" className="text-foreground text-xl font-semibold tracking-tight">
          기관 선택 기준
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상황별 추천 기관
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  추천 기관
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  처음 가입하고 일반적인 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">HUG</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  HF 전세자금대출 이용 중
                </th>
                <td className="border-border border-b px-3 py-2.5">HF(보증료 가장 저렴)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신혼부부·다자녀·사회초년생
                </th>
                <td className="border-border border-b px-3 py-2.5">HUG(보증료 할인)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  고액 아파트(보증금 7억 원 초과)
                </th>
                <td className="border-border border-b px-3 py-2.5">SGI</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  빌라·오피스텔 등 비아파트
                </th>
                <td className="px-3 py-2.5">HUG 또는 SGI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-steps">
        <h2 id="guide-jeonse-steps" className="text-foreground text-xl font-semibold tracking-tight">
          가입 절차
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전세보증보험 가입 단계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1단계
                </th>
                <td className="border-border border-b px-3 py-2.5">전세계약 체결 후 전입신고 및 확정일자 취득</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2단계
                </th>
                <td className="border-border border-b px-3 py-2.5">각 기관 앱·홈페이지 또는 영업점에서 신청</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3단계
                </th>
                <td className="border-border border-b px-3 py-2.5">주택 심사(등기부등본·건축물대장 확인)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4단계
                </th>
                <td className="border-border border-b px-3 py-2.5">보증료 납부</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5단계
                </th>
                <td className="px-3 py-2.5">보증서 발급</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jeonse-reject">
        <h2 id="guide-jeonse-reject" className="text-foreground text-xl font-semibold tracking-tight">
          가입이 거절되는 주요 사유
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주요 거절 사유와 내용
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  사유
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  LTV 초과
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  전세금 + 선순위채권이 주택가격의 90% 초과
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약 기간 절반 경과
                </th>
                <td className="border-border border-b px-3 py-2.5">가입 기한 초과</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  확정일자·전입신고 미완료
                </th>
                <td className="border-border border-b px-3 py-2.5">대항력 요건 미충족</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  집주인 세금 체납
                </th>
                <td className="border-border border-b px-3 py-2.5">국세·지방세 체납으로 압류 가능성</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  주택 등기부등본 이상
                </th>
                <td className="px-3 py-2.5">가압류·가처분·근저당 과다 설정</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jeonse-check">
        <h2 id="guide-jeonse-check" className="text-foreground text-xl font-semibold tracking-tight">
          계약 전 반드시 확인해야 할 사항
        </h2>
        <p>
          보증보험 가입 가능 여부는 계약 전에 미리 확인하는 것이 안전합니다. 계약 후 가입이 거절되면 보증금 보호 수단이 없어지므로,
          HUG 홈페이지에서 사전에 해당 주택의 가입 가능 여부를 조회할 수 있습니다.
        </p>
        <p>
          등기부등본에서 근저당 설정액과 선순위 임차인의 보증금 합계가 주택 시세의 90%를 넘지 않는지 직접 계산해보는 것이
          필수입니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 보증료율과 조건은 기관 정책에 따라 변동될 수 있습니다. 정확한 보증료는 HUG(hug.or.kr), HF(hf.go.kr), SGI(sgi.co.kr)
          홈페이지에서 확인할 것을 권장합니다.
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
