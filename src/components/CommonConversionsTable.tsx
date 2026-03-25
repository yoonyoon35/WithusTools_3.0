"use client";

import Link from "next/link";
import {
  COMMON_TEMPERATURE_CONVERSIONS,
  formatCommonConversionNumber,
  formatConversionCell,
  type CommonTemperatureConversionRow,
} from "@/data/common-temperature-conversions";

function rowHref(row: CommonTemperatureConversionRow): string {
  const q = encodeURIComponent(String(row.v1));
  return `${row.slug}?val=${q}`;
}

function rowAriaLabel(row: CommonTemperatureConversionRow): string {
  return `Convert ${formatCommonConversionNumber(row.v1)} ${row.from} to ${row.to}`;
}

export default function CommonConversionsTable() {
  return (
    <section
      className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8"
      aria-labelledby="common-temperature-conversions-heading"
    >
      <h3
        id="common-temperature-conversions-heading"
        className="mb-2 text-base font-semibold text-slate-200 sm:text-lg"
      >
        Common Temperature Conversions
      </h3>
      <p className="mb-6 text-sm text-slate-500">
        Reference values for weather, health, cooking, and engineering. Click a row to open the matching
        dedicated temperature converter with that input pre-filled.
      </p>
      <div
        className="max-h-[360px] overflow-y-auto overflow-x-auto pr-1 scrollbar-thin"
        role="region"
        aria-label="Common temperature conversions table, scroll for more rows"
      >
        <table className="w-full border-separate border-spacing-0 text-left text-sm text-slate-300">
          <thead className="sticky top-0 z-20">
            <tr className="border-b border-slate-700 bg-slate-800">
              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left font-semibold text-slate-200">
                Context
              </th>
              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left font-semibold text-slate-200">
                From
              </th>
              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left font-semibold text-slate-200">
                To
              </th>
              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left font-semibold text-slate-200">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {COMMON_TEMPERATURE_CONVERSIONS.map((row, i) => {
              const href = rowHref(row);
              const isLast = i === COMMON_TEMPERATURE_CONVERSIONS.length - 1;
              const cellLink =
                "block w-full whitespace-nowrap px-4 py-3 text-inherit no-underline transition-colors group-hover/convrow:bg-slate-700/40";
              const rowSep = !isLast ? "border-b border-slate-700/80" : "";
              return (
                <tr key={`${row.slug}-${row.v1}-${row.v2}-${i}`} className="group/convrow">
                  <td className={`p-0 align-middle ${rowSep}`}>
                    <Link
                      href={href}
                      aria-label={rowAriaLabel(row)}
                      className={`${cellLink} text-slate-400 focus-visible:relative focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-500`}
                      title={row.ctx}
                    >
                      {row.ctx}
                    </Link>
                  </td>
                  <td className={`p-0 align-middle ${rowSep}`}>
                    <Link href={href} tabIndex={-1} aria-hidden className={`${cellLink} font-mono text-slate-200`}>
                      {formatConversionCell(row.from, row.v1)}
                    </Link>
                  </td>
                  <td className={`p-0 align-middle ${rowSep}`}>
                    <Link href={href} tabIndex={-1} aria-hidden className={`${cellLink} text-slate-300`}>
                      {row.to}
                    </Link>
                  </td>
                  <td className={`p-0 align-middle ${rowSep}`}>
                    <Link href={href} tabIndex={-1} aria-hidden className={`${cellLink} font-mono text-slate-200`}>
                      {formatConversionCell(row.to, row.v2)}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
