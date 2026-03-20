"use client";

import { useState, useCallback } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

interface Rule {
  id: string;
  userAgent: string;
  path: string;
  ruleType: "allow" | "disallow";
}

export default function RobotsGenerator() {
  const [sitemapUrl, setSitemapUrl] = useState("");
  const [crawlDelay, setCrawlDelay] = useState("");
  const [rules, setRules] = useState<Rule[]>([{ id: "1", userAgent: "*", path: "/", ruleType: "allow" }]);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  }, []);

  const generateRobots = useCallback(() => {
    const grouped: Record<string, { type: "allow" | "disallow"; path: string }[]> = {};
    rules.forEach((r) => {
      const ua = r.userAgent.trim();
      const p = r.path.trim();
      if (!ua || !p) return;
      if (!grouped[ua]) grouped[ua] = [];
      grouped[ua].push({ type: r.ruleType, path: p });
    });

    let txt = "";
    for (const [ua, items] of Object.entries(grouped)) {
      txt += `User-agent: ${ua}\n`;
      if (crawlDelay.trim()) txt += `Crawl-delay: ${crawlDelay.trim()}\n`;
      items.forEach(({ type, path }) => {
        txt += `${type === "allow" ? "Allow" : "Disallow"}: ${path}\n`;
      });
      txt += "\n";
    }
    if (sitemapUrl.trim()) txt += `Sitemap: ${sitemapUrl.trim()}\n`;
    return txt.trim();
  }, [rules, sitemapUrl, crawlDelay]);

  const robotsOutput = generateRobots();

  const addRule = () => {
    setRules((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        userAgent: "",
        path: "",
        ruleType: "disallow",
      },
    ]);
  };

  const removeRule = (id: string) => {
    setRules((prev) => prev.filter((r) => r.id !== id));
  };

  const moveRule = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= rules.length) return;
    setRules((prev) => {
      const arr = [...prev];
      [arr[index], arr[newIndex]] = [arr[newIndex], arr[index]];
      return arr;
    });
  };

  const updateRule = (id: string, field: keyof Rule, value: string) => {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const copyRobots = () => {
    if (!robotsOutput.trim()) {
      showMessage("No content to copy. Add at least one rule with User-agent and Path.", "error");
      return;
    }
    navigator.clipboard
      .writeText(robotsOutput)
      .then(() => showMessage("Robots.txt copied to clipboard!", "success"))
      .catch(() => showMessage("Failed to copy. Try again or copy manually.", "error"));
  };

  const downloadRobots = () => {
    if (!robotsOutput.trim()) {
      showMessage("No content to download. Add at least one rule with User-agent and Path.", "error");
      return;
    }
    const blob = new Blob([robotsOutput], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "robots.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {message && (
        <div
          className={`col-span-full rounded-lg px-4 py-2 text-sm ${
            message.type === "success" ? "bg-green-900/50 text-green-200" : "bg-red-900/50 text-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="space-y-6 rounded-xl border border-border bg-surface p-6">
        <div>
          <label className="block text-sm font-medium text-slate-400">Sitemap URL</label>
          <input
            type="url"
            value={sitemapUrl}
            onChange={(e) => setSitemapUrl(e.target.value)}
            placeholder="https://example.com/sitemap.xml"
            className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400">User Agent Rules</label>
          <div className="mt-2 space-y-3">
            {rules.map((r, index) => (
              <div
                key={r.id}
                className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 p-3"
              >
                <div className="flex flex-col gap-0.5">
                  <button
                    type="button"
                    onClick={() => moveRule(index, "up")}
                    disabled={index === 0}
                    className="rounded border border-slate-600 px-1.5 py-0.5 text-slate-400 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent"
                    aria-label="Move up"
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    onClick={() => moveRule(index, "down")}
                    disabled={index === rules.length - 1}
                    className="rounded border border-slate-600 px-1.5 py-0.5 text-slate-400 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent"
                    aria-label="Move down"
                  >
                    ▼
                  </button>
                </div>
                <input
                  type="text"
                  value={r.userAgent}
                  onChange={(e) => updateRule(r.id, "userAgent", e.target.value)}
                  placeholder="User-agent (e.g., *, Googlebot)"
                  className="flex-1 min-w-[120px] rounded border border-slate-600 bg-slate-800 px-2 py-1.5 text-sm text-slate-200"
                />
                <input
                  type="text"
                  value={r.path}
                  onChange={(e) => updateRule(r.id, "path", e.target.value)}
                  placeholder="Path (e.g., /, /private/)"
                  className="flex-1 min-w-[120px] rounded border border-slate-600 bg-slate-800 px-2 py-1.5 text-sm text-slate-200"
                />
                <select
                  value={r.ruleType}
                  onChange={(e) => updateRule(r.id, "ruleType", e.target.value)}
                  className="rounded border border-slate-600 bg-slate-800 px-2 py-1.5 text-sm text-slate-200"
                >
                  <option value="allow">Allow</option>
                  <option value="disallow">Disallow</option>
                </select>
                <button
                  type="button"
                  onClick={() => removeRule(r.id)}
                  className="rounded bg-red-900/50 px-2 py-1.5 text-sm text-red-200 hover:bg-red-900/70"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addRule}
            className="mt-3 rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700"
          >
            + Add Rule
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400">Crawl Delay (Optional)</label>
          <NumberInputWithStepper
            value={crawlDelay}
            onChange={(v) => setCrawlDelay(v)}
            placeholder="Enter delay in seconds"
            min={1}
            className="mt-1 w-full"
          />
          <p className="mt-1 text-xs text-slate-500">
            Note: Crawl-delay is ignored by Google. Supported by Yandex and some other crawlers.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-200">Generated Robots.txt</h3>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={copyRobots}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-500"
            >
              Copy
            </button>
            <button
              type="button"
              onClick={downloadRobots}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-500"
            >
              Download
            </button>
          </div>
        </div>
        <pre className="scrollbar-thin max-h-[50vh] overflow-y-auto rounded-lg bg-slate-900 p-4 pr-2 text-sm text-slate-300">
          {robotsOutput || "Generated robots.txt will appear here..."}
        </pre>
      </div>
    </div>
  );
}
