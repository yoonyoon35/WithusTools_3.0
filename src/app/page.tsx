"use client";

import { useEffect } from "react";
import { routing } from "@/i18n/routing";

/** 정적 export + middleware 미사용 시 루트(/) → 기본 locale로 이동 */
export default function RootRedirectPage() {
  useEffect(() => {
    window.location.replace(`/${routing.defaultLocale}/`);
  }, []);

  return null;
}
