import { useCallback, useState } from "react";

//^ styles
import styles from "./LoginComponent.module.scss";

//^ component
import Typography from "../signup-component/typography/Typography";
import LoginInput from "./login-input/LoginInput";
import PrimaryBtn from "../../UI/buttons/primary-btn/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const getLoginDataHandler = useCallback(
    (data: boolean) => {
      setIsFormValid(data);
    },
    [isFormValid]
  );

  const submitHandler = (e: any) => {
    e.preventDefault();

    navigate("/profile");
  };

  return (
    <div className={styles["login-component"]}>
      <Typography
        title="Signin to your PopX account"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        className={styles["typography"]}
      />

      <form className={styles["form"]} onSubmit={submitHandler}>
        <LoginInput onLoginInput={getLoginDataHandler} />
        <PrimaryBtn buttonText="Login" disabled={!isFormValid} />
      </form>
    </div>
  );
};

export default LoginComponent;
