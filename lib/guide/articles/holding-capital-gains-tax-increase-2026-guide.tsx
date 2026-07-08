import Link from "next/link";

export const holdingCapitalGainsTaxIncrease2026GuideMeta = {
  slug: "holding-capital-gains-tax-increase-2026-guide",
  title: "2026년 7월 부동산 세제개편 예상 총정리 | OECD·구윤철·종부세·장특공",
  description:
    "2026년 7월 8일 기준 부동산 세제개편 예상 내용. OECD 7월 2일 권고, 구윤철 부총리 발언, 7월 말 개편안 전 거론되는 고가주택 보유세·비실거주 장특공 축소 방향을 확정·검토·현행법으로 구분해 정리했습니다. 정부안 발표 후 갱신 예정.",
  updated: "2026년 7월 8일",
} as const;

export function HoldingCapitalGainsTaxIncrease2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-hcgi-intro">
        <h2 id="guide-hcgi-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 8일 기준
        </h2>
        <p>
          정부는 <strong>7월 말 부동산 세제개편안</strong> 발표를 준비 중입니다. 이재명 대통령·김용범 정책실장에 이어
          구윤철 부총리 겸 기재부 장관이 「실거주 중심」「보유세·거래세 균형」을 공식 언급했고, OECD도 거래세에서
          보유세로의 전환을 권고했습니다. 다만 <strong>세율·공제 변경은 아직 법으로 확정되지 않았습니다.</strong>
        </p>
        <p>
          이 글은 <strong>발표 전 예상·보도·정부 발언</strong>을 정리한 것입니다. 확정안·검토 중인 카드·현행 세법을
          구분해 읽어 주세요. 정부 세제개편안이 공개되면 본문과 표를 갱신할 예정입니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="예상 정리 안내"
      >
        <p className="text-foreground font-medium">※ 예상 정리 · 발표 후 업데이트 예정</p>
        <p className="mt-2">
          아래 「검토 중」「거론」 항목은 확정 세법이 아닙니다. 7월 말 개편안·국회 심의 결과에 따라 달라질 수
          있습니다.
        </p>
      </aside>

      <section className="space-y-4" aria-labelledby="guide-hcgi-oecd">
        <h2 id="guide-hcgi-oecd" className="text-foreground text-xl font-semibold tracking-tight">
          OECD 권고 배경(2026년 7월 2일)
        </h2>
        <p>
          경제협력개발기구(OECD)는 2026년 7월 2일 「2026 한국경제보고서(OECD Economic Surveys: Korea
          2026)」에서 한국 부동산 세제를 <strong>거래세 중심에서 보유세(반복 과세) 중심으로 단계 전환</strong>할 것을
          권고했습니다. 정부의 개편 논의와 방향이 겹치는 부분이 많아 국내 보도에서도 배경 자료로 인용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              OECD가 지적한 한국 vs OECD 평균(보고서 인용)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  한국
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  OECD 평균
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  GDP 대비 부동산 관련 세수
                </th>
                <td className="border-border border-b px-3 py-2.5">약 3.0%(2024년)</td>
                <td className="border-border border-b px-3 py-2.5">약 1.6%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부동산 세수 중 보유세 비중
                </th>
                <td className="border-border border-b px-3 py-2.5">약 29.4%</td>
                <td className="border-border border-b px-3 py-2.5">약 56%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  부동산 세수 중 거래세 비중
                </th>
                <td className="px-3 py-2.5">약 50.4%</td>
                <td className="px-3 py-2.5">상대적으로 낮음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          OECD는 전체 부동산 세 부담은 OECD 대비 높은 편이나, 경제적 왜곡이 상대적으로 적은 <strong>보유세 비중이
          낮다</strong>는 점을 문제 삼았습니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>세수 중립적 전환</strong> — 거래세 비중을 줄이고 보유세 비중을 늘리면 주거 이동성·노동시장 효율·주택
            시장 마찰 완화에 기여할 수 있다는 취지
          </li>
          <li>
            <strong>비실거주·저활용 자산</strong> — 실거주가 아닌 주택·공실·별장 등 활용도가 낮은 자산에 더 높은 보유세율
            적용 검토 권고
          </li>
          <li>
            <strong>장기 과제</strong> — 시장가격 기반 과세·거주형태 중립성(tenure neutrality) 확대
          </li>
          <li>
            <strong>유의점</strong> — 한국 주택시장 특수성·저소득층 부담을 고려한 <strong>신중·단계적</strong> 설계 필요
            (OECD 측 설명)
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          OECD 권고는 정부 입법안이 아닙니다. 다만 「보유세 강화 + 거래 부담 완화의 균형」이라는 정부 발언과 맞물려
          해석되고 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hcgi-timeline">
        <h2 id="guide-hcgi-timeline" className="text-foreground text-xl font-semibold tracking-tight">
          정부 발언 경과
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세제개편 관련 일정·발언
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
                  2026년 6월 8일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  이재명 대통령 취임 1주년 기자회견 — 선진국 수준의 보유세 부담 필요성 언급
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 6월 16일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  구윤철 부총리(해남 솔라시도 현장) — 7월 내 보유세 개편안 발표 검토, 거주 목적 vs 매입·투자 목적
                  주택 구분 필요성 강조
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 6월 20일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  김용범 정책실장 SNS — 「부동산 과세 정상화」「보유세·양도세 합리적 조정 필요」
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 7월 2일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  OECD 「2026 한국경제보고서」 — 거래세→보유세 단계 전환·비실거주 과세 강화 권고
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 7월 7일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  구윤철 부총리(MBC 라디오) — 7월 말 개편안 발표 준비, 「집은 living(거주)」「보유세·거래세
                  밸런스」 함께 검토, 공정비율·비거주 장특공 등 구체안은 즉답 없이 국민 의견 청취 후 결정
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 7월 말(예정)
                </th>
                <td className="border-border border-b px-3 py-2.5">정부 부동산 세제개편안 발표</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 8월(예정)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  기재부·국토부 등 부동산 정책 관련 대토론회 개최 예정(보도)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  시행 시점
                </th>
                <td className="px-3 py-2.5">
                  개편안 확정·국회 통과 후 통상 내년 1월 1일 또는 해당 과세연도부터 적용(안마다 상이)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          구 부총리는 「다주택·투자용·내가 살지 않는 주택」에 정부가 인센티브를 줄 이유가 없다는 취지를 밝혔고, 집을
          매수(buying) 대상이 아닌 거주(living) 공간으로 보겠다고 반복 설명했습니다. 김용범 실장은 반도체 호황 등으로
          늘어난 유동성이 부동산으로 흘러들 경우 「세금을 내고도 남는 장사」 기대가 생길 수 있다며, 규제만으로는
          부족할 수 있다는 취지도 밝혔습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hcgi-gu-key">
        <h2 id="guide-hcgi-gu-key" className="text-foreground text-xl font-semibold tracking-tight">
          구윤철 부총리 발언 핵심(7월 7일)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공식 인터뷰에서 확인된 방향(구체 수치·세율은 미확정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  키워드
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  요지
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  발표 시점
                </th>
                <td className="border-border border-b px-3 py-2.5">7월 말 전후 세제개편안 발표 준비</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실거주 중심
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  집은 거주 공간 — 실거주자 중심 주택시장 재편
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유세·거래세 균형
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  두 세목을 함께 검토, 전체 세 부담 구조의 밸런스 고려
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  구체 카드
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  공정시장가액비율·비거주 장특공 축소 등 보도에 대해 「국민 의견으로 살펴보겠다」 — 확정 발표 없음
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  의사결정
                </th>
                <td className="px-3 py-2.5">정부 일방 결정이 아니라 국민·현장 의견 수렴 후 최종 방침</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hcgi-status">
        <h2 id="guide-hcgi-status" className="text-foreground text-xl font-semibold tracking-tight">
          확정 vs 검토 중
        </h2>
        <p>지금 시점에서 구분해야 할 것은 「방향 공식화」와 「세율·요건 변경 확정」입니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              현재 단계별 정리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상태
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유세·양도세 강화 방향
                </th>
                <td className="border-border border-b px-3 py-2.5">대통령실·기재부 공식 발언으로 사실상 공식화</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유세·거래세 균형 조정
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  구 부총리 7월 7일 발언·OECD 권고와 맞물려 검토(구체안 미발표)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 공정시장가액비율·세율 인상
                </th>
                <td className="border-border border-b px-3 py-2.5">언론·전문가 거론·시행령 개정 가능성, 정부안 미발표</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비거주 1주택 장기보유특별공제 축소
                </th>
                <td className="border-border border-b px-3 py-2.5">검토 중으로 알려짐, 확정 아님</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  2026년 현재 적용 세율·공제
                </th>
                <td className="px-3 py-2.5">기존 법령 그대로(아래 현행표 참고)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hcgi-current-holding">
        <h2 id="guide-hcgi-current-holding" className="text-foreground text-xl font-semibold tracking-tight">
          현행 보유세(종합부동산세·재산세)
        </h2>
        <p className="text-muted-foreground text-sm">2026년 7월 8일 현재 적용 기준. 개편안 발표 전까지는 이 규정이 유효합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              종부세 핵심 현행 규정
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
                  공정시장가액비율
                </th>
                <td className="border-border border-b px-3 py-2.5">60%(2022년 이후 유지)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기본공제
                </th>
                <td className="border-border border-b px-3 py-2.5">1세대 1주택 12억 원 / 그 외 9억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  세율(2주택 이하)
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5% ~ 2.7%(누진)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  세율(3주택 이상)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  과세표준 12억 원 초과 구간부터 중과(최고 5.0%)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  과세 기준일
                </th>
                <td className="px-3 py-2.5">매년 6월 1일 보유 현황(12월 납부)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          종부세 과세표준은 <strong>(공시가격 합계 − 기본공제) × 종부세 공정시장가액비율(60%)</strong>로 산출됩니다.
          1세대 1주택 재산세는 별도로 공시가격 × 45%가 적용되며, 종부세 산출 시 시행령 제4조의2에 따라 공제할
          재산세가 차감됩니다. 공시가격 25억·1주택이면 (25억 − 12억) × 60% = 7.8억이 종부세 과세표준입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hcgi-review-holding">
        <h2 id="guide-hcgi-review-holding" className="text-foreground text-xl font-semibold tracking-tight">
          검토 중인 보유세 카드
        </h2>
        <p>7월 세제개편안에 담길 수 있다고 거론되는 항목입니다. 최종안은 미확정입니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보유세 강화 검토 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취지·영향
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공정시장가액비율 상향
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  60% → 과거 높은 수준(80%·100% 등) 복원 검토. 종부세 과세표준 직접 상승
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  다주택자 종부세율 인상
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  윤석열 정부 때 완화된 보유세 부담 일부 되돌리기 방향 언급
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  초고가 1주택자 과세 강화
                </th>
                <td className="border-border border-b px-3 py-2.5">공시가격 12억 초과 1주택 보유 부담 확대 검토</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  주택 재산세 과세표준상한제(5% 상한)
                </th>
                <td className="px-3 py-2.5">
                  2024년 도입된 연간 세부담 상승 제한 재검토 거론(종부세와 별도 제도)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-foreground text-base font-semibold">공정시장가액비율 60% → 80% 가정 시(1주택)</h3>
        <p className="text-muted-foreground text-sm">공시가격 합계 25억 원, 기본공제 12억 원</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              비율 변경 시 과세표준 차이(가정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공정시장가액비율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  현행 60%
                </th>
                <td className="border-border border-b px-3 py-2.5">7.8억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  80%로 상향 가정
                </th>
                <td className="px-3 py-2.5">10.4억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>비율만 올라가도 세율을 건드리지 않아도 종부세액이 늘어납니다. 실제 인상 폭은 개편안·국회 협의에 따라 달라집니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hcgi-current-cg">
        <h2 id="guide-hcgi-current-cg" className="text-foreground text-xl font-semibold tracking-tight">
          현행 양도세·장기보유특별공제
        </h2>
        <p>
          2026년 5월 10일부터 조정대상지역 다주택자{" "}
          <Link href="/guide/capital-gains-surcharge-revival-2026-guide" className="text-primary underline-offset-4 hover:underline">
            양도세 중과
          </Link>
          가 이미 재시행된 상태입니다. 이번 개편 논의는 그 위에 <strong>1주택·비거주 보유자 장특공</strong>을 손볼
          가능성이 거론됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1세대 1주택 장기보유특별공제(현행)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유기간 공제
                </th>
                <td className="border-border border-b px-3 py-2.5">3년 이상 보유 시 최대 30%(15년 이상)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거주기간 공제
                </th>
                <td className="border-border border-b px-3 py-2.5">2년 이상 거주 시 최대 40%(10년 이상 거주)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  합산 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 80%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 원 이하 1주택
                </th>
                <td className="px-3 py-2.5">양도소득세 비과세(별도 요건)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          세대 내 1주택이어도 <strong>실제 거주하지 않으면</strong> 거주기간 공제를 받기 어렵고, 보유기간 공제만으로는
          한도가 낮습니다. 정부가 검토한다고 알려진 것은 이 「빈집·임대용 1주택」에 대한 혜택을 더 줄이는
          방향입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hcgi-review-cg">
        <h2 id="guide-hcgi-review-cg" className="text-foreground text-xl font-semibold tracking-tight">
          검토 중인 양도세 카드
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              양도세 강화 검토 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취지
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비거주 1주택 장특공 축소
                </th>
                <td className="border-border border-b px-3 py-2.5">보유만 길게 하고 거주하지 않은 경우 공제 축소</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거주 기간 비중 확대
                </th>
                <td className="border-border border-b px-3 py-2.5">실거주 중심 과세 원칙 강화</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  고가 1주택 장특공 상한 조정
                </th>
                <td className="px-3 py-2.5">12억 원 초과 1주택에 대한 공제 축소 가능성 거론</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          다주택자 조정지역 중과는 이미 적용 중이므로, 이번 논의의 초점은 <strong>1주택·특히 비거주 보유</strong>와{" "}
          <strong>고가 보유세</strong>에 맞춰져 있습니다. 취득·보유·양도 전 과정의 세 부담을 함께 보며 설계하겠다는
          정부 입장도 전해졌습니다. 일부 보도에서는 보유세 인상과 함께 거래세(취득세 등) 부담 완화를 묶어 「균형」을
          맞추는 시나리오도 거론되나, <strong>확정된 안은 없습니다.</strong>
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hcgi-who">
        <h2 id="guide-hcgi-who" className="text-foreground text-xl font-semibold tracking-tight">
          누가 영향을 크게 받을 수 있나
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              유형별 체감 포인트(개편 시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보유세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  양도세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  다주택·고가 보유
                </th>
                <td className="border-border border-b px-3 py-2.5">종부세·재산세 부담 확대 가능성 큼</td>
                <td className="border-border border-b px-3 py-2.5">조정지역 중과 이미 적용</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공시 12억 초과 1주택(실거주)
                </th>
                <td className="border-border border-b px-3 py-2.5">종부세 대상, 비율·세율 검토 영향</td>
                <td className="border-border border-b px-3 py-2.5">현행 장특공 유지 여부 주목</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택·비거주(임대·빈집)
                </th>
                <td className="border-border border-b px-3 py-2.5">보유세 일반 적용</td>
                <td className="border-border border-b px-3 py-2.5">장특공 축소 1순위 검토 대상</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 이하 1주택·실거주
                </th>
                <td className="px-3 py-2.5">종부세 면제 구간</td>
                <td className="px-3 py-2.5">양도세 비과세(요건 충족 시)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-hcgi-mistakes">
        <h2 id="guide-hcgi-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          흔한 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「이미 세율이 올랐다」</strong> — 7월 초 현재 종부세·장특공 규정은 개편 전과 동일합니다.
          </li>
          <li>
            <strong>「OECD 권고 = 곧 시행」</strong> — OECD는 정책 권고 기관이며, 입법은 정부·국회 절차를 거칩니다.
          </li>
          <li>
            <strong>「구 부총리가 공정비율 80% 확정」</strong> — 7월 7일 인터뷰에서 구체 수치는 확인되지 않았습니다.
          </li>
          <li>
            <strong>「7월 발표 = 내년 바로 적용」</strong> — 국회 심의·시행 시점에 따라 적용 연도가 달라질 수
            있습니다.
          </li>
          <li>
            <strong>「보유세만 오르면 집값이 떨어진다」</strong> — 전문가 사이에서 보유세·거래세 동시 인상이
            전월세·매매가에 미치는 영향을 두고 의견이 갈립니다.
          </li>
          <li>
            <strong>「다주택 중과와 이번 개편이 같다」</strong> — 5월 재시행된 다주택 중과와 별개로, 이번은 보유세·1주택
            양도 공제 쪽 논의입니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hcgi-checklist">
        <h2 id="guide-hcgi-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          개편안 발표 전 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              확인 항목
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
                  6월 1일 기준 주택 수·공시가격(올해 종부세)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  실거주 여부(장특공·비과세 요건)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  7월 세제개편안 공정시장가액비율·세율 변경 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  다주택 조정지역 양도 계획(중과·장특공 배제)
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 세제개편안 내용·시행일은 정부 발표 및 국회 심의 결과에 따라 달라집니다. 정부안 공개 후 본 가이드를
          갱신할 예정이며, 확정 세액은 홈택스(hometax.go.kr) 또는 관할 세무과에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link
            href="/guide/capital-gains-surcharge-revival-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 이미 적용 중인 다주택자 양도세 중과는 별도 가이드에서 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/multi-homeowner-loan-regulations-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 다주택자 종부세·대출 규제 현황은 다주택자 규제 가이드를 참고하세요.
          </Link>
        </p>
      </aside>
    </>
  );
}
