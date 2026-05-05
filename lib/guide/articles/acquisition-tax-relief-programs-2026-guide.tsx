import Link from "next/link";

export const acquisitionTaxReliefPrograms2026GuideMeta = {
  slug: "acquisition-tax-relief-programs-2026-guide",
  title: "취득세 세액공제·감면 제도 총정리",
  description:
    "2026년 4월 기준 생애최초·출산양육·인구감소지역·세컨드홈·미분양·일시적 2주택 특례와 신청·추징 유의사항을 표로 정리했습니다.",
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
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-compare">
        <h2 id="guide-atrp-compare" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 주택 취득세 감면 제도 한눈에 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2026년 감면 제도 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면 제도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면 한도
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
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">2028년 12월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 (인구감소지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">2028년 12월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  출산·양육 주택 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">2028년 12월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  세컨드홈 특례 (인구감소지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">중과 제외</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">별도 고시</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방 준공 후 미분양 아파트
                </th>
                <td className="border-border border-b px-3 py-2.5">50% 감면</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">2026년 12월 31일</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  일시적 2주택
                </th>
                <td className="px-3 py-2.5">중과 제외 (1~3% 적용)</td>
                <td className="px-3 py-2.5">없음</td>
                <td className="px-3 py-2.5">상시</td>
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
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-decline-region">
        <h2 id="guide-atrp-decline-region" className="text-foreground text-xl font-semibold tracking-tight">
          ③ 인구감소지역 생애최초 취득세 감면 확대
        </h2>
        <p>인구감소지역 내 생애최초 주택 구입 시 취득세 감면 한도가 기존 200만 원에서 300만 원으로 확대됐습니다.</p>
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
      </section>

      <section className="space-y-3" aria-labelledby="guide-atrp-second-home">
        <h2 id="guide-atrp-second-home" className="text-foreground text-xl font-semibold tracking-tight">
          ④ 세컨드홈 특례 (인구감소지역)
        </h2>
        <p>
          무주택자·1주택자가 비수도권 인구감소지역 주택을 추가로 취득하는 경우 다주택자 취득세 중과(8~12%)가 아닌 일반세율(1~3%)이
          적용됩니다. 특례 적용 가액 기준이 상향되고 적용 대상 지역도 인구감소관심지역까지 확대됐습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-atrp-unsold">
        <h2 id="guide-atrp-unsold" className="text-foreground text-xl font-semibold tracking-tight">
          ⑤ 지방 준공 후 미분양 아파트 취득세 감면
        </h2>
        <p>
          수도권 외 지역의 준공 후 미분양 아파트(전용 85㎡ 이하, 취득가액 6억 원 이하)를 개인이 취득하는 경우 취득세 최대 50%를
          감면받을 수 있으며, 다주택자 취득세 중과 대상에서도 제외됩니다. 적용 기한은 2026년 12월 31일까지입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-atrp-temp-two-home">
        <h2 id="guide-atrp-temp-two-home" className="text-foreground text-xl font-semibold tracking-tight">
          ⑥ 일시적 2주택 취득세 중과 예외
        </h2>
        <p>
          1주택자가 이사 등 사유로 신규 주택을 취득해 일시적으로 2주택이 된 경우, 종전 주택을 3년 이내 처분하면 1주택
          일반세율(1~3%)이 적용됩니다. 기한 내 처분하지 못하면 중과세율(8%)과의 차액이 추징됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-apply">
        <h2 id="guide-atrp-apply" className="text-foreground text-xl font-semibold tracking-tight">
          감면 제도별 신청 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              제도별 신청 시기·방법
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면 제도
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
                  생애최초 취득세 감면
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 납부 기한(60일) 이내</td>
                <td className="border-border border-b px-3 py-2.5">위택스 온라인 또는 관할 구청 방문</td>
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
                <td className="border-border border-b px-3 py-2.5">취득세 신고 시</td>
                <td className="border-border border-b px-3 py-2.5">위택스 또는 관할 구청</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  미분양 아파트 감면
                </th>
                <td className="px-3 py-2.5">취득세 신고 시</td>
                <td className="px-3 py-2.5">위택스 또는 관할 구청</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>모든 감면 제도는 자동 적용이 아니며 별도 신청이 필요합니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-overlap">
        <h2 id="guide-atrp-overlap" className="text-foreground text-xl font-semibold tracking-tight">
          감면 중복 적용 가능 여부
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              제도 조합별 중복 적용
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조합
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중복 적용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 + 출산·양육
                </th>
                <td className="border-border border-b px-3 py-2.5">❌ (출산·양육 감면으로 변경·차액 환급)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 + 세컨드홈 특례
                </th>
                <td className="border-border border-b px-3 py-2.5">❌ (세컨드홈은 추가 주택 취득 시 적용)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  출산·양육 + 세컨드홈 특례
                </th>
                <td className="px-3 py-2.5">별도 확인 필요</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-atrp-clawback">
        <h2 id="guide-atrp-clawback" className="text-foreground text-xl font-semibold tracking-tight">
          감면 후 추징 공통 주의사항
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              추징 사유별 적용 대상
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  추징 사유
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공통 적용 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3개월 이내 전입·상시 거주 미이행
                </th>
                <td className="border-border border-b px-3 py-2.5">생애최초·출산양육 공통</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3년 미만 매각·증여·임대
                </th>
                <td className="border-border border-b px-3 py-2.5">생애최초·출산양육 공통</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  취득일로부터 3개월 이내 1가구 1주택 미달성
                </th>
                <td className="px-3 py-2.5">생애최초 적용</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 감면 조건과 적용 기한은 지방세특례제한법에 따르며 정부 정책에 따라 변동될 수 있습니다. 정확한 조건은
          위택스(wetax.go.kr) 또는 행정안전부(mois.go.kr)에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 매매가에 따른 취득세와 감면 후 실납부액은 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
