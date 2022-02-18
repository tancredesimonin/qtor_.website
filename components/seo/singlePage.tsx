import { GlobalAttributes, SinglePageSharedAttributes } from 'lib/api/api';
import { getLocaleDetails } from 'lib/i18n';
import { getMediaUrl } from 'lib/utils';
import { NextSeo } from 'next-seo'; // doc: https://www.npmjs.com/package/next-seo

function SinglePageSeo({page, global}: {page: SinglePageSharedAttributes, global: GlobalAttributes}) {

        return (
            <NextSeo
            title={page.seo.metaTitle}
            defaultTitle={global.websiteTitle}
            titleTemplate={'%s | '+global.websiteTitle} // interpolate page.title
            description={page.seo.metaDescription}
            canonical={process.env.NEXT_PUBLIC_URL+page.seo.canonicalURL}
            noindex={!Boolean(page.seo.noIndex)}
            nofollow={!Boolean(page.seo.noIndex)}
            languageAlternates={[
                {
                    hrefLang: 'en-US',
                    href: process.env.NEXT_PUBLIC_URL+'/en'+page.seo.canonicalURL
                },
                {
                    hrefLang: 'fr-FR',
                    href: process.env.NEXT_PUBLIC_URL+'/fr'+page.seo.canonicalURL
                }
            ]}
            openGraph={{
                title: page.seo.metaTitle,
                site_name: global.websiteTitle,
                url: process.env.NEXT_PUBLIC_URL+'/'+page.locale+page.seo.canonicalURL,
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


export default SinglePageSeo;