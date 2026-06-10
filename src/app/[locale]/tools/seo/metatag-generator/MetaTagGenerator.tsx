"use client";

import { useState, useCallback } from "react";
import useToolPageContent from "@/hooks/useToolPageContent";
import { asMap, asText } from "@/lib/tool-ui-helpers";

const META_PATH = "/tools/seo/metatag-generator";

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;
const OG_TITLE_LIMIT = 95;
const OG_DESC_LIMIT = 200;
const TWITTER_TITLE_LIMIT = 70;
const TWITTER_DESC_LIMIT = 200;

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default function MetaTagGenerator() {
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui;
  const toolUi = asMap(ui);
  const messagesUi = asMap(toolUi.messages);

  const [activeTab, setActiveTab] = useState<"basic" | "opengraph" | "twitter">("basic");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [robots, setRobots] = useState("index, follow");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [ogUrl, setOgUrl] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [ogImageWidth, setOgImageWidth] = useState("1200");
  const [ogImageHeight, setOgImageHeight] = useState("630");
  const [ogImageAlt, setOgImageAlt] = useState("");
  const [ogSiteName, setOgSiteName] = useState("");
  const [ogType, setOgType] = useState("website");
  const [twitterCard, setTwitterCard] = useState("summary_large_image");
  const [twitterTitle, setTwitterTitle] = useState("");
  const [twitterDescription, setTwitterDescription] = useState("");
  const [twitterImage, setTwitterImage] = useState("");
  const [syncFromBasic, setSyncFromBasic] = useState(true);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const effectiveOgTitle = ogTitle || (syncFromBasic ? title : "");
  const effectiveOgDescription = ogDescription || (syncFromBasic ? description : "");
  const effectiveTwitterTitle = twitterTitle || (syncFromBasic ? title : "");
  const effectiveTwitterDescription = twitterDescription || (syncFromBasic ? description : "");

  const generateMetaTags = useCallback(() => {
    let meta = "";
    if (title) meta += `<title>${escapeHtml(title)}</title>\n`;
    if (description) meta += `<meta name="description" content="${escapeHtml(description)}">\n`;
    if (keywords) meta += `<meta name="keywords" content="${escapeHtml(keywords)}">\n`;
    if (robots) meta += `<meta name="robots" content="${escapeHtml(robots)}">\n`;
    if (canonicalUrl) meta += `<link rel="canonical" href="${escapeHtml(canonicalUrl)}">\n`;
    if (effectiveOgTitle || effectiveOgDescription || ogUrl || ogImage || ogSiteName) {
      meta += "\n<!-- Open Graph Tags -->\n";
      meta += `<meta property="og:type" content="${escapeHtml(ogType)}">\n`;
      if (ogSiteName) meta += `<meta property="og:site_name" content="${escapeHtml(ogSiteName)}">\n`;
      if (effectiveOgTitle) meta += `<meta property="og:title" content="${escapeHtml(effectiveOgTitle)}">\n`;
      if (effectiveOgDescription) meta += `<meta property="og:description" content="${escapeHtml(effectiveOgDescription)}">\n`;
      if (ogUrl) meta += `<meta property="og:url" content="${escapeHtml(ogUrl)}">\n`;
      if (ogImage) {
        meta += `<meta property="og:image" content="${escapeHtml(ogImage)}">\n`;
        if (ogImageWidth) meta += `<meta property="og:image:width" content="${escapeHtml(ogImageWidth)}">\n`;
        if (ogImageHeight) meta += `<meta property="og:image:height" content="${escapeHtml(ogImageHeight)}">\n`;
        if (ogImageAlt) meta += `<meta property="og:image:alt" content="${escapeHtml(ogImageAlt)}">\n`;
      }
    }
    if (effectiveTwitterTitle || effectiveTwitterDescription || twitterImage) {
      meta += "\n<!-- Twitter Card Tags -->\n";
      meta += `<meta name="twitter:card" content="${escapeHtml(twitterCard)}">\n`;
      if (effectiveTwitterTitle) meta += `<meta name="twitter:title" content="${escapeHtml(effectiveTwitterTitle)}">\n`;
      if (effectiveTwitterDescription)
        meta += `<meta name="twitter:description" content="${escapeHtml(effectiveTwitterDescription)}">\n`;
      if (twitterImage) meta += `<meta name="twitter:image" content="${escapeHtml(twitterImage)}">\n`;
    }
    return meta;
  }, [
    title,
    description,
    keywords,
    robots,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    ogType,
    ogSiteName,
    ogImageWidth,
    ogImageHeight,
    ogImageAlt,
    canonicalUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    syncFromBasic,
  ]);

  const metaOutput = generateMetaTags();

  const copyMetaTags = () => {
    navigator.clipboard
      .writeText(metaOutput)
      .then(() => {
        setMessage({ text: asText(messagesUi.copied), type: "success" });
        setTimeout(() => setMessage(null), 3000);
      })
      .catch(() => {
        setMessage({ text: asText(messagesUi.copyFailed), type: "error" });
        setTimeout(() => setMessage(null), 3000);
      });
  };

  const saveMetaTags = () => {
    if (!metaOutput.trim()) {
      setMessage({ text: asText(messagesUi.noSave), type: "error" });
      setTimeout(() => setMessage(null), 3000);
      return;
    }
    const blob = new Blob([metaOutput], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meta-tags.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setMessage({ text: asText(messagesUi.saved), type: "success" });
    setTimeout(() => setMessage(null), 3000);
  };

  if (!ui) return null;

  const tabLabel = (tab: "basic" | "opengraph" | "twitter") => {
    if (tab === "opengraph") return asText(toolUi.tabOpenGraph);
    if (tab === "twitter") return asText(toolUi.tabTwitter);
    return asText(toolUi.tabBasic);
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

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 font-semibold text-slate-200">{asText(toolUi.input)}</h3>
        <div className="flex gap-2 border-b border-slate-700">
          {(["basic", "opengraph", "twitter"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 px-4 py-2 text-sm font-medium ${
                activeTab === tab
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-300"
              }`}
            >
              {tabLabel(tab)}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-4">
          {activeTab === "basic" && (
            <>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={syncFromBasic}
                  onChange={(e) => setSyncFromBasic(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-blue-500"
                />
                <span className="text-sm text-slate-400">{asText(toolUi.syncFromBasic)}</span>
              </label>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.titleTag)}</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={asText(toolUi.titlePlaceholder)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
                <span className={`text-xs ${title.length > TITLE_LIMIT ? "text-red-400" : "text-slate-500"}`}>
                  {title.length}/{TITLE_LIMIT}
                </span>
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.metaDescription)}</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={asText(toolUi.descriptionPlaceholder)}
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
                <span className={`text-xs ${description.length > DESC_LIMIT ? "text-red-400" : "text-slate-500"}`}>
                  {description.length}/{DESC_LIMIT}
                </span>
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.metaKeywords)}</label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder={asText(toolUi.keywordsPlaceholder)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.robots)}</label>
                <select
                  value={robots}
                  onChange={(e) => setRobots(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                >
                  <option value="index, follow">{asText(toolUi.robotsIndexFollow)}</option>
                  <option value="noindex, follow">{asText(toolUi.robotsNoindexFollow)}</option>
                  <option value="index, nofollow">{asText(toolUi.robotsIndexNofollow)}</option>
                  <option value="noindex, nofollow">{asText(toolUi.robotsNoindexNofollow)}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.canonicalUrl)}</label>
                <input
                  type="url"
                  value={canonicalUrl}
                  onChange={(e) => setCanonicalUrl(e.target.value)}
                  placeholder={asText(toolUi.canonicalPlaceholder)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
              </div>
            </>
          )}
          {activeTab === "opengraph" && (
            <>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.ogType)}</label>
                <select
                  value={ogType}
                  onChange={(e) => setOgType(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                >
                  <option value="website">{asText(toolUi.ogTypeWebsite)}</option>
                  <option value="article">{asText(toolUi.ogTypeArticle)}</option>
                  <option value="product">{asText(toolUi.ogTypeProduct)}</option>
                  <option value="profile">{asText(toolUi.ogTypeProfile)}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.ogSiteName)}</label>
                <input
                  type="text"
                  value={ogSiteName}
                  onChange={(e) => setOgSiteName(e.target.value)}
                  placeholder={asText(toolUi.ogSiteNamePlaceholder)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.ogTitle)}</label>
                <input
                  type="text"
                  value={ogTitle}
                  onChange={(e) => setOgTitle(e.target.value)}
                  placeholder={asText(toolUi.ogTitlePlaceholder)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
                <span className={`text-xs ${ogTitle.length > OG_TITLE_LIMIT ? "text-red-400" : "text-slate-500"}`}>
                  {ogTitle.length}/{OG_TITLE_LIMIT}
                </span>
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.ogDescription)}</label>
                <textarea
                  value={ogDescription}
                  onChange={(e) => setOgDescription(e.target.value)}
                  placeholder={asText(toolUi.ogDescriptionPlaceholder)}
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
                <span className={`text-xs ${ogDescription.length > OG_DESC_LIMIT ? "text-red-400" : "text-slate-500"}`}>
                  {ogDescription.length}/{OG_DESC_LIMIT}
                </span>
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.ogUrl)}</label>
                <input
                  type="url"
                  value={ogUrl}
                  onChange={(e) => setOgUrl(e.target.value)}
                  placeholder={asText(toolUi.ogUrlPlaceholder)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.ogImageUrl)}</label>
                <input
                  type="url"
                  value={ogImage}
                  onChange={(e) => setOgImage(e.target.value)}
                  placeholder={asText(toolUi.ogImagePlaceholder)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400">{asText(toolUi.ogImageWidth)}</label>
                  <input
                    type="text"
                    value={ogImageWidth}
                    onChange={(e) => setOgImageWidth(e.target.value)}
                    placeholder="1200"
                    className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400">{asText(toolUi.ogImageHeight)}</label>
                  <input
                    type="text"
                    value={ogImageHeight}
                    onChange={(e) => setOgImageHeight(e.target.value)}
                    placeholder="630"
                    className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.ogImageAlt)}</label>
                <input
                  type="text"
                  value={ogImageAlt}
                  onChange={(e) => setOgImageAlt(e.target.value)}
                  placeholder={asText(toolUi.ogImageAltPlaceholder)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
              </div>
            </>
          )}
          {activeTab === "twitter" && (
            <>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.twitterCardType)}</label>
                <select
                  value={twitterCard}
                  onChange={(e) => setTwitterCard(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                >
                  <option value="summary">{asText(toolUi.twitterCardSummary)}</option>
                  <option value="summary_large_image">{asText(toolUi.twitterCardSummaryLarge)}</option>
                  <option value="app">{asText(toolUi.twitterCardApp)}</option>
                  <option value="player">{asText(toolUi.twitterCardPlayer)}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.twitterTitle)}</label>
                <input
                  type="text"
                  value={twitterTitle}
                  onChange={(e) => setTwitterTitle(e.target.value)}
                  placeholder={asText(toolUi.twitterTitlePlaceholder)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
                <span className={`text-xs ${twitterTitle.length > TWITTER_TITLE_LIMIT ? "text-red-400" : "text-slate-500"}`}>
                  {twitterTitle.length}/{TWITTER_TITLE_LIMIT}
                </span>
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.twitterDescription)}</label>
                <textarea
                  value={twitterDescription}
                  onChange={(e) => setTwitterDescription(e.target.value)}
                  placeholder={asText(toolUi.twitterDescriptionPlaceholder)}
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
                <span className={`text-xs ${twitterDescription.length > TWITTER_DESC_LIMIT ? "text-red-400" : "text-slate-500"}`}>
                  {twitterDescription.length}/{TWITTER_DESC_LIMIT}
                </span>
              </div>
              <div>
                <label className="block text-sm text-slate-400">{asText(toolUi.twitterImageUrl)}</label>
                <input
                  type="url"
                  value={twitterImage}
                  onChange={(e) => setTwitterImage(e.target.value)}
                  placeholder={asText(toolUi.ogImagePlaceholder)}
                  className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-200">{asText(toolUi.generatedMetaTags)}</h3>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={saveMetaTags}
              className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-1.5 text-sm font-medium text-slate-200 hover:bg-slate-600"
            >
              {asText(toolUi.saveHtml)}
            </button>
            <button
              type="button"
              onClick={copyMetaTags}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-500"
            >
              {asText(toolUi.copyHtml)}
            </button>
          </div>
        </div>
        <pre className="scrollbar-thin max-h-[50vh] overflow-y-auto rounded-lg bg-slate-900 p-4 pr-2 text-sm text-slate-300">
          {metaOutput || asText(toolUi.emptyOutput)}
        </pre>

        <div className="mt-6 space-y-4">
          <h3 className="font-semibold text-slate-200">{asText(toolUi.preview)}</h3>
          <div className="space-y-3">
            <div>
              <p className="mb-1 text-xs text-slate-500">{asText(toolUi.searchResult)}</p>
              <div className="rounded-lg border border-slate-600 bg-white p-3 text-left dark:bg-slate-800">
                <div className="text-lg text-blue-600 dark:text-blue-400 line-clamp-1">
                  {title || ogTitle || effectiveOgTitle || asText(toolUi.previewTitle)}
                </div>
                <div className="mt-0.5 text-sm text-green-700 dark:text-green-400">
                  {canonicalUrl || ogUrl || asText(toolUi.ogUrlPlaceholder)}
                </div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {description || ogDescription || effectiveOgDescription || asText(toolUi.previewDescription)}
                </div>
              </div>
            </div>
            <div>
              <p className="mb-1 text-xs text-slate-500">{asText(toolUi.socialCard)}</p>
              <div className="overflow-hidden rounded-lg border border-slate-600 bg-white dark:bg-slate-800">
                {ogImage || twitterImage ? (
                  <div className="aspect-video w-full bg-slate-200 dark:bg-slate-700">
                    <img
                      src={ogImage || twitterImage}
                      alt={ogImageAlt || asText(toolUi.preview)}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-500">
                    {asText(toolUi.noImage)}
                  </div>
                )}
                <div className="p-3 text-left">
                  <div className="font-medium text-slate-900 line-clamp-1 dark:text-slate-200">
                    {effectiveOgTitle || effectiveTwitterTitle || title || asText(toolUi.previewTitle)}
                  </div>
                  <div className="mt-1 text-sm text-slate-600 line-clamp-2 dark:text-slate-400">
                    {effectiveOgDescription || effectiveTwitterDescription || description || asText(toolUi.previewDescription)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
