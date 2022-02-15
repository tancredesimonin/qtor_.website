import LayoutDefault from "components/layout/default";
import { Page500Attributes, PageResponse } from "lib/api/api";
import { fetchAPI } from "lib/api/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";

function Page500({page}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <LayoutDefault>
            <h1 className="text-xl text-white">{page.h1}</h1>
            <h3 className="text-gray-400">{page.message}</h3>
        </LayoutDefault>
    )
  }



  export const getStaticProps: GetStaticProps<{
    page: Page500Attributes;
  }> = async (context) => {
    const { locale } = context;
    const pageData: PageResponse<Page500Attributes> = await fetchAPI("/page500", { locale, populate: ['*','seo.metaImage', 'seo.metaSocial'] });
  
    return {
      props: {
        page: pageData.data.attributes,
        locale: locale,
      },
    };
  };


  export default Page500;