import Link from "next/link";

export const officetelResidentialVsBusinessTaxGuideMeta = {
  slug: "officetel-residential-vs-business-tax-guide",
  title: "오피스텔 취득세 4.6%와 주택 수 포함 기준",
  description:
    "오피스텔은 주거용이든 업무용이든 취득세 4%(합계 4.6%)로 아파트·빌라(1~3%)보다 높습니다. 납부액 비교, 이후 주택 취득 시 주택 수에 포함되는 기준(재산세 주택분·2020.8.12·시가표준액 1억), 다주택 중과 영향, 부가세 환급과 용도 전환 주의점을 다룹니다.",
  updated: "2026년 11월 4일",
} as const;

type TableRow = readonly [string, ...string[]];

function InfoTable({
  caption,
  heads,
  rows,
  minWidth = "32rem",
}: {
  caption: string;
  heads: readonly string[];
  rows: readonly TableRow[];
  minWidth?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm" style={{ minWidth }}>
        <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
          {caption}
        </caption>
        <thead>
          <tr className="bg-muted/40">
            {heads.map((h) => (
              <th key={h} scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const last = i === rows.length - 1;
            const border = last ? "" : "border-border border-b";
            return (
              <tr key={row[0]} className={last ? "bg-muted/20" : undefined}>
                <th scope="row" className={`${border} px-3 py-2.5 font-medium`}>
                  {row[0]}
                </th>
                {row.slice(1).map((cell, j) => (
                  <td key={j} className={`${border} px-3 py-2.5`}>
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const linkClass = "text-primary underline-offset-4 hover:underline";

export function OfficetelResidentialVsBusinessTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-orb-overview">
        <h2 id="guide-orb-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 11월 기준 핵심
        </h2>
        <p>
          오피스텔은 건축법상 업무시설이고, 세법상으로는 주택이 아닙니다. 그래서 <strong>주거용으로 살 계획이든 사무실로
          쓸 계획이든 취득세율은 같습니다.</strong> 취득세 4%에 지방교육세 0.4%, 농어촌특별세 0.2%를 더한{" "}
          <strong>4.6%</strong>가 적용되고, 아파트·빌라에 붙는 주택 세율(1~3%)이나 다주택 중과(8%·12%)는 오피스텔
          취득 자체에는 적용되지 않습니다.
        </p>
        <p>
          주거용과 업무용의 차이는 <strong>취득세율이 아니라 그 이후</strong>에 생깁니다. 나중에 아파트·빌라를 살 때
          오피스텔이 주택 수에 들어가 중과를 부를 수 있는지, 양도세·재산세·종부세·부가가치세가 어떻게 달라지는지가
          핵심입니다.{" "}
          <Link href="/officetel-acquisition-tax-calculator" className={linkClass}>
            오피스텔 취득세 계산기
          </Link>
          와{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide" className={linkClass}>
            2026년 취득세율
          </Link>
          도 함께 참고하세요.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 2026년 8월 발표된 지방세제 개편안(입법예고 2026.8.27~)에는 주거용 오피스텔을 생애최초 취득세 감면 대상에
          포함하는 내용이 있습니다. 확정·시행 전에는 현행 기준으로 판단하고, 시행 여부는 별도로 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-compare">
        <h2 id="guide-orb-compare" className="text-foreground text-xl font-semibold tracking-tight">
          아파트·빌라 vs 오피스텔 취득세율
        </h2>
        <InfoTable
          caption="유형별 취득세 체계 비교(유상 취득, 1주택 기준)"
          heads={["구분", "아파트·빌라(연립·다세대)", "오피스텔(주거용·업무용 동일)"]}
          minWidth="38rem"
          rows={[
            ["세법상 분류", "주택", "주택이 아닌 건축물(업무시설)"],
            ["취득세율", "6억 이하 1%, 6억 초과~9억 이하 1~3%, 9억 초과 3%", "4%"],
            ["지방교육세", "취득세의 10%(0.1~0.3%)", "0.4%"],
            ["농어촌특별세", "전용 85㎡ 초과 시 0.2%", "0.2%"],
            ["합계", "1.1~3.3%(85㎡ 이하)", "4.6%"],
            ["다주택 중과(8%·12%)", "주택 수·조정대상지역에 따라 적용", "오피스텔 취득 자체에는 미적용"],
            ["이후 다른 주택 취득 시 주택 수", "항상 포함", "조건부 포함(아래 참고)"],
          ]}
        />
        <p>
          아파트와 빌라는 같은 주택 세율을 씁니다. 빌라는 세금 외에 전세보증보험 가입 가능 여부, 시세 파악 난이도, 담보
          인정 가치 등에서 아파트와 차이가 있으므로 취득세 이외의 거래 조건도 함께 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-price-compare">
        <h2 id="guide-orb-price-compare" className="text-foreground text-xl font-semibold tracking-tight">
          매매가별 납부액 비교
        </h2>
        <p className="text-muted-foreground text-sm">
          1주택 취득, 전용 85㎡ 이하, 취득세+지방교육세(오피스텔은 농특세 0.2% 포함 4.6%)
        </p>
        <InfoTable
          caption="아파트·빌라 vs 오피스텔 취득세 납부액"
          heads={["매매가", "아파트·빌라", "오피스텔(4.6%)", "차이"]}
          minWidth="34rem"
          rows={[
            ["3억 원", "330만 원", "1,380만 원", "1,050만 원"],
            ["5억 원", "550만 원", "2,300만 원", "1,750만 원"],
            ["7억 원", "약 1,283만 원", "3,220만 원", "약 1,937만 원"],
            ["9억 원", "2,970만 원", "4,140만 원", "1,170만 원"],
            ["12억 원", "3,960만 원", "5,520만 원", "1,560만 원"],
          ]}
        />
        <p>
          매매가가 낮을수록 오피스텔 취득세가 아파트·빌라의 몇 배로 벌어집니다(3억 원 기준 약 4배). 오피스텔은 주거용으로
          산다고 해서 이 세율이 낮아지지 않으며, 반대로 업무용이라고 해서 더 높아지지도 않습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-count-rules">
        <h2 id="guide-orb-count-rules" className="text-foreground text-xl font-semibold tracking-tight">
          오피스텔이 주택 수에 포함되는 기준(취득세)
        </h2>
        <p>
          나중에 아파트·빌라를 취득할 때 기존 오피스텔이 주택 수에 들어가는지는 <strong>재산세가 주택분으로
          과세되는지</strong>로 판단합니다. 건축물대장상 용도나 전입신고가 아니라 재산세 과세 유형이 기준입니다.
        </p>
        <InfoTable
          caption="취득세 주택 수 산정 시 오피스텔(지방세법 시행령 제28조의4)"
          heads={["조건", "주택 수 포함 여부"]}
          minWidth="32rem"
          rows={[
            ["2020년 8월 11일 이전 취득(그 전 매매·분양계약 포함)", "제외"],
            ["2020년 8월 12일 이후 취득 + 재산세 건축물분(업무용) 과세", "제외"],
            ["2020년 8월 12일 이후 취득 + 재산세 주택분(주거용) 과세", "포함"],
            ["시가표준액 1억 원 이하(건축물과 부속토지 합계, 주택 수 산정일 기준)", "제외"],
            ["상속받은 지 5년이 지나지 않은 오피스텔", "제외"],
            [
              "소형 오피스텔 특례(2024.1.10~2027.12.31 취득, 전용 60㎡ 이하, 취득가액 3억 원·수도권 6억 원 이하 등)",
              "제외(신축·기축별 요건 확인)",
            ],
          ]}
        />
        <p>
          재산세는 공부상 용도와 실제 현황이 다르면 사실상 현황에 따라 부과합니다. 주거용으로 쓰면 주택분으로 과세될 수
          있고, 그러면 주택 수에 들어갑니다. 다만 신고나 직권 변경으로 재산세 과세대장에 주택으로 기재돼야 하므로, 살고
          있다는 사실만으로 자동으로 바뀌지는 않습니다. 재산세 고지서에 주택분으로 나오는지 확인하세요. 양도세는 이와
          별도로 <strong>실제 주거용으로 쓰는지</strong>를 기준으로 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-multi-owner">
        <h2 id="guide-orb-multi-owner" className="text-foreground text-xl font-semibold tracking-tight">
          오피스텔이 주택 수에 들어가면 아파트 취득세가 달라진다
        </h2>
        <p className="text-muted-foreground text-sm">
          1주택 보유 + 오피스텔 1채 보유 상태에서 5억 원 아파트 추가 취득, 전용 85㎡ 이하, 취득세+지방교육세(농특세 제외)
        </p>
        <InfoTable
          caption="오피스텔 주택 수 제외 vs 포함 시 아파트 취득세"
          heads={["구분", "오피스텔 제외(2주택)", "오피스텔 포함(3주택)", "차이"]}
          minWidth="38rem"
          rows={[
            ["비조정대상지역", "1% 적용, 550만 원", "8% 중과, 4,200만 원", "3,650만 원"],
            ["조정대상지역", "8% 중과, 4,200만 원", "12% 중과, 6,200만 원", "2,000만 원"],
          ]}
        />
        <p>
          오피스텔 자체를 사는 데는 중과가 없지만, 이미 주택분 재산세가 과세되는 오피스텔(2020년 8월 12일 이후 취득,
          시가표준액 1억 원 초과)이 있으면 이후 주택 취득의 세율이 달라집니다. 일시적 2주택 등 중과 예외는 별도로
          확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-classification">
        <h2 id="guide-orb-classification" className="text-foreground text-xl font-semibold tracking-tight">
          주거용 vs 업무용 — 세목별로 달라지는 점
        </h2>
        <InfoTable
          caption="오피스텔 사용 방식에 따른 세금 차이"
          heads={["구분", "업무용으로 사용", "주거용으로 사용"]}
          minWidth="40rem"
          rows={[
            ["취득세율(취득 시)", "4.6%", "4.6%(동일)"],
            ["취득세 주택 수", "재산세 건축물분이면 제외", "재산세 주택분이면 포함(요건 충족 시)"],
            ["재산세", "건축물분·토지분", "주택분"],
            ["종부세", "주택분 아님(토지분은 별도 검토)", "주택분 대상(주택 수·기본공제 적용)"],
            ["양도세", "일반 건축물(주택 비과세·주택 중과 대상 아님)", "주택으로 판단(비과세 요건 충족 시 가능, 다주택이면 중과 대상)"],
            ["부가가치세", "사업자등록 후 업무용 사용 시 매입세액 환급 가능", "환급 제한, 환급받았다면 추징 대상"],
            ["임대소득", "일반 부동산 임대소득", "주택임대소득"],
          ]}
        />
        <p>
          전입신고 여부만으로 정해지지 않고, 세목마다 기준이 다릅니다. 취득세 주택 수는 재산세 과세 유형, 양도세는 실제
          사용 현황을 봅니다. 그래서 같은 오피스텔이라도 세목별 결론이 엇갈릴 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-usage-change">
        <h2 id="guide-orb-usage-change" className="text-foreground text-xl font-semibold tracking-tight">
          취득 후 용도 전환 시 주의사항
        </h2>
        <InfoTable
          caption="용도 전환 시 세금 영향"
          heads={["상황", "세금 영향"]}
          minWidth="34rem"
          rows={[
            [
              "업무용 취득 → 주거용 전환",
              "재산세가 주택분으로 바뀌면 취득세 주택 수 포함, 실제 주거용이면 양도세 주택 수 포함, 부가세 면세전용에 따른 일부 반납 가능",
            ],
            [
              "주거용 취득 → 업무용 전환",
              "다른 주택 취득일 현재 실제 업무용이고 재산세가 건축물분이면 취득세 주택 수 제외 가능, 양도세 주택 비과세는 적용 불가",
            ],
            ["업무용 유지 중 전입신고", "양도세는 실제 사용 현황으로 주거용 판정 가능, 재산세 과세 유형도 변경 위험"],
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-vat">
        <h2 id="guide-orb-vat" className="text-foreground text-xl font-semibold tracking-tight">
          업무용 오피스텔의 부가가치세 환급
        </h2>
        <p>
          분양 오피스텔은 건물분 공급가액에 부가가치세 10%가 붙습니다(토지분은 면세). 사업자등록을 하고 실제 업무용으로
          사용하면 이 매입세액을 환급받을 수 있지만, 주거용으로 임대하거나 직접 거주하면 환급이 제한되고, 이미 환급받은
          경우 면세전용에 따라 일부를 반납해야 합니다.
        </p>
        <InfoTable
          caption="부가세 환급 핵심 포인트"
          heads={["항목", "내용"]}
          minWidth="32rem"
          rows={[
            ["환급 요건", "사업자등록 후 업무용으로 사용(주택 임대는 부가세 면세라 환급 불가)"],
            ["환급 대상", "건물분 부가세(토지분 제외)"],
            ["환급 시기", "취득 후 부가세 신고 시"],
            ["주거용 전환 시", "환급분 일부 반납(경과 기간에 따라 달라짐)"],
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-checklist">
        <h2 id="guide-orb-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          오피스텔 취득 전 확인 체크리스트
        </h2>
        <InfoTable
          caption="취득 전 점검 항목"
          heads={["항목", "확인 여부"]}
          minWidth="30rem"
          rows={[
            ["실제 사용 목적(주거 vs 업무) 확정", "□"],
            ["취득 시점(2020.8.12 전후)과 시가표준액(건축물+부속토지) 1억 원 초과 여부", "□"],
            ["재산세가 주택분으로 과세되는지(고지서·세무과 확인)", "□"],
            ["이후 아파트·빌라 추가 취득 계획과 현재 보유 주택 수", "□"],
            ["업무용 유지 시 사업자등록·부가세 환급 가능 여부", "□"],
            ["주거용 전환 계획과 그에 따른 부가세 반납 가능성", "□"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          ※ 오피스텔의 주택 수 포함 여부와 양도세 판정은 과세당국의 실질 조사 결과에 따라 달라질 수 있습니다. 정확한
          판단은 관할 시·군·구청 세무과, 세무서 또는 세무사 상담으로 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="오피스텔 취득세 계산기 이동"
      >
        <p>
          <Link
            href="/officetel-acquisition-tax-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            매매가별 오피스텔 취득세는 오피스텔 취득세 계산기에서 바로 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
