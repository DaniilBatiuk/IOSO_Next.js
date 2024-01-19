import styles from "@/styles/Profile.module.scss";

const Groups: React.FC = () => {
  return (
    <div className={styles.profile__main_2}>
      <table className={styles.profile__table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Creator</th>
            <th>Your status</th>
            <th>Participants</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.item}>
            <td className={styles.item__title}>Regular Expression Matching Regular Expression Matching</td>
            <td className={styles.item__creator}>Daniil Batiuk</td>
            <td>
              <div className={`${styles.item__status_open}`}>Participant</div>
            </td>
            <td className={styles.item__data}>7</td>
            <td className={styles.item__action}>
              <button className={styles.item__button}>View</button>
              <button className={styles.item__button__marLef}>Leave</button>
            </td>
          </tr>
          <tr className={styles.item}>
            <td className={styles.item__title}>Regular Expressio</td>
            <td className={styles.item__creator}>Daniil</td>
            <td>
              <div className={`${styles.item__status_manager}`}>Manager</div>
            </td>
            <td className={styles.item__data}>22</td>
            <td className={styles.item__action}>
              <button className={styles.item__button}>View</button>
              <button className={styles.item__button__marLef}>Leave</button>
            </td>
          </tr>
          <tr className={styles.item}>
            <td className={styles.item__title}>Regular Expression Matching Regular Expression Matching</td>
            <td className={styles.item__creator}>Daniil Batiuk Daniil Batiuk</td>
            <td>
              <div className={`${styles.item__status_open}`}>Participant</div>
            </td>
            <td className={styles.item__data}>1</td>
            <td className={styles.item__action}>
              <button className={styles.item__button}>View</button>
              <button className={styles.item__button__marLef}>Leave</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Groups;
