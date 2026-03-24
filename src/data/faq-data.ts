/**
 * FAQ content for /faq/[category]/[slug].
 * Add entries here; they are picked up by generateStaticParams.
 */

export type FaqCategory = "length" | "weight";

export interface FaqEntry {
  category: FaqCategory;
  slug: string;
  /** Primary unit for “all conversions from this unit” hub cards (LENGTH_HUB_KEYS). */
  hubUnitKey: string;
  question: string;
  directAnswer: string;
  detailedExplanation: string;
  relationshipContext: string;
  /** Full path, e.g. /tools/unit-converter/length/yard-to-feet */
  relatedConverterPath: string;
  /** Short label for CTA, e.g. "Yard to Feet" */
  relatedConverterLabel: string;
  tableFromKey: string;
  tableToKey: string;
  /** Lowercase names for meta description (Unit A / Unit B) */
  seoUnitA: string;
  seoUnitB: string;
  keywords?: string[];
}

export const FAQ_ENTRIES: FaqEntry[] = [
  {
    category: "length",
    slug: "how-many-feet-in-a-yard",
    hubUnitKey: "yd",
    question: "How many feet are in a yard?",
    directAnswer: "There are 3 feet in 1 yard.",
    detailedExplanation:
      "The yard is defined as exactly 3 feet in the US customary and imperial systems. When you convert yards to feet, multiply the number of yards by 3. When converting feet to yards, divide by 3. This ratio is exact and does not depend on the international yard’s meter definition.",
    relationshipContext:
      "Yards and feet are both imperial / US customary length units. Twelve inches equal one feet, and three feet make one yard. These relationships predate the metric system; today they are fixed relative to the meter (1 yd = 0.9144 m, 1 ft = 0.3048 m), so conversions between yards and feet remain exact integers.",
    relatedConverterPath: "/tools/unit-converter/length/yard-to-feet",
    relatedConverterLabel: "Yard to Feet",
    tableFromKey: "yd",
    tableToKey: "ft",
    seoUnitA: "yard",
    seoUnitB: "feet",
    keywords: ["feet in a yard", "yards to feet", "how many feet in a yard", "imperial length"],
  },
  {
    category: "length",
    slug: "how-many-inches-in-feet",
    hubUnitKey: "ft",
    question: "How many inches are in feet?",
    directAnswer: "There are 12 inches in 1 feet.",
    detailedExplanation:
      "There are 12 inches in one feet. To convert feet to inches, multiply by 12. To convert inches to feet, divide by 12. The inch is further defined as exactly 2.54 cm in the international system, which ties imperial units to SI lengths.",
    relationshipContext:
      "Inches and feet belong to the same imperial family: smaller measures use inches; larger everyday lengths use feet and yards. The 12-inches-per-feet rule is historically standard in English-speaking countries and is still used widely in construction and personal height in the US.",
    relatedConverterPath: "/tools/unit-converter/length/feet-to-inch",
    relatedConverterLabel: "Feet to Inch",
    tableFromKey: "ft",
    tableToKey: "in",
    seoUnitA: "inch",
    seoUnitB: "feet",
    keywords: ["inches in feet", "feet to inches", "12 inches in feet"],
  },
  {
    category: "length",
    slug: "how-many-centimeters-in-an-inch",
    hubUnitKey: "in",
    question: "How many centimeters are in an inch?",
    directAnswer: "There are exactly 2.54 centimeters in 1 inch.",
    detailedExplanation:
      "Since 1959, the international inch has been defined as exactly 2.54 centimeters. To convert inches to centimeters, multiply by 2.54. To convert centimeters to inches, divide by 2.54. This definition links imperial inches cleanly to the metric system.",
    relationshipContext:
      "The inch is US customary / imperial; the centimeter is metric (SI). Converting between them is common for screen sizes, tools, and body measurements when people need to switch between US and metric contexts.",
    relatedConverterPath: "/tools/unit-converter/length/inch-to-cm",
    relatedConverterLabel: "Inch to Centimeter",
    tableFromKey: "in",
    tableToKey: "cm",
    seoUnitA: "inch",
    seoUnitB: "centimeter",
    keywords: ["cm in an inch", "inch to cm", "2.54 cm per inch"],
  },
  {
    category: "length",
    slug: "how-many-millimeters-in-a-centimeter",
    hubUnitKey: "cm",
    question: "How many millimeters are in a centimeter?",
    directAnswer: "There are 10 millimeters in 1 centimeter.",
    detailedExplanation:
      "The metric system uses powers of ten. One centimeter is one hundredth of a meter, and one millimeter is one thousandth of a meter—so one centimeter equals 10 millimeters. Multiply centimeters by 10 to get millimeters; divide millimeters by 10 to get centimeters.",
    relationshipContext:
      "Both units are SI-derived metric lengths. Decimal relationships make mental math and scaling straightforward compared with mixed imperial fractions.",
    relatedConverterPath: "/tools/unit-converter/length/cm-to-mm",
    relatedConverterLabel: "Centimeter to Millimeter",
    tableFromKey: "cm",
    tableToKey: "mm",
    seoUnitA: "centimeter",
    seoUnitB: "millimeter",
    keywords: ["mm in a cm", "centimeter to millimeter", "10 mm per cm"],
  },
  {
    category: "length",
    slug: "how-many-meters-in-a-kilometer",
    hubUnitKey: "km",
    question: "How many meters are in a kilometer?",
    directAnswer: "There are 1,000 meters in 1 kilometer.",
    detailedExplanation:
      "The prefix kilo- means one thousand. One kilometer is 1,000 meters. To convert kilometers to meters, multiply by 1,000. To convert meters to kilometers, divide by 1,000. This is a defining relationship of the SI system.",
    relationshipContext:
      "Kilometers and meters are both metric. Kilometers suit road distances and geography; meters suit human-scale and scientific lengths. Both trace to the SI meter.",
    relatedConverterPath: "/tools/unit-converter/length/km-to-m",
    relatedConverterLabel: "Kilometer to Meter",
    tableFromKey: "km",
    tableToKey: "m",
    seoUnitA: "kilometer",
    seoUnitB: "meter",
    keywords: ["meters in a kilometer", "km to m", "1000 meters per km"],
  },
  {
    category: "length",
    slug: "how-many-yards-in-a-mile",
    hubUnitKey: "mi",
    question: "How many yards are in a mile?",
    directAnswer: "There are 1,760 yards in 1 statute mile.",
    detailedExplanation:
      "The statute mile used in the US and UK equals 5,280 feet. Since one yard is 3 feet, 5,280 ÷ 3 = 1,760 yards per mile. Use this factor when converting miles to yards or the inverse when converting yards to miles.",
    relationshipContext:
      "Miles and yards are imperial / US customary. The mile is a larger land-distance unit; the yard appears in sports and shorter imperial measures. Both are defined in terms of the international yard (0.9144 m).",
    relatedConverterPath: "/tools/unit-converter/length/mile-to-yard",
    relatedConverterLabel: "Mile to Yard",
    tableFromKey: "mi",
    tableToKey: "yd",
    seoUnitA: "mile",
    seoUnitB: "yard",
    keywords: ["yards in a mile", "1760 yards per mile", "mile to yards"],
  },
  {
    category: "length",
    slug: "how-many-feet-in-a-mile",
    hubUnitKey: "mi",
    question: "How many feet are in a mile?",
    directAnswer: "There are 5,280 feet in 1 statute mile.",
    detailedExplanation:
      "The statute mile is defined as exactly 5,280 feet. To convert miles to feet, multiply by 5,280. To convert feet to miles, divide by 5,280. This is the standard mile for road and land distance in the United States.",
    relationshipContext:
      "Feet and miles are both imperial length units. Large distances are often expressed in miles; feet remain common for medium-scale measurements. The ratio 5,280 ft/mi is exact under US customary definitions.",
    relatedConverterPath: "/tools/unit-converter/length/mile-to-feet",
    relatedConverterLabel: "Mile to Feet",
    tableFromKey: "mi",
    tableToKey: "ft",
    seoUnitA: "mile",
    seoUnitB: "feet",
    keywords: ["feet in a mile", "5280 feet per mile", "mile to feet"],
  },
  {
    category: "length",
    slug: "how-many-feet-in-a-meter",
    hubUnitKey: "m",
    question: "How many feet are in a meter?",
    directAnswer:
      "One meter is approximately 3.28084 feet (exactly: 1 m = 1 ÷ 0.3048 ft, with 1 ft defined as 0.3048 m).",
    detailedExplanation:
      "The meter is the SI base unit of length; feet are defined as exactly 0.3048 meters each. Therefore 1 m = 1/0.3048 ft ≈ 3.280839895 feet. For practical use, 3.28084 is often enough. Use a calculator for high precision.",
    relationshipContext:
      "Meters belong to the metric system; feet belong to US customary / imperial. Converting between them is essential for engineering, travel, and construction when working across standards.",
    relatedConverterPath: "/tools/unit-converter/length/m-to-feet",
    relatedConverterLabel: "Meter to Feet",
    tableFromKey: "m",
    tableToKey: "ft",
    seoUnitA: "meter",
    seoUnitB: "feet",
    keywords: ["feet in a meter", "meters to feet", "3.28 feet per meter"],
  },
  {
    category: "length",
    slug: "how-many-centimeters-in-a-meter",
    hubUnitKey: "m",
    question: "How many centimeters are in a meter?",
    directAnswer: "There are 100 centimeters in 1 meter.",
    detailedExplanation:
      "The meter is the SI base unit; the centimeter is one hundredth of a meter. Therefore 1 m = 100 cm. To convert meters to centimeters, multiply by 100. To convert centimeters to meters, divide by 100.",
    relationshipContext:
      "Meters and centimeters are both metric (SI). Centimeters are convenient for everyday sizes; meters are standard for scientific and building dimensions. Both are exact decimal multiples of the meter.",
    relatedConverterPath: "/tools/unit-converter/length/m-to-cm",
    relatedConverterLabel: "Meter to Centimeter",
    tableFromKey: "m",
    tableToKey: "cm",
    seoUnitA: "meter",
    seoUnitB: "centimeter",
    keywords: ["cm in a meter", "meters to centimeters", "100 cm per meter"],
  },
  {
    category: "length",
    slug: "how-many-inches-in-a-yard",
    hubUnitKey: "yd",
    question: "How many inches are in a yard?",
    directAnswer: "There are 36 inches in 1 yard.",
    detailedExplanation:
      "One yard is 3 feet, and one foot is 12 inches, so 3 × 12 = 36 inches per yard. To convert yards to inches, multiply by 36. To convert inches to yards, divide by 36.",
    relationshipContext:
      "Yards, feet, and inches are chained in the imperial system: 1 yd = 3 ft = 36 in. All are tied to the international definitions of inch and yard in meters.",
    relatedConverterPath: "/tools/unit-converter/length/yard-to-inch",
    relatedConverterLabel: "Yard to Inch",
    tableFromKey: "yd",
    tableToKey: "in",
    seoUnitA: "yard",
    seoUnitB: "inch",
    keywords: ["inches in a yard", "yards to inches", "36 inches per yard"],
  },
  {
    category: "weight",
    slug: "how-many-pounds-in-a-kilogram",
    hubUnitKey: "kg",
    question: "How many pounds are in a kilogram?",
    directAnswer: "One kilogram is approximately 2.20462 pounds (international avoirdupois).",
    detailedExplanation:
      "The kilogram is the SI base unit of mass; the international pound is defined as exactly 0.45359237 kg. Therefore 1 kg = 1 / 0.45359237 lb ≈ 2.20462262185 lb. For everyday use, 2.20462 is often enough; use a precise converter for exact trade weights.",
    relationshipContext:
      "Kilograms are metric; pounds are US customary / imperial (avoirdupois). Converting between them is common for body weight, luggage, and recipes when switching between US and metric contexts.",
    relatedConverterPath: "/tools/unit-converter/weight/kg-to-lb",
    relatedConverterLabel: "Kilogram to Pound",
    tableFromKey: "kg",
    tableToKey: "lb",
    seoUnitA: "kilogram",
    seoUnitB: "pound",
    keywords: ["pounds in a kg", "kg to lb", "kilograms to pounds"],
  },
  {
    category: "weight",
    slug: "how-many-ounces-in-a-pound",
    hubUnitKey: "lb",
    question: "How many ounces are in a pound?",
    directAnswer: "There are 16 ounces in 1 avoirdupois pound.",
    detailedExplanation:
      "In the avoirdupois system used for everyday weight in the US and UK, one pound equals exactly 16 ounces. To convert pounds to ounces, multiply by 16. To convert ounces to pounds, divide by 16.",
    relationshipContext:
      "Ounces and pounds are the same US customary / imperial family. This 16:1 ratio is exact for avoirdupois ounces (not fluid ounces).",
    relatedConverterPath: "/tools/unit-converter/weight/lb-to-oz",
    relatedConverterLabel: "Pound to Ounce",
    tableFromKey: "lb",
    tableToKey: "oz",
    seoUnitA: "ounce",
    seoUnitB: "pound",
    keywords: ["ounces in a pound", "lb to oz", "16 oz per pound"],
  },
  {
    category: "weight",
    slug: "how-many-grams-in-an-ounce",
    hubUnitKey: "oz",
    question: "How many grams are in an ounce?",
    directAnswer: "One avoirdupois ounce is approximately 28.3495 grams.",
    detailedExplanation:
      "The international avoirdupois ounce is defined as 1/16 of the international pound (0.45359237 kg). That yields about 28.349523125 g per ounce. Use this factor when converting recipe or postal weights between ounces and grams.",
    relationshipContext:
      "Grams are metric; ounces are imperial avoirdupois. Cooking and nutrition labels often need both, especially between US recipes and metric kitchens.",
    relatedConverterPath: "/tools/unit-converter/weight/oz-to-g",
    relatedConverterLabel: "Ounce to Gram",
    tableFromKey: "oz",
    tableToKey: "g",
    seoUnitA: "ounce",
    seoUnitB: "gram",
    keywords: ["grams in an ounce", "oz to grams", "ounce to gram"],
  },
  {
    category: "weight",
    slug: "how-many-grams-in-a-kilogram",
    hubUnitKey: "kg",
    question: "How many grams are in a kilogram?",
    directAnswer: "There are 1,000 grams in 1 kilogram.",
    detailedExplanation:
      "The prefix kilo- means one thousand. One kilogram is defined as 1,000 grams. To convert kilograms to grams, multiply by 1,000. To convert grams to kilograms, divide by 1,000.",
    relationshipContext:
      "Kilograms and grams are both metric (SI) mass units. This decimal relationship makes scaling and mental math straightforward.",
    relatedConverterPath: "/tools/unit-converter/weight/kg-to-g",
    relatedConverterLabel: "Kilogram to Gram",
    tableFromKey: "kg",
    tableToKey: "g",
    seoUnitA: "kilogram",
    seoUnitB: "gram",
    keywords: ["grams in a kg", "kg to grams", "1000 grams per kg"],
  },
  {
    category: "weight",
    slug: "how-many-pounds-in-a-stone",
    hubUnitKey: "st",
    question: "How many pounds are in a stone?",
    directAnswer: "There are 14 pounds in 1 stone (UK/Ireland avoirdupois).",
    detailedExplanation:
      "In the stone as used for body weight in the UK and Ireland, one stone equals exactly 14 pounds avoirdupois. To convert stone to pounds, multiply by 14. To convert pounds to stone, divide by 14.",
    relationshipContext:
      "Stone and pounds are both imperial avoirdupois units. The stone is not used for general trade worldwide but remains common for personal weight in the UK and Ireland.",
    relatedConverterPath: "/tools/unit-converter/weight/stone-to-lb",
    relatedConverterLabel: "Stone to Pound",
    tableFromKey: "st",
    tableToKey: "lb",
    seoUnitA: "stone",
    seoUnitB: "pound",
    keywords: ["pounds in a stone", "stone to pounds", "14 lb per stone"],
  },
  {
    category: "weight",
    slug: "how-many-kilograms-in-a-metric-ton",
    hubUnitKey: "t",
    question: "How many kilograms are in a metric ton?",
    directAnswer: "There are 1,000 kilograms in 1 metric ton (tonne).",
    detailedExplanation:
      "The metric ton (tonne) is one thousand kilograms by definition. To convert metric tons to kilograms, multiply by 1,000. To convert kilograms to metric tons, divide by 1,000.",
    relationshipContext:
      "Metric tons and kilograms are both SI-compatible metric mass units. Tonnes suit freight and bulk commodities; kilograms suit smaller loads and everyday use.",
    relatedConverterPath: "/tools/unit-converter/weight/metric-ton-to-kg",
    relatedConverterLabel: "Metric Ton to Kilogram",
    tableFromKey: "t",
    tableToKey: "kg",
    seoUnitA: "metric ton",
    seoUnitB: "kilogram",
    keywords: ["kg in a tonne", "metric ton to kg", "1000 kg per ton"],
  },
  {
    category: "weight",
    slug: "how-many-milligrams-in-a-gram",
    hubUnitKey: "g",
    question: "How many milligrams are in a gram?",
    directAnswer: "There are 1,000 milligrams in 1 gram.",
    detailedExplanation:
      "The milligram is one thousandth of a gram. Therefore 1 g = 1,000 mg. To convert grams to milligrams, multiply by 1,000. To convert milligrams to grams, divide by 1,000.",
    relationshipContext:
      "Milligrams and grams are both metric (SI) mass units. Milligrams are typical for medication doses and very small masses; grams are common in kitchens and labs.",
    relatedConverterPath: "/tools/unit-converter/weight/g-to-mg",
    relatedConverterLabel: "Gram to Milligram",
    tableFromKey: "g",
    tableToKey: "mg",
    seoUnitA: "gram",
    seoUnitB: "milligram",
    keywords: ["mg in a gram", "grams to milligrams", "1000 mg per g"],
  },
  {
    category: "weight",
    slug: "how-many-pounds-in-a-us-short-ton",
    hubUnitKey: "ust",
    question: "How many pounds are in a US short ton?",
    directAnswer: "There are 2,000 pounds in 1 US short ton.",
    detailedExplanation:
      "The US short ton is defined as exactly 2,000 avoirdupois pounds. To convert short tons to pounds, multiply by 2,000. To convert pounds to short tons, divide by 2,000.",
    relationshipContext:
      "The short ton is a US customary mass unit for freight and industry. It should not be confused with the metric ton (1,000 kg) or the UK long ton (2,240 lb).",
    relatedConverterPath: "/tools/unit-converter/weight/us-ton-to-lb",
    relatedConverterLabel: "US Ton to Pound",
    tableFromKey: "ust",
    tableToKey: "lb",
    seoUnitA: "US short ton",
    seoUnitB: "pound",
    keywords: ["pounds in a US ton", "short ton to pounds", "2000 lb per ton"],
  },
  {
    category: "weight",
    slug: "how-many-kilograms-in-a-pound",
    hubUnitKey: "lb",
    question: "How many kilograms are in a pound?",
    directAnswer: "One international avoirdupois pound is exactly 0.45359237 kilograms.",
    detailedExplanation:
      "Since 1959, the international avoirdupois pound has been defined as exactly 0.45359237 kg. To convert pounds to kilograms, multiply by that factor. To convert kilograms to pounds, divide by that factor or multiply by its reciprocal (~2.20462 lb per kg).",
    relationshipContext:
      "Pounds are US customary / imperial; kilograms are metric (SI). Body weight, shipping labels, and recipes often need conversion between the two systems.",
    relatedConverterPath: "/tools/unit-converter/weight/lb-to-kg",
    relatedConverterLabel: "Pound to Kilogram",
    tableFromKey: "lb",
    tableToKey: "kg",
    seoUnitA: "pound",
    seoUnitB: "kilogram",
    keywords: ["kg in a pound", "pounds to kg", "lb to kilograms"],
  },
  {
    category: "weight",
    slug: "how-many-micrograms-in-a-milligram",
    hubUnitKey: "mg",
    question: "How many micrograms are in a milligram?",
    directAnswer: "There are 1,000 micrograms in 1 milligram.",
    detailedExplanation:
      "The microgram is one millionth of a gram; the milligram is one thousandth of a gram. So 1 mg = 1,000 µg. To convert milligrams to micrograms, multiply by 1,000. To convert micrograms to milligrams, divide by 1,000.",
    relationshipContext:
      "Both units are metric (SI). Micrograms appear in very low-dose drugs and trace analysis; milligrams are more common on nutrition and supplement labels.",
    relatedConverterPath: "/tools/unit-converter/weight/mg-to-ug",
    relatedConverterLabel: "Milligram to Microgram",
    tableFromKey: "mg",
    tableToKey: "ug",
    seoUnitA: "milligram",
    seoUnitB: "microgram",
    keywords: ["mcg in a mg", "micrograms per milligram", "1000 mcg per mg"],
  },
];

export function getFaqEntry(category: string, slug: string): FaqEntry | undefined {
  return FAQ_ENTRIES.find((e) => e.category === category && e.slug === slug);
}

export function getFaqEntriesByCategory(category: FaqCategory): FaqEntry[] {
  return FAQ_ENTRIES.filter((e) => e.category === category);
}

export function getAllFaqStaticParams(): { category: string; slug: string }[] {
  return FAQ_ENTRIES.map((e) => ({ category: e.category, slug: e.slug }));
}
