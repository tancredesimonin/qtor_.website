import HeaderDefault from "components/header/default";
import LayoutDefault from "components/layout/default";
import SinglePageSeo from "components/seo/singlePage";
import { CollectionGetResponse, Page404Attributes, SinglePageResponse, WebsiteAttributes } from "lib/api/api";
import { fetchAPI } from "lib/api/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";

function Page404({ page, global }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
      <>    
        <SinglePageSeo page={page} global={global}/>
        <HeaderDefault page={page}/>
        <LayoutDefault>
            <h1 className="text-xl text-white">{page.title}</h1>
            <h3 className="text-gray-400">{page.message}</h3>
        </LayoutDefault>
        </>
    )
  }



  export const getStaticProps: GetStaticProps<{
    page: Page404Attributes;
    global: WebsiteAttributes;
  }> = async (context) => {
    const { locale } = context;
    const [ global, pageData ] = await Promise.all<[Promise<CollectionGetResponse<WebsiteAttributes>>, Promise<SinglePageResponse<Page404Attributes>> ]>([
      fetchAPI(`/websites/${process.env.WEBSITE_ID}`, { locale, populate: ['locales', 'defaultLocale', 'seo.metaImage', 'seo.metaSocial'] }),
      fetchAPI("/page404", { locale, populate: ['*','seo.metaImage', 'seo.metaSocial'] })
    ])
    return {
      props: {
        page: pageData.data.attributes,
        global: global.data.attributes,
        locale: locale
      },
    };
  };


  export default Page404;