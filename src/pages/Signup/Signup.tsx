//^ styles
import styles from "./Signup.module.scss";

//^ components
import SignupComponent from "../../components/auth/signup-component/SignupComponent";

const Signup = () => {
  return (
    <main className={styles["main"]}>
      <SignupComponent />
    </main>
  );
};

export default Signup;
