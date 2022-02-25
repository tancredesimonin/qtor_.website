import { DataItem, LocaleTypeAttributes } from "lib/api/api";
import { getLocaleDetails, LocalizedEntry } from "lib/i18n";
import { capitalize } from "lib/style/styles";
import Link from "next/link";

interface LocaleSwitchProps {
    page: LocalizedEntry;
    pathname: string;
    locales: Array<DataItem<LocaleTypeAttributes>>;
}

export default function LocaleSwitch({ page, pathname, locales }: LocaleSwitchProps) {

    // check if there is existing alternative

    // if so return alt link
    return (
        <>
        {locales.length <= 1 ? null : (
            <Link
            href={page.slug ? { href: pathname, query: { slug: page.localizations.data[0].attributes.slug } } : { href: pathname }}
            locale={page.localizations.data[0].attributes.locale}
          >
            <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
              {capitalize(getLocaleDetails(page.localizations.data[0].attributes.locale).localizedLabel)}
            </a>
          </Link>
        )}
      </>
    )
}