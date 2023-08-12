import React, { useEffect, useState } from "react";

//^ styles
import styles from "./AgencyEnquiry.module.scss";

//^ components
import Label from "../../../../UI/label/Label";
import Radio from "../../../../UI/input/Radio";

interface AgencyEnquiryProps {
  onAgencyEnquiry?: any;
}

const AgencyEnquiry: React.FC<AgencyEnquiryProps> = ({ onAgencyEnquiry }) => {
  const [isRadioClicked, setIsRadioClicked] = useState(false);
  const [radioValue, setRadioValue] = useState<string | null>(null);

  const handleRadioChange = (value: string) => {
    setIsRadioClicked(true);
    setRadioValue(value);
  };

  const isRadioYesValid = isRadioClicked && radioValue === "Yes";
  const isRadioNoValid = isRadioClicked && radioValue === "No";
  const isRadioChecked = isRadioYesValid || isRadioNoValid;

  useEffect(() => {
    onAgencyEnquiry({ isRadioChecked, radioValue });
  }, [isRadioChecked, radioValue]);

  return (
    <div className={styles["agency-enquiry"]}>
      <Label id="enquiry-agency" required={true} text="Are you an Agency?" />
      <div className={styles["choice-input"]}>
        <Radio
          id="agencyYes"
          name="agency"
          value="Yes"
          text="Yes"
          required
          checked={isRadioYesValid}
          onChange={() => handleRadioChange("Yes")}
        />
        <Radio
          id="agencyNo"
          name="agency"
          value="No"
          text="No"
          required
          checked={isRadioNoValid}
          onChange={() => handleRadioChange("No")}
        />
      </div>
    </div>
  );
};

export default AgencyEnquiry;
