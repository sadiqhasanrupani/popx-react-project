import { useState, ChangeEvent, FocusEvent } from "react";

interface UseInputProps {
  validateValue: (value: string) => boolean;
}

const useInput = ({ validateValue }: UseInputProps) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValidValue = validateValue(enteredValue);
  const hasError = !enteredValidValue && isTouched;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setEnteredValue(e.target.value.trim());
    }

    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    isValid: enteredValidValue,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
