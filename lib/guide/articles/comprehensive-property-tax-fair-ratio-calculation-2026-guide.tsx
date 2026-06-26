import Link from "next/link";

export const comprehensivePropertyTaxFairRatioCalculation2026GuideMeta = {
  slug: "comprehensive-property-tax-fair-ratio-calculation-2026-guide",
  title: "종부세 공정시장가액비율 인상되면 세금 얼마나 오르나…2026 계산 예시",
  description:
    "2026년 6월 기준 종부세 공정시장가액비율 60%·80%·100% 가정 시 1세대1주택·2주택 공시가격별 연간 보유세(재산세·지방교육세·종부세·농특세), 시행령 공제할 재산세 공식과 20억·25억 예시를 표로 정리했습니다.",
  updated: "2026년 6월 26일",
} as const;

export function ComprehensivePropertyTaxFairRatioCalculation2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-cptfr-intro">
        <h2 id="guide-cptfr-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 기준
        </h2>
        <p>
          종합부동산세(종부세) 과세표준은 공시가격에서 기본공제를 뺀 뒤 <strong>종부세 공정시장가액비율</strong>을
          곱해 산출합니다. 2026년 현재 종부세 비율은 <strong>60%</strong>이고, 정부가 7월 세제개편안에서 상향을
          검토한다는 보도가 나왔지만 <strong>아직 법으로 바뀌지 않았습니다</strong>.
        </p>
        <p>
          실무에서는 <strong>재산세 공정시장가액비율</strong>과 <strong>종부세 공정시장가액비율</strong>을 구분합니다.
          1세대 1주택 재산세는 공시가격 × <strong>45%</strong>, 종부세는 (공시가격 − 12억) × <strong>60%</strong>처럼
          각각 다른 비율이 적용됩니다. 아래 예시는{" "}
          <Link
            href="/comprehensive-property-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 계산기
          </Link>
          와 동일한 법령·신고서 기준(지방교육세 20%, 시행령 제4조의2 공제할 재산세)으로 산출했습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfr-formula">
        <h2 id="guide-cptfr-formula" className="text-foreground text-xl font-semibold tracking-tight">
          계산 순서
        </h2>
        <pre className="bg-muted/30 text-foreground overflow-x-auto rounded-md border border-border p-3 font-mono text-xs leading-relaxed whitespace-pre sm:text-sm">
          {`[재산세 · 7월]
공시가격 × 재산세 공정(1세대1주택 45%, 일반 60%, 토지 70%)
  = 재산세 과세표준 × 세율 − 누진공제 = 재산세
  + 지방교육세(재산세 × 20%)

[종부세 · 12월]
(공시가격 − 기본공제) × 종부세 공정(주택 60%, 토지 100%)
  = 종부세 과세표준 × 세율 − 누진공제 = 종부세(공제 전)
  − 공제할 재산세(시행령 제4조의2: (공시가격−공제)×종부세공정×재산세공정×표준세율)
  = 종부세 납부세액 + 농어촌특별세(20%)

[연간 보유세 합계]
재산세 + 지방교육세 + 종부세 + 농특세

기본공제: 1세대 1주택 12억 원 / 그 외 9억 원
현행 종부세 공정시장가액비율: 60% (아래 80%·100%는 가정)`}
        </pre>
        <p>
          공시가격은 국토교통부 부동산공시가격알리미(realtyprice.kr)에서 확인합니다. 아래 예시는{" "}
          <strong>고령자·장기보유 세액공제를 빼고</strong>, 2주택 이하 일반 세율만 적용한 금액입니다. 홈택스
          모의계산·관할 지자체 고지와 대조해 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfr-rates">
        <h2 id="guide-cptfr-rates" className="text-foreground text-xl font-semibold tracking-tight">
          세율표(2주택 이하)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              과세표준 구간별 세율·누진공제
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  누진공제
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 ~ 6억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.7%</td>
                <td className="border-border border-b px-3 py-2.5">60만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 ~ 12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1.0%</td>
                <td className="border-border border-b px-3 py-2.5">240만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 ~ 25억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1.3%</td>
                <td className="border-border border-b px-3 py-2.5">600만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  25억 ~ 50억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1.5%</td>
                <td className="border-border border-b px-3 py-2.5">1,100만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  50억 원 초과
                </th>
                <td className="px-3 py-2.5">2.0% ~ 2.7%</td>
                <td className="px-3 py-2.5">구간별 상이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfr-onehome">
        <h2 id="guide-cptfr-onehome" className="text-foreground text-xl font-semibold tracking-tight">
          1세대 1주택 — 공시가격별 비교
        </h2>
        <p className="text-muted-foreground text-sm">
          기본공제 12억 원, 재산세 공정 45%. 종부세 공정 60%(현행)·80%·100%(가정) 비교. 연간 보유세(재산세+지방교육세+
          종부세+농특세) 기준.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1세대 1주택 공시가격별 연간 보유세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  종부세 60%
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  80% 가정
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  100% 가정
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  60%→80% 차이
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 184만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 184만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 184만 원</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  14억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 273만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 288만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 304만 원</td>
                <td className="border-border border-b px-3 py-2.5">+15만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  18억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 466만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 541만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 616만 원</td>
                <td className="border-border border-b px-3 py-2.5">+75만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  20억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 584만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 698만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 856만 원</td>
                <td className="border-border border-b px-3 py-2.5">+114만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  25억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 944만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,200만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,492만 원</td>
                <td className="border-border border-b px-3 py-2.5">+256만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  30억 원
                </th>
                <td className="px-3 py-2.5">약 1,347만 원</td>
                <td className="px-3 py-2.5">약 1,788만 원</td>
                <td className="px-3 py-2.5">약 2,272만 원</td>
                <td className="px-3 py-2.5">+441만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          12억 원은 종부세 과세표준이 0이라 재산세·지방교육세만 부과됩니다. 20억 원대는 종부세 공정만 60%에서 80%로
          올라가도 연간 약 114만 원 더 내는 구조입니다(세액공제·세부담상한 전).
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfr-case20">
        <h2 id="guide-cptfr-case20" className="text-foreground text-xl font-semibold tracking-tight">
          케이스 1 — 공시가격 20억 원·1세대 1주택(풀어 쓴 계산)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              종부세 공정 60% vs 80% 단계별 산출
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  종부세 60%
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  80% 가정
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5" colSpan={2}>
                  20억 × 45% = 9억 원(종부세 공정과 무관)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세 + 지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5" colSpan={2}>
                  297만 + 59.4만 = 356.4만 원
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">(20억−12억)×60% = 4.8억 원</td>
                <td className="border-border border-b px-3 py-2.5">(20억−12억)×80% = 6.4억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세(공제 전)
                </th>
                <td className="border-border border-b px-3 py-2.5">4.8억×0.7%−60만 = 276만 원</td>
                <td className="border-border border-b px-3 py-2.5">6.4억×1.0%−240만 = 400만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공제할 재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">(20−12)억×60%×45%×0.4% = 86.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">(20−12)억×80%×45%×0.4% = 115.2만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세+농특세
                </th>
                <td className="border-border border-b px-3 py-2.5">228만 원</td>
                <td className="border-border border-b px-3 py-2.5">342만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  연간 보유세 합계
                </th>
                <td className="px-3 py-2.5">584만 원</td>
                <td className="px-3 py-2.5">698만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfr-case25">
        <h2 id="guide-cptfr-case25" className="text-foreground text-xl font-semibold tracking-tight">
          케이스 2 — 공시가격 25억 원·1세대 1주택
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              종부세 과세표준·연간 보유세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  종부세 과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연간 보유세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  60%(현행)
                </th>
                <td className="border-border border-b px-3 py-2.5">7.8억 원</td>
                <td className="border-border border-b px-3 py-2.5">약 944만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  80% 가정
                </th>
                <td className="border-border border-b px-3 py-2.5">10.4억 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,200만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  차이
                </th>
                <td className="px-3 py-2.5">+2.6억 원</td>
                <td className="px-3 py-2.5">+256만 원/년</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>과세표준이 12억 원을 넘으면 세율 구간이 1.0%에서 1.3%로 올라가 체감이 더 커집니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfr-twohome">
        <h2 id="guide-cptfr-twohome" className="text-foreground text-xl font-semibold tracking-tight">
          2주택 — 합산 공시가격별 비교
        </h2>
        <p className="text-muted-foreground text-sm">
          기본공제 9억 원, 재산세·종부세 공정 각 60%. 2주택자도 2024년 이후 일반 세율 적용. 연간 보유세 기준.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2주택 합산 공시가격별 연간 보유세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합산 공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  종부세 60%
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  80% 가정
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  60%→80% 차이
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 483만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 549만 원</td>
                <td className="border-border border-b px-3 py-2.5">+66만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  18억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 669만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 811만 원</td>
                <td className="border-border border-b px-3 py-2.5">+142만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  24억 원
                </th>
                <td className="px-3 py-2.5">약 1,148만 원</td>
                <td className="px-3 py-2.5">약 1,422만 원</td>
                <td className="px-3 py-2.5">+274만 원</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-foreground text-base font-semibold">2주택 합산 18억 원 풀어 쓴 계산</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              종부세 공정 60% vs 80%
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  60%
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  80%
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">(18억−9억)×60% = 5.4억 원</td>
                <td className="border-border border-b px-3 py-2.5">(18억−9억)×80% = 7.2억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세(공제 전)
                </th>
                <td className="border-border border-b px-3 py-2.5">5.4억×0.7%−60만 = 318만 원</td>
                <td className="border-border border-b px-3 py-2.5">7.2억×1.0%−240만 = 480만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공제할 재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">(18−9)억×60%×60%×0.4% = 129.6만 원</td>
                <td className="border-border border-b px-3 py-2.5">(18−9)억×80%×60%×0.4% = 172.8만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  연간 보유세
                </th>
                <td className="px-3 py-2.5">669만 원</td>
                <td className="px-3 py-2.5">811만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cptfr-note">
        <h2 id="guide-cptfr-note" className="text-foreground text-xl font-semibold tracking-tight">
          계산 시 빼먹기 쉬운 것
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>재산세 공정 ≠ 종부세 공정</strong> — 1세대 1주택 재산세는 45%, 종부세는 60%입니다. 재산세를 60%로
            잡으면 과세표준·공제할 재산세가 모두 틀어집니다.
          </li>
          <li>
            <strong>지방교육세(재산세×20%)</strong> — 7월 재산세 고지에 포함됩니다. 연간 보유세를 볼 때 빠지면 총액이
            적게 나옵니다.
          </li>
          <li>
            <strong>공제할 재산세</strong> — 종부세 산출세액에서 차감합니다. 시행령 제4조의2 공식으로 산출하며, 단순히
            납부 재산세 전액이 아닙니다.
          </li>
          <li>
            <strong>1주택 세액공제</strong> — 65세 이상·장기보유 등 조건을 맞추면 종부세가 줄 수 있어, 위 금액보다 적게
            낼 수 있습니다.
          </li>
          <li>
            <strong>3주택 이상</strong> — 과세표준 12억 원 초과 구간부터 중과세율이 붙어 같은 공시가격이라도 더 많이
            나갑니다.
          </li>
          <li>
            <strong>6월 1일 기준</strong> — 올해 종부세는 6월 1일 주택 수·공시가격으로 정해집니다. 그 전후 매매하면
            당해 연도 부담이 달라질 수 있습니다.
          </li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cptfr-status">
        <h2 id="guide-cptfr-status" className="text-foreground text-xl font-semibold tracking-tight">
          비율 인상은 아직 확정 아님
        </h2>
        <p>
          종부세 공정시장가액비율은 대통령령으로 정하는데, 2022년 100% 적용 예정이었던 것을 60%로 낮춘 이력이 있습니다.
          2026년 6월 현재는 <strong>60%가 그대로</strong>이고, 상향은 세제개편안·국회 심의 후에야 확정됩니다.{" "}
          <Link href="/guide/holding-capital-gains-tax-increase-2026-guide" className="text-primary underline-offset-4 hover:underline">
            보유세·양도세 강화 쟁점
          </Link>
          가이드에서 배경을 함께 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfr-checklist">
        <h2 id="guide-cptfr-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          내 집 세액 확인 순서
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              체크리스트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 w-24 font-semibold">
                  확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  1. realtyprice.kr에서 공시가격 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  2. 6월 1일 기준 주택 수(1주택·2주택) 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  3. 홈택스 종합부동산세 모의계산·7월 재산세 고지 대조
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  4. 7월 세제개편안 공정시장가액비율·시행일 확인
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 위 예시는 세액공제·세부담상한·합산배제 임대주택 등을 반영하지 않았습니다. 정확한 금액은
          홈택스(hometax.go.kr)와 관할 지자체 고지세액에서 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link
            href="/comprehensive-property-tax-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 종합부동산세 계산기에서 내 공시가격·주택 수로 예상 세액을 바로 계산해 볼 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/holding-capital-gains-tax-increase-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 보유세·양도세 강화 방향과 검토 중인 다른 카드는 관련 가이드에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
