import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { PageBioAttributes, PageResponse } from "lib/api/api";
import { fetchAPI } from "lib/api/client";
import HeaderDefault from "components/header/default";
import BlockRenderer from "components/blocks/renderer";
import PageLayout from "components/layout/pageLayout";


function Bio({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
        <>
          <HeaderDefault page={page}></HeaderDefault>
          <PageLayout h1={page.h1}>
            <BlockRenderer blocks={page.blocks}/>
          </PageLayout>
        </>
  );
}

export const getStaticProps: GetStaticProps<{
  page: PageBioAttributes;
}> = async (context) => {
  const { locale } = context;
  const pageData: PageResponse<PageBioAttributes> = await fetchAPI("/page-bio", { locale, populate: ['blocks','seo.metaImage', 'seo.metaSocial'] });
  return {
    props: {
      page: pageData.data.attributes,
      locale: locale,
    },
  };
};

export default Bio;
