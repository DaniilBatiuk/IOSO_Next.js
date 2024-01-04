import styles from "@/styles/Quizzes/Quizzes.module.scss";
import MySelect from "@/components/MySelect/MySelect";
export default function Quizzes() {
  const options = [
    { value: "value1", label: "Значение 1" },
    { value: "value2", label: "Значение 2" },
    { value: "value3", label: "Значение 3" },
  ];

  return (
    <>
      <div className={`${styles.quizzes__container}`}>
        <section className={`${styles.quizzes__form}`}>
          <div className={`${styles.quizzes__title}`}> Quizzes </div>
          <form className={`${styles.form}`}>
            <input type="text" placeholder="Find by name" />
            <MySelect options={options} placeholder="Status" />
            <MySelect options={options} placeholder="Difficulty" />
            <MySelect options={options} placeholder="Filter by name" />
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
