import styles from "@/styles/QuizPass.module.scss";
import MyCheckBox from "../UI/MyCheckBox/CheckBox";

type CheckboxQuizPassData = {
  question: string;
  variants: { variant: string }[];
  selected: string | string[];
};

type CheckboxQuizPassProps = CheckboxQuizPassData & {
  updateFields: (fields: Partial<CheckboxQuizPassData>) => void;
};

const CheckboxQuizPass: React.FC<CheckboxQuizPassProps> = ({ question, variants, selected, updateFields }: CheckboxQuizPassProps) => {
  return (
    <>
      <div className={styles.left__text}>{question}</div>
      <div className={styles.left__checkBox}>
        {variants.map((variant, index) => (
          <MyCheckBox key={index} updateFields={updateFields} selected={selected} variants={variants} variant={variant.variant} />
        ))}
      </div>
    </>
  );
};
export default CheckboxQuizPass;
