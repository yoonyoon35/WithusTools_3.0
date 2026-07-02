import type { FaqItem } from "@/lib/faq-data";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export type WebApplicationSchemaInput = {
  name: string;
  description: string;
  path: string;
  featureList: readonly string[];
};

export type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  updatedLabel: string;
  datePublishedIso?: string;
  dateModifiedIso?: string;
};

export function buildWebSiteSchema(input: {
  name: string;
  alternateName: string;
  description: string;
  url: string;
  publisherId: string;
}) {
  return {
    "@type": "WebSite",
    "@id": `${input.url}#website`,
    name: input.name,
    alternateName: input.alternateName,
    description: input.description,
    url: input.url,
    inLanguage: "ko-KR",
    publisher: { "@id": input.publisherId },
  };
}

export function buildOrganizationSchema(input: {
  id: string;
  name: string;
  url: string;
  logoUrl: string;
  email: string;
}) {
  return {
    "@type": "Organization",
    "@id": input.id,
    name: input.name,
    url: input.url,
    logo: input.logoUrl,
    email: input.email,
  };
}

export function buildPersonSchema(input: {
  id: string;
  name: string;
  url: string;
  email: string;
  organizationId: string;
}) {
  return {
    "@type": "Person",
    "@id": input.id,
    name: input.name,
    url: input.url,
    email: input.email,
    worksFor: { "@id": input.organizationId },
  };
}

export function buildWebApplicationSchema(input: WebApplicationSchemaInput & { url: string; publisherId: string }) {
  return {
    "@type": "WebApplication",
    name: input.name,
    description: input.description,
    url: `${input.url}${input.path}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    inLanguage: "ko-KR",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    featureList: [...input.featureList],
    provider: { "@id": input.publisherId },
  };
}

export function buildArticleSchema(input: ArticleSchemaInput & { url: string; authorId: string; publisherId: string }) {
  const pageUrl = `${input.url}${input.path}`;
  const dateModified = input.dateModifiedIso ?? input.datePublishedIso;
  const datePublished = input.datePublishedIso ?? input.dateModifiedIso;

  return {
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: "ko-KR",
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: { "@id": input.authorId },
    publisher: { "@id": input.publisherId },
  };
}

export function buildFAQPageSchema(input: { url: string; items: readonly FaqItem[] }) {
  return {
    "@type": "FAQPage",
    mainEntity: input.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbListSchema(input: { url: string; items: readonly BreadcrumbItem[] }) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${input.url}${item.href === "/" ? "" : item.href}` } : {}),
    })),
  };
}
