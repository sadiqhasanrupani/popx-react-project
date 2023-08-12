//^ styles
import styles from "./AgencyEnquiry.module.scss";

//^ components
import Label from "../../../../UI/label/Label";
import Radio from "../../../../UI/input/Radio";

const AgencyEnquiry = () => {
  return (
    <div className={styles["agency-enquiry"]}>
      <Label id="enquiry-agency" required={true} text="Are you an Agency?" />
      <div className={styles["choice-input"]}>
        <Radio id="agencyYes" name="agency" value={"Yes"} text="Yes" required />
        <Radio id="agencyNo" name="agency" value={"No"} text="No" required />
      </div>
    </div>
  );
};

export default AgencyEnquiry;
