import {
  buildArticleSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildItemListSchema,
  buildOrganizationSchema,
  buildWebApplicationSchema,
  buildWebSiteSchema,
  type BreadcrumbItem,
  type WebApplicationSchemaInput,
} from "@/lib/schema-builders";
import type { FaqItem } from "@/lib/faq-data";
import { getGuideArticle } from "@/lib/guide/registry";
import { getGuideTopicFaqItems } from "@/lib/guide/topic-faq";
import { getAllTopicArticleSlugs, getGuideTopicPath, type GuideTopic } from "@/lib/guide/topics";
import { ogImageAltForPath, ogImageForPath } from "@/lib/og";
import { publisherOrganization } from "@/lib/publisher";
import {
  defaultDescription,
  loanCalculatorDescription,
  ogImageHeight,
  ogImageWidth,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { LOAN_CALCULATOR_PATH } from "@/lib/calculators";

function JsonLdScript({ data }: { data: Record<string, unknown> | readonly Record<string, unknown>[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function withSchemaContext(data: Record<string, unknown>): Record<string, unknown> {
  if ("@context" in data || "@graph" in data) return data;
  return { "@context": "https://schema.org", ...data };
}

export function MultiJsonLd({ graphs }: { graphs: Record<string, unknown>[] }) {
  if (graphs.length === 0) return null;
  if (graphs.length === 1) return <JsonLdScript data={withSchemaContext(graphs[0]!)} />;
  return <JsonLdScript data={{ "@context": "https://schema.org", "@graph": graphs }} />;
}

const organizationId = `${SITE_URL}#organization`;

const baseGraph = [
  buildOrganizationSchema({
    id: organizationId,
    name: publisherOrganization.name,
    url: publisherOrganization.url,
    logoUrl: publisherOrganization.logoUrl,
    email: publisherOrganization.email,
  }),
  buildWebSiteSchema({
    name: SITE_NAME,
    alternateName: SITE_DOMAIN,
    description: defaultDescription,
    url: SITE_URL,
    publisherId: organizationId,
  }),
];

/** layout 전역: Organization · WebSite */
export function SiteJsonLd() {
  return <MultiJsonLd graphs={baseGraph} />;
}

export function LoanCalculatorWebApplicationJsonLd() {
  return (
    <CalculatorWebApplicationJsonLd
      app={{
        name: "대출 이자 계산기",
        description: loanCalculatorDescription,
        path: LOAN_CALCULATOR_PATH,
        featureList: [
          "거치식(거치기간) 계산",
          "체증식상환 계산",
          "원리금균등상환 계산",
          "원금균등상환 계산",
          "만기일시상환 계산",
          "상환 일정표 다운로드",
        ],
      }}
    />
  );
}

export function CalculatorWebApplicationJsonLd({ app }: { app: WebApplicationSchemaInput }) {
  return (
    <MultiJsonLd
      graphs={[
        buildWebApplicationSchema({
          ...app,
          url: SITE_URL,
          publisherId: organizationId,
        }),
      ]}
    />
  );
}

export function FAQPageJsonLd({
  items,
  breadcrumbs,
}: {
  items: readonly FaqItem[];
  breadcrumbs: readonly BreadcrumbItem[];
}) {
  if (items.length === 0) return null;
  return (
    <MultiJsonLd
      graphs={[
        buildFAQPageSchema({ url: SITE_URL, items }),
        buildBreadcrumbListSchema({ url: SITE_URL, items: breadcrumbs }),
      ]}
    />
  );
}

export function GuideArticleJsonLd({
  title,
  description,
  slug,
  dateModifiedIso,
  topicLabel,
  topicId,
}: {
  title: string;
  description: string;
  slug: string;
  dateModifiedIso?: string;
  topicLabel?: string;
  topicId?: string;
}) {
  const path = `/guide/${slug}`;
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "홈", href: "/" },
    { name: "가이드", href: "/guide" },
    ...(topicLabel && topicId
      ? [{ name: `${topicLabel} 가이드`, href: getGuideTopicPath(topicId) }]
      : []),
    { name: title },
  ];

  return (
    <MultiJsonLd
      graphs={[
        buildArticleSchema({
          title,
          description,
          path,
          updatedLabel: "",
          dateModifiedIso,
          datePublishedIso: dateModifiedIso,
          url: SITE_URL,
          authorId: organizationId,
          publisherId: organizationId,
          imageUrl: `${SITE_URL}${ogImageForPath(path)}`,
          imageWidth: ogImageWidth,
          imageHeight: ogImageHeight,
          imageAlt: ogImageAltForPath(path, title),
        }),
        buildBreadcrumbListSchema({ url: SITE_URL, items: breadcrumbs }),
      ]}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: readonly BreadcrumbItem[] }) {
  return <MultiJsonLd graphs={[buildBreadcrumbListSchema({ url: SITE_URL, items })]} />;
}

export function GuideTopicHubJsonLd({ topic }: { topic: GuideTopic }) {
  const path = getGuideTopicPath(topic.id);
  const pageTitle = `${topic.label} 가이드`;
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "홈", href: "/" },
    { name: "가이드", href: "/guide" },
    { name: pageTitle },
  ];
  const listItems = getAllTopicArticleSlugs(topic)
    .map((slug) => getGuideArticle(slug))
    .filter((article): article is NonNullable<typeof article> => article != null)
    .map((article) => ({
      name: article.title,
      url: `${SITE_URL}/guide/${article.slug}`,
    }));
  const faqItems = getGuideTopicFaqItems(topic.id);

  return (
    <MultiJsonLd
      graphs={[
        buildItemListSchema({
          name: pageTitle,
          description: topic.description,
          url: `${SITE_URL}${path}`,
          items: listItems,
        }),
        ...(faqItems.length > 0 ? [buildFAQPageSchema({ url: SITE_URL, items: faqItems })] : []),
        buildBreadcrumbListSchema({ url: SITE_URL, items: breadcrumbs }),
      ]}
    />
  );
}

/** @deprecated SiteJsonLd 사용 */
export function WebSiteJsonLd() {
  return <SiteJsonLd />;
}
