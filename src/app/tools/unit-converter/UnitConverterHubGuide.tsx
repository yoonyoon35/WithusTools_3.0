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
            Choose a converter above, enter a value, and pick source and target units. Use swap and copy on the
            tool where available.
          </li>
          <li>
            For worked formulas, examples, and tables for one specific pair (e.g. meters to feet), open that
            category and use its dedicated pair pages or FAQ links—those pages hold the detailed content.
          </li>
          <li>
            Conversions use recognized factors (SI and related definitions). Temperature uses standard linear
            formulas between scales. Everything runs in your browser; inputs and results are not sent to our
            servers.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-slate-200">Accuracy &amp; limitations</h2>
        <div className="space-y-3 rounded-lg border border-slate-700/80 bg-slate-900/40 p-4 text-xs leading-relaxed text-slate-400 sm:text-sm">
          <p>
            Results follow the definitions and factors built into each tool. On-screen values may be rounded
            for readability, and very large or very small numbers are still subject to ordinary floating-point
            limits in the browser—typical for any online calculator.
          </p>
          <p>
            These converters are for everyday reference and learning, not for professional, engineering,
            medical, legal, or safety-critical decisions. If a mistake could cause harm, loss, or liability,
            confirm with authoritative references and your own checks.
          </p>
          <p className="text-slate-500">
            The tools are provided &quot;as is&quot; without warranties of merchantability, fitness for a
            particular purpose, or accuracy for your specific use case. This text summarizes common technical
            limits and is not legal advice.
          </p>
        </div>
      </div>
    </section>
  );
}
