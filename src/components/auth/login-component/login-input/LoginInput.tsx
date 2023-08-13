import { FC, HTMLAttributes, useEffect } from "react";

//^ styles
import styles from "./LoginInput.module.scss";

//^ interface
import { SignupContent } from "../../signup-component/signup-form/SignupForm";
export interface LoginInputProps extends HTMLAttributes<HTMLDivElement> {
  INPUT_CONTENT?: Array<SignupContent>;
  onLoginInput?: any;
}

//^ hooks
import useInput from "../../../../hooks/use-input";

//^ UI
import Input from "../../../UI/input/Input";

const LoginInput: React.FC<LoginInputProps> = ({ onLoginInput }) => {
  const {
    enteredValue: email,
    isValid: isEmailValid,
    onChangeHandler: onEmailChange,
    onBlurHandler: onEmailBlur,
  } = useInput({
    validateValue: (value: string) => /\S+@\S+\.\S+/.test(value),
  });

  const {
    enteredValue: password,
    isValid: isPasswordValid,
    onChangeHandler: onPasswordChange,
    onBlurHandler: onPasswordBlur,
  } = useInput({ validateValue: (value: string) => value.trim() !== "" });

  const formIsValid = isEmailValid && isPasswordValid;

  useEffect(() => {
    const data = {
      formIsValid,
      loginData: {
        email,
        password,
      },
    };

    onLoginInput(formIsValid);
  }, [formIsValid, onLoginInput]);

  return (
    <div className={styles["login-input"]}>
      <Input
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="Enter email address"
        value={email}
        onChange={onEmailChange}
        onBlur={onEmailBlur}
        // hasError={}
      />
      <Input
        id="pass"
        name="pass"
        type="password"
        label="Password"
        placeholder="Enter password"
        value={password}
        onChange={onPasswordChange}
        onBlur={onPasswordBlur}
        // hasError={}
      />
    </div>
  );
};

export default LoginInput;
