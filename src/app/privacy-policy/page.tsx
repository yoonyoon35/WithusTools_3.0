import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://withustools.com";
const CONTACT = "dbsghkwns553@gmail.com";
const LAST_UPDATED = "March 25, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How WithusTools collects, uses, and protects information when you use our free online tools.",
  openGraph: {
    title: "Privacy Policy | WithusTools",
    description:
      "How WithusTools collects, uses, and protects information when you use our free online tools.",
    url: `${SITE}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-100">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
      </div>

      <article className="space-y-8 rounded-xl border border-border bg-surface p-6 sm:p-8 text-sm leading-relaxed text-slate-300 sm:text-[0.9375rem]">
        <section>
          <h2 className="text-lg font-semibold text-slate-100">1. Introduction</h2>
          <p className="mt-2">
            WithusTools (&quot;we&quot;, &quot;us&quot;) operates the website{" "}
            <Link href="/" className="text-sky-400 hover:underline">
              withustools.com
            </Link>{" "}
            (the &quot;Service&quot;). This Privacy Policy explains how we handle
            information when you visit or use the Service. By using the Service,
            you agree to this policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            2. Information we process
          </h2>
          <ul className="mt-2 list-inside list-disc space-y-2">
            <li>
              <strong className="text-slate-200">Tool usage.</strong> Many tools
              run entirely in your browser. Content you enter (for example files or
              text for conversion) is processed locally when a tool is designed
              to work client-side and is not sent to our servers for that
              processing.
            </li>
            <li>
              <strong className="text-slate-200">Analytics.</strong> We may use
              Google Analytics to understand aggregate traffic and usage (for
              example pages viewed, general location, device type). This is
              subject to your cookie choices where applicable.
            </li>
            <li>
              <strong className="text-slate-200">Advertising.</strong> We may use
              Google AdSense or similar services to show ads. Those partners may
              use cookies or similar technologies as described in your cookie
              settings and their own policies.
            </li>
            <li>
              <strong className="text-slate-200">Communications.</strong> If you
              email us (for example feedback), we receive your email address and
              the contents of your message.
            </li>
            <li>
              <strong className="text-slate-200">Technical data.</strong> Like
              most websites, servers and hosting may automatically log basic
              technical data (for example IP address, user agent, timestamps) for
              security and operations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            3. How we use information
          </h2>
          <p className="mt-2">
            We use the information above to operate and improve the Service,
            measure performance, show ads where enabled, respond to inquiries,
            and protect against abuse or technical issues.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            4. Sharing and processors
          </h2>
          <p className="mt-2">
            We rely on service providers such as hosting, analytics, and
            advertising partners. They process data according to their terms and
            privacy policies. We do not sell your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            5. Cookies and similar technologies
          </h2>
          <p className="mt-2">
            We use cookies and related technologies for essential site
            functionality, analytics, and ads where you have consented. You can
            manage preferences on our{" "}
            <Link
              href="/cookie-settings"
              className="text-sky-400 hover:underline"
            >
              Cookie settings
            </Link>{" "}
            page.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            6. Retention
          </h2>
          <p className="mt-2">
            We retain information only as long as needed for the purposes above
            or as required by law. Analytics and ad partners apply their own
            retention rules.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">7. Your rights</h2>
          <p className="mt-2">
            Depending on where you live, you may have rights to access, correct,
            delete, or restrict processing of personal data, or to object to
            certain processing. You may also withdraw consent for optional
            cookies via our cookie settings. To exercise rights or ask
            questions, contact us at{" "}
            <a
              href={`mailto:${CONTACT}`}
              className="text-sky-400 hover:underline"
            >
              {CONTACT}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            8. Children
          </h2>
          <p className="mt-2">
            The Service is not directed at children under 13, and we do not
            knowingly collect their personal information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">9. Changes</h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. The &quot;Last
            updated&quot; date at the top will change when we do. Continued use
            of the Service after changes constitutes acceptance of the updated
            policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">10. Contact</h2>
          <p className="mt-2">
            Questions about this Privacy Policy:{" "}
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
          href="/terms-of-use"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          Terms of Use
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
