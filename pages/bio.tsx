import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { CollectionGetResponse, PageBioAttributes, WebsiteAttributes } from "lib/api/api";
import { fetchAPI } from "lib/api/client";
import HeaderDefault from "components/header/default";
import BlockRenderer from "components/blocks/renderer";
import PageLayout from "components/layout/pageLayout";
import SinglePageSeo from "components/seo/singlePage";


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
  page: PageBioAttributes;
  global: WebsiteAttributes;
}> = async (context) => {
  const { locale } = context;
  const [ global, pageData ] = await Promise.all<[Promise<CollectionGetResponse<WebsiteAttributes>>, Promise<CollectionGetResponse<PageBioAttributes>> ]>([
    fetchAPI(`/websites/${process.env.WEBSITE_ID}`, { locale, populate: ['locales', 'defaultLocale', 'seo.metaImage', 'seo.metaSocial'] }),
    fetchAPI(`/bios/${process.env.WEBSITE_ID}`, { locale, populate: ['blocks','seo.metaImage', 'seo.metaSocial'] })
  ])
  return {
    props: {
      page: pageData.data.attributes,
      global: global.data.attributes,
      locale: locale
    },
  };
};

export default Bio;
