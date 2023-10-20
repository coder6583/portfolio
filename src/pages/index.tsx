import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero/Hero";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import Works from "@/components/Works/Works";
import Profile from "@/components/Profile/Profile";

export type PageType = "home" | "works" | "profile";
export const checkPageType = (x: string): x is PageType => {
  return x === "home" || x === "works" || x === "profile";
};
export type PageContextType = {
  pageId: PageType;
  setPageId: Dispatch<SetStateAction<PageType>>;
};
export const pageContext = createContext<PageContextType | undefined>(
  undefined
);
export const usePageContext = (): PageContextType => {
  const context = useContext(pageContext);
  if (context === undefined) {
    throw Error("pageContext is undefined.");
  }
  return context;
};

export type LightDarkContextType = {
  lightDark: boolean;
  setLightDark: Dispatch<SetStateAction<boolean>>;
};
export const lightDarkContext = createContext<LightDarkContextType | undefined>(
  undefined
);
export const useLightDarkContext = (): LightDarkContextType => {
  const context = useContext(lightDarkContext);
  if (context === undefined) {
    throw Error("lightDarkContext is undefined.");
  }
  return context;
};

export default function Home() {
  const [page, setPage] = useState<PageType>("home");
  const [lightDark, setLightDark] = useState(true);

  return (
    <>
      <pageContext.Provider value={{ pageId: page, setPageId: setPage }}>
        <lightDarkContext.Provider value={{ lightDark, setLightDark }}>
          <Head>
            <title>Soma Narita Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <main className={`${styles.main}`}>
            <Sidebar />
            <div className={styles.content}>
              <Hero />
              <Works />
              <Profile />
            </div>
          </main>
        </lightDarkContext.Provider>
      </pageContext.Provider>
    </>
  );
}
