import React from "react";
import { IoClose } from "react-icons/io5";

import styles from "./MobNav.module.scss";
import { scrollIntoView } from "../../helper/helper";
import { SECTION_IDS } from "../../common/constants";

const MobNav = ({ toggleMobileNav }) => {
  const scrollHandler = (sectionID) => {
    scrollIntoView(sectionID);
    toggleMobileNav();
  };

  return (
    <nav className={styles["mobNav"]}>
      <div className={styles["mobNav-close"]}>
        <IoClose
          size="1.75rem"
          title="mob-nav-close"
          onClick={toggleMobileNav}
          color={"white"}
        />
      </div>
      <ol className={styles["mobNav-parent"]}>
        <li className={styles["mobNav-parent-item"]}>
          <span>About</span>
          <hr />
        </li>
        <li className={styles["mobNav-parent-item"]}>
          <span>Experience</span>
          <hr />
        </li>
        <li className={styles["mobNav-parent-item"]}>
          <span>Projects</span>
          <hr />
        </li>
        <li className={styles["mobNav-parent-item"]}>
          <span>Skills</span>
          <hr />
        </li>
        <li
          className={styles["mobNav-parent-item"]}
          onClick={scrollHandler.bind(this, SECTION_IDS.CONTACT_SECTION)}
        >
          <span>Contact</span>
          <hr />
        </li>
      </ol>
    </nav>
  );
};

export default MobNav;
