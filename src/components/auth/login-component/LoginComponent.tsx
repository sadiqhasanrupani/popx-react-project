//^ styles
import styles from "./LoginComponent.module.scss";

//^ interface
import { SignupContent } from "../signup-component/signup-form/SignupForm";

//^ component
import Typography from "../signup-component/typography/Typography";
import LoginInput from "./login-input/LoginInput";
import PrimaryBtn from "../../UI/buttons/primary-btn/PrimaryBtn";

const INPUT_CONTENT: Array<SignupContent> = [
  {
    id: 1,
    label: "Email Address",
    placeholder: "Enter email address",
    required: false,
    type: "email",
  },
  {
    id: 2,
    label: "Password",
    placeholder: "Enter password",
    required: false,
    type: "password",
  },
];

const LoginComponent = () => {
  return (
    <div className={styles["login-component"]}>
      <Typography
        title="Signin to your PopX account"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        className={styles["typography"]}
      />

      <form className={styles["form"]}>
        <LoginInput INPUT_CONTENT={INPUT_CONTENT} />
        <PrimaryBtn buttonText="Login" />
      </form>
    </div>
  );
};

export default LoginComponent;
