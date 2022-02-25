import PasswordBlocker from "components/action/passwordBlocker";
import BlockRenderer from "components/blocks/renderer";
import HeaderDefault from "components/header/default";
import PageLayout from "components/layout/pageLayout";
import ProjectPageSeo from "components/seo/projects";
import { CollectionGetResponse, CollectionListResponse, DataItem, LocaleTypeAttributes, PageProjectAttributes, ProjectAttributes, WebsiteAttributes } from "lib/api/api";
import { fetchAPI } from "lib/api/client";
import { populate } from "lib/api/utils";
import { getAvailableLocalesTypeList } from "lib/i18n";
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";

function PageProject({ page, global, locales }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
      <>
        <ProjectPageSeo page={page} global={global} locales={locales}/>
        <HeaderDefault page={page} locales={locales}></HeaderDefault>
        <PageLayout h1={page.name}>
          <PasswordBlocker isPublic={page.public} password={page.password}><BlockRenderer blocks={page.blocks}/></PasswordBlocker>
        </PageLayout>
      </>
    )
  }


  interface ContextParams extends ParsedUrlQuery {
    slug: string;
  }
  export const getStaticPaths: GetStaticPaths<ContextParams> = async ({ locales }: GetStaticPathsContext) => {
    const global: CollectionGetResponse<WebsiteAttributes> = await fetchAPI(`/websites/${process.env.WEBSITE_ID}`, { locale: 'all', populate: ['*', 'locales', 'defaultLocale', 'artist.projects', ...populate.seo] })
    
    let paths: Array<{ params: ContextParams; locale: string; }> = [];
    if (global.data.attributes.artist.data?.attributes.projects?.data) {
    /**
     * populate * is required to return `seo`, `blocks`, `localizations` properties.
     */
     global.data.attributes.artist.data.attributes.projects.data.forEach((project) => {
             paths.push({
                 params: {
                     slug: project.attributes.slug,
                   },
                   locale: project.attributes.locale,
             })
     })
    }

    return {
      paths,
      fallback: false,
    }
  }



  export const getStaticProps: GetStaticProps<{
    page: PageProjectAttributes;
    global: WebsiteAttributes;
    locales: Array<DataItem<LocaleTypeAttributes>>;
  }, ContextParams> = async (context) => {
    const { locale } = context;
    const { slug } = context.params!;
    const global: CollectionGetResponse<WebsiteAttributes> = await fetchAPI(`/websites/${process.env.WEBSITE_ID}`, { locale, populate: ['locales', 'defaultLocale', ...populate.seo] })
    const projectData: CollectionListResponse<ProjectAttributes> = await fetchAPI(`/projects`, { slug, locale, populate: ['localizations', ...populate.seo, ...populate.blocks ] })
    if (!global.data.attributes.locales?.data) {
      throw Error('missing locales list in website.locales')
    }
    return {
      props: {
        page: projectData.data[0].attributes,
        global: global.data.attributes,
        locale,
        locales: getAvailableLocalesTypeList(projectData.data[0].attributes, global.data.attributes.locales?.data),
      },
    }; 
  };


  export default PageProject;