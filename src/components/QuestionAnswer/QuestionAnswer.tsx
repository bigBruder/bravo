import styles from "./styles.module.scss";
import {useCallback, useState} from "react";
import Plus from '../../assets/icons/FAQ/plus.svg';
import Cross from '../../assets/icons/FAQ/Cross.svg';

const QuestionAnswer = ({
  summary,
  question,
}: {
  summary: string;
  question: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  //@ts-ignore
  function closeOtherDetails(targetDetail) {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  }
  const details = document.querySelectorAll("details");

  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      closeOtherDetails(targetDetail);
    });
  });

  return (
    <div style={{ color: "var(--faq-textContent)" }} className={styles.details}>
      <div className={styles.details__inner}>
        {isOpen ? <img src={Cross} className={styles.cross} width={22} height={22}/> : <img src={Plus} style={{marginLeft: 3.5, marginRight: 3.5}} width={15} height={15}/>}

        <p className={styles.summary} onClick={() => setIsOpen(!isOpen)}>{summary}</p>
      </div>
      {isOpen ? <p className={styles.text}>{question}</p> : null}
    </div>
  );
};

export default QuestionAnswer;
