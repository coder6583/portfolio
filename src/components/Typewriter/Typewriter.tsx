import { useEffect, useState } from "react";
import styles from "./Typewriter.module.css";

type TypewriterProps = {
  text: string;
  initDelay: number;
  initCursorDelay: number;
  afterDelay: number;
  delay: number;
  align: "center" | "left" | "right";
  fontSize: number;
  color: string;
};

export default function Typewriter({
  text,
  initDelay,
  initCursorDelay,
  afterDelay,
  delay,
  align,
  fontSize,
  color,
}: TypewriterProps): JSX.Element {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const [cursorOn, setCursorOn] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCursorOn(true);
    }, initCursorDelay);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (!cursorOn) {
      return;
    }
    if (currentIndex < text.length) {
      const timeout = setTimeout(
        () => {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
          if (!typing) {
            setTyping(true);
          }
        },
        displayText === "" ? delay + initDelay : delay
      );
      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length && cursorOn === true) {
      setTyping(false);
      const timeout = setTimeout(() => {
        setCursorOn(false);
      }, afterDelay);
      return () => clearTimeout(timeout);
    }
  }, [
    afterDelay,
    currentIndex,
    cursorOn,
    delay,
    displayText,
    initDelay,
    text,
    typing,
  ]);
  return (
    <div className={styles.parent} style={{ justifyContent: align }}>
      <div
        className={styles.text}
        style={{
          paddingRight: `${fontSize / 8}px`,
        }}
      >
        {displayText}
      </div>
      <div
        className={styles.cursor}
        style={{
          marginLeft: cursorOn ? `-${fontSize / 16}px` : 0,
          width: cursorOn ? `${fontSize / 16}px` : 0,
          height: fontSize,
          backgroundColor: color,
        }}
        data-blink={cursorOn && !typing ? 1 : 0}
      />
    </div>
  );
}
