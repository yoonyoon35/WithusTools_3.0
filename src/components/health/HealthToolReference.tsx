"use client";

import { useToolPageContent } from "@/hooks/useToolPageContent";

type RefTable = {
  title?: string;
  columns: string[];
  rows: string[][];
};

export type HealthReference = {
  title: string;
  paragraphs: string[];
  formulas?: string[];
  tables?: RefTable[];
  notesTitle?: string;
  notes?: string[];
};

type HealthToolReferenceProps = {
  metaPath: string;
  className?: string;
};

export default function HealthToolReference({
  metaPath,
  className = "mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8",
}: HealthToolReferenceProps) {
  const page = useToolPageContent(metaPath);
  const ref = (page as { reference?: HealthReference } | undefined)?.reference;

  if (!ref) return null;

  return (
    <section className={className} aria-labelledby="health-reference-heading">
      <h2 id="health-reference-heading" className="text-lg font-semibold text-slate-200 sm:text-xl">
        {ref.title}
      </h2>

      {ref.paragraphs.length > 0 && (
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
          {ref.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {ref.formulas && ref.formulas.length > 0 && (
        <div className="mt-4 space-y-2">
          {ref.formulas.map((f, i) => (
            <p
              key={i}
              className="rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 font-mono text-sm text-slate-300"
            >
              {f}
            </p>
          ))}
        </div>
      )}

      {ref.tables?.map((table, ti) => (
        <div key={ti} className="mt-8">
          {table.title ? (
            <h3 className="text-base font-semibold text-slate-200">{table.title}</h3>
          ) : null}
          <div className={`overflow-x-auto rounded-lg border border-slate-700 ${table.title ? "mt-4" : ""}`}>
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/80">
                  {table.columns.map((col) => (
                    <th key={col} scope="col" className="px-3 py-3 font-semibold text-slate-200">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700 text-slate-400">
                {table.rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? "bg-slate-900/20" : undefined}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-3 py-3 ${ci === 0 ? "font-medium text-slate-200" : ""} ${ci === 1 ? "whitespace-nowrap font-mono text-slate-300" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {ref.notes && ref.notes.length > 0 && (
        <>
          <h3 className="mt-8 text-base font-semibold text-slate-200">
            {ref.notesTitle ?? "Good to know"}
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-400">
            {ref.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
