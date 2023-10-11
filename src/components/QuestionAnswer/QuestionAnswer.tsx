import styles from "./styles.module.scss";
import {useCallback, useState} from "react";

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


  const handleOnClickQuestion = useCallback(() => {
    console.log(isOpen);

    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isOpen]);

  return (
    <details
      style={{ color: "var(--faq-textContent)" }}
      className={styles.details}
      onClick={handleOnClickQuestion}
    >
      <summary className={styles.summary}>{summary}</summary>
      <p className={styles.text}>{question}</p>
    </details>
  );
};

export default QuestionAnswer;
