import { usePageContext } from "@/pages";
import styles from "./Sidebar.module.css";
import SidebarButton from "./SidebarButton";
export default function Sidebar(): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.name}>somanarita.dev</div>
      <SidebarButton name="HOME" id="home" />
      <SidebarButton name="WORKS" id="works" />
      <SidebarButton name="PROFILE" id="profile" />
    </div>
  );
}
