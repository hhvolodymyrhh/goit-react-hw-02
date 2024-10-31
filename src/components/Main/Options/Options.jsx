import styles from "./Options.module.css";
//використання className={clsx("add", "vaa")}
// import clsx from "clsx";

const Options = () => {

  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <button className={styles.button_group}>Good</button></li>
      <li className={styles.list_item}>
        <button className={styles.button_group}>Neutral</button></li>
      <li className={styles.list_item}>
        <button className={styles.button_group}>Bad</button></li>
      <li className={styles.list_item}>
        <button className={styles.button_group}>Reset</button></li>
    </ul>
  );
};
export default Options;