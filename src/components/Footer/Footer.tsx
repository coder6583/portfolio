import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.copyright}>©2023 Soma Narita</div>
    </div>
  );
}
