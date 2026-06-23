import Link from "next/link";

export const temporaryTwoHomeAcquisitionTaxExceptionGuideMeta = {
  slug: "temporary-two-home-acquisition-tax-exception-guide",
  title: "일시적 2주택 취득세 중과 예외 조건",
  description:
    "2026년 4월 기준 일시적 2주택 특례 핵심 조건, 3년 처분 기한, 일반·중과 세액 차이, 비인정 사유와 취득 전 체크리스트를 표로 정리했습니다.",
  updated: "2026년 4월 23일",
} as const;

export function TemporaryTwoHomeAcquisitionTaxExceptionGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-t2h-overview">
        <h2 id="guide-t2h-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          1주택자가 이사·학업·취업 등으로 새 주택을 취득해 일시적으로 2주택이 된 경우, 종전 주택을 일정 기간 내 처분하면 취득세
          중과(8%)가 아닌 1주택 일반세율(1~3%)이 적용됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-core">
        <h2 id="guide-t2h-core" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택 취득세 핵심 조건
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              특례 적용 요건 요약
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
                  대상
                </th>
                <td className="border-border border-b px-3 py-2.5">1주택 보유 세대가 신규 주택 취득으로 2주택이 된 경우</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  처분 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">종전 주택(기존 보유 주택)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  처분 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">신규 주택 취득일로부터 3년 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  혜택
                </th>
                <td className="border-border border-b px-3 py-2.5">신규 주택에 1주택 일반세율(1~3%) 적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  미처분 시
                </th>
                <td className="px-3 py-2.5">중과세율(8%)과의 차액 추징 + 가산세</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-three-year">
        <h2 id="guide-t2h-three-year" className="text-foreground text-xl font-semibold tracking-tight">
          처분 기한 3년 적용 기준
        </h2>
        <p>
          종전 주택과 신규 주택 모두 조정대상지역에 있는 경우에도 처분 기한이 3년으로 통일되어 적용됩니다. 2023년 2월 시행령 개정으로
          조정대상지역 여부에 관계없이 3년으로 처분 기한이 단일화됐습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지역 조합별 처분 기한
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  처분 기한
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종전·신규 주택 모두 조정대상지역
                </th>
                <td className="border-border border-b px-3 py-2.5">3년</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종전 주택 비조정·신규 주택 조정
                </th>
                <td className="border-border border-b px-3 py-2.5">3년</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  종전·신규 주택 모두 비조정대상지역
                </th>
                <td className="px-3 py-2.5">3년</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-example">
        <h2 id="guide-t2h-example" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택 취득세 계산 예시
        </h2>
        <p className="text-muted-foreground text-sm">조정대상지역 신규 주택 매매가 7억 원 취득, 전용 85㎡ 이하·농특세 제외(취득세 계산기 기준)</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              일반세율 vs 중과세율 납부액 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일시적 2주택 요건 충족 시(일반세율)
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1.67%</td>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일시적 2주택 요건 미충족 시(중과세율)
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
                <td className="border-border border-b px-3 py-2.5">약 5,880만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  차이
                </th>
                <td className="px-3 py-2.5">—</td>
                <td className="px-3 py-2.5">약 4,596만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>종전 주택 처분 기한을 지키지 못하면 수천만 원의 추징세가 발생합니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-t2h-recapture">
        <h2 id="guide-t2h-recapture" className="text-foreground text-xl font-semibold tracking-tight">
          처분 기한 내 미처분 시 추징 방식
        </h2>
        <p>
          일시적 2주택 특례를 적용받아 일반세율로 신고·납부했더라도, 기한 내 종전 주택을 처분하지 못하면 차액이 추징됩니다.
        </p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 text-sm leading-relaxed">
          추징액 = 중과세율(8%) 기준 세액 − 납부한 일반세율 세액 + 가산세
        </p>
        <p>가산세는 당초 신고납부 기한 다음날부터 추징일까지 1일 0.022%씩 부과됩니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-t2h-start-date">
        <h2 id="guide-t2h-start-date" className="text-foreground text-xl font-semibold tracking-tight">
          처분 기한 기산점 주의사항
        </h2>
        <p>
          처분 기한은 신규 주택 취득일(잔금 지급일과 등기 접수일 중 빠른 날)부터 기산합니다. 매매계약일이 아닌 잔금일 기준이므로
          정확한 날짜 계산이 필요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-not-applicable">
        <h2 id="guide-t2h-not-applicable" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택으로 인정되지 않는 경우
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              특례 비적용 사례
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이유
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  투자·임대 목적 추가 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">이사·학업·취업 등 실수요 사유 아님</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기존 2주택자의 신규 주택 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">1주택 → 2주택 전환이 아님</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  처분 기한(3년) 경과 후 종전 주택 보유
                </th>
                <td className="border-border border-b px-3 py-2.5">기한 내 처분 요건 미충족</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  법인 명의 취득
                </th>
                <td className="px-3 py-2.5">법인은 일시적 2주택 특례 미적용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-t2h-rights">
        <h2 id="guide-t2h-rights" className="text-foreground text-xl font-semibold tracking-tight">
          분양권·입주권 보유자의 일시적 2주택
        </h2>
        <p>
          분양권·입주권도 2020년 8월 12일 이후 취득분부터 지방세법상 주택 수에 포함됩니다. 분양권을 보유한 상태에서 기존 주택을
          추가 취득하거나, 기존 주택 보유자가 분양권을 취득하는 경우도 일시적 2주택 특례 적용 여부를 사전에 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-checklist">
        <h2 id="guide-t2h-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          신규 주택 취득 전 확인 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득 전 점검 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  현재 세대 기준 보유 주택 수 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  배우자·동일 세대원 보유 주택 포함 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양권·입주권 주택 수 포함 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신규 주택 조정대상지역 여부 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종전 주택 처분 가능 시기 사전 계획
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  처분 기한 3년 계산(잔금일 기준)
                </th>
                <td className="px-3 py-2.5">□</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-t2h-filing">
        <h2 id="guide-t2h-filing" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택 취득세 납부 방법
        </h2>
        <p>
          일시적 2주택 특례를 적용받으려면 신규 주택 취득 시 취득세 신고 때 일반세율로 신고하면 됩니다. 별도 신청 서류는 없으나,
          이후 종전 주택 처분을 기한 내 완료하지 못하면 자진 신고·납부 또는 추징 통보를 받게 됩니다.
        </p>
        <p>
          이미 중과세율(8%)로 납부한 경우, 이후 기한 내 종전 주택을 처분했다면 경정청구를 통해 차액 환급을 받을 수 있습니다.
          경정청구 기한은 납부일로부터 5년 이내입니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 일시적 2주택 처분 기한과 조건은 지방세법 시행령에 따르며 정부 정책에 따라 변동될 수 있습니다. 정확한 적용 기준은 관할
          시·군·구청 세무과 또는 위택스(wetax.go.kr)에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            매매가에 따른 일반세율과 중과세율 차이는 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
