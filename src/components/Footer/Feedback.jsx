import styles from "./Feedback.module.css";
const Feedback = () => {
  return (
    <footer>
      <ul className={styles.list}>
        <li className={styles.item}> Good: <span className="good"></span></li>
        <li className={styles.item}> Neutral: <span></span></li>
        <li className={styles.item}> Bad: <span></span></li>
        <li className={styles.item}> Total: <span></span></li>
        <li className={styles.item}> Positive: <span></span></li>
      </ul>
    </footer>
  );
};

export default Feedback;