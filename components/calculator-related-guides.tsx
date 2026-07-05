import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getCalculatorRelatedCalculatorHrefs,
  getCalculatorRelatedGuides,
} from "@/lib/calculator-guides";
import { calculatorTools } from "@/lib/calculators";
import { getGuideTopicForSlug, getGuideTopicPath } from "@/lib/guide/topics";

type CalculatorRelatedGuidesProps = {
  path: string;
};

function getCalculatorTitle(href: string): string {
  return calculatorTools.find((tool) => tool.href === href)?.title ?? href;
}

export function CalculatorRelatedGuides({ path }: CalculatorRelatedGuidesProps) {
  const guides = getCalculatorRelatedGuides(path);
  const relatedCalculators = getCalculatorRelatedCalculatorHrefs(path);
  if (guides.length === 0 && relatedCalculators.length === 0) return null;

  const topic = guides[0] ? getGuideTopicForSlug(guides[0].slug) : undefined;

  return (
    <section className="border-t py-10 sm:py-14" aria-labelledby="calculator-related-guides-title">
      <div className="mx-auto max-w-3xl px-4">
        {relatedCalculators.length > 0 ? (
          <div className="mb-10">
            <h2 className="text-lg font-semibold tracking-tight">함께 쓰는 계산기</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {relatedCalculators.map((href) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:bg-muted inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors"
                  >
                    {getCalculatorTitle(href)}
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {guides.length > 0 ? (
          <>
            <h2 id="calculator-related-guides-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
              관련 가이드
            </h2>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              계산 전후에 함께 보면 좋은 설명 글입니다.
            </p>
            <ul className="mt-6 space-y-3">
              {guides.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/guide/${article.slug}`}
                    className="hover:bg-muted/50 block rounded-lg border border-border p-4 transition-colors"
                  >
                    <span className="text-primary font-medium underline-offset-4 hover:underline">{article.title}</span>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{article.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
            {topic ? (
              <p className="mt-4">
                <Link
                  href={getGuideTopicPath(topic.id)}
                  className="text-primary text-sm font-medium underline-offset-4 hover:underline"
                >
                  「{topic.label}」 주제 글 전체 보기
                </Link>
                {topic.scenarioGroups?.[0] ? (
                  <>
                    {" · "}
                    <Link
                      href={`${getGuideTopicPath(topic.id)}#${topic.scenarioGroups[0].id}`}
                      className="text-primary text-sm font-medium underline-offset-4 hover:underline"
                    >
                      {topic.scenarioGroups[0].label}
                    </Link>
                  </>
                ) : null}
              </p>
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
}
