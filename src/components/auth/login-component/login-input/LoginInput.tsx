import { FC, Fragment, HTMLAttributes } from "react";

//^ styles
import styles from "./LoginInput.module.scss";

//^ interface
import { SignupContent } from "../../signup-component/signup-form/SignupForm";
export interface LoginInputProps extends HTMLAttributes<HTMLDivElement> {
  INPUT_CONTENT?: Array<SignupContent>;
}

//^ UI
import Input from "../../../UI/input/Input";

const LoginInput: FC<LoginInputProps> = ({ INPUT_CONTENT }) => {
  return (
    <div className={styles["login-input"]}>
      {INPUT_CONTENT?.map((content) => {
        return (
          <Fragment key={content.id}>
            <Input
              type={content.type}
              label={content.label}
              placeholder={content.placeholder}
              required={content.required}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default LoginInput;
