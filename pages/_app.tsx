import 'styles/globals.css'
import type { AppContext, AppProps as NextAppProps } from "next/app";
import App from 'next/app'
import { CollectionGetResponse, PageSharedAttributes, WebsiteAttributes } from 'lib/api/api'
import { fetchAPI } from 'lib/api/client'
import DefaultSeo from 'components/seo/default';
import { ThemeProvider } from 'next-themes';
import { DEFAULT_THEME } from 'lib/style/themes';
import { useEffect, useState } from 'react';
import { applyTheme } from 'lib/style/themes/utils';
import { populate } from 'lib/api/utils';

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

export interface PageProps {
  global: WebsiteAttributes;
  page: PageSharedAttributes;
  locale: string;
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  const { global } = pageProps;
  const [theme, setTheme ] = useState(DEFAULT_THEME);

  /**
   * Run the applyTheme function every time the theme state changes
   */
  // useEffect(() => {
  //   applyTheme(global.seo.metaViewport!);
  // }, [global.seo.metaViewport, theme]);
  return (
    <>
      <ThemeProvider attribute="class" forcedTheme="dark">
        <DefaultSeo {...global}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages **that don't
// have getStaticProps**.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (context: AppContext) => {
  const { locale } = context.ctx;
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(context)
  // Fetch global site settings from Strapi
  const websiteConfig: CollectionGetResponse<WebsiteAttributes> = await fetchAPI(`/websites/${process.env.WEBSITE_ID}`, { locale, populate: ['locales', 'defaultLocale', ...populate.seo] });

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: websiteConfig.data.attributes } }
}

export default MyApp
