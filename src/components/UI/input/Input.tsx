import { FC, InputHTMLAttributes } from "react";

//^ styles
import styles from "./Input.module.scss";

//^ interface props
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({
  className,
  onClick,
  onBlur,
  onChange,
  disabled,
  required,
  autoComplete,
  id,
  name,
  type,
  label,
  placeholder,
}) => {
  return (
    <div className={styles["input-div"]}>
      <label htmlFor={id}>
        <div className={styles["label-div"]}>
          <p>{label}</p>
          {required && <span>*</span>}
        </div>
      </label>
      <input
        type={type ? type : "text"}
        id={id}
        name={name}
        autoComplete={autoComplete}
        required={required}
        onClick={onClick}
        onBlur={onBlur}
        onChange={onChange}
        className={`${styles["input"]} ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
