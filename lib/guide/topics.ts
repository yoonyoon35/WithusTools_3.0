import { getGuideArticle, type GuideArticle } from "@/lib/guide/registry";

export type GuideTopic = {
  id: string;
  label: string;
  description: string;
  slugs: readonly string[];
};

/** 가이드 주제 분류. 새 글 추가 시 해당 주제 slugs 배열에 슬러그를 등록하세요. */
export const guideTopics: readonly GuideTopic[] = [
  {
    id: "dsr-limit",
    label: "DSR·대출 한도",
    description: "DSR 산정, 스트레스 DSR, LTV·DTI, 신용등급과 한도",
    slugs: [
      "dsr-calculation-method",
      "stress-dsr-explained",
      "ltv-dti-dsr-comparison",
      "dsr-40-mortgage-limit",
      "annual-salary-mortgage-limit-dsr",
      "credit-score-loan-rate-guide",
      "credit-score-mortgage-interest-relation-guide",
      "credit-loan-vs-mortgage-loan",
      "car-installment-dsr-mortgage-limit-impact-guide",
      "income-type-loan-limit-difference-guide",
      "multi-homeowner-loan-regulations-guide",
      "regulated-area-designation-effects-2026-guide",
      "dongtan-giheung-guri-regulated-area-ltv-2026-guide",
      "dongtan-giheung-guri-gap-investment-land-permit-2026-guide",
      "mortgage-rate-status-2026",
    ],
  },
  {
    id: "repayment-rate",
    label: "상환·금리",
    description: "원리금균등·원금균등, 거치기간, 고정·변동 금리, 중도상환",
    slugs: [
      "equal-payment-vs-equal-principal",
      "equal-payment-150-million-mortgage-interest-guide",
      "grace-period-explained",
      "variable-vs-fixed-rate-2026",
      "prepayment-fee-calculation",
      "600-million-prepayment-vs-interest-guide",
      "loan-refinancing-guide",
      "rate-reduction-request-right",
      "mortgage-maturity-extension-guide",
    ],
  },
  {
    id: "housing-loan",
    label: "주택·전세 대출",
    description: "주택담보·전세자금, 청약, 내집마련, 부대비용",
    slugs: [
      "bogeumjari-vs-didimdol",
      "first-time-homebuyer-benefits-2026",
      "housing-subscription-savings-guide",
      "jeonse-loan-types-comparison",
      "jeonse-guarantee-insurance-guide",
      "mortgage-loan-application-documents",
      "home-purchase-additional-costs-guide",
      "national-housing-bond-purchase-criteria-guide",
    ],
  },
  {
    id: "acquisition-tax",
    label: "취득세",
    description: "세율·감면·중과, 지방교육세·농어촌특별세, 납부 기한",
    slugs: [
      "acquisition-tax-rates-2026-guide",
      "first-home-acquisition-tax-amount-guide",
      "new-apartment-600-million-acquisition-tax-guide",
      "first-home-acquisition-tax-relief-guide",
      "acquisition-tax-relief-programs-2026-guide",
      "second-home-acquisition-tax-surcharge-2026-guide",
      "dongtan-giheung-guri-second-home-acquisition-tax-2026-guide",
      "second-home-acquisition-tax-exception-guide",
      "temporary-two-home-acquisition-tax-exception-guide",
      "inherited-housing-acquisition-tax-2026-guide",
      "local-education-rural-special-tax-acquisition-2026-guide",
      "apartment-villa-officetel-acquisition-tax-guide",
      "officetel-residential-vs-business-tax-guide",
      "acquisition-tax-deadline-and-penalty-guide",
      "capital-gains-surcharge-revival-2026-guide",
    ],
  },
  {
    id: "holding-tax",
    label: "보유세·종부세",
    description: "재산세·지방교육세·종합부동산세·농특세, 공시가격·기본공제·신고 일정",
    slugs: [
      "comprehensive-property-tax-overview-guide",
      "one-household-one-home-comprehensive-property-tax-amount-guide",
      "property-tax-vs-comprehensive-property-tax-fair-ratio-guide",
      "comprehensive-property-tax-fair-ratio-calculation-2026-guide",
      "holding-capital-gains-tax-increase-2026-guide",
    ],
  },
  {
    id: "brokerage",
    label: "중개보수·거래",
    description: "중개수수료 요율, 전·월세, 직거래, 분양권·재계약",
    slugs: [
      "brokerage-fee-rates-2026-guide",
      "brokerage-fee-vat-separate-guide",
      "apartment-brokerage-fee-guide",
      "jeonse-brokerage-fee-calculation-2026-guide",
      "wolse-brokerage-fee-calculation-2026-guide",
      "brokerage-fee-payment-timing-guide",
      "jeonse-renewal-brokerage-fee-guide",
      "presale-right-resale-brokerage-fee-guide",
      "brokerage-fee-income-deduction-guide",
      "direct-deal-vs-brokered-deal-guide",
      "online-direct-trade-platform-precautions-2026-guide",
      "lease-contract-without-broker-guide",
      "brokerage-accident-compensation-guide",
    ],
  },
] as const;

const topicBySlug = new Map<string, GuideTopic>(
  guideTopics.flatMap((topic) => topic.slugs.map((slug) => [slug, topic] as const)),
);

export function getGuideTopicForSlug(slug: string): GuideTopic | undefined {
  return topicBySlug.get(slug);
}

export function getRelatedGuideArticles(slug: string, limit = 5): GuideArticle[] {
  const topic = getGuideTopicForSlug(slug);
  if (!topic) return [];

  const index = topic.slugs.indexOf(slug);
  if (index === -1) return [];

  const relatedSlugs: string[] = [];
  for (let offset = 1; offset < topic.slugs.length && relatedSlugs.length < limit; offset++) {
    const candidate = topic.slugs[(index + offset) % topic.slugs.length]!;
    if (candidate !== slug) {
      relatedSlugs.push(candidate);
    }
  }

  return relatedSlugs
    .map((relatedSlug) => getGuideArticle(relatedSlug))
    .filter((article): article is GuideArticle => article != null);
}

export function getGuideTopicsWithArticles(): {
  topic: GuideTopic;
  articles: GuideArticle[];
}[] {
  return guideTopics.map((topic) => ({
    topic,
    articles: topic.slugs
      .map((slug) => getGuideArticle(slug))
      .filter((article): article is GuideArticle => article != null),
  }));
}
