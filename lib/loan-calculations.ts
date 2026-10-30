export type RepaymentType = "equal-payment" | "equal-principal" | "graduated" | "bullet";

/**
 * 체증식 기본 연 증가율(%). 같은 해 월 상환액은 동일하고 매년 이 비율만큼 오르는 계단식 모델의 기본값입니다.
 * 보금자리론처럼 상환액을 정액으로 늘리는 실제 상품의 상환표와는 다를 수 있는 참고용 모델입니다.
 */
export const DEFAULT_GRADUATED_ANNUAL_INCREASE_PERCENT = 5;

/** 체증식 증가 방식: fixed=매월 일정 금액씩 증가(보금자리론 방식), percent=매년 일정 비율 증가(계단식) */
export type GraduatedMode = "fixed" | "percent";

/**
 * 정액 증가 체증식에서 첫 달 상환액을 입력하지 않았을 때의 추정 비율.
 * 한국주택금융공사 보금자리론 설명서 예시(1억 원·연 3%·10년)에서 첫 달 원금 상환분은
 * 원리금균등 월 원금분의 약 0.67%입니다. 이 한 가지 예시로 맞춘 추정값이라 실제 상품과 다를 수 있습니다.
 */
export const GRADUATED_FIXED_AUTO_PRINCIPAL_SHARE = 0.0067;

export interface CalculationOptions {
  /** 체증식 방식(기본: percent) */
  graduatedMode?: GraduatedMode;
  /** 체증식(percent): 매년 월 상환액 증가율(%) */
  graduatedAnnualIncreasePercent?: number;
  /** 체증식(fixed): 상환 시작 첫 달 상환액(원). 비우면 자동 추정 */
  graduatedFirstPayment?: number;
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

/**
 * 체증식 일정이 정상인지 확인합니다.
 * 체증률이 기간에 비해 너무 높으면 첫 해 상환액이 월 이자보다 낮아져야 원금이 맞춰지는데,
 * 이 모델은 첫 해 상환액을 월 이자 이상으로만 계산하므로 일정이 도중에 끝나 버립니다.
 * 상환 시작 첫 달 원금 상환분이 1원 미만이면 그런 경우로 봅니다.
 */
export function isGraduatedScheduleValid(result: CalculationResult, graceMonths: number): boolean {
  const first = result.schedule[graceMonths];
  return first != null && first.principal >= 1;
}

/** 입력 조건에서 정상 계산이 가능한 최대 체증률(연 %, 소수 첫째 자리 내림). 0%도 불가능하면 0. */
export function findMaxGraduatedIncreasePercent(
  principal: number,
  annualRate: number,
  months: number,
  graceMonths: number,
  upperBound = 20,
): number {
  const isValid = (percent: number) =>
    isGraduatedScheduleValid(calculateGraduatedPayment(principal, annualRate, months, graceMonths, percent), graceMonths);
  if (isValid(upperBound)) return upperBound;
  let low = 0;
  let high = upperBound;
  for (let i = 0; i < 24; i++) {
    const mid = (low + high) / 2;
    if (isValid(mid)) low = mid;
    else high = mid;
  }
  return Math.floor(low * 10) / 10;
}

/**
 * 정액 증가 체증식의 첫 달 상환액 허용 범위.
 * min: 첫 달 이자(원금이 줄지 않는 최저선), max: 원리금균등 월 상환액(이보다 크면 증가가 아니라 감소),
 * auto: 입력이 없을 때 쓰는 추정값.
 */
export function getGraduatedFixedFirstPaymentRange(
  principal: number,
  annualRate: number,
  repaymentMonths: number,
): { min: number; max: number; auto: number } {
  const monthlyRate = annualRate / 100 / 12;
  const min = principal * monthlyRate;
  const max =
    repaymentMonths <= 0
      ? min
      : monthlyRate === 0
        ? principal / repaymentMonths
        : (principal * (monthlyRate * Math.pow(1 + monthlyRate, repaymentMonths))) /
          (Math.pow(1 + monthlyRate, repaymentMonths) - 1);
  return { min, max, auto: min + (max - min) * GRADUATED_FIXED_AUTO_PRINCIPAL_SHARE };
}

/**
 * 체증식(정액 증가): 상환 시작 첫 달 상환액에서 시작해 매월 같은 금액만큼 늘어나며
 * 만기에 잔액이 0이 되도록 월 증가액을 구합니다. (한국주택금융공사 설명서의 "매월 일정금액씩 증가" 방식)
 * 거치기간 중에는 이자만 냅니다.
 */
export function calculateGraduatedFixedPayment(
  principal: number,
  annualRate: number,
  months: number,
  graceMonths = 0,
  firstPayment?: number,
): CalculationResult {
  const monthlyRate = annualRate / 100 / 12;
  const repaymentMonths = months - graceMonths;
  if (repaymentMonths <= 0) {
    return calculateGraduatedPayment(principal, annualRate, months, graceMonths, 0);
  }

  const range = getGraduatedFixedFirstPaymentRange(principal, annualRate, repaymentMonths);
  const first =
    firstPayment != null && firstPayment > 0
      ? Math.min(Math.max(firstPayment, range.min), range.max)
      : range.auto;

  const finalBalance = (increment: number) => {
    let balance = principal;
    for (let m = 0; m < repaymentMonths; m++) {
      const payment = first + m * increment;
      balance -= payment - balance * monthlyRate;
    }
    return balance;
  };

  let low = 0;
  let high = principal;
  for (let i = 0; i < 200; i++) {
    const mid = (low + high) / 2;
    if (finalBalance(mid) > 0) low = mid;
    else high = mid;
  }
  const increment = (low + high) / 2;

  const schedule: ScheduleRow[] = [];
  let remainingPrincipal = principal;

  for (let month = 1; month <= graceMonths; month++) {
    const interest = remainingPrincipal * monthlyRate;
    schedule.push({ month, principal: 0, interest, payment: interest, balance: remainingPrincipal });
  }

  for (let m = 0; m < repaymentMonths; m++) {
    const month = graceMonths + m + 1;
    const interest = remainingPrincipal * monthlyRate;
    let payment = first + m * increment;
    let principalPayment = payment - interest;

    if (m === repaymentMonths - 1 || principalPayment > remainingPrincipal) {
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

  return { monthlyPayment: schedule[graceMonths]!.payment, schedule };
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
    if (options.graduatedMode === "fixed") {
      return calculateGraduatedFixedPayment(
        principal,
        annualRate,
        loanPeriodMonths,
        graceMonths,
        options.graduatedFirstPayment,
      );
    }
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
