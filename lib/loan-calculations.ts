export type RepaymentType = "equal-payment" | "equal-principal" | "graduated" | "bullet";

/** 체증식 기본 연 증가율(%). 보금자리론 등 정책상품 기준에 가깝게 5%를 기본값으로 둡니다. */
export const DEFAULT_GRADUATED_ANNUAL_INCREASE_PERCENT = 5;

export interface CalculationOptions {
  /** 체증식: 매년 월 상환액 증가율(%) */
  graduatedAnnualIncreasePercent?: number;
}

export interface ScheduleRow {
  month: number;
  principal: number;
  interest: number;
  payment: number;
  balance: number;
}

export interface CalculationResult {
  monthlyPayment: number;
  schedule: ScheduleRow[];
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("ko-KR").format(Math.round(num));
}

export function removeCommas(value: string): string {
  return value.toString().replace(/,/g, "");
}

export function calculateEqualPayment(
  principal: number,
  annualRate: number,
  months: number,
  graceMonths = 0,
): CalculationResult {
  const monthlyRate = annualRate / 100 / 12;
  const repaymentMonths = months - graceMonths;

  if (repaymentMonths <= 0) {
    const schedule: ScheduleRow[] = [];
    for (let month = 1; month <= months; month++) {
      const interest = principal * monthlyRate;
      schedule.push({
        month,
        principal: 0,
        interest,
        payment: interest,
        balance: principal,
      });
    }
    return { monthlyPayment: principal * monthlyRate, schedule };
  }

  if (monthlyRate === 0) {
    const schedule: ScheduleRow[] = [];
    for (let month = 1; month <= graceMonths; month++) {
      schedule.push({
        month,
        principal: 0,
        interest: 0,
        payment: 0,
        balance: principal,
      });
    }
    const monthlyPrincipal = principal / repaymentMonths;
    for (let month = graceMonths + 1; month <= months; month++) {
      schedule.push({
        month,
        principal: monthlyPrincipal,
        interest: 0,
        payment: monthlyPrincipal,
        balance: principal - (month - graceMonths) * monthlyPrincipal,
      });
    }
    return { monthlyPayment: monthlyPrincipal, schedule };
  }

  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, repaymentMonths))) /
    (Math.pow(1 + monthlyRate, repaymentMonths) - 1);

  const schedule: ScheduleRow[] = [];
  let remainingPrincipal = principal;

  for (let month = 1; month <= graceMonths; month++) {
    const interest = remainingPrincipal * monthlyRate;
    schedule.push({
      month,
      principal: 0,
      interest,
      payment: interest,
      balance: remainingPrincipal,
    });
  }

  for (let month = graceMonths + 1; month <= months; month++) {
    const interest = remainingPrincipal * monthlyRate;
    const principalPayment = monthlyPayment - interest;
    remainingPrincipal -= principalPayment;

    schedule.push({
      month,
      principal: principalPayment,
      interest,
      payment: monthlyPayment,
      balance: Math.max(0, remainingPrincipal),
    });
  }

  return { monthlyPayment, schedule };
}

export function calculateEqualPrincipal(
  principal: number,
  annualRate: number,
  months: number,
  graceMonths = 0,
): CalculationResult {
  const monthlyRate = annualRate / 100 / 12;
  const repaymentMonths = months - graceMonths;

  if (repaymentMonths <= 0) {
    const schedule: ScheduleRow[] = [];
    for (let month = 1; month <= months; month++) {
      const interest = principal * monthlyRate;
      schedule.push({
        month,
        principal: 0,
        interest,
        payment: interest,
        balance: principal,
      });
    }
    return { monthlyPayment: principal * monthlyRate, schedule };
  }

  const monthlyPrincipal = principal / repaymentMonths;
  const schedule: ScheduleRow[] = [];
  let remainingPrincipal = principal;

  for (let month = 1; month <= graceMonths; month++) {
    const interest = remainingPrincipal * monthlyRate;
    schedule.push({
      month,
      principal: 0,
      interest,
      payment: interest,
      balance: remainingPrincipal,
    });
  }

  for (let month = graceMonths + 1; month <= months; month++) {
    const interest = remainingPrincipal * monthlyRate;
    const payment = monthlyPrincipal + interest;
    remainingPrincipal -= monthlyPrincipal;

    schedule.push({
      month,
      principal: monthlyPrincipal,
      interest,
      payment,
      balance: Math.max(0, remainingPrincipal),
    });
  }

  const firstRepaymentPayment =
    graceMonths > 0 ? schedule[graceMonths]!.payment : schedule[0]!.payment;

  return { monthlyPayment: firstRepaymentPayment, schedule };
}

function simulateGraduatedFinalBalance(
  firstYearPayment: number,
  principal: number,
  monthlyRate: number,
  repaymentMonths: number,
  annualIncreaseRate: number,
): number {
  let balance = principal;
  for (let m = 1; m <= repaymentMonths; m++) {
    const yearIndex = Math.floor((m - 1) / 12);
    const payment = firstYearPayment * Math.pow(1 + annualIncreaseRate, yearIndex);
    const interest = balance * monthlyRate;
    if (payment <= interest) return principal;
    balance -= payment - interest;
  }
  return balance;
}

function buildGraduatedSchedule(
  principal: number,
  monthlyRate: number,
  months: number,
  graceMonths: number,
  annualIncreaseRate: number,
  firstYearPayment: number,
): ScheduleRow[] {
  const schedule: ScheduleRow[] = [];
  let remainingPrincipal = principal;

  for (let month = 1; month <= graceMonths; month++) {
    const interest = remainingPrincipal * monthlyRate;
    schedule.push({
      month,
      principal: 0,
      interest,
      payment: interest,
      balance: remainingPrincipal,
    });
  }

  const repaymentMonths = months - graceMonths;
  for (let m = 1; m <= repaymentMonths; m++) {
    const month = graceMonths + m;
    const yearIndex = Math.floor((m - 1) / 12);
    let payment = firstYearPayment * Math.pow(1 + annualIncreaseRate, yearIndex);
    const interest = remainingPrincipal * monthlyRate;

    if (m === repaymentMonths) {
      const principalPayment = remainingPrincipal;
      payment = principalPayment + interest;
      remainingPrincipal = 0;
      schedule.push({
        month,
        principal: principalPayment,
        interest,
        payment,
        balance: 0,
      });
      continue;
    }

    let principalPayment = payment - interest;
    if (principalPayment > remainingPrincipal) {
      principalPayment = remainingPrincipal;
      payment = principalPayment + interest;
    }
    remainingPrincipal -= principalPayment;

    schedule.push({
      month,
      principal: principalPayment,
      interest,
      payment,
      balance: Math.max(0, remainingPrincipal),
    });
  }

  return schedule;
}

function findGraduatedFirstYearPayment(
  principal: number,
  monthlyRate: number,
  months: number,
  graceMonths: number,
  annualIncreaseRate: number,
): number {
  const repaymentMonths = months - graceMonths;
  if (repaymentMonths <= 0) return principal * monthlyRate;

  const simulateBalance = (firstYearPayment: number) =>
    simulateGraduatedFinalBalance(
      firstYearPayment,
      principal,
      monthlyRate,
      repaymentMonths,
      annualIncreaseRate,
    );

  let low = principal * monthlyRate;
  let high = low;
  while (simulateBalance(high) > 0.01) {
    high *= 1.5;
    if (high > principal * 10) break;
  }

  for (let i = 0; i < 100; i++) {
    const mid = (low + high) / 2;
    const balance = simulateBalance(mid);
    if (balance > 0.01) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return (low + high) / 2;
}

export function calculateGraduatedPayment(
  principal: number,
  annualRate: number,
  months: number,
  graceMonths = 0,
  graduatedAnnualIncreasePercent = DEFAULT_GRADUATED_ANNUAL_INCREASE_PERCENT,
): CalculationResult {
  const monthlyRate = annualRate / 100 / 12;
  const repaymentMonths = months - graceMonths;
  const annualIncreaseRate = graduatedAnnualIncreasePercent / 100;

  if (repaymentMonths <= 0) {
    const schedule: ScheduleRow[] = [];
    for (let month = 1; month <= months; month++) {
      const interest = principal * monthlyRate;
      schedule.push({
        month,
        principal: 0,
        interest,
        payment: interest,
        balance: principal,
      });
    }
    return { monthlyPayment: principal * monthlyRate, schedule };
  }

  if (monthlyRate === 0) {
    const firstYearPayment = findGraduatedFirstYearPayment(
      principal,
      0,
      months,
      graceMonths,
      annualIncreaseRate,
    );
    const schedule = buildGraduatedSchedule(
      principal,
      0,
      months,
      graceMonths,
      annualIncreaseRate,
      firstYearPayment,
    );
    const firstRepaymentPayment =
      graceMonths > 0 ? schedule[graceMonths]!.payment : schedule[0]!.payment;
    return { monthlyPayment: firstRepaymentPayment, schedule };
  }

  const firstYearPayment = findGraduatedFirstYearPayment(
    principal,
    monthlyRate,
    months,
    graceMonths,
    annualIncreaseRate,
  );
  const schedule = buildGraduatedSchedule(
    principal,
    monthlyRate,
    months,
    graceMonths,
    annualIncreaseRate,
    firstYearPayment,
  );

  const firstRepaymentPayment =
    graceMonths > 0 ? schedule[graceMonths]!.payment : schedule[0]!.payment;

  return { monthlyPayment: firstRepaymentPayment, schedule };
}

export function calculateBulletPayment(
  principal: number,
  annualRate: number,
  months: number,
): CalculationResult {
  const monthlyRate = annualRate / 100 / 12;
  const schedule: ScheduleRow[] = [];

  for (let month = 1; month < months; month++) {
    const interest = principal * monthlyRate;
    schedule.push({
      month,
      principal: 0,
      interest,
      payment: interest,
      balance: principal,
    });
  }

  const lastInterest = principal * monthlyRate;
  schedule.push({
    month: months,
    principal,
    interest: lastInterest,
    payment: principal + lastInterest,
    balance: 0,
  });

  return { monthlyPayment: principal * monthlyRate, schedule };
}

export function runCalculation(
  repaymentType: RepaymentType,
  principal: number,
  annualRate: number,
  loanPeriodMonths: number,
  graceYears: number,
  options: CalculationOptions = {},
): CalculationResult {
  const graceMonths = graceYears * 12;
  if (repaymentType === "equal-payment") {
    return calculateEqualPayment(principal, annualRate, loanPeriodMonths, graceMonths);
  }
  if (repaymentType === "equal-principal") {
    return calculateEqualPrincipal(principal, annualRate, loanPeriodMonths, graceMonths);
  }
  if (repaymentType === "graduated") {
    return calculateGraduatedPayment(
      principal,
      annualRate,
      loanPeriodMonths,
      graceMonths,
      options.graduatedAnnualIncreasePercent ?? DEFAULT_GRADUATED_ANNUAL_INCREASE_PERCENT,
    );
  }
  return calculateBulletPayment(principal, annualRate, loanPeriodMonths);
}

export const repaymentTypeLabels: Record<RepaymentType, string> = {
  "equal-payment": "원리금균등상환",
  "equal-principal": "원금균등상환",
  graduated: "체증식상환",
  bullet: "만기일시상환",
};
