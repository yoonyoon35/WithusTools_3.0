import { SITE_NAME, SITE_URL } from "@/lib/site";

export const publisherName = SITE_NAME;
export const publisherEmail = "dbsghkwns553@gmail.com" as const;
export const authorDisplayName = SITE_NAME;
export const authorAboutPath = "/about" as const;
export const authorAboutUrl = `${SITE_URL}${authorAboutPath}` as const;

export const publisherOrganization = {
  name: publisherName,
  url: SITE_URL,
  email: publisherEmail,
  logoUrl: `${SITE_URL}/favicon/apple-touch-icon.png`,
} as const;
