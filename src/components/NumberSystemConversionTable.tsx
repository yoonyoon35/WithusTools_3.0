import {
  type NumberSystemBase,
  convertNumberSystemFromDecimal,
  formatCharForDisplay,
  NUMBER_SYSTEM_BASE_LABELS,
  parseNumberSystemInput,
} from "@/utils/numberSystemConversion";

/** Small sample values (decimal) for numeric → any tables. */
export const NS_TABLE_SMALL_DECIMALS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16] as const;

/**
 * Second column — same row count as `NS_TABLE_SMALL_DECIMALS` (13) so paired tables align visually.
 * Mix of mid values and powers of two up to 16-bit max.
 */
export const NS_TABLE_LARGER_DECIMALS = [
  11, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65535,
] as const;

/** Code points for character-input table — length matches `NS_TABLE_CHAR_CODES_LARGE`. */
export const NS_TABLE_CHAR_CODES_SMALL = [32, 48, 49, 65, 97, 126, 255] as const;

export const NS_TABLE_CHAR_CODES_LARGE = [256, 512, 1024, 2048, 4096, 8364, 65535] as const;

function cellFromDecimal(dec: number, base: NumberSystemBase): string {
  try {
    return convertNumberSystemFromDecimal(dec, base);
  } catch {
    return "—";
  }
}

function charInputString(code: number): string {
  if (code < 0 || code > 65535) return "—";
  return String.fromCharCode(code);
}

export function NumberSystemConversionTable({
  fromBase,
  toBase,
  decimals,
  mode = "decimal-rows",
}: {
  fromBase: NumberSystemBase;
  toBase: NumberSystemBase;
  decimals: readonly number[];
  mode?: "decimal-rows" | "char-rows";
}) {
  const fromName = NUMBER_SYSTEM_BASE_LABELS[fromBase];
  const toName = NUMBER_SYSTEM_BASE_LABELS[toBase];

  const rows: { left: string; right: string }[] = [];
  for (const d of decimals) {
    if (mode === "char-rows" && fromBase === "char") {
      const inputStr = charInputString(d);
      try {
        const decVal = parseNumberSystemInput(inputStr, "char");
        const u = `U+${d.toString(16).toUpperCase().padStart(4, "0")}`;
        const sym = formatCharForDisplay(d);
        rows.push({
          left: `${u} (${sym})`,
          right: convertNumberSystemFromDecimal(decVal, toBase),
        });
      } catch {
        rows.push({ left: "—", right: "—" });
      }
    } else {
      rows.push({
        left: cellFromDecimal(d, fromBase),
        right: cellFromDecimal(d, toBase),
      });
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[280px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-600">
            <th scope="col" className="py-2 pr-4 text-left font-semibold text-slate-200">
              {fromName} (input)
            </th>
            <th scope="col" className="py-2 text-left font-semibold text-slate-200">
              {toName} (output)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-700/80">
              <td className="py-2 pr-4 font-mono text-slate-300">{row.left}</td>
              <td className="py-2 font-mono text-slate-100">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function NumberSystemConversionTablesPair({
  fromBase,
  toBase,
}: {
  fromBase: NumberSystemBase;
  toBase: NumberSystemBase;
}) {
  const charMode = fromBase === "char";
  const small = charMode ? NS_TABLE_CHAR_CODES_SMALL : NS_TABLE_SMALL_DECIMALS;
  const large = charMode ? NS_TABLE_CHAR_CODES_LARGE : NS_TABLE_LARGER_DECIMALS;

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <NumberSystemConversionTable
        fromBase={fromBase}
        toBase={toBase}
        decimals={small}
        mode={charMode ? "char-rows" : "decimal-rows"}
      />
      <NumberSystemConversionTable
        fromBase={fromBase}
        toBase={toBase}
        decimals={large}
        mode={charMode ? "char-rows" : "decimal-rows"}
      />
    </div>
  );
}
