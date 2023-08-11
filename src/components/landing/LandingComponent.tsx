import PrimaryBtn from "../UI/buttons/primary-btn/PrimaryBtn";
import SecondaryBtn from "../UI/buttons/secondary-btn/SecondaryBtn";
import styles from "./LandingComponent.module.scss";

const LandingComponent = () => {
  return (
    <div className={styles["landing-component"]}>
      <div className={styles.typography}>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className={styles["create-account"]}>
        <PrimaryBtn buttonText={"Create Account"} />
        <SecondaryBtn buttonText="Already Registered? Login" />
      </div>
    </div>
  );
};

export default LandingComponent;
