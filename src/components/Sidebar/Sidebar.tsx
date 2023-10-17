import styles from "./Sidebar.module.css";
import SidebarButton from "./SidebarButton";
export default function Sidebar(): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.name}>somanarita.dev</div>
      <SidebarButton name="HOME" />
      <SidebarButton name="WORKS" />
      <SidebarButton name="PROFILE" />
    </div>
  );
}
