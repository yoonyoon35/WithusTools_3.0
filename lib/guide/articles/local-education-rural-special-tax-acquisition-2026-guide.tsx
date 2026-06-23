import Link from "next/link";

export const localEducationRuralSpecialTaxAcquisition2026GuideMeta = {
  slug: "local-education-rural-special-tax-acquisition-2026-guide",
  title: "지방교육세·농어촌특별세 계산법",
  description:
    "취득세와 함께 부과되는 지방교육세·농어촌특별세 계산법을 정리했습니다. 취득세율 8% 미만은 취득세액의 10%, 8% 이상은 과세표준의 0.4%로 산정합니다(취득세 계산기 기준).",
  updated: "2026년 5월 11일",
} as const;

export function LocalEducationRuralSpecialTaxAcquisition2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ler-intro">
        <h2 id="guide-ler-intro" className="text-foreground text-xl font-semibold tracking-tight">
          개요
        </h2>
        <p>
          취득세를 납부할 때 지방교육세와 농어촌특별세가 추가로 부과됩니다. 두 세금은 취득세 고지서에 함께 포함되어 나오지만 계산
          방식이 각각 다릅니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-relation">
        <h2 id="guide-ler-relation" className="text-foreground text-xl font-semibold tracking-tight">
          세 가지 세금의 관계
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[24rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              실제 납부 구조
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
                  실제 납부액
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 + 지방교육세 + 농어촌특별세</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  산출 순서
                </th>
                <td className="px-3 py-2.5">취득세가 결정되면 나머지 두 세금은 그에 맞추어 산출됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-local">
        <h2 id="guide-ler-local" className="text-foreground text-xl font-semibold tracking-tight">
          지방교육세 계산법
        </h2>
        <p>
          지방교육세는 취득세율에 따라 산정 방식이 달라집니다.{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          와 동일한 기준입니다.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>취득세율 8% 미만(1~3% 구간 등): 지방교육세 = 취득세액 × 10%</li>
          <li>취득세율 8% 이상(2주택 조정지역 중과 등): 지방교육세 = 과세표준 × 0.4%</li>
        </ul>
        <p>
          취득세가 감면되면 지방교육세도 감면된 취득세액(또는 감면 후 과세표준)을 기준으로 재산정됩니다.
        </p>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">지방교육세 계산 예시</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득세율별 지방교육세·합계(8% 미만은 취득세×10%, 8% 이상은 과세표준×0.4%)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세액
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
                  1%
                </th>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3%
                </th>
                <td className="border-border border-b px-3 py-2.5">900만 원</td>
                <td className="border-border border-b px-3 py-2.5">90만 원</td>
                <td className="border-border border-b px-3 py-2.5">990만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8%
                </th>
                <td className="border-border border-b px-3 py-2.5">4,000만 원(5억 원 × 8%)</td>
                <td className="border-border border-b px-3 py-2.5">200만 원(5억 원 × 0.4%)</td>
                <td className="border-border border-b px-3 py-2.5">4,200만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12%
                </th>
                <td className="px-3 py-2.5">7,200만 원(6억 원 × 12%)</td>
                <td className="px-3 py-2.5">240만 원(6억 원 × 0.4%)</td>
                <td className="px-3 py-2.5">7,440만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-rural">
        <h2 id="guide-ler-rural" className="text-foreground text-xl font-semibold tracking-tight">
          농어촌특별세 계산법
        </h2>
        <p>농어촌특별세는 취득세액이 아닌 취득가액(과세표준)을 기준으로 산정합니다.</p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
          농어촌특별세 = 취득가액(과세표준) × 0.2%
        </p>
        <p>단, 전용면적 85㎡ 이하 주택은 농어촌특별세가 면제됩니다.</p>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              구분별 농어촌특별세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농어촌특별세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전용면적 85㎡ 이하 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">면제</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전용면적 85㎡ 초과 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">과세표준 × 0.2%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  오피스텔(업무용)
                </th>
                <td className="px-3 py-2.5">과세표준 × 0.2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-85">
        <h2 id="guide-ler-85" className="text-foreground text-xl font-semibold tracking-tight">
          주택 유형별 농어촌특별세 부과 기준
        </h2>
        <p>
          국민주택 규모(전용 85㎡)를 기준으로 부과 여부가 갈립니다. 같은 아파트라도 전용면적에 따라 납부액이 달라집니다.
        </p>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          매매가 7억 원 아파트 기준 농어촌특별세 비교
        </h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전용면적별 농특세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  전용면적
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농어촌특별세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  84㎡(85㎡ 이하)
                </th>
                <td className="border-border border-b px-3 py-2.5">0원(면제)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  86㎡(85㎡ 초과)
                </th>
                <td className="px-3 py-2.5">140만 원(7억 원 × 0.2%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6" aria-labelledby="guide-ler-examples">
        <h2 id="guide-ler-examples" className="text-foreground text-xl font-semibold tracking-tight">
          실제 납부액 계산 예시
        </h2>

        <div className="space-y-3">
          <h3 className="text-foreground text-lg font-semibold tracking-tight">
            매매가 5억 원 아파트, 1주택 취득, 전용 85㎡ 이하 기준
          </h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                항목별 산출
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    항목
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    계산
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    취득세(1%)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">5억 원 × 1%</td>
                  <td className="border-border border-b px-3 py-2.5">500만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    지방교육세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">500만 원 × 10%</td>
                  <td className="border-border border-b px-3 py-2.5">50만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    농어촌특별세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">면제(85㎡ 이하)</td>
                  <td className="border-border border-b px-3 py-2.5">0원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    합계
                  </th>
                  <td className="px-3 py-2.5">—</td>
                  <td className="px-3 py-2.5">550만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-lg font-semibold tracking-tight">
            매매가 5억 원 아파트, 1주택 취득, 전용 85㎡ 초과 기준
          </h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                항목별 산출
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    항목
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    계산
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    취득세(1%)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">5억 원 × 1%</td>
                  <td className="border-border border-b px-3 py-2.5">500만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    지방교육세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">500만 원 × 10%</td>
                  <td className="border-border border-b px-3 py-2.5">50만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    농어촌특별세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">5억 원 × 0.2%</td>
                  <td className="border-border border-b px-3 py-2.5">100만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    합계
                  </th>
                  <td className="px-3 py-2.5">—</td>
                  <td className="px-3 py-2.5">650만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-lg font-semibold tracking-tight">
            매매가 5억 원 아파트, 조정지역 2주택 취득, 전용 85㎡ 초과 기준
          </h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                항목별 산출
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    항목
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    계산
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    취득세(8%)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">5억 원 × 8%</td>
                  <td className="border-border border-b px-3 py-2.5">4,000만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    지방교육세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">5억 원 × 0.4%</td>
                  <td className="border-border border-b px-3 py-2.5">200만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    농어촌특별세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">5억 원 × 0.6%(2주택·조정·85㎡ 초과)</td>
                  <td className="border-border border-b px-3 py-2.5">300만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    합계
                  </th>
                  <td className="px-3 py-2.5">—</td>
                  <td className="px-3 py-2.5">4,500만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-burden">
        <h2 id="guide-ler-burden" className="text-foreground text-xl font-semibold tracking-tight">
          취득세율별 실제 세 부담률 비교
        </h2>
        <p>
          전용 85㎡ 초과 기준으로 취득세율에 부가세를 더한 실질 세 부담률(과세표준 대비)을 계산하면 다음과 같습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득세율별 실질 부담률(85㎡ 초과)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농어촌특별세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실질 세 부담률
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1%
                </th>
                <td className="border-border border-b px-3 py-2.5">0.1%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">1.3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3%
                </th>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">3.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8%
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">0.6%(2주택·조정·85㎡ 초과)</td>
                <td className="border-border border-b px-3 py-2.5">9.0%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12%
                </th>
                <td className="px-3 py-2.5">1.2%</td>
                <td className="px-3 py-2.5">0.2%</td>
                <td className="px-3 py-2.5">13.4%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-relief">
        <h2 id="guide-ler-relief" className="text-foreground text-xl font-semibold tracking-tight">
          생애최초 취득세 감면 시 지방교육세 감면 연동
        </h2>
        <p>
          취득세가 감면되면 지방교육세도 감면된 취득세액 기준으로 재산정됩니다. 생애최초 감면으로 취득세가 200만 원 줄어들면
          지방교육세도 20만 원 추가 감면됩니다.
        </p>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          매매가 3억 원, 생애최초 취득세 감면 적용 시
        </h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              감면 전·후 비교
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
                  감면 후
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원(200만 원 감면)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">10만 원(20만 원 감면)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">330만 원</td>
                <td className="px-3 py-2.5">110만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>실질 감면액은 취득세 200만 원 + 지방교육세 20만 원 = 220만 원이 됩니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-inherit">
        <h2 id="guide-ler-inherit" className="text-foreground text-xl font-semibold tracking-tight">
          상속·증여 취득 시 적용 방식
        </h2>
        <p>
          상속·증여로 취득하는 경우에도 동일한 구조가 적용됩니다. 상속 취득세율 2.8% 기준으로 지방교육세 0.28%, 전용 85㎡ 초과 시
          농어촌특별세 0.2%가 추가됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득 유형별 부담률(85㎡ 초과 시 합계)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농어촌특별세(85㎡ 초과)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매(6억 원 이하)
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">0.1%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">1.3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속
                </th>
                <td className="border-border border-b px-3 py-2.5">2.8%</td>
                <td className="border-border border-b px-3 py-2.5">0.28%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">3.28%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  증여(일반)
                </th>
                <td className="border-border border-b px-3 py-2.5">3.5%</td>
                <td className="border-border border-b px-3 py-2.5">0.35%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">4.05%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  증여(조정지역 3억 원 이상 중과)
                </th>
                <td className="px-3 py-2.5">12%</td>
                <td className="px-3 py-2.5">1.2%</td>
                <td className="px-3 py-2.5">0.2%</td>
                <td className="px-3 py-2.5">13.4%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ler-pay">
        <h2 id="guide-ler-pay" className="text-foreground text-xl font-semibold tracking-tight">
          납부 방법
        </h2>
        <p>
          지방교육세와 농어촌특별세는 취득세와 함께 위택스(
          <a href="https://wetax.go.kr" className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            wetax.go.kr
          </a>
          )에서 일괄 신고·납부합니다. 별도로 신고하지 않아도 취득세 신고 시 자동으로 계산되어 고지됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ler-disclaimer">
        <p className="text-muted-foreground text-sm leading-relaxed">
          ※ 지방교육세와 농어촌특별세 세율은 지방세법 및 농어촌특별세법에 근거하며 정부 정책에 따라 변동될 수 있습니다. 정확한 세액은
          위택스(wetax.go.kr)에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            매매가와 주택 유형에 따른 취득세·지방교육세·농어촌특별세 합계는 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          취득세율 전체 표는{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            2026년 취득세율 완전 정리
          </Link>
          를 참고하세요.
        </p>
      </aside>
    </>
  );
}
