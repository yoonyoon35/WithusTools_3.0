import Link from "next/link";

/** 본문 내 제도·일몰 안내를 확인한 기준일 */
const AS_OF_LABEL = "2026년 11월 12일";

export const farmlandAcquisitionTaxGuideMeta = {
  slug: "farmland-acquisition-tax-guide",
  title: "농지 취득세 — 매매·자경 1.5%·상속·증여·자격증명",
  description:
    "농지 취득세는 주택 수·조정지역과 무관합니다. 매매 3%(자경 1.5%)·상속 2.3%(영농상속 0.3%)·증여 3.5%와 농특세·지방교육세, 자경 감면 요건·일몰, 농지취득자격증명, 신고 기한, 계산기 입력 요령을 정리합니다.",
  updated: AS_OF_LABEL,
} as const;

export function FarmlandAcquisitionTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-fat-overview">
        <h2 id="guide-fat-overview" className="text-foreground text-xl font-semibold tracking-tight">
          {AS_OF_LABEL} 기준
        </h2>
        <p>
          농지 취득세는 주택과 달리 <strong>보유 주택 수나 조정대상지역을 따지지 않습니다</strong>. 대신 매매·상속·증여·원시
          취득인지, 그리고 자경·영농상속 요건을 갖췄는지에 따라 세율이 갈립니다. 이 글은 지방세법·지방세특례제한법·농지법
          기준으로 세율·감면·자격증명·신고 기한을 정리하고,{" "}
          <Link
            href="/farmland-acquisition-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            농지 취득세 계산기
          </Link>
          로 어림하는 법도 안내합니다.
        </p>
      </section>

      <nav className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm" aria-label="목차">
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-fat-rates" className="text-primary underline-offset-4 hover:underline">
              취득 원인별 세율
            </a>
          </li>
          <li>
            <a href="#guide-fat-base" className="text-primary underline-offset-4 hover:underline">
              과세표준
            </a>
          </li>
          <li>
            <a href="#guide-fat-example" className="text-primary underline-offset-4 hover:underline">
              1억 원 예시
            </a>
          </li>
          <li>
            <a href="#guide-fat-self-cultivation" className="text-primary underline-offset-4 hover:underline">
              자경 감면·추징
            </a>
          </li>
          <li>
            <a href="#guide-fat-farming-inheritance" className="text-primary underline-offset-4 hover:underline">
              영농상속 0.3%
            </a>
          </li>
          <li>
            <a href="#guide-fat-return-farming" className="text-primary underline-offset-4 hover:underline">
              귀농인 감면(참고)
            </a>
          </li>
          <li>
            <a href="#guide-fat-certificate" className="text-primary underline-offset-4 hover:underline">
              농지취득자격증명
            </a>
          </li>
          <li>
            <a href="#guide-fat-deadline" className="text-primary underline-offset-4 hover:underline">
              신고·납부 기한
            </a>
          </li>
          <li>
            <a href="#guide-fat-calculator" className="text-primary underline-offset-4 hover:underline">
              계산기 입력 요령
            </a>
          </li>
          <li>
            <a href="#guide-fat-related" className="text-primary underline-offset-4 hover:underline">
              관련 세금·가이드
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-fat-rates">
        <h2 id="guide-fat-rates" className="text-foreground text-xl font-semibold tracking-tight">
          취득 원인별 세율
        </h2>
        <p>
          합계는 과세표준에 곱하는 총부담률입니다. 지방교육세·농어촌특별세 산식의 일반 규칙은{" "}
          <Link
            href="/guide/local-education-rural-special-tax-acquisition-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            지방교육세·농어촌특별세 계산법
          </Link>
          을 참고하세요.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              농지 취득 원인별 취득세·농어촌특별세·지방교육세율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득 원인
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농어촌특별세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 text-right font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매 (일반)
                </th>
                <td className="border-border border-b px-3 py-2.5">3%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5 text-right tabular-nums">3.4%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매 (2년 이상 자경 감면)
                </th>
                <td className="border-border border-b px-3 py-2.5">1.5%</td>
                <td className="border-border border-b px-3 py-2.5">면제</td>
                <td className="border-border border-b px-3 py-2.5">0.1%</td>
                <td className="border-border border-b px-3 py-2.5 text-right tabular-nums">1.6%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속 (일반)
                </th>
                <td className="border-border border-b px-3 py-2.5">2.3%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">0.06%</td>
                <td className="border-border border-b px-3 py-2.5 text-right tabular-nums">2.56%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속 (영농상속 특례)
                </th>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">면제</td>
                <td className="border-border border-b px-3 py-2.5">0.06%</td>
                <td className="border-border border-b px-3 py-2.5 text-right tabular-nums">0.36%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  증여
                </th>
                <td className="border-border border-b px-3 py-2.5">3.5%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5 text-right tabular-nums">4%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  원시취득
                </th>
                <td className="px-3 py-2.5">2.8%</td>
                <td className="px-3 py-2.5">0.2%</td>
                <td className="px-3 py-2.5">0.16%</td>
                <td className="px-3 py-2.5 text-right tabular-nums">3.16%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-fat-base">
        <h2 id="guide-fat-base" className="text-foreground text-xl font-semibold tracking-tight">
          과세표준은 어떻게 잡나요
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">매매(유상취득):</strong> 실제 취득가액이 기준입니다. 계산기는 시가표준액과
            비교해 큰 금액을 과세표준으로 쓰는 단순 모델을 적용합니다.
          </li>
          <li>
            <strong className="text-foreground">상속:</strong> 시가표준액(개별공시지가 × 면적으로 어림)이 기준입니다.
          </li>
          <li>
            <strong className="text-foreground">증여:</strong> 시가인정액이 있으면 그 금액, 없으면 시가표준액입니다.
          </li>
          <li>
            개별공시지가는 부동산공시가격알리미나 관할 시·군·구청에서 조회할 수 있습니다. 확정 과세표준은 위택스·관할
            지자체 확인이 필요합니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fat-example">
        <h2 id="guide-fat-example" className="text-foreground text-xl font-semibold tracking-tight">
          과세표준 1억 원 농지로 비교하면
        </h2>
        <p>
          같은 매매라도 자경 요건을 갖췄는지에 따라 180만 원, 같은 상속이라도 영농상속 특례를 받을 수 있는지에 따라 220만
          원 차이가 납니다. 과세표준이 3억 원이면 차이도 3배가 되어 매매 기준 540만 원입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              과세표준 1억 원 농지의 취득 원인별 세금 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득 원인
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농어촌특별세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 text-right font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매 (일반)
                </th>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">20만 원</td>
                <td className="border-border border-b px-3 py-2.5">20만 원</td>
                <td className="border-border border-b px-3 py-2.5 text-right tabular-nums">340만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매 (2년 이상 자경 감면)
                </th>
                <td className="border-border border-b px-3 py-2.5">150만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
                <td className="border-border border-b px-3 py-2.5">10만 원</td>
                <td className="border-border border-b px-3 py-2.5 text-right tabular-nums">160만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속 (일반)
                </th>
                <td className="border-border border-b px-3 py-2.5">230만 원</td>
                <td className="border-border border-b px-3 py-2.5">20만 원</td>
                <td className="border-border border-b px-3 py-2.5">6만 원</td>
                <td className="border-border border-b px-3 py-2.5 text-right tabular-nums">256만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속 (영농상속 특례)
                </th>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
                <td className="border-border border-b px-3 py-2.5">6만 원</td>
                <td className="border-border border-b px-3 py-2.5 text-right tabular-nums">36만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  증여
                </th>
                <td className="border-border border-b px-3 py-2.5">350만 원</td>
                <td className="border-border border-b px-3 py-2.5">20만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5 text-right tabular-nums">400만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  원시취득
                </th>
                <td className="px-3 py-2.5">280만 원</td>
                <td className="px-3 py-2.5">20만 원</td>
                <td className="px-3 py-2.5">16만 원</td>
                <td className="px-3 py-2.5 text-right tabular-nums">316만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fat-self-cultivation">
        <h2 id="guide-fat-self-cultivation" className="text-foreground text-xl font-semibold tracking-tight">
          2년 이상 자경 감면(1.5%) 요건과 추징
        </h2>
        <div
          className="rounded-lg border border-amber-800/25 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950 dark:border-amber-700/40 dark:bg-amber-950/30 dark:text-amber-50"
          role="note"
        >
          <p className="font-semibold">감면 기한 확인 ({AS_OF_LABEL} 기준)</p>
          <p className="mt-1">
            지방세특례제한법 제6조 제1항의 자경농민 취득세 50% 경감은 현행법상 2026년 12월 31일까지 적용됩니다. 정부는
            2026년 10월 16일 이 기한을 2029년 12월 31일까지 3년 연장하는 개정안을 국회에 제출했고, 통과되면 2027년 1월 1일
            이후 납세의무가 성립하는 경우부터 적용됩니다. 국회를 통과하기 전에는 확정이 아니므로, 취득일(잔금일)이
            연말·연초에 걸친다면 연장 여부를 확인한 뒤 일정을 잡으세요.
          </p>
        </div>

        <h3 className="text-foreground text-lg font-semibold">감면을 받으려면</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            취득 당시 본인 또는 세대별 주민등록표에 함께 기재된 배우자 중 1명 이상이 농지를 소유하거나 임차해 직접 2년 이상
            계속 농업에 종사해야 합니다. 후계농업경영인·청년창업형 후계농업경영인도 대상입니다.
          </li>
          <li>
            농지 소재지 시·군·구 또는 연접한 시·군·구에 거주하거나, 소재지에서 30킬로미터 이내에 거주해야 합니다.
          </li>
          <li>직전 연도 농업 외 종합소득금액이 법령이 정한 기준금액 미만이어야 합니다.</li>
          <li>
            취득하는 농지가 주거·상업·공업지역 등 도시지역 밖에 있어야 합니다. 이 감면 기준에서는 개발제한구역과
            녹지지역을 도시지역에서 제외합니다.
          </li>
          <li>
            본인·배우자가 소유한 농지를 새로 취득하는 농지와 합친 면적이 논·밭·과수원 3만㎡(농업진흥지역 안은 20만㎡)
            이내여야 하며, 초과분만 감면에서 빠집니다.
          </li>
          <li>직접 경작할 목적으로 취득해야 하고, 취득세 신고 때 지방세 감면 신청서를 함께 제출합니다.</li>
        </ul>
        <p className="text-muted-foreground text-xs leading-relaxed">
          세부 기준은 지방세특례제한법 시행령 제3조에 있으며 개정될 수 있으므로 신고 전에 관할 시·군·구청에서 확인하세요.
        </p>

        <h3 className="text-foreground text-lg font-semibold">감면을 받은 뒤 주의할 점</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>정당한 사유 없이 취득일부터 2년이 지날 때까지 직접 경작하지 않으면 경감받은 취득세가 추징됩니다.</li>
          <li>직접 경작한 기간이 2년 미만인 상태에서 매각·증여하거나 다른 용도로 쓰는 경우에도 추징됩니다.</li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="guide-fat-farming-inheritance">
        <h2 id="guide-fat-farming-inheritance" className="text-foreground text-xl font-semibold tracking-tight">
          영농상속 0.3%는 무엇인가요
        </h2>
        <p>
          상속받는 농지가 자경농민 감면 대상 농지에 해당하면 취득세율이 상속 표준세율 2.3%에서 중과기준세율 2%를 뺀
          0.3%로 낮아지는 특례가 있습니다(지방세법 제15조 제1항). 감면 대상 농지 요건과 연결되어 있으므로 위 요건과 일몰
          연장 여부의 영향을 받을 수 있어, 상속 신고 전에 관할 지자체에 확인하는 것이 안전합니다.
        </p>
        <p>
          참고로 <strong>국세인 상속세</strong>와 <strong>지방세인 상속 취득세</strong>는 별개입니다. 상속세 과세가액·공제는{" "}
          <Link href="/guide/inheritance-tax-overview-guide" className="text-primary underline-offset-4 hover:underline">
            상속세 가이드
          </Link>
          ·{" "}
          <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            상속세 계산기
          </Link>
          를, 상속으로 받는 <strong>주택</strong>의 취득세는{" "}
          <Link
            href="/guide/inherited-housing-acquisition-tax-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            상속 주택 취득세 가이드
          </Link>
          를 보세요. 농지 상속 취득세율(2.3%·영농상속 0.3%)은 주택 상속(통상 2.8%)과 다릅니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-fat-return-farming">
        <h2 id="guide-fat-return-farming" className="text-foreground text-xl font-semibold tracking-tight">
          귀농인 감면(참고)
        </h2>
        <p>
          귀농인이 귀농일부터 3년 이내에 취득하는 농지에 대해 취득세 50%를 경감하는 별도 특례가 있습니다(현행 일몰은
          2027년 12월 31일까지인 경우가 많음). 자경농민 감면과 요건·대상이 달라{" "}
          <strong>농지 취득세 계산기에는 반영하지 않았습니다</strong>. 해당되면 관할 시·군·구청·감면 신청서 기준으로 따로
          확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fat-certificate">
        <h2 id="guide-fat-certificate" className="text-foreground text-xl font-semibold tracking-tight">
          농지취득자격증명, 취득세 신고 전에 챙기세요
        </h2>
        <p>
          농지를 취득하려면 농지 소재지 시·구·읍·면장에게 농지취득자격증명을 발급받아야 하고, 소유권이전등기를 신청할 때도
          이 증명을 첨부해야 합니다(농지법 제8조). 정부24나 방문·우편으로 신청할 수 있으며, 온라인에서는 대리인 신청이 되지
          않습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              농지취득자격증명 발급 유형별 처리기간
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신청 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  처리기간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  해당하는 경우
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  농업경영계획서·주말체험영농계획서 제출
                </th>
                <td className="border-border border-b px-3 py-2.5">신청 후 7일 이내</td>
                <td className="border-border border-b px-3 py-2.5">
                  농업경영이나 주말·체험영농 목적으로 취득하는 일반적인 경우
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계획서 없이 신청
                </th>
                <td className="border-border border-b px-3 py-2.5">신청 후 4일 이내</td>
                <td className="border-border border-b px-3 py-2.5">상속 등 계획서 작성이 면제되는 취득 사유</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  농지위원회 심의 대상
                </th>
                <td className="px-3 py-2.5">신청 후 14일 이내</td>
                <td className="px-3 py-2.5">농지 투기가 성행하거나 우려되는 지역의 농지를 취득하는 경우 등</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          농업경영계획서에는 취득할 면적, 노동력과 농기계·시설 확보 방안, 이미 소유한 농지의 이용 실태, 직업·영농경력·
          영농거리 등을 적습니다. 농업인이 아닌 개인이 주말·체험영농 목적으로 취득하는 경우에는 소유 농지를 합쳐 1,000㎡
          이내여야 합니다. 농지법은 개정이 잦으므로 신청 전에 정부24 안내나 관할 시·구·읍·면에서 최신 요건을 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fat-deadline">
        <h2 id="guide-fat-deadline" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 신고·납부 기한
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              농지 취득 원인별 취득세 신고·납부 기한
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득 원인
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신고·납부 기한
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매 등 유상취득
                </th>
                <td className="border-border border-b px-3 py-2.5">취득일(잔금 지급일 등)부터 60일 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  증여 등 무상취득
                </th>
                <td className="border-border border-b px-3 py-2.5">취득일이 속하는 달의 말일부터 3개월 이내</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  상속
                </th>
                <td className="px-3 py-2.5">
                  상속개시일이 속하는 달의 말일부터 6개월 이내 (외국에 주소를 둔 상속인이 있으면 9개월)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          기한을 넘기면 무신고·과소신고·납부지연 가산세가 붙습니다. 가산세와 기한 후 신고 방법은{" "}
          <Link
            href="/guide/acquisition-tax-deadline-and-penalty-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            취득세 신고기한·가산세 가이드
          </Link>
          에서 자세히 다룹니다. 신고·납부는 위택스(wetax.go.kr)나 관할 시·군·구청에서 할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fat-calculator">
        <h2 id="guide-fat-calculator" className="text-foreground text-xl font-semibold tracking-tight">
          계산기 입력 요령
        </h2>
        <p>
          <Link
            href="/farmland-acquisition-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            농지 취득세 계산기
          </Link>
          는 자경·영농상속 <strong>요건을 심사하지 않고</strong>, 선택한 세율만 적용하는 참고용입니다. 요건을 충족하는지
          먼저 이 글과 관할 지자체로 확인한 뒤 옵션을 켜세요.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              농지 취득세 계산기 입력 요령
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  입력
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  넣는 값
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득 원인
                </th>
                <td className="border-border border-b px-3 py-2.5">매매·증여·상속·원시</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매매 유형
                </th>
                <td className="border-border border-b px-3 py-2.5">일반 3% 또는 2년 이상 자경 1.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  영농상속
                </th>
                <td className="border-border border-b px-3 py-2.5">상속이면서 특례 요건을 갖춘 경우만 체크</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  금액
                </th>
                <td className="px-3 py-2.5">매매는 취득가액·시가표준액, 상속·증여·원시는 시가표준액(또는 시가인정액)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          주택·오피스텔 등 다른 자산은{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          를 이용하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-fat-related">
        <h2 id="guide-fat-related" className="text-foreground text-xl font-semibold tracking-tight">
          관련 세금·가이드
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            농지를 <strong>증여</strong>받으면 지방세 취득세와 별도로 국세{" "}
            <Link href="/guide/gift-tax-overview-guide" className="text-primary underline-offset-4 hover:underline">
              증여세
            </Link>
            가 있을 수 있습니다.
          </li>
          <li>
            농지를 <strong>상속</strong>받으면 상속 취득세와 별도로{" "}
            <Link href="/guide/inheritance-tax-overview-guide" className="text-primary underline-offset-4 hover:underline">
              상속세
            </Link>
            를 검토하세요.
          </li>
          <li>
            주택 취득세율·중과·감면 전체는{" "}
            <Link
              href="/guide/acquisition-tax-rates-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              2026년 취득세율 정리
            </Link>
            를 참고하세요.
          </li>
        </ul>
        <p className="text-muted-foreground text-xs leading-relaxed">
          참고 법령: 지방세법 제11조·제15조·제20조, 지방세특례제한법 제6조, 농지법 제8조(국가법령정보센터 law.go.kr).
          농지취득자격증명 신청 안내는 정부24(gov.kr) 기준입니다. 제도 내용은 {AS_OF_LABEL} 기준이며 세법과 감면 기한은
          개정될 수 있습니다. 계산·안내 결과는 참고용이며 실제 세액은 관할 지자체 확인이 필요합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link
            href="/farmland-acquisition-tax-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            농지 매매·상속·증여·자경·영농상속 취득세는 농지 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            주택·주택 외 자산 취득세는 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
