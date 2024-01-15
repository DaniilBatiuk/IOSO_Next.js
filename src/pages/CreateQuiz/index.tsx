import styles from "@/styles/CreateQuiz/CreateQuiz.module.scss";
import { clsx } from "clsx";
import { useState } from "react";
import BasicSettings from "@/components/BasicSettings/BasicSettings";
import QuestionsManager from "@/components/QuestionsManager/QuestionsManager";
import TestAccess from "@/components/TestAccess/TestAccess";
import TimeSettings from "@/components/TimeSettings/TimeSettings";

export default function CreateQuiz() {
  const [active, setActive] = useState<number>(0);
  const [menuActive, setMenuActive] = useState<boolean>(true);

  return (
    <>
      {!menuActive && <div className={styles.create__dark} onClick={() => setMenuActive(prev => !prev)}></div>}
      <div className={styles.create__container}>
        {!menuActive && (
          <style>{`
          body {
            overflow: hidden;
          }
        `}</style>
        )}
        <aside className={!menuActive ? styles.create__body__active : styles.create__body}>
          <div className={styles.create__body__inside}>
            <div className={styles.create__title}>
              Quiz configuration
              {!menuActive && (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" onClick={() => setMenuActive(prev => !prev)}>
                  <path
                    fill="currentColor"
                    d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
                  />
                </svg>
              )}
            </div>
            <div className={styles.create__list}>
              <button
                onClick={() => {
                  setActive(0);
                  if (!menuActive) setMenuActive(prev => !prev);
                }}
                className={clsx(styles.create__item, { [styles.create__item_active]: active === 0 })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                  <path
                    d="M29.5314 18.8313V17.1578L31.6314 15.3203C32.0185 14.9791 32.2725 14.5121 32.3486 14.0017C32.4246 13.4913 32.3178 12.9705 32.047 12.5313L29.4657 8.15625C29.2739 7.82404 28.9982 7.54811 28.666 7.35613C28.3339 7.16416 27.9572 7.0629 27.5736 7.0625C27.3358 7.06068 27.0994 7.09762 26.8736 7.17188L24.2157 8.06875C23.7569 7.76382 23.2782 7.48978 22.7829 7.24844L22.2251 4.49219C22.1251 3.98863 21.8512 3.5363 21.4512 3.21436C21.0513 2.89243 20.5509 2.72142 20.0376 2.73125H14.9189C14.4056 2.72142 13.9052 2.89243 13.5053 3.21436C13.1053 3.5363 12.8314 3.98863 12.7314 4.49219L12.1736 7.24844C11.6747 7.48972 11.1924 7.76376 10.7298 8.06875L8.12669 7.12813C7.89842 7.06865 7.66203 7.04649 7.42669 7.0625C7.04308 7.0629 6.66632 7.16416 6.33421 7.35613C6.00209 7.54811 5.7263 7.82404 5.5345 8.15625L2.95325 12.5313C2.69795 12.9698 2.60309 13.4835 2.6849 13.9844C2.76671 14.4852 3.0201 14.942 3.40169 15.2766L5.46887 17.1688V18.8422L3.40169 20.6797C3.00932 21.0166 2.749 21.4815 2.6669 21.9921C2.58481 22.5027 2.68626 23.0259 2.95325 23.4688L5.5345 27.8438C5.7263 28.176 6.00209 28.4519 6.33421 28.6439C6.66632 28.8358 7.04308 28.9371 7.42669 28.9375C7.66441 28.9393 7.90085 28.9024 8.12669 28.8281L10.7845 27.9313C11.2434 28.2362 11.722 28.5102 12.2173 28.7516L12.7751 31.5078C12.8751 32.0114 13.1491 32.4637 13.549 32.7856C13.9489 33.1076 14.4493 33.2786 14.9626 33.2688H20.1251C20.6384 33.2786 21.1388 33.1076 21.5387 32.7856C21.9387 32.4637 22.2126 32.0114 22.3126 31.5078L22.8704 28.7516C23.3693 28.5103 23.8516 28.2362 24.3142 27.9313L26.9611 28.8281C27.1869 28.9024 27.4233 28.9393 27.6611 28.9375C28.0447 28.9371 28.4214 28.8358 28.7535 28.6439C29.0857 28.4519 29.3614 28.176 29.5532 27.8438L32.047 23.4688C32.3023 23.0302 32.3972 22.5165 32.3153 22.0156C32.2335 21.5148 31.9801 21.058 31.5986 20.7234L29.5314 18.8313ZM27.5736 26.75L23.822 25.4813C22.9438 26.2251 21.9401 26.8066 20.8579 27.1984L20.0814 31.125H14.9189L14.1423 27.2422C13.0687 26.8392 12.0704 26.2588 11.1892 25.525L7.42669 26.75L4.84544 22.375L7.82044 19.75C7.6182 18.6178 7.6182 17.4588 7.82044 16.3266L4.84544 13.625L7.42669 9.25L11.1782 10.5188C12.0565 9.77488 13.0602 9.19341 14.1423 8.80157L14.9189 4.875H20.0814L20.8579 8.75782C21.9315 9.16078 22.9298 9.74125 23.8111 10.475L27.5736 9.25L30.1548 13.625L27.1798 16.25C27.382 17.3822 27.382 18.5413 27.1798 19.6734L30.1548 22.375L27.5736 26.75Z"
                    fill="white"
                  />
                  <path
                    d="M17.5 24.5625C16.2021 24.5625 14.9333 24.1776 13.8541 23.4565C12.7749 22.7354 11.9337 21.7105 11.437 20.5114C10.9403 19.3122 10.8104 17.9927 11.0636 16.7197C11.3168 15.4467 11.9418 14.2774 12.8596 13.3596C13.7774 12.4418 14.9467 11.8168 16.2197 11.5636C17.4927 11.3104 18.8122 11.4403 20.0114 11.937C21.2105 12.4337 22.2354 13.2749 22.9565 14.3541C23.6776 15.4333 24.0625 16.7021 24.0625 18C24.0713 18.8642 23.9075 19.7215 23.5808 20.5217C23.2541 21.3219 22.7711 22.0488 22.1599 22.6599C21.5488 23.2711 20.8219 23.7541 20.0217 24.0808C19.2215 24.4075 18.3642 24.5713 17.5 24.5625ZM17.5 13.625C16.9218 13.6115 16.3468 13.7155 15.81 13.9306C15.2731 14.1457 14.7854 14.4674 14.3764 14.8764C13.9674 15.2854 13.6457 15.7731 13.4306 16.31C13.2155 16.8468 13.1115 17.4218 13.125 18C13.1115 18.5782 13.2155 19.1532 13.4306 19.69C13.6457 20.2269 13.9674 20.7146 14.3764 21.1236C14.7854 21.5326 15.2731 21.8543 15.81 22.0694C16.3468 22.2845 16.9218 22.3885 17.5 22.375C18.0782 22.3885 18.6532 22.2845 19.19 22.0694C19.7269 21.8543 20.2146 21.5326 20.6236 21.1236C21.0326 20.7146 21.3543 20.2269 21.5694 19.69C21.7845 19.1532 21.8885 18.5782 21.875 18C21.8885 17.4218 21.7845 16.8468 21.5694 16.31C21.3543 15.7731 21.0326 15.2854 20.6236 14.8764C20.2146 14.4674 19.7269 14.1457 19.19 13.9306C18.6532 13.7155 18.0782 13.6115 17.5 13.625Z"
                    fill="white"
                  />
                </svg>
                <div className={styles.create__text}>Basic settings</div>
              </button>
              <button
                onClick={() => {
                  setActive(1);
                  if (!menuActive) setMenuActive(prev => !prev);
                }}
                className={clsx(styles.create__item, { [styles.create__item_active]: active === 1 })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                  <g clipPath="url(#clip0_184_28)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.3333 22.375C25.2379 22.375 26.8596 23.5927 27.4604 25.2917H29.1667C29.5534 25.2917 29.9244 25.4453 30.1979 25.7188C30.4714 25.9923 30.625 26.3632 30.625 26.75C30.625 27.1368 30.4714 27.5077 30.1979 27.7812C29.9244 28.0547 29.5534 28.2083 29.1667 28.2083H27.4604C27.1591 29.0622 26.6004 29.8017 25.8612 30.3247C25.122 30.8477 24.2388 31.1286 23.3333 31.1286C22.4278 31.1286 21.5446 30.8477 20.8055 30.3247C20.0663 29.8017 19.5075 29.0622 19.2063 28.2083H5.83333C5.44656 28.2083 5.07563 28.0547 4.80214 27.7812C4.52865 27.5077 4.375 27.1368 4.375 26.75C4.375 26.3632 4.52865 25.9923 4.80214 25.7188C5.07563 25.4453 5.44656 25.2917 5.83333 25.2917H19.2063C19.5081 24.4384 20.0671 23.6998 20.8063 23.1774C21.5454 22.6551 22.4283 22.3747 23.3333 22.375ZM23.3333 25.2917C22.9466 25.2917 22.5756 25.4453 22.3021 25.7188C22.0286 25.9923 21.875 26.3632 21.875 26.75C21.875 27.1368 22.0286 27.5077 22.3021 27.7812C22.5756 28.0547 22.9466 28.2083 23.3333 28.2083C23.7201 28.2083 24.091 28.0547 24.3645 27.7812C24.638 27.5077 24.7917 27.1368 24.7917 26.75C24.7917 26.3632 24.638 25.9923 24.3645 25.7188C24.091 25.4453 23.7201 25.2917 23.3333 25.2917ZM11.6667 13.625C12.5256 13.6249 13.3656 13.8776 14.0819 14.3517C14.7981 14.8257 15.359 15.5001 15.6946 16.2908L15.7923 16.5417H29.1667C29.5384 16.5421 29.8959 16.6844 30.1662 16.9396C30.4364 17.1947 30.5991 17.5435 30.6209 17.9145C30.6427 18.2856 30.5219 18.651 30.2834 18.936C30.0448 19.221 29.7064 19.4042 29.3373 19.4481L29.1667 19.4583H15.7938C15.4997 20.29 14.9613 21.0134 14.249 21.5337C13.5367 22.054 12.6838 22.347 11.8021 22.3741C10.9204 22.4012 10.0511 22.1612 9.30815 21.6857C8.56521 21.2101 7.98331 20.5212 7.63875 19.7092L7.53958 19.4583H5.83333C5.46163 19.4579 5.10412 19.3156 4.83384 19.0604C4.56356 18.8053 4.40091 18.4565 4.37912 18.0855C4.35734 17.7144 4.47807 17.349 4.71664 17.064C4.95521 16.779 5.29361 16.5958 5.66271 16.5519L5.83333 16.5417H7.53958C7.84147 15.6884 8.40047 14.9498 9.13959 14.4274C9.87871 13.9051 10.7616 13.6247 11.6667 13.625ZM11.6667 16.5417C11.2799 16.5417 10.909 16.6953 10.6355 16.9688C10.362 17.2423 10.2083 17.6132 10.2083 18C10.2083 18.3868 10.362 18.7577 10.6355 19.0312C10.909 19.3047 11.2799 19.4583 11.6667 19.4583C12.0534 19.4583 12.4244 19.3047 12.6979 19.0312C12.9714 18.7577 13.125 18.3868 13.125 18C13.125 17.6132 12.9714 17.2423 12.6979 16.9688C12.4244 16.6953 12.0534 16.5417 11.6667 16.5417ZM23.3333 4.875C25.2379 4.875 26.8596 6.09271 27.4604 7.79167H29.1667C29.5534 7.79167 29.9244 7.94531 30.1979 8.2188C30.4714 8.49229 30.625 8.86323 30.625 9.25C30.625 9.63677 30.4714 10.0077 30.1979 10.2812C29.9244 10.5547 29.5534 10.7083 29.1667 10.7083H27.4604C27.1591 11.5622 26.6004 12.3017 25.8612 12.8247C25.122 13.3477 24.2388 13.6286 23.3333 13.6286C22.4278 13.6286 21.5446 13.3477 20.8055 12.8247C20.0663 12.3017 19.5075 11.5622 19.2063 10.7083H5.83333C5.44656 10.7083 5.07563 10.5547 4.80214 10.2812C4.52865 10.0077 4.375 9.63677 4.375 9.25C4.375 8.86323 4.52865 8.49229 4.80214 8.2188C5.07563 7.94531 5.44656 7.79167 5.83333 7.79167H19.2063C19.5081 6.93843 20.0671 6.19978 20.8063 5.67743C21.5454 5.15509 22.4283 4.87474 23.3333 4.875ZM23.3333 7.79167C22.9466 7.79167 22.5756 7.94531 22.3021 8.2188C22.0286 8.49229 21.875 8.86323 21.875 9.25C21.875 9.63677 22.0286 10.0077 22.3021 10.2812C22.5756 10.5547 22.9466 10.7083 23.3333 10.7083C23.7201 10.7083 24.091 10.5547 24.3645 10.2812C24.638 10.0077 24.7917 9.63677 24.7917 9.25C24.7917 8.86323 24.638 8.49229 24.3645 8.2188C24.091 7.94531 23.7201 7.79167 23.3333 7.79167Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_184_28">
                      <rect width="35" height="35" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={styles.create__text}>Questions manager</div>
              </button>
              <button
                onClick={() => {
                  setActive(2);
                  if (!menuActive) setMenuActive(prev => !prev);
                }}
                className={clsx(styles.create__item, { [styles.create__item_active]: active === 2 })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                  <path
                    d="M28.4375 10.8906H24.6094V8.15625C24.6094 6.27073 23.8604 4.46243 22.5271 3.12916C21.1938 1.7959 19.3855 1.04688 17.5 1.04688C15.6145 1.04688 13.8062 1.7959 12.4729 3.12916C11.1396 4.46243 10.3906 6.27073 10.3906 8.15625V10.8906H6.5625C5.8373 10.8906 5.1418 11.1787 4.629 11.6915C4.11621 12.2043 3.82813 12.8998 3.82812 13.625V28.9375C3.82813 29.6627 4.11621 30.3582 4.629 30.871C5.1418 31.3838 5.8373 31.6719 6.5625 31.6719H28.4375C29.1627 31.6719 29.8582 31.3838 30.371 30.871C30.8838 30.3582 31.1719 29.6627 31.1719 28.9375V13.625C31.1719 12.8998 30.8838 12.2043 30.371 11.6915C29.8582 11.1787 29.1627 10.8906 28.4375 10.8906ZM13.6719 8.15625C13.6719 7.14097 14.0752 6.16727 14.7931 5.44936C15.511 4.73144 16.4847 4.32812 17.5 4.32812C18.5153 4.32812 19.489 4.73144 20.2069 5.44936C20.9248 6.16727 21.3281 7.14097 21.3281 8.15625V10.8906H13.6719V8.15625ZM27.8906 28.3906H7.10938V14.1719H27.8906V28.3906ZM19.6875 21.2812C19.6875 21.7139 19.5592 22.1368 19.3188 22.4966C19.0785 22.8563 18.7368 23.1367 18.3371 23.3022C17.9374 23.4678 17.4976 23.5111 17.0732 23.4267C16.6489 23.3423 16.2591 23.134 15.9532 22.828C15.6473 22.5221 15.4389 22.1323 15.3545 21.708C15.2701 21.2837 15.3134 20.8438 15.479 20.4441C15.6446 20.0444 15.925 19.7028 16.2847 19.4624C16.6444 19.222 17.0674 19.0938 17.5 19.0938C18.0802 19.0938 18.6366 19.3242 19.0468 19.7345C19.457 20.1447 19.6875 20.7011 19.6875 21.2812Z"
                    fill="white"
                  />
                </svg>
                <div className={styles.create__text}>Test access</div>
              </button>
              <button
                onClick={() => {
                  setActive(3);
                  if (!menuActive) setMenuActive(prev => !prev);
                }}
                className={clsx(styles.create__item, { [styles.create__item_active]: active === 3 })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                  <path
                    d="M17.5 33.3125C14.4715 33.3125 11.511 32.4144 8.99284 30.7319C6.47471 29.0493 4.51207 26.6578 3.3531 23.8598C2.19413 21.0618 1.8909 17.983 2.48173 15.0127C3.07257 12.0423 4.53094 9.31392 6.67243 7.17243C8.81393 5.03093 11.5424 3.57256 14.5127 2.98172C17.483 2.39089 20.5619 2.69413 23.3598 3.85309C26.1578 5.01206 28.5493 6.9747 30.2319 9.49283C31.9144 12.011 32.8125 14.9715 32.8125 18C32.8125 22.0611 31.1992 25.9559 28.3276 28.8276C25.4559 31.6992 21.5611 33.3125 17.5 33.3125ZM17.5 4.875C14.9041 4.875 12.3665 5.64477 10.2081 7.08696C8.04975 8.52915 6.36749 10.579 5.37409 12.9773C4.38069 15.3756 4.12077 18.0146 4.6272 20.5606C5.13363 23.1066 6.38367 25.4452 8.21923 27.2808C10.0548 29.1163 12.3934 30.3664 14.9394 30.8728C17.4854 31.3792 20.1244 31.1193 22.5227 30.1259C24.921 29.1325 26.9709 27.4503 28.413 25.2919C29.8552 23.1335 30.625 20.5959 30.625 18C30.625 14.519 29.2422 11.1806 26.7808 8.71922C24.3194 6.25781 20.981 4.875 17.5 4.875Z"
                    fill="white"
                  />
                  <path d="M22.5203 24.5625L16.4062 18.4484V8.15625H18.5938V17.5406L24.0625 23.0203L22.5203 24.5625Z" fill="white" />
                </svg>
                <div className={styles.create__text}>Time settings</div>
              </button>
            </div>
            <button className={styles.create__button}>Activate quiz</button>
          </div>
        </aside>
        <section className={styles.create__right}>
          <div className={styles.right__top}>
            <button className={styles.icon_menu} type="button" onClick={() => setMenuActive(prev => !prev)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="svg1">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6.001h18m-18 6h18m-18 6h18" />
              </svg>
            </button>
            <div className={styles.right__title}>{active === 0 ? "Basic settings" : active === 1 ? "Questions manager" : active === 2 ? "Test access" : "Time settings"}</div>
          </div>
          {active === 0 ? <BasicSettings label="Insert quiz name" /> : active === 1 ? <QuestionsManager /> : active === 2 ? <TestAccess type="quiz" /> : <TimeSettings />}
        </section>
      </div>
    </>
  );
}
