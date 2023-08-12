//^ styles
import styles from "./SignupComponent.module.scss";

//^ components
import Typography from "./typography/Typography";
import SignupForm from "./signup-form/SignupForm"

const SignupComponent = () => {
  const title = "Create your PopX account";

  return (
    <div className={styles["signup-component"]}>
      <Typography title={title} className={styles["typography"]} />
      <SignupForm />
    </div>
  );
};

export default SignupComponent;
