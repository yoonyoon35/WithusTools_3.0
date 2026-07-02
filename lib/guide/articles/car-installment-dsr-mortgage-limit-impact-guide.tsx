import Link from "next/link";

export const carInstallmentDsrMortgageLimitImpactGuideMeta = {
  slug: "car-installment-dsr-mortgage-limit-impact-guide",
  title: "주담대 차량 할부 한도·DSR 영향",
  description:
    "주담대 차량 할부 한도가 DSR 40%와 주택담보대출 승인에 미치는 영향, 연봉별 체감 차이, 할부 전·후 실행 순서. DSR 계산기로 한도 변화를 바로 확인할 수 있습니다.",
  updated: "2026년 7월 2일",
} as const;

export function CarInstallmentDsrMortgageLimitImpactGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-car-intro">
        <h2 id="guide-car-intro" className="text-foreground text-xl font-semibold tracking-tight">
          먼저 결론부터
        </h2>
        <p>
          주담대 차량 할부 한도는 DSR 계산에서 <strong>기존 부채의 월 원리금</strong>으로 반영됩니다. 자동차 할부가 있으면
          주택담보대출에 쓸 수 있는 월 상환 여력이 줄고, 결과적으로 승인 한도가 내려갑니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-car-why">
        <h2 id="guide-car-why" className="text-foreground text-xl font-semibold tracking-tight">
          왜 자동차 할부가 한도를 깎을까
        </h2>
        <p>
          은행권 주담대 심사는 보통 DSR 40%를 기준으로 움직입니다. 연소득으로 계산한 연간 상환 가능액에서 기존 대출 상환액을
          먼저 빼고, 남은 금액으로 새 주담대 가능액을 산출합니다. 자동차 할부도 이 차감 항목에 들어가기 때문에 한도에 직접 영향을
          줍니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-car-dsr-structure">
        <h2 id="guide-car-dsr-structure" className="text-foreground text-xl font-semibold tracking-tight">
          DSR 반영 구조
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              자동차 할부 반영 시 한도 산출 흐름
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  계산
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  의미
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1단계
                </th>
                <td className="border-border border-b px-3 py-2.5">연소득 × DSR 40%</td>
                <td className="border-border border-b px-3 py-2.5">연간 총 상환 가능 한도</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2단계
                </th>
                <td className="border-border border-b px-3 py-2.5">기존 부채 연간 원리금 차감</td>
                <td className="border-border border-b px-3 py-2.5">자동차 할부·신용대출 등이 차감됨</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  3단계
                </th>
                <td className="px-3 py-2.5">남은 금액으로 주담대 가능액 역산</td>
                <td className="px-3 py-2.5">실제 승인 가능한 한도</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-car-example">
        <h2 id="guide-car-example" className="text-foreground text-xl font-semibold tracking-tight">
          숫자로 보는 영향(연봉 6,000만 원 예시)
        </h2>
        <p className="text-muted-foreground text-sm">
          금리 4.2%, 30년 원리금균등, 다른 조건 동일 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              자동차 할부 유무에 따른 주담대 가능액 비교(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기존 부채 월 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주담대에 쓸 수 있는 월 상환 여력
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  추정 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자동차 할부 없음
                </th>
                <td className="border-border border-b px-3 py-2.5">0원</td>
                <td className="border-border border-b px-3 py-2.5">약 200만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 9,300만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자동차 할부 30만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 170만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 3,400만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자동차 할부 50만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 150만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 9,500만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  자동차 할부 30만 원 + 신용대출 20만 원
                </th>
                <td className="px-3 py-2.5">50만 원</td>
                <td className="px-3 py-2.5">약 150만 원</td>
                <td className="px-3 py-2.5">약 2억 9,500만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          같은 금리에서도 월 상환 여력이 20만~30만 원만 줄어도 한도가 수천만 원 단위로 바뀝니다. 집을 먼저 계약하려는 시점이라면
          “차량 할부 유지”가 생각보다 큰 비용이 될 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-car-ltv">
        <h2 id="guide-car-ltv" className="text-foreground text-xl font-semibold tracking-tight">
          DSR만 보면 안 되는 이유: LTV와 동시에 적용
        </h2>
        <p>
          주담대 실제 한도는 DSR 산출액과 LTV 산출액 중 더 낮은 값으로 정해집니다. 자동차 할부는 DSR 쪽을 낮추는 변수이고, 담보
          가격·지역 규제는 LTV 쪽을 낮추는 변수입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              어떤 조건에서 무엇이 먼저 한도를 막는지
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  먼저 걸리는 규제
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  설명
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연봉 대비 부채가 적고, 고가 주택 매수
                </th>
                <td className="border-border border-b px-3 py-2.5">LTV</td>
                <td className="border-border border-b px-3 py-2.5">담보 인정비율이 상한을 먼저 만듦</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자동차 할부·신용대출이 이미 존재
                </th>
                <td className="border-border border-b px-3 py-2.5">DSR</td>
                <td className="border-border border-b px-3 py-2.5">월 상환 여력이 줄어 DSR 한도 하락</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  금리 상승기
                </th>
                <td className="px-3 py-2.5">DSR</td>
                <td className="px-3 py-2.5">같은 원금이라도 월 상환액이 올라 한도 축소</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-car-strategy">
        <h2 id="guide-car-strategy" className="text-foreground text-xl font-semibold tracking-tight">
          실무에서 많이 쓰는 대응 순서
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              한도 방어를 위한 현실적인 실행 순서
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실행 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 포인트
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1
                </th>
                <td className="border-border border-b px-3 py-2.5">기존 부채 월 상환액 전부 합산</td>
                <td className="border-border border-b px-3 py-2.5">자동차 할부·카드론·신용대출 누락 방지</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2
                </th>
                <td className="border-border border-b px-3 py-2.5">희망 주택 가격대에서 LTV 상한 계산</td>
                <td className="border-border border-b px-3 py-2.5">DSR과 비교해 어느 쪽이 먼저 막히는지 판단</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3
                </th>
                <td className="border-border border-b px-3 py-2.5">자동차 할부 만기·중도상환 비용 확인</td>
                <td className="border-border border-b px-3 py-2.5">주담대 실행 전 정리할지 손익 비교</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  4
                </th>
                <td className="px-3 py-2.5">은행 2곳 이상 사전심사로 조건 비교</td>
                <td className="px-3 py-2.5">승인 한도와 금리, 우대금리 항목까지 확인</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-car-note">
        <h2 id="guide-car-note" className="text-foreground text-xl font-semibold tracking-tight">
          참고할 점
        </h2>
        <p>
          실제 DSR 산정은 금융기관 내부 룰, 스트레스 DSR, 소득 인정 방식에 따라 달라집니다. 따라서 표의 수치는 방향을 잡는 참고값으로
          보고, 계약 전에는 반드시 사전심사로 확정 조건을 확인하는 편이 안전합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            자동차 할부를 포함한 월 상환 부담은 대출 이자 계산기에서 바로 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          에서 소득·기존 부채를 넣고 한도 변화를 함께 비교해 보세요.
        </p>
      </aside>
    </>
  );
}
