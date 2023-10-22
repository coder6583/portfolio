import { useEffect, useState } from "react";

export default function useFirstAppear(websitePosition: number): boolean {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [firstAppear, setFirstAppear] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!firstAppear && scrollPosition > window.innerHeight * websitePosition) {
      setFirstAppear(true);
    }
  }, [firstAppear, scrollPosition, websitePosition]);
  return firstAppear;
}
