import React from "react";
import { useNavigate } from "react-router-dom";

//^ styles
import styles from "./Signup.module.scss";

//^ components
import SignupInputs from "./signup-input/SignupInput";
import AgencyEnquiry from "./agency-enquiry/AgencyEnquiry";
import PrimaryBtn from "../../../UI/buttons/primary-btn/PrimaryBtn";

export interface SignupContent {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
}

const SIGNUP_CONTENT: Array<SignupContent> = [
  {
    id: 1,
    type: "text",
    label: "Full Name",
    placeholder: "Enter full name",
    required: true,
  },
  {
    id: 2,
    type: "text",
    label: "Phone number",
    placeholder: "Enter phone number",
    required: true,
  },
  {
    id: 3,
    type: "text",
    label: "Email address",
    placeholder: "Enter email address",
    required: true,
  },
  {
    id: 4,
    type: "password",
    label: "Password",
    placeholder: "Enter password",
    required: true,
  },
  {
    id: 5,
    type: "text",
    label: "Company name",
    placeholder: "Enter your company name",
    required: false,
  },
];

const SignupForm = () => {
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/profile")
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <div className={styles["form-input"]}>
          {SIGNUP_CONTENT.map((content) => (
            <SignupInputs
              key={content.id}
              id={content.id}
              label={content.label}
              placeholder={content.placeholder}
              required={content.required}
              type={content.type}
            />
          ))}
        </div>
        <AgencyEnquiry />
      </div>
      <PrimaryBtn buttonText="Create Account" />
    </form>
  );
};

export default SignupForm;
