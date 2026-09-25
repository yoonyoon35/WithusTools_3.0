import Link from "next/link";

export const comprehensiveIncomeTaxPenaltyGuideMeta = {
  slug: "comprehensive-income-tax-penalty-guide",
  title: "종합소득세 가산세 | 무신고·과소신고·납부지연·기장·계산서",
  description:
    "무신고, 과소신고, 납부지연, 장부 불성실, 계산서·지급명세서·현금영수증 등 가산세 요율을 표로 정리했습니다.",
  updated: "2026년 9월 23일",
} as const;

export function ComprehensiveIncomeTaxPenaltyGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-gcitp-intro">
        <h2 id="guide-gcitp-intro" className="text-foreground text-xl font-semibold tracking-tight">
          세액에 더하는 가산세
        </h2>
        <p>
          종합소득세 계산 흐름에서 가산세는 세액공제·감면 다음, 기납부세액 앞에 더합니다. 산출세액까지의
          순서는{" "}
          <Link
            href="/guide/comprehensive-income-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합소득세 계산 구조
          </Link>
          , 추계신고와 겹치는 기장 가산세의 적용 제외는{" "}
          <Link
            href="/guide/business-expense-ratio-application-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            경비율 적용 가이드
          </Link>
          에 있습니다.
        </p>
        <p>
          무신고가산세, 과소신고·초과환급신고가산세와 장부 기록·보관 불성실가산세가 같이 적용되면 그중
          큰 가산세만 적용합니다. 금액이 같으면 무신고가산세, 과소신고·초과환급신고가산세만 적용합니다.
          무신고가산세와 장부 기록·보관 불성실가산세(산출세액의 20%)가 같이 적용되면 큰 금액을
          적용합니다. 성실신고확인서 미제출 가산세는 2018년 귀속부터 그 큰 금액에 더합니다. 식은{" "}
          <Link
            href="/guide/sincere-filing-confirmation-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            성실신고확인 가이드
          </Link>
          에 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcitp-core">
        <h2 id="guide-gcitp-core" className="text-foreground text-xl font-semibold tracking-tight">
          무신고·과소신고·납부지연·기장
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              무신고·납부지연
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">종류</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">부과 사유</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">가산세액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">무신고</th>
                <td className="border-border border-b px-3 py-2.5">일반 무신고</td>
                <td className="border-border border-b px-3 py-2.5">무신고 납부세액 × 20%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">무신고</th>
                <td className="border-border border-b px-3 py-2.5">일반 무신고, 복식부기의무자</td>
                <td className="border-border border-b px-3 py-2.5">
                  무신고 납부세액 × 20%와 수입금액 × 0.07% 중 큰 금액
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">무신고</th>
                <td className="border-border border-b px-3 py-2.5">부정 무신고</td>
                <td className="border-border border-b px-3 py-2.5">
                  무신고 납부세액 × 40%. 국제거래가 수반되면 60%
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">무신고</th>
                <td className="border-border border-b px-3 py-2.5">부정 무신고, 복식부기의무자</td>
                <td className="border-border border-b px-3 py-2.5">
                  무신고 납부세액 × 40%(국제거래 수반 시 60%)와 수입금액 × 0.14% 중 큰 금액
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">납부지연</th>
                <td className="border-border border-b px-3 py-2.5">미납·미달 납부</td>
                <td className="border-border border-b px-3 py-2.5">
                  미납·미달 납부세액 × 미납 기간 × 0.022%(2022.2.16. 이후). 미납 기간은 납부기한
                  다음 날부터 자진납부일 또는 납세고지일
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">장부 기록·보관 불성실</th>
                <td className="px-3 py-2.5">
                  무기장·미달 기장. 소규모 사업자는 제외
                </td>
                <td className="px-3 py-2.5">
                  종합소득 산출세액 × (무기장·미달 기장 소득금액 ÷ 종합소득금액) × 20%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          과소신고·초과환급신고는 신고할 과세표준 또는 세액보다 적게 신고한 경우 과소신고 납부세액 ×
          10%입니다. 납부지연은 미납·미달 납부세액 × 경과일수 × 2.2/10,000이고, 경과일수는 납부기한
          다음 날부터 자진납부일 또는 납부고지일입니다. 2.2/10,000은 0.022%와 같습니다.
        </p>
        <p>
          복식부기의무자가 장부 없이 추계신고하면 수입금액의 0.07%와 무신고 납부세액의 20%(부정
          무신고 40%, 국제거래가 수반된 부정 무신고 60%) 중 큰 금액과, 장부 기록·보관 불성실가산세(산출세액의
          20%) 중 큰 금액을 부담합니다. 간편장부대상자는 산출세액의 20%를 장부 기록·보관 불성실가산세로
          부담하며, 직전 과세기간 수입금액 4,800만 원 미만인 소규모 사업자 등은 제외합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gcitp-table">
        <h2 id="guide-gcitp-table" className="text-foreground text-xl font-semibold tracking-tight">
          계산서·지급명세서 등 나머지 가산세
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              종합소득세 가산세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">종류</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">부과 사유</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">가산세액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">지급명세서</th>
                <td className="border-border border-b px-3 py-2.5">미제출(불분명)</td>
                <td className="border-border border-b px-3 py-2.5">미제출(불분명) 금액 × 1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">지급명세서</th>
                <td className="border-border border-b px-3 py-2.5">기한 후 3개월 이내 지연 제출</td>
                <td className="border-border border-b px-3 py-2.5">지연 제출 금액 × 0.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">일용근로소득 지급명세서</th>
                <td className="border-border border-b px-3 py-2.5">미제출(불분명)</td>
                <td className="border-border border-b px-3 py-2.5">미제출(불분명) 금액 × 0.25%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">일용근로소득 지급명세서</th>
                <td className="border-border border-b px-3 py-2.5">기한 후 1개월 이내 지연 제출</td>
                <td className="border-border border-b px-3 py-2.5">지연 제출 금액 × 0.125%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">간이지급명세서</th>
                <td className="border-border border-b px-3 py-2.5">미제출(불분명)</td>
                <td className="border-border border-b px-3 py-2.5">미제출(불분명) 금액 × 0.25%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">간이지급명세서</th>
                <td className="border-border border-b px-3 py-2.5">
                  기한 후 3개월 이내 지연 제출. 원천징수 대상 사업소득·인적용역 관련 기타소득은 제출기한
                  경과 후 1개월 이내 제출 시
                </td>
                <td className="border-border border-b px-3 py-2.5">지연 제출 금액 × 0.125%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">계산서</th>
                <td className="border-border border-b px-3 py-2.5">
                  허위·누락 기재. 신규 사업자, 직전 과세기간 사업소득 수입금액 4,800만 원 미달자,
                  보험모집인·방문판매원·음료품배달판매원은 제외
                </td>
                <td className="border-border border-b px-3 py-2.5">허위·누락 기재 공급가액 × 1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">계산서합계표</th>
                <td className="border-border border-b px-3 py-2.5">미제출, 허위·누락 기재. 같은 제외 대상</td>
                <td className="border-border border-b px-3 py-2.5">해당 공급가액 × 0.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">계산서합계표</th>
                <td className="border-border border-b px-3 py-2.5">기한 후 1개월 이내 지연 제출</td>
                <td className="border-border border-b px-3 py-2.5">공급가액 × 0.3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">계산서</th>
                <td className="border-border border-b px-3 py-2.5">미발급, 가공(위장) 수수</td>
                <td className="border-border border-b px-3 py-2.5">공급가액 × 2%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">중도매인 계산서</th>
                <td className="border-border border-b px-3 py-2.5">제출 불성실</td>
                <td className="border-border border-b px-3 py-2.5">
                  (총매출액 × 연도별 교부 비율 − 교부 금액)에 대해서만 부과
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">전자계산서</th>
                <td className="border-border border-b px-3 py-2.5">
                  전자계산서 외 발급. 신규·4,800만 원 미달·보험모집인·방문판매원·음료품배달판매원 제외
                </td>
                <td className="border-border border-b px-3 py-2.5">해당 공급가액 × 1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">전자계산서</th>
                <td className="border-border border-b px-3 py-2.5">미전송</td>
                <td className="border-border border-b px-3 py-2.5">미전송 공급가액 × 0.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">전자계산서</th>
                <td className="border-border border-b px-3 py-2.5">
                  공급시기가 속하는 과세기간 말의 다음 달 25일까지 지연 전송
                </td>
                <td className="border-border border-b px-3 py-2.5">지연 전송 공급가액 × 0.3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">매입처별 세금계산서합계표</th>
                <td className="border-border border-b px-3 py-2.5">미제출, 불분명. 같은 제외 대상</td>
                <td className="border-border border-b px-3 py-2.5">해당 공급가액 × 0.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">매입처별 세금계산서합계표</th>
                <td className="border-border border-b px-3 py-2.5">기한 후 1개월 이내 지연 제출</td>
                <td className="border-border border-b px-3 py-2.5">공급가액 × 0.3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">증명서류 수취</th>
                <td className="border-border border-b px-3 py-2.5">
                  정규 증명 미수취·허위 수취. 소규모 사업자와 추계자 제외
                </td>
                <td className="border-border border-b px-3 py-2.5">미수취·허위 수취 금액 × 2%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">영수증수취명세서</th>
                <td className="border-border border-b px-3 py-2.5">미제출·불분명. 소규모 사업자와 추계자 제외</td>
                <td className="border-border border-b px-3 py-2.5">해당 지급금액 × 1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">사업장현황신고</th>
                <td className="border-border border-b px-3 py-2.5">
                  의료업·수의업·약사업의 무신고, 수입금액 과소신고
                </td>
                <td className="border-border border-b px-3 py-2.5">무신고·과소신고 수입금액 × 0.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">공동사업장</th>
                <td className="border-border border-b px-3 py-2.5">사업자 미등록·허위 등록</td>
                <td className="border-border border-b px-3 py-2.5">그 과세기간 총수입금액 × 0.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">공동사업장</th>
                <td className="border-border border-b px-3 py-2.5">손익분배비율 허위 신고 등</td>
                <td className="border-border border-b px-3 py-2.5">허위 신고 과세기간 총수입금액 × 0.1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">사업용계좌 미신고</th>
                <td className="border-border border-b px-3 py-2.5">복식부기의무자</td>
                <td className="border-border border-b px-3 py-2.5">
                  미신고 기간 수입금액 × 0.2%와 미사용 금액 × 0.2% 중 큰 금액
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">사업용계좌 미사용</th>
                <td className="border-border border-b px-3 py-2.5">복식부기의무자</td>
                <td className="border-border border-b px-3 py-2.5">미사용 금액 × 0.2%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">신용카드</th>
                <td className="border-border border-b px-3 py-2.5">발급 거부 또는 사실과 다르게 발급</td>
                <td className="border-border border-b px-3 py-2.5">
                  그 금액 × 5%. 건별 5천 원 미만이면 5천 원
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">현금영수증</th>
                <td className="border-border border-b px-3 py-2.5">가맹점 미가입</td>
                <td className="border-border border-b px-3 py-2.5">미가입 기간 수입금액 × 1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">현금영수증</th>
                <td className="border-border border-b px-3 py-2.5">발급 거부 또는 사실과 다르게 발급</td>
                <td className="border-border border-b px-3 py-2.5">
                  거부 금액 또는 차액 × 5%. 건별 5천 원 미만이면 5천 원
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">기부금영수증</th>
                <td className="border-border border-b px-3 py-2.5">사실과 다르게 발급</td>
                <td className="border-border border-b px-3 py-2.5">불성실 기재 금액 × 5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">기부금영수증</th>
                <td className="border-border border-b px-3 py-2.5">
                  기부자별 발급 내역 미작성·미보관. 상속세 및 증여세법으로 가산세가 부과된 경우 제외
                </td>
                <td className="border-border border-b px-3 py-2.5">미작성·미보관 금액 × 0.2%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">성실신고확인서</th>
                <td className="border-border border-b px-3 py-2.5">
                  대상 사업자가 다음 연도 6월 30일까지 미제출
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  종합소득 산출세액 × (사업소득금액 ÷ 종합소득금액) × 5%와 사업소득 총수입금액 ×
                  0.02% 중 큰 금액
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">주택임대 미등록</th>
                <td className="border-border border-b px-3 py-2.5">
                  주택임대소득이 있는 사업자가 사업 개시일부터 20일 이내 사업자등록을 신청하지 않은 경우
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  사업 개시일부터 등록 신청일 전날까지의 주택임대 수입금액 × 0.2%
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 align-top font-medium">특정외국법인 유보소득</th>
                <td className="border-border border-b px-3 py-2.5">계산명세서 미제출·불분명</td>
                <td className="border-border border-b px-3 py-2.5">배당 가능 유보소득금액 × 0.5%</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 align-top font-medium">업무용승용차</th>
                <td className="px-3 py-2.5">
                  관련 비용을 필요경비에 산입한 복식부기의무자가 명세서를 미제출하거나 사실과 다르게 제출
                </td>
                <td className="px-3 py-2.5">미제출 또는 사실과 다르게 기재한 금액 × 1%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          근거: 국세청{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7664&mi=2224"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            종합소득세 개요
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
          ,{" "}
          <a
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2230&cntntsId=7669"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            추계신고 가산세
          </a>
          .
        </p>
      </section>
    </>
  );
}
