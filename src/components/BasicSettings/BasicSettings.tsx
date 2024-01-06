import styles from "@/styles/CreateQuiz/CreateQuiz.module.scss";

const BasicSettings: React.FC = () => {
  return (
    <div className={styles.right}>
      <div className={styles.right__subtitle}>Initial settings</div>
      <form action="#" className={`${styles.form}`}>
        <div className={`${styles.form__inputs}`}>
          <input type="text" placeholder="Insert quiz name" />
        </div>
        <button type="submit" className={styles.button__save}>
          Save
        </button>
      </form>
    </div>
  );
};
export default BasicSettings;
