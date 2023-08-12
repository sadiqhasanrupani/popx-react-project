import { FC, HTMLAttributes } from "react";

//^ styles
import styles from "./ProfileDescription.module.scss";

//^ props interface
export interface ProfileDescriptionProps
  extends HTMLAttributes<HTMLDivElement> {
  description?: string;
}

const ProfileDescription: FC<ProfileDescriptionProps> = ({ description }) => {
  return (
    <div className={styles["profile-description"]}>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default ProfileDescription;
