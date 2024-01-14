import styles from "@/styles/Quiz/Quiz.module.scss";
import clsx from "clsx";

type QuizProp = {
  status: string;
  buttonText: string;
};

const Quiz: React.FC<QuizProp> = ({ status, buttonText }: QuizProp) => {
  return (
    <div
      className={clsx(styles.quiz__item, {
        [styles.quiz__item__active]: status === "Active" || "Available",
        [styles.quiz__item__ended]: status === "Ended",
        [styles.quiz__item__progress]: status === "In progress",
        [styles.quiz__item__key]: status === "Access key",
      })}
    >
      <div className={styles.quiz__item_head}>
        <div className={styles.quiz__item_head_left}>
          <div
            className={clsx(styles.quiz__item_status, {
              [styles.quiz__item_status_active]: status === "Active" || "Available",
              [styles.quiz__item_status_ended]: status === "Ended",
              [styles.quiz__item_status_progress]: status === "In progress",
              [styles.quiz__item_status_key]: status === "Access key",
            })}
          >
            {status}
          </div>
        </div>
        <div className={styles.quiz__item_deadline}>Deadline: 2024-1-03</div>
      </div>
      <div className={styles.quiz__item_title}>Add Two Numbers</div>
      <div className={styles.quiz__item_bottom}>
        <div className={styles.quiz__item_question}>10 Questions</div>
        <div className={styles.quiz__item_button}>{buttonText}</div>
      </div>
    </div>
  );
};
export default Quiz;
