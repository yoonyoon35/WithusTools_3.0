import { getGuideArticle, type GuideArticle } from "@/lib/guide/registry";

/** 계산기 페이지 하단「관련 가이드」에 노출할 글 슬러그. 순서대로 표시됩니다. */
export const calculatorGuideSlugs: Record<string, readonly string[]> = {
  "/loan-calculator": [
    "equal-payment-vs-equal-principal",
    "grace-period-explained",
    "variable-vs-fixed-rate-2026",
    "prepayment-fee-calculation",
    "loan-refinancing-guide",
  ],
  "/dsr-calculator": [
    "kb-mortgage-300-million-limit-2026-guide",
    "real-estate-balloon-effect-2026-guide",
    "dsr-calculation-method",
    "dsr-40-mortgage-limit",
    "stress-dsr-explained",
    "ltv-dti-dsr-comparison",
    "annual-salary-mortgage-limit-dsr",
    "car-installment-dsr-mortgage-limit-impact-guide",
  ],
  "/dti-calculator": [
    "ltv-dti-dsr-comparison",
    "dsr-40-mortgage-limit",
    "stress-dsr-explained",
    "bogeumjari-vs-didimdol",
  ],
  "/ltv-calculator": [
    "kb-mortgage-300-million-limit-2026-guide",
    "real-estate-balloon-effect-2026-guide",
    "ltv-dti-dsr-comparison",
    "first-time-homebuyer-benefits-2026",
    "multi-homeowner-loan-regulations-guide",
    "stress-dsr-explained",
    "bogeumjari-vs-didimdol",
    "mortgage-loan-application-documents",
  ],
  "/acquisition-tax-calculator": [
    "acquisition-tax-rates-2026-guide",
    "new-construction-apartment-acquisition-tax-guide",
    "first-home-acquisition-tax-relief-guide",
    "second-home-acquisition-tax-surcharge-2026-guide",
    "local-education-rural-special-tax-acquisition-2026-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
  "/brokerage-fee-calculator": [
    "brokerage-fee-rates-2026-guide",
    "apartment-brokerage-fee-guide",
    "jeonse-brokerage-fee-calculation-2026-guide",
    "wolse-brokerage-fee-calculation-2026-guide",
    "direct-deal-vs-brokered-deal-guide",
    "brokerage-fee-payment-timing-guide",
  ],
  "/prepayment-fee-calculator": [
    "prepayment-fee-calculation",
    "600-million-prepayment-vs-interest-guide",
    "loan-refinancing-guide",
  ],
  "/comprehensive-property-tax-calculator": [
    "comprehensive-property-tax-overview-guide",
    "comprehensive-property-tax-fair-ratio-calculation-2026-guide",
    "one-household-one-home-comprehensive-property-tax-amount-guide",
    "property-tax-vs-comprehensive-property-tax-fair-ratio-guide",
  ],
  "/capital-gains-tax-calculator": [
    "capital-gains-tax-overview-guide",
    "capital-gains-tax-calculation-2026-guide",
    "one-household-one-home-capital-gains-tax-guide",
    "presale-right-capital-gains-tax-guide",
    "occupancy-right-capital-gains-tax-guide",
    "mokdong-redevelopment-occupancy-right-capital-gains-tax-guide",
    "capital-gains-surcharge-revival-2026-guide",
  ],
  "/inheritance-tax-calculator": [
    "inheritance-tax-overview-guide",
    "inheritance-tax-apartment-price-scenarios-guide",
    "inheritance-tax-filing-deadline-installment-guide",
    "co-residence-housing-inheritance-deduction-guide",
    "inherited-housing-acquisition-tax-2026-guide",
    "local-education-rural-special-tax-acquisition-2026-guide",
    "acquisition-tax-deadline-and-penalty-guide",
    "one-household-one-home-comprehensive-property-tax-amount-guide",
    "one-household-one-home-capital-gains-tax-guide",
  ],
};

/** 계산기 페이지 하단에 함께 노출할 다른 계산기 */
export const calculatorRelatedCalculators: Record<string, readonly string[]> = {
  "/loan-calculator": ["/dsr-calculator"],
  "/dsr-calculator": ["/ltv-calculator", "/dti-calculator"],
  "/dti-calculator": ["/dsr-calculator", "/ltv-calculator", "/loan-calculator"],
  "/ltv-calculator": ["/dsr-calculator", "/dti-calculator", "/loan-calculator"],
  "/prepayment-fee-calculator": ["/loan-calculator"],
  "/inheritance-tax-calculator": [
    "/acquisition-tax-calculator",
    "/capital-gains-tax-calculator",
    "/comprehensive-property-tax-calculator",
  ],
  "/acquisition-tax-calculator": ["/inheritance-tax-calculator"],
  "/capital-gains-tax-calculator": ["/inheritance-tax-calculator"],
  "/comprehensive-property-tax-calculator": ["/inheritance-tax-calculator"],
};

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
