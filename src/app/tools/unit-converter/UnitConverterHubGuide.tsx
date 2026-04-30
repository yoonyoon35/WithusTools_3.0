/**
 * Hub-only copy: keeps category pages lean; pair pages carry formulas and tables.
 */
export default function UnitConverterHubGuide() {
  return (
    <section className="mb-8 space-y-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <div>
        <h2 className="mb-3 text-lg font-semibold text-slate-200">Quick guide</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-400">
          <li>
            Pick a converter, enter a value, and choose source and target units.
          </li>
          <li>
            Use swap and copy actions when available to speed up repeated checks.
          </li>
          <li>
            For one specific pair (for example meters to feet), open dedicated pair pages for formulas, examples, and tables.
          </li>
          <li>
            Conversions use standard factors and formulas, and everything runs in your browser.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-slate-200">Accuracy &amp; limitations</h2>
        <div className="space-y-3 rounded-lg border border-slate-700/80 bg-slate-900/40 p-4 text-xs leading-relaxed text-slate-400 sm:text-sm">
          <p>
            Results follow built-in unit definitions. Displayed values may be rounded for readability, and very
            large or very small values can be affected by normal floating-point limits.
          </p>
          <p>
            These tools are great for daily reference and study, but not for safety-critical or regulated work.
            If precision is critical, verify with authoritative sources.
          </p>
          <p className="text-slate-500">
            Tools are provided &quot;as is&quot; for general use, and this note is technical guidance, not legal advice.
          </p>
        </div>
      </div>
    </section>
  );
}
