export const healthKo = {
  health: {
    h1: "건강 도구",
    subtitle: "BMI, 체형, 근육 지수, 칼로리, 줄자 체지방",
    intro:
      "줄자·공식 기반 추정치이며 의료기기가 아닙니다. 순수 수학 계산(평균, GPA, 퍼센트)은",
    guideTitle: "건강 도구 가이드",
    guideIntro:
      "먼저 단위 변환이 필요하면 단위 변환기를, 일정 계산은 시간 도구를 함께 활용하세요.",
    sections: [
      {
        title: "1. 어떤 도구를 선택하면 되나요?",
        type: "ordered",
        items: [
          "오늘 측정한 값에 맞는 도구를 선택하세요. 키·몸무게는 BMI, 허리·엉덩이 둘레는 WHR, 목·허리(여성은 엉덩이 포함)는 Navy 체지방 계산처럼 용도가 다릅니다.",
          "각 페이지의 짧은 안내문을 먼저 읽으세요. 줄자/공식 기반 수치는 검사실 결과를 대체하지 않습니다.",
          "같은 수치를 다른 관점으로 보고 싶으면 허브에서 도구를 전환하세요(예: BMI + 허리 맥락).",
        ],
      },
      {
        title: "2. 계산은 어디서 실행되나요?",
        type: "paragraphs",
        items: [
          "모든 도구는 브라우저에서 로컬로 실행되며 서버로 전송되지 않습니다.",
          "각 페이지에 수식이 문서화되어 있어 병원 출력물이나 기기 수치와 비교하기 쉽습니다.",
        ],
      },
      {
        title: "3. 이 카테고리에는 무엇이 포함되나요?",
        type: "paragraphs",
        items: [
          "이 카테고리는 일반 수학 계산기와 분리되어 체성분·에너지 추정 도구만 모아 둔 영역입니다.",
          "값이 이상해 보이면 새로운 프로그램을 바꾸기 전에 같은 자세와 줄자 장력으로 다시 측정하세요.",
        ],
      },
      {
        title: "4. 실사용 장점",
        type: "unordered",
        items: [
          "로그인 필요 없음.",
          "WithusTools 전반과 동일한 모바일 친화 레이아웃.",
          "메모/이메일 공유를 위한 결과 복사 버튼 제공.",
        ],
      },
      {
        title: "5. 자주 쓰는 상황",
        type: "unordered",
        items: ["상담 전 서류 수치 재확인.", "지표 정규화 개념 수업 데모.", "줄자만 있는 환경에서의 대략적 추적."],
      },
    ],
    faq: [
      {
        question: "왜 Health를 Calculator Tools와 분리했나요?",
        answer:
          "Calculator Tools는 성적·통계·퍼센트·프로그래머 수학에 집중하고, Health는 체성분·에너지 추정 도구를 한 카테고리로 모아 관련 링크와 필터를 일관되게 유지합니다.",
      },
      {
        question: "어떤 도구부터 시작하면 좋나요?",
        answer:
          "키·몸무게만 있으면 BMI부터 시작하세요. ASM(사지 골격근량) 출력물이 있으면 골격근 지수를, 활동 수준을 반영한 유지 칼로리는 BMR/TDEE를 사용하세요.",
      },
      {
        question: "의사나 영양사를 대체하나요?",
        answer:
          "아니요. 교육용 계산기입니다. 진단·처방·훈련 계획은 전문가 상담을 따르세요.",
      },
      {
        question: "기존 계산기 URL은 어디로 갔나요?",
        answer:
          "/tools/calculator/... 아래 기존 다섯 도구 북마크는 새 /tools/health/... 경로로 이동되어야 합니다.",
      },
    ],
    backToHome: "← 홈으로",
  },
  "health.bmi-calculator": {
    h1: "BMI 계산기",
    subtitle: "미터법과 미국 단위를 지원하는 온라인 BMI 계산기",
    guideTitle: "BMI 계산기 가이드",
    sections: [
      {
        title: "1. 이 페이지에서 BMI와 체중 범주를 어떻게 확인하나요?",
        type: "ordered",
        items: [
          "단위를 Metric(kg/cm) 또는 US Units(lbs/ft,in)로 선택합니다.",
          "해당 입력칸에 키와 몸무게를 입력합니다.",
          "Calculate BMI를 눌러 BMI와 범주를 확인합니다.",
        ],
      },
      {
        title: "2. 미터법/영미 단위에서 어떤 수식을 쓰나요?",
        type: "paragraphs",
        items: [
          "BMI = 몸무게 ÷ 키². Metric은 kg/(m²), US는 (lbs × 703) ÷ in².",
          "범주: 저체중(<18.5), 정상(18.5–24.9), 과체중(25–29.9), 비만(30–34.9), 고도비만(≥35). 상세는 하단 표를 확인하세요.",
        ],
      },
      {
        title: "3. BMI의 의미와 한계는 무엇인가요?",
        type: "paragraphs",
        items: [
          "건강 평가용 무료 온라인 BMI 계산기입니다. 미터법/영미 단위를 모두 지원하며 결과에 범주를 함께 제공합니다.",
          "주의: BMI는 체성분, 골격, 연령, 개인 차이를 직접 반영하지 않습니다.",
        ],
      },
      {
        title: "4. 브라우저 기반 BMI 계산기를 쓰는 이유는?",
        type: "unordered",
        items: [
          "미터법/US 단위 모두 지원.",
          "현재 위치를 보여주는 시각적 스케일.",
          "범주와 함께 결과 제공.",
          "모든 계산이 브라우저 로컬에서 실행.",
        ],
      },
      {
        title: "5. BMI 스크리닝은 언제 함께 쓰나요?",
        type: "unordered",
        items: ["건강 스크리닝과 체성분 점검.", "운동·체중 관리 목표 확인.", "연구·집단 건강 분석.", "개인 건강 모니터링."],
      },
    ],
    faq: [
      {
        question: "이 페이지에서 BMI와 체중 범주를 어떻게 확인하나요?",
        answer: "단위를 고르고 키·몸무게를 입력해 계산하면 BMI와 범주를 확인할 수 있습니다.",
      },
      {
        question: "미터법/영미 단위에서 어떤 방식으로 계산하나요?",
        answer: "표준 BMI 공식을 단위 체계에 맞춰 적용하며 변환을 일관되게 처리합니다.",
      },
      {
        question: "BMI의 의미와 건강 판단 한계는 무엇인가요?",
        answer: "BMI는 키 대비 체중의 스크리닝 지표이며 전체 건강 평가를 대체하지 않습니다.",
      },
      {
        question: "왜 브라우저 내 개인 계산기로 BMI를 확인하나요?",
        answer: "입력값이 브라우저에 머문 채로 빠르게 계산할 수 있습니다.",
      },
      {
        question: "BMI는 어떤 상황에서 다른 정보와 함께 보나요?",
        answer: "일상 추적, 운동 계획, 집단 건강 점검에서 다른 지표와 함께 사용합니다.",
      },
    ],
    reference: {
      title: "BMI 계산 방식",
      paragraphs: [
        "BMI(체질량지수)는 체중을 키 제곱으로 나눈 값입니다. 체지방이나 건강의 진단값이 아니라 스크리닝 지표입니다.",
        "Metric: 키 h(미터), 몸무게 w(킬로그램).",
        "예시: 70kg, 1.70m → BMI = 70 ÷ (1.70 × 1.70) ≈ 24.2.",
        "US: 키 H(인치), 몸무게 W(파운드). 계수 703이 lb/in²를 kg/m² 스케일로 맞춰줍니다.",
        "US 모드에서는 ft/in를 총 인치로 합산한 뒤 제곱합니다.",
        "성인 기준 컷오프는 WHO/CDC 스타일 범위를 따릅니다. 범주별 체중 경계는 키에 따라 달라집니다.",
      ],
      formulas: ["BMI = w ÷ h² (kg/m²)", "BMI = (W × 703) ÷ H²"],
      tables: [
        {
          title: "성인 범주(이 계산기 기준)",
          columns: ["범주", "BMI 범위", "키 대비 체중(요약)", "설명"],
          rows: [
            ["저체중", "< 18.5", "18.5 × h²(kg) 미만", "키 대비 체중이 낮을 수 있습니다. 우려 시 전문가 상담을 권장합니다."],
            ["정상 체중", "18.5 – 24.9", "18.5~24.9 경계 사이", "많은 성인에서 넓은 정상 범위로 쓰이는 스크리닝 구간입니다."],
            ["과체중", "25.0 – 29.9", "25 × h² 이상 30 × h² 미만", "키 대비 체중이 높은 구간이며 추가 평가가 필요할 수 있습니다."],
            ["비만", "30.0 – 34.9", "임상에서 class I로 불리기도 함", "상대적으로 높은 BMI 구간으로 개인별 위험도는 다를 수 있습니다."],
            ["고도비만", "≥ 35", "여러 체계의 class II/III에 해당", "이 도구는 BMI 35 이상을 한 그룹으로 묶어 표시합니다."],
          ],
        },
      ],
      notesTitle: "알아두면 좋은 점",
      notes: [
        "BMI는 근육과 지방을 구분하지 못하므로 근육량이 많은 사람은 높게 나올 수 있습니다.",
        "고령자, 소아(연령 백분위 필요), 임신 중에는 해석이 달라질 수 있습니다.",
        "민족·질환 위험도에 따라 다른 컷오프를 쓰는 지침도 있습니다.",
      ],
    },
  },
  "health.bmr-tdee-calculator": {
    h1: "BMR 및 TDEE",
    subtitle: "Mifflin–St Jeor BMR과 활동계수 기반 TDEE",
    guideTitle: "빠른 가이드",
    sections: [
      {
        title: "1. 무엇부터 입력하나요?",
        type: "ordered",
        items: [
          "성별, 나이, 키, 몸무게를 입력합니다(미터법/US 선택).",
          "휴가나 대회 준비 기간이 아닌 평소 주간 활동 수준을 선택합니다.",
          "Calculate를 누르거나 입력을 멈추면 잠시 후 자동 재계산됩니다.",
        ],
      },
      {
        title: "2. 어떤 계산이 실행되나요?",
        type: "paragraphs",
        items: [
          "BMR은 Mifflin–St Jeor 식(kg, cm, years)을 사용합니다.",
          "TDEE는 BMR에 활동계수(1.2~1.9)를 곱해 계산합니다.",
        ],
      },
      {
        title: "3. 웨어러블 값과 왜 다를 수 있나요?",
        type: "paragraphs",
        items: [
          "예측식에는 오차가 있으며 동일 수치의 사람도 약물, 유전, 수면, 비운동 활동량 차이로 달라질 수 있습니다.",
          "실측(간접열량측정)이 더 정확합니다. 결과는 2~4주 추세 조정용 시작값으로 보세요.",
        ],
      },
      {
        title: "4. 브라우저 계산기를 쓰는 이유는?",
        type: "unordered",
        items: [
          "Mifflin–St Jeor는 많은 현대 성인에서 구식 Harris–Benedict 보정보다 추정력이 나은 편입니다.",
          "활동 수준 정의가 라디오 옵션 옆에 함께 표시되어 해석이 쉽습니다.",
          "계정/업로드 없이 탭 내부에서 계산됩니다.",
        ],
      },
      {
        title: "5. 대표 사용 사례",
        type: "unordered",
        items: [
          "영양사·코치 상담 전 대략적 칼로리 목표 설정.",
          "10×체중 + 6.25×키 − 5×나이 패턴 학습/교육.",
          "근거가 안 보이는 앱·시트 수치의 검산.",
        ],
      },
    ],
    faq: [
      {
        question: "왜 Harris–Benedict 대신 Mifflin–St Jeor를 쓰나요?",
        answer:
          "1990년대 이후 영양 지침에서 많이 전환된 식이며, 다수 연구에서 비고령 성인의 안정대사 추정이 더 잘 맞는 경우가 많았습니다.",
      },
      {
        question: "TDEE는 유지칼로리와 같은가요?",
        answer:
          "대략 같습니다. 이 도구에서 TDEE는 해당 활동 수준에서 체중을 유지할 가능성이 있는 섭취량을 뜻합니다.",
      },
      {
        question: "운동은 강하게 하지만 하루 대부분 앉아 있으면요?",
        answer:
          "운동 시간만이 아니라 하루 전체 패턴을 반영한 행을 고르세요. 일관성 있게 같은 기준을 유지하는 것이 중요합니다.",
      },
      {
        question: "임신·수유 중에도 사용 가능한가요?",
        answer:
          "의료진 지도 없이 권장하지 않습니다. 임신 주수, 수유량, 검사 수치 등 개인 요인이 크게 작용합니다.",
      },
      {
        question: "개인 맞춤 의료 영양 처방인가요?",
        answer: "아니요. 일반 활동 구간을 적용한 산술 추정값이며 처방을 대체하지 않습니다.",
      },
    ],
    reference: {
      title: "이 페이지의 수식",
      paragraphs: [
        "Mifflin–St Jeor는 안정 시 대사량을 추정합니다. 소화, 미세 움직임, 운동 소모는 포함하지 않습니다.",
        "기호: w(kg), h(cm), a(나이). 이 계산기는 소수 나이를 내림 처리해 사용합니다.",
        "TDEE = BMR × 활동계수이며 도구의 5개 단계(1.2, 1.375, 1.55, 1.725, 1.9)와 일치합니다.",
      ],
      formulas: ["남성: BMR = 10w + 6.25h − 5a + 5", "여성: BMR = 10w + 6.25h − 5a − 161"],
      tables: [
        {
          title: "활동계수 참고",
          columns: ["도구 레이블", "계수", "일반 패턴"],
          rows: [
            ["Sedentary", "1.2", "대부분 앉아서 생활, 구조화 운동 적음"],
            ["Light", "1.375", "가벼운 운동/걷기 주 1~3회"],
            ["Moderate", "1.55", "중간 강도 운동 주 3~5회"],
            ["Active", "1.725", "고강도 운동 또는 육체 노동 다수 요일"],
            ["Very active", "1.9", "거의 매일 고강도 활동"],
          ],
        },
      ],
      notesTitle: "유의 사항",
      notes: ["예측식은 근육량 변화를 완전히 반영하지 못할 수 있습니다.", "약물·카페인·스트레스·환경 온도에 따라 실제 대사량은 변동될 수 있습니다."],
    },
  },
  "health.body-fat-calculator": {
    h1: "체지방(줄자 추정)",
    subtitle: "U.S. Navy 둘레 공식(DXA/BIA 아님)",
    guideTitle: "빠른 가이드",
    sections: [
      {
        title: "1. 무엇을 먼저 측정하나요?",
        type: "ordered",
        items: [
          "남/여를 선택한 뒤 키, 목(가장 가는 지점), 허리(배꼽 높이)를 입력합니다.",
          "여성은 엉덩이 둘레(가장 넓은 지점)도 입력해야 하며 식에 포함됩니다.",
          "Metric/US를 선택하고 입력을 멈추면 잠시 후 자동 재계산됩니다.",
        ],
      },
      {
        title: "2. 어떤 계산이 돌아가나요?",
        type: "paragraphs",
        items: [
          "모든 값을 인치로 변환한 뒤 Navy 로그 계수를 적용해 체지방률(소수 1자리)을 계산합니다.",
          "퍼센트 아래 색상 라벨은 ACE 스타일 참고 구간으로, Navy 식 자체 결과는 아닙니다.",
        ],
      },
      {
        title: "3. 스캔 결과와 왜 다를 수 있나요?",
        type: "paragraphs",
        items: [
          "DXA/BIA/줄자는 서로 다른 원리와 오차를 가지므로 퍼센트포인트 차이가 흔합니다.",
          "기본 Navy 식은 나이를 쓰지 않으므로 고령층·근육량이 큰 집단에서 편차가 커질 수 있습니다.",
        ],
      },
      {
        title: "4. 브라우저 전용 도구의 장점은?",
        type: "unordered",
        items: [
          "줄자만으로 계산 가능, 서버 업로드 없음.",
          "허브 내 다른 계산기와 동일한 입력 패턴.",
          "요약 퍼센트와 라벨을 한 번에 복사 가능.",
        ],
      },
      {
        title: "5. 자주 쓰는 경우",
        type: "unordered",
        items: [
          "폼/서류에 적힌 수치와 손계산 검산.",
          "허리 측정 위치 변화에 따른 민감도 확인.",
          "둘레 모델과 스캐너 모델 차이 학습.",
        ],
      },
    ],
    faq: [
      {
        question: "헬스장 체중계·DEXA와 왜 다르게 나오나요?",
        answer:
          "Navy는 둘레만 사용하고 BIA는 체수분, DXA는 X선 감쇠를 사용하므로 체계별 편향이 달라 완전 일치하지 않습니다.",
      },
      {
        question: "이 페이지는 나이를 쓰나요?",
        answer:
          "아니요. 표준 Navy 공식은 나이를 포함하지 않습니다. 일부 연구식은 나이를 쓰지만 이 페이지는 검증 가능한 고전 공식을 사용합니다.",
      },
      {
        question: "허리 줄자 위치는 정확히 어디인가요?",
        answer:
          "Navy 지침은 배꼽 높이의 수평 측정을 기준으로 합니다. 자연 허리선은 다른 위치라 결과가 달라질 수 있습니다.",
      },
      {
        question: "보디빌더도 사용할 수 있나요?",
        answer:
          "입력은 가능하지만 목이 매우 크고 허리가 매우 얇은 경우 회귀식 가정에서 벗어나 결과가 왜곡될 수 있습니다.",
      },
      {
        question: "의학적 조언인가요?",
        answer: "아니요. 둘레 기반 산술 추정과 참고 라벨이며 질환·처방 판단은 전문가 상담이 필요합니다.",
      },
    ],
    reference: {
      title: "수식(상용로그, 로그 내부 단위는 인치)",
      paragraphs: [
        "페이지는 cm 또는 ft/in 입력을 모두 인치로 변환한 뒤 Navy 공식 계수를 그대로 적용합니다.",
        "log10은 밑이 10인 로그입니다.",
        "남성은 (허리−목), 여성은 (허리+엉덩이−목)가 충분히 양수여야 로그가 정의됩니다.",
        "색상 라벨은 ACE 스타일 참고 구간이며 임상 분류가 아닙니다.",
      ],
      formulas: [
        "남성: BF% = 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76",
        "여성: BF% = 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387",
      ],
      tables: [],
      notesTitle: "알아두면 좋은 점",
      notes: [
        "BIA는 수분 상태, DXA는 장비·가정에 영향을 받습니다. 줄자 방식은 저비용이지만 정밀도 한계가 있습니다.",
        "이미 신뢰하는 BIA/DXA 수치가 있다면 이 페이지는 보조 참고로 사용하세요.",
      ],
    },
  },
  "health.waist-hip-ratio-calculator": {
    h1: "허리-엉덩이 비율",
    subtitle: "허리·엉덩이 둘레, 비율, 참고 라벨",
    guideTitle: "빠른 가이드",
    sections: [
      {
        title: "1. 어떻게 측정·입력하나요?",
        type: "ordered",
        items: [
          "편안히 선 자세에서 허리는 가장 가는 지점, 엉덩이는 가장 넓은 지점을 수평으로 측정합니다.",
          "cm끼리 또는 inch끼리 같은 단위를 입력하세요.",
          "남/여 선택 시 WHR 색상 라벨과 허리 단독 문구가 함께 표시됩니다.",
        ],
      },
      {
        title: "2. 무엇을 계산하나요?",
        type: "paragraphs",
        items: [
          "WHR = 허리둘레 ÷ 엉덩이둘레이며 단위는 상쇄됩니다.",
          "허리 문구는 남성 94/102cm, 여성 80/88cm(유럽계 기준에서 자주 쓰이는 값)를 참고합니다.",
        ],
      },
      {
        title: "3. 단일 측정을 얼마나 신뢰할 수 있나요?",
        type: "paragraphs",
        items: [
          "WHR은 체지방 분포 패턴 지표이며 간지방·혈당·체력 자체를 직접 측정하지 않습니다.",
          "자세나 줄자 위치에 따라 1~2cm 차이가 날 수 있으므로 같은 방식으로 추세를 보세요.",
        ],
      },
      {
        title: "4. 왜 브라우저에서 계산하나요?",
        type: "unordered",
        items: [
          "업로드·계정 없이 로컬 계산.",
          "WHR와 허리 문구를 한 화면에서 함께 확인.",
          "허리/엉덩이/비율/라벨을 한 번에 복사.",
        ],
      },
      {
        title: "5. 누가 자주 사용하나요?",
        type: "unordered",
        items: [
          "간호·트레이너·학생의 예제 검산.",
          "진료/상담 기록 수치와 개인 측정값 비교.",
          "체중 변화가 작아도 둘레 변화가 있는 경우의 빠른 확인.",
        ],
      },
    ],
    faq: [
      {
        question: "왜 WHO는 남성 0.90, 여성 0.85를 말하나요?",
        answer:
          "대규모 연구에서 중심성 지방 분포 위험 신호로 자주 인용되는 기준선입니다. 개인 진단값은 아닙니다.",
      },
      {
        question: "WHR과 허리둘레 단독 지표의 차이는?",
        answer:
          "WHR은 골반 폭/체형을 일부 반영하지만 허리 단독은 반영하지 않습니다. 그래서 두 지표를 함께 보는 지침이 많습니다.",
      },
      {
        question: "재봉 줄자로 측정해도 되나요?",
        answer: "늘어나지 않는 줄자라면 가능합니다. 전체 둘레에서 수평을 유지하세요.",
      },
      {
        question: "근력운동 중인데 비율이 높으면 걱정해야 하나요?",
        answer:
          "근육량이 허리 수치를 올릴 수 있으므로 단일 비율보다 운동·식습관·수면·검사 수치 맥락이 중요합니다.",
      },
      {
        question: "의학적 조언인가요?",
        answer:
          "아니요. 나눗셈 계산과 참고 범주 매핑입니다. 개인 상태를 아는 의료진 판단이 우선입니다.",
      },
    ],
    reference: {
      title: "이 페이지의 정의",
      paragraphs: [
        "WHR은 허리/엉덩이 두 줄자 측정을 비교한 값입니다.",
        "예: 허리 80cm, 엉덩이 100cm → WHR 0.800.",
        "색상 칩은 남성 0.90, 여성 0.85 기준을 사용합니다.",
        "성별 선택 시 허리를 cm로 환산해 남 94/102, 여 80/88 기준 문구를 추가합니다.",
      ],
      formulas: ["WHR = waist ÷ hip (분자/분모 같은 단위)"],
      tables: [
        {
          title: "성별 WHR 참고값",
          columns: ["성별", "WHR 기준(이 페이지)", "표현 방식"],
          rows: [
            ["남성", "> 0.90", "기준 초과면 높은 패턴 측으로 표시, 이하이면 반대 색상"],
            ["여성", "> 0.85", "동일 규칙: 기준 이하면 낮은 측으로 표시"],
          ],
        },
      ],
      notesTitle: "알아두면 좋은 점",
      notes: [
        "임신, 부종, 일시적 복부 팽만은 장기 지방 변화 없이 허리 수치를 키울 수 있습니다.",
        "골반이 넓으면 WHR이 기계적으로 낮아질 수 있어 단독 판단은 제한적입니다.",
      ],
    },
  },
  "health.skeletal-muscle-index-calculator": {
    h1: "골격근 지수",
    subtitle: "ASM ÷ 키²(kg/m²), 성별 기준선 비교 옵션",
    guideTitle: "빠른 가이드",
    sections: [
      {
        title: "1. 무엇을 입력하나요?",
        type: "ordered",
        items: [
          "BIA/DXA 결과의 사지 골격근량(ASM: 양팔+양다리)을 준비합니다.",
          "키와 ASM을 Metric/US 단위로 입력합니다.",
          "성별을 선택하면 7.0/5.5kg/m² 기준선 비교가 표시됩니다. 원시 지수만 필요하면 Skip을 사용하세요.",
        ],
      },
      {
        title: "2. 내부 수식은 무엇인가요?",
        type: "paragraphs",
        items: [
          "SMI = ASM ÷ 키² (키는 m, ASM은 kg)이며 결과 단위는 kg/m²입니다.",
          "US 입력은 ft/in→m, lb→kg 변환 후 동일 수식을 적용합니다.",
        ],
      },
      {
        title: "3. 색상 밴드는 얼마나 의미가 있나요?",
        type: "paragraphs",
        items: [
          "임상에서는 단일 지수만으로 판단하지 않고 근력/기능 검사와 함께 해석합니다.",
          "장비·소프트웨어 버전에 따라 소수점 차이가 날 수 있으므로 이 페이지는 검산용으로 사용하세요.",
        ],
      },
      {
        title: "4. 브라우저 도구의 장점은?",
        type: "unordered",
        items: [
          "계정/서버 전송 없이 로컬 계산.",
          "모드 전환으로 단위 혼용 상황도 쉽게 처리.",
          "복사 버튼으로 메모·이메일 공유 간편.",
        ],
      },
      {
        title: "5. 자주 쓰는 상황",
        type: "unordered",
        items: ["검사 출력물 SMI 재계산 검산.", "체성분 지수의 키 정규화 학습.", "동일 장비 반복 측정 기반 추세 확인."],
      },
    ],
    faq: [
      {
        question: "사지 골격근량(ASM)은 정확히 무엇인가요?",
        answer:
          "양팔·양다리의 골격근 추정량입니다. 전신 제지방량(트렁크 포함)은 다른 값이므로 대체 입력하면 안 됩니다.",
      },
      {
        question: "7.0, 5.5kg/m² 기준은 어디서 왔나요?",
        answer:
          "EWGSOP2 근감소증 업데이트에서 널리 인용되는 남/여 기준입니다. 지역 지침은 숫자나 보조 기준이 다를 수 있습니다.",
      },
      {
        question: "검사표에 SMI가 이미 있는데 왜 재계산하나요?",
        answer: "오타 검증, 단위 전환 확인, 공식 설명 공유에 유용합니다.",
      },
      {
        question: "SMI가 높으면 항상 좋은 상태인가요?",
        answer:
          "아니요. 수분 상태·장비 가정의 영향이 있고, 같은 지수여도 기능 상태는 다를 수 있습니다.",
      },
      {
        question: "의학적 조언인가요?",
        answer: "아니요. 교육·검산용 계산기이며 해석·치료는 전문가 판단이 필요합니다.",
      },
    ],
    reference: {
      title: "지수 정의",
      paragraphs: [
        "사지 골격근 지수는 ASM(kg)을 키(m)의 제곱으로 나눈 값으로 정의되며 단위는 kg/m²입니다.",
        "예: ASM 30.0kg, 키 1.75m → 30 ÷ (1.75 × 1.75) ≈ 9.8kg/m².",
        "US 모드는 키를 m로, lb ASM을 kg로 자동 변환한 뒤 동일 계산을 수행합니다.",
        "EWGSOP2 2019 문헌에서 남성 <7.0, 여성 <5.5kg/m²를 임상 맥락과 함께 참고 기준으로 제시합니다.",
      ],
      formulas: ["SMI = ASMkg ÷ h² (h in metres)"],
      tables: [
        {
          title: "성별 기준선",
          columns: ["성별(비교 모드)", "이 페이지 컷오프", "문장형 안내"],
          rows: [
            ["남성", "< 7.0 kg/m²", "기준 미만으로 표시되지만 단독으로 근감소증 진단을 의미하지 않습니다."],
            ["여성", "< 5.5 kg/m²", "여성 기준도 동일하게 기능·병력 맥락을 함께 봐야 합니다."],
          ],
        },
      ],
      notesTitle: "알아두면 좋은 점",
      notes: [
        "아시아권 일부 합의안은 컷오프를 조정하거나 보조 지표를 함께 사용합니다.",
        "부종·금속 임플란트·수분 상태는 BIA 기반 ASM에 영향을 줄 수 있습니다.",
      ],
    },
  },
};

export const healthUiKo = {
  bmi: {
    title: "BMI 계산",
    unit: { metric: "미터법", us: "미국 단위" },
    labels: { heightCm: "키 (cm)", weightKg: "몸무게 (kg)", heightFt: "키 (ft)", heightIn: "키 (in)", weightLbs: "몸무게 (lbs)" },
    placeholders: { height: "키 입력", weight: "몸무게 입력", feet: "피트", inches: "인치" },
    buttons: { calculate: "BMI 계산", reset: "초기화", sample: "샘플 데이터 사용", copy: "결과 복사", copied: "복사됨!" },
    result: {
      title: "BMI 결과",
      labels: { underweight: "저체중", normal: "정상", overweight: "과체중", obese: "비만" },
      normalRecommended: "정상(권장)",
      recommendedRange: "권장 체중 범위:",
      note: "참고: BMI는 체성분, 골격, 연령 등 개인 요인을 직접 반영하지 않습니다.",
    },
    category: { underweight: "저체중", normalWeight: "정상 체중", overweight: "과체중", obese: "비만", severelyObese: "고도비만" },
    error: {
      enterBoth: "키와 몸무게를 모두 입력하세요",
      enterValid: "유효한 숫자를 입력하세요",
      positive: "키와 몸무게는 0보다 커야 합니다",
      enterHeightUs: "키(ft/in)를 입력하세요",
      enterWeight: "몸무게를 입력하세요",
      nonNegativeHeight: "키는 음수일 수 없습니다",
      invalidCalculation: "계산 결과가 유효하지 않습니다",
    },
    toast: { cleared: "초기화됨", sampleLoaded: "샘플 데이터 불러옴", copied: "결과를 클립보드에 복사했습니다", copyFailed: "복사 실패" },
    aria: {
      calculate: "BMI 계산",
      reset: "입력과 결과 초기화",
      sample: "샘플 데이터 불러오기",
      copy: "결과를 클립보드에 복사",
      resultRegion: "BMI 계산 결과",
      scale: "BMI 16~35 스케일(권장 구간 18.5~25)",
      heightCm: "키(센티미터)",
      weightKg: "몸무게(킬로그램)",
      heightFt: "키(피트)",
      heightIn: "키(인치)",
      weightLbs: "몸무게(파운드)",
    },
  },
  bmrTdee: {
    title: "BMR 및 TDEE",
    intro:
      "BMR은 완전 휴식 상태의 소모 열량 추정치입니다. TDEE는 활동계수를 곱한 유지 칼로리 추정치입니다. 두 값 모두 모델 기반 추정입니다.",
    sex: { legend: "성별", male: "남성", female: "여성" },
    age: { label: "나이 (년)", placeholder: "예: 34" },
    unit: { metric: "미터법", us: "미국 단위" },
    labels: { heightCm: "키 (cm)", weightKg: "몸무게 (kg)", heightFt: "키 (ft)", heightIn: "키 (in)", weightLbs: "몸무게 (lbs)" },
    placeholders: { heightCm: "예: 175", weightKg: "예: 73", ft: "Ft", in: "In", lbs: "lbs" },
    activity: {
      legend: "활동 수준",
      hint: "하루 중 특별한 하루가 아닌 최근 몇 주의 평균 패턴에 맞춰 선택하세요.",
      sedentary: { label: "좌식", detail: "운동이 거의 없고 대부분 앉아서 생활." },
      light: { label: "가벼움", detail: "가벼운 운동/빠른 걷기 주 1~3회." },
      moderate: { label: "보통", detail: "계획된 운동을 주 3~5회." },
      active: { label: "활동적", detail: "고강도 운동 또는 육체 노동을 대부분 요일에 수행." },
      veryActive: { label: "매우 활동적", detail: "운동선수급 일정 또는 강한 노동+추가 운동." },
    },
    buttons: { calculate: "계산", reset: "초기화", sample: "샘플 데이터 사용", copy: "결과 복사", copied: "복사됨" },
    result: {
      bmr: "추정 BMR",
      tdee: "추정 TDEE",
      kcalDay: "kcal/일",
      maintenance: "kcal/일 (유지)",
      summary:
        "여기서 TDEE는 BMR × {factor} ({activity})입니다. 걸음 수, 미세 움직임, 수면 등으로 실제 소모는 수백 kcal 범위로 달라질 수 있습니다.",
    },
    error: {
      pickSex: "남성/여성을 선택하세요. 계수가 다릅니다.",
      enterAge: "나이를 정수(년)로 입력하세요.",
      ageRange: "이 양식은 대략 15~100세 성인을 대상으로 합니다.",
      enterMetric: "키(cm)와 몸무게(kg)를 입력하세요.",
      enterUsHeight: "키(ft/in)를 입력하세요.",
      enterUsWeight: "몸무게(lbs)를 입력하세요.",
      usePlainNumbers: "숫자만 입력하세요(소수 가능).",
      positive: "키와 몸무게는 0보다 커야 합니다.",
      nonNegativeHeight: "키는 음수일 수 없습니다.",
      unrealisticBmr: "비현실적인 BMR 조합입니다. 입력값을 다시 확인하세요.",
    },
    toast: { cleared: "초기화됨", sampleLoaded: "샘플 값을 채웠습니다", copied: "복사됨", copyFailed: "복사가 완료되지 않았습니다" },
  },
  bodyFat: {
    title: "체지방(줄자 추정)",
    warningTitle: "검사실 수치가 아닙니다.",
    warningBody:
      "이 페이지는 U.S. Navy 둘레 공식을 사용합니다. DXA/BIA/수중체중법 결과와는 원리와 오차가 달라 수 퍼센트포인트 차이가 흔합니다. 진단이 아닌 대략적 추정으로 보세요.",
    intro:
      "목: 가장 가는 지점. 허리: 배꼽 높이(네이비 프로토콜). 엉덩이(여성): 가장 넓은 지점. 키: 맨발 직립.",
    sex: { legend: "성별", male: "남성", female: "여성" },
    unit: { metric: "미터법", us: "미국 단위" },
    labels: {
      heightCm: "키 (cm)",
      neckCm: "목 (cm)",
      waistCm: "허리(배꼽, cm)",
      hipCm: "엉덩이 (cm)",
      heightFt: "키 (ft)",
      heightIn: "키 (in)",
      neckIn: "목 (in)",
      waistIn: "허리(배꼽, in)",
      hipIn: "엉덩이 (in)",
    },
    placeholders: { heightCm: "예: 178", neckCm: "가장 가는 지점", waistCm: "복부", hipCm: "엉덩이 최대", ft: "Ft", in: "In", neckIn: "목", waistIn: "허리", hipIn: "엉덩이 최대" },
    buttons: { calculate: "계산", reset: "초기화", sample: "샘플 데이터 사용", copy: "결과 복사", copied: "복사됨" },
    result: { title: "추정 체지방률", method: "U.S. Navy 줄자 방식", chartNote: "차트 밴드는 참고용 ACE 스타일 구간이며 Navy 수식 자체 결과가 아닙니다." },
    interpret: {
      male: {
        veryLow: { label: "대부분 남성 기준 매우 낮음", detail: "일반 차트의 운동선수 구간보다 낮습니다. 측정 오차나 의료적 맥락이 영향을 줄 수 있습니다." },
        athlete: { label: "운동선수 구간(ACE 스타일)", detail: "여러 트레이너 자료에서 쓰는 6–13% 구간입니다. 줄자 Navy 값은 DEXA와 동일하지 않습니다." },
        fitness: { label: "피트니스 구간", detail: "같은 참고 차트의 피트니스 버킷입니다. 둘레 기반 모델이라는 점은 동일합니다." },
        average: { label: "평균 구간", detail: "여러 인구 차트의 중간 구간입니다. 줄자 위치·자세에 따라 수치가 쉽게 변합니다." },
        aboveAverage: { label: "차트상 평균 이상 구간", detail: "줄자 기반 차트에서 상위 지방 패턴으로 묶이지만 단독 의학 라벨은 아닙니다." },
      },
      female: {
        veryLow: { label: "대부분 여성 기준 매우 낮음", detail: "일반 차트의 운동선수 구간보다 낮습니다. 호르몬, 골격, 목 줄자 위치가 결과에 영향을 줍니다." },
        athlete: { label: "운동선수 구간(ACE 스타일)", detail: "보편적 트레이너 차트의 14–20% 구간입니다. BIA/DXA와 상호 대체되지 않습니다." },
        fitness: { label: "피트니스 구간", detail: "같은 참고 차트의 전형적인 피트니스 범주입니다. 단일 시점 값입니다." },
        average: { label: "평균 구간", detail: "여성 범위표의 중간 구간입니다. 줄자 느슨함만으로도 1~2포인트 변할 수 있습니다." },
        aboveAverage: { label: "차트상 평균 이상 구간", detail: "차트 요약의 상위 구간입니다. 건강 우려가 있다면 전문가 상담을 권장합니다." },
      },
    },
    error: {
      pickSex: "남성/여성을 선택하세요. Navy 식이 다릅니다.",
      enterMetricBase: "키, 목, 허리(배꼽 기준)를 입력하세요.",
      femaleNeedsHipMetric: "여성은 엉덩이 둘레도 필요합니다.",
      usePlainNumbers: "숫자만 입력하세요(소수 가능).",
      hipPositive: "엉덩이 값은 0보다 커야 합니다.",
      positiveBase: "키·목·허리는 0보다 커야 합니다.",
      enterUsHeight: "키(ft/in)를 입력하세요.",
      enterUsBase: "목/허리(in)를 입력하세요.",
      femaleNeedsHipUs: "여성은 엉덩이(in) 값도 필요합니다.",
      heightRange: "변환 후 키 범위가 비정상입니다. 단위를 확인하세요.",
      maleConstraint: "남성 식에서는 허리가 목보다 충분히 커야 합니다.",
      femaleConstraint: "여성 식에서는 (허리+엉덩이)가 목보다 커야 합니다.",
      unrealistic: "비현실적인 퍼센트 조합입니다. 측정 위치(배꼽 허리, 직립)를 다시 확인하세요.",
    },
    toast: { cleared: "초기화됨", sampleLoaded: "샘플 값을 채웠습니다", copied: "복사됨", copyFailed: "복사가 완료되지 않았습니다" },
  },
  whr: {
    title: "허리, 엉덩이, 비율",
    intro: "허리는 갈비뼈와 골반 사이 가장 가는 지점, 엉덩이는 가장 넓은 지점을 측정하세요. 줄자는 수평·밀착 상태를 유지하고 발을 모아 섭니다.",
    sex: { legend: "성별(WHR/허리 문구용)", male: "남성", female: "여성", skip: "건너뛰기" },
    unit: { metric: "미터법 (cm)", us: "미국식 (in)" },
    labels: { waistCm: "허리 (cm)", hipCm: "엉덩이 (cm)", waistIn: "허리 (in)", hipIn: "엉덩이 (in)" },
    placeholders: { waistCm: "예: 82", hipCm: "예: 98", waistIn: "예: 32", hipIn: "예: 38.5" },
    buttons: { calculate: "계산", reset: "초기화", sample: "샘플 데이터 사용", copy: "결과 복사", copied: "복사됨" },
    result: {
      title: "허리-엉덩이 비율",
      formula: "허리 ÷ 엉덩이 (무단위)",
      selectSex: "색상 밴드와 허리 둘레 안내를 보려면 성별을 선택하세요. WHR 계산값은 이미 표시되어 있습니다.",
      waistContextTitle: "허리둘레(차트 참고)",
      barCaption: "막대는 WHR이 {sex} 기준선 {threshold} 대비 어디에 위치하는지 보여줍니다.",
    },
    interpret: {
      male: {
        above: { label: "일반 남성 WHR 기준선 초과", detail: "WHO 자료에서 남성 {threshold}를 중심성 지방 패턴 신호로 자주 인용합니다. 질병 진단 자체는 아닙니다." },
        atOrBelow: { label: "일반 남성 WHR 기준선 이하", detail: "이 참조에서 {threshold} 이하입니다. 다른 위험요인은 별도로 확인해야 합니다." },
      },
      female: {
        above: { label: "일반 여성 WHR 기준선 초과", detail: "여성 {threshold} 기준은 남성 {maleThreshold}와 함께 WHO 요약에서 자주 사용됩니다. 줄자 장력·호르몬·골격이 값에 영향을 줍니다." },
        atOrBelow: { label: "일반 여성 WHR 기준선 이하", detail: "{threshold} 이하 기준입니다. 혈압·지질·자각 증상을 대체하지 않습니다." },
      },
    },
    waistBand: {
      male: {
        high: "허리 {waist}cm는 102cm 구간을 넘어, 일부 유럽계 기준표에서 대사위험 증가 측으로 안내하는 범위입니다.",
        medium: "허리 {waist}cm는 94–102cm 구간으로, 다른 위험요인과 함께 주의 관찰을 권하는 범위입니다.",
        low: "허리 {waist}cm는 해당 기준표의 94cm 미만입니다(측정이 수평·중립 호흡 기준일 때).",
      },
      female: {
        high: "허리 {waist}cm는 88cm 이상 구간입니다. WHR과 함께 연구에서 자주 함께 다루는 값입니다.",
        medium: "허리 {waist}cm는 80–88cm 구간으로, 다른 위험요인이 있으면 추가 확인을 권하는 범위입니다.",
        low: "허리 {waist}cm는 80cm 미만입니다. 측정 오차에 따라 해석이 달라질 수 있습니다.",
      },
    },
    error: {
      enterMetric: "허리와 엉덩이 둘레를 모두 입력하세요.",
      enterUs: "허리와 엉덩이(in)를 모두 입력하세요.",
      usePlainNumbers: "숫자만 입력하세요(소수 가능).",
      positive: "둘레 값은 0보다 커야 합니다.",
      unusableRatio: "이 조합으로는 유효한 비율이 계산되지 않습니다.",
    },
    toast: { cleared: "초기화됨", sampleLoaded: "샘플 값을 채웠습니다", copied: "복사됨", copyFailed: "복사가 완료되지 않았습니다" },
  },
  smi: {
    title: "골격근 지수",
    intro: "ASM은 체성분 검사(BIA/DXA)에서 양팔·양다리 근육량 합계입니다. 이 도구는 ASM을 키 제곱으로 나눠 kg/m² 지수를 계산합니다.",
    sex: { legend: "성별(기준선 비교용)", male: "남성", female: "여성", skip: "건너뛰기" },
    unit: { metric: "미터법", us: "미국 단위" },
    labels: {
      heightCm: "키 (cm)",
      asmKg: "사지 골격근량 (kg)",
      heightFt: "키 (ft)",
      heightIn: "키 (in)",
      asmLbs: "사지 골격근량 (lb)",
    },
    placeholders: { heightCm: "예: 172", asmKg: "검사 결과값", ft: "Ft", in: "In", asmLbs: "내부적으로 kg 변환" },
    buttons: { calculate: "계산", reset: "초기화", sample: "샘플 데이터 사용", copy: "결과 복사", copied: "복사됨" },
    result: {
      title: "골격근 지수",
      unit: "kg/m²",
      selectSex: "EWGSOP2 스타일 기준선({maleThreshold}/{femaleThreshold} kg/m²) 색상 비교를 보려면 성별을 선택하세요.",
      cutoff: "기준선 {threshold}",
      barNote: "막대는 시각 보조입니다. 기록·상담에는 상단 수치 자체를 사용하세요.",
    },
    interpret: {
      male: {
        below: { label: "일반 남성 컷오프 미만", detail: "EWGSOP2 스타일 기준 {threshold}kg/m² 미만입니다. 단독으로 근감소증 판정은 아닙니다." },
        atOrAbove: { label: "남성 컷오프 이상", detail: "같은 기준에서 {threshold}kg/m² 이상입니다. 그래도 근력·보행·일상 기능 정보를 함께 보아야 합니다." },
      },
      female: {
        below: { label: "일반 여성 컷오프 미만", detail: "{threshold}kg/m² 미만입니다. 여러 지침은 근력검사와 함께 해석합니다." },
        atOrAbove: { label: "여성 컷오프 이상", detail: "{threshold}kg/m² 이상이라도 모든 근력·이동성 문제가 배제되는 것은 아닙니다." },
      },
    },
    error: {
      enterMetric: "키와 사지 골격근량을 입력하세요.",
      usePlainNumbers: "숫자만 입력하세요(소수 가능).",
      positive: "키와 근육량은 0보다 커야 합니다.",
      enterUsHeight: "키(ft/in)를 입력하세요.",
      enterUsAsm: "사지 골격근량(lb)을 입력하세요.",
      nonNegativeHeight: "키는 음수일 수 없습니다.",
      tinyHeight: "키 제곱 계산이 어려울 만큼 값이 작습니다.",
      unusableIndex: "이 조합으로는 유효한 지수가 계산되지 않습니다.",
    },
    toast: { cleared: "초기화됨", sampleLoaded: "샘플 값을 채웠습니다", copied: "복사됨", copyFailed: "복사가 완료되지 않았습니다" },
  },
};
