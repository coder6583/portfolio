import styles from "./CareerItem.module.css";

type CareerItemProps = {
  text: string;
  gray?: boolean;
};

export default function CareerItem({
  text,
  gray,
}: CareerItemProps): JSX.Element {
  if (gray) {
    return (
      <div className={styles.careerItem}>
        <div className={styles.graydot} />
        <div className={styles.careerItemGap} />
        <div className={styles.careerItemText}>{text}</div>
      </div>
    );
  }
  return (
    <div className={styles.careerItem}>
      <div className={styles.dot} />
      <div className={styles.careerItemGap} />
      <div className={styles.careerItemText}>{text}</div>
      <div className={styles.fullGap} />
    </div>
  );
}
