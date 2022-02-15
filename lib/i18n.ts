

interface LocaleDetail {
    shortCode: string;
    code: string;
    label: string;
    localizedLabel: string;
}
export function getLocaleDetails(localeCode: string) : LocaleDetail {
    if (localeCode === 'fr') {
      return {shortCode: 'fr', code: 'fr-FR', label: 'french', localizedLabel: 'français'}
    }
    else {
      return {shortCode: 'en', code: 'en-US', label: 'english', localizedLabel: 'english'}
    }
  }