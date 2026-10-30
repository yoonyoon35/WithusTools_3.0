import Link from "next/link";
import type { ReactNode } from "react";

export const localEducationRuralSpecialTaxAcquisition2026GuideMeta = {
  slug: "local-education-rural-special-tax-acquisition-2026-guide",
  title: "지방교육세·농어촌특별세 계산법",
  description:
    "취득세에 붙는 지방교육세·농어촌특별세 계산법을 정리했습니다. 주택 매매는 취득세의 10%, 다주택 중과는 0.4%, 상속·증여는 (취득세율-2%)×20%이며, 전용 85㎡ 이하 주택은 농특세가 없습니다. 2026년 10월 기준.",
  updated: "2026년 10월 30일",
} as const;

type TableProps = {
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly ReactNode[])[];
  minWidth?: string;
};

function GuideTable({ caption, headers, rows, minWidth = "min-w-[28rem]" }: TableProps) {
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

export function LocalEducationRuralSpecialTaxAcquisition2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ler-intro">
        <h2 id="guide-ler-intro" className="text-foreground text-xl font-semibold tracking-tight">
          개요
        </h2>
        <p>
          취득세를 납부할 때 지방교육세와 농어촌특별세가 함께 부과됩니다. 세 세금은 한 장의 신고서·고지서에 나오지만 계산
          방식이 모두 다릅니다. 이 글은 지방세법(2026년 7월 1일 시행분)과 농어촌특별세법 기준이며, 2026년 10월 30일에
          확인했습니다.
        </p>
        <p>
          가장 많이 헷갈리는 부분은 <strong>지방교육세가 취득 유형마다 다르게 계산된다</strong>는 점입니다. 주택 매매는
          취득세의 10%이지만, 상속·증여·신축은 취득세의 10%가 아닙니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-relation">
        <h2 id="guide-ler-relation" className="text-foreground text-xl font-semibold tracking-tight">
          세 가지 세금의 관계
        </h2>
        <GuideTable
          caption="실제 납부 구조"
          headers={["항목", "내용"]}
          minWidth="min-w-[24rem]"
          rows={[
            ["실제 납부액", "취득세 + 지방교육세 + 농어촌특별세"],
            ["세목 성격", "취득세·지방교육세는 지방세, 농어촌특별세는 국세"],
            ["산출 순서", "취득세율이 정해지면 나머지 두 세금이 그에 맞추어 산출됩니다."],
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-local">
        <h2 id="guide-ler-local" className="text-foreground text-xl font-semibold tracking-tight">
          지방교육세 계산법
        </h2>
        <p>
          지방교육세의 원칙은 <strong>(취득세 표준세율 − 2%) × 20%</strong>를 과세표준에 곱하는 것입니다(지방세법 제151조).
          다만 주택 매매와 중과에는 특례가 있어 아래처럼 나뉩니다.{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          도 같은 기준으로 계산합니다.
        </p>
        <GuideTable
          caption="취득 유형별 지방교육세율"
          headers={["취득 유형", "취득세율", "지방교육세 계산", "지방교육세율"]}
          minWidth="min-w-[40rem]"
          rows={[
            ["주택 유상취득(매매)", "1~3%", "취득세율의 50%에 20% 적용 = 취득세의 10%", "0.1~0.3%"],
            ["다주택·법인 중과", "8%·12%", "중과 시 0.4%로 고정", "0.4%"],
            ["주택 증여 중과(조정지역 시가표준액 3억 원 이상)", "12%", "중과 시 0.4%로 고정", "0.4%"],
            ["상속(농지 외)·신축 등 원시취득", "2.8%", "(2.8% − 2%) × 20%", "0.16%"],
            ["증여(무상취득, 중과 아님)", "3.5%", "(3.5% − 2%) × 20%", "0.3%"],
            ["주택 외 유상취득(상가·토지·업무용 오피스텔 등)", "4%", "(4% − 2%) × 20%", "0.4%"],
            ["농지 유상취득(2년 이상 자경)", "1.5%", "공식 세율표 기준(위 공식 적용 안 됨)", "0.1%"],
            ["농지 유상취득(일반)", "3%", "(3% − 2%) × 20%", "0.2%"],
            ["농지 상속", "2.3%", "(2.3% − 2%) × 20%", "0.06%"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          위 표는 일반적인 경우입니다. 과밀억제권역 내 중과, 지방자치단체 조례 세율, 여러 감면이 겹치는 경우에는 달라질 수
          있으므로 최종 세액은 위택스 모의계산으로 확인하세요.
        </p>
        <p>
          취득세가 감면되면 지방교육세도 같은 감면율만큼 줄어듭니다(생애최초 감면 예시는 아래 참고).
        </p>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">지방교육세 계산 예시</h3>
        <GuideTable
          caption="취득세율별 지방교육세·합계(농특세 제외)"
          headers={["구분", "취득세액", "지방교육세", "합계"]}
          minWidth="min-w-[36rem]"
          rows={[
            ["매매 6억 원, 1%", "600만 원", "60만 원(취득세 × 10%)", "660만 원"],
            ["매매 9억 원 초과(10억 원), 3%", "3,000만 원", "300만 원(취득세 × 10%)", "3,300만 원"],
            ["조정지역 2주택 5억 원, 8%", "4,000만 원", "200만 원(5억 원 × 0.4%)", "4,200만 원"],
            ["조정지역 3주택 6억 원, 12%", "7,200만 원", "240만 원(6억 원 × 0.4%)", "7,440만 원"],
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-rural">
        <h2 id="guide-ler-rural" className="text-foreground text-xl font-semibold tracking-tight">
          농어촌특별세 계산법
        </h2>
        <p>
          농어촌특별세는 취득세액이 아닌 취득가액(과세표준)을 기준으로 산정합니다. 기본은 취득세 표준세율을 2%로 보고 계산한
          세액의 10%, 즉 <strong>과세표준의 0.2%</strong>입니다. 중과 시에는 중과된 세율분이 더해져 0.6%(8%), 1.0%(12%)가
          됩니다.
        </p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
          농어촌특별세 = 취득가액(과세표준) × 0.2%(중과 시 0.6%·1.0%)
        </p>
        <p>
          단, <strong>전용면적 85㎡ 이하 주택은 농어촌특별세가 부과되지 않습니다</strong>(농어촌특별세법 제4조). 중과 대상이어도
          85㎡ 이하면 면제입니다.
        </p>
        <GuideTable
          caption="구분별 농어촌특별세"
          headers={["구분", "농어촌특별세"]}
          rows={[
            ["전용면적 85㎡ 이하 주택(중과 포함)", "면제"],
            ["전용면적 85㎡ 초과 주택(일반세율)", "과세표준 × 0.2%"],
            ["전용면적 85㎡ 초과 주택(8% 중과)", "과세표준 × 0.6%"],
            ["전용면적 85㎡ 초과 주택(12% 중과)", "과세표준 × 1.0%"],
            ["주택 외(상가·토지·업무용 오피스텔 등)", "과세표준 × 0.2%(면적과 무관)"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          85㎡는 공급면적이 아닌 <strong>전용면적</strong> 기준입니다. 수도권 밖 도시지역이 아닌 읍·면 지역은 국민주택규모 기준이
          100㎡ 이하입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-85">
        <h2 id="guide-ler-85" className="text-foreground text-xl font-semibold tracking-tight">
          주택 유형별 농어촌특별세 부과 기준
        </h2>
        <p>
          국민주택 규모(전용 85㎡)를 기준으로 부과 여부가 갈립니다. 같은 아파트라도 전용면적에 따라 납부액이 달라집니다.
        </p>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          매매가 7억 원 아파트 기준 농어촌특별세 비교
        </h3>
        <GuideTable
          caption="전용면적별 농특세(일반세율)"
          headers={["전용면적", "농어촌특별세"]}
          rows={[
            ["84㎡(85㎡ 이하)", "0원(면제)"],
            ["86㎡(85㎡ 초과)", "140만 원(7억 원 × 0.2%)"],
          ]}
        />
      </section>

      <section className="space-y-6" aria-labelledby="guide-ler-examples">
        <h2 id="guide-ler-examples" className="text-foreground text-xl font-semibold tracking-tight">
          실제 납부액 계산 예시
        </h2>

        <div className="space-y-3">
          <h3 className="text-foreground text-lg font-semibold tracking-tight">
            매매가 5억 원 아파트, 1주택 취득, 전용 85㎡ 이하 기준
          </h3>
          <GuideTable
            caption="항목별 산출"
            headers={["항목", "계산", "금액"]}
            minWidth="min-w-[32rem]"
            rows={[
              ["취득세(1%)", "5억 원 × 1%", "500만 원"],
              ["지방교육세", "500만 원 × 10%", "50만 원"],
              ["농어촌특별세", "면제(85㎡ 이하)", "0원"],
              ["합계", "—", "550만 원"],
            ]}
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-lg font-semibold tracking-tight">
            매매가 5억 원 아파트, 1주택 취득, 전용 85㎡ 초과 기준
          </h3>
          <GuideTable
            caption="항목별 산출"
            headers={["항목", "계산", "금액"]}
            minWidth="min-w-[32rem]"
            rows={[
              ["취득세(1%)", "5억 원 × 1%", "500만 원"],
              ["지방교육세", "500만 원 × 10%", "50만 원"],
              ["농어촌특별세", "5억 원 × 0.2%", "100만 원"],
              ["합계", "—", "650만 원"],
            ]}
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-lg font-semibold tracking-tight">
            매매가 5억 원 아파트, 조정지역 2주택 취득, 전용 85㎡ 초과 기준
          </h3>
          <GuideTable
            caption="항목별 산출"
            headers={["항목", "계산", "금액"]}
            minWidth="min-w-[32rem]"
            rows={[
              ["취득세(8%)", "5억 원 × 8%", "4,000만 원"],
              ["지방교육세", "5억 원 × 0.4%", "200만 원"],
              ["농어촌특별세", "5억 원 × 0.6%(8% 중과·85㎡ 초과)", "300만 원"],
              ["합계", "—", "4,500만 원"],
            ]}
          />
          <p className="text-muted-foreground text-sm">같은 주택이 전용 85㎡ 이하라면 농어촌특별세가 면제되어 합계는 4,200만 원입니다.</p>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-burden">
        <h2 id="guide-ler-burden" className="text-foreground text-xl font-semibold tracking-tight">
          취득세율별 실제 세 부담률 비교
        </h2>
        <p>취득세율에 부가세를 더한 실질 세 부담률(과세표준 대비)은 다음과 같습니다.</p>
        <GuideTable
          caption="취득세율별 실질 부담률"
          headers={["취득세율", "지방교육세", "농어촌특별세(85㎡ 초과)", "합계(85㎡ 초과)", "합계(85㎡ 이하)"]}
          minWidth="min-w-[40rem]"
          rows={[
            ["1%", "0.1%", "0.2%", "1.3%", "1.1%"],
            ["3%", "0.3%", "0.2%", "3.5%", "3.3%"],
            ["8%(중과)", "0.4%", "0.6%", "9.0%", "8.4%"],
            ["12%(중과)", "0.4%", "1.0%", "13.4%", "12.4%"],
          ]}
        />
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-relief">
        <h2 id="guide-ler-relief" className="text-foreground text-xl font-semibold tracking-tight">
          생애최초 취득세 감면 시 지방교육세·농특세
        </h2>
        <p>
          생애최초 주택 구입 감면(지방세특례제한법 제36조의3)은 취득가액 12억 원 이하 주택에 대해 취득세 산출세액에서{" "}
          <strong>200만 원</strong>(소형주택·인구감소지역은 300만 원)을 공제하는 제도로, 2028년 12월 31일 취득분까지
          적용됩니다. 취득세가 감면되면 지방교육세도 <strong>취득세 감면율만큼 함께 줄어듭니다</strong>(지방세법 제151조
          제1항 제1호 다목).
        </p>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          매매가 3억 원, 전용 85㎡ 이하, 생애최초 취득세 감면 적용 시
        </h3>
        <GuideTable
          caption="감면 전·후 비교"
          headers={["항목", "감면 전", "감면 후"]}
          rows={[
            ["취득세", "300만 원", "100만 원(200만 원 감면)"],
            ["지방교육세", "30만 원", "10만 원(감면율 약 66.7% 적용, 20만 원 감면)"],
            ["합계", "330만 원", "110만 원"],
          ]}
        />
        <p>
          실질 감면액은 취득세 200만 원 + 지방교육세 20만 원 = 220만 원입니다.{" "}
          <strong>전용 85㎡를 초과하는 주택</strong>은 감면받은 취득세액의 20%가 농어촌특별세로 추가 과세됩니다(농어촌특별세법
          제5조). 이 경우 본세분 농특세 산정 방식까지 달라질 수 있으므로 신고 전 위택스 모의계산으로 확인하세요.
        </p>
        <p className="text-muted-foreground text-sm">
          행정안전부가 2026년 8월 26일 발표한 지방세제 개편안(주거용 오피스텔 포함, 40세 미만 청년 한도 300만 원 등)은 국회
          확정 전이라 이 글에 반영하지 않았습니다.{" "}
          <Link href="/guide/first-home-acquisition-tax-relief-guide" className="text-primary underline-offset-4 hover:underline">
            생애최초 취득세 감면 가이드
          </Link>
          에서 요건을 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ler-inherit">
        <h2 id="guide-ler-inherit" className="text-foreground text-xl font-semibold tracking-tight">
          상속·증여 취득 시 적용 방식
        </h2>
        <p>
          상속·증여도 취득세에 지방교육세와 농어촌특별세가 붙는 구조는 같지만, 지방교육세는 매매처럼 취득세의 10%가
          아니라 <strong>(취득세율 − 2%) × 20%</strong>로 계산합니다. 상속(2.8%)은 0.16%, 증여(3.5%)는 0.3%입니다. 전용
          85㎡ 초과 시 농어촌특별세 0.2%가 추가됩니다.
        </p>
        <GuideTable
          caption="취득 유형별 부담률(85㎡ 초과 시 합계)"
          headers={["취득 유형", "취득세율", "지방교육세", "농어촌특별세(85㎡ 초과)", "합계"]}
          minWidth="min-w-[40rem]"
          rows={[
            ["매매(6억 원 이하)", "1%", "0.1%", "0.2%", "1.3%"],
            ["상속(농지 외)", "2.8%", "0.16%", "0.2%", "3.16%"],
            ["상속(1가구 1주택 특례, 요건 충족 시)", "0.8%", "0.16%", "면제", "0.96%"],
            ["증여(일반)", "3.5%", "0.3%", "0.2%", "4.0%"],
            ["증여(조정지역 시가표준액 3억 원 이상 중과)", "12%", "0.4%", "1.0%", "13.4%"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          전용 85㎡ 이하 주택은 농어촌특별세가 없어 상속 2.96%, 증여 3.8%, 증여 중과 12.4%입니다. 증여 중과는 증여자가 1세대
          1주택자이고 배우자·직계존비속에게 증여하면 제외되어 3.5%가 적용됩니다. 상속·증여 취득세는{" "}
          <Link href="/guide/gift-tax-overview-guide" className="text-primary underline-offset-4 hover:underline">
            증여세 가이드
          </Link>
          도 참고하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ler-pay">
        <h2 id="guide-ler-pay" className="text-foreground text-xl font-semibold tracking-tight">
          납부 방법
        </h2>
        <p>
          지방교육세와 농어촌특별세는 취득세와 함께 위택스(
          <a
            href="https://wetax.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            wetax.go.kr
          </a>
          )에서 일괄 신고·납부합니다. 취득세 신고 시 자동으로 계산되어 고지되며 세목별 금액은 영수증에 따로 표시됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ler-disclaimer">
        <p className="text-muted-foreground text-sm leading-relaxed">
          ※ 지방교육세와 농어촌특별세 세율은 지방세법 및 농어촌특별세법에 근거하며 법령 개정에 따라 변동될 수 있습니다. 정확한
          세액은 위택스(wetax.go.kr) 모의계산 또는 관할 시·군·구청에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            매매가와 주택 유형에 따른 취득세·지방교육세·농어촌특별세 합계는 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          취득세율 전체 표는{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            2026년 취득세율 완전 정리
          </Link>
          를 참고하세요.
        </p>
      </aside>
    </>
  );
}
