import {
  computeDsrSnapshotFromLoans,
  computeMaxNewLoanPrincipal,
  type DsrLoanInput,
} from "../lib/dsr-calculations";
import type { RepaymentType } from "../lib/loan-calculations";

type Case = {
  name: string;
  incomeManwon: number;
  target: number;
  existingMonthly: number;
  rate: number;
  months: number;
  grace: number;
  type: RepaymentType;
  stressAdd?: number;
};

const cases: Case[] = [
  { name: "원리금균등 5000만·40%·4%·30년", incomeManwon: 5000, target: 40, existingMonthly: 0, rate: 4, months: 360, grace: 0, type: "equal-payment" },
  { name: "원리금균등 + 기존 월 50만", incomeManwon: 5000, target: 40, existingMonthly: 500_000, rate: 4, months: 360, grace: 0, type: "equal-payment" },
  { name: "내 기준 30%", incomeManwon: 5000, target: 30, existingMonthly: 0, rate: 4, months: 360, grace: 0, type: "equal-payment" },
  { name: "제2금융 50%", incomeManwon: 5000, target: 50, existingMonthly: 0, rate: 4, months: 360, grace: 0, type: "equal-payment" },
  { name: "스트레스 +1.5%p", incomeManwon: 5000, target: 40, existingMonthly: 0, rate: 4, months: 360, grace: 0, type: "equal-payment", stressAdd: 1.5 },
  { name: "원금균등", incomeManwon: 5000, target: 40, existingMonthly: 0, rate: 4, months: 360, grace: 0, type: "equal-principal" },
  { name: "만기일시(5년 원금+이자)", incomeManwon: 5000, target: 40, existingMonthly: 0, rate: 4, months: 120, grace: 0, type: "bullet" },
  { name: "거치 24개월", incomeManwon: 5000, target: 40, existingMonthly: 0, rate: 4, months: 360, grace: 24, type: "equal-payment" },
  { name: "기존 대출이 이미 초과", incomeManwon: 3000, target: 40, existingMonthly: 1_200_000, rate: 4, months: 360, grace: 0, type: "equal-payment" },
];

let failed = 0;

for (const c of cases) {
  const rateForDsr = c.rate + (c.stressAdd ?? 0);
  const existing: DsrLoanInput[] =
    c.existingMonthly > 0
      ? [{ isNew: false, inputMode: "monthly", monthlyWon: c.existingMonthly, label: "기존" }]
      : [];
  const other = computeDsrSnapshotFromLoans({ annualIncomeManwon: c.incomeManwon, loans: existing });

  const max = computeMaxNewLoanPrincipal({
    annualIncomeWon: c.incomeManwon * 10_000,
    targetDsrPercent: c.target,
    otherAnnualDebtServiceWon: other.annualDebtServiceWon,
    annualRatePercent: rateForDsr,
    termMonths: c.months,
    graceMonths: c.grace,
    repaymentType: c.type,
    equalPrincipalBasis: "first-month",
    bulletBasis: "regulatory-5y-principal",
  });

  if (!max) {
    console.log(`[FAIL] ${c.name}: 결과 없음`);
    failed++;
    continue;
  }

  if (max.alreadyOverTarget) {
    console.log(`[OK]   ${c.name}: 이미 초과 → 가능액 0원 (기존 DSR ${other.dsrPercent?.toFixed(2)}%)`);
    continue;
  }

  // 역산 금액을 신규 대출로 넣고 DSR을 다시 계산해 목표 이하인지, 만원 더 받으면 초과하는지 확인
  const verify = (principal: number) =>
    computeDsrSnapshotFromLoans({
      annualIncomeManwon: c.incomeManwon,
      loans: [
        ...existing,
        {
          isNew: true,
          inputMode: "details",
          balanceWon: principal,
          totalPrincipalWon: principal,
          totalTermMonths: c.months,
          remainingTermMonths: c.months,
          graceMonths: c.grace,
          annualRatePercent: c.rate,
          repaymentType: c.type,
          stressRateKind: "variable",
        },
      ],
      stress: c.stressAdd ? { nominalStressPercent: c.stressAdd } : null,
    }).dsrPercent ?? 0;

  const atMax = verify(max.maxPrincipalWon);
  const overBy = verify(max.maxPrincipalWon + 10_000);
  const ok = atMax <= c.target + 1e-9 && overBy > c.target;
  if (!ok) failed++;
  console.log(
    `[${ok ? "OK" : "FAIL"}] ${c.name}: 최대 ${max.maxPrincipalWon.toLocaleString("ko-KR")}원 → DSR ${atMax.toFixed(4)}% (+1만원이면 ${overBy.toFixed(4)}%) · 월 여력 ${Math.round(max.availableMonthlyWon).toLocaleString("ko-KR")}원`,
  );
}

if (failed > 0) {
  console.error(`\n${failed}건 실패`);
  process.exit(1);
}
console.log("\n모든 케이스 통과");
