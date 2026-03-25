function scaleName(key: string): string {
  if (key === "c") return "Celsius";
  if (key === "f") return "Fahrenheit";
  if (key === "k") return "Kelvin";
  if (key === "r") return "Rankine";
  return key;
}

const UNIT_DESCRIPTIONS: Record<string, string> = {
  c:
    "Celsius is a metric scale where 0 °C is the freezing point of water and 100 °C is the boiling point at standard atmospheric pressure. It shares the same step size as kelvin (1 K = 1 °C interval).",
  f:
    "Fahrenheit is common in the United States for weather and cooking. Water freezes at 32 °F and boils at 212 °F at standard pressure. Convert via Celsius or direct offset formulas.",
  k:
    "Kelvin is the SI base unit for thermodynamic temperature. 0 K is absolute zero. The triple point of water is 273.16 K by definition; this tool uses 273.15 for °C ↔ K in everyday conversions.",
  r:
    "Rankine is an absolute scale with the same degree size as Fahrenheit (1 R interval = 1 °F interval). 0 R is absolute zero. Relationship: R = °F + 459.67, and R = (9/5) × K (exact ratio to kelvin).",
};

export function getUnitDescription(key: string): string {
  return UNIT_DESCRIPTIONS[key] ?? `${key} is a temperature scale used in this converter.`;
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const fromName = scaleName(fromKey);
  const toName = scaleName(toKey);

  return (
    `Converting ${fromName} to ${toName} uses different zeros and step sizes. You cannot multiply by a single ratio alone for every pair—you first express the same physical temperature in an intermediate form (Celsius is used inside this tool), then map to ${toName}. ` +
    `Unlike length or energy units, offsets matter for Celsius and Fahrenheit; kelvin and rankine are absolute scales linked by the exact factor 9/5.`
  );
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const fromLabel = scaleName(fromKey);
  const toLabel = scaleName(toKey);

  if (fromKey === "c" && toKey === "f") {
    return `From Celsius to Fahrenheit: °F = (°C × 9/5) + 32. The 9/5 factor matches the ratio of degree sizes; +32 aligns the zero points.`;
  }
  if (fromKey === "f" && toKey === "c") {
    return `From Fahrenheit to Celsius: °C = (°F − 32) × 5/9. Subtract 32 to remove the offset, then scale by 5/9.`;
  }
  if (fromKey === "c" && toKey === "k") {
    return `From Celsius to Kelvin: K = °C + 273.15. Kelvin uses the same step as Celsius with a different zero at absolute zero.`;
  }
  if (fromKey === "k" && toKey === "c") {
    return `From Kelvin to Celsius: °C = K − 273.15.`;
  }
  if (fromKey === "f" && toKey === "k") {
    return `From Fahrenheit to Kelvin: first convert to Celsius with (°F − 32) × 5/9, then add 273.15.`;
  }
  if (fromKey === "k" && toKey === "f") {
    return `From Kelvin to Fahrenheit: first subtract 273.15 for Celsius, then °F = (°C × 9/5) + 32.`;
  }
  if (fromKey === "k" && toKey === "r") {
    return `From Kelvin to Rankine: R = K × (9/5). The two absolute scales differ only by this exact factor between their degree sizes.`;
  }
  if (fromKey === "r" && toKey === "k") {
    return `From Rankine to Kelvin: K = R × (5/9), the inverse of the kelvin-to-rankine rule.`;
  }
  if (fromKey === "f" && toKey === "r") {
    return `From Fahrenheit to Rankine: R = °F + 459.67 (same degree size; rankine starts at absolute zero).`;
  }
  if (fromKey === "r" && toKey === "f") {
    return `From Rankine to Fahrenheit: °F = R − 459.67.`;
  }
  if (fromKey === "c" && toKey === "r") {
    return `From Celsius to Rankine: R = (°C + 273.15) × (9/5), i.e. convert to kelvin then multiply by 9/5.`;
  }
  if (fromKey === "r" && toKey === "c") {
    return `From Rankine to Celsius: °C = R × (5/9) − 273.15, i.e. convert to kelvin then subtract 273.15.`;
  }

  return `Converting ${fromLabel} to ${toLabel} uses the offset-aware rules above (via Celsius internally in this tool, except kelvin–rankine which is a pure ratio).`;
}

export function getExtraDerivation(fromKey: string, toKey: string): string | null {
  if (fromKey === "c" && toKey === "f") {
    return `Sanity check: 0 °C = 32 °F and 100 °C = 212 °F at 1 atm (by definition of the Celsius scale).`;
  }
  if (fromKey === "f" && toKey === "c") {
    return `Sanity check: 32 °F = 0 °C and 212 °F = 100 °C at 1 atm.`;
  }
  if (fromKey === "c" && toKey === "k") {
    return `0 °C = 273.15 K exactly with the usual ITS-90–aligned offset used in general science.`;
  }
  if (fromKey === "k" && toKey === "c") {
    return `273.15 K is exactly 0 °C with the same offset convention.`;
  }
  if (fromKey === "f" && toKey === "k") {
    return `Convert through Celsius: (°F − 32) × 5/9 gives °C, then add 273.15 for kelvin.`;
  }
  if (fromKey === "k" && toKey === "f") {
    return `Convert through Celsius: K − 273.15 gives °C, then (°C × 9/5) + 32 gives °F.`;
  }
  if (fromKey === "k" && toKey === "r") {
    return `Check: 0 K = 0 R; 273.15 K = 491.67 R (same as 0 °C).`;
  }
  if (fromKey === "r" && toKey === "k") {
    return `491.67 R corresponds to 273.15 K (ice point on both absolute scales).`;
  }
  if (fromKey === "f" && toKey === "r") {
    return `0 °F = 459.67 R; each °F step is one rankine step on the absolute scale.`;
  }
  if (fromKey === "r" && toKey === "f") {
    return `459.67 R = 0 °F by the usual 459.67 offset used in this tool.`;
  }
  if (fromKey === "c" && toKey === "r") {
    return `0 °C = 491.67 R; 100 °C = 671.67 R (water boiling at 1 atm).`;
  }
  if (fromKey === "r" && toKey === "c") {
    return `491.67 R = 0 °C with these definitions.`;
  }
  return null;
}

/** Example inputs for “How to convert” walkthroughs. */
export function getTemperatureHowToExamples(fromKey: string, toKey: string): readonly number[] {
  if (fromKey === "r" || toKey === "r") return [491.67, 671.67] as const;
  if (fromKey === "f" || toKey === "f") return [32, 68] as const;
  if (fromKey === "k" || toKey === "k") return [273.15, 300] as const;
  return [0, 100] as const;
}
