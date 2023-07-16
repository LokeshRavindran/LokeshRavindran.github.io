import React from "react";

import styles from "./BottomNav.module.scss";
import { SECTION_IDS } from "../../common/constants";
import { scrollIntoView } from "../../helper/helper";

const BottomNav = () => {
  const scrollHandler = (sectionID) => {
    scrollIntoView(sectionID);
  };

  return (
    <ul className={styles["infoSection-bottomNav"]}>
      <li className={`${styles["navItem"]} ${styles["exp"]}`}>Experience</li>
      <li className={`${styles["navItem"]} ${styles["proj"]}`}>Projects</li>
      <li className={`${styles["navItem"]} ${styles["skills"]}`}>Skills</li>
      <li
        className={`${styles["navItem"]} ${styles["cont"]}`}
        onClick={scrollHandler.bind(this, SECTION_IDS.CONTACT_SECTION)}
      >
        Contact
      </li>
    </ul>
  );
};

export default BottomNav;
