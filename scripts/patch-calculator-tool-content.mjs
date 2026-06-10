/**
 * toolContent.json에 Calculator 허브 + 하위 계산기 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { calcKo, calcUiKo, gpaRelatedLinksKo } from "./calculator-ko-data.mjs";
import {
  percentageFaqLinksEn,
  percentageFaqLinksKo,
  percentageUiExtrasEn,
} from "./percentage-localized-data.mjs";
import { programmerTechnicalRefEn } from "./programmer-technical-reference-data.mjs";

const root = process.cwd();

const calcUiEn = {
  average: {
    title: "Calculate Mean, Median, Mode, and More",
    numbersLabel: "Enter numbers (separated by commas or spaces)",
    numbersPlaceholder: "Example: 1, 2, 3, 4, 5",
    calculate: "Calculate",
    reset: "Reset",
    useSampleData: "Use sample data",
    copyResults: "Copy results",
    copied: "Copied!",
    decimals: "Decimals",
    variance: "Variance",
    varianceSample: "Sample (n−1)",
    variancePopulation: "Population (n)",
    thousandsSeparator: "Thousands separator (1,234.56)",
    sortedData: "Sorted data (ascending)",
    errorInvalidNumbers: "Please enter valid numbers",
  },
  calculator: {
    menu: "Menu",
    memoryIndicator: "Memory",
    memoryClear: "MC",
    memoryRecall: "MR",
    memoryAdd: "M+",
    memorySubtract: "M-",
    memoryStore: "MS",
    clearEntry: "CE",
    clearAll: "C",
    backspace: "⌫",
    percent: "%",
    reciprocal: "1/x",
    square: "x²",
    sqrt: "²√x",
    negate: "±",
    equals: "=",
    error: "Error",
  },
  gpa: {
    settings: "Settings",
    gradingScale: "Grading Scale",
    scaleHint: "Check your school's grading system scale if unsure.",
    courseList: "Course List",
    addCourse: "Add Course",
    courseNamePlaceholder: "Course Name",
    creditsPlaceholder: "Credits",
    deleteCourse: "Delete course",
    totalCredits: "Total Credits",
    gpa: "GPA",
    letterGrade: "Letter Grade",
    resetAll: "Reset All",
    useSampleData: "Use sample data",
    copyResults: "Copy results",
    copiedToClipboard: "Copied to clipboard",
    copyFailed: "Copy failed",
    sampleLoaded: "Sample data loaded",
    resetComplete: "Reset complete",
    conversionTableTitle: "GPA Conversion Table",
    conversionTableIntro:
      "Reference for converting letter grades to GPA points by scale. This table matches the values used in the calculator above.",
    colGrade: "Grade",
    colScale40: "4.0 Scale (Unweighted)",
    colScale43: "4.3 Scale (A+ Scale)",
    colScale45: "4.5 Scale",
    colScale50: "5.0 Scale (Weighted)",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionIntro:
      "{count} quick links to GPA planners, this page, and related calculators.",
  },
  targetGpa: {
    settings: "Settings",
    gradingScale: "Grading Scale",
    targetRecordGoal: "Your record & goal",
    currentCredits: "Current cumulative credits",
    currentGpa: "Current cumulative GPA",
    targetGpa: "Target cumulative GPA",
    plannedCredits: "Planned credits (this term)",
    expectedTermGpa: "Expected term GPA (optional)",
    expectedTermPlaceholder: "e.g. 3.8 — for “credits needed” estimate",
    requiredTermGpa: "Required term GPA",
    approxLetter: "Approx. letter",
    creditsAtExpected: "Credits at expected GPA",
    useSampleData: "Use sample data",
    resetAll: "Reset all",
    copyResults: "Copy results",
    messageTargetRange: "Enter a target GPA within your grading scale range.",
    messageCurrentGpa: "Enter a valid current cumulative GPA.",
    messageCredits: "Enter valid cumulative credits (0 or more).",
    messageTermCredits:
      "Enter planned credits for this term (greater than 0) to see the required term GPA.",
    copiedToClipboard: "Copied to clipboard",
    copyFailed: "Copy failed",
    nothingToCopy: "Nothing to copy yet",
  },
  percentage: {
    tabs: {
      basic: "Basic Percentage",
      change: "Percentage Change",
      of: "Percentage Of",
      after: "Value After Change",
    },
    labels: {
      percentage: "Percentage (%)",
      number: "Number",
      originalValue: "Original Value",
      newValue: "New Value",
      totalA: "Total (A)",
      partB: "Part (B)",
      startingValue: "Starting Value",
      changePercent: "Change (%)",
    },
    placeholders: {
      percentage: "Enter percentage",
      number: "Enter number",
      originalValue: "Enter original value",
      newValue: "Enter new value",
      totalA: "Enter total",
      partB: "Enter part",
      startingValue: "Enter starting value",
      changePercent: "e.g. 20 or -10",
    },
    reset: "Reset",
    useSampleData: "Use sample data",
    result: "Result",
    copyResults: "Copy results",
    recentCalculations: "Recent calculations",
    historyEmpty: "No history yet. Enter values to see results here.",
    historyHint: "Up to 5 items stored on this device.",
    restoredFromHistory: "Values restored from history",
    resetDone: "Calculator has been reset",
    sampleLoaded: "Sample data loaded",
    copiedToClipboard: "Copied to clipboard",
    copyFailed: "Copy failed",
    errorOriginalZero: "Original value cannot be zero for percentage change.",
    errorTotalZero: "Total (A) cannot be zero.",
    ...percentageUiExtrasEn,
  },
  standardDeviation: {
    title: "Variance, standard deviation & standard error",
    numbersLabel: "Enter numbers (commas, spaces, or line breaks)",
    numbersPlaceholder: "Example:\n12, 15, 18\n14 16",
    inputHint:
      "Paste from a spreadsheet or type one value per line—mobile numeric entry is supported.",
    calculate: "Calculate",
    sortAscending: "Sort ascending",
    reset: "Reset",
    sampleData: "Sample data",
    copyResults: "Copy results",
    copied: "Copied!",
    decimals: "Decimals",
    thousandsSeparator: "Thousands separator",
    sortedData: "Sorted data (ascending)",
    errorInvalidNumbers: "Please enter valid numbers",
    toastCleared: "Cleared",
    toastSampleLoaded: "Sample data loaded",
    toastSorted: "Sorted ascending",
    toastEnterValidFirst: "Enter valid numbers first",
    figures: {
      sampleSdTitle: "Sample standard deviation (reference)",
      legendN: "number of data points",
      legendXi: "each observed value",
      legendXbar: "mean of the data",
      populationNote:
        "Population standard deviation uses the same numerator sum of squares but divides by n before the square root: σ = √(SS / n).",
      normalCurveTitle: "Standard normal curve (μ = 0, σ = 1)",
      normalCurveCaption:
        "Illustration only; your data need not be normal. σ here denotes standard deviations from the mean on the horizontal axis.",
      normalCurveAria: "Bell-shaped normal distribution curve",
      empiricalTitle: "Normal distribution — empirical rule (68–95–99.7)",
      empiricalIntro:
        "For data that are approximately normal, about 68% fall within μ ± 1σ, 95% within μ ± 2σ, and 99.7% within μ ± 3σ.",
      empiricalAria:
        "Empirical rule diagram with shaded regions for one two and three standard deviations",
      axisCaption: "(horizontal axis: distance from mean in σ units)",
    },
  },
  programmer: {
    title: "Programmer",
    keypad: "Keypad",
    bits: "Bit toggling",
    shiftArithmetic: "Arithmetic shift",
    shiftLogical: "Logical shift",
    shiftRotate: "Rotate",
    shiftRotateThroughCarry: "Rotate through carry",
    memoryStore: "MS",
    memoryMenu: "M▾",
    memoryRecall: "MR — Recall",
    memoryClear: "MC — Clear",
    memoryAdd: "M+ — Add to memory",
    clear: "C",
    backspace: "⌫",
    equals: "=",
    and: "AND",
    or: "OR",
    not: "NOT",
    xor: "XOR",
    nor: "NOR",
    nand: "NAND",
    result: "Result",
    technicalReference: programmerTechnicalRefEn,
  },
};

const gpaRelatedLinksEn = [
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?goal=3.5",
    question: "How much GPA do I need this term to reach a 3.5 cumulative?",
  },
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?goal=3.7",
    question: "What semester GPA do I need for a 3.7 cumulative average?",
  },
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?goal=3.0",
    question: "How can I raise my cumulative GPA to 3.0? (target planner)",
  },
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?reset=1",
    question: "Target cumulative GPA calculator — plan any GPA goal (fresh form)",
  },
  {
    href: "#gpa-conversion-table",
    question: "Letter grade to GPA points chart (4.0, 4.3, 4.5 & 5.0 weighted)",
  },
  {
    href: "/faq/gpa/what-is-weighted-gpa",
    question: "What is weighted GPA? AP, honors & 5.0 scale vs unweighted",
  },
  {
    href: "#gpa-guide-how-to-use",
    question: "How do I use this GPA calculator? Step-by-step quick start",
  },
  {
    href: "/tools/calculator/percentage-calculator",
    question: "Free online percentage calculator for grades & everyday math",
  },
  {
    href: "/tools/calculator",
    question: "Browse all calculators: average, BMI, percentage & more",
  },
  {
    href: "/tools/calculator/average-calculator",
    question: "Average calculator (mean) for test scores, grades & numbers",
  },
];

const calcEn = {
  calculator: {
    h1: "Calculator Tools",
    subtitle: "Online calculator tools for daily math",
    intro:
      "Average calculator, standard deviation calculator, GPA calculator, percentage calculator, programmer calculator, and calculator for everyday math.",
    guideTitle: "Calculator Tools Guide",
    guideIntro:
      "Choose the tool that matches your goal first. If you also need scheduling support, try Time Tools. For measurement and unit changes, use Unit Converter. For BMI, tape body fat, waist-to-hip ratio, muscle index, and calorie estimates, use Health Tools.",
    sections: [
      {
        title: "1. How do I find and use the right calculator for my task?",
        type: "ordered",
        items: [
          "Pick the calculator that fits your task: average, standard deviation, GPA, percentage, programmer, or simple calculator.",
          "Enter your values and click Calculate to get results right away.",
          "If you need repeated checks, change only the input values and recalculate.",
          "Switch tools by use case: stats, grades, percentages, or number systems.",
        ],
      },
      {
        title: "2. How do calculator tools compute results in the browser?",
        type: "paragraphs",
        items: [
          "All calculations run in your browser, so your inputs and outputs stay on your device.",
          "Each calculator applies formulas that match its specific task.",
          "You can move between stats, GPA, percentage, and programmer tools from the same hub page.",
        ],
      },
      {
        title: "3. What calculators are offered here, and what is each one for?",
        type: "paragraphs",
        items: [
          "This page is an online calculator hub for quick day-to-day math tasks.",
          "It is useful for assignments, work checks, budgeting, and general numeric work.",
        ],
      },
      {
        title: "4. Why use dedicated online calculators for GPA or percentages?",
        type: "unordered",
        items: [
          "Runs directly in browser.",
          "No signup required.",
          "Works on mobile and desktop.",
          "Task-focused calculator set.",
        ],
      },
      {
        title: "5. When are these calculators useful for school or finance?",
        type: "unordered",
        items: [
          "Check GPA or averages before grading submissions.",
          "Calculate discount rates and percentage changes for reports.",
          "Verify base conversions and bit logic during coding.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I find and use the right calculator for my task?",
        answer:
          "Pick the calculator that matches your task, enter values, and run the calculation. Switch tools when the task changes.",
      },
      {
        question: "How do calculator tools compute results in the browser?",
        answer:
          "Each tool applies its own formula in-browser, so inputs and outputs stay on your device.",
      },
      {
        question: "What calculators are offered here, and what is each one for?",
        answer:
          "You can use average, standard deviation, GPA, percentage, programmer, and simple calculator tools for daily math tasks.",
      },
      {
        question: "Why use dedicated online calculators for GPA or percentages?",
        answer:
          "They cut transcription mistakes and give you the same formula every time you re-run the numbers.",
      },
      {
        question: "When are these calculators useful for school or finance?",
        answer:
          "They are useful for assignments, budgeting, reporting, and quick numeric checks at work.",
      },
    ],
  },
  "calculator.average-calculator": {
    h1: "Average Calculator",
    subtitle: "Online average calculator for quick stats",
    guideTitle: "Average Calculator Guide",
    guideIntro:
      "Use this when you need fast descriptive stats from raw numbers. For deeper spread checks, try Standard Deviation Calculator.",
    sections: [
      {
        title: "1. How can I compute mean, median, mode, and other stats with this calculator?",
        type: "ordered",
        items: [
          "Enter numbers separated by commas or spaces. Example: 1, 2, 3, 4, 5. Supports CSV paste from Excel.",
          "Results update automatically as you type (real-time). Use Calculate, Reset, or Use sample data as needed.",
          "Set decimal places (0–6), thousands separator, and variance type (Sample / Population). Copy results to clipboard with one click.",
        ],
      },
      {
        title: "2. How does this average calculator derive each statistic from my numbers?",
        type: "paragraphs",
        items: [
          "Mean: Sum ÷ Count. Median: Middle value when sorted. Mode: Most frequent value(s). Range: Max − Min.",
          "Variance: Average of squared deviations from mean. Standard deviation: square root of variance. You can choose Sample (n−1) or Population (n) for variance calculation.",
          "Quartiles (Q1, Q3): We use the median-of-halves method: split data at the median, then take the median of the lower half for Q1 and the median of the upper half for Q3. IQR = Q3 − Q1.",
          "Geometric mean: (∏ x_i)^(1/n), requires all positive numbers. Harmonic mean: n / Σ(1/x_i), requires all positive non-zero numbers.",
        ],
      },
      {
        title: "3. What is this average calculator for, and which methods does it use?",
        type: "paragraphs",
        items: [
          "Free online average calculator with comprehensive statistics. Uses a single, consistent set of calculation methods (see below) so you get predictable, comparable results.",
        ],
      },
      {
        title: "4. Why use a dedicated average and statistics calculator in the browser?",
        type: "unordered",
        items: [
          "15+ statistics: Mean, Median, Mode, Min, Max, Range, Variance, Std Dev, Q1, Q3, IQR, Geometric Mean, Harmonic Mean.",
          "Variance toggle: Choose Sample (n−1, default) or Population (n) to match your use case.",
          "Clear calculation methods: All formulas are documented. Same input → same result, every time.",
        ],
      },
      {
        title: "5. Where are averages and spread used in school, research, or business?",
        type: "unordered",
        items: [
          "Academic: Grade analysis, test scores, research data.",
          "Financial: Sales analysis, investment returns, market research.",
          "Scientific: Experimental data, survey analysis, quality control.",
          "Personal: Budget planning, fitness tracking, expense averages.",
        ],
      },
      {
        title: "6. Calculation Methods (How We Compute Each Statistic)",
        type: "unordered",
        items: [
          "Basic statistics: Mean (arithmetic average): Sum of all values ÷ number of values.",
          "Basic statistics: Median: The middle value when data is sorted. If even number of values, average of the two middle values.",
          "Basic statistics: Mode: The value(s) that appear most frequently. N/A when all values are unique.",
          "Basic statistics: Min / Max / Range: Smallest value, largest value, and Max − Min.",
          "Variance & standard deviation: Sample variance (default): Σ(x − mean)² ÷ (n − 1). Use when your data is a sample drawn from a larger population. Matches Excel VAR.S, Google Sheets VAR.S.",
          "Variance & standard deviation: Population variance: Σ(x − mean)² ÷ n. Use when your data includes the entire population.",
          "Variance & standard deviation: Standard deviation: Square root of variance. Same formula, whether sample or population.",
          "Quartiles (Q1, Q2, Q3) & IQR: Method: Median of lower/upper half (exclusive median). Commonly used in textbooks and box plots.",
          "Quartiles (Q1, Q2, Q3) & IQR: Step 1: Sort data. Find median (Q2).",
          "Quartiles (Q1, Q2, Q3) & IQR: Step 2: Q1 = median of the lower half (values below median, excluding median when n is odd).",
          "Quartiles (Q1, Q2, Q3) & IQR: Step 3: Q3 = median of the upper half (values above median, excluding median when n is odd).",
          "Quartiles (Q1, Q2, Q3) & IQR: IQR (interquartile range) = Q3 − Q1.",
          "Geometric mean: Formula: (x₁ × x₂ × … × xₙ)^(1/n), or equivalently exp(Σ ln(xᵢ) / n).",
          "Geometric mean: Requires all values to be positive. Shows N/A if any value is zero or negative.",
          "Geometric mean: Useful when averaging ratios or multiplicative growth rates.",
          "Harmonic mean: Formula: n / (1/x₁ + 1/x₂ + … + 1/xₙ).",
          "Harmonic mean: Requires all values to be positive and non-zero. Shows N/A otherwise.",
          "Harmonic mean: Useful for rates (e.g., average speed over equal distances).",
        ],
      },
    ],
    faq: [
      {
        question: "How can I compute mean, median, mode, and other stats with this calculator?",
        answer:
          "Paste or type numbers, then run the calculator to get mean, median, mode, range, variance, and related statistics.",
      },
      {
        question: "How does this average calculator derive each statistic from my numbers?",
        answer:
          "It parses your values, sorts the dataset when needed, and applies standard formulas for each metric.",
      },
      {
        question: "What is this average calculator for, and which methods does it use?",
        answer:
          "It is for quick statistical summaries in classwork, reporting, and research checks with clearly defined methods.",
      },
      {
        question: "Why use a dedicated average and statistics calculator in the browser?",
        answer:
          "It saves time, reduces manual mistakes, and keeps calculations next to your working documents.",
      },
      {
        question: "Where are averages and spread used in school, research, or business?",
        answer:
          "They are used for grade summaries, experiment analysis, survey interpretation, and performance tracking.",
      },
    ],
  },
  "calculator.standard-deviation-calculator": {
    h1: "Standard Deviation Calculator",
    subtitle: "Online standard deviation calculator",
    guideTitle: "Standard deviation formula & step-by-step guide",
    guideIntro:
      "Use this page to compute population and sample spread metrics and follow the exact formula flow from mean to variance, SD, CV, SS, and SEM.",
    sections: [
      {
        title: "1. How to use this calculator",
        type: "unordered",
        items: [
          "Enter numbers separated by commas, spaces, or line breaks. Results update automatically after a short delay while you type; you can also press Calculate for an immediate run.",
          "Use Sort ascending to rewrite your list in order, Reset to clear, and Copy results to copy every statistic (same order as the on-page cards, plus sorted values).",
          "Adjust decimal places and optional thousands separators.",
        ],
      },
      {
        title: "2. What the results cards show",
        type: "unordered",
        items: [
          "Count (n), Sum, Mean — basic size and average of your list.",
          "Range, Minimum, Maximum — range = max − min.",
          "MAD — mean absolute deviation: (1/n) Σ|xᵢ − x̄|.",
          "Degrees of freedom (n − 1) — divisor used for sample variance.",
          "Variance & standard deviation — population (÷ n) and sample (÷ (n − 1)); SD is square root of matching variance.",
          "CV — population / sample: σ / |x̄| and s / |x̄|; N/A if mean is 0.",
          "Sum of squares (SS) — Σ(xᵢ − x̄)².",
          "Standard error of the mean — s / √n.",
        ],
      },
      {
        title: "3. How to calculate standard deviation step by step",
        type: "ordered",
        items: [
          "Find the mean: x̄ = (x₁ + x₂ + … + xₙ) / n.",
          "Compute deviations: (xᵢ − x̄).",
          "Square each deviation: (xᵢ − x̄)².",
          "Sum squared deviations: SS = Σ(xᵢ − x̄)².",
          "Divide to get variance: population σ² = SS / n, sample s² = SS / (n − 1).",
          "Take square root: σ = √(SS / n), s = √(SS / (n − 1)).",
        ],
      },
      {
        title: "4. Population vs Sample Standard Deviation",
        type: "paragraphs",
        items: [
          "Use population formulas when your list is the complete set you want to describe.",
          "Use sample formulas when your list is only part of a larger group and you want to generalize; dividing by (n − 1) corrects bias in the variance estimate.",
        ],
      },
      {
        title: "5. Privacy",
        type: "paragraphs",
        items: ["All math runs in your browser; numbers are not sent to a server."],
      },
    ],
    faq: [
      {
        question: "What is Population vs Sample Standard Deviation?",
        answer:
          "Population standard deviation uses every member of the group and divides squared deviations by n. Sample standard deviation is for data drawn from a larger population and divides by (n − 1) so the estimate is unbiased.",
      },
      {
        question: "What is the standard deviation formula?",
        answer:
          "Compute SS = Σ(xᵢ − mean)², divide by n (population) or n − 1 (sample) to get variance, then take the square root.",
      },
      {
        question: "How to calculate standard deviation step by step?",
        answer:
          "Find mean, deviations, squared deviations, sum them as SS, divide by n or n−1 for variance, then square-root for SD.",
      },
      {
        question: "What is Sum of Squares (SS), and why does it appear after CV on the screen?",
        answer:
          "SS = Σ(xᵢ − x̄)². It is the exact quantity divided by n or (n − 1) for variance. It is shown after CV for layout only.",
      },
      {
        question: "What are Range, MAD, CV, and degrees of freedom (n − 1) on this page?",
        answer:
          "Range is max − min, MAD is (1/n) Σ|xᵢ − x̄|, CV is SD divided by |mean|, and degrees of freedom is n − 1 for sample variance.",
      },
      {
        question: "What does “Standard error of the mean (s / √n)” mean?",
        answer:
          "It measures how much the sample mean would vary across repeated sampling. This page reports SEM = s / √n.",
      },
    ],
  },
  "calculator.calculator": {
    h1: "Calculator",
    subtitle: "Online calculator for everyday math",
    guideTitle: "Calculator Guide",
    guideIntro:
      "Best for fast arithmetic while working in a browser tab. Need percentage-focused workflows? Try Percentage Calculator.",
    sections: [
      {
        title: "1. How can I use this online calculator on the page (keyboard, memory, history)?",
        type: "ordered",
        items: [
          "Use the on-screen buttons or your keyboard for input. Numbers (0-9), decimal point (.), and operators (+, −, ×, ÷) are supported.",
          "Memory: MC (clear), MR (recall), M+ (add to memory), M− (subtract from memory), MS (store).",
          "Functions: % (percent), √ (square root), x² (square), 1/x (reciprocal), ± (negate).",
          "CE clears the current entry; C clears all. Backspace or ⌫ removes the last digit.",
          "Press Enter or = to calculate. Escape or Delete to clear all.",
        ],
      },
      {
        title: "2. How does this calculator evaluate expressions locally in my browser?",
        type: "paragraphs",
        items: [
          "The calculator uses floating-point arithmetic. All processing runs in your browser; no data is sent to any server.",
          "Memory operations (M+, M−, MR, MC, MS) store a value that persists until cleared or the page is refreshed.",
        ],
      },
      {
        title: "3. What can this calculator do, and what are its practical limits?",
        type: "paragraphs",
        items: [
          "Free online calculator for basic and scientific calculations. Supports memory, percentages, square root, and reciprocal.",
          "Works on desktop and mobile. No signup required.",
        ],
      },
      {
        title: "4. Why use a browser calculator instead of a phone or desktop app?",
        type: "unordered",
        items: [
          "Keyboard support for fast input.",
          "Memory functions for multi-step calculations.",
          "Scientific functions: square root, square, reciprocal, percent.",
          "Responsive design for all screen sizes.",
        ],
      },
      {
        title: "5. When is a quick web calculator most helpful for homework or work?",
        type: "unordered",
        items: [
          "Quick arithmetic: shopping, splitting bills, tip calculations.",
          "Academic: homework, basic math practice.",
          "Finance: simple interest, percentage calculations.",
          "Daily use: unit conversions, recipe scaling.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I use this online calculator on the page (keyboard, memory, history)?",
        answer:
          "Use on-screen keys or your keyboard, then apply memory and function keys for multi-step calculations.",
      },
      {
        question: "How does this calculator evaluate expressions locally in my browser?",
        answer:
          "It evaluates operations in browser runtime using local floating-point arithmetic without server processing.",
      },
      {
        question: "What can this calculator do, and what are its practical limits?",
        answer:
          "It handles daily arithmetic and common scientific functions, but it is not a full symbolic or graphing system.",
      },
      {
        question: "Why use a browser calculator instead of a phone or desktop app?",
        answer:
          "It opens instantly in the same workspace and works well while you are reading docs or filling forms.",
      },
      {
        question: "When is a quick web calculator most helpful for homework or work?",
        answer:
          "It is useful for quick checks, expense math, grade work, and repeated percentage calculations.",
      },
    ],
  },
  "calculator.gpa-calculator": {
    h1: "GPA Calculator",
    subtitle: "Online GPA calculator for semester planning",
    guideTitle: "GPA Guide",
    guideIntro: "",
    sections: [
      {
        title: "1. How can I calculate GPA, course grades, or a target GPA with this tool?",
        type: "ordered",
        items: [
          "Select your school's grading scale (4.0, 4.3, 4.5, or 5.0). The 4.0 scale is most common.",
          "Click Add Course to add each course. Enter course name, credit hours, and letter grade.",
          "GPA updates automatically as you change grades or credits.",
          "Use Reset All to start over.",
        ],
      },
      {
        title: "2. How does this GPA calculator handle weighted GPA and credit hours?",
        type: "paragraphs",
        items: [
          "GPA = Sum of (Grade Points × Credit Hours) ÷ Total Credit Hours.",
          "Letter grades are converted to numeric points based on your selected scale.",
          "All calculations run in your browser. No data is sent to any server.",
        ],
      },
      {
        title: "3. What grading scales and features does this GPA calculator support?",
        type: "paragraphs",
        items: [
          "Free online GPA calculator for students. Supports multiple grading scales used by universities and colleges worldwide.",
          "Use it to plan your semester, track progress, or prepare for college applications and scholarships.",
        ],
      },
      {
        title: "4. Why plan GPA and semester goals with a browser-based calculator?",
        type: "unordered",
        items: [
          "Multiple grading scales: 4.0, 4.3, 4.5, and 5.0 (weighted).",
          "Credit hour weighting for accurate weighted GPA.",
          "Real-time updates as you edit grades.",
          "Add or remove courses anytime.",
        ],
      },
      {
        title: "5. When do students use GPA tools for applications and degree planning?",
        type: "unordered",
        items: [
          "Semester planning: See how different grades would affect your GPA.",
          "College applications: Calculate cumulative GPA for applications.",
          "Scholarship eligibility: Check if you meet GPA requirements.",
          "Academic advising: Track progress toward graduation.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I calculate GPA, course grades, or a target GPA with this tool?",
        answer:
          "Select a grading scale, add courses with credits and grades, then review the live GPA result as you edit.",
      },
      {
        question: "How does this GPA calculator handle weighted GPA and credit hours?",
        answer:
          "It converts grades to points by your selected scale and computes a credit-weighted average.",
      },
      {
        question: "What grading scales and features does this GPA calculator support?",
        answer:
          "It supports 4.0, 4.3, 4.5, and 5.0 scales with add/remove course rows and instant updates.",
      },
      {
        question: "Why plan GPA and semester goals with a browser-based calculator?",
        answer:
          "It helps you test grade scenarios quickly while keeping planning in one place.",
      },
      {
        question: "When do students use GPA tools for applications and degree planning?",
        answer:
          "Students use them for scholarship checks, graduation planning, and term-by-term goal setting.",
      },
    ],
  },
  "calculator.gpa-calculator.target-gpa": {
    h1: "Target GPA Calculator",
    subtitle: "calculator",
    guideTitle: "Guide: inputs, formulas, and “Credits at expected GPA”",
    guideIntro: "",
    sections: [
      {
        title: "1. What each field means",
        type: "unordered",
        items: [
          "Current cumulative credits (C) — credits already on your transcript toward this GPA.",
          "Current cumulative GPA (G) — your GPA for those C credits.",
          "Target cumulative GPA (T) — the GPA you want after this term.",
          "Planned credits (this term) (N) — credits used for Required term GPA.",
          "Expected term GPA (optional) (S) — assumed achievable term GPA used for Credits at expected GPA.",
        ],
      },
      {
        title: "2. Core idea: GPA after this term",
        type: "paragraphs",
        items: [
          "Your quality points so far are C × G. This term adds N × R quality points if term GPA is R.",
          "New cumulative GPA = (C×G + N×R) / (C + N).",
          "Set this equal to target T and solve for R.",
        ],
      },
      {
        title: "3. Required term GPA (step by step)",
        type: "ordered",
        items: [
          "Start: (C×G + N×R) / (C + N) = T",
          "Multiply: C×G + N×R = T×(C + N)",
          "Solve: R = ( T×(C + N) − C×G ) / N",
          "Special case: if C = 0, then R = T",
        ],
      },
      {
        title: "4. “Credits at expected GPA” — what it means",
        type: "paragraphs",
        items: [
          "This metric answers: if future credits average S, how many credits are needed to make cumulative GPA exactly T?",
          "Formula: N′ = C×(T − G) / (S − T), when S ≠ T.",
          "To raise cumulative GPA (T > G), expected term GPA must satisfy S > T.",
        ],
      },
      {
        title: "5. Limits of this model",
        type: "unordered",
        items: [
          "It does not model school-specific rules such as grade replacement, pass/fail, withdrawal, repeated courses, or rounding.",
          "Required term GPA above your scale maximum means the goal is not reachable in one term with the entered credits.",
          "Credits at expected GPA is an estimate that assumes one block of credits at GPA S.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I estimate the term GPA needed for a target cumulative GPA?",
        answer:
          "Enter current cumulative credits/GPA, target GPA, and planned credits. The tool solves the weighted-GPA equation for required term GPA.",
      },
      {
        question: "What does “Credits at expected GPA” mean?",
        answer:
          "It estimates how many additional credits are needed at your assumed expected term GPA to hit the target cumulative GPA.",
      },
      {
        question: "Why can this value become N/A?",
        answer:
          "When constraints are mathematically impossible (for example, expected GPA is not higher than target while trying to raise cumulative GPA).",
      },
      {
        question: "What if required term GPA exceeds the scale maximum?",
        answer:
          "The target is not achievable this term with the entered credits; increase credits or lower the target.",
      },
      {
        question: "Does this match every school policy?",
        answer:
          "No. It is a weighted-average model and does not include institution-specific replacement/rounding rules.",
      },
    ],
  },
  "calculator.percentage-calculator": {
    h1: "Percentage Calculator",
    subtitle: "Online percentage calculator for daily math",
    guideTitle: "Guide",
    guideIntro: "Formulas in LaTeX notation, numeric walkthroughs, and quick links into each calculator tab.",
    sections: [
      {
        title: "1. How can I use the percentage calculator tabs for discounts, tips, or grades?",
        type: "ordered",
        items: [
          "Basic Percentage: Enter a percentage and a number to find X% of that number.",
          "Percentage Change: Enter original and new values to calculate the percentage increase or decrease.",
          "Percentage Of: Enter total (A) and part (B) to see what percent B is of A.",
          "Value After Change: Enter a starting value and a percent change (negative for decrease) to get the final value.",
          "Results update as you type. Use Reset to clear the current tab. Recent calculations are saved locally (up to five).",
        ],
      },
      {
        title: "2. How does this percentage calculator apply formulas in each mode?",
        type: "paragraphs",
        items: [
          "Basic: Result = (Percentage ÷ 100) × Number.",
          "Change: ((New Value − Old Value) ÷ Old Value) × 100.",
          "Percentage Of: (Part ÷ Total) × 100.",
          "Value After Change: Starting Value × (1 + Change% ÷ 100).",
          "All calculations run in your browser. History is stored only in your browser (localStorage).",
        ],
      },
      {
        title: "3. What percentage problems does this tool solve, and how is it organized?",
        type: "paragraphs",
        items: [
          "Free online percentage calculator for everyday math. Calculate discounts, tax, growth rates, and more.",
          "Use it for shopping, investments, grades, or any percentage-related calculation.",
        ],
      },
      {
        title: "4. Why use a multi-tab percentage calculator in the browser?",
        type: "unordered",
        items: [
          "Four modes: Basic, change, part-of-whole, and value after a percent change.",
          "Real-time results, comma-formatted numbers, and a short sentence explaining each result.",
          "Recent history with one-click restore. No signup required.",
          "Works on any device with a browser.",
        ],
      },
      {
        title: "5. When do people rely on percentage math for finance, school, or shopping?",
        type: "unordered",
        items: [
          "Shopping: Calculate discount amounts and final prices.",
          "Finance: Investment returns, interest, and tax.",
          "Academics: Test scores and grade percentages.",
          "Business: Sales growth and revenue change.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I use the percentage calculator tabs for discounts, tips, or grades?",
        answer:
          "Choose the matching tab, enter values, and read the result instantly with context text.",
      },
      {
        question: "How does this percentage calculator apply formulas in each mode?",
        answer:
          "Each tab applies a dedicated percentage formula for that specific question type.",
      },
      {
        question: "What percentage problems does this tool solve, and how is it organized?",
        answer:
          "It covers percent-of, percent-change, part-of-whole, and value-after-change workflows.",
      },
      {
        question: "Why use a multi-tab percentage calculator in the browser?",
        answer:
          "It avoids formula switching mistakes and keeps common percentage tasks in one place.",
      },
      {
        question: "When do people rely on percentage math for finance, school, or shopping?",
        answer:
          "They use it for discounts, grade checks, growth tracking, taxes, and reporting.",
      },
    ],
  },
  "calculator.programmer-calculator": {
    h1: "Programmer Calculator",
    subtitle: "Online programmer calculator for base conversion",
    guideTitle: "Programmer Calculator Guide",
    guideIntro: "",
    sections: [
      {
        title: "1. How can I use this programmer calculator for bases and bitwise operations?",
        type: "ordered",
        items: [
          "Select HEX / DEC / OCT / BIN and word size from QWORD▾.",
          "Enter digits on the keypad. Use bitwise ops, << and >> with shift-mode dropdown. Open the 2×2 dot tab to toggle bits in the grid.",
          "For two-operand functions: enter the first value, tap the operator, enter the second value, then =.",
          "C clears the calculator; Backspace removes one digit. MS stores the display; M▾ opens MR, MC, and M+.",
        ],
      },
      {
        title: "2. What does the programmer calculator include, and how do number bases work here?",
        type: "paragraphs",
        items: [
          "Programmer Calculator targets developers and students who work with integers in multiple radices and bit patterns.",
          "Exact formulas, wrapping, shift semantics, and bitwise examples are in the technical section above.",
        ],
      },
      {
        title: "3. Why use an in-browser programmer calculator while coding or debugging?",
        type: "unordered",
        items: [
          "One value drives every readout and the bit grid, so you do not jump between separate converters.",
          "No install or account; everything runs locally in your browser.",
        ],
      },
      {
        title: "4. Where do developers use base conversion and bitwise math in real projects?",
        type: "unordered",
        items: [
          "Embedded: masks, flags, and register-sized values.",
          "Protocols and file formats: quick hex/binary inspection.",
          "Learning: compare radix views and bit patterns side by side.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I use this programmer calculator for bases and bitwise operations?",
        answer:
          "Pick a radix, enter values, then run arithmetic, shift, and bitwise actions from the same interface.",
      },
      {
        question: "What does the programmer calculator include, and how do number bases work here?",
        answer:
          "It keeps one underlying integer and shows synchronized views across BIN, OCT, DEC, and HEX.",
      },
      {
        question: "Why use an in-browser programmer calculator while coding or debugging?",
        answer:
          "It reduces context switching and makes quick base conversion and bit checks easier during development.",
      },
      {
        question: "Where do developers use base conversion and bitwise math in real projects?",
        answer:
          "Developers use it for masks, protocol parsing, register checks, and debugging binary data paths.",
      },
    ],
  },
};

const uiByLocalKeyEn = {
  calculator: calcUiEn.average, // intentionally not used for hub
  "calculator.average-calculator": calcUiEn.average,
  "calculator.standard-deviation-calculator": calcUiEn.standardDeviation,
  "calculator.calculator": calcUiEn.calculator,
  "calculator.gpa-calculator": calcUiEn.gpa,
  "calculator.gpa-calculator.target-gpa": calcUiEn.targetGpa,
  "calculator.percentage-calculator": calcUiEn.percentage,
  "calculator.programmer-calculator": calcUiEn.programmer,
};

const uiByLocalKeyKo = {
  "calculator.average-calculator": calcUiKo.average,
  "calculator.standard-deviation-calculator": calcUiKo.standardDeviation,
  "calculator.calculator": calcUiKo.calculator,
  "calculator.gpa-calculator": calcUiKo.gpa,
  "calculator.gpa-calculator.target-gpa": calcUiKo.targetGpa,
  "calculator.percentage-calculator": calcUiKo.percentage,
  "calculator.programmer-calculator": calcUiKo.programmer,
};

const localKeys = [
  "calculator",
  "calculator.average-calculator",
  "calculator.standard-deviation-calculator",
  "calculator.calculator",
  "calculator.gpa-calculator",
  "calculator.gpa-calculator.target-gpa",
  "calculator.percentage-calculator",
  "calculator.programmer-calculator",
];

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));

  const hubSrc = locale === "en" ? calcEn.calculator : calcKo.calculator;
  data.byPath["tools.calculator"] = {
    ...hubSrc,
    backToHome: locale === "en" ? "← Back to home" : "← 홈으로",
    ui: {
      backToHome: locale === "en" ? "← Back to home" : "← 홈으로",
      healthToolsLink: locale === "en" ? "Health Tools" : "건강 도구",
      healthToolsLabel: "Health Tools",
      timeToolsLink: locale === "en" ? "Time Tools" : "시간 도구",
      unitConverterLink: locale === "en" ? "Unit Converter" : "단위 변환기",
    },
  };

  for (const localKey of localKeys) {
    if (localKey === "calculator") continue;
    const pathKey = `tools.${localKey}`;
    const src = locale === "en" ? calcEn[localKey] : calcKo[localKey];
    if (!src) continue;
    const ui = locale === "en" ? uiByLocalKeyEn[localKey] : uiByLocalKeyKo[localKey];

    data.byPath[pathKey] = {
      ...src,
      ui,
      backToHub: locale === "en" ? "← Back to Calculator" : "← 계산기 허브로",
    };

    if (localKey === "calculator.gpa-calculator") {
      data.byPath[pathKey].relatedLinks =
        locale === "en" ? gpaRelatedLinksEn : gpaRelatedLinksKo;
    }
    if (localKey === "calculator.percentage-calculator") {
      data.byPath[pathKey].relatedLinks =
        locale === "en" ? percentageFaqLinksEn : percentageFaqLinksKo;
    }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with Calculator entries`);
}
