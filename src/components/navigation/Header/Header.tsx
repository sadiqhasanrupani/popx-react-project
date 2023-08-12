import { FC, HTMLAttributes } from "react";

//^ styles
import styles from "./Header.module.scss";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${styles["header"]} ${className}`}>
      <p>Account Settings</p>
    </header>
  );
};

export default Header;
