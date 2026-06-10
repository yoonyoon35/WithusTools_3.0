/** Programmer calculator — "How this calculator works" technical reference (EN/KO). */

export const programmerTechnicalRefEn = {
  title: "How this calculator works",
  sections: [
    {
      heading: "Word size (QWORD / DWORD / WORD / BYTE)",
      paragraphs: [
        "Every value is masked to the selected width: 64, 32, 16, or 8 bits. Arithmetic, bitwise ops, shifts, and memory all use this mask. In the bit grid, indices above the active width are disabled (read-only) so you always see which bits belong to the current word.",
      ],
    },
    {
      heading: "Bases (HEX / DEC / OCT / BIN)",
      paragraphs: [
        "Tap a row to choose the keypad input radix. Only valid digits for that base are accepted. All four readouts show the same underlying value. The DEC line uses two's-complement signed integers for the current word size; HEX, OCT, and BIN lines show unsigned grouped forms. Binary panels trim leading all-zero nibbles on the MSB side for readability, while keeping lower bits through bit 0 when needed.",
      ],
    },
    {
      heading: "Arithmetic",
      paragraphs: [
        "Use +, −, ×, ÷, and %. Operations apply to masked unsigned values in the current word. For QWORD, multiplication wraps modulo 2^64; narrower words wrap modulo 2^n. Division or remainder by zero leaves the left-hand value unchanged (no error state).",
      ],
    },
    {
      heading: "Bitwise operators",
      paragraphs: [
        "AND, OR, XOR combine two operands with &, |, ^, then mask. NAND is ~(a & b); NOR is ~(a | b), both masked. NOT is a unary one's complement (invert every bit in the word). The ± key performs two's-complement negation (signed negate), which is different from NOT.",
        "Examples below use decimal operands and assume BYTE (8-bit) word size so results fit in one byte; the same rules apply after masking for wider words.",
      ],
      list: [
        "AND — bits must both be 1. 12 AND 10: 0000 1100 ∧ 0000 1010 → 0000 1000 = 8.",
        "OR — at least one 1. 12 OR 10 → 0000 1110 = 14.",
        "XOR — 1 where bits differ. 12 XOR 10 → 0000 0110 = 6.",
        "NAND — NOT of AND, then mask. 12 AND 10 = 8; ~8 in 8 bits → 1111 0111 = 247 (0xF7).",
        "NOR — NOT of OR, then mask. 12 OR 10 = 14; ~14 in 8 bits → 1111 0001 = 241 (0xF1).",
        "NOT (one's complement) — flip every bit of the current value. NOT 5: ~0000 0101 → 1111 1010 = 250 (0xFA).",
        "± (two's-complement negate) — not a bitwise op, shown for contrast. With BYTE, 5 becomes signed −5 (DEC shows −5); as unsigned 8-bit that is 251 (0xFB), not 250, so NOT and ± differ.",
      ],
    },
    {
      heading: "Shifts (<< / >>)",
      paragraphs: [
        "Each press shifts by exactly one bit. Choose the mode from the toolbar: Logical shift — left fills 0 at LSB side of the shift; right fills 0 at MSB. Arithmetic shift — left matches logical for one step; right replicates the sign bit in two's complement (signed right shift). Rotate — MSB wraps to LSB on left; LSB wraps to MSB on right. Rotate through carry — one extra carry bit participates (RCL/RCR style): on left, the old carry enters LSB and the old MSB becomes carry; on right, the old carry enters MSB and the old LSB becomes carry. Carry resets when you change mode, clear (C), or change word size.",
      ],
    },
    {
      heading: "Expression line, memory, and bit grid",
      paragraphs: [
        "The small line above the main display shows the ongoing formula (operators as AND, OR, …) using the same radix style as the main readout for operands. MS stores the current value; M▾ offers MR (recall), MC (clear memory), and M+ (add to memory), all masked. In Bit toggling mode, clicking a bit XORs that position; the value updates immediately.",
      ],
    },
    {
      heading: "Keyboard",
      paragraphs: [
        "When focus is inside the calculator card, you can type digits and operators; < / > for shifts, ~ for NOT, Enter or = for equals, Backspace, Delete or C (except in HEX where C is a digit), Esc to close menus or clear. K / I switch Keypad vs Bit toggling. Modifiers Ctrl/Cmd/Alt are left to the browser.",
      ],
    },
  ],
  footer: "All processing runs locally in your browser; nothing is sent to a server.",
};

export const programmerTechnicalRefKo = {
  title: "이 계산기의 동작 방식",
  sections: [
    {
      heading: "워드 크기(QWORD / DWORD / WORD / BYTE)",
      paragraphs: [
        "모든 값은 선택한 너비(64·32·16·8비트)로 마스크됩니다. 산술, 비트 연산, 시프트, 메모리도 동일한 마스크를 사용합니다. 비트 그리드에서는 활성 워드보다 높은 인덱스는 비활성(읽기 전용)으로 표시되어 현재 워드에 속한 비트를 바로 확인할 수 있습니다.",
      ],
    },
    {
      heading: "진수(HEX / DEC / OCT / BIN)",
      paragraphs: [
        "행을 눌러 키패드 입력 진수를 고릅니다. 해당 진수에서 유효한 숫자만 입력됩니다. 네 줄의 표시는 같은 값을 다른 형식으로 보여 줍니다. DEC 줄은 현재 워드 크기의 2의 보수 부호 정수이고, HEX·OCT·BIN 줄은 부호 없는 그룹 표기입니다. 이진 패널은 MSB 쪽의 앞자리 0 니블을 줄여 읽기 쉽게 하되, 필요 시 bit 0까지 하위 비트는 유지합니다.",
      ],
    },
    {
      heading: "산술",
      paragraphs: [
        "+, −, ×, ÷, % 연산을 지원합니다. 연산은 현재 워드에서 마스크된 부호 없는 값에 적용됩니다. QWORD에서는 곱셈이 2^64로 래핑되고, 더 좁은 워드는 2^n으로 래핑됩니다. 0으로 나누거나 나머지를 구할 때는 왼쪽 피연산자를 그대로 둡니다(오류 상태 없음).",
      ],
    },
    {
      heading: "비트 연산자",
      paragraphs: [
        "AND, OR, XOR는 두 피연산자를 &, |, ^로 결합한 뒤 마스크합니다. NAND는 ~(a & b), NOR는 ~(a | b)이며 둘 다 마스크됩니다. NOT은 단항 1의 보수(워드의 모든 비트 반전)입니다. ± 키는 2의 보수 부호 반전(부호 있는 negate)이며 NOT과 다릅니다.",
        "아래 예시는 10진 피연산자를 쓰고 BYTE(8비트) 워드를 가정합니다. 더 넓은 워드에서도 마스크 후 같은 규칙이 적용됩니다.",
      ],
      list: [
        "AND — 두 비트가 모두 1이어야 합니다. 12 AND 10: 0000 1100 ∧ 0000 1010 → 0000 1000 = 8.",
        "OR — 하나 이상 1이면 됩니다. 12 OR 10 → 0000 1110 = 14.",
        "XOR — 비트가 다를 때 1. 12 XOR 10 → 0000 0110 = 6.",
        "NAND — AND 결과의 NOT 후 마스크. 12 AND 10 = 8; 8비트에서 ~8 → 1111 0111 = 247 (0xF7).",
        "NOR — OR 결과의 NOT 후 마스크. 12 OR 10 = 14; 8비트에서 ~14 → 1111 0001 = 241 (0xF1).",
        "NOT(1의 보수) — 현재 값의 모든 비트를 뒤집습니다. NOT 5: ~0000 0101 → 1111 1010 = 250 (0xFA).",
        "±(2의 보수 negate) — 비트 연산이 아니며 대비용입니다. BYTE에서 5는 부호 있는 −5(DEC에 −5 표시); 부호 없는 8비트로는 251(0xFB)이므로 NOT과 ±는 다릅니다.",
      ],
    },
    {
      heading: "시프트(<< / >>)",
      paragraphs: [
        "한 번 누를 때마다 정확히 1비트 시프트합니다. 도구 모음에서 모드를 고릅니다. 논리 시프트 — 왼쪽은 LSB 쪽에 0, 오른쪽은 MSB 쪽에 0을 채웁니다. 산술 시프트 — 왼쪽은 한 단계에서 논리와 같고, 오른쪽은 2의 보수 부호 비트를 복제합니다(부호 있는 오른쪽 시프트). 회전 — 왼쪽 시 MSB가 LSB로, 오른쪽 시 LSB가 MSB로 감깁니다. 캐리 포함 회전 — 추가 캐리 비트가 참여합니다(RCL/RCR 방식): 왼쪽은 이전 캐리가 LSB로, 이전 MSB가 캐리가 됩니다. 오른쪽은 이전 캐리가 MSB로, 이전 LSB가 캐리가 됩니다. 모드 변경, C(초기화), 워드 크기 변경 시 캐리는 리셋됩니다.",
      ],
    },
    {
      heading: "식 표시줄, 메모리, 비트 그리드",
      paragraphs: [
        "메인 표시 위 작은 줄에는 진행 중인 식(AND, OR 등 연산자)이 피연산자와 같은 진수 스타일로 표시됩니다. MS는 현재 값을 저장하고, M▾에서 MR(불러오기), MC(메모리 지우기), M+(메모리에 더하기)를 제공하며 모두 마스크됩니다. 비트 토글 모드에서는 비트를 클릭하면 해당 위치가 XOR되어 값이 즉시 갱신됩니다.",
      ],
    },
    {
      heading: "키보드",
      paragraphs: [
        "계산기 카드에 포커스가 있을 때 숫자와 연산자를 입력할 수 있습니다. < / >는 시프트, ~는 NOT, Enter 또는 =는 계산, Backspace·Delete 또는 C는 지우기(HEX에서는 C가 숫자)입니다. Esc는 메뉴 닫기 또는 초기화입니다. K / I로 키패드와 비트 토글을 전환합니다. Ctrl/Cmd/Alt 조합은 브라우저에 맡깁니다.",
      ],
    },
  ],
  footer: "모든 처리는 브라우저에서 로컬로 수행되며 서버로 전송되지 않습니다.",
};
