import { ogImagePath, SITE_URL } from "@/lib/site";

function kakaoJavaScriptKey(): string | undefined {
  const k = process.env.NEXT_PUBLIC_KAKAO_JS_KEY?.trim();
  return k || undefined;
}

/**
 * SDK 스크립트는 실행됐는데 `Script` onLoad보다 먼저 클릭하거나, onLoad에서 init이
 * 건너뛰어진 경우 등에 대비해 공유 직전에 한 번 더 초기화를 시도합니다.
 */
function ensureKakaoInitialized(): boolean {
  const Kakao = window.Kakao;
  if (!Kakao) return false;
  if (Kakao.isInitialized()) return true;
  const key = kakaoJavaScriptKey();
  if (!key) return false;
  try {
    Kakao.init(key);
    return Kakao.isInitialized();
  } catch {
    return false;
  }
}

/**
 * 카카오톡 공유 (피드 템플릿). SDK 로드·초기화 후에만 동작합니다.
 * @returns 공유 요청을 열었으면 true, 그렇지 않으면 false
 */
export function sendKakaoFeedShare(options: {
  pageUrl: string;
  title: string;
  description: string;
}): boolean {
  if (typeof window === "undefined") return false;
  if (!ensureKakaoInitialized()) return false;
  const Kakao = window.Kakao!;

  const base = SITE_URL.replace(/\/$/, "");
  const imageUrl = `${base}${ogImagePath.startsWith("/") ? ogImagePath : `/${ogImagePath}`}`;

  try {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: options.title,
        description: options.description,
        imageUrl,
        link: {
          mobileWebUrl: options.pageUrl,
          webUrl: options.pageUrl,
        },
      },
    });
    return true;
  } catch {
    return false;
  }
}
