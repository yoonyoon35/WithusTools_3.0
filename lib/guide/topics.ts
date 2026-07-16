import { getGuideArticle, type GuideArticle } from "@/lib/guide/registry";

export type GuideScenarioGroup = {
  id: string;
  label: string;
  description: string;
  slugs: readonly string[];
};

export type GuideTopic = {
  id: string;
  label: string;
  description: string;
  slugs: readonly string[];
  /** 주제 개요(pillar) 글 슬러그 */
  pillarSlug: string;
  /** 이 주제와 연결된 계산기 경로 */
  calculatorHrefs: readonly string[];
  /** pillar·본문 목록과 구분해 표시할 시나리오(파생) 글 묶음 */
  scenarioGroups?: readonly GuideScenarioGroup[];
};

export function getGuideTopicPath(topicId: string): string {
  return `/guide/topics/${topicId}`;
}

export function getGuideTopicById(topicId: string): GuideTopic | undefined {
  return guideTopics.find((topic) => topic.id === topicId);
}

export function getAllGuideTopicIds(): readonly string[] {
  return guideTopics.map((topic) => topic.id);
}

/** 가이드 주제 분류. 새 글 추가 시 해당 주제 slugs 배열에 슬러그를 등록하세요. */
export const guideTopics: readonly GuideTopic[] = [
  {
    id: "dsr-limit",
    label: "DSR·대출 한도",
    description: "DSR 산정, 스트레스 DSR, LTV·DTI, 신용등급과 한도",
    pillarSlug: "ltv-dti-dsr-comparison",
    calculatorHrefs: ["/dsr-calculator", "/dti-calculator", "/ltv-calculator"],
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
      "real-estate-balloon-effect-2026-guide",
      "dongtan-giheung-guri-regulated-area-ltv-2026-guide",
      "dongtan-giheung-guri-gap-investment-land-permit-2026-guide",
      "gwangju-honam-semiconductor-land-permit-2026-guide",
      "mortgage-rate-status-2026",
      "kb-mortgage-300-million-limit-2026-guide",
    ],
  },
  {
    id: "repayment-rate",
    label: "상환·금리",
    description: "원리금균등·원금균등, 거치기간, 고정·변동 금리, 중도상환",
    pillarSlug: "equal-payment-vs-equal-principal",
    calculatorHrefs: ["/loan-calculator", "/prepayment-fee-calculator"],
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
    pillarSlug: "first-time-homebuyer-benefits-2026",
    calculatorHrefs: ["/loan-calculator"],
    slugs: [
      "bogeumjari-vs-didimdol",
      "first-time-homebuyer-benefits-2026",
      "housing-subscription-savings-guide",
      "private-housing-subscription-eligibility-2026-guide",
      "jeonse-loan-types-comparison",
      "newborn-special-loan-2026-guide",
      "jeonse-guarantee-insurance-guide",
      "jeonse-safe-trust-program-2026-guide",
      "mortgage-loan-application-documents",
      "home-purchase-additional-costs-guide",
      "national-housing-bond-purchase-criteria-guide",
    ],
  },
  {
    id: "auction",
    label: "부동산 경매",
    description: "경매 절차·비용·대출, 입찰 전후 자금 계획",
    pillarSlug: "auction-home-purchase-guide",
    calculatorHrefs: ["/acquisition-tax-calculator", "/ltv-calculator", "/dsr-calculator"],
    slugs: [
      "auction-home-purchase-guide",
      "auction-winning-bid-mortgage-loan-guide",
      "auction-vs-brokered-sale-cost-guide",
    ],
    scenarioGroups: [
      {
        id: "auction-bid-price-scenarios",
        label: "낙찰가별 비용 예시",
        description: "낙찰가 5억·7억 기준 취득세·부대비용·자금 계획 추산입니다.",
        slugs: ["auction-500-million-total-cost-guide", "auction-700-million-total-cost-guide"],
      },
    ],
  },
  {
    id: "acquisition-tax",
    label: "취득세",
    description: "세율·감면·중과, 지방교육세·농어촌특별세, 납부 기한",
    pillarSlug: "acquisition-tax-rates-2026-guide",
    calculatorHrefs: ["/acquisition-tax-calculator"],
    slugs: [
      "acquisition-tax-rates-2026-guide",
      "new-construction-apartment-acquisition-tax-guide",
      "first-home-acquisition-tax-amount-guide",
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
    ],
    scenarioGroups: [
      {
        id: "new-apartment-price-scenarios",
        label: "매매가별 계산 예시",
        description: "신축 아파트 매매가(6억·7억·8억 등)별 취득세 산출 예시입니다.",
        slugs: [
          "new-apartment-600-million-acquisition-tax-guide",
          "new-apartment-700-million-acquisition-tax-guide",
          "new-apartment-800-million-acquisition-tax-guide",
          "new-apartment-900-million-acquisition-tax-guide",
          "new-apartment-1200-million-acquisition-tax-guide",
        ],
      },
    ],
  },
  {
    id: "capital-gains-tax",
    label: "양도소득세",
    description: "양도차익·1세대1주택 비과세·장기보유특별공제·다주택 중과·신고",
    pillarSlug: "capital-gains-tax-overview-guide",
    calculatorHrefs: ["/capital-gains-tax-calculator"],
    slugs: [
      "capital-gains-tax-overview-guide",
      "one-household-one-home-capital-gains-tax-guide",
      "capital-gains-tax-calculation-2026-guide",
      "presale-right-capital-gains-tax-guide",
      "occupancy-right-capital-gains-tax-guide",
      "capital-gains-surcharge-revival-2026-guide",
      "two-vs-three-home-holding-cost-2026-guide",
      "non-resident-one-home-tax-checklist-2026-guide",
      "holding-vs-transaction-tax-guide",
    ],
    scenarioGroups: [
      {
        id: "occupancy-right-regional-scenarios",
        label: "입주권 지역·시나리오",
        description: "재건축·재개발 입주권 양도를 지역·금액별로 풀어 쓴 계산 예시입니다.",
        slugs: ["mokdong-redevelopment-occupancy-right-capital-gains-tax-guide"],
      },
    ],
  },
  {
    id: "holding-tax",
    label: "보유세·종부세",
    description: "재산세·지방교육세·종합부동산세·농특세, 공시가격·기본공제·신고 일정",
    pillarSlug: "comprehensive-property-tax-overview-guide",
    calculatorHrefs: ["/comprehensive-property-tax-calculator"],
    slugs: [
      "holding-vs-transaction-tax-guide",
      "comprehensive-property-tax-overview-guide",
      "one-household-one-home-comprehensive-property-tax-amount-guide",
      "property-tax-vs-comprehensive-property-tax-fair-ratio-guide",
      "comprehensive-property-tax-fair-ratio-calculation-2026-guide",
      "holding-capital-gains-tax-increase-2026-guide",
      "two-vs-three-home-holding-cost-2026-guide",
      "non-resident-one-home-tax-checklist-2026-guide",
    ],
  },
  {
    id: "inheritance-tax",
    label: "상속세",
    description: "과세가액·상속공제·누진세율·세대생략·신고·납부",
    pillarSlug: "inheritance-tax-overview-guide",
    calculatorHrefs: ["/inheritance-tax-calculator"],
    slugs: [
      "inheritance-tax-overview-guide",
      "inheritance-tax-apartment-price-scenarios-guide",
      "inheritance-tax-filing-deadline-installment-guide",
      "inheritance-tax-funeral-expense-deduction-guide",
      "co-residence-housing-inheritance-deduction-guide",
    ],
  },
  {
    id: "brokerage",
    label: "중개수수료·거래",
    description: "중개수수료 요율, 전·월세, 직거래, 분양권·재계약",
    pillarSlug: "brokerage-fee-rates-2026-guide",
    calculatorHrefs: ["/brokerage-fee-calculator"],
    slugs: [
      "brokerage-fee-rates-2026-guide",
      "brokerage-fee-vat-separate-guide",
      "apartment-brokerage-fee-guide",
      "apartment-1000-million-brokerage-fee-guide",
      "jeonse-brokerage-fee-calculation-2026-guide",
      "wolse-brokerage-fee-calculation-2026-guide",
      "brokerage-fee-payment-timing-guide",
      "jeonse-renewal-brokerage-fee-guide",
      "long-term-jeonse-20-year-maturity-2026-guide",
      "presale-right-resale-brokerage-fee-guide",
      "brokerage-fee-income-deduction-guide",
      "direct-deal-vs-brokered-deal-guide",
      "online-direct-trade-platform-precautions-2026-guide",
      "lease-contract-without-broker-guide",
      "brokerage-accident-compensation-guide",
    ],
  },
] as const;

function getTopicSlugList(topic: GuideTopic): string[] {
  const scenarioSlugs = topic.scenarioGroups?.flatMap((group) => group.slugs) ?? [];
  const seen = new Set<string>();
  const ordered: string[] = [];

  for (const slug of [...topic.slugs, ...scenarioSlugs]) {
    if (!seen.has(slug)) {
      seen.add(slug);
      ordered.push(slug);
    }
  }

  return ordered;
}

const topicBySlug = new Map<string, GuideTopic>(
  guideTopics.flatMap((topic) => getTopicSlugList(topic).map((slug) => [slug, topic] as const)),
);

export function getGuideTopicForSlug(slug: string): GuideTopic | undefined {
  return topicBySlug.get(slug);
}

export function getTopicMainArticles(topic: GuideTopic): GuideArticle[] {
  const scenarioSlugs = new Set(topic.scenarioGroups?.flatMap((group) => group.slugs) ?? []);

  return topic.slugs
    .filter((slug) => slug !== topic.pillarSlug && !scenarioSlugs.has(slug))
    .map((slug) => getGuideArticle(slug))
    .filter((article): article is GuideArticle => article != null);
}

export function getTopicScenarioGroups(
  topic: GuideTopic,
): { group: GuideScenarioGroup; articles: GuideArticle[] }[] {
  if (!topic.scenarioGroups?.length) return [];

  return topic.scenarioGroups.map((group) => ({
    group,
    articles: group.slugs
      .map((slug) => getGuideArticle(slug))
      .filter((article): article is GuideArticle => article != null),
  }));
}

export function getTopicArticleCount(topic: GuideTopic): number {
  return getTopicSlugList(topic).length;
}

export function getAllTopicArticleSlugs(topic: GuideTopic): string[] {
  return getTopicSlugList(topic);
}

export function getRelatedGuideArticles(slug: string, limit = 5): GuideArticle[] {
  const topic = getGuideTopicForSlug(slug);
  if (!topic) return [];

  const allSlugs = getTopicSlugList(topic);
  const index = allSlugs.indexOf(slug);
  if (index === -1) return [];

  const relatedSlugs: string[] = [];
  for (let offset = 1; offset < allSlugs.length && relatedSlugs.length < limit; offset++) {
    const candidate = allSlugs[(index + offset) % allSlugs.length]!;
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
  pillar: GuideArticle | null;
  mainArticles: GuideArticle[];
  scenarioGroups: { group: GuideScenarioGroup; articles: GuideArticle[] }[];
}[] {
  return guideTopics.map((topic) => ({
    topic,
    pillar: getGuideArticle(topic.pillarSlug) ?? null,
    mainArticles: getTopicMainArticles(topic),
    scenarioGroups: getTopicScenarioGroups(topic),
  }));
}
