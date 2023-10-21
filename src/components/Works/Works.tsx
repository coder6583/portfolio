import { useEffect, useState } from "react";
import Typewriter from "../Typewriter/Typewriter";
import ImageItem from "./ImageItem";
import styles from "./Works.module.css";
import clsx from "clsx";

export default function Works(): JSX.Element {
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
    if (!firstAppear && scrollPosition > (window.innerHeight * 1) / 2) {
      setFirstAppear(true);
    }
  }, [firstAppear, scrollPosition]);
  return (
    <div className={styles.parent}>
      {firstAppear && (
        <div className={styles.projects}>
          <div className={styles.row}>
            <div className={clsx(styles.child, styles.child1)}>
              <ImageItem id="laze" />
            </div>
            <div className={clsx(styles.child, styles.child2)}>
              <ImageItem id="charEngine3D" />
            </div>
            <div className={clsx(styles.child, styles.child3)}>
              <ImageItem id="engine3D" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={clsx(styles.child, styles.child4)}>
              <ImageItem id="textEditor" />
            </div>
            {/* <div className={styles.child}>
            <ImageItem id="laze" />
          </div>
          <div className={styles.child}>
            <ImageItem id="laze" />
            <div />
          </div> */}
          </div>
          {/* <div className={styles.row}>
          <div className={styles.child}>
            <ImageItem id="laze" />
          </div>
          <div className={styles.child}>
            <ImageItem id="laze" />
          </div>
          <div className={styles.child}>
            <ImageItem id="laze" />
          </div>
        </div> */}
        </div>
      )}
    </div>
  );
}
