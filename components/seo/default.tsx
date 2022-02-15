import { GlobalAttributes, PageSharedAttributes } from 'lib/api/api';
import { getLocaleDetails } from 'lib/i18n';
import { NextSeo } from 'next-seo'; // doc: https://www.npmjs.com/package/next-seo

interface SeoProps {
    page: PageSharedAttributes;
    global: GlobalAttributes;
}
function Seo({page, global}: SeoProps) {
    if (page.seo.noIndex === true) {
        return (
            <NextSeo
            title={page.seo.metaTitle}
            defaultTitle={global.websiteTitle}
            titleTemplate={'%s | '+global.websiteTitle} // interpolate page.title
            description={page.seo.metaDescription}
            canonical={process.env.NEXT_PUBLIC_URL+page.seo.canonicalURL}
            noindex={true}
            nofollow={true}
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
            />
        )
    }

    return (
        <NextSeo
        title={page.seo.metaTitle}
        defaultTitle={global.websiteTitle}
        titleTemplate={'%s | '+global.websiteTitle} // interpolate page.title
        description={page.seo.metaDescription}
        canonical={process.env.NEXT_PUBLIC_URL+page.seo.canonicalURL}
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
                url: page.seo.metaImage?.data?.attributes?.url ? process.env.NEXT_PUBLIC_CDN_URL+page.seo.metaImage.data.attributes.url : process.env.NEXT_PUBLIC_URL+'/imgs/defaultMeta.png',
                alt: page.seo.metaImage?.data?.attributes?.alternativeText ? page.seo.metaImage?.data?.attributes?.alternativeText : 'image representing '+page.seo.metaTitle,
                type: page.seo.metaImage?.data?.attributes?.mime ? page.seo.metaImage?.data?.attributes?.mime : 'image/png',
                width: page.seo.metaImage?.data?.attributes?.width ? page.seo.metaImage?.data?.attributes?.width : 1200,
                height: page.seo.metaImage?.data?.attributes?.height ? page.seo.metaImage?.data?.attributes?.height : 630,
            }],
            locale: getLocaleDetails(page.locale).code,
        }}
        />
    )
}


export default Seo;