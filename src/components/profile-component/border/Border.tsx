//^ styles
import styles from "./Border.module.scss";

const Border = () => {
  return (
    <div className={styles["border-box"]}>
      <div className={styles["border"]} />
      <div className={styles["border"]} />
    </div>
  );
};

export default Border;
