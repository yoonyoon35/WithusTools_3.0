export const healthEn = {
  health: {
    h1: "Health Tools",
    subtitle: "BMI, body shape, muscle index, calories, and tape body fat",
    intro:
      "Tape-based and formula-based estimates only—not medical devices. For pure math (averages, GPA, percentages), use",
    guideTitle: "Health Tools guide",
    guideIntro:
      "Need unit conversion first? Try Unit Converter. For scheduling, see Time Tools.",
    sections: [
      {
        title: "1. How do I pick a tool?",
        type: "ordered",
        items: [
          "Choose the tool that matches what you measured today: BMI from height and weight, WHR from two tape lines, Navy body fat from neck and waist (and hip for women), and so on.",
          "Read the short disclaimer on each page—tape and formula estimates are not lab results.",
          "Switch tools from this hub when you want a different angle on the same numbers (for example BMI plus waist context).",
        ],
      },
      {
        title: "2. Where do the numbers run?",
        type: "paragraphs",
        items: [
          "Every tool runs locally in your browser; nothing is sent to a server for processing.",
          "Each page documents its own equations so you can line results up with a print-out from a clinic or device.",
        ],
      },
      {
        title: "3. What belongs in this category?",
        type: "paragraphs",
        items: [
          "These calculators sit next to but separate from general math calculators so people browsing for grades or percentages are not mixed in with body metrics.",
          "If something looks off, re-measure with the same posture and tape tension before chasing a new programme.",
        ],
      },
      {
        title: "4. Practical perks",
        type: "unordered",
        items: [
          "No account wall.",
          "Mobile-friendly layouts shared with the rest of WithusTools.",
          "Copy buttons where you need to paste numbers into notes or email.",
        ],
      },
      {
        title: "5. Typical uses",
        type: "unordered",
        items: [
          "Double-checking paperwork before a consult.",
          "Classroom demos on how indices are normalised.",
          "Rough tracking when you already own a tape measure and nothing else.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is Health split from Calculator Tools?",
        answer:
          "Calculator Tools stays focused on grades, stats, percentages, and programmer math. Health pages collect body-composition and energy estimates in one category so filters and related links stay on-topic.",
      },
      {
        question: "Which tool should I open first?",
        answer:
          "If you only have height and weight, start with BMI. If you have a body-composition print-out with appendicular muscle mass, use skeletal muscle index. For maintenance calories after you know your activity level, use BMR and TDEE.",
      },
      {
        question: "Do these replace a doctor or dietitian?",
        answer:
          "No. They are educational calculators. Use professional guidance for diagnosis, prescriptions, or training plans.",
      },
      {
        question: "Where did the old calculator URLs go?",
        answer:
          "Bookmarks under /tools/calculator/... for these five tools should redirect to the new /tools/health/... paths.",
      },
    ],
    backToHome: "← Back to home",
  },
  "health.bmi-calculator": {
    h1: "BMI Calculator",
    subtitle: "Online BMI calculator with metric and US units",
    guideTitle: "BMI Calculator Guide",
    sections: [
      {
        title: "1. How can I calculate BMI and read weight categories on this page?",
        type: "ordered",
        items: [
          "Select Metric (kg/cm) or US Units (lbs/ft, in).",
          "Enter your height and weight in the appropriate fields.",
          "Click Calculate BMI to see your result and health category.",
        ],
      },
      {
        title: "2. How does this BMI calculator use height and weight in metric or imperial units?",
        type: "paragraphs",
        items: [
          "BMI = Weight ÷ Height². Metric: kg/(m²). US: (Weight lbs × 703) ÷ Height in².",
          "Categories: Underweight (<18.5), Normal (18.5–24.9), Overweight (25–29.9), Obese (30–34.9), Severely obese (≥35). See the reference table below the calculator for details.",
        ],
      },
      {
        title: "3. What is BMI, and what are its limits for judging health?",
        type: "paragraphs",
        items: [
          "Free online BMI calculator for health assessment. Calculate your Body Mass Index with metric or imperial units. Results include health category classification.",
          "Note: BMI does not reflect body composition, skeletal structure, age, or other individual factors.",
        ],
      },
      {
        title: "4. Why check BMI with a private in-browser calculator?",
        type: "unordered",
        items: [
          "Dual unit support: Metric and US units.",
          "Visual scale showing your position.",
          "Health category with recommendations.",
          "All calculations run locally in your browser.",
        ],
      },
      {
        title: "5. When is BMI screening used alongside other health information?",
        type: "unordered",
        items: [
          "Health screening and body composition assessment.",
          "Fitness goals and weight management.",
          "Research, studies, and population health.",
          "Personal health monitoring.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I calculate BMI and read weight categories on this page?",
        answer:
          "Choose unit mode, enter height and weight, and run the calculation to see BMI and category.",
      },
      {
        question: "How does this BMI calculator use height and weight in metric or imperial units?",
        answer:
          "It applies the standard BMI formulas for metric and US unit systems and converts values consistently.",
      },
      {
        question: "What is BMI, and what are its limits for judging health?",
        answer:
          "BMI is a screening ratio of weight to height squared. It is useful for trends but does not replace full health assessment.",
      },
      {
        question: "Why check BMI with a private in-browser calculator?",
        answer:
          "It gives quick results while keeping your values local to your browser session.",
      },
      {
        question: "When is BMI screening used alongside other health information?",
        answer:
          "It is commonly used in routine tracking, fitness planning, and population-level health checks.",
      },
    ],
    reference: {
      title: "How BMI is calculated",
      paragraphs: [
        "BMI (Body Mass Index) compares weight to height squared. It is a screening tool, not a diagnosis of body fat or health.",
        "Metric: height in meters h, weight in kilograms w.",
        "Example: 70 kg and 1.70 m → BMI = 70 ÷ (1.70 × 1.70) ≈ 24.2.",
        "US customary: total height in inches H, weight in pounds W. The factor 703 converts lb/in² to the same kg/m² scale.",
        "This matches what this calculator uses when you choose US Units (feet and inches are combined into total inches before squaring).",
        "Cutoffs follow common WHO / CDC-style ranges for adults. Weight limits for each category depend on your height—same BMI always means the same ratio of weight to height², not the same weight for everyone.",
        "If height is h meters: weight (kg) = BMI × h². In US units: weight (lbs) = (BMI × H²) ÷ 703. At 170 cm (1.70 m), the \"normal\" band is roughly 53.5–72.0 kg; at 5 ft 10 in (70 in), roughly 129–174 lbs for BMI 18.5–24.9.",
      ],
      formulas: ["BMI = w ÷ h² (units: kg/m²)", "BMI = (W × 703) ÷ H²"],
      tables: [
        {
          title: "Adult categories (this calculator)",
          columns: ["Category", "BMI range", "Weight vs height (summary)", "Description"],
          rows: [
            [
              "Underweight",
              "< 18.5",
              "Below 18.5 × h² (kg) or (18.5 × H²) ÷ 703 (lbs)",
              "May indicate low body weight for height. Discuss with a clinician if unintended or concerning.",
            ],
            [
              "Normal weight",
              "18.5 – 24.9",
              "Between lower and upper bound using 18.5 and 24.9 with your h or H",
              "Associated with the broad \"healthy weight\" range for many adults; still only one screening measure.",
            ],
            [
              "Overweight",
              "25.0 – 29.9",
              "From 25 × h² up to just under 30 × h² (same idea in lbs with H)",
              "Higher weight for height; may warrant lifestyle discussion or further assessment—not a judgment of health by itself.",
            ],
            [
              "Obese",
              "30.0 – 34.9",
              "Often called class I obesity in clinical charts",
              "Substantially elevated BMI; risk factors vary by person; professional guidance is often recommended.",
            ],
            [
              "Severely obese",
              "≥ 35",
              "Class II/III obesity in many systems (e.g. 35–39.9, ≥ 40)",
              "This tool groups all BMI ≥ 35 here; finer classes exist in medical references.",
            ],
          ],
        },
      ],
      notesTitle: "Good to know",
      notes: [
        "BMI does not distinguish muscle from fat; very muscular people can have a high BMI without high body fat.",
        "It may be less informative for some older adults, children (use age-specific percentiles), and during pregnancy.",
        "Ethnicity and other factors sometimes lead guidelines to use different cutoffs (e.g. for diabetes risk)—this page uses the standard adult ranges above.",
        "Waist circumference, diet, activity, blood pressure, and lab values add context that BMI alone cannot provide.",
      ],
    },
  },
  "health.bmr-tdee-calculator": {
    h1: "BMR and TDEE",
    subtitle: "Mifflin–St Jeor BMR, then activity-based total daily burn",
    guideTitle: "Quick guide",
    sections: [
      {
        title: "1. What do I fill in first?",
        type: "ordered",
        items: [
          "Choose male or female, enter age, height, and weight in either metric or US units.",
          "Select the activity row that matches an ordinary week—not a vacation or a competition taper.",
          "Hit Calculate or pause typing; the page recalculates after a short delay whenever inputs change.",
        ],
      },
      {
        title: "2. What math runs here?",
        type: "paragraphs",
        items: [
          "BMR uses the Mifflin–St Jeor formula with weight in kilograms, height in centimetres, and age in years.",
          "TDEE multiplies that BMR by one of five activity factors (1.2 through 1.9) borrowed from common sports-nutrition tables.",
        ],
      },
      {
        title: "3. Why might my wearable disagree?",
        type: "paragraphs",
        items: [
          "Every predictive equation spreads error. Two people with identical stats can differ in thyroid meds, genetics, sleep debt, and non-exercise movement.",
          "Calorimetry in a lab beats any website; treat the output as a starting number you adjust with two to four weeks of real-world weight trend.",
        ],
      },
      {
        title: "4. Why use an in-browser calculator?",
        type: "unordered",
        items: [
          "Mifflin–St Jeor tends to track indirect calorimetry a bit better than the older Harris–Benedict rewrite for many modern adults.",
          "Activity multipliers are spelled out next to each radio option so you are not guessing what “moderate” means in isolation.",
          "Nothing leaves the tab: no account wall, no PDF export chain.",
        ],
      },
      {
        title: "5. Typical uses",
        type: "unordered",
        items: [
          "Setting a rough calorie target before you talk it through with a dietitian or coach.",
          "Teaching students where the 10 × weight + 6.25 × height − 5 × age pattern comes from.",
          "Sanity-checking numbers from a spreadsheet or app that does not show its work.",
        ],
      },
    ],
    faq: [
      {
        question: "Why Mifflin–St Jeor instead of Harris–Benedict?",
        answer:
          "Mifflin–St Jeor is the equation many dietetics handouts switched to in the 1990s onward because pooled studies often showed slightly better agreement with measured resting energy in non-elderly adults. Harris–Benedict still appears in older software.",
      },
      {
        question: "Is TDEE the same as maintenance calories?",
        answer:
          "Roughly, yes—here TDEE means “about what you would eat to stay near the same weight at this activity level.” Weight would still drift from water, sodium, and cycle timing even if calories matched perfectly.",
      },
      {
        question: "What if I work out hard but sit the rest of the day?",
        answer:
          "Pick the row that reflects the whole day, not only the gym hour. Some people split the difference between Light and Moderate; this tool forces one multiplier so you stay consistent week to week.",
      },
      {
        question: "Can I use this while pregnant or breastfeeding?",
        answer:
          "Not without medical guidance. Energy needs shift with trimester, fetal growth, milk output, and individual labs—none of which this form captures.",
      },
      {
        question: "Is this personalised medical nutrition?",
        answer:
          "No. It is arithmetic plus generic activity bands. Use it for education or ballpark planning, not as a prescription.",
      },
    ],
    reference: {
      title: "Equations on this page",
      paragraphs: [
        "Mifflin–St Jeor estimates resting metabolism—the calories you would burn lying quietly in a warm room after an overnight fast. It does not include digestion, fidgeting, or exercise.",
        "Symbols: w weight in kilograms, h height in centimetres, a age in years (this calculator floors decimals to a whole year before plugging in).",
        "TDEE is BMR × activity factor. Factors match the five-row list in the tool (1.2, 1.375, 1.55, 1.725, 1.9)—the same ladder many macro spreadsheets use, though labels vary slightly between authors.",
      ],
      formulas: ["Men: BMR = 10w + 6.25h − 5a + 5", "Women: BMR = 10w + 6.25h − 5a − 161"],
      tables: [
        {
          title: "Activity factors (reference)",
          columns: ["Label in the tool", "Multiplier", "Typical pattern"],
          rows: [
            ["Sedentary", "1.2", "Mostly sitting; little structured exercise."],
            ["Light", "1.375", "Light sessions or walking a few days each week."],
            ["Moderate", "1.55", "Planned training mid-week several times."],
            ["Active", "1.725", "Hard training or a physical job most days."],
            ["Very active", "1.9", "Near-daily intense work plus sport, or similar load."],
          ],
        },
      ],
      notesTitle: "Worth keeping in mind",
      notes: [
        "Older adults and people with major lean-mass loss sometimes need clinician-guided adjustments; predictive equations miss muscle mass unless you add body-composition data elsewhere.",
        "Medications, caffeine, stress, and room temperature can swing a measured resting metabolic rate by a few percent day to day.",
        "For weight-to-height screening without calories, the BMI calculator stays the lighter-weight option.",
      ],
    },
  },
  "health.body-fat-calculator": {
    h1: "Body fat (tape estimate)",
    subtitle: "U.S. Navy circumference method—not DXA or BIA",
    guideTitle: "Quick guide",
    sections: [
      {
        title: "1. What do I measure first?",
        type: "ordered",
        items: [
          "Select male or female, then enter standing height, neck at the narrowest point, and waist at the navel (Navy-style horizontal tape).",
          "Women also enter hip girth at the widest part of the buttocks—the female Navy equation uses waist plus hip minus neck inside a logarithm.",
          "Pick metric or US units and wait a moment after typing; the estimate updates on a short delay like the other calculators here.",
        ],
      },
      {
        title: "2. What math runs here?",
        type: "paragraphs",
        items: [
          "The tool converts everything to inches, applies the published Navy logarithmic coefficients, then shows percent body fat to one decimal.",
          "The coloured chip under the percentage maps loosely to ACE-style population bands; those bands are only a visual aid, not part of the Navy math.",
        ],
      },
      {
        title: "3. Why might this disagree with a scan?",
        type: "paragraphs",
        items: [
          "DXA splits fat, lean, and bone by X-ray attenuation. BIA predicts water compartments with electricity. A tape cannot see visceral fat directly, so disagreement of several percentage points is normal.",
          "Age is not an input here because the classic Navy tape equations do not include an age term. Older adults and very muscular people are exactly where tape methods drift most.",
        ],
      },
      {
        title: "4. Why use a browser-only tool?",
        type: "unordered",
        items: [
          "No scale beyond a tape and no server upload.",
          "Same worksheet layout as the rest of the calculator hub so you are not learning a new UI pattern.",
          "Copy button pastes the headline percentage and the informal category label for quick notes.",
        ],
      },
      {
        title: "5. Typical uses",
        type: "unordered",
        items: [
          "Checking whether your hand math matches what a recruiter or trainer wrote on a form.",
          "Seeing how sensitive the percentage is when you move the waist tape up or down an inch.",
          "Teaching students why circumference models and scanner models rarely match line for line.",
        ],
      },
    ],
    faq: [
      {
        question: "Why might this number disagree with my gym scale or DEXA report?",
        answer:
          "The Navy method only sees circumferences. BIA scales infer water; DEXa partitions tissue by X-ray. Each system has its own bias. Expect several points of spread, sometimes more, rather than perfect agreement.",
      },
      {
        question: "Does this page use age anywhere?",
        answer:
          "No. The standard Navy tape equations published for screening do not include age. Some newer research models add age, but we stuck to the widely reproduced Navy form so the result is easy to audit.",
      },
      {
        question: "Where exactly should I put the waist tape?",
        answer:
          "Navy instructions call for a horizontal measurement at the navel with relaxed abdominals. Natural waist or narrowest point is a different site and will change the percentage.",
      },
      {
        question: "Can bodybuilders use this?",
        answer:
          "They can type numbers in, but very large necks and lean waists can push the logarithmic formula into odd territory. Dense muscle breaks the assumptions the regression was trained on.",
      },
      {
        question: "Is this medical advice?",
        answer:
          "No. It is arithmetic on circumferences plus informal chart wording. Use professional guidance for training, disease risk, or prescriptions.",
      },
    ],
    reference: {
      title: "Equations (log base 10, inches inside the log)",
      paragraphs: [
        "Published Navy screening forms list coefficients for men and women. This page converts your centimetres or feet and inches into total height in inches, converts metric circumferences to inches, then evaluates the same expressions you would find in a PDF of the instructions.",
        "log10 means base-10 logarithm, same as in the code.",
        "Waist is abdomen at the navel; hip is the maximal buttock breadth; neck is minimal circumference; height is barefoot. If waist minus neck (men) or waist plus hip minus neck (women) is not clearly positive, the logarithm is undefined— the calculator stops with an error instead of inventing a number.",
        "The label colours borrow loose buckets similar to ACE reference material (for example athlete, fitness, average ranges). They are here so you have language to talk about a percentage band—they are not returned by the Navy formula and they are not clinical classes.",
      ],
      formulas: [
        "Men: BF% = 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76",
        "Women: BF% = 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387",
      ],
      tables: [],
      notesTitle: "Good to know",
      notes: [
        "BIA can swing with hydration; DEXA costs money and still has slice thickness assumptions; underwater weighing is rare. Tape is cheap but blunt—honesty about that trade-off matters more than pretending three circumferences equal a scan.",
        "If you already have a reliable BIA or DEXA number you trust, treat this page as a second opinion for curiosity, not a tie-breaker.",
        "For waist-to-hip patterning without percent fat, see the waist-to-hip ratio calculator. For weight versus height only, use BMI.",
      ],
    },
  },
  "health.waist-hip-ratio-calculator": {
    h1: "Waist-to-hip ratio",
    subtitle: "Waist and hip circumferences, ratio, and optional chart-style notes",
    guideTitle: "Quick guide",
    sections: [
      {
        title: "1. How do I measure and type the numbers?",
        type: "ordered",
        items: [
          "Stand relaxed, feet together, clothing light. Run the tape horizontally around the waist at the narrowest point and around the hips at the widest point.",
          "Type both numbers in centimetres or both in inches—mixing units on purpose is not supported, but the ratio would be the same if you did the conversion yourself.",
          "Pick male or female if you want the WHR colour band and the extra waist-only sentence that lines up with common chart values.",
        ],
      },
      {
        title: "2. What is being calculated?",
        type: "paragraphs",
        items: [
          "WHR is simply waist circumference divided by hip circumference. The value has no units because inches cancel inches (or cm cancel cm).",
          "Waist-only sentences on this page use the 94 / 102 cm (men) and 80 / 88 cm (women) bands that show up a lot in Europid-oriented metabolic risk summaries—not the tighter Asian thresholds some countries publish separately.",
        ],
      },
      {
        title: "3. How far can I trust a single reading?",
        type: "paragraphs",
        items: [
          "WHR tells you something about fat pattern—more around the trunk versus more around the hips. It does not read liver fat, blood sugar, or fitness.",
          "A single home measurement can be off by a centimetre or two depending on posture; trend your own numbers the same way each week if you are tracking.",
        ],
      },
      {
        title: "4. Why run it in the browser?",
        type: "unordered",
        items: [
          "No upload, no account: the arithmetic stays in your browser.",
          "You get WHR plus a plain-language waist note when sex is set, so you are not flipping between two different tabs.",
          "Copy button pastes waist, hip, ratio, and the headline label in one block of text.",
        ],
      },
      {
        title: "5. Who tends to open a page like this?",
        type: "unordered",
        items: [
          "Nurses, trainers, or students checking homework against textbook examples.",
          "Anyone comparing their tape numbers with what a GP or dietitian already wrote down.",
          "Quick what-if when clothing size changed but weight on the scale barely moved.",
        ],
      },
    ],
    faq: [
      {
        question: "Why does WHO talk about 0.90 for men and 0.85 for women?",
        answer:
          "Those are widely repeated WHR values where central fat distribution tends to correlate more often with cardiometabolic risk in large population studies. They are screening hints, not personal diagnoses.",
      },
      {
        question: "What is the difference between WHR and waist circumference alone?",
        answer:
          "WHR adjusts for bone structure and hip width. Waist alone ignores hip size, which is why charts often list both. This calculator shows WHR first and then adds a waist sentence when sex is selected.",
      },
      {
        question: "Can I use a cloth tape from a sewing kit?",
        answer:
          "Yes, if it is non-stretchy and you keep it level all the way around. Metal tapes from the hardware store are awkward on curves.",
      },
      {
        question: "My ratio is high but I lift weights—should I worry?",
        answer:
          "Dense muscle around the midsection can nudge waist up without much visceral fat. That is why context from sport, diet, sleep, and labs still matters more than one ratio.",
      },
      {
        question: "Is this page medical advice?",
        answer:
          "No. It only performs division and maps numbers to commonly quoted reference bands. A clinician who knows you beats any online form.",
      },
    ],
    reference: {
      title: "Definitions used here",
      paragraphs: [
        "Waist-to-hip ratio compares two tape measurements. Researchers like it because it tracks upper-body fat pattern a little better than BMI alone, though it still misses muscle vs fat inside the abdomen.",
        "Example: 80 cm waist and 100 cm hip → WHR = 0.800. The same ratio appears if you type 31.5 in and 39.37 in, because both numbers scale by the same inch-to-cm factor.",
        "The colour chip compares your ratio to above 0.90 for men and above 0.85 for women—the pair most often named alongside WHO waist-circumference guidance. At or on the line counts as the lower-risk side of that split in this tool.",
        "When sex is set, the calculator converts your waist to centimetres (if needed) and compares it to 94 / 102 cm for men and 80 / 88 cm for women—again the Europid-oriented pair that shows up beside WHO metabolic risk material. South Asian and Japanese guidelines sometimes start at lower centimetre cut-offs; follow your local sheet if it disagrees.",
      ],
      formulas: ["WHR = waist ÷ hip (same unit top and bottom)"],
      tables: [
        {
          title: "WHR reference values by sex",
          columns: ["Sex", "WHR threshold (this page)", "How we phrase it"],
          rows: [
            [
              "Male",
              "> 0.90",
              "Above counts as the higher-pattern side; equal or below is the other chip colour.",
            ],
            [
              "Female",
              "> 0.85",
              "Same logic: on the number or lower is treated as the lower side of that WHO-style split.",
            ],
          ],
        },
      ],
      notesTitle: "Good to know",
      notes: [
        "Pregnancy, bloating, or fluid retention can widen the waist tape without changing long-term fat stores much.",
        "Very wide hips mechanically lower WHR even when waist fat is not low—another reason the ratio is only one window.",
        "For height-and-weight screening, the BMI calculator and the skeletal muscle index tool answer different questions; none of them replace labs or a physical exam.",
      ],
    },
  },
  "health.skeletal-muscle-index-calculator": {
    h1: "Skeletal muscle index",
    subtitle: "ASM ÷ height² (kg/m²), with optional sex-specific cut-offs",
    guideTitle: "Quick guide",
    sections: [
      {
        title: "1. What do I type in?",
        type: "ordered",
        items: [
          "Grab appendicular skeletal muscle mass (ASM) from a BIA or DXA print-out—arms and legs combined, not whole-body lean mass.",
          "Enter height and ASM in either metric or US units, then hit Calculate (or wait a beat; it updates after you stop typing).",
          "Choose male or female if you want the usual 7.0 / 5.5 kg/m² comparison lines; leave sex on Skip if you only need the raw index.",
        ],
      },
      {
        title: "2. What formula runs under the hood?",
        type: "paragraphs",
        items: [
          "SMI = ASM ÷ height², with height in metres and ASM in kilograms. The result is always expressed as kg/m².",
          "US mode converts feet and inches to metres and pounds to kilograms before the same division runs.",
        ],
      },
      {
        title: "3. How seriously should I take the colour band?",
        type: "paragraphs",
        items: [
          "Clinicians rarely diagnose sarcopenia from a single index. EWGSOP2, for example, pairs low muscle quantity with strength or performance tests.",
          "Different machines and software builds do not always agree to the last decimal. Treat this page as a double-check, not a replacement for the lab or physician who ordered the test.",
        ],
      },
      {
        title: "4. Why use a browser-only tool?",
        type: "unordered",
        items: [
          "No account, no server round-trip: numbers stay in your tab.",
          "Handles mixed US height with metric muscle mass if you flip modes instead of juggling converters elsewhere.",
          "Copy button hands you a plain-text line you can paste into notes or email.",
        ],
      },
      {
        title: "5. Typical situations",
        type: "unordered",
        items: [
          "Comparing your printed SMI to what you get when you recompute from ASM and height.",
          "Students or staff learning how body-composition indices are normalised to height.",
          "Rough tracking after resistance training when repeat scans exist—always same device vendor when possible.",
        ],
      },
    ],
    faq: [
      {
        question: "What exactly is appendicular skeletal muscle mass?",
        answer:
          "It is the estimated skeletal muscle in both arms and both legs. Whole-body lean mass also counts trunk fluid and other lean tissue, so do not substitute that larger figure here.",
      },
      {
        question: "Where do the 7.0 and 5.5 kg/m² numbers come from?",
        answer:
          "They follow the appendicular muscle mass index thresholds widely quoted from the EWGSOP2 sarcopenia update for men and women. Local guidelines or Asian consensus statements sometimes tweak numbers or add strength criteria.",
      },
      {
        question: "My InBody sheet already lists SMI. Why bother recalculating?",
        answer:
          "Handy when you distrust a typo, switch units mentally, or want the same formula spelled out on screen before you discuss the print-out with someone else.",
      },
      {
        question: "Does a high SMI mean I am in perfect shape?",
        answer:
          "Not necessarily. It is a mass-for-height ratio. Hydration shifts BIA readings; DXA has its own assumptions. Athletic people can look different on paper than sedentary people with the same index.",
      },
      {
        question: "Is this medical advice?",
        answer:
          "No. It is a calculator. Use it for education or quick checks, and lean on qualified professionals for interpretation and treatment decisions.",
      },
    ],
    reference: {
      title: "How the index is defined",
      paragraphs: [
        "Researchers and device manuals usually define skeletal muscle index (in this appendicular sense) as appendicular skeletal muscle mass in kilograms divided by standing height in metres, squared. Units end up as kg/m²—superficially like BMI, but the numerator is limb muscle, not total body weight.",
        "Example: ASM 30.0 kg at 1.75 m tall → 30 ÷ (1.75 × 1.75) ≈ 9.8 kg/m². If you only know height in centimetres, divide by 100 first.",
        "US height input on this page is converted to metres for you (total inches × 0.0254). Muscle mass entered in pounds is converted to kilograms before the division.",
        "The 2019 European Working Group on Sarcopenia in Older People (EWGSOP2) paper gives < 7.0 kg/m² for men and < 5.5 kg/m² for women as indicative low appendicular muscle mass when paired with other clinical findings. Those thresholds assume ASM from standardised BIA or DXA pipelines—not a bathroom scale body-fat guess.",
      ],
      formulas: ["SMI = ASMkg ÷ h² (h in metres)"],
      tables: [
        {
          title: "Sex-specific appendicular muscle index thresholds",
          columns: ["Sex (comparison mode)", "Cut-off on this page", "Plain-language note"],
          rows: [
            [
              "Male",
              "< 7.0 kg/m²",
              "Flagged as below the published male threshold; not an automatic sarcopenia label.",
            ],
            [
              "Female",
              "< 5.5 kg/m²",
              "Same idea for the female threshold—context from gait, grip, and history still matters.",
            ],
          ],
        },
      ],
      notesTitle: "Good to know",
      notes: [
        "Some Asian consensus documents adjust cut-offs or add calf circumference and chair-stand tests. If your clinic follows one of those systems, defer to their handout.",
        "Oedema, metal implants, and very different hydration states can shift BIA-derived ASM more than people expect.",
        "Athletes with large arms and legs can sit above the cut-offs yet still be injured; frail individuals sometimes sit near the line while feeling weak for other reasons.",
        "For a complementary height-and-weight screen, try the BMI calculator—it answers a different question entirely.",
      ],
    },
  },
};

export const healthUiEn = {
  bmi: {
    title: "Calculate Your BMI",
    unit: { metric: "Metric", us: "US Units" },
    labels: {
      heightCm: "Height (cm)",
      weightKg: "Weight (kg)",
      heightFt: "Height (ft)",
      heightIn: "Height (in)",
      weightLbs: "Weight (lbs)",
    },
    placeholders: {
      height: "Enter height",
      weight: "Enter weight",
      feet: "Feet",
      inches: "Inches",
    },
    buttons: {
      calculate: "Calculate BMI",
      reset: "Reset",
      sample: "Use sample data",
      copy: "Copy results",
      copied: "Copied!",
    },
    result: {
      title: "Your BMI Result",
      labels: { underweight: "Underweight", normal: "Normal", overweight: "Overweight", obese: "Obese" },
      normalRecommended: "Normal (Recommended)",
      recommendedRange: "Recommended weight range:",
      note: "Note: BMI does not reflect body composition, skeletal structure, age, or other individual factors.",
    },
    category: {
      underweight: "Underweight",
      normalWeight: "Normal Weight",
      overweight: "Overweight",
      obese: "Obese",
      severelyObese: "Severely Obese",
    },
    error: {
      enterBoth: "Please enter both height and weight",
      enterValid: "Please enter valid numbers",
      positive: "Height and weight must be positive numbers",
      enterHeightUs: "Please enter height (feet and/or inches)",
      enterWeight: "Please enter weight",
      nonNegativeHeight: "Height must not be negative",
      invalidCalculation: "Invalid calculation",
    },
    toast: {
      cleared: "Cleared",
      sampleLoaded: "Sample data loaded",
      copied: "Results copied to clipboard",
      copyFailed: "Copy failed",
    },
    aria: {
      calculate: "Calculate BMI",
      reset: "Reset all inputs and results",
      sample: "Load sample data",
      copy: "Copy results to clipboard",
      resultRegion: "BMI calculation results",
      scale: "BMI scale from 16 to 35 with recommended range 18.5 to 25",
      heightCm: "Height in centimeters",
      weightKg: "Weight in kilograms",
      heightFt: "Height in feet",
      heightIn: "Height in inches",
      weightLbs: "Weight in pounds",
    },
  },
  bmrTdee: {
    title: "BMR and TDEE",
    intro:
      "BMR is an estimate of calories burned at complete rest. TDEE multiplies BMR by an activity factor so you get a rough maintenance budget. Both numbers are models, not lab measurements.",
    sex: { legend: "Sex", male: "Male", female: "Female" },
    age: { label: "Age (years)", placeholder: "e.g. 34" },
    unit: { metric: "Metric", us: "US units" },
    labels: {
      heightCm: "Height (cm)",
      weightKg: "Weight (kg)",
      heightFt: "Height (ft)",
      heightIn: "Height (in)",
      weightLbs: "Weight (lbs)",
    },
    placeholders: {
      heightCm: "e.g. 175",
      weightKg: "e.g. 73",
      ft: "Ft",
      in: "In",
      lbs: "lbs",
    },
    activity: {
      legend: "Activity level",
      hint: "Pick the row that best matches the last few typical weeks, not a single heroic day.",
      sedentary: {
        label: "Sedentary",
        detail: "Little or no structured exercise; mostly sitting.",
      },
      light: {
        label: "Light",
        detail: "Light workouts or brisk walks about one to three days a week.",
      },
      moderate: {
        label: "Moderate",
        detail: "Planned exercise roughly three to five days a week.",
      },
      active: {
        label: "Active",
        detail: "Hard training or a physical job most days—six or seven days a week.",
      },
      veryActive: {
        label: "Very active",
        detail: "Athlete-style schedule or heavy labour plus evening sessions.",
      },
    },
    buttons: {
      calculate: "Calculate",
      reset: "Reset",
      sample: "Use sample data",
      copy: "Copy results",
      copied: "Copied",
    },
    result: {
      bmr: "Estimated BMR",
      tdee: "Estimated TDEE",
      kcalDay: "kcal/day",
      maintenance: "kcal/day (maintenance)",
      summary:
        "TDEE here is BMR × {factor} ({activity}). Small daily tweaks—steps, fidgeting, sleep—can swing real burn by a few hundred calories either way.",
    },
    error: {
      pickSex: "Pick male or female—the Mifflin–St Jeor coefficients differ.",
      enterAge: "Enter age in whole years.",
      ageRange: "This form is aimed at adults roughly 15–100 years old.",
      enterMetric: "Enter height (cm) and weight (kg).",
      enterUsHeight: "Enter height in feet and/or inches.",
      enterUsWeight: "Enter weight in pounds.",
      usePlainNumbers: "Use plain numbers (decimals allowed).",
      positive: "Height and weight need to be greater than zero.",
      nonNegativeHeight: "Height cannot be negative.",
      unrealisticBmr: "That combination gives an unrealistic BMR—please re-check the inputs.",
    },
    toast: {
      cleared: "Cleared",
      sampleLoaded: "Sample values filled in",
      copied: "Copied",
      copyFailed: "Copy did not go through",
    },
  },
  bodyFat: {
    title: "Body fat (tape estimate)",
    warningTitle: "Not a lab value.",
    warningBody:
      "This page uses the U.S. Navy circumference equations. Numbers from DXA, BIA, or underwater weighing often sit several points away—sometimes more—because they measure different things with different errors. Use this as a rough tape-based guess, not a diagnosis.",
    intro:
      "Neck: slimmest point, standing tall. Waist: around the abdomen at navel level (Navy protocol). Hip (women only): widest part of the hips. Height: barefoot standing height.",
    sex: { legend: "Sex", male: "Male", female: "Female" },
    unit: { metric: "Metric", us: "US units" },
    labels: {
      heightCm: "Height (cm)",
      neckCm: "Neck (cm)",
      waistCm: "Waist at navel (cm)",
      hipCm: "Hip (cm)",
      heightFt: "Height (ft)",
      heightIn: "Height (in)",
      neckIn: "Neck (in)",
      waistIn: "Waist at navel (in)",
      hipIn: "Hip (in)",
    },
    placeholders: {
      heightCm: "e.g. 178",
      neckCm: "Slimmest point",
      waistCm: "Abdomen",
      hipCm: "Widest hips",
      ft: "Ft",
      in: "In",
      neckIn: "Neck",
      waistIn: "Waist",
      hipIn: "Widest hips",
    },
    buttons: {
      calculate: "Calculate",
      reset: "Reset",
      sample: "Use sample data",
      copy: "Copy results",
      copied: "Copied",
    },
    result: {
      title: "Estimated body fat",
      method: "U.S. Navy tape method",
      chartNote:
        "Chart bands are informal ACE-style buckets for context—they are not part of the Navy equation itself.",
    },
    interpret: {
      male: {
        veryLow: {
          label: "Very low for most men",
          detail:
            "Below the usual athlete band on many charts. Extremely low readings can reflect measurement error or medical context—this app does not judge either way.",
        },
        athlete: {
          label: "Athlete band (ACE-style chart)",
          detail:
            "Roughly the 6–13% bucket used in a lot of trainer handouts. Tape Navy math is not the same as a DEXA scan.",
        },
        fitness: {
          label: "Fitness band",
          detail:
            "Often labelled fitness on the same ACE-style reference. Still only a circumference model.",
        },
        average: {
          label: "Average band",
          detail:
            "Broad middle bucket on many population charts. Waist position and posture move this number easily.",
        },
        aboveAverage: {
          label: "Above average band on chart",
          detail:
            "Often grouped with higher adiposity patterns on tape-based charts—not a medical label by itself.",
        },
      },
      female: {
        veryLow: {
          label: "Very low for most women",
          detail:
            "Below the usual athlete band on many charts. Hormones, bone structure, and where you sit the neck tape all shift this.",
        },
        athlete: {
          label: "Athlete band (ACE-style chart)",
          detail: "Roughly 14–20% on common trainer charts. Still not interchangeable with BIA or DXA.",
        },
        fitness: {
          label: "Fitness band",
          detail: "Typical fitness bucket on the same loose reference. One snapshot, not a trend line.",
        },
        average: {
          label: "Average band",
          detail: "Middle band on many published female ranges. Tape slack alone can swing a point or two.",
        },
        aboveAverage: {
          label: "Above average band on chart",
          detail:
            "Higher bucket on chart-based summaries—talk to a clinician if health questions are on your mind.",
        },
      },
    },
    error: {
      pickSex: "Pick male or female—the Navy tape equations differ.",
      enterMetricBase:
        "Enter height, neck, and waist (abdomen at navel per Navy-style instructions).",
      femaleNeedsHipMetric: "Women need a hip circumference as well—widest part of the buttocks.",
      usePlainNumbers: "Use plain numbers (decimals allowed).",
      hipPositive: "Hip needs to be a positive number.",
      positiveBase: "Height, neck, and waist must be greater than zero.",
      enterUsHeight: "Enter standing height in feet and/or inches.",
      enterUsBase: "Enter neck and waist in inches.",
      femaleNeedsHipUs: "Women need hip circumference in inches.",
      heightRange: "Height looks out of range after conversion—double-check units.",
      maleConstraint:
        "Waist must be clearly larger than neck for the male Navy formula (check tape sites).",
      femaleConstraint: "Waist plus hip must exceed neck for the female Navy formula.",
      unrealistic:
        "That combination gives an unrealistic percentage—re-check measurements (Navy expects navel-level waist, standing straight).",
    },
    toast: {
      cleared: "Cleared",
      sampleLoaded: "Sample values filled in",
      copied: "Copied",
      copyFailed: "Copy did not go through",
    },
  },
  whr: {
    title: "Waist, hip, and ratio",
    intro:
      "Measure waist at the narrowest spot between ribs and hip bone, usually after a normal breath out. Measure hips at the widest part of the buttocks. Keep the tape snug but not digging in; stand with feet together.",
    sex: { legend: "Sex (for WHR and waist bands)", male: "Male", female: "Female", skip: "Skip" },
    unit: { metric: "Metric (cm)", us: "US (in)" },
    labels: {
      waistCm: "Waist (cm)",
      hipCm: "Hip (cm)",
      waistIn: "Waist (in)",
      hipIn: "Hip (in)",
    },
    placeholders: { waistCm: "e.g. 82", hipCm: "e.g. 98", waistIn: "e.g. 32", hipIn: "e.g. 38.5" },
    buttons: {
      calculate: "Calculate",
      reset: "Reset",
      sample: "Use sample data",
      copy: "Copy results",
      copied: "Copied",
    },
    result: {
      title: "Waist-to-hip ratio",
      formula: "Waist ÷ hip (unitless)",
      selectSex:
        "Choose male or female for the coloured band and the waist-circumference note. WHR itself is already above.",
      waistContextTitle: "Waist circumference (chart context)",
      barCaption:
        "Bar shows where your WHR sits next to the common {threshold} reference for {sex}.",
    },
    interpret: {
      male: {
        above: {
          label: "Above the usual male WHR line",
          detail:
            "WHO materials often cite {threshold} as the point where waist-to-hip ratio in men tends to signal more central fat storage. It is a pattern marker, not a disease label.",
        },
        atOrBelow: {
          label: "At or below the usual male WHR line",
          detail:
            "Ratio is {threshold} or lower on that scale. Pear-shaped people can still have other risk factors; apple-shaped people above the line are not automatically unwell.",
        },
      },
      female: {
        above: {
          label: "Above the usual female WHR line",
          detail:
            "Many WHO summaries use {threshold} for women the same way they use {maleThreshold} for men. Hormones, bone width, and how tight the tape sits all nudge the number.",
        },
        atOrBelow: {
          label: "At or below the usual female WHR line",
          detail:
            "Ratio is {threshold} or lower on that reference. It does not replace blood pressure, lipids, or how you actually feel on a walk upstairs.",
        },
      },
    },
    waistBand: {
      male: {
        high:
          "Waist {waist} cm crosses the 102 cm band that many Europid-focused charts pair with higher metabolic risk (not a diagnosis on its own).",
        medium:
          "Waist {waist} cm sits in the 94–102 cm range where a lot of public-health charts tell men to pay closer attention, especially with other risk factors.",
        low:
          "Waist {waist} cm is under 94 cm on those broad Europid-style charts—useful context only if the tape was horizontal and mid-breath.",
      },
      female: {
        high:
          "Waist {waist} cm is at or above 88 cm on the same family of charts aimed at women—often bundled with WHR in research, not swapped for it.",
        medium:
          "Waist {waist} cm falls between 80 and 88 cm, where several guidelines flag women for a closer look when other risks exist.",
        low:
          "Waist {waist} cm is under 80 cm on those charts—still not a guarantee either way if the measurement was loose or clothing got in the way.",
      },
    },
    error: {
      enterMetric: "Enter both waist and hip circumference.",
      enterUs: "Enter both waist and hip in inches.",
      usePlainNumbers: "Use plain numbers (decimals allowed).",
      positive: "Circumferences need to be greater than zero.",
      unusableRatio: "That pair does not produce a usable ratio.",
    },
    toast: {
      cleared: "Cleared",
      sampleLoaded: "Sample values filled in",
      copied: "Copied",
      copyFailed: "Copy did not go through",
    },
  },
  smi: {
    title: "Skeletal muscle index",
    intro:
      "ASM is the sum of lean muscle in both arms and both legs from a body-composition report (BIA or DXA). This tool divides that mass by height squared—same definition most research papers use when they write \"kg/m²\" for appendicular muscle.",
    sex: { legend: "Sex (for cut-off comparison only)", male: "Male", female: "Female", skip: "Skip" },
    unit: { metric: "Metric", us: "US units" },
    labels: {
      heightCm: "Height (cm)",
      asmKg: "Appendicular skeletal muscle mass (kg)",
      heightFt: "Height (ft)",
      heightIn: "Height (in)",
      asmLbs: "Appendicular skeletal muscle mass (lb)",
    },
    placeholders: {
      heightCm: "e.g. 172",
      asmKg: "From your report",
      ft: "Ft",
      in: "In",
      asmLbs: "Converted to kg internally",
    },
    buttons: {
      calculate: "Calculate",
      reset: "Reset",
      sample: "Use sample data",
      copy: "Copy results",
      copied: "Copied",
    },
    result: {
      title: "Skeletal muscle index",
      unit: "kg/m²",
      selectSex:
        "Pick male or female above if you want the coloured band against the EWGSOP2-style thresholds ({maleThreshold} / {femaleThreshold} kg/m²).",
      cutoff: "Cut-off {threshold}",
      barNote:
        "Bar is a visual aid only; the printed number above is what you would log or show a clinician.",
    },
    interpret: {
      male: {
        below: {
          label: "Below usual male cut-off",
          detail:
            "Under {threshold} kg/m² on the EWGSOP2-style scale for appendicular muscle mass index—useful context, not a verdict on sarcopenia by itself.",
        },
        atOrAbove: {
          label: "At or above male cut-off",
          detail:
            "At least {threshold} kg/m² on that same reference scale. Still one number; grip strength, gait speed, and how you feel day to day carry more weight clinically.",
        },
      },
      female: {
        below: {
          label: "Below usual female cut-off",
          detail:
            "Under {threshold} kg/m² on the EWGSOP2-style scale. Many guidelines pair this with strength tests—don’t read it in isolation.",
        },
        atOrAbove: {
          label: "At or above female cut-off",
          detail:
            "At least {threshold} kg/m² on that reference scale. A higher index does not rule out every strength or mobility issue.",
        },
      },
    },
    error: {
      enterMetric: "Enter height and appendicular skeletal muscle mass.",
      usePlainNumbers: "Use plain numbers (decimals allowed).",
      positive: "Height and muscle mass need to be greater than zero.",
      enterUsHeight: "Enter height in feet and/or inches.",
      enterUsAsm: "Enter appendicular skeletal muscle mass in pounds.",
      nonNegativeHeight: "Height cannot be negative.",
      tinyHeight: "Height looks too small to square safely.",
      unusableIndex: "That combination does not produce a usable index.",
    },
    toast: {
      cleared: "Cleared",
      sampleLoaded: "Sample values filled in",
      copied: "Copied",
      copyFailed: "Copy did not go through",
    },
  },
};
