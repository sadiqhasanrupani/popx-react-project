import React from "react";
import { PrimaryBtnProps } from "../primary-btn/PrimaryBtn";

//^ styles
import styles from "./SecondaryBtn.module.scss";

//^ prop interface.
interface SecondaryBtnProps extends PrimaryBtnProps {}

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({
  className,
  buttonText,
  onChange,
  onClick,
  onFocus,
}) => {
  return (
    <button
      className={`${styles["secondary-btn"]} ${className}`}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
    >
      {buttonText}
    </button>
  );
};

export default SecondaryBtn;
