import styles from "./LineItem.module.css";

type LineItemProps = {
  text: string;
  gray?: boolean;
};

export default function LineItem({ text, gray }: LineItemProps): JSX.Element {
  if (gray) {
    return (
      <div className={styles.lineItem}>
        <div className={styles.grayline} />
        <div className={styles.careerItemGap} />
        <div className={styles.date}>{text}</div>
      </div>
    );
  }
  return (
    <div className={styles.lineItem}>
      <div className={styles.line} />
      <div className={styles.careerItemGap} />
      <div className={styles.date}>{text}</div>
    </div>
  );
}
