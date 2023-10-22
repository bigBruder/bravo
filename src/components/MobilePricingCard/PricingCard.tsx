import styles from "./PricingCard.module.scss";
import { FC } from "react";
import cn from "classnames";
interface Props {
  image: string;
  isFocused: boolean;
  isNearby?: boolean;
  pricing?: string;
  description?: string;
  title?: string;
}

const PricingCardMobile: FC<Props> = ({
  image,
  isFocused,

  pricing,
  description,
  title,
}) => {
  return (
    <>
      <img src={image} className={styles.card} />
      <div
        className={`${styles.card__blur} ${
          isFocused && styles["card__blur--active"]
        }`}
      />
      {isFocused ? (
        <div className={styles.card__content}>
          <p className={styles.card__title}>{title}</p>
          <div className={styles.card__center}>
            <SeparatorLine inverseAnim />
            <p className={styles.card__text}>{description}</p>
            <SeparatorLine />
          </div>
          <div className={styles.card__price}>
            <p className={styles["card__price__text"]}>Starting from:</p>
            <p className={styles["card__price__price"]}>{pricing}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

interface PropsLine {
  inverseAnim?: boolean;
}

const SeparatorLine: FC<PropsLine> = ({ inverseAnim }) => (
  <div
    className={`${styles.container_line_wrapper} ${
      inverseAnim && styles["container_line_wrapper--inverse-animation"]
    }`}
  >
    <div className={styles.container_line} />
    <div
      className={cn(styles.container_line, styles["container_line--vertical"])}
    />
    <div
      className={cn(styles.container_line, styles["container_line--vertical"])}
    />
    <div className={styles.container_line} />
    <div
      className={cn(styles.container_line, styles["container_line--vertical"])}
    />
    <div
      className={cn(styles.container_line, styles["container_line--vertical"])}
    />
    <div className={styles.container_line} />
  </div>
);

export default PricingCardMobile;
