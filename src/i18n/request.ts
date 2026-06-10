import { getRequestConfig } from "next-intl/server";
import { routing, type Locale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const [base, tools, pathTitles, breadcrumb, pageMeta, hubCards, toolContent] =
    await Promise.all([
      import(`../../messages/${locale}.json`),
      import(`../../messages/${locale}/tools.json`),
      import(`../../messages/${locale}/pathTitles.json`),
      import(`../../messages/${locale}/breadcrumb.json`),
      import(`../../messages/${locale}/pageMeta.json`),
      import(`../../messages/${locale}/hubCards.json`),
      import(`../../messages/${locale}/toolContent.json`),
    ]);

  return {
    locale,
    messages: {
      ...base.default,
      tools: tools.default,
      pathTitles: pathTitles.default,
      breadcrumb: breadcrumb.default,
      pageMeta: pageMeta.default,
      hubCards: hubCards.default,
      toolContent: toolContent.default,
    },
  };
});
