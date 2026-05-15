"use client";

import { kakaoAdfitPcSkyscraperUnit } from "@/lib/site";
import { useIsLgUp } from "@/lib/hooks/use-is-lg-up";

/**
 * 애드핏 PC 세로 직사각형(160×600). `lg` 미만에서는 DOM에 슬롯을 두지 않습니다.
 * `ba.min.js`는 `app/layout.tsx`에서 한 번만 로드합니다.
 */
export function AdfitPcSkyscraperRail() {
  const isLgUp = useIsLgUp();

  if (isLgUp !== true) return null;

  return (
    <aside
      className="border-border bg-background/90 supports-[backdrop-filter]:bg-background/70 w-[160px] shrink-0 print:hidden"
      aria-label="광고"
    >
      <div
        className="border-border supports-[backdrop-filter]:bg-background/70 sticky z-30 overflow-hidden rounded-lg border bg-background/90 shadow-sm"
        style={{
          top: "min(max(7rem, calc(50vh - 300px)), calc(100vh - 620px))",
        }}
      >
        <ins
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit={kakaoAdfitPcSkyscraperUnit}
          data-ad-width="160"
          data-ad-height="600"
        />
      </div>
    </aside>
  );
}
