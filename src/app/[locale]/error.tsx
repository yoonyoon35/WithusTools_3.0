"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4">
      <h2 className="mb-4 text-xl font-semibold text-slate-100">
        Something went wrong
      </h2>
      <p className="mb-6 text-slate-400">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-lg border border-border bg-surface px-4 py-2 text-slate-200 transition-colors hover:bg-slate-700"
      >
        Try again
      </button>
    </div>
  );
}
