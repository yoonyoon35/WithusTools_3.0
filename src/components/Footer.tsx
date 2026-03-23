import Link from "next/link";

export default function Footer() {
  const currentYear = 2024;

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-lg font-semibold text-slate-200">
              WithusTools
            </span>
            <span className="text-sm">© {currentYear}</span>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-slate-400">
            <Link
              href="/"
              className="transition-colors hover:text-slate-200"
            >
              Home
            </Link>
            <Link
              href="/tools"
              className="transition-colors hover:text-slate-200"
            >
              Tools
            </Link>
            <Link
              href="/search"
              className="transition-colors hover:text-slate-200"
            >
              Search
            </Link>
            <Link
              href="/licenses"
              className="transition-colors hover:text-slate-200"
            >
              Licenses
            </Link>
            <a
              href="mailto:dbsghkwns553@gmail.com"
              className="transition-colors hover:text-slate-200"
              title="Send feedback & requests"
            >
              Feedback
            </a>
          </nav>
        </div>
        <div className="mt-4 text-sm text-slate-500">
          <p>Free online web tools. No signup required.</p>
          <p className="mt-1">
            Feedback & requests:{" "}
            <a
              href="mailto:dbsghkwns553@gmail.com"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              dbsghkwns553@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
