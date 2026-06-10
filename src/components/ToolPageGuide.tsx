import type { ReactNode } from "react";
import type { ToolGuideBlock } from "@/lib/tool-content";

type ToolPageGuideProps = {
  title: string;
  intro?: string;
  introNode?: ReactNode;
  sections: ToolGuideBlock[];
  className?: string;
};

function GuideBlock({ section }: { section: ToolGuideBlock }) {
  if (section.type === "ordered") {
    return (
      <ol className="list-decimal space-y-1.5 pl-5 marker:text-slate-500">
        {section.items.map((item, i) => (
          <li key={i} className="pl-1">
            {item}
          </li>
        ))}
      </ol>
    );
  }

  if (section.type === "unordered") {
    return (
      <ul className="list-disc space-y-1.5 pl-5 marker:text-slate-500">
        {section.items.map((item, i) => (
          <li key={i} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-1.5">
      {section.items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}

export default function ToolPageGuide({
  title,
  intro,
  introNode,
  sections,
  className = "mt-12",
}: ToolPageGuideProps) {
  return (
    <section
      className={`rounded-xl border border-border bg-surface p-6 sm:p-8 ${className}`}
    >
      <h2 className="mb-3 text-xl font-semibold text-slate-200">{title}</h2>
      {introNode ??
        (intro ? (
          <p className="mb-6 text-sm leading-relaxed text-slate-400">{intro}</p>
        ) : null)}
      <div className="divide-y divide-border/70 text-sm leading-relaxed text-slate-400">
        {sections.map((section, i) => (
          <div key={i} className="py-5 first:pt-0 last:pb-0">
            <h3 className="mb-2.5 font-semibold text-slate-200">{section.title}</h3>
            <GuideBlock section={section} />
          </div>
        ))}
      </div>
    </section>
  );
}
