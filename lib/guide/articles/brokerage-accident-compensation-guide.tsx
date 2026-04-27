import Link from "next/link";

export const brokerageAccidentCompensationGuideMeta = {
  slug: "brokerage-accident-compensation-guide",
  title: "부동산 중개사고 발생 시 보상받는 방법",
  description:
    "2026년 4월 기준 중개사고 유형, 공제·보험·공탁 보상 청구 절차, 손해액 확정 방법, 필요 서류·예방 체크리스트를 표로 정리했습니다.",
  updated: "2026년 4월 28일",
} as const;

export function BrokerageAccidentCompensationGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-bac-date">
        <h2 id="guide-bac-date" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          중개사고는 공인중개사의 고의 또는 과실로 거래 당사자에게 재산상 손해가 발생하는 경우를 말합니다. 공인중개사법 제30조
          제1항에 따라 개업공인중개사는 중개행위 중 고의 또는 과실로 거래당사자에게 재산상 손해를 발생하게 한 경우 그 손해를
          배상할 책임이 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bac-types">
        <h2 id="guide-bac-types" className="text-foreground text-xl font-semibold tracking-tight">
          중개사고 유형
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주요 중개사고 유형
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  사례
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  권리 관계 미확인
                </th>
                <td className="border-border border-b px-3 py-2.5">근저당·가압류 미고지로 인한 보증금 손실</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  허위 설명
                </th>
                <td className="border-border border-b px-3 py-2.5">실제와 다른 면적·시세·권리관계 설명</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  서류 위조·변조
                </th>
                <td className="border-border border-b px-3 py-2.5">등기부등본·계약서 조작</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이중 계약
                </th>
                <td className="border-border border-b px-3 py-2.5">동일 물건에 복수 계약 체결</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무권대리 계약
                </th>
                <td className="border-border border-b px-3 py-2.5">소유자 동의 없이 대리인과 계약 진행</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  확인·설명 의무 위반
                </th>
                <td className="px-3 py-2.5">법령상 거래 제한사항 미설명</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bac-system">
        <h2 id="guide-bac-system" className="text-foreground text-xl font-semibold tracking-tight">
          보상 체계: 3가지 경로
        </h2>
        <p>중개사고 피해 보상은 공인중개사가 가입한 보증 수단에 따라 청구 경로가 달라집니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보증 수단별 가입 기관·보상 한도
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보증 수단
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  가입 기관
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보상 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공제 (협회 공제)
                </th>
                <td className="border-border border-b px-3 py-2.5">한국공인중개사협회</td>
                <td className="border-border border-b px-3 py-2.5">
                  개인 공인중개사 1억 원 이상, 법인 2억 원 이상
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증보험
                </th>
                <td className="border-border border-b px-3 py-2.5">서울보증보험(SGI) 등</td>
                <td className="border-border border-b px-3 py-2.5">법인 4억 원 이상, 개인 2억 원 이상</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  공탁
                </th>
                <td className="px-3 py-2.5">법원 공탁소</td>
                <td className="px-3 py-2.5">동일 기준</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          계약 시 공인중개사의 중개사무소에서 공제증서 또는 보증보험증서를 확인하면 어느 기관에 가입되어 있는지 알 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bac-procedure">
        <h2 id="guide-bac-procedure" className="text-foreground text-xl font-semibold tracking-tight">
          보상 청구 절차
        </h2>
        <p>중개사고 통지 후 손해배상을 확정하고 공제금을 청구하는 순서로 진행됩니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보상 청구 단계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1단계
                </th>
                <td className="border-border border-b px-3 py-2.5">중개사고 사실 확인 및 증거 수집</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2단계
                </th>
                <td className="border-border border-b px-3 py-2.5">공인중개사에게 손해배상 요구</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3단계
                </th>
                <td className="border-border border-b px-3 py-2.5">합의 또는 소송으로 손해배상액 확정</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4단계
                </th>
                <td className="border-border border-b px-3 py-2.5">합의서·판결문 등 첨부해 보증기관에 공제금 청구</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5단계
                </th>
                <td className="px-3 py-2.5">보증기관 심사 후 공제금 지급</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          중개의뢰인이 보험금을 지급받으려면 손해배상합의서나 법원의 판결 등의 사본을 첨부해 보증기관에 청구하면 됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bac-amount">
        <h2 id="guide-bac-amount" className="text-foreground text-xl font-semibold tracking-tight">
          손해배상액 확정 방법
        </h2>
        <p>
          공인중개사가 자발적으로 배상에 응하지 않는 경우 아래 방법으로 손해배상액을 확정할 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              손해배상액 확정 경로
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소요 기간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  당사자 간 합의
                </th>
                <td className="border-border border-b px-3 py-2.5">공인중개사와 직접 협의</td>
                <td className="border-border border-b px-3 py-2.5">즉시 ~ 수주</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  한국공인중개사협회 분쟁조정
                </th>
                <td className="border-border border-b px-3 py-2.5">협회 분쟁조정위원회 조정 신청</td>
                <td className="border-border border-b px-3 py-2.5">1~3개월</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  소비자원 피해구제
                </th>
                <td className="border-border border-b px-3 py-2.5">한국소비자원 신청</td>
                <td className="border-border border-b px-3 py-2.5">1~3개월</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  민사소송
                </th>
                <td className="px-3 py-2.5">법원에 손해배상청구소송 제기</td>
                <td className="px-3 py-2.5">6개월 이상</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>소송까지 가지 않고 협회 분쟁조정이나 소비자원을 먼저 활용하면 시간과 비용을 줄일 수 있습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bac-docs">
        <h2 id="guide-bac-docs" className="text-foreground text-xl font-semibold tracking-tight">
          공제금 청구 시 필요 서류
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              청구 시 준비 서류
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  서류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  손해배상합의서 또는 판결문
                </th>
                <td className="border-border border-b px-3 py-2.5">손해배상액 확정 근거</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개계약서
                </th>
                <td className="border-border border-b px-3 py-2.5">해당 거래 중개 사실 증명</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  피해 증빙 서류
                </th>
                <td className="border-border border-b px-3 py-2.5">등기부등본·계좌이체 내역 등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공제증서 사본
                </th>
                <td className="border-border border-b px-3 py-2.5">공인중개사 공제 가입 확인</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  신분증 사본
                </th>
                <td className="px-3 py-2.5">청구인 확인</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bac-limit">
        <h2 id="guide-bac-limit" className="text-foreground text-xl font-semibold tracking-tight">
          보상 한도의 한계와 주의사항
        </h2>
        <p>
          공제약관의 보상한도는 중개사고 1건당 한도가 아닌 공제기간 중 발생한 모든 사고의 총 보상한도입니다. 동일 공인중개사로
          인해 여러 피해자가 발생한 경우 보상금이 분산될 수 있습니다. 피해 금액이 공제가입금액을 초과하면 초과분은 공인중개사
          개인에게 직접 청구하거나 소송을 통해 받아야 합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bac-assistant">
        <h2 id="guide-bac-assistant" className="text-foreground text-xl font-semibold tracking-tight">
          중개보조원에 의한 사고
        </h2>
        <p>
          공인중개사 자격이 없는 중개보조원이 중개 행위를 하다 사고가 발생한 경우 소속 개업공인중개사가 책임을 집니다. 계약 시
          상대방이 공인중개사 자격증 소지자인지 확인하는 것이 중요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bac-checklist">
        <h2 id="guide-bac-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          사고 예방을 위한 계약 전 확인 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              계약 전 확인
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공인중개사 자격증 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">국가공간정보포털(nsdi.go.kr) 자격증 진위 조회</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공제증서 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 전 원본 요청</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개대상물 확인·설명서 수령
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 시 반드시 서명 전 내용 확인</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  등기부등본 직접 확인
                </th>
                <td className="px-3 py-2.5">공인중개사 설명에만 의존하지 않음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 중개사고 보상 청구는 손해배상액 확정이 선행되어야 합니다. 피해 규모가 크거나 분쟁이 복잡한 경우 법률 전문가 상담을
          권장합니다. 한국공인중개사협회(kar.or.kr) 및 한국소비자원(kca.go.kr)에서 상담을 받을 수 있습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개보수 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 거래금액에 따른 중개수수료는 중개보수 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
