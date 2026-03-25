import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { AngleConversionTablesPair } from "@/components/AngleConversionTable";
import { AreaConversionTablesPair } from "@/components/AreaConversionTable";
import { DigitalConversionTablesPair } from "@/components/DigitalConversionTable";
import { EnergyConversionTablesPair } from "@/components/EnergyConversionTable";
import { LengthConversionTablesPair } from "@/components/LengthConversionTable";
import { PressureConversionTablesPair } from "@/components/PressureConversionTable";
import { SpeedConversionTablesPair } from "@/components/SpeedConversionTable";
import { TemperatureConversionTablesPair } from "@/components/TemperatureConversionTable";
import { TimeConversionTablesPair } from "@/components/TimeConversionTable";
import { VolumeConversionTablesPair } from "@/components/VolumeConversionTable";
import { WeightConversionTablesPair } from "@/components/WeightConversionTable";
import { getFaqEntry, getAllFaqStaticParams, type FaqEntry } from "@/data/faq-data";
import {
  getOutboundAngleHubLinks,
  getOutboundAreaHubLinks,
  getOutboundDigitalHubLinks,
  getOutboundEnergyHubLinks,
  getOutboundLengthHubLinks,
  getOutboundPressureHubLinks,
  getOutboundSpeedHubLinks,
  getOutboundTemperatureHubLinks,
  getOutboundTimeHubLinks,
  getOutboundVolumeHubLinks,
  getOutboundWeightHubLinks,
  ANGLE_KEY_TO_SLUG,
  ANGLE_UNITS,
  AREA_KEY_TO_SLUG,
  AREA_UNITS,
  DIGITAL_KEY_TO_SLUG,
  DIGITAL_UNITS,
  ENERGY_KEY_TO_SLUG,
  ENERGY_UNITS,
  LENGTH_KEY_TO_SLUG,
  PRESSURE_KEY_TO_SLUG,
  PRESSURE_UNITS,
  SPEED_KEY_TO_SLUG,
  SPEED_UNITS,
  TEMPERATURE_KEY_TO_SLUG,
  TEMPERATURE_UNITS,
  LENGTH_UNITS,
  TIME_KEY_TO_SLUG,
  TIME_UNITS,
  VOLUME_KEY_TO_SLUG,
  VOLUME_UNITS,
  WEIGHT_KEY_TO_SLUG,
  WEIGHT_UNITS,
} from "@/utils/conversions";

export function generateStaticParams() {
  return getAllFaqStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const entry = getFaqEntry(params.category, params.slug);
  if (!entry) {
    return createMetadata({ title: "FAQ", noIndex: true });
  }
  const title = `${entry.question} - Quick Answer & Calculator`;
  const description = `${entry.directAnswer} Learn more about ${entry.seoUnitA} to ${entry.seoUnitB} conversion with our detailed guide and easy-to-use calculator.`;
  return createMetadata({
    title,
    description,
    path: `/faq/${entry.category}/${entry.slug}`,
    keywords: entry.keywords ?? ["FAQ", "unit conversion", "withustools"],
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

function ConverterCta({ entry }: { entry: FaqEntry }) {
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

function LengthHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = LENGTH_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.name;
  const links = getOutboundLengthHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hub.nameSg ?? hub.name} to every other common length unit (meter, kilometer,
        centimeter, millimeter, inch, feet, mile, yard).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = LENGTH_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = LENGTH_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = LENGTH_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function AreaHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = AREA_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.name;
  const links = getOutboundAreaHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hub.nameSg ?? hub.name} to every other common area unit (square meter,
        square kilometer, hectare, acre, square feet, square yard, square inch, square mile).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = AREA_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = AREA_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = AREA_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function VolumeHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = VOLUME_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.name;
  const links = getOutboundVolumeHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hub.nameSg ?? hub.name} to every other hub volume unit (liter, cubic meter,
        US gallon, US fluid ounce, cubic foot, US tablespoon, US teaspoon, cubic inch).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = VOLUME_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = VOLUME_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = VOLUME_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function WeightHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = WEIGHT_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.name;
  const links = getOutboundWeightHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hub.nameSg ?? hub.name} to every other common weight unit (kilogram, gram,
        milligram, pound, ounce, metric ton, stone, US short ton).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = WEIGHT_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = WEIGHT_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = WEIGHT_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function TimeHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = TIME_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.name;
  const links = getOutboundTimeHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hub.nameSg ?? hub.name} to every other hub time unit (year, month, week, day,
        hour, minute, second, millisecond).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = TIME_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = TIME_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = TIME_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function DigitalHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = DIGITAL_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.name;
  const links = getOutboundDigitalHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hub.nameSg ?? hub.name} to every other hub digital unit (gigabyte, terabyte,
        megabyte, byte, kilobyte, petabyte, bit, megabit).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = DIGITAL_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = DIGITAL_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = DIGITAL_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function EnergyHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = ENERGY_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.name;
  const links = getOutboundEnergyHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hub.nameSg ?? hub.name} to every other hub energy unit (kilocalorie,
        kilowatt-hour, calorie, joule, kilojoule, watt-hour, BTU, electronvolt).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = ENERGY_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = ENERGY_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = ENERGY_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function TemperatureHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = TEMPERATURE_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.nameSg ?? hub.name;
  const links = getOutboundTemperatureHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hubName} to the other scales (Celsius, Fahrenheit, Kelvin, Rankine).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = TEMPERATURE_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = TEMPERATURE_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = TEMPERATURE_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function SpeedHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = SPEED_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.nameSg ?? hub.name;
  const links = getOutboundSpeedHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hub.nameSg ?? hub.name} to every other hub speed unit (m/s, km/h, mph, knots,
        ft/s, Mach, Beaufort, c).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = SPEED_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = SPEED_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = SPEED_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function AngleHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = ANGLE_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.nameSg ?? hub.name;
  const links = getOutboundAngleHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hub.nameSg ?? hub.name} to every other hub angle unit (turn, deg, arcmin, arcsec,
        grad, rad, mrad, mil).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = ANGLE_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = ANGLE_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = ANGLE_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function PressureHubLinkCards({ hubUnitKey }: { hubUnitKey: string }) {
  const hub = PRESSURE_UNITS[hubUnitKey];
  if (!hub) return null;
  const hubName = hub.nameSg ?? hub.name;
  const links = getOutboundPressureHubLinks(hubUnitKey);

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">More {hubName} converters</h2>
      <p className="mb-6 text-sm text-slate-500">
        Dedicated pages from {hub.nameSg ?? hub.name} to every other hub pressure unit (bar, atm, PSI, kPa,
        hPa, torr, mmHg, Pa).
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ toKey, href }) => {
          const toU = PRESSURE_UNITS[toKey];
          const fromSg = hub.nameSg ?? hub.name;
          const toSg = toU.nameSg ?? toU.name;
          const fromSlug = PRESSURE_KEY_TO_SLUG[hubUnitKey] ?? hubUnitKey;
          const toSlug = PRESSURE_KEY_TO_SLUG[toKey] ?? toKey;
          return (
            <li key={toKey}>
              <Link
                href={href}
                className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span className="font-medium text-slate-200">
                  {fromSlug} to {toSlug} ({fromSg} to {toSg})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function FaqPage({ params }: { params: { category: string; slug: string } }) {
  const entry = getFaqEntry(params.category, params.slug);
  if (!entry) notFound();

  const pageUrl = `https://withustools.com/faq/${entry.category}/${entry.slug}`;
  const jsonLd = buildFaqJsonLd(entry, pageUrl);
  const converterHome =
    entry.category === "weight"
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
                : entry.category === "temperature"
                  ? "/tools/unit-converter/temperature"
                  : entry.category === "speed"
                    ? "/tools/unit-converter/speed"
                    : entry.category === "pressure"
                      ? "/tools/unit-converter/pressure"
                      : entry.category === "angle"
                        ? "/tools/unit-converter/angle"
                        : "/tools/unit-converter/length";
  const converterLabel =
    entry.category === "weight"
      ? "Weight Converter"
      : entry.category === "area"
        ? "Area Converter"
        : entry.category === "volume"
          ? "Volume Converter"
          : entry.category === "time"
            ? "Time Converter"
            : entry.category === "digital"
              ? "Digital Storage Converter"
              : entry.category === "energy"
                ? "Energy Converter"
                : entry.category === "temperature"
                  ? "Temperature Converter"
                  : entry.category === "speed"
                    ? "Speed Converter"
                    : entry.category === "pressure"
                      ? "Pressure Converter"
                      : entry.category === "angle"
                        ? "Angle Converter"
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
          <span className="text-slate-400">FAQ</span>
        </nav>

        <header className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h1 className="text-2xl font-bold leading-snug text-slate-100 sm:text-3xl">{entry.question}</h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-slate-200">{entry.directAnswer}</p>
        </header>

        <div className="mt-8">
          <ConverterCta entry={entry} />
        </div>

        <section className="mt-10">
          <h2 className="sr-only">Detailed answer</h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-400">
            <p>{entry.detailedExplanation}</p>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-200">Relationship context</h2>
          <p className="text-sm leading-relaxed text-slate-400">{entry.relationshipContext}</p>
        </section>

        <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-6 text-lg font-semibold text-slate-200">Quick conversion table</h2>
          {entry.category === "weight" ? (
            <WeightConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          ) : entry.category === "area" ? (
            <AreaConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          ) : entry.category === "volume" ? (
            <VolumeConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          ) : entry.category === "time" ? (
            <TimeConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          ) : entry.category === "digital" ? (
            <DigitalConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          ) : entry.category === "energy" ? (
            <EnergyConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          ) : entry.category === "temperature" ? (
            <TemperatureConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          ) : entry.category === "speed" ? (
            <SpeedConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          ) : entry.category === "pressure" ? (
            <PressureConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          ) : entry.category === "angle" ? (
            <AngleConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          ) : (
            <LengthConversionTablesPair fromKey={entry.tableFromKey} toKey={entry.tableToKey} />
          )}
        </section>

        {entry.category === "weight" ? (
          <WeightHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : entry.category === "area" ? (
          <AreaHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : entry.category === "volume" ? (
          <VolumeHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : entry.category === "time" ? (
          <TimeHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : entry.category === "digital" ? (
          <DigitalHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : entry.category === "energy" ? (
          <EnergyHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : entry.category === "temperature" ? (
          <TemperatureHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : entry.category === "speed" ? (
          <SpeedHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : entry.category === "pressure" ? (
          <PressureHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : entry.category === "angle" ? (
          <AngleHubLinkCards hubUnitKey={entry.hubUnitKey} />
        ) : (
          <LengthHubLinkCards hubUnitKey={entry.hubUnitKey} />
        )}

        <div className="mt-10 flex flex-wrap gap-4 border-t border-slate-700 pt-8 text-sm">
          <Link
            href={converterHome}
            className="text-slate-400 underline transition-colors hover:text-slate-200"
          >
            ← {converterLabel}
          </Link>
          <Link href="/tools/unit-converter" className="text-slate-400 underline transition-colors hover:text-slate-200">
            Unit Converter
          </Link>
        </div>
      </div>
    </>
  );
}
