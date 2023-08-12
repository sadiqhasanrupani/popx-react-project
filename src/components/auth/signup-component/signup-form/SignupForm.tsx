import React, { FC, useCallback, useEffect, useState } from "react";

//^ styles
import styles from "./Signup.module.scss";

//^ hook
import useInput from "../../../../hooks/use-input";

//^ components
import AgencyEnquiry from "./agency-enquiry/AgencyEnquiry";
import Input from "../../../UI/input/Input";

export interface SignupContent {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export interface SignupDataInterface {
  formIsValid?: boolean;
  formData: {
    fullName?: string;
    phoneNumber?: string;
    emailID?: string;
    password?: string;
    companyName?: string;
    radioValue?: string;
  };
}

interface SignupFormProps {
  onSignupForm?: (signupFormData: SignupDataInterface) => void;
}

const SignupForm: FC<SignupFormProps> = ({ onSignupForm }) => {
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("");

  const fullNameInput = useInput({
    validateValue: (value) => value.trim() !== "",
  });

  const phoneNumberInput = useInput({
    validateValue: (value) => /^\d{10}$/.test(value),
  });

  const emailInput = useInput({
    validateValue: (value) => /\S+@\S+\.\S+/.test(value),
  });

  const passwordInput = useInput({
    validateValue: (value) => value.trim() !== "",
  });

  const companyNameInput = useInput({
    validateValue: (value) => value.trim() !== "",
  });

  const {
    enteredValue: fullName,
    isValid: fullNameIsValid,
    onChangeHandler: onFullNameChange,
    onBlurHandler: onFullNameBlur,
  } = fullNameInput;

  const {
    enteredValue: phoneNumber,
    isValid: phoneNumberIsValid,
    onChangeHandler: onPhoneNumberChange,
    onBlurHandler: onPhoneNumberBlur,
  } = phoneNumberInput;

  const {
    enteredValue: email,
    isValid: emailIsValid,
    onChangeHandler: onEmailChange,
    onBlurHandler: onEmailBlur,
  } = emailInput;

  const {
    enteredValue: password,
    isValid: passwordIsValid,
    onChangeHandler: onPasswordChange,
    onBlurHandler: onPasswordBlur,
  } = passwordInput;

  const {
    enteredValue: companyName,
    onChangeHandler: onCompanyNameChange,
    onBlurHandler: onCompanyNameBlur,
  } = companyNameInput;

  const getAgencyEnquiryData = useCallback(
    (agencyEnquiry: { isRadioChecked?: boolean; radioValue?: string }) => {
      setIsRadioChecked(agencyEnquiry.isRadioChecked as boolean);
      setRadioValue(agencyEnquiry.radioValue as string);
    },
    []
  );

  const formIsValid =
    fullNameIsValid &&
    phoneNumberIsValid &&
    emailIsValid &&
    passwordIsValid &&
    isRadioChecked;

  const formData = {
    fullName,
    phoneNumber,
    emailID: email,
    companyName,
    password,
    radioValue,
  };

  useEffect(() => {
    if (onSignupForm) {
      onSignupForm({ formIsValid, formData });
    }
  }, [formIsValid, onSignupForm]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <div className={styles["form-input"]}>
          <Input
            id="full name"
            label={"Full Name"}
            placeholder={"Enter your full name"}
            required
            type="text"
            value={fullName}
            onChange={onFullNameChange}
            onBlur={onFullNameBlur}
          />
          <Input
            id="Phone number"
            label={"Phone number"}
            placeholder={"Enter 10 digit phone no."}
            required
            type="text"
            value={phoneNumber}
            onChange={onPhoneNumberChange}
            onBlur={onPhoneNumberBlur}
          />
          <Input
            id="Email address"
            label={"Email address"}
            placeholder={"Enter your email address"}
            required
            type="email"
            value={email}
            onChange={onEmailChange}
            onBlur={onEmailBlur}
          />
          <Input
            id="password"
            label={"Password"}
            placeholder={"Enter your password"}
            required
            type="password"
            value={password}
            onChange={onPasswordChange}
            onBlur={onPasswordBlur}
          />
          <Input
            id="company name"
            label={"Company name"}
            placeholder={"Enter your company name"}
            type="text"
            value={companyName}
            onChange={onCompanyNameChange}
            onBlur={onCompanyNameBlur}
          />
        </div>
        <AgencyEnquiry onAgencyEnquiry={getAgencyEnquiryData} />
      </div>
    </form>
  );
};

export default SignupForm;
