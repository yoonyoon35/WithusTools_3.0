/**
 * toolContent.json에 Text 허브 + 클라이언트 UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const hubEn = {
  h1: "Text Tools",
  subtitle: "Online text tools for compare, convert, and notes",
  intro:
    "Compare text, convert case, and write quick notes. Useful for fast revision and formatting tasks.",
  guideTitle: "Text Tools Guide",
  sections: [
    {
      title: "1. How do I choose and open a text tool from this page?",
      type: "ordered",
      items: [
        "Choose the tool by task: compare text, convert case, or write notes.",
        "Paste content, run the action, and review results instantly.",
        "Use converter actions for formatting cleanup before publishing.",
        "Use editor when you need quick local notes with export support.",
      ],
    },
    {
      title: "2. How do these text tools process my content in the browser?",
      type: "paragraphs",
      items: [
        "Text processing runs in browser runtime and updates immediately.",
        "String comparison highlights additions and removals between two inputs.",
        "Text converter applies case and format rules to the current input.",
        "Text editor stores notes locally and exports document files when requested.",
      ],
    },
    {
      title: "3. What are text tools and which everyday tasks do they cover?",
      type: "paragraphs",
      items: [
        "Text Tools is a browser-based set for everyday text cleanup and comparison tasks.",
        "It fits quick workflows for writing, editing, and checking differences.",
      ],
    },
    {
      title: "4. Why use online text utilities instead of heavy desktop apps?",
      type: "unordered",
      items: [
        "Client-side text handling.",
        "Quick compare/convert/edit workflow.",
        "Local note persistence and export options.",
      ],
    },
    {
      title: "5. When are browser-based text tools most helpful at work or school?",
      type: "unordered",
      items: [
        "Check document revisions before sending.",
        "Normalize case and naming styles for content or code snippets.",
        "Prepare notes and export quick drafts.",
        "Compare copied text blocks to catch accidental edits.",
      ],
    },
  ],
  faq: [
    {
      question: "How do I choose and open a text tool from this page?",
      answer:
        "Pick the tool by task, open it, paste your text, and run the needed action.",
    },
    {
      question: "How do these text tools process my content in the browser?",
      answer:
        "Processing runs in browser runtime and local storage, without server-side text handling.",
    },
    {
      question: "What are text tools and which everyday tasks do they cover?",
      answer:
        "They cover diff checks, case/format conversion, and lightweight note editing with export support.",
    },
    {
      question: "When are browser-based text tools most helpful at work or school?",
      answer:
        "They are helpful for revision checks, formatting cleanup, quick notes, and copy validation.",
    },
  ],
  backToHome: "← Back to home",
};

const hubKo = {
  h1: "텍스트 도구",
  subtitle: "비교·변환·메모용 온라인 텍스트 도구",
  intro:
    "텍스트를 비교하고, 대소문자를 변환하고, 빠른 메모를 작성하세요. 수정 검토와 서식 정리에 유용합니다.",
  guideTitle: "텍스트 도구 가이드",
  sections: [
    {
      title: "1. 이 페이지에서 텍스트 도구를 고르고 열려면?",
      type: "ordered",
      items: [
        "작업에 맞는 도구를 선택하세요: 문자열 비교, 대소문자 변환, 메모 작성.",
        "내용을 붙여넣고 동작을 실행한 뒤 결과를 바로 확인합니다.",
        "게시 전 서식 정리에는 변환기를 사용하세요.",
        "로컬 저장·보내기가 필요한 빠른 메모에는 에디터를 사용하세요.",
      ],
    },
    {
      title: "2. 이 텍스트 도구들은 브라우저에서 어떻게 처리하나요?",
      type: "paragraphs",
      items: [
        "텍스트 처리는 브라우저에서 즉시 실행됩니다.",
        "문자열 비교는 두 입력 사이의 추가·삭제를 강조 표시합니다.",
        "텍스트 변환기는 현재 입력에 대소문자·형식 규칙을 적용합니다.",
        "텍스트 에디터는 메모를 로컬에 저장하고 요청 시 문서 파일로보냅니다.",
      ],
    },
    {
      title: "3. 텍스트 도구는 무엇이며 어떤 일상 작업을 다루나요?",
      type: "paragraphs",
      items: [
        "일상적인 텍스트 정리·비교를 위한 브라우저 기반 도구 모음입니다.",
        "글쓰기, 편집, 차이 확인 같은 빠른 워크플로에 맞습니다.",
      ],
    },
    {
      title: "4. 무거운 데스크톱 앱 대신 온라인 텍스트 유틸을 쓰는 이유는?",
      type: "unordered",
      items: [
        "클라이언트 측 텍스트 처리.",
        "빠른 비교·변환·편집 워크플로.",
        "로컬 메모 저장과보내기 옵션.",
      ],
    },
    {
      title: "5. 직장·학교에서 브라우저 텍스트 도구가 특히 유용한 경우는?",
      type: "unordered",
      items: [
        "문서 수정본을 보내기 전 확인.",
        "콘텐츠·코드 스니펫의 대소문자·이름 스타일 정규화.",
        "메모 작성 후 빠른 초안보내기.",
        "복사한 텍스트 블록을 비교해 실수 수정 확인.",
      ],
    },
  ],
  faq: [
    {
      question: "이 페이지에서 텍스트 도구를 고르고 열려면?",
      answer:
        "작업에 맞는 도구를 고른 뒤 열고, 텍스트를 붙여넣어 필요한 동작을 실행하세요.",
    },
    {
      question: "이 텍스트 도구들은 브라우저에서 어떻게 처리하나요?",
      answer:
        "브라우저 런타임과 로컬 저장소에서 처리되며 서버로 텍스트가 전송되지 않습니다.",
    },
    {
      question: "텍스트 도구는 무엇이며 어떤 일상 작업을 다루나요?",
      answer:
        "diff 확인, 대소문자·형식 변환, 가벼운 메모 편집과보내기를 다룹니다.",
    },
    {
      question: "직장·학교에서 브라우저 텍스트 도구가 특히 유용한 경우는?",
      answer:
        "수정 검토, 서식 정리, 빠른 메모, 문구 검증에 유용합니다.",
    },
  ],
  backToHome: "← 홈으로 돌아가기",
};

const uiEn = {
  stringComparison: {
    firstText: "First Text",
    secondText: "Second Text",
    firstPlaceholder: "Enter first text to compare",
    secondPlaceholder: "Enter second text to compare",
    loadTxt: "Load TXT",
    copy: "Copy",
    comparisonOptions: "Comparison Options",
    trim: "Trim (ignore leading/trailing whitespace)",
    ignoreWhitespace: "Ignore whitespace (spaces, tabs, line breaks)",
    ignoreCase: "Ignore case (A vs a)",
    compareTexts: "Compare Texts",
    reset: "Reset",
    comparisonResult: "Comparison Result",
    firstResult: "First Text Result",
    secondResult: "Second Text Result",
    statistics: "Statistics",
    characters: "Characters",
    words: "Words",
    lines: "Lines",
    differences: "Differences",
    same: "Same",
    different: "Different",
    differenceDetails: "Difference details:",
    lineLabel: "Line {line}:",
    toastEnterBoth: "Please enter both texts to compare",
    toastDiffFoundOne: "Found {count} difference",
    toastDiffFoundMany: "Found {count} differences",
    toastCleared: "All inputs have been cleared",
    toastCopied: "Text copied to clipboard!",
    toastCopyFailed: "Failed to copy text",
    toastLoaded: "Loaded: {name}",
    toastReadBinaryFailed: "Failed to read file (binary)",
    toastReadFailed: "Failed to read file",
  },
  textConverter: {
    textInput: "Text Input",
    convertedText: "Converted Text",
    inputPlaceholder: "Enter or paste text...",
    outputPlaceholder: "Converted text will appear here...",
    loadTxt: "Load TXT",
    characters: "Characters",
    words: "Words",
    size: "Size",
    includeSpaces: "Include spaces in character count",
    capitalizeSentences: "Capitalize Sentences",
    titleCase: "Title Case",
    alternatingCase: "Alternating Case",
    copy: "Copy",
    clear: "Clear",
    toastLoaded: "Loaded: {name}",
    toastReadBinaryFailed: "Failed to read file (binary)",
    toastReadFailed: "Failed to read file",
    toastCopied: "Text copied to clipboard!",
    toastCopyFailed: "Failed to copy text.",
  },
  textEditor: {
    document: "Document",
    savedNotes: "Saved Notes",
    titlePlaceholder: "Enter title...",
    contentPlaceholder: "Start writing...",
    loadTxt: "Load TXT",
    copy: "Copy",
    clear: "Clear",
    save: "Save",
    word: "Word",
    pdf: "PDF",
    txt: "TXT",
    characters: "Characters",
    words: "Words",
    deleteNoteAria: "Delete note",
    toastEnterBoth: "Please enter both title and content",
    toastSaved: "Note saved!",
    toastDeleteConfirm: "Are you sure you want to delete this note?",
    toastDeleted: "Note deleted",
    toastLoaded: "Loaded: {name}",
    toastReadBinaryFailed: "Failed to read file (binary)",
    toastReadFailed: "Failed to read file",
    toastCopied: "Text copied to clipboard!",
    toastCopyFailed: "Failed to copy text.",
    toastNoContent: "No content to copy",
    toastCleared: "Cleared",
    toastExportedTxt: "Exported to TXT!",
    toastExportedWord: "Exported to Word!",
    toastExportedPdf: "Exported to PDF!",
    toastExportPdfFailed: "Failed to export PDF",
  },
};

const uiKo = {
  stringComparison: {
    firstText: "첫 번째 텍스트",
    secondText: "두 번째 텍스트",
    firstPlaceholder: "비교할 첫 번째 텍스트를 입력하세요",
    secondPlaceholder: "비교할 두 번째 텍스트를 입력하세요",
    loadTxt: "TXT 불러오기",
    copy: "복사",
    comparisonOptions: "비교 옵션",
    trim: "앞뒤 공백 제거",
    ignoreWhitespace: "공백 무시 (스페이스, 탭, 줄바꿈)",
    ignoreCase: "대소문자 무시 (A vs a)",
    compareTexts: "텍스트 비교",
    reset: "초기화",
    comparisonResult: "비교 결과",
    firstResult: "첫 번째 텍스트 결과",
    secondResult: "두 번째 텍스트 결과",
    statistics: "통계",
    characters: "글자 수",
    words: "단어 수",
    lines: "줄 수",
    differences: "차이",
    same: "동일",
    different: "다름",
    differenceDetails: "차이 상세:",
    lineLabel: "{line}행:",
    toastEnterBoth: "비교할 두 텍스트를 모두 입력하세요",
    toastDiffFoundOne: "차이 {count}개 발견",
    toastDiffFoundMany: "차이 {count}개 발견",
    toastCleared: "모든 입력이 초기화되었습니다",
    toastCopied: "클립보드에 복사했습니다!",
    toastCopyFailed: "복사에 실패했습니다",
    toastLoaded: "불러옴: {name}",
    toastReadBinaryFailed: "파일을 읽지 못했습니다 (바이너리)",
    toastReadFailed: "파일을 읽지 못했습니다",
  },
  textConverter: {
    textInput: "텍스트 입력",
    convertedText: "변환된 텍스트",
    inputPlaceholder: "텍스트를 입력하거나 붙여넣으세요...",
    outputPlaceholder: "변환된 텍스트가 여기에 표시됩니다...",
    loadTxt: "TXT 불러오기",
    characters: "글자 수",
    words: "단어 수",
    size: "크기",
    includeSpaces: "글자 수에 공백 포함",
    capitalizeSentences: "문장 첫 글자 대문자",
    titleCase: "제목형 대소문자",
    alternatingCase: "교차 대소문자",
    copy: "복사",
    clear: "지우기",
    toastLoaded: "불러옴: {name}",
    toastReadBinaryFailed: "파일을 읽지 못했습니다 (바이너리)",
    toastReadFailed: "파일을 읽지 못했습니다",
    toastCopied: "클립보드에 복사했습니다!",
    toastCopyFailed: "복사에 실패했습니다.",
  },
  textEditor: {
    document: "문서",
    savedNotes: "저장된 메모",
    titlePlaceholder: "제목을 입력하세요...",
    contentPlaceholder: "작성을 시작하세요...",
    loadTxt: "TXT 불러오기",
    copy: "복사",
    clear: "지우기",
    save: "저장",
    word: "Word",
    pdf: "PDF",
    txt: "TXT",
    characters: "글자 수",
    words: "단어 수",
    deleteNoteAria: "메모 삭제",
    toastEnterBoth: "제목과 내용을 모두 입력하세요",
    toastSaved: "메모가 저장되었습니다!",
    toastDeleteConfirm: "이 메모를 삭제할까요?",
    toastDeleted: "메모가 삭제되었습니다",
    toastLoaded: "불러옴: {name}",
    toastReadBinaryFailed: "파일을 읽지 못했습니다 (바이너리)",
    toastReadFailed: "파일을 읽지 못했습니다",
    toastCopied: "클립보드에 복사했습니다!",
    toastCopyFailed: "복사에 실패했습니다.",
    toastNoContent: "복사할 내용이 없습니다",
    toastCleared: "초기화되었습니다",
    toastExportedTxt: "TXT로보냈습니다!",
    toastExportedWord: "Word로보냈습니다!",
    toastExportedPdf: "PDF로보냈습니다!",
    toastExportPdfFailed: "PDF보내기에 실패했습니다",
  },
};

function fmt(template, vars) {
  return Object.entries(vars).reduce(
    (s, [k, v]) => s.replaceAll(`{${k}}`, String(v)),
    template
  );
}

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const hub = locale === "en" ? hubEn : hubKo;
  const ui = locale === "en" ? uiEn : uiKo;

  data.byPath["tools.text"] = hub;
  data.byPath["tools.text.string-comparison"].ui = ui.stringComparison;
  data.byPath["tools.text.text-converter"].ui = ui.textConverter;
  data.byPath["tools.text.text-editor"].ui = ui.textEditor;

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json`);
}
