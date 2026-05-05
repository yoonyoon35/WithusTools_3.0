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
          연장 적용됩니다.
        </p>
      </section>

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
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  취득 방법
                </th>
                <td className="px-3 py-2.5">유상취득 (매매)</td>
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
          취득세액이 200만 원 이하이면 전액 면제되고, 취득세액이 200만 원을 초과하면 200만 원만 공제됩니다.
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
                  일반 주택 (12억 원 이하)
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 최대 200만 원 감면</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  인구감소지역 소재 주택
                </th>
                <td className="px-3 py-2.5">취득세 최대 300만 원 감면 (2026년 이후 인구감소지역으로 축소 적용)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          지방교육세는 취득세 감면분에 연동되므로 취득세 200만 원 감면 시 지방교육세 20만 원도 추가 감면되어 실제 감면액은 최대
          220만 원입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhatr-by-price">
        <h2 id="guide-fhatr-by-price" className="text-foreground text-xl font-semibold tracking-tight">
          매매가별 감면 효과
        </h2>
        <p className="text-muted-foreground text-sm">무주택자 1주택 취득, 전용 85㎡ 이하 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매가별 감면 전·후 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세 (1%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실납부액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원 (전액)</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원 (전액)</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="px-3 py-2.5">약 1,167만 원</td>
                <td className="px-3 py-2.5">200만 원</td>
                <td className="px-3 py-2.5">약 967만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
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
          단, 위 예외에 해당하더라도 감면 대상 주택 취득일 전 또는 취득일로부터 3개월 이내에 처분한 경우에 한정합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-fhatr-joint">
        <h2 id="guide-fhatr-joint" className="text-foreground text-xl font-semibold tracking-tight">
          공동명의 취득 시 주의사항
        </h2>
        <p>
          공동명의로 취득하는 경우 감면 한도는 1인 기준이 아니라 주택 전체 기준으로 최대 200만 원입니다. 부부가 각각 200만 원씩
          받는 구조가 아닙니다. 부부 중 한쪽이라도 과거 주택 소유 이력이 있으면 감면 적용이 불가합니다.
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
                  위택스(wetax.go.kr) → 취득세 신고 → 감면사유 선택 → 생애최초 선택
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
                  발급처
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
                <td className="border-border border-b px-3 py-2.5">정부24</td>
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

      <section className="space-y-3" aria-labelledby="guide-fhatr-refund">
        <h2 id="guide-fhatr-refund" className="text-foreground text-xl font-semibold tracking-tight">
          이미 납부한 경우 환급 방법
        </h2>
        <p>
          감면 신청을 하지 않고 취득세를 납부한 경우에도 경정청구를 통해 환급받을 수 있습니다. 경정청구 기한은 취득세 납부일로부터
          5년 이내입니다. 위택스 온라인 또는 관할 구청 세무과에서 신청 가능합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 생애최초 취득세 감면 조건과 감면 기한은 지방세특례제한법에 따르며 정부 정책에 따라 변동될 수 있습니다. 정확한 적용
          조건은 위택스(wetax.go.kr) 또는 관할 시·군·구청 세무과에서 확인할 것을 권장합니다.
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
