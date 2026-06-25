import Link from "next/link";

export const temporaryTwoHomeAcquisitionTaxExceptionGuideMeta = {
  slug: "temporary-two-home-acquisition-tax-exception-guide",
  title: "일시적 2주택 취득세 중과 예외 조건",
  description:
    "2026년 기준 일시적 2주택 특례 적용 전제(조정·비조정), 인정 사유·처분 범위, 3년 기한, 세컨드홈과의 차이, 일반·중과 세액 예시, 추징·신고 방법, 생애최초 중복 여부와 취득 전 체크리스트를 표로 정리했습니다.",
  updated: "2026년 6월 25일",
} as const;

export function TemporaryTwoHomeAcquisitionTaxExceptionGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-t2h-overview">
        <h2 id="guide-t2h-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 기준
        </h2>
        <p>
          1주택자가 이사·학업·취업 등으로 새 주택을 취득해 일시적으로 2주택이 된 경우, 종전 주택을 3년 이내 처분하면 신규
          주택에 1주택 일반세율(1~3%)이 적용됩니다.
        </p>
        <p>
          이 특례의 <strong>실질적 절세 효과</strong>는 주로{" "}
          <strong>신규 주택이 조정대상지역</strong>일 때 나타납니다. 조정지역에서 2주택을 취득하면 기본 중과세율{" "}
          <strong>8%</strong>가 붙지만, 일시적 2주택 요건을 충족하면 <strong>1~3%</strong>만 내면 됩니다.{" "}
          <strong>비조정 지역</strong> 신규 취득은 2주택이어도 원칙적으로 이미 1~3% 구간이지만, 종전 주택 처분·신고
          요건은 별도로 지켜야 합니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-t2h-core" className="text-primary underline-offset-4 hover:underline">
              핵심 조건
            </a>
          </li>
          <li>
            <a href="#guide-t2h-reasons" className="text-primary underline-offset-4 hover:underline">
              인정 사유·처분 범위
            </a>
          </li>
          <li>
            <a href="#guide-t2h-three-year" className="text-primary underline-offset-4 hover:underline">
              처분 기한 3년
            </a>
          </li>
          <li>
            <a href="#guide-t2h-example" className="text-primary underline-offset-4 hover:underline">
              세액 계산 예시
            </a>
          </li>
          <li>
            <a href="#guide-t2h-recapture" className="text-primary underline-offset-4 hover:underline">
              미처분 시 추징
            </a>
          </li>
          <li>
            <a href="#guide-t2h-vs-second" className="text-primary underline-offset-4 hover:underline">
              세컨드홈 특례와의 차이
            </a>
          </li>
          <li>
            <a href="#guide-t2h-other-programs" className="text-primary underline-offset-4 hover:underline">
              다른 제도와의 관계
            </a>
          </li>
          <li>
            <a href="#guide-t2h-not-applicable" className="text-primary underline-offset-4 hover:underline">
              비적용 사례
            </a>
          </li>
          <li>
            <a href="#guide-t2h-rights" className="text-primary underline-offset-4 hover:underline">
              분양권·입주권
            </a>
          </li>
          <li>
            <a href="#guide-t2h-checklist" className="text-primary underline-offset-4 hover:underline">
              취득 전 체크리스트
            </a>
          </li>
          <li>
            <a href="#guide-t2h-filing" className="text-primary underline-offset-4 hover:underline">
              신고·납부 방법
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-t2h-core">
        <h2 id="guide-t2h-core" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택 취득세 핵심 조건
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              특례 적용 요건 요약
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
                  대상
                </th>
                <td className="border-border border-b px-3 py-2.5">1주택 보유 세대가 신규 주택 취득으로 2주택이 된 경우</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">신규 취득 주택(종전 주택이 아님)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  처분 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">종전 주택(기존 보유 주택)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  처분 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">신규 주택 취득일로부터 3년 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  혜택
                </th>
                <td className="border-border border-b px-3 py-2.5">신규 주택에 1주택 일반세율(1~3%) 적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  미처분 시
                </th>
                <td className="px-3 py-2.5">
                  해당 주택에 적용될 중과세율(조정지역 2주택 8% 등)과 납부 세액의 차액 추징 + 가산세
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-reasons">
        <h2 id="guide-t2h-reasons" className="text-foreground text-xl font-semibold tracking-tight">
          인정 사유와 종전 주택 처분 범위
        </h2>
        <p>
          일시적 2주택은 투자·임대 목적 추가 매수가 아니라, 실수요에 해당하는 사유로 신규 주택을 취득한 경우에 인정됩니다.
          세무상 인정 여부는 개별 사실관계·심사에 따라 달라질 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대표 인정 사유(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  사유
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  예시
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이사·거주지 변경
                </th>
                <td className="border-border border-b px-3 py-2.5">직장·학교·가족 거주지 이동</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  학업·취업
                </th>
                <td className="border-border border-b px-3 py-2.5">대학·대학원 진학, 전직·취업</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  혼인·동거
                </th>
                <td className="border-border border-b px-3 py-2.5">신혼부부 주거, 부부 합가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  효도·간병
                </th>
                <td className="border-border border-b px-3 py-2.5">직계존속 부양, 상·하병 간병</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  직장이전
                </th>
                <td className="px-3 py-2.5">본인·배우자 근무지 변경에 따른 주거 이동</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>처분</strong>은 종전 주택의 소유권을 이전하는 것을 말하며, 매매·증여·상속 등으로 세대 밖으로
          이전되면 처분으로 볼 수 있습니다. 매매의 경우 보통 <strong>잔금 지급과 소유권 이전등기</strong>가 완료된
          시점을 처분 완료로 봅니다. 처분 기한(3년) 계산은 신규 주택 취득일 기준이므로, 종전 주택 매각 일정을
          취득일부터 역산해 계획하는 것이 안전합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-three-year">
        <h2 id="guide-t2h-three-year" className="text-foreground text-xl font-semibold tracking-tight">
          처분 기한 3년 적용 기준
        </h2>
        <p>
          종전 주택과 신규 주택 모두 조정대상지역에 있는 경우에도 처분 기한이 3년으로 통일되어 적용됩니다. 2023년 2월 시행령 개정으로
          조정대상지역 여부에 관계없이 3년으로 처분 기한이 단일화됐습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지역 조합별 처분 기한
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  처분 기한
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종전·신규 주택 모두 조정대상지역
                </th>
                <td className="border-border border-b px-3 py-2.5">3년</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종전 주택 비조정·신규 주택 조정
                </th>
                <td className="border-border border-b px-3 py-2.5">3년</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  종전·신규 주택 모두 비조정대상지역
                </th>
                <td className="px-3 py-2.5">3년</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          처분 기한은 신규 주택 <strong>취득일</strong>(잔금 지급일과 등기 접수일 중 빠른 날)부터 기산합니다. 매매계약일이
          아닌 잔금일 기준이므로 정확한 날짜 계산이 필요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-example">
        <h2 id="guide-t2h-example" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택 취득세 계산 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          조정대상지역 신규 주택·2주택 취득 가정. 취득세 계산기와 동일 기준.
        </p>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">전용 85㎡ 이하(농특세 제외)</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              조정지역: 일반세율 vs 중과세율(8%) 합계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  특례 적용(1~3%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  미적용(8%)
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
                <td className="border-border border-b px-3 py-2.5">3,650만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 5,880만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 4,596만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">3,300만 원</td>
                <td className="px-3 py-2.5">8,400만 원</td>
                <td className="px-3 py-2.5">5,100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">조정지역 5억·전용 85㎡ 초과(농특세 포함)</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              85㎡ 초과 2주택 조정지역 납부액
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  특례 적용(약 1.3%)
                </th>
                <td className="border-border border-b px-3 py-2.5">650만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  미적용(8%+부가세)
                </th>
                <td className="px-3 py-2.5">4,500만 원</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground text-sm">
          비조정 지역에서 2주택을 취득하면 특례 없이도 5억 기준 약 550만 원(1% 구간) 수준이 적용되는 경우가 많습니다.
          다만 종전 주택 처분·신고 요건은 조정·비조정과 관계없이 확인이 필요합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-t2h-recapture">
        <h2 id="guide-t2h-recapture" className="text-foreground text-xl font-semibold tracking-tight">
          처분 기한 내 미처분 시 추징 방식
        </h2>
        <p>
          일시적 2주택 특례를 적용받아 일반세율로 신고·납부했더라도, 기한 내 종전 주택을 처분하지 못하면 차액이 추징됩니다.
          조정대상지역 2주택 취득이었다면 보통 8% 중과세율과의 차액이 기준이 됩니다.
        </p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 text-sm leading-relaxed">
          추징액 = (해당 주택에 적용될 중과세율 기준 세액) − (납부한 일반세율 세액) + 가산세
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>
            <strong>납부지연가산세</strong>: 당초 신고·납부 기한 다음날부터 추징·납부일까지 1일 0.022%
          </li>
          <li>
            <strong>신고불성실가산세</strong>: 무신고·과소신고 등에 해당하면 산출세액의 20% 등이 추가될 수 있음
          </li>
        </ul>
        <p>
          가산세·경정청구 절차는{" "}
          <Link
            href="/guide/acquisition-tax-deadline-and-penalty-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            취득세 납부 기한·가산세
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-vs-second">
        <h2 id="guide-t2h-vs-second" className="text-foreground text-xl font-semibold tracking-tight">
          세컨드홈 특례와의 차이
        </h2>
        <p>
          둘 다 2주택 취득 시 중과를 피하려는 제도지만, 적용 범위와 조건이 다릅니다. 이사 목적의 수도권·조정지역 매수는
          일시적 2주택을, 인구감소지역 거주·체류 목적 추가 매수는 세컨드홈 특례를 먼저 검토하는 경우가 많습니다.
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
          세컨드홈 특례 요건·신청 방법은{" "}
          <Link
            href="/guide/second-home-acquisition-tax-exception-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            세컨드홈 취득세 특례
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-other-programs">
        <h2 id="guide-t2h-other-programs" className="text-foreground text-xl font-semibold tracking-tight">
          다른 제도와의 관계
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              일시적 2주택과 병행 검토 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  관계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 취득세 감면
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  일시적 2주택으로 1~3% 적용 후, 요건 충족 시 취득세 200만 원 한도 감면을 추가 신청할 수 있음(중복 한도는
                  감면별 규정 따름)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  저가주택 중과 제외
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  수도권 공시가 1억·지방 2억 이하 등 요건 충족 시 8% 중과 없이 1~3% 적용. 일시적 2주택과 별도 제도이므로
                  해당 여부를 먼저 확인
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  세컨드홈 특례
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  인구감소지역 2주택 취득 시 종전 주택 처분 없이 1~3% 가능. 지역·목적에 따라 세컨드홈과 일시적 2주택 중
                  해당 제도 선택
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  감면 중복
                </th>
                <td className="px-3 py-2.5">
                  출산·양육 등 다른 감면과의 중복 적용은 불가. 하나를 선택해 신청
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          저가주택·감면 제도 상세는{" "}
          <Link
            href="/guide/acquisition-tax-rates-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            2026년 취득세율 완전 정리
          </Link>
          ,{" "}
          <Link
            href="/guide/acquisition-tax-relief-programs-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            취득세 세액공제·감면 제도 총정리
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-not-applicable">
        <h2 id="guide-t2h-not-applicable" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택으로 인정되지 않는 경우
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              특례 비적용 사례
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
                  투자·임대 목적 추가 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">이사·학업·취업 등 실수요 사유 아님</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택자가 2주택을 동시·연속 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">1주택 → 2주택 전환이 아님</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기존 2주택자의 신규 주택 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">1주택 → 2주택 전환이 아님</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  처분 기한(3년) 경과 후 종전 주택 보유
                </th>
                <td className="border-border border-b px-3 py-2.5">기한 내 처분 요건 미충족</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  법인 명의 취득
                </th>
                <td className="px-3 py-2.5">법인은 일시적 2주택 특례 미적용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-t2h-rights">
        <h2 id="guide-t2h-rights" className="text-foreground text-xl font-semibold tracking-tight">
          분양권·입주권 보유자의 일시적 2주택
        </h2>
        <p>
          분양권·입주권도 2020년 8월 12일 이후 취득분부터 지방세법상 주택 수에 포함됩니다. 분양권을 보유한 상태에서 기존 주택을
          추가 취득하거나, 기존 주택 보유자가 분양권을 취득하는 경우도 일시적 2주택 특례 적용 여부를 사전에 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-t2h-checklist">
        <h2 id="guide-t2h-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          신규 주택 취득 전 확인 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득 전 점검 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  현재 세대 기준 보유 주택 수 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  배우자·동일 세대원 보유 주택 포함 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양권·입주권 주택 수 포함 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신규 주택 조정대상지역 여부(8% 중과 해당 여부)
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  저가주택·세컨드홈 등 다른 중과 면제 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종전 주택 처분 가능 시기·완료 시점(등기) 사전 계획
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  처분 기한 3년 계산(신규 주택 잔금·등기일 기준)
                </th>
                <td className="px-3 py-2.5">□</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-t2h-filing">
        <h2 id="guide-t2h-filing" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택 취득세 신고·납부 방법
        </h2>
        <p>
          일시적 2주택 특례를 적용받으려면 신규 주택 취득 시 취득세 신고·납부 기한(취득일로부터 60일) 안에{" "}
          <strong>1주택 일반세율</strong>로 신고·납부하면 됩니다. 위택스(wetax.go.kr) 또는 관할 시·군·구청에서 취득세
          신고 시 주택 수·세율 구간을 1주택 기준으로 선택하고, 일시적 2주택 해당 여부를 관할 세무과에 확인하는 것이
          안전합니다. 별도 서류 제출이 없는 경우도 있으나, 관할 기관 안내는 다를 수 있습니다.
        </p>
        <p>
          이미 중과세율(8%)로 납부한 경우, 기한 내 종전 주택을 처분했다면 <strong>경정청구</strong>로 차액 환급을 받을
          수 있습니다. 경정청구 기한은 납부일로부터 5년 이내입니다. 종전 주택 처분 후에도 기한 내 자진 신고·납부 또는
          추징 통보를 받을 수 있으므로, 처분 완료 시점을 기록해 두는 것이 좋습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 일시적 2주택 처분 기한과 조건은 지방세법·시행령에 따르며 정부 정책에 따라 변동될 수 있습니다. 정확한 적용
          기준·신고 화면은 관할 시·군·구청 세무과 또는 위택스(wetax.go.kr)에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p className="text-foreground font-medium">관련 가이드</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
              취득세 계산기
            </Link>
            — 일반세율 vs 중과세율 납부액 시뮬레이션
          </li>
          <li>
            <Link
              href="/guide/acquisition-tax-rates-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              2026년 취득세율 완전 정리
            </Link>
          </li>
          <li>
            <Link
              href="/guide/second-home-acquisition-tax-surcharge-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              2주택자 취득세 중과 기준
            </Link>
          </li>
          <li>
            <Link
              href="/guide/second-home-acquisition-tax-exception-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              세컨드홈 취득세 특례
            </Link>
          </li>
          <li>
            <Link
              href="/guide/acquisition-tax-relief-programs-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              취득세 세액공제·감면 제도 총정리
            </Link>
          </li>
          <li>
            <Link
              href="/guide/acquisition-tax-deadline-and-penalty-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              취득세 납부 기한·가산세
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
