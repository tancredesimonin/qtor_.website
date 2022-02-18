import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { GlobalAttributes, PageBioAttributes, SinglePageResponse, SingleType } from "lib/api/api";
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
          <SinglePageSeo page={page} global={global}/>
          <HeaderDefault page={page}/>
          <PageLayout h1={page.h1}>
            <BlockRenderer blocks={page.blocks}/>
          </PageLayout>
        </>
  );
}

export const getStaticProps: GetStaticProps<{
  page: PageBioAttributes;
  global: GlobalAttributes;
}> = async (context) => {
  const { locale } = context;
  const [ global, pageData ] = await Promise.all<[Promise<SingleType<GlobalAttributes>>, Promise<SinglePageResponse<PageBioAttributes>> ]>([
    fetchAPI("/global", { locale, populate: ['*', 'seo.metaImage', 'seo.metaSocial'] }),
    fetchAPI("/page-bio", { locale, populate: ['blocks','seo.metaImage', 'seo.metaSocial'] })
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
