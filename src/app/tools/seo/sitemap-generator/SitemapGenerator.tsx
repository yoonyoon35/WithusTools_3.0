"use client";

import { useState, useCallback } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

function clampPriority(val: string): string {
  return String(Math.min(1, Math.max(0, parseFloat(val) || 0.5)));
}

interface UrlItem {
  id: string;
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export default function SitemapGenerator() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [baseLastmod, setBaseLastmod] = useState("");
  const [urlItems, setUrlItems] = useState<UrlItem[]>([
    { id: "1", url: "", lastmod: "", changefreq: "daily", priority: "0.8" },
  ]);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const today = new Date().toISOString().split("T")[0];

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  }, []);

  const generateSitemap = useCallback(() => {
    const baseUrl = websiteUrl.trim();
    if (!baseUrl) return "Please enter website URL";

    const baseLastmodVal = baseLastmod.trim() || today;
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${escapeXml(baseUrl)}</loc>
        <lastmod>${baseLastmodVal}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>`;

    urlItems.forEach((item) => {
      const url = item.url.trim();
      if (!url) return;
      const lastmodVal = item.lastmod.trim() || today;
      xml += `
    <url>
        <loc>${escapeXml(url)}</loc>
        <lastmod>${lastmodVal}</lastmod>
        <changefreq>${item.changefreq}</changefreq>
        <priority>${clampPriority(item.priority)}</priority>
    </url>`;
    });

    xml += "\n</urlset>";
    return xml;
  }, [websiteUrl, baseLastmod, urlItems, today]);

  const xmlOutput = generateSitemap();

  const addUrl = () => {
    setUrlItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        url: "",
        lastmod: "",
        changefreq: "daily",
        priority: "0.8",
      },
    ]);
  };

  const removeUrl = (id: string) => {
    setUrlItems((prev) => prev.filter((u) => u.id !== id));
  };

  const moveUrl = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= urlItems.length) return;
    setUrlItems((prev) => {
      const arr = [...prev];
      [arr[index], arr[newIndex]] = [arr[newIndex], arr[index]];
      return arr;
    });
  };

  const updateUrl = (id: string, field: keyof UrlItem, value: string) => {
    setUrlItems((prev) =>
      prev.map((u) => (u.id === id ? { ...u, [field]: value } : u))
    );
  };

  const copyXml = () => {
    if (!websiteUrl.trim() || xmlOutput === "Please enter website URL") {
      showMessage("Enter Website URL first.", "error");
      return;
    }
    navigator.clipboard
      .writeText(xmlOutput)
      .then(() => showMessage("XML copied to clipboard!", "success"))
      .catch(() => showMessage("Failed to copy. Try again or copy manually.", "error"));
  };

  const downloadXml = () => {
    if (!websiteUrl.trim() || xmlOutput === "Please enter website URL") {
      showMessage("Enter Website URL first.", "error");
      return;
    }
    const blob = new Blob([xmlOutput], { type: "text/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sitemap.xml";
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
        <div className="rounded-lg border border-slate-700/80 bg-slate-800/30 p-4">
          <label className="block text-sm font-medium text-slate-300">Website URL</label>
          <input
            type="url"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="https://example.com"
            className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-slate-200 placeholder-slate-500 transition-colors focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30"
          />
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label className="text-xs text-slate-500">Last modified</label>
              <input
                type="date"
                value={baseLastmod}
                onChange={(e) => setBaseLastmod(e.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-800/80 px-3 py-1.5 text-sm text-slate-200 focus:border-blue-500/50 focus:outline-none"
              />
            </div>
            <span className="text-xs text-slate-600">(비어 있으면 오늘)</span>
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="text-sm font-medium text-slate-300">URL List</label>
            <button
              type="button"
              onClick={addUrl}
              className="rounded-lg border border-dashed border-slate-600 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-blue-500/50 hover:bg-slate-800/50 hover:text-slate-300"
            >
              + Add URL
            </button>
          </div>
          <div className="space-y-3">
            {urlItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative rounded-xl border border-slate-700/80 bg-slate-800/30 p-4 transition-all hover:border-slate-600/80 hover:shadow-md hover:shadow-slate-900/50"
              >
                <span className="absolute right-3 top-3 rounded-md bg-slate-700/80 px-2 py-0.5 text-xs font-medium text-slate-400">
                  #{index + 1}
                </span>
                <div className="flex items-start gap-3 pr-10">
                  <div className="flex shrink-0 flex-col gap-0.5 pt-2">
                    <button
                      type="button"
                      onClick={() => moveUrl(index, "up")}
                      disabled={index === 0}
                      className="rounded-md border border-slate-600/80 p-1 text-slate-500 transition-colors hover:border-slate-500 hover:bg-slate-700/50 hover:text-slate-300 disabled:opacity-30 disabled:hover:bg-transparent"
                      aria-label="Move up"
                    >
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => moveUrl(index, "down")}
                      disabled={index === urlItems.length - 1}
                      className="rounded-md border border-slate-600/80 p-1 text-slate-500 transition-colors hover:border-slate-500 hover:bg-slate-700/50 hover:text-slate-300 disabled:opacity-30 disabled:hover:bg-transparent"
                      aria-label="Move down"
                    >
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="min-w-0 flex-1 space-y-3">
                    <div>
                      <input
                        type="url"
                        value={item.url}
                        onChange={(e) => updateUrl(item.id, "url", e.target.value)}
                        placeholder="https://example.com/page"
                        className="w-full rounded-lg border border-slate-600 bg-slate-800/80 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 transition-colors focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div>
                        <label className="mb-0.5 block text-xs text-slate-500">Last modified</label>
                        <input
                          type="date"
                          value={item.lastmod}
                          onChange={(e) => updateUrl(item.id, "lastmod", e.target.value)}
                          title="비어 있으면 오늘"
                          className="w-36 rounded-lg border border-slate-600 bg-slate-800/80 px-2.5 py-1.5 text-sm text-slate-200 focus:border-blue-500/50 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-0.5 block text-xs text-slate-500">Frequency</label>
                        <select
                          value={item.changefreq}
                          onChange={(e) => updateUrl(item.id, "changefreq", e.target.value)}
                          className="rounded-lg border border-slate-600 bg-slate-800/80 px-2.5 py-1.5 text-sm text-slate-200 focus:border-blue-500/50 focus:outline-none"
                        >
                          <option value="always">Always</option>
                          <option value="hourly">Hourly</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="yearly">Yearly</option>
                          <option value="never">Never</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-0.5 block text-xs text-slate-500">Priority</label>
                        <NumberInputWithStepper
                          value={item.priority}
                          onChange={(v) => updateUrl(item.id, "priority", v)}
                          min={0}
                          max={1}
                          step={0.1}
                          className="w-20"
                        />
                      </div>
                      <div className="ml-auto pt-5">
                        <button
                          type="button"
                          onClick={() => removeUrl(item.id)}
                          className="rounded-lg border border-red-900/50 bg-red-900/20 px-3 py-1.5 text-sm text-red-300 transition-colors hover:bg-red-900/40"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-200">Generated Sitemap</h3>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={copyXml}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-500"
            >
              Copy XML
            </button>
            <button
              type="button"
              onClick={downloadXml}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-500"
            >
              Download
            </button>
          </div>
        </div>
        <pre className="scrollbar-thin max-h-[50vh] overflow-y-auto rounded-lg bg-slate-900 p-4 pr-2 text-sm text-slate-300">
          {xmlOutput}
        </pre>
      </div>
    </div>
  );
}
