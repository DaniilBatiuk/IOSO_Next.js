import styles from "@/styles/Profile/Profile.module.scss";
import ProfileSvg from "@/../public/Profile.svg";
import Image from "next/image";
import * as React from "react";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
];

const size = {
  width: 270,
  height: 140,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 40,
  fontWeight: 600,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

function PieChartWithCenterLabel() {
  return (
    <PieChart
      series={[{ data, innerRadius: 80 }]}
      {...size}
      slotProps={{
        legend: { hidden: true },
      }}
    >
      <PieCenterLabel>88%</PieCenterLabel>
    </PieChart>
  );
}

export default function Profile() {
  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__title}>Profile</div>
      <div className={styles.profile__info}>
        <div className={styles.info__left}>
          <Image src={ProfileSvg.src} alt="Icon" width={200} height={200} />
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
          <div className={styles.info__title}>Average score</div>
          <PieChartWithCenterLabel />
        </div>
      </div>
    </div>
  );
}
