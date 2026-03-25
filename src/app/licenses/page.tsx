import type { Metadata } from "next";
import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";

export const metadata: Metadata = {
  title: "Licenses & Attributions",
  description:
    "Third-party software licenses and copyright attributions used by WithusTools.",
  openGraph: {
    title: "Licenses & Attributions | WithusTools",
    description: "Third-party software licenses and copyright attributions.",
    url: "https://withustools.com/licenses",
  },
};

export default async function LicensesPage() {
  const noticePath = path.join(process.cwd(), "NOTICE");
  let noticeContent: string;
  try {
    noticeContent = await readFile(noticePath, "utf-8");
  } catch {
    noticeContent = "License information is not available.";
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-100">
          Licenses & Attributions
        </h1>
        <p className="mt-2 text-slate-400">
          This product includes software developed by third parties. The
          following notices are required by their respective licenses.
        </p>
      </div>

      <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-slate-300">
          {noticeContent}
        </pre>
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
