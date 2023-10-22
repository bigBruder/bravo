//@ts-nocheck
import styles from "./Card.module.scss";
import { FC } from "react";

interface IProps {
  x?: object;
  y?: object;
}

const Card: FC<IProps> = ({ x, y }) => {
  return (
    <div className={styles.card}>
      <img src={x?.fields?.file.url} className={styles.card_image} />
      <div className={styles.card_person}>
        <p className={styles.card_name}>{x?.fields.title}</p>

        <p className={styles.card_role}>{y}</p>
      </div>
      <p className={styles.card_description}>{x?.fields.description}</p>
    </div>
  );
};

export default Card;
