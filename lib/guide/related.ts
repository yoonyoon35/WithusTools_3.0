/**
 * 글 하단「관련 가이드」의 수동 연결.
 * 값은 「이 글을 읽은 사람이 다음에 궁금해할 순서」대로 적고, 다른 주제의 글도 넣을 수 있습니다.
 * 여기서 5개에 못 미치면 같은 주제의 인접 글로 자동으로 채웁니다(lib/guide/topics.ts).
 */
export const guideFollowUpSlugs: Record<string, readonly string[]> = {
  // 취득세
  "acquisition-tax-rates-2026-guide": [
    "first-home-acquisition-tax-relief-guide",
    "acquisition-tax-relief-programs-2026-guide",
    "second-home-acquisition-tax-surcharge-2026-guide",
    "local-education-rural-special-tax-acquisition-2026-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
  "first-home-acquisition-tax-relief-guide": [
    "acquisition-tax-relief-programs-2026-guide",
    "first-time-homebuyer-benefits-2026",
    "acquisition-tax-deadline-and-penalty-guide",
    "acquisition-tax-rates-2026-guide",
  ],
  "acquisition-tax-relief-programs-2026-guide": [
    "first-home-acquisition-tax-relief-guide",
    "second-home-acquisition-tax-exception-guide",
    "temporary-two-home-acquisition-tax-exception-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
  "second-home-acquisition-tax-surcharge-2026-guide": [
    "temporary-two-home-acquisition-tax-exception-guide",
    "second-home-acquisition-tax-exception-guide",
    "multi-homeowner-loan-regulations-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
  "temporary-two-home-acquisition-tax-exception-guide": [
    "second-home-acquisition-tax-surcharge-2026-guide",
    "one-household-one-home-capital-gains-tax-guide",
    "second-home-acquisition-tax-exception-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
  "second-home-acquisition-tax-exception-guide": [
    "second-home-acquisition-tax-surcharge-2026-guide",
    "temporary-two-home-acquisition-tax-exception-guide",
    "acquisition-tax-relief-programs-2026-guide",
  ],
  "new-construction-apartment-acquisition-tax-guide": [
    "acquisition-tax-rates-2026-guide",
    "home-purchase-additional-costs-guide",
    "first-home-acquisition-tax-relief-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
  "inherited-housing-acquisition-tax-2026-guide": [
    "inheritance-tax-overview-guide",
    "co-residence-housing-inheritance-deduction-guide",
    "one-household-one-home-capital-gains-tax-guide",
    "acquisition-tax-deadline-and-penalty-guide",
    "local-education-rural-special-tax-acquisition-2026-guide",
  ],
  "local-education-rural-special-tax-acquisition-2026-guide": [
    "acquisition-tax-rates-2026-guide",
    "new-construction-apartment-acquisition-tax-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
  "officetel-residential-vs-business-tax-guide": [
    "acquisition-tax-rates-2026-guide",
    "second-home-acquisition-tax-surcharge-2026-guide",
    "housing-rental-income-separate-taxation-guide",
    "acquisition-tax-deadline-and-penalty-guide",
  ],
  "acquisition-tax-deadline-and-penalty-guide": [
    "acquisition-tax-rates-2026-guide",
    "acquisition-tax-relief-programs-2026-guide",
    "home-purchase-additional-costs-guide",
    "national-housing-bond-purchase-criteria-guide",
  ],

  // 양도소득세
  "capital-gains-tax-overview-guide": [
    "one-household-one-home-capital-gains-tax-guide",
    "capital-gains-tax-calculation-2026-guide",
    "capital-gains-surcharge-revival-2026-guide",
    "holding-vs-transaction-tax-guide",
  ],
  "one-household-one-home-capital-gains-tax-guide": [
    "capital-gains-tax-calculation-2026-guide",
    "temporary-two-home-acquisition-tax-exception-guide",
    "non-resident-one-home-tax-checklist-2026-guide",
    "occupancy-right-capital-gains-tax-guide",
  ],
  "capital-gains-tax-calculation-2026-guide": [
    "one-household-one-home-capital-gains-tax-guide",
    "capital-gains-surcharge-revival-2026-guide",
    "presale-right-capital-gains-tax-guide",
    "occupancy-right-capital-gains-tax-guide",
  ],
  "presale-right-capital-gains-tax-guide": [
    "occupancy-right-capital-gains-tax-guide",
    "capital-gains-surcharge-revival-2026-guide",
    "capital-gains-tax-calculation-2026-guide",
    "presale-right-resale-brokerage-fee-guide",
  ],
  "occupancy-right-capital-gains-tax-guide": [
    "presale-right-capital-gains-tax-guide",
    "one-household-one-home-capital-gains-tax-guide",
    "capital-gains-tax-calculation-2026-guide",
  ],
  "capital-gains-surcharge-revival-2026-guide": [
    "multi-homeowner-loan-regulations-guide",
    "regulated-area-designation-effects-2026-guide",
    "two-vs-three-home-holding-cost-2026-guide",
    "capital-gains-tax-calculation-2026-guide",
  ],

  // 보유세·종부세
  "holding-vs-transaction-tax-guide": [
    "comprehensive-property-tax-overview-guide",
    "capital-gains-tax-overview-guide",
    "two-vs-three-home-holding-cost-2026-guide",
  ],
  "comprehensive-property-tax-overview-guide": [
    "one-household-one-home-comprehensive-property-tax-amount-guide",
    "property-tax-vs-comprehensive-property-tax-fair-ratio-guide",
    "holding-capital-gains-tax-increase-2026-guide",
    "two-vs-three-home-holding-cost-2026-guide",
  ],
  "one-household-one-home-comprehensive-property-tax-amount-guide": [
    "property-tax-vs-comprehensive-property-tax-fair-ratio-guide",
    "non-resident-one-home-tax-checklist-2026-guide",
    "comprehensive-property-tax-overview-guide",
  ],
  "property-tax-vs-comprehensive-property-tax-fair-ratio-guide": [
    "one-household-one-home-comprehensive-property-tax-amount-guide",
    "holding-capital-gains-tax-increase-2026-guide",
    "comprehensive-property-tax-overview-guide",
  ],
  "holding-capital-gains-tax-increase-2026-guide": [
    "two-vs-three-home-holding-cost-2026-guide",
    "comprehensive-property-tax-overview-guide",
    "capital-gains-surcharge-revival-2026-guide",
  ],
  "two-vs-three-home-holding-cost-2026-guide": [
    "holding-capital-gains-tax-increase-2026-guide",
    "non-resident-one-home-tax-checklist-2026-guide",
    "capital-gains-surcharge-revival-2026-guide",
    "comprehensive-property-tax-overview-guide",
  ],
  "non-resident-one-home-tax-checklist-2026-guide": [
    "one-household-one-home-capital-gains-tax-guide",
    "one-household-one-home-comprehensive-property-tax-amount-guide",
    "holding-vs-transaction-tax-guide",
  ],

  // 상속세
  "inheritance-tax-overview-guide": [
    "inheritance-tax-filing-deadline-installment-guide",
    "inheritance-tax-funeral-expense-deduction-guide",
    "co-residence-housing-inheritance-deduction-guide",
    "gift-tax-overview-guide",
    "inherited-housing-acquisition-tax-2026-guide",
  ],
  "gift-tax-overview-guide": [
    "inheritance-tax-overview-guide",
    "inheritance-tax-filing-deadline-installment-guide",
    "acquisition-tax-rates-2026-guide",
  ],
  "inheritance-tax-filing-deadline-installment-guide": [
    "inheritance-tax-funeral-expense-deduction-guide",
    "inheritance-tax-overview-guide",
    "co-residence-housing-inheritance-deduction-guide",
    "inherited-housing-acquisition-tax-2026-guide",
  ],
  "inheritance-tax-funeral-expense-deduction-guide": [
    "inheritance-tax-overview-guide",
    "inheritance-tax-filing-deadline-installment-guide",
    "co-residence-housing-inheritance-deduction-guide",
  ],
  "co-residence-housing-inheritance-deduction-guide": [
    "inheritance-tax-overview-guide",
    "inherited-housing-acquisition-tax-2026-guide",
    "one-household-one-home-capital-gains-tax-guide",
  ],
  "tenant-death-lease-inheritance-guide": [
    "inheritance-tax-overview-guide",
    "lease-renewal-report-confirmed-date-guide",
    "jeonse-guarantee-insurance-guide",
    "inheritance-tax-filing-deadline-installment-guide",
  ],

  // 종합소득세
  "comprehensive-income-tax-overview-guide": [
    "business-expense-ratio-application-guide",
    "simple-bookkeeping-income-tax-guide",
    "sincere-filing-confirmation-guide",
    "interim-prepayment-income-tax-guide",
    "housing-rental-income-separate-taxation-guide",
  ],
  "business-expense-ratio-application-guide": [
    "simple-bookkeeping-income-tax-guide",
    "sincere-filing-confirmation-guide",
    "comprehensive-income-tax-overview-guide",
  ],
  "simple-bookkeeping-income-tax-guide": [
    "business-expense-ratio-application-guide",
    "sincere-filing-confirmation-guide",
    "comprehensive-income-tax-penalty-guide",
  ],
  "sincere-filing-confirmation-guide": [
    "simple-bookkeeping-income-tax-guide",
    "interim-prepayment-income-tax-guide",
    "comprehensive-income-tax-penalty-guide",
  ],
  "interim-prepayment-income-tax-guide": [
    "comprehensive-income-tax-overview-guide",
    "comprehensive-income-tax-penalty-guide",
    "sincere-filing-confirmation-guide",
  ],
  "housing-rental-income-separate-taxation-guide": [
    "comprehensive-income-tax-overview-guide",
    "business-expense-ratio-application-guide",
    "simple-bookkeeping-income-tax-guide",
  ],
  "comprehensive-income-tax-penalty-guide": [
    "interim-prepayment-income-tax-guide",
    "sincere-filing-confirmation-guide",
    "comprehensive-income-tax-overview-guide",
  ],

  // 중개수수료·거래
  "brokerage-fee-rates-2026-guide": [
    "brokerage-fee-vat-separate-guide",
    "apartment-brokerage-fee-guide",
    "jeonse-brokerage-fee-calculation-2026-guide",
    "wolse-brokerage-fee-calculation-2026-guide",
    "brokerage-fee-payment-timing-guide",
  ],
  "brokerage-fee-vat-separate-guide": [
    "brokerage-fee-rates-2026-guide",
    "brokerage-fee-payment-timing-guide",
    "brokerage-fee-income-deduction-guide",
  ],
  "apartment-brokerage-fee-guide": [
    "brokerage-fee-rates-2026-guide",
    "brokerage-fee-payment-timing-guide",
    "direct-deal-vs-brokered-deal-guide",
    "brokerage-fee-vat-separate-guide",
  ],
  "jeonse-brokerage-fee-calculation-2026-guide": [
    "wolse-brokerage-fee-calculation-2026-guide",
    "jeonse-renewal-brokerage-fee-guide",
    "lease-renewal-report-confirmed-date-guide",
    "brokerage-fee-rates-2026-guide",
  ],
  "wolse-brokerage-fee-calculation-2026-guide": [
    "jeonse-brokerage-fee-calculation-2026-guide",
    "jeonse-renewal-brokerage-fee-guide",
    "lease-renewal-report-confirmed-date-guide",
  ],
  "brokerage-fee-payment-timing-guide": [
    "brokerage-fee-vat-separate-guide",
    "brokerage-accident-compensation-guide",
    "brokerage-fee-rates-2026-guide",
  ],
  "jeonse-renewal-brokerage-fee-guide": [
    "lease-renewal-report-confirmed-date-guide",
    "jeonse-brokerage-fee-calculation-2026-guide",
    "lease-contract-without-broker-guide",
  ],
  "lease-renewal-report-confirmed-date-guide": [
    "jeonse-renewal-brokerage-fee-guide",
    "jeonse-guarantee-insurance-guide",
    "tenant-death-lease-inheritance-guide",
  ],
  "long-term-jeonse-20-year-maturity-2026-guide": [
    "lease-renewal-report-confirmed-date-guide",
    "jeonse-brokerage-fee-calculation-2026-guide",
    "jeonse-guarantee-insurance-guide",
  ],
  "presale-right-resale-brokerage-fee-guide": [
    "presale-right-capital-gains-tax-guide",
    "brokerage-fee-rates-2026-guide",
    "brokerage-fee-payment-timing-guide",
  ],
  "brokerage-fee-income-deduction-guide": [
    "brokerage-fee-rates-2026-guide",
    "brokerage-fee-vat-separate-guide",
    "brokerage-fee-payment-timing-guide",
  ],
  "direct-deal-vs-brokered-deal-guide": [
    "online-direct-trade-platform-precautions-2026-guide",
    "lease-contract-without-broker-guide",
    "brokerage-accident-compensation-guide",
    "brokerage-fee-rates-2026-guide",
  ],
  "online-direct-trade-platform-precautions-2026-guide": [
    "direct-deal-vs-brokered-deal-guide",
    "lease-contract-without-broker-guide",
    "brokerage-accident-compensation-guide",
  ],
  "lease-contract-without-broker-guide": [
    "jeonse-renewal-brokerage-fee-guide",
    "lease-renewal-report-confirmed-date-guide",
    "brokerage-accident-compensation-guide",
  ],
  "brokerage-accident-compensation-guide": [
    "online-direct-trade-platform-precautions-2026-guide",
    "direct-deal-vs-brokered-deal-guide",
    "brokerage-fee-payment-timing-guide",
  ],

  // DSR·대출 한도
  "ltv-dti-dsr-comparison": [
    "dsr-40-mortgage-limit",
    "stress-dsr-explained",
    "annual-salary-mortgage-limit-dsr",
    "income-type-loan-limit-difference-guide",
    "regulated-area-designation-effects-2026-guide",
  ],
  "stress-dsr-explained": [
    "dsr-40-mortgage-limit",
    "annual-salary-mortgage-limit-dsr",
    "ltv-dti-dsr-comparison",
    "credit-loan-vs-mortgage-loan",
  ],
  "dsr-40-mortgage-limit": [
    "stress-dsr-explained",
    "annual-salary-mortgage-limit-dsr",
    "income-type-loan-limit-difference-guide",
    "car-installment-dsr-mortgage-limit-impact-guide",
  ],
  "annual-salary-mortgage-limit-dsr": [
    "income-type-loan-limit-difference-guide",
    "dsr-40-mortgage-limit",
    "car-installment-dsr-mortgage-limit-impact-guide",
    "credit-score-mortgage-interest-relation-guide",
  ],
  "credit-score-mortgage-interest-relation-guide": [
    "credit-loan-vs-mortgage-loan",
    "annual-salary-mortgage-limit-dsr",
    "rate-reduction-request-right",
  ],
  "credit-loan-vs-mortgage-loan": [
    "credit-score-mortgage-interest-relation-guide",
    "dsr-40-mortgage-limit",
    "income-type-loan-limit-difference-guide",
  ],
  "car-installment-dsr-mortgage-limit-impact-guide": [
    "dsr-40-mortgage-limit",
    "annual-salary-mortgage-limit-dsr",
    "income-type-loan-limit-difference-guide",
  ],
  "income-type-loan-limit-difference-guide": [
    "annual-salary-mortgage-limit-dsr",
    "dsr-40-mortgage-limit",
    "credit-loan-vs-mortgage-loan",
  ],
  "kb-mortgage-300-million-limit-2026-guide": [
    "regulated-area-designation-effects-2026-guide",
    "seller-financing-private-mortgage-2026-guide",
    "dsr-40-mortgage-limit",
  ],
  "seller-financing-private-mortgage-2026-guide": [
    "kb-mortgage-300-million-limit-2026-guide",
    "mortgage-loan-application-documents",
    "regulated-area-designation-effects-2026-guide",
  ],

  // 상환·금리
  "equal-payment-vs-equal-principal": [
    "grace-period-explained",
    "graduated-repayment-interest-guide",
    "variable-vs-fixed-rate-2026",
    "prepayment-fee-calculation",
    "loan-refinancing-guide",
  ],
  "grace-period-explained": [
    "equal-payment-vs-equal-principal",
    "graduated-repayment-interest-guide",
    "variable-vs-fixed-rate-2026",
  ],
  "graduated-repayment-interest-guide": [
    "equal-payment-vs-equal-principal",
    "grace-period-explained",
    "variable-vs-fixed-rate-2026",
  ],
  "variable-vs-fixed-rate-2026": [
    "mortgage-rate-status-2026",
    "loan-refinancing-guide",
    "prepayment-fee-calculation",
    "rate-reduction-request-right",
  ],
  "mortgage-rate-status-2026": [
    "variable-vs-fixed-rate-2026",
    "loan-refinancing-guide",
    "rate-reduction-request-right",
    "stress-dsr-explained",
  ],
  "prepayment-fee-calculation": [
    "600-million-prepayment-vs-interest-guide",
    "loan-refinancing-guide",
    "rate-reduction-request-right",
  ],
  "600-million-prepayment-vs-interest-guide": [
    "prepayment-fee-calculation",
    "loan-refinancing-guide",
    "equal-payment-vs-equal-principal",
  ],
  "loan-refinancing-guide": [
    "prepayment-fee-calculation",
    "rate-reduction-request-right",
    "mortgage-maturity-extension-guide",
    "variable-vs-fixed-rate-2026",
  ],
  "rate-reduction-request-right": [
    "loan-refinancing-guide",
    "credit-score-mortgage-interest-relation-guide",
    "prepayment-fee-calculation",
  ],
  "mortgage-maturity-extension-guide": [
    "loan-refinancing-guide",
    "rate-reduction-request-right",
    "dsr-40-mortgage-limit",
  ],
  "kakao-emergency-loan-interest-guide": [
    "equal-payment-vs-equal-principal",
    "credit-loan-vs-mortgage-loan",
    "loan-refinancing-guide",
  ],

  // 주택·전세 대출
  "first-time-homebuyer-benefits-2026": [
    "first-home-acquisition-tax-relief-guide",
    "bogeumjari-vs-didimdol",
    "newborn-special-loan-2026-guide",
    "housing-subscription-savings-guide",
    "ltv-dti-dsr-comparison",
  ],
  "bogeumjari-vs-didimdol": [
    "newborn-special-loan-2026-guide",
    "first-time-homebuyer-benefits-2026",
    "mortgage-loan-application-documents",
    "ltv-dti-dsr-comparison",
  ],
  "newborn-special-loan-2026-guide": [
    "bogeumjari-vs-didimdol",
    "first-time-homebuyer-benefits-2026",
    "mortgage-loan-application-documents",
  ],
  "housing-subscription-savings-guide": [
    "private-housing-subscription-eligibility-2026-guide",
    "first-time-homebuyer-benefits-2026",
    "home-purchase-additional-costs-guide",
  ],
  "private-housing-subscription-eligibility-2026-guide": [
    "housing-subscription-savings-guide",
    "first-time-homebuyer-benefits-2026",
    "home-purchase-additional-costs-guide",
  ],
  "jeonse-loan-types-comparison": [
    "jeonse-guarantee-insurance-guide",
    "jeonse-safe-trust-program-2026-guide",
    "lease-renewal-report-confirmed-date-guide",
  ],
  "jeonse-guarantee-insurance-guide": [
    "jeonse-safe-trust-program-2026-guide",
    "jeonse-loan-types-comparison",
    "lease-renewal-report-confirmed-date-guide",
  ],
  "jeonse-safe-trust-program-2026-guide": [
    "jeonse-guarantee-insurance-guide",
    "jeonse-loan-types-comparison",
    "lease-renewal-report-confirmed-date-guide",
  ],
  "mortgage-loan-application-documents": [
    "ltv-dti-dsr-comparison",
    "home-purchase-additional-costs-guide",
    "bogeumjari-vs-didimdol",
  ],
  "home-purchase-additional-costs-guide": [
    "acquisition-tax-rates-2026-guide",
    "national-housing-bond-purchase-criteria-guide",
    "brokerage-fee-rates-2026-guide",
    "mortgage-loan-application-documents",
  ],
  "national-housing-bond-purchase-criteria-guide": [
    "home-purchase-additional-costs-guide",
    "acquisition-tax-deadline-and-penalty-guide",
    "acquisition-tax-rates-2026-guide",
  ],

  // 부동산 경매
  "auction-home-purchase-guide": [
    "auction-winning-bid-mortgage-loan-guide",
    "auction-vs-brokered-sale-cost-guide",
    "acquisition-tax-rates-2026-guide",
  ],
  "auction-winning-bid-mortgage-loan-guide": [
    "auction-home-purchase-guide",
    "ltv-dti-dsr-comparison",
    "auction-vs-brokered-sale-cost-guide",
  ],
  "auction-vs-brokered-sale-cost-guide": [
    "auction-home-purchase-guide",
    "brokerage-fee-rates-2026-guide",
    "acquisition-tax-rates-2026-guide",
  ],

  // 규제지역·토지거래허가
  "regulated-area-designation-effects-2026-guide": [
    "multi-homeowner-loan-regulations-guide",
    "real-estate-balloon-effect-2026-guide",
    "dongtan-giheung-guri-regulated-area-ltv-2026-guide",
    "gwangju-honam-semiconductor-land-permit-2026-guide",
    "second-home-acquisition-tax-surcharge-2026-guide",
  ],
  "multi-homeowner-loan-regulations-guide": [
    "regulated-area-designation-effects-2026-guide",
    "second-home-acquisition-tax-surcharge-2026-guide",
    "capital-gains-surcharge-revival-2026-guide",
  ],
  "real-estate-balloon-effect-2026-guide": [
    "regulated-area-designation-effects-2026-guide",
    "dongtan-giheung-guri-regulated-area-ltv-2026-guide",
    "gwangju-honam-semiconductor-land-permit-2026-guide",
  ],
  "dongtan-giheung-guri-regulated-area-ltv-2026-guide": [
    "regulated-area-designation-effects-2026-guide",
    "real-estate-balloon-effect-2026-guide",
    "gwangju-honam-semiconductor-land-permit-2026-guide",
    "ltv-dti-dsr-comparison",
  ],
  "gwangju-honam-semiconductor-land-permit-2026-guide": [
    "dongtan-giheung-guri-regulated-area-ltv-2026-guide",
    "regulated-area-designation-effects-2026-guide",
    "real-estate-balloon-effect-2026-guide",
  ],
};
