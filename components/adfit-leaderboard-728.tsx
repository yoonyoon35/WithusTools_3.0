"use client";

import { kakaoAdfitLeaderboard728Unit } from "@/lib/site";
import { useIsLgUp } from "@/lib/hooks/use-is-lg-up";

/**
 * 애드핏 728×90 리더보드(PC 전용). `lg` 미만에서는 DOM에 슬롯을 두지 않습니다.
 * `ba.min.js`는 `app/layout.tsx`에서 한 번만 로드합니다.
 */
export function AdfitLeaderboard728() {
  const isLgUp = useIsLgUp();

  if (isLgUp !== true) return null;

  return (
    <div
      className="border-border bg-muted/15 mx-auto w-full max-w-6xl border-b px-4 py-2 print:hidden"
      aria-label="광고"
    >
      <div className="flex w-full justify-center overflow-x-auto [-webkit-overflow-scrolling:touch]">
        <div className="min-h-[90px] min-w-[728px] shrink-0">
          <ins
            className="kakao_ad_area"
            style={{ display: "none" }}
            data-ad-unit={kakaoAdfitLeaderboard728Unit}
            data-ad-width="728"
            data-ad-height="90"
          />
        </div>
      </div>
    </div>
  );
}
