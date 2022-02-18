import { GlobalAttributes, ProjectAttributes, SettingsI18nAttributes } from 'lib/api/api';
import { getLocaleDetails, getOtherLocaleDetails } from 'lib/i18n';
import { getMediaUrl } from 'lib/utils';
import { NextSeo } from 'next-seo'; // doc: https://www.npmjs.com/package/next-seo
import { useRouter } from 'next/router';

interface ProjectPageSeoProps {
    page: ProjectAttributes;
    global: GlobalAttributes;
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
            defaultTitle={global.websiteTitle}
            titleTemplate={'%s | '+global.websiteTitle} // interpolate page.title
            description={page.seo.metaDescription}
            canonical={process.env.NEXT_PUBLIC_URL+`/${page.locale}/`+`${router.pathname}/`+page.slug}
            noindex={!Boolean(page.seo.noIndex)}
            nofollow={!Boolean(page.seo.noIndex)}
            languageAlternates={[
                {
                    hrefLang: getLocaleDetails(defaultLocaleShortCode).i18nCode,
                    href: process.env.NEXT_PUBLIC_URL+`${router.pathname}/`+defaultLocaleSlug
                },
                {
                    hrefLang: getLocaleDetails(otherLocaleShortCode).i18nCode,
                    href: process.env.NEXT_PUBLIC_URL+`${router.pathname}/`+`${otherLocaleShortCode}/`+otherLocaleSlug
                },
            ]}
            openGraph={{
                title: page.seo.metaTitle,
                site_name: global.websiteTitle,
                url: process.env.NEXT_PUBLIC_URL+`/${page.locale}/`+`${router.pathname}/`+page.slug,
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
        defaultTitle={global.websiteTitle}
        titleTemplate={'%s | '+global.websiteTitle} // interpolate page.title
        // description={page.seo.metaDescription}
        canonical={process.env.NEXT_PUBLIC_URL+`/${page.locale}/`+`${router.pathname}/`+page.slug}
        noindex={!Boolean(page.public)}
        nofollow={!Boolean(page.public)}
        languageAlternates={[
            {
                hrefLang: getLocaleDetails(defaultLocaleShortCode).i18nCode,
                href: process.env.NEXT_PUBLIC_URL+`${router.pathname}/`+defaultLocaleSlug
            },
            {
                hrefLang: getLocaleDetails(otherLocaleShortCode).i18nCode,
                href: process.env.NEXT_PUBLIC_URL+`${router.pathname}/`+`${otherLocaleShortCode}/`+otherLocaleSlug
            },
        ]}
        openGraph={{
            title: page.name,
            site_name: global.websiteTitle,
            url: process.env.NEXT_PUBLIC_URL+`/${page.locale}/`+`${router.pathname}/`+page.slug,
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