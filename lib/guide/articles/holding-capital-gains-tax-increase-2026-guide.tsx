import Link from "next/link";

export const holdingCapitalGainsTaxIncrease2026GuideMeta = {
  slug: "holding-capital-gains-tax-increase-2026-guide",
  title: "보유세·양도세 인상 공식화…7월 세제개편안 종부세·장특공 쟁점",
  description:
    "2026년 6월 기준 보유세·양도세 강화 공식화 배경, 7월 말 세제개편안 검토 항목, 현행 종부세·장기보유특별공제와의 차이, 다주택·비거주 1주택 영향을 표로 정리했습니다.",
  updated: "2026년 6월 26일",
} as const;

export function HoldingCapitalGainsTaxIncrease2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-hcgi-intro">
        <h2 id="guide-hcgi-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 기준
        </h2>
        <p>
          이재명 대통령과 김용범 대통령실 정책실장이 잇따라 <strong>보유세·양도세 조정</strong> 필요성을 공개적으로
          언급하면서, 연내 부동산 증세 방향이 사실상 공식화됐습니다. 다만 <strong>세율 인상·공제 축소는 아직 법으로
          확정된 것이 아니고</strong>, 7월 말 발표 예정인 정부 세제개편안에서 구체안이 나온 뒤 국회 입법을 거쳐야
          합니다. 이 글은 확정 발언·검토 중인 카드·현행 세법을 구분해 정리합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hcgi-timeline">
        <h2 id="guide-hcgi-timeline" className="text-foreground text-xl font-semibold tracking-tight">
          정부 발언 경과
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보유세·양도세 강화 관련 일정
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
                  이재명 대통령 취임 1주년 기자회견에서 선진국 수준의 보유세 부담 필요성 언급
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 6월 20일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  김용범 정책실장 SNS — 「부동산 과세 정상화」「보유세·양도세 합리적 조정 필요」 공식화
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 7월 말(예정)
                </th>
                <td className="border-border border-b px-3 py-2.5">정부 세제개편안 발표</td>
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
          김 실장은 반도체 호확 등으로 늘어난 유동성이 부동산으로 흘러들 경우 「세금을 내고도 남는 장사」라는 기대가
          생길 수 있다며, 규제만으로는 부족할 수 있다는 취지도 밝혔습니다. 배경으로 1분기 실질 GDI(13.2%)가 실질
          GDP(3.8%)를 크게 웃돈 점을 들었습니다.
        </p>
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
                <td className="border-border border-b px-3 py-2.5">대통령실 공식 발언으로 사실상 공식화</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 공정시장가액비율·세율 인상
                </th>
                <td className="border-border border-b px-3 py-2.5">언론·전문가 거론 수준, 정부안 미발표</td>
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
        <p className="text-muted-foreground text-sm">2026년 6월 현재 적용 기준. 개편안 발표 전까지는 이 규정이 유효합니다.</p>
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
          다주택자 조정지역 중과는 이미 적용 중이므로, 이번 논의의 초점은 <strong>1주택·특히 비거주 보유</strong>에
          맞춰져 있습니다. 취득부터 양도까지 세 부담을 함께 보며 설계하겠다는 정부 입장도 전해졌습니다.
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
            <strong>「이미 세율이 올랐다」</strong> — 6월 말 현재 종부세·장특공 규정은 개편 전과 동일합니다.
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
          ※ 세제개편안 내용·시행일은 정부 발표 및 국회 심의 결과에 따라 달라집니다. 확정 세액은 홈택스(hometax.go.kr) 또는
          관할 세무과에서 확인할 것을 권장합니다.
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
