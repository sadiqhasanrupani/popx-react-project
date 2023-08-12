import { FC } from "react";
import Input from "../../../../UI/input/Input";

import { SignupContent } from "../SignupForm";

interface SignupInputProps extends SignupContent {}

const SignupInput: FC<SignupInputProps> = ({
  type,
  label,
  placeholder,
  required,
}) => {
  return (
    <>
      {required ? (
        <Input type={type} label={label} placeholder={placeholder} required />
      ) : (
        <Input type={type} label={label} placeholder={placeholder} />
      )}
    </>
  );
};

export default SignupInput;
