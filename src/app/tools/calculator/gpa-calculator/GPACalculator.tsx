"use client";

import { useState, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

const SAMPLE_COURSES: Omit<Course, "id">[] = [
  { name: "Introduction to CS", credits: 3, grade: "A" },
  { name: "Calculus I", credits: 4, grade: "B+" },
  { name: "English Writing", credits: 3, grade: "A-" },
  { name: "Physics Lab", credits: 1, grade: "B" },
];

const GRADE_POINTS: Record<string, Record<string, number>> = {
  "5.0": {
    "A+": 5.0, "A": 4.5, "A-": 4.2, "B+": 3.8, "B": 3.5, "B-": 3.2,
    "C+": 2.8, "C": 2.5, "C-": 2.2, "D+": 1.8, "D": 1.5, "D-": 1.2, "F": 0,
  },
  "4.5": {
    "A+": 4.5, "A": 4.3, "A-": 4.0, "B+": 3.5, "B": 3.3, "B-": 3.0,
    "C+": 2.5, "C": 2.3, "C-": 2.0, "D+": 1.5, "D": 1.3, "D-": 1.0, "F": 0,
  },
  "4.3": {
    "A+": 4.3, "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7, "D+": 1.3, "D": 1.0, "D-": 0.7, "F": 0,
  },
  "4.0": {
    "A+": 4.0, "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7, "D+": 1.3, "D": 1.0, "D-": 0.7, "F": 0,
  },
};

const GRADES = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];

const SCALE_OPTIONS = [
  { value: "4.0", label: "4.0 Scale (A = 4.0) - Most Common" },
  { value: "5.0", label: "5.0 Scale (A+ = 5.0)" },
  { value: "4.5", label: "4.5 Scale (A+ = 4.5)" },
  { value: "4.3", label: "4.3 Scale (A+ = 4.3)" },
] as const;

interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

function getLetterGrade(gpa: number, scale: string): string {
  const s = parseFloat(scale);
  if (s >= 5) {
    if (gpa >= s) return "A+";
    if (gpa >= 4.49) return "A";
    if (gpa >= 4.19) return "A-";
    if (gpa >= 3.79) return "B+";
    if (gpa >= 3.49) return "B";
    if (gpa >= 3.19) return "B-";
    if (gpa >= 2.79) return "C+";
    if (gpa >= 2.49) return "C";
    if (gpa >= 2.19) return "C-";
    if (gpa >= 1.79) return "D+";
    if (gpa >= 1.49) return "D";
    if (gpa >= 1.19) return "D-";
  } else {
    if (gpa >= 3.99) return "A";
    if (gpa >= 3.69) return "A-";
    if (gpa >= 3.29) return "B+";
    if (gpa >= 2.99) return "B";
    if (gpa >= 2.69) return "B-";
    if (gpa >= 2.29) return "C+";
    if (gpa >= 1.99) return "C";
    if (gpa >= 1.69) return "C-";
    if (gpa >= 1.29) return "D+";
    if (gpa >= 0.99) return "D";
    if (gpa >= 0.69) return "D-";
  }
  return "F";
}

const cardCls = "rounded-xl border border-border bg-surface p-6";
const inputCls =
  "rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
const selectCls =
  "rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

export default function GPACalculator() {
  const [scale, setScale] = useState("4.0");
  const [courses, setCourses] = useState<Course[]>([
    { id: crypto.randomUUID(), name: "", credits: 3, grade: "A" },
    { id: crypto.randomUUID(), name: "", credits: 2, grade: "D+" },
    { id: crypto.randomUUID(), name: "", credits: 1, grade: "B-" },
  ]);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
      toastTimeoutRef.current = null;
    }, 2500);
  };

  const addCourse = () => {
    setCourses((c) => [...c, { id: crypto.randomUUID(), name: "", credits: 0, grade: "A" }]);
  };

  const removeCourse = (id: string) => {
    setCourses((c) => c.filter((x) => x.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses((c) =>
      c.map((x) => {
        if (x.id !== id) return x;
        if (field === "credits") {
          const v = typeof value === "number" ? value : parseFloat(String(value)) || 0;
          const clamped = Math.max(0, Math.min(99, v));
          return { ...x, credits: clamped };
        }
        return { ...x, [field]: value };
      })
    );
  };

  const useSampleData = () => {
    setCourses(
      SAMPLE_COURSES.map((c) => ({ ...c, id: crypto.randomUUID() }))
    );
    showToast("Sample data loaded");
  };

  const copyResults = async () => {
    const courseLines = courses
      .filter((c) => c.name.trim() || Number(c.credits) > 0)
      .map((c) => `  - ${(c.name || "(No name)").trim()} | ${c.credits || 0} credits | ${c.grade}`);
    const courseSection = courseLines.length > 0 ? `Course List:\n${courseLines.join("\n")}\n\n` : "";
    const text = `GPA Results (${scale} Scale)\n${"=".repeat(24)}\n${courseSection}Total Credits: ${totalCredits.toFixed(1)}\nGPA: ${gpa.toFixed(2)}\nLetter Grade: ${letterGrade}`;
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied to clipboard");
    } catch {
      showToast("Copy failed");
    }
  };

  let totalPoints = 0;
  let totalCredits = 0;
  courses.forEach((course) => {
    const credits = Number(course.credits) || 0;
    if (credits > 0) {
      const points = GRADE_POINTS[scale]?.[course.grade] ?? 0;
      totalPoints += points * credits;
      totalCredits += credits;
    }
  });
  const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
  const letterGrade = totalCredits > 0 ? getLetterGrade(gpa, scale) : "N/A";

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* Settings card */}
      <div className={cardCls}>
        <h3 className="mb-4 text-lg font-semibold text-slate-200">Settings</h3>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <label htmlFor="gradeScale" className="shrink-0 text-sm text-slate-400">
            Grading Scale:
          </label>
          <select
            id="gradeScale"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
            className={`${selectCls} min-w-0 flex-1 sm:max-w-sm`}
          >
            {SCALE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          💡 Check your school&apos;s grading system scale if unsure.
        </p>
      </div>

      {/* Course List card */}
      <div className={cardCls}>
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="border-b-2 border-slate-500 pb-1 text-lg font-semibold text-slate-200">
            Course List
          </h3>
          <button
            type="button"
            onClick={addCourse}
            className="flex items-center gap-1.5 self-start rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-100 transition-colors hover:bg-slate-600"
          >
            <span className="text-lg leading-none">+</span>
            Add Course
          </button>
        </div>

        <div className="scrollbar-thin max-h-[50vh] space-y-3 overflow-y-auto pr-1">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-wrap items-center gap-3"
            >
              <input
                type="text"
                placeholder="Course Name"
                value={course.name}
                onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                className={`${inputCls} min-w-[140px] flex-1`}
              />
              <NumberInputWithStepper
                value={String(course.credits ?? "")}
                onChange={(v) => updateCourse(course.id, "credits", parseFloat(v) || 0)}
                placeholder="Credits"
                min={0}
                max={99}
                step={0.5}
                className="w-20"
                aria-label="Credits"
              />
              <select
                value={course.grade}
                onChange={(e) => updateCourse(course.id, "grade", e.target.value)}
                className={`${selectCls} w-20`}
              >
                {GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => removeCourse(course.id)}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-red-400"
                title="Delete course"
                aria-label="Delete course"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Results */}
        <div
          role="region"
          aria-label="GPA results"
          className="mt-6 grid grid-cols-3 gap-4 rounded-lg border border-slate-600 bg-slate-800/50 p-4"
        >
          <div className="text-center">
            <p className="text-xs text-slate-500">Total Credits</p>
            <p className="mt-1 text-xl font-semibold text-slate-100">{totalCredits.toFixed(1)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-slate-500">GPA</p>
            <p className="mt-1 text-xl font-semibold text-slate-100">{gpa.toFixed(2)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-slate-500">Letter Grade</p>
            <p className="mt-1 text-xl font-semibold text-slate-100">{letterGrade}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setCourses([{ id: crypto.randomUUID(), name: "", credits: 0, grade: "A" }]);
              showToast("Reset complete");
            }}
            className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 transition-colors hover:bg-slate-600 min-h-[2.5rem] touch-manipulation"
          >
            Reset All
          </button>
          <button
            type="button"
            onClick={useSampleData}
            className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 transition-colors hover:bg-slate-600 min-h-[2.5rem] touch-manipulation"
          >
            Use sample data
          </button>
          <button
            type="button"
            onClick={copyResults}
            className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 transition-colors hover:bg-slate-600 min-h-[2.5rem] touch-manipulation"
          >
            Copy results
          </button>
        </div>

        {toast && (
          <div
            role="status"
            aria-live="polite"
            className="mt-4 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-slate-200"
          >
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
