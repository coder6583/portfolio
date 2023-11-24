import Image from "next/image";
import styles from "./About.module.css";
import useFirstAppear from "@/features/hooks/useFirstAppear";
import CareerItem from "../Profile/CareerItem";
import LineItem from "../Profile/LineItem";

export default function About(): JSX.Element {
  const firstAppear = useFirstAppear(2.2);
  return (
    <div className={styles.parent} id="about">
      {firstAppear && (
        <div className={styles.animation}>
          <div className={styles.avatar}>
            <div className={styles.image}>
              <Image alt="avatar" src="/images/avatar.png" fill={true} />
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.name}>Soma Narita</div>
            <div className={styles.shortParagraph}>
              Born in 2005 in Tokyo, Japan.
              <br />
              My goal is to change the world in a way that only I can.
              <br />
              Currently, I&apos;m focused on innovating programming education,
              and making programming accessible to everyone regardless of
              wealth, education, and native language.
            </div>
            <div className={styles.contact}>EMAIL: snarita@andrew.cmu.edu</div>
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
      )}
    </div>
  );
}
