import { SinglePageSharedAttributes, WebsiteAttributes } from 'lib/api/api';
import { getLocaleDetails } from 'lib/i18n';
import { getMediaUrl } from 'lib/utils';
import { NextSeo } from 'next-seo'; // doc: https://www.npmjs.com/package/next-seo

function SinglePageSeo({ page, global }: {page: SinglePageSharedAttributes, global: WebsiteAttributes}) {

        return (
            <NextSeo
            title={page.seo.metaTitle}
            defaultTitle={global.name}
            titleTemplate={'%s | '+global.name} // interpolate page.title
            description={page.seo.metaDescription}
            canonical={global.domain+page.seo.canonicalURL}
            noindex={!Boolean(page.seo.noIndex)}
            nofollow={!Boolean(page.seo.noIndex)}
            languageAlternates={[
                {
                    hrefLang: 'en-US',
                    href: global.domain+'/en'+page.seo.canonicalURL
                },
                {
                    hrefLang: 'fr-FR',
                    href: global.domain+'/fr'+page.seo.canonicalURL
                }
            ]}
            openGraph={{
                title: page.seo.metaTitle,
                site_name: global.name,
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