import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { CollectionGetResponse, BioAttributes, WebsiteAttributes, LocaleTypeAttributes, DataItem } from "lib/api/api";
import { fetchAPI } from "lib/api/client";
import HeaderDefault from "components/header/default";
import BlockRenderer from "components/blocks/renderer";
import PageLayout from "components/layout/pageLayout";
import SinglePageSeo from "components/seo/singlePage";
import { populate } from "lib/api/utils";
import { getAvailableLocalesTypeList } from "lib/i18n";


function Bio({
  page,
  global,
  locales
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
        <>
          {/* <SinglePageSeo page={page} global={global}/> */}
          <HeaderDefault page={page} locales={locales}/>
          <PageLayout h1={page.title}>
            <BlockRenderer blocks={page.blocks}/>
          </PageLayout>
        </>
  );
}

export const getStaticProps: GetStaticProps<{
  page: BioAttributes;
  global: WebsiteAttributes;
  locales: Array<DataItem<LocaleTypeAttributes>>;
}> = async (context) => {
  const { locale } = context;
  const global: CollectionGetResponse<WebsiteAttributes> = await fetchAPI(`/websites/${process.env.WEBSITE_ID}`, { locale, populate: ['*', 'locales', 'defaultLocale', 'artist', ...populate.seo] })
  if (!global.data.attributes.locales?.data) {
    throw Error('missing locales list in website.locales')
  }
  if (!global.data.attributes.artist.data?.attributes) {
    throw Error('missing artist in website.artist')
  }
  const pageData: CollectionGetResponse<BioAttributes> = await fetchAPI(`/bios/${global.data.attributes.artist.data.id}`, { locale, populate: ['localizations', ...populate.blocks, ...populate.seo] })
  return {
    props: {
      page: pageData.data.attributes,
      global: global.data.attributes,
      locale: locale,
      locales: getAvailableLocalesTypeList(pageData.data.attributes, global.data.attributes.locales.data),
    },
  };
};

export default Bio;
