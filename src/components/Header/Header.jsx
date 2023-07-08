import React from "react";

import styles from "./Header.module.scss";
import Resume from "../Resume/Resume.jsx";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header-left"]}>
        <img src={require("../../assets/logo.png")} alt="logo" />
      </div>
      <div className={styles["header-right"]}>
        <Resume />
      </div>
    </div>
  );
};

export default Header;
