import styles from "@/styles/Quizzes/Quizzes.module.scss";
import Select from "react-select";
import Image from "next/image";
import Open from "@/../public/Open.svg";
import People from "@/../public/People.svg";
import Footer from "@/components/Footer/Footer";
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
            {/* <Select options={options} placeholder="Status of 1" classNamePrefix="custom_select" />
            <Select options={options} placeholder="Difficulty" classNamePrefix="custom_select" />
            <Select options={options} placeholder="Filter by name" classNamePrefix="custom_select" /> */}
            <MySelect options={options} placeholder="Status" />
            <MySelect options={options} placeholder="Difficulty" />
            <MySelect options={options} placeholder="Filter by name" />
          </form>
        </section>

        <section className={styles.quizzes__table}>
          <table className={styles.quizzes__list}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Creator</th>
                <th>Status</th>
                <th>Created date</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.item}>
                <td className={styles.item__title}>Regular Expression Matching Regular Expression Matching</td>
                <td className={styles.item__creator}>Daniil Batiuk</td>
                <td>
                  <div className={`${styles.item__status_open}`}>Open</div>
                </td>
                <td className={styles.item__data}>Mar 13 2021 08:05 AM</td>
                <td className={styles.item__deadline}>Mar 15 2021</td>
                <td>
                  <button className={styles.item__button}>Quiz</button>
                </td>
              </tr>
              <tr className={styles.item}>
                <td className={styles.item__title}>Regular Expressio</td>
                <td className={styles.item__creator}>Daniil</td>
                <td>
                  <div className={`${styles.item__status_close}`}>Close</div>
                </td>
                <td className={styles.item__data}>Mar 13 2021 08:05 AM</td>
                <td className={styles.item__deadline}>Mar 15 2021</td>
                <td>
                  <button className={styles.item__button}>Quiz</button>
                </td>
              </tr>
              <tr className={styles.item}>
                <td className={styles.item__title}>Regular Expression Matching Regular Expression Matching</td>
                <td className={styles.item__creator}>Daniil Batiuk Daniil Batiuk</td>
                <td>
                  <div className={`${styles.item__status_close}`}>Close</div>
                </td>
                <td className={styles.item__data}>Mar 13 2021 08:05 AM</td>
                <td className={styles.item__deadline}>Mar 15 2021</td>
                <td>
                  <button className={styles.item__button}>Quiz</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
