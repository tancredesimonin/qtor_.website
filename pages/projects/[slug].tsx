import PasswordBlocker from "components/action/passwordBlocker";
import BlockRenderer from "components/blocks/renderer";
import HeaderDefault from "components/header/default";
import PageLayout from "components/layout/pageLayout";
import ProjectPageSeo from "components/seo/projects";
import { CollectionGetResponse, CollectionListResponse, PageProjectAttributes, ProjectAttributes, SettingsI18nAttributes, SingleType, WebsiteAttributes } from "lib/api/api";
import { fetchAPI } from "lib/api/client";
import { populate } from "lib/api/utils";
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";

function PageProject({ page, global, locales }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('password:', page.public)

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
    if (global.data.attributes.artist.data.attributes.projects?.data) {
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
    locales: Array<SettingsI18nAttributes>;
  }, ContextParams> = async (context) => {
    const { locale } = context;
    const { slug } = context.params!;
    console.log('slug:', slug)
    const [ locales, global ] = await Promise.all<[Promise<Array<SettingsI18nAttributes>>, Promise<CollectionGetResponse<WebsiteAttributes>> ]>([
      fetchAPI('/i18n/locales'),
      fetchAPI(`/websites/${process.env.WEBSITE_ID}`, { locale, populate: ['locales', 'defaultLocale', ...populate.seo] }),
    ])
    const projectData: CollectionListResponse<ProjectAttributes> = await fetchAPI(`/projects`, { slug, locale, populate: ['localizations', ...populate.seo, ...populate.blocks ] })

    return {
      props: {
        page: projectData.data[0].attributes,
        global: global.data.attributes,
        locale,
        locales
      },
    };
  };


  export default PageProject;