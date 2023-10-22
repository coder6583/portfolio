import { useState } from "react";
import Typewriter from "../Typewriter/Typewriter";
import styles from "./ImageItem.module.css";
import { works } from "./works";
import Image from "next/image";

type ImageItemProps = {
  id: string;
};

export default function ImageItem({ id }: ImageItemProps): JSX.Element {
  const [imageHover, setImageHover] = useState(false);
  const item = works["en"][id];
  if (!item) {
    return <div />;
  }
  return (
    <div className={styles.parent}>
      <div
        className={styles.image}
        onMouseOver={() => {
          setImageHover(true);
        }}
        onMouseOut={() => {
          setImageHover(false);
        }}
      >
        <Image alt={item.name} src={item.thumbnail} fill={true} />
      </div>
      {imageHover && (
        <div className={styles.caption}>
          <Typewriter
            text={item.name}
            afterDelay={0}
            align="left"
            color="var(--dark-gray)"
            delay={40}
            fontSize={16}
            initCursorDelay={0}
            initDelay={0}
          />
          <Typewriter
            text={item.subtitle}
            afterDelay={0}
            align="left"
            color="var(--gray)"
            delay={10}
            fontSize={12}
            initCursorDelay={item.name.length * 40 + 200}
            initDelay={0}
          />
        </div>
      )}
    </div>
  );
}
