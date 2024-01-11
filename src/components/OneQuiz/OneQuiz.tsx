import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";
import styles from "@/styles/CreateQuiz/CreateQuiz.module.scss";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

type OneQuizProp = {
  control: any;
  numberQuiz: number;
};

const OneQuiz = ({ control, numberQuiz }: OneQuizProp) => {
  const [questionType, setQuestionType] = useState<string>("");
  const [rightAnswer, setRightAnswer] = useState<string>("");
  const [rightMultipleAnswer, setMultipleRightAnswer] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setQuestionType(event.target.value);
    setRightAnswer("");
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setRightAnswer(event.target.value);
  };

  const handleChange3 = (event: SelectChangeEvent<typeof rightMultipleAnswer>) => {
    const {
      target: { value },
    } = event;
    setMultipleRightAnswer(typeof value === "string" ? value.split(",") : value);
  };

  const { fields: answerFields, append: answerAppend, remove: answerRemove } = useFieldArray({ control, name: "answerList" });
  const { fields: answerMultipleFields, append: answerMultipleAppend, remove: answerMultipleRemove } = useFieldArray({ control, name: "answerMultipleList" });

  return (
    <div className={styles.form__list__item}>
      <div className={styles.right__subtitle__number}>{`${numberQuiz + 1}`}</div>
      <div className={styles.right__subtitle}>{`Question type`}</div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "100% " }}>
        <InputLabel>Select question type</InputLabel>
        <Select value={questionType} onChange={handleChange}>
          <MenuItem value={"1"}>Single choice</MenuItem>
          <MenuItem value={"2"}>Multiple choice</MenuItem>
          <MenuItem value={"3"}>True or False</MenuItem>
        </Select>
      </FormControl>
      <div className={`${styles.right__subtitle} ${styles.marginTop}`}>Question</div>
      <TextField fullWidth label="Insert question" variant="standard" />
      {questionType === "1" ? (
        <>
          <div className={`${styles.right__subtitle} ${styles.marginTop}`}>Answers</div>
          <div className={`${styles.form__answers}`}>
            {answerFields.map((field, index) => (
              <div key={field.id} className={`${styles.form__answers__div}`}>
                <TextField fullWidth label={`Insert answer ${index + 1}`} variant="standard" />
                {index > 1 && (
                  <svg onClick={() => answerRemove(index)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor">
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                      id="mainIconPathAttribute"
                      fill="rgba(54, 169, 184, 1)"
                    ></path>
                  </svg>
                )}
              </div>
            ))}
          </div>

          <div>
            <button className={styles.button__create} type="button" onClick={() => answerAppend({ answer: "" })}>
              Add Answer
            </button>
          </div>

          <div className={`${styles.right__subtitle} ${styles.marginTop}`}>Right Answer</div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: "100% " }}>
            <InputLabel>Select right answer</InputLabel>
            <Select value={rightAnswer} onChange={handleChange2}>
              {answerFields.map((answer, index) => (
                <MenuItem value={`${index}`} key={answer.id}>
                  {`${index + 1}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      ) : questionType === "2" ? (
        <>
          <div className={`${styles.right__subtitle} ${styles.marginTop}`}>Answers</div>
          {answerMultipleFields.map((field, index) => (
            <div key={field.id} className={`${styles.form__answers__div}`}>
              <TextField fullWidth label={`Insert answer ${index + 1}`} variant="standard" />
              {index > 2 && (
                <svg
                  onClick={() => answerMultipleRemove(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    id="mainIconPathAttribute"
                    fill="rgba(54, 169, 184, 1)"
                  ></path>
                </svg>
              )}
            </div>
          ))}

          <div>
            <button className={styles.button__create} type="button" onClick={() => answerMultipleAppend({ answer: "" })}>
              Add answer
            </button>
          </div>

          <div className={`${styles.right__subtitle} ${styles.marginTop}`}>Right Answer</div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: "100% " }}>
            <InputLabel id="demo-multiple-checkbox-label">Select right answer</InputLabel>
            <Select
              multiple
              value={rightMultipleAnswer}
              onChange={handleChange3}
              input={<OutlinedInput label="Tag" />}
              renderValue={selected => selected.join(", ")}
              sx={{
                "& .MuiSelect-multiple": {
                  paddingBottom: "5px",
                },
              }}
            >
              {answerMultipleFields.map((answer, index) => (
                <MenuItem value={`${index}`} key={answer.id}>
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                    checked={rightMultipleAnswer.indexOf(`${index}`) > -1}
                  />
                  <ListItemText primary={index + 1} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      ) : questionType === "3" ? (
        <>
          <div className={`${styles.right__subtitle} ${styles.marginTop}`}>Right Answer</div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: "100% " }}>
            <InputLabel>Select right answer</InputLabel>
            <Select value={rightAnswer} onChange={handleChange2}>
              <MenuItem value={"True"}>True </MenuItem>
              <MenuItem value={"False"}>False </MenuItem>
            </Select>
          </FormControl>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OneQuiz;
