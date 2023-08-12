import React, { FC } from "react";

//^ styles
import styles from "./Radio.module.scss";

import { InputProps } from "./Input";
import Label from "../label/Label";

interface RadioProps extends InputProps {
  text?: string;
  checked?: boolean;
  onChange?: () => void;
}

const Radio: FC<RadioProps> = ({
  name,
  id,
  className,
  onClick,
  onBlur,
  value,
  text,
  checked,
  onChange,
  required,
}) => {
  return (
    <div className={styles.radioDiv}>
      <input
        type="radio"
        name={name}
        id={id}
        className={`${className} ${styles.radioInput}`}
        onClick={onClick}
        onBlur={onBlur}
        value={value}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <label
        htmlFor={id}
        className={`${styles.radioCustom} ${checked ? styles.checked : ""}`}
      ></label>
      <Label text={text} id={id} className={styles.label} />
    </div>
  );
};

export default Radio;
