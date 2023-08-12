import { FC, HTMLAttributes, useEffect } from "react";
import { useSelector } from "react-redux";

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

const LoginInput: FC<LoginInputProps> = ({ onLoginInput }) => {
  const signUpData = useSelector((state: any) => state.signup.signupData);

  const {
    enteredValue: email,
    isValid: isEmailValid,
    onChangeHandler: onEmailChange,
    onBlurHandler: onEmailBlur,
  } = useInput({
    validateValue: (value) => /\S+@\S+\.\S+/.test(value),
  });

  const {
    enteredValue: password,
    isValid: isPasswordValid,
    onChangeHandler: onPasswordChange,
    onBlurHandler: onPasswordBlur,
  } = useInput({
    validateValue: (value) => value.trim() !== "",
  });

  const isEmailMatch =
    signUpData && signUpData.emailID && signUpData.emailID === email
      ? true
      : false;

  const isPassMatch =
    signUpData && signUpData.password && signUpData.password === password
      ? true
      : false;

  const formIsValid = signUpData
    ? isEmailMatch && isPassMatch
    : isEmailValid && isPasswordValid;

  console.log(isEmailMatch, isPassMatch);

  useEffect(() => {
    onLoginInput(formIsValid);
  }, [formIsValid]);

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
        hasError={!isEmailMatch}
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
        hasError={!isPassMatch}
      />
    </div>
  );
};

export default LoginInput;
