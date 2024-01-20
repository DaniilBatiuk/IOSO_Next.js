import styles from "@/styles/QuizPass.module.scss";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";

const QuizPass: React.FC = () => {
  const [check, setCheck] = useState<string>("");

  const handlerChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.value);
  };

  return (
    <div className={styles.quizPass__container}>
      <form className={styles.quizPass__form}>
        <div className={styles.left}>
          <div className={styles.left__title}>Question 1</div>
          <div className={styles.left__text}>Where are you now?</div>
          <div className={styles.left__title2}>Select one answer</div>
          <RadioGroup value={check} onChange={handlerChange2} aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
            <FormControlLabel value="Home" control={<Radio />} label="Home" />
            <FormControlLabel value="Park" control={<Radio />} label="Park" />
            <FormControlLabel value="Cinema" control={<Radio />} label="Cinema" />
            <FormControlLabel value="Hospital" control={<Radio />} label="Hospital" />
          </RadioGroup>
        </div>
        <div className={styles.right}>
          <div className={styles.right__title}>Questions</div>
          <div className={styles.right__block}>
            <div className={styles.right__number}>1</div>
            <div className={styles.right__number}>2</div>
            <div className={styles.right__number}>3</div>
            <div className={styles.right__number}>4</div>
            <div className={styles.right__number}>5</div>
            <div className={styles.right__number}>6</div>
            <div className={styles.right__number}>7</div>
            <div className={styles.right__number}>8</div>
            <div className={styles.right__number}>9</div>
            <div className={styles.right__number}>10</div>
          </div>
          <button className={styles.right__button}>Finish</button>
        </div>
      </form>
    </div>
  );
};
export default QuizPass;
