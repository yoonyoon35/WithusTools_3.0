import { metaPathToKey } from "@/lib/page-metadata";

export type ToolGuideSectionType = "ordered" | "paragraphs" | "unordered";

export type ToolGuideBlock = {
  title: string;
  type: ToolGuideSectionType;
  items: string[];
};

export type ToolFaqItem = {
  question: string;
  answer: string;
};

export type ToolRelatedLink = {
  href: string;
  question: string;
};

export type ToolPageContent = {
  h1: string;
  subtitle: string;
  intro: string;
  introNote?: string;
  introNoteBefore?: string;
  introNoteAfter?: string;
  converterLinksTitle?: string;
  converterLinksIntro?: string;
  mixedFormatsTitle?: string;
  mixedFormatsBefore?: string;
  mixedFormatsEmphasis?: string;
  mixedFormatsAfter?: string;
  mixedFormatsAfterLink?: string;
  metaDescription?: string;
  displayName?: string;
  guideTitle: string;
  guideIntro?: string;
  guideIntroBefore?: string;
  guideIntroLink1?: string;
  guideIntroBetween?: string;
  guideIntroLink2?: string;
  guideIntroLink3?: string;
  guideIntroAfter?: string;
  sections: ToolGuideBlock[];
  faq: ToolFaqItem[];
  backToHub?: string;
  backToDeveloper?: string;
  backToHome?: string;
  relatedLinks?: ToolRelatedLink[];
  ui?: Record<string, string>;
};

export type ToolContentMessages = {
  byPath?: Record<string, ToolPageContent>;
};

export function getToolContentEntry(
  toolContent: ToolContentMessages | undefined,
  metaPath: string
): ToolPageContent | undefined {
  return toolContent?.byPath?.[metaPathToKey(metaPath)];
}

export function formatToolUiString(
  template: string,
  vars: Record<string, string | number>
): string {
  return Object.entries(vars).reduce(
    (s, [k, v]) => s.replaceAll(`{${k}}`, String(v)),
    template
  );
}

export function buildFaqJsonLd(faq: ToolFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
