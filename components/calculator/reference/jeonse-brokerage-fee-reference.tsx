import Link from "next/link";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";
import { brokerageRateLinks } from "@/lib/brokerage-rate-links";

const formulaRows = [
  ["① 거래금액", "전세 보증금"],
  ["② 상한요율 적용", "보증금 구간별 상한요율 × 보증금"],
  ["③ 한도액", "구간별 한도액이 있으면 min(②, 한도액) = 최대 중개보수"],
] as const;

const exampleRows = [
  ["가정", "주택 전세 · 보증금 3억 원 · 서울시 요율"],
  ["적용 구간", "1억 원 이상 ~ 6억 원 미만"],
  ["상한 요율", "0.3% (3/1,000)"],
  ["최대 중개보수", "3억 × 0.3% = 90만 원"],
  ["비고", "부가가치세 별도 · 실제 금액은 상한 이내 협의"],
] as const;

const houseLeaseRateRows = [
  ["5천만 원 미만", "0.5% (5/1,000)", "20만 원"],
  ["5천만 원 이상 ~ 1억 원 미만", "0.4% (4/1,000)", "30만 원"],
  ["1억 원 이상 ~ 6억 원 미만", "0.3% (3/1,000)", "한도 없음"],
  ["6억 원 이상 ~ 12억 원 미만", "0.4% (4/1,000)", "한도 없음"],
  ["12억 원 이상 ~ 15억 원 미만", "0.5% (5/1,000)", "한도 없음"],
  ["15억 원 이상", "0.6% (6/1,000)", "한도 없음"],
] as const;

const includedRows = [
  ["대상", "주택 전세(보증금 = 거래금액)"],
  ["요율", "서울시 주택 임대차 상한 요율"],
  ["한도액", "저가 구간 한도액 반영"],
] as const;

const excludedRows = [
  ["월세 환산", "월세가 있으면 월세 중개수수료 계산기 이용"],
  ["매매·오피스텔·상가", "일반 중개수수료 계산기 이용"],
  ["부가가치세", "중개보수와 별도"],
  ["실제 협의 금액", "상한 이하 협의액은 당사자 간 결정"],
  ["타 지자체 요율", "서울 외 지역은 관할 고시 확인"],
] as const;

const notes = [
  "전세 중개수수료는 보증금에 임대차 상한 요율을 곱한 금액 이내에서 협의합니다.",
  "보증금 6억 원 경계에서 요율이 달라지므로, 경계 금액은 구간을 한 번 더 확인하세요.",
  "재계약·갱신 시 수수료 여부는 전세 재계약 중개수수료 가이드를 참고하세요.",
  "본 계산기는 서울특별시 고시 요율표를 기준으로 하며, 다른 지역은 관할 지자체 최신 고시를 확인해야 합니다.",
] as const;

export function JeonseBrokerageFeeCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="전세 중개수수료 산정 참고"
      summary="전세는 보증금이 곧 거래금액입니다. 서울시 주택 임대차 상한 요율·한도액으로 최대 중개보수를 어림합니다."
      footer="계산 결과는 참고용입니다. 실제 중개수수료는 상한 이내 협의액이며 부가가치세는 별도입니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="전세 중개수수료 산출 순서"
          headers={["단계", "내용"]}
          rows={formulaRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={2} title="계산 예시 (참고)" subtitle="주택 전세 · 보증금 3억 원">
        <CalculatorReferenceTable
          caption="전세 3억 원 중개수수료 예시"
          headers={["항목", "금액·비고"]}
          rows={exampleRows}
          minWidth="min-w-[480px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={3} title="주택 전세(임대차) 상한 요율표">
        <CalculatorReferenceTable
          caption="서울시 주택 임대차 중개보수 상한 요율"
          headers={["보증금(거래금액)", "상한 요율", "한도액"]}
          rows={houseLeaseRateRows}
          minWidth="min-w-[560px]"
        />
        <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
          고시·요율표 원문은{" "}
          <a
            href={brokerageRateLinks[0]?.href}
            className="text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            서울특별시 중개보수 안내
          </a>
          에서 확인할 수 있습니다.
        </p>
      </CalculatorReferenceSection>

      <CalculatorReferenceSection number={4} title="본 계산기에 포함·미포함 항목">
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="전세 중개수수료 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
          minWidth="min-w-[480px]"
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable
          caption="전세 중개수수료 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceNotes number={5} notes={notes} />

      <p className="text-muted-foreground text-xs leading-relaxed">
        더 자세한 구간 예시·재계약은{" "}
        <Link
          href="/guide/jeonse-brokerage-fee-calculation-2026-guide"
          className="text-primary font-medium underline-offset-4 hover:underline"
        >
          전세 중개수수료 계산법 가이드
        </Link>
        를 참고하세요.
      </p>
    </CalculatorReferenceCard>
  );
}
