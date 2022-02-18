

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