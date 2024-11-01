import styles from "./Feedback.module.css";

const Feedback = ({ props, totalFeedback = 0 }) => {
  
  const { good = 0, neutral = 0, bad = 0, } = props
  const positiveFeedback = totalFeedback == 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <footer>
      <ul className={styles.list}>
        <li className={styles.item}> Good: {good}</li>
        <li className={styles.item}> Neutral: {neutral}</li>
        <li className={styles.item}> Bad: {bad}</li>
        <li className={styles.item}> Total: {totalFeedback}</li>
        <li className={styles.item}> Positive: {positiveFeedback }%</li>
      </ul>
    </footer>
  );
};

export default Feedback;