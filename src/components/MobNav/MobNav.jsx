import React from "react";
import { IoClose } from "react-icons/io5";

import styles from "./MobNav.module.scss";

const MobNav = ({ toggleMobileNav }) => {
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
          <a href="">About</a>
          <hr />
        </li>
        <li className={styles["mobNav-parent-item"]}>
          <a href="">Experience</a>
          <hr />
        </li>
        <li className={styles["mobNav-parent-item"]}>
          <a href="">Projects</a>
          <hr />
        </li>
        <li className={styles["mobNav-parent-item"]}>
          <a href="">Skills</a>
          <hr />
        </li>
        <li className={styles["mobNav-parent-item"]}>
          <a href="">Contact</a>
          <hr />
        </li>
      </ol>
    </nav>
  );
};

export default MobNav;
