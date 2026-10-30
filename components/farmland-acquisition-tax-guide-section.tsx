import Link from "next/link";
import { CalculatorReferenceTable } from "@/components/calculator/reference";

/** 본문 내 제도·일몰 안내를 확인한 기준일 */
const AS_OF_LABEL = "2026년 10월 30일";

const rateRows = [
  ["매매 (일반)", "3%", "0.2%", "0.2%", "3.4%"],
  ["매매 (2년 이상 자경 감면)", "1.5%", "면제", "0.1%", "1.6%"],
  ["상속 (일반)", "2.3%", "0.2%", "0.06%", "2.56%"],
  ["상속 (영농상속 특례)", "0.3%", "면제", "0.06%", "0.36%"],
  ["증여", "3.5%", "0.2%", "0.3%", "4%"],
  ["원시취득", "2.8%", "0.2%", "0.16%", "3.16%"],
] as const;

const exampleRows = [
  ["매매 (일반)", "300만 원", "20만 원", "20만 원", "340만 원"],
  ["매매 (2년 이상 자경 감면)", "150만 원", "0원", "10만 원", "160만 원"],
  ["상속 (일반)", "230만 원", "20만 원", "6만 원", "256만 원"],
  ["상속 (영농상속 특례)", "30만 원", "0원", "6만 원", "36만 원"],
  ["증여", "350만 원", "20만 원", "30만 원", "400만 원"],
  ["원시취득", "280만 원", "20만 원", "16만 원", "316만 원"],
] as const;

const certificateRows = [
  ["농업경영계획서·주말체험영농계획서 제출", "신청 후 7일 이내", "농업경영이나 주말·체험영농 목적으로 취득하는 일반적인 경우"],
  ["계획서 없이 신청", "신청 후 4일 이내", "상속 등 계획서 작성이 면제되는 취득 사유"],
  ["농지위원회 심의 대상", "신청 후 14일 이내", "농지 투기가 성행하거나 우려되는 지역의 농지를 취득하는 경우 등"],
] as const;

const deadlineRows = [
  ["매매 등 유상취득", "취득일(잔금 지급일 등)부터 60일 이내"],
  ["증여 등 무상취득", "취득일이 속하는 달의 말일부터 3개월 이내"],
  ["상속", "상속개시일이 속하는 달의 말일부터 6개월 이내 (외국에 주소를 둔 상속인이 있으면 9개월)"],
] as const;

const bodyText = "text-sm leading-relaxed";
const listClass = "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed";

export function FarmlandAcquisitionTaxGuideSection() {
  return (
    <section className="border-t py-10 sm:py-14" aria-labelledby="farmland-tax-guide-title">
      <div className="mx-auto max-w-3xl space-y-12 px-4">
        <div>
          <h2 id="farmland-tax-guide-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            농지 취득세율, 취득 원인별로 정리했습니다
          </h2>
          <p className={`${bodyText} mt-4`}>
            농지 취득세는 주택과 달리 보유 주택 수나 조정대상지역을 따지지 않습니다. 대신 매매인지 상속·증여인지,
            그리고 취득하는 사람이 자경 요건을 갖췄는지에 따라 세율이 갈립니다. 아래 표는 지방세법·지방세특례제한법의
            세율을 기준으로 정리했고, 합계는 과세표준에 곱하는 총부담률입니다.
          </p>
          <div className="mt-5">
            <CalculatorReferenceTable
              caption="농지 취득 원인별 취득세·농어촌특별세·지방교육세율"
              headers={["취득 원인", "취득세", "농어촌특별세", "지방교육세", "합계"]}
              rows={rateRows}
              minWidth="min-w-[640px]"
              lastColumnRight
            />
          </div>
          <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
            과세표준은 매매의 경우 실제 취득가액이 기준이며(위 계산기는 시가표준액과 비교해 큰 금액을 사용합니다), 상속은
            시가표준액, 증여는 시가인정액이 있으면 그 금액, 없으면 시가표준액입니다. 농지의 시가표준액은 개별공시지가 ×
            면적으로 어림할 수 있습니다.
          </p>
        </div>

        <div id="farmland-tax-example" className="scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">과세표준 1억 원 농지로 비교하면</h2>
          <p className={`${bodyText} mt-4`}>
            과세표준이 1억 원이라고 가정하면 세금은 아래와 같습니다. 같은 매매라도 자경 요건을 갖췄는지에 따라 180만
            원, 같은 상속이라도 영농상속 특례를 받을 수 있는지에 따라 220만 원 차이가 납니다. 과세표준이 3억 원이면
            차이도 3배가 되어 매매 기준 540만 원입니다.
          </p>
          <div className="mt-5">
            <CalculatorReferenceTable
              caption="과세표준 1억 원 농지의 취득 원인별 세금 비교"
              headers={["취득 원인", "취득세", "농어촌특별세", "지방교육세", "합계"]}
              rows={exampleRows}
              minWidth="min-w-[640px]"
              lastColumnRight
            />
          </div>
        </div>

        <div id="farmland-self-cultivation" className="scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">2년 이상 자경 감면(1.5%) 요건과 추징</h2>
          <div
            className="mt-4 rounded-lg border border-amber-800/25 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950 dark:border-amber-700/40 dark:bg-amber-950/30 dark:text-amber-50"
            role="note"
          >
            <p className="font-semibold">감면 기한 확인 ({AS_OF_LABEL} 기준)</p>
            <p className="mt-1">
              지방세특례제한법 제6조 제1항의 자경농민 취득세 50% 경감은 현행법상 2026년 12월 31일까지 적용됩니다.
              정부는 2026년 10월 16일 이 기한을 2029년 12월 31일까지 3년 연장하는 개정안을 국회에 제출했고, 통과되면
              2027년 1월 1일 이후 납세의무가 성립하는 경우부터 적용됩니다. 국회를 통과하기 전에는 확정이 아니므로,
              취득일(잔금일)이 연말·연초에 걸친다면 연장 여부를 확인한 뒤 일정을 잡으세요.
            </p>
          </div>

          <h3 className="mt-6 text-lg font-semibold">감면을 받으려면</h3>
          <ul className={listClass}>
            <li>
              취득 당시 본인 또는 세대별 주민등록표에 함께 기재된 배우자 중 1명 이상이 농지를 소유하거나 임차해 직접 2년
              이상 계속 농업에 종사해야 합니다. 후계농업경영인·청년창업형 후계농업경영인도 대상입니다.
            </li>
            <li>
              농지 소재지 시·군·구 또는 연접한 시·군·구에 거주하거나, 소재지에서 30킬로미터 이내에 거주해야 합니다.
            </li>
            <li>직전 연도 농업 외 종합소득금액이 법령이 정한 기준금액 미만이어야 합니다.</li>
            <li>
              취득하는 농지가 주거·상업·공업지역 등 도시지역 밖에 있어야 합니다. 이 감면 기준에서는 개발제한구역과 녹지지역을
              도시지역에서 제외합니다.
            </li>
            <li>
              본인·배우자가 소유한 농지를 새로 취득하는 농지와 합친 면적이 논·밭·과수원 3만㎡(농업진흥지역 안은 20만㎡)
              이내여야 하며, 초과분만 감면에서 빠집니다.
            </li>
            <li>직접 경작할 목적으로 취득해야 하고, 취득세 신고 때 지방세 감면 신청서를 함께 제출합니다.</li>
          </ul>
          <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
            세부 기준은 지방세특례제한법 시행령 제3조에 있으며 개정될 수 있으므로 신고 전에 관할 시·군·구청에서 확인하세요.
          </p>

          <h3 className="mt-6 text-lg font-semibold">감면을 받은 뒤 주의할 점</h3>
          <ul className={listClass}>
            <li>정당한 사유 없이 취득일부터 2년이 지날 때까지 직접 경작하지 않으면 경감받은 취득세가 추징됩니다.</li>
            <li>직접 경작한 기간이 2년 미만인 상태에서 매각·증여하거나 다른 용도로 쓰는 경우에도 추징됩니다.</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">영농상속 0.3%는 무엇인가요</h3>
          <p className={`${bodyText} mt-3`}>
            상속받는 농지가 자경농민 감면 대상 농지에 해당하면 취득세율이 상속 표준세율 2.3%에서 중과기준세율 2%를 뺀
            0.3%로 낮아지는 특례가 있습니다(지방세법 제15조 제1항). 감면 대상 농지 요건과 연결되어 있으므로 위 요건과
            일몰 연장 여부의 영향을 받을 수 있어, 상속 신고 전에 관할 지자체에 확인하는 것이 안전합니다.
          </p>
          <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
            위 계산기에서 &quot;2년 이상 자경&quot;이나 &quot;영농상속 감면&quot;을 선택하면 요건을 확인하지 않고 해당 세율만
            적용합니다. 귀농인이 귀농일부터 3년 이내에 취득하는 농지의 취득세 50% 경감(2027년 12월 31일까지)처럼 별도
            감면도 있지만 계산기에는 반영하지 않았습니다.
          </p>
        </div>

        <div id="farmland-certificate" className="scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">농지취득자격증명, 취득세 신고 전에 챙기세요</h2>
          <p className={`${bodyText} mt-4`}>
            농지를 취득하려면 농지 소재지 시·구·읍·면장에게 농지취득자격증명을 발급받아야 하고, 소유권이전등기를 신청할
            때도 이 증명을 첨부해야 합니다(농지법 제8조). 정부24나 방문·우편으로 신청할 수 있으며, 온라인에서는 대리인
            신청이 되지 않습니다.
          </p>
          <div className="mt-5">
            <CalculatorReferenceTable
              caption="농지취득자격증명 발급 유형별 처리기간"
              headers={["신청 유형", "처리기간", "해당하는 경우"]}
              rows={certificateRows}
              minWidth="min-w-[640px]"
            />
          </div>
          <p className={`${bodyText} mt-4`}>
            농업경영계획서에는 취득할 면적, 노동력과 농기계·시설 확보 방안, 이미 소유한 농지의 이용 실태, 직업·영농경력·
            영농거리 등을 적습니다. 농업인이 아닌 개인이 주말·체험영농 목적으로 취득하는 경우에는 소유 농지를 합쳐 1,000㎡
            이내여야 합니다. 농지법은 개정이 잦으므로 신청 전에 정부24 안내나 관할 시·구·읍·면에서 최신 요건을
            확인하세요.
          </p>
        </div>

        <div id="farmland-deadline" className="scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">취득세 신고·납부 기한</h2>
          <div className="mt-5">
            <CalculatorReferenceTable
              caption="농지 취득 원인별 취득세 신고·납부 기한"
              headers={["취득 원인", "신고·납부 기한"]}
              rows={deadlineRows}
              minWidth="min-w-[560px]"
            />
          </div>
          <p className={`${bodyText} mt-4`}>
            기한을 넘기면 무신고·과소신고·납부지연 가산세가 붙습니다. 가산세와 기한 후 신고 방법은{" "}
            <Link
              href="/guide/acquisition-tax-deadline-and-penalty-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              취득세 신고기한·가산세 가이드
            </Link>
            에서 자세히 다룹니다. 신고·납부는 위택스(wetax.go.kr)나 관할 시·군·구청에서 할 수 있습니다. 주택 취득세나 다른
            자산은{" "}
            <Link
              href="/acquisition-tax-calculator"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              취득세 계산기
            </Link>
            에서 계산하세요.
          </p>
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed">
          참고 법령: 지방세법 제11조·제15조·제20조, 지방세특례제한법 제6조, 농지법 제8조(국가법령정보센터 law.go.kr).
          농지취득자격증명 신청 안내는 정부24(gov.kr) 기준입니다. 제도 내용은 {AS_OF_LABEL} 기준이며 세법과 감면 기한은
          개정될 수 있습니다. 계산 결과는 참고용이며 실제 세액은 관할 지자체 확인이 필요합니다.
        </p>
      </div>
    </section>
  );
}
