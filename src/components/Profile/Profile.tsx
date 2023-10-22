import Image from "next/image";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";

export default function Profile(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [firstAppear, setFirstAppear] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!firstAppear && scrollPosition > (window.innerHeight * 4) / 3) {
      setFirstAppear(true);
    }
  }, [firstAppear, scrollPosition]);
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        {firstAppear && (
          <div className={styles.carousel}>
            <div className={styles.slideshow}>
              <div className={styles.image}>
                <Image
                  alt="profile"
                  src="/images/woodworking.jpg"
                  fill={true}
                />
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
                <Image
                  alt="profile"
                  src="/images/small_robot.png"
                  fill={true}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.right}>
        {firstAppear && (
          <>
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
              <div className={styles.careerItem}>
                <div className={styles.dot} />
                <div className={styles.careerItemGap} />
                <div className={styles.careerItemText}>Birth</div>
                <div className={styles.fullGap} />
              </div>
              <div className={styles.lineItem}>
                <div className={styles.line} />
                <div className={styles.careerItemGap} />
                <div className={styles.date}>02/04/05</div>
              </div>
              <div className={styles.careerItem}>
                <div className={styles.dot} />
                <div className={styles.careerItemGap} />
                <div className={styles.careerItemText}>
                  Shibuya Makuhari High School
                </div>
                <div className={styles.fullGap} />
              </div>
              <div className={styles.lineItem}>
                <div className={styles.line} />
                <div className={styles.careerItemGap} />
                <div className={styles.date}>04/17 - 03/23</div>
              </div>
              <div className={styles.careerItem}>
                <div className={styles.dot} />
                <div className={styles.careerItemGap} />
                <div className={styles.careerItemText}>
                  Carnegie Mellon University
                </div>
                <div className={styles.fullGap} />
              </div>
              <div className={styles.lineItem}>
                <div className={styles.grayline} />
                <div className={styles.careerItemGap} />
                <div className={styles.date}>09/23 - Present</div>
              </div>
              <div className={styles.careerItem}>
                <div className={styles.graydot} />
                <div className={styles.careerItemGap} />
                <div className={styles.careerItemText}>???</div>
              </div>
            </div>
            <div className={styles.fullGap} />
          </>
        )}
      </div>
    </div>
  );
}
