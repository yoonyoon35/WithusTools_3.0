import Link from "next/link";

export const regulatedAreaDesignationEffects2026GuideMeta = {
  slug: "regulated-area-designation-effects-2026-guide",
  title: "규제지역 지정되면 달라지는 것…대출·취득세·양도세 비교",
  description:
    "2026년 6월 기준 규제지역·조정대상지역 지정 시 달라지는 LTV·스트레스 DSR·2주택 취득세·다주택 양도세·토지거래허가, 주택 수별 영향과 5억·7억 매수 예시를 표로 정리했습니다.",
  updated: "2026년 7월 11일",
} as const;

export function RegulatedAreaDesignationEffects2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-rade-intro">
        <h2 id="guide-rade-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 기준
        </h2>
        <p>
          뉴스에서 「규제지역 지정」이 나오면 대출·세금·매매 절차가 한꺼번에 바뀌는 것처럼 느껴지지만, 실제로는{" "}
          <strong>지정 유형마다 적용 항목이 다릅니다</strong>. 흔히 겹쳐 지정되는 세 가지는 투기과열지구, 조정대상지역,
          토지거래허가구역입니다. 이 글은 내가 사는·사려는 지역이 지정됐을 때 무엇이 달라지는지, 주택 수별로
          정리합니다.
        </p>
        <p>
          먼저 본인이 <strong>무주택·1주택·다주택 중 어디에 해당하는지</strong>를 정하고, 매물이 조정·규제·허가구역
          중 어디에 걸리는지 확인하세요. 같은 「규제지역」이라도 대출·취득세·양도세·허가가 동시에 바뀌지는
          않습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-rade-who-reads">
        <h2 id="guide-rade-who-reads" className="text-foreground text-xl font-semibold tracking-tight">
          이 글에서 확인할 것
        </h2>
        <p>
          추가 매수·갈아타기를 검토 중이면 <strong>대출 LTV → 취득세 중과 → 양도세</strong> 순으로 보세요. 이미
          1주택만 보유·거주 중이라면 「영향 없음」이 아니라, <strong>다음 매수 때</strong> 규제가 걸린다는 뜻입니다.
          토지거래허가구역이면 계약 전 허가 여부를 반드시 확인합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rade-types">
        <h2 id="guide-rade-types" className="text-foreground text-xl font-semibold tracking-tight">
          세 가지 지정, 무엇이 다른가
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지정 유형별 주요 효과
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주로 달라지는 것
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  투기과열지구
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  LTV·DTI 한도 축소, 분양권 전매 제한 등(금융 규제지역에 포함)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조정대상지역
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2주택 이상 취득세 중과(8%·12%), 다주택자 조정지역 양도세 중과
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  토지거래허가구역
                </th>
                <td className="px-3 py-2.5">주택·토지 매매 시 구청 허가 필요(계약 전 신청)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          금융 규제에서 말하는 「규제지역」은 보통 <strong>투기과열지구 또는 조정대상지역</strong>을 가리킵니다. 2025년
          10·15 대책 이후 수도권 대부분이 세 유형이 겹치게 지정된 경우가 많습니다. 규제 지역과 맞닿은 비규제지역으로
          수요가 이동하는 <strong>풍선효과</strong>는{" "}
          <Link href="/guide/real-estate-balloon-effect-2026-guide" className="text-primary underline-offset-4 hover:underline">
            부동산 풍선효과 가이드
          </Link>
          에서 동탄·기흥·구리·남양주 사례와 함께 정리했습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rade-summary">
        <h2 id="guide-rade-summary" className="text-foreground text-xl font-semibold tracking-tight">
          주택 수별로 보면
        </h2>
        <p>
          아래 표는 「규제지역에 살거나, 규제지역에서 추가로 살 때」 체감이 큰 변화를 한눈에 모은 것입니다.
          무주택·첫 매수는 대출 한도 축소가, 다주택자는 취득세·양도세 중과가 먼저 걸리는 경우가 많습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              규제지역 지정 시 체감 변화
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출(LTV)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  양도세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택·첫 매수
                </th>
                <td className="border-border border-b px-3 py-2.5">규제지역도 LTV 70% 유지(생애최초 70~80%)</td>
                <td className="border-border border-b px-3 py-2.5">1주택 세율 동일(1% 등)</td>
                <td className="border-border border-b px-3 py-2.5">해당 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택자·추가 매수
                </th>
                <td className="border-border border-b px-3 py-2.5">규제지역 LTV 40%로 축소</td>
                <td className="border-border border-b px-3 py-2.5">조정지역이면 2주택 8% 중과</td>
                <td className="border-border border-b px-3 py-2.5">기존 주택 매도 시 일반 세율</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  다주택자·추가 매수
                </th>
                <td className="border-border border-b px-3 py-2.5">규제지역 신규 주담대 사실상 불가(LTV 0%)</td>
                <td className="border-border border-b px-3 py-2.5">조정지역 2주택 8%·3주택 12%</td>
                <td className="border-border border-b px-3 py-2.5">조정지역 보유 주택 매도 시 중과</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  1주택만 보유·거주 중
                </th>
                <td className="px-3 py-2.5">기존 대출은 유지, 신규 매수 시에만 규제 적용</td>
                <td className="px-3 py-2.5">추가 취득 없으면 변화 없음</td>
                <td className="px-3 py-2.5">1주택 양도세 비과세 요건 동일</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ LTV는 2026년 4월 기준 금융당국 가이드라인이며, 은행·상품별로 다를 수 있습니다.
        </p>
        <p>
          1주택만 갖고 있는데 「규제와 무관하다」고 생각하기 쉽지만, <strong>갈아타기·추가 매수</strong> 순간
          LTV 40%와 스트레스 DSR이 적용됩니다. 다주택자는 신규 주담대가 막히는 동시에 조정지역 취득세 8%·12%를
          함께 봐야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rade-loan">
        <h2 id="guide-rade-loan" className="text-foreground text-xl font-semibold tracking-tight">
          ① 대출 — LTV·스트레스 DSR
        </h2>
        <p>규제지역 지정의 체감은 보통 <strong>대출 한도 축소</strong>에서 먼저 옵니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              비규제 vs 규제지역 LTV(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비규제지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  규제지역
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">70%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  2주택 이상
                </th>
                <td className="px-3 py-2.5">60%</td>
                <td className="px-3 py-2.5">0%(신규 주담대 사실상 불가)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-foreground text-base font-semibold">1주택자·규제지역 5억 원 아파트 추가 매수</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              LTV 차이로 필요한 자기자금
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비규제지역(70%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  규제지역(40%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  최대 대출
                </th>
                <td className="border-border border-b px-3 py-2.5">3억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">2억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  필요 자기자금(대출 외)
                </th>
                <td className="px-3 py-2.5">1억 5,000만 원</td>
                <td className="px-3 py-2.5">3억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          LTV만 보면 1억 5천만 원 더 필요합니다. 여기에 DSR·스트레스 DSR이 겹치면 실제 한도는 더 줄 수 있습니다. 2025년
          10·15 대책 이후 수도권·규제지역 주담대는 스트레스 가산금리 <strong>명목 3.0%p 하한</strong>이 적용됩니다.{" "}
          <Link href="/guide/stress-dsr-explained" className="text-primary underline-offset-4 hover:underline">
            스트레스 DSR
          </Link>
          가이드를 참고하세요.
        </p>
        <p>
          2026년 4월 17일부터 수도권·규제지역 <strong>다주택자 아파트 담보대출 만기 연장</strong>도 원칙적으로 불허됩니다.{" "}
          <Link href="/guide/mortgage-maturity-extension-guide" className="text-primary underline-offset-4 hover:underline">
            만기 연장 규제
          </Link>
          를 함께 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rade-acquisition">
        <h2 id="guide-rade-acquisition" className="text-foreground text-xl font-semibold tracking-tight">
          ② 취득세 — 조정대상지역에서 2주택
        </h2>
        <p>
          <strong>1주택 무주택 매수</strong>는 조정대상지역이어도 취득세율이 같습니다(1% 구간 등). 차이는{" "}
          <strong>2주택 이상 추가 취득</strong> 때 납니다. 조정대상지역이면 2주택 8%, 3주택 12% 중과가 붙습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2주택 취득 시 매매가별 차이(전용 85㎡ 이하·농특세 제외)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비조정지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조정대상지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  차이
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">4,200만 원</td>
                <td className="border-border border-b px-3 py-2.5">+3,650만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
                <td className="border-border border-b px-3 py-2.5">5,880만 원</td>
                <td className="border-border border-b px-3 py-2.5">+4,596만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">3,300만 원</td>
                <td className="px-3 py-2.5">8,400만 원</td>
                <td className="px-3 py-2.5">+5,100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          취득세는 <strong>취득 당시</strong> 그 주택이 조정대상지역인지로 결정됩니다. 계약 전에 지정 여부를 확인해야
          합니다. 상세는{" "}
          <Link href="/guide/second-home-acquisition-tax-surcharge-2026-guide" className="text-primary underline-offset-4 hover:underline">
            2주택자 취득세 중과
          </Link>
          ·{" "}
          <Link href="/guide/temporary-two-home-acquisition-tax-exception-guide" className="text-primary underline-offset-4 hover:underline">
            일시적 2주택 특례
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rade-capital">
        <h2 id="guide-rade-capital" className="text-foreground text-xl font-semibold tracking-tight">
          ③ 양도세 — 조정지역 다주택 중과
        </h2>
        <p>
          2026년 5월 10일부터 조정대상지역 내 <strong>다주택자 주택 양도</strong>에 양도소득세 중과가 다시 적용됩니다.
          2주택자는 기본세율 + 20%p, 3주택 이상은 + 30%p이며, 중과 대상 주택은 장기보유특별공제도 빠집니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              조정대상지역·다주택 양도세(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비조정지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조정대상지역
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택자 양도
                </th>
                <td className="border-border border-b px-3 py-2.5">기본세율(6~45%)</td>
                <td className="border-border border-b px-3 py-2.5">기본세율 + 20%p</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3주택 이상 양도
                </th>
                <td className="border-border border-b px-3 py-2.5">기본세율</td>
                <td className="border-border border-b px-3 py-2.5">기본세율 + 30%p</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  장기보유특별공제
                </th>
                <td className="px-3 py-2.5">적용 가능</td>
                <td className="px-3 py-2.5">중과 대상 주택은 배제</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          조정대상지역이 아닌 지방 주택은 다주택이어도 양도세 중과가 없습니다.{" "}
          <Link href="/guide/capital-gains-surcharge-revival-2026-guide" className="text-primary underline-offset-4 hover:underline">
            양도세 중과 부활
          </Link>
          가이드에서 예시 세액을 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-rade-permit">
        <h2 id="guide-rade-permit" className="text-foreground text-xl font-semibold tracking-tight">
          ④ 토지거래허가 — 매매 전 허가
        </h2>
        <p>
          토지거래허가구역에 들어가면 주택 매매도 <strong>계약 전 관할 구청 허가</strong>를 받아야 합니다. 허가 없이
          계약하면 무효가 될 수 있고, 실거주·무주택 등 요건을 갖춰야 허가가 나옵니다. 강남·서초·송파·용산 등 기존
          허가구역과 2025년 대책으로 늘어난 지역이 겹칩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rade-timing">
        <h2 id="guide-rade-timing" className="text-foreground text-xl font-semibold tracking-tight">
          지정 시점 — 언제 기준으로 적용되나
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              항목별 적용 기준일
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세 중과
                </th>
                <td className="border-border border-b px-3 py-2.5">취득일(잔금·등기) 당시 조정대상지역 여부</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주담대 LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 신청·실행 시점 담보 주택 소재지</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  양도세 중과
                </th>
                <td className="border-border border-b px-3 py-2.5">양도하는 주택이 조정대상지역에 있는지</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  토지거래허가
                </th>
                <td className="px-3 py-2.5">계약 체결 전 허가구역 해당 여부</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          이미 취득한 주택은 소급 과세되지 않습니다. 다만 그 집을 <strong>팔거나, 추가로 살 때</strong> 새 규제가
          걸립니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rade-areas">
        <h2 id="guide-rade-areas" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 현재 조정·규제지역(요약)
        </h2>
        <p>
          2025년 10월 15일 대책으로 서울 25개 자치구 전역과 경기 12개 지역(과천·광명·성남·수원·안양·용인·의왕·하남 등)이
          조정대상지역·규제지역으로 묶였습니다. 부산·대구 등 지방 광역시는 현재 대부분 해제 상태입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지역별 해당 여부
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조정·규제지역
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  서울 25개 자치구
                </th>
                <td className="border-border border-b px-3 py-2.5">해당</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  경기 12개(과천·광명·성남·수원 등)
                </th>
                <td className="border-border border-b px-3 py-2.5">해당</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  비수도권 광역시·지방
                </th>
                <td className="px-3 py-2.5">대부분 비해당(수시 변경)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          정확한 지정 범위는{" "}
          <a
            href="https://www.molit.go.kr"
            className="text-primary font-medium underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            국토교통부(molit.go.kr)
          </a>{" "}
          고시에서 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-rade-mistakes">
        <h2 id="guide-rade-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「규제지역이면 취득세가 무조건 오른다」</strong> — 1주택·무주택 매수는 동일합니다. 2주택 이상일 때
            조정대상지역 중과가 붙습니다.
          </li>
          <li>
            <strong>「지정 후에 산 집만 해당」</strong> — 취득세는 취득일 기준, 대출은 신청 시점 기준입니다. 지정 전
            계약·지정 후 잔금이면 중과될 수 있습니다.
          </li>
          <li>
            <strong>「규제지역 = 토지거래허가」</strong> — 겹치는 경우가 많지만 별도 지정입니다. 허가구역 여부는
            구청에서 확인합니다.
          </li>
          <li>
            <strong>「1주택만 있으면 아무 영향 없다」</strong> — 추가 매수·갈아타기 때 LTV 40%와 스트레스 DSR이
            적용됩니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rade-checklist">
        <h2 id="guide-rade-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          매수·매도 전 체크리스트
        </h2>
        <p>
          계약 전에 아래 항목을 순서대로 확인하면, 잔금 단계에서 「대출이 안 나온다」「취득세가 예상보다 크다」는
          상황을 줄일 수 있습니다. 특히 <strong>잔금일 기준 주택 수</strong>와 <strong>대출 실행 시점 LTV</strong>는
          계약서 날짜와 다를 수 있습니다.
        </p>
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
                  매물 소재지 조정·규제·허가구역 여부(국토부 고시)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  잔금일 기준 세대 주택 수
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  규제지역 LTV·DSR로 필요 자기자금
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  2주택 이상 시 취득세 8%·12% 중과 예상액
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  토지거래허가 필요 시 계약 전 허가 완료
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 규제지역 지정 현황·LTV·세율은 정부 정책에 따라 수시로 변동됩니다. 취득세는{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          , 대출 한도는{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          로 참고하고, 최종 확인은 금융기관·관할 세무과에 하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link
            href="/guide/multi-homeowner-loan-regulations-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 다주택자 LTV·만기 연장·규제지역 현황은 다주택자 규제 가이드에서 더 볼 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
