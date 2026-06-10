"use client";

import { useToolPageContent } from "@/hooks/useToolPageContent";

const META_PATH = "/tools/calculator/programmer-calculator";

type TechnicalRefSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

type TechnicalRefUi = {
  title: string;
  sections: TechnicalRefSection[];
  footer: string;
};

/** Detailed behavior reference; rendered in the same layout box as the numbered guide. */
export default function ProgrammerCalculatorTechnicalReference() {
  const page = useToolPageContent(META_PATH);
  const ref = (page?.ui as { technicalReference?: TechnicalRefUi } | undefined)
    ?.technicalReference;

  if (!ref) return null;

  return (
    <div className="space-y-4 text-sm leading-relaxed text-slate-400">
      <h2 className="text-lg font-semibold text-slate-200">{ref.title}</h2>
      <div className="space-y-3">
        {ref.sections.map((section) => (
          <div key={section.heading}>
            <p className="font-medium text-slate-300">{section.heading}</p>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "mt-1" : "mt-2 text-slate-500"}>
                {paragraph}
              </p>
            ))}
            {section.list && section.list.length > 0 ? (
              <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-slate-500">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
        <p className="text-slate-500">{ref.footer}</p>
      </div>
    </div>
  );
}
