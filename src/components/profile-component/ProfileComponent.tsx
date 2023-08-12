//^ styles
import styles from "./ProfileComponent.module.scss";

//^ components
import ProfileImg from "./profile-img/ProfileImg";
import ProfileInfo from "./profile-info/ProfileInfo";
import ProfileDescription from "./profile-description/ProfileDescription";
import Border from "./border/Border";

const ProfileComponent = () => {
  return (
    <>
      <main className={styles["profile-component"]}>
        <div className={styles["content"]}>
          <div className={styles["item-1"]}>
            <ProfileImg />
            <ProfileInfo />
          </div>
          <ProfileDescription />
        </div>
      </main>
      <Border />
    </>
  );
};

export default ProfileComponent;
