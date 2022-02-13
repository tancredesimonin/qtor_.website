import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../components/layout/default";
import { PageHomeAttributes, PageHomeResponse } from "../lib/api/api";
import { fetchAPI } from "../lib/api/client";

function Home({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDefault>
        <h1 className="block text-indigo-600 xl:inline">{page.h1}</h1>
      </LayoutDefault>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  page: PageHomeAttributes;
}> = async (context) => {
  console.log(context);
  const { locale } = context;
  const pageData: PageHomeResponse = await fetchAPI("/page-home", { locale });

  return {
    props: {
      page: pageData.data.attributes,
    },
  };
};

export default Home;
