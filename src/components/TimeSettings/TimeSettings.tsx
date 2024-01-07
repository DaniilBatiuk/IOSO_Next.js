import styles from "@/styles/CreateQuiz/CreateQuiz.module.scss";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TimeSettings: React.FC = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  const handleHoursChange = (event: Event, value: number | number[], activeThumb: number) => {
    setHours(value as number);
  };

  const handleMinutesChange = (event: Event, value: number | number[], activeThumb: number) => {
    setMinutes(value as number);
  };

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  function valuetext(value: number) {
    return `${value}`;
  }

  function valuetext2(value: number) {
    return `${value}`;
  }

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.right}>
      <div className={styles.right__subtitle_mar}>Test duration</div>
      <form action="#" className={`${styles.form}`} onSubmit={handleSubmit}>
        <div className={`${styles.form__ranges}`}>
          <div className={`${styles.form__range}`}>
            <label htmlFor="Hours">Hours</label>
            <div>
              <Slider aria-label="Temperature" id="Hours" name="Hours" getAriaValueText={valuetext} valueLabelDisplay="auto" defaultValue={0} min={0} max={23} onChange={handleHoursChange} />
            </div>
          </div>
          <div className={`${styles.form__range}`}>
            <label htmlFor="Minutes">Minutes</label>
            <div>
              <Slider aria-label="Temperature" id="Minutes" name="Minutes" getAriaValueText={valuetext2} valueLabelDisplay="auto" defaultValue={0} min={0} max={59} onChange={handleMinutesChange} />
            </div>
          </div>
        </div>
        <div className={`${styles.form__range__view}`}>
          {formatTime(hours)}:{formatTime(minutes)}
        </div>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <button type="submit" className={styles.button__save}>
          Save
        </button>
      </form>
    </div>
  );
};
export default TimeSettings;
