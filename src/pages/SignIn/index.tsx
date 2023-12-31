import styles from "@/styles/SignIn/SignIn.module.scss";
import Image from "next/image";
import SignInBack from "@/../public/SignInBack.png";
import SignInFront from "@/../public/SignInFront.png";
import Button from "@/components/UI/Button/Button";
import Link from "next/link";
export default function SignIn() {
  return (
    <>
      <Image src={SignInBack.src} alt="SignInBack" fill={true} className={`${styles.signIn__photo}`} />
      <div className={`${styles.signIn__container}`}>
        <div className={`${styles.signIn__block}`}>
          <div className={`${styles.signIn__left}`}>
            <Image src={SignInFront.src} alt="SignInFront" width={1154} height={807} priority={true} className={`${styles.signIn__picture}`} />
          </div>
          <div className={`${styles.signIn__right}`}>
            <div className={`${styles.signIn__title}`}>Sign In</div>
            <form action="#" className={`${styles.form}`}>
              <div className={`${styles.form__inputs}`}>
                <input type="text" placeholder="Insert Email" />
                <input type="password" placeholder="Insert Password" />
                <div className={`${styles.form__checkbox}`}>
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
              </div>

              <Button type="submit" colorBorder="rgba(255, 255, 255,1)" colorHover="rgba(255, 255, 255,0.3)">
                Sign In
              </Button>
            </form>
            <div className={`${styles.form__undertext}`}>
              Or don’t have an account? please register&nbsp;
              <span>
                <Link href="/">here</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
