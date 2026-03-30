import Link from "next/link";
import type { NumberSystemPairKey } from "@/utils/numberSystemConversion";
import { getNumberSystemOtherPairLinks } from "./numberSystemPairContent";

export default function NumberSystemOtherPairLinks({
  fromPairKey,
  toPairKey,
}: {
  fromPairKey: NumberSystemPairKey;
  toPairKey: NumberSystemPairKey;
}) {
  const links = getNumberSystemOtherPairLinks(fromPairKey, toPairKey, 12);
  if (links.length === 0) return null;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-2 text-lg font-semibold text-slate-200">More number system pairs</h2>
      <p className="mb-4 text-sm leading-relaxed text-slate-500">
        Other fixed input/output converters use the same parsing rules as the hub. Open any pair for the same
        calculator layout and reference tables.
      </p>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {links.map(({ href, line1, line2 }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex flex-col rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800/60"
            >
              <span className="font-medium text-slate-200">{line1}</span>
              <span className="mt-0.5 text-xs text-slate-500">{line2}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
