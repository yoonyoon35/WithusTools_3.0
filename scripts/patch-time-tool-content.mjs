/**
 * toolContent.json에 Time 허브 + 하위 도구 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { timeEn, timeUiEn } from "./time-en-data.mjs";
import { timeKo, timeUiKo } from "./time-ko-data.mjs";

const root = process.cwd();

const localKeys = [
  "time",
  "time.alarm-clock",
  "time.stopwatch",
  "time.timer",
  "time.pomodoro",
  "time.interval-timer",
  "time.date-difference",
  "time.calendar",
  "time.world-clock",
];

const uiByLocalKeyEn = {
  "time.alarm-clock": timeUiEn.alarmClock,
  "time.stopwatch": timeUiEn.stopwatch,
  "time.timer": timeUiEn.timer,
  "time.pomodoro": timeUiEn.pomodoro,
  "time.interval-timer": timeUiEn.intervalTimer,
  "time.date-difference": timeUiEn.dateDifference,
  "time.calendar": timeUiEn.calendar,
  "time.world-clock": timeUiEn.worldClock,
};

const uiByLocalKeyKo = {
  "time.alarm-clock": timeUiKo.alarmClock,
  "time.stopwatch": timeUiKo.stopwatch,
  "time.timer": timeUiKo.timer,
  "time.pomodoro": timeUiKo.pomodoro,
  "time.interval-timer": timeUiKo.intervalTimer,
  "time.date-difference": timeUiKo.dateDifference,
  "time.calendar": timeUiKo.calendar,
  "time.world-clock": timeUiKo.worldClock,
};

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const srcMap = locale === "en" ? timeEn : timeKo;
  const uiMap = locale === "en" ? uiByLocalKeyEn : uiByLocalKeyKo;

  for (const localKey of localKeys) {
    const pathKey = `tools.${localKey}`;
    const src = srcMap[localKey];
    if (!src) continue;

    const nextValue = { ...src };
    if (localKey === "time") {
      nextValue.ui =
        locale === "en"
          ? {
              healthToolsLink: "Health Tools",
              calculatorToolsLink: "Calculator Tools",
              guideIntroPrefix: "For body metrics, see",
              guideIntroSuffix: "For grades and math, use",
            }
          : {
              healthToolsLink: "건강 도구",
              calculatorToolsLink: "계산기 도구",
              guideIntroPrefix: "체성분·칼로리는",
              guideIntroSuffix: "성적·퍼센트 계산은",
            };
    } else {
      nextValue.ui = uiMap[localKey];
      nextValue.backToHub =
        locale === "en" ? "← Back to Time Tools" : "← 시간 도구로";
    }
    data.byPath[pathKey] = nextValue;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with Time entries`);
}
