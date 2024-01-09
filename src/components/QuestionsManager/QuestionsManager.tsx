import styles from "@/styles/CreateQuiz/CreateQuiz.module.scss";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const QuestionsManager: React.FC = () => {
  const [questionType, setQuestionType] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setQuestionType(event.target.value);
  };

  return (
    <div className={styles.right}>
      <div className={styles.right__subtitle}>Question type</div>
      <form action="#" className={`${styles.form}`}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: "100% " }}>
          <InputLabel id="demo-simple-select-standard-label">Select question type</InputLabel>
          <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={questionType} onChange={handleChange} label="Age">
            <MenuItem value={"1"}>Single choice</MenuItem>
            <MenuItem value={"2"}>Multiple choice</MenuItem>
            <MenuItem value={"3"}>True or False</MenuItem>
          </Select>
        </FormControl>
        <div className={`${styles.right__subtitle} ${styles.marginTop}`}>Question</div>
        <TextField fullWidth id="standard-basic" label="Insert question" variant="standard" />

        {questionType === "1" ? (
          <>
            <div className={`${styles.right__subtitle} ${styles.marginTop}`}>Answers</div>
            <div className={`${styles.form__answers}`}>
              <div className={`${styles.form__answers__div}`}>
                <TextField fullWidth id="standard-basic" label="Insert answer 1" variant="standard" />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor">
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    id="mainIconPathAttribute"
                    fill="rgba(54, 169, 184, 1)"
                  ></path>
                </svg>
              </div>
              <div className={`${styles.form__answers__div}`}>
                <TextField fullWidth id="standard-basic" label="Insert answer 2" variant="standard" />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor">
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    id="mainIconPathAttribute"
                    fill="rgba(54, 169, 184, 1)"
                  ></path>
                </svg>
              </div>
              <div className={`${styles.form__answers__div}`}>
                <TextField fullWidth id="standard-basic" label="Insert answer 3" variant="standard" />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor">
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    id="mainIconPathAttribute"
                    fill="rgba(54, 169, 184, 1)"
                  ></path>
                </svg>
              </div>
              <div className={`${styles.form__answers__div}`}>
                <TextField fullWidth id="standard-basic" label="Insert answer 4" variant="standard" />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor">
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    id="mainIconPathAttribute"
                    fill="rgba(54, 169, 184, 1)"
                  ></path>
                </svg>
              </div>
            </div>
          </>
        ) : questionType === "2" ? (
          <div>2</div>
        ) : questionType === "3" ? (
          <div>3</div>
        ) : (
          <></>
        )}
        <button type="submit" className={styles.button__save}>
          Save
        </button>
      </form>
    </div>
  );
};
export default QuestionsManager;
