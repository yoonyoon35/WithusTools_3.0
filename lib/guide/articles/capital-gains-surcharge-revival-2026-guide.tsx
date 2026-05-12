import Link from "next/link";

export const capitalGainsSurchargeRevival2026GuideMeta = {
  slug: "capital-gains-surcharge-revival-2026-guide",
  title: "부동산 양도세 중과 4년 만에 부활",
  description:
    "2026년 5월 기준 조정대상지역 다주택자 양도세 중과 유예 종료, 세율·장기보유특별공제·보완책·제외 대상·주택 수 산정·대응 전략을 표로 정리했습니다.",
  updated: "2026년 5월 9일",
} as const;

export function CapitalGainsSurchargeRevival2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-cgsr-intro">
        <h2 id="guide-cgsr-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 5월 기준
        </h2>
        <p>
          2026년 5월 9일을 끝으로 조정대상지역 다주택자에 대한 양도소득세 중과 유예 조치가 예정대로 종료됐습니다. 2022년 5월
          10일부터 시행된 유예 조치가 4년 만에 끝나면서, 2026년 5월 10일부터 다주택자의 조정대상지역 내 주택 양도에 중과세율이
          다시 적용됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgsr-timeline">
        <h2 id="guide-cgsr-timeline" className="text-foreground text-xl font-semibold tracking-tight">
          양도세 중과 유예 종료 경과
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              유예 조치 일정
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2022년 5월 10일
                </th>
                <td className="border-border border-b px-3 py-2.5">다주택자 양도세 중과 유예 시작</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2022년 ~ 2025년
                </th>
                <td className="border-border border-b px-3 py-2.5">매년 유예 기간 연장</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 2월 2일
                </th>
                <td className="border-border border-b px-3 py-2.5">정부 「유예 연장 없다」 공식 발표</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 2월 27일
                </th>
                <td className="border-border border-b px-3 py-2.5">시장 충격 완화를 위한 보완 입법 공포</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 5월 9일
                </th>
                <td className="border-border border-b px-3 py-2.5">유예 종료</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 5월 10일
                </th>
                <td className="px-3 py-2.5">중과세율 재시행</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgsr-rates">
        <h2 id="guide-cgsr-rates" className="text-foreground text-xl font-semibold tracking-tight">
          중과세율 적용 기준
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              조정대상지역·주택 수별 세율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유예 기간 중
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중과 재시행 후
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택자 (조정대상지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">기본세율 (6% ~ 45%)</td>
                <td className="border-border border-b px-3 py-2.5">기본세율 + 20%p</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3주택 이상 (조정대상지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">기본세율 (6% ~ 45%)</td>
                <td className="border-border border-b px-3 py-2.5">기본세율 + 30%p</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  비규제지역 다주택자
                </th>
                <td className="px-3 py-2.5">기본세율</td>
                <td className="px-3 py-2.5">기본세율 (중과 없음)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>지방소득세까지 합산하면 최고 실효세율은 82.5%에 달합니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgsr-ltc">
        <h2 id="guide-cgsr-ltc" className="text-foreground text-xl font-semibold tracking-tight">
          장기보유특별공제 배제
        </h2>
        <p>
          유예 기간 중에는 장기보유특별공제 적용이 가능했지만, 중과 재시행 후에는 조정대상지역 내 중과 대상 주택에
          장기보유특별공제가 배제됩니다. 보유 기간이 길수록 체감 세 부담 증가폭이 더 커집니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              장기보유특별공제 적용 여부
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유예 기간 중
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중과 재시행 후
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기보유특별공제
                </th>
                <td className="border-border border-b px-3 py-2.5">적용 가능</td>
                <td className="border-border border-b px-3 py-2.5">중과 대상 주택은 배제</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">조정대상지역 내 2주택자, 양도차익 3억 원 기준 비교</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              유예 vs 중과 재시행 (예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유예 기간 중
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중과 재시행 후
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 세율
                </th>
                <td className="border-border border-b px-3 py-2.5">38% (기본세율)</td>
                <td className="border-border border-b px-3 py-2.5">58% (기본세율 + 20%p)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기보유특별공제 (10년 보유)
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 30% 공제</td>
                <td className="border-border border-b px-3 py-2.5">배제</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  예상 세액
                </th>
                <td className="px-3 py-2.5">약 7,980만 원</td>
                <td className="px-3 py-2.5">약 1억 7,400만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cgsr-contract">
        <h2 id="guide-cgsr-contract" className="text-foreground text-xl font-semibold tracking-tight">
          보완책: 계약금 지급 확인 시 중과 배제
        </h2>
        <p>
          정부는 시장 충격 완화를 위한 보완책을 마련했습니다. 조정대상지역 내 다주택자가 2026년 5월 9일까지 매매계약을 체결하고
          계약금 지급이 객관적 증빙으로 확인되면 잔금일이 이후라도 양도세 중과세를 적용하지 않습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cgsr-permit">
        <h2 id="guide-cgsr-permit" className="text-foreground text-xl font-semibold tracking-tight">
          토지거래허가구역 추가 완화
        </h2>
        <p>
          토지거래허가구역 내 주택은 5월 9일까지 허가 신청만 완료해도 중과 적용을 피할 수 있습니다. 강남 3구와 용산은 9월 9일,
          서울 21개 구와 경기 12개 지역은 11월 9일까지 실제 거래를 마무리하면 됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgsr-exclude">
        <h2 id="guide-cgsr-exclude" className="text-foreground text-xl font-semibold tracking-tight">
          중과 적용 제외 대상
        </h2>
        <p>모든 다주택자가 중과 대상은 아닙니다. 아래 경우에는 중과가 적용되지 않습니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              중과 비적용 사유
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제외 대상
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비규제지역 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">지역 무관 기본세율 적용</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  인구감소지역 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2026년 시행령 개정으로 인구감소·관심지역 주택은 중과 배제 및 주택 수 제외
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일시적 2주택
                </th>
                <td className="border-border border-b px-3 py-2.5">처분 기한 내 종전 주택 처분 시 중과 제외</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기임대사업자 등록 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">요건 충족 시 중과 배제</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  상속주택 (일정 요건)
                </th>
                <td className="px-3 py-2.5">상속 후 일정 기간 내 처분 시</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgsr-count">
        <h2 id="guide-cgsr-count" className="text-foreground text-xl font-semibold tracking-tight">
          주택 수 산정 시 주의사항
        </h2>
        <p>
          양도소득세 중과 기준 주택 수 판단 시 조합원 입주권과 분양권도 주택 수에 포함해야 합니다. 주거용 오피스텔도 실제 주거
          용도로 사용 중이라면 주택 수에 포함됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 수 포함·제외 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수 포함 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수 제외 항목
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">아파트·빌라·단독주택</td>
                <td className="border-border border-b px-3 py-2.5">업무용 오피스텔</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">조합원 입주권</td>
                <td className="border-border border-b px-3 py-2.5">인구감소지역 주택 (2026년 개정)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">2021년 이후 취득 분양권</td>
                <td className="border-border border-b px-3 py-2.5">장기임대사업자 등록 주택 (요건 충족 시)</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">주거용 오피스텔</td>
                <td className="px-3 py-2.5">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cgsr-market">
        <h2 id="guide-cgsr-market" className="text-foreground text-xl font-semibold tracking-tight">
          중과 재시행에 따른 시장 반응
        </h2>
        <p>
          유예 마감 전날인 5월 9일, 서울 곳곳의 구청에는 토지거래허가 신청을 마치려는 다주택자와 공인중개사들이 이른 아침부터 줄을
          섰습니다. 강남구청의 토지거래허가 신청 건수는 2월 135건에서 4월 507건으로 275% 급증했으며, 5월 1일부터 8일 사이에만 198건이
          추가 접수됐습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgsr-strategy">
        <h2 id="guide-cgsr-strategy" className="text-foreground text-xl font-semibold tracking-tight">
          다주택자의 현실적인 대응 전략
        </h2>
        <p>중과 재시행 이후 다주택자가 취할 수 있는 주요 전략입니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대응 전략 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  전략
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비규제지역 주택 우선 매도
                </th>
                <td className="border-border border-b px-3 py-2.5">기본세율만 적용되므로 세 부담 최소화</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  인구감소지역 주택 활용
                </th>
                <td className="border-border border-b px-3 py-2.5">중과 배제 및 주택 수 제외 혜택</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분할 양도
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  여러 채를 동일 연도에 양도하면 누진세율이 높아지므로 여러 과세연도에 걸쳐 분산 양도하면 세율을 낮출 수 있음
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기임대사업자 등록
                </th>
                <td className="border-border border-b px-3 py-2.5">요건 충족 시 중과 배제 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  세무사 상담
                </th>
                <td className="px-3 py-2.5">보유 주택 구성에 따라 최적 매도 순서 결정</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgsr-structure">
        <h2 id="guide-cgsr-structure" className="text-foreground text-xl font-semibold tracking-tight">
          양도소득세 기본 구조 (참고)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보유 기간별 기본세율·중과
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보유 기간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기본세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  2주택 중과
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  3주택 이상 중과
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1년 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">해당 없음 (단기 보유세율 적용)</td>
                <td className="border-border border-b px-3 py-2.5">해당 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1년 이상 2년 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">60%</td>
                <td className="border-border border-b px-3 py-2.5">해당 없음</td>
                <td className="border-border border-b px-3 py-2.5">해당 없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  2년 이상
                </th>
                <td className="px-3 py-2.5">6% ~ 45% (누진)</td>
                <td className="px-3 py-2.5">기본세율 + 20%p</td>
                <td className="px-3 py-2.5">기본세율 + 30%p</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 양도소득세는 보유 기간·주택 수·지역·소득 수준에 따라 세액이 크게 달라집니다. 정확한 세액 계산은 국세청
          홈택스(hometax.go.kr) 또는 세무사 상담을 통해 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 취득세 비용은 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
