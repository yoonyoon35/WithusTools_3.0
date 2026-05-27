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
  JeonseGuaranteeInsuranceGuideBody,
  jeonseGuaranteeInsuranceGuideMeta,
} from "@/lib/guide/articles/jeonse-guarantee-insurance-guide";
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
  EqualPayment150MillionMortgageInterestGuideBody,
  equalPayment150MillionMortgageInterestGuideMeta,
} from "@/lib/guide/articles/equal-payment-150-million-mortgage-interest-guide";
import {
  CreditScoreMortgageInterestRelationGuideBody,
  creditScoreMortgageInterestRelationGuideMeta,
} from "@/lib/guide/articles/credit-score-mortgage-interest-relation-guide";

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
    ...jeonseGuaranteeInsuranceGuideMeta,
    Body: JeonseGuaranteeInsuranceGuideBody,
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
    ...equalPayment150MillionMortgageInterestGuideMeta,
    Body: EqualPayment150MillionMortgageInterestGuideBody,
  },
  {
    ...creditScoreMortgageInterestRelationGuideMeta,
    Body: CreditScoreMortgageInterestRelationGuideBody,
  },
];

const bySlug = new Map(guideArticles.map((a) => [a.slug, a]));

export function getGuideArticle(slug: string): GuideArticle | undefined {
  return bySlug.get(slug);
}

export function getAllGuideSlugs(): string[] {
  return guideArticles.map((a) => a.slug);
}
