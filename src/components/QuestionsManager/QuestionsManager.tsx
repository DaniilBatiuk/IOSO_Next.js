import styles from "@/styles/CreateQuiz/CreateQuiz.module.scss";

const QuestionsManager: React.FC = () => {
  return (
    <div className={styles.right}>
      <div className={styles.right__subtitle_mar}>Questions manager</div>
      <form action="#" className={`${styles.form}`}>
        <button type="submit" className={styles.button__save}>
          Save
        </button>
      </form>
    </div>
  );
};
export default QuestionsManager;
