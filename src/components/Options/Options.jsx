import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${styles.btnGood}`}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>

      <button
        className={`${styles.btn} ${styles.btnNeutral}`}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>

      <button
        className={`${styles.btn} ${styles.btnBad}`}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>

      {totalFeedback > 0 && (
        <button
          className={`${styles.btn} ${styles.btnReset}`}
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
