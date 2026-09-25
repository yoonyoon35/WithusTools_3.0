import Link from "next/link";

export const sincereFilingConfirmationGuideMeta = {
  slug: "sincere-filing-confirmation-guide",
  title: "성실신고확인 | 수입금액 15억·7.5억·5억, 세액공제, 미제출 가산세",
  description:
    "2018년 귀속 이후 업종별 수입금액, 6월 30일 기한, 의료비·교육비·월세 공제율, 확인비용 60%와 한도 120만 원, 추징 요건, 미제출 가산세 식을 정리했습니다.",
  updated: "2026년 9월 23일",
} as const;

export function SincereFilingConfirmationGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-gsfc-intro">
        <h2 id="guide-gsfc-intro" className="text-foreground text-xl font-semibold tracking-tight">
          일정 규모 이상 사업자의 확인
        </h2>
        <p>
          성실신고확인은 수입금액이 업종별로 일정 규모 이상인 개인사업자가 종합소득세를 신고할 때,
          장부 내용이 맞는지 세무사 등에게 확인받은 뒤 신고하게 하는 제도입니다. 2011년 과세기간
          소득분에 대한 종합소득세 신고부터 적용됩니다. 세액 전체 순서는{" "}
          <Link
            href="/guide/comprehensive-income-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합소득세 계산 구조
          </Link>
          , 가산세 요약표의 다른 요율은{" "}
          <Link
            href="/guide/comprehensive-income-tax-penalty-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            가산세 가이드
          </Link>
          에 있습니다.
        </p>
        <p>
          확인할 수 있는 사람은 세무사, 공인회계사, 세무법인, 회계법인입니다(소득세법 시행령 §133③).
          성실신고확인서는 종합소득세 확정신고 때 납세지 관할 세무서장에게 제출합니다. 서식은
          기획재정부 고시 제2012-6호(2012.4.26.)입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gsfc-who">
        <h2 id="guide-gsfc-who" className="text-foreground text-xl font-semibold tracking-tight">
          대상 수입금액
        </h2>
        <p>해당 연도 수입금액 기준입니다. 2018년 귀속부터의 금액이 현재 칸입니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              성실신고확인 대상
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">업종</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">2014~2017년 귀속</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">2018년 귀속부터</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5 align-top leading-relaxed">
                  1. 농업·임업 및 어업, 광업, 도매 및 소매업(상품중개업 제외), 부동산매매업, 그 밖에 2호·3호에
                  해당하지 않는 사업
                </td>
                <td className="border-border border-b px-3 py-2.5 align-top">20억 원 이상</td>
                <td className="border-border border-b px-3 py-2.5 align-top">15억 원 이상</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5 align-top leading-relaxed">
                  2. 제조업, 숙박 및 음식점업, 전기·가스·증기 및 공기조절 공급업, 수도·하수·폐기물처리·원료재생업,
                  건설업(비주거용 건물 건설업 제외), 부동산 개발 및 공급업(주거용 건물 개발 및 공급업),
                  운수업 및 창고업, 정보통신업, 금융 및 보험업, 상품중개업
                </td>
                <td className="border-border border-b px-3 py-2.5 align-top">10억 원 이상</td>
                <td className="border-border border-b px-3 py-2.5 align-top">7억 5천만 원 이상</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 align-top leading-relaxed">
                  3. 부동산 임대업, 부동산업(부동산매매업 제외), 전문·과학 및 기술 서비스업, 사업시설관리·사업지원
                  및 임대서비스업, 교육 서비스업, 보건업 및 사회복지 서비스업, 예술·스포츠 및 여가 관련
                  서비스업, 협회 및 단체, 수리 및 기타 개인 서비스업, 가구 내 고용활동
                </td>
                <td className="px-3 py-2.5 align-top">5억 원 이상</td>
                <td className="px-3 py-2.5 align-top">5억 원 이상</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          1호 또는 2호 업종을 하는 사업자라도 별표 3의3 사업서비스업을 하면 3호 금액 이상인 사업자입니다
          (2012.02.02. 소득세법 시행령 제133조 제1항 단서). 별표 3의3은 소득세법
          시행령 제210조의3 제9항 현금영수증 의무발행업종 중 사업서비스업으로, 변호사업, 공인회계사업,
          세무사업, 변리사업, 건축사업, 법무사업, 심판변론인업, 경영지도사업, 기술지도사업, 감정평가사업,
          손해사정인업, 통관업, 기술사업, 측량사업, 공인노무사업입니다.
        </p>
        <p>
          성실신고확인서를 제출하는 사람의 신고·납부 기한은 다음 연도 5월 31일에서 6월 30일까지로 1개월
          늘어납니다. 2025년 귀속은 2026년 6월 30일까지입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gsfc-credit">
        <h2 id="guide-gsfc-credit" className="text-foreground text-xl font-semibold tracking-tight">
          확인서를 낸 경우의 세액공제
        </h2>
        <p>의료비·교육비·월세는 조세특례제한법 §122의3, 확인 비용은 §126의6입니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            성실신고확인 대상자로서 확인서를 제출한 사람이 특별세액공제 대상 의료비·교육비를 쓰면, 그
            금액의 15%를 사업소득에 대한 소득세에서 공제합니다. 미숙아·선천성 이상아 의료비는 20%,
            난임시술비는 30%입니다.
          </li>
          <li>
            이 공제의 추징 요건은 둘입니다. 해당 과세기간에 과소 신고한 수입금액이 경정(수정신고 포함)
            수입금액의 20% 이상인 경우, 또는 사업소득금액 계산에서 과대 계상한 필요경비가 경정(수정신고
            포함) 필요경비의 20% 이상인 경우입니다. 추징일이 속하는 다음 과세기간부터 3개 과세기간 동안
            세액공제에서 제외합니다.
          </li>
          <li>
            확인서를 제출한 대상자가 월세를 2025년 12월 31일이 속하는 과세연도까지 지급하면, 지급액의
            15%를 그 과세연도 소득세에서 공제합니다. 그 과세연도의 종합소득 과세표준에 합산되는
            종합소득금액이 4,500만 원 이하인 대상자로서 확인서를 제출한 사람은 17%입니다. 월세액이
            1,000만 원을 초과하면 초과분은 없는 것으로 합니다. 월세세액공제는 시행일(2019.1.1.) 이후
            종합소득 과세표준 확정신고분부터 적용합니다.
          </li>
          <li>
            확인서를 제출하면 성실신고 확인에 직접 쓴 비용의 60%를 사업소득에 대한 소득세에서 공제합니다.
            2013년 1월 1일 이후 제출분부터 부동산임대소득을 포함합니다. 한도는 2017년 과세연도까지 100만
            원, 2018년 과세연도부터 120만 원입니다. 2018년 과세연도부터는 일부 사업장만 확인을 받아도
            세액공제를 적용합니다.
          </li>
          <li>
            확인 비용 공제의 추징은, 해당 과세연도 사업소득금액을 과소 신고하고 그 금액이 경정(수정신고
            포함)된 사업소득금액의 10% 이상인 경우입니다. 그 대상자는 경정일이 속하는 과세연도의 다음
            과세연도부터 3개 과세연도 동안 이 세액공제를 받지 못합니다.
          </li>
        </ul>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              농어촌특별세·최저한세 적용 검토
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">구분</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">농어촌특별세</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">최저한세</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  의료비·교육비·월세
                </th>
                <td className="border-border border-b px-3 py-2.5">과세</td>
                <td className="border-border border-b px-3 py-2.5">대상</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">성실신고 확인비용 세액공제</th>
                <td className="px-3 py-2.5">비과세</td>
                <td className="px-3 py-2.5">배제</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gsfc-penalty">
        <h2 id="guide-gsfc-penalty" className="text-foreground text-xl font-semibold tracking-tight">
          확인서를 내지 않은 경우
        </h2>
        <p>
          성실신고확인 대상 과세기간의 다음 연도 6월 30일까지 확인서를 제출하지 않으면 가산세가
          있습니다(소득세법 §81의2). 미제출 가산세는 다음 둘 중 큰 금액입니다.
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>산출세액 × (미제출 사업장의 소득금액 ÷ 종합소득금액) × 5%</li>
          <li>사업소득 총수입금액 × 0.02%</li>
        </ol>
        <p>
          가산세 요약의 같은 항목은 종합소득 산출세액 × (사업소득금액 ÷ 종합소득금액) × 5%와 사업소득
          총수입금액 × 0.02% 중 큰 금액입니다. 2018년 과세연도부터 미제출 가산세는 따로 적용합니다.
          무신고 또는 과소신고 가산세와 장부 기록·보관 불성실가산세 중 큰 금액에, 성실신고확인서 미제출
          가산세를 더합니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            성실신고확인서 제출 등 납세협력 의무를 이행하지 않으면 수시 세무조사 대상으로 선정될 수
            있습니다(국세기본법 §81의6③).
          </li>
          <li>
            세무조사 등으로 세무대리인이 확인을 제대로 하지 않은 사실이 밝혀지면 그 세무대리인에게 징계
            책임이 있습니다.
          </li>
        </ul>
        <p className="text-sm leading-relaxed">
          근거: 국세청{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2234&cntntsId=7672"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            성실신고확인제도 안내
          </a>
          ,{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2228&cntntsId=7668"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            가산세 요약표
          </a>
          .
        </p>
      </section>
    </>
  );
}
