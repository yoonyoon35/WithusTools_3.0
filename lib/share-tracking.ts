export const SHARE_REF = "share";

export type ShareMethod = "kakao" | "facebook" | "x" | "naver" | "copy";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** 공유 버튼 클릭. GA4 권장 이벤트 `share`. */
export function trackShare(method: ShareMethod) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "share", {
    method,
    page_path: window.location.pathname,
  });
}

/** 공유용 절대 주소에 ref=share를 한 번만 붙입니다. 다른 쿼리는 유지합니다. */
export function withShareRef(url: string): string {
  const parsed = new URL(url);
  parsed.searchParams.set("ref", SHARE_REF);
  return parsed.toString();
}

/** 들어온 뒤 주소창에서 ref=share만 지웁니다. 입력값 쿼리는 남깁니다. */
export function stripShareRefFromAddressBar() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (url.searchParams.get("ref") !== SHARE_REF) return;
  url.searchParams.delete("ref");
  const next = `${url.pathname}${url.search}${url.hash}`;
  window.history.replaceState(window.history.state, "", next);
}
