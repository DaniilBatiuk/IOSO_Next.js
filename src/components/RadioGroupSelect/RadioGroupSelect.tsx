import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";

const RadioGroupSelect: React.FC = () => {
  const [check, setCheck] = useState<string>("True");

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.value);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <RadioGroup value={check} onChange={handlerChange} aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
        <FormControlLabel value="True" control={<Radio />} label="True" />
        <FormControlLabel value="False" control={<Radio />} label="False" />
      </RadioGroup>
    </div>
  );
};
export default RadioGroupSelect;
