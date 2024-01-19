import styles from "@/styles/Group.module.scss";
import { Avatar } from "@mui/material";
import Complete from "@/../public/Complete.svg";
import Image from "next/image";
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function darkenColor(color: string, percent: number) {
  // Convert hex to RGB
  const hex = color.substring(1);
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Darken each component
  const darkenedR = Math.floor(r * (1 - percent / 100));
  const darkenedG = Math.floor(g * (1 - percent / 100));
  const darkenedB = Math.floor(b * (1 - percent / 100));

  // Convert back to hex
  const darkenedHex = "#" + (darkenedR * 65536 + darkenedG * 256 + darkenedB).toString(16).padStart(6, "0");

  return darkenedHex;
}

function stringAvatar(name: string) {
  const bgColor = stringToColor(name);
  const textColor = darkenColor(bgColor, 40); // Adjust the percentage as needed

  return {
    sx: {
      bgcolor: bgColor,
      color: textColor,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Group: React.FC = () => {
  return (
    <div className={styles.group__container}>
      <div className={styles.group__title}>Group name</div>
      <div className={styles.group__main}>
        <section className={styles.left}>
          <div className={styles.left__section}>
            <div className={styles.left__section__title}>Create group 123 in progress Create group 123 in progress </div>
            <div className={styles.left__section__body}>
              <div className={styles.left__section__test}>
                <div className={styles.left__section__test__title}>Quiz in 1 mun</div>
                <Image src={Complete.src} alt="Icon" width={35} height={35} />
              </div>
              <div className={styles.left__section__test}>
                <div className={styles.left__section__test__title}>Quiz in 1 mun</div>
              </div>
              <div className={styles.left__section__test}>
                <div className={styles.left__section__test__title}>Quiz in 1 mun Create group 123 in progress Create group 123 in progress Create group 123 in Create group 123 in progress</div>
                <Image src={Complete.src} alt="Icon" width={35} height={35} />
              </div>
            </div>
          </div>
          <div className={styles.left__section}>
            <div className={styles.left__section__title}>Create group 123 in progress Create group 123 in progress </div>
            <div className={styles.left__section__body}>
              <div className={styles.left__section__test}>
                <div className={styles.left__section__test__title}>Quiz in 1 mun</div>
                <Image src={Complete.src} alt="Icon" width={35} height={35} />
              </div>
              <div className={styles.left__section__test}>
                <div className={styles.left__section__test__title}>Quiz in 1 mun</div>
              </div>
              <div className={styles.left__section__test}>
                <div className={styles.left__section__test__title}>Quiz in 1 mun Create group 123 in progress Create group 123 in progress Create group 123 in Create group 123 in progress</div>
                <Image src={Complete.src} alt="Icon" width={35} height={35} />
              </div>
            </div>
          </div>
          <div className={styles.left__section}>
            <div className={styles.left__section__title}>Create group 123 in progress Create group 123 in progress </div>
            <div className={styles.left__section__body}>
              <div className={styles.left__section__test}>
                <div className={styles.left__section__test__title}>Quiz in 1 mun Create group 123 in progress Create group 123 in progress Create group 123 in Create group 123 in progress</div>
                <Image src={Complete.src} alt="Icon" width={35} height={35} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.right}>
          <div className={styles.right__item}>
            <div className={styles.right__title}>Summary</div>
            <div className={styles.right__block__text}>
              <div className={styles.right__text}>20 sections</div>
              <div className={styles.right__text}>26 quizzes</div>
              <div className={styles.right__text}>6 managers</div>
              <div className={styles.right__text}>1241 participants</div>
            </div>
          </div>
          <div className={styles.right__item}>
            <div className={styles.right__title}>Participants</div>
            <div className={styles.right__manager}>Managers</div>
            <div className={styles.right__block}>
              <Avatar {...stringAvatar("Kent Dodds")} />
              <Avatar {...stringAvatar("Jed Watson")} />
              <Avatar {...stringAvatar("Tim Neutkens")} />
              <Avatar {...stringAvatar("Daniil Batiuk")} />
              <Avatar {...stringAvatar("Olex Temch")} />
              <Avatar {...stringAvatar("Kioto Miva")} />
              <Avatar {...stringAvatar("Melli Dava")} />
              <Avatar {...stringAvatar("Kot Leopold")} />
              <Avatar {...stringAvatar("Kira Mi")} />
            </div>
            <div className={styles.right__participants}>Participants</div>
            <div className={styles.right__block}>
              <Avatar {...stringAvatar("Kent Dodds")} />
              <Avatar {...stringAvatar("Jed Watson")} />
              <Avatar {...stringAvatar("Tim Neutkens")} />
              <Avatar {...stringAvatar("Daniil Batiuk")} />
              <Avatar {...stringAvatar("Olex Temch")} />
              <Avatar {...stringAvatar("Kioto Miva")} />
              <Avatar {...stringAvatar("Melli Dava")} />
              <Avatar {...stringAvatar("Kot Leopold")} />
              <Avatar {...stringAvatar("Kira Mi")} />
              <Avatar {...stringAvatar("Koki Moli")} />
              <Avatar {...stringAvatar("Dali Namisa")} />
              <Avatar {...stringAvatar("Gsatr Gasje")} />
              <Avatar {...stringAvatar("Rsadf Ldfnb")} />
              <Avatar {...stringAvatar("Ofsm Kima")} />
              <Avatar {...stringAvatar("Lieea Naritave")} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Group;
