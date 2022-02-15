import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import Seo from 'components/seo/default'
import App from 'next/app'
import { GlobalAttributes, SingleType } from 'lib/api/api'
import { fetchAPI } from 'lib/api/client'
import { createContext } from 'react'

export const GlobalContext = createContext({})


function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;

  return (
    <>
      <Seo page={pageProps.page} global={pageProps.global}/>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (context: AppContext) => {
  const { locale } = context.ctx;
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(context)
  // Fetch global site settings from Strapi
  const global: SingleType<GlobalAttributes> = await fetchAPI("/global", { locale, populate: ['*'] });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}

export default MyApp
