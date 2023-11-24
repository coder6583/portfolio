import styles from "./Profile.module.css";
import useFirstAppear from "@/features/hooks/useFirstAppear";
import Carousel from "./Carousel";
import CareerItem from "./CareerItem";
import LineItem from "./LineItem";

export default function Profile(): JSX.Element {
  const firstAppear = useFirstAppear(5 / 4);
  return (
    <div className={styles.parent} id="profile">
      {firstAppear && (
        <div className={styles.animation}>
          <div className={styles.left}>
            <Carousel />
          </div>
          <div className={styles.right}>
            <div className={styles.fullGap} />
            <div className={styles.profileParagraph}>
              All my life, I have been a passionate maker, creating whatever my
              heart desires. I started with woodworking in elementary school,
              creating small flying toys. In middle school, I got obsessed with
              robotics, designing my own PCBs and programming PIC
              microcontrolers. In high school, I was captivated by how
              programming languages work, so I created my own. Now, at Carnegie
              Mellon University, I am majoring in Electrical and Computer
              Engineering, connecting all of my passions throughout the years.
            </div>
            <div className={styles.gap} />
            <div className={styles.career}>
              <CareerItem text="Birth" />
              <LineItem text="02/04/05" />
              <CareerItem text="Shibuya Makuhari High School" />
              <LineItem text="04/17 - 03/23" />
              <CareerItem text="Carnegie Mellon University" />
              <LineItem text="09/23 - Present" gray />
              <CareerItem text="???" gray />
            </div>
            <div className={styles.fullGap} />
          </div>
        </div>
      )}
      <div className={styles.mobile}>
        <div className={styles.left}>
          <div className={styles.personalHeader}>Personal</div>
          <div className={styles.carousel}>
            <Carousel />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.profileHeader}>Profile</div>
          <div className={styles.profileParagraph}>
            All my life, I have been a passionate maker, creating whatever my
            heart desires. I started with woodworking in elementary school,
            creating small flying toys. In middle school, I got obsessed with
            robotics, designing my own PCBs and programming PIC microcontrolers.
            In high school, I was captivated by how programming languages work,
            so I created my own. Now, at Carnegie Mellon University, I am
            majoring in Electrical and Computer Engineering, connecting all of
            my passions throughout the years.
          </div>
          <div className={styles.career}>
            <CareerItem text="Birth" />
            <LineItem text="02/04/05" />
            <CareerItem text="Shibuya Makuhari High School" />
            <LineItem text="04/17 - 03/23" />
            <CareerItem text="Carnegie Mellon University" />
            <LineItem text="09/23 - Present" gray />
            <CareerItem text="???" gray />
          </div>
        </div>
      </div>
    </div>
  );
}
