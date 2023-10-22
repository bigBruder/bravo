import styles from "./Card.module.scss";
import { FC } from "react";

interface IProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

const Card: FC<IProps> = ({
  // titleImage,
  // description = "",
  // role = "",
  // avatar,
  image = "",
  title = "",
  description = "",
  date,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.card_image} />
      <div className={styles.card_person}>
        <p className={styles.card_name}>{title}</p>

        <p className={styles.card_role}>{date}</p>
      </div>
      <p className={styles.card_description}>{description}</p>
    </div>
  );
};

export default Card;
