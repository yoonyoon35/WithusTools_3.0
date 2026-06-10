import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ko"],
  defaultLocale: "en",
  /** 모든 언어에 locale 접두사: /en/..., /ko/... */
  localePrefix: "always",
  /** 정적 export: middleware 없이 headers() 기반 locale 감지 비활성화 */
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
