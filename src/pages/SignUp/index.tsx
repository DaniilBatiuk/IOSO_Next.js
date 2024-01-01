import styles from "@/styles/SignIn/SignIn.module.scss";
import Image from "next/image";
import SignUpBack from "@/../public/SignUpBack.png";
import SignUpFront from "@/../public/SignUpFront.png";
import Button from "@/components/UI/Button/Button";
import Link from "next/link";
export default function SignUp() {
  return (
    <>
      <Image src={SignUpBack.src} alt="SignInBack" fill={true} className={`${styles.signIn__photo}`} />
      <div className={`${styles.signIn__container}`}>
        <div className={`${styles.signIn__block}`}>
          <div className={`${styles.signIn__left}`}>
            <Image src={SignUpFront.src} alt="SignInFront" width={1154} height={807} priority={true} className={`${styles.signIn__picture}`} style={{ filter: "brightness(80%)" }} />
          </div>
          <div className={`${styles.signIn__right}`}>
            <div className={`${styles.signIn__title}`}>Sign Up</div>
            <form action="#" className={`${styles.form}`}>
              <div className={`${styles.form__inputs}`}>
                <input type="text" placeholder="Insert Email" />
                <input type="password" placeholder="Insert Password" />
                <input type="password" placeholder="Confirm Password" />
              </div>

              <Button type="submit" colorBorder="rgba(255, 255, 255,1)" colorHover="rgba(255, 255, 255,0.3)">
                Sign Up
              </Button>
            </form>
            <div className={`${styles.form__undertext}`}>
              Or do have an account? please register&nbsp;
              <span>
                <Link href="/SignIn" style={{ color: "rgba(255, 244, 84, 1)" }}>
                  here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
