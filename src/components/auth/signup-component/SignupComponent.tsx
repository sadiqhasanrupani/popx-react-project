import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//^ styles
import styles from "./SignupComponent.module.scss";

//^ actions
import { signupAction } from "../../../store/signup-slice";

//^ components
import Typography from "./typography/Typography";
import SignupForm, { SignupDataInterface } from "./signup-form/SignupForm";
import PrimaryBtn from "../../UI/buttons/primary-btn/PrimaryBtn";

const SignupComponent = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState<SignupDataInterface["formData"]>({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const title = "Create your PopX account";

  const clickHandler = (e: any) => {
    e.preventDefault();

    dispatch(signupAction.storeSignupDetailHandler(formData));

    navigate("/profile");
  };

  const getSignUpDataHandler = useCallback(
    (signupData: SignupDataInterface) => {
      setIsFormValid(signupData.formIsValid as boolean);
      setFormData(signupData.formData);
    },
    []
  );

  return (
    <div className={styles["signup-component"]}>
      <div className={styles["signup-content"]}>
        <Typography title={title} className={styles["typography"]} />
        <SignupForm onSignupForm={getSignUpDataHandler} />
      </div>
      <div className={styles["create-account"]}>
        <PrimaryBtn
          onClick={clickHandler}
          buttonText="Create Account"
          disabled={!isFormValid}
        />
      </div>
    </div>
  );
};

export default SignupComponent;
