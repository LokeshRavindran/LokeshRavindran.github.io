import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";

import styles from "./Header.module.scss";
import Resume from "../Resume/Resume.jsx";

const Header = ({ isMobile, mobileNav, toggleMobileNav }) => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header-left"]}>
        <img src={require("../../assets/logo.png")} alt="logo" />
      </div>
      <div className={styles["header-right"]}>
        {isMobile ? (
          !mobileNav && (
            <CgMenuRightAlt
              size="1.75rem"
              title="mob-nav-open"
              onClick={toggleMobileNav}
              className={styles["mobileNav"]}
              color={"white"}
            />
          )
        ) : (
          <Resume />
        )}
      </div>
    </div>
  );
};

export default Header;
