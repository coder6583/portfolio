import { useEffect, useState } from "react";
import Typewriter from "../Typewriter/Typewriter";
import ImageItem from "./ImageItem";
import styles from "./Works.module.css";
import clsx from "clsx";
import useFirstAppear from "@/features/hooks/useFirstAppear";

export default function Works(): JSX.Element {
  const firstAppear = useFirstAppear(1 / 2);
  return (
    <div className={styles.parent} id="works">
      {firstAppear && (
        <>
          <div className={styles.desktop}>
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
              </div>
            </div>
          </div>
          <div className={styles.medium}>
            <div className={styles.page}>
              <div className={styles.row}>
                <div className={clsx(styles.child, styles.child1)}>
                  <ImageItem id="laze" />
                </div>
                <div className={clsx(styles.child, styles.child2)}>
                  <ImageItem id="charEngine3D" />
                </div>
              </div>
              <div className={styles.row}>
                <div className={clsx(styles.child, styles.child3)}>
                  <ImageItem id="engine3D" />
                </div>
                <div className={clsx(styles.child, styles.child4)}>
                  <ImageItem id="textEditor" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
