import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideTopicHubContent } from "@/components/guide-topic-hub-content";
import { GuideTopicHubJsonLd } from "@/components/json-ld";
import { getAllGuideTopicIds, getGuideTopicById, getGuideTopicPath } from "@/lib/guide/topics";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ topicId: string }>;
};

export function generateStaticParams() {
  return getAllGuideTopicIds().map((topicId) => ({ topicId }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topicId } = await params;
  const topic = getGuideTopicById(topicId);
  if (!topic) {
    return { title: "가이드" };
  }

  const title = `${topic.label} 가이드`;
  const description = `${topic.description}. ${topic.label} 관련 ${topic.slugs.length}편의 설명 글과 관련 계산기를 WithusTools에서 확인하세요.`;

  return createPageMetadata({
    title,
    description,
    path: getGuideTopicPath(topicId),
  });
}

export default async function GuideTopicHubPage({ params }: PageProps) {
  const { topicId } = await params;
  const topic = getGuideTopicById(topicId);
  if (!topic) {
    notFound();
  }

  return (
    <>
      <GuideTopicHubJsonLd topic={topic} />
      <GuideTopicHubContent topic={topic} />
    </>
  );
}
