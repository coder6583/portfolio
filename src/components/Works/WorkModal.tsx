import { Dispatch, SetStateAction } from "react";
import styles from "./WorkModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { works } from "./works";
import Image from "next/image";

type WorkModalProps = {
  id: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function WorkModal({
  id,
  setModalOpen,
}: WorkModalProps): JSX.Element {
  const item = works["en"][id];
  if (!item) {
    return <div />;
  }
  return (
    <div
      className={styles.parent}
      onClick={() => {
        setModalOpen(false);
      }}
    >
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.header}>
          <div
            className={styles.closeIcon}
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.responsiveTitle}>
            <div className={styles.title}>{item.name}</div>
            <div className={styles.subdescription}>
              <div className={styles.categories}>
                Categories: {item.categories.join(", ")}
              </div>
              <div className={styles.techstack}>
                Technology Used: {item.techstack.join(", ")}
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.image}>
              <Image alt="thumbnail" src={item.thumbnail} fill />
            </div>
          </div>
          <div className={styles.right}>
            <div style={{ flex: 1.5 }} />
            <div className={styles.desktopTitle}>
              <div className={styles.title}>{item.name}</div>
              <div className={styles.subdescription}>
                <div className={styles.categories}>
                  Categories: {item.categories.join(", ")}
                </div>
                <div className={styles.techstack}>
                  Technology Used: {item.techstack.join(", ")}
                </div>
              </div>
            </div>
            <div className={styles.description}>{item.description}</div>
            {(item.website || item.github) && (
              <div className={styles.linkParent}>
                {item.website && (
                  <a
                    className={styles.websitelink}
                    href={item.website}
                    target="_blank"
                  >
                    <div className={styles.websiteHeader}>Website</div>
                    <TbExternalLink />
                  </a>
                )}
                {item.github && (
                  <a
                    className={styles.githublink}
                    href={item.github}
                    target="_blank"
                  >
                    <div className={styles.githubHeader}>Github</div>
                    <FaGithub />
                  </a>
                )}
              </div>
            )}
            <div style={{ flex: 1.5 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
