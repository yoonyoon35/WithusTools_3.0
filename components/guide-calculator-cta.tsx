import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { getGuideCalculatorHrefs } from "@/lib/calculator-guides";
import { getCalculatorToolTitle } from "@/lib/calculators";

/** 글 상단: 관련 계산기 한 줄 링크 */
export function GuideCalculatorInlineLinks({ slug }: { slug: string }) {
  const hrefs = getGuideCalculatorHrefs(slug);
  if (hrefs.length === 0) return null;

  return (
    <p className="text-muted-foreground mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="inline-flex items-center gap-1.5 font-medium">
        <Calculator className="text-primary size-4" aria-hidden />
        관련 계산기
      </span>
      {hrefs.map((href) => (
        <Link key={href} href={href} className="text-primary underline-offset-4 hover:underline">
          {getCalculatorToolTitle(href) ?? href}
        </Link>
      ))}
    </p>
  );
}

/** 글 하단: 계산기 바로가기 박스 */
export function GuideCalculatorCta({ slug }: { slug: string }) {
  const hrefs = getGuideCalculatorHrefs(slug);
  if (hrefs.length === 0) return null;

  return (
    <aside
      className="border-border bg-muted/20 mt-10 rounded-xl border p-5"
      aria-labelledby="guide-calculator-cta-title"
    >
      <div className="flex items-center gap-2">
        <Calculator className="text-primary size-5" aria-hidden />
        <h2 id="guide-calculator-cta-title" className="text-lg font-semibold tracking-tight">
          내 상황으로 직접 계산해 보기
        </h2>
      </div>
      <p className="text-muted-foreground mt-1 text-sm">
        이 글의 내용을 내 조건에 맞춰 바로 계산할 수 있는 계산기입니다.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {hrefs.map((href) => (
          <li key={href}>
            <Link
              href={href}
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            >
              {getCalculatorToolTitle(href) ?? href}
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
