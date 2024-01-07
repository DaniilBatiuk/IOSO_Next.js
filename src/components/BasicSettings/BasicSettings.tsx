import styles from "@/styles/CreateQuiz/CreateQuiz.module.scss";
import TextField from "@mui/material/TextField";

const BasicSettings: React.FC = () => {
  return (
    <div className={styles.right}>
      <div className={styles.right__subtitle_mar}>Initial settings</div>
      <form action="#" className={`${styles.form}`}>
        <TextField fullWidth id="standard-basic" label="Insert quiz name" variant="standard" />
        <button type="submit" className={styles.button__save}>
          Save
        </button>
      </form>
    </div>
  );
};
export default BasicSettings;
