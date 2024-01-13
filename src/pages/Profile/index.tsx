import styles from "@/styles/Profile/Profile.module.scss";
import ProfileSvg from "@/../public/Profile.svg";
import Image from "next/image";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useState } from "react";

const data = [
  { value: 70, label: "create group" },
  { value: 20, label: "create test" },
  { value: 10, label: "pass test" },
];

const colors = {
  colors: ["rgb(27, 200, 231)", "rgba(255, 251, 9, 0.966)", "rgba(245, 22, 226, 0.842)"],
};

export default function Profile() {
  const [activeMenuItem, setActiveMenuItem] = useState<number>(0);

  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__title}>Profile</div>
      <section className={styles.profile__info}>
        <div className={styles.info__left}>
          <Image src={ProfileSvg.src} alt="Icon" width={200} height={200} priority={true} />
          <div className={styles.info__left__text}>
            <div className={styles.info__text}>
              <div className={styles.info__name}>Daniil Batiuk</div>
              <div className={styles.info__email}>sportak50@gmail.com</div>
            </div>
            <div className={styles.info__result}>
              <div className={styles.info__score}>
                <div className={styles.info__number__passed}>10</div>
                <div className={styles.info__score__text}>passed</div>
              </div>
              <div className={styles.info__score}>
                <div className={styles.info__number__denied}>10</div>
                <div className={styles.info__score__text}>denied</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.info__right}>
          <div className={styles.info__right__item}>
            <div className={styles.info__title}>Activity</div>
            <PieChart
              series={[
                {
                  innerRadius: 58,
                  outerRadius: 70,
                  paddingAngle: 2,
                  cornerRadius: 5,
                  data: data,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                },
              ]}
              width={340}
              height={174}
              margin={{ right: 180 }}
              {...colors}
            />
          </div>
        </div>
      </section>
      <div className={styles.profile__list}>
        <div className={activeMenuItem === 0 ? styles.profile__item__active : styles.profile__item} onClick={() => setActiveMenuItem(0)}>
          Quiz history
        </div>
        <div className={activeMenuItem === 1 ? styles.profile__item__active : styles.profile__item} onClick={() => setActiveMenuItem(1)}>
          My quizzes
        </div>
        <div className={activeMenuItem === 2 ? styles.profile__item__active : styles.profile__item} onClick={() => setActiveMenuItem(2)}>
          Groups
        </div>
      </div>
      {activeMenuItem === 0 && (
        <div className={styles.profile__main_2}>
          <table className={styles.profile__table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Creator</th>
                <th>Status</th>
                <th>Correctly</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.item}>
                <td className={styles.item__title}>Regular Expression Matching Regular Expression Matching</td>
                <td className={styles.item__creator}>Daniil Batiuk</td>
                <td>
                  <div className={`${styles.item__status_open}`}>Passed</div>
                </td>
                <td className={styles.item__data}>55.55%</td>
                <td className={styles.item__deadline}>Mar 15 2021</td>
                <td>
                  <button className={styles.item__button}>Quiz</button>
                </td>
              </tr>
              <tr className={styles.item}>
                <td className={styles.item__title}>Regular Expressio</td>
                <td className={styles.item__creator}>Daniil</td>
                <td>
                  <div className={`${styles.item__status_close}`}>Denied</div>
                </td>
                <td className={styles.item__data}>22.55%</td>
                <td className={styles.item__deadline}>Mar 15 2021</td>
                <td>
                  <button className={styles.item__button}>Quiz</button>
                </td>
              </tr>
              <tr className={styles.item}>
                <td className={styles.item__title}>Regular Expression Matching Regular Expression Matching</td>
                <td className={styles.item__creator}>Daniil Batiuk Daniil Batiuk</td>
                <td>
                  <div className={`${styles.item__status_close}`}>Denied</div>
                </td>
                <td className={styles.item__data}>75.14%</td>
                <td className={styles.item__deadline}>Mar 15 2021</td>
                <td>
                  <button className={styles.item__button}>Quiz</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {activeMenuItem === 1 && <section className={styles.profile__main}>asdad</section>}
      {activeMenuItem === 2 && <section className={styles.profile__main}>asasdasdasdasdasd</section>}
    </div>
  );
}
