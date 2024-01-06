import styles from "@/styles/CreateQuiz/CreateQuiz.module.scss";

const TimeSettings: React.FC = () => {
  return (
    <div className={styles.right}>
      <div className={styles.right__subtitle}>Time settings</div>
      <form action="#" className={`${styles.form}`}>
        <button type="submit" className={styles.button__save}>
          Save
        </button>
      </form>
    </div>
  );
};
export default TimeSettings;
