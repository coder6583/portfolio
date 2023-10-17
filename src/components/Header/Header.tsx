import DarkModeSwitch from "./DarkModeSwitch";
import styles from "./Header.module.css";

export default function Header(): JSX.Element {
  return (
    <div className={styles.parent}>
      <div style={{ flex: 1 }} />
      <DarkModeSwitch />
    </div>
  );
}
