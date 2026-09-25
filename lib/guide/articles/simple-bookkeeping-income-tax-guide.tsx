import Link from "next/link";

export const simpleBookkeepingIncomeTaxGuideMeta = {
  slug: "simple-bookkeeping-income-tax-guide",
  title: "간편장부 | 대상 수입금액·결손금 15년·작성·총수입과 필요경비",
  description:
    "업종별 수입금액, 전문직 제외, 결손금 15년 공제, 계정과목, 부가가치세 구분, 재고, 3만 원 증빙, 보존 기간, 신고 첨부 서식을 계산에 쓸 수 있게 정리했습니다.",
  updated: "2026년 9월 23일",
} as const;

export function SimpleBookkeepingIncomeTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-gsbk-intro">
        <h2 id="guide-gsbk-intro" className="text-foreground text-xl font-semibold tracking-tight">
          간편장부
        </h2>
        <p>
          간편장부는 영세사업자를 위해 국세청장이 제정·고시한 장부입니다. 근거는 국세청고시
          제2024-19호(2024.07.19.) 「간편장부 고시」입니다. 수입과 비용을 날짜 순으로 적습니다. 장부로
          계산한 소득금액이 종합소득세 신고서에 들어가는 순서는{" "}
          <Link
            href="/guide/comprehensive-income-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합소득세 계산 구조
          </Link>
          이고, 장부가 없을 때의 경비율 식은{" "}
          <Link
            href="/guide/business-expense-ratio-application-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            경비율 적용 가이드
          </Link>
          에 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gsbk-who">
        <h2 id="guide-gsbk-who" className="text-foreground text-xl font-semibold tracking-tight">
          간편장부 대상
        </h2>
        <p>해당 연도에 새로 사업을 시작했거나, 직전 연도 수입금액이 아래이면 간편장부 대상입니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              직전 연도 수입금액
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">업종</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">기준</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5 align-top leading-relaxed">
                  가. 농업·임업 및 어업, 광업, 도매 및 소매업(상품중개업 제외), 소득세법 시행령 제122조
                  제1항 부동산매매업, 그 밖에 나·다에 해당하지 않는 사업
                </td>
                <td className="border-border border-b px-3 py-2.5 align-top">3억 원 미만</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5 align-top leading-relaxed">
                  나. 제조업, 숙박 및 음식점업, 전기·가스·증기 및 공기조절 공급업, 수도·하수·폐기물처리·원료재생업,
                  건설업(비주거용 건물 건설업 제외), 부동산 개발 및 공급업(주거용 건물 개발 및 공급업),
                  운수업 및 창고업, 정보통신업, 금융 및 보험업, 상품중개업, 욕탕업
                </td>
                <td className="border-border border-b px-3 py-2.5 align-top">1억 5천만 원 미만</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 align-top leading-relaxed">
                  다. 소득세법 제45조 제2항 부동산 임대업, 부동산업(가의 부동산매매업 제외), 전문·과학 및
                  기술서비스업, 사업시설관리·사업지원 및 임대서비스업, 교육서비스업, 보건업 및 사회복지
                  서비스업, 예술·스포츠 및 여가 관련 서비스업, 협회 및 단체, 수리 및 기타 개인서비스업, 가구
                  내 고용활동
                </td>
                <td className="px-3 py-2.5 align-top">7천 5백만 원 미만</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          욕탕업은 업종 현황 등을 고려해 1억 5천만 원에 미달하면 간편장부 대상입니다
          (소득세법 시행규칙 제95조의2).
        </p>
        <p>
          아래 전문직은 위 금액과 관계없이 복식부기 의무자입니다(소득세법 시행령 제147조의2, 부가가치세법
          시행령 제109조 제2항 제7호). 간편장부 작성 대상이 아닙니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            부가가치세 간이과세 배제 사업서비스: 변호사, 심판변론인, 변리사, 법무사, 공인회계사, 세무사,
            경영지도사, 기술지도사, 감정평가사, 손해사정인, 통관업, 기술사, 건축사, 도선사, 측량사,
            공인노무사
          </li>
          <li>의료·보건 용역: 의사, 치과의사, 한의사, 수의사, 약사, 한약사</li>
        </ul>
        <p>
          복식부기의무자가 간편장부 또는 추계로 신고하면, 장부 기록·보관 불성실 가산세(산출세액의 20%)와
          무신고가산세 중 큰 금액을 부담합니다. 무신고가산세는 무신고 납부세액 × 20%와
          수입금액 × 7/10,000 중 큰 금액입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gsbk-effect">
        <h2 id="guide-gsbk-effect" className="text-foreground text-xl font-semibold tracking-tight">
          기장했을 때와 하지 않았을 때
        </h2>
        <p>간편장부를 기장하면 다음과 같습니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            실제 소득으로 소득세를 계산하므로 결손이 나면 15년간 소득금액에서 공제할 수 있습니다.
            부동산임대 사업소득에서 생긴 이월결손금은 그 부동산임대 사업소득에서만 공제합니다.
          </li>
          <li>감가상각비, 대손충당금, 퇴직급여충당금을 필요경비로 인정받을 수 있습니다.</li>
        </ul>
        <p>간편장부 대상자가 복식부기나 간편장부를 기장하지 않으면 다음과 같습니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>결손이 나도 그 사실을 인정받지 못합니다.</li>
          <li>장부를 기장할 때보다 장부 기록·보관 불성실가산세(산출세액의 20%)를 더 부담합니다.</li>
          <li>각종 공제·감면을 받지 못합니다.</li>
        </ul>
        <p>
          간편장부 대상자가 복식부기로 기장해 신고하면 산출세액의 20%를 기장세액공제하고, 한도는
          100만 원입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gsbk-write">
        <h2 id="guide-gsbk-write" className="text-foreground text-xl font-semibold tracking-tight">
          기록하면 소득금액이 달라지는 항목
        </h2>
        <p>
          거래가 발생한 날짜 순으로 매출 등 수입, 매입 등 비용, 사업용 유형자산·무형자산의 증감을
          기록합니다. 칸은 일자, 계정과목, 거래내용, 거래처, 수입(금액·부가세), 비용(금액·부가세),
          사업용 유형자산 및 무형자산 증감(금액·부가세), 비고입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              계정과목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">구분</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">계정과목</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">수입금액</th>
                <td className="border-border border-b px-3 py-2.5">매출액, 기타수입금액</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매출원가 및 제조비용
                </th>
                <td className="border-border border-b px-3 py-2.5">상품매입, 재료비매입, 제조노무비, 제조경비</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">일반관리비 등</th>
                <td className="border-border border-b px-3 py-2.5">
                  급료, 제세공과금, 임차료, 지급이자, 기업업무추진비, 기부금, 감가상각비, 차량유지비,
                  지급수수료, 소모품비, 복리후생비, 운반비, 광고선전비, 여비교통비, 기타비용
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">사업용 유·무형자산</th>
                <td className="px-3 py-2.5">사업용 유형자산 및 무형자산 매입, 사업용 유형자산 및 무형자산 매도</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>일자는 현금·외상과 관계없이 거래가 발생한 날입니다. 수입과 비용을 모두 적습니다.</li>
          <li>
            거래내용은 판매·구입 등 거래 구분과 대금 결제입니다. 1일 평균 매출이 50건 이상이면 하루
            총매출을 합쳐 적을 수 있습니다. 세금계산서·현금영수증 등 원본은 보관합니다. 비용과 매입은
            건별로 모두 적습니다.
          </li>
          <li>거래처는 상호, 성명 또는 전화번호 등 구분할 수 있게 적습니다.</li>
          <li>
            일반과세자는 매출의 공급가액과 부가가치세 10%를 금액과 부가세 칸에 나눕니다. 신용카드·현금영수증
            매출처럼 공급가액과 부가가치세가 나뉘어 있지 않으면 매출액을 1.1로 나눈 금액을 금액 칸에,
            잔액을 부가세 칸에 적습니다. 간이과세자는 부가가치세가 포함된 매출액(공급대가)을, 면세사업자는
            매출액을 금액 칸에 적습니다.
          </li>
          <li>
            세금계산서와, 부가가치세가 따로 적힌 신용카드매출전표 등은 공급가액과 부가가치세를 나눕니다.
            계산서와 그 밖 영수증 매입은 금액 칸에만 적습니다.
          </li>
          <li>
            사업용 유·무형자산 매입은 비용 칸의 방법, 매도는 수입 칸의 방법을 따릅니다. 매각·폐기 등은
            붉은색으로 적거나 금액 앞에 △를 표시합니다.
          </li>
          <li>
            비고의 증빙 표시는 세금계산서 세계, 계산서 계, 신용·직불·기명식 선불카드 등 카드, 현금영수증
            현영, 그 밖 영수증 영입니다. 대금 결제는 현금, 외상, 카드 등으로 적습니다.
          </li>
          <li>
            상품·제품·원재료 재고가 있으면 과세기간 시작일과 종료일의 실제 재고량으로 평가해 적습니다.
            재고액을 적지 않으면 기초 재고와 기말 재고가 같은 것으로 봅니다.
          </li>
        </ul>
        <p>
          기부금, 감가상각비, 대손충당금, 퇴직급여충당금, 국고보조금, 보험차익, 조세특례제한법상 준비금을
          필요경비에 넣으면 종합소득세 신고 때 그 계정의 조정명세서를 첨부합니다.
        </p>
        <p>서식 예시 한 줄은 다음과 같습니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>1.5, 매출, ○○판매, 수입 금액 10,000,000, 부가세 1,000,000, 비고 세계</li>
          <li>1.15, 상품, ○○구입, 비용 금액 5,000,000, 부가세 500,000, 비고 세계</li>
          <li>1.20, 기업업무추진비, 거래처 접대, 비용 금액 200,000, 비고 카드 등</li>
        </ul>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>사업소득과 부동산임대소득처럼 소득이 둘 이상이면 소득별로 간편장부를 각각 작성합니다.</li>
          <li>사업장이 둘 이상이면 사업장별로 간편장부를 작성합니다.</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gsbk-file">
        <h2 id="guide-gsbk-file" className="text-foreground text-xl font-semibold tracking-tight">
          신고에 넣는 순서
        </h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>매일 수입과 비용을 간편장부에 기록합니다.</li>
          <li>
            총수입금액 및 필요경비명세서(소득세법 시행규칙 별지 제74호 서식 부표)의 장부상 수입금액과
            필요경비에 간편장부의 수입·비용을 적습니다.
          </li>
          <li>
            간편장부 소득금액계산서(같은 규칙 별지 제74호 서식)에서 그 수입금액과 필요경비를 세무조정해
            해당 연도 소득금액을 계산합니다.
          </li>
          <li>
            종합소득세 신고서(같은 규칙 별지 제40(1)호 서식) ⑦ 사업소득명세서의 해당 항목에 그
            소득금액을 적습니다.
          </li>
        </ol>
        <p>신고할 때 내는 것은 신고서와 총수입금액 및 필요경비명세서, 간편장부 소득금액계산서입니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gsbk-keep">
        <h2 id="guide-gsbk-keep" className="text-foreground text-xl font-semibold tracking-tight">
          증빙과 보존
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            장부와 증빙서류는 소득세 확정신고 기한이 지난 날부터 5년간 보존합니다. 통상 부과제척기간
            만료 전에 발생한 결손금을 그 뒤에 공제하면, 그 결손이 발생한 과세기간은 이월결손금을 공제한
            과세기간의 확정신고 기한부터 1년간 보존합니다(국세기본법 제85조의3, 소득세법 제160조의2
            제1항).
          </li>
          <li>
            다른 사업자에게 재화나 용역을 공급받고 대가를 쓸 때, 거래 건당 금액(부가가치세 포함)이 3만
            원을 초과하면 법정 지출증빙을 받아야 합니다(소득세법 제160조의2, 소득세법 시행령 제208조의2).
            법정 지출증빙은 세금계산서, 계산서, 신용카드매출전표, 현금영수증 등입니다.
          </li>
        </ul>
        <p>업종별 작성 사례의 업종코드는 다음과 같습니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              작성 사례 업종코드
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">업태</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">사례</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">코드</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">제조업</td>
                <td className="border-border border-b px-3 py-2.5">스크린인쇄업, 일반과세</td>
                <td className="border-border border-b px-3 py-2.5">222102</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">건설업</td>
                <td className="border-border border-b px-3 py-2.5">인테리어, 일반과세, 현금영수증 의무발행</td>
                <td className="border-border border-b px-3 py-2.5">452106</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">건설업</td>
                <td className="border-border border-b px-3 py-2.5">건설장비운영, 일반과세</td>
                <td className="border-border border-b px-3 py-2.5">453000</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">도매업</td>
                <td className="border-border border-b px-3 py-2.5">의류도매, 일반과세</td>
                <td className="border-border border-b px-3 py-2.5">513121</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">소매업</td>
                <td className="border-border border-b px-3 py-2.5">마트, 과세·면세 겸업, 일반과세</td>
                <td className="border-border border-b px-3 py-2.5">522071</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">숙박업</td>
                <td className="border-border border-b px-3 py-2.5">모텔, 일반과세, 현금영수증 의무발행</td>
                <td className="border-border border-b px-3 py-2.5">551002</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">음식업</td>
                <td className="border-border border-b px-3 py-2.5">한식, 일반과세</td>
                <td className="border-border border-b px-3 py-2.5">552101</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">운수업</td>
                <td className="border-border border-b px-3 py-2.5">개별화물운송, 일반과세</td>
                <td className="border-border border-b px-3 py-2.5">602310</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">부동산임대업</td>
                <td className="border-border border-b px-3 py-2.5">상가임대, 일반과세</td>
                <td className="border-border border-b px-3 py-2.5">701201</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">교육서비스업</td>
                <td className="border-border border-b px-3 py-2.5">태권도 교육기관, 면세, 현금영수증 의무발행</td>
                <td className="border-border border-b px-3 py-2.5">809014</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">수리 및 기타 개인서비스업</td>
                <td className="border-border border-b px-3 py-2.5">자동차 전문수리, 간이과세, 현금영수증 의무발행</td>
                <td className="border-border border-b px-3 py-2.5">922202</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">스포츠 및 오락 관련 서비스업</td>
                <td className="border-border border-b px-3 py-2.5">노래방, 간이과세</td>
                <td className="border-border border-b px-3 py-2.5">924903</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">인적용역</td>
                <td className="px-3 py-2.5">학원강사, 인적용역사업자</td>
                <td className="px-3 py-2.5">940903</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          근거: 국세청{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2231&cntntsId=7670"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            간편장부 안내
          </a>
          ,{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2230&cntntsId=7669"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            기장의무 판단
          </a>
          .
        </p>
      </section>
    </>
  );
}
