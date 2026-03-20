import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-slate-100 transition-colors hover:text-white"
        >
          <span className="flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <img
              src="/favicon-package/apple-touch-icon.png"
              alt="WithusTools"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </span>
          WithusTools
        </Link>

        <form
          action="/search"
          method="get"
          className="relative flex flex-1 max-w-xl items-center"
        >
          <input
            type="search"
            name="q"
            placeholder="Quick Search... Search tools"
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 pr-10 text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-slate-600 focus:ring-1 focus:ring-slate-600"
            aria-label="Quick Search"
          />
          <button
            type="submit"
            className="absolute right-2.5 text-slate-400 transition-colors hover:text-slate-200"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
}
