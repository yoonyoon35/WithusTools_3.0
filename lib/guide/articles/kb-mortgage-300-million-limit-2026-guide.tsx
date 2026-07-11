import Link from "next/link";

export const kbMortgage300MillionLimit2026GuideMeta = {
  slug: "kb-mortgage-300-million-limit-2026-guide",
  title: "KB국민銀 주담대 3억 한도… 계약했는데 대출 어떻게 하나",
  description:
    "2026년 7월 10일 KB국민은행 주담대 6억→3억 조치, 계약·잔금대출 당황 대응, 7월 9일 서류 마감 예외, 상황별 대책·다른 은행·정책금융·대출불가 특약을 표로 정리했습니다.",
  updated: "2026년 7월 11일",
} as const;

export function KbMortgage300MillionLimit2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-kbml-intro">
        <h2 id="guide-kbml-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 11일 기준
        </h2>
        <p>
          KB국민은행이 <strong>7월 10일</strong>부터 주택 <strong>구입 목적</strong> 주담대 최대 한도를 6억 원에서{" "}
          <strong>3억 원</strong>으로 줄였습니다. 금융당국 규정(15억 원 이하 주택 6억 한도)보다 강하고,{" "}
          <strong>비규제지역까지</strong> 동일하게 적용됩니다. 시중은행 중 은행이 자체적으로 한도를 절반으로 내린 것은
          이번이 처음이라, 이미 <strong>매매계약을 쓰고 KB 대출을 알아보던 사람</strong>들 사이에서 당황이 퍼지고
          있습니다.
        </p>
        <p>
          「당장 3억을 어디서 구하나」는 반응이 나오는 이유는, 규제가 바뀐 게 아니라 <strong>대출 실행 은행의 내부
          정책</strong>이 바뀌었기 때문입니다. LTV·DSR상 더 받을 수 있어도 KB 창구에서는 3억이 상한입니다. 이 글은
          KB 조치가 무엇인지, 누가 막히는지, <strong>상황별로 지금 할 수 있는 대책</strong>을 표로 정리합니다.{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          와{" "}
          <Link href="/ltv-calculator" className="text-primary underline-offset-4 hover:underline">
            LTV 계산기
          </Link>
          로 본인 조건의 대출 가능액을 함께 확인하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-kbml-who-reads">
        <h2 id="guide-kbml-who-reads" className="text-foreground text-xl font-semibold tracking-tight">
          이 글에서 확인할 것
        </h2>
        <p>
          KB에서 대출을 알아보던 분이라면 <strong>예외 대상 → 상황별 대응 → 계약 특약</strong> 순으로 보세요.
          아직 계약 전이라면 금융당국 상한(6억)과 KB 3억의 차이를 먼저 이해한 뒤, 복수 은행 사전 한도 조회를
          권합니다.
        </p>
        <p>
          당황할 때 표만 넘기기 쉽지만, 핵심은 하나입니다. <strong>KB만 고집하지 말고 당일 다른 은행에
          접수하고</strong>, 계약서에 대출불가 해제권이 있는지 확인하는 것입니다. 7월 9일 서류 마감을 놓쳤어도
          타 은행에서 당국 상한까지는 아직 열려 있을 수 있습니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-kbml-who-reads" className="text-primary underline-offset-4 hover:underline">
              이 글에서 확인할 것
            </a>
          </li>
          <li>
            <a href="#guide-kbml-why" className="text-primary underline-offset-4 hover:underline">
              왜 KB만 먼저 움직였나
            </a>
          </li>
          <li>
            <a href="#guide-kbml-summary" className="text-primary underline-offset-4 hover:underline">
              KB 조치 요약
            </a>
          </li>
          <li>
            <a href="#guide-kbml-exempt" className="text-primary underline-offset-4 hover:underline">
              3억 한도 예외 대상
            </a>
          </li>
          <li>
            <a href="#guide-kbml-vs-fsc" className="text-primary underline-offset-4 hover:underline">
              금융당국 6억 vs KB 3억
            </a>
          </li>
          <li>
            <a href="#guide-kbml-deadline" className="text-primary underline-offset-4 hover:underline">
              7월 9일 서류 마감·이후
            </a>
          </li>
          <li>
            <a href="#guide-kbml-panic" className="text-primary underline-offset-4 hover:underline">
              지금 겪는 일 — 계약·잔금대출
            </a>
          </li>
          <li>
            <a href="#guide-kbml-examples" className="text-primary underline-offset-4 hover:underline">
              매매가별 자기자금 차이
            </a>
          </li>
          <li>
            <a href="#guide-kbml-scenario" className="text-primary underline-offset-4 hover:underline">
              상황별 대응
            </a>
          </li>
          <li>
            <a href="#guide-kbml-contract" className="text-primary underline-offset-4 hover:underline">
              계약·대출불가 특약
            </a>
          </li>
          <li>
            <a href="#guide-kbml-other-banks" className="text-primary underline-offset-4 hover:underline">
              다른 은행·정책금융
            </a>
          </li>
          <li>
            <a href="#guide-kbml-checklist" className="text-primary underline-offset-4 hover:underline">
              확인 순서
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-kbml-why">
        <h2 id="guide-kbml-why" className="text-foreground text-xl font-semibold tracking-tight">
          왜 KB만 먼저 움직였나
        </h2>
        <p>
          다른 시중은행은 아직 금융당국 상한(6억·4억)을 그대로 두는 가운데, KB만 3억으로 묶었습니다. KB가 예전부터
          가계금융 비중이 높았고 최근 기업대출 중심으로 포트폴리오를 바꾸고 있다는 점과 맞물리지만, 직접적인 이유는{" "}
          <strong>가계대출 총량 관리 압박</strong>입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              KB가 선제 조치에 나선 배경
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  요인
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  작년 목표 초과
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  5대 시중은행 중 유일하게 2025년 가계대출 연간 목표(106%) 초과 → 올해 가장 낮은 증가율 한도(0.59%)
                  적용
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  올해 총량 급증
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2026년 6월 은행권 가계대출 한 달 +7.6조, 5대 은행 +4.1조 — 연간 한도를 빠르게 소진
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  선행 조치
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  모기지보험(MCG·MCI) 가입 제한, 신용대출 한도 축소 등 주담대 문턱을 단계적으로 높임
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  포트폴리오 전환
                </th>
                <td className="px-3 py-2.5">
                  가계대출 성장 여력이 줄면서 기업대출 비중 확대 — 가계여신을 선제적으로 조정하는 흐름
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          KB 입장에서는 「실수요자 보호와 시장 안정」을 내세우지만, 소비자 입장에서는 <strong>규정과 무관하게 은행
          창구가 닫히는 것</strong>으로 체감됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-summary">
        <h2 id="guide-kbml-summary" className="text-foreground text-xl font-semibold tracking-tight">
          KB국민은행 조치 — 무엇이 바뀌나
        </h2>
        <p>
          이번 조치는 금리 인상이 아니라 <strong>실행 가능 금액 자체를 줄이는 것</strong>입니다. LTV·DSR을
          통과해도 KB 창구에서는 구입 목적 주담대가 3억 원을 넘지 못합니다. 집단대출·정책금융·7월 9일까지 서류를
          낸 건은 아래 예외 표를 먼저 확인하세요.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              KB 주담대 한도 변경(7월 10일~)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  변경 전
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  7월 10일 이후
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  구입 목적 주담대 상한
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 6억 원(규정 범위 내)</td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>최대 3억 원</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 지역
                </th>
                <td className="border-border border-b px-3 py-2.5">수도권·규제지역 중심</td>
                <td className="border-border border-b px-3 py-2.5">
                  수도권·규제지역 + <strong>비규제지역 포함 전국</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  25억 원 초과 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">2억 원 한도</td>
                <td className="border-border border-b px-3 py-2.5">기존과 동일 2억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  적용 기간
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  별도 안내 시까지(한시적 운영)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-exempt">
        <h2 id="guide-kbml-exempt" className="text-foreground text-xl font-semibold tracking-tight">
          3억 한도에서 빠지는 대출 — 예외 대상
        </h2>
        <p>
          「주택 구입자금」이 아니거나, 아래에 해당하면 이번 3억 캡과 <strong>별개</strong>로 취급됩니다. 계약을
          맺었는데 막혔다고 느끼는 분은 먼저 여기에 해당하는지 확인하세요.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              3억 한도 제한 예외
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  집단대출(이주비·중도금·잔금)
                </th>
                <td className="border-border border-b px-3 py-2.5">한도 제한 <strong>제외</strong></td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보금자리론·기금대출
                </th>
                <td className="border-border border-b px-3 py-2.5">한도 제한 <strong>제외</strong></td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세사기 피해자 구입·경락 자금
                </th>
                <td className="border-border border-b px-3 py-2.5">한도 제한 <strong>제외</strong></td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  증액 없는 KB 대환·재대출
                </th>
                <td className="border-border border-b px-3 py-2.5">한도 제한 <strong>제외</strong></td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속에 따른 채무 인수
                </th>
                <td className="border-border border-b px-3 py-2.5">한도 제한 <strong>제외</strong></td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7월 9일까지 서류 제출 완료
                </th>
                <td className="px-3 py-2.5">3억 캡 <strong>제외</strong>(기존 한도 체계)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          예외에 해당하면 「3억 한도」 뉴스와 무관하게 기존 한도 체계로 심사됩니다. 해당이 안 되면 KB 단독으로는
          3억이 상한이므로, <strong>잔금에 필요한 금액 전체</strong>를 기준으로 타 은행을 열어두는 게 맞습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-vs-fsc">
        <h2 id="guide-kbml-vs-fsc" className="text-foreground text-xl font-semibold tracking-tight">
          금융당국 6억 vs KB 3억 — 왜 더 세나
        </h2>
        <p>
          금융당국이 정한 주담대 한도와 은행이 실제로 주는 한도는 다를 수 있습니다. KB는 당국 규정보다 강한{" "}
          <strong>자율 관리</strong>에 나선 것입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              수도권·규제지역 주택 가격별 한도(구입 목적)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금융당국 상한
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  KB(7/10~)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  KB만 이용 시 부족분(최대)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">6억 원</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
                <td className="border-border border-b px-3 py-2.5">최대 3억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 초과 ~ 25억 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">4억 원</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
                <td className="border-border border-b px-3 py-2.5">최대 1억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  25억 원 초과
                </th>
                <td className="px-3 py-2.5">2억 원</td>
                <td className="px-3 py-2.5">2억 원</td>
                <td className="px-3 py-2.5">없음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          실제 대출액은 LTV·DSR·스트레스 DSR과 한도 중 <strong>가장 낮은 값</strong>으로 정해집니다. 예를 들어
          규제지역 12억 원 아파트는 LTV 40%로 4억 8,000만 원까지 가능하지만, KB에서는 <strong>3억 원</strong>이
          상한이라 1억 8,000만 원을 자기자금으로 마련해야 합니다.{" "}
          <Link href="/guide/ltv-dti-dsr-comparison" className="text-primary underline-offset-4 hover:underline">
            LTV·DTI·DSR 비교
          </Link>
          가이드에서 삼중 한도 구조를 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-deadline">
        <h2 id="guide-kbml-deadline" className="text-foreground text-xl font-semibold tracking-tight">
          7월 9일 서류 마감 — 지난 뒤에는
        </h2>
        <p>
          KB에 대출 서류를 <strong>7월 9일까지</strong> 매매계약서를 바탕으로 제출한 고객은 3억 한도 적용에서
          빠집니다. 시행 전날 은행 창구에 신청이 몰리는 「오픈런」이 실제로 나왔고, <strong>7월 10일 이후</strong>{" "}
          신규 접수 건은 3억 캡이 적용됩니다.
        </p>
        <aside
          className="bg-muted/40 text-muted-foreground rounded-lg border p-4 text-sm leading-relaxed"
          role="note"
        >
          <p className="text-foreground font-medium">※ 7월 9일을 놓쳤다면</p>
          <p className="mt-2">
            KB에서 3억 초과 대출이 필요하면 <strong>다른 은행 병행 심사</strong>가 현실적인 대안입니다. KB만
            기다리며 잔금일을 맞추기는 어렵습니다. 서류를 9일까지 냈다고 해서 대출이 자동 승인되지도 않습니다 —
            DSR·담보·소득 심사는 그대로입니다.
          </p>
        </aside>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-panic">
        <h2 id="guide-kbml-panic" className="text-foreground text-xl font-semibold tracking-tight">
          지금 겪는 일 — 계약 쓴 뒤 대출이 안 나올 때
        </h2>
        <p>
          KB 점유율이 높아 「어차피 KB에서 나올 거야」 하고 자금을 짠 매수자가 많습니다. 7월 10일 이후 갑자기 3억
          상한이 걸리면서 아래 상황이 동시에 터지고 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              현장에서 나타나는 문제
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  무엇이 막히나
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약 후 KB 단독 대출 예정
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  필요 대출액이 3억 초과면 KB만으로 잔금 불가 → 자기자금 1~3억 추가 필요
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금일이 2~4주 앞
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  은행 변경·추가 심사에 시간 부족, 매도자 잔금 지연 우려
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  갈아타기(매도+매수)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  매도 대금·신규 대출 일정이 맞물려 한도 변화에 민감
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세 끼고 매수
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  전세 보증금 반환+추가 자금이 필요한데 대출 문턱 상승
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  비규제지역 매수
                </th>
                <td className="px-3 py-2.5">
                  「지방·외곽은 괜찮겠지」 기대가 깨짐 — 전국 동일 3억 적용
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          위 표에 해당한다면 「나만 막힌 것」이 아니라 <strong>KB에 몰려 있던 자금 계획이 한꺼번에 흔들린
          것</strong>에 가깝습니다. 잔금일이 가까울수록 매도자·중개사와 일정 조율을 먼저 하고, 동시에 다른
          은행 접수를 병행하세요.
        </p>
        <p>
          반대로 필요 대출이 3억 이하이고 DSR·LTV만 통과하면 KB에서도 실행 가능합니다. 다만 모기지보험 제한 등
          KB 내부 심사 기준은 별도이니, 「3억 이하면 무조건 된다」고 가정하지 마세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-examples">
        <h2 id="guide-kbml-examples" className="text-foreground text-xl font-semibold tracking-tight">
          15억 이하 아파트 — 매매가별 자기자금 차이
        </h2>
        <p>
          서울 아파트 매매 중위가격이 2026년 상반기 12억 원대입니다. 6억 원 한도에 맞춰 자금을 짜둔 매수자는 KB에서
          3억 원으로 줄면 <strong>잔금 마련에 최대 3억 원</strong> 더 필요할 수 있습니다. 아래는 무주택·규제지역·LTV
          40%·DSR 여유 충분 가정의 단순 비교입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              KB 한도 6억 vs 3억 — 필요 자기자금(취득세·중개비 별도)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  LTV 40% 산출
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  KB 6억 시대 대출
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  KB 3억 적용 후
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  자기자금 증가
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">3억 2,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">3억 2,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
                <td className="border-border border-b px-3 py-2.5">+2,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">4억 원</td>
                <td className="border-border border-b px-3 py-2.5">4억 원</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
                <td className="border-border border-b px-3 py-2.5">+1억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">4억 8,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">4억 8,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
                <td className="border-border border-b px-3 py-2.5">+1억 8,000만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15억 원
                </th>
                <td className="px-3 py-2.5">6억 원</td>
                <td className="px-3 py-2.5">6억 원(한도)</td>
                <td className="px-3 py-2.5">3억 원</td>
                <td className="px-3 py-2.5">+3억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          무주택·규제지역·생애최초 70% LTV 등 조건에 따라 달라집니다. 1주택·규제지역 유주택 추가 매수는 LTV 40%·0%에
          가깝게 적용되어 위 표와 다릅니다.{" "}
          <Link
            href="/guide/regulated-area-designation-effects-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            규제지역 지정 효과
          </Link>
          가이드에서 주택 수별 LTV를 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-scenario">
        <h2 id="guide-kbml-scenario" className="text-foreground text-xl font-semibold tracking-tight">
          상황별 대응 — 지금 할 수 있는 것
        </h2>
        <p>아래 표에서 본인에 가까운 상황을 찾아 순서대로 진행하세요.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              당사자 유형별 대책
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내 상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  1순위 대응
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  추가 확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약했는데 KB만 알아봤다
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  신한·하나·우리·NH·지역은행·인터넷은행 <strong>동시 심사</strong>
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  당국 상한 6억·4억이 아직 유효한지, DSR상 실제 가능액
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7/9까지 KB 서류 냈다
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  심사 진행 상황·승인 예정액을 KB에 확인
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  승인 거절·금액 부족 시 타 은행 병행 준비
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금 2~4주 앞
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  오늘 당일 복수 은행 접수, 잔금일 연기 협의 검토
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  매도자·중개사와 일정 조율, 대출불가 특약 여부
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 이하 대출이면 된다
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  KB에서도 가능 — DSR·LTV만 통과하면 실행
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  모기지보험 제한 등 KB 내부 심사 기준 별도 확인
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양·집단대출 물건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  이주비·중도금·잔금 집단대출은 3억 캡 <strong>제외</strong>
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  단지별 집단대출 약정 은행·한도 확인
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자기자금이 부족하다
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  매매가 하향·계약 해제 검토, 정책금융(디딤돌·보금자리) 요건 확인
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  취득세·중개비 포함 총 필요 자금 재산정
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  아직 계약 전
                </th>
                <td className="px-3 py-2.5">
                  계약 전 은행 <strong>사전 한도 조회</strong>·DSR 시뮬레이션
                </td>
                <td className="px-3 py-2.5">
                  KB 단독 전제 자금 계획은 피하고 복수 은행 기준으로 설계
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          표에서 본인에 가까운 행을 찾았다면, <strong>1순위 대응을 오늘 실행</strong>하는지가 관건입니다. 잔금
          2~4주 앞이면 은행 변경에 시간이 부족하고, 자기자금이 부족하면 매매가 조정·계약 해제 비용을 숫자로
          비교해야 합니다. 아직 계약 전이면 KB 단독 전제 자금 계획은 피하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-contract">
        <h2 id="guide-kbml-contract" className="text-foreground text-xl font-semibold tracking-tight">
          계약서·대출불가 특약 — 잔금 못 맞출 때
        </h2>
        <p>
          대출이 안 나와 잔금을 못 맞추면 위약금·계약 해제 문제로 이어질 수 있습니다. 계약서에 아래 특약이 있는지
          먼저 확인하세요.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대출 관련 계약 확인 사항
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 승인 특약
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  「○○은행 ○○원 대출 승인을 잔금 지급 조건으로 한다」 문구 유무
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출불가 해제권
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  은행 심사 거절·한도 부족 시 계약 해제·계약금 반환 조항
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금일 연기
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  대출 심사 지연 시 잔금일 조정 가능 여부·합의 방법
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  위약금 규모
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  매수자·매도자 각각의 해제 시 위약금(보통 매매가의 10% 내외)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  중개보수
                </th>
                <td className="px-3 py-2.5">
                  계약 해제 시 중개수수료 반환 여부 —{" "}
                  <Link
                    href="/guide/brokerage-fee-payment-timing-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    중개수수료 지급 시점
                  </Link>
                  참고
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          대출불가 특약이 없다면 매도자와 <strong>잔금일 연기·가격 재협상</strong>을 먼저 시도하고, 자금 마련이
          불가능하면 해제 비용(위약금·중개비)을 숫자로 비교한 뒤 결정하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-other-banks">
        <h2 id="guide-kbml-other-banks" className="text-foreground text-xl font-semibold tracking-tight">
          다른 은행·정책금융 — KB 말고 갈 곳
        </h2>
        <p>
          KB에 앞서·함께 대출 취급을 줄이는 은행이 늘고 있어, 「KB 말고 다른 데 가면 된다」가 곧바로 해결책이 되지
          않을 수 있습니다. 다만 금융당국 상한 6억·4억은 아직 유효한 은행이 있으므로 <strong>복수 은행 동시
          문의</strong>가 필요합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2026년 7월 초 은행권 동향(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  은행
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조치
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  KB 대비
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  KB국민은행
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  7/10~ 구입 목적 주담대 최대 3억(전국)
                </td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신한은행
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 모집인 통한 주담대 모집 중단</td>
                <td className="border-border border-b px-3 py-2.5">당국 상한 유지, 채널 제한</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  하나·NH
                </th>
                <td className="border-border border-b px-3 py-2.5">MCI·MCG 모기지보험 가입 제한</td>
                <td className="border-border border-b px-3 py-2.5">실질 한도 축소 효과</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  우리은행
                </th>
                <td className="border-border border-b px-3 py-2.5">신용대출 1억·마통 5,000만 원 한도</td>
                <td className="border-border border-b px-3 py-2.5">주담대 직접 한도 축소는 아님</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  정책금융
                </th>
                <td className="px-3 py-2.5">
                  디딤돌·보금자리론 — KB 3억 캡 <strong>제외</strong>
                </td>
                <td className="px-3 py-2.5">소득·주택가격 요건 충족 시 별도 한도</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          생애최초·디딤돌 등 정책금융은 시중은행 한도와 별도입니다.{" "}
          <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary underline-offset-4 hover:underline">
            보금자리론 vs 디딤돌
          </Link>
          과{" "}
          <Link
            href="/guide/first-time-homebuyer-benefits-2026"
            className="text-primary underline-offset-4 hover:underline"
          >
            생애최초 혜택
          </Link>
          가이드에서 요건을 확인하세요. KB 3억 한도가 다른 은행으로 확산될 조짐도 있어, 한 곳만 보지 말고{" "}
          <strong>여러 은행에 동시에 사전 한도 조회</strong>하는 편이 안전합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-checklist">
        <h2 id="guide-kbml-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          매수·갈아타기 전 확인 순서
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              체크리스트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 w-24 font-semibold">
                  확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  1. 무주택·1주택·다주택별 LTV(규제지역 여부)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  2. 은행별 주담대 한도·DSR 동시 시뮬레이션(KB 3억 포함)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  3. 집단대출·정책금융 예외 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  4. 계약서 대출불가 특약·잔금일·위약금 조항
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  5. 자기자금+취득세+중개비 합산 후 잔금 가능 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  6. 타 은행·정책금융 한도 변동 뉴스 지속 확인
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 은행별·상품별 조건은 수시로 바뀝니다. 최종 한도·금리는 해당 은행 심사 결과를 기준으로 하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → DSR 계산기에서 연봉·기존 대출 기준 주담대 가능액을 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/annual-salary-mortgage-limit-dsr"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 연봉별 주택담보대출 한도 기준 가이드에서 DSR 40% 산출 예시를 볼 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/mortgage-loan-application-documents"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 주담대 신청 서류·절차는 주택담보대출 신청 서류 가이드에서 정리했습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/home-purchase-additional-costs-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 취득세·중개비 등 매수 부대비용은 별도 가이드에서 확인하세요.
          </Link>
        </p>
      </aside>
    </>
  );
}
