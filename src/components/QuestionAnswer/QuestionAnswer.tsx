import styles from "./styles.module.scss";

const QuestionAnswer = ({
  summary,
  question,
}: {
  summary: string;
  question: string;
}) => {
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
    <details style={{ color: "white" }} className={styles.details}>
      <summary className={styles.summary}>{summary}</summary>
      <p className={styles.text}>{question}</p>
    </details>
  );
};

export default QuestionAnswer;
