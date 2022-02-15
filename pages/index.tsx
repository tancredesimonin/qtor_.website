import Terminal, { Command } from "components/terminal/command";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import LayoutDefault from "components/layout/default";
import { PageHomeAttributes, PageResponse } from "lib/api/api";
import { fetchAPI } from "lib/api/client";
import { CSSTransition } from "react-transition-group";
import HeaderDefault from "components/header/default";
import { useRouter } from "next/router";
import { getLocaleDetails } from "lib/i18n";
import BlockRenderer from "components/blocks/renderer";
import PageLayout from "components/layout/pageLayout";

const ANIMATION_TIME_MS = 50;

function Home({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const firstCommands: Array<Command> = [
    {
      text: "> Qtor load website",
      loadingTime: ANIMATION_TIME_MS,
    },
    {
      text: "> installing components...",
      loadingTime: ANIMATION_TIME_MS,
    },
    {
      text: "> start security check...",
      loadingTime: ANIMATION_TIME_MS,
    },
    {
      text: "> downloading assets...",
      loadingTime: ANIMATION_TIME_MS,
    },
    {
      text: "> analyzing assets...",
      loadingTime: ANIMATION_TIME_MS,
    },
    {
      text: "> compiling client...",
      loadingTime: ANIMATION_TIME_MS,
    },
    {
      text: "✔ analyze complete",
      loadingTime: ANIMATION_TIME_MS,
    },
    {
      text: "✔ compilation complete",
      loadingTime: ANIMATION_TIME_MS,
    },
    {
      text: "✔ installation complete",
      loadingTime: ANIMATION_TIME_MS,
    },
    {
      text: "🌐 preferred locale detected: "+getLocaleDetails(page.locale).label,
      loadingTime: ANIMATION_TIME_MS,
    },
    {
      text: "> please select your language if you wish to change",
      loadingTime: ANIMATION_TIME_MS,
    },
  ];
  const router = useRouter();
  /** send to page with ?play=false to disable terminal effect */
  const { play } = router.query;
  const [displayTerminal, setDisplayTerminal] = useState(!Boolean(play));
  const [displayLocaleSelect, setDisplayLocaleSelect] = useState(Boolean(play));
  const [displayLocaleTerminal, setDisplayLocaleTerminal] = useState(Boolean(play));
  const [displayPageContent, setDisplayPageContent] = useState(Boolean(play));
  const [selectedLocale, setSelectedLocale] = useState(getLocaleDetails(page.locale));


  return (
    <>
      {displayTerminal && (
        <LayoutDefault>
          <Terminal
            id={"step1"}
            commandList={firstCommands}
            onCompletion={() => {
              // setStep(2);
              // setDisplayHeader(true);
              setDisplayLocaleSelect(true);
            }}
          ></Terminal>
          {displayLocaleSelect && (
            <>
              {/* <h1 className="block text-indigo-600 xl:inline test">
                {page.h1}
              </h1> */}
              <div className="block space-x-4">
                <button
                  onClick={() => {
                    setDisplayLocaleTerminal(true);
                    setSelectedLocale(getLocaleDetails('fr'))
                    router.push("/fr", "/fr", { locale: "fr" });
                  }}
                  type="button"
                  className="inline-block items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-gray-700 hover:bg-gray-600 focus:outline-none"
                >
                  Français
                </button>
                <button
                  onClick={() => {
                    setDisplayLocaleTerminal(true);
                    setSelectedLocale(getLocaleDetails('en'))
                    router.push("/en", "/en", { locale: "en" });
                  }}
                  type="button"
                  className="inline-block items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500"
                >
                  English
                </button>
              </div>
              {displayLocaleTerminal && (
                <Terminal
                id={"step2"}
                commandList={[{
                  text: "> Qtor select --locale "+selectedLocale.label+" --force",
                  loadingTime: ANIMATION_TIME_MS,
                },
                {
                  text: "✔ Qtor website ready for navigation",
                  loadingTime: ANIMATION_TIME_MS,
                },]}
                onCompletion={() => {
                  setDisplayPageContent(true);
                }}
              ></Terminal>
              )}
            </>
          )}
        </LayoutDefault>
      )}
      <CSSTransition
        in={displayPageContent}
        timeout={500}
        classNames="fade"
        unmountOnExit
        onEnter={() => {
          setDisplayLocaleTerminal(false);
          setDisplayLocaleSelect(false);
          setDisplayTerminal(false);
        }}
        onExited={() => {
          setDisplayTerminal(true);
          setDisplayLocaleSelect(true);
        }}
      >
        <>
          <HeaderDefault page={page}></HeaderDefault>
          <PageLayout h1={page.h1}>
            <BlockRenderer blocks={page.blocks}/>
          </PageLayout>
        </>
      </CSSTransition>
      <footer>
      </footer>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  page: PageHomeAttributes;
}> = async (context) => {
  const { locale } = context;
  const pageData: PageResponse<PageHomeAttributes> = await fetchAPI("/page-home", { locale, populate: ['blocks','seo.metaImage', 'seo.metaSocial'] });
  console.log(pageData.data.attributes.blocks)
  return {
    props: {
      page: pageData.data.attributes,
      locale: locale,
    },
  };
};

export default Home;
