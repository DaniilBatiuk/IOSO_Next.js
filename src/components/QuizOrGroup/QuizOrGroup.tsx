import styles from "@/styles/Quiz/Quiz.module.scss";
import clsx from "clsx";

type QuizOrGroupProp = {
  status: string;
  buttonText: string;
  type: string;
};

const QuizOrGroup: React.FC<QuizOrGroupProp> = ({ status, buttonText, type }: QuizOrGroupProp) => {
  return (
    <div
      className={clsx(styles.quiz__item, {
        [styles.quiz__item__active]: status === "Active" || status === "Available" || status === "Participant",
        [styles.quiz__item__ended]: status === "Ended",
        [styles.quiz__item__progress]: status === "In progress" || status === "Manager",
        [styles.quiz__item__key]: status === "Access key",
      })}
    >
      <div className={styles.quiz__item_head}>
        <div className={styles.quiz__item_head_left}>
          <div
            className={clsx(styles.quiz__item_status, {
              [styles.quiz__item_status_active]: status === "Active" || status === "Available" || status === "Participant",
              [styles.quiz__item_status_ended]: status === "Ended",
              [styles.quiz__item_status_progress]: status === "In progress" || status === "Manager",
              [styles.quiz__item_status_key]: status === "Access key",
            })}
          >
            {status}
          </div>
        </div>
        <div className={styles.quiz__item_deadline}>{type === "quiz" ? "Deadline: 2024-1-03" : "Daniil Batiuk"}</div>
      </div>
      <div className={styles.quiz__item_title}>Add Two Numbers Add Two Numbers</div>
      <div className={styles.quiz__item_bottom}>
        <div className={styles.quiz__item_question}> {type === "quiz" ? "10 Questions" : "10 Participants"}</div>
        {buttonText !== "View" ? (
          <button className={styles.quiz__item_button}>{buttonText}</button>
        ) : (
          <div className={styles.quiz__item_group_button}>
            <button className={styles.quiz__item_button}>{buttonText}</button>
            <button className={styles.quiz__item_button_right}>Leave</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default QuizOrGroup;
