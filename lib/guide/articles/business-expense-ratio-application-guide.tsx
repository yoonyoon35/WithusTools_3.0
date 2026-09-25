import Link from "next/link";

export const businessExpenseRatioApplicationGuideMeta = {
  slug: "business-expense-ratio-application-guide",
  title: "경비율 적용방법 | 기준·단순경비율, 배율, 주요경비, 추계 소득금액",
  description:
    "단순·기준경비율 식, 2025년 귀속 배율, 업종별 기준금액, 자가·장애인 조정, 주요경비 범위를 계산식과 수치 예시로 정리했습니다.",
  updated: "2026년 9월 23일",
} as const;

export function BusinessExpenseRatioApplicationGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-gber-intro">
        <h2 id="guide-gber-intro" className="text-foreground text-xl font-semibold tracking-tight">
          장부가 없을 때의 소득금액
        </h2>
        <p>
          모든 사업자는 복식부기 또는 간편장부를 기록하고, 재무제표나 소득금액계산서를 소득세
          신고서에 첨부해야 합니다(소득세법 §160, 소득세법 시행령 §208). 장부를 기장하지 않았거나
          주요 부분이 허위인 경우를 위해 소득금액을 추계로 계산합니다. 2002년 귀속분부터 기준경비율
          제도가 쓰입니다.
        </p>
        <p>
          경비율은 둘로 나뉩니다. <strong>기준경비율</strong>은 주요경비(재화 매입, 임차료, 인건비)를
          증빙으로 인정하고 그 밖은 경비율로 인정합니다. <strong>단순경비율</strong>은 필요경비 전부를
          경비율로 인정합니다. 세액 전체 순서는{" "}
          <Link
            href="/guide/comprehensive-income-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합소득세 계산 구조
          </Link>
          를 따릅니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gber-who">
        <h2 id="guide-gber-who" className="text-foreground text-xl font-semibold tracking-tight">
          누가 어떤 경비율을 쓰는지
        </h2>
        <p>
          원칙은 직전 연도 업종별 수입금액입니다. 기준경비율·단순경비율과 복식부기·간편장부 모두
          직전 연도 수입금액으로 판단합니다. 다만 해당 연도 수입금액이
          복식부기의무자 기준 이상이면 단순경비율을 적용하지 않습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              기장의무와 추계 경비율 판단 (직전 연도 수입금액)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  업종
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  복식부기
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  간편장부
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기준경비율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단순경비율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5 align-top leading-relaxed">
                  가. 농업·임업 및 어업, 광업, 도매 및 소매업(상품중개업 제외), 부동산매매업, 그 밖에
                  나·다에 해당하지 않는 사업
                </td>
                <td className="border-border border-b px-3 py-2.5 align-top">3억 원 이상</td>
                <td className="border-border border-b px-3 py-2.5 align-top">3억 원 미만</td>
                <td className="border-border border-b px-3 py-2.5 align-top">6천만 원 이상</td>
                <td className="border-border border-b px-3 py-2.5 align-top">6천만 원 미만</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5 align-top leading-relaxed">
                  나. 제조업, 숙박 및 음식점업, 전기·가스·증기 및 공기조절 공급업, 수도·하수·폐기물처리·원료재생업,
                  건설업(비주거용 건물 건설업 제외), 부동산 개발 및 공급업(주거용 건물 개발 및 공급업),
                  운수업 및 창고업, 정보통신업, 금융 및 보험업, 상품중개업, 욕탕업
                </td>
                <td className="border-border border-b px-3 py-2.5 align-top">1억 5천만 원 이상</td>
                <td className="border-border border-b px-3 py-2.5 align-top">1억 5천만 원 미만</td>
                <td className="border-border border-b px-3 py-2.5 align-top">3천 6백만 원 이상</td>
                <td className="border-border border-b px-3 py-2.5 align-top">3천 6백만 원 미만</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 align-top leading-relaxed">
                  다. 부동산 임대업, 부동산업(부동산매매업 제외), 전문·과학 및 기술 서비스업,
                  사업시설관리·사업지원 및 임대서비스업, 교육 서비스업, 보건업 및 사회복지 서비스업,
                  예술·스포츠 및 여가 관련 서비스업, 협회 및 단체, 수리 및 기타 개인 서비스업, 가구 내
                  고용활동
                </td>
                <td className="px-3 py-2.5 align-top">7천 5백만 원 이상</td>
                <td className="px-3 py-2.5 align-top">7천 5백만 원 미만</td>
                <td className="px-3 py-2.5 align-top">2천 4백만 원 이상</td>
                <td className="px-3 py-2.5 align-top">2천 4백만 원 미만</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>욕탕업은 기장의무 판단만 나 군, 경비율 기준은 다 군입니다.</li>
          <li>
            수리 및 기타 개인서비스업 중 부가가치세법 시행령 제42조 제1호 인적용역은 기장의무는 다 군,
            경비율 기준은 나 군입니다. 이 인적용역의 직전 연도 기준수입금액은 3,600만 원입니다.
          </li>
          <li>
            전문직 사업자는 직전 연도 수입금액과 관계없이 복식부기의무자입니다. 2007년 1월 1일 이후
            발생 소득분부터입니다. 신규 여부·수입금액과 관계없이 기준경비율을 적용합니다.
          </li>
          <li>
            전문직, 현금영수증 미가맹 사업자, 신용카드·현금영수증 상습 발급거부자는 단순경비율 적용이
            배제됩니다(소득세법 시행령 §143). 상습 발급거부는 1년에 3회 이상이고 100만 원 이상이거나,
            1년에 5회 이상 발급을 거부하거나 사실과 다르게 발급한 경우입니다.
          </li>
          <li>
            해당 연도 신규 사업자는 단순경비율로 계산합니다. 다만 해당 연도 수입금액이 복식부기의무자
            기준 이상이면 단순경비율이 배제됩니다. 전문직은 신규라도 기준경비율입니다.
          </li>
        </ul>
        <p>전문직 업종코드는 다음과 같습니다.</p>
        <p className="text-sm leading-relaxed">
          의료업(851101~851219, 851901), 수의업(852000), (한)약사업(523111, 523114), 변호사업(741101),
          심판변론인업, 변리사업(741104), 법무사업(741107), 공인노무사업(741110),
          세무사·회계사업(741201~741204), 경영지도사업(741401), 통관업(749906), 기술지도사업(742202),
          감정평가사업(702002), 손해사정인업(749904), 기술사업(742106), 건축사업(742105),
          도선사업(630403), 측량사업(742101, 742102). 근거는 소득세법 시행령 제208조 제5항
          단서, 제147조의2, 부가가치세법 시행령 제109조 제2항 제7호입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gber-revenue">
        <h2 id="guide-gber-revenue" className="text-foreground text-xl font-semibold tracking-tight">
          기준수입금액
        </h2>
        <p>
          업종을 겸영하거나 사업이 둘 이상이면 다음 금액으로 판단합니다(소득세법 시행령 §143⑥, §208⑦).
          주업종은 수입금액이 가장 큰 업종입니다. 사업 기간이 1년이 아니어도 연간으로 환산하지 않고
          합계액으로 판단합니다.
        </p>
        <p>
          <strong>
            주업종 수입금액 + 주업종 외 수입금액 × (주업종 기준금액 ÷ 주업종 외 기준금액)
          </strong>
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            수입금액은 소득세법상 총수입금액이며, 결정·경정으로 늘어난 수입금액을 포함합니다.
          </li>
          <li>
            장부·증빙으로 수입금액을 계산할 수 없으면 해당 사업과 관련해 국가·지방자치단체, 동업자단체
            또는 거래처에서 받은 보조금·장려금과, 신용카드매출전표 교부로 부가가치세법상 공제받은
            부가가치세액을 포함합니다(소득세법 시행령 §144③).
          </li>
          <li>
            공동사업장은 그 공동사업장을 1사업자(1거주자)로 보아 직전 연도 수입금액으로 판단합니다.
            구성원이 같은 공동사업장이 둘 이상이면 그 수입금액 합계입니다. 공동사업장과 단독사업장이
            있으면 각각 따로 판단합니다. 과세기간 중 구성원이나 지분이 바뀌면 바뀔 때마다 소득분배
            비율로 거주자별 소득금액을 나눕니다.
          </li>
          <li>
            직전 연도 부동산임대·사업 수입금액이 없는 거주자가 상속으로 사업을 승계하면 단순경비율
            대상입니다(서면1팀-707, 2006.5.30.). 피상속인이 단순경비율 배제 사업자면 단순경비율을 적용할
            수 없습니다.
          </li>
          <li>
            경비율은 사업장별·업태별·종목별 해당 연도 총수입금액에 적용합니다. 공동사업은 구성원에게
            나뉜 수입금액이 아니라 공동사업장 전체 수입금액에 경비율을 적용한 뒤, 그 소득금액을
            손익분배비율 또는 지분율로 나눕니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gber-formula">
        <h2 id="guide-gber-formula" className="text-foreground text-xl font-semibold tracking-tight">
          추계 소득금액 식
        </h2>
        <p>단순경비율 적용 대상:</p>
        <p>
          <strong>소득금액 = 수입금액 − (수입금액 × 단순경비율)</strong>
        </p>
        <p>
          일자리 안정자금은 수입금액에서 제외합니다. 2020년 2월 11일 이후 과세표준을 결정·경정하는
          분부터입니다.
        </p>
        <p>기준경비율 적용 대상은 다음 둘 중 작은 금액입니다.</p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            소득금액 = 수입금액 − 주요경비 − (수입금액 × 기준경비율). 주요경비 = 매입비용 + 임차료 +
            인건비
          </li>
          <li>소득금액 = {"{"}수입금액 − (수입금액 × 단순경비율){"}"} × 배율</li>
        </ol>
        <p>
          복식부기의무자가 추계할 때는 기준경비율의 1/2을 기타경비에 적용합니다. 기준소득금액이 0보다
          작으면 0입니다. 소득금액은 기준소득금액과 비교소득금액 중 작은 금액입니다. 가 방법과 나
          방법 중 하나를 선택할 수도 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소득상한 배율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">귀속</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">간편장부대상자</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">복식부기의무자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">2007년</td>
                <td className="border-border border-b px-3 py-2.5">2.0배</td>
                <td className="border-border border-b px-3 py-2.5">2.4배</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">2008년</td>
                <td className="border-border border-b px-3 py-2.5">2.1배</td>
                <td className="border-border border-b px-3 py-2.5">2.6배</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">2009년</td>
                <td className="border-border border-b px-3 py-2.5">2.2배</td>
                <td className="border-border border-b px-3 py-2.5">2.8배</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">2010~2015년</td>
                <td className="border-border border-b px-3 py-2.5">2.4배</td>
                <td className="border-border border-b px-3 py-2.5">3.0배</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">2016~2019년</td>
                <td className="border-border border-b px-3 py-2.5">2.6배</td>
                <td className="border-border border-b px-3 py-2.5">3.2배</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">2020~2027년</td>
                <td className="px-3 py-2.5">2.8배</td>
                <td className="px-3 py-2.5">3.4배</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          2025년 귀속 배율은 간편장부대상자 2.8배, 복식부기의무자 3.4배입니다. 2011년 귀속분부터
          복식부기의무자 추계는 기준경비율의 1/2를 적용합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gber-adjust">
        <h2 id="guide-gber-adjust" className="text-foreground text-xl font-semibold tracking-tight">
          자가·장애인·인적용역 조정
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            자가 사업자의 기준경비율 = 일반율 + 0.4. 일반율 11.6이면 자가율 12.0입니다.
          </li>
          <li>
            자가 사업자의 단순경비율 = 일반율 − 0.3. 일반율 90.3이면 자가율 90.0입니다.
          </li>
          <li>임대인과 임차인이 같은 세대 구성원이면 자가 사업자로 봅니다.</li>
          <li>
            장애인증명서를 제출한 장애인이 직접 경영하는 사업의 단순경비율 = 단순경비율 + (100% −
            단순경비율) × 20%. 90.3이면 90.3 + (100 − 90.3) × 20% = 92.2입니다.
          </li>
          <li>
            인적용역(업종코드 94) 단순경비율은 수입금액 4천만 원까지 기본율, 4천만 원 초과분에
            초과율을 적용합니다.
          </li>
        </ul>
        <p>자가율을 적용하지 않는 업종코드 범위는 다음과 같습니다.</p>
        <p className="text-sm leading-relaxed">
          농업·임업 및 어업(011000~052200), 광업(101000~143107), 전기·가스·증기 및 공기조절
          공급업(401000~403000), 수도·하수 및 폐기물 처리·원료재생업(410000, 410001),
          건설업(451101~453000), 도매 및 소매업(522099, 523132, 525200), 운수 및
          창고업(601000~621001, 630301~630302, 630305~630501, 630701~630909, 641201, 749906), 금융 및
          보험업(659201~659900, 659902~672001, 749904), 부동산업(701101~701504, 703011~703024,
          921404), 전문·과학 및 기술서비스업(730000~730008, 741108, 749941), 사업시설 관리·사업지원 및
          임대 서비스업(143200, 630304, 701600, 712100~713006, 749934, 930903),
          인적용역(940100~940929), 기타 개인서비스(701700, 950000), 가구 내 고용활동(950001).
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gber-agent">
        <h2 id="guide-gber-agent" className="text-foreground text-xl font-semibold tracking-tight">
          보험모집인·방문판매원·음료품배달원
        </h2>
        <p>
          수입금액 7,500만 원 미만이면 연말정산으로 납세의무를 마칠 수 있고, 연말정산 소득금액은
          단순경비율로 계산할 수 있습니다(소득세법 §73①4, §144의2①). 연말정산 소득 외에 다른 소득이
          있어 5월에 확정신고할 때는 사업소득을 다시 계산하지 않고, 연말정산 때 산출한 소득금액으로
          신고할 수 있습니다(소득세법 시행령 §201의11⑩).
        </p>
        <p>
          <strong>연말정산 소득금액 = 총수입금액 × 소득률(1 − 단순경비율)</strong>
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              단순경비율·소득률
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">구분</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">업종코드</th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단순경비율 4천만 원 이하 / 초과
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소득률 4천만 원 이하 / 초과
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">보험모집인</td>
                <td className="border-border border-b px-3 py-2.5">940906</td>
                <td className="border-border border-b px-3 py-2.5">77.6% / 68.6%</td>
                <td className="border-border border-b px-3 py-2.5">22.4% / 31.4%</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">방문판매원</td>
                <td className="border-border border-b px-3 py-2.5">940908</td>
                <td className="border-border border-b px-3 py-2.5">75.0% / 65.0%</td>
                <td className="border-border border-b px-3 py-2.5">25.0% / 35.0%</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">음료품배달원</td>
                <td className="px-3 py-2.5">940907</td>
                <td className="px-3 py-2.5">80.0% / 72.0%</td>
                <td className="px-3 py-2.5">20.0% / 28.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          단순경비율 대상, 연간 수입 4,500만 원인 서적방문판매원(940908)의 소득금액은{" "}
          {"{"}40,000천 원 − (40,000천 원 × 75.0%){"}"} + {"{"}5,000천 원 − (5,000천 원 × 65.0%){"}"} =
          11,750천 원입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gber-major">
        <h2 id="guide-gber-major" className="text-foreground text-xl font-semibold tracking-tight">
          주요경비의 범위와 증명
        </h2>
        <p>
          기준경비율 대상자는 주요경비를 소득세법 제160조의2 제2항 정규증빙(계산서, 세금계산서,
          신용카드, 현금영수증)으로 수취해야 인정됩니다. 범위와 증명서류는 국세청고시 제2024-31호
          (2024.9.13.) 「매입비용·임차료의 범위와 증명서류의 종류」에 있습니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            매입비용은 재화의 매입(사업용 고정자산 매입 제외), 외주가공비, 운송업의 운반비입니다.
            재화는 상품·제품·원료·소모품 등 유체물과 동력·열 등 관리할 수 있는 자연력입니다.
            외주가공비는 판매용 재화의 생산·건설·건축·가공을 위탁·하도급하고 지급했거나 지급할
            금액입니다. 운송업 운반비는 육상·해상·항공운송업과 운수 관련 서비스업자가 타인의 운송수단을
            쓰고 지급했거나 지급할 금액입니다.
          </li>
          <li>
            매입비용은 매입 부대비용(운반비, 상하차비, 공과금, 보험료 등)을 빼지 않은 것이 아니라, 그
            부대비용을 포함하지 않은 물건 대금입니다. 원재료 매입 관세는 포함하고 환급 관세는 뺍니다.
            의제매입세액 공제액은 매입비용에서 뺍니다. 부동산매매업자 등이 지출한 취득세는 매입비용에
            포함합니다.
          </li>
          <li>
            매입비용에 넣지 않는 용역 예시: 음식료·숙박료, 창고료·통신비, 보험료·수수료·광고선전비(광고선전용
            재화 매입은 매입비용), 수선비(수선·수리용 재화 매입은 매입비용), 사업·교육·개인·보건 및 그
            밖의 서비스 대가, 기부금 등 사업과 직접 관련 없는 지출(서면1팀-1059, 2005.9.6.).
          </li>
          <li>
            임차료는 사업에 직접 쓰는 건축물·기계장치 등 고정자산을 임차하고 지급했거나 지급할
            금액입니다. 금융리스·운용리스 리스료는 임차료가 아닙니다(서면1팀-960, 2007.7.6.). 백화점
            입점 업체가 매출액의 일정액을 임차료로 지급하는 것은 해당합니다(소득세과-1405, 2009.9.11.).
            오픈마켓 판매수수료는 해당하지 않습니다(소득세과-154, 2016.1.29.).
          </li>
          <li>
            인건비는 종업원 급여·임금, 일용근로자 임금, 퇴직급여로서 증빙으로 지급했거나 지급할
            금액입니다. 비과세 급여를 포함합니다. 사용자 부담 고용보험료·국민연금보험료·산재보험료,
            식사·피복 등 복리후생비는 제외합니다. 사업소득인 자동차판매원 수당은 주요경비 인건비가
            아닙니다(서면1팀-88, 2007.1.15.).
          </li>
        </ul>
        <p>재고자산에 들어 있는 주요경비:</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>공제하는 주요경비 = 기초재고에 포함된 주요경비 + 당기 지출 − 기말재고에 포함된 주요경비</li>
          <li>기초 또는 기말을 따로 계산할 수 없으면 재고를 보지 않고 해당 연도 지출액만 공제할 수 있습니다.</li>
          <li>
            기초는 계산할 수 없고 기말만 계산할 수 있으면, 기초재고 매출환산금액 × (직전 연도 단순경비율
            − 직전 연도 기준경비율)을 기초재고의 주요경비로 할 수 있습니다.
          </li>
        </ul>
        <p>증명(소득세법 시행령 §143⑤):</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>매입비용·임차료: 세금계산서, 계산서, 신용카드매출전표(현금영수증 포함). 정규증빙을 받지 않아도 되는 거래는 지출이 확인되는 영수증.</li>
          <li>
            정규증빙을 받지 않은 금액은 주요경비지출명세서를 첨부한 금액. 작성 대상은 장부 없는
            기준경비율 대상자가 수입금액에서 뺀 매입비용·임차료 중 정규증빙이 없는 금액입니다. 정규증빙
            예외 거래는 적지 않습니다. 작성 제외 금액에는 공급받은 재화의 거래 건당 3만 원 이하 등
            정규증빙을 받지 않아도 되는 금액이 있습니다.
          </li>
          <li>급여·임금·퇴직급여: 원천징수영수증 또는 지급명세서를 관할 세무서에 제출한 금액. 제출할 수 없는 부득이한 사유가 있으면 받는 사람의 주소·성명·주민등록번호가 확인되고 서명·날인한 증명.</li>
          <li>
            소득구분코드는 부동산임대업 사업소득 30, 그 밖 사업소득 40입니다. 서식은 추계소득금액계산서
            (기준경비율적용대상자용) 별지 제40호 서식(1), 주요경비지출명세서 별지 제20호의5 서식(개정
            2025. 3. 21.)입니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gber-examples">
        <h2 id="guide-gber-examples" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시
        </h2>
        <p>
          제조업 단일 업종, 2024년 수입 4억 원, 2025년 수입 1억 2천만 원, 장애인이 아닌 임차 사업장,
          기준경비율 20%, 단순경비율 75%, 배율 3.4배, 주요경비 6,800만 원(매입 4,100만 원, 임차료
          1,200만 원, 인건비 1,500만 원), 기초·기말 재고 없음. 직전 연도 수입이 4억 원이므로
          복식부기의무자이고 기준경비율의 1/2와 배율 3.4를 씁니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>① 120,000,000 − 68,000,000 − (120,000,000 × 20% × 1/2) = 40,000,000원</li>
          <li>② {"{"}120,000,000 − (120,000,000 × 75%){"}"} × 3.4 = 102,000,000원</li>
          <li>추계 소득금액은 둘 중 적은 40,000,000원</li>
        </ul>
        <p>
          건축사업(742105), 2025년 수입 1억 원, 기준경비율 21.0%인 복식부기의무자의 기타경비는 21.0%의
          1/2인 10,500,000원입니다.
        </p>
        <p>
          서식 작성 예(간편장부대상자로 가정, 과세기간 2025.1.1.~2025.12.31., 업종코드 525101, 소매,
          총수입 70,000,000원, 당기 주요경비 45,000,000원, 기초 0, 기준경비율 11.4%, 단순경비율 86.0%):
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>기준경비율 경비 = 70,000,000 × 11.4% = 7,980,000원</li>
          <li>필요경비 계 = 45,000,000 + 7,980,000 = 52,980,000원</li>
          <li>기준소득금액 = 70,000,000 − 52,980,000 = 17,020,000원</li>
          <li>단순경비율 소득금액 = 70,000,000 × (1 − 86.0%) = 9,800,000원</li>
          <li>비교소득금액 = 9,800,000 × 2.8 = 27,440,000원</li>
          <li>소득금액 = 작은 금액 17,020,000원</li>
          <li>
            당기 주요경비 45,000,000원 중 정규증빙은 40,000,000원, 주요경비지출명세서 작성분은
            500,000원입니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gber-penalty">
        <h2 id="guide-gber-penalty" className="text-foreground text-xl font-semibold tracking-tight">
          추계신고의 불이익
        </h2>
        <p>
          복식부기의무자가 추계신고하면 신고하지 않은 것으로 보아 다음 중 큰 금액을 적용합니다.
          전문직은 수입금액과 관계없이 복식부기의무자이므로 무신고가산세 대상입니다.
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>무신고 납부세액 × 20%</li>
          <li>수입금액 × 7/10,000</li>
          <li>산출세액 × (무·미달 기장 소득금액 ÷ 종합소득금액) × 20%</li>
        </ol>
        <p>
          간편장부대상자가 추계신고하면 ③만 적용합니다. 2025년에 새로 사업을 시작한 사업자, 2024년
          수입금액 4,800만 원 미만인 사업자, 연말정산한 사업소득만 있는 사람은 이 무기장 가산세를
          적용하지 않습니다. 결손금액이 나도 장부가 없으면 인정받지 못합니다.
        </p>
        <p>
          결정·경정 때 장부나 증명서류로 소득금액을 계산할 수 없어 소득세법 §80③에 따라 추계결정하면
          조세특례제한법 §128① 세액공제가 배제됩니다. 복식부기의무자가 소득세법 §70④3호 서류를 제출하지
          않으면 무신고로 보아 무신고가산세와 조세특례제한법 §128② 감면 배제 불이익이 있습니다. 요율 전체는{" "}
          <Link
            href="/guide/comprehensive-income-tax-penalty-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            가산세 가이드
          </Link>
          에 있습니다.
        </p>
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
            href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2230&cntntsId=7669"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            기장의무·경비율 판단
          </a>
          , 경비율 적용방법 안내(게시) 한글 문서.
        </p>
      </section>
    </>
  );
}
