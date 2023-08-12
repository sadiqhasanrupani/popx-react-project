
//^ styles
import styles from "./Login.module.scss";

//^ component
import LoginComponent from "../../components/auth/login-component/LoginComponent"

const Login = () => {
  return (
    <main className={styles["main"]}>
      <LoginComponent />
    </main>
  );
};

export default Login;
