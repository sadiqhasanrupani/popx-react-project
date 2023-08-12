import { useState, ChangeEvent, FocusEvent } from "react";

interface UseInputProps {
  validateValue: (value: string) => boolean;
}

interface UseInputResult {
  enteredValue: string;
  isValid: boolean;
  hasError: boolean;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler: (e: FocusEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const useInput = ({ validateValue }: UseInputProps): UseInputResult => {
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
