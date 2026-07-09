import Link from "next/link";

export const kbMortgage300MillionLimit2026GuideMeta = {
  slug: "kb-mortgage-300-million-limit-2026-guide",
  title: "KB국민銀 주담대 3억 한도… 15억 이하 아파트 자금 계획",
  description:
    "2026년 7월 10일 KB국민은행 주택담보대출 한도 6억→3억 조치, 금융당국 규정과 차이, 7월 9일 서류 마감, 8억·10억·12억 매수 시 자기자금·잔금대출·갈아타기 영향과 다른 은행 대응을 표로 정리했습니다.",
  updated: "2026년 7월 9일",
} as const;

export function KbMortgage300MillionLimit2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-kbml-intro">
        <h2 id="guide-kbml-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 9일 기준
        </h2>
        <p>
          KB국민은행이 7월 10일부터 주택 <strong>구입 목적</strong> 주담대 최대 한도를 기존 6억 원에서{" "}
          <strong>3억 원</strong>으로 줄인다고 발표했습니다. 금융당국 규정(15억 원 이하 주택 6억 한도)보다
          강하고, <strong>비규제지역까지</strong> 적용됩니다. 서울 외곽·수도권 중저가 아파트를 노리던 실수요자,
          잔금대출·갈아타기 예정자에게 체감이 큰 조치입니다.
        </p>
        <p>
          이 글은 KB 한도 축소가 자금 계획에 어떤 영향을 주는지, 금융당국 상한과 어떻게 다른지, 다른 은행은
          어떻게 움직이는지를 표로 정리합니다.{" "}
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

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-kbml-summary" className="text-primary underline-offset-4 hover:underline">
              KB 조치 요약
            </a>
          </li>
          <li>
            <a href="#guide-kbml-vs-fsc" className="text-primary underline-offset-4 hover:underline">
              금융당국 6억 vs KB 3억
            </a>
          </li>
          <li>
            <a href="#guide-kbml-deadline" className="text-primary underline-offset-4 hover:underline">
              7월 9일 서류 마감
            </a>
          </li>
          <li>
            <a href="#guide-kbml-examples" className="text-primary underline-offset-4 hover:underline">
              매매가별 자기자금 차이
            </a>
          </li>
          <li>
            <a href="#guide-kbml-refinance" className="text-primary underline-offset-4 hover:underline">
              잔금대출·갈아타기
            </a>
          </li>
          <li>
            <a href="#guide-kbml-other-banks" className="text-primary underline-offset-4 hover:underline">
              다른 은행 동향
            </a>
          </li>
          <li>
            <a href="#guide-kbml-action" className="text-primary underline-offset-4 hover:underline">
              대응 방법
            </a>
          </li>
          <li>
            <a href="#guide-kbml-checklist" className="text-primary underline-offset-4 hover:underline">
              확인 순서
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-kbml-summary">
        <h2 id="guide-kbml-summary" className="text-foreground text-xl font-semibold tracking-tight">
          KB국민은행 조치 — 무엇이 바뀌나
        </h2>
        <p>
          KB는 가계대출 총량 관리 압박 속에서 선제적으로 대출 취급을 줄였습니다. 2026년 상반기 5대 시중은행
          가계대출 증가액이 당국이 부여한 연간 증가 한도를 이미 넘어선 상황에서 나온 조치입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              KB 주담대 한도 변경
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
                  수도권·규제지역 + <strong>비규제지역 포함</strong>
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
                  이미 서류 제출 고객
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  이번 제한 <strong>제외</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-vs-fsc">
        <h2 id="guide-kbml-vs-fsc" className="text-foreground text-xl font-semibold tracking-tight">
          금융당국 6억 vs KB 3억 — 왜 더 세나
        </h2>
        <p>
          금융당국이 정한 주담대 한도와 은행이 실제로 주는 한도는 다를 수 있습니다. KB는 당국 규정보다
          강한 <strong>자율 관리</strong>에 나선 것입니다. 과거 가계대출 총량 관리 국면에서 은행들이 창구
          지도를 줄이던 패턴과 유사하다는 해석도 나옵니다.
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">6억 원</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 초과 ~ 25억 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">4억 원</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  25억 원 초과
                </th>
                <td className="px-3 py-2.5">2억 원</td>
                <td className="px-3 py-2.5">2억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          실제 대출액은 LTV·DSR·스트레스 DSR과 한도 중 <strong>가장 낮은 값</strong>으로 정해집니다.{" "}
          <Link href="/guide/ltv-dti-dsr-comparison" className="text-primary underline-offset-4 hover:underline">
            LTV·DTI·DSR 비교
          </Link>
          가이드에서 삼중 한도 구조를 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-deadline">
        <h2 id="guide-kbml-deadline" className="text-foreground text-xl font-semibold tracking-tight">
          7월 9일까지 — 서류 먼저 낸 사람만 예외
        </h2>
        <p>
          KB에 대출 서류를 <strong>이미 제출한 고객</strong>은 3억 한도 적용에서 빠집니다. 아직 서류를 내지
          않았다면 <strong>7월 9일</strong>까지 매매계약서를 바탕으로 제출을 마쳐야 기존 한도 체계를 탈
          수 있습니다. 시행 전날 은행 창구에 신청이 몰리는 「오픈런」이 나올 수 있다는 전망도 있습니다.
        </p>
        <aside
          className="bg-muted/40 text-muted-foreground rounded-lg border p-4 text-sm leading-relaxed"
          role="note"
        >
          <p className="text-foreground font-medium">※ 한도 예외 ≠ 승인 확정</p>
          <p className="mt-2">
            서류를 9일까지 냈다고 해서 대출이 자동 승인되지는 않습니다. DSR·담보·소득 심사는 그대로이며,
            「6억까지 가능」이었던 계획이 DSR상 4억에 그칠 수도 있습니다.
          </p>
        </aside>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-examples">
        <h2 id="guide-kbml-examples" className="text-foreground text-xl font-semibold tracking-tight">
          15억 이하 아파트 — 매매가별 자기자금 차이
        </h2>
        <p>
          서울 아파트 매매 중위가격이 2026년 상반기 12억 원대로 올랐습니다. 6억 원 한도에 맞춰 자금을
          짜둔 매수자는 KB에서 3억 원으로 줄면 <strong>잔금 마련에 3억 원 가량</strong> 더 필요할 수
          있습니다. 아래는 무주택·규제지역·LTV 70%·DSR 여유 충분 가정의 단순 비교입니다.
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
                  LTV 70% 산출
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
                <td className="border-border border-b px-3 py-2.5">5억 6,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">5억 6,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
                <td className="border-border border-b px-3 py-2.5">+2억 6,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">7억 원</td>
                <td className="border-border border-b px-3 py-2.5">6억 원(한도)</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
                <td className="border-border border-b px-3 py-2.5">+3억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">8억 4,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">6억 원(한도)</td>
                <td className="border-border border-b px-3 py-2.5">3억 원</td>
                <td className="border-border border-b px-3 py-2.5">+3억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15억 원
                </th>
                <td className="px-3 py-2.5">10억 5,000만 원</td>
                <td className="px-3 py-2.5">6억 원(한도)</td>
                <td className="px-3 py-2.5">3억 원</td>
                <td className="px-3 py-2.5">+3억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          1주택·규제지역 유주택 추가 매수는 LTV 40%·0%에 가깝게 적용되어 위 표와 다릅니다.{" "}
          <Link
            href="/guide/regulated-area-designation-effects-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            규제지역 지정 효과
          </Link>
          가이드에서 주택 수별 LTV를 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-refinance">
        <h2 id="guide-kbml-refinance" className="text-foreground text-xl font-semibold tracking-tight">
          잔금대출·갈아타기 — 먼저 흔들리는 수요
        </h2>
        <p>
          이미 매매계약을 맺었거나 잔금일이 가까운 경우, 대출 가능액이 줄면 <strong>잔금 불발</strong> 위험이
          커집니다. 매도자도 잔금 지연을 걱정할 수 있어, 계약 조건 재협상이 필요해질 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              수요 유형별 영향
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  체감
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신규 매수(잔금대출)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  KB 기준 3억 초과 대출 필요 시 자금 재조달·은행 변경 검토
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  갈아타기(매도+매수)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  매도·매수 일정이 맞물려 대출 한도 변화에 민감. 기존 대출 상환 후 신규 한도 재확인
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세→매수(2030 등)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  전세 보증금 반환+추가 자금이 필요한데 대출 문턱 상승 → 선택지 축소
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  대환(갈아타기만)
                </th>
                <td className="px-3 py-2.5">
                  구입 목적이 아니면 이번 KB 조치와 별개일 수 있으나, 은행별 자율 관리 확산 시 영향 가능
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          부동산 업계 일각에서는 단기적으로 한 달가량 거래가 위축될 수 있지만, 주식 수익 등 대출 외 자금이
          있는 수요는 남아 있어 영향이 제한적일 수 있다는 분석도 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-other-banks">
        <h2 id="guide-kbml-other-banks" className="text-foreground text-xl font-semibold tracking-tight">
          다른 은행도 보수적으로 — KB만의 일이 아닐 수 있음
        </h2>
        <p>
          KB에 앞서·함께 대출 취급을 줄이는 은행이 늘고 있습니다. 금융당국이 추가 규제를 내지 않아도 은행
          자율관리만으로 소비자가 체감하는 문턱이 빠르게 올라갈 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  KB국민은행
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  7/10~ 구입 목적 주담대 최대 3억(비규제 포함)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신한은행
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 모집인 통한 주담대 모집 중단</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  하나은행
                </th>
                <td className="border-border border-b px-3 py-2.5">MCI·MCG 등 모기지보험 가입 제한</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  NH농협은행
                </th>
                <td className="px-3 py-2.5">일부 변동형 금리 주담대 대면 채널 취급 제한</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          모기지보험을 쓰지 못하면 실수요자가 받을 수 있는 주담대 총액이 줄어드는 효과가 있습니다. KB 3억
          한도가 다른 은행으로 확산될 조짐도 있어, <strong>한 곳만 보지 말고 복수 은행</strong>에 동시
          문의하는 편이 안전합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-action">
        <h2 id="guide-kbml-action" className="text-foreground text-xl font-semibold tracking-tight">
          실수요자 대응 — 지금 할 수 있는 것
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>KB 예정이면 7월 9일까지</strong> 매매계약서·필수 서류 제출 여부 확인(예외 적용 가능
            시점)
          </li>
          <li>
            <strong>다른 은행 병행 심사</strong> — 당국 상한 6억·4억이 아직 유효한 곳이 있는지, DSR상 실제
            가능액은 얼마인지 비교
          </li>
          <li>
            <strong>자기자금·부대비용 재산정</strong> — 취득세·중개보수·인지대는{" "}
            <Link
              href="/guide/home-purchase-additional-costs-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              매수 부대비용
            </Link>
            가이드와 함께 봄
          </li>
          <li>
            <strong>매매가·지역 조정</strong> — 같은 예산으로는 15억 이하 서울 외곽·수도권 중위가격대 접근이
            어려워질 수 있음
          </li>
          <li>
            <strong>생애최초·디딤돌 등 정책금융</strong> — 시중은행 한도와 별도 한도가 있는지 확인(소득·
            주택가격 요건 충족 시)
          </li>
        </ul>
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
                  2. 은행별 주담대 한도·DSR 동시 시뮬레이션
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  3. KB 이용 시 7/9 서류 제출·잔금일 일정 대조
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  4. 자기자금+취득세+중개비 합산 후 잔금 가능 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  5. 타 은행·정책금융 한도 변동 뉴스 지속 확인
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
            href="/guide/mortgage-rate-status-2026"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 2026년 주담대 금리 동향은 주담대 금리 현황 가이드에서 정리했습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
