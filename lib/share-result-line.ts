"use client";

import { useEffect } from "react";

let currentLine: string | null = null;

export function getShareResultLine(): string | null {
  return currentLine;
}

function publishShareResultLine(line: string | null) {
  const trimmed = line?.trim() ?? "";
  currentLine = trimmed ? trimmed : null;
}

/** 계산기 결과 한 줄. 페이지를 떠나면 지웁니다. */
export function useShareResultLine(line: string | null) {
  useEffect(() => {
    publishShareResultLine(line);
    return () => publishShareResultLine(null);
  }, [line]);
}
