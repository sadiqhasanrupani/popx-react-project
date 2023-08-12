import styles from "./ProfileImg.module.scss";

import LadyImage from "../../../assets/png/lady-image/big-lady-image.png";
import CameraImage from "../../../assets/png/camera-image/camera.png";

const ProfileImg = () => {
  return (
    <div className={styles["profile-img"]}>
      <img src={LadyImage} alt="lady-img" className={styles["lady-img"]} />
      <img
        src={CameraImage}
        alt="camera-img"
        className={styles["camera-img"]}
      />
    </div>
  );
};

export default ProfileImg;
