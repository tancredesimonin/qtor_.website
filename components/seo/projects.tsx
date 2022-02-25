import { DataItem, LocaleTypeAttributes, PageProjectAttributes, WebsiteAttributes } from 'lib/api/api';
import { getAvailableLocalesStringList, getLanguageAlternates, getLocaleDetails } from 'lib/i18n';
import { getMediaUrl } from 'lib/utils';
import { NextSeo } from 'next-seo'; // doc: https://www.npmjs.com/package/next-seo
import { useRouter } from 'next/router';

interface ProjectPageSeoProps {
    page: PageProjectAttributes;
    global: WebsiteAttributes;
    locales: Array<DataItem<LocaleTypeAttributes>>; 
}
function ProjectPageSeo({ page, global, locales }: ProjectPageSeoProps) {
    const router = useRouter();
    if (page.seo && page.seo.metaImage.data) {
        return (
            <NextSeo
            title={page.seo.metaTitle}
            defaultTitle={global.name}
            titleTemplate={'%s | '+global.name} // interpolate page.title
            description={page.seo.metaDescription}
            canonical={global.domain+`/${page.locale}/`+`${router.pathname}/`+page.slug}
            noindex={!Boolean(page.seo.noIndex)}
            nofollow={!Boolean(page.seo.noIndex)}
            languageAlternates={getLanguageAlternates(global.domain, router.pathname, getAvailableLocalesStringList(page), page )}
            openGraph={{
                title: page.seo.metaTitle,
                site_name: global.name,
                url: global.domain+`/${page.locale}`+`${router.pathname}/`+page.slug.trim(),
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
        canonical={global.domain+`/${page.locale}`+`${router.pathname}/`+page.slug.trim()}
        noindex={!Boolean(page.public)}
        nofollow={!Boolean(page.public)}
        languageAlternates={getLanguageAlternates(global.domain, router.pathname, getAvailableLocalesStringList(page), page )}
        openGraph={{
            title: page.name,
            site_name: global.name,
            url: global.domain+`/${page.locale}`+`${router.pathname}/`+page.slug.trim(),
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