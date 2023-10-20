import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.copyright}>
        Designed and Developed by Soma Narita. ©2023 All rights reserved
      </div>
    </div>
  );
}
