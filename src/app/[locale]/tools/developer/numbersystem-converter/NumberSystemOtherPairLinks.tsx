import { Link } from "@/components/I18nLink";
import type { NumberSystemPairKey } from "@/utils/numberSystemConversion";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import { getNumberSystemOtherPairLinks } from "./numberSystemPairContent";
import { pairKeyLabel } from "./numberSystemPairUi";

export default function NumberSystemOtherPairLinks({
  fromPairKey,
  toPairKey,
  ui,
}: {
  fromPairKey: NumberSystemPairKey;
  toPairKey: NumberSystemPairKey;
  ui?: unknown;
}) {
  const pageUi = asMap(ui);
  const links = getNumberSystemOtherPairLinks(fromPairKey, toPairKey, 12);
  if (links.length === 0) return null;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-2 text-lg font-semibold text-slate-200">{asText(pageUi.otherPairsTitle)}</h2>
      <p className="mb-4 text-sm leading-relaxed text-slate-500">{asText(pageUi.otherPairsIntro)}</p>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {links.map(({ href, from, to, line2 }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex flex-col rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800/60"
            >
              <span className="font-medium text-slate-200">
                {formatUi(asText(pageUi.pairLinkTemplate), {
                  from,
                  to,
                  fromName: pairKeyLabel(ui, from),
                  toName: pairKeyLabel(ui, to),
                })}
              </span>
              <span className="mt-0.5 text-xs text-slate-500">{asText(pageUi.pairLinkLine2) || line2}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
