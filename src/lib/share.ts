const SITE_URL = "https://withustools.com";

export const SHARE_LINKS = {
  facebook: (url: string) =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  x: (url: string, text: string) =>
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  linkedin: (url: string) =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  whatsapp: (url: string, text: string) =>
    `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
  telegram: (url: string, text: string) =>
    `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
} as const;

export type SharePlatform = keyof typeof SHARE_LINKS;

export const LABELS: Record<SharePlatform, string> = {
  facebook: "Share on Facebook",
  x: "Share on X",
  linkedin: "Share on LinkedIn",
  whatsapp: "Share on WhatsApp",
  telegram: "Share on Telegram",
};

export function getShareHref(platform: SharePlatform, url: string, text: string): string {
  switch (platform) {
    case "facebook":
      return SHARE_LINKS.facebook(url);
    case "x":
      return SHARE_LINKS.x(url, text);
    case "linkedin":
      return SHARE_LINKS.linkedin(url);
    case "whatsapp":
      return SHARE_LINKS.whatsapp(url, text);
    case "telegram":
      return SHARE_LINKS.telegram(url, text);
  }
}

export function openShare(platform: SharePlatform) {
  if (typeof window === "undefined") return;
  const url = `${SITE_URL}${window.location.pathname}${window.location.search}`;
  const text = document.title || "WithusTools - Free Online Web Tools";
  const href = getShareHref(platform, url, text);
  window.open(href, "_blank", "noopener,noreferrer,width=600,height=400");
}
