import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import Link from "next/link";
import ProgrammerCalculator from "./ProgrammerCalculator";
import ProgrammerCalculatorTechnicalReference from "./ProgrammerCalculatorTechnicalReference";

const PROGRAMMER_DOC_SECTION =
  "w-full rounded-xl border border-border bg-surface p-6 sm:p-8";

export const metadata: Metadata = createMetadata({
  title: "Programmer Calculator — Binary, Hex, Octal, Decimal",
  description:
    "Free programmer calculator for binary, hex, octal, and decimal workflows. Includes bitwise ops, shifts, and bit-grid checks in browser.",
  path: "/tools/calculator/programmer-calculator",
  keywords: [
    "programmer calculator",
    "binary calculator",
    "hex calculator",
    "octal calculator",
    "bitwise calculator",
    "QWORD calculator",
    "bit toggle calculator",
    "radix calculator",
    "withustools",
  ],
});

const PROGRAMMER_GUIDE = {
  usage: [
    "Select HEX / DEC / OCT / BIN (blue accent = active radix) and word size from QWORD▾. How each row displays the value is covered in the technical section above.",
    "Enter digits on the keypad. Use the row above the keys for bitwise ops; use << and >> with the shift-mode dropdown. Open the 2×2 dot tab to toggle bits in the grid.",
    "For two-operand functions: enter the first value, tap the operator, enter the second value, then =. NOT, ±, and shifts apply to the number currently shown.",
    "C clears the calculator; Backspace removes one digit. MS stores the display; M▾ opens MR, MC, and M+. With focus inside the widget, you can also use the keyboard—see the technical section above.",
  ],
  about: [
    "Programmer Calculator targets developers and students who work with integers in multiple radices and bit patterns. Exact formulas, wrapping, shift semantics, and bitwise examples are in the technical section above.",
  ],
  advantages: [
    "One value drives every readout and the bit grid, so you do not jump between separate converters.",
    "No install or account; everything runs locally in your browser.",
  ],
  useCases: [
    "Embedded: masks, flags, and register-sized values.",
    "Protocols and file formats: quick hex/binary inspection.",
    "Learning: compare radix views and bit patterns side by side.",
  ],
};

const FAQ_ITEMS = [
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
];

export default function ProgrammerCalculatorPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Programmer Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online programmer calculator for base conversion
            </p>
          </div>
        </div>
      </div>

      <section aria-label="Programmer calculator" className="mx-auto w-full max-w-xl">
        <ProgrammerCalculator />
      </section>

      <section aria-label="Technical reference" className={`mx-auto mt-10 ${PROGRAMMER_DOC_SECTION}`}>
        <ProgrammerCalculatorTechnicalReference />
      </section>

      <section aria-label="User guide" className={`mx-auto mt-12 ${PROGRAMMER_DOC_SECTION}`}>
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Programmer Calculator Guide
        </h2>
        <div className="scrollbar-thin space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I use this programmer calculator for bases and bitwise operations?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {PROGRAMMER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. What does the programmer calculator include, and how do number bases work here?
            </h3>
            <div className="space-y-2">
              {PROGRAMMER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. Why use an in-browser programmer calculator while coding or debugging?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {PROGRAMMER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Where do developers use base conversion and bitwise math in real projects?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {PROGRAMMER_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 flex gap-4">
        <Link
          href="/tools/calculator"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to Calculator
        </Link>
        <Link href="/" className="text-slate-400 underline transition-colors hover:text-slate-200">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
