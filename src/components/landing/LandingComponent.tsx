//^ dependencies
import { useNavigate } from "react-router-dom";

//^ styles
import styles from "./LandingComponent.module.scss";

//^ components
import PrimaryBtn from "../UI/buttons/primary-btn/PrimaryBtn";
import SecondaryBtn from "../UI/buttons/secondary-btn/SecondaryBtn";

const LandingComponent = () => {
  const navigate = useNavigate();

  //^ signup navigation handler
  const signupNavigationHandler = () => {
    navigate("/signup");
  };

  //^ login navigation handler
  const loginNavigationHandler = () => {
    navigate("/login");
  };

  return (
    <div className={styles["landing-component"]}>
      <div className={styles.typography}>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className={styles["create-account"]}>
        <PrimaryBtn
          onClick={signupNavigationHandler}
          buttonText={"Create Account"}
        />
        <SecondaryBtn
          onClick={loginNavigationHandler}
          buttonText="Already Registered? Login"
        />
      </div>
    </div>
  );
};

export default LandingComponent;
