import { FC, LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  text?: string;
  id?: string;
}

//^ styles
import styles from "./Label.module.scss";

const Label: FC<LabelProps> = ({ required, text, id }) => {
  return (
    <label htmlFor={id} className={styles["label"]}>
      <p>{text}</p>
      {required && <span>*</span>}
    </label>
  );
};

export default Label;
