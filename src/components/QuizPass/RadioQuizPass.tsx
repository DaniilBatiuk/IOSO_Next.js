import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";
import styles from "@/styles/QuizPass.module.scss";

type RadioQuizPassData = {
  question: string;
  variants: { variant: string }[];
  selected: string | string[];
};

type RadioQuizPassProps = RadioQuizPassData & {
  updateFields: (fields: Partial<RadioQuizPassData>) => void;
};

const RadioQuizPass: React.FC<RadioQuizPassProps> = ({ question, variants, selected, updateFields }: RadioQuizPassProps) => {
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedVariant = event.target.value;
    updateFields({ selected: selectedVariant });
  };

  return (
    <>
      <div className={styles.left__text}>{question}</div>
      <RadioGroup onChange={handlerChange} aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
        {variants.map((variant, index) => (
          <FormControlLabel key={index} checked={selected === variant.variant} value={variant.variant} control={<Radio />} label={variant.variant} />
        ))}
      </RadioGroup>
    </>
  );
};
export default RadioQuizPass;
