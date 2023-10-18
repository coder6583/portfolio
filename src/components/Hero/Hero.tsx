import styles from "./Hero.module.css";
import ResumeDownload from "./ResumeDownload";

export default function Hero(): JSX.Element {
  return (
    <div className={styles.heroParent}>
      <div className={styles.nameParent}>
        <div className={styles.nameText}>
          <div style={{ flex: 1 }} />
          SOMA NARITA
        </div>
        <div className={styles.subtitleText}>HARDWARE/SOFTWARE DEVELOPER</div>
        <div style={{ flex: 0.5 }} />
        <div className={styles.resumeDownload}>
          <ResumeDownload />
        </div>
        <div style={{ flex: 1.5 }} />
      </div>
    </div>
  );
}
