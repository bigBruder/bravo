import React, { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface Props {
  image: string;
  title: string;
  text: string;
  // askCard: boolean;
}

const ImageHoverComponent: React.FC<Props> = ({
  image,
  title,
  text,
  //@ts-ignore
  askCard,
}) => {
  const [isTextShown, setIsTextShown] = useState(false);

  const toggleOverlay = useCallback(() => {
    setIsTextShown((prevState) => !prevState);
  }, []);

  return (
    <div
      onMouseEnter={toggleOverlay}
      onMouseLeave={toggleOverlay}
      className={styles.container}
    >
      <img
        src={image}
        className={cn(styles.container_image, {
          [styles["container_image--dark"]]: isTextShown && !askCard,
        })}
      />
      <p
        className={cn(styles.container_title, {
          [styles["container_title--top"]]: isTextShown,
          [styles["container_title--askCard"]]: askCard,
        })}
      >
        {title}
      </p>
      {isTextShown ? (
        <>
          <div className={styles.container_line_wrapper}>
            <div className={styles.container_line} />
            <div
              className={cn(
                styles.container_line,
                styles["container_line--vertical"]
              )}
            />
            <div
              className={cn(
                styles.container_line,
                styles["container_line--vertical"]
              )}
            />
            <div className={styles.container_line} />
            <div
              className={cn(
                styles.container_line,
                styles["container_line--vertical"]
              )}
            />
            <div
              className={cn(
                styles.container_line,
                styles["container_line--vertical"]
              )}
            />
            <div className={styles.container_line} />
          </div>
          <div className={styles.container_over_container}>
            <p className={styles.container_text}>{text}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ImageHoverComponent;
