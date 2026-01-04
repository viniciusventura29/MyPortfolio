import { translations, defaultLocale, type Locale, languages } from './translations';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as Locale;
  }
  return defaultLocale;
}

export function useTranslations(lang: Locale) {
  return translations[lang];
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if path already has a locale prefix
  const pathParts = cleanPath.split('/');
  const firstPart = pathParts[0];
  
  if (firstPart in languages) {
    // Replace the existing locale
    pathParts[0] = locale;
    return '/' + pathParts.join('/');
  }
  
  // Add locale prefix
  return `/${locale}/${cleanPath}`;
}

export function getPathWithoutLocale(pathname: string): string {
  const [, potentialLocale, ...rest] = pathname.split('/');
  
  if (potentialLocale in languages) {
    return '/' + rest.join('/');
  }
  
  return pathname;
}

export function getAlternateLocale(currentLocale: Locale): Locale {
  return currentLocale === 'en' ? 'pt' : 'en';
}

export { languages, defaultLocale, type Locale };

