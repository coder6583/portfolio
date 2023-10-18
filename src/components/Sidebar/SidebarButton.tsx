import { checkPageType, usePageContext } from "@/pages";
import styles from "./SidebarButton.module.css";
import clsx from "clsx";

export type SidebarButtonProps = {
  name: string;
  id: string;
};

export default function SidebarButton({
  name,
  id,
}: SidebarButtonProps): JSX.Element {
  const { pageId, setPageId } = usePageContext();

  return (
    <button
      className={clsx(pageId === id ? styles.selectedButton : styles.button)}
      type="button"
      onClick={() => {
        if (checkPageType(id)) {
          setPageId(id);
        }
      }}
    >
      <div
        className={clsx(
          styles.animate,
          pageId === id ? styles.selectedButtonText : styles.buttonText
        )}
      >
        {name}
      </div>
    </button>
  );
}
