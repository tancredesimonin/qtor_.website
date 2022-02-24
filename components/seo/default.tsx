import { WebsiteAttributes } from 'lib/api/api';
import { getLocaleDetails } from 'lib/i18n';
import { getMediaUrl } from 'lib/utils';
import { NextSeo } from 'next-seo'; // doc: https://www.npmjs.com/package/next-seo

function DefaultSeo(global: WebsiteAttributes) {
    // I apologize for that absolute mess.
    const image = global.seo?.metaImage?.data?.attributes ? {
        url: getMediaUrl(global.seo.metaImage.data),
        alt: global.seo.metaImage.data.attributes.alternativeText,
        type: global.seo.metaImage.data.attributes.mime,
        width: global.seo.metaImage.data.attributes.width,
        height: global.seo.metaImage.data.attributes.height,
    } : {
        url: process.env.NEXT_PUBLIC_URL+'/imgs/defaultMeta.png',
        alt: 'image representing '+global.seo.metaTitle,
        type: 'image/png',
        width: 1200,
        height: 630,
    }
    
    return (
        <NextSeo
            title={global.name}
            description={global.seo.metaDescription}
            openGraph={{
                title: global.seo.metaTitle,
                site_name: global.name,
                url: global.domain+'/'+global.defaultLocale.data.attributes.shortCode,
                description: global.seo.metaDescription,
                images: [image],
                locale: getLocaleDetails(global.defaultLocale.data.attributes.shortCode).i18nCode,
            }}
            />
    )
}


export default DefaultSeo;