import { ogImageAlt, ogImagePath } from "@/lib/site";

const calculatorOgSlugs = new Set([
  "loan-calculator",
  "dsr-calculator",
  "dti-calculator",
  "ltv-calculator",
  "acquisition-tax-calculator",
  "farmland-acquisition-tax-calculator",
  "brokerage-fee-calculator",
  "prepayment-fee-calculator",
  "national-housing-bond-calculator",
  "comprehensive-property-tax-calculator",
  "capital-gains-tax-calculator",
  "comprehensive-income-tax-calculator",
  "inheritance-tax-calculator",
]);

/** `lib/guide/topics.ts`의 주제 id·슬러그와 맞출 것. 가이드 본문 모듈은 가져오지 않는다. */
const topicArticleSlugs: Record<string, readonly string[]> = {
  "dsr-limit": [
    "stress-dsr-explained",
    "ltv-dti-dsr-comparison",
    "dsr-40-mortgage-limit",
    "annual-salary-mortgage-limit-dsr",
    "credit-score-mortgage-interest-relation-guide",
    "credit-loan-vs-mortgage-loan",
    "car-installment-dsr-mortgage-limit-impact-guide",
    "income-type-loan-limit-difference-guide",
    "kb-mortgage-300-million-limit-2026-guide",
    "seller-financing-private-mortgage-2026-guide",
  ],
  "regulated-area": [
    "regulated-area-designation-effects-2026-guide",
    "multi-homeowner-loan-regulations-guide",
    "real-estate-balloon-effect-2026-guide",
    "dongtan-giheung-guri-regulated-area-ltv-2026-guide",
    "gwangju-honam-semiconductor-land-permit-2026-guide",
  ],
  "repayment-rate": [
    "equal-payment-vs-equal-principal",
    "kakao-emergency-loan-interest-guide",
    "grace-period-explained",
    "graduated-repayment-interest-guide",
    "variable-vs-fixed-rate-2026",
    "mortgage-rate-status-2026",
    "prepayment-fee-calculation",
    "600-million-prepayment-vs-interest-guide",
    "loan-refinancing-guide",
    "rate-reduction-request-right",
    "mortgage-maturity-extension-guide",
  ],
  "housing-loan": [
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
  auction: [
    "auction-home-purchase-guide",
    "auction-winning-bid-mortgage-loan-guide",
    "auction-vs-brokered-sale-cost-guide",
  ],
  "acquisition-tax": [
    "acquisition-tax-rates-2026-guide",
    "new-construction-apartment-acquisition-tax-guide",
    "first-home-acquisition-tax-relief-guide",
    "acquisition-tax-relief-programs-2026-guide",
    "second-home-acquisition-tax-surcharge-2026-guide",
    "second-home-acquisition-tax-exception-guide",
    "temporary-two-home-acquisition-tax-exception-guide",
    "inherited-housing-acquisition-tax-2026-guide",
    "local-education-rural-special-tax-acquisition-2026-guide",
    "officetel-residential-vs-business-tax-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
  "capital-gains-tax": [
    "capital-gains-tax-overview-guide",
    "one-household-one-home-capital-gains-tax-guide",
    "capital-gains-tax-calculation-2026-guide",
    "presale-right-capital-gains-tax-guide",
    "occupancy-right-capital-gains-tax-guide",
    "capital-gains-surcharge-revival-2026-guide",
  ],
  "holding-tax": [
    "holding-vs-transaction-tax-guide",
    "comprehensive-property-tax-overview-guide",
    "one-household-one-home-comprehensive-property-tax-amount-guide",
    "property-tax-vs-comprehensive-property-tax-fair-ratio-guide",
    "holding-capital-gains-tax-increase-2026-guide",
    "two-vs-three-home-holding-cost-2026-guide",
    "non-resident-one-home-tax-checklist-2026-guide",
  ],
  "inheritance-tax": [
    "inheritance-tax-overview-guide",
    "gift-tax-overview-guide",
    "inheritance-tax-filing-deadline-installment-guide",
    "inheritance-tax-funeral-expense-deduction-guide",
    "co-residence-housing-inheritance-deduction-guide",
    "tenant-death-lease-inheritance-guide",
  ],
  "comprehensive-income-tax": [
    "comprehensive-income-tax-overview-guide",
    "business-expense-ratio-application-guide",
    "simple-bookkeeping-income-tax-guide",
    "sincere-filing-confirmation-guide",
    "interim-prepayment-income-tax-guide",
    "housing-rental-income-separate-taxation-guide",
    "comprehensive-income-tax-penalty-guide",
  ],
  brokerage: [
    "brokerage-fee-rates-2026-guide",
    "brokerage-fee-vat-separate-guide",
    "apartment-brokerage-fee-guide",
    "jeonse-brokerage-fee-calculation-2026-guide",
    "wolse-brokerage-fee-calculation-2026-guide",
    "brokerage-fee-payment-timing-guide",
    "jeonse-renewal-brokerage-fee-guide",
    "lease-renewal-report-confirmed-date-guide",
    "long-term-jeonse-20-year-maturity-2026-guide",
    "presale-right-resale-brokerage-fee-guide",
    "brokerage-fee-income-deduction-guide",
    "direct-deal-vs-brokered-deal-guide",
    "online-direct-trade-platform-precautions-2026-guide",
    "lease-contract-without-broker-guide",
    "brokerage-accident-compensation-guide",
  ],
};

const articleSlugToTopicId = new Map<string, string>(
  Object.entries(topicArticleSlugs).flatMap(([topicId, slugs]) => slugs.map((slug) => [slug, topicId] as const)),
);

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.replace(/\/$/, "") || "/";
}

function topicOgPath(topicId: string): string {
  return `/og/guide-${topicId}.png`;
}

/** 계산기는 전용 이미지, 가이드는 주제 허브 이미지, 그 외는 기본 OG. */
export function ogImageForPath(path: string): string {
  const normalized = normalizePath(path);
  const slug = normalized.slice(1);

  if (calculatorOgSlugs.has(slug)) return `/og/${slug}.png`;
  if (normalized === "/guide") return "/og/guide.png";

  const topicMatch = /^\/guide\/topics\/([^/]+)$/.exec(normalized);
  if (topicMatch && topicMatch[1] && topicMatch[1] in topicArticleSlugs) {
    return topicOgPath(topicMatch[1]);
  }

  const articleMatch = /^\/guide\/([^/]+)$/.exec(normalized);
  if (articleMatch?.[1] && articleMatch[1] !== "topics" && articleMatch[1] !== "page") {
    const topicId = articleSlugToTopicId.get(articleMatch[1]);
    if (topicId) return topicOgPath(topicId);
  }

  return ogImagePath;
}

export function ogImageAltForPath(path: string, title: string): string {
  const normalized = normalizePath(path);
  if (normalized === "/") return ogImageAlt;
  return title;
}
