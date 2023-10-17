import styles from "./SidebarButton.module.css";

export type SidebarButtonProps = {
  name: string;
};

export default function SidebarButton({
  name,
}: SidebarButtonProps): JSX.Element {
  return (
    <button className={styles.button} type="button">
      <div className={styles.buttonText}>{name}</div>
    </button>
  );
}
