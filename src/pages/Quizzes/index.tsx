import styles from "@/styles/Quizzes/Quizzes.module.scss";
import Select from "react-select";

export default function Quizzes() {
  const options = [
    { value: "value1", label: "Значение 1" },
    { value: "value2", label: "Значение 2" },
    { value: "value3", label: "Значение 3" },
  ];

  //   const colorStyles = {
  //     control: (styles: any) => ({ ...styles, backgroundColor: "inherit", border: "2px rgba(54, 169, 184, 1) solid !important", padding: "3px 2px", boxShadow: "none" }),
  //     option: (styles: any, state: any) => {
  //       return { styles, backgroundColor: state.isSelected ? "rgba(54, 169, 184, 0.8)" : "inherit" };
  //     },
  //   };

  return (
    <div className={`${styles.quizzes__container}`}>
      <div className={`${styles.quizzes__form}`}>
        <div className={`${styles.quizzes__title}`}> Quizzes </div>
        <form className={`${styles.form}`}>
          <input type="text" placeholder="Find by name" />
          <Select options={options} placeholder="Status of 1" classNamePrefix="custom_select" />
          <Select options={options} placeholder="Difficulty" classNamePrefix="custom_select" />
          <Select options={options} placeholder="Filter by name" classNamePrefix="custom_select" />
        </form>
      </div>
      <div className={`${styles.quizzes__list}`}>
        <div className={`${styles.item}`}></div>
      </div>
    </div>
  );
}
