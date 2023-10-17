import { useState } from "react";
import styles from "./DarkModeSwitch.module.css";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import clsx from "clsx";

export default function DarkModeSwitch(): JSX.Element {
  // true for light, false for dark
  const [lightDark, setLightDark] = useState(true);
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
        }}
      >
        <div
          className={clsx(lightDark && styles.none, !lightDark && styles.space)}
        />
        <div
          className={clsx(
            styles.notch,
            lightDark && styles.lightNotch,
            !lightDark && styles.darkNotch
          )}
        >
          <div
            className={clsx(
              !lightDark && styles.sunIcon,
              lightDark && styles.none
            )}
          >
            <BsSunFill />
          </div>
          <div
            className={clsx(
              lightDark && styles.moonIcon,
              !lightDark && styles.none
            )}
          >
            <BsMoonFill />
          </div>
        </div>
      </button>
    </div>
  );
}
