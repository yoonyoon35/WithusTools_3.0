import Link from "next/link";

export const dongtanGiheungGuriSecondHomeAcquisitionTax2026GuideMeta = {
  slug: "dongtan-giheung-guri-second-home-acquisition-tax-2026-guide",
  title: "동탄·구리·기흥 2주택 취득세…조정지역 8% 얼마나 나오나",
  description:
    "2026년 7월 1일 조정대상지역 된 화성 동탄구·용인 기흥구·구리시 2주택·3주택 취득세 8%·12% 중과, 5억·6억·7억·10억 예시, 취득일·일시적 2주택·농특세·양도세 연계 안내.",
  updated: "2026년 7월 1일",
} as const;

export function DongtanGiheungGuriSecondHomeAcquisitionTax2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-dgst-intro">
        <h2 id="guide-dgst-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 1일 기준
        </h2>
        <p>
          동탄구·기흥구·구리시가 <strong>조정대상지역</strong>이 되면, 이 지역에서 주택을 추가 취득해 2주택·3주택이
          되는 경우 취득세 <strong>중과</strong>가 적용됩니다. 1주택·무주택 첫 매수는 비조정지역과 같이 1% 구간 등
          일반 세율입니다.
        </p>
        <p>
          세금은 <strong>취득일(잔금·등기 완료일)</strong> 당시 조정대상지역 여부와 세대 주택 수로 정해집니다. 6월에
          계약했어도 7월 1일 이후 잔금이면 조정지역·8% 중과가 붙을 수 있습니다. 반대로 6월 30일까지 잔금·등기를
          마쳤다면 비조정지역 세율이 적용됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dgst-when">
        <h2 id="guide-dgst-when" className="text-foreground text-xl font-semibold tracking-tight">
          언제 8%·12%가 붙나
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득 시 세대 주택 수 × 지역
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  동탄·기흥·구리(7/1~)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택 → 첫 주택 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">일반 세율(1% 등)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택 보유 → 추가 취득(2주택)
                </th>
                <td className="border-border border-b px-3 py-2.5">8% 중과</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택 보유 → 추가 취득(3주택)
                </th>
                <td className="border-border border-b px-3 py-2.5">12% 중과</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  일시적 2주택 특례 충족
                </th>
                <td className="px-3 py-2.5">1~3% 일반(종전 주택 3년 내 처분 등)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          주택 수는 취득일 기준 <strong>세대</strong> 단위입니다. 배우자·직계존비속이 함께 사는 1세대에 묶인 주택은
          합산됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dgst-rates">
        <h2 id="guide-dgst-rates" className="text-foreground text-xl font-semibold tracking-tight">
          2주택·3주택 취득세율
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              동탄·기흥·구리(조정대상지역) 취득
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계(참고)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택(첫 매수)
                </th>
                <td className="border-border border-b px-3 py-2.5">1% 등 일반</td>
                <td className="border-border border-b px-3 py-2.5">약 1.1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
                <td className="border-border border-b px-3 py-2.5">약 8.4%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  3주택 이상
                </th>
                <td className="px-3 py-2.5">12%</td>
                <td className="px-3 py-2.5">약 12.4%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          합계는 지방교육세(취득세의 10%) 포함·전용 85㎡ 이하·농특세 제외 참고치입니다. 85㎡ 초과 시 농어촌특별세
          0.6%가 더해집니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dgst-breakdown">
        <h2 id="guide-dgst-breakdown" className="text-foreground text-xl font-semibold tracking-tight">
          7억 원 2주택 — 세목별 계산
        </h2>
        <p className="text-muted-foreground text-sm">동탄·구리 7억 원대 매물이 많아, 2주택 취득 시 세목을 나눠 봅니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              7억 원, 2주택, 전용 85㎡ 이하
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목
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
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
                <td className="border-border border-b px-3 py-2.5">5,600만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">280만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">—</td>
                <td className="px-3 py-2.5">5,880만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          전용 85㎡를 넘는 대형 평형이면 농특세 0.6%(7억 기준 420만 원)가 추가되어 합계 약 <strong>6,300만 원</strong>
          수준입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dgst-examples">
        <h2 id="guide-dgst-examples" className="text-foreground text-xl font-semibold tracking-tight">
          매매가별 2주택 취득세
        </h2>
        <p className="text-muted-foreground text-sm">
          7월 1일 이후 동탄·기흥·구리에서 2주택 취득 가정. 취득세 계산기·전국 가이드와 동일 산출 기준.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              비조정 vs 조정(동탄·기흥·구리) 2주택
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지정 전(비조정)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  7월 1일 이후(조정)
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
                <td className="border-border border-b px-3 py-2.5">약 550만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 4,200만 원</td>
                <td className="border-border border-b px-3 py-2.5">+3,650만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 660만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 5,040만 원</td>
                <td className="border-border border-b px-3 py-2.5">+4,380만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 5,880만 원</td>
                <td className="border-border border-b px-3 py-2.5">+4,596만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 880만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 6,720만 원</td>
                <td className="border-border border-b px-3 py-2.5">+5,840만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">약 3,300만 원</td>
                <td className="px-3 py-2.5">약 8,400만 원</td>
                <td className="px-3 py-2.5">+5,100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          비조정 지역 열은 가격 구간별 일반 세율이 반영된 예시입니다. 7억·8억 행은 구간 경계 때문에 역전처럼 보일 수
          있어, 정확한 금액은 계산기로 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dgst-third">
        <h2 id="guide-dgst-third" className="text-foreground text-xl font-semibold tracking-tight">
          3주택 취득 — 12% 예시
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              3주택, 전용 85㎡ 이하·농특세 제외
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계(약 12.4%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 7,440만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="px-3 py-2.5">약 8,680만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          3주택 이상은 LTV뿐 아니라 양도세 중과·종부세 구간도 함께 올라갑니다. 동탄·기흥·구리에 투자용으로 세 번째
          주택을 사는 경우 취득·보유·양도 세 부담을 한꺼번에 봐야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dgst-date">
        <h2 id="guide-dgst-date" className="text-foreground text-xl font-semibold tracking-tight">
          계약일 vs 취득일 — 6월 30일 경계
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              잔금일 기준 적용 세율(2주택 가정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  잔금·등기 완료일
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  동탄·기흥·구리 2주택(7억)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2026년 6월 30일 이전
                </th>
                <td className="border-border border-b px-3 py-2.5">비조정 세율(약 1,284만 원)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2026년 7월 1일 이후
                </th>
                <td className="border-border border-b px-3 py-2.5">8% 중과(약 5,880만 원)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  차이
                </th>
                <td className="px-3 py-2.5">약 4,596만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          6월 말 「막차」 계약이 보도됐지만, 세율은 <strong>계약서 날짜가 아니라 취득일</strong>로 갈립니다. 잔금을
          7월로 미루면 8%가 붙을 수 있으니, 계약서·잔금일을 먼저 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dgst-temporary">
        <h2 id="guide-dgst-temporary" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택 — 갈아타기 때 검토할 것
        </h2>
        <p>
          이사·직장 이동 등으로 새 집을 먼저 사고 기존 집을 나중에 파는 경우,{" "}
          <Link
            href="/guide/temporary-two-home-acquisition-tax-exception-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            일시적 2주택
          </Link>{" "}
          특례를 쓰면 조정지역에서도 8% 대신 1~3%만 낼 수 있습니다. 다만 아래를 모두 충족해야 합니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>취득 전 1주택자였을 것</li>
          <li>이사·취업·학업 등 인정 사유에 해당할 것</li>
          <li>종전 주택을 취득일부터 <strong>3년 이내</strong> 처분할 것</li>
          <li>처분 후 위택스 등에 신고·환급(또는 추징) 절차를 밟을 것</li>
        </ul>
        <p className="text-muted-foreground text-sm">
          동탄·기흥·구리로 갈아타는 실거주 목적이라면 일시적 2주택 검토 가치가 큽니다. 투자 목적 추가 매수는 통상
          해당되지 않습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dgst-case">
        <h2 id="guide-dgst-case" className="text-foreground text-xl font-semibold tracking-tight">
          케이스 — 갈아타기 vs 투자 매수
        </h2>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">서울 1주택 → 동탄 7억 갈아타기(7월 15일 잔금)</h3>
          <p>
            잔금일에 기존 집 처분 전이면 2주택·조정지역 취득으로 <strong>약 5,880만 원</strong> 수준(위 표). 기존
            주택을 먼저 처분해 1주택으로 취득하거나, 일시적 2주택 요건을 충족하면 중과를 피할 수 있는지 검토해야
            합니다. LTV는{" "}
            <Link
              href="/guide/dongtan-giheung-guri-regulated-area-ltv-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              40%·처분조건부
            </Link>
            도 함께 봐야 합니다.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">구리 1주택 보유 → 구리 추가 6억 매수(투자)</h3>
          <p>
            같은 조정지역 내 2주택 취득이므로 <strong>약 5,040만 원</strong>. LTV도 유주택 추가 매수로 신규 주담대가
            제한됩니다. 전세를 끼는 갭투자는{" "}
            <Link
              href="/guide/dongtan-giheung-guri-gap-investment-land-permit-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              토허·전세대출 규제
            </Link>
            까지 겹칩니다.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">용인 수지 1주택 → 기흥 8억 추가(7월 잔금)</h3>
          <p>
            수지구는 비조정·기흥구는 조정이지만, 취득지가 조정지역이면 2주택 8% 중과입니다. 8억 기준 약{" "}
            <strong>6,720만 원</strong>. 타 지역 1주택을 보유한 채 기흥에 투자 매수하는 전형적인 패턴입니다.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">무주택 → 기흥 8억 첫 매수</h3>
          <p>
            1주택 취득이므로 취득세는 일반 세율(약 880만 원, 1.1% 구간). 조정지역 지정과 무관합니다. 다만 LTV 40%·
            토허·전입 의무는 적용됩니다.
          </p>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dgst-sell">
        <h2 id="guide-dgst-sell" className="text-foreground text-xl font-semibold tracking-tight">
          매도(양도세)도 조정지역이면
        </h2>
        <p>
          2주택 이상이 동탄·기흥·구리 주택을 매도할 때도 조정대상지역이면{" "}
          <strong>양도소득세 중과</strong>가 적용됩니다(2026년 5월 10일부터 재시행). 취득세 8%를 내고 샀다가, 보유
          기간이 짧으면 양도세 중과까지 겹칠 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              조정지역 양도세 중과(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보유 주택 수
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중과
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택
                </th>
                <td className="border-border border-b px-3 py-2.5">기본세율 + 20%p</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  3주택 이상
                </th>
                <td className="px-3 py-2.5">기본세율 + 30%p</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <Link href="/guide/capital-gains-surcharge-revival-2026-guide" className="text-primary underline-offset-4 hover:underline">
            양도세 중과
          </Link>
          가이드를 참고하세요. 취득·보유·처분을 한 묶음으로 보는 것이 안전합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dgst-mistakes">
        <h2 id="guide-dgst-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「조정지역이면 1주택도 8%」</strong> — 2주택 이상 추가 취득 때만 중과입니다. 무주택·1주택 첫 매수는
            일반 세율입니다.
          </li>
          <li>
            <strong>「6월에 계약했으니 비조정」</strong> — 잔금·등기가 7월 1일 이후면 조정지역·8%입니다.
          </li>
          <li>
            <strong>「배우자 명의로 사면 1주택」</strong> — 세대 합산이므로 이미 1주택이 있으면 2주택 취득입니다.
          </li>
          <li>
            <strong>「취득세만 크면 된다」</strong> — LTV 40%·토허·양도세 중과까지 합쳐 자금 계획을 세워야 합니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dgst-checklist">
        <h2 id="guide-dgst-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          취득 전 확인
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              체크리스트
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
                  잔금·등기일 기준 세대 주택 수
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  취득일이 7월 1일 이전인지 이후인지
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  일시적 2주택·생애최초 감면 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  전용 85㎡ 초과 여부(농특세 0.6%)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  2주택 중과 예상액·잔금일 자금 확보
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 취득세율·지역 지정은 정부 고시에 따릅니다. 정확한 세액은{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          ·위택스(wetax.go.kr)·관할 구청에서 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link
            href="/guide/second-home-acquisition-tax-surcharge-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 조정대상지역 2주택 취득세 전국 기준은 2주택자 취득세 중과 가이드에서 볼 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/dongtan-giheung-guri-regulated-area-ltv-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 무주택·1주택 매수는 LTV 40% 가이드와 함께 보세요.
          </Link>
        </p>
      </aside>
    </>
  );
}
