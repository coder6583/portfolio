import styles from "./ResumeDownload.module.css";
import { HiOutlineDownload } from "react-icons/hi";

export default function ResumeDownload(): JSX.Element {
  return (
    <a
      className={styles.button}
      download
      href="/files/Soma_Narita_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.icon}>
        <HiOutlineDownload />
      </div>
      <div className={styles.buttonText}>RESUME</div>
    </a>
  );
}
