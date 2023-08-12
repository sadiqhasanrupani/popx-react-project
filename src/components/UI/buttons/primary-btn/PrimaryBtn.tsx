import React, { ButtonHTMLAttributes } from "react";
import styles from "./PrimaryBtn.module.scss";

export interface PrimaryBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  className,
  buttonText,
  onChange,
  onClick,
  onFocus,
  disabled
}) => {
  return (
    <button
      className={`${styles["primary-btn"]} ${className}`}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryBtn;
