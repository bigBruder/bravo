import styles from "./PricingCard.module.scss";
import { FC } from "react";
import cn from "classnames";

interface Props {
  image: string;
  isFocused: boolean;
}

const PricingCard: FC<Props> = ({ image, isFocused }) => {
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
          <p className={styles.card__title}>CAD Design</p>
          <div className={styles.card__center}>
            <SeparatorLine inverseAnim />
            <p className={styles.card__text}>
              Straightforward designs without stones, including revisions*
            </p>
            <SeparatorLine />
          </div>
          <div className={styles.card__price}>
            <p className={styles["card__price__text"]}>Price from:</p>
            <p className={styles["card__price__price"]}>$60</p>
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

export default PricingCard;
