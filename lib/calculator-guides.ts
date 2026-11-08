import { getCalculatorToolTitle } from "@/lib/calculators";
import { getGuideArticle, type GuideArticle } from "@/lib/guide/registry";
import { getGuideTopicForSlug } from "@/lib/guide/topics";

/** 계산기 페이지 하단「관련 가이드」에 노출할 글 슬러그. 순서대로 표시됩니다. */
export const calculatorGuideSlugs: Record<string, readonly string[]> = {
  "/loan-calculator": [
    "equal-payment-vs-equal-principal",
    "grace-period-explained",
    "graduated-repayment-interest-guide",
    "variable-vs-fixed-rate-2026",
    "mortgage-rate-status-2026",
    "credit-score-mortgage-interest-relation-guide",
    "kakao-emergency-loan-interest-guide",
    "loan-refinancing-guide",
  ],
  "/dsr-calculator": [
    "dsr-40-mortgage-limit",
    "stress-dsr-explained",
    "ltv-dti-dsr-comparison",
    "annual-salary-mortgage-limit-dsr",
    "income-type-loan-limit-difference-guide",
    "credit-loan-vs-mortgage-loan",
    "car-installment-dsr-mortgage-limit-impact-guide",
    "kb-mortgage-300-million-limit-2026-guide",
  ],
  "/dti-calculator": [
    "ltv-dti-dsr-comparison",
    "dsr-40-mortgage-limit",
    "stress-dsr-explained",
    "annual-salary-mortgage-limit-dsr",
    "income-type-loan-limit-difference-guide",
    "bogeumjari-vs-didimdol",
  ],
  "/ltv-calculator": [
    "ltv-dti-dsr-comparison",
    "regulated-area-designation-effects-2026-guide",
    "dongtan-giheung-guri-regulated-area-ltv-2026-guide",
    "multi-homeowner-loan-regulations-guide",
    "real-estate-balloon-effect-2026-guide",
    "first-time-homebuyer-benefits-2026",
    "mortgage-loan-application-documents",
    "seller-financing-private-mortgage-2026-guide",
    "auction-home-purchase-guide",
    "auction-winning-bid-mortgage-loan-guide",
  ],
  "/acquisition-tax-calculator": [
    "acquisition-tax-rates-2026-guide",
    "second-home-acquisition-tax-surcharge-2026-guide",
    "temporary-two-home-acquisition-tax-exception-guide",
    "second-home-acquisition-tax-exception-guide",
    "first-home-acquisition-tax-relief-guide",
    "acquisition-tax-relief-programs-2026-guide",
    "officetel-residential-vs-business-tax-guide",
    "new-construction-apartment-acquisition-tax-guide",
    "home-purchase-additional-costs-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
  "/farmland-acquisition-tax-calculator": [
    "acquisition-tax-rates-2026-guide",
    "local-education-rural-special-tax-acquisition-2026-guide",
    "acquisition-tax-deadline-and-penalty-guide",
    "gift-tax-overview-guide",
    "inheritance-tax-overview-guide",
  ],
  "/brokerage-fee-calculator": [
    "brokerage-fee-rates-2026-guide",
    "apartment-brokerage-fee-guide",
    "jeonse-brokerage-fee-calculation-2026-guide",
    "wolse-brokerage-fee-calculation-2026-guide",
    "jeonse-renewal-brokerage-fee-guide",
    "presale-right-resale-brokerage-fee-guide",
    "brokerage-fee-vat-separate-guide",
    "brokerage-fee-payment-timing-guide",
    "brokerage-fee-income-deduction-guide",
    "auction-vs-brokered-sale-cost-guide",
  ],
  "/prepayment-fee-calculator": [
    "prepayment-fee-calculation",
    "600-million-prepayment-vs-interest-guide",
    "loan-refinancing-guide",
    "rate-reduction-request-right",
    "mortgage-maturity-extension-guide",
  ],
  "/national-housing-bond-calculator": [
    "national-housing-bond-purchase-criteria-guide",
    "home-purchase-additional-costs-guide",
    "new-construction-apartment-acquisition-tax-guide",
    "inherited-housing-acquisition-tax-2026-guide",
    "mortgage-loan-application-documents",
  ],
  "/comprehensive-property-tax-calculator": [
    "comprehensive-property-tax-overview-guide",
    "holding-capital-gains-tax-increase-2026-guide",
    "one-household-one-home-comprehensive-property-tax-amount-guide",
    "property-tax-vs-comprehensive-property-tax-fair-ratio-guide",
    "two-vs-three-home-holding-cost-2026-guide",
    "non-resident-one-home-tax-checklist-2026-guide",
    "holding-vs-transaction-tax-guide",
  ],
  "/capital-gains-tax-calculator": [
    "capital-gains-tax-overview-guide",
    "capital-gains-tax-calculation-2026-guide",
    "one-household-one-home-capital-gains-tax-guide",
    "presale-right-capital-gains-tax-guide",
    "occupancy-right-capital-gains-tax-guide",
    "capital-gains-surcharge-revival-2026-guide",
    "non-resident-one-home-tax-checklist-2026-guide",
    "regulated-area-designation-effects-2026-guide",
  ],
  "/comprehensive-income-tax-calculator": [
    "comprehensive-income-tax-overview-guide",
    "business-expense-ratio-application-guide",
    "simple-bookkeeping-income-tax-guide",
    "sincere-filing-confirmation-guide",
    "interim-prepayment-income-tax-guide",
    "housing-rental-income-separate-taxation-guide",
    "comprehensive-income-tax-penalty-guide",
  ],
  "/inheritance-tax-calculator": [
    "inheritance-tax-overview-guide",
    "gift-tax-overview-guide",
    "inheritance-tax-filing-deadline-installment-guide",
    "inheritance-tax-funeral-expense-deduction-guide",
    "co-residence-housing-inheritance-deduction-guide",
    "inherited-housing-acquisition-tax-2026-guide",
    "local-education-rural-special-tax-acquisition-2026-guide",
    "acquisition-tax-deadline-and-penalty-guide",
    "tenant-death-lease-inheritance-guide",
  ],
};

/** 계산기 페이지 하단에 함께 노출할 다른 계산기 */
export const calculatorRelatedCalculators: Record<string, readonly string[]> = {
  "/loan-calculator": ["/dsr-calculator"],
  "/dsr-calculator": ["/ltv-calculator", "/dti-calculator"],
  "/dti-calculator": ["/dsr-calculator", "/ltv-calculator", "/loan-calculator"],
  "/ltv-calculator": ["/dsr-calculator", "/dti-calculator", "/loan-calculator"],
  "/prepayment-fee-calculator": ["/loan-calculator"],
  "/national-housing-bond-calculator": ["/acquisition-tax-calculator", "/brokerage-fee-calculator"],
  "/inheritance-tax-calculator": [
    "/acquisition-tax-calculator",
    "/capital-gains-tax-calculator",
    "/comprehensive-property-tax-calculator",
  ],
  "/acquisition-tax-calculator": [
    "/farmland-acquisition-tax-calculator",
    "/inheritance-tax-calculator",
    "/national-housing-bond-calculator",
  ],
  "/farmland-acquisition-tax-calculator": ["/acquisition-tax-calculator", "/inheritance-tax-calculator"],
  "/capital-gains-tax-calculator": ["/inheritance-tax-calculator"],
  "/comprehensive-income-tax-calculator": [
    "/capital-gains-tax-calculator",
    "/comprehensive-property-tax-calculator",
  ],
  "/comprehensive-property-tax-calculator": ["/inheritance-tax-calculator"],
};

/** 가이드 CTA에서 특정 글에만 노출할 계산기(키: 계산기 경로, 값: 허용 글 슬러그) */
const guideCalculatorRestrictions: Record<string, readonly string[]> = {
  "/farmland-acquisition-tax-calculator": [
    "acquisition-tax-rates-2026-guide",
    "local-education-rural-special-tax-acquisition-2026-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
};

/**
 * 가이드 글에서 안내할 계산기 경로.
 * 1순위: 해당 글을 「관련 가이드」로 지정한 계산기(calculatorGuideSlugs), 2순위: 글이 속한 주제의 계산기.
 */
export function getGuideCalculatorHrefs(slug: string, max = 3): string[] {
  const hrefs: string[] = [];
  const add = (href: string) => {
    if (hrefs.includes(href) || !getCalculatorToolTitle(href)) return;
    // 농지 취득세 계산기는 농지를 직접 다루는 글에만 노출(일반 취득세·상속 글에는 부적합)
    const allowed = guideCalculatorRestrictions[href];
    if (allowed && !allowed.includes(slug)) return;
    hrefs.push(href);
  };

  for (const [href, slugs] of Object.entries(calculatorGuideSlugs)) {
    if (slugs.includes(slug)) add(href);
  }
  for (const href of getGuideTopicForSlug(slug)?.calculatorHrefs ?? []) add(href);

  return hrefs.slice(0, max);
}

export function getCalculatorRelatedGuides(path: string): GuideArticle[] {
  const slugs = calculatorGuideSlugs[path];
  if (!slugs) return [];

  return slugs
    .map((slug) => getGuideArticle(slug))
    .filter((article): article is GuideArticle => article != null);
}

export function getCalculatorRelatedCalculatorHrefs(path: string): readonly string[] {
  return calculatorRelatedCalculators[path] ?? [];
}
