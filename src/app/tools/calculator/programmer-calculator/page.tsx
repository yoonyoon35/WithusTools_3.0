import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import Link from "next/link";
import ProgrammerCalculator from "./ProgrammerCalculator";

export const metadata: Metadata = createMetadata({
  title: "Programmer Calculator — Binary, Hex, Octal, Decimal",
  description:
    "Free programmer calculator: binary, hexadecimal, octal, and decimal in one view. 64-bit unsigned (QWORD), bit toggle grid, bitwise shifts, arithmetic, and memory. Runs in your browser.",
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
    "Select HEX, DEC, OCT, or BIN on the left. The blue bar shows the active input radix.",
    "Type digits using the keypad. Only digits valid for that radix are enabled (e.g. 0–1 in BIN, 0–7 in OCT, 0–9 in DEC, 0–9 and A–F in HEX).",
    "All four bases update at once from the same 32-bit unsigned value. Switch radix anytime; the value is preserved.",
    "Use << and >> for bitwise shift left/right on the current value. C clears; backspace deletes the last digit.",
    "Use +, −, ×, ÷, and % for arithmetic. = completes the operation. MS stores the current value; open M▾ for MR, MC, and M+.",
    "Tap the dot-grid icon to open Bit toggling: 64 bits in four rows of 16, grouped by nibbles with index labels. Click any 0/1 to flip that bit; HEX/DEC/OCT/BIN update immediately.",
  ],
  howItWorks: [
    "Values are kept as a 64-bit unsigned integer (0 … 18,446,744,073,709,551,615). Arithmetic and shifts wrap like unsigned QWORD math.",
    "Digit entry is parsed in the selected base and masked to 64 bits. The bit grid shows the same value and edits it in place.",
    "Everything runs locally in your browser; nothing is sent to a server.",
  ],
  about: [
    "Programmer Calculator is for developers and students who work with binary, hex, octal, and decimal in one place.",
    "It mirrors a familiar programmer-style layout: multi-base readout, keypad or bit grid, shifts, and optional memory keys.",
  ],
  advantages: [
    "Instant conversion across HEX, DEC, OCT, and BIN while you type, plus a visual 64-bit editor.",
    "Input limits match each base so invalid digits are never entered by mistake.",
    "No install or account—open the page and use it on desktop or mobile.",
  ],
  useCases: [
    "Embedded and low-level: inspect flags, masks, and register-sized values.",
    "Networking and protocols: quick hex/binary conversions.",
    "Learning: see the same number in every common radix at once.",
  ],
};

export default function ProgrammerCalculatorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Programmer Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">calculator</p>
          </div>
        </div>
      </div>

      <ProgrammerCalculator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="scrollbar-thin space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {PROGRAMMER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {PROGRAMMER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Programmer Calculator</h3>
            <div className="space-y-2">
              {PROGRAMMER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PROGRAMMER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
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
