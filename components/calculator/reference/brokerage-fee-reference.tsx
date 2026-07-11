import Link from "next/link";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";
import { brokerageRateLinks } from "@/lib/brokerage-rate-links";

const formulaRows = [
  ["① 거래금액", "매매·교환: 입력 거래금액 · 임대차: 보증금+월세 환산"],
  ["② 전·월세 환산", "보증금 + (월세×100), 합 5천만 원 미만이면 보증금 + (월세×70)"],
  ["③ 상한요율 적용", "거래금액 구간별 상한요율 × 거래금액"],
  ["④ 한도액", "구간별 한도액이 있으면 min(③, 한도액) = 최대 중개보수"],
] as const;

const exampleRows = [
  ["가정", "주택 매매 · 거래금액 6억 원 · 서울시 요율"],
  ["적용 구간", "2억 원 이상 ~ 9억 원 미만"],
  ["상한 요율", "0.4% (4/1,000)"],
  ["산출액", "6억 × 0.4% = 240만 원"],
  ["한도액", "한도 없음"],
  ["최대 중개보수", "240만 원(협의 범위 내)"],
] as const;

const leaseExampleRows = [
  ["가정", "주택 전세 · 보증금 3억 · 월세 100만 원"],
  ["환산", "3억 + (100만×100) = 4억 원(5천만 이상)"],
  ["적용 구간", "1억 원 이상 ~ 6억 원 미만(임대차)"],
  ["상한 요율", "0.3%"],
  ["최대 중개보수", "4억 × 0.3% = 120만 원"],
] as const;

const includedRows = [
  ["부동산 종류", "주택·오피스텔·주택·오피스텔 외"],
  ["거래 유형", "매매·교환·임대차(전·월세)"],
  ["전·월세 환산", "보증금+월세 환산 거래금액 산정"],
  ["서울시 요율표", "2021.12.30(주택)·2015.1.6(오피스텔·기타) 고시 반영"],
] as const;

const excludedRows = [
  ["부가가치세", "중개보수와 별도 부과 가능"],
  ["실제 협의 금액", "상한 이하 협의액은 당사자 간 결정"],
  ["타 지자체 요율", "서울 외 지역은 관할 고시 확인 필요"],
  ["복합 건축물 안분", "주거·비주거 면적 비율별 요율 적용은 별도"],
  ["분양권·프리미엄", "납입금+프리미엄 산정 등 세부 규정"],
] as const;

const houseSaleRateRows = [
  ["5천만 원 미만", "0.6% (6/1,000)", "25만 원"],
  ["5천만 원 이상 ~ 2억 원 미만", "0.5% (5/1,000)", "80만 원"],
  ["2억 원 이상 ~ 9억 원 미만", "0.4% (4/1,000)", "한도 없음"],
  ["9억 원 이상 ~ 12억 원 미만", "0.5% (5/1,000)", "한도 없음"],
  ["12억 원 이상 ~ 15억 원 미만", "0.6% (6/1,000)", "한도 없음"],
  ["15억 원 이상", "0.7% (7/1,000)", "한도 없음"],
] as const;

const houseLeaseRateRows = [
  ["5천만 원 미만", "0.5% (5/1,000)", "20만 원"],
  ["5천만 원 이상 ~ 1억 원 미만", "0.4% (4/1,000)", "30만 원"],
  ["1억 원 이상 ~ 6억 원 미만", "0.3% (3/1,000)", "한도 없음"],
  ["6억 원 이상 ~ 12억 원 미만", "0.4% (4/1,000)", "한도 없음"],
  ["12억 원 이상 ~ 15억 원 미만", "0.5% (5/1,000)", "한도 없음"],
  ["15억 원 이상", "0.6% (6/1,000)", "한도 없음"],
] as const;

const applicationCriteria = [
  "중개보수는 거래당사자와 개업공인중개사가 협의하여 거래금액에 요율을 곱한 금액 범위에서 정하되, 법정 상한을 초과할 수 없습니다.",
  "지급 시기는 당사자 간 협약이 우선하며, 협약이 없으면 거래대금 지급이 완료된 때에 지급합니다.",
  "월세가 있는 임대차는 거래금액을 보증금 + (월세 × 100)으로 산정하되, 그 합이 5천만 원 미만이면 보증금 + (월세 × 70)으로 다시 산정합니다.",
  "건축물이 주거와 비주거에 복합된 경우 주거 전용면적 합이 2분의 1 이상이면 주택 요율, 미만이면 비주택 요율이 적용됩니다.",
  "분양권 등의 거래금액은 거래일까지 실제 납입한 금액(대출 포함)과 프리미엄을 합한 금액으로 합니다.",
  "부가가치세는 중개보수와 별개로 부과될 수 있습니다.",
  "주택·오피스텔 외 부동산은 법정 범위 안에서 중개보수 요율표를 게시해야 합니다.",
] as const;

const notes = [
  "주택·오피스텔·기타 부동산과 매매·임대차 유형을 선택해 거래금액 구간별 최대 중개보수를 확인할 수 있습니다.",
  "주택 임대차는 보증금과 월세를 입력하면 전·월세 환산 거래금액을 자동 산정합니다.",
  "본 계산기는 서울특별시 고시 요율표를 기준으로 하며, 다른 지역은 관할 지자체 최신 고시를 확인해야 합니다.",
  "산출액은 법정 상한이며, 실제 지급액은 당사자 협의 범위 내에서 정해집니다.",
  "부가가치세·복합 건축물 안분·분양권 프리미엄 산정 등은 본 화면에 포함되지 않을 수 있습니다.",
] as const;

export function BrokerageFeeCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="중개보수 산정 참고"
      summary="중개보수는 거래금액에 구간별 상한요율을 곱하고, 한도액이 있으면 그 이내로 산출됩니다. 아래는 본 계산기 산식과 서울특별시 요율표를 요약한 참고용입니다."
      footer="요율표는 고시 내용을 사용자가 빠르게 대조할 수 있도록 정리한 것입니다. 용어·구간 해석은 관할 지자체 및 최신 고시를 확인하세요."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="중개보수 산출 순서"
          headers={["단계", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[640px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={2} title="계산 예시 (참고)">
        <CalculatorReferenceTable
          caption="주택 매매 6억 원 중개보수 예시"
          headers={["항목", "내용"]}
          rows={exampleRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">전·월세 환산 예시</p>
        <CalculatorReferenceTable
          caption="전·월세 환산 중개보수 예시"
          headers={["항목", "내용"]}
          rows={leaseExampleRows}
          minWidth="min-w-[480px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={3} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="본 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable
          caption="본 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>


      <CalculatorReferenceSection number={4} title="법령·세율·요율 기준표">
        <p className="text-muted-foreground text-xs leading-relaxed">
          주택 요율은 2021년 12월 30일 기준, 오피스텔·주택 외는 2015년 1월 6일 기준 고시를 반영했습니다.
        </p>
        <p className="text-muted-foreground mt-4 text-xs font-medium">1. 주택 — 매매·교환</p>
        <CalculatorReferenceTable
          caption="주택 매매·교환 상한 요율"
          headers={["거래금액", "상한 요율", "한도액"]}
          rows={houseSaleRateRows}
          minWidth="min-w-[720px]"
          lastColumnRight
        />
        <p className="text-muted-foreground mt-4 text-xs font-medium">2. 주택 — 임대차 등 (매매·교환 제외)</p>
        <CalculatorReferenceTable
          caption="주택 임대차 상한 요율"
          headers={["거래금액", "상한 요율", "한도액"]}
          rows={houseLeaseRateRows}
          minWidth="min-w-[720px]"
          lastColumnRight
        />
        <p className="text-muted-foreground mt-4 text-xs font-medium">3. 오피스텔</p>
        <div className="overflow-auto rounded-md border">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <caption className="sr-only">오피스텔 중개보수 상한 요율</caption>
            <thead className="bg-muted/50 border-b">
              <tr>
                <th scope="col" className="p-2 text-left font-medium">
                  대상
                </th>
                <th scope="col" className="p-2 text-left font-medium">
                  거래 유형
                </th>
                <th scope="col" className="p-2 text-right font-medium">
                  상한 요율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b transition-colors duration-150 ease-out hover:bg-primary/10 dark:hover:bg-primary/20">
                <td className="p-2" rowSpan={2}>
                  전용 85㎡ 이하, 주방·화장실·욕실 등
                </td>
                <td className="p-2">매매·교환</td>
                <td className="p-2 text-right">0.5% (5/1,000)</td>
              </tr>
              <tr className="border-b transition-colors duration-150 ease-out hover:bg-primary/10 dark:hover:bg-primary/20">
                <td className="p-2">임대차 등</td>
                <td className="p-2 text-right">0.4% (4/1,000)</td>
              </tr>
              <tr className="transition-colors duration-150 ease-out hover:bg-primary/10 dark:hover:bg-primary/20">
                <td className="p-2">그 외 (85㎡ 초과 또는 시설 미비 등)</td>
                <td className="p-2">매매·교환·임대차 등</td>
                <td className="p-2 text-right">0.9% (9/1,000)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground mt-4 text-xs font-medium">4. 주택·오피스텔 외 (토지, 상가 등)</p>
        <CalculatorReferenceTable
          caption="주택·오피스텔 외 상한 요율"
          headers={["거래 유형", "상한 요율"]}
          rows={[["매매·교환·임대차 등", "거래금액의 0.9% (9/1,000)"]]}
          minWidth="min-w-[560px]"
          lastColumnRight
        />
        <div className="relative mt-4 overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="from-primary/15 via-primary/8 bg-gradient-to-r to-transparent px-4 py-3 sm:px-5">
            <h3 className="text-primary text-base font-semibold tracking-tight">부동산 중개보수 적용기준</h3>
            <p className="text-muted-foreground mt-1 text-xs">협의·산정·게시 등 법령상 기준을 요약했습니다.</p>
          </div>
          <ol className="list-none space-y-3 p-4 sm:p-5">
            {applicationCriteria.map((text, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="border-amber-800/25 bg-amber-100 text-amber-950 dark:bg-amber-950/45 dark:border-amber-700/40 dark:text-amber-50 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded border text-xs font-semibold">
                  {i + 1}
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-4 space-y-3 rounded-xl border p-4 sm:p-5">
          <h3 className="text-base font-semibold tracking-tight">지역별 공식 요율표 확인</h3>
          <p className="text-muted-foreground text-xs leading-relaxed">
            본 서비스는 서울특별시 기준 요율표를 바탕으로 작성되었습니다. 정확한 적용 요율은 거래 대상 부동산 소재지 관할 지자체의 공식
            요율표(최신 고시)를 확인하세요.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {brokerageRateLinks.map((item) => {
              const hasLink = item.href.trim().length > 0;
              return hasLink ? (
                <Link
                  key={item.region}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-muted/70 flex items-center justify-between rounded-md border px-3 py-2 text-sm transition-colors"
                >
                  <span>{item.region}</span>
                  <span className="text-muted-foreground text-xs">공식 사이트</span>
                </Link>
              ) : (
                <div
                  key={item.region}
                  className="bg-muted/25 flex items-center justify-between rounded-md border px-3 py-2 text-sm"
                  aria-label={`${item.region} 링크 준비중`}
                >
                  <span>{item.region}</span>
                  <span className="text-muted-foreground text-xs">링크 준비중</span>
                </div>
              );
            })}
          </div>
          <p className="text-muted-foreground text-xs">
            고시 개정 및 조례 변경으로 내용이 달라질 수 있으므로, 신고 전 반드시 해당 지자체 최신 공고를 확인하세요.
          </p>
        </div>
      </CalculatorReferenceSection>
      <CalculatorReferenceNotes number={5} notes={notes} />
    </CalculatorReferenceCard>

  );
}
