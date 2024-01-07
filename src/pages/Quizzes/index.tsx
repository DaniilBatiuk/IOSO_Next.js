import styles from "@/styles/Quizzes/Quizzes.module.scss";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import TextField from "@mui/material/TextField";
export default function Quizzes() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className={`${styles.quizzes__container}`}>
        <section className={`${styles.quizzes__form}`}>
          <div className={`${styles.quizzes__title}`}> Quizzes </div>
          <form className={`${styles.form}`}>
            <TextField id="standard-basic" label="Find by name" variant="standard" />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Status">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Difficulty</InputLabel>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Difficulty">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
              <InputLabel id="demo-simple-select-standard-label">Filter by name</InputLabel>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Filter by name">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </form>
        </section>
        <section className={styles.list}>
          <div className={styles.item}>
            <div className={styles.item_head}>
              <div className={styles.item_head_left}>
                <div className={styles.item_status_open}>Active</div>
                <div className={styles.item_data}>Created: 2024-1-03</div>
              </div>
              <div className={styles.item_deadline}>Deadline: 2024-1-03</div>
            </div>
            <div className={styles.item_title}>Add Two Numbers</div>
            <div className={styles.item_bottom}>
              <div className={styles.item_question}>10 Questions</div>
              <div className={styles.item_button}>Quiz</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_head}>
              <div className={styles.item_head_left}>
                <div className={styles.item_status_close}>Password</div>
                <div className={styles.item_data}>Created: 2024-1-03</div>
              </div>
              <div className={styles.item_deadline}>Deadline: 2024-1-03</div>
            </div>
            <div className={styles.item_title}>Add Two Numbers Add Two Numbers Add Two Numbers Add Two Numbers</div>
            <div className={styles.item_bottom}>
              <div className={styles.item_question}>10 Questions</div>
              <div className={styles.item_button}>Quiz</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_head}>
              <div className={styles.item_head_left}>
                <div className={styles.item_status_close}>Password</div>
                <div className={styles.item_data}>Created: 2024-1-03</div>
              </div>
              <div className={styles.item_deadline}>Deadline: 2024-1-03</div>
            </div>
            <div className={styles.item_title}>Add Two Numbers Add Two Numbers Add Two Numbers Add Two Numbers</div>
            <div className={styles.item_bottom}>
              <div className={styles.item_question}>10 Questions</div>
              <div className={styles.item_button}>Quiz</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_head}>
              <div className={styles.item_head_left}>
                <div className={styles.item_status_open}>Active</div>
                <div className={styles.item_data}>Created: 2024-1-03</div>
              </div>
              <div className={styles.item_deadline}></div>
            </div>
            <div className={styles.item_title}>Add Two Numbers Add Two Numbers Add Two Numbers Add Two Numbers</div>
            <div className={styles.item_bottom}>
              <div className={styles.item_question}>10 Questions</div>
              <div className={styles.item_button}>Quiz</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
