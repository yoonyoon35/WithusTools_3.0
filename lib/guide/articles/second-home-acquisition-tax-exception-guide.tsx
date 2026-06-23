import Link from "next/link";

export const secondHomeAcquisitionTaxExceptionGuideMeta = {
  slug: "second-home-acquisition-tax-exception-guide",
  title: "세컨드홈 취득세 특례",
  description:
    "2026년 6월 기준 인구감소지역 세컨드홈 취득세 특례 요건, 대상 지역·가액 기준, 일반·중과 세액 차이, 일시적 2주택과의 차이, 신청 방법과 비적용 사례를 표로 정리했습니다.",
  updated: "2026년 6월 1일",
} as const;

export function SecondHomeAcquisitionTaxExceptionGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-shate-overview">
        <h2 id="guide-shate-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 기준
        </h2>
        <p>
          세컨드홈 취득세 특례는 무주택자·1주택자가 <strong>인구감소지역</strong>에서 주택을 추가로 취득할 때, 2주택
          중과세율(8%) 대신 1주택 일반세율(1~3%)을 적용받는 제도입니다. 지방 거주·체류 수요를 늘리려는 정책 목적이
          크고, 2026년에는 적용 지역과 주택 가액 기준이 한꺼번에 넓어졌습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-shate-core">
        <h2 id="guide-shate-core" className="text-foreground text-xl font-semibold tracking-tight">
          특례 적용 핵심 조건
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세컨드홈 취득세 특례 요건 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조건
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상자
                </th>
                <td className="border-border border-b px-3 py-2.5">세대 기준 무주택자 또는 1주택자</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득 주택 소재지
                </th>
                <td className="border-border border-b px-3 py-2.5">인구감소지역·인구감소관심지역(2026년 9곳 추가)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 가액
                </th>
                <td className="border-border border-b px-3 py-2.5">취득가액 12억 원 이하 또는 공시가격 9억 원 이하</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지역 제외
                </th>
                <td className="border-border border-b px-3 py-2.5">광역시 구 지역(일부 군 지역은 예외)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">2024년 1월 4일 ~ 2026년 12월 31일 취득분</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  혜택
                </th>
                <td className="px-3 py-2.5">2주택 중과(8%) 대신 1주택 일반세율(1~3%) 적용</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 대상 지역 목록은 행정안전부·관할 지자체 고시에 따라 달라집니다. 취득 전 해당 주소지가 특례 지역에 포함되는지
          확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-shate-2026-change">
        <h2 id="guide-shate-2026-change" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 기준 변경 사항
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              가액·지역 기준 변화
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  개정 전
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  2026년 기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득가액 상한
                </th>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
                <td className="border-border border-b px-3 py-2.5">12억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공시가격 상한
                </th>
                <td className="border-border border-b px-3 py-2.5">4억 원</td>
                <td className="border-border border-b px-3 py-2.5">9억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  대상 지역
                </th>
                <td className="px-3 py-2.5">인구감소지역 중심</td>
                <td className="px-3 py-2.5">인구감소관심지역 9곳 추가(강릉·속초 등)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          기준이 3~4억 원대에서 9~12억 원대로 올라가면서, 실제로 거래되는 중형 아파트·리조트권 주택도 특례 검토 대상에
          들어오는 경우가 많아졌습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-shate-regions">
        <h2 id="guide-shate-regions" className="text-foreground text-xl font-semibold tracking-tight">
          세컨드홈 특례 대상 지역
        </h2>
        <p>
          대상은 크게 <strong>인구감소지역</strong>(전국 89개 시·군·구)과, 2026년부터 세컨드홈에 새로 포함된{" "}
          <strong>인구감소관심지역 9곳</strong>입니다. 다만 광역시 <strong>구</strong>와 수도권 일부는 취득세 특례에서
          빠지는 경우가 있어, 아래 목록만 보고 판단하지 말고 취득 전 관할 세무과에서 주소지 해당 여부를 확인해야
          합니다.
        </p>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">2026년 세컨드홈 특례 추가 지역(9곳)</h3>
          <p className="text-muted-foreground text-sm">
            인구감소관심지역 18곳 중 광역시 구를 제외한 시·군만 2026년부터 세컨드홈 취득세 특례에 포함됩니다.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                2026년 추가 대상(인구감소관심지역)
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    시·도
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    시·군
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    강원
                  </th>
                  <td className="border-border border-b px-3 py-2.5">강릉시, 동해시, 속초시, 인제군</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    전북
                  </th>
                  <td className="border-border border-b px-3 py-2.5">익산시</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    경북
                  </th>
                  <td className="border-border border-b px-3 py-2.5">경주시, 김천시</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    경남
                  </th>
                  <td className="px-3 py-2.5">사천시, 통영시</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">인구감소관심지역 18곳 — 세컨드홈 적용 여부</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                관심지역별 취득세 특례 해당 여부
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    시·도
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    지역
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    세컨드홈 특례
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    부산
                  </th>
                  <td className="border-border border-b px-3 py-2.5">금정구, 중구</td>
                  <td className="border-border border-b px-3 py-2.5">❌ (광역시 구)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    인천
                  </th>
                  <td className="border-border border-b px-3 py-2.5">동구</td>
                  <td className="border-border border-b px-3 py-2.5">❌ (광역시 구)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    광주
                  </th>
                  <td className="border-border border-b px-3 py-2.5">동구</td>
                  <td className="border-border border-b px-3 py-2.5">❌ (광역시 구)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    대전
                  </th>
                  <td className="border-border border-b px-3 py-2.5">대덕구, 동구, 중구</td>
                  <td className="border-border border-b px-3 py-2.5">❌ (광역시 구)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    경기
                  </th>
                  <td className="border-border border-b px-3 py-2.5">동두천시, 포천시</td>
                  <td className="border-border border-b px-3 py-2.5">❌ (수도권 제외)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    강원
                  </th>
                  <td className="border-border border-b px-3 py-2.5">강릉시, 동해시, 속초시, 인제군</td>
                  <td className="border-border border-b px-3 py-2.5">✅ (2026년 추가)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    전북
                  </th>
                  <td className="border-border border-b px-3 py-2.5">익산시</td>
                  <td className="border-border border-b px-3 py-2.5">✅ (2026년 추가)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    경북
                  </th>
                  <td className="border-border border-b px-3 py-2.5">경주시, 김천시</td>
                  <td className="border-border border-b px-3 py-2.5">✅ (2026년 추가)</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    경남
                  </th>
                  <td className="px-3 py-2.5">사천시, 통영시</td>
                  <td className="px-3 py-2.5">✅ (2026년 추가)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm">
            ※ 경기 동두천·포천은 시 단위이나 세컨드홈 취득세 특례에서 수도권으로 보아 제외되는 경우가 있습니다. 최종
            여부는 관할 구청 세무과 확인이 필요합니다.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">인구감소지역 목록(89개 시·군·구)</h3>
          <p className="text-muted-foreground text-sm">
            행정안전부 <strong>현행 지정</strong> 89개(2021년 10월 최초 지정 이후 유효). 5년 주기 재지정으로 2026년
            하반기 목록 변경 가능성이 있으니, 취득 시점에{" "}
            <a
              href="https://www.mois.go.kr/frt/sub/a06/b06/populationDecline/screen.do"
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              행정안전부 인구감소지역 페이지
            </a>
            에서 최종 확인하세요. 광역시 구(부산·대구 등)는 인구감소지역이어도 세컨드홈 취득세 특례에서 제외됩니다.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                시·도별 인구감소지역
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    시·도
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    해당 시·군·구
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                    부산
                  </th>
                  <td className="border-border border-b px-3 py-2.5">동구, 서구, 영도구</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                    대구
                  </th>
                  <td className="border-border border-b px-3 py-2.5">남구, 서구, 군위군</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                    인천
                  </th>
                  <td className="border-border border-b px-3 py-2.5">강화군, 옹진군</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                    경기
                  </th>
                  <td className="border-border border-b px-3 py-2.5">가평군, 연천군</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                    강원
                  </th>
                  <td className="border-border border-b px-3 py-2.5">
                    고성군, 삼척시, 양구군, 양양군, 영월군, 정선군, 철원군, 태백시, 평창군, 홍천군, 화천군, 횡성군
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                    충북
                  </th>
                  <td className="border-border border-b px-3 py-2.5">괴산군, 단양군, 보은군, 영동군, 옥천군, 제천시</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                    충남
                  </th>
                  <td className="border-border border-b px-3 py-2.5">
                    공주시, 금산군, 논산시, 보령시, 부여군, 서천군, 예산군, 청양군, 태안군
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                    전북
                  </th>
                  <td className="border-border border-b px-3 py-2.5">
                    고창군, 김제시, 남원시, 무주군, 부안군, 순창군, 임실군, 장수군, 정읍시, 진안군
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                    전남
                  </th>
                  <td className="border-border border-b px-3 py-2.5">
                    강진군, 고흥군, 곡성군, 구례군, 담양군, 보성군, 신안군, 영광군, 영암군, 완도군, 장성군, 장흥군,
                    진도군, 함평군, 해남군, 화순군
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                    경북
                  </th>
                  <td className="border-border border-b px-3 py-2.5">
                    고령군, 문경시, 봉화군, 상주시, 성주군, 안동시, 영덕군, 영양군, 영주시, 영천시, 울릉군, 울진군,
                    의성군, 청도군, 청송군
                  </td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                    경남
                  </th>
                  <td className="px-3 py-2.5">
                    거창군, 고성군, 남해군, 밀양시, 산청군, 의령군, 창녕군, 하동군, 함안군, 함양군, 합천군
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            강릉·속초·익산·경주 등은 위 89개 목록에는 없고, 2026년 인구감소관심지역으로 세컨드홈 특례에 따로
            편입됐습니다. 인구감소지역 89개 자체는 2026년 6월 현재도 행정안전부 고시와 동일하며, 재지정 고시 전까지
            이 목록을 따릅니다.
          </p>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-shate-example">
        <h2 id="guide-shate-example" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 부담 비교 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          1주택자가 인구감소지역에서 5억 원 주택 추가 취득, 전용 85㎡ 이하(농특세 제외) 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              중과세율 vs 세컨드홈 특례(일반세율) 납부액
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부액(참고)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  특례 미적용(2주택 중과)
                </th>
                <td className="border-border border-b px-3 py-2.5">8% + 지방교육세 등</td>
                <td className="border-border border-b px-3 py-2.5">약 4,200만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  세컨드홈 특례 적용
                </th>
                <td className="px-3 py-2.5">1% + 지방교육세 등</td>
                <td className="px-3 py-2.5">약 550만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          같은 매매가라도 특례 적용 여부에 따라 취득세만 수천만 원 차이 날 수 있습니다. 매매가·면적·지역에 따라 세율
          구간이 달라지므로 아래 계산기로 본인 조건을 넣어 보는 편이 정확합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-shate-cases">
        <h2 id="guide-shate-cases" className="text-foreground text-xl font-semibold tracking-tight">
          케이스별 계산 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          전용 85㎡ 이하, 농특세 제외, 2026년 6월 취득 가정. 취득세·지방교육세 합계 기준입니다.
        </p>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">케이스 1 — 서울 1주택자, 강릉 3억 원 주택 취득</h3>
          <p>
            서울에 1채를 두고 강릉(인구감소관심지역)에서 매매가 3억 원 아파트를 추가로 사는 경우입니다. 기존 주택과
            시·군·구가 다르고 가액 기준도 충족하므로 세컨드홈 특례 요건은 맞습니다.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                강릉 3억 원 취득 — 특례 미적용 vs 적용
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    항목
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    특례 미신청(2주택)
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    세컨드홈 특례
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    적용 세율
                  </th>
                  <td className="border-border border-b px-3 py-2.5">1%(비조정·2주택)</td>
                  <td className="border-border border-b px-3 py-2.5">1%(1주택 일반세율)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    취득세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">300만 원</td>
                  <td className="border-border border-b px-3 py-2.5">300만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    지방교육세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">30만 원</td>
                  <td className="border-border border-b px-3 py-2.5">30만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    합계
                  </th>
                  <td className="px-3 py-2.5">330만 원</td>
                  <td className="px-3 py-2.5">330만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            강릉은 조정대상지역이 아니어서, 취득세만 놓고 보면 2주택·1주택 모두 1% 구간으로 같게 나올 수 있습니다. 그래도
            특례를 신청해 두면 <strong>1세대 1주택 과세</strong>가 유지되어 양도세·종부세·재산세에서 불리하게 잡히는
            일을 막는 데 의미가 있습니다.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">케이스 2 — 서울 1주택자, 강릉 5억 원 주택 취득</h3>
          <p>
            같은 조건에서 매매가만 5억 원으로 올린 경우입니다. 8% 중과가 아닌 1% 구간이 적용됩니다.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                강릉 5억 원 취득 — 납부액 비교
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    구분
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    취득세·지방교육세 합계
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    비고
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    특례 미신청(2주택)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">550만 원</td>
                  <td className="border-border border-b px-3 py-2.5">취득세 500만 + 지방교육세 50만</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    세컨드홈 특례
                  </th>
                  <td className="border-border border-b px-3 py-2.5">550만 원</td>
                  <td className="border-border border-b px-3 py-2.5">취득세 500만 + 지방교육세 50만</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    조정지역 2주택 중과(참고)
                  </th>
                  <td className="px-3 py-2.5">4,200만 원</td>
                  <td className="px-3 py-2.5">취득세 4,000만 + 지방교육세 200만(5억 × 0.4%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">케이스 3 — 서울 1주택자, 수원 3억 원 주택 취득(특례 불가)</h3>
          <p>
            비교를 위해 세컨드홈 대상이 아닌 조정대상지역 추가 매수 사례입니다. 인구감소·관심지역이 아니면 특례를 쓸 수
            없고, 2주택 중과 8%가 그대로 적용됩니다.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                수원 3억 원 취득 — 2주택 중과 적용
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    항목
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    취득세(8%)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">2,400만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    지방교육세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">120만 원(3억 원 × 0.4%)</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    합계
                  </th>
                  <td className="px-3 py-2.5">2,520만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            같은 1주택자가 3억 원짜리를 추가로 사더라도, 강릉이면 330만 원·수원이면 2,520만 원으로 갈립니다. 취득세는{" "}
            <strong>새로 사는 집이 조정대상지역인지</strong>, 세컨드홈 특례는{" "}
            <strong>인구감소·관심지역인지</strong>를 각각 따로 봐야 합니다.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">케이스 4 — 무주택자, 전남 순천 2억 원 주택 취득</h3>
          <p>
            인구감소지역에서 첫 주택을 사는 경우입니다. 애초에 1주택 취득이므로 중과 문제는 없고, 특례·생애최초 감면 등
            다른 제도와 겹치는지를 따로 확인하면 됩니다.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                순천 2억 원 — 1주택 취득
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    항목
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    취득세(1%)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">200만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    지방교육세
                  </th>
                  <td className="border-border border-b px-3 py-2.5">20만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    합계
                  </th>
                  <td className="px-3 py-2.5">220만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-shate-vs-temp">
        <h2 id="guide-shate-vs-temp" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택 특례와의 차이
        </h2>
        <p>
          둘 다 2주택 취득 시 중과를 피하려는 제도지만, 적용 범위와 조건이 다릅니다. 이사 목적의 수도권·조정지역 매수는
          일시적 2주택을, 지방 거주·휴양 목적의 추가 매수는 세컨드홈 특례를 먼저 검토하는 경우가 많습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세컨드홈 vs 일시적 2주택
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세컨드홈 특례
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일시적 2주택
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상 지역
                </th>
                <td className="border-border border-b px-3 py-2.5">인구감소·관심지역</td>
                <td className="border-border border-b px-3 py-2.5">전국(조건 충족 시)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종전 주택 처분
                </th>
                <td className="border-border border-b px-3 py-2.5">필수 아님</td>
                <td className="border-border border-b px-3 py-2.5">3년 이내 처분 필요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득 목적
                </th>
                <td className="border-border border-b px-3 py-2.5">지방 거주·체류 등</td>
                <td className="border-border border-b px-3 py-2.5">이사·학업·취업 등 실수요</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  적용 기한
                </th>
                <td className="px-3 py-2.5">2026년 12월 31일 취득분까지</td>
                <td className="px-3 py-2.5">상시(별도 기한 규정)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          일시적 2주택 요건·추징 방식은{" "}
          <Link
            href="/guide/temporary-two-home-acquisition-tax-exception-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            일시적 2주택 취득세 중과 예외 조건
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-shate-not-applicable">
        <h2 id="guide-shate-not-applicable" className="text-foreground text-xl font-semibold tracking-tight">
          특례가 적용되지 않는 경우
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              비적용·주의 사례
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이유
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기존 주택과 같은 시·군·구 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">동일 지역 추가 취득은 특례 대상에서 제외</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득가액·공시가격 기준 초과
                </th>
                <td className="border-border border-b px-3 py-2.5">12억·9억 원 상한 미충족</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  세대 기준 2주택 이상 보유 상태에서 추가
                </th>
                <td className="border-border border-b px-3 py-2.5">무주택·1주택자 요건 불충족</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  광역시 구 지역 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">대상 지역에서 제외</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  2026년 12월 31일 이후 취득
                </th>
                <td className="px-3 py-2.5">현행 한시 적용 기간 경과</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-shate-overlap">
        <h2 id="guide-shate-overlap" className="text-foreground text-xl font-semibold tracking-tight">
          다른 감면과 함께 쓸 수 있나
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              제도 조합별 적용
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조합
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 + 세컨드홈
                </th>
                <td className="border-border border-b px-3 py-2.5">❌ (추가 주택 취득 시 세컨드홈 특례 성격)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  출산·양육 + 세컨드홈
                </th>
                <td className="border-border border-b px-3 py-2.5">사례별 확인 필요</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  인구감소지역 취득세 감면(최대 150만 원)
                </th>
                <td className="px-3 py-2.5">별도 요건 충족 시 추가 검토</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          감면 제도 전체 비교는{" "}
          <Link
            href="/guide/acquisition-tax-relief-programs-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            취득세 세액공제·감면 제도 총정리
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-shate-checklist">
        <h2 id="guide-shate-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          취득 전 확인 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              계약 전 점검 항목
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
                  세대 기준 보유 주택 수(분양권·입주권 포함)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  취득 예정 주택의 인구감소·관심지역 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  기존 주택과 같은 시·군·구인지
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  취득가액·공시가격 상한(12억·9억) 충족 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  취득 예정일이 2026년 12월 31일 이내인지
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  중과 적용 시 세액과 특례 적용 시 세액 비교
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-shate-filing">
        <h2 id="guide-shate-filing" className="text-foreground text-xl font-semibold tracking-tight">
          신청 방법
        </h2>
        <p>
          세컨드홈 취득세 특례는 자동 적용되지 않습니다. 취득세 신고·납부 기한(취득일로부터 60일) 안에 위택스 또는 관할
          구청에서 특례 적용을 신청해야 합니다. 이미 중과세율로 납부했다면, 요건을 충족하는 경우 경정청구로 차액 환급을
          받을 수 있습니다.
        </p>
        <p>
          2주택 중과 기준·주택 수 산정은{" "}
          <Link
            href="/guide/second-home-acquisition-tax-surcharge-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2주택자 취득세 중과 기준
          </Link>
          가이드와 함께 보면 흐름을 잡기 쉽습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 세컨드홈 특례는 지방세법·지방세특례제한법 등에 따르며, 대상 지역·가액 기준은 정부 정책에 따라 변동될 수
          있습니다. 취득세 외 양도세·종부세·재산세 특례는 별도 규정이 적용되므로, 계약 전 관할 세무과 또는
          위택스(wetax.go.kr)에서 개별 확인을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 매매가·주택 수에 따른 취득세는 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
