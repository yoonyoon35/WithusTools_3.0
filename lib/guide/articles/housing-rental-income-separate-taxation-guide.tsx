import Link from "next/link";

export const housingRentalIncomeSeparateTaxationGuideMeta = {
  slug: "housing-rental-income-separate-taxation-guide",
  title: "주택임대소득 종합과세·분리과세 | 2천만 원 이하, 필요경비·공제·14%",
  description:
    "수입금액 2천만 원 이하 선택, 등록·미등록 필요경비율과 공제금액, 14% 세율, 세액감면, 사후관리, 계산 사례를 식으로 정리했습니다.",
  updated: "2026년 9월 23일",
} as const;

export function HousingRentalIncomeSeparateTaxationGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ghrs-intro">
        <h2 id="guide-ghrs-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2천만 원 이하이면 선택
        </h2>
        <p>
          주택임대소득 총수입금액 합계가 2천만 원 이하이면 종합과세와 분리과세 중 선택할 수
          있습니다(소득세법 §64의2, 소득세법 시행령 §122의2). 두 계산은 다음과 같습니다.
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>(주택임대소득 + 종합과세 대상 다른 소득) × 누진세율 6~45%</li>
          <li>주택임대소득 × 14% + 종합과세 대상 다른 소득 × 누진세율 6~45%</li>
        </ol>
        <p>
          종합과세의 세율표는{" "}
          <Link
            href="/guide/comprehensive-income-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합소득세 계산 구조
          </Link>
          에 있습니다. 종합과세로 추계신고하면 필요경비는 기준·단순경비율이며, 그 식은{" "}
          <Link
            href="/guide/business-expense-ratio-application-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            경비율 적용 가이드
          </Link>
          에 있습니다. 홈택스에서는 세금종류별 서비스, 모의계산, 주택임대소득 종합·분리과세 예상세액
          비교하기(2025년 세액비교)에서 비교할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghrs-formula">
        <h2 id="guide-ghrs-formula" className="text-foreground text-xl font-semibold tracking-tight">
          분리과세 계산식
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택임대소득 분리과세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">구분</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">등록임대주택</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">미등록임대주택</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">수입금액</th>
                <td className="border-border border-b px-3 py-2.5">월세 + 간주임대료</td>
                <td className="border-border border-b px-3 py-2.5">월세 + 간주임대료</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">필요경비</th>
                <td className="border-border border-b px-3 py-2.5">수입금액 × 60%</td>
                <td className="border-border border-b px-3 py-2.5">수입금액 × 50%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">소득금액(과세표준)</th>
                <td className="border-border border-b px-3 py-2.5">수입금액 − 필요경비 − 400만 원</td>
                <td className="border-border border-b px-3 py-2.5">수입금액 − 필요경비 − 200만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">산출세액</th>
                <td className="border-border border-b px-3 py-2.5">과세표준 × 14%</td>
                <td className="border-border border-b px-3 py-2.5">과세표준 × 14%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">세액감면</th>
                <td className="border-border border-b px-3 py-2.5">
                  단기(4년) 30%(2호 이상 20%), 장기(8·10년) 75%(2호 이상 50%)
                </td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">결정세액</th>
                <td className="px-3 py-2.5">산출세액 − 세액감면</td>
                <td className="px-3 py-2.5">산출세액 − 세액감면</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            등록임대주택은 지방자치단체와 세무서에 모두 등록하고, 임대료 증가율이 5%를 넘지 않아야
            합니다. 민간임대주택에 관한 특별법 제5조 등록을 한 사람이 임대 중인
            공공지원민간임대주택, 장기일반민간임대주택 또는 단기민간임대주택일 것, 소득세법 제168조
            사업자등록이 된 임대주택일 것, 임대보증금 또는 임대료 증가율이 5%를 넘지 않을 것(계약
            체결 또는 증액 후 1년 이내 재증액 불가)이 요건입니다.
          </li>
          <li>
            400만 원·200만 원 공제는 분리과세 주택임대소득을 뺀 종합소득금액이 2천만 원 이하일 때
            적용합니다. 등록은 400만 원, 미등록은 200만 원입니다.
          </li>
          <li>
            세액감면은 국민주택 규모 주택으로 조세특례제한법 제96조 요건을 충족해야 합니다. 소형주택
            임대사업자 감면은 단기 30%(2호 이상 20%), 장기 75%(2호 이상 50%)입니다. 분리과세를
            선택하면 종합과세 쪽 공제·감면에서 이 감면은 빠집니다.
          </li>
          <li>
            2020년 8월 18일 민간임대주택법 개정으로 단기임대와 아파트 장기임대가 폐지되고 10년
            장기임대가 신설되었다는 문구가 있습니다.
          </li>
          <li>
            일부 기간만 등록 임대한 경우 그 수입금액은 월수로 계산합니다. 임대기간 개시일 또는
            종료일이 속하는 달이 15일 이상이면 1개월로 봅니다.
          </li>
          <li>
            과세표준 = 수입금액 − 필요경비(미등록 50%, 등록 60%) − 공제금액(미등록 200만 원, 등록
            400만 원).
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghrs-compare">
        <h2 id="guide-ghrs-compare" className="text-foreground text-xl font-semibold tracking-tight">
          종합과세와 분리과세를 같이 둘 때
        </h2>
        <p>종합과세와 분리과세를 나란히 보면 다음과 같습니다. 결정세액은 종합과세분과 분리과세분을 합쳐 신고·납부합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">구분</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">종합과세 선택</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">분리과세 선택</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">주택임대 수입</th>
                <td className="border-border border-b px-3 py-2.5">월세 + 간주임대료</td>
                <td className="border-border border-b px-3 py-2.5">
                  종합과세 소득에는 넣지 않고, 분리과세 주택임대에 월세 + 간주임대료
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">필요경비</th>
                <td className="border-border border-b px-3 py-2.5">장부면 실제 경비, 추계면 기준·단순경비율</td>
                <td className="border-border border-b px-3 py-2.5">등록 60%, 미등록 50%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">종합소득금액</th>
                <td className="border-border border-b px-3 py-2.5">주택임대 소득금액 + 다른 종합과세 소득</td>
                <td className="border-border border-b px-3 py-2.5">주택임대소득을 뺀 종합과세 소득</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">소득공제·세율</th>
                <td className="border-border border-b px-3 py-2.5">인적공제 등, 6~45%</td>
                <td className="border-border border-b px-3 py-2.5">
                  다른 소득은 인적공제 등 후 6~45%. 주택임대 분리분은 14%
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">감면</th>
                <td className="px-3 py-2.5">소득세법·조세특례제한법 공제·감면. 소형주택 임대사업자 감면 포함</td>
                <td className="px-3 py-2.5">
                  다른 소득의 공제·감면에서는 소형주택 임대사업자 감면을 제외. 분리 주택임대에만 그 감면
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghrs-cases">
        <h2 id="guide-ghrs-cases" className="text-foreground text-xl font-semibold tracking-tight">
          계산 사례
        </h2>
        <p>
          사례는 종합·분리 세액만 비교합니다. 다른 사람의 인적공제 대상이 될 수 있는지와 건강보험료는
          넣지 않습니다. 주택임대업 외 종합소득금액에는 연말정산한
          근로소득금액도 포함됩니다. 사례의 단순경비율 42.6%는 일반주택임대(701102) 종합과세 추계에
          쓴 값입니다. 15% 구간 산출세액은 누진공제 1,260,000원을 빼야 아래 세액과 같습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              사례 1 — 다른 소득 0, 미등록, 수입 2천만 원, 본인 기본공제 150만 원, 표준세액공제 7만 원
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  종합과세
                </th>
                <td className="border-border border-b px-3 py-2.5 leading-relaxed">
                  필요경비 20,000,000 × 42.6% = 8,520,000. 소득금액 11,480,000. 과세표준 11,480,000 −
                  1,500,000 = 9,980,000. 산출세액 9,980,000 × 6% = 598,800. 결정세액 598,800 − 70,000 =
                  528,800원
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-muted/30 px-3 py-2.5 font-medium">
                  분리과세
                </th>
                <td className="px-3 py-2.5 leading-relaxed">
                  필요경비 20,000,000 × 50% = 10,000,000. 10,000,000 − 2,000,000 = 8,000,000. 산출세액
                  8,000,000 × 14% = 1,120,000원
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          이 사례는 단순경비율, 사업자등록 없음, 다른 소득 없음을 전제합니다. 종합과세 세율 6%가
          적용되므로 주택임대 업종 701101~701104, 701301은 종합과세가 분리과세(14%)보다 유리하거나
          같습니다. 세액은 종합 528,800원, 분리 1,120,000원입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              사례 2 — 다른 종합소득 800만 원, 2025년 계속 세무서·지자체 등록, 증가율 5% 이하, 수입 1천만 원
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  종합과세
                </th>
                <td className="border-border border-b px-3 py-2.5 leading-relaxed">
                  필요경비 10,000,000 × 42.60% = 4,260,000. 임대 소득 5,740,000 + 8,000,000 =
                  13,740,000. 과세표준 13,740,000 − 1,500,000 = 12,240,000. 산출세액 12,240,000 × 15% −
                  1,260,000 = 576,000. 결정세액 576,000 − 70,000 = 506,000원
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-muted/30 px-3 py-2.5 font-medium">
                  분리과세
                </th>
                <td className="px-3 py-2.5 leading-relaxed">
                  다른 소득 과세표준 8,000,000 − 1,500,000 = 6,500,000. 산출세액 6,500,000 × 6% =
                  390,000. 결정세액 390,000 − 70,000 = 320,000원. 분리 주택임대는 10,000,000 × 60% =
                  6,000,000을 빼고 공제 4,000,000을 빼 과세표준 0, 세액 0
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          합계는 종합 506,000원, 분리 320,000원입니다. 주택임대 총수입 1천만 원 이하,
          주택임대를 뺀 다른 종합과세 소득 2천만 원 이하, 등록 우대(필요경비 60%·공제 400만 원)이면
          분리과세 소득금액과 세액이 없으므로 701101~701104, 701301은 분리과세가 유리하거나 같습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              사례 3 — 다른 종합소득 800만 원, 미등록, 수입 400만 원
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  종합과세
                </th>
                <td className="border-border border-b px-3 py-2.5 leading-relaxed">
                  필요경비 4,000,000 × 42.60% = 1,704,000. 임대 소득 2,296,000 + 8,000,000 =
                  10,296,000. 과세표준 10,296,000 − 1,500,000 = 8,796,000. 산출세액 8,796,000 × 6% =
                  527,760. 결정세액 527,760 − 70,000 = 457,760원
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-muted/30 px-3 py-2.5 font-medium">
                  분리과세
                </th>
                <td className="px-3 py-2.5 leading-relaxed">
                  다른 소득 결정세액은 사례 2와 같은 320,000원. 분리 주택임대는 4,000,000 × 50% =
                  2,000,000을 빼고 공제 2,000,000을 빼 과세표준 0
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          합계는 종합 457,760원, 분리 320,000원입니다. 총수입 400만 원 이하이고 주택임대를 뺀
          다른 종합과세 소득이 2천만 원 이하이면, 분리과세 소득금액과 세액이 없으므로 같은 업종은
          분리과세가 유리하거나 같습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghrs-register">
        <h2 id="guide-ghrs-register" className="text-foreground text-xl font-semibold tracking-tight">
          등록 여부에 따른 분리과세 세액
        </h2>
        <p>
          가정은 주택임대 외 종합소득금액 2천만 원 이하, 등록 쪽은 필요경비·공제·감면 요건을 충족한
          경우입니다. 총수입 2,000만 원이고, 소득세만 비교합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">구분</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">장기 8·10년 이상 등록</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">단기 4년 이상 등록</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">그 밖</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">필요경비</th>
                <td className="border-border border-b px-3 py-2.5">1,200만 원(60%)</td>
                <td className="border-border border-b px-3 py-2.5">1,200만 원(60%)</td>
                <td className="border-border border-b px-3 py-2.5">1,000만 원(50%)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">공제금액</th>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">과세표준</th>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
                <td className="border-border border-b px-3 py-2.5">800만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">산출세액</th>
                <td className="border-border border-b px-3 py-2.5">56만 원(14%)</td>
                <td className="border-border border-b px-3 py-2.5">56만 원(14%)</td>
                <td className="border-border border-b px-3 py-2.5">112만 원(14%)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">세액감면</th>
                <td className="border-border border-b px-3 py-2.5">42만 원(75%)</td>
                <td className="border-border border-b px-3 py-2.5">16.8만 원(30%)</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">결정세액</th>
                <td className="px-3 py-2.5">14만 원</td>
                <td className="px-3 py-2.5">39.2만 원</td>
                <td className="px-3 py-2.5">112만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          등록임대주택의 필요경비율 60%와 공제 400만 원을 적용한 뒤 그 주택을 4년 이상 임대하지 않으면,
          2020년 8월 18일 이후 지방자치단체에 등록한 민간임대주택은 10년, 미등록 계산(필요경비 50%,
          공제 200만 원) 세액과 당초 신고 세액의 차액과 이자 상당 가산액을 사유 발생일이 속하는
          과세연도 신고 때 소득세로 냅니다. 부득이한 사유가 있으면 이자 상당액은 제외합니다.
        </p>
        <p>
          이자 상당 가산액 = 세액 차액 × 감면 등을 받은 과세연도 종료일 다음 날부터 사유 발생 과세연도
          종료일까지의 기간 × 0.022%. 부득이한 사유는 파산·강제집행으로 처분하거나 임대할 수 없는
          경우, 법령상 의무 때문에 처분하거나 임대할 수 없는 경우, 채무자 회생 및 파산에 관한 법률
          회생절차에서 법원 허가를 받아 처분한 경우입니다. 사후관리 배제는 민간임대주택법상
          자진·자동 등록 말소, 단기민간임대주택이 재개발·재건축·리모델링으로 등록 말소되는 경우입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ghrs-count">
        <h2 id="guide-ghrs-count" className="text-foreground text-xl font-semibold tracking-tight">
          주택 수 계산
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>공동소유 주택은 원칙적으로 최다 지분자의 소유 주택으로 계산합니다.</li>
          <li>
            2020년 귀속부터, 그 주택의 임대소득 수입금액(주택 총 임대수입 × 지분율)이 연 600만 원
            이상이거나, 기준시가 12억 원을 초과하는 주택의 30%를 초과하는 공동 지분이면 소수 지분자
            주택 수에도 가산합니다. 기준시가 12억 원과 지분율 30%는 과세기간 말일 또는 양도일
            기준입니다.
          </li>
          <li>
            본인과 배우자가 각각 주택을 소유하면 부부 합산입니다. 같은 주택이 부부 양쪽에 들어가면
            지분이 더 큰 사람, 지분이 같으면 합의로 정한 사람 1명의 주택으로 계산합니다.
          </li>
        </ul>
        <p>
          김국세 지분이 서울 20%(타인 80%), 부산 49%(타인 51%), 대구 49%(타인 51%), 인천 20%(타인
          각 40%)이면 모두 소수 지분이라 과세 대상 판단 시 주택 수에 넣지 않습니다. 김국세에게
          귀속되는 임대수입이 주택별로 600만 원 이상이거나 부산·대구 주택 기준시가가 12억 원을 넘으면
          그 주택은 포함합니다. 인천 주택은 지분 40%인 두 사람의 주택 수에 모두 포함됩니다.
        </p>
        <p className="text-sm leading-relaxed">
          근거: 국세청{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7679&mi=2247"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            분리과세
          </a>
          ,{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7686&mi=2255"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            주택임대소득 신고 안내
          </a>
          .
        </p>
      </section>
    </>
  );
}
