import assert from "node:assert/strict";
import {
  computeBusinessIncome,
  computeCalculatedTax,
  applyIncomeLosses,
  computeChildTaxCredit,
  computeComprehensiveIncomeTax,
  computePensionAccountCredit,
  computeInterimNotice,
  computePersonalDeduction,
  emptyPenalties,
  withholdingFromServiceRevenue,
} from "../lib/comprehensive-income-tax-calculations.ts";

const rate = computeCalculatedTax(30_000_000, "2023-2025");
assert.equal(rate.tax, 3_240_000);
assert.equal(rate.rate, 0.15);
assert.equal(rate.progressiveDeduction, 1_260_000);

const boundary = computeCalculatedTax(14_000_000, "2023-2025");
assert.equal(boundary.tax, 840_000);
const next = computeCalculatedTax(14_000_001, "2023-2025");
assert.equal(next.tax, 840_000);

const visit = computeBusinessIncome({
  method: "simple",
  revenue: 45_000_000,
  simplePercent: 75,
  excessSimplePercent: 65,
  personalServiceSplit: true,
  jobStabilityFund: 0,
  selfOwned: false,
  selfRateExcluded: false,
  disabledOperator: false,
});
assert.equal(visit.income, 11_750_000);

const disabled = computeBusinessIncome({
  method: "simple",
  revenue: 1_000_000,
  simplePercent: 90.3,
  excessSimplePercent: 90.3,
  personalServiceSplit: false,
  jobStabilityFund: 0,
  selfOwned: false,
  selfRateExcluded: false,
  disabledOperator: true,
});
assert.equal(disabled.income, 78_000);

const maker = computeBusinessIncome({
  method: "standard",
  revenue: 120_000_000,
  standardPercent: 20,
  simplePercent: 75,
  majorExpenses: 68_000_000,
  openingInventoryMajor: 0,
  closingInventoryMajor: 0,
  duty: "double-entry",
  multiplierPeriodId: "2020-2027",
  selfOwned: false,
  selfRateExcluded: false,
});
assert.equal(maker.income, 40_000_000);

const form = computeBusinessIncome({
  method: "standard",
  revenue: 70_000_000,
  standardPercent: 11.4,
  simplePercent: 86,
  majorExpenses: 45_000_000,
  openingInventoryMajor: 0,
  closingInventoryMajor: 0,
  duty: "simple-book",
  multiplierPeriodId: "2020-2027",
  selfOwned: false,
  selfRateExcluded: false,
});
assert.equal(form.income, 17_020_000);

const other = computeComprehensiveIncomeTax({
  year: "2023-2025",
  useDirectTaxBase: false,
  directTaxBase: 0,
  interestIncome: 0,
  dividendIncome: 0,
  wageIncome: 0,
  pensionIncome: 0,
  business: { method: "amount", income: 0 },
  other: { method: "ratio", income: 0, gross: 8_000_000, expensePercent: 60 },
  privatePensionSeparate: false,
  privatePensionAmount: 0,
  personal: {
    includeSelf: false,
    spouse: false,
    dependentCount: 0,
    elderlyCount: 0,
    disabledCount: 0,
    woman: false,
    singleParent: false,
  },
  childCreditCount: 0,
  standardTaxCredit: false,
  sincereBusiness: false,
  incomeDeductions: 0,
  taxCredits: 0,
  withholdingIncomeTax: 0,
  interimPrepayment: 0,
  occasionalAssessment: 0,
  penalties: emptyPenalties(),
});
assert.equal(other.otherIncome, 3_200_000);
assert.equal(other.otherIncomeSeparated, false);

const smallOtherInput = {
  year: "2023-2025" as const,
  useDirectTaxBase: false,
  directTaxBase: 0,
  interestIncome: 0,
  dividendIncome: 0,
  wageIncome: 45_000_000,
  pensionIncome: 0,
  business: { method: "amount" as const, income: 0 },
  rentalIncome: 0,
  rentalLossCarryforward: 0,
  otherLossCarryforward: 0,
  other: { method: "amount" as const, income: 2_000_000, gross: 0, expensePercent: 0 },
  privatePensionSeparate: false,
  privatePensionAmount: 0,
  personal: {
    includeSelf: false,
    spouse: false,
    dependentCount: 0,
    elderlyCount: 0,
    disabledCount: 0,
    woman: false,
    singleParent: false,
  },
  childCreditCount: 0,
  standardTaxCredit: false,
  sincereBusiness: false,
  pensionSaving: 0,
  retirementPension: 0,
  incomeDeductions: 0,
  taxCredits: 0,
  withholdingIncomeTax: 0,
  interimPrepayment: 0,
  occasionalAssessment: 0,
  penalties: emptyPenalties(),
};
const smallOther = computeComprehensiveIncomeTax(smallOtherInput);
assert.equal(smallOther.otherIncomeSeparated, true);
assert.equal(smallOther.comprehensiveIncome, 45_000_000);
const smallOtherIncluded = computeComprehensiveIncomeTax({
  ...smallOtherInput,
  other: { ...smallOtherInput.other, includeInAggregate: true },
});
assert.equal(smallOtherIncluded.otherIncomeSeparated, false);
assert.equal(smallOtherIncluded.comprehensiveIncome, 47_000_000);

const selfOnly = computePersonalDeduction(
  {
    includeSelf: true,
    spouse: false,
    dependentCount: 0,
    elderlyCount: 0,
    disabledCount: 0,
    woman: false,
    singleParent: false,
  },
  0,
);
assert.equal(selfOnly.total, 1_500_000);

const family = computePersonalDeduction(
  {
    includeSelf: true,
    spouse: true,
    dependentCount: 2,
    elderlyCount: 1,
    disabledCount: 1,
    woman: true,
    singleParent: true,
  },
  20_000_000,
);
assert.equal(family.people, 4);
assert.equal(family.basic, 6_000_000);
assert.equal(family.elderly, 1_000_000);
assert.equal(family.disabled, 2_000_000);
assert.equal(family.singleParent, 0);
assert.equal(family.woman, 500_000);
assert.equal(family.total, 9_500_000);

const womanOnly = computePersonalDeduction(
  {
    includeSelf: true,
    spouse: true,
    dependentCount: 0,
    elderlyCount: 0,
    disabledCount: 0,
    woman: true,
    singleParent: false,
  },
  30_000_000,
);
assert.equal(womanOnly.woman, 500_000);
const womanOverCap = computePersonalDeduction(
  {
    includeSelf: true,
    spouse: true,
    dependentCount: 0,
    elderlyCount: 0,
    disabledCount: 0,
    woman: true,
    singleParent: false,
  },
  30_000_001,
);
assert.equal(womanOverCap.woman, 0);

const withheld = withholdingFromServiceRevenue(10_000_000);
assert.equal(withheld.incomeTax, 300_000);
assert.equal(withheld.localTax, 30_000);

const noticeA = computeInterimNotice({
  priorInterim: 25_000_000,
  finalSelfPayment: 0,
  additionalAssessment: 0,
  lateOrAmendedPayment: 0,
  refund: 0,
  landPrepayment: 0,
});
assert.equal(noticeA.tax, 12_500_000);
assert.equal(noticeA.installment?.deferrable, 2_500_000);
assert.equal(noticeA.installment?.dueByNovember30, 10_000_000);

const noticeB = computeInterimNotice({
  priorInterim: 60_000_020,
  finalSelfPayment: 0,
  additionalAssessment: 0,
  lateOrAmendedPayment: 0,
  refund: 0,
  landPrepayment: 0,
});
assert.equal(noticeB.tax, 30_000_010);
assert.equal(noticeB.installment?.deferrable, 15_000_000);
assert.equal(noticeB.installment?.dueByNovember30, 15_000_010);

const noticeC = computeInterimNotice({
  priorInterim: 199_999_980,
  finalSelfPayment: 0,
  additionalAssessment: 0,
  lateOrAmendedPayment: 0,
  refund: 0,
  landPrepayment: 0,
});
assert.equal(noticeC.tax, 99_999_990);
assert.equal(noticeC.installment?.deferrable, 49_999_990);
assert.equal(noticeC.installment?.dueByNovember30, 50_000_000);

function incomeCase(patch: {
  interestIncome?: number;
  dividendIncome?: number;
  businessIncome?: number;
  rentalIncome?: number;
  rentalCarry?: number;
  otherCarry?: number;
  pensionSaving?: number;
  retirementPension?: number;
  wageIncome?: number;
  includeSelf?: boolean;
  spouse?: boolean;
  woman?: boolean;
  dependentCount?: number;
  childCreditCount?: number;
  standardTaxCredit?: boolean;
  sincereBusiness?: boolean;
  taxCredits?: number;
}) {
  return computeComprehensiveIncomeTax({
    year: "2023-2025",
    useDirectTaxBase: false,
    directTaxBase: 0,
    interestIncome: patch.interestIncome ?? 0,
    dividendIncome: patch.dividendIncome ?? 0,
    wageIncome: patch.wageIncome ?? 0,
    pensionIncome: 0,
    business: { method: "amount", income: patch.businessIncome ?? 0 },
    rentalIncome: patch.rentalIncome ?? 0,
    rentalLossCarryforward: patch.rentalCarry ?? 0,
    otherLossCarryforward: patch.otherCarry ?? 0,
    other: { method: "amount", income: 0, gross: 0, expensePercent: 0 },
    privatePensionSeparate: false,
    privatePensionAmount: 0,
    personal: {
      includeSelf: patch.includeSelf ?? false,
      spouse: patch.spouse ?? false,
      dependentCount: patch.dependentCount ?? 0,
      elderlyCount: 0,
      disabledCount: 0,
      woman: patch.woman ?? false,
      singleParent: false,
    },
    childCreditCount: patch.childCreditCount ?? 0,
    standardTaxCredit: patch.standardTaxCredit ?? false,
    sincereBusiness: patch.sincereBusiness ?? false,
    pensionSaving: patch.pensionSaving ?? 0,
    retirementPension: patch.retirementPension ?? 0,
    incomeDeductions: 0,
    taxCredits: patch.taxCredits ?? 0,
    withholdingIncomeTax: 0,
    interimPrepayment: 0,
    occasionalAssessment: 0,
    penalties: emptyPenalties(),
  });
}

const underThreshold = incomeCase({ interestIncome: 10_000_000, businessIncome: 30_000_000 });
assert.equal(underThreshold.financial.compared, false);
assert.equal(underThreshold.financial.excluded, 10_000_000);
assert.equal(underThreshold.calculated.taxBase, 30_000_000);
assert.equal(underThreshold.calculated.tax, 3_240_000);

const atThreshold = incomeCase({ interestIncome: 20_000_000 });
assert.equal(atThreshold.financial.compared, false);
assert.equal(atThreshold.calculated.taxBase, 0);
assert.equal(atThreshold.calculated.tax, 0);

const method2Wins = incomeCase({ interestIncome: 30_000_000 });
assert.equal(method2Wins.financial.included, 10_000_000);
assert.equal(method2Wins.calculated.taxBase, 10_000_000);
assert.equal(method2Wins.financial.method1Progressive, 600_000);
assert.equal(method2Wins.financial.method1Flat, 2_800_000);
assert.equal(method2Wins.financial.method1, 3_400_000);
assert.equal(method2Wins.financial.method2Financial, 4_200_000);
assert.equal(method2Wins.financial.method2Other, 0);
assert.equal(method2Wins.financial.method2, 4_200_000);
assert.equal(method2Wins.financial.chosen, "method2");
assert.equal(method2Wins.calculated.tax, 4_200_000);

const method1Wins = incomeCase({
  interestIncome: 20_000_000,
  dividendIncome: 10_000_000,
  businessIncome: 50_000_000,
  includeSelf: true,
});
assert.equal(method1Wins.comprehensiveIncome, 80_000_000);
assert.equal(method1Wins.incomeDeductions, 1_500_000);
assert.equal(method1Wins.calculated.taxBase, 58_500_000);
assert.equal(method1Wins.financial.method1Progressive, 8_280_000);
assert.equal(method1Wins.financial.method1, 11_080_000);
assert.equal(method1Wins.financial.method2Financial, 4_200_000);
assert.equal(method1Wins.financial.method2Other, 6_015_000);
assert.equal(method1Wins.financial.method2, 10_215_000);
assert.equal(method1Wins.financial.chosen, "method1");
assert.equal(method1Wins.calculated.tax, 11_080_000);

const womanUsesFullFinancial = incomeCase({
  interestIncome: 20_000_000,
  businessIncome: 15_000_000,
  includeSelf: true,
  spouse: true,
  woman: true,
});
assert.equal(womanUsesFullFinancial.comprehensiveIncome, 35_000_000);
assert.equal(womanUsesFullFinancial.personal.woman, 0);

const deductionDoesNotCutWithholding = incomeCase({
  interestIncome: 40_000_000,
  businessIncome: 1_000_000,
  includeSelf: true,
});
assert.equal(deductionDoesNotCutWithholding.financial.method2Other, 0);
assert.equal(deductionDoesNotCutWithholding.financial.method2, 5_600_000);
assert.equal(deductionDoesNotCutWithholding.financial.chosen, "method2");
assert.equal(deductionDoesNotCutWithholding.calculated.tax, 5_600_000);

assert.equal(computeChildTaxCredit(0), 0);
assert.equal(computeChildTaxCredit(1), 250_000);
assert.equal(computeChildTaxCredit(2), 550_000);
assert.equal(computeChildTaxCredit(3), 950_000);
assert.equal(computeChildTaxCredit(4), 1_350_000);

const childCapped = incomeCase({ businessIncome: 30_000_000, dependentCount: 1, childCreditCount: 2 });
assert.equal(childCapped.childCreditCount, 1);
assert.equal(childCapped.childTaxCredit, 250_000);
assert.equal(childCapped.taxCredits, 250_000);
assert.equal(childCapped.taxAfterCredits, childCapped.calculated.tax - 250_000);

const standardGeneral = incomeCase({ businessIncome: 30_000_000, standardTaxCredit: true });
assert.equal(standardGeneral.standardTaxCredit, 70_000);
const standardWage = incomeCase({ businessIncome: 30_000_000, wageIncome: 1, standardTaxCredit: true });
assert.equal(standardWage.standardTaxCredit, 130_000);
const standardSincere = incomeCase({ businessIncome: 30_000_000, sincereBusiness: true });
assert.equal(standardSincere.standardTaxCredit, 120_000);
const standardSincereWithWage = incomeCase({
  businessIncome: 30_000_000,
  wageIncome: 1,
  sincereBusiness: true,
});
assert.equal(standardSincereWithWage.standardTaxCredit, 130_000);

const stackedCredits = incomeCase({
  businessIncome: 30_000_000,
  dependentCount: 2,
  childCreditCount: 2,
  standardTaxCredit: true,
  taxCredits: 10_000,
});
assert.equal(stackedCredits.childTaxCredit, 550_000);
assert.equal(stackedCredits.standardTaxCredit, 70_000);
assert.equal(stackedCredits.enteredTaxCredits, 10_000);
assert.equal(stackedCredits.taxCredits, 630_000);

const rentalLossQuarantine = incomeCase({ rentalIncome: -3_000_000, wageIncome: 10_000_000 });
assert.equal(rentalLossQuarantine.comprehensiveIncome, 10_000_000);
assert.equal(rentalLossQuarantine.losses.rentalForAggregate, 0);

const rentalCarry = incomeCase({ rentalIncome: 5_000_000, rentalCarry: 2_000_000 });
assert.equal(rentalCarry.losses.rentalCarryUsed, 2_000_000);
assert.equal(rentalCarry.comprehensiveIncome, 3_000_000);

const businessLossOffsetsRental = incomeCase({ businessIncome: -4_000_000, rentalIncome: 5_000_000 });
assert.equal(businessLossOffsetsRental.losses.rentalForAggregate, 1_000_000);
assert.equal(businessLossOffsetsRental.comprehensiveIncome, 1_000_000);

const otherCarry = incomeCase({ businessIncome: 10_000_000, otherCarry: 3_000_000 });
assert.equal(otherCarry.losses.otherCarryUsed, 3_000_000);
assert.equal(otherCarry.comprehensiveIncome, 7_000_000);

const pensionCapped = computePensionAccountCredit({
  pensionSaving: 7_000_000,
  retirementPension: 3_000_000,
  aggregatedIncome: 10_000_000,
});
assert.equal(pensionCapped.contribution, 9_000_000);
assert.equal(pensionCapped.rate, 0.15);
assert.equal(pensionCapped.credit, 1_350_000);

const pensionHighIncome = incomeCase({ businessIncome: 50_000_000, pensionSaving: 6_000_000 });
assert.equal(pensionHighIncome.pensionCreditRate, 0.12);
assert.equal(pensionHighIncome.pensionContributionUsed, 6_000_000);
assert.equal(pensionHighIncome.pensionAccountCredit, 720_000);
assert.equal(pensionHighIncome.taxCredits, 720_000);

assert.equal(
  applyIncomeLosses({
    rentalIncome: 0,
    businessIncome: -5_000_000,
    otherNonFinancial: 4_000_000,
    financialIncluded: 0,
    rentalCarryforward: 3_000_000,
    otherCarryforward: 3_000_000,
  }).otherCarryUsed,
  0,
);

console.log("comprehensive income tax examples ok");
