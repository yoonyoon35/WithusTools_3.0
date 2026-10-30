import Link from "next/link";

/** DSR·DTI 계산기에서 체증식을 고를 때 보여 주는 입력 안내 */
export function GraduatedInputGuide({ metric }: { metric: "DSR" | "DTI" }) {
  return (
    <div className="border-border bg-muted/30 text-muted-foreground space-y-1 rounded-md border px-3 py-2.5 text-xs leading-relaxed">
      <p className="text-foreground font-medium">체증식은 월 납입액을 직접 입력하세요</p>
      <ul className="list-disc space-y-1 pl-4">
        <li>「월 상환 직접」에 상환 예정표(은행 또는 한국주택금융공사 계산기)의 월 납입액을 넣어 주세요.</li>
        <li>
          체증식은 매달 납입액이 늘어납니다. 가장 적은 첫 달 금액만 넣으면 실제 심사보다 {metric}이 낮게 나올 수 있어요.
        </li>
        <li>
          심사에 쓰는 금액(첫 해·평균 등)은 금융기관마다 달라요. 대출 상담 때 확인하세요.{" "}
          <Link
            href="/guide/graduated-repayment-interest-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            체증식 설명 보기
          </Link>
        </li>
      </ul>
    </div>
  );
}
