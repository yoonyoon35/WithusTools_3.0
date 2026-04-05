import katex from "katex";
import "katex/dist/katex.min.css";

type Props = {
  /** LaTeX math expression (without delimiters). */
  latex: string;
  /** Block (centered) vs inline. */
  display?: boolean;
};

export default function LatexDisplay({ latex, display = true }: Props) {
  const html = katex.renderToString(latex, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <div
      className={`rounded-lg border border-blue-500/30 bg-slate-900/60 px-4 py-4 [&_.katex]:text-slate-100 ${display ? "text-center" : ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
