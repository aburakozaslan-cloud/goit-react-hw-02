import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={styles.container}>
      <p className={styles.statLine}>
        <span className={styles.label}>Good:</span>
        <span className={styles.value}>{feedback.good}</span>
      </p>

      <p className={styles.statLine}>
        <span className={styles.label}>Neutral:</span>
        <span className={styles.value}>{feedback.neutral}</span>
      </p>

      <p className={styles.statLine}>
        <span className={styles.label}>Bad:</span>
        <span className={styles.value}>{feedback.bad}</span>
      </p>

      <p className={styles.statLine}>
        <span className={styles.label}>Total:</span>
        <span className={styles.value}>{totalFeedback}</span>
      </p>

      <p className={`${styles.statLine} ${styles.positive}`}>
        <span className={styles.label}>Positive:</span>
        <span className={styles.value}>{positiveFeedback}%</span>
      </p>
    </div>
  );
};

export default Feedback;
