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
  useEffect,
  useState,
} from "react";
import Works from "@/components/Works/Works";
import Profile from "@/components/Profile/Profile";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";

export type PageType = "home" | "works" | "profile" | "about";
export const checkPageType = (x: string): x is PageType => {
  return x === "home" || x === "works" || x === "profile" || x === "about";
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
  setLightDark: (ld: boolean) => void;
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

  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem("lightDark") === "dark") {
        setLightDark(false);
        document.body.classList.toggle("dark-theme", true);
      } else {
        setLightDark(true);
        document.body.classList.toggle("dark-theme", false);
      }
    }
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = document.getElementById("scroll-content")?.scrollTop;
    setScrollPosition(position ?? 0);
  };

  useEffect(() => {
    const element = document.getElementById("scroll-content");
    if (element != null) {
      element.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (0 <= scrollPosition && scrollPosition < 50) {
      setPage("home");
    } else if (
      window.innerHeight - 50 <= scrollPosition &&
      scrollPosition < window.innerHeight + 50
    ) {
      setPage("works");
    } else if (
      window.innerHeight * 2 - 50 <= scrollPosition &&
      scrollPosition < window.innerHeight * 2 + 50
    ) {
      setPage("profile");
    } else if (window.innerHeight * 2 - 50 <= scrollPosition) {
      setPage("about");
    }
  }, [scrollPosition]);

  return (
    <>
      <pageContext.Provider value={{ pageId: page, setPageId: setPage }}>
        <lightDarkContext.Provider
          value={{
            lightDark,
            setLightDark: (ld: boolean) => {
              if (ld) {
                localStorage.setItem("lightDark", "light");
                document.body.classList.toggle("dark-theme", false);
              } else {
                localStorage.setItem("lightDark", "dark");
                document.body.classList.toggle("dark-theme", true);
              }
              setLightDark(ld);
            },
          }}
        >
          <Head>
            <title>Soma Narita Portfolio</title>
            <meta property="og:title" content="Soma Narita Portfolio" />
            <meta
              name="description"
              content="I am a developer based in Tokyo and Pittsburgh. My passion is to create systems with programming languages such as C/C++, Rust, and TypeScript."
            />
            <meta property="og:image" content="/images/avatar.png" />
            <meta property="twitter:card" content="/images/avatar.png" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={`${styles.main}`}>
            <Sidebar />
            <div className={styles.content} id="scroll-content">
              <Header />
              <Hero />
              <Works />
              <Profile />
              <About />
              <Footer />
            </div>
          </main>
        </lightDarkContext.Provider>
      </pageContext.Provider>
    </>
  );
}
