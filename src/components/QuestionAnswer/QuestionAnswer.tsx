import styles from './styles.module.scss';

const QuestionAnswer = ({ summary, question }: { summary: string, question: string }) => {
  return (
    <details style={{ color: 'white' }} className={styles.details}>
      <summary className={styles.summary}>{summary}</summary>
      <p className={styles.text}>{question}</p>
    </details>
  );
};

export default QuestionAnswer;
