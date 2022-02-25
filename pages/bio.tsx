import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { CollectionGetResponse, BioAttributes, WebsiteAttributes } from "lib/api/api";
import { fetchAPI } from "lib/api/client";
import HeaderDefault from "components/header/default";
import BlockRenderer from "components/blocks/renderer";
import PageLayout from "components/layout/pageLayout";
import SinglePageSeo from "components/seo/singlePage";
import { populate } from "lib/api/utils";


function Bio({
  page,
  global
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
        <>
          {/* <SinglePageSeo page={page} global={global}/> */}
          <HeaderDefault page={page}/>
          <PageLayout h1={page.title}>
            <BlockRenderer blocks={page.blocks}/>
          </PageLayout>
        </>
  );
}

export const getStaticProps: GetStaticProps<{
  page: BioAttributes;
  global: WebsiteAttributes;
}> = async (context) => {
  const { locale } = context;
  const global: CollectionGetResponse<WebsiteAttributes> = await fetchAPI(`/websites/${process.env.WEBSITE_ID}`, { locale, populate: ['*', 'locales', 'defaultLocale', 'artist', ...populate.seo] })
  const pageData: CollectionGetResponse<BioAttributes> = await fetchAPI(`/bios/${global.data.attributes.artist?.data.id}`, { locale, populate: ['blocks', ...populate.seo] })
  return {
    props: {
      page: pageData.data.attributes,
      global: global.data.attributes,
      locale: locale
    },
  };
};

export default Bio;
