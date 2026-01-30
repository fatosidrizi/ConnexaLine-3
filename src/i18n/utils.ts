import { translations, type Locale, type TranslationKeys } from './translations';

export const defaultLocale: Locale = 'de';
export const locales: Locale[] = ['de', 'en'];

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);

  // Check if the first segment (after base) is a locale
  // Handle the base path from astro config
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const baseSegments = base.split('/').filter(Boolean);

  // Get the segment after base
  const localeIndex = baseSegments.length;
  const potentialLocale = segments[localeIndex] as Locale;

  if (locales.includes(potentialLocale)) {
    return potentialLocale;
  }

  return defaultLocale;
}

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}

export function t(locale: Locale): TranslationKeys {
  return translations[locale];
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  // Remove leading slash from path for easier handling
  const cleanPath = path.replace(/^\//, '').replace(/\/$/, '');

  if (locale === defaultLocale) {
    // For default locale (German), no prefix
    return cleanPath ? `${base}/${cleanPath}` : `${base}/`;
  } else {
    // For other locales, add the locale prefix
    return cleanPath ? `${base}/${locale}/${cleanPath}` : `${base}/${locale}/`;
  }
}

export function getAlternateLocale(currentLocale: Locale): Locale {
  return currentLocale === 'de' ? 'en' : 'de';
}

// Map German page paths to English equivalents
const pathMappings: Record<string, Record<Locale, string>> = {
  'impressum': { de: 'impressum', en: 'imprint' },
  'datenschutz': { de: 'datenschutz', en: 'privacy' },
  'imprint': { de: 'impressum', en: 'imprint' },
  'privacy': { de: 'datenschutz', en: 'privacy' },
  '': { de: '', en: '' }
};

export function getEquivalentPath(currentPath: string, targetLocale: Locale): string {
  // Extract just the page name from the path
  const segments = currentPath.split('/').filter(Boolean);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '').split('/').filter(Boolean);

  // Remove base segments
  const pathSegments = segments.slice(base.length);

  // Check if current path has a locale prefix
  const hasLocalePrefix = locales.includes(pathSegments[0] as Locale);
  const actualPath = hasLocalePrefix ? pathSegments.slice(1).join('/') : pathSegments.join('/');

  // Find the equivalent path in target locale
  const mapping = pathMappings[actualPath];
  const targetPath = mapping ? mapping[targetLocale] : actualPath;

  return getLocalizedPath(targetPath, targetLocale);
}
