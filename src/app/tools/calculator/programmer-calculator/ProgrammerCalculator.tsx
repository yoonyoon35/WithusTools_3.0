"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Base = "hex" | "dec" | "oct" | "bin";
type PanelMode = "keypad" | "bits";
type WordSize = "qword" | "dword" | "word" | "byte";
type ShiftMode = "arithmetic" | "logical" | "rotate" | "rotateThroughCarry";

const ACCENT = "#005A9E";
const PANEL = "rgb(30 41 59 / 0.6)";
const KEY_ACTIVE = "rgb(51 65 85)";
const KEY_DISABLED = "rgb(30 41 59 / 0.35)";

const QWORD_MASK = BigInt("18446744073709551615");
const B0 = BigInt(0);
const B1 = BigInt(1);

const WORD_BITS: Record<WordSize, number> = {
  qword: 64,
  dword: 32,
  word: 16,
  byte: 8,
};

const WORD_LABEL: Record<WordSize, string> = {
  qword: "QWORD",
  dword: "DWORD",
  word: "WORD",
  byte: "BYTE",
};

const SHIFT_MODE_MENU: Record<ShiftMode, string> = {
  arithmetic: "Arithmetic shift",
  logical: "Logical shift",
  rotate: "Rotate",
  rotateThroughCarry: "Rotate through carry",
};

/** Short label on the toolbar button (current mode + ▾). */
const SHIFT_MODE_BTN: Record<ShiftMode, string> = {
  arithmetic: "Arith",
  logical: "Logic",
  rotate: "Rot",
  rotateThroughCarry: "RTC",
};

const SHIFT_MODES_ORDER: ShiftMode[] = ["arithmetic", "logical", "rotate", "rotateThroughCarry"];

const RADIX: Record<Base, number> = {
  hex: 16,
  dec: 10,
  oct: 8,
  bin: 2,
};

function maskQ(n: bigint): bigint {
  return n & QWORD_MASK;
}

/** Mask to current word (unsigned width). */
function maskWord(n: bigint, ws: WordSize): bigint {
  const b = WORD_BITS[ws];
  if (b === 64) return maskQ(n);
  return n & ((B1 << BigInt(b)) - B1);
}

function shiftLeftOneImpl(v: bigint, mode: ShiftMode, carryIn: bigint, ws: WordSize): { out: bigint; carryOut: bigint } {
  const bits = WORD_BITS[ws];
  const vv = maskWord(v, ws);
  const msb = (vv >> BigInt(bits - 1)) & B1;

  switch (mode) {
    case "arithmetic":
    case "logical":
      return { out: maskWord(vv << B1, ws), carryOut: msb };
    case "rotate":
      return { out: maskWord((vv << B1) | msb, ws), carryOut: msb };
    case "rotateThroughCarry":
      return { out: maskWord((vv << B1) | (carryIn & B1), ws), carryOut: msb };
  }
}

function shiftRightOneImpl(v: bigint, mode: ShiftMode, carryIn: bigint, ws: WordSize): { out: bigint; carryOut: bigint } {
  const bits = WORD_BITS[ws];
  const vv = maskWord(v, ws);
  const lsb = vv & B1;
  const signBit = B1 << BigInt(bits - 1);

  switch (mode) {
    case "logical":
      return { out: maskWord(vv >> B1, ws), carryOut: lsb };
    case "arithmetic": {
      const signed = vv >= signBit ? vv - (B1 << BigInt(bits)) : vv;
      const shifted = signed >> B1;
      return { out: maskWord(shifted, ws), carryOut: lsb };
    }
    case "rotate":
      return { out: maskWord((vv >> B1) | (lsb << BigInt(bits - 1)), ws), carryOut: lsb };
    case "rotateThroughCarry":
      return { out: maskWord((vv >> B1) | ((carryIn & B1) << BigInt(bits - 1)), ws), carryOut: lsb };
  }
}

function maxInputLens(ws: WordSize): { bin: number; hex: number; oct: number; dec: number } {
  const b = WORD_BITS[ws];
  return {
    bin: b,
    hex: b / 4,
    oct: Math.ceil(b / 3),
    dec: b === 8 ? 3 : b === 16 ? 5 : b === 32 ? 10 : 20,
  };
}

function qwordFromString(s: string, radix: number): bigint {
  if (!s) return B0;
  let n = B0;
  for (let i = 0; i < s.length; i++) {
    const d = parseInt(s[i]!, radix);
    if (Number.isNaN(d)) continue;
    n = maskQ(n * BigInt(radix) + BigInt(d));
  }
  return n;
}

function mulUint64(a: bigint, b: bigint): bigint {
  return maskQ(a * b);
}

function formatBaseMasked(v: bigint, base: Base, ws: WordSize): string {
  const u = maskWord(v, ws);
  switch (base) {
    case "hex":
      return u.toString(16).toUpperCase();
    case "dec":
      return u.toString(10);
    case "oct":
      return u.toString(8);
    case "bin":
      return u.toString(2);
    default:
      return "0";
  }
}

/** DEC row: two's-complement signed in the current word size (e.g. BYTE 0xFF → −1). */
function formatDecSigned(v: bigint, ws: WordSize): string {
  const bits = WORD_BITS[ws];
  const mask = (B1 << BigInt(bits)) - B1;
  const u = v & mask;
  const signBit = B1 << BigInt(bits - 1);
  const signed = u >= signBit ? u - (B1 << BigInt(bits)) : u;
  return signed.toLocaleString("en-US");
}

function groupFromRightDigits(digitStr: string, chunk: number, separator: string): string {
  const clean = digitStr.replace(/[\s,]/g, "");
  if (!clean) return "";
  const parts: string[] = [];
  let i = clean.length;
  while (i > 0) {
    const start = Math.max(0, i - chunk);
    parts.unshift(clean.slice(start, i));
    i = start;
  }
  return parts.join(separator);
}

function formatGroupedUnsigned(v: bigint, panelBase: Base, ws: WordSize): string {
  const u = maskWord(v, ws);
  switch (panelBase) {
    case "hex":
      return groupFromRightDigits(u.toString(16).toUpperCase(), 4, " ");
    case "dec":
      return u.toLocaleString("en-US");
    case "oct":
      return groupFromRightDigits(u.toString(8), 3, " ");
    case "bin": {
      const padded = u.toString(2).padStart(WORD_BITS[ws], "0");
      return formatBinDigitsTrimmedSpaced(padded);
    }
    default:
      return formatBaseMasked(v, panelBase, ws);
  }
}

/** Drop MSB-aligned all-zero nibbles (0000); empty → "0". */
function trimLeadingZeroNibblesMSB(digits: string): string {
  let i = 0;
  while (i + 4 <= digits.length && digits.slice(i, i + 4) === "0000") {
    i += 4;
  }
  return digits.slice(i);
}

/** Space-separated nibbles from MSB; if length ≢ 4, MSB chunk is 1–3 bits (no padding). */
function groupBinDigitsToNibblesSpaced(digits: string): string {
  if (!digits) return "0";
  const parts: string[] = [];
  let i = 0;
  const rem = digits.length % 4;
  if (rem !== 0) {
    parts.push(digits.slice(0, rem));
    i = rem;
  }
  while (i < digits.length) {
    parts.push(digits.slice(i, i + 4));
    i += 4;
  }
  return parts.join(" ");
}

function formatBinDigitsTrimmedSpaced(paddedBinary: string): string {
  const t = trimLeadingZeroNibblesMSB(paddedBinary);
  return groupBinDigitsToNibblesSpaced(t === "" ? "0" : t);
}

/** BIN readout row: trim upper zero nibbles, then break after every 32 **bits** (digits). */
function formatBinPanelLines(v: bigint, ws: WordSize): string[] {
  const bits = WORD_BITS[ws];
  const bin = maskWord(v, ws).toString(2).padStart(bits, "0");
  let d = trimLeadingZeroNibblesMSB(bin);
  if (d === "") d = "0";
  if (d.length <= 32) {
    return [groupBinDigitsToNibblesSpaced(d)];
  }
  const lines: string[] = [];
  for (let i = 0; i < d.length; i += 32) {
    const chunk = d.slice(i, i + 32);
    lines.push(groupBinDigitsToNibblesSpaced(chunk));
  }
  return lines;
}

function formatGroupedEntry(buf: string, entryBase: Base): string {
  const decClean = buf.replace(/[\s,]/g, "");
  switch (entryBase) {
    case "hex":
      return groupFromRightDigits(buf.replace(/\s/g, "").toUpperCase(), 4, " ");
    case "dec":
      if (!decClean) return "";
      return groupFromRightDigits(decClean, 3, ",");
    case "oct":
      return groupFromRightDigits(buf.replace(/\s/g, ""), 3, " ");
    case "bin": {
      const clean = buf.replace(/\s/g, "").replace(/[^01]/g, "");
      if (!clean) return "";
      const t = trimLeadingZeroNibblesMSB(clean);
      return groupBinDigitsToNibblesSpaced(t === "" ? "0" : t);
    }
    default:
      return buf;
  }
}

function digitAllowed(char: string, base: Base): boolean {
  const c = char.toUpperCase();
  switch (base) {
    case "hex":
      return /^[0-9A-F]$/.test(c);
    case "dec":
      return /^[0-9]$/.test(c);
    case "oct":
      return /^[0-7]$/.test(c);
    case "bin":
      return c === "0" || c === "1";
    default:
      return false;
  }
}

function applyOpMasked(a: bigint, b: bigint, op: string, ws: WordSize): bigint {
  const ua = maskWord(a, ws);
  const ub = maskWord(b, ws);
  let r: bigint;
  switch (op) {
    case "+":
      r = ua + ub;
      break;
    case "-":
      r = ua - ub;
      break;
    case "*":
      r = mulUint64(ua, ub);
      break;
    case "/":
      if (ub === B0) return ua;
      r = ua / ub;
      break;
    case "%":
      if (ub === B0) return ua;
      r = ua % ub;
      break;
    case "&":
      r = ua & ub;
      break;
    case "|":
      r = ua | ub;
      break;
    case "^":
      r = ua ^ ub;
      break;
    case "nor":
      r = maskWord(~(ua | ub), ws);
      break;
    case "nand":
      r = maskWord(~(ua & ub), ws);
      break;
    default:
      r = ub;
  }
  return maskWord(r, ws);
}

function opToExprLabel(op: string): string {
  switch (op) {
    case "&":
      return "AND";
    case "|":
      return "OR";
    case "^":
      return "XOR";
    case "nor":
      return "NOR";
    case "nand":
      return "NAND";
    case "+":
      return "+";
    case "-":
      return "−";
    case "*":
      return "×";
    case "/":
      return "÷";
    case "%":
      return "%";
    default:
      return op;
  }
}

/** Expression-line operands use the same radix/style as the main display (avoids e.g. HEX `12` showing as decimal `18`). */
function formatExprOperandValue(n: bigint, b: Base, ws: WordSize): string {
  if (b === "dec") return formatDecSigned(n, ws);
  return formatGroupedUnsigned(n, b, ws);
}

function negateWord(v: bigint, ws: WordSize): bigint {
  const bits = WORD_BITS[ws];
  const mask = (B1 << BigInt(bits)) - B1;
  const x = v & mask;
  return ((~x & mask) + B1) & mask;
}

function readDisplayValue(buf: string, radix: number, value: bigint, ws: WordSize): bigint {
  if (buf !== "") return maskWord(qwordFromString(buf, radix), ws);
  return maskWord(value, ws);
}

/** Index of highest set bit in `u` within `bits` width, or −1 if zero. */
function highestSetBitIndex(u: bigint, bits: number): number {
  if (u === B0) return -1;
  for (let i = bits - 1; i >= 0; i--) {
    if ((u >> BigInt(i)) & B1) return i;
  }
  return -1;
}

/** One row: trim leading 0000 nibbles within the slice (only when the row is entirely above the value’s MSB). */
function rowOf16Compact(slice16: string): string {
  const t = trimLeadingZeroNibblesMSB(slice16);
  if (t === "") return "";
  return groupBinDigitsToNibblesSpaced(t);
}

/** Full row with nibble spacing (no intra-row trim) — keeps lower all-zero nibbles visible. */
function rowBitsGroupedFull(slice: string): string {
  return groupBinDigitsToNibblesSpaced(slice);
}

/**
 * Main BIN area: rows of 16 bits (MSB row first for QWORD/DWORD).
 * Rows entirely above the highest set bit are compact-empty; any row that reaches down to the MSB or below
 * shows the full slice so trailing 0 nibbles within the word are not dropped.
 */
function binMainRowsForWord(buf: string, value: bigint, ws: WordSize): string[] {
  const bits = WORD_BITS[ws];
  const raw =
    buf !== ""
      ? buf.replace(/\s/g, "").replace(/[^01]/g, "")
      : maskWord(value, ws).toString(2);
  const padded = raw.length > bits ? raw.slice(-bits) : raw.padStart(bits, "0");
  const wb = padded.slice(-bits);

  const uForMsb = maskWord(BigInt(`0b${wb}`), ws);
  const msb = highestSetBitIndex(uForMsb, bits);

  if (msb < 0) {
    if (bits === 64) return ["", "", "", "0"];
    if (bits === 32) return ["", "0"];
    return ["0"];
  }

  if (bits === 64) {
    return [0, 1, 2, 3].map((r) => {
      const slice = wb.slice(r * 16, r * 16 + 16);
      const rowLsbBit = 48 - r * 16;
      if (rowLsbBit > msb) return rowOf16Compact(slice);
      return rowBitsGroupedFull(slice);
    });
  }
  if (bits === 32) {
    return [0, 1].map((r) => {
      const slice = wb.slice(r * 16, r * 16 + 16);
      const rowLsbBit = 16 - r * 16;
      if (rowLsbBit > msb) return rowOf16Compact(slice);
      return rowBitsGroupedFull(slice);
    });
  }
  if (bits === 16) {
    return [rowBitsGroupedFull(wb)];
  }
  return [rowBitsGroupedFull(wb)];
}

function BitToggleGrid({
  value,
  onToggleBit,
  wordSize,
}: {
  value: bigint;
  onToggleBit: (bit: number) => void;
  wordSize: WordSize;
}) {
  const v = maskQ(value);
  const activeMax = WORD_BITS[wordSize] - 1;

  const rows = [0, 1, 2, 3].map((rowIdx) => {
    const rowBase = (3 - rowIdx) * 16;
    const nibbles = [0, 1, 2, 3].map((j) => {
      const lsbOfNibble = rowBase + (3 - j) * 4;
      const bits = [lsbOfNibble + 3, lsbOfNibble + 2, lsbOfNibble + 1, lsbOfNibble];
      return { lsbOfNibble, bits };
    });
    return { rowIdx, nibbles };
  });

  return (
    <div className="space-y-3 px-1 py-2">
      {rows.map(({ rowIdx, nibbles }) => (
        <div key={rowIdx} className="flex flex-col items-center gap-1">
          <div className="flex items-stretch justify-center gap-2 sm:gap-3">
            {nibbles.map(({ lsbOfNibble, bits }) => (
              <div key={lsbOfNibble} className="flex flex-col items-center gap-0.5">
                <div className="flex gap-px sm:gap-0.5">
                  {bits.map((bitIndex) => {
                    const active = bitIndex <= activeMax;
                    const one = active ? (v >> BigInt(bitIndex)) & B1 : B0;
                    const isOn = one === B1;
                    return (
                      <button
                        key={bitIndex}
                        type="button"
                        disabled={!active}
                        onClick={() => active && onToggleBit(bitIndex)}
                        className={`flex h-8 w-6 shrink-0 items-center justify-center rounded border font-mono text-base font-semibold leading-none transition-colors sm:h-9 sm:w-7 sm:text-lg ${
                          !active
                            ? "cursor-not-allowed border-transparent bg-slate-900/40 text-slate-600 opacity-70"
                            : isOn
                              ? "border-[#005A9E] bg-slate-800 text-[#4DA3E8]"
                              : "border-slate-600 bg-slate-800/60 text-slate-500"
                        }`}
                        aria-pressed={active ? isOn : undefined}
                        aria-disabled={!active}
                        aria-label={active ? `Bit ${bitIndex}, ${isOn ? "1" : "0"}` : `Bit ${bitIndex} (out of range for ${WORD_LABEL[wordSize]})`}
                      >
                        {isOn ? "1" : "0"}
                      </button>
                    );
                  })}
                </div>
                <span className="font-mono text-[10px] text-slate-500 sm:text-xs">{lsbOfNibble}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProgrammerCalculator() {
  const [base, setBase] = useState<Base>("bin");
  const [buf, setBuf] = useState("");
  const [value, setValue] = useState<bigint>(B0);
  const [pendingAcc, setPendingAcc] = useState<bigint | null>(null);
  const [pendingOp, setPendingOp] = useState<string | null>(null);
  const [fresh, setFresh] = useState(true);
  const [memory, setMemory] = useState<bigint>(B0);
  const [memMenuOpen, setMemMenuOpen] = useState(false);
  const [wordMenuOpen, setWordMenuOpen] = useState(false);
  const [shiftMenuOpen, setShiftMenuOpen] = useState(false);
  const [shiftMode, setShiftMode] = useState<ShiftMode>("logical");
  /** Single-bit carry for “Rotate through carry” (<< / >>). */
  const [shiftCarry, setShiftCarry] = useState<bigint>(B0);
  const [panelMode, setPanelMode] = useState<PanelMode>("keypad");
  const [wordSize, setWordSize] = useState<WordSize>("qword");
  /** In-progress formula without the right-hand operand being typed (e.g. `1 AND`, `1 AND 2 OR`). */
  const [exprProgress, setExprProgress] = useState("");
  /** Last completed line after `=`, until the user starts a new entry. */
  const [exprCompleted, setExprCompleted] = useState<string | null>(null);

  const calcRootRef = useRef<HTMLDivElement>(null);

  const radix = RADIX[base];
  const lens = maxInputLens(wordSize);

  const displayValue = useMemo(
    () => readDisplayValue(buf, radix, value, wordSize),
    [buf, radix, value, wordSize]
  );

  const mainDisplay = useMemo(() => {
    if (buf !== "") return formatGroupedEntry(buf, base);
    if (base === "dec") return formatDecSigned(value, wordSize);
    return formatGroupedUnsigned(value, base, wordSize);
  }, [buf, base, value, wordSize]);

  const binMainRows = useMemo(() => {
    if (base !== "bin") return null;
    return binMainRowsForWord(buf, value, wordSize);
  }, [base, buf, value, wordSize]);

  const expressionLine = useMemo(() => {
    if (exprCompleted) return exprCompleted;
    if (!exprProgress) return "";
    const rhs = buf !== "" ? formatGroupedEntry(buf, base) : "";
    return rhs ? `${exprProgress} ${rhs}` : exprProgress;
  }, [exprCompleted, exprProgress, buf, base]);

  const clearExpr = useCallback(() => {
    setExprProgress("");
    setExprCompleted(null);
  }, []);

  const commitBufToValue = useCallback(() => {
    const v = buf !== "" ? maskWord(qwordFromString(buf, radix), wordSize) : maskWord(value, wordSize);
    setValue(v);
    setBuf("");
    return v;
  }, [buf, radix, value, wordSize]);

  const selectBase = useCallback(
    (next: Base) => {
      if (next === base) return;
      const v = buf !== "" ? maskWord(qwordFromString(buf, RADIX[base]), wordSize) : maskWord(value, wordSize);
      setValue(v);
      setBuf("");
      setBase(next);
      setFresh(true);
      clearExpr();
    },
    [base, buf, value, wordSize, clearExpr]
  );

  const setShiftModePick = useCallback((m: ShiftMode) => {
    setShiftMode(m);
    setShiftCarry(B0);
    setShiftMenuOpen(false);
  }, []);

  const setWordSizeAndMask = useCallback((ws: WordSize) => {
    setWordSize(ws);
    setValue((prev) => maskWord(prev, ws));
    setBuf("");
    setFresh(true);
    setWordMenuOpen(false);
    setShiftCarry(B0);
    clearExpr();
  }, [clearExpr]);

  const appendDigit = useCallback(
    (d: string) => {
      const ch = d.toUpperCase();
      if (!digitAllowed(ch, base)) return;
      if (fresh) setExprCompleted(null);
      let next = fresh ? ch : buf + ch;
      if (base === "bin" && next.length > lens.bin) next = next.slice(-lens.bin);
      if (base === "hex" && next.length > lens.hex) next = next.slice(-lens.hex);
      if (base === "oct" && next.length > lens.oct) next = next.slice(-lens.oct);
      if (base === "dec" && next.length > lens.dec) next = next.slice(-lens.dec);
      setBuf(next);
      setValue(maskWord(qwordFromString(next, radix), wordSize));
      setFresh(false);
    },
    [base, buf, fresh, radix, wordSize, lens.bin, lens.hex, lens.oct, lens.dec]
  );

  const clearAll = useCallback(() => {
    setBuf("");
    setValue(B0);
    setPendingAcc(null);
    setPendingOp(null);
    setFresh(true);
    setShiftCarry(B0);
    clearExpr();
  }, [clearExpr]);

  const backspace = useCallback(() => {
    if (buf.length > 0) {
      const next = buf.slice(0, -1);
      setBuf(next);
      setValue(next === "" ? B0 : maskWord(qwordFromString(next, radix), wordSize));
      setFresh(false);
      return;
    }
    setValue(B0);
    setFresh(true);
  }, [buf, radix, wordSize]);

  const negate = useCallback(() => {
    const v = buf !== "" ? maskWord(qwordFromString(buf, radix), wordSize) : maskWord(value, wordSize);
    setValue(negateWord(v, wordSize));
    setBuf("");
    setFresh(true);
    clearExpr();
  }, [buf, radix, value, wordSize, clearExpr]);

  const shiftLeft = useCallback(() => {
    const v = buf !== "" ? maskWord(qwordFromString(buf, radix), wordSize) : maskWord(value, wordSize);
    const { out, carryOut } = shiftLeftOneImpl(v, shiftMode, shiftCarry, wordSize);
    setValue(out);
    if (shiftMode === "rotateThroughCarry") setShiftCarry(carryOut);
    setBuf("");
    setFresh(true);
    clearExpr();
  }, [buf, clearExpr, radix, shiftCarry, shiftMode, value, wordSize]);

  const shiftRight = useCallback(() => {
    const v = buf !== "" ? maskWord(qwordFromString(buf, radix), wordSize) : maskWord(value, wordSize);
    const { out, carryOut } = shiftRightOneImpl(v, shiftMode, shiftCarry, wordSize);
    setValue(out);
    if (shiftMode === "rotateThroughCarry") setShiftCarry(carryOut);
    setBuf("");
    setFresh(true);
    clearExpr();
  }, [buf, clearExpr, radix, shiftCarry, shiftMode, value, wordSize]);

  /** One’s complement within the current word (not two’s-complement negate). */
  const bitNot = useCallback(() => {
    const v = buf !== "" ? maskWord(qwordFromString(buf, radix), wordSize) : maskWord(value, wordSize);
    setValue(maskWord(~v, wordSize));
    setBuf("");
    setPendingAcc(null);
    setPendingOp(null);
    setFresh(true);
    clearExpr();
  }, [buf, radix, value, wordSize, clearExpr]);

  const onBinaryOp = useCallback(
    (op: string) => {
      const v = commitBufToValue();
      setExprCompleted(null);
      if (pendingAcc !== null && pendingOp && !fresh) {
        const res = applyOpMasked(pendingAcc, v, pendingOp, wordSize);
        setValue(res);
        setPendingAcc(res);
        setPendingOp(op);
        setBuf("");
        setFresh(true);
        setExprProgress((p) => `${p} ${formatExprOperandValue(v, base, wordSize)} ${opToExprLabel(op)}`);
        return;
      }
      setPendingAcc(v);
      setPendingOp(op);
      setValue(B0);
      setBuf("");
      setFresh(true);
      setExprProgress(`${formatExprOperandValue(v, base, wordSize)} ${opToExprLabel(op)}`);
    },
    [base, commitBufToValue, fresh, pendingAcc, pendingOp, wordSize]
  );

  const onEquals = useCallback(() => {
    if (pendingAcc === null || !pendingOp) {
      commitBufToValue();
      setFresh(true);
      return;
    }
    const b = buf !== "" ? maskWord(qwordFromString(buf, radix), wordSize) : maskWord(value, wordSize);
    const res = applyOpMasked(pendingAcc, b, pendingOp, wordSize);
    const done =
      (exprProgress
        ? `${exprProgress} ${formatExprOperandValue(b, base, wordSize)}`
        : `${formatExprOperandValue(pendingAcc, base, wordSize)} ${opToExprLabel(pendingOp)} ${formatExprOperandValue(b, base, wordSize)}`) + " =";
    setExprCompleted(done);
    setExprProgress("");
    setValue(res);
    setBuf("");
    setPendingAcc(null);
    setPendingOp(null);
    setFresh(true);
  }, [base, buf, commitBufToValue, exprProgress, pendingAcc, pendingOp, radix, value, wordSize]);

  const memStore = useCallback(() => {
    const v = buf !== "" ? maskWord(qwordFromString(buf, radix), wordSize) : maskWord(value, wordSize);
    setMemory(v);
    setMemMenuOpen(false);
  }, [buf, radix, value, wordSize]);

  const memRecall = useCallback(() => {
    setValue(maskWord(memory, wordSize));
    setBuf("");
    setFresh(true);
    setMemMenuOpen(false);
    clearExpr();
  }, [memory, wordSize, clearExpr]);

  const memClear = useCallback(() => {
    setMemory(B0);
    setMemMenuOpen(false);
  }, []);

  const memAdd = useCallback(() => {
    const v = buf !== "" ? maskWord(qwordFromString(buf, radix), wordSize) : maskWord(value, wordSize);
    setMemory(maskWord(memory + v, wordSize));
    setMemMenuOpen(false);
  }, [buf, memory, radix, value, wordSize]);

  const toggleBit = useCallback(
    (bitIndex: number) => {
      if (bitIndex > WORD_BITS[wordSize] - 1) return;
      const current = readDisplayValue(buf, radix, value, wordSize);
      setValue(maskWord(current ^ (B1 << BigInt(bitIndex)), wordSize));
      setBuf("");
      setFresh(true);
      clearExpr();
    },
    [buf, radix, value, wordSize, clearExpr]
  );

  const hexDecOctBin = useMemo(() => {
    const dv = displayValue;
    return (["hex", "dec", "oct", "bin"] as const).map((b) => {
      if (b === "bin") {
        return {
          id: b,
          label: b.toUpperCase(),
          text: "",
          binLines: formatBinPanelLines(dv, wordSize),
        };
      }
      return {
        id: b,
        label: b.toUpperCase(),
        text: b === "dec" ? formatDecSigned(dv, wordSize) : formatGroupedUnsigned(dv, b, wordSize),
      };
    });
  }, [displayValue, wordSize]);

  useEffect(() => {
    const focusInsideCalc = () => {
      const root = calcRootRef.current;
      if (!root) return false;
      const ae = document.activeElement;
      return !!(ae && root.contains(ae));
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!focusInsideCalc()) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      if (e.ctrlKey || e.metaKey) return;

      if (panelMode !== "keypad") {
        if (e.key === "Escape") {
          e.preventDefault();
          setWordMenuOpen(false);
          setMemMenuOpen(false);
          setShiftMenuOpen(false);
        }
        return;
      }

      if (e.altKey) return;

      const { key, code } = e;

      if (key === "Escape") {
        e.preventDefault();
        if (wordMenuOpen || memMenuOpen || shiftMenuOpen) {
          setWordMenuOpen(false);
          setMemMenuOpen(false);
          setShiftMenuOpen(false);
          return;
        }
        clearAll();
        return;
      }

      if (key === "Backspace") {
        e.preventDefault();
        backspace();
        return;
      }

      if (key === "Enter" || code === "NumpadEnter") {
        e.preventDefault();
        onEquals();
        return;
      }

      if (code.startsWith("Numpad")) {
        const tail = code.slice("Numpad".length);
        if (/^[0-9]$/.test(tail)) {
          e.preventDefault();
          appendDigit(tail);
          return;
        }
        if (code === "NumpadAdd") {
          e.preventDefault();
          onBinaryOp("+");
          return;
        }
        if (code === "NumpadSubtract") {
          e.preventDefault();
          onBinaryOp("-");
          return;
        }
        if (code === "NumpadMultiply") {
          e.preventDefault();
          onBinaryOp("*");
          return;
        }
        if (code === "NumpadDivide") {
          e.preventDefault();
          onBinaryOp("/");
          return;
        }
      }

      if (key.length === 1 && /^[0-9]$/.test(key)) {
        e.preventDefault();
        appendDigit(key);
        return;
      }

      if (key.length === 1 && /^[a-fA-F]$/.test(key) && base === "hex") {
        e.preventDefault();
        appendDigit(key.toUpperCase());
        return;
      }

      if (key === "k" || key === "K") {
        e.preventDefault();
        setPanelMode("keypad");
        return;
      }
      if (key === "i" || key === "I") {
        e.preventDefault();
        setPanelMode("bits");
        return;
      }

      if (key === "+") {
        e.preventDefault();
        onBinaryOp("+");
        return;
      }
      if (key === "-") {
        e.preventDefault();
        onBinaryOp("-");
        return;
      }
      if (key === "*") {
        e.preventDefault();
        onBinaryOp("*");
        return;
      }
      if (key === "/") {
        e.preventDefault();
        onBinaryOp("/");
        return;
      }
      if (key === "%") {
        e.preventDefault();
        onBinaryOp("%");
        return;
      }
      if (key === "&") {
        e.preventDefault();
        onBinaryOp("&");
        return;
      }
      if (key === "|") {
        e.preventDefault();
        onBinaryOp("|");
        return;
      }
      if (key === "^") {
        e.preventDefault();
        onBinaryOp("^");
        return;
      }

      if ((key === "c" || key === "C") && base !== "hex") {
        e.preventDefault();
        clearAll();
        return;
      }
      if (key === "Delete") {
        e.preventDefault();
        clearAll();
        return;
      }

      if (key === "<") {
        e.preventDefault();
        shiftLeft();
        return;
      }
      if (key === ">") {
        e.preventDefault();
        shiftRight();
        return;
      }

      if (key === "~") {
        e.preventDefault();
        bitNot();
        return;
      }

      if (key === "=") {
        e.preventDefault();
        onEquals();
        return;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    appendDigit,
    backspace,
    base,
    bitNot,
    clearAll,
    memMenuOpen,
    onBinaryOp,
    onEquals,
    panelMode,
    shiftLeft,
    shiftMenuOpen,
    shiftRight,
    wordMenuOpen,
  ]);

  const keyClass = (enabled: boolean, extra = "") =>
    `flex min-h-[44px] items-center justify-center rounded-md border text-base font-medium transition-colors sm:min-h-[48px] ${
      enabled
        ? "cursor-pointer border-slate-600 bg-slate-700 text-slate-100 hover:bg-slate-600"
        : "cursor-not-allowed border-transparent text-slate-600"
    } ${extra}`;

  /** Fixed height = expression strip + QWORD BIN (4 rows at text-3xl / sm:text-4xl); all word sizes share this box. */
  const mainDisplayBoxClass =
    "mb-4 flex h-[176px] shrink-0 flex-col justify-between overflow-hidden rounded-lg border border-slate-600/60 bg-slate-900/40 px-3 py-2 font-mono sm:h-[224px] sm:py-3";

  return (
    <div
      ref={calcRootRef}
      tabIndex={0}
      className="w-full rounded-xl border border-border shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-[#005A9E]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      style={{ backgroundColor: PANEL }}
    >
      <div className="flex items-center gap-3 border-b border-slate-600/80 px-4 py-3">
        <button
          type="button"
          className="rounded p-2 text-slate-400 hover:bg-slate-700/80 hover:text-slate-200"
          aria-label="Menu"
        >
          <span className="flex flex-col gap-1">
            <span className="h-0.5 w-5 rounded bg-current" />
            <span className="h-0.5 w-5 rounded bg-current" />
            <span className="h-0.5 w-5 rounded bg-current" />
          </span>
        </button>
        <h2 className="text-lg font-semibold tracking-tight text-slate-100">Programmer</h2>
      </div>

      <div className="p-4">
        <div className={mainDisplayBoxClass}>
          <div
            className="line-clamp-2 w-full min-h-[2.75rem] shrink-0 break-all text-right text-sm leading-snug text-slate-400 sm:min-h-[3rem] sm:text-base"
            title={expressionLine || undefined}
          >
            {expressionLine || "\u00a0"}
          </div>
          <div className="flex min-h-0 flex-1 flex-col justify-end overflow-hidden">
            {base === "bin" && binMainRows ? (
              <div className="flex flex-col items-end gap-1 text-right text-3xl font-light tracking-normal text-slate-50 sm:gap-1.5 sm:text-4xl">
                {binMainRows.map((line, i) => (
                  <div
                    key={i}
                    className="min-h-[1.875rem] whitespace-pre tabular-nums leading-none sm:min-h-[2.25rem]"
                  >
                    {line || "\u00a0"}
                  </div>
                ))}
              </div>
            ) : (
              <span className="w-full break-all text-right text-3xl font-light tracking-tight text-slate-50 sm:text-4xl">
                {mainDisplay}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          {hexDecOctBin.map((row) => (
            <button
              key={row.id}
              type="button"
              onClick={() => selectBase(row.id)}
              className="relative flex w-full items-start gap-3 rounded py-2 pl-3 pr-2 text-left text-slate-300 transition-colors hover:bg-slate-700/50"
              style={
                base === row.id
                  ? { boxShadow: `inset 4px 0 0 0 ${ACCENT}` }
                  : undefined
              }
            >
              <span className="w-9 shrink-0 pt-0.5 text-sm font-semibold text-slate-400 sm:text-base">{row.label}</span>
              <span
                className={`min-w-0 flex-1 font-mono text-sm leading-snug text-slate-200 sm:text-base ${
                  row.id === "bin"
                    ? "flex min-h-[2.5rem] flex-col sm:min-h-[3rem]"
                    : "break-all"
                }`}
              >
                {row.id === "bin" && "binLines" in row
                  ? row.binLines.map((line, i) => (
                      <span key={i} className="block whitespace-pre">
                        {line}
                      </span>
                    ))
                  : row.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-slate-600/60 px-1 py-4 text-xs text-slate-400 sm:px-2">
        <div className="relative flex min-h-[48px] items-center justify-center px-0.5">
          <button
            type="button"
            onClick={() => setPanelMode("keypad")}
            className={`flex items-center gap-1.5 rounded px-2 py-2 sm:gap-2 sm:px-3 ${
              panelMode === "keypad" ? "border-b-2" : "border-b-2 border-transparent opacity-70"
            }`}
            style={panelMode === "keypad" ? { borderColor: ACCENT } : undefined}
          >
            <span className="text-sm text-slate-500 sm:text-base" aria-hidden>
              ⊞
            </span>
            <span className="text-sm font-medium text-slate-200 sm:text-base">Keypad</span>
          </button>
        </div>
        <div className="relative flex min-h-[48px] items-center justify-center px-0.5">
          <button
            type="button"
            onClick={() => setPanelMode("bits")}
            className={`flex min-h-[44px] w-full items-center justify-center rounded px-2 py-2 leading-none sm:min-h-[48px] sm:px-3 ${
              panelMode === "bits" ? "border-b-2 text-slate-200" : "border-b-2 border-transparent text-slate-500 hover:bg-slate-700/60 hover:text-slate-300"
            }`}
            style={panelMode === "bits" ? { borderColor: ACCENT, borderBottomWidth: 2 } : undefined}
            aria-label="Bit toggling"
            aria-pressed={panelMode === "bits"}
          >
            <span className="grid shrink-0 grid-cols-2 gap-0.5 place-content-center" aria-hidden>
              <span className="h-1.5 w-1.5 rounded-full bg-current sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-current sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-current sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-current sm:h-2 sm:w-2" />
            </span>
          </button>
        </div>
        <div className="relative flex min-h-[48px] items-center justify-center px-0.5">
          <button
            type="button"
            onClick={() => {
              setShiftMenuOpen((o) => !o);
              setWordMenuOpen(false);
              setMemMenuOpen(false);
            }}
            className="rounded px-1 py-2 font-mono text-[11px] font-medium text-slate-300 hover:bg-slate-700/60 sm:px-2 sm:text-sm"
            aria-expanded={shiftMenuOpen}
            aria-haspopup="listbox"
            aria-label={`Shift mode: ${SHIFT_MODE_MENU[shiftMode]}`}
          >
            {SHIFT_MODE_BTN[shiftMode]}▾
          </button>
          {shiftMenuOpen ? (
            <div
              className="absolute left-1/2 top-full z-20 mt-1 min-w-[200px] max-w-[min(100vw-2rem,280px)] -translate-x-1/2 rounded-md border border-slate-600 bg-slate-800 py-1 shadow-lg"
              role="listbox"
            >
              {SHIFT_MODES_ORDER.map((m) => (
                <button
                  key={m}
                  type="button"
                  role="option"
                  aria-selected={shiftMode === m}
                  className={`block w-full px-3 py-2 text-left text-sm hover:bg-slate-700 ${
                    shiftMode === m ? "bg-slate-700/80 text-slate-100" : "text-slate-200"
                  }`}
                  onClick={() => setShiftModePick(m)}
                >
                  {SHIFT_MODE_MENU[m]}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative flex min-h-[48px] items-center justify-center px-0.5">
          <button
            type="button"
            onClick={() => {
              setWordMenuOpen((o) => !o);
              setMemMenuOpen(false);
              setShiftMenuOpen(false);
            }}
            className="rounded px-2 py-2 font-mono text-sm font-medium text-slate-300 hover:bg-slate-700/60 sm:text-base"
            aria-expanded={wordMenuOpen}
            aria-haspopup="listbox"
          >
            {WORD_LABEL[wordSize]}▾
          </button>
          {wordMenuOpen ? (
            <div
              className="absolute left-1/2 top-full z-20 mt-1 min-w-[128px] -translate-x-1/2 rounded-md border border-slate-600 bg-slate-800 py-1 shadow-lg"
              role="listbox"
            >
              {(Object.keys(WORD_LABEL) as WordSize[]).map((ws) => (
                <button
                  key={ws}
                  type="button"
                  role="option"
                  aria-selected={wordSize === ws}
                  className={`block w-full px-3 py-2 text-left text-sm hover:bg-slate-700 ${
                    wordSize === ws ? "bg-slate-700/80 text-slate-100" : "text-slate-200"
                  }`}
                  onClick={() => setWordSizeAndMask(ws)}
                >
                  {WORD_LABEL[ws]}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative flex min-h-[48px] items-center justify-center px-0.5">
          <button
            type="button"
            onClick={memStore}
            className="rounded px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700/60 sm:text-base"
          >
            MS
          </button>
        </div>
        <div className="relative flex min-h-[48px] items-center justify-center px-0.5">
          <button
            type="button"
            onClick={() => {
              setMemMenuOpen((o) => !o);
              setWordMenuOpen(false);
              setShiftMenuOpen(false);
            }}
            className="rounded px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700/60 sm:text-base"
            aria-expanded={memMenuOpen}
            aria-haspopup="menu"
          >
            M▾
          </button>
          {memMenuOpen ? (
            <div
              className="absolute left-1/2 top-full z-20 mt-1 min-w-[140px] -translate-x-1/2 rounded-md border border-slate-600 bg-slate-800 py-1 shadow-lg"
              role="menu"
            >
              <button type="button" role="menuitem" className="block w-full px-3 py-2 text-left text-sm text-slate-200 hover:bg-slate-700" onClick={memRecall}>
                MR — Recall
              </button>
              <button type="button" role="menuitem" className="block w-full px-3 py-2 text-left text-sm text-slate-200 hover:bg-slate-700" onClick={memClear}>
                MC — Clear
              </button>
              <button type="button" role="menuitem" className="block w-full px-3 py-2 text-left text-sm text-slate-200 hover:bg-slate-700" onClick={memAdd}>
                M+ — Add to memory
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {panelMode === "keypad" ? (
        <div
          className="grid grid-cols-6 gap-1.5 border-t border-slate-600/60 px-3 pb-1 pt-2 sm:gap-2 sm:pb-2 sm:pt-2.5"
          style={{ backgroundColor: "rgb(15 23 42 / 0.5)" }}
        >
          {(
            [
              { label: "AND", op: "&" },
              { label: "OR", op: "|" },
              { label: "NOT" },
              { label: "XOR", op: "^" },
              { label: "NOR", op: "nor" },
              { label: "NAND", op: "nand" },
            ] as const
          ).map((btn) => (
            <button
              key={btn.label}
              type="button"
              className={keyClass(true, "px-0.5 text-xs font-semibold sm:text-sm")}
              style={{ backgroundColor: KEY_ACTIVE }}
              onClick={() => {
                if ("op" in btn) onBinaryOp(btn.op);
                else bitNot();
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      ) : null}

      {panelMode === "bits" ? (
        <div className="border-t border-slate-600/60" style={{ backgroundColor: "rgb(15 23 42 / 0.5)" }}>
          <BitToggleGrid value={displayValue} onToggleBit={toggleBit} wordSize={wordSize} />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-1.5 p-3 sm:gap-2" style={{ backgroundColor: "rgb(15 23 42 / 0.5)" }}>
          {(["A", "<<", ">>", "C", "⌫"] as const).map((label, i) => {
            const aHex = label === "A";
            const enabled = !aHex || base === "hex";
            return (
              <button
                key={`r0-${i}`}
                type="button"
                className={keyClass(enabled)}
                style={{ backgroundColor: enabled ? KEY_ACTIVE : KEY_DISABLED }}
                disabled={!enabled}
                onClick={() => {
                  if (label === "A" && base === "hex") appendDigit("A");
                  else if (label === "<<") shiftLeft();
                  else if (label === ">>") shiftRight();
                  else if (label === "C") clearAll();
                  else if (label === "⌫") backspace();
                }}
              >
                {label === "⌫" ? "⌫" : label}
              </button>
            );
          })}

          {(["B", "(", ")", "%", "÷"] as const).map((label, i) => {
            const bHex = label === "B";
            const enabled = !bHex || base === "hex";
            return (
              <button
                key={`r1-${i}`}
                type="button"
                className={keyClass(enabled)}
                style={{ backgroundColor: enabled ? KEY_ACTIVE : KEY_DISABLED }}
                disabled={!enabled}
                onClick={() => {
                  if (label === "B" && base === "hex") appendDigit("B");
                  else if (label === "(" || label === ")") return;
                  else if (label === "%") onBinaryOp("%");
                  else if (label === "÷") onBinaryOp("/");
                }}
              >
                {label}
              </button>
            );
          })}

          {(["C", "7", "8", "9", "×"] as const).map((label, i) => {
            const isHexC = label === "C" && i === 0;
            const isDigit = /^[0-9]$/.test(label);
            const enabled =
              isHexC && base === "hex"
                ? true
                : isHexC
                  ? false
                  : isDigit
                    ? digitAllowed(label, base)
                    : true;
            return (
              <button
                key={`r2-${i}`}
                type="button"
                className={keyClass(enabled)}
                style={{ backgroundColor: enabled ? KEY_ACTIVE : KEY_DISABLED }}
                disabled={!enabled}
                onClick={() => {
                  if (label === "×") onBinaryOp("*");
                  else if (enabled) appendDigit(label);
                }}
              >
                {label}
              </button>
            );
          })}

          {(["D", "4", "5", "6", "-"] as const).map((label, i) => {
            const isHexD = label === "D" && i === 0;
            const isDigit = /^[0-9]$/.test(label);
            const enabled = isHexD ? base === "hex" : isDigit ? digitAllowed(label, base) : true;
            return (
              <button
                key={`r3-${i}`}
                type="button"
                className={keyClass(enabled)}
                style={{ backgroundColor: enabled ? KEY_ACTIVE : KEY_DISABLED }}
                disabled={!enabled}
                onClick={() => {
                  if (label === "-") onBinaryOp("-");
                  else if (enabled) appendDigit(label);
                }}
              >
                {label}
              </button>
            );
          })}

          {(["E", "1", "2", "3", "+"] as const).map((label, i) => {
            const isHexE = label === "E" && i === 0;
            const isDigit = /^[0-9]$/.test(label);
            const enabled = isHexE ? base === "hex" : isDigit ? digitAllowed(label, base) : true;
            return (
              <button
                key={`r4-${i}`}
                type="button"
                className={keyClass(enabled)}
                style={{ backgroundColor: enabled ? KEY_ACTIVE : KEY_DISABLED }}
                disabled={!enabled}
                onClick={() => {
                  if (label === "+") onBinaryOp("+");
                  else if (enabled) appendDigit(label);
                }}
              >
                {label}
              </button>
            );
          })}

          {(["F", "±", "0", ".", "="] as const).map((label, i) => {
            const isHexF = label === "F" && i === 0;
            const isZero = label === "0";
            const enabled =
              label === "."
                ? false
                : isHexF
                  ? base === "hex"
                  : isZero
                    ? digitAllowed("0", base)
                    : label === "±" || label === "=";
            return (
              <button
                key={`r5-${i}`}
                type="button"
                className={keyClass(enabled, label === "=" ? "font-semibold text-white" : "")}
                style={{
                  backgroundColor:
                    label === "=" ? ACCENT : enabled ? KEY_ACTIVE : KEY_DISABLED,
                  borderColor: label === "=" ? ACCENT : undefined,
                }}
                disabled={!enabled}
                onClick={() => {
                  if (label === "=") onEquals();
                  else if (label === "±") negate();
                  else if (label === "0" && enabled) appendDigit("0");
                  else if (label === "F" && enabled) appendDigit("F");
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
