"use client";

import { useEffect, useState } from "react";

/** Tailwind `lg` 와 동일 (1024px) */
const LG_MQ = "(min-width: 1024px)";

/**
 * 뷰포트가 `lg` 이상인지. 최초 `null`은 SSR·하이드 직전(아직 측정 전)입니다.
 * 광고 DOM을 한쪽만 넣기 위해 사용합니다.
 */
export function useIsLgUp() {
  const [isLgUp, setIsLgUp] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(LG_MQ);
    const apply = () => setIsLgUp(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return isLgUp;
}
