import { BsChevronCompactDown } from "react-icons/bs";
import Typewriter from "../Typewriter/Typewriter";
import styles from "./Hero.module.css";
import ResumeDownload from "./ResumeDownload";

export default function Hero(): JSX.Element {
  return (
    <div className={styles.heroParent} id="hero">
      <div className={styles.nameParent}>
        <div className={styles.nameText}>
          <div style={{ flex: 1 }} />
          <Typewriter
            delay={50}
            initDelay={300}
            initCursorDelay={0}
            afterDelay={100}
            text="SOMA NARITA"
            align="center"
            fontSize={54}
            color="var(--blue)"
          />
        </div>
        <div className={styles.subtitleText}>
          <Typewriter
            delay={20}
            initDelay={200}
            initCursorDelay={1300}
            afterDelay={2000}
            text="HARDWARE/SOFTWARE DEVELOPER"
            align="center"
            fontSize={18}
            color="var(--dark-gray)"
          />
        </div>
        <div style={{ flex: 0.5 }} />
        <div className={styles.resumeDownload}>
          <ResumeDownload />
        </div>
        <div className={styles.scrollDown}>
          <div className={styles.scrollDownArrow}>
            <BsChevronCompactDown />
          </div>
          <div className={styles.bottomScrollDownArrow}>
            <BsChevronCompactDown />
          </div>
        </div>
      </div>
    </div>
  );
}
