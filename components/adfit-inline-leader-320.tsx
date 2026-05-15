"use client";

import { kakaoAdfitInlineLeader320MobileUnit, kakaoAdfitInlineLeader320Unit } from "@/lib/site";
import { useIsLgUp } from "@/lib/hooks/use-is-lg-up";
import { cn } from "@/lib/utils";

const slotClassName =
  "flex w-full justify-center overflow-x-auto [-webkit-overflow-scrolling:touch]";

function Inline320Ins({ unit }: { unit: string }) {
  return (
    <div className="min-h-[100px] min-w-[320px] shrink-0">
      <ins
        className="kakao_ad_area"
        style={{ display: "none" }}
        data-ad-unit={unit}
        data-ad-width="320"
        data-ad-height="100"
      />
    </div>
  );
}

/**
 * 애드핏 320×100. `lg` 이상에서만 데스크탑 단위 DOM을, 미만에서만 모바일 단위 DOM을 넣습니다(애드핏이 숨김 슬롯까지 채우는 문제 방지).
 * `ba.min.js`는 `app/layout.tsx`에서 한 번만 로드합니다.
 */
export function AdfitInlineLeader320({ className }: { className?: string }) {
  const isLgUp = useIsLgUp();
  const desktopUnit = kakaoAdfitInlineLeader320Unit;
  const mobileUnit = kakaoAdfitInlineLeader320MobileUnit;

  if (isLgUp === null) {
    return <div className={cn("min-h-[100px] w-full", className)} aria-hidden />;
  }

  if (isLgUp) {
    if (!desktopUnit) return null;
    return (
      <div className={cn(slotClassName, className)} aria-label="광고">
        <Inline320Ins unit={desktopUnit} />
      </div>
    );
  }

  if (!mobileUnit) return null;
  return (
    <div className={cn(slotClassName, className)} aria-label="광고">
      <Inline320Ins unit={mobileUnit} />
    </div>
  );
}
