import { GuideArticleCard } from "@/components/guide-article-card";
import {
  getTopicArticleCount,
  getTopicMainArticles,
  getTopicScenarioGroups,
  type GuideTopic,
} from "@/lib/guide/topics";

type GuideTopicArticleSectionsProps = {
  topic: GuideTopic;
  articlesTitle?: string;
};

export function GuideTopicArticleSections({
  topic,
  articlesTitle = "글 목록",
}: GuideTopicArticleSectionsProps) {
  const mainArticles = getTopicMainArticles(topic);
  const scenarioGroups = getTopicScenarioGroups(topic);

  return (
    <>
      <section aria-labelledby={`${topic.id}-main-articles-title`}>
        <h2 id={`${topic.id}-main-articles-title`} className="text-xl font-bold tracking-tight sm:text-2xl">
          {articlesTitle}
        </h2>
        <p className="text-muted-foreground mt-1 text-sm">{getTopicArticleCount(topic)}편</p>
        <ul className="mt-6 space-y-4">
          {mainArticles.map((article) => (
            <li key={article.slug}>
              <GuideArticleCard article={article} />
            </li>
          ))}
        </ul>
      </section>

      {scenarioGroups.map(({ group, articles }) =>
        articles.length > 0 ? (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-24 mt-12 border-t pt-10"
            aria-labelledby={`${topic.id}-${group.id}-title`}
          >
            <h2 id={`${topic.id}-${group.id}-title`} className="text-xl font-bold tracking-tight sm:text-2xl">
              {group.label}
            </h2>
            <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{group.description}</p>
            <ul className="mt-6 space-y-4">
              {articles.map((article) => (
                <li key={article.slug}>
                  <GuideArticleCard article={article} />
                </li>
              ))}
            </ul>
          </section>
        ) : null,
      )}
    </>
  );
}
