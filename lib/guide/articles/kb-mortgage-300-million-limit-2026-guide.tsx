import Link from "next/link";
import type { ReactNode } from "react";

export const kbMortgage300MillionLimit2026GuideMeta = {
  slug: "kb-mortgage-300-million-limit-2026-guide",
  title: "KB국민은행 주담대 3억 한도, 지금도 유지되나 — 현황과 대안",
  description:
    "2026년 10월 30일 기준 KB국민은행 주택구입 주담대 3억 원 한도 유지 현황, 금융당국 6억 한도와의 차이, 예외 대상, 다른 은행 동향, 매매가별 자기자금 차이와 계약 특약 확인법을 정리했습니다.",
  updated: "2026년 10월 30일",
} as const;

type TableProps = {
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly ReactNode[])[];
  minWidth?: string;
};

function GuideTable({ caption, headers, rows, minWidth = "min-w-[38rem]" }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className={`w-full ${minWidth} border-collapse text-left text-sm`}>
        <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
          {caption}
        </caption>
        <thead>
          <tr className="bg-muted/40">
            {headers.map((h) => (
              <th key={h} scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const last = i === rows.length - 1;
            const cell = last ? "px-3 py-2.5" : "border-border border-b px-3 py-2.5";
            return (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : undefined}>
                {row.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className={`${cell} font-medium`}>
                      {c}
                    </th>
                  ) : (
                    <td key={j} className={cell}>
                      {c}
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function KbMortgage300MillionLimit2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-kbml-intro">
        <h2 id="guide-kbml-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 10월 30일 기준 — 3억 한도는 아직 유지 중
        </h2>
        <p>
          KB국민은행은 <strong>7월 10일</strong>부터 주택 <strong>구입 목적</strong> 주담대 최대 한도를 6억 원에서{" "}
          <strong>3억 원</strong>으로 줄였고, <strong>10월 현재도 이 조치를 풀지 않았습니다</strong>. 금융당국 규정(15억
          원 이하 주택 6억 원 한도)보다 강하고, 비규제지역까지 전국에 동일하게 적용됩니다.
        </p>
        <p>
          10월 19일 국정감사에서 이환주 KB국민은행장은 <strong>금융당국과 사전 협의는 없었고, 작년에 가계대출
          총량 목표를 초과한 은행이 KB 한 곳뿐이어서 올해 한도가 줄었다</strong>고 설명했습니다. 계약 후 잔금까지
          3개월 걸리는 사이 총량을 넘길 가능성이 높았다는 취지입니다. 즉 규제가 바뀐 것이 아니라{" "}
          <strong>대출 실행 은행의 내부 정책</strong>이어서, LTV·DSR상 더 받을 수 있어도 KB 창구에서는 3억 원이
          상한입니다.{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          와{" "}
          <Link href="/ltv-calculator" className="text-primary underline-offset-4 hover:underline">
            LTV 계산기
          </Link>
          로 본인 조건의 대출 가능액을 함께 확인하세요.
        </p>
        <p>
          이 글은 7월 조치 직후 속보로 작성했다가 10월 상황에 맞춰 <strong>현황 중심</strong>으로 정리했습니다.
          KB가 한도를 되돌리거나 다른 은행이 같은 조치를 하면 다시 갱신합니다.
        </p>
      </section>

      <nav className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm" aria-label="목차">
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-kbml-summary" className="text-primary underline-offset-4 hover:underline">
              KB 조치 요약과 이후 변화
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

      <section className="space-y-4" aria-labelledby="guide-kbml-summary">
        <h2 id="guide-kbml-summary" className="text-foreground text-xl font-semibold tracking-tight">
          KB 조치 요약과 이후 변화
        </h2>
        <GuideTable
          caption="KB 주담대 한도 변경(7월 10일~)"
          headers={["항목", "변경 전", "7월 10일 이후"]}
          rows={[
            ["구입 목적 주담대 상한", "최대 6억 원(규정 범위 내)", <strong key="a">최대 3억 원</strong>],
            [
              "적용 지역",
              "수도권·규제지역 중심",
              <>
                수도권·규제지역 + <strong>비규제지역 포함 전국</strong>
              </>,
            ],
            ["25억 원 초과 주택", "2억 원 한도", "기존과 동일 2억 원"],
            ["적용 기간", "—", "별도 안내 시까지(10월 현재 원복 검토 없음)"],
          ]}
        />
        <p>
          7월 이후 달라진 점은 아래와 같습니다. 그래도 KB의 3억 원 상한은 그대로입니다.
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>총량 목표 확대</strong> — 금융당국이 5대 은행 올해 가계대출 증가 목표를 4조 3,400억 원에서 6조
            9,800억 원으로 늘렸고, KB도 9,000억 원에서 1조 5,000억 원으로 늘었습니다. 다만 은행권이 이미 기존 목표를
            크게 넘겨 새 목표 기준 남은 여력이 약 3,100억 원에 그친다는 보도가 있습니다.
          </li>
          <li>
            <strong>다른 은행은 일부 재개</strong> — 신한·하나·농협 등은 8월 말~9월에 모집인 채널 접수를 다시 열었지만
            월 단위 한도 관리와 모기지보험(MCI·MCG) 제한 등은 유지하고 있습니다.
          </li>
          <li>
            <strong>KB는 풀지 않음</strong> — 9월 보도와 10월 19일 국정감사 모두 한도 원복 계획이 확인되지 않았습니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-exempt">
        <h2 id="guide-kbml-exempt" className="text-foreground text-xl font-semibold tracking-tight">
          3억 한도에서 빠지는 대출 — 예외 대상
        </h2>
        <p>
          「주택 구입자금」이 아니거나 아래에 해당하면 이번 3억 캡과 <strong>별개</strong>로 취급됩니다.
        </p>
        <GuideTable
          caption="3억 한도 제한 예외"
          headers={["구분", "적용"]}
          rows={[
            ["집단대출(이주비·중도금·잔금)", <>한도 제한 <strong>제외</strong></>],
            ["보금자리론·기금대출", <>한도 제한 <strong>제외</strong></>],
            ["전세사기 피해자 구입·경락 자금", <>한도 제한 <strong>제외</strong></>],
            ["증액 없는 KB 대환·재대출", <>한도 제한 <strong>제외</strong></>],
            ["상속에 따른 채무 인수", <>한도 제한 <strong>제외</strong></>],
          ]}
          minWidth="min-w-[32rem]"
        />
        <p className="text-muted-foreground text-sm">
          ※ 시행 전날(7월 9일)까지 서류를 낸 건은 3억 캡에서 제외됐지만, 이미 지난 기준이라 지금 신규로 신청하는 경우에는
          해당하지 않습니다.
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
        <GuideTable
          caption="수도권·규제지역 주택 가격별 한도(구입 목적)"
          headers={["주택 가격", "금융당국 상한", "KB(7/10~)", "KB만 이용 시 부족분(최대)"]}
          minWidth="min-w-[40rem]"
          rows={[
            ["15억 원 이하", "6억 원", "3억 원", "최대 3억 원"],
            ["15억 초과 ~ 25억 이하", "4억 원", "3억 원", "최대 1억 원"],
            ["25억 원 초과", "2억 원", "2억 원", "없음"],
          ]}
        />
        <p>
          실제 대출액은 LTV·DSR·스트레스 DSR과 한도 중 <strong>가장 낮은 값</strong>으로 정해집니다. 예를 들어 규제지역
          12억 원 아파트는 LTV 40%로 4억 8,000만 원까지 가능하지만, KB에서는 <strong>3억 원</strong>이 상한이라 1억
          8,000만 원을 자기자금이나 다른 은행으로 마련해야 합니다.{" "}
          <Link href="/guide/ltv-dti-dsr-comparison" className="text-primary underline-offset-4 hover:underline">
            LTV·DTI·DSR 비교
          </Link>
          가이드에서 삼중 한도 구조를 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-examples">
        <h2 id="guide-kbml-examples" className="text-foreground text-xl font-semibold tracking-tight">
          15억 이하 아파트 — 매매가별 자기자금 차이
        </h2>
        <p>
          무주택·규제지역·LTV 40%·DSR 여유 충분 가정의 단순 비교입니다. KB만 이용한다면 매매가가 클수록 부족분이 커집니다.
        </p>
        <GuideTable
          caption="KB 한도 변경 전 vs 후 — 필요 자기자금 차이(취득세·중개비 별도)"
          headers={["매매가", "LTV 40% 산출", "KB 변경 전 대출", "KB 3억 적용 후", "자기자금 증가"]}
          minWidth="min-w-[42rem]"
          rows={[
            ["8억 원", "3억 2,000만 원", "3억 2,000만 원", "3억 원", "+2,000만 원"],
            ["10억 원", "4억 원", "4억 원", "3억 원", "+1억 원"],
            ["12억 원", "4억 8,000만 원", "4억 8,000만 원", "3억 원", "+1억 8,000만 원"],
            ["15억 원", "6억 원", "6억 원(한도)", "3억 원", "+3억 원"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          무주택·규제지역·생애최초 70% LTV 등 조건에 따라 달라집니다. 유주택자 추가 매수는 LTV가 더 낮게 적용되어 위
          표와 다릅니다.{" "}
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
          상황별 대응
        </h2>
        <GuideTable
          caption="당사자 유형별 대책"
          headers={["내 상황", "1순위 대응", "추가 확인"]}
          minWidth="min-w-[42rem]"
          rows={[
            [
              "아직 계약 전",
              <>
                계약 전 은행 <strong>사전 한도 조회</strong>·DSR 시뮬레이션
              </>,
              "KB 단독 전제 자금 계획은 피하고 복수 은행 기준으로 설계",
            ],
            [
              "계약했는데 KB만 알아봤다",
              <>
                다른 은행·인터넷은행 <strong>동시 심사</strong>
              </>,
              "당국 상한 6억·4억 안에서 실제 DSR상 가능액",
            ],
            [
              "잔금이 2~4주 앞",
              "복수 은행 동시 접수, 잔금일 연기 협의 검토",
              "매도자·중개사와 일정 조율, 대출불가 특약 여부",
            ],
            ["필요 대출이 3억 이하", "KB에서도 가능 — DSR·LTV만 통과하면 실행", "모기지보험 제한 등 KB 내부 심사 기준 별도 확인"],
            [
              "분양·집단대출 물건",
              <>
                이주비·중도금·잔금 집단대출은 3억 캡 <strong>제외</strong>
              </>,
              "단지별 집단대출 약정 은행·한도 확인",
            ],
            [
              "자기자금이 부족하다",
              "매매가 하향·계약 해제 검토, 정책금융(디딤돌·보금자리) 요건 확인",
              "취득세·중개비 포함 총 필요 자금 재산정",
            ],
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-contract">
        <h2 id="guide-kbml-contract" className="text-foreground text-xl font-semibold tracking-tight">
          계약서·대출불가 특약 — 잔금 못 맞출 때
        </h2>
        <p>
          대출이 안 나와 잔금을 못 맞추면 위약금·계약 해제 문제로 이어질 수 있습니다. 계약서에 아래 특약이 있는지 먼저
          확인하세요.
        </p>
        <GuideTable
          caption="대출 관련 계약 확인 사항"
          headers={["확인 항목", "내용"]}
          minWidth="min-w-[36rem]"
          rows={[
            ["대출 승인 특약", "「○○은행 ○○원 대출 승인을 잔금 지급 조건으로 한다」 문구 유무"],
            ["대출불가 해제권", "은행 심사 거절·한도 부족 시 계약 해제·계약금 반환 조항"],
            ["잔금일 연기", "대출 심사 지연 시 잔금일 조정 가능 여부·합의 방법"],
            ["위약금 규모", "매수자·매도자 각각의 해제 시 위약금(보통 매매가의 10% 내외)"],
            [
              "중개보수",
              <>
                계약 해제 시 중개수수료 반환 여부 —{" "}
                <Link
                  href="/guide/brokerage-fee-payment-timing-guide"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  중개수수료 지급 시점
                </Link>{" "}
                참고
              </>,
            ],
          ]}
        />
        <p>
          대출불가 특약이 없다면 매도자와 <strong>잔금일 연기·가격 재협상</strong>을 먼저 시도하고, 자금 마련이 불가능하면
          해제 비용(위약금·중개비)을 숫자로 비교한 뒤 결정하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-other-banks">
        <h2 id="guide-kbml-other-banks" className="text-foreground text-xl font-semibold tracking-tight">
          다른 은행·정책금융 — KB 말고 갈 곳
        </h2>
        <p>
          금융당국 상한 6억·4억은 다른 은행에서 유효하지만, 은행마다 월 단위 한도와 접수 채널을 제한하고 있어{" "}
          <strong>복수 은행 동시 문의</strong>가 필요합니다.
        </p>
        <GuideTable
          caption="은행권 동향(2026년 10월 보도 기준 요약)"
          headers={["은행", "상황", "KB 대비"]}
          rows={[
            ["KB국민은행", "구입 목적 주담대 최대 3억(전국), 원복 계획 없음", "—"],
            [
              "하나은행",
              "11월 실행분 모집인 접수 재개. 비대면·변동금리 주담대 신규 중단과 모기지보험 제한은 유지",
              "당국 상한 유지, 채널 제한",
            ],
            ["신한·농협 등", "모집인 채널 접수 재개, 월 단위 한도 관리", "당국 상한 유지"],
            ["우리은행", "영업점별 주담대 월 한도 30억→10억, 모기지보험 제한 유지", "KB처럼 3억 직접 상한은 아님"],
            [
              "정책금융",
              <>
                디딤돌·보금자리론 — KB 3억 캡 <strong>제외</strong>
              </>,
              "소득·주택가격 요건 충족 시 별도 한도",
            ],
          ]}
        />
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
          가이드에서 요건을 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-kbml-checklist">
        <h2 id="guide-kbml-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          매수·갈아타기 전 확인 순서
        </h2>
        <GuideTable
          caption="체크리스트"
          headers={["순서", "확인"]}
          minWidth="min-w-[30rem]"
          rows={[
            ["1. 무주택·1주택·다주택별 LTV(규제지역 여부)", "□"],
            ["2. 은행별 주담대 한도·DSR 동시 시뮬레이션(KB 3억 포함)", "□"],
            ["3. 집단대출·정책금융 예외 해당 여부", "□"],
            ["4. 계약서 대출불가 특약·잔금일·위약금 조항", "□"],
            ["5. 자기자금+취득세+중개비 합산 후 잔금 가능 여부", "□"],
            ["6. 타 은행·정책금융 한도 변동 뉴스 지속 확인", "□"],
          ]}
        />
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
