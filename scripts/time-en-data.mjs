export const timeEn = {
  time: {
    h1: "Time Tools",
    subtitle: "Alarm clock, stopwatch, timers, calendar, and world clock",
    intro:
      "Alarm clock, stopwatch, online timer, Pomodoro, calendar, and world clock in one place. Good for meeting reminders, focus sessions, and daily planning.",
    guideTitle: "Time Tools Guide",
    guideIntro:
      "For body metrics and calories, see Health Tools. For grades and percentages, use Calculator Tools.",
    sections: [
      {
        title: "1. How do I start using timers, clocks, or calendar tools here?",
        type: "ordered",
        items: [
          "Pick a tool from the grid: alarm clock, stopwatch, countdown timer, Pomodoro, interval timer, date difference, calendar, or world clock.",
          "Set the values you need, start it, and keep the tab open while you work.",
          "Allow browser notifications if you want alerts when the tab is in the background.",
          "Use the right tool for the moment: meeting reminder, focus sprint, workout set, or timezone check.",
        ],
      },
      {
        title: "2. How do time tools stay accurate while running in the browser?",
        type: "paragraphs",
        items: [
          "These tools run in your browser, so alarms, lap times, and calendar entries stay on your device.",
          "Alarms and timers check time continuously and trigger popup, sound, and optional browser notifications.",
          "Stopwatch tracks elapsed time and laps, date difference calculates day spans, and world clock converts across time zones.",
          "Calendar events are saved locally, so your schedule is still there when you come back in the same browser.",
        ],
      },
      {
        title: "3. What time and productivity tools can I use from this category?",
        type: "paragraphs",
        items: [
          "This page bundles practical online time tools for day-to-day work: alarm clock, online timer, stopwatch, Pomodoro, calendar, and world clock.",
          "Use them for quick desk reminders, meeting pacing, study blocks, cooking, or deadline tracking.",
          "No signup, no install. Open and use.",
        ],
      },
      {
        title: "4. Why use browser clocks and timers instead of installing separate apps?",
        type: "unordered",
        items: [
          "Data stays in your browser.",
          "No signup needed.",
          "Works on desktop and mobile.",
          "Optional browser notifications.",
          "Stopwatch lap export support.",
        ],
      },
      {
        title: "5. When are Pomodoro timers, alarms, and world clocks most useful?",
        type: "unordered",
        items: [
          "Start an alarm clock before a meeting so you do not miss handoff time.",
          "Run an online timer for cooking, breaks, or short focused tasks.",
          "Use Pomodoro for study sprints and the stopwatch for workout sets.",
          "Check date difference for D-day planning and world clock for remote calls.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I start using timers, clocks, or calendar tools here?",
        answer:
          "Pick a tool from the grid, set your values, and start. Allow notifications if you want alerts while working in other tabs.",
      },
      {
        question: "How do time tools stay accurate while running in the browser?",
        answer:
          "They rely on browser timing and date APIs to track elapsed time, trigger alarms, and update countdowns in real time.",
      },
      {
        question: "What time and productivity tools can I use from this category?",
        answer:
          "You can use alarm clock, stopwatch, countdown timer, Pomodoro timer, interval timer, date difference calculator, calendar, and world clock.",
      },
      {
        question: "Why use browser clocks and timers instead of installing separate apps?",
        answer:
          "They open instantly, need no signup, and keep your data in the same browser for quick repeat use.",
      },
      {
        question: "When are Pomodoro timers, alarms, and world clocks most useful?",
        answer:
          "They are useful for focus sessions, meeting reminders, deadline planning, and scheduling across time zones.",
      },
    ],
    backToHome: "← Back to home",
  },
  "time.alarm-clock": {
    h1: "Alarm Clock",
    subtitle: "Free online alarm clock for browser reminders",
    guideTitle: "Online Alarm Guide",
    guideIntro:
      "This browser alarm helps with quick meeting checks, medication reminders, and short task timers while you work. If you need other time tools, try Countdown Timer or Stopwatch.",
    sections: [
      {
        title: "1. How can I set a one-time alarm with sound in this browser tool?",
        type: "ordered",
        items: [
          'Pick a name if you want (otherwise it stays "My Alarm"), then set AM/PM, hour, and minute.',
          "Hit Add Alarm. It lands in your list and stays there—same browser, next visit included.",
          "If the browser asks for notification permission, allow it if you want pings even when this tab isn't up front.",
          "Bell icon = on/off. Pencil = change time or label.",
          "Delete removes it for good. When it fires, you get a popup and a sound.",
        ],
      },
      {
        title: "2. How does this alarm clock notify me while the page or tab is open?",
        type: "paragraphs",
        items: [
          "It compares the clock once per second to each active alarm. Same hour and minute → it goes off.",
          "You'll see a modal, hear a beep (Web Audio, with a fallback if needed), and get a system-style notification if you turned those on.",
          "Everything is saved in localStorage by day: id, name, time (stored as 24h), and whether it's on.",
        ],
      },
      {
        title: "3. What is this online alarm for, and what are its practical limits?",
        type: "paragraphs",
        items: [
          "It's a simple online alarm in the tab—no install, any normal browser. Good when you already have the laptop open and don't want to fish for your phone.",
          'Handy for "call starts in 20 minutes," pill times, stretching breaks, that kind of thing. Nothing gets uploaded; it\'s all on your machine. If you close the site or the browser blocks audio/notifications, you might miss it—same as any browser alarm.',
        ],
      },
      {
        title: "4. Why set quick alarms in the browser for tasks or routines?",
        type: "unordered",
        items: [
          "Stack as many alarms as you like.",
          "Notifications can catch you when the tab is in the background.",
          "No account—open the page and go.",
          "Your list survives refresh and coming back later.",
        ],
      },
      {
        title: "5. When might a web alarm complement or replace a phone alarm?",
        type: "unordered",
        items: [
          "You're at the desk and the phone's across the room.",
          "You want a spare timer next to your calendar or docs.",
          'Quick "don\'t forget this" without installing another app.',
        ],
      },
    ],
    faq: [
      {
        question: "How can I set a one-time alarm with sound in this browser tool?",
        answer:
          "Pick AM/PM, hour, and minute, then add your alarm. Keep notification permission on if you want browser alerts while working in other tabs.",
      },
      {
        question: "How does this alarm clock notify me while the page or tab is open?",
        answer:
          "This browser alarm checks time every second and triggers a popup, sound, and optional browser notification when your alarm time matches.",
      },
      {
        question: "What is this online alarm for, and what are its practical limits?",
        answer:
          "Use this online alarm clock for desk reminders like meetings or medication. It runs in your browser, so closing the site or blocked audio/notifications can affect alerts.",
      },
      {
        question: "Why set quick alarms in the browser for tasks or routines?",
        answer:
          "You can stack multiple alarms, keep them saved in the same browser, and use them instantly with no signup.",
      },
      {
        question: "When might a web alarm complement or replace a phone alarm?",
        answer:
          "A web alarm is useful when you already work on your laptop and want quick reminders beside your calendar, notes, or docs.",
      },
    ],
  },
  "time.stopwatch": {
    h1: "Stopwatch",
    subtitle: "Online stopwatch with lap timer in browser",
    guideTitle: "Stopwatch Guide",
    guideIntro:
      "Good for workouts, speaking practice, and short work sprints. Need a reverse timer instead? Try Countdown Timer or Pomodoro Timer.",
    sections: [
      {
        title: "1. How can I start, lap, and reset the stopwatch on this page?",
        type: "ordered",
        items: [
          "Hit Start and the stopwatch begins right away.",
          "Press Lap anytime to save split points while it keeps running.",
          "Pause when needed, then Reset to clear everything.",
          "Export laps to Word or Text if you want a saved log.",
        ],
      },
      {
        title: "2. How does this stopwatch measure elapsed time in the browser?",
        type: "paragraphs",
        items: [
          "The browser stopwatch updates elapsed time from the current timestamp while running.",
          "Each lap stores a split point, so you can compare sections without stopping.",
          "Export generates a simple file with lap numbers and times.",
        ],
      },
      {
        title: "3. What can this online stopwatch do, and how accurate is it?",
        type: "paragraphs",
        items: [
          "This online stopwatch is for quick timing at your desk: workouts, practice drills, presentations, or focused study blocks.",
          "No signup and no install. Open the page and run it in your browser.",
        ],
      },
      {
        title: "4. Why use a web stopwatch instead of switching to a phone app?",
        type: "unordered",
        items: [
          "Fast Start/Lap/Reset controls.",
          "Unlimited lap recording.",
          "Word and Text export.",
          "Works instantly in browser.",
        ],
      },
      {
        title: "5. When is a stopwatch useful for sports, labs, or presentations?",
        type: "unordered",
        items: [
          "Track set rest times during gym circuits.",
          "Time speaking drills before a meeting.",
          "Measure short study sprints between classes.",
          "Run quick kitchen prep checkpoints.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I start, lap, and reset the stopwatch on this page?",
        answer:
          "Press Start to begin, Lap to mark splits, Pause when needed, and Reset to clear the timer and lap list.",
      },
      {
        question: "How does this stopwatch measure elapsed time in the browser?",
        answer:
          "It uses browser time updates while running and calculates elapsed and lap values from timestamps.",
      },
      {
        question: "What can this online stopwatch do, and how accurate is it?",
        answer:
          "It provides real-time elapsed tracking with lap recording and export for practical day-to-day timing tasks.",
      },
      {
        question: "Why use a web stopwatch instead of switching to a phone app?",
        answer:
          "It is faster when you are already on your laptop and want timing beside your docs, sheets, or slides.",
      },
      {
        question: "When is a stopwatch useful for sports, labs, or presentations?",
        answer:
          "Use it for workout intervals, rehearsal timing, classroom exercises, and quick process checks.",
      },
    ],
  },
  "time.timer": {
    h1: "Countdown Timer",
    subtitle: "Online countdown timer in browser",
    guideTitle: "Countdown Timer Guide",
    guideIntro:
      "Great for short deadlines while you work in a tab. Need elapsed time tracking? Use Stopwatch. For focus cycles, try Pomodoro Timer.",
    sections: [
      {
        title: "1. How can I set a countdown and get notified when the timer ends?",
        type: "ordered",
        items: [
          "Set your time directly or use quick presets.",
          "Press Start to begin and Pause if you need to stop mid-way.",
          "At zero, you get a popup, sound (if on), and optional browser notification.",
          "Use the sound toggle when you need silent mode.",
        ],
      },
      {
        title: "2. How does this countdown timer run locally in my browser?",
        type: "paragraphs",
        items: [
          "This online timer calculates an end timestamp and updates remaining time in the browser.",
          "Visual progress updates while it runs, so you can check status at a glance.",
          "When it ends, alert methods trigger based on your sound and notification settings.",
        ],
      },
      {
        title: "3. What is a countdown timer best for compared to a stopwatch?",
        type: "paragraphs",
        items: [
          "Use this browser countdown timer for desk work, kitchen steps, workouts, or meeting pacing.",
          "No signup or install needed.",
        ],
      },
      {
        title: "4. Why use a browser countdown for cooking, workouts, or meetings?",
        type: "unordered",
        items: [
          "Preset time buttons.",
          "Pause and resume.",
          "Popup, sound, and browser alerts.",
          "Simple progress visuals.",
        ],
      },
      {
        title: "5. When is a simple web countdown faster than a calendar or phone timer?",
        type: "unordered",
        items: [
          "Set a 10-minute review block before a standup.",
          "Run kitchen or coffee brew checkpoints.",
          "Track rest gaps between exercise sets.",
          "Keep meetings from running over.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I set a countdown and get notified when the timer ends?",
        answer:
          "Set a duration, press Start, and allow notifications if you want browser alerts when the countdown finishes.",
      },
      {
        question: "How does this countdown timer run locally in my browser?",
        answer:
          "It calculates the end time in your browser and updates remaining time continuously until it reaches zero.",
      },
      {
        question: "What is a countdown timer best for compared to a stopwatch?",
        answer:
          "A countdown timer is best when you already know the target duration and want an end alert.",
      },
      {
        question: "Why use a browser countdown for cooking, workouts, or meetings?",
        answer:
          "It is quick to open on desktop and keeps alerts near your active work tab.",
      },
      {
        question: "When is a simple web countdown faster than a calendar or phone timer?",
        answer:
          "It is faster for short tasks where you need a timer immediately without opening another app.",
      },
    ],
  },
  "time.pomodoro": {
    h1: "Pomodoro Timer",
    subtitle: "Online Pomodoro timer for focus cycles",
    guideTitle: "Pomodoro Guide",
    guideIntro:
      "Best when you want short focus bursts and planned breaks. Need a simple end-time alert? Use Countdown Timer. If you only need elapsed tracking, go with Stopwatch.",
    sections: [
      {
        title: "1. How can I run Pomodoro work and break intervals on this page?",
        type: "ordered",
        items: [
          "Press Start to begin a focus session.",
          "After focus ends, break phases move automatically.",
          "Use Skip to jump ahead or Pause to stop for a moment.",
          "Turn on browser notifications if you want phase-end alerts in background tabs.",
        ],
      },
      {
        title: "2. How does this timer run focus and rest cycles in the browser?",
        type: "paragraphs",
        items: [
          "The browser Pomodoro timer cycles focus and break phases on a fixed rhythm.",
          "After several focus rounds, it inserts a longer break automatically.",
          "Progress markers, sound, and optional notifications help you keep pace.",
        ],
      },
      {
        title: "3. What is the Pomodoro Technique, and how does this tool support it?",
        type: "paragraphs",
        items: [
          "This online Pomodoro timer is built for focused desk work: coding, writing, studying, or review sessions.",
          "It keeps work blocks short and breaks visible so you can sustain concentration longer.",
        ],
      },
      {
        title: "4. Why use a browser Pomodoro timer for study or deep work?",
        type: "unordered",
        items: [
          "Focus/break cycle automation.",
          "Quick Start, Pause, Skip controls.",
          "Session progress indicators.",
          "Optional browser notifications.",
        ],
      },
      {
        title: "5. Where are Pomodoro timers most helpful for students and remote work?",
        type: "unordered",
        items: [
          "Run deep-work blocks before checking messages.",
          "Use study rounds with short reset breaks.",
          "Time-box writing or design sessions.",
          "Keep team review sessions on a steady cadence.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I run Pomodoro work and break intervals on this page?",
        answer:
          "Press Start to begin focus time. The timer cycles into breaks automatically, and you can Pause or Skip anytime.",
      },
      {
        question: "How does this timer run focus and rest cycles in the browser?",
        answer:
          "It manages phase durations in browser time and switches phases when each interval completes.",
      },
      {
        question: "What is the Pomodoro Technique, and how does this tool support it?",
        answer:
          "Pomodoro is a focus-and-break rhythm. This tool runs that rhythm with automatic transitions and clear progress cues.",
      },
      {
        question: "Why use a browser Pomodoro timer for study or deep work?",
        answer:
          "It is quick to open, keeps your timing near your work tab, and reduces context switching.",
      },
      {
        question: "Where are Pomodoro timers most helpful for students and remote work?",
        answer:
          "They help in study blocks, coding sessions, writing sprints, and meeting prep.",
      },
    ],
  },
  "time.interval-timer": {
    h1: "Interval Timer",
    subtitle: "Online interval timer for custom rounds",
    guideTitle: "Interval Timer Guide",
    guideIntro:
      "Build your own round flow with action and rest steps. For simple single-duration countdowns, use Countdown Timer.",
    sections: [
      {
        title: "1. How can I set work and rest rounds with this interval timer?",
        type: "ordered",
        items: [
          "Add your actions with duration in seconds.",
          "Turn on rest between actions if you need recovery time.",
          "Set repeat count, or leave it open for continuous rounds.",
          "Press Start and the routine runs in sequence.",
        ],
      },
      {
        title: "2. How does this HIIT-style timer chain rounds in the browser?",
        type: "paragraphs",
        items: [
          "The interval timer builds a phase list from your actions and optional rest steps.",
          "Each phase counts down in order, then moves to the next.",
          "When repeat is enabled, the list starts again after one full cycle.",
          "Phase changes trigger sound and optional browser notifications.",
        ],
      },
      {
        title: "3. What is interval training, and how does this timer support it?",
        type: "paragraphs",
        items: [
          "This browser interval timer is useful for HIIT, study rounds, and repeat task routines.",
          "You control the sequence instead of forcing a fixed template.",
        ],
      },
      {
        title: "4. Why use a browser interval timer for workouts or focus blocks?",
        type: "unordered",
        items: [
          "Custom action list.",
          "Optional rest phases.",
          "Repeat controls.",
          "Color-based phase view.",
        ],
      },
      {
        title: "5. When do athletes and coaches use repeating interval timers?",
        type: "unordered",
        items: [
          "Run a 40s work / 20s rest circuit at home.",
          "Alternate study subjects with fixed break slots.",
          "Time multi-step drills for coaching sessions.",
          "Keep rehearsals paced section by section.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I set work and rest rounds with this interval timer?",
        answer:
          "Add actions with durations, enable rest if needed, choose repeat settings, and start the routine.",
      },
      {
        question: "How does this HIIT-style timer chain rounds in the browser?",
        answer:
          "It runs phases in order and automatically advances through action and rest blocks, then repeats by your setting.",
      },
      {
        question: "What is interval training, and how does this timer support it?",
        answer:
          "Interval training alternates effort and recovery. This tool supports it with custom phase durations and repeats.",
      },
      {
        question: "Why use a browser interval timer for workouts or focus blocks?",
        answer:
          "You can launch it instantly on desktop and keep timing beside your workout notes or task list.",
      },
      {
        question: "When do athletes and coaches use repeating interval timers?",
        answer:
          "They use them for circuits, conditioning rounds, drill blocks, and recovery pacing.",
      },
    ],
  },
  "time.date-difference": {
    h1: "Date Difference Calculator",
    subtitle: "Days between dates and D-day calculator",
    guideTitle: "Date Difference Guide",
    guideIntro:
      "Great for release dates, exam prep, and trip planning. Need event tracking too? Pair it with Calendar.",
    sections: [
      {
        title: "1. How can I find the days or weeks between two dates with this tool?",
        type: "ordered",
        items: [
          "Set a start date and an end date.",
          "Use 'today' for quick D-day checks.",
          "Read total days, weeks, months, and whether the date is upcoming or passed.",
          "Future targets also show a live countdown.",
        ],
      },
      {
        title: "2. How does this date calculator measure spans and handle calendars?",
        type: "paragraphs",
        items: [
          "The tool calculates calendar-day gaps between two dates.",
          "Weeks and months are derived from the same span for quick reading.",
          "All date calculations run locally in your browser.",
        ],
      },
      {
        title: "3. What kinds of date gaps can I measure, and how should I read the results?",
        type: "paragraphs",
        items: [
          "Use this date calculator for deadline planning, trip countdowns, or contract checks.",
          "It is quick when you just need days between dates without opening a full planner app.",
        ],
      },
      {
        title: "4. Why use a browser date calculator for planning instead of mental math?",
        type: "unordered",
        items: [
          "Simple two-date input.",
          "Live D-day style countdown.",
          "Works for past and future ranges.",
          "Browser-local processing.",
        ],
      },
      {
        title: "5. When are date differences used for projects, contracts, or travel?",
        type: "unordered",
        items: [
          "Check days left before a launch deadline.",
          "Count down to flights or event dates.",
          "Track exam timelines and application windows.",
          "Measure elapsed time in contracts and projects.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I find the days or weeks between two dates with this tool?",
        answer:
          "Pick start and end dates. The tool returns total days, weeks, and month-based breakdowns instantly.",
      },
      {
        question: "How does this date calculator measure spans and handle calendars?",
        answer:
          "It computes date spans in calendar days and derives weekly and monthly summaries from that span.",
      },
      {
        question: "What kinds of date gaps can I measure, and how should I read the results?",
        answer:
          "You can measure both future and past ranges for deadlines, anniversaries, schedules, and elapsed periods.",
      },
      {
        question: "Why use a browser date calculator for planning instead of mental math?",
        answer:
          "It avoids calendar mistakes and gives immediate totals when plans shift.",
      },
      {
        question: "When are date differences used for projects, contracts, or travel?",
        answer:
          "They are used for deadline tracking, trip prep, exam planning, and contract date checks.",
      },
    ],
  },
  "time.calendar": {
    h1: "Calendar",
    subtitle: "Online calendar for quick event planning",
    guideTitle: "Calendar Guide",
    guideIntro:
      "Good for day-to-day reminders and lightweight schedule tracking. If you need day-gap math, use Date Difference Calculator.",
    sections: [
      {
        title: "1. How can I browse months, pick dates, and use this calendar on the page?",
        type: "ordered",
        items: [
          "Move month to month with the arrows and pick a date.",
          "Add events from the side panel with title and optional note.",
          "Edit or delete events anytime from the list.",
          "Your events stay saved in the same browser.",
        ],
      },
      {
        title: "2. How does this calendar widget work in the browser?",
        type: "paragraphs",
        items: [
          "The calendar renders a monthly grid and keeps selected-date details in the side panel.",
          "Events are saved by date key in browser local storage.",
          "Today and the selected date are highlighted for quick scanning.",
        ],
      },
      {
        title: "3. What does this online calendar offer for quick planning and reference?",
        type: "paragraphs",
        items: [
          "This browser calendar is built for lightweight planning without opening a full scheduling suite.",
          "Use it for personal reminders, deadlines, and weekly check-ins.",
        ],
      },
      {
        title: "4. Why keep a lightweight web calendar open while scheduling?",
        type: "unordered",
        items: [
          "Quick add/edit/delete flow.",
          "No signup required.",
          "Local browser storage.",
          "Works on mobile and desktop.",
        ],
      },
      {
        title: "5. When is a quick calendar view enough without a full scheduling app?",
        type: "unordered",
        items: [
          "Track class deadlines and exam dates.",
          "Keep personal appointments visible this month.",
          "Plan team check-ins and milestone dates.",
          "Store family events and reminders.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I browse months, pick dates, and use this calendar on the page?",
        answer:
          "Navigate months with arrows, select a date, then add or manage events from the panel.",
      },
      {
        question: "How does this calendar widget work in the browser?",
        answer:
          "It renders a month grid and stores events in local browser data keyed by date.",
      },
      {
        question: "What does this online calendar offer for quick planning and reference?",
        answer:
          "It offers lightweight date-based event tracking with fast add, edit, and delete actions.",
      },
      {
        question: "Why keep a lightweight web calendar open while scheduling?",
        answer:
          "It is useful for fast checks and edits without switching to heavier calendar apps.",
      },
      {
        question: "When is a quick calendar view enough without a full scheduling app?",
        answer:
          "It is enough for personal reminders, weekly planning, and small team schedules.",
      },
    ],
  },
  "time.world-clock": {
    h1: "World Clock",
    subtitle: "Online world clock and timezone converter",
    guideTitle: "World Clock Guide",
    guideIntro:
      "Useful for remote teams and international travel planning. Need a simple timer for local tasks? Open Countdown Timer.",
    sections: [
      {
        title: "1. How can I compare time zones and cities with this world clock?",
        type: "ordered",
        items: [
          "Check live time across major cities in one view.",
          "Enter a date, time, and source timezone to convert globally.",
          "Use the Now button to fill your current local time fast.",
        ],
      },
      {
        title: "2. How does this world clock show multiple zones in my browser?",
        type: "paragraphs",
        items: [
          "The world clock uses browser timezone APIs with IANA zone data.",
          "City clocks refresh continuously to show current local time.",
          "The converter maps your input to equivalent times in other zones.",
        ],
      },
      {
        title: "3. What is this world clock for, and who uses it most often?",
        type: "paragraphs",
        items: [
          "Use it when scheduling calls across countries or checking travel arrivals.",
          "No signup or install needed.",
        ],
      },
      {
        title: "4. Why use an online world clock instead of searching each city?",
        type: "unordered",
        items: [
          "Live multi-city clock view.",
          "Timezone conversion in one step.",
          "Browser-local calculations.",
          "DST-aware timezone data.",
        ],
      },
      {
        title: "5. When do teams rely on world clocks for meetings and travel?",
        type: "unordered",
        items: [
          "Plan meetings across US, EU, and Asia teams.",
          "Convert departure and arrival times before flights.",
          "Check local time for friends or family abroad.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I compare time zones and cities with this world clock?",
        answer:
          "View live city clocks, then use the converter with your source timezone to see matching times elsewhere.",
      },
      {
        question: "How does this world clock show multiple zones in my browser?",
        answer:
          "It relies on browser timezone formatting APIs and updates each city clock from the same current moment.",
      },
      {
        question: "What is this world clock for, and who uses it most often?",
        answer:
          "It is commonly used by remote teams, travelers, and anyone coordinating schedules across regions.",
      },
      {
        question: "Why use an online world clock instead of searching each city?",
        answer:
          "You can compare all needed zones at once without repeated searches.",
      },
      {
        question: "When do teams rely on world clocks for meetings and travel?",
        answer:
          "Teams use them when planning cross-timezone calls, launch windows, and international travel schedules.",
      },
    ],
  },
};

export const timeUiEn = {
  alarmClock: {
    backToHub: "← Back to Time Tools",
    defaultAlarmName: "My Alarm",
    am: "AM",
    pm: "PM",
    addAlarmTitle: "Add Alarm",
    alarmNameLabel: "Alarm Name",
    alarmNamePlaceholder: "Enter alarm name",
    timeLabel: "Time",
    addAlarmButton: "Add Alarm",
    alarmsListTitle: "Alarms List",
    noAlarmsTitle: "No alarms set",
    noAlarmsHint: "Add an alarm to get started",
    enableTitle: "Enable",
    disableTitle: "Disable",
    editTitle: "Edit",
    deleteTitle: "Delete",
    editAlarmTitle: "Edit Alarm",
    save: "Save",
    cancel: "Cancel",
    stopAlarm: "Stop Alarm",
    modalTimePrefix: "Time:",
    duplicateAlert: "An alarm with the same time and name already exists.",
    deleteConfirm: "Are you sure you want to delete this alarm?",
    notificationBody: "Time: {time}",
  },
  stopwatch: {
    backToHub: "← Back to Time Tools",
    startTitle: "Start",
    pauseTitle: "Pause",
    lapTitle: "Lap",
    resetTitle: "Reset",
    lapTimesTitle: "Lap Times",
    wordExport: "Word",
    textExport: "Text",
    noLaps: "No lap times recorded",
    lapLabel: "Lap {n}",
    exportPrompt: "Enter file name:",
    exportDefaultName: "Stopwatch Records",
    exportHeader: "Stopwatch Records",
    exportTotalTime: "Total Time: {time}",
    exportLapTimes: "Lap Times:",
    exportLapLine: "Lap {n}",
    exportLapTime: "Lap Time: {time}",
    exportTotalTimeLine: "Total Time: {time}",
  },
  timer: {
    backToHub: "← Back to Time Tools",
    startTitle: "Start",
    pauseTitle: "Pause",
    resetTitle: "Reset",
    muteTitle: "Mute",
    unmuteTitle: "Unmute",
    timesUpTitle: "Time's Up!",
    timesUpMessage: "The timer has completed.",
    stop: "Stop",
    notificationTitle: "Timer Complete!",
    notificationBody: "The set time has ended.",
    presetMin: "min",
    presetHour: "hour",
    presets: [
      { label: "5", unit: "min" },
      { label: "10", unit: "min" },
      { label: "15", unit: "min" },
      { label: "30", unit: "min" },
      { label: "1", unit: "hour" },
    ],
  },
  pomodoro: {
    backToHub: "← Back to Time Tools",
    phaseFocus: "Focus",
    phaseShortBreak: "Short Break",
    phaseLongBreak: "Long Break",
    sessionOf: "Session {current} of {total}",
    takeBreak: "Take a break",
    startTitle: "Start",
    pauseTitle: "Pause",
    skipTitle: "Skip to next phase",
    resetTitle: "Reset",
    muteTitle: "Mute",
    unmuteTitle: "Unmute",
    rhythmInfo:
      "{focus} min focus · {shortBreak} min short break · {longBreak} min long break (every {count} pomodoros)",
    phaseCompleteTitle: "Phase Complete!",
    breakMessage: "Great work! Time for a break.",
    focusMessage: "Break over! Ready to focus?",
    autoAdvance: "Auto-advancing in {n} {unit}",
    second: "second",
    seconds: "seconds",
    continue: "Continue",
    pauseButton: "Pause",
    notificationTitle: "Pomodoro: {phase} Complete!",
    notificationBreakBody: "Time for a break!",
    notificationFocusBody: "Time to focus!",
  },
  intervalTimer: {
    backToHub: "← Back to Time Tools",
    actionsTitle: "Actions",
    actionsIntro:
      "Add actions with duration (required) and optional name. Assign a color to each.",
    actionNamePlaceholder: "Action name (optional)",
    sec: "sec",
    addAction: "Add action",
    saveRoutine: "Save routine",
    restBetweenActions: "Rest between actions",
    repeatRoutine: "Repeat routine",
    repeatPlaceholder: "Infinite",
    repeatHint: "times (empty = infinite)",
    savedRoutinesTitle: "Saved routines",
    noSavedRoutines: "No saved routines yet.",
    load: "Load",
    delete: "Delete",
    routineComplete: "Routine Complete!",
    round: "Round {n}",
    rest: "Rest",
    actionDefault: "Action {n}",
    routineNamePrompt: "Routine name?",
    complete: "Complete",
    startTitle: "Start",
    pauseTitle: "Pause",
    resetTitle: "Reset",
    muteTitle: "Mute",
    unmuteTitle: "Unmute",
    notificationTitle: "Interval Timer",
    notificationBody: "{label} complete!",
    phaseDefault: "Phase",
  },
  dateDifference: {
    calculateTitle: "Calculate Between Two Dates",
    startDateLabel: "Start date",
    endDateLabel: "End date (target)",
    useToday: "Use today",
    ddayToday: "D-Day (Today)",
    ddayFuture: "D-{n}",
    ddayPast: "D+{n}",
    dday: "D-Day",
    day: "day",
    days: "days",
    left: " left",
    ago: " ago",
    hoursLabel: "Hours",
    hoursUnit: "hours",
    daysLabel: "Days",
    daysUnit: "days",
    weeksLabel: "Weeks",
    weeksUnit: "weeks",
    monthsLabel: "Months",
    monthsUnit: "months",
    extraDays: "{sign}{n} days",
    directionLabel: "Direction",
    daysToFuture: "{n} days to future",
    daysAgoDirection: "{n} days ago",
    invalidDates: "Please enter valid dates.",
  },
  calendar: {
    backToHub: "← Back to Time Tools",
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    eventsFor: "Events for {date}",
    addButton: "+ Add",
    noEvents: "No events for this date",
    edit: "Edit",
    delete: "Delete",
    addEvent: "Add Event",
    editEvent: "Edit Event",
    eventTitleLabel: "Event title",
    eventTitlePlaceholder: "Event title",
    eventDescLabel: "Event description",
    eventDescPlaceholder: "Event description",
    save: "Save",
    cancel: "Cancel",
    deleteConfirm: "Are you sure you want to delete this event?",
    moreEvents: "+{n} more",
  },
  worldClock: {
    backToHub: "← Back to Time Tools",
    worldClocksTitle: "World clocks",
    hoverHint: "Hover over a time zone to highlight its region on the map.",
    loading: "Loading...",
    scrollMore: "Scroll to see {n} more",
    converterTitle: "Time zone converter",
    converterIntro:
      "Enter a time and select the timezone it's in. See the equivalent time in other zones.",
    dateLabel: "Date",
    time24hLabel: "Time (24h)",
    timezoneLabel: "Timezone",
    useCurrentTime: "Use current time",
    nowButton: "Now",
    convertedTimesTitle: "Converted times",
    timezones: [
      { id: "UTC", city: "UTC", label: "UTC" },
      { id: "America/Los_Angeles", city: "Los Angeles", label: "Pacific" },
      { id: "America/Vancouver", city: "Vancouver", label: "Pacific" },
      { id: "America/Denver", city: "Denver", label: "Mountain" },
      { id: "America/Chicago", city: "Chicago", label: "Central" },
      { id: "America/New_York", city: "New York", label: "Eastern" },
      { id: "America/Toronto", city: "Toronto", label: "Eastern" },
      { id: "America/Toronto", city: "Ottawa", label: "Eastern" },
      { id: "America/Mexico_City", city: "Mexico City", label: "CST" },
      { id: "America/Caracas", city: "Caracas", label: "VET" },
      { id: "America/La_Paz", city: "La Paz", label: "BOT" },
      { id: "America/Sao_Paulo", city: "São Paulo", label: "BRT" },
      { id: "Europe/London", city: "London", label: "GMT/BST" },
      { id: "Atlantic/Azores", city: "Azores", label: "AZOT" },
      { id: "Europe/Paris", city: "Paris", label: "CET" },
      { id: "Europe/Berlin", city: "Berlin", label: "CET" },
      { id: "Europe/Rome", city: "Rome", label: "CET" },
      { id: "Europe/Moscow", city: "Moscow", label: "MSK" },
      { id: "Europe/Istanbul", city: "Istanbul", label: "TRT" },
      { id: "Africa/Cairo", city: "Cairo", label: "EET" },
      { id: "Asia/Dubai", city: "Dubai", label: "GST" },
      { id: "Asia/Riyadh", city: "Riyadh", label: "AST" },
      { id: "Asia/Tehran", city: "Tehran", label: "IRST" },
      { id: "Asia/Karachi", city: "Karachi", label: "PKT" },
      { id: "Asia/Dhaka", city: "Dhaka", label: "BST" },
      { id: "Asia/Kolkata", city: "Mumbai", label: "IST" },
      { id: "Asia/Bangkok", city: "Bangkok", label: "ICT" },
      { id: "Asia/Singapore", city: "Singapore", label: "SGT" },
      { id: "Asia/Jakarta", city: "Jakarta", label: "WIB" },
      { id: "Asia/Manila", city: "Manila", label: "PHT" },
      { id: "Asia/Ho_Chi_Minh", city: "Ho Chi Minh", label: "ICT" },
      { id: "Asia/Shanghai", city: "Shanghai", label: "CST" },
      { id: "Asia/Seoul", city: "Seoul", label: "KST" },
      { id: "Asia/Tokyo", city: "Tokyo", label: "JST" },
      { id: "Australia/Sydney", city: "Sydney", label: "AEST" },
      { id: "Africa/Johannesburg", city: "Johannesburg", label: "SAST" },
    ],
  },
};
