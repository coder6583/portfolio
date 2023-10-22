import Image from "next/image";
import styles from "./About.module.css";
import { useEffect, useState } from "react";

export default function About(): JSX.Element {
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
    if (!firstAppear && scrollPosition > window.innerHeight * 2) {
      setFirstAppear(true);
    }
  }, [firstAppear, scrollPosition]);
  return (
    <div className={styles.parent}>
      {firstAppear && (
        <div className={styles.animation}>
          <div className={styles.avatar}>
            <div className={styles.image}>
              <Image alt="avatar" src="/images/avatar.PNG" fill={true} />
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.name}>Soma Narita</div>
            <div className={styles.shortParagraph}>
              Born in 2005 in Tokyo, Japan.
              <br />
              My goal is to change the world in a way that only I can.
              <br />
              Currently, I&apos;m focused on innovating programming education,
              and making programming accessible to everyone regardless of
              wealth, education, and native language.
            </div>
            <div className={styles.contact}>EMAIL: snarita@andrew.cmu.edu</div>
          </div>
        </div>
      )}
    </div>
  );
}
