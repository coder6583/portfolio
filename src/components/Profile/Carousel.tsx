import Image from "next/image";
import styles from "./Carousel.module.css";

export default function Carousel(): JSX.Element {
  return (
    <div className={styles.carousel}>
      <div className={styles.slideshow}>
        <div className={styles.image}>
          <Image alt="profile" src="/images/woodworking.jpg" fill={true} />
        </div>
        <div className={styles.image}>
          <Image alt="profile" src="/images/globe3.jpg" fill={true} />
        </div>
        <div className={styles.image}>
          <Image alt="profile" src="/images/bigrobot.jpg" fill={true} />
        </div>
        <div className={styles.image}>
          <Image alt="profile" src="/images/robot.jpg" fill={true} />
        </div>
        <div className={styles.image}>
          <Image alt="profile" src="/images/small_robot.png" fill={true} />
        </div>
      </div>
    </div>
  );
}
