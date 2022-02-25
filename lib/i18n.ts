import { DataItem, Either, LocaleTypeAttributes } from "./api/api";


interface LocaleDetail {
    shortCode: string;
    i18nCode: string;
    label: string;
    localizedLabel: string;
}
export function getLocaleDetails(localeCode: string) : LocaleDetail {
    if (localeCode === 'fr') {
      return {shortCode: 'fr', i18nCode: 'fr-FR', label: 'french', localizedLabel: 'français'}
    }
    else {
      return {shortCode: 'en', i18nCode: 'en-US', label: 'english', localizedLabel: 'english'}
    }
}

export function getOtherLocaleDetails(localeCode: string) : LocaleDetail {
  if (localeCode === 'en') {
    return getLocaleDetails('fr')
  }
  else return getLocaleDetails('en')
}

export interface LocalizedEntry {
  locale: string;
  slug?: string;
  localizations: {
    data: Array<Either<{id: number; attributes: {locale: string; slug?: string;}}, null> >
  }
}

/**
 * Checks if there is alternate locale version of a given entry
 * @param localizationsData the array of localized entries, if exists
 */
export function hasAlternateLocales(localizationsData: Array<Either<{id: number; attributes: {locale: string; slug?: string;}}, null> > ): boolean {
  return localizationsData.length > 0
}

/**
 * 
 * @param entry any localized object from the CMS
 * @returns the list of available localizations shortcode for the given object
 * ex: 
 * ```
 * ['en', 'fr']
 * ```
 */
export function getAvailableLocalesStringList(entry: LocalizedEntry): string[] {
  let locales = [];
  locales.push(entry.locale);
  if (hasAlternateLocales(entry.localizations.data)) {
    locales.push(...entry.localizations.data.map((localizedEntry) => localizedEntry.attributes.locale))
  }
  return locales;
}

/**
 * 
 * @param entry any localized object from the CMS
 * @param locales list of LocaleType from the CMS
 * @returns filtered list of LocaleType which are existing in the current entry
 */
export function getAvailableLocalesTypeList(entry: LocalizedEntry, locales: Array<DataItem<LocaleTypeAttributes>>) : Array<DataItem<LocaleTypeAttributes>> {
  const availableLocsInItem = getAvailableLocalesStringList(entry);
  return locales.filter(loc => {return availableLocsInItem.includes(loc.attributes.shortCode)})
} 

interface LanguageAlternate {
  hrefLang: string;
  href: string;
}

/**
 * **This function is for specific usage within SEO components**
 * 
 * It returns an array of language alternates formatted for SEO purpose
 * 
 * @param domain naked domain of the website `yourwebsite.com`
 * @param pathname `router.pathname`
 * @param locales list of locales retrieved in the page properties
 * @param page full page object
 */
export function getLanguageAlternates(domain: string, pathname: string, locales: string[], page: LocalizedEntry) {
  let alternates: Array<LanguageAlternate> = [];

  locales.forEach((locale, index) => {
    // handles given locale
    if (index === 0) {
    alternates.push({
      hrefLang: getLocaleDetails(locale).i18nCode,
      href: domain+`/${locale}`+`${pathname}`+ (page.slug ? `/${page.slug.trim()}` : '')
    });
    // handles all other locales, if existing
    // this condition is logically enough to know there is page.localizations.data so I hardcoded the typing - bad practice to improve
    if (index && index > 0) {
          alternates.push({
          hrefLang: getLocaleDetails(locale).i18nCode,
          href: domain+`/${locale}`+`${pathname}/`+ (page.slug ? `/${page.localizations.data.filter(el => el.attributes.locale === locale)[0].attributes.slug!.trim()}` : '')
        });
    }
    }
  })

  return alternates;
}