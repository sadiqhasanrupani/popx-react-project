import { FC, HTMLAttributes } from "react";

//^ styles
import styles from "./ProfileInfo.module.scss";

interface ProfileInfoProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  email?: string;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ className, name, email }) => {
  return (
    <div className={`${styles["profile-info"]} ${className}`}>
      <p>{name ? name : "Marry Doe"}</p>
      <p>{name ? name : "Marry@Gmail.com"}</p>
    </div>
  );
};

export default ProfileInfo;
