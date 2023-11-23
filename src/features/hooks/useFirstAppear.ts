import { useEffect, useState } from "react";

export default function useFirstAppear(websitePosition: number): boolean {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [firstAppear, setFirstAppear] = useState(false);
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
    if (
      !firstAppear &&
      scrollPosition >
        (document.getElementById("scroll-content")?.clientHeight ?? 0) *
          websitePosition
    ) {
      setFirstAppear(true);
    }
  }, [firstAppear, scrollPosition, websitePosition]);
  return firstAppear;
}
