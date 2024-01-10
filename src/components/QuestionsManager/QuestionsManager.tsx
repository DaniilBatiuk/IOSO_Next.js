import styles from "@/styles/CreateQuiz/CreateQuiz.module.scss";

import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import OneQuiz from "../OneQuiz/OneQuiz";

const QuestionsManager: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      questionList: [{ question: "" }],
      answerList: [{ answer: "" }, { answer: "" }],
    },
  });

  const onSubmit: SubmitHandler<any> = (data: any) => {};

  const { fields: questionFields, append: questionAppend, remove: questionRemove } = useFieldArray({ control, name: "questionList" });

  return (
    <div className={styles.right}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate encType="multipart/form-data" className={`${styles.form}`}>
        <div className={`${styles.form__question__list}`}>
          {questionFields.map((field, index) => (
            <OneQuiz key={field.id} control={control} />
          ))}
        </div>
        <div className="modal__button-div">
          <button className={styles.button__create} type="button" onClick={() => questionAppend({ question: "" })}>
            Add question
          </button>
        </div>

        <button type="submit" className={styles.button__save}>
          Save
        </button>
      </form>
    </div>
  );
};
export default QuestionsManager;
