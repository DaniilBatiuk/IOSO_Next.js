import styles from "@/styles/SignIn/SignIn.module.scss";
import Image from "next/image";
import SignInBack from "@/../public/SignInBack.png";
import SignInFront from "@/../public/SignInFront.png";
import Button from "@/components/UI/Button/Button";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Insert email"
                  variant="standard"
                  inputProps={{ style: { fontSize: 25 } }}
                  InputLabelProps={{ style: { fontSize: 25 } }}
                  sx={{
                    "& label.Mui-focused": {
                      color: "white",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-root:before": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-root:after": {
                      borderBottomColor: "white",
                    },
                    ".MuiInput-root:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "white",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Insert password"
                  variant="standard"
                  inputProps={{ style: { fontSize: 25 } }}
                  InputLabelProps={{ style: { fontSize: 25 } }}
                  sx={{
                    "& label.Mui-focused": {
                      color: "white",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-root:before": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-root:after": {
                      borderBottomColor: "white",
                    },
                    ".MuiInput-root:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "white",
                    },
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                      }}
                    />
                  }
                  label="Remember me"
                />
              </div>
              <Button type="submit" colorBorder="rgba(255, 255, 255,1)" colorHover="rgba(255, 255, 255,0.3)">
                Sign In
              </Button>
            </form>
            <div className={`${styles.form__undertext}`}>
              Or don’t have an account? please register&nbsp;
              <span>
                <Link href="/SignUp">here</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
