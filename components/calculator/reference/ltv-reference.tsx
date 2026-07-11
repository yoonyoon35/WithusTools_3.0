import Link from "next/link";
import {
  CalculatorReferenceCard,
  CalculatorReferenceNotes,
  CalculatorReferenceSection,
  CalculatorReferenceTable,
} from "@/components/calculator/reference";
import { ltvReferenceRows } from "@/lib/ltv-calculations";

const formulaRows = [
  ["LTV(%)", "(선순위 설정액 + 대출금) ÷ 담보 인정 가격 × 100"],
  ["① 적용 LTV", "규제지역·주택 보유·생애최초 조건에 따른 한도(%)"],
  ["② 설정 가능 총액", "담보 인정 가격 × 적용 LTV"],
  ["③ 신규 대출 가능액", "② − 선순위 설정액"],
  ["④ 최종(6억 캡 적용 시)", "min(③, 6억 원)"],
] as const;

const exampleRows = [
  ["담보 인정 가격", "4억 원"],
  ["적용 LTV", "70%"],
  ["선순위 설정액", "5,000만 원"],
  ["설정 가능 총액 (②)", "2억 8,000만 원"],
  ["신규 가능액 (③)", "2억 3,000만 원"],
  ["6억 캡", "미적용(③ < 6억)"],
] as const;

const includedRows = [
  ["담보 인정 가격·선순위·대출금", "LTV(%) 및 가능액 산출"],
  ["규제지역·주택 보유", "적용 LTV 한도 결정"],
  ["생애최초·수도권", "LTV 완화 조건 반영"],
  ["6억 원 캡", "은행권 주담대 최대 한도 참고값"],
] as const;

const excludedRows = [
  ["DSR·DTI·스트레스 DSR", "소득·부채 기준 한도"],
  ["고가주택·구간별 규제", "담보 가격대별 추가 LTV 제한"],
  ["대출 목적", "구입 vs 갈아타기·추가대출 등 목적별 상이"],
  ["정책금융", "디딤돌·보금자리 등 별도 LTV·한도"],
  ["전세·깡통전세", "전세 보증 등 다른 LTV 규정"],
  ["담보가 산정", "KB·감정·매매가 중 금융기관별 인정"],
] as const;

const ltvLimitRows = ltvReferenceRows.map((row) => [
  row.condition,
  row.ltv,
  row.note ?? "",
]);

const notes = [
  "담보 가격은 감정가·KB시세 등 금융기관이 인정하는 담보 가치를 원 단위로 입력합니다.",
  "선순위 설정액은 기존 근저당·선순위 채권이 LTV 한도에서 차감되는 금액입니다.",
  "생애최초 LTV 완화는 무주택자·요건 충족 시에만 적용됩니다. 실제 인정은 금융기관 심사에 따릅니다.",
  "규제지역·다주택·6·27 대책 등 정책 변경에 따라 LTV 한도는 달라질 수 있습니다.",
  "6억 원 캡은 은행권 주담대 최대 한도 참고값이며, 제2금융권·특례 상품은 별도입니다.",
  "고가주택·투기과열지구·조정대상지역 세부 규정, DSR·DTI·스트레스 DSR은 본 화면에 포함되지 않습니다.",
] as const;

export function LtvCalculatorReference() {
  return (
    <CalculatorReferenceCard
      title="LTV 산정 참고"
      summary="LTV(%) = (선순위 설정액 + 대출금) ÷ 담보 인정 가격 × 100. 아래는 본 계산기 산출 순서와 일반적인 한도를 요약한 참고용입니다."
      footer="기준표는 가이드·정책 공지를 바탕으로 사용자가 빠르게 대조할 수 있도록 정리한 참고용입니다. 실제 승인 한도는 신청 금융기관에서 확인해야 합니다."
    >
      <CalculatorReferenceSection number={1} title="본 계산기 산출 공식·순서">
        <CalculatorReferenceTable
          caption="LTV 산출 공식 및 계산 순서"
          headers={["항목", "내용"]}
          rows={formulaRows}
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection
        number={2}
        title="계산 예시 (참고)"
        subtitle="비규제지역 · 무주택(일반) · LTV 70% · 6억 캡 적용 가정"
        footnote="담보 10억·LTV 70%·선순위 없음이면 ③은 7억 원이지만, 6억 캡을 켜면 최종 가능액은 6억 원으로 줄어듭니다."
      >
        <CalculatorReferenceTable
          caption="LTV 대출 가능액 계산 예시"
          headers={["항목", "값"]}
          rows={exampleRows}
        />
      </CalculatorReferenceSection>

      <CalculatorReferenceSection
        number={3}
        title="본 계산기에 포함·미포함 항목"
        footnote={
          <>
            규제지역 여부는 조정대상지역·투기과열지구 등 금융위·지자체 공지를 확인해 입력하세요.{" "}
            <Link
              href="/guide/multi-homeowner-loan-regulations-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              다주택자 대출 규제 가이드
            </Link>
            를 함께 참고할 수 있습니다.
          </>
        }
      >
        <p className="text-muted-foreground text-xs font-medium">포함</p>
        <CalculatorReferenceTable
          caption="본 계산기 포함 항목"
          headers={["항목", "설명"]}
          rows={includedRows}
        />
        <p className="text-muted-foreground mt-3 text-xs font-medium">미포함</p>
        <CalculatorReferenceTable
          caption="LTV 계산기 미포함 항목"
          headers={["항목", "설명"]}
          rows={excludedRows}
        />
        <p className="text-muted-foreground mt-4 text-xs font-medium">흔한 오해</p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            “LTV 70%니까 집값의 70%까지 빌릴 수 있다”만 보고{" "}
            <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
              DSR
            </Link>
            ·
            <Link href="/guide/stress-dsr-explained" className="text-primary ml-1 underline-offset-4 hover:underline">
              스트레스 DSR
            </Link>
            을 확인하지 않는 경우가 많습니다. LTV·DSR·DTI 중{" "}
            <strong className="text-foreground font-medium">가장 낮은 한도</strong>가 실제 승인 한도에 가깝습니다.
          </li>
          <li>
            생애최초 LTV 완화는 체크만으로 적용되지 않습니다. 본인·배우자 무주택·분양권 이력 등{" "}
            <Link
              href="/guide/first-time-homebuyer-benefits-2026"
              className="text-primary underline-offset-4 hover:underline"
            >
              생애최초 요건
            </Link>
            을 금융기관 심사에서 별도 확인합니다.
          </li>
          <li>
            은행권 주담대 LTV와{" "}
            <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary underline-offset-4 hover:underline">
              디딤돌·보금자리
            </Link>
            등 정책상품 LTV·최대 한도(예: 2억·2.4억)는 다릅니다. 본 계산기는 은행권 주담대 간이 모델입니다.
          </li>
        </ul>
      </CalculatorReferenceSection>


      <CalculatorReferenceSection number={4} title="법령·세율·요율 기준표">
        <p className="text-muted-foreground text-xs font-medium">구분별 LTV 한도 (참고)</p>
        <CalculatorReferenceTable
          caption="구분별 LTV 한도(참고)"
          headers={["구분", "LTV 한도", "비고"]}
          rows={ltvLimitRows}
          minWidth="min-w-[560px]"
        />
      </CalculatorReferenceSection>
      <CalculatorReferenceNotes number={5} notes={notes} />
    </CalculatorReferenceCard>

  );
}
