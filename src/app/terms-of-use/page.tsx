import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://withustools.com";
const CONTACT = "dbsghkwns553@gmail.com";
const LAST_UPDATED = "March 25, 2026";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms and conditions for using WithusTools free online web tools.",
  openGraph: {
    title: "Terms of Use | WithusTools",
    description:
      "Terms and conditions for using WithusTools free online web tools.",
    url: `${SITE}/terms-of-use`,
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-100">Terms of Use</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
      </div>

      <article className="space-y-8 rounded-xl border border-border bg-surface p-6 sm:p-8 text-sm leading-relaxed text-slate-300 sm:text-[0.9375rem]">
        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            1. Agreement
          </h2>
          <p className="mt-2">
            These Terms of Use (&quot;Terms&quot;) govern your access to and use
            of WithusTools at{" "}
            <Link href="/" className="text-sky-400 hover:underline">
              withustools.com
            </Link>{" "}
            (the &quot;Service&quot;). By using the Service, you agree to these
            Terms. If you do not agree, do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            2. Description of the Service
          </h2>
          <p className="mt-2">
            The Service provides free online tools for personal and commercial
            use unless a specific tool states otherwise. We may add, change, or
            discontinue tools or features at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            3. Acceptable use
          </h2>
          <p className="mt-2">You agree not to:</p>
          <ul className="mt-2 list-inside list-disc space-y-2">
            <li>Use the Service in violation of applicable laws or regulations.</li>
            <li>
              Attempt to disrupt, overload, or compromise the Service or other
              users&apos; access.
            </li>
            <li>
              Use automated means to scrape or abuse the Service in a way that
              degrades performance or violates others&apos; rights.
            </li>
            <li>
              Upload or process illegal content or content you do not have the
              right to use.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            4. Your content
          </h2>
          <p className="mt-2">
            You remain responsible for any data or files you submit to tools.
            Where processing happens in your browser, you control that data. Do
            not submit sensitive personal data or secrets unless you understand
            the risks.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            5. Intellectual property
          </h2>
          <p className="mt-2">
            The Service, including its design, branding, and original content,
            is owned by WithusTools or its licensors. Third-party libraries are
            subject to their own licenses; see our{" "}
            <Link href="/licenses" className="text-sky-400 hover:underline">
              Licenses
            </Link>{" "}
            page where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            6. Disclaimers
          </h2>
          <p className="mt-2">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
            INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE DO NOT WARRANT THAT RESULTS FROM TOOLS WILL BE
            ACCURATE, COMPLETE, OR SUITABLE FOR ANY SPECIFIC PURPOSE. YOU USE
            THE SERVICE AT YOUR OWN RISK.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            7. Limitation of liability
          </h2>
          <p className="mt-2">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WITHUSTOOLS AND ITS
            OPERATORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
            PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE. OUR
            TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICE SHALL NOT
            EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE MONTHS
            BEFORE THE CLAIM (TYPICALLY ZERO FOR A FREE SERVICE) OR (B) FIFTY
            U.S. DOLLARS, UNLESS A STRONGER LIMIT APPLIES UNDER MANDATORY LAW.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            8. Indemnity
          </h2>
          <p className="mt-2">
            You agree to indemnify and hold harmless WithusTools from claims
            arising out of your misuse of the Service or violation of these
            Terms, to the extent permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            9. Third-party services
          </h2>
          <p className="mt-2">
            The Service may link to or integrate third parties (for example
            analytics or ads). Their use is subject to their terms and policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            10. Changes to the Terms
          </h2>
          <p className="mt-2">
            We may modify these Terms at any time. We will update the &quot;Last
            updated&quot; date when we do. Continued use after changes means you
            accept the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            11. Governing law
          </h2>
          <p className="mt-2">
            These Terms are governed by applicable law without regard to conflict
            of law principles, except where consumer protection rules in your
            country require otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">12. Contact</h2>
          <p className="mt-2">
            For questions about these Terms:{" "}
            <a
              href={`mailto:${CONTACT}`}
              className="text-sky-400 hover:underline"
            >
              {CONTACT}
            </a>
          </p>
        </section>
      </article>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to home
        </Link>
        <Link
          href="/privacy-policy"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          Privacy Policy
        </Link>
        <Link
          href="/cookie-settings"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          Cookie settings
        </Link>
      </div>
    </div>
  );
}
