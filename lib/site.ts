export const SITE_DOMAIN = "withustools.com" as const;
export const SITE_URL = `https://${SITE_DOMAIN}` as const;
export const SITE_NAME = "WithusTools" as const;
export const siteTagline = "대출·부동산 계산 도구" as const;

/**
 * Facebook 공유 등 외부 서비스는 localhost URL을 받지 못해 링크 입력란이 비는 경우가 많습니다.
 * 배포 도메인(SITE_URL 또는 NEXT_PUBLIC_SITE_URL) + 현재 경로·쿼리로 공유용 절대 URL을 만듭니다.
 */
export function getPublicSharePageUrl(): string {
  const envBase =
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : SITE_URL;
  const base = envBase.replace(/\/$/, "");
  if (typeof window === "undefined") return `${base}/`;
  return `${base}${window.location.pathname}${window.location.search}`;
}

export const defaultTitle = `${SITE_NAME} - ${siteTagline}`;

/** SNS 공유 등 본문 요약 */
export const defaultShareText = "대출·부동산 계산, 미리 확인해 보세요.";

/** 푸터·히어로 등에 쓰는 참고 안내 한 줄 */
export const referenceDisclaimerLine =
  "본 서비스는 표준 계산식 기반 참고용이며, 실제 조건은 금융기관에 문의하시기 바랍니다.";

export const defaultDescription =
  `${SITE_NAME}(${SITE_DOMAIN})에서 대출 이자·DSR·취득세·중개보수·중도상환 수수료 계산기와 가이드를 무료로 이용하세요. 주택담보대출, 부동산 거래, 세금 납부 전 예상 비용을 참고용으로 미리 확인할 수 있습니다.`;

export const loanCalculatorTitle = `대출 이자 계산기 - ${SITE_DOMAIN}`;

export const loanCalculatorDescription =
  `대출 이자 계산기 ${SITE_DOMAIN}에서 원리금균등·원금균등·만기일시상환 방식별 월 납입액과 총 이자를 미리 계산해 보세요. 주택담보대출, 신용대출, 전세자금대출 조건별 상환 계획을 비교하고 대출 전 예상 부담을 참고용으로 확인할 수 있는 무료 온라인 계산기입니다.`;

export const loanCalculatorShareText = "대출 받기 전 미리 이자 계산해 보세요.";

export const ogImagePath = "/favicon/apple-touch-icon-152x152.png";

/** 카카오 애드핏 PC 세로형(160×600) 광고단위 */
export const kakaoAdfitPcSkyscraperUnit = "DAN-BNkWYYZ7sfTPst4Y" as const;

/** 카카오 애드핏 리더보드(728×90) 광고단위 */
export const kakaoAdfitLeaderboard728Unit = "DAN-02MWZxUTMY4UIt2J" as const;

/**
 * 카카오 애드핏 320×100 — **데스크탑(lg 이상)** 인라인용.
 * `kakaoAdfitInlineLeader320FromFile` 또는 `.env`의 `NEXT_PUBLIC_KAKAO_ADFIT_320x100_UNIT`. 비우면 데스크탑 슬롯만 숨김.
 */
const kakaoAdfitInlineLeader320FromFile = "";

export const kakaoAdfitInlineLeader320Unit: string =
  kakaoAdfitInlineLeader320FromFile.trim() ||
  (typeof process !== "undefined" ? process.env.NEXT_PUBLIC_KAKAO_ADFIT_320x100_UNIT?.trim() : "") ||
  "";

/** 카카오 애드핏 320×100 — **모바일(lg 미만)** 전용 */
export const kakaoAdfitInlineLeader320MobileUnit = "DAN-66MSaiUJ1Wmnqfy4" as const;

export const kakaoAdfitBaScriptSrc = "https://t1.kakaocdn.net/kas/static/ba.min.js" as const;
