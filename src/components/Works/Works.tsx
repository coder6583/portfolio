import Typewriter from "../Typewriter/Typewriter";
import ImageItem from "./ImageItem";
import styles from "./Works.module.css";

export default function Works(): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.projects}>
        <div className={styles.row}>
          <div className={styles.child}>
            <ImageItem id="laze" />
          </div>
          <div className={styles.child}>
            <ImageItem id="charEngine3D" />
          </div>
          <div className={styles.child}>
            <ImageItem id="engine3D" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.child}>
            <ImageItem id="textEditor" />
          </div>
          {/* <div className={styles.child}>
            <ImageItem id="laze" />
          </div>
          <div className={styles.child}>
            <ImageItem id="laze" />
            <div />
          </div> */}
        </div>
        {/* <div className={styles.row}>
          <div className={styles.child}>
            <ImageItem id="laze" />
          </div>
          <div className={styles.child}>
            <ImageItem id="laze" />
          </div>
          <div className={styles.child}>
            <ImageItem id="laze" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
