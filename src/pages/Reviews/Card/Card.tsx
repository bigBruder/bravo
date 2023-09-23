import styles from "./Card.module.scss";
import { FC } from "react";

interface IProps {
  titleName?: string;
  role?: string;
  description?: string;
  avatar: string;
}

const Card: FC<IProps> = ({
  titleName = "",
  description = "",
  role = "",
  avatar,
}) => {
  return (
    <div className={styles.card}>
      <img src={avatar} className={styles.card_image} />
      <p className={styles.card_name}>{titleName}</p>
      <p className={styles.card_role}>{role}</p>
      <p className={styles.card_description}>{description}</p>
    </div>
  );
};

export default Card;
