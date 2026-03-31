/** Detailed behavior reference; rendered in the same layout box as the numbered guide. */
export default function ProgrammerCalculatorTechnicalReference() {
  const code = "rounded bg-slate-800/70 px-1 font-mono text-[0.8em] text-slate-200";

  return (
    <div className="space-y-4 text-sm leading-relaxed text-slate-400">
      <h2 className="text-lg font-semibold text-slate-200">How this calculator works</h2>
      <div className="space-y-3">
        <div>
          <p className="font-medium text-slate-300">Word size (QWORD / DWORD / WORD / BYTE)</p>
          <p className="mt-1">
            Every value is masked to the selected width: 64, 32, 16, or 8 bits. Arithmetic, bitwise ops, shifts, and memory all use this mask. In the bit grid, indices above the active width are disabled (read-only) so you always see which bits belong to the current word.
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-300">Bases (HEX / DEC / OCT / BIN)</p>
          <p className="mt-1">
            Tap a row to choose the keypad input radix. Only valid digits for that base are accepted. All four readouts show the same underlying value. The DEC line uses two&apos;s-complement <em>signed</em> integers for the current word size; HEX, OCT, and BIN lines show <em>unsigned</em> grouped forms. Binary panels trim leading all-zero nibbles on the MSB side for readability, while keeping lower bits through bit 0 when needed.
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-300">Arithmetic</p>
          <p className="mt-1">
            Use +, −, ×, ÷, and %. Operations apply to masked unsigned values in the current word. For QWORD, multiplication wraps modulo 2<sup>64</sup>; narrower words wrap modulo 2<sup>n</sup>. Division or remainder by zero leaves the left-hand value unchanged (no error state).
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-300">Bitwise operators</p>
          <p className="mt-1">
            AND, OR, XOR combine two operands with <code className={code}>&amp;</code>, <code className={code}>|</code>, <code className={code}>^</code>, then mask. NAND is <code className={code}>~(a &amp; b)</code>; NOR is <code className={code}>~(a | b)</code>, both masked. NOT is a unary <em>one&apos;s complement</em> (invert every bit in the word). The ± key performs two&apos;s-complement negation (signed negate), which is different from NOT.
          </p>
          <p className="mt-2 text-slate-500">
            Examples below use decimal operands and assume <strong>BYTE</strong> (8-bit) word size so results fit in one byte; the same rules apply after masking for wider words.
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-slate-500">
            <li>
              <strong>AND</strong> — bits must both be 1.{" "}
              <code className={code}>12 AND 10</code>:{" "}
              <code className={code}>0000 1100</code> ∧ <code className={code}>0000 1010</code> →{" "}
              <code className={code}>0000 1000</code> = <strong>8</strong>.
            </li>
            <li>
              <strong>OR</strong> — at least one 1.{" "}
              <code className={code}>12 OR 10</code> → <code className={code}>0000 1110</code> = <strong>14</strong>.
            </li>
            <li>
              <strong>XOR</strong> — 1 where bits differ.{" "}
              <code className={code}>12 XOR 10</code> → <code className={code}>0000 0110</code> = <strong>6</strong>.
            </li>
            <li>
              <strong>NAND</strong> — NOT of AND, then mask.{" "}
              <code className={code}>12 AND 10 = 8</code>;{" "}
              <code className={code}>~8</code> in 8 bits → <code className={code}>1111 0111</code> = <strong>247</strong>{" "}
              (<code className={code}>0xF7</code>).
            </li>
            <li>
              <strong>NOR</strong> — NOT of OR, then mask.{" "}
              <code className={code}>12 OR 10 = 14</code>;{" "}
              <code className={code}>~14</code> in 8 bits → <code className={code}>1111 0001</code> = <strong>241</strong>{" "}
              (<code className={code}>0xF1</code>).
            </li>
            <li>
              <strong>NOT</strong> (one&apos;s complement) — flip every bit of the current value.{" "}
              <code className={code}>NOT 5</code>: <code className={code}>~0000 0101</code> →{" "}
              <code className={code}>1111 1010</code> = <strong>250</strong> (<code className={code}>0xFA</code>).
            </li>
            <li>
              <strong>±</strong> (two&apos;s-complement negate) — not a bitwise op, shown for contrast.{" "}
              With BYTE, <code className={code}>5</code> becomes signed <strong>−5</strong> (DEC shows −5); as unsigned 8-bit that is <strong>251</strong> (<code className={code}>0xFB</code>), not 250, so NOT and ± differ.
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-slate-300">
            Shifts (<code className={code}>&lt;&lt;</code> / <code className={code}>&gt;&gt;</code>)
          </p>
          <p className="mt-1">
            Each press shifts by exactly one bit. Choose the mode from the toolbar: <strong>Logical shift</strong> — left fills 0 at LSB side of the shift; right fills 0 at MSB. <strong>Arithmetic shift</strong> — left matches logical for one step; right replicates the sign bit in two&apos;s complement (signed right shift). <strong>Rotate</strong> — MSB wraps to LSB on left; LSB wraps to MSB on right. <strong>Rotate through carry</strong> — one extra carry bit participates (RCL/RCR style): on left, the old carry enters LSB and the old MSB becomes carry; on right, the old carry enters MSB and the old LSB becomes carry. Carry resets when you change mode, clear (C), or change word size.
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-300">Expression line, memory, and bit grid</p>
          <p className="mt-1">
            The small line above the main display shows the ongoing formula (operators as AND, OR, …) using the same radix style as the main readout for operands. MS stores the current value; M▾ offers MR (recall), MC (clear memory), and M+ (add to memory), all masked. In Bit toggling mode, clicking a bit XORs that position; the value updates immediately.
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-300">Keyboard</p>
          <p className="mt-1">
            When focus is inside the calculator card, you can type digits and operators; <code className={code}>&lt;</code> / <code className={code}>&gt;</code> for shifts, <code className={code}>~</code> for NOT, Enter or <code className={code}>=</code> for equals, Backspace, Delete or C (except in HEX where C is a digit), Esc to close menus or clear. K / I switch Keypad vs Bit toggling. Modifiers Ctrl/Cmd/Alt are left to the browser.
          </p>
        </div>
        <p className="text-slate-500">All processing runs locally in your browser; nothing is sent to a server.</p>
      </div>
    </div>
  );
}
