import LandingComponent from "../../components/landing/LandingComponent";

import styles from "./Landing.module.scss";

const Landing: React.FC = () => {
  return (
    <main className={styles["main"]}>
      <LandingComponent />
    </main>
  );
};

export default Landing;
