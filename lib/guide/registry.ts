import type { ComponentType } from "react";
import { Dsr40MortgageLimitBody, dsr40MortgageLimitMeta } from "@/lib/guide/articles/dsr-40-mortgage-limit";
import { BogeumjariVsDidimdolBody, bogeumjariVsDidimdolMeta } from "@/lib/guide/articles/bogeumjari-vs-didimdol";
import { MortgageRateStatus2026Body, mortgageRateStatus2026Meta } from "@/lib/guide/articles/mortgage-rate-status-2026";
import {
  FirstTimeHomebuyerBenefits2026Body,
  firstTimeHomebuyerBenefits2026Meta,
} from "@/lib/guide/articles/first-time-homebuyer-benefits-2026";
import {
  EqualPaymentVsEqualPrincipalBody,
  equalPaymentVsEqualPrincipalMeta,
} from "@/lib/guide/articles/equal-payment-vs-equal-principal";
import { PrepaymentFeeCalculationBody, prepaymentFeeCalculationMeta } from "@/lib/guide/articles/prepayment-fee-calculation";
import {
  PrepaymentVsInterest600MillionGuideBody,
  prepaymentVsInterest600MillionGuideMeta,
} from "@/lib/guide/articles/600-million-prepayment-vs-interest-guide";
import { VariableVsFixedRate2026Body, variableVsFixedRate2026Meta } from "@/lib/guide/articles/variable-vs-fixed-rate-2026";
import {
  AnnualSalaryMortgageLimitDsrBody,
  annualSalaryMortgageLimitDsrMeta,
} from "@/lib/guide/articles/annual-salary-mortgage-limit-dsr";
import { LtvDtiDsrComparisonBody, ltvDtiDsrComparisonMeta } from "@/lib/guide/articles/ltv-dti-dsr-comparison";
import { StressDsrExplainedBody, stressDsrExplainedMeta } from "@/lib/guide/articles/stress-dsr-explained";
import { DsrCalculationMethodBody, dsrCalculationMethodMeta } from "@/lib/guide/articles/dsr-calculation-method";
import { JeonseLoanTypesComparisonBody, jeonseLoanTypesComparisonMeta } from "@/lib/guide/articles/jeonse-loan-types-comparison";
import { RateReductionRequestRightBody, rateReductionRequestRightMeta } from "@/lib/guide/articles/rate-reduction-request-right";
import { CreditLoanVsMortgageLoanBody, creditLoanVsMortgageLoanMeta } from "@/lib/guide/articles/credit-loan-vs-mortgage-loan";
import {
  MortgageLoanApplicationDocumentsBody,
  mortgageLoanApplicationDocumentsMeta,
} from "@/lib/guide/articles/mortgage-loan-application-documents";
import { GracePeriodExplainedBody, gracePeriodExplainedMeta } from "@/lib/guide/articles/grace-period-explained";
import { LoanRefinancingGuideBody, loanRefinancingGuideMeta } from "@/lib/guide/articles/loan-refinancing-guide";
import {
  CreditScoreLoanRateGuideBody,
  creditScoreLoanRateGuideMeta,
} from "@/lib/guide/articles/credit-score-loan-rate-guide";
import {
  HousingSubscriptionSavingsGuideBody,
  housingSubscriptionSavingsGuideMeta,
} from "@/lib/guide/articles/housing-subscription-savings-guide";
import {
  PrivateHousingSubscriptionEligibility2026GuideBody,
  privateHousingSubscriptionEligibility2026GuideMeta,
} from "@/lib/guide/articles/private-housing-subscription-eligibility-2026-guide";
import {
  JeonseGuaranteeInsuranceGuideBody,
  jeonseGuaranteeInsuranceGuideMeta,
} from "@/lib/guide/articles/jeonse-guarantee-insurance-guide";
import {
  JeonseSafeTrustProgram2026GuideBody,
  jeonseSafeTrustProgram2026GuideMeta,
} from "@/lib/guide/articles/jeonse-safe-trust-program-2026-guide";
import {
  MultiHomeownerLoanRegulationsGuideBody,
  multiHomeownerLoanRegulationsGuideMeta,
} from "@/lib/guide/articles/multi-homeowner-loan-regulations-guide";
import {
  IncomeTypeLoanLimitDifferenceGuideBody,
  incomeTypeLoanLimitDifferenceGuideMeta,
} from "@/lib/guide/articles/income-type-loan-limit-difference-guide";
import {
  MortgageMaturityExtensionGuideBody,
  mortgageMaturityExtensionGuideMeta,
} from "@/lib/guide/articles/mortgage-maturity-extension-guide";
import {
  HomePurchaseAdditionalCostsGuideBody,
  homePurchaseAdditionalCostsGuideMeta,
} from "@/lib/guide/articles/home-purchase-additional-costs-guide";
import {
  AcquisitionTaxRates2026GuideBody,
  acquisitionTaxRates2026GuideMeta,
} from "@/lib/guide/articles/acquisition-tax-rates-2026-guide";
import {
  FirstHomeAcquisitionTaxAmountGuideBody,
  firstHomeAcquisitionTaxAmountGuideMeta,
} from "@/lib/guide/articles/first-home-acquisition-tax-amount-guide";
import {
  TemporaryTwoHomeAcquisitionTaxExceptionGuideBody,
  temporaryTwoHomeAcquisitionTaxExceptionGuideMeta,
} from "@/lib/guide/articles/temporary-two-home-acquisition-tax-exception-guide";
import {
  SecondHomeAcquisitionTaxSurcharge2026GuideBody,
  secondHomeAcquisitionTaxSurcharge2026GuideMeta,
} from "@/lib/guide/articles/second-home-acquisition-tax-surcharge-2026-guide";
import {
  CoResidenceHousingInheritanceDeductionGuideBody,
  coResidenceHousingInheritanceDeductionGuideMeta,
} from "@/lib/guide/articles/co-residence-housing-inheritance-deduction-guide";
import {
  InheritanceTaxFuneralExpenseDeductionGuideBody,
  inheritanceTaxFuneralExpenseDeductionGuideMeta,
} from "@/lib/guide/articles/inheritance-tax-funeral-expense-deduction-guide";
import {
  InheritanceTaxApartmentPriceScenariosGuideBody,
  inheritanceTaxApartmentPriceScenariosGuideMeta,
} from "@/lib/guide/articles/inheritance-tax-apartment-price-scenarios-guide";
import {
  InheritanceTaxFilingDeadlineInstallmentGuideBody,
  inheritanceTaxFilingDeadlineInstallmentGuideMeta,
} from "@/lib/guide/articles/inheritance-tax-filing-deadline-installment-guide";
import {
  InheritanceTaxOverviewGuideBody,
  inheritanceTaxOverviewGuideMeta,
} from "@/lib/guide/articles/inheritance-tax-overview-guide";
import {
  InheritedHousingAcquisitionTax2026GuideBody,
  inheritedHousingAcquisitionTax2026GuideMeta,
} from "@/lib/guide/articles/inherited-housing-acquisition-tax-2026-guide";
import {
  LocalEducationRuralSpecialTaxAcquisition2026GuideBody,
  localEducationRuralSpecialTaxAcquisition2026GuideMeta,
} from "@/lib/guide/articles/local-education-rural-special-tax-acquisition-2026-guide";
import {
  ApartmentVillaOfficetelAcquisitionTaxGuideBody,
  apartmentVillaOfficetelAcquisitionTaxGuideMeta,
} from "@/lib/guide/articles/apartment-villa-officetel-acquisition-tax-guide";
import {
  OfficetelResidentialVsBusinessTaxGuideBody,
  officetelResidentialVsBusinessTaxGuideMeta,
} from "@/lib/guide/articles/officetel-residential-vs-business-tax-guide";
import {
  Auction500MillionTotalCostGuideBody,
  auction500MillionTotalCostGuideMeta,
} from "@/lib/guide/articles/auction-500-million-total-cost-guide";
import {
  Auction700MillionTotalCostGuideBody,
  auction700MillionTotalCostGuideMeta,
} from "@/lib/guide/articles/auction-700-million-total-cost-guide";
import {
  AuctionHomePurchaseGuideBody,
  auctionHomePurchaseGuideMeta,
} from "@/lib/guide/articles/auction-home-purchase-guide";
import {
  AuctionVsBrokeredSaleCostGuideBody,
  auctionVsBrokeredSaleCostGuideMeta,
} from "@/lib/guide/articles/auction-vs-brokered-sale-cost-guide";
import {
  AuctionWinningBidMortgageLoanGuideBody,
  auctionWinningBidMortgageLoanGuideMeta,
} from "@/lib/guide/articles/auction-winning-bid-mortgage-loan-guide";
import {
  ApartmentBrokerageFeeGuideBody,
  apartmentBrokerageFeeGuideMeta,
} from "@/lib/guide/articles/apartment-brokerage-fee-guide";
import {
  BrokerageFeeRates2026GuideBody,
  brokerageFeeRates2026GuideMeta,
} from "@/lib/guide/articles/brokerage-fee-rates-2026-guide";
import {
  JeonseBrokerageFeeCalculation2026GuideBody,
  jeonseBrokerageFeeCalculation2026GuideMeta,
} from "@/lib/guide/articles/jeonse-brokerage-fee-calculation-2026-guide";
import {
  WolseBrokerageFeeCalculation2026GuideBody,
  wolseBrokerageFeeCalculation2026GuideMeta,
} from "@/lib/guide/articles/wolse-brokerage-fee-calculation-2026-guide";
import {
  BrokerageFeePaymentTimingGuideBody,
  brokerageFeePaymentTimingGuideMeta,
} from "@/lib/guide/articles/brokerage-fee-payment-timing-guide";
import {
  DirectDealVsBrokeredDealGuideBody,
  directDealVsBrokeredDealGuideMeta,
} from "@/lib/guide/articles/direct-deal-vs-brokered-deal-guide";
import {
  OnlineDirectTradePlatformPrecautions2026GuideBody,
  onlineDirectTradePlatformPrecautions2026GuideMeta,
} from "@/lib/guide/articles/online-direct-trade-platform-precautions-2026-guide";
import {
  JeonseRenewalBrokerageFeeGuideBody,
  jeonseRenewalBrokerageFeeGuideMeta,
} from "@/lib/guide/articles/jeonse-renewal-brokerage-fee-guide";
import {
  LeaseContractWithoutBrokerGuideBody,
  leaseContractWithoutBrokerGuideMeta,
} from "@/lib/guide/articles/lease-contract-without-broker-guide";
import {
  BrokerageAccidentCompensationGuideBody,
  brokerageAccidentCompensationGuideMeta,
} from "@/lib/guide/articles/brokerage-accident-compensation-guide";
import {
  FirstHomeAcquisitionTaxReliefGuideBody,
  firstHomeAcquisitionTaxReliefGuideMeta,
} from "@/lib/guide/articles/first-home-acquisition-tax-relief-guide";
import {
  AcquisitionTaxDeadlineAndPenaltyGuideBody,
  acquisitionTaxDeadlineAndPenaltyGuideMeta,
} from "@/lib/guide/articles/acquisition-tax-deadline-and-penalty-guide";
import {
  PresaleRightResaleBrokerageFeeGuideBody,
  presaleRightResaleBrokerageFeeGuideMeta,
} from "@/lib/guide/articles/presale-right-resale-brokerage-fee-guide";
import {
  BrokerageFeeIncomeDeductionGuideBody,
  brokerageFeeIncomeDeductionGuideMeta,
} from "@/lib/guide/articles/brokerage-fee-income-deduction-guide";
import {
  AcquisitionTaxReliefPrograms2026GuideBody,
  acquisitionTaxReliefPrograms2026GuideMeta,
} from "@/lib/guide/articles/acquisition-tax-relief-programs-2026-guide";
import {
  CapitalGainsSurchargeRevival2026GuideBody,
  capitalGainsSurchargeRevival2026GuideMeta,
} from "@/lib/guide/articles/capital-gains-surcharge-revival-2026-guide";
import {
  CapitalGainsTaxOverviewGuideBody,
  capitalGainsTaxOverviewGuideMeta,
} from "@/lib/guide/articles/capital-gains-tax-overview-guide";
import {
  OneHouseholdOneHomeCapitalGainsTaxGuideBody,
  oneHouseholdOneHomeCapitalGainsTaxGuideMeta,
} from "@/lib/guide/articles/one-household-one-home-capital-gains-tax-guide";
import {
  CapitalGainsTaxCalculation2026GuideBody,
  capitalGainsTaxCalculation2026GuideMeta,
} from "@/lib/guide/articles/capital-gains-tax-calculation-2026-guide";
import {
  PresaleRightCapitalGainsTaxGuideBody,
  presaleRightCapitalGainsTaxGuideMeta,
} from "@/lib/guide/articles/presale-right-capital-gains-tax-guide";
import {
  OccupancyRightCapitalGainsTaxGuideBody,
  occupancyRightCapitalGainsTaxGuideMeta,
} from "@/lib/guide/articles/occupancy-right-capital-gains-tax-guide";
import {
  MokdongRedevelopmentOccupancyRightCapitalGainsTaxGuideBody,
  mokdongRedevelopmentOccupancyRightCapitalGainsTaxGuideMeta,
} from "@/lib/guide/articles/mokdong-redevelopment-occupancy-right-capital-gains-tax-guide";
import {
  OneHouseholdOneHomeComprehensivePropertyTaxAmountGuideBody,
  oneHouseholdOneHomeComprehensivePropertyTaxAmountGuideMeta,
} from "@/lib/guide/articles/one-household-one-home-comprehensive-property-tax-amount-guide";
import {
  PropertyTaxVsComprehensivePropertyTaxFairRatioGuideBody,
  propertyTaxVsComprehensivePropertyTaxFairRatioGuideMeta,
} from "@/lib/guide/articles/property-tax-vs-comprehensive-property-tax-fair-ratio-guide";
import {
  ComprehensivePropertyTaxOverviewGuideBody,
  comprehensivePropertyTaxOverviewGuideMeta,
} from "@/lib/guide/articles/comprehensive-property-tax-overview-guide";
import {
  ComprehensivePropertyTaxFairRatioCalculation2026GuideBody,
  comprehensivePropertyTaxFairRatioCalculation2026GuideMeta,
} from "@/lib/guide/articles/comprehensive-property-tax-fair-ratio-calculation-2026-guide";
import {
  ComprehensivePropertyTaxFairnessDebate2026GuideBody,
  comprehensivePropertyTaxFairnessDebate2026GuideMeta,
} from "@/lib/guide/articles/comprehensive-property-tax-fairness-debate-2026-guide";
import {
  UltraHighEndHomeThresholdDebate2026GuideBody,
  ultraHighEndHomeThresholdDebate2026GuideMeta,
} from "@/lib/guide/articles/ultra-high-end-home-threshold-debate-2026-guide";
import {
  HoldingCapitalGainsTaxIncrease2026GuideBody,
  holdingCapitalGainsTaxIncrease2026GuideMeta,
} from "@/lib/guide/articles/holding-capital-gains-tax-increase-2026-guide";
import {
  TwoVsThreeHomeHoldingCost2026GuideBody,
  twoVsThreeHomeHoldingCost2026GuideMeta,
} from "@/lib/guide/articles/two-vs-three-home-holding-cost-2026-guide";
import {
  KbMortgage300MillionLimit2026GuideBody,
  kbMortgage300MillionLimit2026GuideMeta,
} from "@/lib/guide/articles/kb-mortgage-300-million-limit-2026-guide";
import {
  NonResidentOneHomeTaxChecklist2026GuideBody,
  nonResidentOneHomeTaxChecklist2026GuideMeta,
} from "@/lib/guide/articles/non-resident-one-home-tax-checklist-2026-guide";
import {
  RegulatedAreaDesignationEffects2026GuideBody,
  regulatedAreaDesignationEffects2026GuideMeta,
} from "@/lib/guide/articles/regulated-area-designation-effects-2026-guide";
import {
  EqualPayment150MillionMortgageInterestGuideBody,
  equalPayment150MillionMortgageInterestGuideMeta,
} from "@/lib/guide/articles/equal-payment-150-million-mortgage-interest-guide";
import {
  CreditScoreMortgageInterestRelationGuideBody,
  creditScoreMortgageInterestRelationGuideMeta,
} from "@/lib/guide/articles/credit-score-mortgage-interest-relation-guide";
import {
  CarInstallmentDsrMortgageLimitImpactGuideBody,
  carInstallmentDsrMortgageLimitImpactGuideMeta,
} from "@/lib/guide/articles/car-installment-dsr-mortgage-limit-impact-guide";
import {
  SecondHomeAcquisitionTaxExceptionGuideBody,
  secondHomeAcquisitionTaxExceptionGuideMeta,
} from "@/lib/guide/articles/second-home-acquisition-tax-exception-guide";
import {
  NationalHousingBondPurchaseCriteriaGuideBody,
  nationalHousingBondPurchaseCriteriaGuideMeta,
} from "@/lib/guide/articles/national-housing-bond-purchase-criteria-guide";
import {
  RealEstateBalloonEffect2026GuideBody,
  realEstateBalloonEffect2026GuideMeta,
} from "@/lib/guide/articles/real-estate-balloon-effect-2026-guide";
import {
  DongtanGiheungGuriRegulatedAreaLtv2026GuideBody,
  dongtanGiheungGuriRegulatedAreaLtv2026GuideMeta,
} from "@/lib/guide/articles/dongtan-giheung-guri-regulated-area-ltv-2026-guide";
import {
  DongtanGiheungGuriGapInvestmentLandPermit2026GuideBody,
  dongtanGiheungGuriGapInvestmentLandPermit2026GuideMeta,
} from "@/lib/guide/articles/dongtan-giheung-guri-gap-investment-land-permit-2026-guide";
import {
  DongtanGiheungGuriSecondHomeAcquisitionTax2026GuideBody,
  dongtanGiheungGuriSecondHomeAcquisitionTax2026GuideMeta,
} from "@/lib/guide/articles/dongtan-giheung-guri-second-home-acquisition-tax-2026-guide";
import {
  GwangjuHonamSemiconductorLandPermit2026GuideBody,
  gwangjuHonamSemiconductorLandPermit2026GuideMeta,
} from "@/lib/guide/articles/gwangju-honam-semiconductor-land-permit-2026-guide";
import {
  BrokerageFeeVatSeparateGuideBody,
  brokerageFeeVatSeparateGuideMeta,
} from "@/lib/guide/articles/brokerage-fee-vat-separate-guide";
import {
  NewApartment600MillionAcquisitionTaxGuideBody,
  newApartment600MillionAcquisitionTaxGuideMeta,
} from "@/lib/guide/articles/new-apartment-600-million-acquisition-tax-guide";
import {
  NewApartment700MillionAcquisitionTaxGuideBody,
  newApartment700MillionAcquisitionTaxGuideMeta,
} from "@/lib/guide/articles/new-apartment-700-million-acquisition-tax-guide";
import {
  NewApartment800MillionAcquisitionTaxGuideBody,
  newApartment800MillionAcquisitionTaxGuideMeta,
} from "@/lib/guide/articles/new-apartment-800-million-acquisition-tax-guide";
import {
  NewApartment900MillionAcquisitionTaxGuideBody,
  newApartment900MillionAcquisitionTaxGuideMeta,
} from "@/lib/guide/articles/new-apartment-900-million-acquisition-tax-guide";
import {
  NewApartment1200MillionAcquisitionTaxGuideBody,
  newApartment1200MillionAcquisitionTaxGuideMeta,
} from "@/lib/guide/articles/new-apartment-1200-million-acquisition-tax-guide";
import {
  NewConstructionApartmentAcquisitionTaxGuideBody,
  newConstructionApartmentAcquisitionTaxGuideMeta,
} from "@/lib/guide/articles/new-construction-apartment-acquisition-tax-guide";
import {
  Apartment1000MillionBrokerageFeeGuideBody,
  apartment1000MillionBrokerageFeeGuideMeta,
} from "@/lib/guide/articles/apartment-1000-million-brokerage-fee-guide";
import {
  NewbornSpecialLoan2026GuideBody,
  newbornSpecialLoan2026GuideMeta,
} from "@/lib/guide/articles/newborn-special-loan-2026-guide";
import {
  HoldingVsTransactionTaxGuideBody,
  holdingVsTransactionTaxGuideMeta,
} from "@/lib/guide/articles/holding-vs-transaction-tax-guide";
import {
  LongTermJeonse20YearMaturity2026GuideBody,
  longTermJeonse20YearMaturity2026GuideMeta,
} from "@/lib/guide/articles/long-term-jeonse-20-year-maturity-2026-guide";

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  Body: ComponentType;
};

/**
 * 가이드 글을 추가할 때: articles 폴더에 본문 컴포넌트·메타를 만들고, 아래 배열에 한 줄 등록하세요.
 * 슬러그·사이트맵·/guide 목록이 모두 이 배열에서 파생됩니다.
 */
export const guideArticles: readonly GuideArticle[] = [
  {
    ...dsr40MortgageLimitMeta,
    Body: Dsr40MortgageLimitBody,
  },
  {
    ...bogeumjariVsDidimdolMeta,
    Body: BogeumjariVsDidimdolBody,
  },
  {
    ...mortgageRateStatus2026Meta,
    Body: MortgageRateStatus2026Body,
  },
  {
    ...firstTimeHomebuyerBenefits2026Meta,
    Body: FirstTimeHomebuyerBenefits2026Body,
  },
  {
    ...equalPaymentVsEqualPrincipalMeta,
    Body: EqualPaymentVsEqualPrincipalBody,
  },
  {
    ...prepaymentFeeCalculationMeta,
    Body: PrepaymentFeeCalculationBody,
  },
  {
    ...prepaymentVsInterest600MillionGuideMeta,
    Body: PrepaymentVsInterest600MillionGuideBody,
  },
  {
    ...variableVsFixedRate2026Meta,
    Body: VariableVsFixedRate2026Body,
  },
  {
    ...annualSalaryMortgageLimitDsrMeta,
    Body: AnnualSalaryMortgageLimitDsrBody,
  },
  {
    ...ltvDtiDsrComparisonMeta,
    Body: LtvDtiDsrComparisonBody,
  },
  {
    ...stressDsrExplainedMeta,
    Body: StressDsrExplainedBody,
  },
  {
    ...dsrCalculationMethodMeta,
    Body: DsrCalculationMethodBody,
  },
  {
    ...jeonseLoanTypesComparisonMeta,
    Body: JeonseLoanTypesComparisonBody,
  },
  {
    ...rateReductionRequestRightMeta,
    Body: RateReductionRequestRightBody,
  },
  {
    ...creditLoanVsMortgageLoanMeta,
    Body: CreditLoanVsMortgageLoanBody,
  },
  {
    ...mortgageLoanApplicationDocumentsMeta,
    Body: MortgageLoanApplicationDocumentsBody,
  },
  {
    ...gracePeriodExplainedMeta,
    Body: GracePeriodExplainedBody,
  },
  {
    ...loanRefinancingGuideMeta,
    Body: LoanRefinancingGuideBody,
  },
  {
    ...creditScoreLoanRateGuideMeta,
    Body: CreditScoreLoanRateGuideBody,
  },
  {
    ...housingSubscriptionSavingsGuideMeta,
    Body: HousingSubscriptionSavingsGuideBody,
  },
  {
    ...privateHousingSubscriptionEligibility2026GuideMeta,
    Body: PrivateHousingSubscriptionEligibility2026GuideBody,
  },
  {
    ...jeonseGuaranteeInsuranceGuideMeta,
    Body: JeonseGuaranteeInsuranceGuideBody,
  },
  {
    ...jeonseSafeTrustProgram2026GuideMeta,
    Body: JeonseSafeTrustProgram2026GuideBody,
  },
  {
    ...multiHomeownerLoanRegulationsGuideMeta,
    Body: MultiHomeownerLoanRegulationsGuideBody,
  },
  {
    ...incomeTypeLoanLimitDifferenceGuideMeta,
    Body: IncomeTypeLoanLimitDifferenceGuideBody,
  },
  {
    ...mortgageMaturityExtensionGuideMeta,
    Body: MortgageMaturityExtensionGuideBody,
  },
  {
    ...homePurchaseAdditionalCostsGuideMeta,
    Body: HomePurchaseAdditionalCostsGuideBody,
  },
  {
    ...auctionHomePurchaseGuideMeta,
    Body: AuctionHomePurchaseGuideBody,
  },
  {
    ...auctionWinningBidMortgageLoanGuideMeta,
    Body: AuctionWinningBidMortgageLoanGuideBody,
  },
  {
    ...auctionVsBrokeredSaleCostGuideMeta,
    Body: AuctionVsBrokeredSaleCostGuideBody,
  },
  {
    ...auction500MillionTotalCostGuideMeta,
    Body: Auction500MillionTotalCostGuideBody,
  },
  {
    ...auction700MillionTotalCostGuideMeta,
    Body: Auction700MillionTotalCostGuideBody,
  },
  {
    ...acquisitionTaxRates2026GuideMeta,
    Body: AcquisitionTaxRates2026GuideBody,
  },
  {
    ...firstHomeAcquisitionTaxAmountGuideMeta,
    Body: FirstHomeAcquisitionTaxAmountGuideBody,
  },
  {
    ...temporaryTwoHomeAcquisitionTaxExceptionGuideMeta,
    Body: TemporaryTwoHomeAcquisitionTaxExceptionGuideBody,
  },
  {
    ...secondHomeAcquisitionTaxSurcharge2026GuideMeta,
    Body: SecondHomeAcquisitionTaxSurcharge2026GuideBody,
  },
  {
    ...inheritedHousingAcquisitionTax2026GuideMeta,
    Body: InheritedHousingAcquisitionTax2026GuideBody,
  },
  {
    ...inheritanceTaxOverviewGuideMeta,
    Body: InheritanceTaxOverviewGuideBody,
  },
  {
    ...inheritanceTaxApartmentPriceScenariosGuideMeta,
    Body: InheritanceTaxApartmentPriceScenariosGuideBody,
  },
  {
    ...inheritanceTaxFilingDeadlineInstallmentGuideMeta,
    Body: InheritanceTaxFilingDeadlineInstallmentGuideBody,
  },
  {
    ...coResidenceHousingInheritanceDeductionGuideMeta,
    Body: CoResidenceHousingInheritanceDeductionGuideBody,
  },
  {
    ...inheritanceTaxFuneralExpenseDeductionGuideMeta,
    Body: InheritanceTaxFuneralExpenseDeductionGuideBody,
  },
  {
    ...localEducationRuralSpecialTaxAcquisition2026GuideMeta,
    Body: LocalEducationRuralSpecialTaxAcquisition2026GuideBody,
  },
  {
    ...apartmentVillaOfficetelAcquisitionTaxGuideMeta,
    Body: ApartmentVillaOfficetelAcquisitionTaxGuideBody,
  },
  {
    ...officetelResidentialVsBusinessTaxGuideMeta,
    Body: OfficetelResidentialVsBusinessTaxGuideBody,
  },
  {
    ...apartmentBrokerageFeeGuideMeta,
    Body: ApartmentBrokerageFeeGuideBody,
  },
  {
    ...brokerageFeeRates2026GuideMeta,
    Body: BrokerageFeeRates2026GuideBody,
  },
  {
    ...jeonseBrokerageFeeCalculation2026GuideMeta,
    Body: JeonseBrokerageFeeCalculation2026GuideBody,
  },
  {
    ...wolseBrokerageFeeCalculation2026GuideMeta,
    Body: WolseBrokerageFeeCalculation2026GuideBody,
  },
  {
    ...brokerageFeePaymentTimingGuideMeta,
    Body: BrokerageFeePaymentTimingGuideBody,
  },
  {
    ...directDealVsBrokeredDealGuideMeta,
    Body: DirectDealVsBrokeredDealGuideBody,
  },
  {
    ...onlineDirectTradePlatformPrecautions2026GuideMeta,
    Body: OnlineDirectTradePlatformPrecautions2026GuideBody,
  },
  {
    ...jeonseRenewalBrokerageFeeGuideMeta,
    Body: JeonseRenewalBrokerageFeeGuideBody,
  },
  {
    ...leaseContractWithoutBrokerGuideMeta,
    Body: LeaseContractWithoutBrokerGuideBody,
  },
  {
    ...brokerageAccidentCompensationGuideMeta,
    Body: BrokerageAccidentCompensationGuideBody,
  },
  {
    ...firstHomeAcquisitionTaxReliefGuideMeta,
    Body: FirstHomeAcquisitionTaxReliefGuideBody,
  },
  {
    ...acquisitionTaxDeadlineAndPenaltyGuideMeta,
    Body: AcquisitionTaxDeadlineAndPenaltyGuideBody,
  },
  {
    ...presaleRightResaleBrokerageFeeGuideMeta,
    Body: PresaleRightResaleBrokerageFeeGuideBody,
  },
  {
    ...brokerageFeeIncomeDeductionGuideMeta,
    Body: BrokerageFeeIncomeDeductionGuideBody,
  },
  {
    ...acquisitionTaxReliefPrograms2026GuideMeta,
    Body: AcquisitionTaxReliefPrograms2026GuideBody,
  },
  {
    ...capitalGainsSurchargeRevival2026GuideMeta,
    Body: CapitalGainsSurchargeRevival2026GuideBody,
  },
  {
    ...capitalGainsTaxOverviewGuideMeta,
    Body: CapitalGainsTaxOverviewGuideBody,
  },
  {
    ...oneHouseholdOneHomeCapitalGainsTaxGuideMeta,
    Body: OneHouseholdOneHomeCapitalGainsTaxGuideBody,
  },
  {
    ...capitalGainsTaxCalculation2026GuideMeta,
    Body: CapitalGainsTaxCalculation2026GuideBody,
  },
  {
    ...presaleRightCapitalGainsTaxGuideMeta,
    Body: PresaleRightCapitalGainsTaxGuideBody,
  },
  {
    ...occupancyRightCapitalGainsTaxGuideMeta,
    Body: OccupancyRightCapitalGainsTaxGuideBody,
  },
  {
    ...mokdongRedevelopmentOccupancyRightCapitalGainsTaxGuideMeta,
    Body: MokdongRedevelopmentOccupancyRightCapitalGainsTaxGuideBody,
  },
  {
    ...holdingCapitalGainsTaxIncrease2026GuideMeta,
    Body: HoldingCapitalGainsTaxIncrease2026GuideBody,
  },
  {
    ...twoVsThreeHomeHoldingCost2026GuideMeta,
    Body: TwoVsThreeHomeHoldingCost2026GuideBody,
  },
  {
    ...kbMortgage300MillionLimit2026GuideMeta,
    Body: KbMortgage300MillionLimit2026GuideBody,
  },
  {
    ...nonResidentOneHomeTaxChecklist2026GuideMeta,
    Body: NonResidentOneHomeTaxChecklist2026GuideBody,
  },
  {
    ...comprehensivePropertyTaxOverviewGuideMeta,
    Body: ComprehensivePropertyTaxOverviewGuideBody,
  },
  {
    ...oneHouseholdOneHomeComprehensivePropertyTaxAmountGuideMeta,
    Body: OneHouseholdOneHomeComprehensivePropertyTaxAmountGuideBody,
  },
  {
    ...propertyTaxVsComprehensivePropertyTaxFairRatioGuideMeta,
    Body: PropertyTaxVsComprehensivePropertyTaxFairRatioGuideBody,
  },
  {
    ...comprehensivePropertyTaxFairRatioCalculation2026GuideMeta,
    Body: ComprehensivePropertyTaxFairRatioCalculation2026GuideBody,
  },
  {
    ...comprehensivePropertyTaxFairnessDebate2026GuideMeta,
    Body: ComprehensivePropertyTaxFairnessDebate2026GuideBody,
  },
  {
    ...ultraHighEndHomeThresholdDebate2026GuideMeta,
    Body: UltraHighEndHomeThresholdDebate2026GuideBody,
  },
  {
    ...regulatedAreaDesignationEffects2026GuideMeta,
    Body: RegulatedAreaDesignationEffects2026GuideBody,
  },
  {
    ...equalPayment150MillionMortgageInterestGuideMeta,
    Body: EqualPayment150MillionMortgageInterestGuideBody,
  },
  {
    ...creditScoreMortgageInterestRelationGuideMeta,
    Body: CreditScoreMortgageInterestRelationGuideBody,
  },
  {
    ...carInstallmentDsrMortgageLimitImpactGuideMeta,
    Body: CarInstallmentDsrMortgageLimitImpactGuideBody,
  },
  {
    ...secondHomeAcquisitionTaxExceptionGuideMeta,
    Body: SecondHomeAcquisitionTaxExceptionGuideBody,
  },
  {
    ...nationalHousingBondPurchaseCriteriaGuideMeta,
    Body: NationalHousingBondPurchaseCriteriaGuideBody,
  },
  {
    ...newApartment600MillionAcquisitionTaxGuideMeta,
    Body: NewApartment600MillionAcquisitionTaxGuideBody,
  },
  {
    ...newConstructionApartmentAcquisitionTaxGuideMeta,
    Body: NewConstructionApartmentAcquisitionTaxGuideBody,
  },
  {
    ...newApartment700MillionAcquisitionTaxGuideMeta,
    Body: NewApartment700MillionAcquisitionTaxGuideBody,
  },
  {
    ...newApartment800MillionAcquisitionTaxGuideMeta,
    Body: NewApartment800MillionAcquisitionTaxGuideBody,
  },
  {
    ...newApartment900MillionAcquisitionTaxGuideMeta,
    Body: NewApartment900MillionAcquisitionTaxGuideBody,
  },
  {
    ...newApartment1200MillionAcquisitionTaxGuideMeta,
    Body: NewApartment1200MillionAcquisitionTaxGuideBody,
  },
  {
    ...apartment1000MillionBrokerageFeeGuideMeta,
    Body: Apartment1000MillionBrokerageFeeGuideBody,
  },
  {
    ...brokerageFeeVatSeparateGuideMeta,
    Body: BrokerageFeeVatSeparateGuideBody,
  },
  {
    ...realEstateBalloonEffect2026GuideMeta,
    Body: RealEstateBalloonEffect2026GuideBody,
  },
  {
    ...dongtanGiheungGuriRegulatedAreaLtv2026GuideMeta,
    Body: DongtanGiheungGuriRegulatedAreaLtv2026GuideBody,
  },
  {
    ...dongtanGiheungGuriGapInvestmentLandPermit2026GuideMeta,
    Body: DongtanGiheungGuriGapInvestmentLandPermit2026GuideBody,
  },
  {
    ...gwangjuHonamSemiconductorLandPermit2026GuideMeta,
    Body: GwangjuHonamSemiconductorLandPermit2026GuideBody,
  },
  {
    ...dongtanGiheungGuriSecondHomeAcquisitionTax2026GuideMeta,
    Body: DongtanGiheungGuriSecondHomeAcquisitionTax2026GuideBody,
  },
  {
    ...newbornSpecialLoan2026GuideMeta,
    Body: NewbornSpecialLoan2026GuideBody,
  },
  {
    ...holdingVsTransactionTaxGuideMeta,
    Body: HoldingVsTransactionTaxGuideBody,
  },
  {
    ...longTermJeonse20YearMaturity2026GuideMeta,
    Body: LongTermJeonse20YearMaturity2026GuideBody,
  },
];

const bySlug = new Map(guideArticles.map((a) => [a.slug, a]));

export function getGuideArticle(slug: string): GuideArticle | undefined {
  return bySlug.get(slug);
}

export function getAllGuideSlugs(): string[] {
  return guideArticles.map((a) => a.slug);
}
