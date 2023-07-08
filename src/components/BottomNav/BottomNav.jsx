import React from "react";

import styles from "./BottomNav.module.scss";

const BottomNav = () => {
  return (
    <ul className={styles["infoSection-bottomNav"]}>
      <li className={`${styles["navItem"]} ${styles["exp"]}`}>Experience</li>
      <li className={`${styles["navItem"]} ${styles["proj"]}`}>Projects</li>
      <li className={`${styles["navItem"]} ${styles["skills"]}`}>Skills</li>
      <li className={`${styles["navItem"]} ${styles["cont"]}`}>Contact</li>
    </ul>
  );
};

export default BottomNav;
