import { Link } from "@/components/I18nLink";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import {
  getNonHubDiscoveryLinks,
  type NonHubPairLinkItem,
  type UnitConverterNonHubCategory,
} from "@/utils/unitConverterNonHubLinks";
import { parseAnglePairSlug, parseAreaPairSlug, parseDigitalPairSlug, parseEnergyPairSlug, parseLengthPairSlug, parsePowerPairSlug, parsePressurePairSlug, parseSpeedPairSlug, parseTemperaturePairSlug, parseTimePairSlug, parseVolumePairSlug, parseWeightPairSlug } from "@/utils/conversions";
import { areaUnitLabel, areaUnitSlug } from "@/app/[locale]/tools/unit-converter/area/areaPairUi";
import { volumeUnitLabel, volumeUnitSlug } from "@/app/[locale]/tools/unit-converter/volume/volumePairUi";
import { speedUnitLabel, speedUnitSlug } from "@/app/[locale]/tools/unit-converter/speed/speedPairUi";
import { timeUnitLabel, timeUnitSlug } from "@/app/[locale]/tools/unit-converter/time/timePairUi";
import { digitalUnitLabel, digitalUnitSlug } from "@/app/[locale]/tools/unit-converter/digital/digitalPairUi";
import { pressureUnitLabel, pressureUnitSlug } from "@/app/[locale]/tools/unit-converter/pressure/pressurePairUi";
import { energyUnitLabel, energyUnitSlug } from "@/app/[locale]/tools/unit-converter/energy/energyPairUi";
import { powerUnitLabel, powerUnitSlug } from "@/app/[locale]/tools/unit-converter/power/powerPairUi";
import { angleUnitLabel, angleUnitSlug } from "@/app/[locale]/tools/unit-converter/angle/anglePairUi";
import { lengthUnitLabel, lengthUnitSlug } from "@/app/[locale]/tools/unit-converter/length/lengthPairUi";
import { temperatureUnitLabel, temperatureUnitSlug } from "@/app/[locale]/tools/unit-converter/temperature/temperaturePairUi";
import { weightUnitLabel, weightUnitSlug } from "@/app/[locale]/tools/unit-converter/weight/weightPairUi";

interface UnitConverterNonHubPairLinksProps {
  category: UnitConverterNonHubCategory;
  fromKey: string;
  toKey: string;
  ui?: unknown;
}

function localizeLengthNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parseLengthPairSlug(slug);
  if (!pair) return link;
  const fromSlug = lengthUnitSlug(pair.from);
  const toSlug = lengthUnitSlug(pair.to);
  const fromName = lengthUnitLabel(ui, pair.from, "nameSg");
  const toName = lengthUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizeWeightNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parseWeightPairSlug(slug);
  if (!pair) return link;
  const fromSlug = weightUnitSlug(pair.from);
  const toSlug = weightUnitSlug(pair.to);
  const fromName = weightUnitLabel(ui, pair.from, "nameSg");
  const toName = weightUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizeAreaNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parseAreaPairSlug(slug);
  if (!pair) return link;
  const fromSlug = areaUnitSlug(pair.from);
  const toSlug = areaUnitSlug(pair.to);
  const fromName = areaUnitLabel(ui, pair.from, "nameSg");
  const toName = areaUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizeTimeNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parseTimePairSlug(slug);
  if (!pair) return link;
  const fromSlug = timeUnitSlug(pair.from);
  const toSlug = timeUnitSlug(pair.to);
  const fromName = timeUnitLabel(ui, pair.from, "nameSg");
  const toName = timeUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizeSpeedNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parseSpeedPairSlug(slug);
  if (!pair) return link;
  const fromSlug = speedUnitSlug(pair.from);
  const toSlug = speedUnitSlug(pair.to);
  const fromName = speedUnitLabel(ui, pair.from, "nameSg");
  const toName = speedUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizeVolumeNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parseVolumePairSlug(slug);
  if (!pair) return link;
  const fromSlug = volumeUnitSlug(pair.from);
  const toSlug = volumeUnitSlug(pair.to);
  const fromName = volumeUnitLabel(ui, pair.from, "nameSg");
  const toName = volumeUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizeDigitalNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parseDigitalPairSlug(slug);
  if (!pair) return link;
  const fromSlug = digitalUnitSlug(pair.from);
  const toSlug = digitalUnitSlug(pair.to);
  const fromName = digitalUnitLabel(ui, pair.from, "nameSg");
  const toName = digitalUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizeAngleNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parseAnglePairSlug(slug);
  if (!pair) return link;
  const fromSlug = angleUnitSlug(pair.from);
  const toSlug = angleUnitSlug(pair.to);
  const fromName = angleUnitLabel(ui, pair.from, "nameSg");
  const toName = angleUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizePowerNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parsePowerPairSlug(slug);
  if (!pair) return link;
  const fromSlug = powerUnitSlug(pair.from);
  const toSlug = powerUnitSlug(pair.to);
  const fromName = powerUnitLabel(ui, pair.from, "nameSg");
  const toName = powerUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizeEnergyNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parseEnergyPairSlug(slug);
  if (!pair) return link;
  const fromSlug = energyUnitSlug(pair.from);
  const toSlug = energyUnitSlug(pair.to);
  const fromName = energyUnitLabel(ui, pair.from, "nameSg");
  const toName = energyUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizePressureNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parsePressurePairSlug(slug);
  if (!pair) return link;
  const fromSlug = pressureUnitSlug(pair.from);
  const toSlug = pressureUnitSlug(pair.to);
  const fromName = pressureUnitLabel(ui, pair.from, "nameSg");
  const toName = pressureUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

function localizeTemperatureNonHubLink(link: NonHubPairLinkItem, ui: unknown): NonHubPairLinkItem {
  const pageUi = asMap(ui);
  const slug = link.href.split("/").pop() ?? "";
  const pair = parseTemperaturePairSlug(slug);
  if (!pair) return link;
  const fromSlug = temperatureUnitSlug(pair.from);
  const toSlug = temperatureUnitSlug(pair.to);
  const fromName = temperatureUnitLabel(ui, pair.from, "nameSg");
  const toName = temperatureUnitLabel(ui, pair.to, "nameSg");
  return {
    href: link.href,
    line1: formatUi(asText(pageUi.nonHubLine1), { fromSlug, toSlug }) || link.line1,
    line2: formatUi(asText(pageUi.nonHubLine2), { fromName, toName }) || link.line2,
  };
}

export default function UnitConverterNonHubPairLinks({
  category,
  fromKey,
  toKey,
  ui,
}: UnitConverterNonHubPairLinksProps) {
  const pageUi = asMap(ui);
  const rawLinks = getNonHubDiscoveryLinks(category, fromKey, toKey, 12);
  const links =
    category === "length" && ui
      ? rawLinks.map((link) => localizeLengthNonHubLink(link, ui))
      : category === "weight" && ui
        ? rawLinks.map((link) => localizeWeightNonHubLink(link, ui))
        : category === "temperature" && ui
          ? rawLinks.map((link) => localizeTemperatureNonHubLink(link, ui))
          : category === "area" && ui
            ? rawLinks.map((link) => localizeAreaNonHubLink(link, ui))
            : category === "volume" && ui
              ? rawLinks.map((link) => localizeVolumeNonHubLink(link, ui))
              : category === "speed" && ui
                ? rawLinks.map((link) => localizeSpeedNonHubLink(link, ui))
                : category === "time" && ui
                  ? rawLinks.map((link) => localizeTimeNonHubLink(link, ui))
                  : category === "digital" && ui
                    ? rawLinks.map((link) => localizeDigitalNonHubLink(link, ui))
                    : category === "pressure" && ui
                      ? rawLinks.map((link) => localizePressureNonHubLink(link, ui))
                      : category === "energy" && ui
                        ? rawLinks.map((link) => localizeEnergyNonHubLink(link, ui))
                        : category === "power" && ui
                          ? rawLinks.map((link) => localizePowerNonHubLink(link, ui))
                          : category === "angle" && ui
                            ? rawLinks.map((link) => localizeAngleNonHubLink(link, ui))
                            : rawLinks;
  if (links.length === 0) return null;

  const localizedCategory =
    category === "length" ||
    category === "weight" ||
    category === "temperature" ||
    category === "area" ||
    category === "volume" ||
    category === "speed" ||
    category === "time" ||
    category === "digital" ||
    category === "pressure" ||
    category === "energy" ||
    category === "power" ||
    category === "angle";
  const title =
    localizedCategory && asText(pageUi.nonHubTitle)
      ? asText(pageUi.nonHubTitle)
      : "Conversions outside the hub list";
  const intro =
    localizedCategory && asText(pageUi.nonHubIntro)
      ? asText(pageUi.nonHubIntro)
      : "The grid on the category page lists hub units only. These pairs include at least one unit outside that hub set (same tools: formulas and tables on each page).";

  return (
    <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="mb-2 text-lg font-semibold text-slate-200">{title}</h2>
      <p className="mb-4 text-sm leading-relaxed text-slate-500">{intro}</p>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {links.map(({ href, line1, line2 }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex flex-col rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800/60"
            >
              <span className="font-medium text-slate-200">{line1}</span>
              <span className="mt-0.5 text-xs text-slate-500">{line2}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
