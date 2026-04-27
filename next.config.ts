import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

/**
 * `output: "export"`에서는 NEXT_PUBLIC_* 값이 `next build` 시점에 번들에 박힙니다.
 * CI/호스팅에 키를 넣지 않으면 프로덕션에서 카카오 SDK가 아예 로드되지 않습니다.
 */
export default function createNextConfig(phase: string): NextConfig {
  if (phase === PHASE_PRODUCTION_BUILD && process.env.SKIP_KAKAO_ENV_CHECK !== "1") {
    const key = process.env.NEXT_PUBLIC_KAKAO_JS_KEY?.trim();
    if (!key) {
      throw new Error(
        "[next.config] 프로덕션 빌드(next build)에는 카카오 공유용 NEXT_PUBLIC_KAKAO_JS_KEY가 필요합니다. " +
          "로컬은 .env.local, 배포는 GitHub Actions·Cloudflare·Vercel 등 빌드 환경 변수에 동일 값을 넣은 뒤 다시 빌드하세요. " +
          "카카오 공유 없이 빌드만 할 때는 SKIP_KAKAO_ENV_CHECK=1 을 설정하세요.",
      );
    }
  }

  return {
    output: "export",
    images: {
      unoptimized: true,
    },
  };
}
