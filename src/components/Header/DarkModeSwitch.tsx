import { useState } from "react";
import styles from "./DarkModeSwitch.module.css";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import clsx from "clsx";
import { useLightDarkContext } from "@/pages";

export default function DarkModeSwitch(): JSX.Element {
  // true for light, false for dark
  const { lightDark, setLightDark } = useLightDarkContext();
  return (
    <div className={styles.buttonParent}>
      <button
        type="button"
        className={clsx(
          styles.button,
          lightDark && styles.lightButton,
          !lightDark && styles.darkButton
        )}
        onClick={() => {
          setLightDark(!lightDark);
          document.body.classList.toggle("dark-theme");
        }}
      >
        <div
          className={clsx(
            styles.notch,
            lightDark && styles.lightNotch,
            !lightDark && styles.darkNotch
          )}
        >
          <div
            className={clsx(
              styles.icon,
              !lightDark && styles.sunIcon,
              lightDark && styles.sunIconRotated
            )}
          >
            <BsSunFill />
          </div>
          <div
            className={clsx(
              styles.icon,
              lightDark && styles.moonIcon,
              !lightDark && styles.moonIconRotated
            )}
          >
            <BsMoonFill />
          </div>
        </div>
      </button>
    </div>
  );
}
