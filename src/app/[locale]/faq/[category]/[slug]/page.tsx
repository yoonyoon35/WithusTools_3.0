import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/components/I18nLink";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { loadToolContent } from "@/lib/load-tool-content";
import { getToolContentEntry } from "@/lib/tool-content";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import { AngleConversionTablesPair } from "@/components/AngleConversionTable";
import { AreaConversionTablesPair } from "@/components/AreaConversionTable";
import { DigitalConversionTablesPair } from "@/components/DigitalConversionTable";
import { EnergyConversionTablesPair } from "@/components/EnergyConversionTable";
import { LengthConversionTablesPair } from "@/components/LengthConversionTable";
import { PowerConversionTablesPair } from "@/components/PowerConversionTable";
import { PressureConversionTablesPair } from "@/components/PressureConversionTable";
import { SpeedConversionTablesPair } from "@/components/SpeedConversionTable";
import { TemperatureConversionTablesPair } from "@/components/TemperatureConversionTable";
import { TimeConversionTablesPair } from "@/components/TimeConversionTable";
import { VolumeConversionTablesPair } from "@/components/VolumeConversionTable";
import { WeightConversionTablesPair } from "@/components/WeightConversionTable";
import { NumberSystemConversionTablesPair } from "@/components/NumberSystemConversionTable";
import { getFaqEntry, getAllFaqStaticParams, type FaqEntry } from "@/data/faq-data";
import { lengthUnitLabel, lengthUnitSlug } from "@/app/[locale]/tools/unit-converter/length/lengthPairUi";
import { weightUnitLabel, weightUnitSlug } from "@/app/[locale]/tools/unit-converter/weight/weightPairUi";
import { temperatureUnitLabel, temperatureUnitSlug } from "@/app/[locale]/tools/unit-converter/temperature/temperaturePairUi";
import { areaUnitLabel, areaUnitSlug } from "@/app/[locale]/tools/unit-converter/area/areaPairUi";
import { volumeUnitLabel, volumeUnitSlug } from "@/app/[locale]/tools/unit-converter/volume/volumePairUi";
import { speedUnitLabel, speedUnitSlug } from "@/app/[locale]/tools/unit-converter/speed/speedPairUi";
import { timeUnitLabel, timeUnitSlug } from "@/app/[locale]/tools/unit-converter/time/timePairUi";
import { digitalUnitLabel, digitalUnitSlug } from "@/app/[locale]/tools/unit-converter/digital/digitalPairUi";
import { pressureUnitLabel, pressureUnitSlug } from "@/app/[locale]/tools/unit-converter/pressure/pressurePairUi";
import { energyUnitLabel, energyUnitSlug } from "@/app/[locale]/tools/unit-converter/energy/energyPairUi";
import { powerUnitLabel, powerUnitSlug } from "@/app/[locale]/tools/unit-converter/power/powerPairUi";
import { angleUnitLabel, angleUnitSlug } from "@/app/[locale]/tools/unit-converter/angle/anglePairUi";
import {
  getNumberSystemPairsFrom,
  NUMBER_SYSTEM_PAIR_KEYS,
  NUMBER_SYSTEM_PAIR_KEY_LABELS,
  pairKeyToBase,
  type NumberSystemPairKey,
} from "@/utils/numberSystemConversion";
import {
  getOutboundAngleHubLinks,
  getOutboundAreaHubLinks,
  getOutboundDigitalHubLinks,
  getOutboundEnergyHubLinks,
  getOutboundPowerHubLinks,
  getOutboundLengthHubLinks,
  getOutboundPressureHubLinks,
  getOutboundSpeedHubLinks,
  getOutboundTemperatureHubLinks,
  getOutboundTimeHubLinks,
  getOutboundVolumeHubLinks,
  getOutboundWeightHubLinks,
  ANGLE_KEY_TO_SLUG,
  ANGLE_UNITS,
  AREA_UNITS,
  DIGITAL_KEY_TO_SLUG,
  DIGITAL_UNITS,
  ENERGY_KEY_TO_SLUG,
  ENERGY_UNITS,
  POWER_KEY_TO_SLUG,
  POWER_UNITS,
  LENGTH_KEY_TO_SLUG,
  PRESSURE_KEY_TO_SLUG,
  PRESSURE_UNITS,
  SPEED_KEY_TO_SLUG,
  SPEED_UNITS,
  TEMPERATURE_UNITS,
  LENGTH_UNITS,
  TIME_KEY_TO_SLUG,
  TIME_UNITS,
  VOLUME_KEY_TO_SLUG,
  VOLUME_UNITS,
  WEIGHT_UNITS,
} from "@/utils/conversions";

export function generateStaticParams() {
  return getAllFaqStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; category: string; slug: string };
}): Promise<Metadata> {
  const { locale, category, slug } = params;
  const entry = getFaqEntry(category, slug, locale);
  if (!entry) {
    return createMetadata({title: "FAQ", noIndex: true,
    locale: locale as Locale,
  });
  }
  const faqSuffix =
    locale === "ko" &&
    (entry.category === "color-picker" ||
      entry.category === "length" ||
      entry.category === "weight" ||
      entry.category === "temperature" ||
      entry.category === "area" ||
      entry.category === "volume" ||
      entry.category === "speed" ||
      entry.category === "time" ||
      entry.category === "digital" ||
      entry.category === "pressure" ||
      entry.category === "energy" ||
      entry.category === "power" ||
      entry.category === "angle")
      ? "자주 묻는 질문"
      : "FAQ";
  const title =
    entry.category === "color-picker" || entry.category === "percentage-calculator"
      ? `${entry.question} | ${faqSuffix}`
      : `${entry.question} - Quick Answer & Calculator`;
  const description =
    entry.metaDescription ??
    (entry.category === "gpa"
      ? `${entry.directAnswer} Covers the difference between weighted and unweighted GPA, how to calculate weighted GPA with AP classes, and how our GPA Calculator’s 5.0 Scale (Weighted) option fits in.`
      : entry.category === "color-picker"
        ? locale === "ko"
          ? `${entry.directAnswer} WithUsTools 무료 컬러 피커와 HEX·RGB·HSL·CMYK 변환기.`
          : `${entry.directAnswer} Free online Color Picker and HEX, RGB, HSL, CMYK converters on WithUsTools.`
        : entry.category === "percentage-calculator"
          ? `${entry.directAnswer} Free Percentage Calculator: Basic, Percentage Change, Percentage Of, Value After Change—with examples on WithUsTools.`
          : `${entry.directAnswer} Learn more about ${entry.seoUnitA} to ${entry.seoUnitB} conversion with our detailed guide and easy-to-use calculator.`);
  return createMetadata({title,
    description,
    path: `/faq/${category}/${slug}`,
    keywords:
      entry.keywords ??
      (entry.category === "number-system"
        ? ["FAQ", "number system", "radix", "withustools"]
        : entry.category === "color-picker"
          ? ["color picker", "hex rgb converter", "faq", "withustools"]
          : entry.category === "percentage-calculator"
            ? ["percentage calculator FAQ", "percent math", "discount tip calculator", "withustools"]
            : ["FAQ", "unit conversion", "withustools"]),
    locale: locale as Locale,
  });
}

function buildFaqJsonLd(entry: FaqEntry, pageUrl: string) {
  const answerText = `${entry.directAnswer}\n\n${entry.detailedExplanation}`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerText,
        },
      },
    ],
    url: pageUrl,
  };
}

function ConverterCta({ entry, faqPageUi }: { entry: FaqEntry; faqPageUi?: unknown }) {
  const pageUi = asMap(faqPageUi);
  const ctaTemplate = asText(pageUi.ctaTemplate);
  if (
    (entry.category === "color-picker" ||
      entry.category === "length" ||
      entry.category === "weight" ||
      entry.category === "temperature" ||
      entry.category === "area" ||
      entry.category === "volume" ||
      entry.category === "speed" ||
      entry.category === "time" ||
      entry.category === "digital" ||
      entry.category === "pressure" ||
      entry.category === "energy" ||
      entry.category === "power" ||
      entry.category === "angle") &&
    ctaTemplate
  ) {
    return (
      <div className="flex flex-wrap justify-center sm:justify-start">
        <Link
          href={entry.relatedConverterPath}
          className="inline-flex items-center justify-center rounded-lg border border-blue-500/60 bg-blue-600/20 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:border-blue-400 hover:bg-blue-600/30"
        >
          {formatUi(ctaTemplate, { label: entry.relatedConverterLabel })}
        </Link>
      </div>
    );
  }
  if (entry.category === "percentage-calculator") {
    return (
      <div className="flex flex-wrap justify-center sm:justify-start">
        <Link
          href={entry.relatedConverterPath}
          className="inline-flex items-center justify-center rounded-lg border border-blue-500/60 bg-blue-600/20 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:border-blue-400 hover:bg-blue-600/30"
        >
          Open Percentage Calculator (all four modes)
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center sm:justify-start">
      <Link
        href={entry.relatedConverterPath}
        className="inline-flex items-center justify-center rounded-lg border border-blue-500/60 bg-blue-600/20 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:border-blue-400 hover:bg-blue-600/30"
      >
        Need a precise calculation? Go to {entry.relatedConverterLabel} Converter
      </Link>
    </div>
  );
}

function PercentageCalculatorWorkedExampleTable({ entry }: { entry: FaqEntry }) {
  const ex = entry.percentageWorkedExample;
  if (!ex) {
    return (
      <p className="text-sm text-slate-400">
        Use the Percentage Calculator tabs to plug in your own numbers; results update as you type with comma formatting
        and optional history.
      </p>
    );
  }
  return (
    <>
      {ex.intro ? <p className="mb-4 text-sm text-slate-400">{ex.intro}</p> : null}
      <div className="scrollbar-thin overflow-x-auto">
        <table className="w-full min-w-[280px] text-sm">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="px-3 py-2 text-left font-medium text-slate-300">Step</th>
              <th className="px-3 py-2 text-left font-medium text-slate-300">Calculation / result</th>
            </tr>
          </thead>
          <tbody>
            {ex.rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-700/50">
                <td className="px-3 py-2 text-slate-300">{row.label}</td>
                <td className="px-3 py-2 font-mono text-slate-200">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Same math as the live tool: Basic Percentage, Percentage Change, Percentage Of, and Value After Change.
      </p>
    </>
  );
}

function PercentageCalculatorFaqMoreTools() {
  const linkCls =
    "block rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800";
  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">Percentage Calculator modes</h2>
      <p className="mb-6 text-sm text-slate-500">
        One page covers four patterns: percent of a total, part-to-whole percent, percent change between two values, and
        final value after a percent increase or decrease—with recent history on your device.
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        <li>
          <Link href="/tools/calculator/percentage-calculator" className={linkCls}>
            Percentage Calculator (main tool)
          </Link>
        </li>
        <li>
          <Link href="/tools/calculator" className={linkCls}>
            All calculators
          </Link>
        </li>
      </ul>
    </section>
  );
}

function LengthHubLinkCards({
  hubUnitKey,
  faqPageUi,
  lengthUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  lengthUi?: unknown;
}) {
  const hub = LENGTH_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.name;
  const links = getOutboundLengthHubLinks(hubUnitKey);
  const fromSg =
    lengthUi ? lengthUnitLabel(lengthUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other common length unit (meter, kilometer, centimeter, millimeter, inch, feet, mile, yard).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = lengthUnitSlug(hubUnitKey);
          const toSlug = lengthUnitSlug(toKey);
          const fromName = lengthUi
            ? lengthUnitLabel(lengthUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = lengthUi
            ? lengthUnitLabel(lengthUi, toKey, "nameSg")
            : LENGTH_UNITS[toKey].nameSg ?? LENGTH_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function AreaHubLinkCards({
  hubUnitKey,
  faqPageUi,
  areaUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  areaUi?: unknown;
}) {
  const hub = AREA_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.name;
  const links = getOutboundAreaHubLinks(hubUnitKey);
  const fromSg = areaUi ? areaUnitLabel(areaUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other common area unit (square meter, square kilometer, hectare, acre, square feet, square yard, square inch, square mile).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = areaUnitSlug(hubUnitKey);
          const toSlug = areaUnitSlug(toKey);
          const fromName = areaUi
            ? areaUnitLabel(areaUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = areaUi
            ? areaUnitLabel(areaUi, toKey, "nameSg")
            : AREA_UNITS[toKey].nameSg ?? AREA_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function VolumeHubLinkCards({
  hubUnitKey,
  faqPageUi,
  volumeUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  volumeUi?: unknown;
}) {
  const hub = VOLUME_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.name;
  const links = getOutboundVolumeHubLinks(hubUnitKey);
  const fromSg = volumeUi ? volumeUnitLabel(volumeUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other hub volume unit (liter, cubic meter, US gallon, US fluid ounce, cubic foot, cubic inch).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = volumeUnitSlug(hubUnitKey);
          const toSlug = volumeUnitSlug(toKey);
          const fromName = volumeUi
            ? volumeUnitLabel(volumeUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = volumeUi
            ? volumeUnitLabel(volumeUi, toKey, "nameSg")
            : VOLUME_UNITS[toKey].nameSg ?? VOLUME_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function WeightHubLinkCards({
  hubUnitKey,
  faqPageUi,
  weightUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  weightUi?: unknown;
}) {
  const hub = WEIGHT_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.name;
  const links = getOutboundWeightHubLinks(hubUnitKey);
  const fromSg =
    weightUi ? weightUnitLabel(weightUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other common weight unit (kilogram, gram, milligram, pound, ounce, metric ton, stone, US short ton).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = weightUnitSlug(hubUnitKey);
          const toSlug = weightUnitSlug(toKey);
          const fromName = weightUi
            ? weightUnitLabel(weightUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = weightUi
            ? weightUnitLabel(weightUi, toKey, "nameSg")
            : WEIGHT_UNITS[toKey].nameSg ?? WEIGHT_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function TimeHubLinkCards({
  hubUnitKey,
  faqPageUi,
  timeUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  timeUi?: unknown;
}) {
  const hub = TIME_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.name;
  const links = getOutboundTimeHubLinks(hubUnitKey);
  const fromSg = timeUi ? timeUnitLabel(timeUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other hub time unit (year, month, week, day, hour, minute, second, millisecond).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = timeUnitSlug(hubUnitKey);
          const toSlug = timeUnitSlug(toKey);
          const fromName = timeUi
            ? timeUnitLabel(timeUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = timeUi
            ? timeUnitLabel(timeUi, toKey, "nameSg")
            : TIME_UNITS[toKey].nameSg ?? TIME_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function DigitalHubLinkCards({
  hubUnitKey,
  faqPageUi,
  digitalUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  digitalUi?: unknown;
}) {
  const hub = DIGITAL_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.name;
  const links = getOutboundDigitalHubLinks(hubUnitKey);
  const fromSg = digitalUi ? digitalUnitLabel(digitalUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other hub digital unit (gigabyte, terabyte, megabyte, byte, kilobyte, bit, megabit).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = digitalUnitSlug(hubUnitKey);
          const toSlug = digitalUnitSlug(toKey);
          const fromName = digitalUi
            ? digitalUnitLabel(digitalUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = digitalUi
            ? digitalUnitLabel(digitalUi, toKey, "nameSg")
            : DIGITAL_UNITS[toKey].nameSg ?? DIGITAL_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function EnergyHubLinkCards({
  hubUnitKey,
  faqPageUi,
  energyUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  energyUi?: unknown;
}) {
  const hub = ENERGY_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.name;
  const links = getOutboundEnergyHubLinks(hubUnitKey);
  const fromSg = energyUi ? energyUnitLabel(energyUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other hub energy unit (kilocalorie, kilowatt-hour, calorie, joule, watt-hour, BTU, electronvolt).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = energyUnitSlug(hubUnitKey);
          const toSlug = energyUnitSlug(toKey);
          const fromName = energyUi
            ? energyUnitLabel(energyUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = energyUi
            ? energyUnitLabel(energyUi, toKey, "nameSg")
            : ENERGY_UNITS[toKey].nameSg ?? ENERGY_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function PowerHubLinkCards({
  hubUnitKey,
  faqPageUi,
  powerUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  powerUi?: unknown;
}) {
  const hub = POWER_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.name;
  const links = getOutboundPowerHubLinks(hubUnitKey);
  const fromSg = powerUi ? powerUnitLabel(powerUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other hub power unit (watt, milliwatt, kilowatt, megawatt, mechanical horsepower, metric horsepower PS/CV).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = powerUnitSlug(hubUnitKey);
          const toSlug = powerUnitSlug(toKey);
          const fromName = powerUi
            ? powerUnitLabel(powerUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = powerUi
            ? powerUnitLabel(powerUi, toKey, "nameSg")
            : POWER_UNITS[toKey].nameSg ?? POWER_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function TemperatureHubLinkCards({
  hubUnitKey,
  faqPageUi,
  temperatureUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  temperatureUi?: unknown;
}) {
  const hub = TEMPERATURE_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.nameSg ?? hub.name;
  const links = getOutboundTemperatureHubLinks(hubUnitKey);
  const fromSg =
    temperatureUi ? temperatureUnitLabel(temperatureUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to the other scales (Celsius, Fahrenheit, Kelvin, Rankine).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = temperatureUnitSlug(hubUnitKey);
          const toSlug = temperatureUnitSlug(toKey);
          const fromName = temperatureUi
            ? temperatureUnitLabel(temperatureUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = temperatureUi
            ? temperatureUnitLabel(temperatureUi, toKey, "nameSg")
            : TEMPERATURE_UNITS[toKey].nameSg ?? TEMPERATURE_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function SpeedHubLinkCards({
  hubUnitKey,
  faqPageUi,
  speedUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  speedUi?: unknown;
}) {
  const hub = SPEED_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.name;
  const links = getOutboundSpeedHubLinks(hubUnitKey);
  const fromSg = speedUi ? speedUnitLabel(speedUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other hub speed unit (m/s, km/s, km/h, mph, knots, ft/s, in/s, cm/s, mm/s, Mach, c).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = speedUnitSlug(hubUnitKey);
          const toSlug = speedUnitSlug(toKey);
          const fromName = speedUi
            ? speedUnitLabel(speedUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = speedUi
            ? speedUnitLabel(speedUi, toKey, "nameSg")
            : SPEED_UNITS[toKey].nameSg ?? SPEED_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function AngleHubLinkCards({
  hubUnitKey,
  faqPageUi,
  angleUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  angleUi?: unknown;
}) {
  const hub = ANGLE_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.nameSg ?? hub.name;
  const links = getOutboundAngleHubLinks(hubUnitKey);
  const fromSg = angleUi ? angleUnitLabel(angleUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other hub angle unit (turn, deg, arcmin, arcsec, grad, rad, mrad).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = angleUnitSlug(hubUnitKey);
          const toSlug = angleUnitSlug(toKey);
          const fromName = angleUi
            ? angleUnitLabel(angleUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = angleUi
            ? angleUnitLabel(angleUi, toKey, "nameSg")
            : ANGLE_UNITS[toKey].nameSg ?? ANGLE_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function NumberSystemHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  if (!(NUMBER_SYSTEM_PAIR_KEYS as readonly string[]).includes(hubUnitKey)) return null;
  const from = hubUnitKey as NumberSystemPairKey;
  const hubName = NUMBER_SYSTEM_PAIR_KEY_LABELS[from];
  const links = getNumberSystemPairsFrom(from);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hubName} to every other format (binary, octal, decimal, hexadecimal, character), with the
        same parsing rules as the main Number System Converter.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ href, line1 }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
            >
              <span className="font-medium text-slate-200">{line1}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GpaFaqScaleTable() {
  const rows: [string, string, string][] = [
    ["A+", "4.0", "5.0"],
    ["A", "4.0", "4.5"],
    ["A-", "3.7", "4.2"],
    ["B+", "3.3", "3.8"],
    ["B", "3.0", "3.5"],
    ["B-", "2.7", "3.2"],
  ];
  return (
    <div className="scrollbar-thin overflow-x-auto">
      <table className="w-full min-w-[320px] text-sm">
        <thead>
          <tr className="border-b border-slate-600">
            <th className="px-3 py-2 text-left font-medium text-slate-300">Grade</th>
            <th className="px-3 py-2 text-center font-medium text-slate-300">4.0 (unweighted style)</th>
            <th className="px-3 py-2 text-center font-medium text-slate-300">5.0 Scale (Weighted)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([g, u, w]) => (
            <tr key={g} className="border-b border-slate-700/50">
              <td className="px-3 py-2 font-medium text-slate-200">{g}</td>
              <td className="px-3 py-2 text-center text-slate-300">{u}</td>
              <td className="px-3 py-2 text-center text-slate-300">{w}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-xs text-slate-500">
        Excerpt of the same mappings used in the GPA Calculator conversion table. Full tables include all letter
        grades and additional scales (4.3, 4.5).
      </p>
    </div>
  );
}

function ColorPickerFaqExampleTable({ faqPageUi }: { faqPageUi?: unknown }) {
  const pageUi = asMap(faqPageUi);
  const rows: [string, string, string][] = [
    ["#3498DB", "rgb(52, 152, 219)", "hsl(204, 70%, 53%)"],
    ["#E74C3C", "rgb(231, 76, 60)", "hsl(6, 78%, 57%)"],
    ["#2ECC71", "rgb(46, 204, 113)", "hsl(145, 63%, 49%)"],
    ["#FFFFFF", "rgb(255, 255, 255)", "hsl(0, 0%, 100%)"],
  ];
  return (
    <div className="scrollbar-thin overflow-x-auto">
      <table className="w-full min-w-[320px] text-sm">
        <thead>
          <tr className="border-b border-slate-600">
            <th className="px-3 py-2 text-left font-medium text-slate-300">HEX</th>
            <th className="px-3 py-2 text-left font-medium text-slate-300">RGB</th>
            <th className="px-3 py-2 text-left font-medium text-slate-300">HSL (rounded)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([hex, rgb, hsl]) => (
            <tr key={hex} className="border-b border-slate-700/50">
              <td className="px-3 py-2 font-mono text-slate-200">{hex}</td>
              <td className="px-3 py-2 font-mono text-slate-300">{rgb}</td>
              <td className="px-3 py-2 font-mono text-slate-300">{hsl}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-xs text-slate-500">{asText(pageUi.exampleTableFootnote)}</p>
    </div>
  );
}

function ColorPickerFaqMoreConverters({ faqPageUi }: { faqPageUi?: unknown }) {
  const pageUi = asMap(faqPageUi);
  const relatedLinks = Array.isArray(pageUi.relatedLinks) ? pageUi.relatedLinks : [];
  const items = relatedLinks
    .map((raw) => {
      const link = asMap(raw);
      const href = asText(link.href);
      const title = asText(link.title);
      const sub = asText(link.subtitle);
      return href && title ? { href, title, sub } : null;
    })
    .filter(Boolean) as { href: string; title: string; sub: string }[];

  if (items.length === 0) return null;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">{asText(pageUi.moreToolsTitle)}</h2>
      <p className="mb-6 text-sm text-slate-500">{asText(pageUi.moreToolsIntro)}</p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ href, title, sub }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
            >
              <span className="font-medium text-slate-200">{title}</span>
              <span className="mt-1 text-xs text-slate-500">{sub}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GpaFaqRelatedTools() {
  const linkCls =
    "block rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800";
  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">Related GPA tools</h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        <li>
          <Link href="/tools/calculator/gpa-calculator" className={linkCls}>
            GPA Calculator (4.0 / 5.0 weighted scale)
          </Link>
        </li>
        <li>
          <Link href="/tools/calculator/gpa-calculator/target-gpa?reset=1" className={linkCls}>
            Target GPA Calculator
          </Link>
        </li>
      </ul>
    </section>
  );
}

function PressureHubLinkCards({
  hubUnitKey,
  faqPageUi,
  pressureUi,
}: {
  hubUnitKey: string;
  faqPageUi?: unknown;
  pressureUi?: unknown;
}) {
  const hub = PRESSURE_UNITS[hubUnitKey];
  if (!hub) return null;
  const pageUi = asMap(faqPageUi);
  const hubName = hub.nameSg ?? hub.name;
  const links = getOutboundPressureHubLinks(hubUnitKey);
  const fromSg = pressureUi ? pressureUnitLabel(pressureUi, hubUnitKey, "nameSg") : hub.nameSg ?? hub.name;

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {formatUi(asText(pageUi.moreConvertersTitle), { unit: hubName }) ||
          `More ${hubName} converters`}
      </h2>
      <p className="mb-6 text-sm text-slate-500">
        {formatUi(asText(pageUi.moreConvertersIntro), { unitSg: fromSg }) ||
          `Dedicated pages from ${fromSg} to every other hub pressure unit (bar, atm, PSI, kPa, hPa, torr, mmHg, Pa).`}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const fromSlug = pressureUnitSlug(hubUnitKey);
          const toSlug = pressureUnitSlug(toKey);
          const fromName = pressureUi
            ? pressureUnitLabel(pressureUi, hubUnitKey, "nameSg")
            : hub.nameSg ?? hub.name;
          const toName = pressureUi
            ? pressureUnitLabel(pressureUi, toKey, "nameSg")
            : PRESSURE_UNITS[toKey].nameSg ?? PRESSURE_UNITS[toKey].name;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {formatUi(asText(pageUi.moreConvertersLink), {
                    fromSlug,
                    toSlug,
                    fromName,
                    toName,
                  }) || `${fromSlug} to ${toSlug} (${fromName} to ${toName})`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default async function FaqPage({ params }: { params: { locale: string; category: string; slug: string } }) {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);

  const entry = getFaqEntry(params.category, params.slug, locale);
  if (!entry) notFound();

  let faqPageUi: unknown;
  let lengthHubUi: unknown;
  let weightHubUi: unknown;
  let temperatureHubUi: unknown;
  let areaHubUi: unknown;
  let volumeHubUi: unknown;
  let speedHubUi: unknown;
  let timeHubUi: unknown;
  let digitalHubUi: unknown;
  let pressureHubUi: unknown;
  let energyHubUi: unknown;
  let powerHubUi: unknown;
  let angleHubUi: unknown;
  if (
    entry.category === "color-picker" ||
    entry.category === "length" ||
    entry.category === "weight" ||
    entry.category === "temperature" ||
    entry.category === "area" ||
    entry.category === "volume" ||
    entry.category === "speed" ||
    entry.category === "time" ||
    entry.category === "digital" ||
    entry.category === "pressure" ||
    entry.category === "energy" ||
    entry.category === "power" ||
    entry.category === "angle"
  ) {
    const toolContent = await loadToolContent(locale);
    const hubPath =
      entry.category === "color-picker"
        ? "/tools/developer/color-picker"
        : entry.category === "weight"
          ? "/tools/unit-converter/weight"
          : entry.category === "temperature"
            ? "/tools/unit-converter/temperature"
            : entry.category === "area"
              ? "/tools/unit-converter/area"
              : entry.category === "volume"
                ? "/tools/unit-converter/volume"
                : entry.category === "speed"
                  ? "/tools/unit-converter/speed"
                  : entry.category === "time"
                    ? "/tools/unit-converter/time"
                    : entry.category === "digital"
                      ? "/tools/unit-converter/digital"
                      : entry.category === "pressure"
                        ? "/tools/unit-converter/pressure"
                        : entry.category === "energy"
                          ? "/tools/unit-converter/energy"
                          : entry.category === "power"
                            ? "/tools/unit-converter/power"
                            : entry.category === "angle"
                              ? "/tools/unit-converter/angle"
                              : "/tools/unit-converter/length";
    const hubContent = getToolContentEntry(toolContent, hubPath);
    faqPageUi = asMap(hubContent?.ui).faqPage;
    if (entry.category === "length") {
      lengthHubUi = hubContent?.ui;
    }
    if (entry.category === "weight") {
      weightHubUi = hubContent?.ui;
    }
    if (entry.category === "temperature") {
      temperatureHubUi = hubContent?.ui;
    }
    if (entry.category === "area") {
      areaHubUi = hubContent?.ui;
    }
    if (entry.category === "volume") {
      volumeHubUi = hubContent?.ui;
    }
    if (entry.category === "speed") {
      speedHubUi = hubContent?.ui;
    }
    if (entry.category === "time") {
      timeHubUi = hubContent?.ui;
    }
    if (entry.category === "digital") {
      digitalHubUi = hubContent?.ui;
    }
    if (entry.category === "pressure") {
      pressureHubUi = hubContent?.ui;
    }
    if (entry.category === "energy") {
      energyHubUi = hubContent?.ui;
    }
    if (entry.category === "power") {
      powerHubUi = hubContent?.ui;
    }
    if (entry.category === "angle") {
      angleHubUi = hubContent?.ui;
    }
  }

  const pageUi = asMap(faqPageUi);
  const localizedConverterLabel = asText(pageUi.converterLabel);
  const localizedNavFaq = asText(pageUi.navFaqLabel) || "FAQ";
  const localizedRelationshipTitle = asText(pageUi.relationshipTitle) || "Relationship context";
  const colorPickerExampleTableTitle =
    asText(pageUi.exampleTableTitle) || "Example sRGB codes (HEX · RGB · HSL)";
  const localizedQuickTableTitle = asText(pageUi.quickTableTitle) || "Quick conversion table";
  const colorPickerBackDeveloper = asText(pageUi.backDeveloper) || "Developer Tools";
  const localizedBackUnitConverter = asText(pageUi.backUnitConverter) || "Unit Converter";

  const pageUrl = `https://withustools.com/faq/${entry.category}/${entry.slug}`;
  const jsonLd = buildFaqJsonLd(entry, pageUrl);
  const converterHome =
    entry.category === "color-picker"
      ? "/tools/developer/color-picker"
      : entry.category === "gpa"
      ? "/tools/calculator/gpa-calculator"
      : entry.category === "percentage-calculator"
        ? "/tools/calculator/percentage-calculator"
      : entry.category === "weight"
      ? "/tools/unit-converter/weight"
      : entry.category === "area"
        ? "/tools/unit-converter/area"
        : entry.category === "volume"
          ? "/tools/unit-converter/volume"
          : entry.category === "time"
            ? "/tools/unit-converter/time"
            : entry.category === "digital"
              ? "/tools/unit-converter/digital"
              : entry.category === "energy"
                ? "/tools/unit-converter/energy"
                : entry.category === "power"
                  ? "/tools/unit-converter/power"
                  : entry.category === "temperature"
                  ? "/tools/unit-converter/temperature"
                  : entry.category === "speed"
                    ? "/tools/unit-converter/speed"
                    : entry.category === "pressure"
                      ? "/tools/unit-converter/pressure"
                      : entry.category === "angle"
                        ? "/tools/unit-converter/angle"
                        : entry.category === "number-system"
                          ? "/tools/developer/numbersystem-converter"
                          : "/tools/unit-converter/length";
  const converterLabel =
    entry.category === "color-picker" ||
    entry.category === "length" ||
    entry.category === "weight" ||
    entry.category === "temperature" ||
    entry.category === "area" ||
    entry.category === "volume" ||
    entry.category === "speed" ||
    entry.category === "time" ||
    entry.category === "digital" ||
    entry.category === "pressure" ||
    entry.category === "energy" ||
    entry.category === "power" ||
    entry.category === "angle"
      ? localizedConverterLabel ||
        (entry.category === "length"
          ? "Length Converter"
          : entry.category === "weight"
            ? "Weight Converter"
            : entry.category === "temperature"
              ? "Temperature Converter"
              : entry.category === "area"
                ? "Area Converter"
                : entry.category === "volume"
                  ? "Volume Converter"
                  : entry.category === "speed"
                    ? "Speed Converter"
                    : entry.category === "time"
                      ? "Time Converter"
                      : entry.category === "digital"
                        ? "Digital Storage Converter"
                        : entry.category === "pressure"
                          ? "Pressure Converter"
                          : entry.category === "energy"
                            ? "Energy Converter"
                            : entry.category === "power"
                              ? "Power Converter"
                              : entry.category === "angle"
                                ? "Angle Converter"
                                : "Color Picker")
      : entry.category === "gpa"
      ? "GPA Calculator"
      : entry.category === "percentage-calculator"
        ? "Percentage Calculator"
      : entry.category === "number-system"
                          ? "Number System Converter"
                          : "Length Converter";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href={converterHome} className="underline hover:text-slate-300">
            {converterLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-400">
            {entry.category === "color-picker" ||
            entry.category === "length" ||
            entry.category === "weight" ||
            entry.category === "temperature" ||
            entry.category === "area" ||
            entry.category === "volume" ||
            entry.category === "speed" ||
            entry.category === "time" ||
            entry.category === "digital" ||
            entry.category === "pressure" ||
            entry.category === "energy" ||
            entry.category === "power" ||
            entry.category === "angle"
              ? localizedNavFaq
              : "FAQ"}
          </span>
        </nav>

        <header className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h1 className="text-2xl font-bold leading-snug text-slate-100 sm:text-3xl">{entry.question}</h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-slate-200">{entry.directAnswer}</p>
        </header>

        <div className="mt-8">
          <ConverterCta entry={entry} faqPageUi={faqPageUi} />
        </div>

        <section className="mt-10">
          <h2 className="sr-only">
            {entry.category === "color-picker" ||
            entry.category === "length" ||
            entry.category === "weight" ||
            entry.category === "temperature" ||
            entry.category === "area" ||
            entry.category === "volume" ||
            entry.category === "speed" ||
            entry.category === "time" ||
            entry.category === "digital" ||
            entry.category === "pressure" ||
            entry.category === "energy" ||
            entry.category === "power" ||
            entry.category === "angle"
              ? asText(pageUi.detailedAnswerSr) || "Detailed answer"
              : "Detailed answer"}
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-400">
            {entry.category === "gpa" ? (
              <>
                {entry.detailedExplanation
                  .split(/\n\n+/)
                  .map((p) => p.trim())
                  .filter(Boolean)
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </>
            ) : (
              <p>{entry.detailedExplanation}</p>
            )}
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-200">
            {entry.category === "color-picker" ||
            entry.category === "length" ||
            entry.category === "weight" ||
            entry.category === "temperature" ||
            entry.category === "area" ||
            entry.category === "volume" ||
            entry.category === "speed" ||
            entry.category === "time" ||
            entry.category === "digital" ||
            entry.category === "pressure" ||
            entry.category === "energy" ||
            entry.category === "power" ||
            entry.category === "angle"
              ? localizedRelationshipTitle
              : "Relationship context"}
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">{entry.relationshipContext}</p>
        </section>

        <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-6 text-lg font-semibold text-slate-200">
            {entry.category === "gpa"
              ? "4.0 vs 5.0 Scale (Weighted) — excerpt"
              : entry.category === "color-picker"
                ? colorPickerExampleTableTitle
                : entry.category === "percentage-calculator"
                  ? "Worked example"
                  : entry.category === "length" ||
                      entry.category === "weight" ||
                      entry.category === "temperature" ||
                      entry.category === "area" ||
                      entry.category === "volume" ||
                      entry.category === "speed" ||
                      entry.category === "time" ||
                      entry.category === "digital" ||
                      entry.category === "pressure" ||
                      entry.category === "energy" ||
                      entry.category === "power" ||
                      entry.category === "angle"
                    ? localizedQuickTableTitle
                    : "Quick conversion table"}
          </h2>
          {entry.category === "gpa" ? (
            <GpaFaqScaleTable />
          ) : entry.category === "color-picker" ? (
            <ColorPickerFaqExampleTable faqPageUi={faqPageUi} />
          ) : entry.category === "percentage-calculator" ? (
            <PercentageCalculatorWorkedExampleTable entry={entry} />
          ) : entry.category === "number-system" ? (
            <NumberSystemConversionTablesPair
              fromBase={pairKeyToBase(entry.tableFromKey as NumberSystemPairKey)}
              toBase={pairKeyToBase(entry.tableToKey as NumberSystemPairKey)}
            />
          ) : entry.category === "weight" ? (
            <WeightConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={weightHubUi}
            />
          ) : entry.category === "area" ? (
            <AreaConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={areaHubUi}
            />
          ) : entry.category === "volume" ? (
            <VolumeConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={volumeHubUi}
            />
          ) : entry.category === "time" ? (
            <TimeConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={timeHubUi}
            />
          ) : entry.category === "digital" ? (
            <DigitalConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={digitalHubUi}
            />
          ) : entry.category === "energy" ? (
            <EnergyConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={energyHubUi}
            />
          ) : entry.category === "power" ? (
            <PowerConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={powerHubUi}
            />
          ) : entry.category === "temperature" ? (
            <TemperatureConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={temperatureHubUi}
            />
          ) : entry.category === "speed" ? (
            <SpeedConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={speedHubUi}
            />
          ) : entry.category === "pressure" ? (
            <PressureConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={pressureHubUi}
            />
          ) : entry.category === "angle" ? (
            <AngleConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={angleHubUi}
            />
          ) : (
            <LengthConversionTablesPair
              fromKey={entry.tableFromKey}
              toKey={entry.tableToKey}
              ui={entry.category === "length" ? lengthHubUi : undefined}
            />
          )}
        </section>

        {entry.category === "gpa" ? (
          <GpaFaqRelatedTools />
        ) : entry.category === "color-picker" ? (
          <ColorPickerFaqMoreConverters faqPageUi={faqPageUi} />
        ) : entry.category === "percentage-calculator" ? (
          <PercentageCalculatorFaqMoreTools />
        ) : entry.category === "number-system" ? (
          <NumberSystemHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : entry.category === "weight" ? (
          <WeightHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            weightUi={weightHubUi}
          />
        ) : entry.category === "area" ? (
          <AreaHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            areaUi={areaHubUi}
          />
        ) : entry.category === "volume" ? (
          <VolumeHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            volumeUi={volumeHubUi}
          />
        ) : entry.category === "time" ? (
          <TimeHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            timeUi={timeHubUi}
          />
        ) : entry.category === "digital" ? (
          <DigitalHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            digitalUi={digitalHubUi}
          />
        ) : entry.category === "energy" ? (
          <EnergyHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            energyUi={energyHubUi}
          />
        ) : entry.category === "power" ? (
          <PowerHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            powerUi={powerHubUi}
          />
        ) : entry.category === "temperature" ? (
          <TemperatureHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            temperatureUi={temperatureHubUi}
          />
        ) : entry.category === "speed" ? (
          <SpeedHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            speedUi={speedHubUi}
          />
        ) : entry.category === "pressure" ? (
          <PressureHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            pressureUi={pressureHubUi}
          />
        ) : entry.category === "angle" ? (
          <AngleHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            angleUi={angleHubUi}
          />
        ) : (
          <LengthHubLinkCards
            hubUnitKey={entry.hubUnitKey}
            faqPageUi={faqPageUi}
            lengthUi={lengthHubUi}
          />
        )}

        <div className="mt-10 flex flex-wrap gap-4 border-t border-slate-700 pt-8 text-sm">
          <Link
            href={converterHome}
            className="text-slate-400 underline transition-colors hover:text-slate-200"
          >
            ← {converterLabel}
          </Link>
          {entry.category === "gpa" || entry.category === "percentage-calculator" ? (
            <Link href="/tools/calculator" className="text-slate-400 underline transition-colors hover:text-slate-200">
              All calculators
            </Link>
          ) : entry.category === "number-system" || entry.category === "color-picker" ? (
            <Link href="/tools/developer" className="text-slate-400 underline transition-colors hover:text-slate-200">
              {entry.category === "color-picker" ? colorPickerBackDeveloper : "Developer Tools"}
            </Link>
          ) : (
            <Link href="/tools/unit-converter" className="text-slate-400 underline transition-colors hover:text-slate-200">
              {entry.category === "length" ||
              entry.category === "weight" ||
              entry.category === "temperature" ||
              entry.category === "area" ||
              entry.category === "volume" ||
              entry.category === "speed" ||
              entry.category === "time" ||
              entry.category === "digital" ||
              entry.category === "pressure" ||
              entry.category === "energy" ||
              entry.category === "power" ||
              entry.category === "angle"
                ? localizedBackUnitConverter
                : "Unit Converter"}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
