import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { TOOLS } from "@/data/tools";
import ToolIcon from "@/components/ToolIcon";

/** 정적 내보내기(output: 'export')를 위해 모든 tool id를 미리 생성 */
export function generateStaticParams() {
  return TOOLS.map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const tool = TOOLS.find((t) => t.id === id);

  if (!tool) return createMetadata({ title: "Tool not found", noIndex: true });

  return createMetadata({
    title: tool.title,
    description: tool.description,
    path: tool.path,
    keywords: [tool.title, "online tools", "withustools"],
  });
}

export default function ToolPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  if (id === "ssh-key-gen") {
    redirect("/tools/ssh");
  }
  if (id === "hash-calculator") {
    redirect("/tools/hash-calculator");
  }
  if (id === "time-tools") {
    redirect("/tools/time");
  }
  if (id === "image-tools") {
    redirect("/tools/image");
  }
  if (id === "text-tools") {
    redirect("/tools/text");
  }
  if (id === "random-tools") {
    redirect("/tools/random");
  }
  if (id === "calculator-tools") {
    redirect("/tools/calculator");
  }

  const tool = TOOLS.find((t) => t.id === id);

  if (!tool) notFound();

  // id와 path가 다르면 실제 페이지로 리다이렉트 (예: /tools/developer-tools → /tools/developer)
  if (tool.path !== `/tools/${id}`) {
    redirect(tool.path);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name={tool.icon} />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">{tool.title}</h1>
            <p className="mt-1 text-sm capitalize text-slate-500">{tool.category}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-8 text-center">
          <p className="text-slate-400">{tool.description}</p>
          <p className="mt-6 text-sm text-slate-500">
            This tool will be available soon.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
          >
            ← Back to home
          </Link>
        </div>
    </div>
  );
}
