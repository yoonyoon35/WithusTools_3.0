import Link from "next/link";

export const inheritedHousingAcquisitionTax2026GuideMeta = {
  slug: "inherited-housing-acquisition-tax-2026-guide",
  title: "상속 주택 취득세 계산 방법",
  description:
    "2026년 4월 기준 상속 취득세율·과세표준, 매매와의 비교, 공시가격별 예시·공유지분 계산, 주택 수 포함, 추가 취득 시 세율, 납부 기한·가산세, 신고 방법을 표로 정리했습니다.",
  updated: "2026년 5월 11일",
} as const;

export function InheritedHousingAcquisitionTax2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-inh-overview">
        <h2 id="guide-inh-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          상속으로 주택을 취득하는 경우 일반 매매와 다른 취득세율이 적용됩니다. 상속 취득세율은 2.8%가 기본이며, 과세표준은
          매매가(실거래가)가 아닌 시가표준액(공시가격)을 기준으로 산정합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-inh-base">
        <h2 id="guide-inh-base" className="text-foreground text-xl font-semibold tracking-tight">
          상속 취득세 기본 구조
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상속 주택 취득세 요약
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
                  취득세율
                </th>
                <td className="border-border border-b px-3 py-2.5">2.8%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">시가표준액(공시가격)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%(0.28%)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  농어촌특별세
                </th>
                <td className="border-border border-b px-3 py-2.5">0.2%(전용 85㎡ 초과 시)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  납부 기한
                </th>
                <td className="px-3 py-2.5">상속 개시일이 속하는 달의 말일로부터 6개월 이내</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-inh-compare">
        <h2 id="guide-inh-compare" className="text-foreground text-xl font-semibold tracking-tight">
          매매 취득세와 상속 취득세 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매·상속 취득 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매 취득
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상속 취득
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세율
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 12%</td>
                <td className="border-border border-b px-3 py-2.5">2.8%(고정)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">실거래가</td>
                <td className="border-border border-b px-3 py-2.5">시가표준액(공시가격)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 수 영향
                </th>
                <td className="border-border border-b px-3 py-2.5">중과 적용</td>
                <td className="border-border border-b px-3 py-2.5">중과 미적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  납부 기한
                </th>
                <td className="px-3 py-2.5">잔금일로부터 60일</td>
                <td className="px-3 py-2.5">상속 개시일이 속한 달 말일로부터 6개월</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-inh-formula">
        <h2 id="guide-inh-formula" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 계산식
        </h2>
        <div className="space-y-2">
          <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
            취득세 = 시가표준액(공시가격) × 2.8%
          </p>
          <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
            지방교육세 = 취득세 × 10%
          </p>
          <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
            농어촌특별세 = 시가표준액 × 0.2%(전용 85㎡ 초과 시)
          </p>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-inh-examples">
        <h2 id="guide-inh-examples" className="text-foreground text-xl font-semibold tracking-tight">
          공시가격별 상속 취득세 예시
        </h2>
        <p className="text-muted-foreground text-sm">전용 85㎡ 이하 기준(농특세 제외)</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공시가격별 취득세·지방교육세 합계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세(2.8%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">280만 원</td>
                <td className="border-border border-b px-3 py-2.5">28만 원</td>
                <td className="border-border border-b px-3 py-2.5">308만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">560만 원</td>
                <td className="border-border border-b px-3 py-2.5">56만 원</td>
                <td className="border-border border-b px-3 py-2.5">616만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">840만 원</td>
                <td className="border-border border-b px-3 py-2.5">84만 원</td>
                <td className="border-border border-b px-3 py-2.5">924만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1,400만 원</td>
                <td className="border-border border-b px-3 py-2.5">140만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,540만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1,960만 원</td>
                <td className="border-border border-b px-3 py-2.5">196만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,156만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">2,800만 원</td>
                <td className="px-3 py-2.5">280만 원</td>
                <td className="px-3 py-2.5">3,080만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          공시가격은 국토교통부 공동주택공시가격 시스템(
          <a
            href="https://www.realtyprice.kr"
            className="text-primary font-medium underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            realtyprice.kr
          </a>
          )에서 조회할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-inh-share">
        <h2 id="guide-inh-share" className="text-foreground text-xl font-semibold tracking-tight">
          공유 지분 상속 시 취득세 계산
        </h2>
        <p>
          여러 상속인이 주택을 공유로 상속받는 경우 각 상속인이 취득하는 지분에 해당하는 세액을 각각 납부합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          공시가격 6억 원 주택을 배우자 50%, 자녀 2명 각 25% 지분으로 상속받는 경우
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지분별 과세표준·세액
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상속인
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  배우자
                </th>
                <td className="border-border border-b px-3 py-2.5">50%</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
                <td className="border-border border-b px-3 py-2.5">840만 원</td>
                <td className="border-border border-b px-3 py-2.5">84만 원</td>
                <td className="border-border border-b px-3 py-2.5">924만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자녀 1
                </th>
                <td className="border-border border-b px-3 py-2.5">25%</td>
                <td className="border-border border-b px-3 py-2.5">1억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">420만 원</td>
                <td className="border-border border-b px-3 py-2.5">42만 원</td>
                <td className="border-border border-b px-3 py-2.5">462만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자녀 2
                </th>
                <td className="border-border border-b px-3 py-2.5">25%</td>
                <td className="border-border border-b px-3 py-2.5">1억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">420만 원</td>
                <td className="border-border border-b px-3 py-2.5">42만 원</td>
                <td className="border-border border-b px-3 py-2.5">462만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">100%</td>
                <td className="px-3 py-2.5">6억 원</td>
                <td className="px-3 py-2.5">1,680만 원</td>
                <td className="px-3 py-2.5">168만 원</td>
                <td className="px-3 py-2.5">1,848만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-inh-count">
        <h2 id="guide-inh-count" className="text-foreground text-xl font-semibold tracking-tight">
          상속 주택의 주택 수 포함 여부
        </h2>
        <p>
          상속 주택은 취득세 산정 시 주택 수에 포함되는 것이 원칙입니다. 다만 아래 조건을 충족하는 상속 주택은 취득세 중과 산정 시
          주택 수에서 제외될 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              조건별 주택 수 포함(중과 산정 시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수 포함 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  일반 상속 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  상속 후 5년 이내 미처분 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  지분 상속 주택(지분율 20% 이하이고 지분 해당 공시가격 3억 원 이하)
                </th>
                <td className="border-border border-b px-3 py-2.5">제외</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  공시가격 1억 원 이하 상속 주택(수도권)
                </th>
                <td className="border-border border-b px-3 py-2.5">제외</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  공시가격 2억 원 이하 상속 주택(비수도권, 2025년 1월 2일 이후)
                </th>
                <td className="px-3 py-2.5">제외</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-inh-add">
        <h2 id="guide-inh-add" className="text-foreground text-xl font-semibold tracking-tight">
          상속 주택 보유 중 추가 주택 취득 시 주의사항
        </h2>
        <p>
          상속 주택이 주택 수에 포함된 상태에서 추가 주택을 취득하면 2주택자 기준으로 취득세율이 결정됩니다. 상속 주택 지분율과
          공시가격을 먼저 확인해 주택 수 포함 여부를 파악하는 것이 중요합니다.
        </p>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          예시: 1주택 보유자가 조정대상지역 주택을 상속받아 2주택자가 된 후 추가 주택 취득 시
        </h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상속 주택 주택 수 반영에 따른 추가 취득 세율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속 주택이 주택 수에 포함되는 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">3주택 기준(8~12%)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  상속 주택이 주택 수에서 제외되는 경우
                </th>
                <td className="px-3 py-2.5">2주택 기준(1~8%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-inh-deadline">
        <h2 id="guide-inh-deadline" className="text-foreground text-xl font-semibold tracking-tight">
          납부 기한과 가산세
        </h2>
        <p>
          상속 취득세 납부 기한은 상속 개시일(사망일)이 속하는 달의 말일로부터 6개월 이내입니다. 매매 취득세(60일)보다 기한이 길지만
          상속 절차가 복잡한 경우 기한을 초과하기 쉽습니다. 기한을 초과하면 무신고가산세(20%)와 납부지연가산세(1일 0.022%)가
          부과됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상속 취득세 납부 기한
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부 기한
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 상속
                </th>
                <td className="border-border border-b px-3 py-2.5">상속 개시일이 속한 달 말일로부터 6개월</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  해외 거주 상속인
                </th>
                <td className="px-3 py-2.5">9개월 이내</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-inh-cgt">
        <h2 id="guide-inh-cgt" className="text-foreground text-xl font-semibold tracking-tight">
          상속 주택 취득 후 매도 시 양도소득세
        </h2>
        <p>
          상속 주택을 매도할 때 취득가액은 피상속인의 최초 취득가액이 아닌 상속 당시의 시가(감정가액 또는 공시가격 등)로 산정됩니다.
          상속 주택은 보유 기간 기산일이 피상속인의 취득일이 아닌 상속 개시일(사망일)부터 계산되므로, 매도 시기에 따라 세율이
          달라집니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-inh-filing">
        <h2 id="guide-inh-filing" className="text-foreground text-xl font-semibold tracking-tight">
          신고 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상속 취득세 신고·납부 경로
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  온라인
                </th>
                <td className="border-border border-b px-3 py-2.5">위택스(wetax.go.kr) 신고·납부</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  오프라인
                </th>
                <td className="border-border border-b px-3 py-2.5">주택 소재지 관할 시·군·구청 세무과 방문</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  법무사 대행
                </th>
                <td className="px-3 py-2.5">상속 등기와 함께 취득세 신고 대행 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          상속 주택은 등기 신청 전 취득세를 납부해야 하며, 상속 등기를 법무사에게 위임하면 취득세 신고도 함께 처리되는 경우가
          많습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-inh-disclaimer">
        <p className="text-muted-foreground text-sm leading-relaxed">
          ※ 상속 취득세 세율과 주택 수 산정 기준은 지방세법 및 시행령에 따르며 정부 정책에 따라 변동될 수 있습니다. 정확한 세율과 납부
          방법은 위택스(
          <a href="https://wetax.go.kr" className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            wetax.go.kr
          </a>
          ) 또는 관할 시·군·구청 세무과에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            매매가에 따른 취득세는 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          2주택 이후 중과 기준은{" "}
          <Link
            href="/guide/second-home-acquisition-tax-surcharge-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            2주택자 취득세 중과 기준
          </Link>
          가이드를 참고하세요.
        </p>
      </aside>
    </>
  );
}
