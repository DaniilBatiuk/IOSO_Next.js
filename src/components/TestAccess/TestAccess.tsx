import styles from "@/styles/CreateQuiz/CreateQuiz.module.scss";
import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";
import Group from "@/../public/Group.svg";
import Person from "@/../public/Person.svg";
import Planet from "@/../public/Planet.svg";
import Private from "@/../public/Private.svg";
import Information from "@/../public/Information.svg";
import Exist from "@/../public/Exist.svg";
import Create from "@/../public/Create.svg";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type TestAccessProp = {
  type: string;
};

const TestAccess: React.FC<TestAccessProp> = ({ type }: TestAccessProp) => {
  const [accessActive, setAccessActive] = useState<number>(type === "quiz" ? 0 : 1);
  const [groupActive, setGroupActive] = useState<number>(0);
  const [groupAccessActive, setGroupAccessActive] = useState<number>(0);

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.right}>
      <div className={styles.right__subtitle_mar}>Access type</div>
      {type === "quiz" ? (
        <div className={styles.right__list}>
          <button className={clsx(styles.right__item, { [styles.right__item__active]: accessActive === 0 })} onClick={() => setAccessActive(0)}>
            <Image src={Person.src} alt="Icon" width={30} height={30} />
            <div>Private</div>
          </button>
          <button className={clsx(styles.right__item, { [styles.right__item__active]: accessActive === 1 })} onClick={() => setAccessActive(1)}>
            <Image src={Private.src} alt="Icon" width={30} height={30} />
            <div>Public access code</div>
          </button>
          <button className={clsx(styles.right__item, { [styles.right__item__active]: accessActive === 2 })} onClick={() => setAccessActive(2)}>
            <Image src={Planet.src} alt="Icon" width={30} height={30} />
            <div>Public</div>
          </button>
          <button className={clsx(styles.right__item, { [styles.right__item__active]: accessActive === 3 })} onClick={() => setAccessActive(3)}>
            <Image src={Group.src} alt="Icon" width={30} height={30} />
            <div>Group</div>
          </button>
        </div>
      ) : (
        <div className={styles.right__list}>
          <button className={clsx(styles.right__item, { [styles.right__item__active]: accessActive === 1 })} onClick={() => setAccessActive(1)}>
            <Image src={Private.src} alt="Icon" width={30} height={30} />
            <div>Public access code</div>
          </button>
          <button className={clsx(styles.right__item, { [styles.right__item__active]: accessActive === 2 })} onClick={() => setAccessActive(2)}>
            <Image src={Planet.src} alt="Icon" width={30} height={30} />
            <div>Public</div>
          </button>
        </div>
      )}

      <div className={styles.right__info}>
        <Image src={Information.src} alt="Icon" width={25} height={25} />
        {type === "quiz" ? (
          <div>
            {accessActive === 0
              ? "Only you will be able to take the quiz"
              : accessActive === 1
              ? "Quiz access will be possible only with an individual access code"
              : accessActive === 2
              ? "Anyone will be able to take the quiz"
              : "The quiz will only be available only to members of your group"}
          </div>
        ) : (
          <div>{accessActive === 1 ? "Anyone who has access code will be able to join the group" : "Anyone will be able to join the group"}</div>
        )}
      </div>
      <form className={`${styles.form}`}>
        {accessActive === 1 && (
          <>
            <div className={styles.right__subtitle}>Access code</div>
            <TextField fullWidth id="standard-basic" type="password" label="Insert quiz access code" variant="standard" />
          </>
        )}
        {accessActive === 3 && (
          <>
            <div className={styles.right__subtitle_mar}>Group</div>
            <div className={`${styles.right__list} ${styles.marginBot}`}>
              <button type="button" className={clsx(styles.right__item, { [styles.right__item__active]: groupActive === 0 })} onClick={() => setGroupActive(0)}>
                <Image src={Exist.src} alt="Icon" width={30} height={30} />
                <div>Exist</div>
              </button>
              <button type="button" className={clsx(styles.right__item, { [styles.right__item__active]: groupActive === 1 })} onClick={() => setGroupActive(1)}>
                <Image src={Create.src} alt="Icon" width={30} height={30} />
                <div>Create</div>
              </button>
            </div>
            {groupActive === 0 ? (
              <FormControl variant="standard" sx={{ m: 1, minWidth: "100% " }}>
                <InputLabel id="demo-simple-select-standard-label">Select group</InputLabel>
                <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={5}>3</MenuItem>
                  <MenuItem value={10}>3</MenuItem>
                  <MenuItem value={"Infinity"}>Infinity</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <>
                <TextField fullWidth id="standard-basic" label="Insert group name" variant="standard" />
                <div className={`${styles.right__subtitle_mar} ${styles.marginTop}`}>Group access type</div>
                <div className={`${styles.right__list} ${styles.marginBot}`}>
                  <button type="button" className={clsx(styles.right__item, { [styles.right__item__active]: groupAccessActive === 0 })} onClick={() => setGroupAccessActive(0)}>
                    <Image src={Private.src} alt="Icon" width={30} height={30} />
                    <div>Public access code</div>
                  </button>
                  <button type="button" className={clsx(styles.right__item, { [styles.right__item__active]: groupAccessActive === 1 })} onClick={() => setGroupAccessActive(1)}>
                    <Image src={Planet.src} alt="Icon" width={30} height={30} />
                    <div>Public</div>
                  </button>
                </div>
                <div className={styles.right__info}>
                  <Image src={Information.src} alt="Icon" width={25} height={25} />
                  <div>{groupAccessActive === 0 ? "Anyone who has access code will be able to join the group" : "Anyone will be able to join the group"}</div>
                </div>
                {groupAccessActive === 0 && (
                  <>
                    <div className={styles.right__subtitle}>Access code</div>
                    <TextField fullWidth id="standard-basic" type="password" label="Insert quiz access code" variant="standard" />
                  </>
                )}
                <button className={styles.button__create}>Create</button>
              </>
            )}
          </>
        )}

        {type === "quiz" && (
          <>
            <div className={`${styles.right__subtitle} ${styles.marginTop}`}>Attempts per respondent</div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: "100% " }}>
              <InputLabel id="demo-simple-select-standard-label">Select attempts count</InputLabel>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={5}>3</MenuItem>
                <MenuItem value={10}>3</MenuItem>
                <MenuItem value={"Infinity"}>Infinity</MenuItem>
              </Select>
            </FormControl>
          </>
        )}
        <button type="submit" className={styles.button__save}>
          Save
        </button>
      </form>
    </div>
  );
};
export default TestAccess;
