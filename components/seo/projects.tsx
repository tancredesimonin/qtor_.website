import { PageProjectAttributes, SettingsI18nAttributes, WebsiteAttributes } from 'lib/api/api';
import { getLocaleDetails, getOtherLocaleDetails } from 'lib/i18n';
import { getMediaUrl } from 'lib/utils';
import { NextSeo } from 'next-seo'; // doc: https://www.npmjs.com/package/next-seo
import { useRouter } from 'next/router';

interface ProjectPageSeoProps {
    page: PageProjectAttributes;
    global: WebsiteAttributes;
    locales: Array<SettingsI18nAttributes>; 
}
function ProjectPageSeo({ page, global, locales }: ProjectPageSeoProps) {
    const router = useRouter();
    const defaultLocaleShortCode = locales.filter(locale => {return locale.isDefault === true})[0].code;
    const otherLocaleShortCode = locales.filter(locale => {return locale.isDefault !== true})[0].code;
    const defaultLocaleSlug = page.locale === defaultLocaleShortCode ? page.slug : page.localizations.data[0].attributes.slug;
    const otherLocaleSlug = page.locale === otherLocaleShortCode ? page.localizations.data[0].attributes.slug : page.slug;

    if (page.seo) {
        return (
            <NextSeo
            title={page.seo.metaTitle}
            defaultTitle={global.name}
            titleTemplate={'%s | '+global.name} // interpolate page.title
            description={page.seo.metaDescription}
            canonical={global.domain+`/${page.locale}/`+`${router.pathname}/`+page.slug}
            noindex={!Boolean(page.seo.noIndex)}
            nofollow={!Boolean(page.seo.noIndex)}
            languageAlternates={[
                {
                    hrefLang: getLocaleDetails(defaultLocaleShortCode).i18nCode,
                    href: global.domain+`${router.pathname}/`+defaultLocaleSlug
                },
                {
                    hrefLang: getLocaleDetails(otherLocaleShortCode).i18nCode,
                    href: global.domain+`${otherLocaleShortCode}/`+`${router.pathname}/`+otherLocaleSlug
                },
            ]}
            openGraph={{
                title: page.seo.metaTitle,
                site_name: global.name,
                url: global.domain+`/${page.locale}/`+`${router.pathname}/`+page.slug,
                description: page.seo.metaDescription,
                images: [{
                    url: getMediaUrl(page.seo.metaImage.data),
                    alt: page.seo.metaImage.data.attributes.alternativeText,
                    type: page.seo.metaImage.data.attributes.mime,
                    width: page.seo.metaImage.data.attributes.width,
                    height: page.seo.metaImage.data.attributes.height,
                }],
                locale: getLocaleDetails(page.locale).i18nCode,
            }}
            />
        )
    }

    return (
        <NextSeo
        title={page.name}
        defaultTitle={global.name}
        titleTemplate={'%s | '+global.name} // interpolate page.title
        // description={page.seo.metaDescription}
        canonical={global.domain+`/${page.locale}/`+`${router.pathname}/`+page.slug}
        noindex={!Boolean(page.public)}
        nofollow={!Boolean(page.public)}
        languageAlternates={[
            {
                hrefLang: getLocaleDetails(defaultLocaleShortCode).i18nCode,
                href: global.domain+`${router.pathname}/`+defaultLocaleSlug
            },
            {
                hrefLang: getLocaleDetails(otherLocaleShortCode).i18nCode,
                href: global.domain+`${otherLocaleShortCode}/`+`${router.pathname}/`+otherLocaleSlug
            },
        ]}
        openGraph={{
            title: page.name,
            site_name: global.name,
            url: global.domain+`/${page.locale}/`+`${router.pathname}/`+page.slug,
            // description: page.seo.metaDescription,
            // images: [{
            //     url: getMediaUrl(page.seo.metaImage.data),
            //     alt: page.seo.metaImage.data.attributes.alternativeText,
            //     type: page.seo.metaImage.data.attributes.mime,
            //     width: page.seo.metaImage.data.attributes.width,
            //     height: page.seo.metaImage.data.attributes.height,
            // }],
            locale: getLocaleDetails(page.locale).i18nCode,
        }}
        />
    )
}


export default ProjectPageSeo;